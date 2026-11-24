
/* ============ DATA ============
 An apostrophe ' after a Cyrillic vowel = stress mark.
 infinitive | english | present (я ты он мы вы они, or -) | past (masc., or m,f,n,pl) | group | level | perfective | perfective future (я … они) */
const RAW = `
быть|to be|-|был,была',бы'ло,бы'ли|irr|A1||
де'лать|to do, make|де'лаю де'лаешь де'лает де'лаем де'лаете де'лают|де'лал|I|A1|сде'лать|сде'лаю сде'лаешь сде'лает сде'лаем сде'лаете сде'лают
чита'ть|to read|чита'ю чита'ешь чита'ет чита'ем чита'ете чита'ют|чита'л|I|A1|прочита'ть|прочита'ю прочита'ешь прочита'ет прочита'ем прочита'ете прочита'ют
рабо'тать|to work|рабо'таю рабо'таешь рабо'тает рабо'таем рабо'таете рабо'тают|рабо'тал|I|A1||
знать|to know|зна'ю зна'ешь зна'ет зна'ем зна'ете зна'ют|знал,зна'ла,зна'ло,зна'ли|I|A1||
гуля'ть|to walk, stroll|гуля'ю гуля'ешь гуля'ет гуля'ем гуля'ете гуля'ют|гуля'л|I|A1|погуля'ть|погуля'ю погуля'ешь погуля'ет погуля'ем погуля'ете погуля'ют
игра'ть|to play|игра'ю игра'ешь игра'ет игра'ем игра'ете игра'ют|игра'л|I|A1||
слу'шать|to listen|слу'шаю слу'шаешь слу'шает слу'шаем слу'шаете слу'шают|слу'шал|I|A1||
ду'мать|to think|ду'маю ду'маешь ду'мает ду'маем ду'маете ду'мают|ду'мал|I|A1||
отдыха'ть|to rest, relax|отдыха'ю отдыха'ешь отдыха'ет отдыха'ем отдыха'ете отдыха'ют|отдыха'л|I|A1||
за'втракать|to have breakfast|за'втракаю за'втракаешь за'втракает за'втракаем за'втракаете за'втракают|за'втракал|I|A1|поза'втракать|поза'втракаю поза'втракаешь поза'втракает поза'втракаем поза'втракаете поза'втракают
у'жинать|to have dinner|у'жинаю у'жинаешь у'жинает у'жинаем у'жинаете у'жинают|у'жинал|I|A1||
покупа'ть|to buy|покупа'ю покупа'ешь покупа'ет покупа'ем покупа'ете покупа'ют|покупа'л|I|A1|купи'ть|куплю' ку'пишь ку'пит ку'пим ку'пите ку'пят
открыва'ть|to open|открыва'ю открыва'ешь открыва'ет открыва'ем открыва'ете открыва'ют|открыва'л|I|A2|откры'ть|откро'ю откро'ешь откро'ет откро'ем откро'ете откро'ют
говори'ть|to speak, say|говорю' говори'шь говори'т говори'м говори'те говоря'т|говори'л|II|A1|сказа'ть|скажу' ска'жешь ска'жет ска'жем ска'жете ска'жут
смотре'ть|to watch|смотрю' смо'тришь смо'трит смо'трим смо'трите смо'трят|смотре'л|II|A1|посмотре'ть|посмотрю' посмо'тришь посмо'трит посмо'трим посмо'трите посмо'трят
люби'ть|to love, like|люблю' лю'бишь лю'бит лю'бим лю'бите лю'бят|люби'л|II|A1||
гото'вить|to cook|гото'влю гото'вишь гото'вит гото'вим гото'вите гото'вят|гото'вил|II|A1|пригото'вить|пригото'влю пригото'вишь пригото'вит пригото'вим пригото'вите пригото'вят
звони'ть|to call|звоню' звони'шь звони'т звони'м звони'те звоня'т|звони'л|II|A1|позвони'ть|позвоню' позвони'шь позвони'т позвони'м позвони'те позвоня'т
учи'ть|to learn|учу' у'чишь у'чит у'чим у'чите у'чат|учи'л|II|A1|вы'учить|вы'учу вы'учишь вы'учит вы'учим вы'учите вы'учат
ви'деть|to see|ви'жу ви'дишь ви'дит ви'дим ви'дите ви'дят|ви'дел|II|A1|уви'деть|уви'жу уви'дишь уви'дит уви'дим уви'дите уви'дят
спать|to sleep|сплю спишь спит спим спи'те спят|спал,спала',спа'ло,спа'ли|II|A1||
ходи'ть|to go (regularly)|хожу' хо'дишь хо'дит хо'дим хо'дите хо'дят|ходи'л|II|A1||
жить|to live|живу' живёшь живёт живём живёте живу'т|жил,жила',жи'ло,жи'ли|irr|A1||
пить|to drink|пью пьёшь пьёт пьём пьёте пьют|пил,пила',пи'ло,пи'ли|irr|A1|вы'пить|вы'пью вы'пьешь вы'пьет вы'пьем вы'пьете вы'пьют
писа'ть|to write|пишу' пи'шешь пи'шет пи'шем пи'шете пи'шут|писа'л|irr|A1|написа'ть|напишу' напи'шешь напи'шет напи'шем напи'шете напи'шут
идти'|to go (on foot, now)|иду' идёшь идёт идём идёте иду'т|шёл,шла,шло,шли|irr|A1|пойти'|пойду' пойдёшь пойдёт пойдём пойдёте пойду'т
е'хать|to go (by transport, now)|е'ду е'дешь е'дет е'дем е'дете е'дут|е'хал|irr|A1|пое'хать|пое'ду пое'дешь пое'дет пое'дем пое'дете пое'дут
мочь|can, be able|могу' мо'жешь мо'жет мо'жем мо'жете мо'гут|мог,могла',могло',могли'|irr|A1||
хоте'ть|to want|хочу' хо'чешь хо'чет хоти'м хоти'те хотя'т|хоте'л|irr|A1||
есть|to eat|ем ешь ест еди'м еди'те едя'т|ел,е'ла,е'ло,е'ли|irr|A1|съесть|съем съешь съест съеди'м съеди'те съедя'т
занима'ться|to do (sport), study|занима'юсь занима'ешься занима'ется занима'емся занима'етесь занима'ются|занима'лся|sya|A1||
учи'ться|to study (at a school)|учу'сь у'чишься у'чится у'чимся у'читесь у'чатся|учи'лся|sya|A1||
встава'ть|to get up|встаю' встаёшь встаёт встаём встаёте встаю'т|встава'л|ava|A1|встать|вста'ну вста'нешь вста'нет вста'нем вста'нете вста'нут
брать|to take|беру' берёшь берёт берём берёте беру'т|брал,брала',бра'ло,бра'ли|irr|A2|взять|возьму' возьмёшь возьмёт возьмём возьмёте возьму'т
ждать|to wait|жду ждёшь ждёт ждём ждёте ждут|ждал,ждала',жда'ло,жда'ли|irr|A2||
`;
const MARKERS = {
  past:["вчера'","позавчера'","ра'ньше","час наза'д","в про'шлом году'","на про'шлой неде'ле"],
  pres:["сейча'с","тепе'рь","в да'нный моме'нт"],
  fut:["за'втра","послеза'втра","ско'ро","че'рез час","в сле'дующем году'","на сле'дующей неде'ле"]
};
/* Future: process (imperfective, бу́ду + infinitive) or one result (perfective)? [sentence with {} gap, right, wrong, why, english] */
const FUT = [
  ["За'втра я {} весь ве'чер.","бу'ду чита'ть","прочита'ю","“Весь ве'чер” = all evening: a process, so бу'ду + infinitive.","Tomorrow I'll be reading all evening."],
  ["Я {} э'ту кни'гу и дам её тебе'.","прочита'ю","бу'ду чита'ть","Finish the book, then give it: one complete result, so perfective.","I'll read this book and give it to you."],
  ["Ле'том мы {} ка'ждый день.","бу'дем гуля'ть","погуля'ем","“Ка'ждый день” = every day: repeated, so бу'дем + infinitive.","In summer we'll go for walks every day."],
  ["Я {} тебе' че'рез пять мину'т.","позвоню'","бу'ду звони'ть","One call, in five minutes: one result, so perfective.","I'll call you in five minutes."],
  ["Я {} тебе' ка'ждый ве'чер.","бу'ду звони'ть","позвоню'","“Ка'ждый ве'чер” = every evening: repeated, so бу'ду + infinitive.","I'll call you every evening."],
  ["Я {} у'жин к семи' часа'м.","пригото'влю","бу'ду гото'вить","Dinner ready by seven: a result, so perfective.","I'll have dinner ready by seven."],
  ["За'втра ма'ма {} весь день.","бу'дет гото'вить","пригото'вит","“Весь день” = all day: a process, so бу'дет + infinitive.","Tomorrow Mum will be cooking all day."],
  ["Я {} э'ти слова' за'втра.","вы'учу","бу'ду учи'ть","Learn these words (and know them): result, so perfective.","I'll learn these words tomorrow."],
  ["В университе'те я {} ру'сский язы'к.","бу'ду учи'ть","вы'учу","Studying a language at university is a long process.","At university I'll study Russian."],
  ["Мы {} фильм и пото'м пойдём гуля'ть.","посмо'трим","бу'дем смотре'ть","One action finished, then the next one: perfective.","We'll watch a film and then go for a walk."],
  ["За'втра я {} но'вый телефо'н.","куплю'","бу'ду покупа'ть","Buy one phone: one result, so perfective.","Tomorrow I'll buy a new phone."],
  ["Я {} письмо' и отпра'влю его'.","напишу'","бу'ду писа'ть","Write it, then send it: one finished result, so perfective.","I'll write a letter and send it."],
  ["Ка'ждое у'тро я {} в дневни'к.","бу'ду писа'ть","напишу'","“Ка'ждое у'тро” = every morning: repeated, so бу'ду + infinitive.","Every morning I'll write in my diary."],
  ["Сего'дня ве'чером мы {} в кафе'.","пойдём","бу'дем идти'","One trip this evening: пойти' (perfective).","This evening we'll go to a café."]
];

