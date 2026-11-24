
/* ======================= DATA =======================
   Russian is written with stress marks (´). ё is always stressed and has no mark. */
const THEMES = [
{
  id:'cafe', en:'At the café', ru:'В кафе́', emoji:'☕', color:'#fe98c0', soft:'#ffe3ee',
  intro:'Order a coffee, ask for the menu, pay the bill — everything you need in a Russian café.',
  words:[['меню́','menu'],['ко́фе','coffee (masc.!)'],['чай','tea'],['вода́','water'],['сок','juice'],['молоко́','milk'],['са́хар','sugar'],['пиро́жное','cake, pastry'],['официа́нт','waiter'],['счёт','the bill'],['ка́рта','card'],['сда́ча','change (money)']],
  phrases:[
    ['Здра́вствуйте!','Hello! (polite)'],
    ['Мо́жно меню́, пожа́луйста?','Can I have the menu, please?'],
    ['Что вы посове́туете?','What do you recommend?'],
    ['Я бу́ду ко́фе.','I’ll have a coffee.'],
    ['Мне, пожа́луйста, чай с лимо́ном.','Tea with lemon for me, please.'],
    ['Без са́хара, пожа́луйста.','Without sugar, please.'],
    ['Здесь и́ли с собо́й?','For here or to go?'],
    ['С собо́й, пожа́луйста.','To go, please.'],
    ['Счёт, пожа́луйста.','The bill, please.'],
    ['Мо́жно оплати́ть ка́ртой?','Can I pay by card?'],
    ['Спаси́бо, всё бы́ло о́чень вку́сно!','Thank you, everything was delicious!']
  ],
  note:'<strong>Grammar spot:</strong> <span class="ru">ко́фе</span> is masculine — <span class="ru">чёрный ко́фе, оди́н ко́фе</span>. After <span class="ru">с</span> (“with”) use the Instrumental: <span class="ru">с молоко́м, с лимо́ном</span>; after <span class="ru">без</span> (“without”) the Genitive: <span class="ru">без са́хара</span>.',
  dlg:{a:'Официа́нт',b:'Ли́за',situ:'Liza is having lunch in a café in Moscow.',lines:[
    [0,'До́брый день! Вот меню́.','Good afternoon! Here’s the menu.'],
    [1,'Спаси́бо. Что вы посове́туете?','Thank you. What do you recommend?'],
    [0,'Попро́буйте наш чизке́йк. Он о́чень вку́сный.','Try our cheesecake. It’s very tasty.'],
    [1,'Хорошо́. Чизке́йк и капучи́но, пожа́луйста.','OK. A cheesecake and a cappuccino, please.'],
    [0,'Капучи́но большо́й и́ли ма́ленький?','Large or small cappuccino?'],
    [1,'Большо́й. И без са́хара, пожа́луйста.','Large. And no sugar, please.'],
    [0,'Здесь и́ли с собо́й?','For here or to go?'],
    [1,'Здесь.','For here.'],
    [1,'Счёт, пожа́луйста. Мо́жно ка́ртой?','The bill, please. Can I pay by card?'],
    [0,'Коне́чно. С вас пятьсо́т рубле́й.','Of course. That’s five hundred roubles.']
  ]},
  rp:{them:'Официа́нт',situ:'You’re the customer. Order a coffee with milk and pay.',lines:[
    [0,'До́брый день!'],
    [1,'Здра́вствуйте! Мо́жно ___, пожа́луйста?','меню́',['меню́','счёт','сда́чу'],'Hello! Can I have the menu, please?'],
    [0,'Вот, пожа́луйста. Что вы бу́дете?'],
    [1,'Я ___ ко́фе.','бу́ду',['бу́ду','есть','был'],'I’ll have a coffee.'],
    [0,'С молоко́м?'],
    [1,'Да, с молоко́м, но без ___.','са́хара',['са́хара','са́хар','са́харом'],'Yes, with milk but without sugar.'],
    [0,'Здесь и́ли с собо́й?'],
    [1,'Здесь. ___ с меня́?','Ско́лько',['Ско́лько','Как','Где'],'For here. How much do I owe?'],
    [0,'Две́сти рубле́й.'],
    [1,'Мо́жно оплати́ть ___?','ка́ртой',['ка́ртой','ка́рта','ка́рту'],'Can I pay by card?'],
    [0,'Да, коне́чно.'],
    [1,'___! Всё бы́ло о́чень вку́сно.','Спаси́бо',['Спаси́бо','Извини́те','Пока́'],'Thank you! Everything was delicious.']
  ]},
  sort:{title:'Who says it?',sub:'The customer or the waiter? Tap the right person.',labels:['🙋 Customer','🧑‍🍳 Waiter'],items:[
    ['Мо́жно меню́, пожа́луйста?','Can I have the menu, please?',0],
    ['Что вы бу́дете?','What would you like?',1],
    ['Здесь и́ли с собо́й?','For here or to go?',1],
    ['Я бу́ду капучи́но.','I’ll have a cappuccino.',0],
    ['Вам с молоко́м?','Would you like it with milk?',1],
    ['Счёт, пожа́луйста.','The bill, please.',0],
    ['С вас три́ста рубле́й.','That’s three hundred roubles.',1],
    ['Мо́жно оплати́ть ка́ртой?','Can I pay by card?',0],
    ['Что вы посове́туете?','What do you recommend?',0],
    ['Попро́буйте наш десе́рт.','Try our dessert.',1],
    ['Сейча́с принесу́.','I’ll bring it right away.',1],
    ['Мо́жно ещё воды́?','Could I have some more water?',0]
  ]},
  build:[['Мо́жно меню́, пожа́луйста?','Can I have the menu, please?'],['Я бу́ду чай с лимо́ном.','I’ll have tea with lemon.'],['Ско́лько сто́ит пиро́жное?','How much is the cake?'],['Мо́жно оплати́ть ка́ртой?','Can I pay by card?'],['Всё бы́ло о́чень вку́сно!','Everything was very tasty!']]
},
{
  id:'taxi', en:'In a taxi', ru:'В такси́', emoji:'🚕', color:'#ffd23f', soft:'#fff4c9',
  intro:'Tell the driver where to go, ask the price, give directions and get a receipt.',
  words:[['такси́','taxi'],['води́тель','driver'],['а́дрес','address'],['аэропо́рт','airport'],['вокза́л','railway station'],['центр','city centre'],['напра́во','to the right'],['нале́во','to the left'],['пря́мо','straight on'],['здесь','here'],['бага́жник','boot / trunk'],['чек','receipt']],
  phrases:[
    ['Мне ну́жно в аэропо́рт.','I need to get to the airport.'],
    ['Отвези́те меня́, пожа́луйста, по э́тому а́дресу.','Please take me to this address.'],
    ['Ско́лько сто́ит дое́хать до це́нтра?','How much is it to the centre?'],
    ['Ско́лько е́хать?','How long is the ride?'],
    ['Я опа́здываю. Мо́жно побыстре́е?','I’m late. Could you go a bit faster?'],
    ['Поверни́те напра́во.','Turn right.'],
    ['Поверни́те нале́во.','Turn left.'],
    ['Пря́мо, пожа́луйста.','Straight on, please.'],
    ['Останови́те здесь, пожа́луйста.','Stop here, please.'],
    ['Мо́жно откры́ть бага́жник?','Could you open the boot?'],
    ['Мо́жно чек?','Can I have a receipt?']
  ],
  note:'<strong>Grammar spot:</strong> where you’re going = <span class="ru">в / на</span> + Accusative: <span class="ru">в аэропо́рт, на вокза́л, в гости́ницу</span>. “Up to” = <span class="ru">до</span> + Genitive: <span class="ru">до це́нтра</span>. Putting the number <em>after</em> the noun makes it approximate: <span class="ru">мину́т со́рок</span> = “about forty minutes”.',
  dlg:{a:'Води́тель',b:'Макс',situ:'Max is late for his flight.',lines:[
    [0,'Здра́вствуйте! Куда́ е́дем?','Hello! Where are we going?'],
    [1,'Здра́вствуйте! В аэропо́рт, пожа́луйста.','Hello! To the airport, please.'],
    [0,'Хорошо́. Како́й термина́л?','OK. Which terminal?'],
    [1,'Пе́рвый. А ско́лько е́хать?','The first one. How long is the drive?'],
    [0,'Мину́т со́рок. Сейча́с про́бки.','About forty minutes. There’s traffic now.'],
    [1,'Ой, я опа́здываю! Мо́жно побыстре́е?','Oh, I’m running late! Could you go faster?'],
    [0,'Постара́юсь.','I’ll try.'],
    [0,'Прие́хали!','Here we are!'],
    [1,'Спаси́бо! Мо́жно откры́ть бага́жник?','Thank you! Could you open the boot?'],
    [0,'Коне́чно. Счастли́вого пути́!','Of course. Have a good trip!']
  ]},
  rp:{them:'Води́тель',situ:'You’re the passenger. Go to the railway station and pay.',lines:[
    [0,'Здра́вствуйте! Куда́ е́дем?'],
    [1,'На ___, пожа́луйста.','вокза́л',['вокза́л','вокза́ле','вокза́ла'],'To the station, please.'],
    [0,'Хорошо́, сади́тесь.'],
    [1,'___ сто́ит дое́хать?','Ско́лько',['Ско́лько','Куда́','Когда́'],'How much is it to get there?'],
    [0,'Пятьсо́т рубле́й.'],
    [1,'Хорошо́. Тут поверни́те ___, пожа́луйста.','нале́во',['нале́во','пря́мо','здесь'],'OK. Turn left here, please.','left'],
    [0,'Нале́во? Хорошо́.'],
    [1,'___ здесь, пожа́луйста.','Останови́те',['Останови́те','Поверни́те','Отвези́те'],'Stop here, please.','stop'],
    [0,'С вас пятьсо́т рубле́й.'],
    [1,'Вот, пожа́луйста. Мо́жно ___?','чек',['чек','счёт','меню́'],'Here you are. Can I have a receipt?','receipt'],
    [0,'Вот ваш чек. Всего́ до́брого!']
  ]},
  sort:{title:'Who says it?',sub:'The passenger or the driver? Tap the right person.',labels:['🧳 Passenger','🚖 Driver'],items:[
    ['Куда́ е́дем?','Where are we going?',1],
    ['Мне ну́жно на вокза́л.','I need to get to the station.',0],
    ['Пристегни́тесь, пожа́луйста.','Please fasten your seatbelt.',1],
    ['Ско́лько сто́ит дое́хать до це́нтра?','How much is it to the centre?',0],
    ['Сейча́с про́бки.','There’s traffic right now.',1],
    ['Останови́те здесь, пожа́луйста.','Stop here, please.',0],
    ['Прие́хали!','Here we are!',1],
    ['Мо́жно откры́ть бага́жник?','Could you open the boot?',0],
    ['С вас пятьсо́т рубле́й.','That’s five hundred roubles.',1],
    ['Мо́жно чек?','Can I have a receipt?',0],
    ['Я опа́здываю. Мо́жно побыстре́е?','I’m late. Could you go faster?',0],
    ['Како́й термина́л?','Which terminal?',1]
  ]},
  build:[['Мне ну́жно в аэропо́рт.','I need to get to the airport.'],['Останови́те здесь, пожа́луйста.','Stop here, please.'],['Ско́лько сто́ит дое́хать до це́нтра?','How much is it to the centre?'],['Поверни́те нале́во, пожа́луйста.','Turn left, please.'],['Я опа́здываю на самолёт.','I’m late for my plane.']]
},
{
  id:'doctor', en:'At the doctor’s', ru:'У врача́', emoji:'🩺', color:'#3dd0eb', soft:'#d4f5fb',
  intro:'Say how you feel, explain what hurts, and understand the doctor’s advice.',
  words:[['врач','doctor'],['голова́','head'],['го́рло','throat'],['живо́т','stomach'],['зуб','tooth'],['температу́ра','temperature, fever'],['ка́шель','cough'],['на́сморк','runny nose'],['просту́да','a cold'],['лека́рство','medicine'],['апте́ка','pharmacy'],['реце́пт','prescription']],
  phrases:[
    ['Я пло́хо себя́ чу́вствую.','I feel unwell.'],
    ['У меня́ боли́т голова́.','I have a headache.'],
    ['У меня́ боли́т го́рло.','I have a sore throat.'],
    ['У меня́ температу́ра.','I have a fever.'],
    ['У меня́ ка́шель и на́сморк.','I have a cough and a runny nose.'],
    ['Что вас беспоко́ит?','What’s bothering you? (doctor)'],
    ['Где боли́т?','Where does it hurt?'],
    ['Уже́ три дня.','For three days now.'],
    ['У меня́ аллерги́я на пеницилли́н.','I’m allergic to penicillin.'],
    ['Принима́йте э́то лека́рство три ра́за в день.','Take this medicine three times a day.'],
    ['Выздора́вливайте!','Get well soon!']
  ],
  note:'<strong>Grammar spot:</strong> “My … hurts” is literally “at me hurts …”: <span class="ru">У меня́ боли́т</span> + Nominative. For plural body parts use <span class="ru">боля́т</span>: <span class="ru">У меня́ боля́т глаза́</span> (my eyes hurt). Allergic <em>to</em> = <span class="ru">аллерги́я на</span> + Accusative.',
  dlg:{a:'Врач',b:'А́нна',situ:'Anna has caught a cold and visits a doctor.',lines:[
    [0,'Здра́вствуйте! Сади́тесь. Что вас беспоко́ит?','Hello! Have a seat. What’s bothering you?'],
    [1,'Я пло́хо себя́ чу́вствую. У меня́ боли́т го́рло.','I feel unwell. I have a sore throat.'],
    [0,'Как давно́?','Since when?'],
    [1,'Уже́ два дня. И вчера́ была́ температу́ра.','For two days now. And yesterday I had a fever.'],
    [0,'Ка́шель есть?','Do you have a cough?'],
    [1,'Да, немно́го.','Yes, a little.'],
    [0,'Откро́йте рот, пожа́луйста… Э́то просту́да.','Open your mouth, please… It’s a cold.'],
    [1,'Что мне де́лать?','What should I do?'],
    [0,'Пе́йте мно́го тёплого ча́я и принима́йте э́то лека́рство три ра́за в день.','Drink lots of warm tea and take this medicine three times a day.'],
    [1,'Спаси́бо, до́ктор!','Thank you, doctor!'],
    [0,'Выздора́вливайте!','Get well soon!']
  ]},
  rp:{them:'Врач',situ:'You’re the patient. You have a headache and a fever.',lines:[
    [0,'Здра́вствуйте! Что вас беспоко́ит?'],
    [1,'У меня́ ___ голова́.','боли́т',['боли́т','боля́т','бо́лен'],'I have a headache.'],
    [0,'Как давно́?'],
    [1,'Уже́ три ___.','дня',['дня','дней','день'],'For three days now.'],
    [0,'Температу́ра есть?'],
    [1,'Да, ___ была́ температу́ра.','вчера́',['вчера́','за́втра','по́сле'],'Yes, I had a fever yesterday.','yesterday'],
    [0,'Аллерги́я на лека́рства есть?'],
    [1,'Да, у меня́ аллерги́я на ___.','пеницилли́н',['пеницилли́н','пеницилли́на','пеницилли́не'],'Yes, I’m allergic to penicillin.'],
    [0,'Хорошо́. Принима́йте э́то лека́рство два ра́за в день.'],
    [1,'Спаси́бо! А где ___?','апте́ка',['апте́ка','апте́ку','апте́ке'],'Thank you! And where is the pharmacy?','pharmacy'],
    [0,'На пе́рвом этаже́. Выздора́вливайте!']
  ]},
  sort:{title:'Who says it?',sub:'The patient or the doctor? Tap the right person.',labels:['🤒 Patient','👩‍⚕️ Doctor'],items:[
    ['Что вас беспоко́ит?','What’s bothering you?',1],
    ['У меня́ боли́т го́рло.','I have a sore throat.',0],
    ['Где боли́т?','Where does it hurt?',1],
    ['Откро́йте рот, пожа́луйста.','Open your mouth, please.',1],
    ['Я пло́хо себя́ чу́вствую.','I feel unwell.',0],
    ['Как давно́?','Since when?',1],
    ['Уже́ три дня.','For three days now.',0],
    ['Принима́йте э́то лека́рство.','Take this medicine.',1],
    ['У меня́ аллерги́я на пеницилли́н.','I’m allergic to penicillin.',0],
    ['Э́то серьёзно?','Is it serious?',0],
    ['Вот ваш реце́пт.','Here’s your prescription.',1],
    ['Выздора́вливайте!','Get well soon!',1]
  ]},
  build:[['У меня́ боли́т голова́.','I have a headache.'],['Я пло́хо себя́ чу́вствую.','I feel unwell.'],['У меня́ температу́ра и ка́шель.','I have a fever and a cough.'],['Принима́йте лека́рство три ра́за в день.','Take the medicine three times a day.'],['Где здесь апте́ка?','Where is the pharmacy here?']]
},
{
  id:'meeting', en:'Meeting people', ru:'Знако́мство', emoji:'👋', color:'#80eb3d', soft:'#e3fbd2',
  intro:'Introduce yourself, ask where someone is from and what they do — and keep the conversation going.',
  words:[['и́мя','first name'],['фами́лия','surname'],['страна́','country'],['го́род','city'],['рабо́та','work, job'],['студе́нт / студе́нтка','student (m / f)'],['друг / подру́га','friend (m / f)'],['язы́к','language'],['хо́бби','hobby'],['приве́т','hi'],['пока́','bye'],['до свида́ния','goodbye (polite)']],
  phrases:[
    ['Приве́т! / Здра́вствуйте!','Hi! / Hello! (polite)'],
    ['Как тебя́ зову́т?','What’s your name? (informal)'],
    ['Как вас зову́т?','What’s your name? (polite)'],
    ['Меня́ зову́т Ка́тя.','My name is Katya.'],
    ['О́чень прия́тно!','Nice to meet you!'],
    ['Отку́да ты?','Where are you from?'],
    ['Я из Малайзи́и.','I’m from Malaysia.'],
    ['Где ты живёшь?','Where do you live?'],
    ['Чем ты занима́ешься?','What do you do?'],
    ['Я студе́нтка. / Я рабо́таю ме́неджером.','I’m a student. / I work as a manager.'],
    ['Ты говори́шь по-ру́сски?','Do you speak Russian?'],
    ['Немно́го. Я учу́ ру́сский.','A little. I’m learning Russian.'],
    ['Дава́й на «ты»!','Let’s use “ты”! (switch to informal)']
  ],
  note:'<strong>ты or вы?</strong> Use <span class="ru">ты</span> with friends, family, children and people your age in relaxed settings. Use <span class="ru">вы</span> with strangers, older people, teachers and in shops or offices. When in doubt, say <span class="ru">вы</span> — a Russian will suggest <span class="ru">«Дава́й на ты!»</span> when they’re ready.',
  dlg:{a:'Ка́тя',b:'Дэ́вид',situ:'Katya and David meet at a friend’s party.',lines:[
    [0,'Приве́т! Я Ка́тя. А как тебя́ зову́т?','Hi! I’m Katya. What’s your name?'],
    [1,'Приве́т! Меня́ зову́т Дэ́вид. О́чень прия́тно!','Hi! My name is David. Nice to meet you!'],
    [0,'Мне то́же. Отку́да ты?','Me too. Where are you from?'],
    [1,'Я из Австра́лии, из Си́днея. А ты?','I’m from Australia, from Sydney. And you?'],
    [0,'Я из Санкт-Петербу́рга. Ты хорошо́ говори́шь по-ру́сски!','I’m from St Petersburg. You speak Russian well!'],
    [1,'Спаси́бо! Я учу́ ру́сский уже́ год.','Thanks! I’ve been learning Russian for a year.'],
    [0,'Чем ты занима́ешься?','What do you do?'],
    [1,'Я программи́ст. А ты?','I’m a programmer. And you?'],
    [0,'Я учи́тельница. Преподаю́ англи́йский.','I’m a teacher. I teach English.'],
    [1,'Здо́рово!','Cool!']
  ]},
  rp:{them:'О́льга',situ:'You meet Olga at a language exchange. Introduce yourself.',lines:[
    [0,'Приве́т! Меня́ зову́т О́льга. А тебя́?'],
    [1,'Приве́т! Меня́ ___ Сэм.','зову́т',['зову́т','зовёт','и́мя'],'Hi! My name is Sam.'],
    [1,'О́чень ___!','прия́тно',['прия́тно','хорошо́','спаси́бо'],'Nice to meet you!'],
    [0,'Мне то́же! Отку́да ты?'],
    [1,'Я из ___.','Кана́ды',['Кана́ды','Кана́да','Кана́де'],'I’m from Canada.','Canada'],
    [0,'А где ты живёшь?'],
    [1,'Сейча́с я ___ в Москве́.','живу́',['живу́','живёт','жить'],'Now I live in Moscow.'],
    [0,'Ты студе́нт?'],
    [1,'Нет, я ___ инжене́ром.','рабо́таю',['рабо́таю','рабо́тает','рабо́та'],'No, I work as an engineer.'],
    [0,'Ты о́чень хорошо́ говори́шь по-ру́сски!'],
    [1,'Спаси́бо! Я ___ ру́сский два го́да.','учу́',['учу́','у́чит','учи́ться'],'Thanks! I’ve been learning Russian for two years.','I’ve been learning']
  ]},
  sort:{title:'ты or вы?',sub:'Is it informal (ты — friends) or polite (вы — strangers, older people)?',labels:['😎 Informal (ты)','🤝 Polite (вы)'],items:[
    ['Приве́т!','Hi!',0],
    ['Здра́вствуйте!','Hello!',1],
    ['Как тебя́ зову́т?','What’s your name?',0],
    ['Как вас зову́т?','What’s your name?',1],
    ['Отку́да ты?','Where are you from?',0],
    ['Отку́да вы?','Where are you from?',1],
    ['Пока́!','Bye!',0],
    ['До свида́ния!','Goodbye!',1],
    ['Чем ты занима́ешься?','What do you do?',0],
    ['Где вы живёте?','Where do you live?',1],
    ['Ты говори́шь по-ру́сски?','Do you speak Russian?',0],
    ['Вы говори́те по-англи́йски?','Do you speak English?',1],
    ['Ра́да тебя́ ви́деть!','Nice to see you!',0],
    ['О́чень рад с ва́ми познако́миться.','Very pleased to meet you.',1]
  ]},
  build:[['Меня́ зову́т Ка́тя.','My name is Katya.'],['Я из Малайзи́и.','I’m from Malaysia.'],['Ты говори́шь по-ру́сски?','Do you speak Russian?'],['Чем ты занима́ешься?','What do you do?'],['Я учу́ ру́сский уже́ год.','I’ve been learning Russian for a year.']]
}
];

