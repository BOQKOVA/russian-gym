
/* ============ DATA ============
 word | english | gender (m f n pl) | nominative plural ('' = no usual plural) | topic | level | emoji | note
 An apostrophe ' after a vowel = stress mark. */
const TOPICS = {
  family:   {ru:"семья'",            en:'Family',          e:'👪', c:'var(--pink)'},
  food:     {ru:"еда'",              en:'Food & drink',    e:'🍎', c:'var(--green)'},
  home:     {ru:"дом",               en:'Home',            e:'🏠', c:'var(--yellow)'},
  city:     {ru:"го'род",            en:'City',            e:'🏙️', c:'var(--blue)'},
  transport:{ru:"тра'нспорт",        en:'Transport',       e:'🚌', c:'var(--lilac)'},
  clothes:  {ru:"оде'жда",           en:'Clothes',         e:'👗', c:'var(--pink)'},
  body:     {ru:"те'ло",             en:'Body',            e:'✋', c:'var(--red)'},
  nature:   {ru:"приро'да",          en:'Nature & weather',e:'🌳', c:'var(--green)'},
  animals:  {ru:"живо'тные",         en:'Animals',         e:'🐶', c:'var(--yellow)'},
  time:     {ru:"вре'мя",            en:'Time',            e:'⏰', c:'var(--blue)'},
  study:    {ru:"учёба и рабо'та",   en:'Study & work',    e:'📚', c:'var(--lilac)'}
};
const RAW = `
ма'ма|mum|f|ма'мы|family|A1|👩|
па'па|dad|m|па'пы|family|A1|👨|Ends in -а but means a man, so it's masculine: мой па'па.
брат|brother|m|бра'тья|family|A1|👦|Irregular plural.
сестра'|sister|f|сёстры|family|A1|👧|Stress moves in the plural.
сын|son|m|сыновья'|family|A2|👶|Irregular plural.
дочь|daughter|f|до'чери|family|A2|👩‍🦰|Ends in -ь and is feminine. Plural adds -ер-.
ба'бушка|grandmother|f|ба'бушки|family|A1|👵|After к write и, not ы.
де'душка|grandfather|m|де'душки|family|A1|👴|Ends in -а but means a man, so it's masculine: мой де'душка.
семья'|family|f|се'мьи|family|A1|👪|
ребёнок|child|m|де'ти|family|A1|🧒|Completely different plural: де'ти.
муж|husband|m|мужья'|family|A2|🤵|Irregular plural.
жена'|wife|f|жёны|family|A2|👰|
друг|friend|m|друзья'|family|A1|🤝|Irregular plural.
подру'га|friend (female)|f|подру'ги|family|A1|👯|After г write и, not ы.
хлеб|bread|m||food|A1|🍞|
молоко'|milk|n||food|A1|🥛|
вода'|water|f||food|A1|💧|
сыр|cheese|m|сыры'|food|A1|🧀|
я'блоко|apple|n|я'блоки|food|A1|🍎|Neuter, but the plural ends in -и.
бана'н|banana|m|бана'ны|food|A1|🍌|
яйцо'|egg|n|я'йца|food|A1|🥚|
ры'ба|fish|f|ры'бы|food|A1|🐟|
мя'со|meat|n||food|A1|🥩|
суп|soup|m|супы'|food|A1|🍲|
чай|tea|m||food|A1|🍵|
ко'фе|coffee|m||food|A1|☕|Looks neuter, but it's masculine: мой ко'фе. It never changes form.
сала'т|salad|m|сала'ты|food|A2|🥗|
карто'шка|potatoes|f||food|A2|🥔|
пиро'г|pie|m|пироги'|food|A2|🥧|
сок|juice|m|со'ки|food|A1|🧃|
дом|house|m|дома'|home|A1|🏠|Plural in -а': дома'.
кварти'ра|flat, apartment|f|кварти'ры|home|A1|🏢|
ко'мната|room|f|ко'мнаты|home|A1|🛋️|
ку'хня|kitchen|f|ку'хни|home|A1|🍳|
окно'|window|n|о'кна|home|A1|🪟|Stress moves in the plural.
дверь|door|f|две'ри|home|A1|🚪|Ends in -ь and is feminine.
стол|table|m|столы'|home|A1||
стул|chair|m|сту'лья|home|A1|🪑|Irregular plural.
крова'ть|bed|f|крова'ти|home|A1|🛏️|Ends in -ь and is feminine.
дива'н|sofa|m|дива'ны|home|A2||
ла'мпа|lamp|f|ла'мпы|home|A2|💡|
холоди'льник|fridge|m|холоди'льники|home|A2|🧊|
зе'ркало|mirror|n|зеркала'|home|A2|🪞|
ключ|key|m|ключи'|home|A2|🔑|
го'род|city, town|m|города'|city|A1|🏙️|Plural in -а': города'.
у'лица|street|f|у'лицы|city|A1|🛣️|
магази'н|shop|m|магази'ны|city|A1|🛒|
парк|park|m|па'рки|city|A1|🎠|
музе'й|museum|m|музе'и|city|A1|🏛️|
кафе'|café|n|кафе'|city|A1||Borrowed word: it never changes form.
рестора'н|restaurant|m|рестора'ны|city|A1|🍽️|
апте'ка|pharmacy|f|апте'ки|city|A2|💊|
больни'ца|hospital|f|больни'цы|city|A2|🏥|
банк|bank|m|ба'нки|city|A2|🏦|
по'чта|post office|f|по'чты|city|A2|📮|
пло'щадь|square|f|пло'щади|city|A2|⛲|Ends in -ь and is feminine.
мост|bridge|m|мосты'|city|A2|🌉|
вокза'л|train station|m|вокза'лы|city|A2|🚉|
гости'ница|hotel|f|гости'ницы|city|A2|🏨|
маши'на|car|f|маши'ны|transport|A1|🚗|
авто'бус|bus|m|авто'бусы|transport|A1|🚌|
по'езд|train|m|поезда'|transport|A1|🚆|Plural in -а': поезда'.
метро'|metro|n|метро'|transport|A1|🚇|Borrowed word: it never changes form.
такси'|taxi|n|такси'|transport|A1|🚕|Borrowed word: it never changes form.
самолёт|plane|m|самолёты|transport|A1|✈️|
велосипе'д|bicycle|m|велосипе'ды|transport|A2|🚲|
трамва'й|tram|m|трамва'и|transport|A2|🚋|
биле'т|ticket|m|биле'ты|transport|A2|🎫|
пла'тье|dress|n|пла'тья|clothes|A1|👗|
руба'шка|shirt|f|руба'шки|clothes|A1|👔|
ю'бка|skirt|f|ю'бки|clothes|A1||
су'мка|bag|f|су'мки|clothes|A1|👜|
часы'|watch, clock|pl|часы'|clothes|A1|⌚|Plural only: мои' часы'.
ку'ртка|jacket|f|ку'ртки|clothes|A2|🧥|
пальто'|coat|n|пальто'|clothes|A2||Borrowed word: it never changes form.
ша'пка|hat|f|ша'пки|clothes|A2|🧢|
брю'ки|trousers|pl|брю'ки|clothes|A2|👖|Plural only: мои' брю'ки.
очки'|glasses|pl|очки'|clothes|A2|👓|Plural only: мои' очки'.
рука'|hand, arm|f|ру'ки|body|A1|✋|Stress moves in the plural.
нога'|leg, foot|f|но'ги|body|A1|🦵|Stress moves in the plural.
глаз|eye|m|глаза'|body|A1|👁️|Plural in -а': глаза'.
нос|nose|m|носы'|body|A1|👃|
голова'|head|f|го'ловы|body|A2|🙂|Stress moves in the plural.
у'хо|ear|n|у'ши|body|A2|👂|Irregular plural.
рот|mouth|m|рты|body|A2|👄|The о disappears: рот → рты.
зуб|tooth|m|зу'бы|body|A2|🦷|
се'рдце|heart|n|сердца'|body|A2|❤️|
во'лосы|hair|pl|во'лосы|body|A2|💇|Usually plural: мои' во'лосы.
со'лнце|sun|n||nature|A1|☀️|
дождь|rain|m|дожди'|nature|A1|🌧️|Ends in -ь but is masculine.
снег|snow|m||nature|A1|❄️|
мо'ре|sea|n|моря'|nature|A1|🌊|
река'|river|f|ре'ки|nature|A1|🏞️|
де'рево|tree|n|дере'вья|nature|A1|🌳|Irregular plural.
цвето'к|flower|m|цветы'|nature|A1|🌸|Irregular plural.
лес|forest|m|леса'|nature|A2|🌲|Plural in -а': леса'.
гора'|mountain|f|го'ры|nature|A2|⛰️|
ве'тер|wind|m|ве'тры|nature|A2|💨|The е disappears: ве'тер → ве'тры.
звезда'|star|f|звёзды|nature|A2|⭐|
луна'|moon|f|лу'ны|nature|A2|🌙|
соба'ка|dog|f|соба'ки|animals|A1|🐶|
ко'шка|cat|f|ко'шки|animals|A1|🐱|
кот|cat (male)|m|коты'|animals|A1|🐈|
пти'ца|bird|f|пти'цы|animals|A1|🐦|
ло'шадь|horse|f|ло'шади|animals|A2|🐴|Ends in -ь and is feminine.
коро'ва|cow|f|коро'вы|animals|A2|🐮|
медве'дь|bear|m|медве'ди|animals|A2|🐻|Ends in -ь but is masculine.
мышь|mouse|f|мы'ши|animals|A2|🐭|Ends in -ь and is feminine.
волк|wolf|m|во'лки|animals|A2|🐺|
лиса'|fox|f|ли'сы|animals|A2|🦊|
день|day|m|дни|time|A1|🌞|Ends in -ь but is masculine. The е disappears: дни.
ночь|night|f|но'чи|time|A1|🌃|Ends in -ь and is feminine.
у'тро|morning|n||time|A1|🌅|
ве'чер|evening|m|вечера'|time|A1|🌆|Plural in -а': вечера'.
неде'ля|week|f|неде'ли|time|A1|📅|
ме'сяц|month|m|ме'сяцы|time|A1|🗓️|
год|year|m|го'ды|time|A1|🎆|
час|hour|m|часы'|time|A1|🕐|
мину'та|minute|f|мину'ты|time|A2|⏱️|
пра'здник|holiday|m|пра'здники|time|A2|🎉|
вре'мя|time|n|времена'|time|A2|⏳|Ends in -мя: neuter. Мое' вре'мя.
кни'га|book|f|кни'ги|study|A1|📕|
ру'чка|pen|f|ру'чки|study|A1|🖊️|
каранда'ш|pencil|m|карандаши'|study|A1|✏️|After ш write и, not ы.
тетра'дь|notebook|f|тетра'ди|study|A1|📓|Ends in -ь and is feminine.
слова'рь|dictionary|m|словари'|study|A2|📖|Ends in -ь but is masculine.
учи'тель|teacher|m|учителя'|study|A1|🧑‍🏫|Ends in -ь but is masculine. Plural in -я'.
студе'нт|student|m|студе'нты|study|A1|🧑‍🎓|
врач|doctor|m|врачи'|study|A1|🩺|
шко'ла|school|f|шко'лы|study|A1|🏫|
университе'т|university|m|университе'ты|study|A1|🎓|
компью'тер|computer|m|компью'теры|study|A1|💻|
телефо'н|phone|m|телефо'ны|study|A1|📱|
уро'к|lesson|m|уро'ки|study|A1|📝|
вопро'с|question|m|вопро'сы|study|A2|❓|
и'мя|name|n|имена'|study|A1|🏷️|Ends in -мя: neuter. Мое' и'мя.
`;

