
/* ======================= DATA ======================= */
const NOUNS = {
  'мама':['мама','мамы','маме','маму','мамой','маме'],
  'брат':['брат','брата','брату','брата','братом','брате'],
  'стол':['стол','стола','столу','стол','столом','столе'],
  'окно':['окно','окна','окну','окно','окном','окне'],
  'неделя':['неделя','недели','неделе','неделю','неделей','неделе'],
  'музей':['музей','музея','музею','музей','музеем','музее'],
  'дверь':['дверь','двери','двери','дверь','дверью','двери'],
  'книга':['книга','книги','книге','книгу','книгой','книге'],
  'море':['море','моря','морю','море','морем','море'],
  'учитель':['учитель','учителя','учителю','учителя','учителем','учителе'],
  'Россия':['Россия','России','России','Россию','Россией','России'],
  'город':['город','города','городу','город','городом','городе'],
  'подруга':['подруга','подруги','подруге','подругу','подругой','подруге'],
  'письмо':['письмо','письма','письму','письмо','письмом','письме'],
  'друг':['друг','друга','другу','друга','другом','друге'],
  'школа':['школа','школы','школе','школу','школой','школе'],
  'словарь':['словарь','словаря','словарю','словарь','словарём','словаре'],
  'кошка':['кошка','кошки','кошке','кошку','кошкой','кошке'],
  'папа':['папа','папы','папе','папу','папой','папе'],
  'площадь':['площадь','площади','площади','площадь','площадью','площади'],
  'парк':['парк','парка','парку','парк','парком','парке'],
  'сестра':['сестра','сестры','сестре','сестру','сестрой','сестре']
};

