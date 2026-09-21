'use strict';
const PEOPLE={myrtho:'Bui Gerry Myrtho CHARLES',cluvens:'Cluvens AMEDEE',wilbert:'Wilbert CASIMIR'};
const SECTIONS=[
 ['Votre fiche','Les noms et participations sont déjà renseignés. Les justificatifs seront remis séparément.',[
 ['identite','Quels compléments d’identité restent à fournir ?','Date et lieu de naissance, nationalité, profession ; correction du nom seulement si nécessaire.'],
 ['domicile','Quelle est votre adresse personnelle complète ?'],
 ['identifiants','Quels sont vos NIF et NIU ?','Vous pouvez répondre « À transmettre confidentiellement au notaire ».','others'],
 ['matrimonial','Quelle est votre situation matrimoniale et, le cas échéant, votre régime matrimonial ?','','others'],
 ['contact','Quelles coordonnées utiliser pour vos convocations ?','','others'],
 ['signature','Serez-vous disponible pour signer en Haïti ou faudra-t-il organiser une procuration ?']]],
 ['Apports et siège','Capital envisagé : 832 USD. Myrtho : 282,88 USD ; Cluvens et Wilbert : 274,56 USD chacun.',[
 ['nature','Sous quelle forme apporterez-vous votre part : argent ou autres biens ?','Si vous envisagez un bien ou une créance, précisez son propriétaire et les justificatifs disponibles.'],
 ['versement','Quand pourrez-vous verser votre apport ? En totalité dès la constitution ou selon un calendrier ?'],
 ['frais','Qui avancera les frais de constitution et comment prévoir leur remboursement ?'],
 ['siege','Quelle adresse exacte retenir pour le siège, et qui fournira le justificatif d’occupation ?','Adresse figurant dans les documents : 47A, Rue Chavannes prolongée, Berthé, Pétion-Ville.'],
 ['duree','Quelle durée souhaitez-vous pour la société ?']]],
 ['Activités et actifs','Les services comptables déjà décrits sont acquis comme base de rédaction. Précisez leur périmètre.',[
 ['plateforme','La plateforme sera-t-elle aussi vendue séparément par abonnement ou licence ?'],
 ['finance','Prévoyez-vous du crédit, du placement pour des tiers, de la collecte de fonds ou des services de paiement ?','Indiquez « Non » si l’activité reste centrée sur les services comptables et les outils numériques.'],
 ['habilitation','Qui assumera la responsabilité professionnelle de l’audit, de la certification et de la signature ?','Préciser les justificatifs disponibles ; les habilitations seront vérifiées avec les professionnels compétents.'],
 ['propriete','Qui possède les logos, domaines et logiciels, et comment seront-ils mis à disposition de la société ?']]],
 ['Direction et pouvoirs','Indiquez vos propositions. Elles seront comparées avec celles des deux autres actionnaires.',[
 ['conseil','Qui souhaitez-vous voir siéger au conseil d’administration ?'],
 ['direction','Qui proposez-vous à la présidence du conseil et à la direction générale ?'],
 ['mandat','Quelle durée souhaitez-vous pour les mandats ?'],
 ['roles','Comment répartir les responsabilités opérationnelles entre vous ?'],
 ['representation','Qui pourra signer les contrats, recruter et représenter la société ?'],
 ['banque','Qui pourra effectuer les opérations bancaires ? À partir de quel montant faudra-t-il deux signatures ?'],
 ['plafonds','Quel montant un dirigeant pourra-t-il engager seul ? Quels engagements devront être approuvés collectivement ?']]],
 ['Décisions et résultats','Séparez la rémunération du travail et les distributions liées à la détention d’actions.',[
 ['reunions','À quelle fréquence souhaitez-vous vous réunir ? Faut-il permettre la participation à distance ?'],
 ['unanimite','Quelles décisions souhaitez-vous soumettre à l’accord des trois actionnaires ?','Ces préférences devront être traduites en clauses juridiquement valides.'],
 ['desaccord','Comment résoudre un désaccord persistant ?'],
 ['remuneration','Qui sera rémunéré pour son travail, selon quelle formule et avec quelle approbation ?'],
 ['benefices','Quelle politique souhaitez-vous pour les bénéfices : réinvestissement, réserve, distributions ?'],
 ['rapports','Quels rapports financiers chaque actionnaire devra-t-il recevoir, et à quelle fréquence ?']]],
 ['Départ et engagements','Prévoir la continuité de la société et les relations entre actionnaires.',[
 ['cession','En cas de vente, les autres actionnaires auront-ils priorité ? L’entrée d’un tiers nécessitera-t-elle leur accord ?'],
 ['valeur','Comment déterminer la valeur des actions lors d’un départ ?'],
 ['deces','Que prévoir en cas de décès ou d’incapacité d’un actionnaire ?'],
 ['arret','Un actionnaire qui cesse de travailler pour ComptaGuide conservera-t-il ses actions ?'],
 ['contrats','Le contrat Lyly’s est-il signé, par qui, et quels engagements devront être repris par la société ?','Indiquez aussi les autres contrats ou engagements existants.'],
 ['professionnels','Un avocat et un notaire ont-ils été choisis ? Qui coordonnera le dossier ?'],
 ['notes','Autres propositions ou points à discuter lors de la réunion ?','Facultatif.']]]
];
const $=id=>document.getElementById(id), KEY='comptaguide-questionnaire-v1';
let drafts={}, person='', step=0, collected={};
const visibleQuestions=p=>SECTIONS.flatMap(s=>s[2]).filter(q=>q[3]!=='others'||p!=='myrtho');
const allowed=new Set(SECTIONS.flatMap(s=>s[2].map(q=>q[0])));
const say=t=>{$('message').textContent=t;};
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function sanitizeAnswers(a){if(!a||typeof a!=='object'||Array.isArray(a))throw Error('Réponses non valides.');const result={};for(const [k,v]of Object.entries(a)){if(!allowed.has(k)||typeof v!=='string'||v.length>10000)throw Error('Question inconnue ou réponse non valide.');result[k]=v;}return result;}
function validate(data){if(!data||data.app!=='comptaguide-statuts'||data.version!==1||!Object.hasOwn(PEOPLE,data.person))throw Error('Ce fichier ne correspond pas au questionnaire ComptaGuide.');return{app:data.app,version:1,person:data.person,answers:sanitizeAnswers(data.answers),exportedAt:typeof data.exportedAt==='string'?data.exportedAt:''};}
function persist(){if(!$('remember').checked){$('saveState').textContent='Réponses dans cette page uniquement. Téléchargez-les avant de quitter.';return;}try{localStorage.setItem(KEY,JSON.stringify({drafts,person,step}));$('saveState').textContent='Brouillon enregistré sur cet appareil à '+new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})+'.';}catch{$('saveState').textContent='Sauvegarde indisponible. Téléchargez vos réponses avant de quitter.';}}
function answered(p){return visibleQuestions(p).filter(q=>(drafts[p]?.[q[0]]||'').trim()).length;}
function updateProgress(){const total=visibleQuestions(person).length,n=answered(person);$('count').textContent=n+' / '+total+' renseignées';$('progress').value=Math.round(n/total*100);}
function render(){ $('workspace').hidden=!person;if(!person)return;drafts[person]??={};$('steps').replaceChildren();SECTIONS.forEach((s,i)=>{const b=el('button',undefined,i===step?'active':'');b.append(el('span',String(i+1).padStart(2,'0')),document.createTextNode(s[0]));b.setAttribute('aria-current',i===step?'step':'false');b.onclick=()=>{step=i;render();persist();$('sectionTitle').focus();};$('steps').append(b);});
 $('stepLabel').textContent='ÉTAPE '+(step+1)+' SUR '+SECTIONS.length;$('sectionTitle').textContent=SECTIONS[step][0];$('sectionHint').textContent=SECTIONS[step][1]+(step===0&&person==='myrtho'?' Myrtho : vos identifiants, coordonnées et situation matrimoniale sont déjà au dossier. Signalez seulement un changement dans les notes finales.':'');$('questions').replaceChildren();
 for(const q of SECTIONS[step][2]){if(q[3]==='others'&&person==='myrtho')continue;const box=el('div',undefined,'question'),label=el('label',q[1]);label.htmlFor=q[0];box.append(label);if(q[2]){const hint=el('small',q[2]);hint.id=q[0]+'-hint';box.append(hint);}const input=el('textarea');input.id=q[0];input.name=q[0];input.maxLength=10000;input.rows=3;input.placeholder='Votre réponse, ou « À discuter ensemble »';input.value=drafts[person][q[0]]||'';if(q[2])input.setAttribute('aria-describedby',q[0]+'-hint');input.oninput=()=>{drafts[person][q[0]]=input.value;persist();updateProgress();};box.append(input);$('questions').append(box);}
 $('prev').disabled=step===0;$('next').textContent=step===SECTIONS.length-1?'Revoir et télécharger':'Suivant';updateProgress();}