/* ============ BUILD ============ */
const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1́');
const plain=s=>s.replace(/́/g,'');
const BUDU=["бу'ду","бу'дешь","бу'дет","бу'дем","бу'дете","бу'дут"].map(S);
function pastForms(m){
  if(m.includes(','))return m.split(',');
  if(m.endsWith('ся')){const b=m.slice(0,-2);return [m,b+'ась',b+'ось',b+'ись'];}
  return [m,m+'а',m+'о',m+'и'];
}
const VERBS = RAW.trim().split('\n').map((l,id)=>{
  let [inf,en,pres,past,group,lvl,pf,pfFut]=l.split('|');
  return {id,inf:S(inf),en,pres:pres==='-'?null:S(pres).split(' '),past:pastForms(S(past)),group,lvl,pf:S(pf||''),pfFut:pfFut?S(pfFut).split(' '):null};
});
const BYT=VERBS[0];
Object.keys(MARKERS).forEach(k=>MARKERS[k]=MARKERS[k].map(S));
FUT.forEach(f=>{for(let i=0;i<4;i++)f[i]=S(f[i]);});
/* pronouns: index in present table, gender for past */
const PP=[
  {p:'я',e:'👨',i:0,g:0},{p:'я',e:'👩',i:0,g:1},{p:'ты',e:'👦',i:1,g:0},{p:'ты',e:'👧',i:1,g:1},
  {p:'он',e:'🧔',i:2,g:0},{p:S("она'"),e:'👱‍♀️',i:2,g:1},{p:'мы',e:'👫',i:3,g:3},{p:'вы',e:'🧑‍🤝‍🧑',i:4,g:3},{p:S("они'"),e:'👨‍👩‍👧',i:5,g:3}
];
const TENSE={past:{en:'Past',ru:S("проше'дшее"),c:'var(--lilac)',icon:'⏪'},pres:{en:'Present',ru:S("настоя'щее"),c:'var(--yellow)',icon:'⏺'},fut:{en:'Future',ru:S("бу'дущее"),c:'var(--blue)',icon:'⏩'}};
/* the verb form for a tense: kind 'impf' future = бу́ду + infinitive, 'pf' = perfective future */
function form(v,t,pp,kind='impf'){
  if(t==='past')return v.past[pp.g];
  if(t==='pres')return v.pres?v.pres[pp.i]:'';
  if(kind==='pf'&&v.pfFut)return v.pfFut[pp.i];
  return v===BYT?BUDU[pp.i]:BUDU[pp.i]+' '+v.inf;
}

