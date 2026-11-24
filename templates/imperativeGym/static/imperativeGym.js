
/* ============ DATA ============
 An apostrophe ' after a Cyrillic vowel = stress mark.
 infinitive | english | они-form | я-form | ты-imperative | aspect | rule (J = -й, I = -и, SOFT = -ь, IRR) | level | emoji */
const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1́');
const plain=s=>s.replace(/́/g,'');
const RAW=`
чита'ть|to read|чита'ют|чита'ю|чита'й|impf|J|A1|📖
де'лать|to do|де'лают|де'лаю|де'лай|impf|J|A1|🛠️
слу'шать|to listen|слу'шают|слу'шаю|слу'шай|impf|J|A1|👂
отвеча'ть|to answer|отвеча'ют|отвеча'ю|отвеча'й|impf|J|A1|🙋
ду'мать|to think|ду'мают|ду'маю|ду'май|impf|J|A1|🤔
отдыха'ть|to rest|отдыха'ют|отдыха'ю|отдыха'й|impf|J|A1|🛋️
танцева'ть|to dance|танцу'ют|танцу'ю|танцу'й|impf|J|A1|💃
петь|to sing|пою'т|пою'|пой|impf|J|A1|🎤
откры'ть|to open|откро'ют|откро'ю|откро'й|pf|J|A1|📂
закры'ть|to close|закро'ют|закро'ю|закро'й|pf|J|A1|📕
рисова'ть|to draw|рису'ют|рису'ю|рису'й|impf|J|A2|🎨
занима'ться|to do (sport), study|занима'ются|занима'юсь|занима'йся|impf|J|A1|🏋️
улыба'ться|to smile|улыба'ются|улыба'юсь|улыба'йся|impf|J|A2|😊
волнова'ться|to worry|волну'ются|волну'юсь|волну'йся|impf|J|A2|😟
говори'ть|to speak|говоря'т|говорю'|говори'|impf|I|A1|🗣️
сказа'ть|to say, tell|ска'жут|скажу'|скажи'|pf|I|A1|💬
писа'ть|to write|пи'шут|пишу'|пиши'|impf|I|A1|✍️
смотре'ть|to look, watch|смо'трят|смотрю'|смотри'|impf|I|A1|👀
посмотре'ть|to have a look|посмо'трят|посмотрю'|посмотри'|pf|I|A1|🔍
идти'|to go (on foot)|иду'т|иду'|иди'|impf|I|A1|🚶
звони'ть|to call|звоня'т|звоню'|звони'|impf|I|A1|📞
позвони'ть|to call (once)|позвоня'т|позвоню'|позвони'|pf|I|A1|📱
купи'ть|to buy|ку'пят|куплю'|купи'|pf|I|A1|🛒
повтори'ть|to repeat|повторя'т|повторю'|повтори'|pf|I|A1|🔁
помо'чь|to help|помо'гут|помогу'|помоги'|pf|I|A1|🆘
подожда'ть|to wait|подожду'т|подожду'|подожди'|pf|I|A1|⏳
извини'ть|to excuse|извиня'т|извиню'|извини'|pf|I|A1|🙏
входи'ть|to come in|вхо'дят|вхожу'|входи'|impf|I|A1|🚪
сади'ться|to sit down|садя'тся|сажу'сь|сади'сь|impf|I|A1|🪑
учи'ться|to study|у'чатся|учу'сь|учи'сь|impf|I|A1|🎓
проходи'ть|to come through, go on in|прохо'дят|прохожу'|проходи'|impf|I|A2|➡️
гото'вить|to cook|гото'вят|гото'влю|гото'вь|impf|SOFT|A2|🍳
встать|to stand up|вста'нут|вста'ну|встань|pf|SOFT|A2|🧍
забы'ть|to forget|забу'дут|забу'ду|забу'дь|pf|SOFT|A2|🤦
быть|to be|бу'дут|бу'ду|будь|impf|SOFT|A2|🌟
познако'миться|to get to know|познако'мятся|познако'млюсь|познако'мься|pf|SOFT|A2|🫱
дать|to give|даду'т|дам|дай|pf|IRR|A1|🤲
дава'ть|to give; let's|даю'т|даю'|дава'й|impf|IRR|A1|🙌
пить|to drink|пьют|пью|пей|impf|IRR|A1|🥤
есть|to eat|едя'т|ем|ешь|impf|IRR|A1|🍽️
встава'ть|to get up|встаю'т|встаю'|встава'й|impf|IRR|A2|⏰
е'хать|to go (by transport)|е'дут|е'ду|поезжа'й|impf|IRR|A2|🚗
`;
const V=RAW.trim().split('\n').map((l,id)=>{const [inf,en,they,ya,imp,asp,rule,lvl,e]=l.split('|');const t=S(imp);
  const tt=/[\u0301ё]/.test(t)?t:t.replace(/([аеиоуыэюя])/,'$1\u0301');
  const vy=/с[яь]$/.test(tt)?tt.slice(0,-2)+'тесь':tt+'те';
  return {id,inf:S(inf),en,they:S(they),ya:S(ya),ty:t,vy,asp,rule,lvl,e,refl:/с[яь]$/.test(plain(inf))};});