/* ======================= UTIL ======================= */
const $ = (s,el=document)=>el.querySelector(s);
const shuffle = a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const plain = s=>s.replace(/́/g,'');
const norm = s=>plain(s).trim().toLowerCase().replace(/ё/g,'е');
const esc = s=>s.replace(/"/g,'&quot;');
let stressOn = (()=>{try{return localStorage.getItem('rc-stress')!=='off'}catch(e){return true}})();
const store = {
  get(){try{return JSON.parse(localStorage.getItem('pb-progress')||'{}')}catch(e){return {}}},
  set(k,v){try{const d=this.get();d[k]=v;localStorage.setItem('pb-progress',JSON.stringify(d))}catch(e){}}
};

/* stress marks: hide them on screen when the toggle is off */
function processText(n){ if(!stressOn && n.data.indexOf('́')>-1) n.data=plain(n.data); }
function stressTree(root){const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const l=[];let n;while((n=tw.nextNode()))l.push(n);l.forEach(processText);}
new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(nd=>{
  if(nd.nodeType===3) processText(nd); else if(nd.nodeType===1) stressTree(nd);
}))).observe(document.getElementById('main'),{childList:true,subtree:true});
function setStressBtn(){const b=$('#stressBtn'); b.innerHTML=`<span class="ru">а́</span> Stress: ${stressOn?'on':'off'}`; b.classList.toggle('off',!stressOn);}