/* ============ HELPERS ============ */
const norm=s=>plain(s).trim().toLowerCase().replace(/ё/g,'е').replace(/[\s-]+/g,'');
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const store={get(k,d){try{const v=localStorage.getItem('tg_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('tg_'+k,JSON.stringify(v))}catch(e){}}};
let xp=store.get('xp',0), level=store.get('level','all');
const pool=()=>VERBS.filter(v=>v!==BYT&&(level==='all'||v.lvl===level));
const ppLabel=pp=>`${pp.p} <span style="font-size:.8em">${pp.e}</span>`;
function addXP(n){xp+=n;store.set('xp',xp);const el=$('#xp');el.textContent='★ '+xp+' XP';el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
function burst(){
  const cols=['#fe98c0','#80eb3d','#3dd0eb','#eb583d','#ffe14d'];
  for(let i=0;i<26;i++){const s=document.createElement('span');s.className='burst';s.textContent=pick(['✦','★','●','✸']);
    s.style.left=(innerWidth/2)+'px';s.style.top=(innerHeight/2)+'px';s.style.color=pick(cols);
    s.style.setProperty('--dx',(Math.random()*700-350)+'px');s.style.setProperty('--dy',(Math.random()*600-380)+'px');s.style.setProperty('--r',(Math.random()*720-360)+'deg');
    document.body.appendChild(s);setTimeout(()=>s.remove(),1400);}
}
function resultMsg(r){return S(r>=.9?"Отли'чно!":r>=.7?"Хорошо'!":r>=.4?"Неплохо'!":"Ещё раз!");}
function results(el,score,total,review,again){
  const r=score/total;if(r>=.7)burst();addXP(score);
  el.innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(r)}</p><div class="result__big">${score}/${total}</div>
    ${review.length?`<p><b>Review these:</b></p><div class="review">${review.map(x=>`<div>${x}</div>`).join('')}</div>`:'<p><b>Perfect round!</b></p>'}
    <div class="actions"><button class="btn btn--ghost" id="again">New round</button></div></div>`;
  $('#again').onclick=again;
}
function mcRound({stage,id,total,make,render}){
  let i=0,score=0,review=[],qs=make();
  const next=()=>{
    $('#'+id+'Score').textContent=`${score} / ${total}`;$('#'+id+'Fill').style.width=(i/total*100)+'%';
    if(i>=total){results($(stage),score,total,review,()=>{i=0;score=0;review=[];qs=make();next();});return;}
    render(qs[i],i,(ok,rev)=>{if(ok)score++;else if(rev)review.push(rev);$('#'+id+'Score').textContent=`${score} / ${total}`;},()=>{i++;next();});
  };
  next();
}
function wireChoices(isRight,onAnswer){
  $$('.choice').forEach(b=>b.onclick=()=>{
    if(b.disabled)return;const ok=isRight(b);
    $$('.choice').forEach(x=>{x.disabled=true;if(isRight(x))x.classList.add('ok');});
    if(!ok)b.classList.add('bad');
    onAnswer(ok);$('#nextWrap').style.visibility='visible';$('#nextBtn').focus();
  });
}
const nextBtn=last=>`<div class="actions" id="nextWrap" style="visibility:hidden"><button class="btn btn--green" id="nextBtn">${last?'Results →':'Next →'}</button></div>`;
const bar=id=>`<div class="game__bar"><div class="progress"><div class="progress__fill" id="${id}Fill"></div></div><span class="score" id="${id}Score"></span></div>`;
const tTag=t=>`<span class="tag-tense" style="--gc:${TENSE[t].c}">${TENSE[t].icon} ${TENSE[t].en}</span>`;

/* ============ MODAL: verb table ============ */
function openVerb(v){
  const col=(t,title,rows)=>`<div class="vcol"><h4 style="--gc:${TENSE[t].c}">${title}</h4>${rows.map(([a,b])=>`<div><span>${a}</span><b>${esc(b)}</b></div>`).join('')}</div>`;
  const six=['я','ты',S("он/она'"),'мы','вы',S("они'")];
  $('#modalBody').innerHTML=`
    <div class="detail__head t-pres" style="--gc:var(--yellow)">
      <h2 class="detail__ru" style="margin:0">${esc(v.inf)}</h2>
      <p class="detail__en">${esc(v.en)}${v.pf?` · perfective: <span class="ru"><b>${esc(v.pf)}</b></span>`:''}</p>
    </div>
    <div class="detail__body">
      <div class="vtable">
        ${col('past','⏪ Past',[['он',v.past[0]],[S("она'"),v.past[1]],[S("оно'"),v.past[2]],[S("они'"),v.past[3]]])}
        ${col('pres','⏺ Present',v.pres?six.map((p,k)=>[p,v.pres[k]]):[['—',v===BYT?'(есть / usually left out)':'—']])}
        ${col('fut','⏩ Future',six.map((p,k)=>[p,v===BYT?BUDU[k]:BUDU[k]+' '+v.inf]))}
      </div>
      ${v.pfFut?`<div><p class="label">Perfective future · one result · ${esc(v.pf)}</p><div class="vtable" style="grid-template-columns:1fr">${col('fut','⏩ Future (perfective)',six.map((p,k)=>[p,v.pfFut[k]]))}</div></div>`:''}
      ${v===BYT?`<div class="note">${S("Я студе'нт. = I am a student. In the present, быть is usually left out. Past: Я был студе'нтом. Future: Я бу'ду студе'нтом.")}</div>`:''}
      <div class="note">Past tense agrees with <b>gender and number</b>, not with the person: ${S(`я (👨) ${esc(v.past[0])} · я (👩) ${esc(v.past[1])} · мы ${esc(v.past[3])}`)}</div>
    </div>`;
  $('#modal').classList.add('is-open');$('#modal').setAttribute('aria-hidden','false');
}
function closeModal(){$('#modal').classList.remove('is-open');$('#modal').setAttribute('aria-hidden','true');}
$('#modalClose').onclick=closeModal;
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

/* ============ ROUTER ============ */
let route='home',cleanup=null;const VIEWS={};
function go(){
  if(cleanup){cleanup();cleanup=null;}
  const h=location.hash.slice(1);route=VIEWS[h]?h:'home';
  $$('.nav__link').forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')==='#'+route));
  VIEWS[route]($('#view'));scrollTo(0,0);
}
addEventListener('hashchange',go);
function setLevel(l){level=l;store.set('level',l);$$('#levelSeg button').forEach(b=>b.classList.toggle('is-on',b.dataset.l===l));}
$$('#levelSeg button').forEach(b=>b.onclick=()=>{setLevel(b.dataset.l);go();});
function shell(el,title,sub,inner){el.innerHTML=S(`<section class="section"><div class="container"><h1 class="heading">${title}</h1><p class="lead">${sub}</p>${inner}</div></section>`);}

/* ============ HOME ============ */
const MODES=[
  ['rules','📜','The rules','How to build each tense, with an interactive timeline you can play with.','var(--yellow)'],
  ['verbs','📖','Verb tables','36 key verbs in past, present and future, plus perfective futures.','var(--lilac)'],
  ['rush','⚡','Tense Rush','60 seconds: is it past, present or future? Tap fast!','var(--red)'],
  ['machine','🕰️','Time machine','Вчера́, сейча́с, за́втра: move the sentence to the right time.','var(--blue)'],
  ['build','⌨️','Tense builder','Type the right form yourself. Cyrillic keyboard included.','var(--green)'],
  ['pastend','👫',"Past endings",'Он чита́л, она́ чита́ла, они́ чита́ли: pick the ending for who did it.','var(--pink)'],
  ['markers','📅','Time words','Sort time words: вчера́, сейча́с, за́втра, че́рез час…','var(--yellow)'],
  ['future','🔮','Future: which one?','Бу́ду чита́ть or прочита́ю? Process or one result?','var(--lilac)']
];
VIEWS.home=el=>{
  const words=shuffle([...MARKERS.past,...MARKERS.pres,...MARKERS.fut]);
  const track=`<div class="marquee__track" aria-hidden="true">${words.map(w=>`<span>${w}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar ru">⏪⏩</div>
      <span class="hero__sticker2">${S("вчера' · сейча'с · за'втра")}</span>
      <span class="hero__sticker">A1 ✦ A2</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">3 tenses</h1>
      <p class="hero__lead">Russian has just three tenses: past, present and future. Learn how each one works, then play. <span class="ru">${S("Бы'ло, есть, бу'дет!")}</span></p>
      <div class="hero__stats">
        <span class="chip" style="background:var(--lilac)">⏪ past</span>
        <span class="chip" style="background:var(--yellow)">⏺ present</span>
        <span class="chip">⏩ future</span>
        <span class="chip" style="background:var(--green)">${VERBS.length} verbs · 6 games</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#rules">Learn the rules →</a>
        <a class="btn btn--ghost" href="#rush">Jump into a game</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Start with <b>The rules</b>, then play. Use the <b>A1 / A2 / All</b> switch at the top to choose the verbs.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">${String(i+1).padStart(2,'0')}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${s}</p><span class="mode__go">${i<2?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
};

/* ============ RULES ============ */
VIEWS.rules=el=>{
  const opts=VERBS.filter(v=>v.pres).map(v=>`<option value="${v.id}">${v.inf} · ${v.en}</option>`).join('');
  shell(el,'The rules','Russian has <b>three tenses</b>. Choose a verb and a person below and watch the sentence travel through time.',`
    <div class="stage" style="margin-bottom:34px">
      <div class="builder"><select id="tlVerb">${opts}</select></div>
      <div class="builder" id="tlPP">${PP.map((p,k)=>`<button class="pp" data-k="${k}">${p.p} ${p.e}</button>`).join('')}</div>
      <div class="timeline" style="margin:24px 0 6px">
        <div class="tl t-past"><span class="tl__when">вчера'</span><div class="tl__name">⏪ Past</div><div class="tl__ru" id="tlPast"></div><div class="tl__en">yesterday</div></div>
        <div class="tl t-pres"><span class="tl__when">сейча'с</span><div class="tl__name">⏺ Present</div><div class="tl__ru" id="tlPres"></div><div class="tl__en">now</div></div>
        <div class="tl t-fut"><span class="tl__when">за'втра</span><div class="tl__name">⏩ Future</div><div class="tl__ru" id="tlFut"></div><div class="tl__en">tomorrow</div></div>
      </div>
      <p class="muted" id="tlPf" style="font-weight:700;margin:14px 0 0"></p>
    </div>

    <div class="rulegrid">
      <div class="rulecard t-pres">
        <h3>⏺ Present <span class="ru">настоя'щее</span></h3>
        <p>What happens <b>now</b> or <b>usually</b>. Remove the infinitive ending and add a personal ending. There are two patterns:</p>
        <table class="mini-t"><tr><th></th><th>1st: чита'<b>ть</b></th><th>2nd: говор<b>и'ть</b></th></tr>
          <tr><td>я</td><td>чита'<b>ю</b></td><td>говор<b>ю'</b></td></tr>
          <tr><td>ты</td><td>чита'<b>ешь</b></td><td>говор<b>и'шь</b></td></tr>
          <tr><td>он/она'</td><td>чита'<b>ет</b></td><td>говор<b>и'т</b></td></tr>
          <tr><td>мы</td><td>чита'<b>ем</b></td><td>говор<b>и'м</b></td></tr>
          <tr><td>вы</td><td>чита'<b>ете</b></td><td>говор<b>и'те</b></td></tr>
          <tr><td>они'</td><td>чита'<b>ют</b></td><td>говор<b>я'т</b></td></tr></table>
        <div class="tip">Russian has one present tense for both “I read” and “I am reading”: <span class="ru">Я чита'ю.</span></div>
        <div class="markers"><span>сейча'с</span><span>тепе'рь</span><span>обы'чно</span><span>ка'ждый день</span></div>
      </div>
      <div class="rulecard t-past">
        <h3>⏪ Past <span class="ru">проше'дшее</span></h3>
        <p>Remove <b>-ть</b>, add <b>-л</b>. The ending shows <b>gender and number</b>, not the person!</p>
        <table class="mini-t"><tr><th></th><th>чита'ть</th><th>who?</th></tr>
          <tr><td>он</td><td>чита'<b>л</b></td><td>я 👨, ты 👦, он</td></tr>
          <tr><td>она'</td><td>чита'<b>ла</b></td><td>я 👩, ты 👧, она'</td></tr>
          <tr><td>оно'</td><td>чита'<b>ло</b></td><td>оно' (things)</td></tr>
          <tr><td>они'</td><td>чита'<b>ли</b></td><td>мы, вы, они'</td></tr></table>
        <div class="tip">Polite <span class="ru">вы</span> always takes <b>-ли</b>: <span class="ru">Вы чита'ли?</span> A few verbs are irregular: <span class="ru">идти' → шёл, шла; мочь → мог, могла'; есть → ел, е'ла.</span></div>
        <div class="markers"><span>вчера'</span><span>ра'ньше</span><span>час наза'д</span><span>в про'шлом году'</span></div>
      </div>
      <div class="rulecard t-fut">
        <h3>⏩ Future <span class="ru">бу'дущее</span></h3>
        <p>Two ways, depending on the verb’s <b>aspect</b>:</p>
        <p><b>1 · Process or repeated</b> (imperfective): <span class="ru"><b>бу'ду</b></span> + infinitive.</p>
        <table class="mini-t"><tr><td>я</td><td><b>бу'ду</b> чита'ть</td><td>мы</td><td><b>бу'дем</b> чита'ть</td></tr>
          <tr><td>ты</td><td><b>бу'дешь</b> чита'ть</td><td>вы</td><td><b>бу'дете</b> чита'ть</td></tr>
          <tr><td>он/она'</td><td><b>бу'дет</b> чита'ть</td><td>они'</td><td><b>бу'дут</b> чита'ть</td></tr></table>
        <p><b>2 · One result</b> (perfective): conjugate the perfective verb like a present tense, and it means the future!</p>
        <div class="tip"><span class="ru">Я бу'ду чита'ть.</span> = I will be reading. · <span class="ru">Я прочита'ю.</span> = I will read it (to the end).</div>
        <div class="markers"><span>за'втра</span><span>ско'ро</span><span>че'рез час</span><span>в сле'дующем году'</span></div>
      </div>
    </div>

    <h2 class="subhead">The special one: быть (to be)</h2>
    <div class="pairs" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin-bottom:44px">
      <div class="rule t-past" style="padding:18px"><b>⏪ был · была' · бы'ло · бы'ли</b>Я был до'ма. = I was at home.</div>
      <div class="rule t-pres" style="padding:18px"><b>⏺ (left out)</b>Я до'ма. = I am at home. No verb needed!</div>
      <div class="rule t-fut" style="padding:18px"><b>⏩ бу'ду · бу'дешь · бу'дет…</b>Я бу'ду до'ма. = I will be at home.</div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#rush">Test yourself: Tense Rush →</a><a class="btn btn--ghost" href="#verbs">See all verb tables</a></div>`);
  let pk=0;
  const upd=()=>{
    const v=VERBS[+$('#tlVerb').value],pp=PP[pk];
    $('#tlPast').innerHTML=`${pp.p} ${esc(v.past[pp.g])}`;
    $('#tlPres').innerHTML=`${pp.p} ${esc(v.pres[pp.i])}`;
    $('#tlFut').innerHTML=`${pp.p} ${esc(form(v,'fut',pp))}`;
    $('#tlPf').innerHTML=v.pfFut?`One result in the future (perfective ${esc(v.pf)}): <span class="ru" style="color:var(--ink)">${pp.p} ${esc(v.pfFut[pp.i])}</span>`:'This verb has no perfective partner in this list.';
    $$('.pp').forEach(b=>b.classList.toggle('is-on',+b.dataset.k===pk));
  };
  $('#tlVerb').value=VERBS.find(v=>plain(v.inf)==='читать').id;
  $('#tlVerb').onchange=upd;$$('.pp').forEach(b=>b.onclick=()=>{pk=+b.dataset.k;upd();});
  upd();
};

/* ============ VERB TABLES ============ */
VIEWS.verbs=el=>{
  const list=VERBS.filter(v=>v===BYT||level==='all'||v.lvl===level);
  shell(el,'Verb tables','Tap a verb to see it in all three tenses. Verbs with a ⏩✓ badge also have a perfective (one-result) future.',`
    <div class="ngrid">${list.map(v=>`<button class="tile" data-id="${v.id}" style="--gc:var(--yellow)">
      <span class="tile__ru">${esc(v.inf)}</span><span class="tile__en">${esc(v.en)}</span>
      <span class="tile__tags"><span class="g" style="--gc:var(--lilac)">${esc(v.past[0])}</span>${v.pfFut?'<span class="g" style="--gc:var(--blue)">⏩✓</span>':''}<span class="g" style="--gc:var(--surface)">${v.lvl}</span></span></button>`).join('')}</div>`);
  $$('.tile').forEach(t=>t.onclick=()=>openVerb(VERBS[+t.dataset.id]));
};

/* ============ TENSE RUSH ============ */
VIEWS.rush=el=>{
  let timer,left,score,streak,best=store.get('rushBest',0),cur,running=false;
  shell(el,'Tense Rush','60 seconds. Read the sentence and tap its tense. Keyboard: ← past · ↓ present · → future.',`<div class="game"><div id="rsStage"></div></div>`);
  const intro=()=>{$('#rsStage').innerHTML=`<div class="stage stage--pink"><div class="result__big">60s</div><p class="result__msg">${S("Гото'вы?")}</p><p><b>Best score: ${best}</b></p><div class="actions"><button class="btn btn--green" id="rsGo">Start ⚡</button></div></div>`;$('#rsGo').onclick=start;};
  const next=()=>{
    const v=pick(pool()),pp=pick(PP),t=pick(['past','pres','fut']);
    const kind=t==='fut'&&v.pfFut&&Math.random()<.4?'pf':'impf';
    cur={t,kind,txt:`${pp.p} ${form(v,t,pp,kind)}`};
    $('#rsLine').innerHTML=esc(cap(cur.txt))+'.';$('#rsInf').textContent=`${v.inf} · ${v.en}`;
  };
  const answer=t=>{
    if(!running)return;const good=t===cur.t,card=$('#rsCard');
    if(good){score++;streak++;}else streak=0;
    $('#rsFb').innerHTML=good?(streak>=5?`🔥 streak ${streak}!`:'✓'):`✗ It's <b>${TENSE[cur.t].en.toLowerCase()}</b>${cur.kind==='pf'?': a perfective verb conjugated like the present means the future!':''}`;
    card.classList.remove('flash-ok','flash-bad');void card.offsetWidth;card.classList.add(good?'flash-ok':'flash-bad');
    setTimeout(()=>card.classList.remove('flash-ok','flash-bad'),220);$('#rsScore').textContent=score;next();
  };
  const start=()=>{
    left=60;score=0;streak=0;running=true;
    $('#rsStage').innerHTML=`<div class="game__bar"><span class="rush__time" id="rsTime">60</span><span class="score">Score: <span id="rsScore">0</span></span></div>
      <div class="progress" style="margin-bottom:8px"><div class="progress__fill" id="rsFill" style="width:100%;background:var(--red)"></div></div>
      <div class="rush__card" id="rsCard"><div class="rush__line" id="rsLine"></div><div class="gloss" style="margin:8px 0 0" id="rsInf"></div></div>
      <div class="feedback" id="rsFb" style="text-align:center"></div>
      <div class="tensebtns">${['past','pres','fut'].map(t=>`<button class="btn" data-t="${t}" style="background:${TENSE[t].c}">${TENSE[t].icon} ${TENSE[t].en}</button>`).join('')}</div>`;
    $$('[data-t]').forEach(b=>b.onclick=()=>answer(b.dataset.t));
    next();
    timer=setInterval(()=>{left--;$('#rsTime').textContent=left;$('#rsFill').style.width=(left/60*100)+'%';if(left<=0)end();},1000);
  };
  const end=()=>{
    clearInterval(timer);running=false;addXP(score);const nb=score>best;if(nb){best=score;store.set('rushBest',best);burst();}
    $('#rsStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${S(nb?"Но'вый реко'рд!":"Вре'мя вы'шло!")}</p><div class="result__big">${score}</div><p><b>correct answers</b> · best ${best}</p><div class="actions"><button class="btn btn--green" id="rsGo">Go again ⚡</button></div></div>`;
    $('#rsGo').onclick=start;
  };
  const key=e=>{if(!running)return;const m={ArrowLeft:'past',ArrowDown:'pres',ArrowRight:'fut'}[e.key];if(m){e.preventDefault();answer(m);}};
  document.addEventListener('keydown',key);
  cleanup=()=>{clearInterval(timer);running=false;document.removeEventListener('keydown',key);};
  intro();
};

/* ============ TIME MACHINE ============ */
VIEWS.machine=el=>{
  shell(el,'Time machine','The time word tells you the tense. Pick the verb form that fits. The emoji shows whether я / ты is a man or a woman.',`<div class="game">${bar('tm')}<div id="tmStage"></div></div>`);
  mcRound({stage:'#tmStage',id:'tm',total:12,make:()=>Array.from({length:12},()=>{
    const v=pick(pool()),pp=pick(PP),t=pick(['past','pres','fut']);return {v,pp,t,m:pick(MARKERS[t])};}),
  render:(q,i,answer,next)=>{
    const {v,pp,t,m}=q,right=form(v,t,pp);
    const cand=new Set([right]);
    const others=[form(v,'past',PP[(PP.indexOf(pp)+1)%PP.length]),form(v,'pres',pp),form(v,'fut',pp),form(v,'past',pp),form(v,'pres',PP[(PP.indexOf(pp)+4)%PP.length]),form(v,'fut',PP[(PP.indexOf(pp)+3)%PP.length])];
    for(const o of shuffle(others)){if(cand.size>=4)break;if(o)cand.add(o);}
    const opts=shuffle([...cand]);
    $('#tmStage').innerHTML=`<div class="stage">
      ${tTag(t)}
      <div class="who" style="margin-top:12px">${pp.e}</div>
      <p class="sentence">${esc(cap(m))} ${pp.p} <span class="blank" id="blank">${esc(right)}</span>.</p>
      <p class="gloss">${esc(v.inf)} · ${esc(v.en)}</p>
      <div class="choices">${opts.map(o=>`<button class="choice" data-ok="${o===right?1:0}">${esc(o)}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(i===11)}</div>`;
    $('.tag-tense').style.visibility='hidden';
    wireChoices(b=>b.dataset.ok==='1',ok=>{answer(ok,`${esc(cap(m))} ${pp.p} <b>${esc(right)}</b>`);$('#blank').classList.add('filled');$('.tag-tense').style.visibility='visible';
      $('#fb').innerHTML=`“${esc(m)}” → ${TENSE[t].en.toLowerCase()}${t==='past'?` · ${pp.p} ${pp.e} → ${['masculine -л','feminine -ла','','plural -ли'][pp.g]}`:''}`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ TENSE BUILDER (typing) ============ */
const KB=['йцукенгшщзхъ','фывапролджэ','ячсмитьбюё'];
VIEWS.build=el=>{
  let mode='mix';
  shell(el,'Tense builder','Type the verb form. For the future, type both words (бу́ду чита́ть). You don’t need stress marks, and Е / Ё both count.',`
    <div class="game"><div class="toggle-row">${['mix','past','pres','fut'].map((m,k)=>`<button class="btn btn--sm ${k?'btn--ghost':''}" data-m="${m}">${m==='mix'?'🔀 Mix':TENSE[m].icon+' '+TENSE[m].en}</button>`).join('')}</div>${bar('tb')}<div id="tbStage"></div></div>`);
  let qs,i,score,review;
  const reset=()=>{qs=Array.from({length:10},()=>({v:pick(pool()),pp:pick(PP),t:mode==='mix'?pick(['past','pres','fut']):mode}));i=0;score=0;review=[];};
  const draw=()=>{
    $('#tbScore').textContent=`${score} / ${qs.length}`;$('#tbFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){results($('#tbStage'),score,qs.length,review,()=>{reset();draw();});return;}
    const {v,pp,t}=qs[i],right=form(v,t,pp);let checked=false,hints=0;
    $('#tbStage').innerHTML=`<div class="stage">
      ${tTag(t)}
      <div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin:16px 0 4px">
        <span class="pron" style="font-family:var(--font-ru);font-weight:900;font-size:clamp(2rem,7vw,2.8rem);padding:2px 18px;border:var(--border);border-radius:16px;background:${TENSE[t].c};box-shadow:var(--shadow-sm)">${ppLabel(pp)}</span>
        <span style="font-family:var(--font-display);font-weight:800;font-size:2rem">+</span>
        <span class="bigword" style="margin:0">${esc(v.inf)}</span></div>
      <p class="gloss">${esc(v.en)}</p>
      <input class="answer" id="tbIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…" lang="ru">
      <div class="feedback" id="fb"></div>
      <div class="actions"><button class="btn btn--ghost btn--sm" id="hint">💡 Hint</button><button class="btn btn--green" id="go">Check ↵</button></div>
      <div class="kbd">${KB.map((r,ri)=>`<div class="kbd__row">${[...r].map(c=>`<button class="key" data-k="${c}">${c}</button>`).join('')}${ri===2?'<button class="key" data-k=" " style="min-width:90px">space</button><button class="key key--wide" data-k="⌫">⌫</button>':''}</div>`).join('')}</div>
    </div>`;
    const inp=$('#tbIn');inp.focus();
    inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();$('#go').click();}};
    $$('.key').forEach(k=>k.onclick=()=>{
      if(checked)return;const s=inp.selectionStart??inp.value.length,e2=inp.selectionEnd??s;
      if(k.dataset.k==='⌫'){if(s===e2&&s>0){inp.value=inp.value.slice(0,s-1)+inp.value.slice(e2);inp.setSelectionRange(s-1,s-1);}else{inp.value=inp.value.slice(0,s)+inp.value.slice(e2);inp.setSelectionRange(s,s);}}
      else{inp.value=inp.value.slice(0,s)+k.dataset.k+inp.value.slice(e2);inp.setSelectionRange(s+1,s+1);}
      inp.focus();
    });
    $('#hint').onclick=()=>{if(checked)return;const p=plain(right);hints=Math.min(hints+1,p.length-1);inp.value=p.slice(0,hints);inp.focus();};
    $('#go').onclick=()=>{
      if(checked){i++;draw();return;}
      if(!inp.value.trim()){inp.focus();return;}
      checked=true;inp.readOnly=true;const ok=norm(inp.value)===norm(right);
      if(ok){score++;inp.classList.add('ok');$('#fb').innerHTML=`${S("Ве'рно!")} ✦ <span class="ru">${pp.p} ${esc(right)}</span>`;}
      else{review.push(`${pp.p} ${pp.e} + ${esc(v.inf)} (${TENSE[t].en.toLowerCase()}) → <b>${esc(right)}</b>`);inp.classList.add('bad');
        $('#fb').innerHTML=`Correct: <span class="ru" style="background:var(--yellow);padding:0 8px;border-radius:6px;border:2px solid var(--ink)">${esc(right)}</span>${t==='past'?` <span class="muted">(${pp.p} ${pp.e} → ${['-л','-ла','-ло','-ли'][pp.g]})</span>`:''}`;}
      $('#go').textContent=i===qs.length-1?'Results →':'Next →';$('#tbScore').textContent=`${score} / ${qs.length}`;
    };
  };
  $$('[data-m]').forEach(b=>b.onclick=()=>{mode=b.dataset.m;$$('[data-m]').forEach(x=>x.classList.toggle('btn--ghost',x!==b));reset();draw();});
  reset();draw();
};

/* ============ PAST ENDINGS ============ */
VIEWS.pastend=el=>{
  shell(el,'Past endings','Who did it yesterday? Look at the picture and pick the past form: -л, -ла or -ли.',`
    <div class="game">${bar('pe')}<div id="peStage"></div>
    <div class="rules"><div class="rule" style="--gc:var(--blue)"><b>-л</b>он, я 👨, ты 👦</div><div class="rule" style="--gc:var(--pink)"><b>-ла</b>${S("она'")}, я 👩, ты 👧</div><div class="rule" style="--gc:var(--green)"><b>-ло</b>${S("оно'")} (things)</div><div class="rule" style="--gc:var(--yellow)"><b>-ли</b>мы, вы, ${S("они'")}</div></div></div>`);
  mcRound({stage:'#peStage',id:'pe',total:12,make:()=>Array.from({length:12},()=>({v:pick(pool().concat([BYT])),pp:pick(PP),m:pick(MARKERS.past)})),
  render:(q,i,answer,next)=>{
    const {v,pp,m}=q,opts=[0,1,3].map(g=>v.past[g]);
    $('#peStage').innerHTML=`<div class="stage">
      <div class="who" style="font-size:4.4rem">${pp.e}</div>
      <p class="sentence">${esc(cap(m))} ${pp.p} <span class="blank" id="blank">${esc(v.past[pp.g])}</span>.</p>
      <p class="gloss">${esc(v.inf)} · ${esc(v.en)}</p>
      <div class="choices" style="grid-template-columns:repeat(3,1fr)">${opts.map(o=>`<button class="choice" data-ok="${o===v.past[pp.g]?1:0}">${esc(o)}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(i===11)}</div>`;
    wireChoices(b=>b.dataset.ok==='1',ok=>{answer(ok,`${pp.p} ${pp.e} <b>${esc(v.past[pp.g])}</b>`);$('#blank').classList.add('filled');
      $('#fb').innerHTML=`${pp.p} ${pp.e} → ${['masculine','feminine','neuter','plural'][pp.g]} → ${esc(v.past[pp.g])}`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ TIME WORDS ============ */
VIEWS.markers=el=>{
  shell(el,'Time words','Time words are your best clue to the tense. Is each one about the past, the present or the future?',`<div class="game">${bar('mk')}<div id="mkStage"></div></div>`);
  const EN={};
  [["вчера'","yesterday"],["позавчера'","the day before yesterday"],["ра'ньше","before, earlier"],["час наза'д","an hour ago"],["в про'шлом году'","last year"],["на про'шлой неде'ле","last week"],["сейча'с","now"],["тепе'рь","now (these days)"],["в да'нный моме'нт","at the moment"],["за'втра","tomorrow"],["послеза'втра","the day after tomorrow"],["ско'ро","soon"],["че'рез час","in an hour"],["в сле'дующем году'","next year"],["на сле'дующей неде'ле","next week"]].forEach(([r,e])=>EN[S(r)]=e);
  const all=Object.entries(MARKERS).flatMap(([t,a])=>a.map(w=>({t,w})));
  mcRound({stage:'#mkStage',id:'mk',total:12,make:()=>shuffle(all).slice(0,12),render:(q,i,answer,next)=>{
    $('#mkStage').innerHTML=`<div class="stage">
      <div class="bigword" style="margin:18px 0 6px">${esc(q.w)}</div><p class="gloss">&nbsp;</p>
      <div class="choices" style="grid-template-columns:repeat(3,1fr)">${['past','pres','fut'].map(t=>`<button class="choice" data-t="${t}" style="font-family:var(--font-display)">${TENSE[t].icon}<small style="font-size:.95rem;color:var(--ink)">${TENSE[t].en}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(i===11)}</div>`;
    wireChoices(b=>b.dataset.t===q.t,ok=>{answer(ok,`${esc(q.w)} → ${TENSE[q.t].en.toLowerCase()}`);$('.gloss').textContent=EN[q.w]||'';$('#fb').innerHTML=`${esc(q.w)} = ${EN[q.w]||''} → ${TENSE[q.t].icon} ${TENSE[q.t].en.toLowerCase()}`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ FUTURE: WHICH ONE? ============ */
VIEWS.future=el=>{
  shell(el,'Future: which one?','<b>бу́ду + infinitive</b> = a process, something long or repeated. <b>Perfective</b> = one action with a result. Pick the one that fits.',`<div class="game">${bar('fu')}<div id="fuStage"></div>
    <div class="rules"><div class="rule" style="--gc:var(--blue)"><b>${S("бу'ду чита'ть")}</b>I'll be reading: process, how long, how often</div><div class="rule" style="--gc:var(--green)"><b>${S("прочита'ю")}</b>I'll read it (to the end): one result</div></div></div>`);
  mcRound({stage:'#fuStage',id:'fu',total:10,make:()=>shuffle(FUT).slice(0,10),render:(q,i,answer,next)=>{
    const [s,r,w,why,en]=q;const opts=shuffle([r,w]);
    const parts=esc(s).split('{}');
    $('#fuStage').innerHTML=`<div class="stage">
      <p class="sentence">${parts[0]}<span class="blank" id="blank">${esc(r)}</span>${parts[1]}</p><p class="gloss">${esc(en)}</p>
      <div class="choices">${opts.map(o=>`<button class="choice" data-ok="${o===r?1:0}">${esc(o)}<small>${/^бу/.test(plain(o))?'process · бу́ду + inf.':'one result · perfective'}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(i===9)}</div>`;
    wireChoices(b=>b.dataset.ok==='1',ok=>{answer(ok,esc(s.replace('{}',r)));$('#blank').classList.add('filled');$('#fb').innerHTML=S(esc(why));});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ INIT ============ */
setLevel(level);
$('#xp').textContent='★ '+xp+' XP';
$('#footRu').textContent=S("вчера', сего'дня, за'втра — по-ру'сски");
go();