function packet(){return{app:'comptaguide-statuts',version:1,person,answers:{...drafts[person]},exportedAt:new Date().toISOString()};}
function download(data,name){const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'})),a=el('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);}
function doExport(){download(packet(),'ComptaGuide-reponses-'+person+'.json');say('Fichier préparé : transmettez-le à Myrtho. '+answered(person)+' réponses renseignées ; les autres restent à compléter ou à discuter. Aucun envoi automatique.');}
function showMode(collect){$('answerView').hidden=collect;$('collectView').hidden=!collect;$('answerTab').classList.toggle('active',!collect);$('collectTab').classList.toggle('active',collect);say('');}
function renderSummary(){const root=$('summary');root.replaceChildren();for(const [p,data]of Object.entries(collected)){const d=el('span',PEOPLE[p]+' · '+visibleQuestions(p).filter(q=>(data.answers[q[0]]||'').trim()).length+' réponses','badge');root.append(d);}if(!Object.keys(collected).length)return;
 for(const s of SECTIONS){root.append(el('h2',s[0]));for(const q of s[2]){const article=el('article',undefined,'compare');article.append(el('h3',q[1]));const cols=el('div',undefined,'columns');for(const p of Object.keys(PEOPLE)){const card=el('div',undefined,'reply');card.append(el('b',PEOPLE[p]),el('p',q[3]==='others'&&p==='myrtho'?'Déjà au dossier':!collected[p]?'Fichier non importé':collected[p].answers[q[0]]?.trim()||'Non renseigné'));cols.append(card);}article.append(cols);root.append(article);}}
}
async function readFile(file){if(file.size>1000000)throw Error('Fichier trop volumineux (maximum 1 Mo).');return validate(JSON.parse(await file.text()));}
function printData(records){const root=$('printArea');root.replaceChildren(el('h1','ComptaGuide Financials — Réponses préparatoires'),el('p','Capital envisagé : 832 USD · Myrtho 34 % · Cluvens 33 % · Wilbert 33 %\nContrat Lyly’s : estimation annuelle de 2 392 USD = mise en place 832 USD + tenue de livres 1 560 USD (3 h × 52 semaines × 10 USD), hors honoraires du comptable agréé et heures supplémentaires.\nHonoraires d’avocat communiqués : 1 500 USD. Frais de notaire, DGI, MCI, publication et autres débours en supplément, à chiffrer.\nPropositions individuelles — validation collective et juridique à effectuer.'));
 for(const s of SECTIONS){root.append(el('h2',s[0]));for(const q of s[2]){const article=el('article');article.append(el('h3',q[1]));for(const [p,data]of Object.entries(records)){if(q[3]==='others'&&p==='myrtho')continue;article.append(el('b',PEOPLE[p]),el('p',data.answers[q[0]]?.trim()||'Non renseigné'));}root.append(article);}}window.print();}
