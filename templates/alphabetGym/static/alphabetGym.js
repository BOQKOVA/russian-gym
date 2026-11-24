
/* ============ DATA ============
 An apostrophe ' after a Cyrillic vowel = stress mark (only to help reading; Russians don't write it).
 upper | lower | letter name | Latin sound | group (1 twins, 2 tricksters, 3 new) | subgroup | how it sounds | memory hook | word1 | en1 | emoji1 | word2 | en2 | emoji2 | English look-alike */
const RAW = `
А|а|а|a|1||“a” as in “father”|Looks and sounds just like English A.|арбу'з|watermelon|🍉|ма'ма|mum|👩|
Б|б|бэ|b|3|new|“b” as in “bed”|The small б looks like the number 6.|бана'н|banana|🍌|брат|brother|👦|
В|в|вэ|v|2||“v” as in “van”|Looks like B, but it says V!|вода'|water|💧|волк|wolf|🐺|b
Г|г|гэ|g|3|new|“g” as in “go”|An upside-down L. Always a hard “g”, as in “go”.|гита'ра|guitar|🎸|гриб|mushroom|🍄|
Д|д|дэ|d|3|new|“d” as in “dog”|Looks like a little house: Д for дом (house)!|дом|house|🏠|дождь|rain|🌧️|
Е|е|е|ye|2||“ye” as in “yes”|Looks like E, but says “ye”. After a consonant it’s “e” as in “met”.|ено'т|raccoon|🦝|ель|fir tree|🌲|e
Ё|ё|ё|yo|2||“yo” as in “yoga”|E with two dots says “yo”. Ё is always stressed. Books often leave the dots out!|ёж|hedgehog|🦔|ёлка|Christmas tree|🎄|e
Ж|ж|жэ|zh|3|new|“s” in “measure”|Looks like a bug or a snowflake, and it buzzes: жжж!|жира'ф|giraffe|🦒|жук|beetle|🪲|
З|з|зэ|z|3|new|“z” as in “zoo”|Looks like the number 3.|зе'бра|zebra|🦓|зуб|tooth|🦷|
И|и|и|i|3|new|“ee” as in “meet”|A mirror image of N.|игру'шка|toy|🧸|и'мя|name|🏷️|
Й|й|и кра'ткое|y|3|new|short “y” as in “boy”|“Short И”: an И with a little hat. Usually comes after a vowel.|йо'гурт|yogurt|🥛|май|May|🌼|
К|к|ка|k|1||“k” as in “kite”|Looks and sounds just like English K.|кот|cat|🐈|ка'рта|map|🗺️|
Л|л|эль|l|3|new|“l” as in “lamp”|Like the Greek letter lambda (Λ).|ла'мпа|lamp|💡|лев|lion|🦁|
М|м|эм|m|1||“m” as in “mum”|Looks and sounds just like English M.|мо'ре|sea|🌊|метро'|metro|🚇|
Н|н|эн|n|2||“n” as in “no”|Looks like H, but it says N!|нос|nose|👃|нога'|leg|🦵|h
О|о|о|o|1||“o” as in “or” (when stressed)|Looks like O. Not stressed, it sounds like “a”: молоко' sounds like “malakó”.|окно'|window|🪟|о'стров|island|🏝️|
П|п|пэ|p|3|new|“p” as in “pen”|Like the Greek letter pi (π).|пи'цца|pizza|🍕|парк|park|🌳|
Р|р|эр|r|2||a rolled “r”, as in Spanish or Italian|Looks like P, but it says R!|ры'ба|fish|🐟|ро'за|rose|🌹|p
С|с|эс|s|2||“s” as in “sun”|Looks like C and always says S, never K.|суп|soup|🍲|со'лнце|sun|☀️|k
Т|т|тэ|t|1||“t” as in “tea”|Looks and sounds just like English T.|торт|cake|🎂|такси'|taxi|🚕|
У|у|у|u|2||“oo” as in “moon”|Looks like Y, but it says “oo”!|у'тка|duck|🦆|у'хо|ear|👂|y
Ф|ф|эф|f|3|new|“f” as in “fun”|A circle with a line through it, like a face with glasses.|футбо'л|football|⚽|флаг|flag|🚩|
Х|х|ха|kh|2||“ch” in Scottish “loch”: a throaty h|Looks like X, but it’s a breathy, throaty H!|хлеб|bread|🍞|хомя'к|hamster|🐹|ks
Ц|ц|цэ|ts|3|new|“ts” as in “cats”|A box with a little tail at the bottom.|цирк|circus|🎪|цвето'к|flower|🌸|
Ч|ч|че|ch|3|new|“ch” as in “chair”|Looks like the number 4.|чемода'н|suitcase|🧳|ча'шка|cup|☕|
Ш|ш|ша|sh|3|new|“sh” as in “shop”|Looks like a W or a comb. Shhh!|шокола'д|chocolate|🍫|ша'пка|hat|🧢|
Щ|щ|ща|shch|3|newsound|a long, soft “sh”, as in “fresh sheep”|Ш with a little tail.|щено'к|puppy|🐶|щи|cabbage soup|🥬|
Ъ|ъ|твёрдый знак|hard sign|3|sign|no sound of its own: a tiny pause|The “hard sign”. Rare: it separates a consonant from the vowel after it.|подъе'зд|building entrance|🏢|съесть|to eat up|🍽️|
Ы|ы|ы|ɨ|3|newsound|no English sound: say “i” in “bit” with your tongue pulled back|Looks like ь + I. Never starts a word.|сыр|cheese|🧀|мышь|mouse|🐭|
Ь|ь|мя'гкий знак|soft sign|3|sign|no sound of its own: it softens the consonant before it|The “soft sign”, like a little b. Makes the sound before it soft.|соль|salt|🧂|ночь|night|🌃|
Э|э|э|e|3|new|“e” as in “met”|A backwards E.|э'то|this|👉|экра'н|screen|🖥️|
Ю|ю|ю|yu|3|new|“you”|Looks like I + O, and says “yu”.|ю'бка|skirt|👗|юг|south|🧭|
Я|я|я|ya|3|new|“ya” as in “yard”|A backwards R. It’s also the word for “I”!|я'блоко|apple|🍎|я'годы|berries|🫐|
`;
const GROUPS={
  1:{name:'Twins',full:'Look & sound like English',c:'var(--green)',e:'👯',intro:'Good news first: these 5 letters look like English letters <b>and</b> sound like them. You already know them!'},
  2:{name:'Tricksters',full:'Look like English, sound different',c:'var(--pink)',e:'🎭',intro:'Careful! These letters look like English letters but make a <b>different sound</b>. They are the ones that trick beginners most often.'},
  3:{name:'Newcomers',full:'Completely new letters',c:'var(--blue)',e:'✨',intro:'These letters don’t exist in English. Most of them make sounds you already know; only a few are truly new.'}
};
const SUB={new:'New shapes, familiar sounds',newsound:'New shapes, new sounds',sign:'Silent signs'};
/* Words borrowed from English and other languages: read the Russian, guess the meaning */
const COGNATES=`
такси'|taxi|🚕
кафе'|café|🧁
метро'|metro|🚇
банк|bank|🏦
парк|park|🌳
футбо'л|football|⚽
компью'тер|computer|💻
рестора'н|restaurant|🍽️
телефо'н|telephone|📱
му'зыка|music|🎵
бана'н|banana|🍌
шокола'д|chocolate|🍫
ко'фе|coffee|☕
спорт|sport|🏅
лимо'н|lemon|🍋
суп|soup|🍲
пи'цца|pizza|🍕
до'ктор|doctor|🩺
студе'нт|student|🧑‍🎓
фо'то|photo|📷
ра'дио|radio|📻
интерне'т|internet|🌐
хокке'й|hockey|🏒
те'ннис|tennis|🎾
гита'ра|guitar|🎸
бале'т|ballet|🩰
теа'тр|theatre|🎭
зоопа'рк|zoo|🦁
жира'ф|giraffe|🦒
тигр|tiger|🐯
ла'мпа|lamp|💡
йо'га|yoga|🧘
ви'рус|virus|🦠
зе'бра|zebra|🦓
ро'бот|robot|🤖
раке'та|rocket|🚀
сала'т|salad|🥗
аэропо'рт|airport|✈️
оте'ль|hotel|🏨
кенгуру'|kangaroo|🦘
шампу'нь|shampoo|🧴
джи'нсы|jeans|👖
ке'тчуп|ketchup|🍅
Москва'|Moscow|🏙️
`;
/* first words readable with only Twins + Tricksters */
const WARMUP=`
кот|cat|🐈
ма'ма|mum|👩
торт|cake|🎂
метро'|metro|🚇
ка'рта|map|🗺️
мо'ре|sea|🌊
ко'смос|space|🌌
сок|juice|🧃
ма'ска|mask|🎭
рука'|hand|✋
`;