const RULES={
  J:{tag:'-й',c:'var(--green)',title:'Stem ends in a vowel → add -й',ex:"чита'(ют) → чита'й"},
  I:{tag:'-и',c:'var(--blue)',title:'Consonant + stress on the ending in the я-form → add -и',ex:"говор(я'т), я говорю' → говори'"},
  SOFT:{tag:'-ь',c:'var(--pink)',title:'Consonant + stress on the stem in the я-form → add -ь',ex:"гото'в(ят), я гото'влю → гото'вь"},
  IRR:{tag:'!!!',c:'var(--yellow)',title:'Irregular: learn by heart',ex:"дать → дай · пить → пей · есть → ешь"}
};
Object.values(RULES).forEach(r=>{r.ex=S(r.ex);r.title=S(r.title);});
/* phrase book: russian | english | emoji | group */
const PHR=`
Слу'шайте!|Listen!|👂|class
Повтори'те, пожа'луйста.|Repeat, please.|🔁|class
Чита'йте текст.|Read the text.|📖|class
Пиши'те.|Write.|✍️|class
Откро'йте кни'ги.|Open your books.|📂|class
Закро'йте тетра'ди.|Close your notebooks.|📕|class
Отвеча'йте на вопро'сы.|Answer the questions.|🙋|class
Посмотри'те сюда'.|Look here.|👀|class
Говори'те ме'дленнее, пожа'луйста.|Please speak more slowly.|🐢|class
Скажи'те, пожа'луйста…|Tell me, please… / Excuse me, could you tell me…|💬|life
Сади'тесь.|Sit down, please.|🪑|life
Входи'те!|Come in!|🚪|life
Проходи'те!|Come on in! / Go ahead!|➡️|life
Подожди'те мину'точку.|Wait a moment.|⏳|life
Помоги'те!|Help!|🆘|life
Извини'те!|Excuse me! / Sorry!|🙏|life
Позвони' мне.|Call me.|📱|life
Не волну'йся!|Don't worry!|😌|life
Дава'й пойдём в кино'!|Let's go to the cinema!|🎬|life
Дава'йте познако'мимся!|Let's get to know each other!|🫱|life
Будь здоро'в!|Bless you! (lit. “be healthy”)|🤧|life
Приходи'те ещё!|Come again!|👋|life
Береги' себя'!|Take care!|💛|life
`.trim().split('\n').map(l=>{const [ru,en,e,g]=l.split('|');return {ru:S(ru),en,e,g};});
/* ask or forbid? sentence with {} gap | right | wrong | why | english */
const ASP=[
  ["Пожа'луйста, {} окно'.","откро'й","открыва'й","One concrete request → perfective.","Please open the window."],
  ["Не {} окно', здесь хо'лодно!","открыва'й","откро'й","“Don't …” → не + imperfective.","Don't open the window, it's cold here!"],
  ["{}, пожа'луйста, кто э'то?","Скажи'те","Говори'те","One question, one answer → perfective.","Tell me, please, who is this?"],
  ["{} гро'мче, я не слы'шу!","Говори'те","Скажи'те","Keep talking (a process) → imperfective.","Speak louder, I can't hear!"],
  ["Не {} на уро'к!","опа'здывай","опозда'й","“Don't …” → не + imperfective.","Don't be late for the lesson!"],
  ["{} мне за'втра в де'сять часо'в.","Позвони'","Звони'","One call at a set time → perfective.","Call me tomorrow at ten."],
  ["{} мне, когда' хо'чешь!","Звони'","Позвони'","Any time, as often as you like → imperfective.","Call me whenever you want!"],
  ["{}, пожа'луйста, хлеб.","Купи'","Покупа'й","One concrete task → perfective.","Buy some bread, please."],
  ["Не {} э'тот торт, он ста'рый!","покупа'й","купи'","“Don't …” → не + imperfective.","Don't buy this cake, it's old!"],
  ["{} э'тот фильм, он о'чень хоро'ший!","Посмотри'","Смотри'","A one-time recommendation → perfective.","Watch this film, it's very good!"],
  ["Не {} так ча'сто, всё хорошо'!","звони'","позвони'","“Don't …” → не + imperfective.","Don't call so often, everything's fine!"],
  ["{} э'то сло'во ещё раз.","Повтори'те","Повторя'йте","Repeat it once → perfective.","Repeat this word once more."]
].map(a=>a.map((x,k)=>k<3?S(x):x));
/* ты or вы situations */
const WHO=[['your best friend','ty'],['your teacher','vy'],['a group of students','vy'],['your little brother','ty'],['a stranger on the street','vy'],['your mum','ty'],['a doctor','vy'],['your dog','ty'],['two friends at once','vy'],['a shop assistant','vy'],['your classmate','ty'],['your grandparents (both)','vy']];