document.addEventListener('click',e=>{
  const en=e.target.closest('.hide-en .en'); if(en) en.classList.toggle('show');
});

/* ======================= NAV ======================= */
function renderNav(active){
  const p=store.get();
  $('#nav').innerHTML = `<a href="#home" class="${active==='home'?'on':''}">Start</a>` +
    THEMES.map(t=>`<a href="#${t.id}" class="${active===t.id?'on':''}"><span class="em" style="background:${t.color}">${t.emoji}</span>${t.en}${p['rp-'+t.id]!=null?' <span class="done">✓</span>':''}</a>`).join('');
  const on=$('#nav a.on'); if(on) on.scrollIntoView({inline:'center',block:'nearest'});
}

/* ======================= HOME ======================= */
function homeView(){
  const p=store.get();
  const mq=['Приве́т!','Счёт, пожа́луйста','Мне ну́жно в аэропо́рт','У меня́ боли́т голова́','О́чень прия́тно!','Мо́жно ка́ртой?','Как тебя́ зову́т?'];
  const row=mq.map(x=>`<span>${x}</span><span class="s">✦</span>`).join('');
  return `
  <div class="marquee"><div>${row}${row}</div></div>
  <div class="hero">
    <span class="sticker">RU ✦ EN</span>
    <span class="tag">Boqkova Teach</span>
    <h1>Russian for<br><em>real life.</em></h1>
    <p>Pick a situation. Learn the key words and phrases, read a real dialogue, then play your part in the role play. Every Russian word has its stress marked (´).</p>
  </div>
  <div class="grid">
    ${THEMES.map((t,i)=>`<a class="ccard" href="#${t.id}" style="--cc:${t.color}">
      <span class="big emo">${t.emoji}</span>
      <div class="num">Situation ${i+1}</div>
      <h3>${t.en}</h3>
      <div class="q">${t.ru}</div>
      <span class="badge">${p['rp-'+t.id]!=null?`Role play: ${p['rp-'+t.id]} mistake${p['rp-'+t.id]===1?'':'s'}`:'Not started'}</span>
    </a>`).join('')}
  </div>
  <div class="note"><b>How to use each situation:</b> 1) learn the words, 2) learn the phrases, 3) read the dialogue — try hiding the English, 4) play the role play, 5) build sentences from scrambled words, 6) play “Who says it?”.</div>
  <div class="note"><b>Stress marks:</b> the accent ( ´ ) shows which syllable to stress: <span class="ru">пожа́луйста, меню́</span>. <span class="ru">ё</span> is always stressed. Use the <b>Stress</b> button at the top to hide them and test yourself.</div>
  <a class="cta" href="#${THEMES[0].id}">Start with the café →</a>`;
}

