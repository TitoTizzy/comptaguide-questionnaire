-- Run once in the Supabase SQL Editor. No personal emails or passwords here.
begin;
create table public.cg_questionnaire_members (
 user_id uuid primary key references auth.users(id) on delete cascade,
 person text unique not null check(person in ('myrtho','cluvens','wilbert'))
);
create table public.cg_questionnaire_answers (
 person text primary key references public.cg_questionnaire_members(person),
 answers jsonb not null default '{}'::jsonb check(jsonb_typeof(answers)='object' and octet_length(answers::text)<=500000),
 revision integer not null default 1,
 updated_at timestamptz not null default now()
);
alter table public.cg_questionnaire_members enable row level security;
alter table public.cg_questionnaire_answers enable row level security;
revoke all on public.cg_questionnaire_members, public.cg_questionnaire_answers from anon, authenticated;
grant select on public.cg_questionnaire_members, public.cg_questionnaire_answers to authenticated;
create policy member_self on public.cg_questionnaire_members for select to authenticated using(user_id=(select auth.uid()));
create policy answers_for_members on public.cg_questionnaire_answers for select to authenticated
 using(exists(select 1 from public.cg_questionnaire_members where user_id=(select auth.uid())));

-- No direct write grant: ownership and optimistic concurrency are checked here.
create function public.cg_publish_answers(p_answers jsonb,p_expected_revision integer)
returns integer language plpgsql security definer set search_path='' as $$
declare who text; current_revision integer; item record;
begin
 select person into who from public.cg_questionnaire_members where user_id=auth.uid();
 if who is null then raise exception 'CG_NOT_MEMBER' using errcode='42501'; end if;
 if jsonb_typeof(p_answers) is distinct from 'object' or octet_length(p_answers::text)>500000 then raise exception 'CG_INVALID'; end if;
 for item in select * from jsonb_each(p_answers) loop
  if jsonb_typeof(item.value)<>'string' or length(item.value#>>'{}')>10000 or item.key not in
  ('identite','domicile','identifiants','matrimonial','contact','signature','nature','versement','frais','siege','duree','plateforme','finance','habilitation','propriete','conseil','direction','mandat','roles','representation','banque','plafonds','reunions','unanimite','desaccord','remuneration','benefices','rapports','cession','valeur','deces','arret','contrats','professionnels','notes') then raise exception 'CG_INVALID'; end if;
 end loop;
 -- Lock the stable membership row, including for a first publication.
 perform 1 from public.cg_questionnaire_members where person=who for update;
 select revision into current_revision from public.cg_questionnaire_answers where person=who;
 if p_expected_revision is distinct from coalesce(current_revision,0) then raise exception 'CG_CONFLICT'; end if;
 insert into public.cg_questionnaire_answers(person,answers,revision,updated_at)
 values(who,p_answers,coalesce(current_revision,0)+1,now())
 on conflict(person) do update set answers=excluded.answers,revision=excluded.revision,updated_at=excluded.updated_at;
 return coalesce(current_revision,0)+1;
end;
$$;
revoke all on function public.cg_publish_answers(jsonb,integer) from public, anon;
grant execute on function public.cg_publish_answers(jsonb,integer) to authenticated;
commit;
