
/* ============ DATA ============
 An apostrophe ' after a Cyrillic vowel = stress mark.
 noun | gender | 1 (nom. sg) | 2-4 (gen. sg) | 5+ (gen. pl) | english | emoji | price ₽ (shop items only) | shelf */
const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1́');
const plain=s=>s.replace(/́/g,'');
const RAW=`
я'блоко|n|я'блоко|я'блока|я'блок|apple|🍎|30|food
бана'н|m|бана'н|бана'на|бана'нов|banana|🍌|25|food
апельси'н|m|апельси'н|апельси'на|апельси'нов|orange|🍊|40|food
лимо'н|m|лимо'н|лимо'на|лимо'нов|lemon|🍋|50|food
помидо'р|m|помидо'р|помидо'ра|помидо'ров|tomato|🍅|20|food
огуре'ц|m|огуре'ц|огурца'|огурцо'в|cucumber|🥒|35|food
яйцо'|n|яйцо'|яйца'|яи'ц|egg|🥚|12|food
буты'лка воды'|f|буты'лка воды'|буты'лки воды'|буты'лок воды'|bottle of water|💧|60|food
бато'н|m|бато'н|бато'на|бато'нов|loaf of bread|🥖|55|food
пиро'г|m|пиро'г|пирога'|пирого'в|pie|🥧|150|food
торт|m|торт|то'рта|то'ртов|cake|🎂|900|food
ру'чка|f|ру'чка|ру'чки|ру'чек|pen|🖊️|45|school
каранда'ш|m|каранда'ш|карандаша'|карандаше'й|pencil|✏️|20|school
тетра'дь|f|тетра'дь|тетра'ди|тетра'дей|notebook|📓|70|school
кни'га|f|кни'га|кни'ги|книг|book|📕|450|school
биле'т|m|биле'т|биле'та|биле'тов|ticket|🎫|350|school
ча'шка|f|ча'шка|ча'шки|ча'шек|cup|☕|300|gift
таре'лка|f|таре'лка|таре'лки|таре'лок|plate|🍽️|250|gift
футбо'лка|f|футбо'лка|футбо'лки|футбо'лок|T-shirt|👕|800|gift
ша'пка|f|ша'пка|ша'пки|ша'пок|hat|🧢|1200|gift
носо'к|m|носо'к|носка'|носко'в|sock|🧦|100|gift
мяч|m|мяч|мяча'|мяче'й|ball|⚽|600|gift
ро'за|f|ро'за|ро'зы|роз|rose|🌹|200|gift
игру'шка|f|игру'шка|игру'шки|игру'шек|toy|🧸|500|gift
матрёшка|f|матрёшка|матрёшки|матрёшек|matryoshka doll|🪆|1500|gift
пла'тье|n|пла'тье|пла'тья|пла'тьев|dress|👗|3500|gift
кольцо'|n|кольцо'|кольца'|коле'ц|ring|💍|5000|gift
стол|m|стол|стола'|столо'в|table|🪵||
дом|m|дом|до'ма|домо'в|house|🏠||
брат|m|брат|бра'та|бра'тьев|brother|👦||
сестра'|f|сестра'|сестры'|сестёр|sister|👧||
окно'|n|окно'|окна'|о'кон|window|🪟||
студе'нт|m|студе'нт|студе'нта|студе'нтов|student|🧑‍🎓||
ко'шка|f|ко'шка|ко'шки|ко'шек|cat|🐱||
день|m|день|дня|дней|day|🌞||
час|m|час|часа'|часо'в|hour|🕐||
мину'та|f|мину'та|мину'ты|мину'т|minute|⏱️||
неде'ля|f|неде'ля|неде'ли|неде'ль|week|📅||
челове'к|m|челове'к|челове'ка|челове'к|person|🧍||
год|m|год|го'да|лет|year|🎂||
рубль|m|рубль|рубля'|рубле'й|rouble|💰||
`;
const N=RAW.trim().split('\n').map((l,id)=>{const [w,g,a,b,c,en,e,price,shelf]=l.split('|');
  const f=[S(a),S(b),S(c)];
  /* accusative singular (only feminine changes): -а → -у, -я → -ю */
  const acc=g==='f'?f[0].replace(/^(\S+?)а(́?)(\s|$)/,'$1у$2$3').replace(/^(\S+?)я(́?)(\s|$)/,'$1ю$2$3'):f[0];
  return {id,w:S(w),g,f,acc,en,e,price:+price||0,shelf};});
const SHOP=N.filter(n=>n.price);
const RUB=N.find(n=>plain(n.w)==='рубль'),YEAR=N.find(n=>plain(n.w)==='год');
const SHELVES={food:'🍎 Food',school:'✏️ Stationery',gift:'🎁 Gifts & clothes'};