const CASES = [
{
  id:'nominative', en:'Nominative', ru:'Именительный падеж', letter:'И', color:'#fe98c0', soft:'#ffe3ee',
  q:'Кто? Что?', qen:'Who? What?',
  sum:'The “dictionary form”. It names the subject of the sentence — the person or thing doing the action.',
  uses:[
    {t:'Subject of the sentence', d:'Who or what is doing the action.', ru:'*Мама* читает.', en:'Mum is reading.'},
    {t:'After “это”', d:'“This is…” introduces something by name.', ru:'Это мой *брат*.', en:'This is my brother.'},
    {t:'Naming / defining', d:'Saying what something or someone is (no verb “to be” in the present).', ru:'Мой друг — *врач*.', en:'My friend is a doctor.'},
    {t:'Having (with “у … есть”)', d:'The thing you have is the subject in Russian.', ru:'У меня есть *кошка*.', en:'I have a cat.'}
  ],
  endings:[
    ['Masculine','— / -й / -ь','стол, музей, словарь'],
    ['Feminine','-а / -я / -ь','мама, неделя, дверь'],
    ['Neuter','-о / -е','окно, море']
  ],
  plural:'<b>Plural:</b> masculine & feminine → <b>-ы / -и</b> (столы, мамы, недели); neuter → <b>-а / -я</b> (о́кна, моря́). Careful: plural stress can move!',
  pron:['я','ты','он','она','мы','вы','они'],
  examples:[
    ['*Москва* — большой город.','Moscow is a big city.'],
    ['*Студенты* читают текст.','The students are reading a text.'],
    ['Где мой *телефон*?','Where is my phone?'],
    ['*Погода* сегодня хорошая.','The weather is nice today.'],
    ['Это *Анна*, моя подруга.','This is Anna, my friend.']
  ],
  tip:'<strong>Spelling rule:</strong> after <span class="ru">г, к, х, ж, ш, щ, ч</span> write <span class="ru">и</span>, never <span class="ru">ы</span>: книга → <span class="ru">книги</span>, ключ → <span class="ru">ключи</span>.',
  exTitle:'Make the plural (Nominative plural)',
  ex:[
    ['На столе лежат ___.','книга, pl.','книги',['книгы','книга','книгу'],'There are books lying on the table.'],
    ['Это новые ___.','стол, pl.','столы',['столи','стола','столе'],'These are new tables.'],
    ['В комнате большие ___.','окно, pl.','о́кна',['о́кны','окно́','окне́'],'There are big windows in the room.'],
    ['___ читают текст.','студент, pl.','Студенты',['Студенти','Студента','Студенту'],'The students are reading a text.'],
    ['Мои ___ живут в Казани.','подруга, pl.','подруги',['подругы','подруга','подругу'],'My friends live in Kazan.'],
    ['Все ___ сегодня открыты.','музей, pl.','музеи',['музейы','музея','музеем'],'All the museums are open today.'],
    ['___ летят быстро.','неделя, pl.','Недели',['Неделы','Неделю','Неделе'],'The weeks fly by quickly.'],
    ['Где мои ___?','ключ, pl.','ключи',['ключы','ключа','ключе'],'Where are my keys?']
  ]
},
{
  id:'genitive', en:'Genitive', ru:'Родительный падеж', letter:'Р', color:'#ffd23f', soft:'#fff4c9',
  q:'Кого? Чего?', qen:'Of whom? Of what?',
  sum:'The case of “of”: possession, absence, quantity — and the case used after many prepositions.',
  uses:[
    {t:'Possession (“of”, ’s)', d:'The owner goes after the thing, in Genitive.', ru:'Это машина *папы*.', en:'This is dad’s car.'},
    {t:'Absence with “нет”', d:'“There is no…”, “I don’t have…”.', ru:'У меня нет *времени*.', en:'I don’t have time.'},
    {t:'Quantity & numbers', d:'After много, мало, сколько, and numbers 2–4 (singular).', ru:'Два *стола*, чашка *чая*.', en:'Two tables, a cup of tea.'},
    {t:'After prepositions', d:'у, из, от, до, без, для, после, около…', ru:'Я из *России*.', en:'I’m from Russia.'}
  ],
  endings:[
    ['Masculine','-а / -я','стола, музея, словаря'],
    ['Feminine','-ы / -и','мамы, недели, двери'],
    ['Neuter','-а / -я','окна, моря']
  ],
  plural:'<b>Plural</b> (the trickiest!): masculine <b>-ов / -ев</b> (столов, музеев); feminine & neuter often <b>no ending</b> (мам, окон); nouns in -ь and after ж/ш/ч/щ → <b>-ей</b> (дверей, словарей).',
  pron:['меня','тебя','его','её','нас','вас','их'],
  examples:[
    ['У меня нет *брата*.','I don’t have a brother.'],
    ['Это подарок для *мамы*.','This is a present for mum.'],
    ['Дайте, пожалуйста, бутылку *воды*.','A bottle of water, please.'],
    ['Мы работаем до *вечера*.','We work until the evening.'],
    ['У *Анны* есть собака.','Anna has a dog.']
  ],
  tip:'<strong>Numbers:</strong> 1 → Nominative (один стол), 2, 3, 4 → Genitive singular (два <span class="ru">стола</span>), 5 and more → Genitive plural (пять <span class="ru">столов</span>).',
  exTitle:'Put the word into the Genitive',
  ex:[
    ['У меня нет ___.','сестра','сестры',['сестра','сестре','сестру'],'I don’t have a sister.'],
    ['Я из ___.','Москва','Москвы',['Москва','Москве','Москву'],'I’m from Moscow.'],
    ['Дайте стакан ___.','вода','воды',['вода','воде','воду'],'Give me a glass of water.'],
    ['Это дом ___.','брат','брата',['брат','брату','братом'],'This is my brother’s house.'],
    ['Я пью кофе без ___.','сахар','сахара',['сахар','сахаре','сахаром'],'I drink coffee without sugar.'],
    ['Что ты делаешь после ___?','урок','урока',['урок','уроку','уроке'],'What are you doing after the lesson?'],
    ['В комнате нет ___.','окно','окна',['окно','окну','окне'],'There is no window in the room.'],
    ['У ___ есть кот.','Анна','Анны',['Анна','Анне','Анну'],'Anna has a cat.']
  ]
},
{
  id:'dative', en:'Dative', ru:'Дательный падеж', letter:'Д', color:'#80eb3d', soft:'#e3fbd2',
  q:'Кому? Чему?', qen:'To whom? To what?',
  sum:'The “receiver” case: the person you give, send, say or show something to — and the person who feels or needs something.',
  uses:[
    {t:'Indirect object (“to”)', d:'With давать, дарить, звонить, писать, помогать…', ru:'Я звоню *маме*.', en:'I’m calling mum.'},
    {t:'Likes & needs', d:'нравиться, надо, нужно, можно — the person is in Dative.', ru:'*Мне* нравится чай.', en:'I like tea.'},
    {t:'Age', d:'The person whose age you give.', ru:'*Брату* двадцать лет.', en:'My brother is twenty.'},
    {t:'After к and по', d:'к = towards a person/place; по = along, around, by.', ru:'Я иду к *врачу*.', en:'I’m going to the doctor.'}
  ],
  endings:[
    ['Masculine','-у / -ю','столу, музею, словарю'],
    ['Feminine','-е  (-ь, -ия → -и)','маме, неделе, двери, России'],
    ['Neuter','-у / -ю','окну, морю']
  ],
  plural:'<b>Plural:</b> <b>-ам / -ям</b> for all genders (столам, мамам, окнам, дверям).',
  pron:['мне','тебе','ему','ей','нам','вам','им'],
  examples:[
    ['Я дал книгу *брату*.','I gave the book to my brother.'],
    ['*Маме* пятьдесят лет.','Mum is fifty.'],
    ['*Нам* надо работать.','We need to work.'],
    ['Мы гуляем по *парку*.','We’re walking around the park.'],
    ['Я помогаю *другу*.','I’m helping my friend.']
  ],
  tip:'<strong>“Мне нравится”:</strong> literally “it is pleasing to me”. The person who likes is Dative; the thing liked is the Nominative subject: <span class="ru">Мне нравится <b>музыка</b></span>, <span class="ru">Ему нравятся <b>фильмы</b></span>.',
  exTitle:'Put the word into the Dative',
  ex:[
    ['Я звоню ___.','мама','маме',['мама','мамы','маму'],'I’m calling mum.'],
    ['Подари цветы ___.','сестра','сестре',['сестра','сестры','сестрой'],'Give flowers to your sister.'],
    ['___ нравится футбол.','брат','Брату',['Брат','Брата','Братом'],'My brother likes football.'],
    ['Я иду к ___.','друг','другу',['друг','друга','другом'],'I’m going to my friend’s.'],
    ['___ двадцать пять лет.','Анна','Анне',['Анна','Анну','Анной'],'Anna is twenty-five.'],
    ['Мы гуляем по ___.','город','городу',['город','города','городе'],'We’re walking around the city.'],
    ['Я пишу письмо ___.','учитель','учителю',['учитель','учителя','учителем'],'I’m writing a letter to the teacher.'],
    ['Он помогает ___.','Мария','Марии',['Мария','Марию','Марией'],'He is helping Maria.']
  ]
},
{
  id:'accusative', en:'Accusative', ru:'Винительный падеж', letter:'В', color:'#3dd0eb', soft:'#d4f5fb',
  q:'Кого? Что?', qen:'Whom? What?',
  sum:'The case of the direct object — the thing or person that the action happens to. Also used for direction (“into, to”).',
  uses:[
    {t:'Direct object', d:'What you read, see, love, buy, want…', ru:'Я читаю *книгу*.', en:'I’m reading a book.'},
    {t:'Direction with в / на', d:'Where to? Movement into a place.', ru:'Мы идём в *школу*.', en:'We’re going to school.'},
    {t:'Days of the week', d:'“On Monday” = в + Accusative.', ru:'В *субботу* я отдыхаю.', en:'On Saturday I rest.'},
    {t:'After через, про', d:'через = through / in (time); про = about (informal).', ru:'Через *неделю*.', en:'In a week.'}
  ],
  endings:[
    ['Masculine','inanimate = Nom; animate = Gen','стол → стол; брат → брата'],
    ['Feminine','-а → -у, -я → -ю (-ь no change)','маму, неделю, дверь'],
    ['Neuter','= Nominative','окно, море']
  ],
  plural:'<b>Plural:</b> inanimate = Nominative plural (столы, книги); animate = Genitive plural (братьев, мам).',
  pron:['меня','тебя','его','её','нас','вас','их'],
  examples:[
    ['Я люблю *маму*.','I love mum.'],
    ['Я вижу *брата*.','I see my brother.'],
    ['Он купил *стол*.','He bought a table.'],
    ['Мы идём в *кино*.','We’re going to the cinema.'],
    ['Позвони мне в *пятницу*.','Call me on Friday.']
  ],
  tip:'<strong>Good news:</strong> only two kinds of noun change in the Accusative singular — feminine nouns in <span class="ru">-а/-я</span> (книга → книгу) and <em>animate</em> masculine nouns (people & animals: друг → друга). Everything else looks like the Nominative.',
  exTitle:'Put the word into the Accusative',
  ex:[
    ['Я пью ___.','вода','воду',['вода','воды','воде'],'I’m drinking water.'],
    ['Я жду ___.','подруга','подругу',['подруга','подруги','подругой'],'I’m waiting for my friend.'],
    ['Ты знаешь ___?','Иван','Ивана',['Иван','Ивану','Иване'],'Do you know Ivan?'],
    ['Мы смотрим ___.','фильм','фильм',['фильма','фильму','фильмом'],'We’re watching a film.'],
    ['Она идёт в ___.','школа','школу',['школа','школе','школы'],'She is going to school.'],
    ['Я люблю ___.','музыка','музыку',['музыка','музыке','музыки'],'I love music.'],
    ['Он открывает ___.','окно','окно',['окна','окну','окном'],'He is opening the window.'],
    ['Я позвоню в ___.','пятница','пятницу',['пятница','пятнице','пятницы'],'I’ll call on Friday.']
  ]
},
{
  id:'instrumental', en:'Instrumental', ru:'Творительный падеж', letter:'Т', color:'#b9a1ff', soft:'#ece5ff',
  q:'Кем? Чем?', qen:'By whom? With what?',
  sum:'The “tool” case: what you do something with. Also “together with” (с), professions, and location prepositions like под, над, перед.',
  uses:[
    {t:'Tool or means', d:'What you use to do something (no preposition!).', ru:'Я пишу *ручкой*.', en:'I write with a pen.'},
    {t:'Together with: с', d:'With a person or added thing.', ru:'Кофе с *молоком*.', en:'Coffee with milk.'},
    {t:'Profession & becoming', d:'After работать, быть (past/future), стать.', ru:'Он работает *врачом*.', en:'He works as a doctor.'},
    {t:'Location & interests', d:'над, под, перед, за, между; интересоваться, заниматься.', ru:'Кошка под *столом*.', en:'The cat is under the table.'}
  ],
  endings:[
    ['Masculine','-ом / -ем (-ём)','столом, музеем, словарём'],
    ['Feminine','-ой / -ей  (-ь → -ью)','мамой, неделей, дверью'],
    ['Neuter','-ом / -ем','окном, морем']
  ],
  plural:'<b>Plural:</b> <b>-ами / -ями</b> for all genders (столами, мамами, окнами, дверями).',
  pron:['мной','тобой','им','ей','нами','вами','ими'],
  examples:[
    ['Я гуляю с *собакой*.','I’m walking the dog.'],
    ['Я интересуюсь *музыкой*.','I’m interested in music.'],
    ['Она хочет стать *учительницей*.','She wants to become a teacher.'],
    ['Машина стоит перед *домом*.','The car is parked in front of the house.'],
    ['Мы едим суп *ложкой*.','We eat soup with a spoon.']
  ],
  tip:'<strong>Spelling:</strong> after <span class="ru">ж, ш, щ, ч, ц</span> the unstressed ending is <span class="ru">-ей / -ем</span>, not -ой / -ом: <span class="ru">с Машей, с Сашей, с отцом</span> (stressed, so -ом).',
  exTitle:'Put the word into the Instrumental',
  ex:[
    ['Чай с ___, пожалуйста.','сахар','сахаром',['сахар','сахара','сахаре'],'Tea with sugar, please.'],
    ['Я режу хлеб ___.','нож','ножом',['нож','ножа','ноже'],'I cut bread with a knife.'],
    ['Она хочет стать ___.','учительница','учительницей',['учительница','учительницу','учительницы'],'She wants to become a teacher.'],
    ['Я иду в кино с ___.','подруга','подругой',['подруга','подругу','подруге'],'I’m going to the cinema with my friend.'],
    ['Мяч под ___.','кровать','кроватью',['кровать','кровати','кроватей'],'The ball is under the bed.'],
    ['Он занимается ___.','спорт','спортом',['спорт','спорта','спорте'],'He does sport.'],
    ['Я говорю с ___.','мама','мамой',['мама','маму','маме'],'I’m talking with mum.'],
    ['Машина стоит перед ___.','дом','домом',['дом','дома','доме'],'The car is in front of the house.']
  ]
},
{
  id:'prepositional', en:'Prepositional', ru:'Предложный падеж', letter:'П', color:'#eb583d', soft:'#fbdcd5',
  q:'О ком? О чём? Где?', qen:'About whom/what? Where?',
  sum:'Always used with a preposition. It answers “where?” (в, на) and “about what?” (о). Often the first case students learn!',
  uses:[
    {t:'Location: в / на', d:'Where something is (not where it’s going).', ru:'Я живу в *Москве*.', en:'I live in Moscow.'},
    {t:'Talking & thinking: о / об', d:'With говорить, думать, читать, мечтать…', ru:'Мы говорим о *фильме*.', en:'We’re talking about the film.'},
    {t:'Transport: на', d:'How you travel.', ru:'Я еду на *автобусе*.', en:'I’m going by bus.'},
    {t:'Months & years: в', d:'“In May”, “in this year”.', ru:'Я родилась в *мае*.', en:'I was born in May.'}
  ],
  endings:[
    ['Masculine','-е','столе, музее, словаре'],
    ['Feminine','-е  (-ь → -и)','маме, неделе, двери'],
    ['Neuter','-е','окне, море'],
    ['-ия / -ие / -ий','→ -ии','России, здании, санатории']
  ],
  plural:'<b>Plural:</b> <b>-ах / -ях</b> for all genders (столах, мамах, окнах, дверях).',
  pron:['(обо) мне','тебе','нём','ней','нас','вас','них'],
  examples:[
    ['Книга лежит на *столе*.','The book is on the table.'],
    ['Она работает в *больнице*.','She works in a hospital.'],
    ['Я думаю о *маме*.','I’m thinking about mum.'],
    ['Мы были в *музее*.','We were at the museum.'],
    ['Летом мы отдыхали на *море*.','In summer we holidayed at the seaside.']
  ],
  tip:'<strong>в or на?</strong> <span class="ru">в</span> = inside an enclosed space (в школе, в банке). <span class="ru">на</span> = on a surface, at events and some fixed places (на столе, на концерте, на работе, на почте). A few masculine nouns take stressed <span class="ru">-у</span>: <span class="ru">в лесу, в саду, на полу, в аэропорту</span>.',
  exTitle:'Put the word into the Prepositional',
  ex:[
    ['Я живу в ___.','Россия','России',['Россия','Россию','Россией'],'I live in Russia.'],
    ['Кот спит на ___.','диван','диване',['диван','дивана','диваном'],'The cat is sleeping on the sofa.'],
    ['Мы говорим о ___.','погода','погоде',['погода','погоду','погоды'],'We’re talking about the weather.'],
    ['Он работает в ___.','банк','банке',['банк','банка','банку'],'He works in a bank.'],
    ['Вчера мы были в ___.','музей','музее',['музей','музея','музеем'],'Yesterday we were at the museum.'],
    ['Студенты сидят в ___.','аудитория','аудитории',['аудитория','аудиторие','аудиторию'],'The students are sitting in the lecture room.'],
    ['Я часто думаю о ___.','брат','брате',['брат','брата','брату'],'I often think about my brother.'],
    ['Мы отдыхали на ___.','море','море',['моря','морю','морем'],'We had a holiday at the seaside.']
  ]
}
];

