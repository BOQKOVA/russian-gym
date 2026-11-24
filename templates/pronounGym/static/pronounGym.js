
/* ============ DATA ============
 An apostrophe ' after a Cyrillic vowel = stress mark. */
const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1́');
const plain=s=>s.replace(/́/g,'');
/* personal pronouns in 6 cases. After a preposition, his/her/its/their forms take н-: given as 'его'|него''. */
const PR = [
  {k:'я',   en:'I',  enO:'me',  e:'🙋', c:'var(--pink)',  gen:"меня'", dat:'мне', acc:"меня'", ins:'мной', prep:'мне', poss:'my'},
  {k:'ты',  en:'you',enO:'you', e:'🫵', c:'var(--yellow)',gen:"тебя'",dat:"тебе'",acc:"тебя'",ins:"тобо'й",prep:"тебе'", poss:'your'},
  {k:'он',  en:'he / it',enO:'him',e:'👨', c:'var(--blue)', gen:"его'|него'",dat:"ему'|нему'",acc:"его'|него'",ins:"им|ним",prep:"нём", poss:'his'},
  {k:"она'",en:'she / it',enO:'her',e:'👩', c:'var(--pink)', gen:"её|неё",dat:"ей|ней",acc:"её|неё",ins:"ей|ней",prep:"ней", poss:'her'},
  {k:"оно'",en:'it',enO:'it',  e:'🪟', c:'var(--green)', gen:"его'|него'",dat:"ему'|нему'",acc:"его'|него'",ins:"им|ним",prep:"нём", poss:'its'},
  {k:'мы',  en:'we', enO:'us',  e:'👫', c:'var(--lilac)', gen:'нас',dat:'нам',acc:'нас',ins:"на'ми",prep:'нас', poss:'our'},
  {k:'вы',  en:'you (polite / plural)',enO:'you',e:'🤝', c:'var(--yellow)',gen:'вас',dat:'вам',acc:'вас',ins:"ва'ми",prep:'вас', poss:'your'},
  {k:"они'",en:'they',enO:'them',e:'👨‍👩‍👧', c:'var(--blue)', gen:"их|них",dat:"им|ним",acc:"их|них",ins:"и'ми|ни'ми",prep:"них", poss:'their'}
];
PR.forEach(p=>{p.k=S(p.k);['gen','dat','acc','ins','prep'].forEach(c=>p[c]=S(p[c]));});
const f=(p,c,afterPrep=false)=>{const [a,b]=p[c].split('|');return afterPrep&&b?b:a;};
const CASES=[
  {c:'nom',name:'Nominative',q:"кто? что?",use:'the subject: who does it',ph:p=>`${p.k} …`},
  {c:'gen',name:'Genitive',q:"кого'?",use:'у … есть = to have',ph:p=>`у ${f(p,'gen',true)} есть`},
  {c:'dat',name:'Dative',q:"кому'?",use:'to / for someone; age, likes, feelings',ph:p=>`${f(p,'dat')} нра'вится`},
  {c:'acc',name:'Accusative',q:"кого'?",use:'the object: who you see, love, call',ph:p=>`${f(p,'acc')} зову'т`},
  {c:'ins',name:'Instrumental',q:"кем?",use:'с … = with someone',ph:p=>`с ${f(p,'ins',true)}`},
  {c:'prep',name:'Prepositional',q:"о ком?",use:'о … = about someone',ph:p=>`о ${f(p,'prep')}`}
];
CASES.forEach(c=>c.q=S(c.q));
/* possessives: masc fem neut plural; his/her/their never change */
const POSS={
  'я':["мой","моя'","моё","мои'"], 'ты':["твой","твоя'","твоё","твои'"],
  'он':["его'","его'","его'","его'"], [S("она'")]:["её","её","её","её"],
  'мы':["наш","на'ша","на'ше","на'ши"], 'вы':["ваш","ва'ша","ва'ше","ва'ши"], [S("они'")]:["их","их","их","их"]
};
Object.keys(POSS).forEach(k=>POSS[k]=POSS[k].map(S));
const CHEY=["чей","чья","чьё","чьи"];
const THIS=["э'тот","э'та","э'то","э'ти"].map(S);
const GI={m:0,f:1,n:2,pl:3};
const NOUNS=`
брат|brother|m|👦
па'па|dad|m|👨
дом|house|m|🏠
кот|cat|m|🐈
телефо'н|phone|m|📱
слова'рь|dictionary|m|📖
ко'фе|coffee|m|☕
сестра'|sister|f|👧
ма'ма|mum|f|👩
кни'га|book|f|📕
ко'мната|room|f|🛋️
ко'шка|cat|f|🐱
маши'на|car|f|🚗
дверь|door|f|🚪
окно'|window|n|🪟
пла'тье|dress|n|👗
мо'ре|sea|n|🌊
такси'|taxi|n|🚕
и'мя|name|n|🏷️
де'ти|children|pl|🧒
роди'тели|parents|pl|👫
часы'|watch|pl|⌚
очки'|glasses|pl|👓
`.trim().split('\n').map(l=>{const [w,en,g,e]=l.split('|');return {w:S(w),en,g,e};});
const PRON_OF={m:'он',f:S("она'"),n:S("оно'"),pl:S("они'")};
/* ты or вы? [situation, answer, why] */
const TYVY=[
  ['Talking to your best friend','ты','Friends and family get ты.'],
  ['Asking a stranger on the street for directions','вы','Strangers (adults) always get вы: it’s polite.'],
  ['Talking to your teacher','вы','Teachers get вы, usually with name and patronymic: А́нна Петро́вна.'],
  ['Talking to a small child','ты','Children get ты.'],
  ['Talking to two of your friends at once','вы','More than one person is always вы, even friends.'],
  ['Writing an email to your boss','вы','Your boss gets the polite вы (often written with a capital: Вы).'],
  ['Talking to your mum','ты','Family members get ты.'],
  ['Talking to a doctor','вы','A doctor is a professional you don’t know well: вы.'],
  ['Talking to your cat','ты','Animals always get ты!'],
  ['Asking a shop assistant for help','вы','Service staff get вы.'],
  ['Chatting with a classmate your age','ты','Classmates and young people of your age usually use ты.'],
  ['Talking to a group of children','вы','A group is plural, so вы, even for children.'],
  ['Talking to your grandma','ты','Family members, including grandparents, get ты.'],
  ['Meeting your friend’s parents for the first time','вы','Older people you’ve just met get вы.']
];
/* sentences for the pronoun forms game: {} is the gap, cue = case */
const FORM_T=[
  {c:'gen',t:"У {} есть ко'шка.",en:'… have a cat.',prep:true,who:[0,1,2,3,5,6,7]},
  {c:'acc',t:"{} зову'т А'нна.",en:'… name is Anna.',cap:true,who:[0,1,2,3,5,6,7]},
  {c:'dat',t:"{} два'дцать лет.",en:'… 20 years old.',cap:true,who:[0,1,2,3,5,6,7]},
  {c:'dat',t:"{} нра'вится Москва'.",en:'… like Moscow.',cap:true,who:[0,1,2,3,5,6,7]},
  {c:'ins',t:"Ты пойдёшь с {} в кино'?",en:'Will you go to the cinema with …?',prep:true,who:[0,2,3,5,7]},
  {c:'prep',t:"Мы ча'сто говори'м о {}.",en:'We often talk about …',prep:true,who:[1,2,3,6,7]},
  {c:'acc',t:"Я люблю' {}.",en:'I love …',who:[1,2,3,6,7]},
  {c:'dat',t:"Я звоню' {} ка'ждый день.",en:'I call … every day.',who:[1,2,3,6,7]}
];
FORM_T.forEach(t=>t.t=S(t.t));
/* key phrases for memory */
const MEM=[
  ["Меня' зову'т …","My name is …"],["Как тебя' зову'т?","What’s your name?"],["У меня' есть …","I have …"],["Мне нра'вится …","I like …"],
  ["Мне два'дцать лет.","I’m 20 years old."],["Мне хо'лодно.","I’m cold."],["со мной","with me"],["обо мне'","about me"],
  ["Его' зову'т …","His name is …"],["У неё есть …","She has …"],["Нам ве'село.","We’re having fun."],["Я люблю' тебя'.","I love you."],
  ["Позвони' мне!","Call me!"],["Как вас зову'т?","What’s your name? (polite)"],["Им ну'жно …","They need …"]
].map(([a,b])=>[S(a),b]);
const OBO=S("обо мне'");