/* ============ NUMBERS → WORDS ============ */
const UNITS=["ноль","оди'н","два","три","четы'ре","пять","шесть","семь","во'семь","де'вять"].map(S);
const TEENS=["де'сять","оди'ннадцать","двена'дцать","трина'дцать","четы'рнадцать","пятна'дцать","шестна'дцать","семна'дцать","восемна'дцать","девятна'дцать"].map(S);
const TENS=["","","два'дцать","три'дцать","со'рок","пятьдеся'т","шестьдеся'т","се'мьдесят","во'семьдесят","девяно'сто"].map(S);
const HUND=["","сто","две'сти","три'ста","четы'реста","пятьсо'т","шестьсо'т","семьсо'т","восемьсо'т","девятьсо'т"].map(S);
const THOU=["ты'сяча","ты'сячи","ты'сяч"].map(S);
function unit(u,g,acc){
  if(u===1)return g==='f'?(acc?S("одну'"):S("одна'")):g==='n'?S("одно'"):UNITS[1];
  if(u===2)return g==='f'?'две':'два';
  return UNITS[u];
}
function under1000(n,g,acc){
  const out=[],h=Math.floor(n/100),r=n%100;
  if(h)out.push(HUND[h]);
  if(r>=10&&r<20)out.push(TEENS[r-10]);
  else{const t=Math.floor(r/10),u=r%10;if(t)out.push(TENS[t]);if(u)out.push(unit(u,g,acc));}
  return out.join(' ');
}
/* which form? 0 = оди́н стол, 1 = два стола́, 2 = пять столо́в */
function formIdx(n){const r=n%100,u=n%10;if(r>=11&&r<=14)return 2;if(u===1)return 0;if(u>=2&&u<=4)return 1;return 2;}
function words(n,g='m',acc=false){
  if(n===0)return UNITS[0];
  const th=Math.floor(n/1000),r=n%1000,out=[];
  if(th)out.push(th===1?THOU[0]:under1000(th,'f')+' '+THOU[formIdx(th)]);
  if(r)out.push(under1000(r,g,acc));
  return out.join(' ');
}
/* the full phrase: "два стола́"; in a shop (acc) feminine one → одну́ ру́чку */
function phrase(n,noun,acc=false){
  const k=formIdx(n);const nw=words(n,noun.g,acc);
  const nf=(k===0&&acc)?noun.acc:noun.f[k];
  return nw+' '+nf;
}
const rubles=n=>`${words(n)} ${RUB.f[formIdx(n)]}`;
const WHY=["ends in 1 (not 11) → nominative singular","ends in 2, 3 or 4 (not 12–14) → genitive singular","ends in 0 or 5–9, or in 11–14 → genitive plural"];