const DETECTIVE = [
  ['*Мама* читает газету.',0,'Mum is reading the newspaper.'],
  ['Я вижу *кошку*.',3,'I see a cat.'],
  ['У меня нет *машины*.',1,'I don’t have a car.'],
  ['Я живу в *Лондоне*.',5,'I live in London.'],
  ['Я пишу *ручкой*.',4,'I write with a pen.'],
  ['Позвони *брату*!',2,'Call your brother!'],
  ['Это дом *бабушки*.',1,'This is grandma’s house.'],
  ['Мы говорим о *погоде*.',5,'We’re talking about the weather.'],
  ['*Мне* нравится чай.',2,'I like tea.'],
  ['Он работает *инженером*.',4,'He works as an engineer.'],
  ['Я иду в *школу*.',3,'I’m going to school.'],
  ['Книга лежит на *столе*.',5,'The book is on the table.'],
  ['Кофе с *молоком*, пожалуйста.',4,'Coffee with milk, please.'],
  ['Я из *Малайзии*.',1,'I’m from Malaysia.'],
  ['Я люблю *музыку*.',3,'I love music.'],
  ['*Москва* — столица России.',0,'Moscow is the capital of Russia.'],
  ['Мы идём к *врачу*.',2,'We’re going to the doctor.'],
  ['Дай мне стакан *воды*.',1,'Give me a glass of water.'],
  ['Она гуляет по *парку*.',2,'She’s walking in the park.'],
  ['Где мой *паспорт*?',0,'Where is my passport?'],
  ['Мы едем на *автобусе*.',5,'We’re going by bus.'],
  ['Я жду *друга*.',3,'I’m waiting for my friend.'],
  ['Самолёт летит над *морем*.',4,'The plane is flying over the sea.'],
  ['*Анне* двадцать лет.',2,'Anna is twenty.']
];

