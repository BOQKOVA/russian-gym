
/* ============ DATA ============
 An apostrophe ' after a Cyrillic vowel = stress mark. *word* marks the target word in an example.
 ADJECTIVES: masculine | english | adverb | adverb english | group | level | emoji | opposite | used with (o objects, p people) | example | translation | adverb example | translation */
const GROUPS = {
  quality:{ru:"оце'нка",            en:'Opinion & quality', e:'👍', c:'var(--pink)'},
  size:   {ru:"разме'р и ме'сто",   en:'Size & distance',   e:'📏', c:'var(--blue)'},
  people: {ru:"лю'ди и хара'ктер",  en:'People & character',e:'🧑', c:'var(--yellow)'},
  speed:  {ru:"вре'мя и ско'рость", en:'Time & speed',      e:'⏱️', c:'var(--lilac)'},
  weather:{ru:"пого'да и чу'вства", en:'Weather & senses',  e:'🌦️', c:'var(--green)'},
  colour: {ru:"цвета'",             en:'Colours',           e:'🎨', c:'var(--red)'}
};
const RAW_ADJ = `
хоро'ший|good|хорошо'|well|quality|A1|👍|плохо'й|op|Э'то *хоро'шая* иде'я.|That's a good idea.|Я *хорошо'* говорю' по-ру'сски.|I speak Russian well.
плохо'й|bad|пло'хо|badly|quality|A1|👎|хоро'ший|op|Сего'дня *плоха'я* пого'да.|The weather is bad today.|Я *пло'хо* сплю.|I sleep badly.
интере'сный|interesting|интере'сно|in an interesting way|quality|A1|🤩|ску'чный|p|Э'то *интере'сная* кни'га.|This is an interesting book.|Он *интере'сно* расска'зывает.|He tells stories in an interesting way.
ску'чный|boring|ску'чно|boring(ly)|quality|A1|😴|интере'сный|p|Э'то *ску'чный* фильм.|This is a boring film.|Мне *ску'чно*.|I'm bored.
краси'вый|beautiful|краси'во|beautifully|quality|A1|🌹||op|У тебя' *краси'вое* пла'тье.|You have a beautiful dress.|Она' *краси'во* поёт.|She sings beautifully.
лёгкий|easy; light|легко'|easily|quality|A1|🪶|тру'дный||Э'то *лёгкое* зада'ние.|This is an easy task.|Э'то *легко'*!|That's easy!
тру'дный|difficult|тру'дно|with difficulty|quality|A1|🧗|лёгкий||Ру'сский — *тру'дный* язы'к?|Is Russian a difficult language?|Мне *тру'дно* говори'ть по-ру'сски.|It's hard for me to speak Russian.
вку'сный|tasty|вку'сно|deliciously|quality|A1|😋|||Э'то *вку'сный* суп.|This is a tasty soup.|Ма'ма *вку'сно* гото'вит.|Mum cooks deliciously.
дорого'й|expensive; dear|до'рого|expensively|quality|A1|💎|дешёвый|o|Э'то *дорога'я* маши'на.|This is an expensive car.|В Москве' *до'рого* жить.|It's expensive to live in Moscow.
но'вый|new|||quality|A1|✨|ста'рый|o|У меня' *но'вая* рабо'та.|I have a new job.||
ста'рый|old|||quality|A1|🏚️|но'вый|op|Э'то *ста'рый* дом.|This is an old house.||
ва'жный|important|ва'жно|important(ly)|quality|A2|❗|||У меня' *ва'жная* встре'ча.|I have an important meeting.|Э'то о'чень *ва'жно*.|This is very important.
пра'вильный|correct|пра'вильно|correctly|quality|A2|✅|||Э'то *пра'вильный* отве'т.|That's the right answer.|Вы *пра'вильно* понима'ете.|You understand correctly.
дешёвый|cheap|дёшево|cheaply|quality|A2|🏷️|дорого'й|o|Я купи'л *дешёвый* телефо'н.|I bought a cheap phone.|Здесь *дёшево*.|It's cheap here.
большо'й|big|||size|A1|🐘|ма'ленький|o|У нас *больша'я* кварти'ра.|We have a big flat.||
ма'ленький|small|||size|A1|🐭|большо'й|o|У меня' *ма'ленькая* соба'ка.|I have a small dog.||
высо'кий|tall, high|высоко'|high (up)|size|A1|🦒|ни'зкий|op|Мой брат *высо'кий*.|My brother is tall.|Пти'цы лета'ют *высоко'*.|Birds fly high.
ни'зкий|low|ни'зко|low|size|A2|⬇️|высо'кий|o|Э'то *ни'зкий* стол.|This is a low table.|Самолёт лети'т *ни'зко*.|The plane is flying low.
дли'нный|long|||size|A2|📏|коро'ткий|o|Э'то *дли'нная* у'лица.|This is a long street.||
коро'ткий|short|ко'ротко|briefly|size|A2|✂️|дли'нный|o|У неё *коро'ткие* во'лосы.|She has short hair.|Скажи'те *ко'ротко*.|Say it briefly.
широ'кий|wide|широко'|widely|size|A2|↔️|у'зкий|o|Э'то *широ'кая* река'.|This is a wide river.|Он *широко'* улыба'ется.|He smiles broadly.
у'зкий|narrow|у'зко|narrowly|size|A2|🧵|широ'кий|o|Э'то *у'зкая* у'лица.|This is a narrow street.||
далёкий|far, distant|далеко'|far away|size|A2|🔭|бли'зкий||Э'то *далёкая* страна'.|This is a distant country.|Мой дом *далеко'*.|My house is far away.
бли'зкий|close, near|бли'зко|nearby|size|A2|🫂|далёкий||Он мой *бли'зкий* друг.|He's my close friend.|Метро' *бли'зко*.|The metro is close.
молодо'й|young|||people|A1|🧒|ста'рый|p|Э'то *молодо'й* учи'тель.|This is a young teacher.||
весёлый|cheerful, fun|ве'село|cheerfully; fun|people|A1|😄|гру'стный|p|У меня' *весёлая* сестра'.|I have a cheerful sister.|На пра'зднике бы'ло *ве'село*.|The party was fun.
гру'стный|sad|гру'стно|sadly|people|A1|😢|весёлый|p|Почему' ты *гру'стный*?|Why are you sad?|Мне *гру'стно*.|I feel sad.
до'брый|kind|||people|A1|🤗|злой|p|Моя' ба'бушка о'чень *до'брая*.|My grandma is very kind.||
у'мный|clever|у'мно|cleverly|people|A1|🧠|глу'пый|p|Моя' сестра' *у'мная*.|My sister is clever.|Он *у'мно* отвеча'ет.|He answers cleverly.
ру'сский|Russian|по-ру'сски|in Russian|people|A1|🪆|||Э'то *ру'сская* му'зыка.|This is Russian music.|Вы говори'те *по-ру'сски*?|Do you speak Russian?
англи'йский|English|по-англи'йски|in English|people|A1|💂|||Э'то *англи'йский* чай.|This is English tea.|Он хорошо' говори'т *по-англи'йски*.|He speaks English well.
злой|angry, mean|зло|angrily|people|A2|😠|до'брый|p|Э'то *зла'я* соба'ка.|That's a mean dog.|Он *зло* смо'трит.|He's looking angrily.
глу'пый|silly|глу'по|stupidly|people|A2|🤪|у'мный|p|Э'то *глу'пый* вопро'с.|That's a silly question.|Э'то *глу'по*.|That's silly.
счастли'вый|happy|счастли'во|happily|people|A2|🥰||p|Я о'чень *счастли'вый* челове'к.|I'm a very happy person.|Они' живу'т *счастли'во*.|They live happily.
споко'йный|calm|споко'йно|calmly|people|A2|🧘||p|У нас *споко'йный* го'род.|We have a calm town.|Говори'те *споко'йно*.|Speak calmly.
ве'жливый|polite|ве'жливо|politely|people|A2|🙇||p|Он *ве'жливый* студе'нт.|He's a polite student.|Она' *ве'жливо* отвеча'ет.|She answers politely.
си'льный|strong|си'льно|strongly, very much|people|A2|💪|сла'бый|p|Мой па'па *си'льный*.|My dad is strong.|Я *си'льно* уста'л.|I'm very tired.
сла'бый|weak|сла'бо|weakly, poorly|people|A2|🥀|си'льный|p|Э'то *сла'бый* чай.|This is weak tea.|Я *сла'бо* зна'ю матема'тику.|I know maths poorly.
голо'дный|hungry|||people|A2|🍽️||p|Я *голо'дный*!|I'm hungry!||
бы'стрый|fast|бы'стро|quickly|speed|A1|🚀|ме'дленный||Э'то *бы'страя* маши'на.|This is a fast car.|Он *бы'стро* бе'гает.|He runs fast.
ме'дленный|slow|ме'дленно|slowly|speed|A1|🐢|бы'стрый||Э'то *ме'дленный* по'езд.|This is a slow train.|Говори'те *ме'дленно*, пожа'луйста.|Please speak slowly.
пе'рвый|first|||speed|A1|🥇|после'дний||Э'то мой *пе'рвый* уро'к.|This is my first lesson.||
ра'нний|early|ра'но|early|speed|A2|🌅|по'здний||Сейча'с *ра'ннее* у'тро.|It's early morning now.|Я встаю' *ра'но*.|I get up early.
по'здний|late|по'здно|late|speed|A2|🌙|ра'нний||Был *по'здний* ве'чер.|It was late evening.|Уже' *по'здно*.|It's already late.
ча'стый|frequent|ча'сто|often|speed|A2|🔁|ре'дкий||Здесь *ча'стые* дожди'.|It rains often here.|Я *ча'сто* чита'ю.|I often read.
ре'дкий|rare|ре'дко|rarely|speed|A2|🦄|ча'стый||Э'то *ре'дкая* пти'ца.|This is a rare bird.|Мы *ре'дко* смо'трим телеви'зор.|We rarely watch TV.
после'дний|last|||speed|A2|🏁|пе'рвый||Э'то *после'дний* авто'бус.|This is the last bus.||
холо'дный|cold|хо'лодно|cold|weather|A1|🥶|жа'ркий||Сего'дня *холо'дный* день.|Today is a cold day.|На у'лице *хо'лодно*.|It's cold outside.
жа'ркий|hot (weather)|жа'рко|hot|weather|A1|🥵|холо'дный||Бы'ло *жа'ркое* ле'то.|It was a hot summer.|В Малайзи'и всегда' *жа'рко*.|It's always hot in Malaysia.
тёплый|warm|тепло'|warm|weather|A1|🧣|прохла'дный|o|У меня' *тёплая* ку'ртка.|I have a warm jacket.|Сего'дня *тепло'*.|It's warm today.
ти'хий|quiet|ти'хо|quietly|weather|A1|🤫|гро'мкий||Э'то *ти'хая* у'лица.|This is a quiet street.|Говори'те *ти'хо*!|Speak quietly!
прохла'дный|cool|прохла'дно|cool|weather|A2|🍃|тёплый||Ве'чер *прохла'дный*.|The evening is cool.|Ве'чером *прохла'дно*.|It's cool in the evening.
горя'чий|hot (to touch)|горячо'|hot|weather|A2|☕|||Я пью *горя'чий* чай.|I'm drinking hot tea.|Осторо'жно, *горячо'*!|Careful, it's hot!
со'лнечный|sunny|со'лнечно|sunny|weather|A2|☀️|||Сего'дня *со'лнечный* день.|Today is a sunny day.|Сего'дня *со'лнечно*.|It's sunny today.
гро'мкий|loud|гро'мко|loudly|weather|A2|📢|ти'хий||У него' *гро'мкий* го'лос.|He has a loud voice.|Он *гро'мко* поёт.|He sings loudly.
све'тлый|light, bright|светло'|light|weather|A2|💡|тёмный|o|У нас *све'тлая* ко'мната.|We have a bright room.|Здесь *светло'*.|It's light here.
тёмный|dark|темно'|dark|weather|A2|🌑|све'тлый|o|Э'то *тёмная* ночь.|It's a dark night.|Уже' *темно'*.|It's already dark.
чи'стый|clean|чи'сто|clean(ly)|weather|A2|🧼|гря'зный|o|Э'то *чи'стая* вода'.|This is clean water.|До'ма *чи'сто*.|It's clean at home.
гря'зный|dirty|гря'зно|dirty, muddy|weather|A2|🐷|чи'стый|o|У тебя' *гря'зные* ту'фли.|Your shoes are dirty.|На у'лице *гря'зно*.|It's muddy outside.
кра'сный|red|||colour|A1|🔴||o|Э'то *кра'сное* я'блоко.|This is a red apple.||
си'ний|dark blue|||colour|A1|🔵||o|У меня' *си'няя* ру'чка.|I have a blue pen.||
голубо'й|light blue|||colour|A1|🩵||o|Я люблю' *голубо'е* не'бо.|I love the blue sky.||
зелёный|green|||colour|A1|🟢||o|Я пью *зелёный* чай.|I drink green tea.||
жёлтый|yellow|||colour|A1|🟡||o|Э'то *жёлтое* такси'.|This is a yellow taxi.||
бе'лый|white|||colour|A1|⚪|чёрный|o|Идёт *бе'лый* снег.|White snow is falling.||
чёрный|black|||colour|A1|⚫|бе'лый|o|Я пью *чёрный* ко'фе.|I drink black coffee.||
се'рый|grey|||colour|A2|🩶||o|Сего'дня *се'рое* не'бо.|The sky is grey today.||
кори'чневый|brown|||colour|A2|🟤||o|У меня' *кори'чневые* ту'фли.|I have brown shoes.||
ора'нжевый|orange|||colour|A2|🟠||o|Я люблю' *ора'нжевый* цвет.|I love the colour orange.||
ро'зовый|pink|||colour|A2|🩷||o|У неё *ро'зовое* пла'тье.|She has a pink dress.||
фиоле'товый|purple|||colour|A2|🟣||o|Э'то *фиоле'товая* су'мка.|This is a purple bag.||
`;
/* ADVERBS ON THEIR OWN: word | english | kind | level | emoji | opposite | example | translation */
const KINDS = {time:{ru:"когда'?",en:'When?'}, place:{ru:"где?",en:'Where?'}, amount:{ru:"ско'лько? как?",en:'How much? How?'}};
const RAW_ADV = `
всегда'|always|time|A1|♾️|никогда'|Я *всегда'* пью ко'фе у'тром.|I always drink coffee in the morning.
никогда'|never|time|A1|🚫|всегда'|Я *никогда'* не опа'здываю.|I'm never late.
иногда'|sometimes|time|A1|🔀||Мы *иногда'* гуля'ем в па'рке.|We sometimes walk in the park.
сейча'с|now|time|A1|⏰||Что ты де'лаешь *сейча'с*?|What are you doing now?
сего'дня|today|time|A1|📅||*Сего'дня* понеде'льник.|Today is Monday.
за'втра|tomorrow|time|A1|➡️|вчера'|*За'втра* я рабо'таю.|Tomorrow I'm working.
вчера'|yesterday|time|A1|⬅️|за'втра|*Вчера'* бы'ло тепло'.|Yesterday it was warm.
уже'|already|time|A2|✔️||Я *уже'* до'ма.|I'm already home.
ещё|still; more|time|A2|➕||Он *ещё* спит.|He's still sleeping.
пото'м|later, then|time|A2|⏭️||Снача'ла уро'к, *пото'м* обе'д.|First the lesson, then lunch.
здесь|here|place|A1|📍|там|*Здесь* о'чень краси'во.|It's very beautiful here.
там|there|place|A1|🗺️|здесь|Мой дом *там*.|My house is over there.
до'ма|at home|place|A1|🏠||Ма'ма *до'ма*.|Mum is at home.
сле'ва|on the left|place|A2|👈|спра'ва|Банк *сле'ва*.|The bank is on the left.
спра'ва|on the right|place|A2|👉|сле'ва|Апте'ка *спра'ва*.|The pharmacy is on the right.
о'чень|very|amount|A1|💯||Я *о'чень* люблю' ко'фе.|I really love coffee.
мно'го|a lot, many|amount|A1|📚|ма'ло|У меня' *мно'го* книг.|I have a lot of books.
ма'ло|little, few|amount|A1|🤏|мно'го|У меня' *ма'ло* вре'мени.|I have little time.
вме'сте|together|amount|A2|🤝||Мы рабо'таем *вме'сте*.|We work together.
`;
/* nouns for the endings games: word | gender | kind (o object, p person) | emoji */
const RAW_N = `
дом|m|o|🏠
стол|m|o|🪵
телефо'н|m|o|📱
маши'на|f|o|🚗
су'мка|f|o|👜
ку'ртка|f|o|🧥
пла'тье|n|o|👗
окно'|n|o|🪟
пальто'|n|o|🧥
ту'фли|pl|o|👠
часы'|pl|o|⌚
брю'ки|pl|o|👖
брат|m|p|👦
па'па|m|p|👨
друг|m|p|🧑
сестра'|f|p|👧
ма'ма|f|p|👩
подру'га|f|p|👱‍♀️
де'ти|pl|p|🧒
роди'тели|pl|p|👫
лю'ди|pl|p|👥
`;
const COLOR_HEX={'красный':'#eb583d','синий':'#2b4cd9','голубой':'#3dd0eb','зелёный':'#80eb3d','жёлтый':'#ffe14d','белый':'#ffffff','чёрный':'#0d0d0d','серый':'#9a9a9a','коричневый':'#8b5a2b','оранжевый':'#ff9f1c','розовый':'#fe98c0','фиолетовый':'#9b5de5'};
/* SPOT IT sentences: *adjective* and _adverb_ */
const SPOT = [
  ["*Ма'ленькая* соба'ка _гро'мко_ ла'ет.","The small dog barks loudly."],
  ["Я _ча'сто_ чита'ю *интере'сные* кни'ги.","I often read interesting books."],
  ["*Но'вый* учи'тель _хорошо'_ объясня'ет.","The new teacher explains well."],
  ["Она' _краси'во_ поёт *ру'сские* пе'сни.","She sings Russian songs beautifully."],
  ["*Ста'рый* кот _ти'хо_ спит.","The old cat is sleeping quietly."],
  ["Мы _ве'село_ гуля'ем в *большо'м* па'рке.","We're having fun walking in the big park."]
];

