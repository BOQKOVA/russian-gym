
/* ============ DATA ============
 An apostrophe ' after a Cyrillic vowel = stress mark. {} = the gap. */
const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1́');
const plain=s=>s.replace(/́/g,'');
/* connector cards for the "more" lesson */
const MORE=[
  {w:"что",en:'that',lvl:'A1',c:'var(--yellow)',ex:"Я зна'ю, *что* ты до'ма.",exEn:'I know (that) you’re at home.',tip:"In English you can drop “that”. In Russian you <b>can’t</b>: Я ду'маю, что… Он сказа'л, что…"},
  {w:"когда'",en:'when',lvl:'A1',c:'var(--blue)',ex:"*Когда'* я был ма'леньким, я жил в Москве'.",exEn:'When I was little, I lived in Moscow.',tip:"The same word asks a question: Когда' ты придёшь? = When will you come?"},
  {w:"е'сли",en:'if',lvl:'A1',c:'var(--green)',ex:"*Е'сли* за'втра бу'дет дождь, мы бу'дем до'ма.",exEn:'If it rains tomorrow, we’ll stay at home.',tip:"Talking about the future? Use the <b>future in both parts</b>: е'сли бу'дет… (English says “if it rains”)."},
  {w:"что'бы",en:'in order to, so that',lvl:'A2',c:'var(--pink)',ex:"Я учу' ру'сский, *что'бы* чита'ть Толсто'го.",exEn:'I’m learning Russian (in order) to read Tolstoy.',tip:"что'бы + <b>infinitive</b> when it’s the same person. Don’t mix it up with что (that)!"},
  {w:"где",en:'where',lvl:'A1',c:'var(--lilac)',ex:"Я зна'ю кафе', *где* о'чень вку'сный ко'фе.",exEn:'I know a café where the coffee is really good.',tip:"For movement use куда' (where to): Я зна'ю, куда' он пошёл."},
  {w:"хотя'",en:'although',lvl:'A2',c:'var(--red)',ex:"*Хотя'* бы'ло хо'лодно, мы гуля'ли.",exEn:'Although it was cold, we went for a walk.',tip:"Like но, it shows a surprising contrast: Бы'ло хо'лодно, но мы гуля'ли."},
  {w:"пока'",en:'while',lvl:'A2',c:'var(--yellow)',ex:"*Пока'* ма'ма гото'вит, я чита'ю.",exEn:'While Mum is cooking, I’m reading.',tip:"Two things happening at the same time. (Пока'! also means “Bye!”)"}
].map(c=>({...c,w:S(c.w),ex:S(c.ex),tip:S(c.tip)}));
/* PICK IT: sentence | right | wrong options (,) | why | english | level */
const PICK=`
Я не пошёл в шко'лу, {} я боле'л.|потому' что|поэ'тому,е'сли,но|Gives the reason → потому' что.|I didn't go to school because I was ill.|A1
Я боле'л, {} не пошёл в шко'лу.|поэ'тому|потому' что,что,когда'|Gives the result → поэ'тому.|I was ill, so I didn't go to school.|A1
Я ду'маю, {} он прав.|что|что'бы,е'сли,где|After “I think / I know / he said” → что.|I think (that) he's right.|A1
{} бу'дет хоро'шая пого'да, мы пое'дем на мо'ре.|Е'сли|Потому' что,Что,Но|A condition: if… → е'сли.|If the weather is good, we'll go to the sea.|A1
{} я был ма'леньким, я люби'л мультфи'льмы.|Когда'|Е'сли,Что,Потому' что|A time in the past: when… → когда'.|When I was little, I loved cartoons.|A1
Я учу' ру'сский, {} рабо'тать в Росси'и.|что'бы|что,потому' что,когда'|A purpose + infinitive → что'бы.|I'm learning Russian in order to work in Russia.|A2
Я люблю' чай, {} мой муж лю'бит ко'фе.|а|и,и'ли,что|Two different people compared → а.|I like tea, and/whereas my husband likes coffee.|A1
Э'то до'рого, {} о'чень краси'во.|но|и'ли,потому' что,е'сли|A contrast, “but” → но.|It's expensive, but very beautiful.|A1
Ты бу'дешь чай {} ко'фе?|и'ли|а,но,что|A choice → и'ли.|Will you have tea or coffee?|A1
Ма'ма {} па'па сейча'с до'ма.|и|но,что,а|Simply adding → и.|Mum and Dad are at home now.|A1
Вот кафе', {} мы познако'мились.|где|что'бы,е'сли,потому' что|A place → где.|Here's the café where we met.|A1
{} бы'ло хо'лодно, мы гуля'ли в па'рке.|Хотя'|Потому' что,Е'сли,Что'бы|A surprising contrast: although → хотя'.|Although it was cold, we walked in the park.|A2
{} па'па спит, мы говори'м ти'хо.|Пока'|Хотя',Что,И|At the same time: while → пока'.|While Dad is sleeping, we speak quietly.|A2
Он сказа'л, {} придёт в семь.|что|что'бы,е'сли,где|After “he said” → что.|He said (that) he'd come at seven.|A1
Я не зна'ю, {} он живёт.|где|что'бы,потому' что,но|A place → где.|I don't know where he lives.|A1
Мы купи'ли биле'ты, {} пойти' в теа'тр.|что'бы|что,потому' что,и'ли|A purpose + infinitive → что'бы.|We bought tickets to go to the theatre.|A2
Я ра'да, {} ты здесь!|что|что'бы,е'сли,а|After a feeling (I'm glad that…) → что.|I'm glad (that) you're here!|A1
У меня' нет вре'мени, {} я не пойду' в кино'.|поэ'тому|потому' что,хотя',что|Gives the result → поэ'тому.|I have no time, so I won't go to the cinema.|A1
Э'то мой друг, {} живёт в Ка'зани.|кото'рый|что'бы,е'сли,где|“who” about a noun (друг) → кото'рый.|This is my friend who lives in Kazan.|A2
Позвони' мне, {} бу'дешь свобо'ден.|когда'|что'бы,потому' что,а|At the moment when you're free → когда'.|Call me when you're free.|A1
`.trim().split('\n').map(l=>{const [s,r,w,why,en,lvl]=l.split('|');return {s:S(s),r:S(r),w:w.split(',').map(S),why:S(why),en,lvl};});
/* и, а or но? */
const IAN=`
Я люблю' ко'шек {} соба'к.|и|Adding similar things → и.|I love cats and dogs.
Я люблю' ко'шек, {} брат лю'бит соба'к.|а|Two different people compared → а.|I love cats, and my brother loves dogs.
Я хочу' пойти' в кино', {} у меня' нет вре'мени.|но|There's an obstacle → но.|I want to go to the cinema, but I have no time.
Он не врач, {} учи'тель.|а|“not X, but Y” (a correction) → а.|He's not a doctor but a teacher.
Ма'ма гото'вит, {} па'па чита'ет.|а|Two people doing different things → а.|Mum is cooking, and Dad is reading.
Э'то дёшево {} хорошо'.|и|Two good things together → и.|It's cheap and good.
Э'то дёшево, {} пло'хо.|но|Good, but unexpectedly bad → но.|It's cheap, but bad.
Я живу' в Москве', {} мой друг живёт в Каза'ни.|а|Two people compared → а.|I live in Moscow, and my friend lives in Kazan.
Я уста'л, {} ещё рабо'таю.|но|Unexpected: tired, but still working → но.|I'm tired, but I'm still working.
Сего'дня я рабо'таю, {} за'втра отдыха'ю.|а|Two times compared → а.|Today I work, and tomorrow I rest.
У меня' есть брат {} сестра'.|и|Simply adding → и.|I have a brother and a sister.
Он бога'тый, {} несча'стный.|но|Unexpected contrast → но.|He's rich but unhappy.
`.trim().split('\n').map(l=>{const [s,r,why,en]=l.split('|');return {s:S(s),r,why:S(why),en};});
/* cause → effect pairs */
const CAUSE=[
  ["я уста'л","я иду' спать","I'm tired","I'm going to bed"],
  ["шёл дождь","мы оста'лись до'ма","it was raining","we stayed at home"],
  ["я голо'дный","я гото'влю у'жин","I'm hungry","I'm cooking dinner"],
  ["у меня' нет де'нег","я не покупа'ю но'вый телефо'н","I have no money","I'm not buying a new phone"],
  ["она' боле'ет","она' не рабо'тает сего'дня","she's ill","she isn't working today"],
  ["я люблю' Росси'ю","я учу' ру'сский язы'к","I love Russia","I'm learning Russian"],
  ["в ко'мнате хо'лодно","я закры'л окно'","it's cold in the room","I closed the window"],
  ["за'втра экза'мен","мы мно'го занима'емся","there's an exam tomorrow","we're studying a lot"],
  ["он опозда'л на авто'бус","он взял такси'","he missed the bus","he took a taxi"],
  ["бы'ло жа'рко","мы пошли' на пляж","it was hot","we went to the beach"]
].map(r=>[S(r[0]),S(r[1]),r[2],r[3]]);
/* halves: first half | second half | key (connector) */
const HALVES=`
Я не пошёл гуля'ть,|потому' что шёл дождь.|because
Е'сли бу'дет вре'мя,|я тебе' позвоню'.|if
Когда' я был ма'леньким,|я жил у ба'бушки.|when
Я зна'ю,|что ты лю'бишь шокола'д.|that
Она' у'чит ру'сский,|что'бы чита'ть Пу'шкина.|purpose
Я люблю' мо'ре,|а моя' сестра' лю'бит го'ры.|a
Ко'фе вку'сный,|но о'чень горя'чий.|but
Шёл дождь,|поэ'тому мы оста'лись до'ма.|so
Э'то мой друг,|кото'рый живёт в Москве'.|which
Вот парк,|где мы гуля'ем ка'ждый день.|where
Хотя' бы'ло по'здно,|мы не спа'ли.|although
Ты хо'чешь чай|и'ли ко'фе?|or
`.trim().split('\n').map((l,id)=>{const [a,b,k]=l.split('|');return {id,a:S(a),b:S(b),k};});
/* который: sentence | gender of the noun */
const KOT_F={m:"кото'рый",f:"кото'рая",n:"кото'рое",pl:"кото'рые"};Object.keys(KOT_F).forEach(k=>KOT_F[k]=S(KOT_F[k]));
const KOT=`
Э'то мой брат, {} живёт в Москве'.|m|брат|This is my brother, who lives in Moscow.
Э'то моя' сестра', {} у'чится в университе'те.|f|сестра'|This is my sister, who studies at university.
Где кафе', {} тебе' нра'вится?|n|кафе'|Where's the café that you like?
Вот кни'ги, {} мне нужны'.|pl|кни'ги|Here are the books that I need.
Я зна'ю де'вушку, {} говори'т по-кита'йски.|f|де'вушку|I know a girl who speaks Chinese.
У меня' есть друг, {} лю'бит футбо'л.|m|друг|I have a friend who loves football.
Э'то окно', {} выхо'дит в парк.|n|окно'|This is the window that looks onto the park.
Мне нра'вятся лю'ди, {} мно'го чита'ют.|pl|лю'ди|I like people who read a lot.
Где ключ, {} был на столе'?|m|ключ|Where's the key that was on the table?
Э'то пе'сня, {} всем нра'вится.|f|пе'сня|This is a song that everyone likes.
Где письмо', {} пришло' вчера'?|n|письмо'|Where's the letter that came yesterday?
Вот де'ти, {} игра'ют в па'рке.|pl|де'ти|Here are the children who are playing in the park.
`.trim().split('\n').map(l=>{const [s,g,n,en]=l.split('|');return {s:S(s),g,n:S(n),en};});
/* build it: full sentences */
const BUILD=[
  ["Я не пришёл, потому' что я боле'л.","I didn't come because I was ill."],
  ["Е'сли бу'дет тепло', мы пойдём гуля'ть.","If it's warm, we'll go for a walk."],
  ["Я ду'маю, что ру'сский язы'к краси'вый.","I think (that) Russian is beautiful."],
  ["Когда' я до'ма, я чита'ю кни'ги.","When I'm at home, I read books."],
  ["Он у'чит ру'сский, что'бы рабо'тать в Москве'.","He's learning Russian to work in Moscow."],
  ["Э'то кафе', где мы познако'мились.","This is the café where we met."],
  ["Я люблю' чай, а она' лю'бит ко'фе.","I like tea, and she likes coffee."],
  ["Шёл дождь, поэ'тому мы бы'ли до'ма.","It was raining, so we were at home."],
  ["Э'то мой друг, кото'рый живёт в Каза'ни.","This is my friend who lives in Kazan."],
  ["Хотя' бы'ло хо'лодно, мы гуля'ли.","Although it was cold, we went for a walk."]
].map(([r,e])=>[S(r),e]);
/* comma hunter: | marks where the comma goes (none = no comma) */
const HUNT=`
Я зна'ю| что ты прав.|After “I know” the что-clause needs a comma.
Мы пошли' в парк| потому' что бы'ло тепло'.|Comma before потому' что.
Е'сли бу'дет дождь| мы бу'дем до'ма.|The е'сли-part comes first, so the comma goes after it.
Я люблю' чай и ко'фе.|One и joining two words: no comma!
Когда' я был в Москве'| я ви'дел Кремль.|The когда'-part comes first, so the comma goes after it.
Он у'чится| а она' рабо'тает.|Always a comma before а.
Ты хо'чешь чай и'ли ко'фе?|One и'ли joining two words: no comma!
Э'то кни'га| кото'рая мне нра'вится.|Comma before кото'рый.
Я хоте'л позвони'ть| но забы'л.|Always a comma before но.
Она' у'чит ру'сский| что'бы жить в Росси'и.|Comma before что'бы.
Ма'ма и па'па до'ма.|One и joining two words: no comma!
Хотя' я уста'л| я рабо'таю.|The хотя'-part comes first, so the comma goes after it.
`.trim().split('\n').map(l=>{const [s,why]=l.split('|').length===3?[l.split('|').slice(0,2).join('|'),l.split('|')[2]]:l.split('|');return {s:S(s),why:S(why)};});

