
/* ============ DATA ============
 An apostrophe ' after a Cyrillic vowel = stress mark.
 verb | english | partner without -ся | its meaning | type | level | emoji | present (я…они), or =stem for regular -аться verbs */
const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1́');
const plain=s=>s.replace(/́/g,'');
const TYPES={
  self:{e:'🪞',name:'Oneself',c:'var(--pink)',text:'The action goes back to the person doing it (= себя́).'},
  each:{e:'🤝',name:'Each other',c:'var(--blue)',text:'Two or more people do it to each other.'},
  feel:{e:'💭',name:'Feelings',c:'var(--yellow)',text:'Feelings and reactions. Many of these only exist with -ся.'},
  thing:{e:'🚪',name:'By itself',c:'var(--green)',text:'A thing or event “does it” by itself: the shop opens, the film begins.'},
  new:{e:'🔀',name:'New meaning',c:'var(--lilac)',text:'With -ся the verb gets a different meaning.'}
};
const RAW=`
просыпа'ться|to wake up|||self|A1|⏰|=просыпа'
мы'ться|to wash (oneself)|мыть|to wash (something)|self|A1|🛁|мо'юсь мо'ешься мо'ется мо'емся мо'етесь мо'ются
одева'ться|to get dressed|одева'ть|to dress (someone)|self|A1|👕|=одева'
умыва'ться|to wash your face|умыва'ть|to wash (someone's) face|self|A2|🧼|=умыва'
раздева'ться|to get undressed|раздева'ть|to undress (someone)|self|A2|🧥|=раздева'
причёсываться|to brush your hair|причёсывать|to brush (someone's) hair|self|A2|💇|=причёсыва
сади'ться|to sit down|||self|A1|🪑|сажу'сь сади'шься сади'тся сади'мся сади'тесь садя'тся
ложи'ться|to lie down, go to bed|||self|A2|🛌|ложу'сь ложи'шься ложи'тся ложи'мся ложи'тесь ложа'тся
встреча'ться|to meet (each other)|встреча'ть|to meet, pick up (someone)|each|A1|🤝|=встреча'
знако'миться|to get to know each other|знако'мить|to introduce (someone)|each|A2|🫱|знако'млюсь знако'мишься знако'мится знако'мимся знако'митесь знако'мятся
целова'ться|to kiss (each other)|целова'ть|to kiss (someone)|each|A2|💋|целу'юсь целу'ешься целу'ется целу'емся целу'етесь целу'ются
обнима'ться|to hug (each other)|обнима'ть|to hug (someone)|each|A2|🫂|=обнима'
ссо'риться|to quarrel|||each|A2|😤|ссо'рюсь ссо'ришься ссо'рится ссо'римся ссо'ритесь ссо'рятся
улыба'ться|to smile|||feel|A1|😊|=улыба'
смея'ться|to laugh|||feel|A1|😂|смею'сь смеёшься смеётся смеёмся смеётесь смею'тся
боя'ться|to be afraid|||feel|A1|😱|бою'сь бои'шься бои'тся бои'мся бои'тесь боя'тся
нра'виться|to be liked (= to like)|||feel|A1|❤️|нра'влюсь нра'вишься нра'вится нра'вимся нра'витесь нра'вятся
волнова'ться|to worry|волнова'ть|to worry (someone)|feel|A2|😟|волну'юсь волну'ешься волну'ется волну'емся волну'етесь волну'ются
интересова'ться|to be interested in|интересова'ть|to interest (someone)|feel|A2|🧐|интересу'юсь интересу'ешься интересу'ется интересу'емся интересу'етесь интересу'ются
наде'яться|to hope|||feel|A2|🤞|наде'юсь наде'ешься наде'ется наде'емся наде'етесь наде'ются
начина'ться|to begin (by itself)|начина'ть|to begin (something)|thing|A1|🎬|=начина'
открыва'ться|to open (by itself)|открыва'ть|to open (something)|thing|A1|🔓|=открыва'
закрыва'ться|to close (by itself)|закрыва'ть|to close (something)|thing|A1|🔒|=закрыва'
конча'ться|to end|конча'ть|to finish (something)|thing|A2|🏁|=конча'
находи'ться|to be located|находи'ть|to find|thing|A2|📍|нахожу'сь нахо'дишься нахо'дится нахо'димся нахо'дитесь нахо'дятся
учи'ться|to study (at a school)|учи'ть|to learn (words); to teach|new|A1|🎓|учу'сь у'чишься у'чится у'чимся у'читесь у'чатся
занима'ться|to study; to do (sport)|занима'ть|to occupy, take (a seat)|new|A1|🏋️|=занима'
собира'ться|to get ready; to plan to|собира'ть|to collect; to pack|new|A2|🎒|=собира'
возвраща'ться|to come back|возвраща'ть|to give back|new|A2|↩️|=возвраща'
`;
const PRON=['я','ты',S("он/она'"),'мы','вы',S("они'")];
const V=RAW.trim().split('\n').map((l,id)=>{
  const [w,en,pn,pnEn,type,lvl,e,f]=l.split('|');
  const pres=f.startsWith('=')?(st=>[st+'юсь',st+'ешься',st+'ется',st+'емся',st+'етесь',st+'ются'])(S(f.slice(1))):S(f).split(' ');
  const inf=S(w);const b=inf.replace(/ться$/,'');
  return {id,w:inf,en,pn:S(pn),pnEn,type,lvl,e,pres,past:[b+'лся',b+'лась',b+'лось',b+'лись']};
});
/* with or without -ся? sentence | right | wrong | english | why */
const OBJ=[
  ["Ма'ма {} ребёнка.","одева'ет","одева'ется","Mum is dressing the child.","There’s an object (ребёнка), so no -ся."],
  ["Ребёнок {} сам.","одева'ется","одева'ет","The child is getting dressed by himself.","No object: he dresses himself → -ся."],
  ["Я {} посу'ду.","мо'ю","мо'юсь","I’m washing the dishes.","There’s an object (посу'ду), so no -ся."],
  ["Я {} в ду'ше.","мо'юсь","мо'ю","I’m washing in the shower.","I wash myself → -ся."],
  ["Учи'тель {} уро'к.","начина'ет","начина'ется","The teacher starts the lesson.","Someone starts something (уро'к) → no -ся."],
  ["Уро'к {} в де'вять.","начина'ется","начина'ет","The lesson starts at nine.","The lesson starts by itself → -ся."],
  ["Он {} дверь.","открыва'ет","открыва'ется","He opens the door.","He opens something (дверь) → no -ся."],
  ["Магази'н {} в де'сять.","открыва'ется","открыва'ет","The shop opens at ten.","The shop opens by itself → -ся."],
  ["Я {} дру'га на вокза'ле.","встреча'ю","встреча'юсь","I’m meeting my friend at the station.","I meet someone (дру'га) → no -ся."],
  ["Мы {} в кафе'.","встреча'емся","встреча'ем","We meet (each other) at the café.","We meet each other → -ся."],
  ["Она' {} англи'йский.","у'чит","у'чится","She’s learning English.","She learns something (англи'йский) → учи'ть."],
  ["Она' {} в университе'те.","у'чится","у'чит","She studies at university.","Studying at a place → учи'ться."],
  ["Я {} рабо'ту в шесть.","конча'ю","конча'юсь","I finish work at six.","I finish something (рабо'ту) → no -ся."],
  ["Фильм {} в де'сять.","конча'ется","конча'ет","The film ends at ten.","The film ends by itself → -ся."],
  ["Па'па {} сы'на.","целу'ет","целу'ется","Dad kisses his son.","He kisses someone (сы'на) → no -ся."],
  ["Они' {} на свида'нии.","целу'ются","целу'ют","They kiss on their date.","They kiss each other → -ся."]
].map(r=>r.map((x,k)=>k<3||k===4?S(x):x));
/* нравится / нравятся */
const LIKE=[
  ["Мне {} ко'фе.","sg","I like coffee."],["Мне {} цветы'.","pl","I like flowers."],["Ей {} Москва'.","sg","She likes Moscow."],
  ["Нам {} ко'шки.","pl","We like cats."],["Мне {} чита'ть.","inf","I like reading."],["Тебе' {} фи'льмы?","pl","Do you like films?"],
  ["Ему' {} му'зыка.","sg","He likes music."],["Мне {} э'ти ту'фли.","pl","I like these shoes."],["Им {} гуля'ть.","inf","They like walking."],
  ["Вам {} Росси'я?","sg","Do you like Russia?"],["Де'тям {} игру'шки.","pl","Children like toys."],["Мне {} твой брат.","sg","I like your brother."]
].map(r=>[S(r[0]),r[1],r[2]]);
/* daily routines to put in order */
const ROUT=[
  {t:'My morning ☀️',steps:["Я просыпа'юсь в семь часо'в.","Я встаю'.","Я умыва'юсь.","Я одева'юсь.","Я за'втракаю.","Я собира'юсь и иду' на рабо'ту."]},
  {t:'My evening 🌙',steps:["Я возвраща'юсь домо'й.","Я раздева'юсь.","Я у'жинаю.","Я мо'юсь в ду'ше.","Я ложу'сь спать.","Я засыпа'ю."]},
  {t:'A love story 💕',steps:["Мы знако'мимся на вечери'нке.","Пото'м мы встреча'емся ка'ждую неде'лю.","Одна'жды мы ссо'римся.","Но пото'м мы мири'мся и обнима'емся.","Че'рез год мы же'нимся!"]}
].map(r=>({t:r.t,steps:r.steps.map(S)}));

