
/* ============ DATA ============
 An apostrophe ' after a Cyrillic vowel = stress mark.
 adjective | english | comparative | type (R = regular -ее, C = consonant change -е, X = totally irregular) | level | emoji | opposite */
const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1́');
const plain=s=>s.replace(/́/g,'');
const RAW=`
бы'стрый|fast|быстре'е|R|A1|🚀|ме'дленный
ме'дленный|slow|ме'дленнее|R|A1|🐢|бы'стрый
но'вый|new|нове'е|R|A1|✨|
интере'сный|interesting|интере'снее|R|A1|🤩|ску'чный
ску'чный|boring|скучне'е|R|A1|😴|интере'сный
краси'вый|beautiful|краси'вее|R|A1|🌹|
тёплый|warm|тепле'е|R|A1|🧣|холо'дный
холо'дный|cold|холодне'е|R|A1|🥶|тёплый
тру'дный|difficult|трудне'е|R|A1|🧗|лёгкий
у'мный|clever|умне'е|R|A1|🧠|
вку'сный|tasty|вкусне'е|R|A1|😋|
си'льный|strong|сильне'е|R|A2|💪|сла'бый
сла'бый|weak|слабе'е|R|A2|🥀|си'льный
дли'нный|long|длинне'е|R|A2|📏|коро'ткий
весёлый|cheerful|веселе'е|R|A2|😄|
у'добный|comfortable|удо'бнее|R|A2|🛋️|
споко'йный|calm|споко'йнее|R|A2|🧘|
ва'жный|important|важне'е|R|A2|❗|
све'тлый|light, bright|светле'е|R|A2|💡|тёмный
тёмный|dark|темне'е|R|A2|🌑|све'тлый
дорого'й|expensive|доро'же|C|A1|💎|дешёвый
молодо'й|young|моло'же|C|A1|🧒|ста'рый
высо'кий|tall, high|вы'ше|C|A1|🦒|ни'зкий
лёгкий|easy, light|ле'гче|C|A1|🪶|тру'дный
дешёвый|cheap|деше'вле|C|A2|🏷️|дорого'й
ни'зкий|low|ни'же|C|A2|⬇️|высо'кий
бли'зкий|close, near|бли'же|C|A2|📍|далёкий
у'зкий|narrow|у'же|C|A2|🧵|широ'кий
коро'ткий|short|коро'че|C|A2|✂️|дли'нный
жа'ркий|hot (weather)|жа'рче|C|A2|🥵|
гро'мкий|loud|гро'мче|C|A2|📢|ти'хий
ти'хий|quiet|ти'ше|C|A2|🤫|гро'мкий
просто'й|simple|про'ще|C|A2|🟢|
ча'стый|frequent|ча'ще|C|A2|🔁|ре'дкий
ре'дкий|rare|ре'же|C|A2|🦄|ча'стый
чи'стый|clean|чи'ще|C|A2|🧼|
сла'дкий|sweet|сла'ще|C|A2|🍫|
хоро'ший|good|лу'чше|X|A1|👍|плохо'й
плохо'й|bad|ху'же|X|A1|👎|хоро'ший
большо'й|big|бо'льше|X|A1|🐘|ма'ленький
ма'ленький|small|ме'ньше|X|A1|🐭|большо'й
ста'рый|old (people)|ста'рше|X|A1|👴|молодо'й
далёкий|far|да'льше|X|A2|🔭|бли'зкий
широ'кий|wide|ши'ре|X|A2|↔️|у'зкий
`;
const A=RAW.trim().split('\n').map((l,id)=>{const [w,en,c,t,lvl,e,opp]=l.split('|');return {id,w:S(w),en,c:S(c),t,lvl,e,opp:S(opp||'')};});
const TYPES={R:{tag:'-ее',c:'var(--green)',name:'regular -ее'},C:{tag:'-е ✎',c:'var(--yellow)',name:'consonant change + -е'},X:{tag:'!!!',c:'var(--pink)',name:'irregular'}};
/* consonant-change explanation for type C */
const CHG=[
  {k:'г, д, з → ж',c:'var(--blue)',ex:["дорого'й → доро'же","молодо'й → моло'же","бли'зкий → бли'же","ни'зкий → ни'же","у'зкий → у'же"]},
  {k:'к, т → ч',c:'var(--green)',ex:["коро'ткий → коро'че","гро'мкий → гро'мче","жа'ркий → жа'рче","лёгкий → ле'гче"]},
  {k:'х → ш',c:'var(--yellow)',ex:["ти'хий → ти'ше"]},
  {k:'ст, дк → щ',c:'var(--pink)',ex:["просто'й → про'ще","ча'стый → ча'ще","чи'стый → чи'ще","сла'дкий → сла'ще"]}
];
CHG.forEach(g=>g.ex=g.ex.map(S));
const why=a=>{
  const p=plain(a.w);
  const SPECIAL={'высокий':'Special: the -ок- part drops and с → ш: вы́ше.','дешёвый':'Special: an extra л appears: деше́вле.','редкий':'Consonant change: дк → ж, then add -е.','широкий':'Special: the -ок- part drops: ши́ре.','далёкий':'Special: the -ёк- part drops and ь is added: да́льше.'};
  if(SPECIAL[p])return SPECIAL[p];
  if(a.t==='R')return a.c.indexOf('е́е')>-1?'Regular: stem + -ее. Short word, so the stress jumps onto -е́е.':'Regular: stem + -ее. Long word, so the stress stays where it was.';
  if(a.t==='X')return p==='старый'?'Irregular: ста́рше is for people’s age (for things: старе́е).':'Irregular: a completely different word. Learn it by heart!';
  const g=CHG.find(g=>g.ex.some(x=>plain(x).startsWith(p+' ')));
  return g?`Consonant change: ${g.k}, then add -е.`:'Consonant change, then add -е.';
};
/* which is true? [first, second, emoji1, emoji2, comparative (true for first), its opposite, english] */
const TRUE=[
  ["слон","мышь","🐘","🐭","бо'льше","ме'ньше","An elephant is bigger than a mouse."],
  ["самолёт","по'езд","✈️","🚆","быстре'е","ме'дленнее","A plane is faster than a train."],
  ["черепа'ха","за'яц","🐢","🐇","ме'дленнее","быстре'е","A tortoise is slower than a hare."],
  ["ле'то","зима'","☀️","❄️","тепле'е","холодне'е","Summer is warmer than winter."],
  ["жира'ф","ло'шадь","🦒","🐴","вы'ше","ни'же","A giraffe is taller than a horse."],
  ["ба'бушка","вну'чка","👵","👧","ста'рше","моло'же","Grandma is older than her granddaughter."],
  ["маши'на","велосипе'д","🚗","🚲","доро'же","деше'вле","A car is more expensive than a bicycle."],
  ["хлеб","икра'","🍞","🫙","деше'вле","доро'же","Bread is cheaper than caviar."],
  ["мышь","соба'ка","🐭","🐶","ти'ше","гро'мче","A mouse is quieter than a dog."],
  ["шокола'д","лимо'н","🍫","🍋","сла'ще","кисле'е","Chocolate is sweeter than a lemon."],
  ["Эвере'ст","Эльбру'с","🏔️","⛰️","вы'ше","ни'же","Everest is higher than Elbrus."],
  ["Москва'","Каза'нь","🏙️","🕌","бо'льше","ме'ньше","Moscow is bigger than Kazan."],
  ["ночь","день","🌙","🌞","темне'е","светле'е","Night is darker than day."],
  ["ле'то","о'сень","☀️","🍂","жа'рче","холодне'е","Summer is hotter than autumn."]
].map(r=>r.map((x,k)=>k===2||k===3||k===6?x:S(x)));
/* самый: noun | gender | adjective already agreeing | english */
const SAMY_F=["са'мый","са'мая","са'мое","са'мые"].map(S);
const GI={m:0,f:1,n:2,pl:3};
const SAMY=`
го'род|m|большо'й|the biggest city|🏙️
река'|f|дли'нная|the longest river|🏞️
ме'сто|n|холо'дное|the coldest place|🥶
часы'|pl|дороги'е|the most expensive watch|⌚
день|m|счастли'вый|the happiest day|🥳
кни'га|f|интере'сная|the most interesting book|📕
зда'ние|n|высо'кое|the tallest building|🏢
лю'ди|pl|до'брые|the kindest people|🤗
фильм|m|смешно'й|the funniest film|🎬
маши'на|f|бы'страя|the fastest car|🏎️
мо'ре|n|тёплое|the warmest sea|🌊
де'ти|pl|весёлые|the most cheerful children|🧒
уро'к|m|тру'дный|the hardest lesson|🧗
пе'сня|f|краси'вая|the most beautiful song|🎵
`.trim().split('\n').map(l=>{const [n,g,a,en,e]=l.split('|');return {n:S(n),g,a:S(a),en,e};});