const PREPS = [
  ['без',1,'without'],['для',1,'for'],['из',1,'from, out of'],['от',1,'from (a person)'],['до',1,'until, up to'],['у',1,'at, by; “have”'],['после',1,'after'],['около',1,'near'],
  ['к',2,'towards'],['по',2,'along, around'],
  ['через',3,'through; in (time)'],['про',3,'about (informal)'],
  ['над',4,'above'],['перед',4,'in front of'],['между',4,'between'],['с (= together)',4,'with'],
  ['о / об',5,'about'],['при',5,'in the presence of']
];

/* ======================= STRESS ======================= */
const STRESSED = `авто́бусе а́нна а́нне а́нной а́нну а́нны аудито́рие аудито́рии аудито́рию аудито́рия аэропорту́ ба́бушки ба́нка ба́нке ба́нку больни́це больши́е большо́й бра́та бра́те бра́том бра́ту бра́тьев буты́лку бы́ли бы́стро ва́ми ве́чера ви́жу вини́тельный вода́ воде́ во́ду воды́ врачо́м врачу́ вре́мени вчера́ газе́ту говори́м говори́ть говорю́ го́род го́рода го́роде го́родом го́роду гуля́ем гуля́ет гуля́ю дава́ть да́йте дари́ть да́тельный два́дцать двере́й две́ри две́рью дверя́м дверя́ми дверя́х де́лаешь дива́н дива́на дива́не дива́ном до́ма до́ме до́мом дру́га дру́ге дру́гом дру́гу ду́мать ду́маю его́ ему́ е́дем еди́м е́ду живу́ живу́т занима́ется занима́ться звони́ть звоню́ зда́нии зна́ешь ива́н ива́на ива́не ива́ну иду́ имени́тельный и́ми инжене́ром интересова́ться интересу́юсь каза́ни кино́ ключа́ ключе́ ключи́ ключы́ кни́га кни́ге кни́ги кни́гой кни́гу кни́гы кого́ ко́мнате кому́ конце́рте ко́фе ко́шка ко́шке ко́шки ко́шкой ко́шку крова́тей крова́ти крова́ть крова́тью купи́л лежа́т лежи́т лесу́ лети́т ле́том летя́т ло́жкой ло́ндоне люблю́ ма́е мала́йзии ма́ло ма́ма ма́мам ма́мами ма́мах ма́ме ма́мой ма́му ма́мы мари́ей мари́и мари́ю мари́я ма́шей маши́на маши́ны ме́жду меня́ мечта́ть мно́го мо́жно мои́ молоко́м мо́ре мо́рем мо́рю мо́ря москва́ москве́ москву́ москвы́ моя́ музе́е музе́ев музе́ем музе́и музе́й музе́йы музе́ю музе́я му́зыка му́зыке му́зыки му́зыкой му́зыку на́до на́ми него́ неде́ле неде́лей неде́ли неде́лы неде́лю неде́ля непло́хо ни́ми но́вые ножа́ ноже́ ножо́м нра́вится нра́виться нра́вятся ну́жно о́бо оди́н окна́ о́кнам о́кнами о́кнах окне́ окно́ окно́м окну́ о́кны о́кон о́коло она́ они́ отдыха́ли отдыха́ю открыва́ет откры́ты отли́чно отцо́м паде́ж падежи́ па́па па́пе па́пой па́пу па́пы па́рка па́рке па́рком па́рку па́спорт пе́ред писа́ть письма́ письме́ письмо́ письмо́м письму́ пишу́ пло́щади пло́щадь пло́щадью пого́да пого́де пого́ду пого́ды подари́ пода́рок подру́га подру́ге подру́ги подру́гой подру́гу подру́гы пожа́луйста позвони́ позвоню́ полу́ помога́ет помога́ть помога́ю попро́буй по́сле по́чте предло́жный пя́тница пя́тнице пя́тницу пя́тницы пятьдеся́т рабо́та рабо́таем рабо́тает рабо́тать рабо́те ре́жу родила́сь роди́тельный росси́ей росси́и росси́ю росси́я ру́чкой саду́ санато́рии са́хар са́хара са́харе са́харом са́шей сего́дня сестра́ сестре́ сестро́й сестру́ сестры́ сидя́т ско́лько словаре́ словаре́й слова́рь словарю́ словаря́ смо́трим соба́ка соба́кой спо́рта спо́рте спо́ртом стака́н стои́т стола́ стола́м стола́ми стола́х столе́ столи́ столи́ца столо́в столо́м столу́ столы́ студе́нт студе́нта студе́нти студе́нту студе́нты суббо́ту су́мка твори́тельный тебе́ тебя́ телефо́н тобо́й уро́к уро́ка уро́ке уро́ку учи́теле учи́телем учи́тель учи́тельница учи́тельницей учи́тельницу учи́тельницы учи́телю учи́теля фи́льма фи́льме фи́льмом фи́льму фи́льмы футбо́л хоро́шая хорошо́ хо́чет цветы́ ча́сто ча́шка ча́я чего́ чему́ че́рез чита́ет чита́ть чита́ю чита́ют ше́рлок шко́ла шко́ле шко́лой шко́лу шко́лы э́то ащи́ть евчо́нку еле́л оди́л ва́н`.split(/\s+/);
const SDICT = {}; STRESSED.forEach(w=>{SDICT[w.replace(/́/g,'')]=w;});
const RUWORD = /[А-Яа-яЁё́]+/g;
let stressOn = (()=>{try{return localStorage.getItem('rc-stress')!=='off'}catch(e){return true}})();
function stressWord(w){
  if(/[́ёЁ]/.test(w)) return w;
  const s = SDICT[w.toLowerCase()]; if(!s) return w;
  const pos = s.indexOf('́');
  return w.slice(0,pos)+'́'+w.slice(pos);
}
function processText(n){
  const p=n.parentElement; if(!p || p.closest('.kb,script,style')) return;
  const t = stressOn ? n.data.replace(RUWORD,stressWord) : n.data.replace(/́/g,'');
  if(t!==n.data) n.data=t;
}
function stressTree(root){
  const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); const list=[]; let n;
  while((n=tw.nextNode())) list.push(n);
  list.forEach(processText);
}
new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(nd=>{
  if(nd.nodeType===3) processText(nd); else if(nd.nodeType===1) stressTree(nd);
}))).observe(document.getElementById('main'),{childList:true,subtree:true});
function setStressBtn(){const b=document.getElementById('stressBtn'); b.innerHTML=`<span class="ru">а́</span> Stress: ${stressOn?'on':'off'}`; b.classList.toggle('off',!stressOn);}