$('person').onchange=e=>{person=e.target.value;step=0;render();persist();};
$('remember').onchange=()=>{if(!$('remember').checked){try{localStorage.removeItem(KEY);}catch{} }persist();};
$('prev').onclick=()=>{step=Math.max(0,step-1);render();persist();$('sectionTitle').focus();};
$('next').onclick=()=>{if(step<SECTIONS.length-1){step++;render();persist();$('sectionTitle').focus();}else{say('Vous pouvez relire les sections puis télécharger vos réponses. Les champs vides seront indiqués comme non renseignés.');$('export').focus();}};
$('export').onclick=doExport;$('print').onclick=()=>printData({[person]:packet()});
$('clear').onclick=()=>{if(confirm('Effacer les réponses de '+PEOPLE[person]+' sur cet appareil ? Les fichiers téléchargés ne seront pas supprimés.')){drafts[person]={};persist();render();say('Réponses effacées.');}};
$('restore').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;const data=await readFile(f);if(Object.values(drafts[data.person]||{}).some(Boolean)&&!confirm('Remplacer le brouillon de '+PEOPLE[data.person]+' par ce fichier ?'))return;person=data.person;drafts[person]=data.answers;$('person').value=person;step=0;render();persist();say('Fichier repris pour '+PEOPLE[person]+'.');}catch(err){say('Import impossible : '+err.message);}finally{e.target.value='';}};
$('imports').onchange=async e=>{const messages=[];for(const file of e.target.files){try{const data=await readFile(file);if(collected[data.person]&&!confirm('Remplacer les réponses importées de '+PEOPLE[data.person]+' ?'))continue;collected[data.person]=data;messages.push(PEOPLE[data.person]+' : importé.');}catch(err){messages.push(file.name+' : '+err.message);}}$('importState').textContent=messages.join(' ');renderSummary();e.target.value='';};
$('printSummary').onclick=()=>{if(!Object.keys(collected).length){$('importState').textContent='Importez au moins un fichier avant d’imprimer.';return;}printData(collected);};
$('answerTab').onclick=()=>showMode(false);$('collectTab').onclick=()=>showMode(true);
window.addEventListener('beforeunload',e=>{if(!$('remember').checked&&Object.values(drafts).some(a=>Object.values(a).some(Boolean))){e.preventDefault();e.returnValue='';}});
try{const saved=localStorage.getItem(KEY);if(saved){const d=JSON.parse(saved);for(const [p,a]of Object.entries(d.drafts||{})){if(Object.hasOwn(PEOPLE,p))drafts[p]=sanitizeAnswers(a);}person=Object.hasOwn(PEOPLE,d.person)?d.person:'';step=Number.isInteger(d.step)&&d.step>=0&&d.step<SECTIONS.length?d.step:0;$('remember').checked=true;$('person').value=person;persist();}}catch{$('saveState').textContent='Ancien brouillon illisible ou stockage indisponible. Vous pouvez reprendre un fichier téléchargé.';}
render();
// Optional, read-only access to navigation progress; no personal answers exposed.
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'get_questionnaire_progress',description:'Lire le nombre de questions renseignées et la section ouverte, sans accéder aux réponses.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({selected:!!person,section:SECTIONS[step][0],answered:person?answered(person):0,total:person?visibleQuestions(person).length:0})})).catch(()=>{});}catch{}}