/* ============ HELPERS ============ */
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const store={get(k,d){try{const v=localStorage.getItem('cn_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('cn_'+k,JSON.stringify(v))}catch(e){}}};
let xp=store.get('xp',0);
const hl=s=>esc(s).replace(/\*(.+?)\*/g,'<span class="k">$1</span>');
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
function keyChoices(){const key=e=>{const k=+e.key;if(k>=1&&k<=4){const b=$$('.choice')[k-1];if(b&&!b.disabled)b.click();}else if(e.key==='Enter'){const nb=$('#nextBtn');if(nb&&$('#nextWrap').style.visibility==='visible'){e.preventDefault();nb.click();}}};document.addEventListener('keydown',key);cleanup=()=>document.removeEventListener('keydown',key);}
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
function shell(el,title,sub,inner){el.innerHTML=S(`<section class="section"><div class="container"><h1 class="heading">${title}</h1><p class="lead">${sub}</p>${inner}</div></section>`);}
$('#modalClose').onclick=()=>$('#modal').classList.remove('is-open');

/* ============ HOME ============ */
const MODES=[
  ['ianoili','🔗',S("и, а, но, и'ли"),'The little words: and, but, or. Plus the big question: а or и?','var(--lilac)'],
  ['why','🤔','Because & so','потому́ что (because) and поэ́тому (that’s why): cause and result.','var(--yellow)'],
  ['more','🧭',S("что, когда', е'сли…"),'that, when, if, in order to, where, although, while.','var(--blue)'],
  ['kotory','👉',S("кото'рый"),'“who / which / that” for nouns, and how it agrees.','var(--green)'],
  ['commas','✏️','Commas','Russian loves commas. Here’s exactly where they go.','var(--pink)'],
  ['pick','🧩','Pick it','Choose the right linking word for each sentence.','var(--yellow)'],
  ['ian','⚖️',S("и, а or но?"),'The classic beginner’s puzzle, with an explanation every time.','var(--lilac)'],
  ['cause','🔁','Cause or result?','потому́ что or поэ́тому? Follow the logic.','var(--blue)'],
  ['halves','✂️','Join the halves','Match the beginning of each sentence with its ending.','var(--green)'],
  ['which','🎯',S("Кото'рый game"),'кото́рый, кото́рая, кото́рое or кото́рые?','var(--red)'],
  ['build','🧱','Build it','Put the word tiles in order to make a full sentence.','var(--pink)'],
  ['hunt','🕵️','Comma hunter','Find where the comma goes, or decide there isn’t one!','var(--yellow)']
];
VIEWS.home=el=>{
  const words=["и","а","но","и'ли","потому' что","поэ'тому","что","когда'","е'сли","что'бы","где","кото'рый","хотя'","пока'"].map(S);
  const track=`<div class="marquee__track" aria-hidden="true">${words.map(w=>`<span>${w}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar ru">или</div>
      <span class="hero__sticker2">${S("потому' что…")}</span>
      <span class="hero__sticker">A1 ✦ A2</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">connect</h1>
      <p class="hero__lead">Stop speaking in tiny sentences! Learn the words that join ideas together: and, but, because, if, when, which… <span class="ru">${S("Я учу' ру'сский, потому' что э'то интере'сно!")}</span></p>
      <div class="hero__stats">
        <span class="chip" style="background:var(--lilac)">14 linking words</span>
        <span class="chip" style="background:var(--yellow)">comma rules</span>
        <span class="chip" style="background:var(--green)">5 lessons · 7 games</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#ianoili">Start with и, а, но →</a>
        <a class="btn btn--ghost" href="#build">Jump into a game</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Two kinds of joining</h2>
    <div class="kinds">
      <div class="box" style="--gc:var(--lilac)"><h3>🔗 Joining equal parts</h3><p>Two words or two full sentences side by side, both equally important.</p>
        <p class="ex">чай <span class="k">и</span> ко'фе · Я до'ма, <span class="k">а</span> он на рабо'те.</p><p>Words: и, а, но, и'ли</p></div>
      <div class="box" style="--gc:var(--yellow)"><h3>🧭 Adding extra information</h3><p>A second part that explains why, when, if, what or which.</p>
        <p class="ex">Я до'ма, <span class="k">потому' что</span> я боле'ю.</p><p>Words: потому' что, что, когда', е'сли, что'бы, где, кото'рый…</p></div>
    </div>
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Five short lessons, then seven games.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">${String(i+1).padStart(2,'0')}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${s}</p><span class="mode__go">${i<5?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
  el.innerHTML=S(el.innerHTML);
};

/* ============ LESSON: и, а, но, или ============ */
VIEWS.ianoili=el=>{
  shell(el,"и, а, но, и'ли","Four short words that join words or whole sentences. English has “and, but, or”, but Russian has <b>two</b> words for “and”: и and а.",`
    <div class="ccards">
      <div class="cc" style="--gc:var(--green)"><div class="cc__top"><span class="cc__w">и</span><span class="cc__en">and (adding)</span></div>
        <p class="cex">Ма'ма <span class="k">и</span> па'па. · Я чита'ю <span class="k">и</span> пишу'.</p><small>Simply adds things that go together.</small></div>
      <div class="cc" style="--gc:var(--blue)"><div class="cc__top"><span class="cc__w">а</span><span class="cc__en">and / while / whereas</span></div>
        <p class="cex">Я до'ма, <span class="k">а</span> брат на рабо'те.</p><small>Compares two <b>different</b> things or people side by side.</small></div>
      <div class="cc" style="--gc:var(--pink)"><div class="cc__top"><span class="cc__w">но</span><span class="cc__en">but</span></div>
        <p class="cex">Я хочу' спать, <span class="k">но</span> на'до рабо'тать.</p><small>Something unexpected, or an obstacle.</small></div>
      <div class="cc" style="--gc:var(--yellow)"><div class="cc__top"><span class="cc__w">и'ли</span><span class="cc__en">or</span></div>
        <p class="cex">Чай <span class="k">и'ли</span> ко'фе? · Сего'дня <span class="k">и'ли</span> за'втра?</p><small>A choice.</small></div>
    </div>
    <h2 class="subhead">The big question: и, а or но?</h2>
    <div class="compare3">
      <div class="box" style="--gc:var(--green)"><h3>и = plus ➕</h3><p>Things that go together, nothing surprising.</p><p class="ex">Я люблю' чай <span class="k">и</span> ко'фе.</p><p class="ex">Он у'мный <span class="k">и</span> до'брый.</p></div>
      <div class="box" style="--gc:var(--blue)"><h3>а = compare ⚖️</h3><p>Two different subjects, times or places compared, or “not X, but Y”.</p><p class="ex">Я люблю' чай, <span class="k">а</span> он лю'бит ко'фе.</p><p class="ex">Он не врач, <span class="k">а</span> учи'тель.</p></div>
      <div class="box" style="--gc:var(--pink)"><h3>но = surprise ⚡</h3><p>The second part goes against what you’d expect.</p><p class="ex">Он бога'тый, <span class="k">но</span> несча'стный.</p><p class="ex">Я уста'л, <span class="k">но</span> рабо'таю.</p></div>
    </div>
    <div class="box" style="--gc:var(--lilac);margin-bottom:40px"><h3>💡 Also useful: А ты?</h3><p>а also starts a question that switches the topic:</p><p class="ex">Я из Росси'и. <span class="k">А</span> ты? = I’m from Russia. And you?</p><p class="ex">Как дела'? — Хорошо'. <span class="k">А</span> у тебя'?</p></div>
    <div class="actions"><a class="btn btn--green" href="#ian">Practise: и, а or но? →</a><a class="btn btn--ghost" href="#why">Next: Because &amp; so</a></div>`);
};

/* ============ LESSON: because & so ============ */
VIEWS.why=el=>{
  shell(el,"Because &amp; so","потому' что and поэ'тому look alike, but they point in <b>opposite directions</b>.",`
    <div class="big-ex">
      <div class="row">Я уста'л, <span class="c" style="background:var(--yellow)">поэ'тому</span> я иду' спать.</div>
      <div class="arrow">cause ➡️ result · I’m tired, so I’m going to bed.</div>
      <div class="row" style="margin-top:14px">Я иду' спать, <span class="c" style="background:var(--blue)">потому' что</span> я уста'л.</div>
      <div class="arrow">result ⬅️ cause · I’m going to bed because I’m tired.</div>
    </div>
    <div class="kinds">
      <div class="box" style="--gc:var(--blue)"><h3>потому' что = because</h3><p>The part <b>after</b> it is the <b>reason</b>.</p><p class="ex">Я учу' ру'сский, потому' что люблю' Росси'ю.</p><p>Answers the question <span class="ru"><b>Почему'?</b></span> (Why?)</p><p class="ex">Почему' ты не спишь? — Потому' что я не хочу'!</p></div>
      <div class="box" style="--gc:var(--yellow)"><h3>поэ'тому = so, that’s why</h3><p>The part <b>after</b> it is the <b>result</b>.</p><p class="ex">Я люблю' Росси'ю, поэ'тому учу' ру'сский.</p><p>Tip: поэ'тому = по + э'тому = “because of this”.</p></div>
    </div>
    <div class="box" style="--gc:var(--lilac);margin-bottom:40px"><h3>✏️ Comma</h3><p>Put the comma <b>before</b> both words: <span class="ru"><b>…, потому' что…</b></span> · <span class="ru"><b>…, поэ'тому…</b></span></p></div>
    <div class="actions"><a class="btn btn--green" href="#cause">Practise: Cause or result? →</a><a class="btn btn--ghost" href="#more">Next: что, когда́, е́сли…</a></div>`);
};

/* ============ LESSON: more ============ */
VIEWS.more=el=>{
  shell(el,"что, когда', е'сли & co.","These words start a second part of the sentence that tells you <b>what, when, under what condition, why or where</b>.",`
    <div class="ccards">${MORE.map(c=>`<div class="cc" style="--gc:${c.c}">
      <div class="cc__top"><span class="cc__w">${c.w}</span><span class="cc__en">${c.en}</span><span class="g lvl" style="--gc:var(--surface)">${c.lvl}</span></div>
      <p class="cex">${hl(c.ex)}</p><small>${esc(c.exEn)}</small><div class="tip">💡 ${c.tip}</div></div>`).join('')}</div>
    <div class="kinds">
      <div class="box" style="--gc:var(--yellow)"><h3>⚠️ что or что'бы?</h3><p class="ex">Я зна'ю, <span class="k">что</span> он здесь. = I know that he’s here.</p><p class="ex">Я пришёл, <span class="k">что'бы</span> помо'чь. = I came (in order) to help.</p><p>что = a fact · что'бы = a goal.</p></div>
      <div class="box" style="--gc:var(--blue)"><h3>🔄 Either part can come first</h3><p class="ex">Когда' я до'ма, я чита'ю.</p><p class="ex">Я чита'ю, когда' я до'ма.</p><p>Same meaning. The comma always separates the two parts.</p></div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#pick">Practise: Pick it →</a><a class="btn btn--ghost" href="#kotory">Next: кото́рый</a></div>`);
};

/* ============ LESSON: который ============ */
VIEWS.kotory=el=>{
  shell(el,"кото'рый","кото'рый means <b>who, which, that</b> when you add information about a noun. It’s like an adjective: it <b>agrees with the noun</b> it describes.",`
    <div class="tablewrap" style="overflow-x:auto;border:var(--border);border-radius:18px;background:var(--surface);box-shadow:var(--shadow);margin-bottom:36px">
      <table style="border-collapse:collapse;width:100%;min-width:600px">
        <tr>${['он','она\'','оно\'','они\''].map(p=>`<th style="padding:10px 14px;border-bottom:2px solid var(--ink);background:var(--yellow);text-align:left;font-family:var(--font-display)">${p}</th>`).join('')}</tr>
        <tr>${Object.values(KOT_F).map(w=>`<td style="padding:10px 14px;border-bottom:2px solid var(--ink);font-family:var(--font-ru);font-weight:900;font-size:1.2rem">${w}</td>`).join('')}</tr>
        <tr><td style="padding:10px 14px" class="ru"><b>друг, кото'рый…</b></td><td style="padding:10px 14px" class="ru"><b>кни'га, кото'рая…</b></td><td style="padding:10px 14px" class="ru"><b>кафе', кото'рое…</b></td><td style="padding:10px 14px" class="ru"><b>лю'ди, кото'рые…</b></td></tr>
      </table></div>
    <div class="big-ex">
      <div class="row">Э'то мой друг. Он живёт в Москве'.</div>
      <div class="arrow">⬇️ join them ⬇️</div>
      <div class="row">Э'то мой друг, <span class="c" style="background:var(--green)">кото'рый</span> живёт в Москве'.</div>
      <small>This is my friend who lives in Moscow.</small>
    </div>
    <div class="kinds">
      <div class="box" style="--gc:var(--green)"><h3>✅ More examples</h3>
        <p class="ex">Я чита'ю кни'гу, кото'рая мне нра'вится.</p>
        <p class="ex">Где кафе', кото'рое ты лю'бишь?</p>
        <p class="ex">Мне нра'вятся лю'ди, кото'рые мно'го чита'ют.</p></div>
      <div class="box" style="--gc:var(--pink)"><h3>⚠️ Watch out</h3><ul>
        <li>Look at the <b>noun</b>, not the person speaking.</li>
        <li>Always a <b>comma</b> before кото'рый.</li>
        <li>In English you can say “the book I read”. In Russian кото'рый can’t be dropped.</li>
        <li>A2 bonus: кото'рый also changes case (the book <b>which</b> I read = кни'га, кото'р<b>ую</b> я чита'ю).</li></ul></div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#which">Practise: Кото́рый game →</a><a class="btn btn--ghost" href="#commas">Next: Commas</a></div>`);
};

/* ============ LESSON: commas ============ */
VIEWS.commas=el=>{
  shell(el,'Commas','Russian uses <b>many more commas</b> than English. The good news: the rules are very regular.',`
    <div class="rules" style="margin-bottom:36px">
      <div class="rule" style="--gc:var(--green)"><b>Always a comma before:</b>а, но, потому' что, поэ'тому, что, когда', е'сли, что'бы, где, кото'рый, хотя', пока' (in the middle of a sentence)</div>
      <div class="rule" style="--gc:var(--yellow)"><b>Part first? Comma after it!</b>Е'сли бу'дет дождь<span class="comma">,</span> мы бу'дем до'ма.</div>
      <div class="rule" style="--gc:var(--blue)"><b>No comma:</b>one и or и'ли joining two words: чай и ко'фе · чай и'ли ко'фе</div>
      <div class="rule" style="--gc:var(--pink)"><b>Comma before и</b>when it joins two full sentences with different subjects: Пошёл дождь<span class="comma">,</span> и мы пошли' домо'й.</div>
    </div>
    <div class="box" style="--gc:var(--lilac);margin-bottom:40px"><h3>📌 Compare with English</h3>
      <p class="ex">I know that you’re right. → Я зна'ю<span class="comma">,</span> что ты прав.</p>
      <p class="ex">This is the book that I like. → Э'то кни'га<span class="comma">,</span> кото'рая мне нра'вится.</p>
      <p>English: no comma. Russian: comma!</p></div>
    <div class="actions"><a class="btn btn--green" href="#hunt">Practise: Comma hunter →</a><a class="btn btn--ghost" href="#pick">Play the games</a></div>`);
};

/* ============ GAME: PICK IT ============ */
VIEWS.pick=el=>{
  shell(el,'Pick it','Choose the linking word that makes the sentence work. Keys 1–4.',`<div class="game">${bar('pk')}<div id="pkStage"></div></div>`);
  mcRound({stage:'#pkStage',id:'pk',total:12,make:()=>shuffle(PICK).slice(0,12),render:(q,i,last,answer,next)=>{
    const opts=shuffle([q.r,...q.w]);
    $('#pkStage').innerHTML=`<div class="stage"><span class="g" style="--gc:var(--surface)">${q.lvl}</span>
      <p class="sentence" style="margin-top:12px">${gapSent(q.s,q.r)}</p><p class="gloss">${esc(q.en)}</p>
      <div class="choices choices--4">${opts.map((o,j)=>`<button class="choice" data-o="${esc(o)}">${esc(o)}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===q.r,ok=>{answer(ok,esc(q.s.replace('{}',q.r)));$('#blank').classList.add('filled');$('#fb').innerHTML=esc(q.why);});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: и, а, но ============ */
VIEWS.ian=el=>{
  shell(el,S("и, а or но?"),'Adding (и), comparing (а), or a surprise (но)? Keys 1–3.',`<div class="game">${bar('ia')}<div id="iaStage"></div></div>`);
  mcRound({stage:'#iaStage',id:'ia',total:12,make:()=>shuffle(IAN),render:(q,i,last,answer,next)=>{
    $('#iaStage').innerHTML=`<div class="stage">
      <p class="sentence">${gapSent(q.s,q.r)}</p><p class="gloss">${esc(q.en)}</p>
      <div class="choices" style="grid-template-columns:repeat(3,1fr)">${[['и','➕ adding'],['а','⚖️ comparing'],['но','⚡ surprise']].map(([w,d],j)=>`<button class="choice" data-o="${w}" style="font-size:2rem">${w}<small>${d} · ${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===q.r,ok=>{answer(ok,esc(q.s.replace('{}',q.r)));$('#blank').classList.add('filled');$('#fb').innerHTML=esc(q.why);});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: cause or result ============ */
VIEWS.cause=el=>{
  shell(el,'Cause or result?','Is the second part the <b>reason</b> (потому́ что) or the <b>result</b> (поэ́тому)? Keys 1–2.',`<div class="game">${bar('cr')}<div id="crStage"></div></div>`);
  const P=S("потому' что"),T=S("поэ'тому");
  mcRound({stage:'#crStage',id:'cr',total:10,make:()=>shuffle(CAUSE).map(r=>({r,causeFirst:Math.random()<.5})),render:(q,i,last,answer,next)=>{
    const [c,e,cEn,eEn]=q.r;const right=q.causeFirst?T:P;
    const s=q.causeFirst?`${cap(c)}, {} ${e}.`:`${cap(e)}, {} ${c}.`;
    const en=q.causeFirst?`${cap(cEn)}, so ${eEn}.`:`${cap(eEn)} because ${cEn}.`;
    $('#crStage').innerHTML=`<div class="stage">
      <p class="sentence">${gapSent(s,right)}</p><p class="gloss">${esc(en)}</p>
      <div class="choices">${[[P,'because → reason'],[T,'so → result']].map(([w,d],j)=>`<button class="choice" data-o="${w}">${w}<small>${d} · ${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===right,ok=>{answer(ok,esc(s.replace('{}',right)));$('#blank').classList.add('filled');
      $('#fb').innerHTML=q.causeFirst?`“${esc(e)}” is the <b>result</b> → ${T}`:`“${esc(c)}” is the <b>reason</b> → ${P}`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: join the halves ============ */
VIEWS.halves=el=>{
  shell(el,'Join the halves','Tap the beginning of a sentence, then tap its ending. Join all five!',`<div class="game"><div class="game__bar"><span class="score" id="hvRound">Round 1</span><span class="score" id="hvMis" style="background:var(--pink)">Mistakes: 0</span></div><div id="hvStage"></div></div>`);
  let round=0,mis=0,sel=null,done=0,set;
  const start=()=>{
    round++;done=0;sel=null;
    const seen=new Set();set=[];for(const h of shuffle(HALVES)){if(!seen.has(h.k)){seen.add(h.k);set.push(h);}if(set.length===5)break;}
    $('#hvRound').textContent='Round '+round;$('#hvMis').textContent='Mistakes: '+mis;
    $('#hvStage').innerHTML=`<div class="stage" style="text-align:left"><div class="halves">
      <div class="col">${shuffle(set).map(h=>`<button class="half" data-s="a" data-id="${h.id}">${esc(h.a)}</button>`).join('')}</div>
      <div class="col">${shuffle(set).map(h=>`<button class="half" data-s="b" data-id="${h.id}">${esc(h.b)}</button>`).join('')}</div>
    </div><p class="feedback" id="hvFb" style="text-align:center"></p></div>`;
    $$('.half').forEach(b=>b.onclick=()=>tap(b));
  };
  const cols=['var(--green)','var(--yellow)','var(--blue)','var(--lilac)','var(--pink)'];
  const tap=b=>{
    if(!sel||sel.dataset.s===b.dataset.s){if(sel)sel.classList.remove('sel');sel=b;b.classList.add('sel');return;}
    const a=sel;sel=null;a.classList.remove('sel');
    if(a.dataset.id===b.dataset.id){const h=HALVES[+a.dataset.id],c=cols[done%5];[a,b].forEach(x=>{x.classList.add('matched');x.style.setProperty('--gc',c);});
      done++;$('#hvFb').innerHTML=`<span class="ru">${esc(h.a)} ${esc(h.b)}</span>`;
      if(done===set.length){addXP(3);burst();$('#hvFb').innerHTML+=`<div class="actions"><button class="btn btn--green" id="hvNext">Next round →</button></div>`;$('#hvNext').onclick=start;}}
    else{mis++;$('#hvMis').textContent='Mistakes: '+mis;[a,b].forEach(x=>{x.classList.add('bad');setTimeout(()=>x.classList.remove('bad'),400);});}
  };
  start();
};

/* ============ GAME: который ============ */
VIEWS.which=el=>{
  shell(el,S("Кото'рый game"),'Look at the noun before the comma and choose the form that agrees with it. Keys 1–4.',`<div class="game">${bar('kt')}<div id="ktStage"></div></div>`);
  mcRound({stage:'#ktStage',id:'kt',total:12,make:()=>shuffle(KOT),render:(q,i,last,answer,next)=>{
    const right=KOT_F[q.g];
    $('#ktStage').innerHTML=`<div class="stage">
      <p class="sentence">${gapSent(q.s,right)}</p><p class="gloss">${esc(q.en)}</p>
      <div class="choices choices--4">${Object.values(KOT_F).map((w,j)=>`<button class="choice" data-o="${w}">${w}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===right,ok=>{answer(ok,esc(q.s.replace('{}',right)));$('#blank').classList.add('filled');
      $('#fb').innerHTML=`<b class="ru">${esc(q.n)}</b> is ${{m:'masculine',f:'feminine',n:'neuter',pl:'plural'}[q.g]} → <b>${right}</b>`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: build it ============ */
VIEWS.build=el=>{
  shell(el,'Build it','Tap the tiles in the right order to build the sentence. Tap a tile in your sentence to send it back. Linking words are purple.',`<div class="game">${bar('bd')}<div id="bdStage"></div></div>`);
  const LINKS=['потому','что','поэтому','если','когда','чтобы','где','который','хотя','а','но','и'];
  let qs,i,score,review;
  const reset=()=>{qs=shuffle(BUILD).slice(0,8);i=0;score=0;review=[];};
  const draw=()=>{
    $('#bdScore').textContent=`${score} / ${qs.length}`;$('#bdFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){results($('#bdStage'),score,qs.length,review,()=>{reset();draw();});return;}
    const [sent,en]=qs[i];const toks=sent.split(' ');let chosen=[],checked=false;
    const order=shuffle(toks.map((t,k)=>k));
    $('#bdStage').innerHTML=`<div class="stage">
      <p class="scenario">${esc(en)}</p>
      <div class="tray" id="tray"></div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center" id="pool">${order.map(k=>`<button class="tok ${LINKS.includes(plain(toks[k]).replace(/[.,!?]/g,'').toLowerCase())?'conj':''}" data-k="${k}">${esc(toks[k])}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>
      <div class="actions"><button class="btn btn--ghost btn--sm" id="clr">↺ Clear</button><button class="btn btn--green" id="go">Check</button></div></div>`;
    const renderTray=()=>{$('#tray').innerHTML=chosen.map((k,j)=>`<button class="tok" data-j="${j}">${esc(toks[k])}</button>`).join('');
      $$('#tray .tok').forEach(b=>b.onclick=()=>{if(checked)return;const k=chosen.splice(+b.dataset.j,1)[0];$(`#pool .tok[data-k="${k}"]`).classList.remove('used');renderTray();});};
    $$('#pool .tok').forEach(b=>b.onclick=()=>{if(checked||b.classList.contains('used'))return;b.classList.add('used');chosen.push(+b.dataset.k);renderTray();});
    $('#clr').onclick=()=>{if(checked)return;chosen=[];$$('#pool .tok').forEach(b=>b.classList.remove('used'));renderTray();};
    $('#go').onclick=()=>{
      if(checked){i++;draw();return;}
      if(chosen.length<toks.length){$('#fb').textContent='Use all the tiles first!';return;}
      checked=true;const built=chosen.map(k=>toks[k]).join(' ');const ok=built===sent;
      $('#tray').classList.add(ok?'ok':'bad');
      if(ok){score++;$('#fb').innerHTML=S("Ве'рно! ✦");}else{review.push(esc(sent));$('#fb').innerHTML=`Correct: <span class="ru">${esc(sent)}</span>`;}
      $('#go').textContent=i===qs.length-1?'Results →':'Next →';$('#bdScore').textContent=`${score} / ${qs.length}`;
    };
  };
  reset();draw();
};

/* ============ GAME: comma hunter ============ */
VIEWS.hunt=el=>{
  shell(el,'Comma hunter','Tap the space where the comma belongs, or press “No comma” if the sentence doesn’t need one.',`<div class="game">${bar('ch')}<div id="chStage"></div></div>`);
  mcRound({stage:'#chStage',id:'ch',total:10,make:()=>shuffle(HUNT).slice(0,10),render:(q,i,last,answer,next)=>{
    const parts=q.s.split('|');const words=q.s.replace('|','').split(' ');
    const right=parts.length===2?parts[0].split(' ').length-1:-1; /* comma after word index */
    const html=words.map((w,k)=>`<span>${esc(w)}</span>${k<words.length-1?`<button class="gap hopt" data-g="${k}" aria-label="comma here">·</button>`:''}`).join('');
    $('#chStage').innerHTML=`<div class="stage">
      <div class="chunt">${html}</div>
      <div class="actions"><button class="btn btn--ghost hopt" id="noComma" data-g="-1" style="font-family:var(--font-display)">🚫 No comma</button></div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    $$('.hopt').forEach(b=>b.onclick=()=>{
      if(b.disabled)return;const g=+b.dataset.g,ok=g===right;
      $$('.hopt').forEach(x=>x.disabled=true);
      if(right>=0){const rb=$(`.gap[data-g="${right}"]`);rb.classList.add('ok');rb.textContent=',';}
      else $('#noComma').classList.add('btn--green');
      if(!ok){if(g>=0){b.classList.add('bad');b.textContent='✗';}else b.classList.add('btn--red');}
      answer(ok,esc(q.s.replace('|',',')));
      $('#fb').innerHTML=(ok?S("Ве'рно! "):'')+esc(q.why);
      $('#nextWrap').style.visibility='visible';$('#nextBtn').focus();
    });
    $('#nextBtn').onclick=next;
  }});
};

/* ============ INIT ============ */
$('#xp').textContent='★ '+xp+' XP';
$('#footRu').textContent=S("Учи'тесь говори'ть дли'нными предложе'ниями, потому' что э'то краси'во!");
go();
