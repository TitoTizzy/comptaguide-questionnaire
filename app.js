'use strict';
const PEOPLE={myrtho:'Bui Gerry Myrtho CHARLES',cluvens:'Cluvens AMEDEE',wilbert:'Wilbert CASIMIR'};
const $=id=>document.getElementById(id), KEY='comptaguide-arbitrages-v2';
let drafts={}, person='', step=0, collected={};
const visibleQuestions=p=>SECTIONS.flatMap(s=>s[2]);
const allowed=new Set(SECTIONS.flatMap(s=>s[2].map(q=>q[0])));
const say=t=>{$('message').textContent=t;};
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function sanitizeAnswers(a){
 if(!a||typeof a!=='object'||Array.isArray(a))throw Error('Réponses non valides.');
 const result={};for(const [k,v] of Object.entries(a)){
 const q=visibleQuestions().find(q=>q[0]===k);
 if(!q||!v||typeof v!=='object'||!Array.isArray(v.choices)||typeof v.other!=='string'||v.other.length>3000)throw Error('Réponse non valide.');
 const opts=[...q[3],...(q[5]?['Autre']:[])];
 if(v.choices.some(x=>!opts.includes(x))||new Set(v.choices).size!==v.choices.length||(!q[4]&&v.choices.length>1))throw Error('Choix non valides.');
 if(v.choices.some(x=>x.startsWith('Aucune unanimité'))&&v.choices.length>1)throw Error('Le choix « Aucune unanimité » doit rester seul.');
 result[k]={choices:[...v.choices],other:v.other};}return result;
}
function answerText(v){if(!v?.choices?.length)return 'Non renseigné';return v.choices.join(' ; ')+(v.other.trim()?'\nPrécisions : '+v.other.trim():'');}
function isAnswered(v){return !!v?.choices?.length;}
function validate(data){if(!data||data.app!=='comptaguide-statuts'||data.version!==2||!Object.hasOwn(PEOPLE,data.person))throw Error('Utilisez un fichier du questionnaire d’arbitrage version 2. Les anciens fichiers restent inchangés.');return{app:data.app,version:2,person:data.person,answers:sanitizeAnswers(data.answers),exportedAt:typeof data.exportedAt==='string'?data.exportedAt:''};}
function persist(){if(!$('remember').checked){$('saveState').textContent='Réponses dans cette page uniquement. Téléchargez-les avant de quitter.';return;}try{localStorage.setItem(KEY,JSON.stringify({drafts,person,step}));$('saveState').textContent='Brouillon enregistré sur cet appareil à '+new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})+'.';}catch{$('saveState').textContent='Sauvegarde indisponible. Téléchargez vos réponses avant de quitter.';}}
function answered(p){return visibleQuestions(p).filter(q=>isAnswered(drafts[p]?.[q[0]])).length;}
function updateProgress(){const total=visibleQuestions(person).length,n=answered(person);$('count').textContent=n+' / '+total+' renseignées';$('progress').value=Math.round(n/total*100);}
function render(){ $('workspace').hidden=!person;if(!person)return;drafts[person]??={};$('steps').replaceChildren();SECTIONS.forEach((s,i)=>{const b=el('button',undefined,i===step?'active':'');b.append(el('span',String(i+1).padStart(2,'0')),document.createTextNode(s[0]));b.setAttribute('aria-current',i===step?'step':'false');b.onclick=()=>{step=i;render();persist();$('sectionTitle').focus();};$('steps').append(b);});
 $('stepLabel').textContent='ÉTAPE '+(step+1)+' SUR '+SECTIONS.length;$('sectionTitle').textContent=SECTIONS[step][0];$('sectionHint').textContent=SECTIONS[step][1];$('questions').replaceChildren();
 for(const q of SECTIONS[step][2]){
 const box=el('fieldset',undefined,'question'),legend=el('legend',q[1]);box.append(legend,el('small',(q[4]?'Plusieurs réponses possibles.':'Une seule réponse.')+' '+q[2]));
 const current=drafts[person][q[0]]||{choices:[],other:''},choices=[...q[3],...(q[5]?['Autre']:[])];
 const extra=el('textarea');extra.id=q[0]+'-detail';extra.maxLength=3000;extra.rows=2;extra.value=current.other;extra.placeholder='Précisez votre proposition, les noms ou le seuil si demandé.';
 const detailLabel=el('label','Précisions');detailLabel.htmlFor=extra.id;
 const controls=[];
 const update=()=>{const selected=controls.filter(n=>n.checked).map(n=>n.value);drafts[person][q[0]]={choices:selected,other:extra.value};const needs=selected.some(x=>x==='Autre'||x.includes('préciser'));extra.required=needs;detailLabel.textContent=needs?'Précisions nécessaires pour ce choix':'Précisions (facultatif)';persist();updateProgress();};
 for(const [i,value] of choices.entries()){
 const label=el('label',undefined,'choice'),input=el('input');input.type=q[4]?'checkbox':'radio';input.name=q[0];input.id=q[0]+'-'+i;input.value=value;input.checked=current.choices.includes(value);controls.push(input);
 input.onchange=()=>{if(q[4]&&input.checked){for(const n of controls)if(n!==input&&(value.startsWith('Aucune unanimité')||n.value.startsWith('Aucune unanimité')))n.checked=false;}update();};
 label.append(input,el('span',value));box.append(label);
 }extra.oninput=update;box.append(detailLabel,extra);$('questions').append(box);
 const needs=current.choices.some(x=>x==='Autre'||x.includes('préciser'));extra.required=needs;detailLabel.textContent=needs?'Précisions nécessaires pour ce choix':'Précisions (facultatif)';
 }
 $('prev').disabled=step===0;$('next').textContent=step===SECTIONS.length-1?'Revoir et télécharger':'Suivant';updateProgress();}