/* ======================= UTIL ======================= */
const $ = (s,el=document)=>el.querySelector(s);
const shuffle = a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pick = a=>a[Math.floor(Math.random()*a.length)];
const hl = s=>s.replace(/\*(.+?)\*/g,'<b class="hl">$1</b>');
const norm = s=>s.trim().toLowerCase().replace(/́/g,'').replace(/ё/g,'е');
const store = {
  get(){try{return JSON.parse(localStorage.getItem('rc-progress')||'{}')}catch(e){return {}}},
  set(k,v){try{const d=this.get();d[k]=v;localStorage.setItem('rc-progress',JSON.stringify(d))}catch(e){}}
};

/* ======================= NAV ======================= */
function renderNav(active){
  const p = store.get();
  $('#nav').innerHTML =
    `<a href="#home" class="${active==='home'?'on':''}">Start</a>` +
    CASES.map(c=>`<a href="#${c.id}" class="${active===c.id?'on':''}"><span class="l" style="background:${c.color}">${c.letter}</span>${c.en}${p['ex-'+c.id]>=6?' <span class="done">✓</span>':''}</a>`).join('') +
    `<a href="#games" class="${active==='games'?'on':''}">🎮 Games</a>`;
  const on = $('#nav a.on'); if(on) on.scrollIntoView({inline:'center',block:'nearest'});
}

/* ======================= HOME ======================= */
function homeView(){
  const p = store.get();
  const mama = [
    ['*Мама* дома.','Mum is at home.'],
    ['Это сумка *мамы*.','This is mum’s bag.'],
    ['Я звоню *маме*.','I’m calling mum.'],
    ['Я люблю *маму*.','I love mum.'],
    ['Я гуляю с *мамой*.','I’m out walking with mum.'],
    ['Я думаю о *маме*.','I’m thinking about mum.']
  ];
  return `
  <div class="marquee"><div>${('<span>падежи</span><span class="s">✦</span><span>russian cases</span><span class="s">✦</span><span>кто? что?</span><span class="s">✦</span><span>кого? чего?</span><span class="s">✦</span><span>кому? чему?</span><span class="s">✦</span><span>кем? чем?</span><span class="s">✦</span><span>о ком? о чём?</span><span class="s">✦</span>').repeat(2)}</div></div>
  <div class="hero">
    <span class="sticker">RU ✦ EN</span>
    <span class="tag">Boqkova Teach</span>
    <h1>Russian cases,<br><em>one by one.</em></h1>
    <p>In Russian, a noun changes its ending depending on its job in the sentence. There are six of these jobs — six <b>cases</b> (падежи). Learn each one, practise with exercises, then play.</p>
  </div>
  <div class="face">
    <h2>One word, six faces</h2>
    <p class="sub">Watch <span class="ru">мама</span> (mum) change:</p>
    ${mama.map((m,i)=>`<div class="face-row"><div class="cn"><span class="dot" style="background:${CASES[i].color}"></span>${CASES[i].en}</div><div><div class="ru">${hl(m[0]).replace(/class="hl"/,`class="hl" style="background:${CASES[i].color}"`)}</div><div class="en">${m[1]}</div></div></div>`).join('')}
  </div>
  <div class="grid">
    ${CASES.map((c,i)=>`<a class="ccard" href="#${c.id}" style="--cc:${c.color}">
      <span class="bar" style="background:${c.color}"></span>
      <span class="big">${c.letter}</span>
      <div class="num">Case ${i+1}</div>
      <h3>${c.en}</h3>
      <div class="q">${c.q}</div>
      <span class="badge">${p['ex-'+c.id]!=null?`Exercises: ${p['ex-'+c.id]}/${c.ex.length}`:'Not started'}</span>
    </a>`).join('')}
    <a class="ccard" href="#games" style="background:var(--ink);color:#fff">
      <span class="big">🎮</span>
      <div class="num" style="color:var(--ink)">Review</div>
      <h3>Mini games</h3>
      <div class="q">Mix all six cases</div>
      <span class="badge" style="background:var(--pink);color:var(--ink)">${p['rush-mixed']?'Best: '+p['rush-mixed']:'Play'}</span>
    </a>
  </div>
  <div class="note">
    <b>How Russians remember the order:</b> <span class="ru">И</span>-<span class="ru">Р</span>-<span class="ru">Д</span>-<span class="ru">В</span>-<span class="ru">Т</span>-<span class="ru">П</span>, with the rhyme <span class="ru"><i>«<b>И</b>ван <b>Р</b>одил <b>Д</b>евчонку, <b>В</b>елел <b>Т</b>ащить <b>П</b>елёнку»</i></span> — “Ivan had a baby girl and asked for a nappy to be brought.” Each first letter is a case.
  </div>
  <div class="note">
    <b>Stress marks:</b> the accent ( ´ ) shows which syllable to stress: <span class="ru">ма́ма, окно́, пого́да</span>. The letter <span class="ru">ё</span> is always stressed, so it has no mark. Real Russian texts don’t print stress marks — use the <b>Stress</b> button at the top to turn them off and test yourself.
  </div>
  <a class="cta" href="#nominative">Start with the Nominative →</a>`;
}