/* ============ BUILD ============ */
const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1́');
const plain=s=>s.replace(/́/g,'');
const L=RAW.trim().split('\n').map((l,i)=>{
  const [up,lo,name,tr,g,sub,sound,hook,w1,e1,m1,w2,e2,m2,look]=l.split('|');
  return {i,up,lo,name:S(name),tr,g:+g,sub,sound,hook:S(hook),ex:[[S(w1),e1,m1],[S(w2),e2,m2]],look};
});
const byLetter=Object.fromEntries(L.map(x=>[x.lo,x]));
const words=t=>t.trim().split('\n').map(l=>{const [w,en,e]=l.split('|');return {w:S(w),en,e};});
const COG=words(COGNATES), WARM=words(WARMUP);
/* ============ READING RULES ============
 How letters really sound in words. [brackets] = how you say it. ' = stress. */
const PRON = [
  {id:'devoice',icon:'🤫',c:'var(--blue)',title:'Voiced letters go quiet at the end',
   text:"At the end of a word, six “buzzy” (voiced) consonants lose their voice and sound like their quiet partner. So Д at the end sounds like Т, and Б sounds like П.",
   pairs:[['б','п'],['в','ф'],['г','к'],['д','т'],['ж','ш'],['з','с']],
   ex:[["хлеб","хлеп","bread"],["сад","сат","garden"],["друг","друк","friend"],["лев","леф","lion"],["нож","нош","knife"],["глаз","глас","eye"]]},
  {id:'assim',icon:'🤝',c:'var(--green)',title:'Neighbours copy each other',
   text:"When two consonants meet, the first one copies the second. Before a quiet consonant, a buzzy one goes quiet (ж → ш). Before a buzzy one, a quiet one starts to buzz (т → д). It doesn't happen before в, л, м, н, р, й.",
   ex:[["ло'жка","ло'шка","spoon"],["ска'зка","ска'ска","fairy tale"],["за'втра","за'фтра","tomorrow"],["всё","фсё","everything"],["футбо'л","фудбо'л","football"],["сде'лать","зде'лать","to do"]]},
  {id:'akanye',icon:'🅰️',c:'var(--yellow)',title:'Unstressed О sounds like А',
   text:"О only sounds like “o” when it’s stressed. Everywhere else it sounds like “a”. That’s why the stress mark matters so much!",
   ex:[["молоко'","малако'","milk"],["окно'","акно'","window"],["хорошо'","харашо'","good, well"],["Москва'","Масква'","Moscow"],["вода'","вада'","water"],["соба'ка","саба'ка","dog"]]},
  {id:'ikanye',icon:'ℹ️',c:'var(--pink)',title:'Unstressed Е and Я sound like И',
   text:"When they’re not stressed, Е and Я lose their full sound and become a short “i”.",
   ex:[["сестра'","систра'","sister"],["река'","рика'","river"],["телефо'н","тилифо'н","phone"],["язы'к","йизы'к","language"],["метро'","митро'","metro"],["весна'","висна'","spring"]]},
  {id:'soft',icon:'🪶',c:'var(--lilac)',title:'Soft letters soften the consonant',
   text:"Before Е, Ё, И, Ю, Я or Ь, a consonant becomes soft: the middle of your tongue rises towards the roof of your mouth, as if a tiny “y” was hiding inside. It can change the meaning!",
   minimal:[["брат","brother","брать","to take"],["лук","onion","люк","hatch"],["нос","nose","нёс","carried"],["ел","ate","ель","fir tree"]]},
  {id:'hard',icon:'🧱',c:'var(--red)',title:'Always hard: Ж, Ш, Ц',
   text:"Ж, Ш and Ц are always hard, even before И, Е or Ь. So after them, И sounds like Ы and Е sounds like Э. (And the opposite: Ч and Щ are always soft.)",
   ex:[["жить","жыть","to live"],["маши'на","машы'на","car"],["цирк","цырк","circus"],["шесть","шэсть","six"],["жёлтый","жо'лтый","yellow"],["цепь","цэпь","chain"]]},
  {id:'gov',icon:'🔁',c:'var(--blue)',title:'-ого / -его: Г sounds like В',
   text:"In the endings -ого and -его, the letter Г is said as “v”. You’ll meet it in very common words.",
   ex:[["его'","йиво'","his, him"],["сего'дня","сиво'дня","today"],["ничего'","ничиво'","nothing, it’s OK"],["моего'","маиво'","my (of my)"]]},
  {id:'silent',icon:'🙊',c:'var(--green)',title:'Silent letters and special words',
   text:"Some letters are written but not said, and a few everyday words are simply read differently. Learn these by heart.",
   ex:[["здра'вствуйте","здра'ствуйти","hello (the first в is silent)"],["со'лнце","со'нцэ","sun (silent л)"],["се'рдце","се'рцэ","heart (silent д)"],["пра'здник","пра'зник","holiday (silent д)"],["что","што","what (ч → ш)"],["коне'чно","кане'шна","of course (ч → ш)"],["учи'ться","учи'цца","to study (-ться → цца)"]]}
];
/* SAY IT RIGHT: word | correct pronunciation | two wrong ones | rule id */
const SAY = `
хлеб|хлеп|хлеб|хлэп|devoice
сад|сат|сад|сот|devoice
друг|друк|друг|друх|devoice
нож|нош|нож|нощ|devoice
глаз|глас|глаз|гляс|devoice
лев|леф|лев|лёф|devoice
ло'жка|ло'шка|ло'жка|ло'жга|assim
ска'зка|ска'ска|ска'зка|ска'зга|assim
за'втра|за'фтра|за'втра|за'вдра|assim
всё|фсё|всё|вшё|assim
футбо'л|фудбо'л|футбо'л|фуцбо'л|assim
сде'лать|зде'лать|сде'лать|сте'лать|assim
молоко'|малако'|молоко'|мулуко'|akanye
окно'|акно'|окно'|экно'|akanye
хорошо'|харашо'|хорошо'|хырышо'|akanye
вода'|вада'|вода'|вэда'|akanye
соба'ка|саба'ка|соба'ка|суба'ка|akanye
сестра'|систра'|сестра'|састра'|ikanye
река'|рика'|река'|рака'|ikanye
язы'к|йизы'к|йазы'к|изы'к|ikanye
телефо'н|тилифо'н|телефо'н|талафо'н|ikanye
жить|жыть|жить|щить|hard
маши'на|машы'на|маши'на|мащи'на|hard
цирк|цырк|цирк|чирк|hard
шесть|шэсть|шесть|шысть|hard
его'|йиво'|его'|йиго'|gov
сего'дня|сиво'дня|сего'дня|сиго'дня|gov
ничего'|ничиво'|ничего'|ничиго'|gov
здра'вствуйте|здра'ствуйти|здра'вствуйте|зра'вствуйти|silent
со'лнце|со'нцэ|со'лнцэ|со'лнце|silent
се'рдце|се'рцэ|се'рдцэ|се'рдце|silent
пра'здник|пра'зник|пра'здник|пра'зьник|silent
что|што|что|чта|silent
коне'чно|кане'шна|коне'чно|кане'чна|silent
учи'ться|учи'цца|учи'ться|учи'тся|silent
`;
const SAYQ = SAY.trim().split('\n').map(l=>{const [w,r,a,b,rule]=l.split('|');return {w:S(w),r:S(r),wrong:[S(a),S(b)],rule};});
PRON.forEach(p=>{if(p.ex)p.ex=p.ex.map(([w,s,en])=>[S(w),S(s),en]);if(p.minimal)p.minimal=p.minimal.map(x=>x.map(S));p.text=S(p.text);});