/* ============ HELPERS ============ */
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const fmt=n=>n.toLocaleString('ru-RU').replace(/ /g,' ');
const store={get(k,d){try{const v=localStorage.getItem('ng2_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('ng2_'+k,JSON.stringify(v))}catch(e){}}};
let xp=store.get('xp',0);
function addXP(n){xp+=n;store.set('xp',xp);const el=$('#xp');el.textContent='★ '+xp+' XP';el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
function burst(){
  const cols=['#fe98c0','#80eb3d','#3dd0eb','#eb583d','#ffe14d'];
  for(let i=0;i<26;i++){const s=document.createElement('span');s.className='burst';s.textContent=pick(['✦','★','●','₽']);
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
function wireChoices(isRight,onAnswer,root=document){
  $$('.choice',root).forEach(b=>b.onclick=()=>{
    if(b.disabled)return;const ok=isRight(b);
    $$('.choice',root).forEach(x=>{x.disabled=true;if(isRight(x))x.classList.add('ok');});
    if(!ok)b.classList.add('bad');
    onAnswer(ok);
    const nw=$('#nextWrap');if(nw){nw.style.visibility='visible';$('#nextBtn').focus();}
  });
}
const nextBtn=last=>`<div class="actions" id="nextWrap" style="visibility:hidden"><button class="btn btn--green" id="nextBtn">${last?'Results →':'Next →'}</button></div>`;
const bar=id=>`<div class="game__bar"><div class="progress"><div class="progress__fill" id="${id}Fill"></div></div><span class="score" id="${id}Score"></span></div>`;
function keyChoices(){const key=e=>{if(e.target.tagName==='INPUT'||e.target.tagName==='SELECT')return;const k=+e.key;if(k>=1&&k<=4){const b=$$('.choice')[k-1];if(b&&!b.disabled)b.click();}else if(e.key==='Enter'){const nb=$('#nextBtn');if(nb&&$('#nextWrap').style.visibility==='visible'){e.preventDefault();nb.click();}}};document.addEventListener('keydown',key);cleanup=()=>document.removeEventListener('keydown',key);}
/* numbers learners often confuse */
function confusable(n){
  const c=new Set();
  const add=x=>{if(x>=0&&x<=9999&&x!==n)c.add(x);};
  if(n>=11&&n<=19){add((n-10)*10);add(n-10);}
  if(n%10===0&&n>=20&&n<100){add(n/10+10);add(n/10);}
  if(n<100){add(n+10);add(n-10);add(n+1);}
  else{add(n+100);add(n-100);add(n+10);add(n-10);const s=String(n).split('').reverse().join('');add(+s);}
  while(c.size<3)add(n+rnd(-20,20));
  return shuffle([...c]).slice(0,3);
}

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
  ['numbers','🔢','Numbers','0 to 9 999 in words, with a converter for any number.','var(--yellow)'],
  ['rule','📐','The 1 · 2 · 5 rule','оди́н стол, два стола́, пять столо́в: which form after which number.','var(--green)'],
  ['money','💰','Money & age','рубль / рубля́ / рубле́й, год / го́да / лет, and how to shop politely.','var(--pink)'],
  ['nouns','📖','Noun list',`${N.length} nouns in all three forms.`,'var(--blue)'],
  ['shop','🛒','The shop','Order items with the right form, then pay the total said in words!','var(--red)'],
  ['form','🧩','1, 2 or 5?','See a number and a noun, pick the right form. Watch out for 11–14!','var(--lilac)'],
  ['words','✍️','Number words','Digits to words and words to digits.','var(--yellow)'],
  ['price','🏷️','Price check','60 seconds: read the price tag and pick the right words.','var(--green)'],
  ['age','🎂','How old?','Мне два́дцать оди́н год, ему́ три́дцать лет: год, го́да or лет?','var(--pink)'],
  ['memory','🧠','Memory match','Pair digits with number words.','var(--blue)']
];
VIEWS.home=el=>{
  const ex=shuffle(SHOP).slice(0,10).map(n=>{const q=pick([1,2,3,5,21,22,25]);return `${n.e} ${phrase(q,n)}`;});
  const track=`<div class="marquee__track" aria-hidden="true">${ex.map(w=>`<span>${esc(w)}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar" style="font-size:8.5rem">67</div>
      <span class="hero__sticker2">${S("пять столо'в")}</span>
      <span class="hero__sticker">A1 ✦ A2</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">count it</h1>
      <p class="hero__lead">One table, two tables, five tables… In Russian the noun changes with the number! Learn the rule, then go shopping. <span class="ru">${S("Ско'лько сто'ит?")}</span></p>
      <div class="hero__stats">
        <span class="chip" style="background:var(--yellow)">${S("оди'н стол")}</span>
        <span class="chip" style="background:var(--green)">${S("два стола'")}</span>
        <span class="chip" style="background:var(--pink)">${S("пять столо'в")}</span>
        <span class="chip">🛒 shop game · 6 games</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#rule">Learn the 1 · 2 · 5 rule →</a>
        <a class="btn btn--ghost" href="#shop">🛒 Go shopping</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Four short lessons, then the shop and five more games.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">${String(i+1).padStart(2,'0')}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${S(s)}</p><span class="mode__go">${i<4?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
};

/* ============ NUMBERS ============ */
VIEWS.numbers=el=>{
  const grid=a=>`<div class="numgrid">${a.map(n=>`<div><b>${fmt(n)}</b><span>${words(n)}</span></div>`).join('')}</div>`;
  shell(el,'Numbers','Learn the building blocks, then put them together like Lego: <b>245</b> = две́сти + со́рок + пять.',`
    <div class="lab">
      <p class="label">Type any number from 0 to 9 999</p>
      <input type="number" id="nIn" min="0" max="9999" value="245">
      <div class="out" id="nOut"></div>
    </div>
    <h2 class="subhead">0–10</h2>${grid([0,1,2,3,4,5,6,7,8,9,10])}
    <h2 class="subhead">11–19 <span class="muted" style="font-size:1rem">(-надцать = “on ten”)</span></h2>${grid([11,12,13,14,15,16,17,18,19])}
    <h2 class="subhead">Tens</h2>${grid([20,30,40,50,60,70,80,90])}
    <h2 class="subhead">Hundreds</h2>${grid([100,200,300,400,500,600,700,800,900])}
    <h2 class="subhead">Thousands</h2>${grid([1000,2000,3000,5000])}
    <div class="duo">
      <div class="box" style="--gc:var(--yellow)"><h3>⚠️ Watch out</h3><ul>
        <li><span class="ru"><b>со'рок</b></span> (40) and <span class="ru"><b>девяно'сто</b></span> (90) don’t follow the pattern.</li>
        <li><span class="ru"><b>пятна'дцать</b></span> (15) vs <span class="ru"><b>пятьдеся'т</b></span> (50): -на'дцать = teens, -десят = tens.</li>
        <li>No “and”: 125 = <span class="ru"><b>сто два'дцать пять</b></span>.</li></ul></div>
      <div class="box" style="--gc:var(--pink)"><h3>👫 1 and 2 have genders</h3>
        <p class="ex">оди'н стол · одна' кни'га · одно' окно'</p><p class="ex">два стола' · две кни'ги · два окна'</p>
        <p>Even in big numbers: <span class="ru"><b>два'дцать одна' кни'га</b></span>.</p></div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#words">Practise: Number words →</a><a class="btn btn--ghost" href="#rule">Next: The 1 · 2 · 5 rule</a></div>`);
  const upd=()=>{let n=Math.max(0,Math.min(9999,parseInt($('#nIn').value)||0));$('#nOut').innerHTML=`<span class="nw">${esc(words(n))}</span>`;};
  $('#nIn').oninput=upd;upd();
};

/* ============ THE 1-2-5 RULE ============ */
VIEWS.rule=el=>{
  const st=N.find(n=>plain(n.w)==='стол'),kn=N.find(n=>plain(n.w)==='книга'),ok=N.find(n=>plain(n.w)==='окно');
  shell(el,'The 1 · 2 · 5 rule','After a number, the noun takes one of <b>three forms</b>. Which one? Just look at the <b>last digit</b> (and watch out for 11–14).',`
    <div class="rule125">
      <div class="r1" style="--gc:var(--yellow)"><span class="n">1</span><h3>Nominative singular</h3><p>1, 21, 31, 101…</p>
        <p class="ex">оди'н <b>${st.f[0]}</b></p><p class="ex">одна' <b>${kn.f[0]}</b></p><p class="ex">два'дцать одно' <b>${ok.f[0]}</b></p></div>
      <div class="r1" style="--gc:var(--green)"><span class="n">2 3 4</span><h3>Genitive singular</h3><p>2–4, 22–24, 32–34…</p>
        <p class="ex">два <b>${st.f[1]}</b></p><p class="ex">три <b>${kn.f[1]}</b></p><p class="ex">четы'ре <b>${ok.f[1]}</b></p></div>
      <div class="r1" style="--gc:var(--pink)"><span class="n">5+</span><h3>Genitive plural</h3><p>0, 5–20, 25–30… and 11–14!</p>
        <p class="ex">пять <b>${st.f[2]}</b></p><p class="ex">оди'ннадцать <b>${kn.f[2]}</b></p><p class="ex">сто <b>${ok.f[2]}</b></p></div>
    </div>
    <h2 class="subhead">Try it: the number lab</h2>
    <div class="lab">
      <select id="lNoun">${N.map(n=>`<option value="${n.id}">${n.e} ${n.w} · ${n.en}</option>`).join('')}</select>
      <div><input type="range" id="lRange" min="0" max="125" value="22"></div>
      <div class="out" id="lOut"></div><div class="why" id="lWhy"></div>
    </div>
    <div class="duo">
      <div class="box" style="--gc:var(--blue)"><h3>🔢 The 11–14 exception</h3><p>11, 12, 13, 14 end in 1–4 but always take the <b>5+ form</b>:</p>
        <p class="ex">оди'ннадцать столо'в · двена'дцать книг · 112 рубле'й</p><p>But 21, 22 follow the last digit again: <span class="ru"><b>два'дцать два стола'</b></span>.</p></div>
      <div class="box" style="--gc:var(--lilac)"><h3>📦 мно'го, ма'ло, ско'лько</h3><p>Things you can count take the <b>genitive plural</b>, like 5+:</p>
        <p class="ex">мно'го книг · ма'ло друзе'й · Ско'лько у тебя' бра'тьев?</p>
        <p>Things you can’t count take the <b>genitive singular</b>: <span class="ru"><b>мно'го воды' · ма'ло вре'мени</b></span>.</p></div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#form">Practise: 1, 2 or 5? →</a><a class="btn btn--ghost" href="#money">Next: Money &amp; age</a></div>`);
  const upd=()=>{const n=+$('#lRange').value,no=N[+$('#lNoun').value],k=formIdx(n);
    $('#lOut').innerHTML=`<span style="font-family:var(--font-display);font-size:.8em">${n}</span> <span class="nw">${esc(words(n,no.g))}</span> <span class="nn" style="--gc:${['var(--yellow)','var(--green)','var(--pink)'][k]}">${esc(no.f[k])}</span>`;
    $('#lWhy').textContent=`${n} ${WHY[k]}`;};
  $('#lRange').oninput=upd;$('#lNoun').onchange=upd;upd();
};

/* ============ MONEY & AGE ============ */
VIEWS.money=el=>{
  shell(el,'Money &amp; age','Two places where you use the 1 · 2 · 5 rule every day: <b>prices</b> and <b>age</b>.',`
    <div class="tablewrap"><table><tr><th></th><th>1, 21, 31…</th><th>2–4, 22–24…</th><th>5–20, 25–30…</th></tr>
      <tr><td><b>roubles</b></td><td class="ru">оди'н рубль</td><td class="ru">два рубля'</td><td class="ru">пять рубле'й</td></tr>
      <tr><td><b>years (age)</b></td><td class="ru">оди'н год</td><td class="ru">два го'да</td><td class="ru">пять лет ⚠️</td></tr>
      <tr><td><b>hours</b></td><td class="ru">оди'н час</td><td class="ru">два часа'</td><td class="ru">пять часо'в</td></tr>
      <tr><td><b>people</b></td><td class="ru">оди'н челове'к</td><td class="ru">два челове'ка</td><td class="ru">пять челове'к ⚠️</td></tr>
    </table></div>
    <div class="duo">
      <div class="box" style="--gc:var(--green)"><h3>💰 In a shop</h3>
        <p class="ex">Ско'лько сто'ит? = How much is it?</p>
        <p class="ex">Ско'лько сто'ят? = How much are they?</p>
        <p class="ex">Мне, пожа'луйста, два я'блока. = Two apples, please.</p>
        <p class="ex">С вас сто два'дцать рубле'й. = That’s 120 roubles.</p>
        <p>⚠️ After <span class="ru"><b>Мне, пожа'луйста</b></span> (= give me), feminine “one” changes: <span class="ru"><b>одну' ру'чку</b></span>, <span class="ru"><b>одну' кни'гу</b></span>.</p></div>
      <div class="box" style="--gc:var(--pink)"><h3>🎂 How old are you?</h3>
        <p class="ex">Ско'лько тебе' лет? · Ско'лько вам лет?</p>
        <p class="ex">Мне два'дцать оди'н год.</p><p class="ex">Ему' три'дцать два го'да.</p><p class="ex">Ей со'рок пять лет.</p>
        <p>The person is in the <b>dative</b> (мне, тебе́, ему́, ей…). For 5+, “years” is <span class="ru"><b>лет</b></span>, a totally different word!</p></div>
    </div>
    <div class="actions"><a class="btn btn--green" href="#shop">🛒 Go shopping →</a><a class="btn btn--ghost" href="#age">Practise: How old?</a></div>`);
};

/* ============ NOUN LIST ============ */
VIEWS.nouns=el=>{
  shell(el,'Noun list','Every noun in its three forms.',`
    <div class="tablewrap"><table><tr><th></th><th>English</th><th>1 · оди́н</th><th>2 · два</th><th>5 · пять</th></tr>
    ${N.map(n=>`<tr><td>${n.e}</td><td>${esc(n.en)}</td><td class="ru">${esc(n.f[0])}</td><td class="ru">${esc(n.f[1])}</td><td class="ru">${esc(n.f[2])}</td></tr>`).join('')}
    </table></div>`);
};

/* ============ THE SHOP ============ */
VIEWS.shop=el=>{
  let wallet=store.get('wallet',10000),served=0,points=0;
  shell(el,'🛒 The shop','You’re a customer. Read your shopping list, ask for each item with the right form, then pay the total. Each customer you serve without a mistake earns ⭐!',`
    <div class="shop">
      <div class="counter"><div class="awning"></div><p class="shopname">${S("Магази'н «Всё для всех»")}</p><div id="talk"></div></div>
      <div class="side">
        <div class="wallet"><span>👛 Wallet</span><span id="wal"></span></div>
        <div class="list"><h4>📝 Shopping list</h4><ul id="list" style="margin:0;padding-left:20px"></ul></div>
        <div class="basket"><h4>🧺 Basket</h4><div id="basket"></div><div class="total"><span>Total</span><span id="tot">0 ₽</span></div></div>
        <div class="wallet" style="background:var(--yellow)"><span>⭐ Customers served</span><span id="srv">0</span></div>
      </div>
    </div>`);
  let order,step,basket,mistakes;
  const QTY=[1,1,2,2,3,3,4,5,5,6,7,10,12,21,22];
  const updSide=()=>{
    $('#wal').textContent=fmt(wallet)+' ₽';$('#srv').textContent=served;
    $('#list').innerHTML=order.map((o,k)=>`<li class="${k<step?'done':''}">${o.n.e} ${o.q} × ${esc(o.n.en)}${o.q>1?'s':''}</li>`).join('');
    $('#basket').innerHTML=basket.length?basket.map(b=>`<div class="bline"><span>${esc(b.ph)}</span><span>${fmt(b.cost)} ₽</span></div>`).join(''):'<p class="muted" style="margin:0;font-weight:600">Empty</p>';
    $('#tot').textContent=fmt(basket.reduce((s,b)=>s+b.cost,0))+' ₽';
  };
  const newCustomer=()=>{
    const items=shuffle(SHOP.filter(n=>n.price<=1500)).slice(0,rnd(2,3));
    order=items.map(n=>{let q=pick(QTY);if(n.price*q>3000)q=pick([1,2,3]);return {n,q};});
    step=0;basket=[];mistakes=0;updSide();ask();
  };
  const ask=()=>{
    const o=order[step],right=S("Мне, пожа'луйста, ")+phrase(o.q,o.n,true)+'.';
    const opts=new Set([right]);
    const k=formIdx(o.q);
    [0,1,2].filter(j=>j!==k).forEach(j=>opts.add(S("Мне, пожа'луйста, ")+words(o.q,o.n.g,true)+' '+o.n.f[j]+'.'));
    if(o.q%10===1&&o.q%100!==11&&o.n.g==='f')opts.add(S("Мне, пожа'луйста, ")+words(o.q,'f',false)+' '+o.n.f[0]+'.');
    if(o.q%10<=2&&o.q%10>0&&o.q%100!==11&&o.q%100!==12)opts.add(S("Мне, пожа'луйста, ")+words(o.q,o.n.g==='f'?'m':'f',true)+' '+(k===0&&o.n.g!=='f'?o.n.acc:o.n.f[k])+'.');
    const list=shuffle([...opts].slice(0,4));if(!list.includes(right)){list[0]=right;}
    $('#talk').innerHTML=`
      <div class="bubble" data-who="🧑‍💼">${S(step?"Что ещё?":"Здра'вствуйте! Что вам?")}</div>
      <div class="need"><span class="big">${o.n.e}</span><span class="qty">${o.q}</span><span class="en">× ${esc(o.n.en)}${o.q>1?'s':''} · ${fmt(o.n.price)} ₽ each</span></div>
      <p class="label" style="text-align:center">You say:</p>
      <div class="choices" style="grid-template-columns:1fr">${shuffle(list).map(x=>`<button class="choice" data-o="${esc(x)}" style="font-size:1.1rem;text-align:left">${esc(x)}</button>`).join('')}</div>
      <div class="feedback" id="fb" style="text-align:center"></div>
      <div class="actions" id="shopNext" style="visibility:hidden"><button class="btn btn--green" id="sn">Next →</button></div>`;
    wireChoices(b=>b.dataset.o===right,ok=>{
      if(!ok)mistakes++;
      const f=formIdx(o.q);
      $('#fb').innerHTML=ok?`${S("Ве'рно!")} ✦ ${o.q} ${WHY[f]}`:`Correct: <span class="ru">${esc(phrase(o.q,o.n,true))}</span> · ${o.q} ${WHY[f]}${f===0&&o.n.g==='f'?' (and feminine “one” → одну́ + -у)':''}`;
      basket.push({ph:`${o.n.e} ${phrase(o.q,o.n)}`,cost:o.q*o.n.price});updSide();
      $('#shopNext').style.visibility='visible';$('#sn').focus();
      $('#sn').onclick=()=>{step++;updSide();step<order.length?ask():pay();};
    },$('#talk'));
  };
  const pay=()=>{
    const total=basket.reduce((s,b)=>s+b.cost,0);
    const mode=Math.random()<.5?'read':'say';
    const wrongN=confusable(total).filter(x=>x>0);
    if(mode==='read'){
      const opts=shuffle([total,...wrongN]);
      $('#talk').innerHTML=`<div class="bubble" data-who="🧑‍💼">${S("С вас")} ${esc(rubles(total))}.</div>
        <p class="label" style="text-align:center">How much do you pay?</p>
        <div class="choices">${opts.map(x=>`<button class="choice" data-o="${x}"><span class="note-bill">💵 ${fmt(x)} ₽</span></button>`).join('')}</div>
        <div class="feedback" id="fb" style="text-align:center"></div><div class="actions" id="shopNext" style="visibility:hidden"><button class="btn btn--green" id="sn">Next customer →</button></div>`;
    }else{
      const opts=new Set([rubles(total)]);
      opts.add(`${words(total)} ${RUB.f[(formIdx(total)+1)%3]}`);
      wrongN.forEach(x=>opts.size<4&&opts.add(rubles(x)));
      $('#talk').innerHTML=`<div class="bubble me" data-who="🙋">${S("Ско'лько с меня'?")}</div>
        <div style="text-align:center;margin:10px 0 18px"><span class="price">${fmt(total)} ₽</span></div>
        <p class="label" style="text-align:center">What does the shop assistant say? “С вас…”</p>
        <div class="choices" style="grid-template-columns:1fr">${shuffle([...opts]).map(x=>`<button class="choice" data-o="${esc(x)}" style="font-size:1.1rem">${esc(x)}</button>`).join('')}</div>
        <div class="feedback" id="fb" style="text-align:center"></div><div class="actions" id="shopNext" style="visibility:hidden"><button class="btn btn--green" id="sn">Next customer →</button></div>`;
    }
    wireChoices(b=>mode==='read'?+b.dataset.o===total:b.dataset.o===rubles(total),ok=>{
      if(!ok)mistakes++;
      wallet-=total;if(wallet<0)wallet+=20000;store.set('wallet',wallet);
      if(!mistakes){served++;addXP(5);burst();}else addXP(2);
      $('#fb').innerHTML=`${ok?S("Спаси'бо! "):''}<span class="ru">${S("С вас")} ${esc(rubles(total))}</span> = ${fmt(total)} ₽ · ${WHY[formIdx(total)].split('→')[1]} → ${RUB.f[formIdx(total)]}${mistakes?'':' · ⭐ perfect customer!'}`;
      updSide();$('#shopNext').style.visibility='visible';$('#sn').focus();
      $('#sn').onclick=newCustomer;
    },$('#talk'));
  };
  newCustomer();
};

/* ============ GAME: 1, 2 or 5 ============ */
VIEWS.form=el=>{
  shell(el,'1, 2 or 5?','Look at the number (especially its last digit) and pick the noun form. Keys 1–3.',`<div class="game">${bar('fm')}<div id="fmStage"></div></div>`);
  const NUMS=[1,2,3,4,5,6,8,10,11,12,13,14,15,20,21,22,23,24,25,30,31,33,40,42,51,99,100,101,102,105,111,112,121];
  mcRound({stage:'#fmStage',id:'fm',total:15,make:()=>Array.from({length:15},()=>({n:pick(N),q:pick(NUMS)})),render:(x,i,last,answer,next)=>{
    const k=formIdx(x.q);
    $('#fmStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${x.n.e}</div>
      <p class="sentence"><span style="font-family:var(--font-display)">${x.q}</span> <span class="blank" id="blank">${esc(x.n.f[k])}</span></p>
      <p class="gloss">${esc(words(x.q,x.n.g))} … · ${esc(x.n.en)}</p>
      <div class="choices" style="grid-template-columns:repeat(3,1fr)">${x.n.f.map((f,j)=>`<button class="choice" data-j="${j}">${esc(f)}<small>${['1','2','5'][j]} · ${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>+b.dataset.j===k,ok=>{answer(ok,`${x.q} <b>${esc(x.n.f[k])}</b>`);$('#blank').classList.add('filled');$('#fb').innerHTML=`<span class="ru">${esc(phrase(x.q,x.n))}</span> · ${x.q} ${WHY[k]}`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ GAME: number words ============ */
VIEWS.words=el=>{
  let mode='d2w';
  shell(el,'Number words','Digits → words (multiple choice) or words → digits (type it). Keys 1–4.',`
    <div class="game"><div class="toggle-row"><button class="btn btn--sm" data-m="d2w">123 → words</button><button class="btn btn--sm btn--ghost" data-m="w2d">words → 123</button></div>${bar('nw')}<div id="nwStage"></div></div>`);
  const gen=()=>pick([rnd(0,20),rnd(20,99),rnd(20,99),rnd(100,999),rnd(100,999),rnd(1000,9999)]);
  const run=()=>mcRound({stage:'#nwStage',id:'nw',total:12,make:()=>Array.from({length:12},gen),render:(n,i,last,answer,next)=>{
    if(mode==='d2w'){
      const opts=shuffle([n,...confusable(n)]);
      $('#nwStage').innerHTML=`<div class="stage"><div style="margin:10px 0 22px"><span class="price">${fmt(n)}</span></div>
        <div class="choices" style="grid-template-columns:1fr">${opts.map((x,j)=>`<button class="choice" data-o="${x}" style="font-size:1.15rem">${esc(words(x))}<small>${j+1}</small></button>`).join('')}</div>
        <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
      wireChoices(b=>+b.dataset.o===n,ok=>{answer(ok,`${fmt(n)} = ${esc(words(n))}`);$('#fb').innerHTML=`${fmt(n)} = <span class="ru">${esc(words(n))}</span>`;});
    }else{
      $('#nwStage').innerHTML=`<div class="stage"><p class="sentence">${esc(words(n))}</p>
        <input class="answer" id="nwIn" type="text" inputmode="numeric" placeholder="123" autocomplete="off">
        <div class="feedback" id="fb"></div><div class="actions"><button class="btn btn--green" id="go">Check ↵</button></div>${nextBtn(last)}</div>`;
      const inp=$('#nwIn');inp.focus();let done=false;
      const check=()=>{if(done){return;}if(!inp.value.trim())return;done=true;inp.readOnly=true;const ok=parseInt(inp.value.replace(/\D/g,''))===n;
        inp.classList.add(ok?'ok':'bad');answer(ok,`${esc(words(n))} = <b>${fmt(n)}</b>`);$('#fb').innerHTML=ok?S("Ве'рно! ✦"):`Correct: <b>${fmt(n)}</b>`;
        $('#go').style.display='none';$('#nextWrap').style.visibility='visible';$('#nextBtn').focus();};
      inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();done?$('#nextBtn').click():check();}};$('#go').onclick=check;
    }
    $('#nextBtn').onclick=next;
  }});
  $$('[data-m]').forEach(b=>b.onclick=()=>{mode=b.dataset.m;$$('[data-m]').forEach(x=>x.classList.toggle('btn--ghost',x!==b));run();});
  run();keyChoices();
};

/* ============ GAME: price check (60s) ============ */
VIEWS.price=el=>{
  let timer,left,score,streak,best=store.get('priceBest',0),cur,running=false;
  shell(el,'Price check','60 seconds! Read the price tag and tap the right words, with the right form of рубль. Keys 1–3.',`<div class="game"><div id="pcStage"></div></div>`);
  const intro=()=>{$('#pcStage').innerHTML=`<div class="stage stage--pink"><div class="result__big">60s</div><p class="result__msg">${S("Гото'вы?")}</p><p><b>Best score: ${best}</b></p><div class="actions"><button class="btn btn--green" id="pcGo">Start ⚡</button></div></div>`;$('#pcGo').onclick=start;};
  const next=()=>{
    const n=pick([rnd(1,30),rnd(1,99),rnd(100,999),rnd(100,999),rnd(1000,5000)]);
    const right=rubles(n);const opts=new Set([right,`${words(n)} ${RUB.f[(formIdx(n)+pick([1,2]))%3]}`]);
    for(const x of confusable(n)){if(opts.size>=3)break;if(x>0)opts.add(rubles(x));}
    cur={n,right};
    $('#pcTag').textContent=fmt(n)+' ₽';
    $('#pcOpts').innerHTML=shuffle([...opts]).map((x,j)=>`<button class="choice" data-o="${esc(x)}" style="font-size:1.1rem">${esc(x)}<small>${j+1}</small></button>`).join('');
    $$('#pcOpts .choice').forEach(b=>b.onclick=()=>answer(b.dataset.o===cur.right));
  };
  const answer=ok=>{
    if(!running)return;if(ok){score++;streak++;}else streak=0;
    $('#pcFb').innerHTML=ok?(streak>=5?`🔥 streak ${streak}!`:'✓'):`✗ ${fmt(cur.n)} ₽ = <span class="ru">${esc(cur.right)}</span>`;
    $('#pcScore').textContent=score;next();
  };
  const start=()=>{
    left=60;score=0;streak=0;running=true;
    $('#pcStage').innerHTML=`<div class="game__bar"><span class="rush__time" id="pcTime">60</span><span class="score">Score: <span id="pcScore">0</span></span></div>
      <div class="progress" style="margin-bottom:16px"><div class="progress__fill" id="pcFill" style="width:100%;background:var(--red)"></div></div>
      <div class="stage"><div style="margin:6px 0 20px"><span class="price" id="pcTag"></span></div>
      <div class="choices" style="grid-template-columns:1fr" id="pcOpts"></div><div class="feedback" id="pcFb"></div></div>`;
    next();
    timer=setInterval(()=>{left--;$('#pcTime').textContent=left;$('#pcFill').style.width=(left/60*100)+'%';if(left<=0)end();},1000);
  };
  const end=()=>{
    clearInterval(timer);running=false;addXP(score);const nb=score>best;if(nb){best=score;store.set('priceBest',best);burst();}
    $('#pcStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${S(nb?"Но'вый реко'рд!":"Вре'мя вы'шло!")}</p><div class="result__big">${score}</div><p><b>prices read</b> · best ${best}</p><div class="actions"><button class="btn btn--green" id="pcGo">Go again ⚡</button></div></div>`;
    $('#pcGo').onclick=start;
  };
  const key=e=>{if(!running)return;const k=+e.key;if(k>=1&&k<=3){const b=$$('#pcOpts .choice')[k-1];if(b)b.click();}};
  document.addEventListener('keydown',key);
  cleanup=()=>{clearInterval(timer);running=false;document.removeEventListener('keydown',key);};
  intro();
};

/* ============ GAME: how old ============ */
VIEWS.age=el=>{
  const WHO=[["Мне","I am","🙋"],["Тебе'","you are","🫵"],["Ему'","he is","👨"],["Ей","she is","👩"],["Ба'бушке","Grandma is","👵"],["Па'пе","Dad is","👨‍🦳"],["Ко'шке","the cat is","🐱"],["Бра'ту","my brother is","👦"]].map(r=>[S(r[0]),r[1],r[2]]);
  shell(el,'How old?','год, го́да or лет? Look at the last digit of the age (and remember 11–14!). Keys 1–3.',`<div class="game">${bar('ag')}<div id="agStage"></div></div>`);
  mcRound({stage:'#agStage',id:'ag',total:12,make:()=>Array.from({length:12},()=>{const w=pick(WHO);const a=plain(w[0])==='Кошке'?rnd(1,15):plain(w[0])==='Бабушке'?rnd(60,95):rnd(1,64);return {w,a};}),render:(q,i,last,answer,next)=>{
    const k=formIdx(q.a),right=YEAR.f[k];
    $('#agStage').innerHTML=`<div class="stage"><div style="font-size:3.4rem;line-height:1">${q.w[2]}</div>
      <p class="sentence">${esc(q.w[0])} <span style="font-family:var(--font-display)">${q.a}</span> <span class="blank" id="blank">${esc(right)}</span>.</p>
      <p class="gloss">${cap(q.w[1])} ${q.a} years old. · ${esc(words(q.a))} …</p>
      <div class="choices" style="grid-template-columns:repeat(3,1fr)">${YEAR.f.map((f,j)=>`<button class="choice" data-j="${j}" style="font-size:1.8rem">${esc(f)}<small>${j+1}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>+b.dataset.j===k,ok=>{answer(ok,`${esc(q.w[0])} ${q.a} <b>${esc(right)}</b>`);$('#blank').classList.add('filled');
      $('#fb').innerHTML=`<span class="ru">${esc(q.w[0])} ${esc(words(q.a))} ${esc(right)}</span> · ${q.a} ${WHY[k]}`;});
    $('#nextBtn').onclick=next;
  }});
  keyChoices();
};

/* ============ MEMORY ============ */
VIEWS.memory=el=>{
  let cards,open,moves,matched,t0,timer,lock;
  shell(el,'Memory match','Flip two tiles at a time. Pair each number (yellow) with its words (blue).',`
    <div class="game"><div class="game__bar"><span class="score" id="mmMoves">0 moves</span><span class="score" id="mmTime" style="background:var(--blue)">0:00</span><button class="btn btn--sm btn--ghost" id="mmRe">↻ New board</button></div><div id="mmStage"></div></div>`);
  const tf=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const start=()=>{
    clearInterval(timer);
    const ns=new Set();while(ns.size<8)ns.add(pick([rnd(11,19),rnd(20,99),rnd(20,99),rnd(100,999),pick([12,20,15,50,14,40,19,90])]));
    cards=shuffle([...ns].flatMap(n=>[{k:n,t:String(n),d:1},{k:n,t:words(n),d:0}]));
    open=[];moves=0;matched=0;t0=null;lock=false;
    $('#mmMoves').textContent='0 moves';$('#mmTime').textContent='0:00';
    $('#mmStage').innerHTML=`<div class="mem">${cards.map((c,j)=>`<button class="mcard" data-j="${j}" aria-label="Hidden tile"><div class="mcard__inner"><div class="mcard__face mcard__back">✦</div><div class="mcard__face mcard__front ${c.d?'d':'w'}">${esc(c.t)}</div></div></button>`).join('')}</div>`;
    $$('.mcard').forEach(b=>b.onclick=()=>flip(b));
  };
  const flip=b=>{
    if(lock||b.classList.contains('up'))return;
    if(!t0){t0=Date.now();timer=setInterval(()=>$('#mmTime').textContent=tf(Math.floor((Date.now()-t0)/1000)),500);}
    b.classList.add('up');open.push(b);
    if(open.length===2){
      moves++;$('#mmMoves').textContent=moves+' moves';
      const [a,d]=open.map(x=>cards[+x.dataset.j]);
      if(a.k===d.k&&a.d!==d.d){open.forEach(x=>x.classList.add('done'));open=[];matched++;
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
$('#footRu').textContent=S("Раз, два, три — счита'й и покупа'й!");
go();