function checkDetails(){for(const [i,s] of SECTIONS.entries())for(const q of s[2]){const v=drafts[person]?.[q[0]];if(v?.choices.some(x=>x==='Autre'||x.includes('préciser'))&&!v.other.trim()){step=i;render();say('Veuillez préciser le choix pour : '+q[1]);$(q[0]+'-detail').focus();return false;}}return true;}
function packet(){return{app:'comptaguide-statuts',version:2,person,answers:{...drafts[person]},exportedAt:new Date().toISOString()};}
function download(data,name){const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'})),a=el('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);}
function doExport(){if(!checkDetails())return;download(packet(),'ComptaGuide-arbitrages-v2-'+person+'.json');say('Fichier préparé : transmettez-le à Myrtho. '+answered(person)+' réponses renseignées ; les autres restent à compléter ou à discuter. Aucun envoi automatique.');}
function showMode(collect){$('answerView').hidden=collect;$('collectView').hidden=!collect;$('answerTab').classList.toggle('active',!collect);$('collectTab').classList.toggle('active',collect);say('');}
function renderSummary(){const root=$('summary');root.replaceChildren();for(const [p,data]of Object.entries(collected)){const d=el('span',PEOPLE[p]+' · '+visibleQuestions(p).filter(q=>isAnswered(data.answers[q[0]])).length+' réponses','badge');root.append(d);}if(!Object.keys(collected).length)return;
 for(const s of SECTIONS){root.append(el('h2',s[0]));for(const q of s[2]){const article=el('article',undefined,'compare');article.append(el('h3',q[1]));const cols=el('div',undefined,'columns');for(const p of Object.keys(PEOPLE)){const card=el('div',undefined,'reply');card.append(el('b',PEOPLE[p]),el('p',!collected[p]?'Fichier non importé':answerText(collected[p].answers[q[0]])));cols.append(card);}article.append(cols);root.append(article);}}
}
async function readFile(file){if(file.size>1000000)throw Error('Fichier trop volumineux (maximum 1 Mo).');return validate(JSON.parse(await file.text()));}
function printData(records){const root=$('printArea');root.replaceChildren(el('h1','ComptaGuide Financials — Arbitrages à choix multiples · Version 2'),el('p','Capital envisagé : 832 USD · Myrtho 34 % · Cluvens 33 % · Wilbert 33 %\nContrat Lyly’s : estimation annuelle de 2 392 USD = mise en place 832 USD + tenue de livres 1 560 USD (3 h × 52 semaines × 10 USD), hors honoraires du comptable agréé et heures supplémentaires.\nHonoraires d’avocat communiqués : 1 500 USD. Frais de notaire, DGI, MCI, publication et autres débours en supplément, à chiffrer.\nPropositions individuelles — validation collective et juridique à effectuer.'));
 for(const s of SECTIONS){root.append(el('h2',s[0]));for(const q of s[2]){const article=el('article');article.append(el('h3',q[1]));for(const [p,data]of Object.entries(records)){article.append(el('b',PEOPLE[p]),el('p',answerText(data.answers[q[0]])));}root.append(article);}}window.print();}
$('person').onchange=e=>{person=e.target.value;step=0;render();persist();};
$('remember').onchange=()=>{if(!$('remember').checked){try{localStorage.removeItem(KEY);}catch{} }persist();};
$('prev').onclick=()=>{step=Math.max(0,step-1);render();persist();$('sectionTitle').focus();};
$('next').onclick=()=>{if(step<SECTIONS.length-1){step++;render();persist();$('sectionTitle').focus();}else{say('Vous pouvez relire les sections puis télécharger vos réponses. Les champs vides seront indiqués comme non renseignés.');$('export').focus();}};
$('export').onclick=doExport;$('print').onclick=()=>{if(checkDetails())printData({[person]:packet()});};
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