/* ============ HELPERS ============ */
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const store={get(k,d){try{const v=localStorage.getItem('pg_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('pg_'+k,JSON.stringify(v))}catch(e){}}};
let xp=store.get('xp',0);
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

/* ============ MODAL (unused shell kept for Escape) ============ */
function closeModal(){$('#modal').classList.remove('is-open');$('#modal').setAttribute('aria-hidden','true');}
$('#modalClose').onclick=closeModal;
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});

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

/* ============ HOME ============ */
const MODES=[
  ['personal','🙋','Personal pronouns',"я, ты, он, она́, оно́, мы, вы, они́: who’s who, plus ты vs вы.",'var(--pink)'],
  ['cases','🔄','Pronoun cases',"я → меня́, мне, мной… The forms you need for Меня́ зову́т, У меня́ есть and Мне нра́вится.",'var(--blue)'],
  ['possessive','👜','Possessives',"мой, твой, наш, ваш change; его́, её, их never do. Plus чей?",'var(--yellow)'],
  ['this','👉',"Э́то & э́тот","“This is…” vs “this house”: when to use which.",'var(--green)'],
  ['replace','🔁','Replace the noun','Где ма́ма? — Вот она́! Swap the noun for он, она́, оно́ or они́.','var(--lilac)'],
  ['tyvy','🎩','Ты or вы?','Friend, teacher, cat or boss? Choose the right “you”.','var(--red)'],
  ['forms','🧩','Pronoun forms','У меня́, мне, со мной, о нём: fill the gap with the right form.','var(--blue)'],
  ['whose','🔑','Whose is it?','Э́то моя́ кни́га, его́ дом, на́ши де́ти: pick the possessive.','var(--yellow)'],
  ['thisgame','🎯',"Э́то or э́тот?",'Complete the sentence with э́то, э́тот, э́та or э́ти.','var(--pink)'],
  ['memory','🧠','Memory match','Pair the key pronoun phrases with their English meaning.','var(--green)']
];
VIEWS.home=el=>{
  const words=[...PR.map(p=>`${p.e} ${p.k}`),...MEM.slice(0,8).map(m=>m[0])];
  const track=`<div class="marquee__track" aria-hidden="true">${words.map(w=>`<span>${esc(w)}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar ru">я<br>ты</div>
      <span class="hero__sticker2">${S("мы · вы · они'")}</span>
      <span class="hero__sticker">A1 ✦ A2</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">pronouns</h1>
      <p class="hero__lead">I, me, my, this: small words you use in every sentence. Learn how Russian pronouns work and change, then play. <span class="ru">${S("Меня' зову'т… А тебя'?")}</span></p>
      <div class="hero__stats">
        <span class="chip" style="background:var(--pink)">8 personal pronouns</span>
        <span class="chip">6 cases</span>
        <span class="chip" style="background:var(--yellow)">possessives</span>
        <span class="chip" style="background:var(--green)">6 games</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#personal">Start learning →</a>
        <a class="btn btn--ghost" href="#replace">Jump into a game</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Four short lessons, then six games. Go in order if pronouns are new to you.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">${String(i+1).padStart(2,'0')}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${s}</p><span class="mode__go">${i<4?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
};

/* ============ PERSONAL ============ */
VIEWS.personal=el=>{
  shell(el,'Personal pronouns','Russian has 8 personal pronouns. Good news: they work a lot like English ones, with two big differences, <b>ты / вы</b> and <b>“it”</b>.',`
    <div class="ppl">${PR.map(p=>`<div class="pcard" style="--gc:${p.c}"><span class="e">${p.e}</span><span class="ru">${p.k}</span><span class="en">${p.en}</span></div>`).join('')}</div>
    <div class="duo">
      <div class="box" style="--gc:var(--yellow)">
        <h3>🎩 ты or вы?</h3>
        <p>Russian has <b>two words for “you”</b>:</p>
        <ul><li><span class="ru"><b>ты</b></span>: one person you know well: a friend, family, a child, a pet.</li>
          <li><span class="ru"><b>вы</b></span>: polite: a stranger, a teacher, a boss, an older person.</li>
          <li><span class="ru"><b>вы</b></span>: also <b>more than one person</b>, always.</li></ul>
        <p class="ex">Приве'т! Как ты? · Здра'вствуйте! Как вы?</p>
        <p>Not sure? Use <b>вы</b>. It’s never rude.</p>
      </div>
      <div class="box" style="--gc:var(--green)">
        <h3>🪟 There’s no special word for “it”</h3>
        <p>For things, use <b>он, она́ or оно́</b>, depending on the <b>gender of the noun</b>:</p>
        <p class="ex">Где стол? — Вот он. <span class="muted" style="font-weight:600">(table = masc.)</span></p>
        <p class="ex">Где кни'га? — Вот она'. <span class="muted" style="font-weight:600">(book = fem.)</span></p>
        <p class="ex">Где окно'? — Вот оно'. <span class="muted" style="font-weight:600">(window = neut.)</span></p>
        <p class="ex">Где часы'? — Вот они'. <span class="muted" style="font-weight:600">(plural)</span></p>
      </div>
    </div>
    <div class="box" style="--gc:var(--lilac);margin-bottom:40px">
      <h3>💡 Russian often drops “to be”</h3>
      <p>In the present tense there’s no “am / is / are”. Just put the pronoun next to the description:</p>
      <p class="ex">Я студе'нт. = I am a student. · Она' до'ма. = She is at home. · Мы здесь. = We are here.</p>
    </div>
    <div class="actions"><a class="btn btn--green" href="#replace">Practise: Replace the noun →</a><a class="btn btn--ghost" href="#cases">Next: Pronoun cases</a></div>`);
};

/* ============ CASES ============ */
VIEWS.cases=el=>{
  shell(el,'Pronoun cases','Like nouns, pronouns change their form depending on their job in the sentence (the <b>case</b>). At A1–A2 you mostly need them in a few key phrases, so learn the phrase and you’ve learned the form!',`
    <div class="stage" style="margin-bottom:40px">
      <p class="label" style="margin-bottom:12px">Pick a pronoun</p>
      <div class="picker">${PR.map((p,k)=>`<button class="pp" data-k="${k}">${p.k}</button>`).join('')}</div>
      <div class="phrases" id="phr"></div>
    </div>
    <h2 class="subhead">The full table</h2>
    <div class="tablewrap"><table>
      <tr><th>case</th>${PR.map(p=>`<th>${p.k}</th>`).join('')}</tr>
      ${CASES.map(C=>`<tr><td class="case"><b>${C.name}</b>${C.q}</td>${PR.map(p=>{if(C.c==='nom')return `<td>${p.k}</td>`;const [a,b]=p[C.c].split('|');return `<td>${C.c==='prep'?`<span class="n">(о)</span>`:''}${esc(a)}${b&&b!==a?`<span class="n">after prep.: ${esc(b)}</span>`:''}</td>`;}).join('')}</tr>`).join('')}
    </table></div>
    <div class="duo">
      <div class="box" style="--gc:var(--pink)">
        <h3>👂 The н- rule</h3>
        <p>After a preposition (у, с, к, о, для…), <b>his, her, its and their</b> forms add <b>н-</b> at the start:</p>
        <div class="nrule"><span>его' → у <b>н</b>его'</span><span>её → для <b>н</b>её</span><span>ему' → к <b>н</b>ему'</span><span>ей → с <b>н</b>ей</span><span>им → с <b>н</b>им</span><span>их → у <b>н</b>их</span></div>
        <p style="margin-top:12px">But <b>not</b> for “his / her / their” meaning possession: <span class="ru"><b>у его' бра'та</b></span> (at his brother’s).</p>
      </div>
      <div class="box" style="--gc:var(--blue)">
        <h3>✨ Little details</h3>
        <ul><li><span class="ru"><b>о → обо</b></span> before мне: <span class="ru"><b>обо мне'</b></span> (about me).</li>
          <li><span class="ru"><b>с → со</b></span> before мной: <span class="ru"><b>со мной</b></span> (with me).</li>
          <li><span class="ru"><b>к → ко</b></span> before мне: <span class="ru"><b>ко мне</b></span> (to me).</li>
          <li><span class="ru"><b>его'</b></span> is said [йиво́]: the г sounds like в.</li></ul>
      </div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#forms">Practise: Pronoun forms →</a><a class="btn btn--ghost" href="#possessive">Next: Possessives</a></div>`);
  const PH={
    gen:(p)=>[`У ${f(p,'gen',true)} есть кот.`,`${cap(p.en.split(' ')[0])} ${p.k==='я'?'have':p.k==='ты'||p.k==='вы'||p.k==='мы'||plain(p.k)==='они'?'have':'has'} a cat.`],
    dat:(p)=>[`${cap(f(p,'dat'))} нра'вится му'зыка.`,`${cap(p.en.split(' ')[0])} like${['он','она','оно'].includes(plain(p.k))?'s':''} music.`],
    acc:(p)=>[`${cap(f(p,'acc'))} зову'т …`,`${cap(p.poss)} name is …`],
    ins:(p)=>[`${p.k==='я'?'со':'с'} ${f(p,'ins',true)}`,`with ${p.enO}`],
    prep:(p)=>[`${p.k==='я'?'обо':'о'} ${f(p,'prep')}`,`about ${p.enO}`]
  };
  const show=k=>{
    const p=PR[k];
    $$('.pp').forEach(b=>b.classList.toggle('is-on',+b.dataset.k===k));
    $('#phr').innerHTML=CASES.filter(C=>C.c!=='nom').map((C,j)=>{const [ru,en]=PH[C.c](p);const form=C.c==='gen'||C.c==='ins'?f(p,C.c,true):f(p,C.c);
      const hl=esc(S(ru)).replace(new RegExp('(^|\\s)('+form+')(?=[\\s.,…]|$)','i'),'$1<b>$2</b>');
      return `<div class="phrase" style="--gc:${['var(--pink)','var(--yellow)','var(--green)','var(--blue)','var(--lilac)'][j]}"><span class="case">${C.name}</span> <span class="q">${C.q}</span><span class="ru">${hl}</span><span class="en">${esc(en)} · ${C.use}</span></div>`;}).join('');
  };
  $$('.pp').forEach(b=>b.onclick=()=>show(+b.dataset.k));show(0);
};

/* ============ POSSESSIVES ============ */
VIEWS.possessive=el=>{
  const owners=Object.keys(POSS);
  shell(el,'Possessives','“My, your, his…” In Russian, some possessives <b>agree with the noun</b> (like adjectives), and some <b>never change</b>.',`
    <div class="tablewrap"><table>
      <tr><th>owner</th><th>English</th><th>он (masc.)</th><th>${S("она'")} (fem.)</th><th>${S("оно'")} (neut.)</th><th>${S("они'")} (plural)</th></tr>
      ${owners.map(o=>{const p=PR.find(x=>x.k===o);return `<tr><td>${o}</td><td class="case">${p.poss}</td>${POSS[o].map(w=>`<td>${esc(w)}</td>`).join('')}</tr>`;}).join('')}
      <tr><td>${S("чей?")}</td><td class="case">whose?</td>${CHEY.map(w=>`<td>${w}</td>`).join('')}</tr>
    </table></div>
    <div class="duo">
      <div class="box" style="--gc:var(--yellow)">
        <h3>🔄 These change</h3>
        <p><span class="ru"><b>мой, твой, наш, ваш</b></span> (and <span class="ru"><b>чей</b></span>) match the <b>noun</b>: its gender and number.</p>
        <p class="ex">мой брат · моя' сестра' · моё окно' · мои' де'ти</p>
        <p class="ex">наш дом · на'ша ко'мната · на'ше мо'ре · на'ши роди'тели</p>
        <p>The owner doesn’t matter! A woman says <span class="ru"><b>мой брат</b></span> too.</p>
      </div>
      <div class="box" style="--gc:var(--green)">
        <h3>🧊 These never change</h3>
        <p><span class="ru"><b>его'</b></span> (his), <span class="ru"><b>её</b></span> (her), <span class="ru"><b>их</b></span> (their) stay the same with every noun.</p>
        <p class="ex">его' брат · его' сестра' · его' окно' · его' де'ти</p>
        <p class="ex">её дом · её кни'га · их часы'</p>
        <p>And they never take н-: <span class="ru"><b>у её ма'мы</b></span> (at her mum’s).</p>
      </div>
    </div>
    <div class="box" style="--gc:var(--pink);margin-bottom:40px">
      <h3>❓ Asking “whose?”</h3>
      <p class="ex">Чей э'то дом? — Мой. · Чья э'то кни'га? — Твоя'. · Чьё э'то пла'тье? — Её. · Чьи э'то часы'? — На'ши.</p>
    </div>
    <div class="actions"><a class="btn btn--green" href="#whose">Practise: Whose is it? →</a><a class="btn btn--ghost" href="#this">Next: Э́то &amp; э́тот</a></div>`);
};

/* ============ ЭТО & ЭТОТ ============ */
VIEWS.this=el=>{
  shell(el,"Э'то &amp; э'тот","Two words that look alike but do different jobs. Э'то introduces something (“This is…”). Э'тот / э'та / э'то / э'ти point at a noun (“this house”) and agree with it.",`
    <div class="duo">
      <div class="box" style="--gc:var(--blue)">
        <h3>👉 Э'то = “This is / These are”</h3>
        <p>One form for everything. It introduces or identifies.</p>
        <p class="ex">Э'то мой брат. = This is my brother.</p>
        <p class="ex">Э'то моя' сестра'. = This is my sister.</p>
        <p class="ex">Э'то мои' роди'тели. = These are my parents.</p>
        <p class="ex">Что э'то? — Э'то кот. = What’s this? — It’s a cat.</p>
      </div>
      <div class="box" style="--gc:var(--pink)">
        <h3>🎯 Э'тот = “this (noun)”</h3>
        <p>Points at a noun and agrees with it, like an adjective.</p>
        <p class="ex">э'тот дом · э'та кни'га · э'то окно' · э'ти часы'</p>
        <p class="ex">Мне нра'вится э'та кни'га. = I like this book.</p>
        <p class="ex">Э'тот дом о'чень ста'рый. = This house is very old.</p>
      </div>
    </div>
    <div class="box" style="--gc:var(--lilac);margin-bottom:40px">
      <h3>🔍 Spot the difference</h3>
      <p class="ex">Э'то кни'га. = This is a book. <span class="muted" style="font-weight:600">(a full sentence)</span></p>
      <p class="ex">Э'та кни'га интере'сная. = This book is interesting.</p>
      <p>A2 bonus: <span class="ru"><b>тот, та, то, те</b></span> = “that (one over there)”: <span class="ru"><b>${S("э'тот дом и тот дом")}</b></span>.</p>
    </div>
    <div class="actions"><a class="btn btn--green" href="#thisgame">Practise: Э́то or э́тот? →</a><a class="btn btn--ghost" href="#replace">Play the games</a></div>`);
};

/* ============ REPLACE THE NOUN ============ */
VIEWS.replace=el=>{
  shell(el,'Replace the noun','Где…? — Вот… Answer with the right pronoun. For things, look at the gender of the noun. Keys 1–4 work too.',`<div class="game">${bar('rp')}<div id="rpStage"></div></div>`);
  mcRound({stage:'#rpStage',id:'rp',total:12,make:()=>shuffle(NOUNS).slice(0,12),render:(n,i,last,answer,next)=>{
    const right=PRON_OF[n.g];
    $('#rpStage').innerHTML=`<div class="stage">
      <div style="font-size:3.4rem;line-height:1">${n.e}</div>
      <p class="sentence">${S("Где")} ${esc(n.w)}? — Вот <span class="blank" id="blank">${right}</span>!</p>
      <p class="gloss">Where is/are the ${esc(n.en)}? — Here ___ is/are!</p>
      <div class="choices choices--4">${Object.values(PRON_OF).map((p,j)=>`<button class="choice" data-p="${p}">${p}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.p===right,ok=>{answer(ok,`Где ${esc(n.w)}? — Вот <b>${right}</b>`);$('#blank').classList.add('filled');
      $('#fb').innerHTML=`${esc(n.w)} is ${{m:'masculine',f:'feminine',n:'neuter',pl:'plural'}[n.g]} → <b>${right}</b>${plain(n.w)==='папа'?' (a man, even with -а!)':plain(n.w)==='кофе'?' (ко́фе is masculine!)':plain(n.w)==='такси'?' (borrowed word → neuter)':''}`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ ТЫ OR ВЫ ============ */
VIEWS.tyvy=el=>{
  shell(el,'Ты or вы?','Who are you talking to? Choose the right “you”. Key 1 = ты, key 2 = вы.',`<div class="game">${bar('tv')}<div id="tvStage"></div></div>`);
  mcRound({stage:'#tvStage',id:'tv',total:10,make:()=>shuffle(TYVY).slice(0,10),render:(q,i,last,answer,next)=>{
    const [sit,ans,why]=q;
    $('#tvStage').innerHTML=`<div class="stage">
      <p class="scenario">${esc(sit)}</p>
      <div class="choices">${['ты','вы'].map((w,j)=>`<button class="choice" data-w="${w}" style="font-size:2rem">${w}<small>${j?'polite / plural':'friendly, one person'} · ${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.w===ans,ok=>{answer(ok,`${esc(sit)} → <b>${ans}</b>`);$('#fb').innerHTML=esc(why);});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ PRONOUN FORMS ============ */
VIEWS.forms=el=>{
  shell(el,'Pronoun forms','Fill the gap with the right form of the pronoun in brackets. Remember the н- rule after prepositions!',`<div class="game">${bar('pf')}<div id="pfStage"></div></div>`);
  mcRound({stage:'#pfStage',id:'pf',total:12,make:()=>Array.from({length:12},()=>{const t=pick(FORM_T);return {t,p:PR[pick(t.who)]};}),render:(q,i,last,answer,next)=>{
    const {t,p}=q;let right=f(p,t.c,!!t.prep);
    let shown=right;
    if(t.c==='prep'&&p.k==='я')shown=right;
    const sent=t.t.split('{}');
    let before=sent[0],after=sent[1];
    if(t.c==='ins'&&p.k==='я')before=before.replace(/с $/,'со ');
    if(t.c==='prep'&&p.k==='я')before=before.replace(/о $/,'обо ');
    const display=t.cap&&!before?cap(right):right;
    const set=new Set([display]);
    const others=[...CASES.filter(C=>C.c!=='nom'&&C.c!==t.c).map(C=>f(p,C.c,!!t.prep)),...PR.filter(x=>x!==p&&x.k!==S("оно'")).map(x=>f(x,t.c,!!t.prep)),f(p,t.c,!t.prep)];
    for(const o of shuffle(others)){if(set.size>=4)break;const d=t.cap&&!before?cap(o):o;if(plain(d)!==plain(display))set.add(d);}
    $('#pfStage').innerHTML=`<div class="stage">
      <span class="g" style="--gc:var(--yellow)">${CASES.find(C=>C.c===t.c).name}</span>
      <p class="sentence" style="margin-top:12px">${esc(before)}<span class="blank" id="blank">${esc(display)}</span>${esc(after)} <span class="cue">(${p.k})</span></p>
      <p class="gloss">${esc(t.en.replace('…',p.enO==='me'&&t.c!=='gen'&&t.c!=='dat'?'me':''))}</p>
      <div class="choices choices--4">${shuffle([...set]).map((o,j)=>`<button class="choice" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    $('.gloss').textContent=({gen:`${cap(p.en.split(' ')[0])} ${['он','она'].includes(plain(p.k))?'has':'have'} a cat.`,acc:`${cap(p.poss)} name is Anna.`,dat:t.t.includes('лет')?`${cap(p.en.split(' ')[0])} ${p.k==='я'?'am':['он','она'].includes(plain(p.k))?'is':'are'} 20 years old.`:t.t.includes('нра')?`${cap(p.en.split(' ')[0])} like${['он','она'].includes(plain(p.k))?'s':''} Moscow.`:`I call ${p.enO} every day.`,ins:`Will you go to the cinema with ${p.enO}?`,prep:`We often talk about ${p.enO}.`})[t.c]||'';
    if(t.c==='acc'&&t.t.includes('люблю'))$('.gloss').textContent=`I love ${p.enO}.`;
    wireChoices(b=>b.dataset.o===display,ok=>{answer(ok,`${esc(before)}<b>${esc(display)}</b>${esc(after)}`);$('#blank').classList.add('filled');
      const C=CASES.find(x=>x.c===t.c);$('#fb').innerHTML=`${C.name} (${C.q}) of <b>${p.k}</b> → ${esc(display)}${t.prep&&p[t.c].includes('|')?' · after a preposition it takes н-':''}`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ WHOSE IS IT? ============ */
VIEWS.whose=el=>{
  shell(el,'Whose is it?','Choose the possessive. мой / твой / наш / ваш match the noun; его́ / её / их never change.',`<div class="game">${bar('wh')}<div id="whStage"></div></div>`);
  const owners=Object.keys(POSS);
  mcRound({stage:'#whStage',id:'wh',total:12,make:()=>Array.from({length:12},()=>({o:pick(owners),n:pick(NOUNS)})),render:(q,i,last,answer,next)=>{
    const {o,n}=q,k=GI[n.g],right=POSS[o][k],p=PR.find(x=>x.k===o);
    const set=new Set([right]);
    const pool=POSS[o][0]===POSS[o][1]?[...shuffle(['мой',S("моя'"),S("его'"),'её','их',S("на'ша"),S("твои'")])]:[...POSS[o],...shuffle(Object.values(POSS).map(a=>a[k]))];
    for(const x of shuffle(pool)){if(set.size>=4)break;set.add(x);}
    $('#whStage').innerHTML=`<div class="stage">
      <p class="qline">${cap(CHEY[k])} ${S("э'то")} ${esc(n.w)}?</p>
      <div style="font-size:3rem;line-height:1">${n.e}</div>
      <p class="sentence">${S("Э'то")} <span class="blank" id="blank">${esc(right)}</span> ${esc(n.w)}. <span class="cue">(${o})</span></p>
      <p class="gloss">This is ${p.poss} ${esc(n.en)}.</p>
      <div class="choices choices--4">${shuffle([...set]).map(x=>`<button class="choice" data-o="${esc(x)}">${esc(x)}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===right,ok=>{answer(ok,`${S("Э'то")} <b>${esc(right)}</b> ${esc(n.w)}`);$('#blank').classList.add('filled');
      $('#fb').innerHTML=POSS[o][0]===POSS[o][1]?`<b>${esc(right)}</b> (${p.poss}) never changes.`:`${esc(n.w)} is ${{m:'masculine',f:'feminine',n:'neuter',pl:'plural'}[n.g]} → <b>${esc(right)}</b>`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ ЭТО OR ЭТОТ ============ */
VIEWS.thisgame=el=>{
  shell(el,"Э'то or э'тот?","Is it “This is a…” (э'то) or “this + noun” (э'тот, э'та, э'то, э'ти)?",`<div class="game">${bar('tg')}<div id="tgStage"></div></div>`);
  mcRound({stage:'#tgStage',id:'tg',total:12,make:()=>Array.from({length:12},()=>({n:pick(NOUNS),intro:Math.random()<.4})),render:(q,i,last,answer,next)=>{
    const {n,intro}=q,k=GI[n.g];
    const right=intro?THIS[2]:THIS[k];
    let before,after,en;
    if(intro){before='';after=` ${n.w}.`;en=n.g==='pl'?`These are ${n.en}.`:`This is a ${n.en}.`;}
    else{before=n.g==='pl'?S("Мне нра'вятся "):S("Мне нра'вится ");after=` ${n.w}.`;en=`I like ${n.g==='pl'?'these':'this'} ${n.en}.`;}
    const show=w=>intro?cap(w):w;
    $('#tgStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${n.e}</div>
      <p class="sentence">${esc(before)}<span class="blank" id="blank">${esc(show(right))}</span>${esc(after)}</p>
      <p class="gloss">${esc(en)}</p>
      <div class="choices choices--4">${THIS.map(w=>`<button class="choice" data-o="${esc(w)}">${esc(show(w))}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===right,ok=>{answer(ok,`${esc(before)}<b>${esc(show(right))}</b>${esc(after)}`);$('#blank').classList.add('filled');
      $('#fb').innerHTML=intro?`“This is / these are…” → always <b>${esc(cap(THIS[2]))}</b>, whatever the noun.`:`“this + noun”: ${esc(n.w)} is ${{m:'masculine',f:'feminine',n:'neuter',pl:'plural'}[n.g]} → <b>${esc(THIS[k])}</b>`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ MEMORY ============ */
VIEWS.memory=el=>{
  let cards,open,moves,matched,t0,timer,lock;
  shell(el,'Memory match','Flip two tiles at a time. Pair each Russian phrase (blue) with its English meaning (yellow).',`
    <div class="game"><div class="game__bar"><span class="score" id="mmMoves">0 moves</span><span class="score" id="mmTime" style="background:var(--blue)">0:00</span><button class="btn btn--sm btn--ghost" id="mmRe">↻ New board</button></div><div id="mmStage"></div></div>`);
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const start=()=>{
    clearInterval(timer);
    const ps=shuffle(MEM).slice(0,8);
    cards=shuffle(ps.flatMap((m,k)=>[{k,t:m[0],r:1},{k,t:m[1],r:0}]));
    open=[];moves=0;matched=0;t0=null;lock=false;
    $('#mmMoves').textContent='0 moves';$('#mmTime').textContent='0:00';
    $('#mmStage').innerHTML=`<div class="mem">${cards.map((c,j)=>`<button class="mcard" data-j="${j}" aria-label="Hidden tile"><div class="mcard__inner"><div class="mcard__face mcard__back">✦</div><div class="mcard__face mcard__front ${c.r?'ru':'en'}" style="${c.r?'background:var(--blue)':''}">${esc(c.t)}</div></div></button>`).join('')}</div>`;
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
$('#xp').textContent='★ '+xp+' XP';
$('#footRu').textContent=S("я, ты, он, она' — вме'сте дру'жная семья'!");
go();