/* ============ HELPERS ============ */
const norm=s=>plain(s).trim().toLowerCase().replace(/ё/g,'е').replace(/\s+/g,'');
const store={get(k,d){try{const v=localStorage.getItem('ag_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('ag_'+k,JSON.stringify(v))}catch(e){}}};
let xp=store.get('xp',0), grp=store.get('grp','all');
const pool=()=>L.filter(x=>grp==='all'||x.g===+grp);
const isSign=x=>x.sub==='sign';
/* highlight a letter inside a word (keeps any stress mark with it) */
const hl=(w,lo)=>esc(w).replace(new RegExp('('+lo+'́?)','gi'),'<b>$1</b>');
const gTag=x=>`<span class="g g${x.g}">${GROUPS[x.g].e} ${GROUPS[x.g].name}</span>`;
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
const grpNote=()=>`<span class="chip" style="background:var(--yellow)">Letters: ${grp==='all'?'all 33':GROUPS[grp].name+' ('+pool().length+')'}</span>`;

/* ============ MODAL ============ */
function openLetter(x){
  $('#modalBody').innerHTML=`
    <div class="detail__head g${x.g}">
      <div style="display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap"><span class="lbig">${x.up}${x.lo}</span>
        <div><div style="font-family:var(--font-display);font-weight:800;font-size:2rem;line-height:1">${esc(x.tr)}</div><div class="ru" style="font-weight:700">name: «${esc(x.name)}»</div></div></div>
      <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">${gTag(x)}<span class="g" style="--gc:var(--surface)">letter ${x.i+1} of 33</span></div>
    </div>
    <div class="detail__body">
      <div><p class="label">How it sounds</p><p style="margin:0;font-weight:700;font-size:1.15rem">${esc(x.sound)}</p></div>
      <div class="note">💡 ${esc(x.hook)}</div>
      ${x.look?`<div class="note" style="background:var(--red)">⚠️ Trap: it looks like English <b>${x.look==='ks'?'X':x.look==='k'?'C':x.look.toUpperCase()}</b>, but it does <b>not</b> sound like it.</div>`:''}
      <div><p class="label">Examples</p><div class="exs">${x.ex.map(([w,en,e])=>`<div class="exw"><span class="e">${e}</span><span class="ru hlw">${hl(w,x.lo)}</span><span>${esc(en)}</span></div>`).join('')}</div></div>
      <div class="actions" style="justify-content:space-between;margin:0">
        <button class="btn btn--sm btn--ghost" id="prevL" ${x.i?'':'disabled'}>← ${x.i?L[x.i-1].up:''}</button>
        <button class="btn btn--sm btn--ghost" id="nextL" ${x.i<32?'':'disabled'}>${x.i<32?L[x.i+1].up:''} →</button>
      </div>
    </div>`;
  if(x.i)$('#prevL').onclick=()=>openLetter(L[x.i-1]);
  if(x.i<32)$('#nextL').onclick=()=>openLetter(L[x.i+1]);
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
function setGrp(g){grp=g;store.set('grp',g);$$('#grpSeg button').forEach(b=>b.classList.toggle('is-on',b.dataset.g===g));}
$$('#grpSeg button').forEach(b=>b.onclick=()=>{setGrp(b.dataset.g);go();});
function shell(el,title,sub,inner){el.innerHTML=S(`<section class="section"><div class="container"><h1 class="heading">${title}</h1><p class="lead">${sub}</p>${inner}</div></section>`);}

/* ============ HOME ============ */
const MODES=[
  ['lesson','📚','The lesson','Learn the letters in three groups: twins, tricksters and newcomers. Start here!','var(--yellow)'],
  ['reading','🗣️','Reading rules','How letters really sound: Д at the end says Т, unstressed О says А, silent letters and more.','var(--blue)'],
  ['alphabet','🔤','All 33 letters','The whole alphabet in order. Tap any letter for its sound, a memory hook and examples.','var(--green)'],
  ['sounds','👂','Sound quiz','See a letter, pick its sound. Watch out for the tricksters!','var(--pink)'],
  ['sort','🗂️','Group sort','Twin, trickster or newcomer? Sort each letter into its group.','var(--blue)'],
  ['read','👀','Read & guess','Read real Russian words (такси́, пи́цца, гита́ра…) and guess what they mean.','var(--lilac)'],
  ['type','⌨️','Type it','Spell English-like words in Cyrillic with the on-screen keyboard.','var(--red)'],
  ['memory','🧠','Memory match','Pair each Russian letter with its Latin sound.','var(--yellow)'],
  ['hunt','⚡','Letter hunt','60 seconds: see a sound, tap the letter. How many can you catch?','var(--green)'],
  ['sayit','🎯','Say it right','Pick how Russians really pronounce a word: хлеб is [хлеп], молоко́ is [малако́].','var(--pink)']
];
VIEWS.home=el=>{
  const track=`<div class="marquee__track" aria-hidden="true">${L.map(x=>`<span>${x.up}${x.lo}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar ru">Аа</div>
      <span class="hero__sticker2">${S("33 бу'квы")}</span>
      <span class="hero__sticker">АБВ ✦ abc</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">alphabet</h1>
      <p class="hero__lead">33 letters, 3 groups, and you already know some of them. Learn to read Russian in an afternoon. <span class="ru">${S("Чита'ем по-ру'сски!")}</span></p>
      <div class="hero__stats">
        <span class="chip g1" style="background:var(--gc)">👯 5 twins</span>
        <span class="chip g2" style="background:var(--gc)">🎭 8 tricksters</span>
        <span class="chip g3" style="background:var(--gc)">✨ 20 newcomers</span>
        <span class="chip" style="background:var(--yellow)">7 games + reading rules</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#lesson">Start the lesson →</a>
        <a class="btn btn--ghost" href="#alphabet">See all 33 letters</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Use the <b>Twins / Tricksters / New / All</b> switch at the top to practise one group of letters at a time.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">${String(i+1).padStart(2,'0')}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${s}</p><span class="mode__go">${i<3?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
};

/* ============ LESSON ============ */
VIEWS.lesson=el=>{
  const card=x=>`<button class="lcard g${x.g}" data-i="${x.i}">
    <span class="lcard__big">${x.up}${x.lo}</span>
    <span class="lcard__tr">${esc(x.tr)}${x.look?`<span class="trap">not ${x.look==='ks'?'X':x.look==='k'?'C':x.look.toUpperCase()}!</span>`:''}</span>
    <span class="lcard__s">${esc(x.sound)}</span>
    <span class="lcard__ex">${x.ex[0][2]} ${hl(x.ex[0][0],x.lo)} <span class="muted" style="font-family:var(--font-body);font-weight:600;font-size:.85rem">${esc(x.ex[0][1])}</span></span></button>`;
  const sec=g=>{const G=GROUPS[g],xs=L.filter(x=>x.g===g);
    let inner='';
    if(g===3)inner=Object.entries(SUB).map(([k,t])=>`<h3 class="subgroup">${t} <span class="muted" style="font-size:1rem">(${xs.filter(x=>x.sub===k).length})</span></h3><div class="lcards">${xs.filter(x=>x.sub===k).map(card).join('')}</div>`).join('');
    else inner=`<div class="lcards">${xs.map(card).join('')}</div>`;
    return `<div class="gsec"><div class="ghead"><span class="gbadge g${g}">${G.e} Group ${g} · ${G.name}</span><span style="font-family:var(--font-display);font-weight:800;font-size:1.3rem">${G.full}</span></div>
      <p class="lead" style="margin:6px 0 0">${G.intro}</p>${inner}</div>`;};
  shell(el,'The lesson','The Russian alphabet is called <b>Cyrillic</b>. It has 33 letters, and they fall into three groups. Learn them group by group, then read your first words.',`
    <div class="factrow">
      <div class="fact2" style="--gc:var(--yellow)"><b>33</b>letters in total</div>
      <div class="fact2" style="--gc:var(--pink)"><b>10</b>vowels: а э ы о у · я е и ё ю</div>
      <div class="fact2" style="--gc:var(--blue)"><b>21</b>consonants</div>
      <div class="fact2" style="--gc:var(--green)"><b>2</b>silent signs: ъ ь</div>
    </div>
    <div class="note" style="margin-bottom:48px;font-size:1.02rem">💡 The little mark in words like <span class="ru"><b>ма'ма</b></span> shows the <b>stress</b>, the syllable you say louder. Russians don’t write it; it’s only here to help you learn.</div>
    ${sec(1)}${sec(2)}
    <div class="gsec">
      <h2 class="subhead">🎉 You can already read these!</h2>
      <p class="lead" style="margin:0">These words use only <b>Twins</b> and <b>Tricksters</b>. Read each one aloud, then tap to check the meaning.</p>
      <div class="readme">${WARM.map((w,k)=>`<button class="rcard" data-k="${k}">${esc(w.w)}<small></small></button>`).join('')}</div>
    </div>
    ${sec(3)}
    <div class="gsec">
      <h2 class="subhead">Vowel pairs: hard and soft</h2>
      <p class="lead" style="margin:0">Each “hard” vowel has a “soft” partner that adds a “y” sound in front. After a consonant, the soft vowel makes that consonant soft.</p>
      <div class="vowels"><table>
        <tr><th>hard</th>${['а','э','ы','о','у'].map(v=>`<td>${v}<small>${byLetter[v].tr}</small></td>`).join('')}</tr>
        <tr><th>soft (y + vowel)</th>${['я','е','и','ё','ю'].map(v=>`<td>${v}<small>${byLetter[v].tr}</small></td>`).join('')}</tr>
      </table></div>
    </div>
    <div class="callout-next" style="padding:20px;border:var(--border);border-radius:20px;background:var(--blue);box-shadow:var(--shadow);margin-bottom:32px;font-weight:600"><b style="font-family:var(--font-display);font-size:1.4rem;display:block;margin-bottom:4px">🗣️ Next step: reading rules</b>Now you know each letter’s sound. But in real words some letters change: <span class="ru"><b>хлеб</b></span> is said [хлеп] and <span class="ru"><b>молоко'</b></span> is said [малако']. <a href="#reading" style="font-weight:800">Learn the 8 reading rules →</a></div>
    <div class="actions"><a class="btn btn--green" href="#sounds">Test yourself: Sound quiz →</a><a class="btn btn--ghost" href="#reading">Reading rules</a></div>`);
  $$('.lcard').forEach(b=>b.onclick=()=>openLetter(L[+b.dataset.i]));
  $$('.rcard').forEach(b=>b.onclick=()=>{const w=WARM[+b.dataset.k];b.classList.toggle('open');b.querySelector('small').textContent=b.classList.contains('open')?`${w.e} ${w.en}`:'';});
};

/* ============ ALL LETTERS ============ */
VIEWS.alphabet=el=>{
  shell(el,'All 33 letters','The alphabet in order. Colours show the group: <span class="g g1">👯 Twins</span> <span class="g g2">🎭 Tricksters</span> <span class="g g3">✨ Newcomers</span>. Tap a letter to learn it.',`
    <div class="chart">${L.map(x=>`<button class="ltile g${x.g}" data-i="${x.i}"><span class="ltile__n">${x.i+1}</span><span class="ltile__big">${x.up}${x.lo}</span><span class="ltile__tr">${esc(x.tr.replace(' sign',''))}</span></button>`).join('')}</div>`);
  $$('.ltile').forEach(b=>b.onclick=()=>openLetter(L[+b.dataset.i]));
};

/* ============ SOUND QUIZ ============ */
VIEWS.sounds=el=>{
  shell(el,'Sound quiz','What sound does the letter make? Tricksters will try to fool you with their English look-alike.',`<div class="game">${grpNote()}<div style="height:14px"></div>${bar('sq')}<div id="sqStage"></div></div>`);
  mcRound({stage:'#sqStage',id:'sq',total:12,make:()=>shuffle(pool()).slice(0,12),render:(x,i,last,answer,next)=>{
    const others=shuffle(L.filter(y=>y!==x&&y.tr!==x.tr&&isSign(y)===isSign(x))).map(y=>y.tr);
    const opts=new Set([x.tr]);if(x.look)opts.add(x.look);
    for(const o of others){if(opts.size>=4)break;opts.add(o);}
    $('#sqStage').innerHTML=`<div class="stage">
      <div class="letterbig">${x.up}${x.lo}</div>
      <div class="choices choices--4">${shuffle([...opts]).map(o=>`<button class="choice" data-o="${esc(o)}"><span class="tr">${esc(o)}</span></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===x.tr,ok=>{answer(ok,`${x.up}${x.lo} = <b>${esc(x.tr)}</b>`);
      $('#fb').innerHTML=`${x.up}${x.lo} = ${esc(x.tr)}: ${esc(x.sound)}. <span class="ru">${x.ex[0][2]} ${hl(x.ex[0][0],x.lo)}</span>`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ GROUP SORT ============ */
VIEWS.sort=el=>{
  shell(el,'Group sort','Is this letter a <b>twin</b> (looks and sounds like English), a <b>trickster</b> (looks like English, sounds different) or a <b>newcomer</b>? This game always uses all 33 letters.',`<div class="game">${bar('gs')}<div id="gsStage"></div></div>`);
  mcRound({stage:'#gsStage',id:'gs',total:15,make:()=>{const t=L.filter(x=>x.g<3),n=L.filter(x=>x.g===3);return shuffle([...shuffle(t).slice(0,9),...shuffle(n).slice(0,6)]);},render:(x,i,last,answer,next)=>{
    $('#gsStage').innerHTML=`<div class="stage">
      <div class="letterbig">${x.up}${x.lo}</div>
      <div class="choices" style="grid-template-columns:repeat(3,1fr)">${[1,2,3].map(g=>`<button class="choice g${g}" data-g="${g}" style="font-family:var(--font-display)">${GROUPS[g].e} ${GROUPS[g].name}<small>${GROUPS[g].full}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>+b.dataset.g===x.g,ok=>{answer(ok,`${x.up}${x.lo} → ${GROUPS[x.g].name}`);
      $('#fb').innerHTML=`${x.up}${x.lo} says <b>${esc(x.tr)}</b>. ${esc(x.hook)}`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ READ & GUESS ============ */
VIEWS.read=el=>{
  shell(el,'Read & guess','Many Russian words sound like English ones. Read the word letter by letter, then pick its meaning. The stress mark shows which syllable is loud.',`<div class="game">${bar('rg')}<div id="rgStage"></div></div>`);
  mcRound({stage:'#rgStage',id:'rg',total:12,make:()=>shuffle(COG).slice(0,12),render:(w,i,last,answer,next)=>{
    const opts=shuffle([w,...shuffle(COG.filter(y=>y!==w)).slice(0,3)]);
    const spell=[...plain(w.w).toLowerCase()].map(c=>byLetter[c]?byLetter[c].tr:'').join('·');
    $('#rgStage').innerHTML=`<div class="stage">
      <div class="letterbig" style="font-size:clamp(3rem,12vw,5rem)">${esc(w.w)}</div>
      <p class="gloss" id="spell">&nbsp;</p>
      <div class="choices">${opts.map(o=>`<button class="choice" data-o="${esc(o.en)}" style="font-family:var(--font-display)">${esc(o.en)}</button>`).join('')}</div>
      <div class="actions"><button class="btn btn--sm btn--ghost" id="sp">💡 Spell it out</button></div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    $('#sp').onclick=()=>$('#spell').textContent=spell;
    wireChoices(b=>b.dataset.o===w.en,ok=>{answer(ok,`${esc(w.w)} = ${esc(w.en)}`);$('#spell').textContent=spell;$('#fb').innerHTML=`${w.e} <span class="ru">${esc(w.w)}</span> = ${esc(w.en)}`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ TYPE IT ============ */
VIEWS.type=el=>{
  const KB=['йцукенгшщзхъ','фывапролджэ','ячсмитьбюё'];
  shell(el,'Type it','Write the word in Russian letters. Each key shows its Latin sound to help you. Not sure? The hint gives one letter at a time.',`<div class="game">${bar('ty')}<div id="tyStage"></div></div>`);
  const easy=COG.filter(w=>plain(w.w).length<=8&&!/[ъ]/.test(w.w));
  let qs,i,score,review;
  const reset=()=>{qs=shuffle(easy).slice(0,10);i=0;score=0;review=[];};
  const draw=()=>{
    $('#tyScore').textContent=`${score} / ${qs.length}`;$('#tyFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){results($('#tyStage'),score,qs.length,review,()=>{reset();draw();});return;}
    const w=qs[i],target=plain(w.w).toLowerCase();let checked=false,hints=0;
    $('#tyStage').innerHTML=`<div class="stage">
      <div style="font-size:3.6rem;line-height:1">${w.e}</div>
      <div class="bigword" style="font-family:var(--font-display)">${esc(w.en)}</div>
      <p class="gloss">${target.length} letters</p>
      <input class="answer" id="tyIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…" lang="ru">
      <div class="feedback" id="fb"></div>
      <div class="actions"><button class="btn btn--ghost btn--sm" id="hint">💡 Hint</button><button class="btn btn--green" id="go">Check ↵</button></div>
      <div class="kbd">${KB.map((r,ri)=>`<div class="kbd__row">${[...r].map(c=>`<button class="key" data-k="${c}">${c}<small>${byLetter[c].tr.replace(' sign','').replace('hard','ъ').replace('soft','ь')}</small></button>`).join('')}${ri===2?'<button class="key key--wide" data-k="⌫">⌫</button>':''}</div>`).join('')}</div>
    </div>`;
    const inp=$('#tyIn');inp.focus();
    inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();$('#go').click();}};
    $$('.key').forEach(k=>k.onclick=()=>{
      if(checked)return;const s=inp.selectionStart??inp.value.length,e2=inp.selectionEnd??s;
      if(k.dataset.k==='⌫'){if(s===e2&&s>0){inp.value=inp.value.slice(0,s-1)+inp.value.slice(e2);inp.setSelectionRange(s-1,s-1);}else{inp.value=inp.value.slice(0,s)+inp.value.slice(e2);inp.setSelectionRange(s,s);}}
      else{inp.value=inp.value.slice(0,s)+k.dataset.k+inp.value.slice(e2);inp.setSelectionRange(s+1,s+1);}
      inp.focus();
    });
    $('#hint').onclick=()=>{if(checked)return;hints=Math.min(hints+1,target.length-1);inp.value=target.slice(0,hints);inp.focus();};
    $('#go').onclick=()=>{
      if(checked){i++;draw();return;}
      if(!inp.value.trim()){inp.focus();return;}
      checked=true;inp.readOnly=true;const ok=norm(inp.value)===norm(w.w);
      if(ok){score++;inp.classList.add('ok');$('#fb').innerHTML=`${S("Ве'рно!")} ✦ <span class="ru">${esc(w.w)}</span>`;}
      else{review.push(`${w.e} ${esc(w.en)} → <b>${esc(w.w)}</b>`);inp.classList.add('bad');$('#fb').innerHTML=`Correct: <span class="ru" style="background:var(--yellow);padding:0 8px;border-radius:6px;border:2px solid var(--ink)">${esc(w.w)}</span>`;}
      $('#go').textContent=i===qs.length-1?'Results →':'Next →';$('#tyScore').textContent=`${score} / ${qs.length}`;
    };
  };
  reset();draw();
};

/* ============ MEMORY ============ */
VIEWS.memory=el=>{
  let cards,open,moves,matched,t0,timer,lock;
  shell(el,'Memory match','Flip two tiles at a time. Pair each Russian letter (blue) with its Latin sound (yellow).',`
    <div class="game">${grpNote()}<div style="height:14px"></div><div class="game__bar"><span class="score" id="mmMoves">0 moves</span><span class="score" id="mmTime" style="background:var(--blue)">0:00</span><button class="btn btn--sm btn--ghost" id="mmRe">↻ New board</button></div><div id="mmStage"></div></div>`);
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const start=()=>{
    clearInterval(timer);
    let src=pool().filter(x=>!isSign(x));if(src.length<6)src=src.concat(shuffle(L.filter(x=>!isSign(x)&&!src.includes(x))).slice(0,8-src.length));
    const seen=new Set(),ls=[];for(const x of shuffle(src)){if(!seen.has(x.tr)){seen.add(x.tr);ls.push(x);}if(ls.length===8)break;}
    cards=shuffle(ls.flatMap(x=>[{k:x.i,t:x.up+x.lo,c:1},{k:x.i,t:x.tr,c:0}]));
    open=[];moves=0;matched=0;t0=null;lock=false;
    $('#mmMoves').textContent='0 moves';$('#mmTime').textContent='0:00';
    const cols=cards.length>=16?4:4;
    $('#mmStage').innerHTML=`<div class="mem" style="grid-template-columns:repeat(${cols},1fr)">${cards.map((c,j)=>`<button class="mcard" data-j="${j}" aria-label="Hidden tile"><div class="mcard__inner"><div class="mcard__face mcard__back">✦</div><div class="mcard__face mcard__front ${c.c?'cyr':'lat'}">${esc(c.t)}</div></div></button>`).join('')}</div>`;
    $$('.mcard').forEach(b=>b.onclick=()=>flip(b));
  };
  const flip=b=>{
    if(lock||b.classList.contains('up'))return;
    if(!t0){t0=Date.now();timer=setInterval(()=>$('#mmTime').textContent=fmt(Math.floor((Date.now()-t0)/1000)),500);}
    b.classList.add('up');open.push(b);
    if(open.length===2){
      moves++;$('#mmMoves').textContent=moves+' moves';
      const [a,d]=open.map(x=>cards[+x.dataset.j]);
      if(a.k===d.k&&a.c!==d.c){open.forEach(x=>x.classList.add('done'));open=[];matched++;
        if(matched===cards.length/2){clearInterval(timer);addXP(5);burst();
          setTimeout(()=>{$('#mmStage').insertAdjacentHTML('beforeend',`<div class="stage stage--pink" style="margin-top:24px"><p class="result__msg">${S("Молоде'ц!")}</p><div class="result__big">${moves}</div><p><b>moves</b> in ${$('#mmTime').textContent}</p><div class="actions"><button class="btn btn--ghost" id="mmAgain">Play again</button></div></div>`);$('#mmAgain').onclick=start;},450);}
      }else{lock=true;setTimeout(()=>{open.forEach(x=>x.classList.remove('up'));open=[];lock=false;},850);}
    }
  };
  $('#mmRe').onclick=start;cleanup=()=>clearInterval(timer);
  start();
};

/* ============ LETTER HUNT (60s) ============ */
VIEWS.hunt=el=>{
  let timer,left,score,streak,best=store.get('huntBest',0),cur,running=false;
  shell(el,'Letter hunt','60 seconds! You see a sound: tap the letter that makes it. Tricksters are hiding among the options…',`<div class="game">${grpNote()}<div style="height:14px"></div><div id="hStage"></div></div>`);
  const intro=()=>{$('#hStage').innerHTML=`<div class="stage stage--pink"><div class="result__big">60s</div><p class="result__msg">${S("Гото'вы?")}</p><p><b>Best score: ${best}</b></p><div class="actions"><button class="btn btn--green" id="hGo">Start ⚡</button></div></div>`;$('#hGo').onclick=start;};
  const next=()=>{
    const src=pool().filter(x=>!isSign(x));cur=pick(src);
    const tricky=L.filter(y=>y.look===cur.tr||(cur.look&&y.tr===cur.look));
    const opts=new Set([cur]);tricky.forEach(t=>opts.size<3&&opts.add(t));
    for(const y of shuffle(L.filter(y=>!isSign(y)&&y.tr!==cur.tr))){if(opts.size>=6)break;opts.add(y);}
    $('#hSound').textContent=cur.tr;
    $('#hGrid').innerHTML=shuffle([...opts]).map(y=>`<button class="choice" data-i="${y.i}">${y.up}${y.lo}</button>`).join('');
    $$('#hGrid .choice').forEach(b=>b.onclick=()=>answer(L[+b.dataset.i]));
  };
  const answer=y=>{
    if(!running)return;const good=y.tr===cur.tr;
    if(good){score++;streak++;}else streak=0;
    $('#hFb').innerHTML=good?(streak>=5?`🔥 streak ${streak}!`:'✓'):`✗ “${esc(cur.tr)}” is <b class="ru">${cur.up}${cur.lo}</b>${y.look?` · ${y.up} only looks like English ${y.look==='ks'?'X':y.look==='k'?'C':y.look.toUpperCase()}!`:''}`;
    $('#hScore').textContent=score;next();
  };
  const start=()=>{
    left=60;score=0;streak=0;running=true;
    $('#hStage').innerHTML=`<div class="game__bar"><span class="rush__time" id="hTime">60</span><span class="score">Score: <span id="hScore">0</span></span></div>
      <div class="progress" style="margin-bottom:16px"><div class="progress__fill" id="hFill" style="width:100%;background:var(--red)"></div></div>
      <div class="stage"><p class="gloss" style="margin:0 0 8px">Which letter says…</p><div class="sound" id="hSound"></div>
      <div class="feedback" id="hFb"></div><div class="grid6" id="hGrid"></div></div>`;
    next();
    timer=setInterval(()=>{left--;$('#hTime').textContent=left;$('#hFill').style.width=(left/60*100)+'%';if(left<=0)end();},1000);
  };
  const end=()=>{
    clearInterval(timer);running=false;addXP(score);const nb=score>best;if(nb){best=score;store.set('huntBest',best);burst();}
    $('#hStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${S(nb?"Но'вый реко'рд!":"Вре'мя вы'шло!")}</p><div class="result__big">${score}</div><p><b>letters caught</b> · best ${best}</p><div class="actions"><button class="btn btn--green" id="hGo">Go again ⚡</button></div></div>`;
    $('#hGo').onclick=start;
  };
  cleanup=()=>{clearInterval(timer);running=false;};
  intro();
};

/* ============ READING RULES PAGE ============ */
const ipa=s=>`<span class="ipa">[${esc(s)}]</span>`;
VIEWS.reading=el=>{
  const block=(p,k)=>`<div class="rr" style="--gc:${p.c}">
    <div class="rr__head"><span class="rr__num">${k+1}</span><span class="rr__icon">${p.icon}</span><h3>${esc(p.title)}</h3></div>
    <p class="rr__text">${esc(p.text)}</p>
    ${p.pairs?`<div class="pairsrow">${p.pairs.map(([a,b])=>`<span class="vpair"><b>${a}</b><i>→</i><b>${b}</b></span>`).join('')}</div>`:''}
    ${p.ex?`<div class="exgrid">${p.ex.map(([w,s,en])=>`<button class="excard" data-s="${esc(s)}"><span class="ru excard__w">${esc(w)}</span><span class="excard__s">tap to see how it’s said 👀</span><span class="excard__en">${esc(en)}</span></button>`).join('')}</div>`:''}
    ${p.minimal?`<div class="mingrid">${p.minimal.map(([h,he,s,se])=>`<div class="minpair"><div><span class="ru">${esc(h)}</span><small>hard · ${esc(he)}</small></div><i>≠</i><div class="soft"><span class="ru">${esc(s)}</span><small>soft · ${esc(se)}</small></div></div>`).join('')}</div>`:''}
  </div>`;
  shell(el,'Reading rules','Russian spelling is <b>almost</b> phonetic: you mostly say what you see. But in real speech some letters change their sound. Here are the 8 rules that matter most. Sounds in <span class="ipa">[brackets]</span> show how a word is really said; tap any example to reveal it.',`
    <div class="note" style="margin-bottom:36px;font-size:1.02rem">💡 Don’t panic: Russians understand you even if you read every letter exactly as written. These rules will just make you sound much more natural.</div>
    <div class="rrlist">${PRON.map(block).join('')}</div>
    <div class="stage" style="margin-top:20px;text-align:left">
      <h2 class="subhead" style="margin-bottom:14px">📋 Cheat sheet</h2>
      <div class="cheat">
        <div><b>End of word</b><span class="ru">б→п · в→ф · г→к · д→т · ж→ш · з→с</span></div>
        <div><b>Not stressed</b><span class="ru">о → а · е, я → и</span></div>
        <div><b>Always hard</b><span class="ru">жи → [жы] · ши → [шы] · це → [цэ]</span></div>
        <div><b>Special</b><span class="ru">-ого → [-ово] · что → [што] · -ться → [-цца]</span></div>
      </div>
    </div>
    <div class="actions" style="margin-top:30px"><a class="btn btn--green" href="#sayit">Practise: Say it right →</a><a class="btn btn--ghost" href="#lesson">Back to the lesson</a></div>`);
  $$('.excard').forEach(b=>b.onclick=()=>{b.classList.toggle('open');b.querySelector('.excard__s').innerHTML=b.classList.contains('open')?ipa(b.dataset.s):'tap to see how it’s said 👀';});
};

/* ============ SAY IT RIGHT (game) ============ */
VIEWS.sayit=el=>{
  shell(el,'Say it right','How do Russians really say this word? Pick the pronunciation in [brackets]. After each answer you’ll see which reading rule is at work.',`<div class="game">${bar('si')}<div id="siStage"></div></div>`);
  mcRound({stage:'#siStage',id:'si',total:12,make:()=>{const one=PRON.filter(p=>SAYQ.some(q=>q.rule===p.id)).map(p=>pick(SAYQ.filter(q=>q.rule===p.id)));const rest=shuffle(SAYQ.filter(q=>!one.includes(q)));return shuffle([...one,...rest.slice(0,12-one.length)]);},
  render:(q,i,last,answer,next)=>{
    const R=PRON.find(p=>p.id===q.rule);
    const opts=shuffle([q.r,...q.wrong]);
    $('#siStage').innerHTML=`<div class="stage">
      <span class="g" style="--gc:var(--surface)">written</span>
      <div class="letterbig" style="font-size:clamp(3rem,12vw,5rem)">${esc(q.w)}</div>
      <p class="gloss">How do you say it?</p>
      <div class="choices" style="grid-template-columns:repeat(3,1fr)">${opts.map(o=>`<button class="choice" data-o="${esc(o)}">[${esc(o)}]</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(last)}</div>`;
    wireChoices(b=>b.dataset.o===q.r,ok=>{answer(ok,`${esc(q.w)} → [${esc(q.r)}]`);
      $('#fb').innerHTML=`${R.icon} <b>${esc(R.title)}.</b> <span class="ru">${esc(q.w)}</span> → ${ipa(q.r)}`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ INIT ============ */
setGrp(grp);
$('#xp').textContent='★ '+xp+' XP';
$('#footRu').textContent=S("от А до Я");
go();
