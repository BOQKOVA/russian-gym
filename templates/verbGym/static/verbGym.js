
/* ============ DATA ============
 inf | english | я ты он мы вы они | past (m, or m,f,pl) | perfective | group | level | example RU | example EN */
const RAW = `
де'лать|to do, to make|де'лаю де'лаешь де'лает де'лаем де'лаете де'лают|де'лал|сде'лать|I|A1|Что ты де'лаешь?|What are you doing?
чита'ть|to read|чита'ю чита'ешь чита'ет чита'ем чита'ете чита'ют|чита'л|прочита'ть|I|A1|Я чита'ю кни'гу.|I'm reading a book.
знать|to know|зна'ю зна'ешь зна'ет зна'ем зна'ете зна'ют|знал,зна'ла,зна'ли||I|A1|Я не зна'ю.|I don't know.
рабо'тать|to work|рабо'таю рабо'таешь рабо'тает рабо'таем рабо'таете рабо'тают|рабо'тал|порабо'тать|I|A1|Где вы рабо'таете?|Where do you work?
понима'ть|to understand|понима'ю понима'ешь понима'ет понима'ем понима'ете понима'ют|понима'л|поня'ть|I|A1|Ты понима'ешь меня'?|Do you understand me?
слу'шать|to listen|слу'шаю слу'шаешь слу'шает слу'шаем слу'шаете слу'шают|слу'шал|послу'шать|I|A1|Мы слу'шаем му'зыку.|We're listening to music.
отдыха'ть|to rest, relax|отдыха'ю отдыха'ешь отдыха'ет отдыха'ем отдыха'ете отдыха'ют|отдыха'л|отдохну'ть|I|A1|Ле'том мы отдыха'ем на мо'ре.|In summer we holiday at the sea.
гуля'ть|to walk, stroll|гуля'ю гуля'ешь гуля'ет гуля'ем гуля'ете гуля'ют|гуля'л|погуля'ть|I|A1|Они' гуля'ют в па'рке.|They're walking in the park.
игра'ть|to play|игра'ю игра'ешь игра'ет игра'ем игра'ете игра'ют|игра'л|сыгра'ть|I|A1|Он игра'ет в футбо'л.|He plays football.
ду'мать|to think|ду'маю ду'маешь ду'мает ду'маем ду'маете ду'мают|ду'мал|поду'мать|I|A1|Я ду'маю, э'то пра'вда.|I think it's true.
покупа'ть|to buy|покупа'ю покупа'ешь покупа'ет покупа'ем покупа'ете покупа'ют|покупа'л|купи'ть|I|A1|Ма'ма покупа'ет хлеб.|Mum is buying bread.
за'втракать|to have breakfast|за'втракаю за'втракаешь за'втракает за'втракаем за'втракаете за'втракают|за'втракал|поза'втракать|I|A1|Я за'втракаю до'ма.|I have breakfast at home.
обе'дать|to have lunch|обе'даю обе'даешь обе'дает обе'даем обе'даете обе'дают|обе'дал|пообе'дать|I|A1|Где ты обе'даешь?|Where do you have lunch?
у'жинать|to have dinner|у'жинаю у'жинаешь у'жинает у'жинаем у'жинаете у'жинают|у'жинал|поу'жинать|I|A1|Мы у'жинаем в семь.|We have dinner at seven.
изуча'ть|to study (a subject)|изуча'ю изуча'ешь изуча'ет изуча'ем изуча'ете изуча'ют|изуча'л|изучи'ть|I|A1|Я изуча'ю ру'сский язы'к.|I'm studying Russian.
пла'вать|to swim|пла'ваю пла'ваешь пла'вает пла'ваем пла'ваете пла'вают|пла'вал|попла'вать|I|A1|Де'ти пла'вают в мо'ре.|The kids swim in the sea.
отвеча'ть|to answer|отвеча'ю отвеча'ешь отвеча'ет отвеча'ем отвеча'ете отвеча'ют|отвеча'л|отве'тить|I|A2|Студе'нты отвеча'ют на вопро'сы.|The students answer questions.
спра'шивать|to ask (a question)|спра'шиваю спра'шиваешь спра'шивает спра'шиваем спра'шиваете спра'шивают|спра'шивал|спроси'ть|I|A2|Почему' ты спра'шиваешь?|Why are you asking?
начина'ть|to begin, start|начина'ю начина'ешь начина'ет начина'ем начина'ете начина'ют|начина'л|нача'ть|I|A2|Мы начина'ем уро'к.|We're starting the lesson.
открыва'ть|to open|открыва'ю открыва'ешь открыва'ет открыва'ем открыва'ете открыва'ют|открыва'л|откры'ть|I|A2|Я открыва'ю окно'.|I'm opening the window.
закрыва'ть|to close|закрыва'ю закрыва'ешь закрыва'ет закрыва'ем закрыва'ете закрыва'ют|закрыва'л|закры'ть|I|A2|Она' закрыва'ет дверь.|She's closing the door.
помога'ть|to help|помога'ю помога'ешь помога'ет помога'ем помога'ете помога'ют|помога'л|помо'чь|I|A2|Брат помога'ет мне.|My brother helps me.
опа'здывать|to be late|опа'здываю опа'здываешь опа'здывает опа'здываем опа'здываете опа'здывают|опа'здывал|опозда'ть|I|A2|Извини'те, я опа'здываю!|Sorry, I'm running late!
расска'зывать|to tell (a story)|расска'зываю расска'зываешь расска'зывает расска'зываем расска'зываете расска'зывают|расска'зывал|рассказа'ть|I|A2|Ба'бушка расска'зывает ска'зку.|Grandma is telling a fairy tale.
пока'зывать|to show|пока'зываю пока'зываешь пока'зывает пока'зываем пока'зываете пока'зывают|пока'зывал|показа'ть|I|A2|Гид пока'зывает го'род.|The guide is showing the city.
забыва'ть|to forget|забыва'ю забыва'ешь забыва'ет забыва'ем забыва'ете забыва'ют|забыва'л|забы'ть|I|A2|Я всегда' забыва'ю ключи'.|I always forget my keys.
мечта'ть|to dream (of)|мечта'ю мечта'ешь мечта'ет мечта'ем мечта'ете мечта'ют|мечта'л||I|A2|Я мечта'ю о соба'ке.|I dream of having a dog.
лета'ть|to fly (around)|лета'ю лета'ешь лета'ет лета'ем лета'ете лета'ют|лета'л||I|A2|Пти'цы лета'ют высоко'.|Birds fly high.
встава'ть|to get up|встаю' встаёшь встаёт встаём встаёте встаю'т|встава'л|встать|ava|A1|Я встаю' в семь часо'в.|I get up at seven.
дава'ть|to give|даю' даёшь даёт даём даёте даю'т|дава'л|дать|ava|A2|Учи'тель даёт зада'ние.|The teacher gives an assignment.
продава'ть|to sell|продаю' продаёшь продаёт продаём продаёте продаю'т|продава'л|прода'ть|ava|A2|Здесь продаю'т цветы'.|They sell flowers here.
танцева'ть|to dance|танцу'ю танцу'ешь танцу'ет танцу'ем танцу'ете танцу'ют|танцева'л|потанцева'ть|ova|A1|Она' краси'во танцу'ет.|She dances beautifully.
рисова'ть|to draw|рису'ю рису'ешь рису'ет рису'ем рису'ете рису'ют|рисова'л|нарисова'ть|ova|A1|Ребёнок рису'ет кота'.|The child is drawing a cat.
путеше'ствовать|to travel|путеше'ствую путеше'ствуешь путеше'ствует путеше'ствуем путеше'ствуете путеше'ствуют|путеше'ствовал||ova|A2|Мы путеше'ствуем по Росси'и.|We're travelling around Russia.
фотографи'ровать|to take photos|фотографи'рую фотографи'руешь фотографи'рует фотографи'руем фотографи'руете фотографи'руют|фотографи'ровал|сфотографи'ровать|ova|A2|Тури'сты фотографи'руют собо'р.|The tourists photograph the cathedral.
чу'вствовать|to feel|чу'вствую чу'вствуешь чу'вствует чу'вствуем чу'вствуете чу'вствуют|чу'вствовал|почу'вствовать|ova|A2|Как вы себя' чу'вствуете?|How are you feeling?
говори'ть|to speak, to say|говорю' говори'шь говори'т говори'м говори'те говоря'т|говори'л|сказа'ть|II|A1|Вы говори'те по-ру'сски?|Do you speak Russian?
смотре'ть|to watch, to look|смотрю' смо'тришь смо'трит смо'трим смо'трите смо'трят|смотре'л|посмотре'ть|II|A1|Мы смо'трим фильм.|We're watching a film.
ви'деть|to see|ви'жу ви'дишь ви'дит ви'дим ви'дите ви'дят|ви'дел|уви'деть|II|A1|Я ви'жу мо'ре!|I can see the sea!
люби'ть|to love, to like|люблю' лю'бишь лю'бит лю'бим лю'бите лю'бят|люби'л|полюби'ть|II|A1|Я люблю' шокола'д.|I love chocolate.
гото'вить|to cook|гото'влю гото'вишь гото'вит гото'вим гото'вите гото'вят|гото'вил|пригото'вить|II|A1|Па'па гото'вит борщ.|Dad is cooking borscht.
звони'ть|to call (phone)|звоню' звони'шь звони'т звони'м звони'те звоня'т|звони'л|позвони'ть|II|A1|Я звоню' ма'ме.|I'm calling Mum.
учи'ть|to learn (words), to teach|учу' у'чишь у'чит у'чим у'чите у'чат|учи'л|вы'учить|II|A1|Я учу' но'вые слова'.|I'm learning new words.
спать|to sleep|сплю спишь спит спим спи'те спят|спал,спала',спа'ли|поспа'ть|II|A1|Кот спит на дива'не.|The cat is sleeping on the sofa.
ходи'ть|to go on foot (regularly)|хожу' хо'дишь хо'дит хо'дим хо'дите хо'дят|ходи'л||II|A1|Я хожу' в спортза'л.|I go to the gym.
стоя'ть|to stand|стою' стои'шь стои'т стои'м стои'те стоя'т|стоя'л|постоя'ть|II|A2|Маши'на стои'т у до'ма.|The car is parked by the house.
сиде'ть|to sit|сижу' сиди'шь сиди'т сиди'м сиди'те сидя'т|сиде'л|посиде'ть|II|A2|Мы сиди'м в кафе'.|We're sitting in a café.
лежа'ть|to lie (be lying)|лежу' лежи'шь лежи'т лежи'м лежи'те лежа'т|лежа'л|полежа'ть|II|A2|Кни'га лежи'т на столе'.|The book is lying on the table.
плати'ть|to pay|плачу' пла'тишь пла'тит пла'тим пла'тите пла'тят|плати'л|заплати'ть|II|A2|Я плачу' ка'ртой.|I'm paying by card.
е'здить|to go by transport (regularly)|е'зжу е'здишь е'здит е'здим е'здите е'здят|е'здил||II|A2|Мы е'здим на да'чу.|We go to the dacha.
проси'ть|to ask (for), request|прошу' про'сишь про'сит про'сим про'сите про'сят|проси'л|попроси'ть|II|A2|Я прошу' счёт.|I'm asking for the bill.
стро'ить|to build|стро'ю стро'ишь стро'ит стро'им стро'ите стро'ят|стро'ил|постро'ить|II|A2|Они' стро'ят дом.|They're building a house.
по'мнить|to remember|по'мню по'мнишь по'мнит по'мним по'мните по'мнят|по'мнил||II|A2|Ты по'мнишь меня'?|Do you remember me?
переводи'ть|to translate|перевожу' перево'дишь перево'дит перево'дим перево'дите перево'дят|переводи'л|перевести'|II|A2|Я перевожу' текст.|I'm translating a text.
приходи'ть|to come, arrive (on foot)|прихожу' прихо'дишь прихо'дит прихо'дим прихо'дите прихо'дят|приходи'л|прийти'|II|A2|Он прихо'дит домо'й по'здно.|He comes home late.
уходи'ть|to leave (on foot)|ухожу' ухо'дишь ухо'дит ухо'дим ухо'дите ухо'дят|уходи'л|уйти'|II|A2|Уже' по'здно, я ухожу'.|It's late, I'm leaving.
жить|to live|живу' живёшь живёт живём живёте живу'т|жил,жила',жи'ли||irr|A1|Где ты живёшь?|Where do you live?
пить|to drink|пью пьёшь пьёт пьём пьёте пьют|пил,пила',пи'ли|вы'пить|irr|A1|Я пью чай с лимо'ном.|I drink tea with lemon.
писа'ть|to write|пишу' пи'шешь пи'шет пи'шем пи'шете пи'шут|писа'л|написа'ть|irr|A1|Она' пи'шет письмо'.|She's writing a letter.
идти'|to go on foot (now)|иду' идёшь идёт идём идёте иду'т|шёл,шла,шли|пойти'|irr|A1|Куда' ты идёшь?|Where are you going?
е'хать|to go by transport (now)|е'ду е'дешь е'дет е'дем е'дете е'дут|е'хал|пое'хать|irr|A1|Я е'ду на рабо'ту.|I'm on my way to work.
мочь|can, to be able|могу' мо'жешь мо'жет мо'жем мо'жете мо'гут|мог,могла',могли'|смочь|irr|A1|Я могу' тебе' помо'чь.|I can help you.
хоте'ть|to want|хочу' хо'чешь хо'чет хоти'м хоти'те хотя'т|хоте'л|захоте'ть|irr|A1|Я хочу' ко'фе.|I want coffee.
есть|to eat|ем ешь ест еди'м еди'те едя'т|ел,е'ла,е'ли|съесть|irr|A1|Что ты ешь?|What are you eating?
петь|to sing|пою' поёшь поёт поём поёте пою'т|пел,пе'ла,пе'ли|спеть|irr|A1|Он поёт в ду'ше.|He sings in the shower.
брать|to take|беру' берёшь берёт берём берёте беру'т|брал,брала',бра'ли|взять|irr|A2|Я беру' такси'.|I'm taking a taxi.
ждать|to wait|жду ждёшь ждёт ждём ждёте ждут|ждал,ждала',жда'ли|подожда'ть|irr|A2|Мы ждём авто'бус.|We're waiting for the bus.
иска'ть|to look for|ищу' и'щешь и'щет и'щем и'щете и'щут|иска'л||irr|A2|Я ищу' метро'.|I'm looking for the metro.
бежа'ть|to run|бегу' бежи'шь бежи'т бежи'м бежи'те бегу'т|бежа'л|побежа'ть|irr|A2|Соба'ка бежи'т к нам.|The dog is running towards us.
занима'ться|to do (sport), to study|занима'юсь занима'ешься занима'ется занима'емся занима'етесь занима'ются|занима'лся||sya|A1|Я занима'юсь спо'ртом.|I do sport.
учи'ться|to study (at a school)|учу'сь у'чишься у'чится у'чимся у'читесь у'чатся|учи'лся|научи'ться|sya|A1|Я учу'сь в университе'те.|I study at university.
просыпа'ться|to wake up|просыпа'юсь просыпа'ешься просыпа'ется просыпа'емся просыпа'етесь просыпа'ются|просыпа'лся|просну'ться|sya|A2|Я просыпа'юсь ра'но.|I wake up early.
одева'ться|to get dressed|одева'юсь одева'ешься одева'ется одева'емся одева'етесь одева'ются|одева'лся|оде'ться|sya|A2|Она' бы'стро одева'ется.|She gets dressed quickly.
возвраща'ться|to come back, return|возвраща'юсь возвраща'ешься возвраща'ется возвраща'емся возвраща'етесь возвраща'ются|возвраща'лся|верну'ться|sya|A2|Па'па возвраща'ется домо'й в шесть.|Dad comes home at six.
встреча'ться|to meet (up)|встреча'юсь встреча'ешься встреча'ется встреча'емся встреча'етесь встреча'ются|встреча'лся|встре'титься|sya|A2|Мы встреча'емся в кафе'.|We're meeting at a café.
`;