/* ======================= THEME VIEW ======================= */
function themeView(t,i){
  const prev=THEMES[i-1], next=THEMES[i+1], d=t.dlg;
  return `
  <div class="case-head">
    <span class="big" style="-webkit-text-stroke:0;color:inherit;font-size:150px;bottom:-10px;opacity:.95">${t.emoji}</span>
    <div class="num">Situation ${i+1} of ${THEMES.length}</div>
    <h1>${t.en}</h1>
    <div class="rn ru">${t.ru}</div>
    <p class="sum">${t.intro}</p>
  </div>

  <section class="blk"><h2><span class="n">1</span>Words</h2>
    <div class="words">${t.words.map(w=>`<div class="word"><div><span class="ru">${w[0]}</span><span class="en">${w[1]}</span></div></div>`).join('')}</div>
  </section>

  <section class="blk"><h2><span class="n">2</span>Key phrases</h2>
    <div class="toolbar"><div class="seg" data-seg="phr"><button data-v="show" class="on">Show English</button><button data-v="hide">Hide English</button></div></div>
    <div class="phr" id="phr">${t.phrases.map(p=>`<div class="ph"><div class="tx"><span class="ru">${p[0]}</span><span class="en">${p[1]}</span></div></div>`).join('')}</div>
    <div class="tip">${t.note}</div>
  </section>

  <section class="blk"><h2><span class="n">3</span>Dialogue</h2>
    <div class="toolbar">
      <div class="seg" data-seg="dlg"><button data-v="show" class="on">Show English</button><button data-v="hide">Hide English</button></div>
    </div>
    <div class="chat" id="dlg">
      <div class="situ" style="align-self:center;margin:0 0 4px">${d.situ}</div>
      ${d.lines.map(l=>`<div class="ln ${l[0]?'r':''}"><div class="who">${l[0]?d.b:d.a}</div><div class="bub"><div><span class="ru">${l[1]}</span><span class="en">${l[2]}</span></div></div></div>`).join('')}
    </div>
  </section>

  <section class="blk"><h2><span class="n">4</span>Role play: your turn</h2>
    <div class="chat" id="rp"></div>
  </section>

  <section class="blk"><h2><span class="n">5</span>Build the sentence</h2>
    <div class="build" id="bld"></div>
  </section>

  <section class="blk"><h2><span class="n">6</span>${t.sort.title}</h2>
    <div class="build" id="srt"></div>
  </section>

  <div class="pager">
    ${prev?`<a href="#${prev.id}">← ${prev.en}</a>`:`<a href="#home">← Start</a>`}
    ${next?`<a href="#${next.id}">${next.en} →</a>`:`<a href="#home">Back to start →</a>`}
  </div>`;
}