/* ======================= CASE VIEW ======================= */
function caseView(c,i){
  const prev = CASES[i-1], next = CASES[i+1];
  const prn = ['я','ты','он','она','мы','вы','они'];
  return `
  <div class="case-head">
    <span class="big">${c.letter}</span>
    <div class="num">Case ${i+1} of 6</div>
    <h1>${c.en}</h1>
    <div class="rn">${c.ru}</div>
    <div class="qs"><span class="ru">${c.q}</span><span>${c.qen}</span></div>
    <p class="sum">${c.sum}</p>
  </div>

  <section class="blk"><h2><span class="n">1</span>When do we use it?</h2>
    <div class="uses">${c.uses.map(u=>`<div class="use"><h3>${u.t}</h3><p>${u.d}</p><div class="ru">${hl(u.ru)}</div><div class="en">${u.en}</div></div>`).join('')}</div>
  </section>

  <section class="blk"><h2><span class="n">2</span>Endings (singular)</h2>
    <div class="tbl-wrap"><table>
      <tr><th>Gender</th><th>Ending</th><th>Examples</th></tr>
      ${c.endings.map(e=>`<tr><td><b>${e[0]}</b></td><td><span class="end">${e[1]}</span></td><td><span class="ex">${e[2]}</span></td></tr>`).join('')}
    </table></div>
    <div class="plural">${c.plural}</div>
    <div class="pron">${c.pron.map((x,k)=>`<div><small>${prn[k]}</small><span class="ru">${x}</span></div>`).join('')}</div>
    ${c.id!=='nominative'&&c.id!=='prepositional'?`<div class="plural">After a preposition, он/она/они pronouns add <b>н-</b>: <span class="ru">у него, к ней, с ними</span>.</div>`:''}
  </section>

  <section class="blk"><h2><span class="n">3</span>More examples</h2>
    <div class="exs">${c.examples.map(e=>`<div class="exl"><span class="ru">${hl(e[0])}</span><span class="en">${e[1]}</span></div>`).join('')}</div>
    <div class="tip">${c.tip}</div>
  </section>

  <section class="blk"><h2><span class="n">4</span>Exercises</h2>
    <div class="ex-top">
      <div><b>${c.exTitle}</b></div>
      <div style="display:flex;gap:8px;align-items:center">
        <div class="seg" id="mode"><button data-m="choice" class="on">Choose</button><button data-m="type">Type</button></div>
        <span class="score-pill" id="exScore">0 / ${c.ex.length}</span>
      </div>
    </div>
    <div id="exList"></div>
    <button class="btn ghost" id="exReset">↺ Try again (new order)</button>
  </section>

  <section class="blk"><h2><span class="n">5</span>Mini game</h2>
    <div class="game" id="rush"></div>
  </section>

  <div class="pager">
    ${prev?`<a href="#${prev.id}">← ${prev.en}</a>`:`<a href="#home">← Start</a>`}
    ${next?`<a href="#${next.id}">${next.en} →</a>`:`<a href="#games">Mini games →</a>`}
  </div>`;
}

/* ---------- exercises ---------- */
const KB_ROWS = ['йцукенгшщзхъ','фывапролджэ','ячсмитьбюё'];
function mountExercises(c){
  let mode='choice', score=0, answered=0, items=shuffle(c.ex);
  const list=$('#exList'), sc=$('#exScore');
  function upd(){sc.textContent=`${score} / ${items.length}`; if(answered===items.length){const prev=store.get()['ex-'+c.id]||0; if(score>=prev) store.set('ex-'+c.id,score); renderNav(c.id);}}
  function render(){
    score=0;answered=0;upd();
    list.innerHTML = items.map((q,k)=>{
      const sent = q[0].replace('___','<span class="blank">?</span>');
      const body = mode==='choice'
        ? `<div class="opts">${shuffle([q[2],...q[3]]).map(o=>`<button class="opt" data-v="${o}">${o}</button>`).join('')}</div>`
        : `<div class="type-row"><input autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="type the word…" lang="ru"><button class="btn c chk">Check</button><button class="btn ghost kbt" title="Russian keyboard">⌨︎ АБВ</button></div>
           <div class="kb">${KB_ROWS.map(r=>`<div class="r">${[...r].map(ch=>`<button data-k="${ch}">${ch}</button>`).join('')}${r===KB_ROWS[2]?'<button class="w" data-k="back">⌫</button>':''}</div>`).join('')}</div>`;
      return `<div class="q-card" data-i="${k}"><div class="qn">${k+1}</div><div class="ru sent">${sent} <span class="base">(${q[1]})</span></div>${body}<div class="fb"></div></div>`;
    }).join('');
  }
  function finish(card,q,ok,given){
    answered++; if(ok) score++;
    card.querySelector('.blank').textContent=q[2];
    card.querySelector('.blank').style.color = ok?'var(--ok)':'var(--bad)';
    const fb=card.querySelector('.fb'); fb.classList.add('show');
    fb.innerHTML = (ok?'<b style="color:var(--ok)">✓ Correct!</b> ':`<b style="color:var(--bad)">✗ Answer: <span class="ru">${q[2]}</span></b> `)+`<span class="en">— ${q[4]}</span>`;
    upd();
  }
  list.onclick = e=>{
    const card=e.target.closest('.q-card'); if(!card) return;
    const q=items[+card.dataset.i];
    if(e.target.classList.contains('opt')){
      const v=e.target.dataset.v, ok=v===q[2];
      card.querySelectorAll('.opt').forEach(b=>{b.disabled=true; if(b.dataset.v===q[2]) b.classList.add('right');});
      if(!ok) e.target.classList.add('wrong');
      finish(card,q,ok);
    }
    const inp=card.querySelector('input');
    if(e.target.classList.contains('chk')) check(card,q,inp);
    if(e.target.classList.contains('kbt')){card.querySelector('.kb').classList.toggle('show');}
    if(e.target.dataset.k && inp && !inp.disabled){
      const k=e.target.dataset.k;
      inp.value = k==='back'? inp.value.slice(0,-1) : inp.value+k;
    }
  };
  list.onkeydown = e=>{ if(e.key==='Enter' && e.target.tagName==='INPUT'){const card=e.target.closest('.q-card'); check(card,items[+card.dataset.i],e.target);} };
  function check(card,q,inp){
    if(inp.disabled||!inp.value.trim()) return;
    const ok = norm(inp.value)===norm(q[2]);
    inp.disabled=true; inp.classList.add(ok?'right':'wrong');
    card.querySelector('.chk').disabled=true;
    const kb=card.querySelector('.kb'); kb.classList.remove('show');
    finish(card,q,ok);
  }
  $('#mode').onclick=e=>{const m=e.target.dataset.m; if(!m) return; mode=m; $('#mode').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.m===m)); render();};
  $('#exReset').onclick=()=>{items=shuffle(c.ex);render();list.scrollIntoView({behavior:'smooth',block:'start'});};
  render();
}