/* ============ HELPERS ============ */
const norm=s=>plain(s).trim().toLowerCase().replace(/ё/g,'е').replace(/[\s!.]+/g,'');
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const store={get(k,d){try{const v=localStorage.getItem('rg_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('rg_'+k,JSON.stringify(v))}catch(e){}}};
let xp=store.get('xp',0), level=store.get('level','all');
const pool=()=>V.filter(v=>level==='all'||v.lvl===level);
const hlEnd=f=>esc(f).replace(/(с[яь])$/,'<span class="ss">$1</span>');
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
  let i=0,score=0,review=[],qs=make();const n=()=>Math.min(total,qs.length);
  const next=()=>{
    $('#'+id+'Score').textContent=`${score} / ${n()}`;$('#'+id+'Fill').style.width=(i/n()*100)+'%';
    if(i>=n()){results($(stage),score,n(),review,()=>{i=0;score=0;review=[];qs=make();next();});return;}
    render(qs[i],i,i===n()-1,(ok,rev)=>{if(ok)score++;else if(rev)review.push(rev);$('#'+id+'Score').textContent=`${score} / ${n()}`;},()=>{i++;next();});
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
function keyChoices(){const key=e=>{if(e.target.tagName==='INPUT'||e.target.tagName==='SELECT')return;const k=+e.key;if(k>=1&&k<=5){const b=$$('.choice')[k-1];if(b&&!b.disabled)b.click();}else if(e.key==='Enter'){const nb=$('#nextBtn');if(nb&&$('#nextWrap').style.visibility==='visible'){e.preventDefault();nb.click();}}};document.addEventListener('keydown',key);cleanup=()=>document.removeEventListener('keydown',key);}
const gapSent=(s,ans)=>{const [a,b]=esc(s).split('{}');return `${a}<span class="blank" id="blank">${esc(ans)}</span>${b}`;};

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
$('#modalClose').onclick=()=>$('#modal').classList.remove('is-open');

/* ============ HOME ============ */
const MODES=[
  ['meaning','💡','What -ся means','Five meanings: oneself, each other, feelings, “by itself”, and a new meaning.','var(--pink)'],
  ['forms','🛠️','Forms','-ся or -сь? Present and past tables, and why -тся sounds like [цца].','var(--yellow)'],
  ['with','⚖️','With or without?','мыть vs мы́ться, начина́ть vs начина́ться, and the famous мне нра́вится.','var(--blue)'],
  ['list','📖','Verb list',`${V.length} -ся verbs with their partner verbs and types.`,'var(--green)'],
  ['sasya','🎯','-ся or -сь?','Look at the last letter before the ending and choose.','var(--lilac)'],
  ['object','🧩','Add -ся?','Ма́ма одева́ет ребёнка, but Ребёнок одева́ется. With or without -ся?','var(--red)'],
  ['conj','⌨️','Conjugate','Type the present or past form. Cyrillic keyboard included.','var(--yellow)'],
  ['type','🪞','Which type?','Oneself, each other, a feeling, by itself, or a new meaning?','var(--pink)'],
  ['like','❤️','Нра́вится!','Мне нра́вится or мне нра́вятся? Like things the Russian way.','var(--blue)'],
  ['routine','📅','My day','Put the morning, evening and date routines in order.','var(--green)'],
  ['memory','🧠','Memory match','Pair every -ся verb with its English meaning.','var(--lilac)']
];
VIEWS.home=el=>{
  const words=shuffle(V).slice(0,14).map(v=>`${v.e} ${v.w}`);
  const track=`<div class="marquee__track" aria-hidden="true">${words.map(w=>`<span>${esc(w)}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar ru">-ся</div>
      <span class="hero__sticker2">${S("улыба'йся!")}</span>
      <span class="hero__sticker">A1 ✦ A2</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">-ся verbs</h1>
      <p class="hero__lead">Wake up, get dressed, meet, smile, worry, begin… Lots of everyday Russian verbs end in <b>-ся</b>. Learn what it means and how it works. <span class="ru">${S("Я учу'сь и не волну'юсь!")}</span></p>
      <div class="hero__stats">
        <span class="chip" style="background:var(--pink)">🪞 oneself</span>
        <span class="chip">🤝 each other</span>
        <span class="chip" style="background:var(--yellow)">💭 feelings</span>
        <span class="chip" style="background:var(--green)">${V.length} verbs · 7 games</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#meaning">What does -ся mean? →</a>
        <a class="btn btn--ghost" href="#routine">Jump into a game</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Four short lessons, then seven games. Use the <b>A1 / A2 / All</b> switch at the top to choose the verbs.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">${String(i+1).padStart(2,'0')}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${s}</p><span class="mode__go">${i<4?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
};

/* ============ WHAT -СЯ MEANS ============ */
VIEWS.meaning=el=>{
  const ex={self:["Я одева'юсь.","I get dressed (= I dress myself)."],each:["Мы встреча'емся в кафе'.","We meet (each other) at the café."],feel:["Я бою'сь соба'к.","I’m afraid of dogs."],thing:["Уро'к начина'ется в де'вять.","The lesson starts at nine."],new:["Я учу'сь в университе'те.","I study at university (учи'ть = to learn, teach)."]};
  shell(el,'What -ся means','-ся comes from <span class="ru"><b>себя\'</b></span> (oneself). It tells you the action <b>doesn’t go to someone or something else</b>. There are five main uses.',`
    <div class="big-ex"><div class="row"><span style="--gc:var(--surface)">Я мо'ю маши'ну.</span><span style="--gc:var(--pink)">Я мо'ю<b>сь</b>.</span></div><small>I wash the car. → I wash (myself). The -ся replaces the object!</small></div>
    <div class="types">${Object.entries(TYPES).map(([k,t])=>`<div class="tcard" style="--gc:${t.c}"><span class="ic">${t.e}</span><h3>${t.name}</h3><p>${t.text}</p>
      <div class="ex">${esc(S(ex[k][0]))}<small>${esc(ex[k][1])}</small></div>
      <p class="ru" style="font-weight:800">${V.filter(v=>v.type===k).slice(0,5).map(v=>v.w).join(' · ')}</p></div>`).join('')}</div>
    <div class="box" style="--gc:var(--lilac);margin-bottom:40px"><h3>💡 The golden rule</h3><p>A -ся verb <b>never takes a direct object</b> (no accusative after it).</p>
      <p class="ex">Я одева'ю ребёнка. ✅ · Я одева'юсь ребёнка. ❌</p><p>So if there’s an object, you usually need the verb <b>without</b> -ся.</p></div>
    <div class="actions"><a class="btn btn--green" href="#type">Practise: Which type? →</a><a class="btn btn--ghost" href="#forms">Next: Forms</a></div>`);
};

/* ============ FORMS ============ */
VIEWS.forms=el=>{
  shell(el,'Forms','Conjugate the verb as usual, then glue on the ending. It’s <b>-ся</b> or <b>-сь</b> depending on the letter before it.',`
    <div class="duo">
      <div class="box" style="--gc:var(--yellow)"><h3>-ся after a consonant</h3><p class="ex">он у'чит<span class="ss">ся</span> · они' занима'ют<span class="ss">ся</span> · ты у'чишь<span class="ss">ся</span></p><p class="ex">он учи'л<span class="ss">ся</span> (past)</p></div>
      <div class="box" style="--gc:var(--pink)"><h3>-сь after a vowel</h3><p class="ex">я учу'<span class="ss">сь</span> · вы у'чите<span class="ss">сь</span></p><p class="ex">она' учи'ла<span class="ss">сь</span> · они' учи'ли<span class="ss">сь</span></p><p class="ex">учи'<span class="ss">сь</span>! (imperative)</p></div>
    </div>
    <h2 class="subhead">See any verb</h2>
    <div class="builder">
      <div style="text-align:center"><select id="vSel">${V.map(v=>`<option value="${v.id}">${v.e} ${v.w} · ${v.en}</option>`).join('')}</select></div>
      <div class="ftab" id="ftab"></div>
    </div>
    <div class="duo">
      <div class="box" style="--gc:var(--blue)"><h3>🗣️ Pronunciation: [цца]</h3><p>-тся and -ться both sound like <b>[цца]</b>:</p>
        <p class="ex">у'чится → [у'чицца] · учи'ться → [учи'цца]</p>
        <p class="ex">занима'ется → [занима'ицца]</p>
        <p>Spelling tip: <b>-ться</b> = infinitive (что де'лать?), <b>-тся</b> = он / она́ (что де'лает?).</p></div>
      <div class="box" style="--gc:var(--green)"><h3>✏️ Spelling: -тся or -ться?</h3><p>Ask the question!</p>
        <p class="ex">Что де'лать? → учи'ться (with ь)</p><p class="ex">Что де'лает? → у'чится (no ь)</p>
        <p class="ex">Я хочу' учи'ться. · Он у'чится.</p></div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#sasya">Practise: -ся or -сь? →</a><a class="btn btn--ghost" href="#with">Next: With or without?</a></div>`);
  const show=()=>{const v=V[+$('#vSel').value];
    $('#ftab').innerHTML=`<div class="fcol"><h4 style="--gc:var(--yellow)">Present</h4>${v.pres.map((f,k)=>`<div><span>${PRON[k]}</span><b>${hlEnd(f)}</b></div>`).join('')}</div>
      <div class="fcol"><h4 style="--gc:var(--lilac)">Past</h4>${[['он',0],[S("она'"),1],[S("оно'"),2],[S("они'"),3]].map(([p,k])=>`<div><span>${p}</span><b>${hlEnd(v.past[k])}</b></div>`).join('')}
        <div style="background:var(--surface)"><span>${v.pn?'without -ся':'type'}</span><b>${v.pn?esc(v.pn):TYPES[v.type].e+' '+TYPES[v.type].name}</b></div></div>`;
    $$('.ss').forEach(()=>{});
  };
  $('#vSel').onchange=show;show();
};

/* ============ WITH OR WITHOUT ============ */
VIEWS.with=el=>{
  const pairs=V.filter(v=>v.pn);
  shell(el,'With or without -ся?','Many verbs come in pairs. <b>Without</b> -ся you do something <b>to someone or something</b>. <b>With</b> -ся the action stays with you, happens between people, or happens by itself.',`
    <div class="tablewrap"><table><tr><th>without -ся</th><th></th><th>with -ся</th><th></th></tr>
      ${pairs.map(v=>`<tr><td class="ru">${esc(v.pn)}</td><td>${esc(v.pnEn)}</td><td class="ru" style="background:#fff4c2">${esc(v.w)}</td><td>${esc(v.en)}</td></tr>`).join('')}
    </table></div>
    <h2 class="subhead">❤️ Нра'вится: the upside-down verb</h2>
    <div class="big-ex"><div class="row"><span style="--gc:var(--blue)">Мне</span><span style="--gc:var(--yellow)">нра'вится</span><span style="--gc:var(--pink)">ко'фе.</span></div><small>Literally: “Coffee is pleasing to me.” The thing you like is the subject!</small></div>
    <div class="duo">
      <div class="box" style="--gc:var(--yellow)"><h3>One thing or an action → нра'вится</h3><p class="ex">Мне нра'вится Москва'.</p><p class="ex">Тебе' нра'вится чита'ть?</p></div>
      <div class="box" style="--gc:var(--pink)"><h3>Several things → нра'вятся</h3><p class="ex">Мне нра'вятся цветы'.</p><p class="ex">Ей нра'вятся ко'шки.</p></div>
    </div>
    <div class="box" style="--gc:var(--lilac);margin-bottom:40px"><h3>👤 Who likes it? Dative!</h3><p class="ex">мне · тебе' · ему' · ей · нам · вам · им</p><p class="ex">Ма'ме нра'вится ко'фе. · Бра'ту нра'вятся маши'ны.</p></div>
    <div class="actions"><a class="btn btn--green" href="#object">Practise: Add -ся? →</a><a class="btn btn--ghost" href="#like">Play: Нра́вится!</a></div>`);
};

/* ============ LIST ============ */
VIEWS.list=el=>{
  shell(el,'Verb list','All the verbs with their type, partner without -ся, and two key forms.',`
    <div class="tablewrap"><table><tr><th></th><th>verb</th><th>English</th><th>я</th><th>${S("он/она'")}</th><th>type</th><th>without -ся</th></tr>
    ${pool().map(v=>`<tr><td>${v.e}</td><td class="ru">${esc(v.w)}</td><td>${esc(v.en)}</td><td class="ru">${hlEnd(v.pres[0])}</td><td class="ru">${hlEnd(v.pres[2])}</td><td><span class="rtag" style="--gc:${TYPES[v.type].c}">${TYPES[v.type].e} ${TYPES[v.type].name}</span></td><td class="ru">${v.pn?esc(v.pn):'—'}</td></tr>`).join('')}
    </table></div>`);
};

/* ============ GAME: -ся or -сь ============ */
VIEWS.sasya=el=>{
  shell(el,'-ся or -сь?','Look at the last letter before the gap: a <b>consonant</b> → -ся, a <b>vowel</b> → -сь. Keys 1–2.',`<div class="game">${bar('ss')}<div id="ssStage"></div></div>`);
  mcRound({stage:'#ssStage',id:'ss',total:15,make:()=>Array.from({length:15},()=>{const v=pick(pool());const past=Math.random()<.35;const k=past?pick([0,1,3]):Math.random()*6|0;
    const form=past?v.past[k]:v.pres[k];const who=past?['он',S("она'"),'',S("они'")][k]:PRON[k];return {v,form,who};}),
  render:(q,i,last,answer,next)=>{
    const stem=q.form.slice(0,-2),end=q.form.slice(-2);
    $('#ssStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${q.v.e}</div>
      <p class="sentence">${esc(q.who)} ${esc(stem)}<span class="blank" id="blank">${end}</span></p><p class="gloss">${esc(q.v.w)} · ${esc(q.v.en)}</p>
      <div class="choices">${['ся','сь'].map((w,j)=>`<button class="choice" data-o="${w}" style="font-size:2rem">-${w}<small>${j?'after a vowel':'after a consonant'} · ${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    const lastL=plain(stem).slice(-1);
    wireChoices(b=>b.dataset.o===end,ok=>{answer(ok,`${esc(q.who)} <b>${esc(q.form)}</b>`);$('#blank').classList.add('filled');
      $('#fb').innerHTML=`“${lastL}” is a ${/[аеёиоуыэюя]/.test(lastL)?'vowel → <b>-сь</b>':'consonant → <b>-ся</b>'}: <span class="ru">${esc(q.form)}</span>`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: add -ся? ============ */
VIEWS.object=el=>{
  shell(el,'Add -ся?','Is there an object (someone or something the action goes to)? Then no -ся. If not, you probably need -ся. Keys 1–2.',`<div class="game">${bar('ob')}<div id="obStage"></div></div>`);
  mcRound({stage:'#obStage',id:'ob',total:12,make:()=>shuffle(OBJ).slice(0,12),render:(q,i,last,answer,next)=>{
    const [s,r,w,en,why]=q;
    $('#obStage').innerHTML=`<div class="stage">
      <p class="sentence">${gapSent(s,r)}</p><p class="gloss">${esc(en)}</p>
      <div class="choices">${shuffle([r,w]).map((o,j)=>`<button class="choice" data-o="${esc(o)}">${hlEnd(o)}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===r,ok=>{answer(ok,esc(s.replace('{}',r)));$('#blank').classList.add('filled');$('#fb').innerHTML=esc(why);});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: conjugate (typing) ============ */
VIEWS.conj=el=>{
  const KB=['йцукенгшщзхъ','фывапролджэ','ячсмитьбюё'];
  let mode='pres';
  shell(el,'Conjugate','Type the form for the pronoun. You don’t need the stress mark, and Е / Ё both count. Don’t forget -ся / -сь!',`
    <div class="game"><div class="toggle-row"><button class="btn btn--sm" data-m="pres">Present</button><button class="btn btn--sm btn--ghost" data-m="past">Past</button><button class="btn btn--sm btn--ghost" data-m="mix">Mix</button></div>${bar('cj')}<div id="cjStage"></div></div>`);
  let qs,i,score,review;
  const PAST_P=[['он',0],[S("она'"),1],[S("они'"),3],['мы',3],['я 👩',1],['я 👨',0]];
  const reset=()=>{qs=shuffle(pool()).slice(0,10).map(v=>{const t=mode==='mix'?pick(['pres','past']):mode;
    if(t==='pres'){const k=Math.random()*6|0;return {v,t,who:k===2?pick(['он',S("она'")]):PRON[k],ans:v.pres[k]};}
    const [who,k]=pick(PAST_P);return {v,t,who,ans:v.past[k]};});i=0;score=0;review=[];};
  const draw=()=>{
    $('#cjScore').textContent=`${score} / ${qs.length}`;$('#cjFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){results($('#cjStage'),score,qs.length,review,()=>{reset();draw();});return;}
    const q=qs[i];let checked=false,hints=0;
    $('#cjStage').innerHTML=`<div class="stage">
      <span class="g" style="--gc:${q.t==='pres'?'var(--yellow)':'var(--lilac)'}">${q.t==='pres'?'present · сейча́с':'past · вчера́'}</span>
      <div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin:14px 0 4px">
        <span style="font-family:var(--font-ru);font-weight:900;font-size:clamp(2rem,7vw,2.6rem);padding:2px 18px;border:var(--border);border-radius:16px;background:var(--blue);box-shadow:var(--shadow-sm)">${q.who}</span>
        <span style="font-family:var(--font-display);font-weight:800;font-size:2rem">+</span><span class="bigword" style="margin:0">${esc(q.v.w)}</span></div>
      <p class="gloss">${q.v.e} ${esc(q.v.en)}</p>
      <input class="answer" id="cjIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…" lang="ru">
      <div class="feedback" id="fb"></div>
      <div class="actions"><button class="btn btn--ghost btn--sm" id="hint">💡 Hint</button><button class="btn btn--green" id="go">Check ↵</button></div>
      <div class="kbd">${KB.map((r,ri)=>`<div class="kbd__row">${[...r].map(c=>`<button class="key" data-k="${c}">${c}</button>`).join('')}${ri===2?'<button class="key key--wide" data-k="⌫">⌫</button>':''}</div>`).join('')}</div></div>`;
    $('#cjStage').innerHTML=S($('#cjStage').innerHTML);
    const inp=$('#cjIn');inp.focus();
    inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();$('#go').click();}};
    $$('.key').forEach(k=>k.onclick=()=>{
      if(checked)return;const s=inp.selectionStart??inp.value.length,e2=inp.selectionEnd??s;
      if(k.dataset.k==='⌫'){if(s===e2&&s>0){inp.value=inp.value.slice(0,s-1)+inp.value.slice(e2);inp.setSelectionRange(s-1,s-1);}else{inp.value=inp.value.slice(0,s)+inp.value.slice(e2);inp.setSelectionRange(s,s);}}
      else{inp.value=inp.value.slice(0,s)+k.dataset.k+inp.value.slice(e2);inp.setSelectionRange(s+1,s+1);}
      inp.focus();
    });
    $('#hint').onclick=()=>{if(checked)return;const p=plain(q.ans);hints=Math.min(hints+1,p.length-1);inp.value=p.slice(0,hints);inp.focus();};
    $('#go').onclick=()=>{
      if(checked){i++;draw();return;}
      if(!inp.value.trim()){inp.focus();return;}
      checked=true;inp.readOnly=true;const ok=norm(inp.value)===norm(q.ans);
      if(ok){score++;inp.classList.add('ok');$('#fb').innerHTML=`${S("Ве'рно!")} ✦ <span class="ru">${hlEnd(q.ans)}</span>`;}
      else{review.push(`${q.who} + ${esc(q.v.w)} → <b>${esc(q.ans)}</b>`);inp.classList.add('bad');$('#fb').innerHTML=`Correct: <span class="ru" style="background:var(--yellow);padding:0 8px;border-radius:6px;border:2px solid var(--ink)">${hlEnd(q.ans)}</span>`;}
      $('#go').textContent=i===qs.length-1?'Results →':'Next →';$('#cjScore').textContent=`${score} / ${qs.length}`;
    };
  };
  $$('[data-m]').forEach(b=>b.onclick=()=>{mode=b.dataset.m;$$('[data-m]').forEach(x=>x.classList.toggle('btn--ghost',x!==b));reset();draw();});
  reset();draw();
};

/* ============ GAME: which type ============ */
VIEWS.type=el=>{
  shell(el,'Which type?','What does -ся do in this verb? Keys 1–5.',`<div class="game">${bar('tp')}<div id="tpStage"></div></div>`);
  mcRound({stage:'#tpStage',id:'tp',total:12,make:()=>shuffle(pool()).slice(0,12),render:(v,i,last,answer,next)=>{
    $('#tpStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${v.e}</div><div class="bigword">${esc(v.w)}</div><p class="gloss">${esc(v.en)}</p>
      <div class="choices" style="grid-template-columns:repeat(auto-fit,minmax(120px,1fr))">${Object.entries(TYPES).map(([k,t],j)=>`<button class="choice" data-t="${k}" style="background:${t.c};font-family:var(--font-display);font-size:1rem">${t.e}<br>${t.name}<small style="color:var(--ink)">${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.t===v.type,ok=>{answer(ok,`${esc(v.w)} → ${TYPES[v.type].name}`);
      $('#fb').innerHTML=`${TYPES[v.type].e} <b>${TYPES[v.type].name}</b>: ${TYPES[v.type].text}${v.pn?` <span class="ru">(${esc(v.pn)} = ${esc(v.pnEn)})</span>`:''}`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: нравится ============ */
VIEWS.like=el=>{
  const SG=S("нра'вится"),PL=S("нра'вятся");
  shell(el,S("Нра'вится!"),'One thing or an action → нра́вится. Several things → нра́вятся. Keys 1–2.',`<div class="game">${bar('lk')}<div id="lkStage"></div></div>`);
  mcRound({stage:'#lkStage',id:'lk',total:12,make:()=>shuffle(LIKE),render:(q,i,last,answer,next)=>{
    const [s,k,en]=q,right=k==='pl'?PL:SG;
    $('#lkStage').innerHTML=`<div class="stage">
      <p class="sentence">${gapSent(s,right)}</p><p class="gloss">${esc(en)}</p>
      <div class="choices">${[[SG,'one thing / action'],[PL,'several things']].map(([w,d],j)=>`<button class="choice" data-o="${w}">${w}<small>${d} · ${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===right,ok=>{answer(ok,esc(s.replace('{}',right)));$('#blank').classList.add('filled');
      $('#fb').innerHTML=k==='pl'?'The thing you like is <b>plural</b> → нра́вятся':k==='inf'?'An action (infinitive) → always <b>нра́вится</b>':'One thing → <b>нра́вится</b>';});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: my day (ordering) ============ */
VIEWS.routine=el=>{
  shell(el,'My day','Tap the sentences in the right order to tell the story. Tap a sentence in your story to send it back.',`<div class="game"><div class="toggle-row" id="rtTabs">${ROUT.map((r,k)=>`<button class="btn btn--sm ${k?'btn--ghost':''}" data-r="${k}">${r.t}</button>`).join('')}</div><div id="rtStage"></div></div>`);
  let cur=0;
  const draw=()=>{
    const R=ROUT[cur];let chosen=[],checked=false;const order=shuffle(R.steps.map((_,k)=>k));
    $('#rtStage').innerHTML=`<div class="stage">
      <p class="scenario">${R.t}</p>
      <div class="tray" id="tray"><span class="muted" style="font-weight:600">Your story appears here…</span></div>
      <div style="display:flex;flex-direction:column;gap:8px" id="pool">${order.map(k=>`<button class="tok" data-k="${k}">${esc(R.steps[k])}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>
      <div class="actions"><button class="btn btn--ghost btn--sm" id="clr">↺ Clear</button><button class="btn btn--green" id="go">Check</button></div></div>`;
    const renderTray=()=>{$('#tray').innerHTML=chosen.length?chosen.map((k,j)=>`<button class="tok" data-j="${j}"><span class="n">${j+1}</span>${esc(R.steps[k])}</button>`).join(''):'<span class="muted" style="font-weight:600">Your story appears here…</span>';
      $$('#tray .tok').forEach(b=>b.onclick=()=>{if(checked)return;const k=chosen.splice(+b.dataset.j,1)[0];$(`#pool .tok[data-k="${k}"]`).classList.remove('used');renderTray();});};
    $$('#pool .tok').forEach(b=>b.onclick=()=>{if(checked)return;b.classList.add('used');chosen.push(+b.dataset.k);renderTray();});
    $('#clr').onclick=()=>{if(checked)return;chosen=[];$$('#pool .tok').forEach(b=>b.classList.remove('used'));renderTray();};
    $('#go').onclick=()=>{
      if(checked){cur=(cur+1)%ROUT.length;$$('#rtTabs .btn').forEach((b,k)=>b.classList.toggle('btn--ghost',k!==cur));draw();return;}
      if(chosen.length<R.steps.length){$('#fb').textContent='Use all the sentences first!';return;}
      checked=true;const ok=chosen.every((k,j)=>k===j);
      $('#tray').classList.add(ok?'ok':'bad');
      if(ok){addXP(5);burst();$('#fb').innerHTML=S("Молоде'ц! ✦ Perfect order.");}
      else{const right=chosen.filter((k,j)=>k===j).length;$('#fb').innerHTML=`${right} of ${R.steps.length} in the right place. The right order:<div class="review">${R.steps.map((s,j)=>`<div>${j+1}. ${esc(s)}</div>`).join('')}</div>`;}
      $('#go').textContent='Next story →';
    };
  };
  $$('#rtTabs .btn').forEach(b=>b.onclick=()=>{cur=+b.dataset.r;$$('#rtTabs .btn').forEach(x=>x.classList.toggle('btn--ghost',x!==b));draw();});
  draw();
};

/* ============ MEMORY ============ */
VIEWS.memory=el=>{
  let cards,open,moves,matched,t0,timer,lock;
  shell(el,'Memory match','Flip two tiles at a time. Pair each -ся verb (yellow) with its English meaning (blue).',`
    <div class="game"><div class="game__bar"><span class="score" id="mmMoves">0 moves</span><span class="score" id="mmTime" style="background:var(--blue)">0:00</span><button class="btn btn--sm btn--ghost" id="mmRe">↻ New board</button></div><div id="mmStage"></div></div>`);
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const start=()=>{
    clearInterval(timer);
    const vs=shuffle(pool()).slice(0,8);
    cards=shuffle(vs.flatMap(v=>[{k:v.id,t:v.w,e:v.e,r:1},{k:v.id,t:v.en.split(/[;(]/)[0].trim(),e:'',r:0}]));
    open=[];moves=0;matched=0;t0=null;lock=false;
    $('#mmMoves').textContent='0 moves';$('#mmTime').textContent='0:00';
    $('#mmStage').innerHTML=`<div class="mem">${cards.map((c,j)=>`<button class="mcard" data-j="${j}" aria-label="Hidden tile"><div class="mcard__inner"><div class="mcard__face mcard__back">✦</div><div class="mcard__face mcard__front ${c.r?'ru r':'en'}" style="display:flex;flex-direction:column;gap:4px">${c.e?`<span style="font-size:1.3em">${c.e}</span>`:''}${esc(c.t)}</div></div></button>`).join('')}</div>`;
    $$('.mcard').forEach(b=>b.onclick=()=>flip(b));
  };
  const flip=b=>{
    if(lock||b.classList.contains('up'))return;
    if(!t0){t0=Date.now();timer=setInterval(()=>$('#mmTime').textContent=fmt(Math.floor((Date.now()-t0)/1000)),500);}
    b.classList.add('up');open.push(b);
    if(open.length===2){
      moves++;$('#mmMoves').textContent=moves+' moves';
      const [a,d]=open.map(x=>cards[+x.dataset.j]);
      if(a.k===d.k&&a.r!==d.r){open.forEach(x=>x.classList.add('done'));open=[];matched++;
        if(matched===cards.length/2){clearInterval(timer);addXP(5);burst();
          setTimeout(()=>{$('#mmStage').insertAdjacentHTML('beforeend',`<div class="stage stage--pink" style="margin-top:24px"><p class="result__msg">${S("Молоде'ц!")}</p><div class="result__big">${moves}</div><p><b>moves</b> in ${$('#mmTime').textContent}</p><div class="actions"><button class="btn btn--ghost" id="mmAgain">Play again</button></div></div>`);$('#mmAgain').onclick=start;},450);}
      }else{lock=true;setTimeout(()=>{open.forEach(x=>x.classList.remove('up'));open=[];lock=false;},900);}
    }
  };
  $('#mmRe').onclick=start;cleanup=()=>clearInterval(timer);
  start();
};

/* ============ INIT ============ */
setLevel(level);
$('#xp').textContent='★ '+xp+' XP';
$('#footRu').textContent=S("Улыба'йтесь и не волну'йтесь!");
go();