function mountToggles(){
  document.querySelectorAll('[data-seg]').forEach(seg=>{
    seg.onclick=e=>{
      const v=e.target.dataset.v; if(!v) return;
      seg.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));
      const box = seg.dataset.seg==='phr'?$('#phr'):$('#dlg');
      box.classList.toggle('hide-en',v==='hide');
      box.querySelectorAll('.en.show').forEach(x=>x.classList.remove('show'));
    };
  });
}

/* ---------- role play ---------- */
function mountRoleplay(t){
  const el=$('#rp'), rp=t.rp;
  let step, mistakes, filled;
  function start(){step=0;mistakes=0;filled={};render();}
  function lineHTML(l,k,active){
    const you=l[0]===1;
    let ru=l[1];
    if(l[2]){
      const g = filled[k]?`<span class="gap done">${l[2]}</span>`:`<span class="gap">?</span>`;
      ru = ru.replace('___',g);
      if(l[5] && !filled[k]) ru += ` <span class="hint">(${l[5]})</span>`;
    }
    const en = l[2]&&filled[k]?`<span class="en">${l[4]}</span>`:'';
    let html=`<div class="ln ${you?'r':''}"><div class="who">${you?'You':rp.them}</div><div class="bub"><div><span class="ru">${ru}</span>${en}</div></div>`;
    if(active) html+=`<div class="rp-opts">${shuffle(l[3]).map(o=>`<button class="opt" data-o="${esc(o)}">${o}</button>`).join('')}</div>`;
    return html+'</div>';
  }
  function render(){
    // advance through lines without gaps
    while(step<rp.lines.length && (!rp.lines[step][2] || filled[step])) step++;
    let html=`<div class="situ" style="align-self:center;margin:0 0 4px">🎭 ${rp.situ}</div>`;
    for(let k=0;k<rp.lines.length;k++){
      if(k>step) break;
      html+=lineHTML(rp.lines[k],k,k===step);
    }
    if(step>=rp.lines.length){
      const prev=store.get()['rp-'+t.id];
      if(prev==null||mistakes<prev) store.set('rp-'+t.id,mistakes);
      renderNav(t.id);
      html+=`<div class="rp-end"><div class="bigscore">${mistakes===0?'Отли́чно! 🎉':mistakes<=2?'Молоде́ц! 👏':'Хорошо́! 💪'}</div>
        <div>${mistakes===0?'No mistakes — perfect!':`${mistakes} mistake${mistakes>1?'s':''}. Try again for a perfect score!`}</div>
        <button class="btn c" style="margin-top:12px">↺ Play again</button></div>`;
    }
    el.innerHTML=html;
    el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>choose(b));
    const end=el.querySelector('.rp-end .btn'); if(end) end.onclick=start;
  }
  function choose(b){
    const l=rp.lines[step];
    if(norm(b.dataset.o)===norm(l[2])){
      filled[step]=true; step++; render();
      const last=el.querySelectorAll('.ln'); const tgt=last[last.length-1]; if(tgt) tgt.scrollIntoView({behavior:'smooth',block:'nearest'});
    } else {
      mistakes++; b.classList.add('wrong','shake'); b.disabled=true;
    }
  }
  start();
}