/* ---------- Ending Rush game (per case or mixed) ---------- */
function mountRush(el, caseIdx, seconds){
  const key = 'rush-'+(caseIdx==null?'mixed':CASES[caseIdx].id);
  const color = caseIdx==null?'#80eb3d':CASES[caseIdx].color;
  el.style.setProperty('--c',color);
  let score=0, streak=0, t=0, timer=null, cur=null;
  const title = caseIdx==null?'Ending Rush: all cases':`Ending Rush: ${CASES[caseIdx].en}`;
  const sub = caseIdx===0
    ? `You’ll see a word in another case. Tap its <b>dictionary form</b> (Nominative) as fast as you can. ${seconds} seconds!`
    : caseIdx==null
      ? `Each word comes with a case. Tap the right form. ${seconds} seconds, streaks give bonus points!`
      : `Tap the ${CASES[caseIdx].en} form of each word as fast as you can. ${seconds} seconds!`;
  function intro(){
    const best=store.get()[key];
    el.innerHTML=`<h3>⚡ ${title}</h3><p class="gsub">${sub}</p>
      <div class="g-center">${best?`<div style="color:#d6d0d3">Your best: <b style="color:#fff">${best}</b></div>`:''}<button class="btn light" style="margin-top:10px;font-size:18px;padding:12px 26px">Start</button></div>`;
    el.querySelector('button').onclick=start;
  }
  function start(){
    score=0;streak=0;t=seconds*10;
    el.innerHTML=`<h3>⚡ ${title}</h3>
      <div class="g-stats" style="margin-top:10px"><div>Score: <span id="gs">0</span></div><div>Streak: <span id="gk">0</span>🔥</div></div>
      <div class="timer"><i></i></div>
      <div class="g-word"><div class="ru" id="gw"></div><div class="ask" id="ga"></div></div>
      <div class="g-opts" id="go"></div><span class="pop" id="gp">+1</span>`;
    next();
    timer=setInterval(()=>{t--; el.querySelector('.timer i').style.width=(t/(seconds*10)*100)+'%'; if(t<=0) end();},100);
  }
  function next(){
    const noun=pick(Object.keys(NOUNS)), forms=NOUNS[noun];
    const ci = caseIdx==null? Math.floor(Math.random()*6) : caseIdx;
    let shown, ask, ans;
    if(ci===0){
      const others=[1,2,3,4,5].map(k=>forms[k]).filter(f=>f!==forms[0]);
      shown = pick(others); ans=forms[0];
      ask = caseIdx==null? `<b style="color:${CASES[0].color}">Nominative</b> (dictionary form)?` : 'dictionary form?';
    } else {
      shown = forms[0]; ans=forms[ci];
      ask = `<b style="color:${CASES[ci].color}">${CASES[ci].en}</b> · <span class="ru">${CASES[ci].q.split(' ')[0]}</span>`;
    }
    const pool = shuffle([...new Set(forms.filter(f=>f!==ans))]).slice(0,2);
    cur={ans};
    $('#gw',el).textContent=shown; $('#ga',el).innerHTML=ask;
    $('#go',el).innerHTML=shuffle([ans,...pool]).map(o=>`<button>${o}</button>`).join('');
    $('#go',el).querySelectorAll('button').forEach(b=>b.onclick=()=>choose(b));
  }
  let lock=false;
  function choose(b){
    if(lock||t<=0) return; lock=true;
    const ok=norm(b.textContent)===norm(cur.ans);
    if(ok){streak++; const pts=streak>=5?2:1; score+=pts; const p=$('#gp',el); p.textContent='+'+pts; p.classList.remove('go'); void p.offsetWidth; p.classList.add('go'); b.classList.add('right');}
    else {streak=0; b.classList.add('wrong'); $('#go',el).querySelectorAll('button').forEach(x=>{if(norm(x.textContent)===norm(cur.ans))x.classList.add('right')});}
    $('#gs',el).textContent=score; $('#gk',el).textContent=streak;
    setTimeout(()=>{lock=false; if(t>0) next();}, ok?260:900);
  }
  function end(){
    clearInterval(timer); timer=null;
    const best=store.get()[key]||0, isBest=score>best;
    if(isBest) store.set(key,score);
    const msg = score>=20?'Отлично! Excellent!':score>=12?'Хорошо! Well done!':score>=6?'Неплохо! Not bad!':'Попробуй ещё! Try again!';
    el.innerHTML=`<h3>⚡ ${title}</h3><div class="g-center"><div style="color:#d6d0d3">Time’s up!</div><div class="bigscore">${score}</div><div class="ru" style="font-size:20px">${msg}</div>
      ${isBest&&best?'<div style="color:var(--green);font-weight:700;margin-top:6px">🏆 New best score!</div>':`<div style="color:#d6d0d3;margin-top:6px">Best: ${Math.max(best,score)}</div>`}
      <button class="btn light" style="margin-top:14px">Play again</button></div>`;
    el.querySelector('button').onclick=start;
  }
  el._stop=()=>{if(timer)clearInterval(timer)};
  intro();
}