/* ============ BUILD ============ */
const S=s=>s.replace(/([аеиоуыэюяё])'/gi,'$1́');
const plain=s=>s.replace(/́/g,'');
const ACC='́';
Object.values(GROUPS).forEach(g=>g.ru=S(g.ru));
Object.values(KINDS).forEach(k=>k.ru=S(k.ru));
function adjForms(m){
  const p=plain(m);
  if(/ой$/.test(p)){
    const stem=m.replace(/о́?й$/,''),last=plain(stem).slice(-1);
    return [m,stem+'а'+ACC+'я',stem+'о'+ACC+'е',stem+(/[гкхжшчщ]/.test(last)?'и':'ы')+ACC+'е'];
  }
  const stem=m.slice(0,-2),last=plain(stem).slice(-1);
  if(/ый$/.test(p))return [m,stem+'ая',stem+'ое',stem+'ые'];
  if(/[гкх]/.test(last))return [m,stem+'ая',stem+'ое',stem+'ие'];
  if(/[жшчщ]/.test(last))return [m,stem+'ая',stem+'ее',stem+'ие'];
  return [m,stem+'яя',stem+'ее',stem+'ие'];
}
const ADJ = RAW_ADJ.trim().split('\n').map((l,i)=>{
  const [w,en,adv,advEn,group,lvl,emoji,opp,use,ex,exEn,exAdv,exAdvEn]=l.split('|');
  const m=S(w);
  return {id:'a'+i,type:'adj',w:m,en,adv:S(adv),advEn,group,lvl,emoji,opp:S(opp),use,ex:S(ex),exEn,exAdv:S(exAdv||''),exAdvEn:exAdvEn||'',forms:adjForms(m)};
});
const ADV = RAW_ADV.trim().split('\n').map((l,i)=>{
  const [w,en,kind,lvl,emoji,opp,ex,exEn]=l.split('|');
  return {id:'d'+i,type:'adv',w:S(w),en,kind,lvl,emoji,opp:S(opp),ex:S(ex),exEn};
});
const ALL=[...ADJ,...ADV];
const BYID=Object.fromEntries(ALL.map(x=>[x.id,x]));
const NOUNS = RAW_N.trim().split('\n').map(l=>{const [w,g,k,e]=l.split('|');return {w:S(w),g,k,e};});
const GI={m:0,f:1,n:2,pl:3};
const Q=[S("како'й?"),S("кака'я?"),S("како'е?"),S("каки'е?")];

/* ============ HELPERS ============ */
const norm=s=>plain(s).trim().toLowerCase().replace(/ё/g,'е').replace(/[\s-]+/g,'');
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const store={
  get(k,d){try{const v=localStorage.getItem('dg_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem('dg_'+k,JSON.stringify(v))}catch(e){}}
};
let xp=store.get('xp',0), learned=new Set(store.get('learned',[])), level=store.get('level','all');
const inLevel=x=>level==='all'||x.lvl===level;
const adjPool=()=>ADJ.filter(inLevel), advPool=()=>ADV.filter(inLevel), allPool=()=>ALL.filter(inLevel);
/* render a sentence with *target* highlighted (cls) or blanked */
function sent(s,mode,cls){
  return esc(s).replace(/\*(.+?)\*/g,(_,w)=>mode==='blank'?`<span class="blank" id="blank">${w}</span>`:`<span class="${cls}">${w}</span>`);
}
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
const typeTag=x=>x.type==='adj'?'<span class="g t-adj">adjective</span>':'<span class="g t-adv">adverb</span>';
function results(el,score,total,review,again){
  const r=score/total;if(r>=.7)burst();addXP(score);
  el.innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(r)}</p><div class="result__big">${score}/${total}</div>
    ${review.length?`<p><b>Review these:</b></p><div class="review">${review.map(x=>`<div>${x}</div>`).join('')}</div>`:'<p><b>Perfect round!</b></p>'}
    <div class="actions"><button class="btn btn--ghost" id="again">New round</button></div></div>`;
  $('#again').onclick=again;
}
/* generic multiple-choice round runner */
function mcRound({stage,bar,fill,total,render}){
  let i=0,score=0,review=[];
  const next=()=>{
    $(bar).textContent=`${score} / ${total}`;$(fill).style.width=(i/total*100)+'%';
    if(i>=total){results($(stage),score,total,review,()=>{i=0;score=0;review=[];next();});return;}
    render(i,(ok,rev)=>{if(ok)score++;else if(rev)review.push(rev);$(bar).textContent=`${score} / ${total}`;},()=>{i++;next();});
  };
  next();
}
function wireChoices(isRight,onAnswer,after){
  $$('.choice').forEach(b=>b.onclick=()=>{
    if(b.disabled)return;
    const ok=isRight(b);
    $$('.choice').forEach(x=>{x.disabled=true;if(isRight(x))x.classList.add('ok');});
    if(!ok)b.classList.add('bad');
    onAnswer(ok);
    if(after)after(ok);
    $('#nextWrap').style.visibility='visible';$('#nextBtn').focus();
  });
}
const nextBtn=last=>`<div class="actions" id="nextWrap" style="visibility:hidden"><button class="btn btn--green" id="nextBtn">${last?'Results →':'Next →'}</button></div>`;

/* ============ MODAL ============ */
function openWord(x){
  const head=x.type==='adj'?GROUPS[x.group]:KINDS[x.kind];
  $('#modalBody').innerHTML=`
    <div class="detail__head ${x.type==='adj'?'t-adj':'t-adv'}">
      <span class="detail__e">${x.emoji}</span>
      <h2 class="detail__ru">${esc(x.w)}</h2>
      <p class="detail__en">${esc(x.en)}</p>
      <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">${typeTag(x)}<span class="g" style="--gc:var(--surface)">${x.lvl}</span><span class="g" style="--gc:var(--surface)">${x.type==='adj'?head.en:head.ru+' '+head.en}</span></div>
    </div>
    <div class="detail__body">
      ${x.type==='adj'?`<div><p class="label">4 forms · it agrees with the noun</p>
        <div class="forms">${x.forms.map((f,k)=>`<div><span>${Q[k]} ${['masc.','fem.','neut.','plural'][k]}</span><b>${esc(f)}</b></div>`).join('')}</div></div>`
        :`<div class="note">An adverb <b>never changes</b>: no gender, no plural.</div>`}
      ${x.type==='adj'?`<div><p class="label">Adverb</p>${x.adv?`<div class="aspect" style="font-family:var(--font-ru);font-weight:800;font-size:1.2rem">${esc(x.w)} → <span class="hl-adv">${esc(x.adv)}</span> <span class="muted" style="font-family:var(--font-body);font-size:.95rem;font-weight:600">${esc(x.advEn)}</span></div>`:'<p class="muted" style="margin:0;font-weight:600">No common adverb at this level.</p>'}</div>`:''}
      ${x.opp?`<div><p class="label">Opposite</p><span class="pill" style="font-size:1.1rem;padding:5px 14px;border:2px solid var(--ink);border-radius:999px;font-family:var(--font-ru);font-weight:800;background:var(--yellow)">↔ ${esc(x.opp)}</span></div>`:''}
      <div class="example"><p class="label">Example${x.exAdv?'s':''}</p>
        <p class="ru">${sent(x.ex,'hl',x.type==='adj'?'hl-adj':'hl-adv')}</p><p class="muted">${esc(x.exEn)}</p>
        ${x.exAdv?`<p class="ru" style="margin-top:10px">${sent(x.exAdv,'hl','hl-adv')}</p><p class="muted">${esc(x.exAdvEn)}</p>`:''}
      </div>
      <div class="actions" style="justify-content:flex-start;margin:0"><button class="btn btn--sm ${learned.has(x.id)?'btn--green':'btn--ghost'}" id="lBtn">${learned.has(x.id)?'★ Learned':'☆ Mark as learned'}</button></div>
    </div>`;
  $('#lBtn').onclick=()=>{if(learned.has(x.id))learned.delete(x.id);else{learned.add(x.id);addXP(1);}store.set('learned',[...learned]);openWord(x);if(route==='words')renderWords();};
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
const bar=(id)=>`<div class="game__bar"><div class="progress"><div class="progress__fill" id="${id}Fill"></div></div><span class="score" id="${id}Score"></span></div>`;

/* ============ HOME ============ */
const MODES=[
  ['difference','⚖️','Adjective vs adverb','The difference in one page: what each one does, how to make an adverb, and the adjective endings.','var(--yellow)'],
  ['words','📖','Word list','Every adjective with its 4 forms, adverb, opposite and examples, plus the most useful adverbs.','var(--blue)'],
  ['cards','🃏','Flashcards','Flip, guess, repeat. Adjectives and adverbs mixed together.','var(--pink)'],
  ['which','🤔','Which one?','Adjective or adverb? Complete real sentences: хоро́шая or хорошо́?','var(--green)'],
  ['agree','🧩',S("Како'й, кака'я?"),'Match the adjective ending to the noun: но́вый дом, но́вая су́мка, но́вое пла́тье.','var(--lilac)'],
  ['make','🛠️','Make adverbs','Turn the adjective into an adverb: бы́стрый → бы́стро. Watch the stress jump!','var(--red)'],
  ['opposites','↔️','Opposites','Big ↔ small, always ↔ never. Pick the opposite.','var(--yellow)'],
  ['memory','🧠','Memory match','Flip the tiles and find the pairs of opposites.','var(--blue)'],
  ['colours','🎨','Colour lab','See the colour, pick the right phrase: кра́сная маши́на or кра́сный маши́на?','var(--pink)']
];
VIEWS.home=el=>{
  const words=shuffle(ALL).slice(0,16).map(x=>x.emoji+' '+x.w);
  const track=`<div class="marquee__track" aria-hidden="true">${words.map(w=>`<span>${w}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container"><div class="hero">
    <div class="hero__media">
      <div class="hero__avatar ru">-ый</div>
      <span class="hero__sticker2">${S("како'й?")}</span>
      <span class="hero__sticker">${S("как?")} ✦ A1–A2</span>
    </div>
    <div>
      <span class="hero__chip">Boqkova Teach</span>
      <h1 class="hero__title">describe it</h1>
      <p class="hero__lead">${ADJ.length} adjectives and ${ADV.length + ADJ.filter(a=>a.adv).length} adverbs for A1–A2 Russian. Learn the difference, then play with them. <span class="ru">${S("Говори'м краси'во!")}</span></p>
      <div class="hero__stats">
        <span class="chip" style="background:var(--pink)">${ADJ.length} adjectives</span>
        <span class="chip" style="background:var(--green)">${ADV.length + ADJ.filter(a=>a.adv).length} adverbs</span>
        <span class="chip">7 games</span>
        <span class="chip" style="background:var(--yellow)">${learned.size} learned by you</span>
      </div>
      <div class="actions" style="justify-content:flex-start;margin-top:26px">
        <a class="btn" href="#difference">What’s the difference? →</a>
        <a class="btn btn--ghost" href="#words">See all words</a>
      </div>
    </div>
  </div></div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Start with <b>Adjective vs adverb</b> if the difference is new. Use the <b>A1 / A2 / All</b> switch at the top to choose the words in every game.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">${String(i+1).padStart(2,'0')}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${s}</p><span class="mode__go">${i<2?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
};

/* ============ DIFFERENCE ============ */
VIEWS.difference=el=>{
  const ex=[
    ["Она' *краси'вая*.","She is beautiful.","Она' _краси'во_ поёт.","She sings beautifully."],
    ["У нас *хоро'ший* учи'тель.","We have a good teacher.","Он _хорошо'_ объясня'ет.","He explains well."],
    ["Сего'дня *холо'дный* день.","Today is a cold day.","Сего'дня _хо'лодно_.","It's cold today."],
    ["Э'то *бы'страя* маши'на.","This is a fast car.","Она' е'дет _бы'стро_.","It goes fast."]
  ];
  const mark=s=>esc(S(s)).replace(/\*(.+?)\*/g,'<span class="hl-adj">$1</span>').replace(/_(.+?)_/g,'<span class="hl-adv">$1</span>');
  shell(el,'Adjective vs adverb','Both describe things, but they describe <b>different</b> things. Here’s the difference in five minutes, with a quick check at the end.',`
    <div class="vs">
      <div class="vs__card t-adj">
        <h2 class="vs__title">Adjective<br><span class="ru" style="font-size:1.4rem">прилага'тельное</span></h2>
        <div class="vs__q"><span>${Q.join('</span><span>')}</span></div>
        <ul>
          <li>Describes a <b>noun</b>: a person or a thing.</li>
          <li>Answers <b>what kind?</b> (${Q[0].replace('?','')}…)</li>
          <li><b>Changes</b> its ending to match the noun: gender and number.</li>
          <li class="ru"><b>но'вый</b> дом · <b>но'вая</b> кни'га · <b>но'вое</b> окно' · <b>но'вые</b> ту'фли</li>
        </ul>
      </div>
      <div class="vs__card t-adv">
        <h2 class="vs__title">Adverb<br><span class="ru" style="font-size:1.4rem">наре'чие</span></h2>
        <div class="vs__q"><span>${S("как?")}</span><span>${S("когда'?")}</span><span>${S("где?")}</span><span>${S("ско'лько?")}</span></div>
        <ul>
          <li>Describes an <b>action</b> (a verb) or the whole situation.</li>
          <li>Answers <b>how? when? where? how much?</b></li>
          <li><b>Never changes</b>: one form only.</li>
          <li class="ru">Он <b>бы'стро</b> бе'гает. · Мы <b>бы'стро</b> бе'гаем.</li>
        </ul>
      </div>
    </div>

    <h2 class="subhead">Same root, different job</h2>
    <p class="lead" style="margin-bottom:18px"><span class="hl-adj">Pink</span> = adjective (describes the noun). <span class="hl-adv">Green</span> = adverb (describes the action or the situation).</p>
    <div class="pairs">${ex.map(e=>`<div class="pair"><div><span class="ru">${mark(e[0])}</span><span class="en">${e[1]}</span></div><div><span class="ru">${mark(e[2])}</span><span class="en">${e[3]}</span></div></div>`).join('')}</div>

    <h2 class="subhead">How to make an adverb</h2>
    <div class="steps">
      <div class="step" style="--gc:var(--green)"><h4>1 · Swap the ending for -о</h4><p>Drop -ый / -ий / -ой, add <b>-о</b>.</p><p class="ru">${S("бы'стрый → бы'стро")}<br>${S("ти'хий → ти'хо")}<br>${S("плохо'й → пло'хо")}</p></div>
      <div class="step" style="--gc:var(--yellow)"><h4>2 · Watch the stress!</h4><p>Sometimes the stress jumps.</p><p class="ru">${S("хоро'ший → хорошо'")}<br>${S("холо'дный → хо'лодно")}<br>${S("тёплый → тепло'")}<br>${S("лёгкий → легко'")}</p></div>
      <div class="step" style="--gc:var(--blue)"><h4>3 · -ский → по-…-ски</h4><p>Languages work differently.</p><p class="ru">${S("ру'сский → по-ру'сски")}<br>${S("англи'йский → по-англи'йски")}</p></div>
      <div class="step" style="--gc:var(--pink)"><h4>4 · “It’s cold” = adverb</h4><p>To describe the weather or a situation, Russian uses the adverb alone.</p><p class="ru">${S("Хо'лодно.")} ${S("Ве'село!")} ${S("Мне ску'чно.")}</p></div>
    </div>

    <h2 class="subhead">Adjective endings</h2>
    <p class="lead" style="margin-bottom:18px">The dictionary form is masculine. Change the ending to match the noun.</p>
    <div class="table-wrap"><table class="endings">
      <tr><th>type</th><th>он · ${Q[0]}</th><th>${S("она'")} · ${Q[1]}</th><th>${S("оно'")} · ${Q[2]}</th><th>${S("они'")} · ${Q[3]}</th></tr>
      ${[['hard (most words)',"но'в"],['after к, г, х',"ру'сск"],['after ж, ш, ч, щ',"хоро'ш"],['soft -ний',"си'н"],["stressed -о'й","молод"]].map(([t,st],k)=>{
        const f=[["ый","ая","ое","ые"],["ий","ая","ое","ие"],["ий","ая","ее","ие"],["ий","яя","ее","ие"],["о'й","а'я","о'е","ы'е"]][k];
        return `<tr><td>${t}</td>${f.map(e=>`<td>${S(st)}<b>${S(e)}</b></td>`).join('')}</tr>`;}).join('')}
    </table></div>

    <h2 class="subhead">Quick check: spot it!</h2>
    <p class="lead" style="margin-bottom:18px">Tap the word the task asks for.</p>
    <div class="game"><div id="spotStage"></div></div>
    <div class="actions" style="margin-top:36px"><a class="btn btn--green" href="#which">Now practise: Which one? →</a><a class="btn btn--ghost" href="#words">See the word list</a></div>`);
  let i=0,score=0;
  const draw=()=>{
    if(i>=SPOT.length){burst();addXP(score);
      $('#spotStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(score/SPOT.length)}</p><div class="result__big">${score}/${SPOT.length}</div><div class="actions"><button class="btn btn--ghost" id="spotRe">Try again</button></div></div>`;
      $('#spotRe').onclick=()=>{i=0;score=0;draw();};return;}
    const [s,en]=SPOT[i],want=i%2?'adj':'adv';let tries=0,done=false;
    const toks=S(s).split(' ').map(t=>{const a=t.match(/\*(.+?)\*/),d=t.match(/_(.+?)_/);return {txt:t.replace(/[*_]/g,''),kind:a?'adj':d?'adv':''};});
    $('#spotStage').innerHTML=`<div class="stage">
      <span class="task" style="--gc:${want==='adj'?'var(--pink)':'var(--green)'}">Tap the ${want==='adj'?'ADJECTIVE':'ADVERB'} · ${i+1}/${SPOT.length}</span>
      <div class="spot">${toks.map((t,k)=>`<button class="word" data-k="${k}">${esc(t.txt)}</button>`).join('')}</div>
      <p class="gloss">${esc(en)}</p><div class="feedback" id="spotFb"></div>${nextBtn(i===SPOT.length-1)}</div>`;
    $$('.word').forEach(b=>b.onclick=()=>{
      if(done)return;const t=toks[+b.dataset.k];
      if(t.kind===want){done=true;if(!tries)score++;
        $$('.word').forEach(x=>{const k=toks[+x.dataset.k].kind;if(k)x.classList.add(k==='adj'?'is-adj':'is-adv');});
        $('#spotFb').innerHTML=want==='adv'?`${S("Ве'рно!")} It describes the action, so it's an adverb. The pink word describes a noun.`:`${S("Ве'рно!")} It describes a noun and agrees with it. The green word is the adverb.`;
        $('#nextWrap').style.visibility='visible';
      }else{tries++;b.classList.add('miss');setTimeout(()=>b.classList.remove('miss'),400);
        $('#spotFb').textContent=t.kind?'That one is the other type. Try again!':'Not that one. Try again!';}
    });
    $('#nextBtn').onclick=()=>{i++;draw();};
  };
  draw();
};

/* ============ WORD LIST ============ */
let wTab='adj',wq='';
function renderWords(){
  const q=norm(wq);
  const match=x=>!q||norm(x.w).includes(q)||x.en.toLowerCase().includes(q)||(x.adv&&norm(x.adv).includes(q));
  const tile=x=>`<button class="tile ${x.type==='adj'?'t-adj':'t-adv'}" data-id="${x.id}">
      ${learned.has(x.id)?'<span class="tile__star">★</span>':''}<span class="tile__e">${x.emoji}</span>
      <span class="tile__ru">${esc(x.w)}</span><span class="tile__en">${esc(x.en)}</span>
      <span class="tile__tags">${x.adv?`<span class="g t-adv">→ ${esc(x.adv)}</span>`:''}<span class="g" style="--gc:var(--surface)">${x.lvl}</span></span></button>`;
  let html='';
  if(wTab==='adj'){
    Object.entries(GROUPS).forEach(([k,g])=>{const arr=adjPool().filter(x=>x.group===k&&match(x));if(!arr.length)return;
      html+=`<div class="groupsec"><h2 class="grouphead"><span class="badge" style="--c:${g.c}">${g.e}</span><span class="ru">${g.ru}</span><span class="muted" style="font-size:1.1rem">${g.en}</span></h2><div class="ngrid">${arr.map(tile).join('')}</div></div>`;});
  }else{
    Object.entries(KINDS).forEach(([k,g])=>{const arr=advPool().filter(x=>x.kind===k&&match(x));if(!arr.length)return;
      html+=`<div class="groupsec"><h2 class="grouphead"><span class="badge" style="--c:var(--green)">${g.ru}</span><span class="muted" style="font-size:1.1rem">${g.en}</span></h2><div class="ngrid">${arr.map(tile).join('')}</div></div>`;});
    const made=adjPool().filter(x=>x.adv&&match(x));
    if(made.length)html+=`<div class="groupsec"><h2 class="grouphead"><span class="badge" style="--c:var(--green)">${S("как?")}</span><span class="muted" style="font-size:1.1rem">How? · adverbs made from adjectives</span></h2><div class="ngrid">${made.map(x=>`<button class="tile t-adv" data-id="${x.id}"><span class="tile__e">${x.emoji}</span><span class="tile__ru">${esc(x.adv)}</span><span class="tile__en">${esc(x.advEn)}</span><span class="tile__tags"><span class="g t-adj">← ${esc(x.w)}</span><span class="g" style="--gc:var(--surface)">${x.lvl}</span></span></button>`).join('')}</div></div>`;
  }
  $('#wlist').innerHTML=html||'<p class="lead">Nothing found. Try another word.</p>';
  $$('#wlist .tile').forEach(t=>t.onclick=()=>openWord(BYID[t.dataset.id]));
}
VIEWS.words=el=>{
  shell(el,'Word list','Tap any word to see its forms, adverb, opposite and examples. Pink = adjective, green = adverb.',`
    <div class="tabs"><button class="btn btn--sm ${wTab==='adj'?'':'btn--ghost'}" data-tab="adj">Adjectives (${adjPool().length})</button><button class="btn btn--sm ${wTab==='adv'?'btn--green':'btn--ghost'}" data-tab="adv">Adverbs (${advPool().length + adjPool().filter(a=>a.adv).length})</button></div>
    <div class="toolbar"><input class="search" id="wsearch" placeholder="Search: ${S("бы'стрый")}, always, ${S("хорошо'")}…" value="${esc(wq)}"><span class="chip" style="background:var(--yellow)">Level: ${level==='all'?'A1 + A2':level}</span></div>
    <div id="wlist"></div>`);
  $$('[data-tab]').forEach(b=>b.onclick=()=>{wTab=b.dataset.tab;VIEWS.words(el);});
  $('#wsearch').oninput=e=>{wq=e.target.value;renderWords();};
  renderWords();
};

/* ============ FLASHCARDS ============ */
VIEWS.cards=el=>{
  let deck,i,known,again,which='both';
  const reset=()=>{deck=shuffle(which==='adj'?adjPool():which==='adv'?advPool():allPool());i=0;known=0;again=0;};reset();
  shell(el,'Flashcards','Click the card (or press Space) to flip. “Got it” moves it to your learned pile; “Again” puts it back. Arrow keys work too.',`
    <div class="game">
      <div class="toggle-row"><button class="btn btn--sm" data-w="both">Mixed</button><button class="btn btn--sm btn--ghost" data-w="adj">Adjectives</button><button class="btn btn--sm btn--ghost" data-w="adv">Adverbs</button></div>
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="fcFill"></div></div><span class="score" id="fcScore"></span></div>
      <div id="fcStage"></div>
    </div>`);
  const draw=()=>{
    $('#fcScore').textContent=`✓ ${known} · ↺ ${again}`;
    $('#fcFill').style.width=(deck.length?(known/(known+deck.length-i))*100:100)+'%';
    if(i>=deck.length){burst();
      $('#fcStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${S("Коло'да про'йдена!")}</p><div class="result__big">${known}</div><p><b>cards learned</b>, ${again} sent back for another go.</p><div class="actions"><button class="btn btn--ghost" id="fcRe">Shuffle again</button><a class="btn btn--green" href="#which">Play “Which one?” →</a></div></div>`;
      $('#fcRe').onclick=()=>{reset();draw();};return;}
    const x=deck[i];
    const back=`<div class="flip__big" style="font-family:var(--font-display);font-size:1.9rem">${esc(x.en)}</div>
      ${x.type==='adj'?`<div class="mini">${x.forms.map(f=>`<span>${esc(f)}</span>`).join('')}</div>${x.adv?`<p class="ru" style="margin:0;font-weight:800">→ ${esc(x.adv)} <span class="muted" style="font-weight:600">(${esc(x.advEn)})</span></p>`:''}`
        :`<div class="mini"><span>adverb · never changes</span></div>`}`;
    $('#fcStage').innerHTML=`
      <div class="flip" id="flip" tabindex="0" role="button" aria-label="Flip card"><div class="flip__inner">
        <div class="flip__face flip__front ${x.type==='adj'?'t-adj':'t-adv'}"><div style="font-size:3rem;line-height:1">${x.emoji}</div><div class="flip__big">${esc(x.w)}</div>${typeTag(x)}<span class="flip__hint">tap to flip ↻</span></div>
        <div class="flip__face flip__back">${back}</div>
      </div></div>
      <div class="actions" style="margin-top:28px"><button class="btn btn--red" id="fcAgain">↺ Again</button><button class="btn btn--green" id="fcGot">✓ Got it</button></div>`;
    $('#flip').onclick=()=>$('#flip').classList.toggle('is-flipped');
    $('#fcAgain').onclick=()=>{again++;deck.push(x);i++;draw();};
    $('#fcGot').onclick=()=>{known++;if(!learned.has(x.id)){learned.add(x.id);store.set('learned',[...learned]);}addXP(1);i++;draw();};
  };
  $$('[data-w]').forEach(b=>b.onclick=()=>{which=b.dataset.w;$$('[data-w]').forEach(y=>y.classList.toggle('btn--ghost',y!==b));reset();draw();});
  const key=e=>{if(e.target.tagName==='INPUT')return;const f=$('#flip');if(!f)return;
    if(e.code==='Space'){e.preventDefault();f.classList.toggle('is-flipped');}else if(e.key==='ArrowRight')$('#fcGot')?.click();else if(e.key==='ArrowLeft')$('#fcAgain')?.click();};
  document.addEventListener('keydown',key);cleanup=()=>document.removeEventListener('keydown',key);
  draw();
};

/* ============ WHICH ONE? (adjective or adverb) ============ */
VIEWS.which=el=>{
  shell(el,'Which one?','Adjective or adverb? Does the gap describe a <b>noun</b> (→ adjective) or an <b>action / situation</b> (→ adverb)?',`
    <div class="game">${bar('wh')}<div id="whStage"></div></div>`);
  const src=adjPool().filter(a=>a.exAdv);
  const qs=shuffle(src.flatMap(a=>[{a,s:a.ex,en:a.exEn,kind:'adj'},{a,s:a.exAdv,en:a.exAdvEn,kind:'adv'}])).slice(0,12);
  mcRound({stage:'#whStage',bar:'#whScore',fill:'#whFill',total:qs.length,render:(i,answer,next)=>{
    const q=qs[i],right=q.s.match(/\*(.+?)\*/)[1];
    const startCap=/^\*/.test(q.s);
    const wrong=q.kind==='adj'?q.a.adv:q.a.w;
    const show=w=>startCap?cap(w):w;
    const opts=shuffle([{w:right,ok:1},{w:wrong,ok:0}]);
    $('#whStage').innerHTML=`<div class="stage">
      <p class="sentence">${sent(q.s,'blank')}</p><p class="gloss">${esc(q.en)}</p>
      <div class="choices">${opts.map(o=>`<button class="choice" data-ok="${o.ok}">${esc(show(o.w))}<small>${o.w===q.a.w||(q.kind==='adj'&&o.ok)?'adjective':'adverb'}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(i===qs.length-1)}</div>`;
    wireChoices(b=>b.dataset.ok==='1',ok=>answer(ok,`${esc(S(q.s).replace(/\*/g,''))}`),()=>{
      $('#blank').classList.add('filled');
      $('#fb').innerHTML=q.kind==='adj'?'It describes a noun, so we need the <b>adjective</b>, agreeing with that noun.':'It describes an action or the situation, so we need the <b>adverb</b>. It never changes.';
    });
    $('#nextBtn').onclick=next;
  }});
};

/* ============ ENDINGS (agreement) ============ */
VIEWS.agree=el=>{
  shell(el,S("Како'й, кака'я, како'е, каки'е?"),'Choose the adjective form that matches the noun. Look at the noun’s gender: он, она́, оно́ or они́?',`
    <div class="game">${bar('ag')}<div id="agStage"></div>
    <div class="rules">
      <div class="rule" style="--gc:var(--blue)"><b>он</b>${Q[0]} -ый / -ий / -ой</div>
      <div class="rule" style="--gc:var(--pink)"><b>${S("она'")}</b>${Q[1]} -ая / -яя</div>
      <div class="rule" style="--gc:var(--green)"><b>${S("оно'")}</b>${Q[2]} -ое / -ее</div>
      <div class="rule" style="--gc:var(--yellow)"><b>${S("они'")}</b>${Q[3]} -ые / -ие</div>
    </div></div>`);
  const adjs=adjPool().filter(a=>a.use);
  const qs=Array.from({length:12},()=>{const a=pick(adjs);const ns=NOUNS.filter(n=>a.use.includes(n.k));return {a,n:pick(ns)};});
  mcRound({stage:'#agStage',bar:'#agScore',fill:'#agFill',total:qs.length,render:(i,answer,next)=>{
    const {a,n}=qs[i],k=GI[n.g];
    $('#agStage').innerHTML=`<div class="stage">
      <div style="font-size:3.4rem;line-height:1">${n.e}</div>
      <p class="sentence"><span class="blank" id="blank">${esc(a.forms[k])}</span> ${esc(n.w)}</p>
      <p class="gloss">${esc(a.en.split(/[;,]/)[0])} · the noun is <b>${['он','она́','оно́','они́'][k]}</b></p>
      <div class="choices choices--4">${a.forms.map((f,j)=>`<button class="choice" data-j="${j}">${esc(f)}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(i===qs.length-1)}</div>`;
    wireChoices(b=>+b.dataset.j===k,ok=>answer(ok,`${esc(a.forms[k])} ${esc(n.w)}`),()=>{$('#blank').classList.add('filled');$('#fb').innerHTML=`${esc(n.w)} → ${['он','она́','оно́','они́'][k]} → ${Q[k]}`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ MAKE ADVERBS (typing) ============ */
const KB=['йцукенгшщзхъ','фывапролджэ','ячсмитьбюё-'];
VIEWS.make=el=>{
  shell(el,'Make adverbs','Type the adverb made from each adjective. You don’t need the stress mark, but check where it lands in the answer: it often moves!',`
    <div class="game">${bar('mk')}<div id="mkStage"></div></div>`);
  const qs=shuffle(adjPool().filter(a=>a.adv)).slice(0,10);
  let i=0,score=0,review=[];
  const draw=()=>{
    $('#mkScore').textContent=`${score} / ${qs.length}`;$('#mkFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){results($('#mkStage'),score,qs.length,review,()=>{i=0;score=0;review=[];draw();});return;}
    const a=qs[i];let checked=false,hints=0;
    $('#mkStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${a.emoji}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap"><span class="bigword"><span class="hl-adj" style="border-radius:14px;padding:0 12px">${esc(a.w)}</span></span><span class="opp-arrow">→</span><span class="bigword">?</span></div>
      <p class="gloss">${esc(a.en)} → ${esc(a.advEn)}</p>
      <input class="answer" id="mkIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…" lang="ru">
      <div class="feedback" id="fb"></div>
      <div class="actions"><button class="btn btn--ghost btn--sm" id="hint">💡 Hint</button><button class="btn btn--green" id="go">Check ↵</button></div>
      <div class="kbd">${KB.map((r,ri)=>`<div class="kbd__row">${[...r].map(c=>`<button class="key" data-k="${c}">${c}</button>`).join('')}${ri===2?'<button class="key key--wide" data-k="⌫">⌫</button>':''}</div>`).join('')}</div>
    </div>`;
    const inp=$('#mkIn');inp.focus();
    inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();$('#go').click();}};
    $$('.key').forEach(k=>k.onclick=()=>{
      if(checked)return;const s=inp.selectionStart??inp.value.length,e2=inp.selectionEnd??s;
      if(k.dataset.k==='⌫'){if(s===e2&&s>0){inp.value=inp.value.slice(0,s-1)+inp.value.slice(e2);inp.setSelectionRange(s-1,s-1);}else{inp.value=inp.value.slice(0,s)+inp.value.slice(e2);inp.setSelectionRange(s,s);}}
      else{inp.value=inp.value.slice(0,s)+k.dataset.k+inp.value.slice(e2);inp.setSelectionRange(s+1,s+1);}
      inp.focus();
    });
    $('#hint').onclick=()=>{if(checked)return;const p=plain(a.adv);hints=Math.min(hints+1,p.length-1);inp.value=p.slice(0,hints);inp.focus();};
    $('#go').onclick=()=>{
      if(checked){i++;draw();return;}
      if(!inp.value.trim()){inp.focus();return;}
      checked=true;inp.readOnly=true;
      const ok=norm(inp.value)===norm(a.adv);
      const sv=s=>{const k=s.indexOf(ACC);return k<0?-1:(plain(s.slice(0,k)).match(/[аеёиоуыэюя]/gi)||[]).length;};
      const moved=sv(a.w)>=0&&sv(a.adv)>=0&&sv(a.w)!==sv(a.adv);
      if(ok){score++;inp.classList.add('ok');$('#fb').innerHTML=`${S("Ве'рно!")} ✦ <span class="ru">${esc(a.adv)}</span>${moved?' · notice the stress moves!':''}`;}
      else{review.push(`${esc(a.w)} → <b>${esc(a.adv)}</b>`);inp.classList.add('bad');$('#fb').innerHTML=`Correct: <span class="ru" style="background:var(--yellow);padding:0 8px;border-radius:6px;border:2px solid var(--ink)">${esc(a.adv)}</span>`;}
      $('#go').textContent=i===qs.length-1?'Results →':'Next →';$('#mkScore').textContent=`${score} / ${qs.length}`;
    };
  };
  draw();
};

/* ============ OPPOSITES ============ */
const isOpp=(a,b)=>(a.opp&&plain(a.opp)===plain(b.w))||(b.opp&&plain(b.opp)===plain(a.w));
VIEWS.opposites=el=>{
  shell(el,'Opposites','Pick the opposite. Learning words in pairs makes them twice as easy to remember.',`
    <div class="game">${bar('op')}<div id="opStage"></div></div>`);
  const src=allPool().filter(x=>x.opp&&allPool().some(y=>plain(y.w)===plain(x.opp)));
  const qs=shuffle(src).slice(0,12);
  mcRound({stage:'#opStage',bar:'#opScore',fill:'#opFill',total:qs.length,render:(i,answer,next)=>{
    const x=qs[i];
    const right=ALL.find(y=>plain(y.w)===plain(x.opp));
    const others=shuffle(ALL.filter(y=>y.type===x.type&&y!==x&&!isOpp(x,y)&&inLevel(y))).slice(0,3);
    const opts=shuffle([right,...others]);
    $('#opStage').innerHTML=`<div class="stage">
      <div style="font-size:3rem;line-height:1">${x.emoji}</div>
      <div class="bigword">${esc(x.w)}</div><div class="opp-arrow">↔ ?</div><p class="gloss">${esc(x.en)} ↔ …</p>
      <div class="choices">${opts.map(o=>`<button class="choice" data-id="${o.id}">${esc(o.w)}<small>${esc(o.en)}</small></button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(i===qs.length-1)}</div>`;
    wireChoices(b=>b.dataset.id===right.id,ok=>answer(ok,`${esc(x.w)} ↔ <b>${esc(right.w)}</b>`),()=>{$('#fb').innerHTML=`${esc(x.w)} ↔ ${esc(right.w)} · ${esc(x.en)} ↔ ${esc(right.en)}`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ MEMORY (opposites) ============ */
VIEWS.memory=el=>{
  let cards,open,moves,matched,t0,timer,lock;
  shell(el,'Memory match','Flip two tiles at a time and find the pairs of <b>opposites</b>: большо́й ↔ ма́ленький.',`
    <div class="game"><div class="game__bar"><span class="score" id="mmMoves">0 moves</span><span class="score" id="mmTime" style="background:var(--blue)">0:00</span><button class="btn btn--sm btn--ghost" id="mmRe">↻ New board</button></div><div id="mmStage"></div></div>`);
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const pairs=()=>{
    const seen=new Set(),out=[];
    shuffle(allPool()).forEach(x=>{if(!x.opp)return;const y=allPool().find(z=>plain(z.w)===plain(x.opp));if(!y)return;
      const key=[x.id,y.id].sort().join();if(seen.has(key)||out.some(p=>p.includes(x)||p.includes(y)))return;seen.add(key);out.push([x,y]);});
    return out.slice(0,8);
  };
  const start=()=>{
    clearInterval(timer);const ps=pairs();
    cards=shuffle(ps.flatMap((p,k)=>p.map(x=>({k,x}))));
    open=[];moves=0;matched=0;t0=null;lock=false;
    $('#mmMoves').textContent='0 moves';$('#mmTime').textContent='0:00';
    $('#mmStage').innerHTML=`<div class="mem">${cards.map((c,j)=>`<button class="mcard" data-j="${j}" aria-label="Hidden tile"><div class="mcard__inner"><div class="mcard__face mcard__back">✦</div><div class="mcard__face mcard__front ru" style="background:${c.x.type==='adj'?'var(--pink)':'var(--green)'};display:flex;flex-direction:column;gap:4px"><span style="font-size:1.5em">${c.x.emoji}</span>${esc(c.x.w)}</div></div></button>`).join('')}</div>`;
    $$('.mcard').forEach(b=>b.onclick=()=>flip(b));
  };
  const flip=b=>{
    if(lock||b.classList.contains('up'))return;
    if(!t0){t0=Date.now();timer=setInterval(()=>$('#mmTime').textContent=fmt(Math.floor((Date.now()-t0)/1000)),500);}
    b.classList.add('up');open.push(b);
    if(open.length===2){
      moves++;$('#mmMoves').textContent=moves+' moves';
      const [a,d]=open.map(x=>cards[+x.dataset.j]);
      if(a.k===d.k){open.forEach(x=>x.classList.add('done'));open=[];matched++;
        if(matched===cards.length/2){clearInterval(timer);addXP(5);burst();
          setTimeout(()=>{$('#mmStage').insertAdjacentHTML('beforeend',`<div class="stage stage--pink" style="margin-top:24px"><p class="result__msg">${S("Молоде'ц!")}</p><div class="result__big">${moves}</div><p><b>moves</b> in ${$('#mmTime').textContent}</p><div class="actions"><button class="btn btn--ghost" id="mmAgain">Play again</button></div></div>`);$('#mmAgain').onclick=start;},450);}
      }else{lock=true;setTimeout(()=>{open.forEach(x=>x.classList.remove('up'));open=[];lock=false;},900);}
    }
  };
  $('#mmRe').onclick=start;cleanup=()=>clearInterval(timer);
  start();
};

/* ============ COLOUR LAB ============ */
VIEWS.colours=el=>{
  shell(el,'Colour lab','Look at the colour and the object. Pick the phrase with the right colour <b>and</b> the right ending.',`
    <div class="game">${bar('cl')}<div id="clStage"></div></div>`);
  const cols=adjPool().filter(a=>a.group==='colour');const objs=NOUNS.filter(n=>n.k==='o');
  const qs=Array.from({length:10},()=>({c:pick(cols),n:pick(objs)}));
  mcRound({stage:'#clStage',bar:'#clScore',fill:'#clFill',total:qs.length,render:(i,answer,next)=>{
    const {c,n}=qs[i],k=GI[n.g];
    const other=pick(cols.filter(x=>x!==c));
    const wrongK=pick([0,1,2,3].filter(j=>j!==k&&plain(c.forms[j])!==plain(c.forms[k])));
    const set=[{t:c.forms[k],ok:1},{t:c.forms[wrongK],ok:0},{t:other.forms[k],ok:0},{t:other.forms[(k+1)%4],ok:0}];
    const opts=shuffle(set);
    $('#clStage').innerHTML=`<div class="stage">
      <div class="swatch" style="--sw:${COLOR_HEX[plain(c.w)]}">${n.e}</div>
      <p class="gloss">${esc(c.en)} · ${esc(n.w)} (${['он','она́','оно́','они́'][k]})</p>
      <div class="choices">${opts.map(o=>`<button class="choice" data-ok="${o.ok}">${esc(o.t)} ${esc(n.w)}</button>`).join('')}</div>
      <div class="feedback" id="fb"></div>${nextBtn(i===qs.length-1)}</div>`;
    wireChoices(b=>b.dataset.ok==='1',ok=>answer(ok,`${esc(c.forms[k])} ${esc(n.w)}`),()=>{$('#fb').innerHTML=`<span class="ru">${esc(c.forms[k])} ${esc(n.w)}</span> · ${['он','она́','оно́','они́'][k]} → ${Q[k]}`;});
    $('#nextBtn').onclick=next;
  }});
};

/* ============ INIT ============ */
setLevel(level);
$('#xp').textContent='★ '+xp+' XP';
$('#footRu').textContent=S("опи'сывай мир по-ру'сски");
go();