/* ============ HELPERS ============ */
const norm=s=>plain(s).trim().toLowerCase().replace(/ё/g,'е').replace(/[\s!.]+/g,'');
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const store={get(k,d){try{const v=localStorage.getItem('cg_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('cg_'+k,JSON.stringify(v))}catch(e){}}};
let xp=store.get('xp',0), level=store.get('level','all');
const pool=()=>A.filter(a=>level==='all'||a.lvl===level);
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
function keyChoices(){const key=e=>{if(e.target.tagName==='INPUT'||e.target.tagName==='SELECT')return;const k=+e.key;if(k>=1&&k<=4){const b=$$('.choice')[k-1];if(b&&!b.disabled)b.click();}else if(e.key==='Enter'){const nb=$('#nextBtn');if(nb&&$('#nextWrap').style.visibility==='visible'){e.preventDefault();nb.click();}}};document.addEventListener('keydown',key);cleanup=()=>document.removeEventListener('keydown',key);}
/* a learner's wrong guess: adjective stem + ее */
const naive=a=>{const p=plain(a.w);return p.replace(/(ый|ий|ой)$/,'')+'ее';};

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
  ['form','🛠️','How to form it','The regular -ее, the consonant changes, and the famous irregulars лу́чше, ху́же, бо́льше, ме́ньше.','var(--green)'],
  ['compare','⚖️','How to compare','чем, “much better”, adverbs and бо́лее. Everything you need to compare two things.','var(--blue)'],
  ['most','🏆','The most','са́мый + adjective: the biggest, the most interesting, the best.','var(--yellow)'],
  ['list','📖','Word list',`${A.length} adjectives with their comparatives and rule tags.`,'var(--lilac)'],
  ['choose','🧩','Choose it','See the adjective, pick the comparative. Watch out for the fake -ее!','var(--pink)'],
  ['type','⌨️','Type it','Write the comparative yourself. Cyrillic keyboard included.','var(--red)'],
  ['rebel','😈','Rule or rebel?','Does the adjective follow the -ее rule, or is it a rebel?','var(--green)'],
  ['true','🐘','Which is true?','Слон бо́льше или ме́ньше, чем мышь? Compare real things.','var(--blue)'],
  ['samy','🏆','Са́мый!','Са́мый, са́мая, са́мое or са́мые? Make it agree.','var(--yellow)'],
  ['memory','🧠','Memory match','Pair every adjective with its comparative.','var(--pink)']
];
VIEWS.home=el=>{
  const words=shuffle(A).slice(0,14).map(a=>`${a.e} ${a.w} → ${a.c}`);
  const track=`<div class="marquee__track" aria-hidden="true">${words.map(w=>`<span>${esc(w)}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar">A&gt;B</div>
      <span class="hero__sticker2">${S("бо'льше!")}</span>
      <span class="hero__sticker">${S("лу'чше")} ✦ A1–A2</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">comparatives</h1>
      <p class="hero__lead">Bigger, faster, more interesting, the best! Learn how to compare people and things in Russian. <span class="ru">${S("Чем бо'льше пра'ктики, тем лу'чше!")}</span></p>
      <div class="hero__stats">
        <span class="chip" style="background:var(--green)">-ее</span>
        <span class="chip" style="background:var(--yellow)">-е</span>
        <span class="chip" style="background:var(--pink)">${S("лу'чше · ху'же")}</span>
        <span class="chip">${A.length} adjectives · 6 games</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#form">Learn how to form it →</a>
        <a class="btn btn--ghost" href="#true">Jump into a game</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Four short lessons, then six games. Use the <b>A1 / A2 / All</b> switch at the top to choose the words.</p>
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
  shell(el,'How to form it','In Russian the comparative is usually <b>one word</b>: <span class="ru"><b>быстре\'е</b></span> = faster, more quickly. And it <b>never changes</b>: он, она́, оно́ and они́ all use the same form.',`
    <div class="big-ex"><div class="row"><span style="--gc:var(--blue)">Он быстре'е.</span><span style="--gc:var(--pink)">Она' быстре'е.</span><span style="--gc:var(--green)">Они' быстре'е.</span></div><small>He / she is faster. They are faster. Same word every time!</small></div>
    <h2 class="subhead">Three types</h2>
    <div class="steps3">
      <div class="stp" style="--gc:var(--green)"><span class="end">-ее</span><h3>Most adjectives: stem + -ее</h3>
        <p class="ex">бы'стр-ый → быстр<b>е'е</b></p><p class="ex">но'в-ый → нов<b>е'е</b></p><p class="ex">интере'сн-ый → интере'сн<b>ее</b></p>
        <p>🎯 Short words: the stress jumps onto -е́е. Long words: it stays.</p></div>
      <div class="stp" style="--gc:var(--yellow)"><span class="end">-е ✎</span><h3>Consonant change + -е</h3>
        <p class="ex">дорого'й → доро'<b>же</b></p><p class="ex">ти'хий → ти'<b>ше</b></p><p class="ex">просто'й → про'<b>ще</b></p>
        <p>Stems ending in г, к, х, д, т, з, ст: the consonant changes and you add -е.</p></div>
      <div class="stp" style="--gc:var(--pink)"><span class="end">!!!</span><h3>Totally irregular</h3>
        <p class="ex">хоро'ший → <b>лу'чше</b></p><p class="ex">плохо'й → <b>ху'же</b></p><p class="ex">большо'й → <b>бо'льше</b></p><p class="ex">ма'ленький → <b>ме'ньше</b></p>
        <p>The most common ones, of course. Learn them first!</p></div>
    </div>
    <h2 class="subhead">The consonant changes</h2>
    <div class="changes">${CHG.map(g=>`<div class="chg"><span class="k" style="--gc:${g.c}">${g.k}</span>${g.ex.map(x=>`<p>${esc(x)}</p>`).join('')}</div>`).join('')}</div>
    <h2 class="subhead">Try it</h2>
    <div class="builder">
      <select id="bSel">${A.map(a=>`<option value="${a.id}">${a.e} ${a.w} · ${a.en}</option>`).join('')}</select>
      <div class="bres" id="bres"></div><div class="bwhy" id="bwhy"></div>
    </div>
    <div class="duo">
      <div class="box" style="--gc:var(--blue)">
        <h3>🏃 Adverbs: the same form!</h3>
        <p>The comparative works for adverbs too:</p>
        <p class="ex">Он бе'гает быстре'е. = He runs faster.</p>
        <p class="ex">Говори'те ме'дленнее, пожа'луйста! = Speak more slowly, please!</p>
        <p class="ex">мно'го → бо'льше · ма'ло → ме'ньше · ра'но → ра'ньше · по'здно → по'зже</p>
      </div>
      <div class="box" style="--gc:var(--lilac)">
        <h3>👴 ста'рше or старе'е?</h3>
        <p>For <b>people’s age</b>, use <span class="ru"><b>ста'рше</b></span> and <span class="ru"><b>моло'же</b></span>:</p>
        <p class="ex">Брат ста'рше, чем сестра'.</p>
        <p>For <b>things</b>, use <span class="ru"><b>старе'е</b></span>:</p>
        <p class="ex">Э'тот дом старе'е, чем тот.</p>
      </div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#choose">Practise: Choose it →</a><a class="btn btn--ghost" href="#compare">Next: How to compare</a></div>`);
  const show=()=>{const a=A[+$('#bSel').value],T=TYPES[a.t];
    $('#bres').innerHTML=`<span class="w" style="background:var(--surface)">${esc(a.w)}</span><i>→</i><span class="w" style="background:${T.c}">${esc(a.c)}</span>`;
    $('#bwhy').textContent=why(a);};
  $('#bSel').onchange=show;show();
};

/* ============ HOW TO COMPARE ============ */
VIEWS.compare=el=>{
  shell(el,'How to compare','You have the comparative, so now compare two things! The key word is <span class="ru"><b>чем</b></span> (than).',`
    <div class="big-ex"><div class="row"><span style="--gc:var(--yellow)">Москва'</span><span style="--gc:var(--blue)">бо'льше,</span><span style="--gc:var(--pink)">чем</span><span style="--gc:var(--yellow)">Каза'нь.</span></div><small>Moscow is bigger than Kazan. Don’t forget the <b>comma</b> before чем!</small></div>
    <div class="duo">
      <div class="box" style="--gc:var(--yellow)">
        <h3>1 · … , чем …</h3>
        <p>The easy way: both things stay in their normal form (nominative).</p>
        <p class="ex">Самолёт быстре'е, чем по'езд.</p>
        <p class="ex">Сестра' ста'рше, чем брат.</p>
        <p class="ex">Чай вкусне'е, чем ко'фе.</p>
      </div>
      <div class="box" style="--gc:var(--blue)">
        <h3>2 · Without чем (A2)</h3>
        <p>Drop чем and put the second thing in the <b>genitive</b>. Very common with pronouns!</p>
        <p class="ex">Москва' бо'льше Каза'ни.</p>
        <p class="ex">Брат ста'рше меня'. = My brother is older than me.</p>
        <p class="ex">Ты вы'ше его'. = You’re taller than him.</p>
      </div>
    </div>
    <div class="duo">
      <div class="box" style="--gc:var(--green)">
        <h3>🔊 Much more, a bit more, even more</h3>
        <p class="ex">намно'го / гора'здо лу'чше = much better</p>
        <p class="ex">чуть-чуть быстре'е = a little faster</p>
        <p class="ex">ещё холодне'е = even colder</p>
        <p class="ex">Сего'дня намно'го тепле'е, чем вчера'.</p>
      </div>
      <div class="box" style="--gc:var(--pink)">
        <h3>📝 бо'лее + adjective</h3>
        <p>Another way, mostly <b>before a noun</b>: <span class="ru"><b>бо'лее</b></span> (more) / <span class="ru"><b>ме'нее</b></span> (less) + the normal adjective, which agrees with the noun.</p>
        <p class="ex">бо'лее интере'сная кни'га = a more interesting book</p>
        <p class="ex">ме'нее дорого'й телефо'н = a less expensive phone</p>
      </div>
    </div>
    <div class="box" style="--gc:var(--lilac);margin-bottom:40px">
      <h3>💬 Handy phrases</h3>
      <p class="ex">Как мо'жно скоре'е! = As soon as possible!</p>
      <p class="ex">Всё бо'льше и бо'льше. = More and more.</p>
      <p class="ex">Чем бо'льше, тем лу'чше. = The more, the better.</p>
      <p class="ex">Мне уже' лу'чше. = I feel better already.</p>
    </div>
    <div class="actions"><a class="btn btn--green" href="#true">Practise: Which is true? →</a><a class="btn btn--ghost" href="#most">Next: The most</a></div>`);
};

/* ============ THE MOST ============ */
VIEWS.most=el=>{
  shell(el,'The most (superlative)','To say “the biggest, the most interesting”, put <span class="ru"><b>са\'мый</b></span> before the adjective. Both words agree with the noun.',`
    <div class="tablewrap"><table>
      <tr><th></th><th>он</th><th>${S("она'")}</th><th>${S("оно'")}</th><th>${S("они'")}</th></tr>
      <tr><td><b>the most</b></td>${SAMY_F.map(w=>`<td class="cmp">${w}</td>`).join('')}</tr>
      <tr><td><b>example</b></td><td class="ru">са'мый большо'й го'род</td><td class="ru">са'мая дли'нная река'</td><td class="ru">са'мое холо'дное ме'сто</td><td class="ru">са'мые дороги'е часы'</td></tr>
    </table></div>
    <div class="duo">
      <div class="box" style="--gc:var(--yellow)">
        <h3>🏆 In sentences</h3>
        <p class="ex">Москва' — са'мый большо'й го'род в Росси'и.</p>
        <p class="ex">Э'то са'мая интере'сная кни'га!</p>
        <p class="ex">Ле'то — са'мое тёплое вре'мя го'да.</p>
        <p>“in” = <span class="ru"><b>в</b></span> + prepositional: <span class="ru"><b>в ми'ре</b></span> (in the world), <span class="ru"><b>в Росси'и</b></span>.</p>
      </div>
      <div class="box" style="--gc:var(--green)">
        <h3>⭐ Best and worst</h3>
        <p>Two special words, used like adjectives:</p>
        <p class="ex">лу'чший = the best · ху'дший = the worst</p>
        <p class="ex">мой лу'чший друг · моя' лу'чшая подру'га</p>
        <p class="ex">Э'то лу'чший день! = It’s the best day!</p>
      </div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#samy">Practise: Са́мый! →</a><a class="btn btn--ghost" href="#list">Word list</a></div>`);
};

/* ============ LIST ============ */
VIEWS.list=el=>{
  shell(el,'Word list','Every adjective with its comparative. The colour tag shows the type: <span class="rtag" style="--gc:var(--green)">-ее</span> regular, <span class="rtag" style="--gc:var(--yellow)">-е ✎</span> consonant change, <span class="rtag" style="--gc:var(--pink)">!!!</span> irregular.',`
    <div class="tablewrap"><table><tr><th></th><th>adjective</th><th>English</th><th>comparative</th><th>type</th><th>opposite</th></tr>
    ${pool().map(a=>`<tr><td>${a.e}</td><td class="ru">${esc(a.w)}</td><td>${esc(a.en)}</td><td class="cmp">${esc(a.c)}</td><td><span class="rtag" style="--gc:${TYPES[a.t].c}">${TYPES[a.t].tag}</span></td><td class="ru">${a.opp?esc(a.opp):''}</td></tr>`).join('')}
    </table></div>`);
};

/* ============ CHOOSE IT ============ */
VIEWS.choose=el=>{
  shell(el,'Choose it','Pick the comparative. Careful: one of the wrong answers is a fake -ее form that doesn’t exist!',`<div class="game">${bar('ch')}<div id="chStage"></div></div>`);
  mcRound({stage:'#chStage',id:'ch',total:12,make:()=>shuffle(pool()).slice(0,12),render:(a,i,last,answer,next)=>{
    const set=new Set([a.c]);
    if(a.t!=='R')set.add(naive(a));
    for(const o of shuffle(A.filter(x=>x!==a))){if(set.size>=4)break;set.add(o.c);}
    $('#chStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${a.e}</div><div class="bigword">${esc(a.w)}</div><p class="gloss">${esc(a.en)} → more ${esc(a.en.split(',')[0])}?</p>
      <div class="choices choices--4">${shuffle([...set]).map((o,j)=>`<button class="choice" data-o="${esc(o)}">${esc(o)}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===a.c,ok=>{answer(ok,`${esc(a.w)} → <b>${esc(a.c)}</b>`);$('#fb').innerHTML=`<b class="ru">${esc(a.c)}</b> · ${esc(why(a))}`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ TYPE IT ============ */
VIEWS.type=el=>{
  const KB=['йцукенгшщзхъ','фывапролджэ','ячсмитьбюё'];
  shell(el,'Type it','Write the comparative. You don’t need the stress mark, and Е / Ё both count.',`<div class="game">${bar('ty')}<div id="tyStage"></div></div>`);
  let qs,i,score,review;
  const reset=()=>{qs=shuffle(pool()).slice(0,10);i=0;score=0;review=[];};
  const draw=()=>{
    $('#tyScore').textContent=`${score} / ${qs.length}`;$('#tyFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){results($('#tyStage'),score,qs.length,review,()=>{reset();draw();});return;}
    const a=qs[i];let checked=false,hints=0;
    $('#tyStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${a.e}</div><div class="bigword">${esc(a.w)} → ?</div><p class="gloss">${esc(a.en)}</p>
      <input class="answer" id="tyIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…" lang="ru">
      <div class="feedback" id="fb"></div>
      <div class="actions"><button class="btn btn--ghost btn--sm" id="hint">💡 Hint</button><button class="btn btn--green" id="go">Check ↵</button></div>
      <div class="kbd">${KB.map((r,ri)=>`<div class="kbd__row">${[...r].map(c=>`<button class="key" data-k="${c}">${c}</button>`).join('')}${ri===2?'<button class="key key--wide" data-k="⌫">⌫</button>':''}</div>`).join('')}</div></div>`;
    const inp=$('#tyIn');inp.focus();
    inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();$('#go').click();}};
    $$('.key').forEach(k=>k.onclick=()=>{
      if(checked)return;const s=inp.selectionStart??inp.value.length,e2=inp.selectionEnd??s;
      if(k.dataset.k==='⌫'){if(s===e2&&s>0){inp.value=inp.value.slice(0,s-1)+inp.value.slice(e2);inp.setSelectionRange(s-1,s-1);}else{inp.value=inp.value.slice(0,s)+inp.value.slice(e2);inp.setSelectionRange(s,s);}}
      else{inp.value=inp.value.slice(0,s)+k.dataset.k+inp.value.slice(e2);inp.setSelectionRange(s+1,s+1);}
      inp.focus();
    });
    $('#hint').onclick=()=>{if(checked)return;const p=plain(a.c);hints=Math.min(hints+1,p.length-1);inp.value=p.slice(0,hints);inp.focus();};
    $('#go').onclick=()=>{
      if(checked){i++;draw();return;}
      if(!inp.value.trim()){inp.focus();return;}
      checked=true;inp.readOnly=true;const ok=norm(inp.value)===norm(a.c);
      if(ok){score++;inp.classList.add('ok');$('#fb').innerHTML=`${S("Ве'рно!")} ✦ <span class="ru">${esc(a.c)}</span><br><span class="muted">${esc(why(a))}</span>`;}
      else{review.push(`${esc(a.w)} → <b>${esc(a.c)}</b>`);inp.classList.add('bad');$('#fb').innerHTML=`Correct: <span class="ru" style="background:var(--yellow);padding:0 8px;border-radius:6px;border:2px solid var(--ink)">${esc(a.c)}</span><br><span class="muted">${esc(why(a))}</span>`;}
      $('#go').textContent=i===qs.length-1?'Results →':'Next →';$('#tyScore').textContent=`${score} / ${qs.length}`;
    };
  };
  reset();draw();
};

/* ============ RULE OR REBEL ============ */
VIEWS.rebel=el=>{
  shell(el,'Rule or rebel?','Does the adjective follow the -ее rule, change a consonant, or is it a total rebel? Think first, then see the answer. Keys 1–3.',`<div class="game">${bar('rb')}<div id="rbStage"></div></div>`);
  mcRound({stage:'#rbStage',id:'rb',total:12,make:()=>{const by={R:[],C:[],X:[]};pool().forEach(a=>by[a.t].push(a));return shuffle([...shuffle(by.R).slice(0,5),...shuffle(by.C).slice(0,4),...shuffle(by.X).slice(0,3)]);},render:(a,i,last,answer,next)=>{
    $('#rbStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${a.e}</div><div class="bigword">${esc(a.w)}</div><p class="gloss">${esc(a.en)} → <span class="ru" id="cShow" style="color:var(--ink);font-weight:900">?</span></p>
      <div class="choices" style="grid-template-columns:repeat(3,1fr)">${Object.entries(TYPES).map(([k,T],j)=>`<button class="choice" data-t="${k}" style="background:${T.c}">${T.tag}<small style="color:var(--ink)">${T.name} · ${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.t===a.t,ok=>{answer(ok,`${esc(a.w)} → <b>${esc(a.c)}</b> (${TYPES[a.t].name})`);$('#cShow').textContent=a.c;$('#fb').innerHTML=esc(why(a));});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ WHICH IS TRUE ============ */
VIEWS.true=el=>{
  shell(el,'Which is true?','Look at the two pictures and complete the sentence so that it’s true.',`<div class="game">${bar('tr')}<div id="trStage"></div></div>`);
  mcRound({stage:'#trStage',id:'tr',total:10,make:()=>shuffle(TRUE).slice(0,10).map(r=>({r,swap:Math.random()<.5})),render:(q,i,last,answer,next)=>{
    const [a,b,ea,eb,c,o,en]=q.r;const sw=q.swap;
    const first=sw?b:a,second=sw?a:b,e1=sw?eb:ea,e2=sw?ea:eb,right=sw?o:c,wrong=sw?c:o;
    const sent=`${cap(first)} <span class="blank" id="blank">${esc(right)}</span>, чем ${esc(second)}.`;
    $('#trStage').innerHTML=`<div class="stage">
      <div class="vs"><span class="e">${e1}</span><b>vs</b><span class="e">${e2}</span></div>
      <p class="sentence">${sent}</p>
      <div class="choices">${shuffle([right,wrong]).map((x,j)=>`<button class="choice" data-o="${esc(x)}">${esc(x)}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(bt=>bt.dataset.o===right,ok=>{answer(ok,`${esc(cap(first))} <b>${esc(right)}</b>, чем ${esc(second)}.`);$('#blank').classList.add('filled');
      $('#fb').innerHTML=sw?`${esc(cap(first))} ${esc(right)}, чем ${esc(second)}. (= ${esc(cap(second))} ${esc(c)}, чем ${esc(first)}.)`:esc(en);});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ САМЫЙ ============ */
VIEWS.samy=el=>{
  shell(el,'Са\'мый!','Pick the form of са́мый that agrees with the noun: са́мый, са́мая, са́мое or са́мые? Keys 1–4.',`<div class="game">${bar('sm')}<div id="smStage"></div></div>`);
  mcRound({stage:'#smStage',id:'sm',total:12,make:()=>shuffle(SAMY).slice(0,12),render:(s,i,last,answer,next)=>{
    const right=SAMY_F[GI[s.g]];
    $('#smStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${s.e}</div>
      <p class="sentence">${S("Э'то")} <span class="blank" id="blank">${right}</span> ${esc(s.a)} ${esc(s.n)}!</p>
      <p class="gloss">This is ${esc(s.en)}!</p>
      <div class="choices choices--4">${SAMY_F.map((w,j)=>`<button class="choice" data-o="${w}">${w}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===right,ok=>{answer(ok,`<b>${right}</b> ${esc(s.a)} ${esc(s.n)}`);$('#blank').classList.add('filled');
      $('#fb').innerHTML=`${esc(s.n)} is ${{m:'masculine',f:'feminine',n:'neuter',pl:'plural'}[s.g]} → <b>${right}</b> ${esc(s.a)}`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ MEMORY ============ */
VIEWS.memory=el=>{
  let cards,open,moves,matched,t0,timer,lock;
  shell(el,'Memory match','Flip two tiles at a time. Pair each adjective (yellow) with its comparative (blue).',`
    <div class="game"><div class="game__bar"><span class="score" id="mmMoves">0 moves</span><span class="score" id="mmTime" style="background:var(--blue)">0:00</span><button class="btn btn--sm btn--ghost" id="mmRe">↻ New board</button></div><div id="mmStage"></div></div>`);
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const start=()=>{
    clearInterval(timer);
    const seen=new Set(),as=[];for(const a of shuffle(pool())){if(!seen.has(a.c)){seen.add(a.c);as.push(a);}if(as.length===8)break;}
    cards=shuffle(as.flatMap(a=>[{k:a.id,t:a.w,e:a.e,s:1},{k:a.id,t:a.c,e:'',s:0}]));
    open=[];moves=0;matched=0;t0=null;lock=false;
    $('#mmMoves').textContent='0 moves';$('#mmTime').textContent='0:00';
    $('#mmStage').innerHTML=`<div class="mem">${cards.map((c,j)=>`<button class="mcard" data-j="${j}" aria-label="Hidden tile"><div class="mcard__inner"><div class="mcard__face mcard__back">✦</div><div class="mcard__face mcard__front ru ${c.s?'a':'c'}" style="display:flex;flex-direction:column;gap:4px">${c.e?`<span style="font-size:1.3em">${c.e}</span>`:''}${esc(c.t)}</div></div></button>`).join('')}</div>`;
    $$('.mcard').forEach(b=>b.onclick=()=>flip(b));
  };
  const flip=b=>{
    if(lock||b.classList.contains('up'))return;
    if(!t0){t0=Date.now();timer=setInterval(()=>$('#mmTime').textContent=fmt(Math.floor((Date.now()-t0)/1000)),500);}
    b.classList.add('up');open.push(b);
    if(open.length===2){
      moves++;$('#mmMoves').textContent=moves+' moves';
      const [x,d]=open.map(y=>cards[+y.dataset.j]);
      if(x.k===d.k&&x.s!==d.s){open.forEach(y=>y.classList.add('done'));open=[];matched++;
        if(matched===cards.length/2){clearInterval(timer);addXP(5);burst();
          setTimeout(()=>{$('#mmStage').insertAdjacentHTML('beforeend',`<div class="stage stage--pink" style="margin-top:24px"><p class="result__msg">${S("Молоде'ц!")}</p><div class="result__big">${moves}</div><p><b>moves</b> in ${$('#mmTime').textContent}</p><div class="actions"><button class="btn btn--ghost" id="mmAgain">Play again</button></div></div>`);$('#mmAgain').onclick=start;},450);}
      }else{lock=true;setTimeout(()=>{open.forEach(y=>y.classList.remove('up'));open=[];lock=false;},850);}
    }
  };
  $('#mmRe').onclick=start;cleanup=()=>clearInterval(timer);
  start();
};

/* ============ INIT ============ */
setLevel(level);
$('#xp').textContent='★ '+xp+' XP';
$('#footRu').textContent=S("Чем бо'льше игра'ешь, тем лу'чше говори'шь!");
go();