const GROUPS = {
  I:   {label:'1st conj. (-ать/-ять)', c:'var(--green)'},
  II:  {label:'2nd conj. (-ить/-еть)', c:'var(--blue)'},
  ova: {label:'-овать / -евать', c:'var(--pink)'},
  ava: {label:'-авать', c:'var(--yellow)'},
  sya: {label:'reflexive -ся', c:'var(--lilac)'},
  irr: {label:'irregular', c:'var(--red)'}
};
const PRON = ['я','ты','он/она́','мы','вы','они́'];

function derivePast(m){
  if(m.endsWith('ся')){const b=m.slice(0,-2);return [m,b+'ась',b+'ись'];}
  return [m,m+'а',m+'и'];
}
const S=s=>s.replace(/'/g,'\u0301');
const VERBS = RAW.trim().split('\n').map((line,id)=>{
  let [inf,en,forms,past,pf,group,lvl,exRu,exEn]=line.split('|');
  [inf,forms,past,pf,exRu]=[inf,forms,past,pf,exRu].map(S);
  return {id,inf,en,forms:forms.split(' '),past:past.includes(',')?past.split(','):derivePast(past),pf,group,lvl,exRu,exEn};
});

/* ============ HELPERS ============ */
const plain=s=>s.replace(/\u0301/g,'');
const norm=s=>plain(s).trim().toLowerCase().replace(/ё/g,'е').replace(/\s+/g,' ');
const store={
  get(k,d){try{const v=localStorage.getItem('vg_'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem('vg_'+k,JSON.stringify(v))}catch(e){}}
};
let xp=store.get('xp',0);
let mastered=new Set(store.get('mastered',[]));
let level=store.get('level','all');
const pool=()=>VERBS.filter(v=>level==='all'||v.lvl===level);
const gc=v=>GROUPS[v.group].c;


function addXP(n){
  xp+=n;store.set('xp',xp);
  const el=$('#xp');el.textContent='★ '+xp+' XP';el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');
}
function burst(){
  const cols=['#fe98c0','#80eb3d','#3dd0eb','#eb583d','#ffe14d'];
  for(let i=0;i<26;i++){
    const s=document.createElement('span');s.className='burst';s.textContent=pick(['✦','★','●','✸']);
    s.style.left=(window.innerWidth/2)+'px';s.style.top=(window.innerHeight/2)+'px';s.style.color=pick(cols);
    s.style.setProperty('--dx',(Math.random()*700-350)+'px');s.style.setProperty('--dy',(Math.random()*600-380)+'px');
    s.style.setProperty('--r',(Math.random()*720-360)+'deg');
    document.body.appendChild(s);setTimeout(()=>s.remove(),1400);
  }
}
/* highlight the ending vs the infinitive stem */
function hlEnding(form,inf){
  const pf=plain(form),stem=plain(inf).replace(/(ться|тись|ть|ти|чь)$/,'');
  let i=0;while(i<pf.length&&i<stem.length&&pf[i]===stem[i])i++;
  if(i===0||i>=pf.length)return esc(form);
  let k=0,c=0;while(k<form.length&&c<i){k++;if(form[k]!=='\u0301')c++;}
  return esc(form.slice(0,k))+'<span class="ending">'+esc(form.slice(k))+'</span>';
}
function resultMsg(r){return r>=.9?'Отли́чно!':r>=.7?'Хорошо́!':r>=.4?'Неплохо́!':'Ещё раз!';}

/* ============ MODAL ============ */
function openVerb(v){
  $('#modalBody').innerHTML=`
    <div class="detail__head" style="--c:${gc(v)}">
      <span class="tag" style="--c:var(--surface)">${v.lvl} · ${GROUPS[v.group].label}</span>
      <h2 class="detail__ru" style="margin-top:12px">${esc(v.inf)}</h2>
      <p class="detail__en">${esc(v.en)}</p>
    </div>
    <div class="detail__body">
      <div><p class="label">Present tense</p>
        <div class="conj">${v.forms.map((f,i)=>`<div class="conj__row"><span class="conj__p">${PRON[i]}</span><span class="conj__f">${hlEnding(f,v.inf)}</span></div>`).join('')}</div>
      </div>
      <div><p class="label">Past tense</p>
        <div class="pastline"><span class="pill">он ${esc(v.past[0])}</span><span class="pill">она́ ${esc(v.past[1])}</span><span class="pill">они́ ${esc(v.past[2])}</span></div>
      </div>
      ${v.pf?`<div><p class="label">Aspect pair</p><div class="aspect">${esc(v.inf)} <small>imperfective</small> → ${esc(v.pf)} <small>perfective</small></div></div>`:''}
      <div class="example"><p class="label">Example</p><p class="ru">${esc(v.exRu)}</p><p class="muted">${esc(v.exEn)}</p></div>
      <div class="actions" style="justify-content:flex-start;margin:0">
        <button class="btn btn--sm ${mastered.has(v.id)?'btn--green':'btn--ghost'}" id="mBtn">${mastered.has(v.id)?'★ Learned':'☆ Mark as learned'}</button>
      </div>
    </div>`;
  $('#mBtn').onclick=()=>{
    if(mastered.has(v.id))mastered.delete(v.id);else{mastered.add(v.id);addXP(1);}
    store.set('mastered',[...mastered]);openVerb(v);if(route==='verbs')renderVerbList();
  };
  $('#modal').classList.add('is-open');$('#modal').setAttribute('aria-hidden','false');
}
function closeModal(){$('#modal').classList.remove('is-open');$('#modal').setAttribute('aria-hidden','true');}
$('#modalClose').onclick=closeModal;
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

/* ============ ROUTER ============ */
let route='home', cleanup=null;
const VIEWS={};
function go(){
  if(cleanup){cleanup();cleanup=null;}
  const h=location.hash.slice(1);route=VIEWS[h]?h:'home';
  $$('.nav__link').forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')==='#'+route));
  VIEWS[route]($('#view'));
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',go);

function setLevel(l){
  level=l;store.set('level',l);
  $$('#levelSeg button').forEach(b=>b.classList.toggle('is-on',b.dataset.l===l));
}
$$('#levelSeg button').forEach(b=>b.onclick=()=>{setLevel(b.dataset.l);go();});

function shell(el,title,sub,inner){
  el.innerHTML=`<section class="section"><div class="container">
    <h1 class="heading">${title}</h1><p class="lead">${sub}</p>${inner}</div></section>`;
}
function levelNote(){return `<span class="chip" style="background:var(--yellow)">Level: ${level==='all'?'A1 + A2':level} · ${pool().length} verbs</span>`;}

/* ============ HOME ============ */
const MODES=[
  ['verbs','📖','All verbs','Browse every verb with its full conjugation, past tense, aspect pair and an example you can listen to.','var(--yellow)'],
  ['cards','🃏','Flashcards','Flip, guess, repeat. Send the tricky ones back into the deck until they stick.','var(--pink)'],
  ['conjugate','⌨️','Conjugate','Type the right form for each pronoun, present or past. Built-in Cyrillic keyboard included.','var(--blue)'],
  ['gap','🧩','Fill the gap','Real everyday sentences with a missing verb. Pick the form that fits.','var(--green)'],
  ['memory','🧠','Memory match','Flip the tiles and pair each Russian verb with its English meaning.','var(--lilac)'],
  ['rush','⚡','Verb Rush','60 seconds. Is the form right or wrong? Tap fast, build a streak.','var(--red)'],
  ['aspect','🔗','Aspect pairs','Match each imperfective verb to its perfective partner: де́лать → сде́лать.','var(--pink)']
];
VIEWS.home=el=>{
  const words=shuffle(VERBS).slice(0,14).map(v=>v.inf);
  const track=`<div class="marquee__track" aria-hidden="true">${words.map(w=>`<span>${w}</span><span class="marquee__star">✦</span>`).join('')}</div>`;
  el.innerHTML=`
  <section class="hero-wrap"><div class="container">
    <div class="hero">
      <div class="hero__media">
        <div class="hero__avatar ru">Я</div>
        <span class="hero__sticker2">глаго́лы!</span>
        <span class="hero__sticker">A1 ✦ A2</span>
      </div>
      <div>
        <span class="hero__chip">Boqkova Teach</span>
        <h1 class="hero__title">verbs</h1>
        <p class="hero__lead">${VERBS.length} everyday Russian verbs. Learn them, then play with them until they stick. <span class="ru">У́чим глаго́лы игра́я.</span></p>
        <div class="hero__stats">
          <span class="chip" style="background:var(--green)">${VERBS.filter(v=>v.lvl==='A1').length} A1 verbs</span>
          <span class="chip" style="background:var(--pink)">${VERBS.filter(v=>v.lvl==='A2').length} A2 verbs</span>
          <span class="chip">6 games</span>
          <span class="chip" style="background:var(--yellow)">${mastered.size} learned by you</span>
        </div>
        <div class="actions" style="justify-content:flex-start;margin-top:26px">
          <a class="btn" href="#cards">Start with flashcards →</a>
          <a class="btn btn--ghost" href="#verbs">See all verbs</a>
        </div>
      </div>
    </div>
  </div></section>
  <div class="marquee">${track}${track}</div>
  <section class="section"><div class="container">
    <h2 class="heading">Pick your workout</h2>
    <p class="lead">Use the <b>A1 / A2 / All</b> switch at the top to choose which verbs appear in every game.</p>
    <div class="grid">${MODES.map(([h,e,t,s,c],i)=>`
      <a class="mode" href="#${h}">
        <div class="mode__banner" style="--c:${c}"><span class="mode__emoji">${e}</span><span class="mode__num">0${i+1}</span></div>
        <div class="mode__body"><h3 class="mode__title">${t}</h3><p class="mode__sum">${s}</p><span class="mode__go">${i===0?'Open':'Play'} →</span></div>
      </a>`).join('')}
    </div>
  </div></section>`;
};

/* ============ ALL VERBS ============ */
let vq='',vg='';
function renderVerbList(){
  const q=norm(vq);
  const list=pool().filter(v=>(!vg||v.group===vg)&&(!q||norm(v.inf).includes(q)||v.en.toLowerCase().includes(q)||v.forms.some(f=>norm(f).includes(q))));
  $('#vgrid').innerHTML=list.length?list.map(v=>`
    <button class="tile" data-id="${v.id}" style="--c:${gc(v)}">
      ${mastered.has(v.id)?'<span class="tile__star" title="Learned">★</span>':''}
      <span class="tile__ru">${esc(v.inf)}</span><span class="tile__en">${esc(v.en)}</span>
      <span class="tile__tags"><span class="tag" style="--c:${gc(v)}">${v.lvl}</span><span class="tag">${{I:'1st conj.',II:'2nd conj.',ova:'-овать',ava:'-авать',sya:'-ся',irr:'irregular'}[v.group]}</span></span>
    </button>`).join(''):'<p class="lead">Nothing found. Try another word.</p>';
  $$('#vgrid .tile').forEach(t=>t.onclick=()=>openVerb(VERBS[+t.dataset.id]));
}
VIEWS.verbs=el=>{
  shell(el,'All verbs','Tap a verb to open its conjugation table. Pink highlights show the endings. Search in Russian or English.',`
    <div class="toolbar">
      <input class="search" id="vsearch" placeholder="Search: чита́ть, to eat, пишу́…" value="${esc(vq)}">
      ${levelNote()}
    </div>
    <div class="filters" style="margin:-8px 0 26px">
      <button class="filter ${!vg?'is-on':''}" data-g="">All groups</button>
      ${Object.entries(GROUPS).map(([k,g])=>`<button class="filter ${vg===k?'is-on':''}" data-g="${k}" style="--c:${g.c}">${g.label}</button>`).join('')}
    </div>
    <div class="vgrid" id="vgrid"></div>`);
  $('#vsearch').oninput=e=>{vq=e.target.value;renderVerbList();};
  $$('.filter').forEach(b=>b.onclick=()=>{vg=b.dataset.g;$$('.filter').forEach(x=>x.classList.toggle('is-on',x===b));renderVerbList();});
  renderVerbList();
};

/* ============ FLASHCARDS ============ */
VIEWS.cards=el=>{
  let dir='ru',deck,i,known,again;
  const reset=()=>{deck=shuffle(pool());i=0;known=0;again=0;};
  reset();
  shell(el,'Flashcards','Click the card (or press Space) to flip. “Got it” sends it to your learned pile; “Again” puts it back in the deck.',`
    <div class="game">
      <div class="toggle-row">
        <button class="btn btn--sm" data-d="ru">Russian → English</button>
        <button class="btn btn--sm btn--ghost" data-d="en">English → Russian</button>
      </div>
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="fcFill"></div></div><span class="score" id="fcScore"></span></div>
      <div id="fcStage"></div>
    </div>`);
  const draw=()=>{
    $('#fcScore').textContent=`✓ ${known} · ↺ ${again}`;
    $('#fcFill').style.width=(deck.length?(known/(known+deck.length-i))*100:100)+'%';
    if(i>=deck.length){
      burst();
      $('#fcStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">Коло́да про́йдена!</p><div class="result__big">${known}</div><p><b>cards learned</b>, ${again} sent back for another go.</p><div class="actions"><button class="btn btn--ghost" id="fcRe">Shuffle again</button><a class="btn btn--green" href="#conjugate">Now conjugate them →</a></div></div>`;
      $('#fcRe').onclick=()=>{reset();draw();};return;
    }
    const v=deck[i];
    const front=dir==='ru'?`<div class="flip__big">${esc(v.inf)}</div>`:`<div class="flip__big" style="font-family:var(--font-display)">${esc(v.en)}</div>`;
    const back=`<div class="flip__big" style="${dir==='ru'?'font-family:var(--font-display);font-size:2rem':''}">${esc(dir==='ru'?v.en:v.inf)}</div>
      <div class="mini"><span>я ${esc(v.forms[0])}</span><span>ты ${esc(v.forms[1])}</span><span>они́ ${esc(v.forms[5])}</span></div>
      <p class="muted" style="margin:0;font-weight:600;text-align:center"><span class="ru">${esc(v.exRu)}</span></p>`;
    $('#fcStage').innerHTML=`
      <div class="flip" id="flip" tabindex="0" role="button" aria-label="Flip card">
        <div class="flip__inner">
          <div class="flip__face flip__front" style="--c:${gc(v)}">${front}<span class="flip__hint">tap to flip ↻</span></div>
          <div class="flip__face flip__back">${back}</div>
        </div>
      </div>
      <div class="actions" style="margin-top:28px">
        <button class="btn btn--red" id="fcAgain">↺ Again</button>
        <button class="btn btn--green" id="fcGot">✓ Got it</button>
      </div>`;
    $('#flip').onclick=()=>$('#flip').classList.toggle('is-flipped');
    $('#fcAgain').onclick=()=>{again++;deck.push(v);i++;draw();};
    $('#fcGot').onclick=()=>{known++;if(!mastered.has(v.id)){mastered.add(v.id);store.set('mastered',[...mastered]);}addXP(1);i++;draw();};
  };
  $$('[data-d]').forEach(b=>b.onclick=()=>{dir=b.dataset.d;$$('[data-d]').forEach(x=>x.classList.toggle('btn--ghost',x!==b));draw();});
  const key=e=>{if(e.target.tagName==='INPUT')return;const f=$('#flip');if(!f)return;
    if(e.code==='Space'){e.preventDefault();f.classList.toggle('is-flipped');}
    else if(e.key==='ArrowRight')$('#fcGot')?.click();else if(e.key==='ArrowLeft')$('#fcAgain')?.click();};
  document.addEventListener('keydown',key);cleanup=()=>document.removeEventListener('keydown',key);
  draw();
};

/* ============ CONJUGATE ============ */
const KB=['йцукенгшщзхъ','фывапролджэ','ячсмитьбюё'];
VIEWS.conjugate=el=>{
  let mode='present',qs,i,score,checked,wrongs;
  const PAST_P=[['он',0],['она́',1],['они́',2],['мы',2],['вы',2]];
  const make=()=>shuffle(pool()).slice(0,10).map(v=>{
    const t=mode==='mix'?pick(['present','past']):mode;
    if(t==='present'){const p=Math.random()*6|0;return{v,t,pr:p===2?pick(['он','она́']):PRON[p],ans:v.forms[p]};}
    const [pr,k]=pick(PAST_P);return{v,t,pr,ans:v.past[k]};
  });
  const reset=()=>{qs=make();i=0;score=0;checked=false;wrongs=[];};
  reset();
  shell(el,'Conjugate','Put the verb in the right form for the pronoun. Type with your keyboard or the Cyrillic keys below. Е and Ё both count, and you don’t need to type the stress mark.',`
    <div class="game">
      <div class="toggle-row">
        <button class="btn btn--sm" data-m="present">Present</button>
        <button class="btn btn--sm btn--ghost" data-m="past">Past</button>
        <button class="btn btn--sm btn--ghost" data-m="mix">Mix</button>
      </div>
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="cjFill"></div></div><span class="score" id="cjScore"></span></div>
      <div id="cjStage"></div>
    </div>`);
  const draw=()=>{
    $('#cjScore').textContent=`${score} / ${qs.length}`;
    $('#cjFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){
      const r=score/qs.length;if(r>=.7)burst();addXP(score);
      $('#cjStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(r)}</p><div class="result__big">${score}/${qs.length}</div>
        ${wrongs.length?`<p><b>Review these:</b></p><div class="review">${wrongs.map(w=>`<div>${esc(w.pr)} + ${esc(w.v.inf)} → <b>${esc(w.ans)}</b></div>`).join('')}</div>`:'<p><b>Perfect round!</b></p>'}
        <div class="actions"><button class="btn btn--ghost" id="cjRe">New round</button></div></div>`;
      $('#cjRe').onclick=()=>{reset();draw();};return;
    }
    const q=qs[i];checked=false;
    $('#cjStage').innerHTML=`<div class="stage">
      <span class="tense" style="--c:${q.t==='present'?'var(--green)':'var(--lilac)'}">${q.t==='present'?'present · сейча́с':'past · вчера́'}</span>
      <div class="prompt"><span class="pron">${esc(q.pr)}</span><span class="plus">+</span><span class="inf">${esc(q.v.inf)}</span><span class="gloss">${esc(q.v.en)}</span></div>
      <input class="answer" id="cjIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…" lang="ru">
      <div class="feedback" id="cjFb"></div>
      <div class="actions">
        <button class="btn btn--ghost btn--sm" id="cjHint">💡 Hint</button>
        <button class="btn btn--green" id="cjGo">Check ↵</button>
      </div>
      <div class="kbd">${KB.map((r,ri)=>`<div class="kbd__row">${[...r].map(c=>`<button class="key" data-k="${c}">${c}</button>`).join('')}${ri===2?'<button class="key key--wide" data-k="⌫">⌫</button>':''}</div>`).join('')}</div>
    </div>`;
    const inp=$('#cjIn');inp.focus();
    inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();$('#cjGo').click();}};
    $$('.key').forEach(k=>k.onclick=()=>{
      if(checked)return;const s=inp.selectionStart??inp.value.length,e2=inp.selectionEnd??s;
      if(k.dataset.k==='⌫'){if(s===e2&&s>0){inp.value=inp.value.slice(0,s-1)+inp.value.slice(e2);inp.setSelectionRange(s-1,s-1);}else{inp.value=inp.value.slice(0,s)+inp.value.slice(e2);inp.setSelectionRange(s,s);}}
      else{inp.value=inp.value.slice(0,s)+k.dataset.k+inp.value.slice(e2);inp.setSelectionRange(s+1,s+1);}
      inp.focus();
    });
    let hints=0;
    $('#cjHint').onclick=()=>{if(checked)return;hints=Math.min(hints+1,plain(q.ans).length-1);inp.value=plain(q.ans).slice(0,hints);inp.focus();};
    $('#cjGo').onclick=()=>{
      if(checked){i++;draw();return;}
      if(!inp.value.trim()){inp.focus();return;}
      checked=true;inp.readOnly=true;
      const ok=norm(inp.value)===norm(q.ans);
      if(ok){score++;inp.classList.add('ok');$('#cjFb').innerHTML='Ве́рно! ✦';}
      else{wrongs.push(q);inp.classList.add('bad');$('#cjFb').innerHTML=`Correct form: <span class="ru" style="background:var(--yellow);padding:0 8px;border-radius:6px;border:2px solid var(--ink)">${esc(q.ans)}</span>`;}
      
      $('#cjGo').textContent=i===qs.length-1?'Results →':'Next →';$('#cjScore').textContent=`${score} / ${qs.length}`;
    };
  };
  $$('[data-m]').forEach(b=>b.onclick=()=>{mode=b.dataset.m;$$('[data-m]').forEach(x=>x.classList.toggle('btn--ghost',x!==b));reset();draw();});
  draw();
};

/* ============ FILL THE GAP ============ */
function gapBank(){
  const out=[];
  pool().forEach(v=>{
    const forms=[...new Set(v.forms)].sort((a,b)=>b.length-a.length);
    for(const f of forms){
      const re=new RegExp('(^|\\s)('+f+')(?=[\\s.,!?]|$)','i');
      const m=v.exRu.match(re);
      if(m){
        const idx=m.index+m[1].length;
        out.push({v,before:v.exRu.slice(0,idx),after:v.exRu.slice(idx+m[2].length),ans:m[2]});
        break;
      }
    }
  });
  return out;
}
VIEWS.gap=el=>{
  let qs,i,score,wrongs;
  const reset=()=>{qs=shuffle(gapBank()).slice(0,10);i=0;score=0;wrongs=[];};
  reset();
  shell(el,'Fill the gap','Real everyday sentences. Choose the verb form that completes each one. The infinitive is shown in brackets.',`
    <div class="game">
      <div class="game__bar"><div class="progress"><div class="progress__fill" id="gpFill"></div></div><span class="score" id="gpScore"></span></div>
      <div id="gpStage"></div>
    </div>`);
  const draw=()=>{
    $('#gpScore').textContent=`${score} / ${qs.length}`;$('#gpFill').style.width=(i/qs.length*100)+'%';
    if(i>=qs.length){
      const r=score/qs.length;if(r>=.7)burst();addXP(score);
      $('#gpStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${resultMsg(r)}</p><div class="result__big">${score}/${qs.length}</div>
        ${wrongs.length?`<div class="review">${wrongs.map(w=>`<div>${esc(w.v.exRu)}</div>`).join('')}</div>`:'<p><b>Every gap filled correctly!</b></p>'}
        <div class="actions"><button class="btn btn--ghost" id="gpRe">New sentences</button></div></div>`;
      $('#gpRe').onclick=()=>{reset();draw();};return;
    }
    const q=qs[i];
    const lower=q.ans.toLowerCase();
    let opts=shuffle([...new Set(q.v.forms.filter(f=>f!==lower))]).slice(0,3);
    if(opts.length<3)opts.push(q.v.inf);
    const cap=q.before==='';
    const show=f=>cap?f[0].toUpperCase()+f.slice(1):f;
    opts=shuffle([lower,...opts]);
    $('#gpStage').innerHTML=`<div class="stage">
      <p class="sentence">${esc(q.before)}<span class="blank" id="gpBlank">${esc(q.ans)}</span>${esc(q.after)} <span class="hintinf">(${esc(q.v.inf)})</span></p>
      <p class="trans">${esc(q.v.exEn)}</p>
      <div class="choices">${opts.map(o=>`<button class="choice" data-o="${esc(o)}">${esc(show(o))}</button>`).join('')}</div>
      <div class="actions" id="gpNext" style="visibility:hidden"><button class="btn btn--green" id="gpGo">${i===qs.length-1?'Results →':'Next →'}</button></div>
    </div>`;
    $$('.choice').forEach(b=>b.onclick=()=>{
      const ok=b.dataset.o===lower;
      $$('.choice').forEach(x=>{x.disabled=true;if(x.dataset.o===lower)x.classList.add('ok');});
      if(ok)score++;else{b.classList.add('bad');wrongs.push(q);}
      $('#gpBlank').classList.add('filled');$('#gpScore').textContent=`${score} / ${qs.length}`;
      $('#gpNext').style.visibility='visible';$('#gpGo').focus();
    });
    $('#gpGo').onclick=()=>{i++;draw();};
  };
  draw();
};

/* ============ MEMORY ============ */
VIEWS.memory=el=>{
  let cards,open,moves,matched,t0,timer,lock;
  shell(el,'Memory match','Flip two tiles at a time. Pair each Russian verb (blue) with its English meaning. Fewer moves = more glory.',`
    <div class="game">
      <div class="game__bar"><span class="score" id="mmMoves">0 moves</span><span class="score" id="mmTime" style="background:var(--blue)">0:00</span><button class="btn btn--sm btn--ghost" id="mmRe">↻ New board</button></div>
      <div id="mmStage"></div>
    </div>`);
  const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const start=()=>{
    clearInterval(timer);
    const vs=shuffle(pool()).slice(0,8);
    cards=shuffle(vs.flatMap(v=>[{id:v.id,t:v.inf,ru:1},{id:v.id,t:v.en.split(',')[0],ru:0}]));
    open=[];moves=0;matched=0;t0=null;lock=false;
    $('#mmMoves').textContent='0 moves';$('#mmTime').textContent='0:00';
    $('#mmStage').innerHTML=`<div class="mem">${cards.map((c,k)=>`<button class="mcard" data-k="${k}" aria-label="Hidden tile"><div class="mcard__inner"><div class="mcard__face mcard__back">✦</div><div class="mcard__face mcard__front ${c.ru?'ru':''}">${esc(c.t)}</div></div></button>`).join('')}</div>`;
    $$('.mcard').forEach(b=>b.onclick=()=>flip(b));
  };
  const flip=b=>{
    if(lock||b.classList.contains('up'))return;
    if(!t0){t0=Date.now();timer=setInterval(()=>$('#mmTime').textContent=fmt(Math.floor((Date.now()-t0)/1000)),500);}
    const c=cards[+b.dataset.k];b.classList.add('up');open.push(b);
    if(open.length===2){
      moves++;$('#mmMoves').textContent=moves+' moves';
      const [a,d]=open.map(x=>cards[+x.dataset.k]);
      if(a.id===d.id&&a.ru!==d.ru){open.forEach(x=>x.classList.add('done'));open=[];matched++;
        if(matched===8){clearInterval(timer);addXP(5);burst();
          setTimeout(()=>{$('#mmStage').insertAdjacentHTML('beforeend',`<div class="stage stage--pink" style="margin-top:24px"><p class="result__msg">Молоде́ц!</p><div class="result__big">${moves}</div><p><b>moves</b> in ${$('#mmTime').textContent}</p><div class="actions"><button class="btn btn--ghost" id="mmAgain">Play again</button></div></div>`);$('#mmAgain').onclick=start;},450);}
      }else{lock=true;setTimeout(()=>{open.forEach(x=>x.classList.remove('up'));open=[];lock=false;},850);}
    }
  };
  $('#mmRe').onclick=start;cleanup=()=>clearInterval(timer);
  start();
};

/* ============ VERB RUSH ============ */
VIEWS.rush=el=>{
  let timer,left,score,streak,best=store.get('rushBest',0),cur,running=false;
  shell(el,'Verb Rush','60 seconds on the clock. Is the verb form correct for the pronoun? Tap ✓ or ✗, or use the → and ← arrow keys.',`
    <div class="game"><div id="rsStage"></div></div>`);
  const intro=()=>{
    $('#rsStage').innerHTML=`<div class="stage stage--pink"><div class="result__big">60s</div><p class="result__msg">Гото́вы?</p><p><b>Best score: ${best}</b> · ${levelNote()}</p><div class="actions"><button class="btn btn--green" id="rsGo">Start ⚡</button></div></div>`;
    $('#rsGo').onclick=start;
  };
  const next=()=>{
    const v=pick(pool()),p=Math.random()*6|0;
    const pr=p===2?pick(['он','она́']):PRON[p];
    const truth=Math.random()<.5;let shown=v.forms[p];
    if(!truth){const others=v.forms.filter(f=>f!==v.forms[p]);shown=pick(others);}
    cur={v,pr,shown,ok:shown===v.forms[p],right:v.forms[p]};
    $('#rsLine').innerHTML=`<span class="p">${esc(pr)}</span> ${esc(shown)}`;
    $('#rsInf').textContent=v.inf+' · '+v.en;
  };
  const answer=yes=>{
    if(!running)return;
    const good=yes===cur.ok,card=$('#rsCard');
    if(good){score++;streak++;}else{streak=0;}
    $('#rsFb').innerHTML=good?(streak>=5?`🔥 streak ${streak}!`:'✓'):`✗ ${esc(cur.pr)} <b class="ru">${esc(cur.right)}</b>`;
    card.classList.remove('flash-ok','flash-bad');void card.offsetWidth;card.classList.add(good?'flash-ok':'flash-bad');
    setTimeout(()=>card.classList.remove('flash-ok','flash-bad'),220);
    $('#rsScore').textContent=score;next();
  };
  const start=()=>{
    left=60;score=0;streak=0;running=true;
    $('#rsStage').innerHTML=`<div class="game__bar"><span class="rush__time" id="rsTime">60</span><span class="score">Score: <span id="rsScore">0</span></span></div>
      <div class="progress" style="margin-bottom:8px"><div class="progress__fill" id="rsFill" style="width:100%;background:var(--red)"></div></div>
      <div class="rush__card" id="rsCard"><div class="rush__line" id="rsLine"></div><div class="rush__inf" id="rsInf"></div></div>
      <div class="feedback" id="rsFb" style="text-align:center"></div>
      <div class="rush__btns"><button class="btn btn--red" id="rsNo">✗ wrong</button><button class="btn btn--green" id="rsYes">✓ right</button></div>`;
    $('#rsNo').onclick=()=>answer(false);$('#rsYes').onclick=()=>answer(true);
    next();
    timer=setInterval(()=>{left--;$('#rsTime').textContent=left;$('#rsFill').style.width=(left/60*100)+'%';if(left<=0)end();},1000);
  };
  const end=()=>{
    clearInterval(timer);running=false;addXP(score);
    const nb=score>best;if(nb){best=score;store.set('rushBest',best);burst();}
    $('#rsStage').innerHTML=`<div class="stage stage--pink"><p class="result__msg">${nb?'Но́вый реко́рд!':'Вре́мя вы́шло!'}</p><div class="result__big">${score}</div><p><b>correct answers</b> · best ${best}</p><div class="actions"><button class="btn btn--green" id="rsGo">Go again ⚡</button></div></div>`;
    $('#rsGo').onclick=start;
  };
  const key=e=>{if(!running)return;if(e.key==='ArrowRight'){e.preventDefault();answer(true);}else if(e.key==='ArrowLeft'){e.preventDefault();answer(false);}};
  document.addEventListener('keydown',key);
  cleanup=()=>{clearInterval(timer);running=false;document.removeEventListener('keydown',key);};
  intro();
};

/* ============ ASPECT PAIRS ============ */
VIEWS.aspect=el=>{
  let round=0,total=0,mistakes=0,set,L,R,sel,done;
  shell(el,'Aspect pairs','Most Russian verbs come in pairs: imperfective (process, habit) and perfective (one finished result). Tap a verb on the left, then its partner on the right.',`
    <div class="game">
      <div class="game__bar"><span class="score" id="apRound"></span><span class="score" id="apMis" style="background:var(--pink)"></span></div>
      <div id="apStage"></div>
      <div class="example" style="margin-top:28px"><p class="label">Quick rule</p><p><span class="ru"><b>Я чита́л кни́гу</b></span> = I was reading / used to read (process) · <span class="ru"><b>Я прочита́л кни́гу</b></span> = I finished reading the book (result).</p></div>
    </div>`);
  const start=()=>{
    const ps=pool().filter(v=>v.pf);
    set=shuffle(ps).slice(0,6);L=shuffle(set);R=shuffle(set);sel=null;done=0;round++;
    $('#apRound').textContent='Round '+round;$('#apMis').textContent='Mistakes: '+mistakes;
    $('#apStage').innerHTML=`<div class="stage" style="text-align:left"><div class="cols">
      <div class="col"><h3>Imperfective</h3><div class="col__list">${L.map(v=>`<button class="pairbtn" data-s="L" data-id="${v.id}">${esc(v.inf)}</button>`).join('')}</div></div>
      <div class="col"><h3>Perfective</h3><div class="col__list">${R.map(v=>`<button class="pairbtn" data-s="R" data-id="${v.id}">${esc(v.pf)}</button>`).join('')}</div></div>
    </div><p class="feedback" id="apFb" style="text-align:center"></p></div>`;
    $$('.pairbtn').forEach(b=>b.onclick=()=>tap(b));
  };
  const tap=b=>{
    if(!sel||sel.dataset.s===b.dataset.s){if(sel)sel.classList.remove('sel');sel=b;b.classList.add('sel');return;}
    const a=sel;sel=null;a.classList.remove('sel');
    if(a.dataset.id===b.dataset.id){
      const v=VERBS[+a.dataset.id];[a,b].forEach(x=>{x.classList.add('matched');x.style.setProperty('--c',gc(v));});
      $('#apFb').innerHTML=`<span class="ru">${esc(v.inf)} → ${esc(v.pf)}</span> · ${esc(v.en)}`;
      done++;total++;
      if(done===set.length){addXP(3);burst();$('#apFb').innerHTML+=`<div class="actions"><button class="btn btn--green" id="apNext">Next round →</button></div>`;$('#apNext').onclick=start;}
    }else{
      mistakes++;$('#apMis').textContent='Mistakes: '+mistakes;
      [a,b].forEach(x=>{x.classList.add('bad');setTimeout(()=>x.classList.remove('bad'),400);});
    }
  };
  start();
};

/* ============ INIT ============ */
setLevel(level);
$('#xp').textContent='★ '+xp+' XP';
go();
