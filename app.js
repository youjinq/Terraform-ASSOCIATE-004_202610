'use strict';
const questions = window.QUESTIONS;
for (const q of questions) {
  q.pdfAnswer=[...q.answer];
  const reviewed=window.EXPLANATIONS[q.id]?.[3];
  if(reviewed==='NONE')q.noValidAnswer=true;
  else if(reviewed)q.answer=reviewed.split('');
}
const gradedQuestions=questions.filter(q=>!q.noValidAnswer);
const KEY = 'terraform-associate-004-202610-v1';
const $ = id => document.getElementById(id);
const fresh = () => ({version:1,current:1,lastVisited:1,answers:{},bookmarks:[],notes:{}});
const equal = (a,b) => [...a].sort().join('') === [...b].sort().join('');
function validate(raw) {
  if (!raw || raw.version !== 1 || !Number.isInteger(raw.current) || raw.current<1 || raw.current>167 || !raw.answers || typeof raw.answers!=='object' || Array.isArray(raw.answers) || !Array.isArray(raw.bookmarks) || !raw.notes || typeof raw.notes!=='object' || Array.isArray(raw.notes)) throw Error('无效的进度文件');
  const clean=fresh(); clean.current=raw.current;
  clean.lastVisited=Number.isInteger(raw.lastVisited)&&raw.lastVisited>=1&&raw.lastVisited<=167?raw.lastVisited:raw.current;
  clean.bookmarks=[...new Set(raw.bookmarks.filter(n=>Number.isInteger(n)&&n>=1&&n<=167))];
  for (const [id,a] of Object.entries(raw.answers)) {
    const q=questions[Number(id)-1];
    if (!q || !a || !Array.isArray(a.selected) || !a.selected.every(k=>q.options.some(o=>o.key===k)) || new Set(a.selected).size!==a.selected.length || !['draft','submitted','revealed'].includes(a.status)) throw Error('进度中的答案格式不正确');
    clean.answers[q.id]={selected:a.selected,status:a.status};
  }
  for(const [id,note] of Object.entries(raw.notes)) if(questions[Number(id)-1] && typeof note==='string') clean.notes[Number(id)]=note.slice(0,50000);
  return clean;
}
let state=fresh(), storageOK=true, startup='';
try { const saved=localStorage.getItem(KEY); if(saved) state=validate(JSON.parse(saved)); } catch { startup='未能读取旧进度，请尝试导入备份。'; }
let lastPosition=state.current;
let active=state.current;
let visible=questions;
let toastTimer;
function toast(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,3500);}
function save(){
  try{localStorage.setItem(KEY,JSON.stringify(state));storageOK=true;$('save-status').textContent='✓ 进度已自动保存';}
  catch{storageOK=false;$('save-status').textContent='无法自动保存，请导出进度备份';}
}
function current(){return questions[active-1];}
function record(q=current()){return state.answers[q.id] || {selected:[],status:'draft'};}
function isDone(q){return q.noValidAnswer?record(q).status==='revealed':record(q).status==='submitted';}
function isRight(q){return !q.noValidAnswer&&isDone(q)&&equal(record(q).selected,q.answer);}
function updateStats(){const done=gradedQuestions.filter(isDone).length;const right=gradedQuestions.filter(isRight).length;$('done').innerHTML=done+' <em>/ '+gradedQuestions.length+'</em>';$('right').textContent=right;$('wrong').textContent=done-right;$('percent').textContent=Math.round(done/gradedQuestions.length*100)+'%';$('progress-fill').style.width=done/gradedQuestions.length*100+'%';}
function applyFilter(){
  const term=$('search').value.trim().toLowerCase();const topic=$('topic').value;const filter=$('filter').value;
  visible=questions.filter(q=>(topic==='all'||q.topic===Number(topic))&&(!term||q.id.toString()===term||[q.question,...q.options.map(o=>o.text)].join(' ').toLowerCase().includes(term))&&(filter==='all'||filter==='unanswered'&&!isDone(q)||filter==='wrong'&&!q.noValidAnswer&&isDone(q)&&!isRight(q)||filter==='bookmarked'&&state.bookmarks.includes(q.id)));
  if(visible.length&&!visible.some(q=>q.id===active)) navigate(visible[0].id,false); else render();
}
function grid(){
  $('grid').replaceChildren();
  for(const q of visible){const b=document.createElement('button');b.textContent=q.id;b.type='button';b.title=`Topic ${q.topic} · Question #${q.number}`;b.setAttribute('aria-label',`第 ${q.id} 题${isDone(q)?isRight(q)?'，已答对':'，已答错':''}${state.bookmarks.includes(q.id)?'，已收藏':''}`);if(q.id===active)b.setAttribute('aria-current','true');b.className=[q.id===active?'active':'',isDone(q)?isRight(q)?'correct':'incorrect':'',state.bookmarks.includes(q.id)?'star':''].join(' ');b.onclick=()=>navigate(q.id);$('grid').append(b);}
  $('count').textContent=visible.length+' 题';
}
function navigate(id,scroll=true){lastPosition=active;state.lastVisited=lastPosition;active=id;state.current=id;save();render();if(scroll&&innerWidth<801)$('question-card').scrollIntoView({behavior:'smooth',block:'start'});}
function render(){
  grid();updateStats();
  const empty=visible.length===0;$('empty').hidden=!empty;$('question-card').hidden=empty;$('prev').disabled=empty||visible[0].id===active;$('next').disabled=empty||visible[visible.length-1].id===active;
  if(empty){$('position').textContent='0 / 0';return;}
  const q=current(),r=record(),locked=r.status!=='draft';
  $('position').textContent=`第 ${visible.findIndex(q=>q.id===active)+1} / ${visible.length} 题`;
  $('q-meta').textContent=`#${q.id} / 167 · Topic ${q.topic} · 原题 #${q.number}`;
  $('q-title').textContent=q.question;
  $('choice-hint').textContent=q.noValidAnswer?'题目有误 · 无完整正确选项 · 仅供阅读解析，不计分':q.answer.length>1?`多选题 · 请选择 ${q.answer.length} 个答案`:'单选题 · 请选择 1 个答案';
  $('exhibits').replaceChildren();for(const src of q.images){const img=document.createElement('img');img.src=src;img.alt='本题代码 Exhibit';$('exhibits').append(img);}
  $('options').replaceChildren();const legend=document.createElement('legend');legend.className='sr-only';legend.textContent='选择答案';$('options').append(legend);
  for(const o of q.options){
    const label=document.createElement('label');label.className='option'+(r.selected.includes(o.key)?' selected':'')+(locked&&!q.noValidAnswer&&q.answer.includes(o.key)?' is-right':'')+(locked&&!q.noValidAnswer&&r.selected.includes(o.key)&&!q.answer.includes(o.key)?' is-wrong':'');
    const input=document.createElement('input');input.type=q.answer.length>1?'checkbox':'radio';input.name='answer';input.value=o.key;input.checked=r.selected.includes(o.key);input.disabled=locked||q.noValidAnswer;
    input.onchange=()=>{let selected=[...$('options').querySelectorAll('input:checked')].map(i=>i.value);state.answers[q.id]={selected,status:'draft'};save();for(const node of $('options').querySelectorAll('.option'))node.classList.toggle('selected',node.querySelector('input').checked);};
    const letter=document.createElement('span');letter.className='letter';letter.textContent=o.key+'.';const body=document.createElement('span');body.className='option-body';body.textContent=o.text;
    if(o.image){const img=document.createElement('img');img.src=o.image;img.alt=`选项 ${o.key} 的 Terraform 代码`;body.append(img);}label.append(input,letter,body);
    if(locked&&!q.noValidAnswer&&q.answer.includes(o.key)){const check=document.createElement('span');check.className='answer-check';check.textContent='✓';check.setAttribute('role','img');check.setAttribute('aria-label','正确答案');label.append(check);}
    $('options').append(label);
  }
  $('submit').hidden=locked||q.noValidAnswer;$('reveal').hidden=locked;$('reveal').textContent='查看答案与解析';$('retry').hidden=!locked||q.noValidAnswer;
  $('result').hidden=!locked;$('result').replaceChildren();
  if(locked){
    const title=document.createElement('strong');title.textContent=q.noValidAnswer?'题目存在错误 · 不计分':r.status==='revealed'?'已查看答案（不计入作答）':equal(r.selected,q.answer)?'✓ 回答正确':'再复习一下这道题';
    const detail=document.createElement('div');detail.textContent=q.noValidAnswer?'Reviewed answer: No fully correct option':`Correct Answer: ${q.answer.join(', ')}${r.selected.length?'　·　你的选择: '+r.selected.join(', '):''}`;
    $('result').append(title,detail);
    if(q.noValidAnswer||!equal(q.pdfAnswer,q.answer)){const original=document.createElement('div');original.className='original-answer';original.textContent='Original PDF key: '+q.pdfAnswer.join(', ')+' · See correction below.';$('result').append(original);}
    const explanation=window.EXPLANATIONS[q.id];
    if(explanation){const box=document.createElement('div');box.className='explanation';const heading=document.createElement('h3');heading.textContent='Explanation';const text=document.createElement('p');text.textContent=explanation[0];box.append(heading,text);
      if(explanation[2]){const note=document.createElement('p');note.className='caveat';note.textContent='Study note: '+explanation[2];box.append(note);}
      const links=document.createElement('div');links.className='sources';for(const key of explanation[1]){const [label,url]=window.EXPLANATION_SOURCES[key];const a=document.createElement('a');a.textContent=label+' ↗';a.href=url;a.target='_blank';a.rel='noopener noreferrer';links.append(a);}box.append(links);$('result').append(box);
    }
    $('result').className=r.status==='submitted'&&!q.noValidAnswer?(equal(r.selected,q.answer)?'good':'bad'):'';
  }
  $('comments').hidden=!locked||!q.comments;$('comments').open=false;$('comment-text').textContent=q.comments;$('vote-text').textContent=q.votes;
  $('note').value=state.notes[q.id]||'';
  const bookmarked=state.bookmarks.includes(q.id);$('bookmark').setAttribute('aria-pressed',String(bookmarked));$('bookmark').textContent=bookmarked?'★ 已收藏':'☆ 收藏';
  $('resume').textContent=`回到上次位置 · 第 ${lastPosition} 题`;
}
$('answer-form').onsubmit=e=>{e.preventDefault();const q=current(),r=record();if(r.selected.length!==q.answer.length){toast(`请选择 ${q.answer.length} 个答案后提交`);return;}state.answers[q.id]={selected:r.selected,status:'submitted'};save();render();};
$('reveal').onclick=()=>{state.answers[active]={selected:record().selected,status:'revealed'};save();render();};
$('retry').onclick=()=>{state.answers[active]={selected:[],status:'draft'};save();render();};
$('bookmark').onclick=()=>{state.bookmarks=state.bookmarks.includes(active)?state.bookmarks.filter(id=>id!==active):[...state.bookmarks,active];save();applyFilter();};
$('note').oninput=()=>{state.notes[active]=$('note').value;save();};
$('prev').onclick=()=>{const i=visible.findIndex(q=>q.id===active);if(i>0)navigate(visible[i-1].id);};
$('next').onclick=()=>{const i=visible.findIndex(q=>q.id===active);if(i<visible.length-1)navigate(visible[i+1].id);};
$('resume').onclick=()=>{const target=lastPosition;$('filter').value='all';$('topic').value='all';$('search').value='';visible=questions;navigate(target);};
for(const topic of [...new Set(questions.map(q=>q.topic))]){const o=document.createElement('option');o.value=topic;o.textContent=`Topic ${topic} · ${questions.filter(q=>q.topic===topic).length} 题`;$('topic').append(o);}
$('topic').onchange=applyFilter;$('filter').onchange=applyFilter;$('search').oninput=applyFilter;
$('export').onclick=()=>{const blob=new Blob([JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='terraform-004-progress-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('进度备份已导出');};
$('import').onclick=()=>$('import-file').click();
$('import-file').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>2000000)throw Error('文件过大');const imported=validate(JSON.parse(await file.text()));if(!confirm('导入会替换当前进度和笔记。确定继续？'))return;state=imported;active=state.current;lastPosition=active;$('topic').value='all';$('filter').value='all';$('search').value='';visible=questions;save();render();toast(storageOK?'已恢复进度':'已载入进度，但浏览器无法自动保存，请保留备份');}catch{toast('导入失败，请选择此题库导出的 JSON 进度文件');}finally{e.target.value='';}};
render();if(startup)toast(startup);