/* ---------- build the sentence ---------- */
function mountBuild(t){
  const el=$('#bld');
  let order=shuffle(t.build.map((_,i)=>i)), idx=0, score=0, placed, pool, tokens, checked;
  function load(){
    const s=t.build[order[idx]][0];
    tokens=s.split(' ').map((w,i)=>({w,i}));
    pool=shuffle(tokens.map(x=>x.i));
    if(pool.every((v,k)=>v===k) && pool.length>1) pool.reverse();
    placed=[]; checked=false; render();
  }
  function render(){
    if(idx>=order.length){
      el.innerHTML=`<h3>🧩 Build the sentence</h3><div class="g-center"><div class="bigscore">${score}/${order.length}</div><div>${score===order.length?'All correct first time!':'Sentences right on the first try.'}</div><button class="btn light" style="margin-top:14px">Play again</button></div>`;
      el.querySelector('button').onclick=()=>{order=shuffle(order);idx=0;score=0;load();}; return;
    }
    const [ru,en]=t.build[order[idx]];
    el.innerHTML=`<h3>🧩 Build the sentence</h3><p class="gsub">Tap the words in the right order. Tap a word in the line to send it back.</p>
      <div class="b-en">“${en}”</div>
      <div class="b-line" id="bl">${placed.map(i=>`<button class="tok" data-p="${i}">${tokens[i].w}</button>`).join('')}</div>
      <div class="b-pool">${pool.map(i=>`<button class="tok" data-i="${i}">${tokens[i].w}</button>`).join('')}</div>
      <div class="b-foot"><div class="g-stats" style="margin:0"><div>${idx+1} / ${order.length}</div><div>Score: ${score}</div></div>
      <div style="display:flex;gap:8px"><button class="btn light" id="bnext" style="display:none">Next →</button></div></div>`;
    el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{ if(checked) return; const i=+b.dataset.i; pool=pool.filter(x=>x!==i); placed.push(i); render(); if(!pool.length) check(); });
    el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{ if(checked) return; const i=+b.dataset.p; placed=placed.filter(x=>x!==i); pool.push(i); render(); });
  }
  let firstTry=true;
  function check(){
    const ok = placed.map(i=>tokens[i].w).join(' ')===tokens.map(x=>x.w).join(' ');
    const bl=$('#bl',el);
    if(ok){
      checked=true; bl.classList.add('ok'); if(firstTry) score++;
      const n=$('#bnext',el); n.style.display=''; n.onclick=()=>{idx++;firstTry=true;load();};
    } else {
      firstTry=false; bl.classList.add('no');
      setTimeout(()=>{pool=shuffle(placed);placed=[];render();},700);
    }
  }
  load();
}