/* ============ HELPERS ============ */
const norm=s=>plain(s).trim().toLowerCase().replace(/ё/g,'е').replace(/[\s!.]+/g,'');
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const store={get(k,d){try{const v=localStorage.getItem('ig_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('ig_'+k,JSON.stringify(v))}catch(e){}}};
let xp=store.get('xp',0), level=store.get('level','all');
const pool=()=>V.filter(v=>level==='all'||v.lvl===level);
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
function keyChoices(){const key=e=>{if(e.target.tagName==='INPUT')return;const k=+e.key;if(k>=1&&k<=4){const b=$$('.choice')[k-1];if(b&&!b.disabled)b.click();}else if(e.key==='Enter'){const nb=$('#nextBtn');if(nb&&$('#nextWrap').style.visibility==='visible'){e.preventDefault();nb.click();}}};document.addEventListener('keydown',key);cleanup=()=>document.removeEventListener('keydown',key);}
/* split the они-form into stem + ending for the builder */
function stemOf(v){const p=plain(v.they);const m=p.match(/(ются|утся|ятся|атся|ют|ут|ят|ат)$/);return m?{stem:p.slice(0,-m[1].length),end:m[1]}:{stem:p,end:''};}

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
  ['form','🛠️','How to form it','The они́-form trick and the -й / -и / -ь rule, with a step-by-step builder.','var(--green)'],
  ['use','🎩','How to use it','Ты or вы, asking politely, “don’t …”, and “let’s …”.','var(--blue)'],
  ['phrases','📒','Phrase book','Classroom and everyday commands you’ll hear and use all the time.','var(--yellow)'],
  ['verbs','📖','Verb list',`${V.length} verbs: infinitive, они́-form, я-form and both imperatives.`,'var(--lilac)'],
  ['ending','🧩','-й, -и or -ь?','Look at the они́-form and the stress, then choose the ending.','var(--pink)'],
  ['build','⌨️','Build it','Type the imperative yourself, for ты or вы. Cyrillic keyboard included.','var(--red)'],
  ['tyvy','🎯','Ты or вы?','Friend, teacher or a whole group? Pick чита́й or чита́йте.','var(--blue)'],
  ['teacher','🧑‍🏫','Classroom','What does the teacher say? Match the instruction to the picture.','var(--yellow)'],
  ['aspect','🚦','Ask or forbid?','Откро́й окно́! but Не открыва́й окно́! Choose the right aspect.','var(--green)'],
  ['memory','🧠','Memory match','Pair every infinitive with its imperative.','var(--pink)']
];
VIEWS.home=el=>{
  const words=shuffle(PHR).slice(0,14).map(p=>`${p.e} ${p.ru}`);
  const track=`<div class="marquee__track" aria-hidden="true">${words.map(w=>`<span>${esc(w)}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar ru">!</div>
      <span class="hero__sticker2">${S("чита'й!")}</span>
      <span class="hero__sticker">${S("чита'йте!")} ✦ A1–A2</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">imperative</h1>
      <p class="hero__lead">Read! Listen! Sit down, please! Let’s go! Learn how to give commands, make requests and invite people in Russian. <span class="ru">${S("Дава'йте начнём!")}</span></p>
      <div class="hero__stats">
        <span class="chip" style="background:var(--green)">-й · -и · -ь</span>
        <span class="chip">ты / вы</span>
        <span class="chip" style="background:var(--yellow)">${V.length} verbs · ${PHR.length} phrases</span>
        <span class="chip" style="background:var(--pink)">6 games</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#form">Learn how to form it →</a>
        <a class="btn btn--ghost" href="#phrases">Phrase book</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Four short lessons, then six games. Use the <b>A1 / A2 / All</b> switch at the top to choose the verbs.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">${String(i+1).padStart(2,'0')}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${s}</p><span class="mode__go">${i<4?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
};

/* ============ HOW TO FORM IT ============ */
VIEWS.form=el=>{
  shell(el,'How to form it','The imperative is the form for commands and requests: <b>Read! Sit down! Help!</b> You build it in 3 steps from the present tense.',`
    <div class="method">
      <span><b>1 · они'-form</b>чита'ют</span><i>→</i>
      <span><b>2 · drop the ending</b>чита'-</span><i>→</i>
      <span><b>3 · add -й, -и or -ь</b>чита'й</span><i>→</i>
      <span style="background:var(--green)"><b>+ -те for вы</b>чита'йте</span>
    </div>
    <h2 class="subhead">Step 3: which ending?</h2>
    <div class="steps3">
      <div class="stp" style="--gc:var(--green)"><span class="end">-й</span><h3>The stem ends in a <u>vowel</u></h3>
        <p class="ex">чита'-ют → чита'<b>й</b></p><p class="ex">танцу'-ют → танцу'<b>й</b></p><p class="ex">откро'-ют → откро'<b>й</b></p></div>
      <div class="stp" style="--gc:var(--blue)"><span class="end">-и</span><h3>The stem ends in a <u>consonant</u> and the я-form is stressed on the <u>ending</u></h3>
        <p class="ex">говор-я'т (я говорю') → говор<b>и'</b></p><p class="ex">пи'ш-ут (я пишу') → пиш<b>и'</b></p><p class="ex">ид-у'т (я иду') → ид<b>и'</b></p></div>
      <div class="stp" style="--gc:var(--pink)"><span class="end">-ь</span><h3>The stem ends in a <u>consonant</u> and the я-form is stressed on the <u>stem</u></h3>
        <p class="ex">гото'в-ят (я гото'влю) → гото'в<b>ь</b></p><p class="ex">вста'н-ут (я вста'ну) → вста'н<b>ь</b></p><p class="ex">забу'д-ут (я забу'ду) → забу'д<b>ь</b></p></div>
    </div>
    <h2 class="subhead">Try it: the imperative builder</h2>
    <div class="builder">
      <div style="text-align:center"><select id="bSel">${V.map(v=>`<option value="${v.id}">${v.e} ${v.inf} · ${v.en}</option>`).join('')}</select></div>
      <div class="chain" id="chain"></div>
      <div class="result-line" id="resLine"></div>
    </div>
    <div class="duo">
      <div class="box" style="--gc:var(--yellow)">
        <h3>👥 Polite or plural: add -те</h3>
        <p>For <b>вы</b> (one person politely, or several people) just add <b>-те</b>:</p>
        <p class="ex">чита'й → чита'йте · говори' → говори'те · гото'вь → гото'вьте</p>
        <p>The stress doesn’t move.</p>
      </div>
      <div class="box" style="--gc:var(--lilac)">
        <h3>🪞 Reflexive verbs: -ся / -сь</h3>
        <p>Build the imperative, then add <b>-ся</b> after a consonant or й, and <b>-сь</b> after a vowel:</p>
        <p class="ex">занима'йся → занима'йтесь</p>
        <p class="ex">сади'сь → сади'тесь · учи'сь → учи'тесь</p>
        <p class="ex">познако'мься → познако'мьтесь</p>
      </div>
    </div>
    <div class="box" style="--gc:var(--red);margin-bottom:40px">
      <h3>⚠️ Irregular: learn these by heart</h3>
      <p class="ex">дать → дай · дава'ть → дава'й · пить → пей · есть → ешь · е'хать → поезжа'й</p>
      <p><b>-ава́ть</b> verbs keep -ва-: <span class="ru"><b>встава'ть → встава'й, дава'ть → дава'й</b></span> (not “встай”).</p>
    </div>
    <div class="actions"><a class="btn btn--green" href="#ending">Practise: -й, -и or -ь? →</a><a class="btn btn--ghost" href="#use">Next: How to use it</a></div>`);
  const show=()=>{
    const v=V[+$('#bSel').value],R=RULES[v.rule],{stem,end}=stemOf(v);
    const why=v.rule==='J'?'ends in a vowel':v.rule==='I'?`consonant + я ${v.ya} (stress on the ending)`:v.rule==='SOFT'?`consonant + я ${v.ya} (stress on the stem)`:'irregular!';
    $('#chain').innerHTML=`
      <div class="link" style="--gc:var(--yellow)"><small>1 · ${S("они'")}-form</small><span class="ru">${esc(v.they)}</span><span class="why">${S("они'")} ${esc(v.they)}</span></div>
      <div class="link" style="--gc:var(--blue)"><small>2 · stem</small><span class="ru">${esc(stem)}-</span><span class="why">drop -${esc(end)}</span></div>
      <div class="link" style="--gc:${R.c}"><small>3 · ending</small><span class="ru">${R.tag}${v.refl?(/[ьй]$/.test(plain(v.ty).replace(/с[яь]$/,''))?' + ся':' + сь'):''}</span><span class="why">${esc(why)}</span></div>
      <div class="link" style="--gc:var(--green)"><small>result</small><span class="ru">${esc(v.ty)}</span><span class="why">${v.asp==='pf'?'perfective':'imperfective'}</span></div>`;
    $('#resLine').innerHTML=`<span style="background:var(--green)">ты: ${esc(cap(v.ty))}!</span><span style="background:var(--blue)">вы: ${esc(cap(v.vy))}!</span>`;
  };
  $('#bSel').onchange=show;show();
};

/* ============ HOW TO USE IT ============ */
VIEWS.use=el=>{
  shell(el,'How to use it','The imperative gives commands, but also polite requests, advice and invitations. Here’s how to sound natural, not bossy.',`
    <div class="duo">
      <div class="box" style="--gc:var(--blue)">
        <h3>🎩 ты or вы?</h3>
        <ul><li><span class="ru"><b>ты-form</b></span> (чита'й): a friend, family, a child, a pet.</li>
          <li><span class="ru"><b>вы-form</b></span> (чита'йте): polite (teacher, stranger, boss) <b>or</b> more than one person.</li></ul>
        <p class="ex">Ма'ма, помоги'! · Извини'те, помоги'те, пожа'луйста!</p>
      </div>
      <div class="box" style="--gc:var(--yellow)">
        <h3>🙏 Make it polite</h3>
        <ul><li>Add <span class="ru"><b>пожа'луйста</b></span> (please).</li>
          <li>Use the <b>вы</b>-form with people you don’t know well.</li>
          <li>Start with <span class="ru"><b>Скажи'те, пожа'луйста…</b></span> to ask a question.</li></ul>
        <p class="ex">Скажи'те, пожа'луйста, где метро'?</p>
      </div>
    </div>
    <h2 class="subhead">Aspect: which verb of the pair?</h2>
    <div class="duo">
      <div class="box" style="--gc:var(--green)">
        <h3>✅ Do it (once): perfective</h3>
        <p>A concrete request with a result:</p>
        <p class="ex">Откро'й окно'! · Купи' хлеб! · Позвони' мне за'втра!</p>
        <h3 style="margin-top:14px">🔄 Do it (in general / start / go on): imperfective</h3>
        <p>Advice, habits, invitations, “go ahead”:</p>
        <p class="ex">Звони' мне! · Сади'тесь! · Говори'те гро'мче!</p>
      </div>
      <div class="box" style="--gc:var(--red)">
        <h3>⛔ Don’t do it: не + imperfective</h3>
        <p>To tell someone <b>not</b> to do something, use <b>не</b> + an <b>imperfective</b> imperative:</p>
        <p class="ex">Откро'й окно'! → Не открыва'й окно'!</p>
        <p class="ex">Купи' торт! → Не покупа'й торт!</p>
        <p class="ex">Не опа'здывай! · Не волну'йся!</p>
        <p><b>A2 tip:</b> warnings about accidents use the perfective: <span class="ru"><b>Не забу'дь ключи'!</b></span> (don’t forget your keys!)</p>
      </div>
    </div>
    <div class="box" style="--gc:var(--lilac);margin-bottom:40px">
      <h3>🤝 Let’s …: дава'й / дава'йте</h3>
      <p>For “let’s”, use <span class="ru"><b>дава'й</b></span> (with a friend) or <span class="ru"><b>дава'йте</b></span> (polite / group) +</p>
      <ul><li>the <b>мы-form of a perfective verb</b> for one action: <span class="ru"><b>Дава'й пойдём в кино'!</b></span> · <span class="ru"><b>Дава'йте познако'мимся!</b></span></li>
        <li>the <b>infinitive of an imperfective verb</b> for an activity: <span class="ru"><b>Дава'й игра'ть!</b></span> · <span class="ru"><b>Дава'йте чита'ть!</b></span></li></ul>
      <p>Answer with <span class="ru"><b>Дава'й!</b></span> = OK, let’s!</p>
    </div>
    <div class="actions"><a class="btn btn--green" href="#aspect">Practise: Ask or forbid? →</a><a class="btn btn--ghost" href="#phrases">Next: Phrase book</a></div>`);
};

/* ============ PHRASE BOOK ============ */
VIEWS.phrases=el=>{
  const grp=(g,t,c)=>`<h2 class="subhead">${t}</h2><div class="phrasebook">${PHR.filter(p=>p.g===g).map(p=>`<div class="ph" style="--gc:${c}"><span class="e">${p.e}</span><div><span class="ru">${esc(p.ru)}</span><small>${esc(p.en)}</small></div></div>`).join('')}</div>`;
  shell(el,'Phrase book','Imperatives you’ll hear and use every day. Notice how many end in <b>-те</b>: they’re polite or for a group.',`
    ${grp('class','🧑‍🏫 In the classroom','var(--yellow)')}${grp('life','🌍 Everyday life','var(--green)')}
    <div class="actions"><a class="btn btn--green" href="#teacher">Practise: Classroom →</a></div>`);
};

/* ============ VERB LIST ============ */
VIEWS.verbs=el=>{
  shell(el,'Verb list','Every verb with the forms you need to build its imperative. The colour tag shows which rule it follows.',`
    <div class="tablewrap"><table><tr><th></th><th>infinitive</th><th>${S("они'")}-form</th><th>я-form</th><th>ты!</th><th>вы!</th><th>rule</th><th>aspect</th></tr>
    ${pool().map(v=>`<tr><td>${v.e}</td><td class="ru">${esc(v.inf)}<br><small class="muted" style="font-family:var(--font-body);font-weight:600">${esc(v.en)}</small></td><td class="ru">${esc(v.they)}</td><td class="ru">${esc(v.ya)}</td><td class="imp">${esc(v.ty)}</td><td class="imp">${esc(v.vy)}</td><td><span class="rtag" style="--gc:${RULES[v.rule].c}">${RULES[v.rule].tag}</span></td><td>${v.asp==='pf'?'perf.':'imperf.'}</td></tr>`).join('')}
    </table></div>`);
};

/* ============ GAME: WHICH ENDING ============ */
VIEWS.ending=el=>{
  shell(el,'-й, -и or -ь?','Look at the они́-form (where’s the stem?) and the я-form (where’s the stress?), then pick the ending. Irregular verbs are left out. Keys 1–3.',`<div class="game">${bar('en')}<div id="enStage"></div></div>`);
  mcRound({stage:'#enStage',id:'en',total:12,make:()=>shuffle(pool().filter(v=>v.rule!=='IRR')).slice(0,12),render:(v,i,last,answer,next)=>{
    const R=RULES[v.rule];
    $('#enStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${v.e}</div><div class="bigword">${esc(v.inf)}</div><p class="gloss">${esc(v.en)}</p>
      <p style="font-family:var(--font-ru);font-weight:800;font-size:1.3rem;margin:0 0 18px">${S("они'")} ${esc(v.they)} · я ${esc(v.ya)}</p>
      <div class="choices" style="grid-template-columns:repeat(3,1fr)">${['J','I','SOFT'].map((k,j)=>`<button class="choice" data-r="${k}" style="font-size:2rem">${RULES[k].tag}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.r===v.rule,ok=>{answer(ok,`${esc(v.inf)} → <b>${esc(v.ty)}</b>`);$('#fb').innerHTML=`${esc(R.title)} → <b class="ru">${esc(v.ty)}</b> / <b class="ru">${esc(v.vy)}</b>`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: BUILD IT (typing) ============ */
VIEWS.build=el=>{
  const KB=['йцукенгшщзхъ','фывапролджэ','ячсмитьбюё'];
  let mode='ty';
  shell(el,'Build it','Type the imperative. You don’t need the stress mark or the “!”. Choose ты or вы first.',`
    <div class="game"><div class="toggle-row"><button class="btn btn--sm" data-m="ty">ты-form</button><button class="btn btn--sm btn--ghost" data-m="vy">вы-form</button><button class="btn btn--sm btn--ghost" data-m="mix">mix</button></div>${bar('bd')}<div id="bdStage"></div></div>`);
  let qs,i,score,review;
  const reset=()=>{qs=shuffle(pool()).slice(0,10).map(v=>({v,m:mode==='mix'?pick(['ty','vy']):mode}));i=0;score=0;review=[];};
  const draw=()=>{
    $('#bdScore').textContent=`${score} / ${qs.length}`;$('#bdFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){results($('#bdStage'),score,qs.length,review,()=>{reset();draw();});return;}
    const {v,m}=qs[i],right=v[m];let checked=false,hints=0;
    $('#bdStage').innerHTML=`<div class="stage">
      <span class="g" style="--gc:${m==='ty'?'var(--green)':'var(--blue)'}">${m==='ty'?'ты · one friend':'вы · polite / group'}</span>
      <div style="font-size:3rem;line-height:1;margin-top:10px">${v.e}</div><div class="bigword">${esc(v.inf)}</div>
      <p class="gloss">${esc(v.en)} · ${S("они'")} ${esc(v.they)} · я ${esc(v.ya)}</p>
      <input class="answer" id="bdIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…!" lang="ru">
      <div class="feedback" id="fb"></div>
      <div class="actions"><button class="btn btn--ghost btn--sm" id="hint">💡 Hint</button><button class="btn btn--green" id="go">Check ↵</button></div>
      <div class="kbd">${KB.map((r,ri)=>`<div class="kbd__row">${[...r].map(c=>`<button class="key" data-k="${c}">${c}</button>`).join('')}${ri===2?'<button class="key key--wide" data-k="⌫">⌫</button>':''}</div>`).join('')}</div></div>`;
    const inp=$('#bdIn');inp.focus();
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
      checked=true;inp.readOnly=true;const ok=norm(inp.value)===norm(right),R=RULES[v.rule];
      if(ok){score++;inp.classList.add('ok');$('#fb').innerHTML=`${S("Ве'рно!")} ✦ <span class="ru">${esc(cap(right))}!</span>`;}
      else{review.push(`${esc(v.inf)} → <b>${esc(right)}</b>`);inp.classList.add('bad');$('#fb').innerHTML=`Correct: <span class="ru" style="background:var(--yellow);padding:0 8px;border-radius:6px;border:2px solid var(--ink)">${esc(cap(right))}!</span><br><span class="muted">${esc(R.title)}</span>`;}
      $('#go').textContent=i===qs.length-1?'Results →':'Next →';$('#bdScore').textContent=`${score} / ${qs.length}`;
    };
  };
  $$('[data-m]').forEach(b=>b.onclick=()=>{mode=b.dataset.m;$$('[data-m]').forEach(x=>x.classList.toggle('btn--ghost',x!==b));reset();draw();});
  reset();draw();
};

/* ============ GAME: ТЫ OR ВЫ ============ */
VIEWS.tyvy=el=>{
  shell(el,'Ты or вы?','Who are you talking to? Pick the imperative that fits. Watch out for the wrong verb forms too!',`<div class="game">${bar('tv')}<div id="tvStage"></div></div>`);
  mcRound({stage:'#tvStage',id:'tv',total:12,make:()=>{const ok=pool().filter(v=>!['быть','забыть','волноваться','извинить','познакомиться','давать','дать'].includes(plain(v.inf)));return Array.from({length:12},()=>({w:pick(WHO),v:pick(ok)}));},render:(q,i,last,answer,next)=>{
    const {w:[who,m],v}=q,right=v[m];
    const set=new Set([right,m==='ty'?v.vy:v.ty,v.inf,v.they]);
    $('#tvStage').innerHTML=`<div class="stage">
      <p class="scenario">You ask ${esc(who)} to <b>${esc(v.en.replace(/^to /,''))}</b>.</p>
      <div style="font-size:3rem;line-height:1">${v.e}</div>
      <div class="choices choices--4" style="margin-top:16px">${shuffle([...set]).map(o=>`<button class="choice" data-o="${esc(o)}">${esc(cap(o))}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===right,ok=>{answer(ok,`${esc(who)} → <b>${esc(cap(right))}!</b>`);
      $('#fb').innerHTML=m==='ty'?`One person you know well → <b>ты</b>: ${esc(cap(v.ty))}!`:`Polite or more than one person → <b>вы</b>: ${esc(cap(v.vy))}!`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: CLASSROOM ============ */
VIEWS.teacher=el=>{
  shell(el,'Classroom','What does the teacher (or your friend) say? Read the English and pick the Russian.',`<div class="game">${bar('tc')}<div id="tcStage"></div></div>`);
  mcRound({stage:'#tcStage',id:'tc',total:12,make:()=>shuffle(PHR).slice(0,12),render:(p,i,last,answer,next)=>{
    const opts=shuffle([p,...shuffle(PHR.filter(x=>x!==p)).slice(0,3)]);
    $('#tcStage').innerHTML=`<div class="stage">
      <div style="font-size:3.4rem;line-height:1">${p.e}</div>
      <p class="scenario">${esc(p.en)}</p>
      <div class="choices">${opts.map(o=>`<button class="choice" data-o="${esc(o.ru)}" style="font-size:1.15rem">${esc(o.ru)}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===p.ru,ok=>{answer(ok,`${esc(p.ru)} = ${esc(p.en)}`);$('#fb').innerHTML=`<span class="ru">${esc(p.ru)}</span> = ${esc(p.en)}`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: ASK OR FORBID ============ */
VIEWS.aspect=el=>{
  shell(el,'Ask or forbid?','One concrete request → perfective. A process, a habit, or “don’t …” → imperfective. Pick the right verb.',`<div class="game">${bar('as')}<div id="asStage"></div></div>`);
  mcRound({stage:'#asStage',id:'as',total:10,make:()=>shuffle(ASP).slice(0,10),render:(q,i,last,answer,next)=>{
    const [s,r,w,why,en]=q,parts=esc(s).split('{}');
    $('#asStage').innerHTML=`<div class="stage">
      <p class="sentence">${parts[0]}<span class="blank" id="blank">${esc(r)}</span>${parts[1]}</p><p class="gloss">${esc(en)}</p>
      <div class="choices">${shuffle([r,w]).map((o,j)=>`<button class="choice" data-o="${esc(o)}">${esc(o)}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===r,ok=>{answer(ok,esc(s.replace('{}',r)));$('#blank').classList.add('filled');$('#fb').innerHTML=esc(why);});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ MEMORY ============ */
VIEWS.memory=el=>{
  let cards,open,moves,matched,t0,timer,lock;
  shell(el,'Memory match','Flip two tiles at a time. Pair each infinitive (blue) with its ты-imperative (green).',`
    <div class="game"><div class="game__bar"><span class="score" id="mmMoves">0 moves</span><span class="score" id="mmTime" style="background:var(--blue)">0:00</span><button class="btn btn--sm btn--ghost" id="mmRe">↻ New board</button></div><div id="mmStage"></div></div>`);
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const start=()=>{
    clearInterval(timer);
    const vs=shuffle(pool()).slice(0,8);
    cards=shuffle(vs.flatMap(v=>[{k:v.id,t:v.inf,a:1,e:v.e},{k:v.id,t:cap(v.ty)+'!',a:0,e:''}]));
    open=[];moves=0;matched=0;t0=null;lock=false;
    $('#mmMoves').textContent='0 moves';$('#mmTime').textContent='0:00';
    $('#mmStage').innerHTML=`<div class="mem">${cards.map((c,j)=>`<button class="mcard" data-j="${j}" aria-label="Hidden tile"><div class="mcard__inner"><div class="mcard__face mcard__back">✦</div><div class="mcard__face mcard__front ru ${c.a?'inf':'imp'}" style="display:flex;flex-direction:column;gap:4px">${c.e?`<span style="font-size:1.3em">${c.e}</span>`:''}${esc(c.t)}</div></div></button>`).join('')}</div>`;
    $$('.mcard').forEach(b=>b.onclick=()=>flip(b));
  };
  const flip=b=>{
    if(lock||b.classList.contains('up'))return;
    if(!t0){t0=Date.now();timer=setInterval(()=>$('#mmTime').textContent=fmt(Math.floor((Date.now()-t0)/1000)),500);}
    b.classList.add('up');open.push(b);
    if(open.length===2){
      moves++;$('#mmMoves').textContent=moves+' moves';
      const [a,d]=open.map(x=>cards[+x.dataset.j]);
      if(a.k===d.k&&a.a!==d.a){open.forEach(x=>x.classList.add('done'));open=[];matched++;
        if(matched===cards.length/2){clearInterval(timer);addXP(5);burst();
          setTimeout(()=>{$('#mmStage').insertAdjacentHTML('beforeend',`<div class="stage stage--pink" style="margin-top:24px"><p class="result__msg">${S("Молоде'ц!")}</p><div class="result__big">${moves}</div><p><b>moves</b> in ${$('#mmTime').textContent}</p><div class="actions"><button class="btn btn--ghost" id="mmAgain">Play again</button></div></div>`);$('#mmAgain').onclick=start;},450);}
      }else{lock=true;setTimeout(()=>{open.forEach(x=>x.classList.remove('up'));open=[];lock=false;},850);}
    }
  };
  $('#mmRe').onclick=start;cleanup=()=>clearInterval(timer);
  start();
};

/* ============ INIT ============ */
setLevel(level);
$('#xp').textContent='★ '+xp+' XP';
$('#footRu').textContent=S("Учи'тесь с удово'льствием!");
go();
