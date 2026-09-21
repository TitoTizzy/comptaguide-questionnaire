'use strict';
(()=>{
 const cfg=window.COMPTAGUIDE_SHARED||{}, box=document.createElement('section');box.className='card shared';
 box.innerHTML='<p class="eyebrow">ESPACE PARTAGÉ DES ACTIONNAIRES</p><h2>Consulter les réponses de chacun</h2><p id="sharedStatus" role="status"></p><form id="sharedLogin" hidden><label for="loginEmail">Courriel de votre compte</label><input id="loginEmail" type="email" autocomplete="username" required><label for="loginPassword">Mot de passe</label><input id="loginPassword" type="password" autocomplete="current-password" required><button class="primary" type="submit">Se connecter</button></form><div id="sharedActions" hidden><button id="publishAnswers" class="primary">Partager mes réponses</button><button id="refreshAnswers">Actualiser les réponses partagées</button><button id="loadShared">Reprendre ma version partagée</button><button id="logout">Se déconnecter</button><p>Toutes les réponses que vous partagez seront visibles par les trois actionnaires. Seul leur auteur peut les modifier. Les brouillons restent privés jusqu’au partage.</p></div>';
 document.querySelector('.tabs').before(box);
 const status=t=>{$('sharedStatus').textContent=t;};
 if(!cfg.url||!cfg.publishableKey){status('Le partage en ligne reste à connecter. Pour le moment, utilisez les fichiers de réponses.');return;}
 let base;
 try{base=new URL(cfg.url);if(base.protocol!=='https:'||!base.hostname.endsWith('.supabase.co')||base.pathname!=='/')throw Error();}catch{status('Configuration du partage invalide. Contactez Myrtho.');return;}
 let session=null,member=null,revision=0,refreshPromise=null,busy=false;
 const locked=()=>{$('answerView').hidden=true;$('collectView').hidden=true;document.querySelector('.tabs').hidden=true;$('sharedActions').hidden=true;$('sharedLogin').hidden=false;};
 locked();status('Connectez-vous pour répondre et consulter les contributions des trois actionnaires.');
 async function raw(path,opts={}){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
  try{const response=await fetch(base.origin+path,{...opts,headers:{apikey:cfg.publishableKey,'Content-Type':'application/json',...(session?{Authorization:'Bearer '+session.access_token}:{}),...opts.headers},signal:controller.signal});const data=await response.json().catch(()=>null);if(!response.ok){const error=Error(response.status===401?'Session expirée. Reconnectez-vous ; votre brouillon reste disponible.':data?.message?.includes('CG_CONFLICT')?'Une autre session a modifié vos réponses. Téléchargez votre brouillon, puis reprenez la version partagée avant de republier.':'Action impossible. Vérifiez votre connexion, vos identifiants ou vos droits d’accès.');error.status=response.status;throw error;}return data;}finally{clearTimeout(timer);}
 }
 async function api(path,opts){if(!session)throw Error('Connectez-vous d’abord.');if(session.expires_at<Date.now()+60000){refreshPromise??=raw('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:JSON.stringify({refresh_token:session.refresh_token})}).then(setSession).finally(()=>{refreshPromise=null;});await refreshPromise;}return raw(path,opts);}
 function setSession(data){session={...data,expires_at:Date.now()+data.expires_in*1000};return session;}
 async function rows(){const data=await api('/rest/v1/cg_questionnaire_answers?select=person,answers,revision,updated_at');if(!Array.isArray(data))throw Error('Réponses indisponibles.');return data.map(r=>({...r,answers:validate({app:'comptaguide-statuts',version:1,person:r.person,answers:r.answers}).answers}));}
 function setComparison(data){collected={};for(const r of data)collected[r.person]={answers:r.answers};renderSummary();$('importState').textContent=data.length+' / 3 contributions partagées · actualisé à '+new Date().toLocaleTimeString('fr-FR')+'.';$('summary').querySelectorAll('.reply p').forEach(n=>{if(n.textContent==='Fichier non importé')n.textContent='Pas encore partagé';});}
 async function task(fn){if(busy)return;busy=true;box.querySelectorAll('button').forEach(b=>b.disabled=true);try{await fn();}catch(e){status(e.name==='AbortError'?'Connexion trop lente. Réessayez ; votre brouillon est conservé.':e.message);}finally{busy=false;box.querySelectorAll('button').forEach(b=>b.disabled=false);}}
 $('sharedLogin').onsubmit=e=>{e.preventDefault();task(async()=>{
  session=null;member=null;
  const data=await raw('/auth/v1/token?grant_type=password',{method:'POST',body:JSON.stringify({email:$('loginEmail').value.trim(),password:$('loginPassword').value})});setSession(data);$('loginPassword').value='';
  try{const members=await api('/rest/v1/cg_questionnaire_members?select=person');if(members.length!==1||!Object.hasOwn(PEOPLE,members[0].person))throw Error('Ce compte ne fait pas partie des trois actionnaires autorisés.');member=members[0].person;
   const all=await rows(),own=all.find(r=>r.person===member);revision=own?.revision||0;
   if(!Object.values(drafts[member]||{}).some(Boolean))drafts[member]=own?.answers||{};
   person=member;step=0;$('person').value=person;$('person').disabled=true;render();persist();
   $('sharedLogin').hidden=true;$('sharedActions').hidden=false;document.querySelector('.tabs').hidden=false;showMode(false);setComparison(all);status('Connecté : '+PEOPLE[member]+'. Vos modifications seront visibles après « Partager mes réponses ».');
  }catch(e){session=null;member=null;throw e;}
 });};
 $('publishAnswers').onclick=()=>task(async()=>{if(person!==member)throw Error('Vous pouvez seulement publier vos propres réponses.');const snapshot=sanitizeAnswers({...drafts[member]});const result=await api('/rest/v1/rpc/cg_publish_answers',{method:'POST',body:JSON.stringify({p_answers:snapshot,p_expected_revision:revision})});revision=result;status('Vos réponses ont été enregistrées et sont visibles par les deux autres actionnaires.');try{setComparison(await rows());}catch{status('Vos réponses sont enregistrées. Actualisez pour recharger la comparaison.');}});
 $('refreshAnswers').onclick=()=>task(async()=>{setComparison(await rows());showMode(true);status('Réponses partagées actualisées. Votre brouillon n’a pas été remplacé.');});
 $('loadShared').onclick=()=>task(async()=>{if(!confirm('Remplacer votre brouillon par votre dernière version partagée ? Téléchargez-le d’abord si vous souhaitez le conserver.'))return;const all=await rows(),own=all.find(r=>r.person===member);drafts[member]=own?.answers||{};revision=own?.revision||0;person=member;$('person').value=person;render();persist();setComparison(all);showMode(false);status('Votre dernière version partagée a été reprise.');});
 $('logout').onclick=()=>task(async()=>{try{await raw('/auth/v1/logout',{method:'POST'});}catch{}session=null;member=null;revision=0;collected={};drafts={};person='';$('person').value='';$('person').disabled=false;$('remember').checked=false;try{localStorage.removeItem(KEY);}catch{}$('questions').replaceChildren();$('summary').replaceChildren();$('printArea').replaceChildren();render();locked();status('Déconnecté. Les réponses partagées sont conservées dans l’espace privé ; les brouillons locaux ont été effacés.');});
 // Shared mode never confuses imported files with the authenticated comparison.
 $('imports').closest('label').hidden=true;$('restore').closest('label').hidden=true;
 $('collectTab').textContent='Réponses des actionnaires';
 const oldTab=$('collectTab').onclick;$('collectTab').onclick=()=>{oldTab();$('refreshAnswers').click();};
 $('collectView').querySelector('h2').textContent='Les réponses partagées des trois actionnaires';
 $('collectView').querySelector('h2 + p').textContent='Consultez les contributions enregistrées dans l’espace privé. Actualisez pour voir les dernières modifications.';
 document.querySelector('.delivery p').textContent='Partagez vos réponses avec le bouton de l’espace partagé. Vous pouvez aussi télécharger une copie personnelle.';
})();