/* ---------- Case Detective ---------- */
function mountDetective(el){
  let deck=shuffle(DETECTIVE), i=0, score=0, done=false;
  function render(){
    if(i>=10){ el.innerHTML=`<h3>🔍 Case Detective</h3><div class="g-center"><div class="bigscore">${score}/10</div><div class="ru" style="font-size:20px">${score>=9?'Шерлок Холмс!':score>=6?'Хорошая работа!':'Попробуй ещё раз!'}</div><button class="btn light" style="margin-top:14px">New round</button></div>`;
      const best=store.get()['detective']||0; if(score>best) store.set('detective',score);
      el.querySelector('button').onclick=()=>{deck=shuffle(DETECTIVE);i=0;score=0;render();}; return; }
    const d=deck[i]; done=false;
    el.innerHTML=`<h3>🔍 Case Detective</h3><p class="gsub">Which case is the highlighted word in?</p>
      <div class="g-stats"><div>Question ${i+1}/10</div><div>Score: ${score}</div></div>
      <div class="det-sent">${d[0].replace(/\*(.+?)\*/,'<b>$1</b>')}</div>
      <div class="det-en" id="den"></div>
      <div class="det-opts">${CASES.map((c,k)=>`<button data-k="${k}" style="background:${c.color}">${c.en}<small>${c.q.split(' ')[0]}</small></button>`).join('')}</div>`;
    el.querySelectorAll('.det-opts button').forEach(b=>b.onclick=()=>{
      if(done) return; done=true;
      const k=+b.dataset.k, ok=k===d[1]; if(ok) score++;
      el.querySelectorAll('.det-opts button').forEach(x=>{const xk=+x.dataset.k; if(xk===d[1]) x.classList.add('right'); else x.classList.add('dim');});
      $('#den',el).innerHTML=(ok?'<b style="color:var(--green)">✓ Right!</b> ':`<b style="color:var(--red)">✗ It’s ${CASES[d[1]].en}.</b> `)+d[2];
      setTimeout(()=>{i++;render();}, ok?1300:2300);
    });
  }
  render();
}

/* ---------- Preposition Sort ---------- */
function mountSort(el){
  let chips, sel=null, placed, score, mistakes;
  function reset(){chips=shuffle(PREPS.map((p,i)=>i)); placed={1:[],2:[],3:[],4:[],5:[]}; score=0; mistakes=0; sel=null; render();}
  function render(){
    if(!chips.length){
      el.innerHTML=`<h3>🧺 Preposition Sort</h3><div class="g-center"><div class="bigscore">${mistakes===0?'Perfect!':mistakes+' mistake'+(mistakes>1?'s':'')}</div><div style="color:#d6d0d3">All ${PREPS.length} prepositions sorted.</div><button class="btn light" style="margin-top:14px">Play again</button></div>`;
      el.querySelector('button').onclick=reset; return;
    }
    el.innerHTML=`<h3>🧺 Preposition Sort</h3><p class="gsub">Tap a preposition, then tap the case it takes.</p>
      <div class="g-stats"><div>Left: ${chips.length}</div><div>Mistakes: ${mistakes}</div></div>
      <div class="chips">${chips.map(i=>`<button class="chip ${sel===i?'sel':''}" data-i="${i}" title="${PREPS[i][2]}">${PREPS[i][0]}</button>`).join('')}</div>
      <div id="sel-en" class="det-en">${sel!=null?`<span class="ru">${PREPS[sel][0]}</span> = ${PREPS[sel][2]}`:'&nbsp;'}</div>
      <div class="bins">${[1,2,3,4,5].map(k=>`<button class="bin" data-k="${k}" style="border-color:${CASES[k].color}"><div class="bt"><span class="dot" style="background:${CASES[k].color}"></span>${CASES[k].en}</div><div class="items">${placed[k].map(i=>`<span>${PREPS[i][0]}</span>`).join('')}</div></button>`).join('')}</div>
      <p class="small-note">Heads-up: <span class="ru">в, на, за, под</span> and <span class="ru">с</span> can take two or three different cases depending on meaning (e.g. <span class="ru">в школе</span> “at school” vs <span class="ru">в школу</span> “to school”), so they’re left out here.</p>`;
    el.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{sel=+b.dataset.i;render();});
    el.querySelectorAll('.bin').forEach(b=>b.onclick=()=>{
      if(sel==null) return;
      const k=+b.dataset.k;
      if(PREPS[sel][1]===k){placed[k].push(sel); chips=chips.filter(x=>x!==sel); sel=null; render();}
      else {mistakes++; const ch=el.querySelector(`.chip[data-i="${sel}"]`); render(); const c2=el.querySelector(`.chip[data-i="${sel}"]`); if(c2){c2.classList.add('shake');}}
    });
  }
  reset();
}

function gamesView(){
  return `<div class="hero" style="padding-bottom:6px"><h1>Mini <em>games</em></h1><p>Mix all six cases. Best scores are saved in this browser.</p></div>
  <div class="games-grid">
    <div class="game" id="g-rush"></div>
    <div class="game" id="g-det"></div>
    <div class="game" id="g-sort"></div>
  </div>
  <div class="pager"><a href="#prepositional">← Prepositional</a><a href="#home">Back to start</a></div>`;
}

/* ======================= ROUTER ======================= */
let activeGames=[];
function route(){
  activeGames.forEach(g=>g._stop&&g._stop()); activeGames=[];
  const h=(location.hash||'#home').slice(1);
  const idx=CASES.findIndex(c=>c.id===h);
  const main=$('#main');
  const root=document.documentElement;
  if(idx>=0){
    const c=CASES[idx];
    root.style.setProperty('--c',c.color); root.style.setProperty('--c-soft',c.soft);
    main.innerHTML=`<div class="view on">${caseView(c,idx)}</div>`;
    mountExercises(c);
    const r=$('#rush'); mountRush(r,idx,30); activeGames.push(r);
    renderNav(c.id);
  } else if(h==='games'){
    root.style.setProperty('--c','#fe98c0'); root.style.setProperty('--c-soft','#ffe3ee');
    main.innerHTML=`<div class="view on">${gamesView()}</div>`;
    const r=$('#g-rush'); mountRush(r,null,60); activeGames.push(r);
    mountDetective($('#g-det')); mountSort($('#g-sort'));
    renderNav('games');
  } else {
    root.style.setProperty('--c','#fe98c0'); root.style.setProperty('--c-soft','#ffe3ee');
    main.innerHTML=`<div class="view on">${homeView()}</div>`;
    renderNav('home');
  }
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);
document.getElementById('stressBtn').onclick=()=>{
  stressOn=!stressOn; try{localStorage.setItem('rc-stress',stressOn?'on':'off')}catch(e){}
  setStressBtn(); stressTree(document.getElementById('main'));
};
setStressBtn();
route();