const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1\u0301');
const G = {
  m: {en:'masculine', ru:'он',  my:'мой',   c:'var(--blue)'},
  f: {en:'feminine',  ru:S("она'"), my:S("моя'"), c:'var(--pink)'},
  n: {en:'neuter',    ru:S("оно'"), my:'моё',   c:'var(--green)'},
  pl:{en:'plural only',ru:S("они'"),my:S("мои'"), c:'var(--yellow)'}
};
Object.values(TOPICS).forEach(t=>t.ru=S(t.ru));
const NOUNS = RAW.trim().split('\n').map((line,id)=>{
  const [w,en,g,pl,topic,lvl,emoji,note]=line.split('|');
  return {id,w:S(w),en,g,pl:S(pl),topic,lvl,emoji,note:S(note||'')};
});

/* ============ HELPERS ============ */
const plain=s=>s.replace(/́/g,'');
const norm=s=>plain(s).trim().toLowerCase().replace(/ё/g,'е').replace(/\s+/g,' ');
const store={
  get(k,d){try{const v=localStorage.getItem('ng_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem('ng_'+k,JSON.stringify(v))}catch(e){}}
};
let xp=store.get('xp',0), learned=new Set(store.get('learned',[])), level=store.get('level','all'), topic=store.get('topic','all');
if(topic!=='all'&&!TOPICS[topic])topic='all';
const byLevel=()=>NOUNS.filter(n=>level==='all'||n.lvl===level);
const pool=()=>byLevel().filter(n=>topic==='all'||n.topic===topic);
/* a pool with at least `min` items: falls back to all topics if the chosen topic is too small */
function poolMin(min,filter=()=>true){
  const p=pool().filter(filter);
  if(p.length>=min)return {list:p,wide:false};
  return {list:byLevel().filter(filter),wide:true};
}
const gTag=g=>`<span class="g" style="--gc:${G[g].c}">${G[g].ru} · ${G[g].en}</span>`;
function addXP(n){xp+=n;store.set('xp',xp);const el=$('#xp');el.textContent='★ '+xp+' XP';el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
function burst(){
  const cols=['#fe98c0','#80eb3d','#3dd0eb','#eb583d','#ffe14d'];
  for(let i=0;i<26;i++){
    const s=document.createElement('span');s.className='burst';s.textContent=pick(['✦','★','●','✸']);
    s.style.left=(innerWidth/2)+'px';s.style.top=(innerHeight/2)+'px';s.style.color=pick(cols);
    s.style.setProperty('--dx',(Math.random()*700-350)+'px');s.style.setProperty('--dy',(Math.random()*600-380)+'px');s.style.setProperty('--r',(Math.random()*720-360)+'deg');
    document.body.appendChild(s);setTimeout(()=>s.remove(),1400);
  }
}
function resultMsg(r){return S(r>=.9?"Отли'чно!":r>=.7?"Хорошо'!":r>=.4?"Неплохо'!":"Ещё раз!");}
function wideNote(w){return w?`<p class="muted" style="font-weight:700;margin:-8px 0 16px">This topic is small at this level, so words from all topics are mixed in.</p>`:'';}
/* first word of a sentence gets a capital letter */
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;

/* ============ MODAL ============ */
function openNoun(n){
  const t=TOPICS[n.topic];
  $('#modalBody').innerHTML=`
    <div class="detail__head" style="--gc:${G[n.g].c}">
      <span class="detail__e">${n.emoji||t.e}</span>
      <h2 class="detail__ru">${esc(n.w)}</h2>
      <p class="detail__en">${esc(n.en)}</p>
    </div>
    <div class="detail__body">
      <div class="facts">
        <div class="fact"><span>Gender</span><b>${G[n.g].ru}</b><span>${G[n.g].en}</span></div>
        <div class="fact"><span>Plural</span><b>${n.pl?esc(n.pl):'—'}</b><span>${n.g==='pl'?'only plural':n.pl?'nominative plural':'usually not counted'}</span></div>
        <div class="fact"><span>Topic</span><b>${t.ru}</b><span>${t.en}</span></div>
        <div class="fact"><span>Level</span><b>${n.lvl}</b><span>CEFR</span></div>
      </div>
      ${n.note?`<div class="note">💡 ${esc(n.note)}</div>`:''}
      <div class="example"><p class="label">My …</p>
        <p class="ru">${G[n.g].my} ${esc(n.w)}${n.pl&&n.g!=='pl'?` · ${G.pl.my} ${esc(n.pl)}`:''}</p>
        <p class="muted">my ${esc(n.en.split(',')[0])}</p></div>
      <div class="actions" style="justify-content:flex-start;margin:0">
        <button class="btn btn--sm ${learned.has(n.id)?'btn--green':'btn--ghost'}" id="lBtn">${learned.has(n.id)?'★ Learned':'☆ Mark as learned'}</button>
      </div>
    </div>`;
  $('#lBtn').onclick=()=>{if(learned.has(n.id))learned.delete(n.id);else{learned.add(n.id);addXP(1);}store.set('learned',[...learned]);openNoun(n);if(route==='nouns')renderList();};
  $('#modal').classList.add('is-open');$('#modal').setAttribute('aria-hidden','false');
}
function closeModal(){$('#modal').classList.remove('is-open');$('#modal').setAttribute('aria-hidden','true');}
$('#modalClose').onclick=closeModal;
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

/* ============ ROUTER & FILTERS ============ */
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
$('#topicSel').innerHTML=`<option value="all">All topics</option>`+Object.entries(TOPICS).map(([k,t])=>`<option value="${k}">${t.e} ${t.en}</option>`).join('');
function setTopic(t){topic=t;store.set('topic',t);$('#topicSel').value=t;}
$('#topicSel').onchange=e=>{setTopic(e.target.value);go();};

function shell(el,title,sub,inner){
  el.innerHTML=`<section class="section"><div class="container"><h1 class="heading">${title}</h1><p class="lead">${sub}</p>${inner}</div></section>`;
}
function filterChip(){return `<span class="chip" style="background:var(--yellow)">${level==='all'?'A1 + A2':level} · ${topic==='all'?'all topics':TOPICS[topic].en} · ${pool().length} nouns</span>`;}

/* ============ HOME ============ */
const MODES=[
  ['nouns','📖','All nouns','Every noun by topic with its gender, plural, “my …” form and tips on the tricky ones.','var(--yellow)'],
  ['cards','🃏','Flashcards','Picture + word on the front, meaning, gender and plural on the back.','var(--pink)'],
  ['gender',"⚖️",S("Он, она', оно'?"),'Sort each noun by gender. Learn the ending rules and the sneaky exceptions.','var(--blue)'],
  ['plural','👯','Plurals','One book, two books: type the plural. Cyrillic keyboard included.','var(--green)'],
  ['picture','🖼️','Picture quiz','See the picture, pick the Russian word. Fast and fun for beginners.','var(--lilac)'],
  ['memory','🧠','Memory match','Flip the tiles and pair every picture with its Russian word.','var(--red)'],
  ['moy',"🙋",S("Мой, моя', моё?"),'Choose the right “my” for each noun: мой, моя́, моё or мои́.','var(--yellow)'],
  ['odd','🕵️','Odd one out','Three words belong to one topic. Find the one that doesn’t.','var(--pink)']
];
VIEWS.home=el=>{
  const words=shuffle(NOUNS).slice(0,16).map(n=>(n.emoji?n.emoji+' ':'')+n.w);
  const track=`<div class="marquee__track" aria-hidden="true">${words.map(w=>`<span>${w}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar ru">Ж</div>
      <span class="hero__sticker2">${S("он · она' · оно'")}</span>
      <span class="hero__sticker">A1 ✦ A2</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">nouns</h1>
      <p class="hero__lead">${NOUNS.length} everyday Russian nouns in ${Object.keys(TOPICS).length} topics. Learn the gender, the plural and the meaning, then play. <span class="ru">${S("Учи'м слова' игра'я.")}</span></p>
      <div class="hero__stats">
        <span class="chip" style="background:var(--green)">${NOUNS.filter(n=>n.lvl==='A1').length} A1 nouns</span>
        <span class="chip" style="background:var(--pink)">${NOUNS.filter(n=>n.lvl==='A2').length} A2 nouns</span>
        <span class="chip">7 games</span>
        <span class="chip" style="background:var(--yellow)">${learned.size} learned by you</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#cards">Start with flashcards →</a>
        <a class="btn btn--ghost" href="#nouns">See all nouns</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick a topic</h2>
    <p class="lead">Choosing a topic sets it for every game. You can change it any time with the menu at the top.</p>
    <div class="topics">${Object.entries(TOPICS).map(([k,t])=>`
      <button class="topic" data-t="${k}" style="--c:${t.c}"><span class="topic__e">${t.e}</span><span class="topic__ru">${t.ru}</span><span class="topic__en">${t.en} · ${NOUNS.filter(n=>n.topic===k).length} words</span></button>`).join('')}
    </div>
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Use the <b>A1 / A2 / All</b> switch and the topic menu at the top to choose which nouns appear.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">0${i+1}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${s}</p><span class="mode__go">${i===0?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
  $$('.topic').forEach(b=>b.onclick=()=>{setTopic(b.dataset.t);location.hash='nouns';});
};

/* ============ ALL NOUNS ============ */
let nq='',ng='';
function renderList(){
  const q=norm(nq);
  const list=pool().filter(n=>(!ng||n.g===ng)&&(!q||norm(n.w).includes(q)||n.en.toLowerCase().includes(q)||norm(n.pl).includes(q)));
  const groups={};list.forEach(n=>(groups[n.topic]=groups[n.topic]||[]).push(n));
  $('#nlist').innerHTML=list.length?Object.entries(groups).map(([k,arr])=>`
    <div class="groupsec"><h2 class="grouphead"><span class="badge" style="--c:${TOPICS[k].c}">${TOPICS[k].e}</span><span class="ru">${TOPICS[k].ru}</span><span class="muted" style="font-size:1.1rem">${TOPICS[k].en}</span></h2>
    <div class="ngrid">${arr.map(n=>`
      <button class="tile" data-id="${n.id}" style="--gc:${G[n.g].c}">
        ${learned.has(n.id)?'<span class="tile__star" title="Learned">★</span>':''}
        <span class="tile__e">${n.emoji||''}</span>
        <span class="tile__ru">${esc(n.w)}</span><span class="tile__en">${esc(n.en)}</span>
        <span class="tile__tags"><span class="g" style="--gc:${G[n.g].c}">${G[n.g].ru}</span><span class="g" style="--gc:var(--surface)">${n.lvl}</span>${n.note?'<span class="g" style="--gc:var(--lilac)">💡</span>':''}</span>
      </button>`).join('')}</div></div>`).join(''):'<p class="lead">Nothing found. Try another word.</p>';
  $$('#nlist .tile').forEach(t=>t.onclick=()=>openNoun(NOUNS[+t.dataset.id]));
}
VIEWS.nouns=el=>{
  shell(el,'All nouns','Tap a noun to see its gender, plural and the right “my”. Tile colours show the gender. 💡 marks a word with a tip.',`
    <div class="toolbar"><input class="search" id="nsearch" placeholder="Search: ${S("кни'га")}, dog, ${S("города'")}…" value="${esc(nq)}">${filterChip()}</div>
    <div class="legend">
      <button class="filter g ${!ng?'':''}" data-g="" style="--gc:${!ng?'var(--ink);color:var(--bg)':'var(--surface)'};cursor:pointer">all genders</button>
      ${Object.entries(G).map(([k,g])=>`<button class="filter g" data-g="${k}" style="--gc:${g.c};cursor:pointer;${ng===k?'box-shadow:3px 3px 0 var(--ink);transform:translate(-2px,-2px)':''}">${g.ru} · ${g.en}</button>`).join('')}
    </div>
    <div id="nlist"></div>`);
  $('#nsearch').oninput=e=>{nq=e.target.value;renderList();};
  $$('.filter').forEach(b=>b.onclick=()=>{ng=ng===b.dataset.g?'':b.dataset.g;VIEWS.nouns(el);});
  renderList();
};

/* ============ FLASHCARDS ============ */
VIEWS.cards=el=>{
  let dir='ru',deck,i,known,again;
  const reset=()=>{deck=shuffle(pool());i=0;known=0;again=0;};reset();
  shell(el,'Flashcards','Click the card (or press Space) to flip. “Got it” moves it to your learned pile, “Again” puts it back in the deck. Arrow keys work too.',`
    <div class="game">
      <div class="toggle-row"><button class="btn btn--sm" data-d="ru">Russian → English</button><button class="btn btn--sm btn--ghost" data-d="en">Picture → Russian</button></div>
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="fcFill"></div></div><span class="score" id="fcScore"></span></div>
      <div id="fcStage"></div>
    </div>`);
  const draw=()=>{
    $('#fcScore').textContent=`✓ ${known} · ↺ ${again}`;
    $('#fcFill').style.width=(deck.length?(known/(known+deck.length-i))*100:100)+'%';
    if(i>=deck.length){
      burst();
      $('#fcStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${S("Коло'да про'йдена!")}</p><div class="result__big">${known}</div><p><b>cards learned</b>, ${again} sent back for another go.</p><div class="actions"><button class="btn btn--ghost" id="fcRe">Shuffle again</button><a class="btn btn--green" href="#gender">Now sort the genders →</a></div></div>`;
      $('#fcRe').onclick=()=>{reset();draw();};return;
    }
    const n=deck[i],t=TOPICS[n.topic];
    const front=dir==='ru'
      ?`<div style="font-size:3rem;line-height:1">${n.emoji||t.e}</div><div class="flip__big">${esc(n.w)}</div>`
      :`<div style="font-size:5rem;line-height:1">${n.emoji||t.e}</div><div class="flip__big" style="font-family:var(--font-display);font-size:1.8rem">${esc(n.en)}</div>`;
    const back=`<div class="flip__big" style="${dir==='ru'?'font-family:var(--font-display);font-size:2rem':''}">${esc(dir==='ru'?n.en:n.w)}</div>
      <div class="mini"><span>${G[n.g].ru} · ${G[n.g].en}</span>${n.pl&&n.g!=='pl'?`<span>pl. ${esc(n.pl)}</span>`:''}</div>
      <p class="ru" style="margin:0;font-weight:700">${G[n.g].my} ${esc(n.w)}</p>`;
    $('#fcStage').innerHTML=`
      <div class="flip" id="flip" tabindex="0" role="button" aria-label="Flip card"><div class="flip__inner">
        <div class="flip__face flip__front" style="--gc:${t.c}">${front}<span class="flip__hint">tap to flip ↻</span></div>
        <div class="flip__face flip__back">${back}</div>
      </div></div>
      <div class="actions" style="margin-top:28px"><button class="btn btn--red" id="fcAgain">↺ Again</button><button class="btn btn--green" id="fcGot">✓ Got it</button></div>`;
    $('#flip').onclick=()=>$('#flip').classList.toggle('is-flipped');
    $('#fcAgain').onclick=()=>{again++;deck.push(n);i++;draw();};
    $('#fcGot').onclick=()=>{known++;if(!learned.has(n.id)){learned.add(n.id);store.set('learned',[...learned]);}addXP(1);i++;draw();};
  };
  $$('[data-d]').forEach(b=>b.onclick=()=>{dir=b.dataset.d;$$('[data-d]').forEach(x=>x.classList.toggle('btn--ghost',x!==b));draw();});
  const key=e=>{if(e.target.tagName==='INPUT'||e.target.tagName==='SELECT')return;const f=$('#flip');if(!f)return;
    if(e.code==='Space'){e.preventDefault();f.classList.toggle('is-flipped');}else if(e.key==='ArrowRight')$('#fcGot')?.click();else if(e.key==='ArrowLeft')$('#fcAgain')?.click();};
  document.addEventListener('keydown',key);cleanup=()=>document.removeEventListener('keydown',key);
  draw();
};

/* ============ GENDER ============ */
function genderReason(n){
  if(n.note&&/masculine|feminine|neuter|Plural only|Usually plural/.test(n.note))return n.note;
  const w=plain(n.w);
  if(n.g==='m')return 'Ends in a consonant or -й: masculine.';
  if(n.g==='f')return /ь$/.test(w)?'Ends in -ь and is feminine.':'Ends in -а / -я: feminine.';
  if(n.g==='n')return /^Borrowed/.test(n.note)?'Borrowed words that never change are usually neuter.':(/мя$/.test(w)?n.note:'Ends in -о / -е: neuter.');
  return '';
}
VIEWS.gender=el=>{
  let qs,i,score,wrongs;
  const reset=()=>{qs=shuffle(pool()).slice(0,15);i=0;score=0;wrongs=[];};reset();
  shell(el,S("Он, она', оно'?"),'Decide the gender of each noun. Plural-only words take “они́”. Use keys 1–4 if you like.',`
    <div class="game">
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="gFill"></div></div><span class="score" id="gScore"></span></div>
      <div id="gStage"></div>
      <div class="rules">
        <div class="rule" style="--gc:var(--blue)"><b>он</b>consonant, -й (стол, музе́й)</div>
        <div class="rule" style="--gc:var(--pink)"><b>${G.f.ru}</b>-а, -я (ма́ма, ку́хня)</div>
        <div class="rule" style="--gc:var(--green)"><b>${G.n.ru}</b>-о, -е, -мя (окно́, мо́ре, и́мя)</div>
        <div class="rule" style="--gc:var(--yellow)"><b>-ь ?</b>can be он or ${G.f.ru}: learn each one!</div>
      </div>
    </div>`);
  const draw=()=>{
    $('#gScore').textContent=`${score} / ${qs.length}`;$('#gFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){
      const r=score/qs.length;if(r>=.7)burst();addXP(score);
      $('#gStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(r)}</p><div class="result__big">${score}/${qs.length}</div>
        ${wrongs.length?`<p><b>Review these:</b></p><div class="review">${wrongs.map(n=>`<div>${esc(n.w)} → <b>${G[n.g].ru}</b></div>`).join('')}</div>`:'<p><b>Perfect round!</b></p>'}
        <div class="actions"><button class="btn btn--ghost" id="gRe">New round</button></div></div>`;
      $('#gRe').onclick=()=>{reset();draw();};return;
    }
    const n=qs[i];
    $('#gStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${n.emoji||TOPICS[n.topic].e}</div>
      <div class="bigword">${esc(n.w)}</div><div class="gloss">${esc(n.en)}</div>
      <div class="choices choices--4">${Object.entries(G).map(([k,g],j)=>`<button class="choice" data-g="${k}" style="--gc:${g.c}">${g.ru}<small>${j+1} · ${g.en.replace(' only','')}</small></button>`).join('')}</div>
      <div class="feedback" id="gFb"></div>
      <div class="actions" id="gNext" style="visibility:hidden"><button class="btn btn--green" id="gGo">${i===qs.length-1?'Results →':'Next →'}</button></div>
    </div>`;
    $$('.choice').forEach(b=>b.onclick=()=>{
      if(b.disabled)return;
      const ok=b.dataset.g===n.g;
      $$('.choice').forEach(x=>{x.disabled=true;if(x.dataset.g===n.g){x.classList.add('ok');}});
      if(ok)score++;else{b.classList.add('bad');wrongs.push(n);}
      $('#gFb').innerHTML=(ok?S("Ве'рно! ")+'✦ ':'')+esc(genderReason(n));
      $('#gScore').textContent=`${score} / ${qs.length}`;$('#gNext').style.visibility='visible';$('#gGo').focus();
    });
    $('#gGo').onclick=()=>{i++;draw();};
  };
  const key=e=>{if(e.target.tagName==='SELECT')return;const k=+e.key;if(k>=1&&k<=4){const b=$$('.choice')[k-1];if(b&&!b.disabled)b.click();}};
  document.addEventListener('keydown',key);cleanup=()=>document.removeEventListener('keydown',key);
  draw();
};

/* ============ PLURALS ============ */
const KB=['йцукенгшщзхъ','фывапролджэ','ячсмитьбюё'];
VIEWS.plural=el=>{
  const P=poolMin(5,n=>n.pl&&n.g!=='pl');
  let qs,i,score,checked,wrongs;
  const reset=()=>{qs=shuffle(P.list).slice(0,10);i=0;score=0;wrongs=[];};reset();
  shell(el,'Plurals','Type the plural (nominative). You don’t need the stress mark, and Е / Ё both count. Watch out for the irregular ones!',`
    <div class="game">${wideNote(P.wide)}
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="pFill"></div></div><span class="score" id="pScore"></span></div>
      <div id="pStage"></div>
      <div class="rules">
        <div class="rule" style="--gc:var(--blue)"><b>-ы</b>${S("стол → столы'")}, ${S("ма'ма → ма'мы")}</div>
        <div class="rule" style="--gc:var(--pink)"><b>-и</b>after к г х ж ш ч щ and for -ь, -й, -я: ${S("кни'га → кни'ги")}</div>
        <div class="rule" style="--gc:var(--green)"><b>-а / -я</b>neuter: ${S("окно' → о'кна")}, ${S("мо'ре → моря'")}</div>
        <div class="rule" style="--gc:var(--yellow)"><b>!!!</b>${S("брат → бра'тья")}, ${S("ребёнок → де'ти")}</div>
      </div>
    </div>`);
  const draw=()=>{
    $('#pScore').textContent=`${score} / ${qs.length}`;$('#pFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){
      const r=score/qs.length;if(r>=.7)burst();addXP(score);
      $('#pStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(r)}</p><div class="result__big">${score}/${qs.length}</div>
        ${wrongs.length?`<p><b>Review these:</b></p><div class="review">${wrongs.map(n=>`<div>${esc(n.w)} → <b>${esc(n.pl)}</b></div>`).join('')}</div>`:'<p><b>Perfect round!</b></p>'}
        <div class="actions"><button class="btn btn--ghost" id="pRe">New round</button></div></div>`;
      $('#pRe').onclick=()=>{reset();draw();};return;
    }
    const n=qs[i];checked=false;let hints=0;
    $('#pStage').innerHTML=`<div class="stage">
      <div class="prompt" style="display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;margin-bottom:6px">
        <span style="font-size:2.6rem">${n.emoji||TOPICS[n.topic].e}</span><span class="bigword">${esc(n.w)}</span>
        <span style="font-family:var(--font-display);font-weight:800;font-size:2rem">→</span>
        <span style="font-size:2.6rem">${n.emoji?n.emoji+n.emoji:'✦✦'}</span>
      </div>
      <div class="gloss">${esc(n.en)} → many</div>
      <input class="answer" id="pIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…" lang="ru">
      <div class="feedback" id="pFb"></div>
      <div class="actions"><button class="btn btn--ghost btn--sm" id="pHint">💡 Hint</button><button class="btn btn--green" id="pGo">Check ↵</button></div>
      <div class="kbd">${KB.map((r,ri)=>`<div class="kbd__row">${[...r].map(c=>`<button class="key" data-k="${c}">${c}</button>`).join('')}${ri===2?'<button class="key key--wide" data-k="⌫">⌫</button>':''}</div>`).join('')}</div>
    </div>`;
    const inp=$('#pIn');inp.focus();
    inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();$('#pGo').click();}};
    $$('.key').forEach(k=>k.onclick=()=>{
      if(checked)return;const s=inp.selectionStart??inp.value.length,e2=inp.selectionEnd??s;
      if(k.dataset.k==='⌫'){if(s===e2&&s>0){inp.value=inp.value.slice(0,s-1)+inp.value.slice(e2);inp.setSelectionRange(s-1,s-1);}else{inp.value=inp.value.slice(0,s)+inp.value.slice(e2);inp.setSelectionRange(s,s);}}
      else{inp.value=inp.value.slice(0,s)+k.dataset.k+inp.value.slice(e2);inp.setSelectionRange(s+1,s+1);}
      inp.focus();
    });
    $('#pHint').onclick=()=>{if(checked)return;const p=plain(n.pl);hints=Math.min(hints+1,p.length-1);inp.value=p.slice(0,hints);inp.focus();};
    $('#pGo').onclick=()=>{
      if(checked){i++;draw();return;}
      if(!inp.value.trim()){inp.focus();return;}
      checked=true;inp.readOnly=true;
      const ok=norm(inp.value)===norm(n.pl);
      if(ok){score++;inp.classList.add('ok');$('#pFb').innerHTML=S("Ве'рно! ")+`✦ <span class="ru">${esc(n.pl)}</span>`+(n.note?` · ${esc(n.note)}`:'');}
      else{wrongs.push(n);inp.classList.add('bad');$('#pFb').innerHTML=`Correct: <span class="ru" style="background:var(--yellow);padding:0 8px;border-radius:6px;border:2px solid var(--ink)">${esc(n.pl)}</span>`+(n.note?`<br><span class="muted">${esc(n.note)}</span>`:'');}
      $('#pGo').textContent=i===qs.length-1?'Results →':'Next →';$('#pScore').textContent=`${score} / ${qs.length}`;
    };
  };
  draw();
};

/* ============ PICTURE QUIZ ============ */
VIEWS.picture=el=>{
  const P=poolMin(4,n=>n.emoji);
  let qs,i,score,wrongs;
  const reset=()=>{qs=shuffle(P.list).slice(0,12);i=0;score=0;wrongs=[];};reset();
  shell(el,'Picture quiz','What is it in Russian? Pick the right word for the picture.',`
    <div class="game">${wideNote(P.wide)}
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="qFill"></div></div><span class="score" id="qScore"></span></div>
      <div id="qStage"></div>
    </div>`);
  const draw=()=>{
    $('#qScore').textContent=`${score} / ${qs.length}`;$('#qFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){
      const r=score/qs.length;if(r>=.7)burst();addXP(score);
      $('#qStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(r)}</p><div class="result__big">${score}/${qs.length}</div>
        ${wrongs.length?`<div class="review">${wrongs.map(n=>`<div>${n.emoji} ${esc(n.w)} · ${esc(n.en)}</div>`).join('')}</div>`:'<p><b>You know them all!</b></p>'}
        <div class="actions"><button class="btn btn--ghost" id="qRe">New pictures</button></div></div>`;
      $('#qRe').onclick=()=>{reset();draw();};return;
    }
    const n=qs[i];
    const same=shuffle(P.list.filter(x=>x.id!==n.id&&x.emoji!==n.emoji&&x.topic===n.topic));
    const rest=shuffle(P.list.filter(x=>x.id!==n.id&&x.emoji!==n.emoji&&x.topic!==n.topic));
    const opts=shuffle([n,...[...same,...rest].slice(0,3)]);
    $('#qStage').innerHTML=`<div class="stage">
      <div class="bigemoji">${n.emoji}</div>
      <div class="gloss" style="margin:8px 0 22px">${TOPICS[n.topic].en}</div>
      <div class="choices">${opts.map(o=>`<button class="choice" data-id="${o.id}">${esc(o.w)}</button>`).join('')}</div>
      <div class="feedback" id="qFb"></div>
      <div class="actions" id="qNext" style="visibility:hidden"><button class="btn btn--green" id="qGo">${i===qs.length-1?'Results →':'Next →'}</button></div>
    </div>`;
    $$('.choice').forEach(b=>b.onclick=()=>{
      const ok=+b.dataset.id===n.id;
      $$('.choice').forEach(x=>{x.disabled=true;if(+x.dataset.id===n.id)x.classList.add('ok');});
      if(ok)score++;else{b.classList.add('bad');wrongs.push(n);}
      $('#qFb').innerHTML=`${esc(n.w)} = ${esc(n.en)} · ${G[n.g].ru}`;
      $('#qScore').textContent=`${score} / ${qs.length}`;$('#qNext').style.visibility='visible';$('#qGo').focus();
    });
    $('#qGo').onclick=()=>{i++;draw();};
  };
  draw();
};

/* ============ MEMORY ============ */
VIEWS.memory=el=>{
  const P=poolMin(8,n=>n.emoji);
  let cards,open,moves,matched,t0,timer,lock;
  shell(el,'Memory match','Flip two tiles at a time. Pair each picture with its Russian word (yellow tiles).',`
    <div class="game">${wideNote(P.wide)}
      <div class="game__bar"><span class="score" id="mmMoves">0 moves</span><span class="score" id="mmTime" style="background:var(--blue)">0:00</span><button class="btn btn--sm btn--ghost" id="mmRe">↻ New board</button></div>
      <div id="mmStage"></div>
    </div>`);
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const start=()=>{
    clearInterval(timer);
    const seen=new Set(),vs=[];
    for(const n of shuffle(P.list)){if(!seen.has(n.emoji)){seen.add(n.emoji);vs.push(n);}if(vs.length===8)break;}
    cards=shuffle(vs.flatMap(n=>[{id:n.id,t:n.w,ru:1},{id:n.id,t:n.emoji,ru:0}]));
    open=[];moves=0;matched=0;t0=null;lock=false;
    $('#mmMoves').textContent='0 moves';$('#mmTime').textContent='0:00';
    $('#mmStage').innerHTML=`<div class="mem">${cards.map((c,k)=>`<button class="mcard" data-k="${k}" aria-label="Hidden tile"><div class="mcard__inner"><div class="mcard__face mcard__back">✦</div><div class="mcard__face mcard__front ${c.ru?'ru':''}">${esc(c.t)}</div></div></button>`).join('')}</div>`;
    $$('.mcard').forEach(b=>b.onclick=()=>flip(b));
  };
  const flip=b=>{
    if(lock||b.classList.contains('up'))return;
    if(!t0){t0=Date.now();timer=setInterval(()=>$('#mmTime').textContent=fmt(Math.floor((Date.now()-t0)/1000)),500);}
    b.classList.add('up');open.push(b);
    if(open.length===2){
      moves++;$('#mmMoves').textContent=moves+' moves';
      const [a,d]=open.map(x=>cards[+x.dataset.k]);
      if(a.id===d.id&&a.ru!==d.ru){open.forEach(x=>x.classList.add('done'));open=[];matched++;
        if(matched===cards.length/2){clearInterval(timer);addXP(5);burst();
          setTimeout(()=>{$('#mmStage').insertAdjacentHTML('beforeend',`<div class="stage stage--pink" style="margin-top:24px"><p class="result__msg">${S("Молоде'ц!")}</p><div class="result__big">${moves}</div><p><b>moves</b> in ${$('#mmTime').textContent}</p><div class="actions"><button class="btn btn--ghost" id="mmAgain">Play again</button></div></div>`);$('#mmAgain').onclick=start;},450);}
      }else{lock=true;setTimeout(()=>{open.forEach(x=>x.classList.remove('up'));open=[];lock=false;},850);}
    }
  };
  $('#mmRe').onclick=start;cleanup=()=>clearInterval(timer);
  start();
};

/* ============ МОЙ / МОЯ ============ */
VIEWS.moy=el=>{
  let qs,i,score,wrongs;
  const MY=[['m','мой'],['f',G.f.my],['n','моё'],['pl',G.pl.my]];
  const reset=()=>{
    qs=shuffle(pool()).slice(0,12).map(n=>{
      const usePl=n.g!=='pl'&&n.pl&&n.pl!==n.w&&Math.random()<.3;
      return {n,word:usePl?n.pl:n.w,ans:usePl?'pl':n.g,en:usePl?'plural':n.en};
    });i=0;score=0;wrongs=[];
  };reset();
  shell(el,S("Мой, моя', моё?"),'“My” changes with the gender of the noun. Complete each sentence. Some nouns appear in the plural, so watch for мои́!',`
    <div class="game">
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="yFill"></div></div><span class="score" id="yScore"></span></div>
      <div id="yStage"></div>
      <div class="rules">
        <div class="rule" style="--gc:var(--blue)"><b>мой</b>мой брат, мой дом</div>
        <div class="rule" style="--gc:var(--pink)"><b>${G.f.my}</b>${G.f.my} ${S("ма'ма")}, ${G.f.my} ${S("кни'га")}</div>
        <div class="rule" style="--gc:var(--green)"><b>моё</b>моё ${S("окно'")}, моё ${S("и'мя")}</div>
        <div class="rule" style="--gc:var(--yellow)"><b>${G.pl.my}</b>${G.pl.my} ${S("часы'")}, ${G.pl.my} ${S("кни'ги")}</div>
      </div>
    </div>`);
  const draw=()=>{
    $('#yScore').textContent=`${score} / ${qs.length}`;$('#yFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){
      const r=score/qs.length;if(r>=.7)burst();addXP(score);
      $('#yStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(r)}</p><div class="result__big">${score}/${qs.length}</div>
        ${wrongs.length?`<div class="review">${wrongs.map(q=>`<div>${MY.find(m=>m[0]===q.ans)[1]} ${esc(q.word)}</div>`).join('')}</div>`:'<p><b>Perfect round!</b></p>'}
        <div class="actions"><button class="btn btn--ghost" id="yRe">New round</button></div></div>`;
      $('#yRe').onclick=()=>{reset();draw();};return;
    }
    const q=qs[i],correct=MY.find(m=>m[0]===q.ans)[1];
    $('#yStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${q.n.emoji||TOPICS[q.n.topic].e}${q.ans==='pl'&&q.n.g!=='pl'&&q.n.emoji?q.n.emoji:''}</div>
      <p class="sentence">${S("Э'то")} <span class="blank" id="yBlank">${correct}</span> ${esc(q.word)}.</p>
      <div class="gloss">This is my ${esc(q.n.en.split(',')[0])}${q.ans==='pl'&&q.n.g!=='pl'?' (plural)':''}.</div>
      <div class="choices choices--4">${MY.map(([k,w])=>`<button class="choice" data-g="${k}">${w}</button>`).join('')}</div>
      <div class="feedback" id="yFb"></div>
      <div class="actions" id="yNext" style="visibility:hidden"><button class="btn btn--green" id="yGo">${i===qs.length-1?'Results →':'Next →'}</button></div>
    </div>`;
    $$('.choice').forEach(b=>b.onclick=()=>{
      const ok=b.dataset.g===q.ans;
      $$('.choice').forEach(x=>{x.disabled=true;if(x.dataset.g===q.ans)x.classList.add('ok');});
      if(ok)score++;else{b.classList.add('bad');wrongs.push(q);}
      $('#yBlank').classList.add('filled');
      $('#yFb').innerHTML=q.ans==='pl'?'Plural → мои́.':esc(genderReason(q.n));
      $('#yScore').textContent=`${score} / ${qs.length}`;$('#yNext').style.visibility='visible';$('#yGo').focus();
    });
    $('#yGo').onclick=()=>{i++;draw();};
  };
  draw();
};

/* ============ ODD ONE OUT ============ */
VIEWS.odd=el=>{
  let qs,i,score;
  const make=()=>{
    const lv=byLevel(),out=[];
    const keys=Object.keys(TOPICS).filter(k=>lv.filter(n=>n.topic===k).length>=3);
    for(let r=0;r<10;r++){
      const k=pick(keys);const three=shuffle(lv.filter(n=>n.topic===k)).slice(0,3);
      const odd=pick(lv.filter(n=>n.topic!==k));
      out.push({k,odd,items:shuffle([...three,odd])});
    }
    return out;
  };
  const reset=()=>{qs=make();i=0;score=0;};reset();
  shell(el,'Odd one out','Three of these words belong to the same topic. Which one doesn’t? (This game uses all topics at your level.)',`
    <div class="game">
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="oFill"></div></div><span class="score" id="oScore"></span></div>
      <div id="oStage"></div>
    </div>`);
  const draw=()=>{
    $('#oScore').textContent=`${score} / ${qs.length}`;$('#oFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){
      const r=score/qs.length;if(r>=.7)burst();addXP(score);
      $('#oStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(r)}</p><div class="result__big">${score}/${qs.length}</div><div class="actions"><button class="btn btn--ghost" id="oRe">New round</button></div></div>`;
      $('#oRe').onclick=()=>{reset();draw();};return;
    }
    const q=qs[i];
    $('#oStage').innerHTML=`<div class="stage">
      <div class="odd">${q.items.map(n=>`<button class="choice" data-id="${n.id}"><span class="e">${n.emoji||'✦'}</span>${esc(n.w)}<small>${esc(n.en)}</small></button>`).join('')}</div>
      <div class="feedback" id="oFb"></div>
      <div class="actions" id="oNext" style="visibility:hidden"><button class="btn btn--green" id="oGo">${i===qs.length-1?'Results →':'Next →'}</button></div>
    </div>`;
    $$('.choice').forEach(b=>b.onclick=()=>{
      const ok=+b.dataset.id===q.odd.id;
      $$('.choice').forEach(x=>{x.disabled=true;if(+x.dataset.id===q.odd.id)x.classList.add('ok');});
      if(ok)score++;else b.classList.add('bad');
      $('#oFb').innerHTML=`The other three are <b>${TOPICS[q.k].e} ${TOPICS[q.k].ru}</b> (${TOPICS[q.k].en}). <span class="ru">${esc(q.odd.w)}</span> belongs to ${TOPICS[q.odd.topic].en.toLowerCase()}.`;
      $('#oScore').textContent=`${score} / ${qs.length}`;$('#oNext').style.visibility='visible';$('#oGo').focus();
    });
    $('#oGo').onclick=()=>{i++;draw();};
  };
  draw();
};

/* ============ INIT ============ */
setLevel(level);setTopic(topic);
$('#xp').textContent='★ '+xp+' XP';
$$('.footer .ru').forEach(e=>e.textContent=S(e.textContent));
go();