/* ---------- who says it / ты or вы ---------- */
function mountSort(t){
  const el=$('#srt'), g=t.sort, N=10;
  let deck, i, score, streak, lock;
  function start(){deck=shuffle(g.items).slice(0,N); i=0; score=0; streak=0; lock=false; render();}
  function render(){
    if(i>=deck.length){
      const key='sort-'+t.id, best=Math.max(store.get()[key]||0,score); store.set(key,best);
      el.innerHTML=`<h3>🎯 ${g.title}</h3><div class="g-center"><div class="bigscore">${score}/${deck.length}</div>
        <div>${score===deck.length?'Perfect! Отли́чно!':score>=7?'Great job! Молоде́ц!':'Keep practising! Попро́буй ещё!'}</div>
        <div style="color:#d6d0d3;margin-top:4px">Best: ${best}/${deck.length}</div>
        <button class="btn light" style="margin-top:14px">Play again</button></div>`;
      el.querySelector('button').onclick=start; return;
    }
    const c=deck[i];
    el.innerHTML=`<h3>🎯 ${g.title}</h3><p class="gsub">${g.sub}</p>
      <div class="g-stats"><div>${i+1} / ${deck.length}</div><div>Score: ${score}</div><div>Streak: ${streak}🔥</div></div>
      <div class="s-card"><span class="ru">${c[0]}</span><span class="s-en" id="sen">&nbsp;</span></div>
      <div class="s-btns">${g.labels.map((l,k)=>`<button data-k="${k}">${l}</button>`).join('')}</div>`;
    el.querySelectorAll('.s-btns button').forEach(b=>b.onclick=()=>pick(b));
  }
  function pick(b){
    if(lock) return; lock=true;
    const c=deck[i], k=+b.dataset.k, ok=k===c[2];
    if(ok){score++;streak++;} else streak=0;
    el.querySelectorAll('.s-btns button').forEach(x=>{ if(+x.dataset.k===c[2]) x.classList.add('right'); else if(x===b) x.classList.add('wrong'); });
    $('#sen',el).innerHTML=(ok?'✓ ':'✗ ')+c[1];
    setTimeout(()=>{i++;lock=false;render();}, ok?1100:2000);
  }
  start();
}

/* ======================= ROUTER ======================= */
function route(){
  const h=(location.hash||'#home').slice(1);
  const i=THEMES.findIndex(t=>t.id===h);
  const root=document.documentElement, main=$('#main');
  if(i>=0){
    const t=THEMES[i];
    root.style.setProperty('--c',t.color); root.style.setProperty('--c-soft',t.soft);
    main.innerHTML=`<div class="view on">${themeView(t,i)}</div>`;
    mountToggles(); mountRoleplay(t); mountBuild(t); mountSort(t);
    renderNav(t.id);
  } else {
    root.style.setProperty('--c','#fe98c0'); root.style.setProperty('--c-soft','#ffe3ee');
    main.innerHTML=`<div class="view on">${homeView()}</div>`;
    renderNav('home');
  }
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);
$('#stressBtn').onclick=()=>{
  stressOn=!stressOn; try{localStorage.setItem('rc-stress',stressOn?'on':'off')}catch(e){}
  setStressBtn(); route();
};
setStressBtn();
route();
