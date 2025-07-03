const cardsData = {
  card_1: {
    id: "card_1",
    title: "Шлемник байкальский",
    buryatName: "Гүүн хүхэн",
    scientificName: "Scutellaria baicalensis Georgi",
    image: "media/cards/cards_photo/шлемник байкальский.jpg",
    fact: "Содержание флавоноидов в корне достигает 15–20% сухого веса.",
    modalContent: {
      fullDescription: "Шлемник байкальский - растение семейства яснотковых (Lamiaceae). Многолетнее травянистое растение с мелкими листьями и фиолетовыми колокольчатыми двугубыми цветками. Цветет в июне-июле. Плодоносит в августе.",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper"> 
      <iframe title="Шлемник байкальский (Scutellaria baicalensis)" 
      frameborder="0" allowfullscreen mozallowfullscreen="true" 
      webkitallowfullscreen="true" allow="autoplay; fullscreen; 
      xr-spatial-tracking" 
      xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
      src="https://sketchfab.com/models/a4006153fe074868849853bdc83b378d/embed?autospin=1&autostart=1&dnt=1"> 
      </iframe> </div>`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00032",
      habitat: "Естественный ареал вида - район Байкала, Монголия, Корея, Север Китая, Приамурье, Приморский край. Растет на сухих каменистых и глинистых горных склонах, реже в степи, залежи, ивняки по берегам рек.",
      properties: ["Общеукрепляющее", "Седативное", "Гипотензивное", "Диуретическое", "Жаропонижающее", "Антигельминтное", "Гепатопротекторное"],
      facts: {
        height: "30-50 см",
        blooming: "Июнь-Июль"
      },
      status: "Не охраняется (LC)"
    }
  },
  card_2: {
    id: "card_2",
    title: "Живокость крупноцветковая",
    buryatName: "Хараалша сэсэг",
    scientificName: "Delphinium grandiflorum L.",
    image: "media/cards/cards_photo/живокость крупноцветковая.jpg",
    fact: "Содержит токсичные алкалоиды: дельфинин и элатин.",
    modalContent: {
      fullDescription: "Вид травянистых растений, относящийся к роду Живокость семейства Лютиковые (Ranunculaceae). Многолетнее травянистое растение с прямостоячим ветвистым стеблем 25-50 см и более высотой, покрытым коротким прижатым белым опушением. Важно: растение ядовито, особенно семена и корни. Применение возможно только под контролем специалистов!",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00008",
      habitat: "Широко распространена в степных и лесостепных районах Восточной Сибири, Забайкалья, в том числе на территории Бурятии. Предпочитает сухие луга, склоны, опушки. Часто встречается в окрестностях Байкала и на хребтах Саян.",
      properties: ["Противосудорожное", "Болеутоляющее", "Успокаивающее"],
      facts: {
        height: "25-50 см",
        blooming: "Июнь-Август"
      },
      status: "Культивируется в декоративных целях"
    }
  },
  card_3: {
    id: "card_3",
    title: "Зопник клубненосный",
    buryatName: "Үмдэн үбхэн",
    scientificName: "Phlomoides tuberosa (L.) Moench",
    image: "media/cards/cards_photo/зопник клубненосный.jpg",
    fact: "Клубни содержат крахмал, белки и дубильные вещества.",
    modalContent: {
      fullDescription: "Многолетнее растение высотой 40-150 см, вид многолетних растений семейства Яснотковые (Lamiaceae), типовой вид рода Огневик (Phlomoides). Цветёт в мае - августе. Плоды созревают в июле - августе.",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper"> 
      <iframe title="Зопник клубненосный" frameborder="0" allowfullscreen mozallowfullscreen="true" 
      webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking 
      execution-while-out-of-viewport execution-while-not-rendered web-share 
      src="https://sketchfab.com/models/3a2240f301924c238e32596846b18811/embed?autospin=1&autostart=1&dnt=1"> </iframe> </div>`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00009",
      habitat: "Встречается в степных, лесостепных и предгорных районах Восточной Сибири, включая Бурятию. Произрастает по солнечным склонам, полянам, в разреженных лесах, часто рядом с пастбищами и заброшенными полями.",
      properties: ["Тонизирующее", "Общеукрепляющее", "Противовоспалительное", "Кровоостанавливающее"],
      facts: {
        height: "40-150 см",
        blooming: "Май-Август"
      },
      status: "Не находится под строгой охраной"
    }
  },
  card_4: {
    id: "card_4",
    title: "Хвощ полевой",
    buryatName: "Нарhaн ногоон",
    scientificName: "Equisetum arvense L.",
    image: "media/cards/cards_photo/хвощ полевой.jpg",
    fact: "Содержит до 10% кремниевой кислоты, а также флавоноиды, сапонины, алкалоиды.",
    modalContent: {
      fullDescription: "Вид многолетних травянистых растений рода Хвощ семейства Хвощовые (Equisetaceae). Многолетнее споровое травянистое растение высотой до 40, редко до 50 см, с длинным ползучим корневищем. На корневищах образуются короткие клубневидные ответвления, с помощью которых происходит вегетативное размножение.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00113",
      habitat: "Широко распространён в умеренном поясе Европы, Азии, Северной Америки. В Прибайкалье и Бурятии встречается повсеместно: на лугах, по берегам рек, в оврагах, на лесных полянах и опушках. Предпочитает влажные почвы и хорошо освещённые участки.",
      properties: ["Мочегонное", "Противовоспалительное", "Кровоостанавливающее"],
      facts: {
        height: "20-50 см",
        blooming: "Июнь-Июль (спороносит)"
      },
      status: "Входит в Государственную фармакопею РФ"
    }
  },
  card_5: {
    id: "card_5",
    title: "Пион уклоняющийся",
    buryatName: "Ехэ эдеэн",
    scientificName: "Paeonia anomala L.",
    image: "media/cards/cards_photo/пион уклоняющийся.jpg",
    fact: "Содержит эфирные масла, алкалоиды, флавоноиды, органические кислоты.",
    modalContent: {
      fullDescription: "Вид многолетних травянистых растений рода Пион, семейства Пионовые (Paeoniaceae), высотой около 1 м.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00023",
      habitat: "Произрастает в Сибири, на Алтае, в Казахстане, Монголии, широко распространён в Прибайкалье и Бурятии. Встречается на опушках, в светлых лесах, в горных долинах и по каменистым склонам. Предпочитает рыхлые почвы и умеренное освещение.",
      properties: ["Успокаивающее (седативное)", "Спазмолитическое", "Обезболивающее"],
      facts: {
        height: "до 1 м",
        blooming: "Май-Июнь"
      },
      status: "В Красной книге Бурятии как редкий и уязвимый вид"
    }
  },
  card_6: {
    id: "card_6",
    title: "Проломник северный",
    buryatName: "Тобшо үбhэн",
    scientificName: "Androsace septentrionalis L.",
    image: "media/cards/cards_photo/проломник северный.jpg",
    fact: "Содержит флавоноиды, органические кислоты, дубильные вещества.",
    modalContent: {
      fullDescription: "Вид травянистых растений рода Проломник (Androsace) семейства Первоцветные (Primulaceae). Однолетнее (озимое) или двулетнее травянистое растение-эфемер, 5-15 см высотой, цветение: май-июль.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00105",
      habitat: "Широко распространён в арктической и субарктической зоне Евразии и Северной Америки. В Бурятии встречается в высокогорьях, в сухих каменистых местах, по склонам хребтов, в редколесьях и альпийских лугах, включая районы Байкала.",
      properties: ["Противовоспалительное", "Общеукрепляющее", "Витаминное"],
      facts: {
        height: "5-15 см",
        blooming: "Май-Июль"
      },
      status: "Индикатор экологически чистых горных местообитаний"
    }
  },
  card_7: {
    id: "card_7",
    title: "Лилия карликовая",
    buryatName: "Улаалзай",
    scientificName: "Lilium pumilum Redouté",
    image: "media/cards/cards_photo/лилия карликовая.jpg",
    fact: "Цветки ярко-красные, с сильным ароматом.",
    modalContent: {
      fullDescription: "Многолетнее луковичное растение, вид рода Лилия, семейства Лилейные (Liliaceae) высотой от 15 до 60 см. Цветение с июня по август.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00014",
      habitat: "Произрастает в Восточной Сибири, на Дальнем Востоке, в Монголии, Северном Китае и Корее. В Бурятии встречается на сухих южных склонах, в степных районах, редколесьях, на опушках и каменистых лугах. Предпочитает солнечные участки и лёгкие почвы.",
      properties: ["Противокашлевое", "Общеукрепляющее", "Восстанавливающее"],
      facts: {
        height: "15-60 см",
        blooming: "Июнь-Август"
      },
      status: "В Красной книге Республики Бурятия и Забайкальского края"
    }
  },
  card_8: {
    id: "card_8",
    title: "Тысячелистник обыкновенный",
    buryatName: "Үтэшэ үбhэн",
    scientificName: "Achillea millefolium L.",
    image: "media/cards/cards_photo/Тысячелистник обыкновенный.jpg",
    fact: "Один из самых известных лекарственных видов в России.",
    modalContent: {
      fullDescription: "Многолетнее травянистое растение семейства Астровые (Asteraceae), высотой от 20 до 80 см. Цветение длится с июня по сентябрь. Обладает характерным пряным запахом и белыми или розоватыми соцветиями-щитками.",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper"> 
      <iframe title="Тысячелистник обыкновенный (A. millefolium)" 
      frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" 
      allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport 
      execution-while-not-rendered web-share 
      src="https://sketchfab.com/models/936cb3b3fef7422ea563c62b7e8e6248/embed?autospin=1&autostart=1&dnt=1"> </iframe> </div>`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00001",
      habitat: "Произрастает по всей территории Евразии, от Европы до Восточной Сибири, включая Бурятию. Встречается на лугах, в степях, по обочинам дорог, на опушках лесов и склонах холмов.",
      properties: ["Противовоспалительное", "Кровоостанавливающее", "Антисептическое", "Улучшает пищеварение", "Укрепляет иммунитет"],
      facts: {
        height: "20-80 см",
        blooming: "Июнь-Сентябрь"
      },
      status: "Не охраняется, активно изучается и культивируется"
    }
  },
  card_9: {
    id: "card_9",
    title: "Хвойник односемянный",
    buryatName: "Хонин зээргэнэ",
    scientificName: "Ephedra monosperma J.G.Gmel. ex C.A.Mey.",
    image: "media/cards/cards_photo/Хвойник односемянный.jpg",
    fact: "Содержит до 3% алкалоидов в зелёных побегах.",
    modalContent: {
      fullDescription: "Низкорослый вечнозелёный кустарничек семейства Хвойниковые (Ephedraceae), высотой от 10 до 50 см. Цветёт с мая по июнь, плоды - ярко-красные, созревают в июле-августе. Побеги зелёные, членистые, похожи на хвощ.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00034",
      habitat: "Растёт в Сибири, Монголии, Тибете и Северном Китае. В Бурятии встречается на сухих каменистых склонах, степях, в горных и предгорных районах. Предпочитает бедные почвы, южные экспозиции, хорошо переносит засуху.",
      properties: ["Бронхорасширяющее", "Тонизирующее", "Стимулирующее дыхание", "Повышает давление"],
      facts: {
        height: "10-50 см",
        blooming: "Май-Июнь"
      },
      status: "Статус редкости 5 - восстанавливаемые и восстанавливающиеся, статус угрозы 'вызывающие наименьшие опасения' (LC)"
    }
  },
  card_10: {
    id: "card_10",
    title: "Астра альпийская",
    buryatName: "Хүхэ балжан гарма",
    scientificName: "Aster alpinus L.",
    image: "media/cards/cards_photo/Астра альпийская.jpg",
    fact: "Цветет крупными фиолетовыми цветами, похожими на ромашки.",
    modalContent: {
      fullDescription: "Многолетнее травянистое растение семейства Астровые (Asteraceae) высотой 10-30 см. Образует прикорневую розетку листьев и одиночные цветоносы с крупными соцветиями-корзинками.",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper"> <iframe title="Aster alpinus" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/443de50fa1bd4cfabb33bafc1656e041/embed?autospin=1&autostart=1&dnt=1"> </iframe> </div>`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00036",
      habitat: "Растет в горных районах Сибири, включая Прибайкалье. Встречается на каменистых склонах, альпийских лугах, в горных тундрах. Предпочитает хорошо дренированные почвы и солнечные места.",
      properties: ["Противовоспалительное", "Жаропонижающее", "Декоративное"],
      facts: {
        height: "10-30 см",
        blooming: "Июнь-Июль"
      },
      status: "В некоторых регионах включена в Красные книги"
    }
  },
  card_11: {
    id: "card_11",
    title: "Вьюнок полевой",
    buryatName: "Шүдэр үбхэн",
    scientificName: "Convolvulus arvensis L.",
    image: "media/cards/cards_photo/вьюнок полевой.jpg",
    fact: "Один цветок живёт около суток.",
    modalContent: {
      fullDescription: "Многолетнее травянистое растение семейства Вьюнковые (Convolvulaceae), с ползучими или вьющимися стеблями длиной до 100 см. Цветёт с июня по сентябрь. Цветки воронковидные, бело-розовые, раскрываются в солнечную погоду.",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper"> 
      <iframe title="Вьюнок полевой (Convolvulus arvensis L.)" frameborder="0" allowfullscreen mozallowfullscreen="true" 
      webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking 
      execution-while-out-of-viewport execution-while-not-rendered web-share 
      src="https://sketchfab.com/models/b69176c7565d435aa3e461e8da2b0e41/embed?autospin=1&autostart=1">
      </iframe> </div>`,
      herbariumLink: "",
      habitat: "Широко распространён в умеренном поясе Евразии и Азии. В Бурятии встречается на полях, лугах, склонах, вдоль дорог и вблизи жилищ. Предпочитает рыхлые, сухие почвы и солнечные места, часто считается сорняком.",
      properties: ["Слабительное", "Мочегонное", "Противоглистное", "Желчегонное"],
      facts: {
        height: "до 100 см",
        blooming: "Июнь-Сентябрь"
      },
      status: "Не охраняется, но изучается как источник фитотерапевтических веществ"
    }
  },

  card_12: {
    id: "card_12",
    title: "Чистотел большой",
    buryatName: "Шүдэр сэсэг",
    scientificName: "Chelidonium majus L.",
    image: "media/cards/cards_photo/чистотел большой.jpg",
    fact: "Отличается ярко-жёлтыми цветками и оранжевым млечным соком.",
    modalContent: {
      fullDescription: "Многолетнее травянистое растение семейства Маковые (Papaveraceae), высотой от 30 до 100 см. Цветёт с мая по август. Отличается ярко-жёлтыми цветками и оранжевым млечным соком, который выделяется при повреждении.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00117",
      habitat: "Широко распространён по всей Европе и Азии, включая Восточную Сибирь и Бурятию. Встречается на опушках лесов, по берегам рек, в садах, на пустырях и около жилья. Предпочитает богатые почвы и полутень.",
      properties: ["Противовирусное", "Спазмолитическое", "Желчегонное"],
      facts: {
        height: "30-100 см",
        blooming: "Май-Август"
      },
      status: "Не охраняется, широко распространён, но токсичен при неправильном применении"
    }
  },

  card_13: {
    id: "card_13",
    title: "Родиола розовая",
    buryatName: "Алтан үндэhэн",
    scientificName: "Rhodiola rosea L.",
    image: "media/cards/cards_photo/родиола розовая.jpg",
    fact: "Имеет мясистое корневище с характерным 'розовым' запахом при срезе.",
    modalContent: {
      fullDescription: "Многолетнее травянистое растение семейства Толстянковые (Crassulaceae), высотой от 10 до 40 см. Цветёт с июня по август. Имеет мясистое корневище с характерным 'розовым' запахом при срезе, за что и получило своё название.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00025",
      habitat: "Растёт в Сибири, на Урале, в Восточной Европе, Монголии и на Дальнем Востоке. В Бурятии встречается в горных районах, на склонах, среди камней и в тундровых ландшафтах. Предпочитает холодные, высокогорные условия и каменистые почвы.",
      properties: ["Адаптогенное", "Тонизирующее", "Повышает выносливость", "Улучшает работоспособность"],
      facts: {
        height: "10-40 см",
        blooming: "Июнь-Август"
      },
      status: "Включена в Красную книгу Республики Бурятия и РФ"
    }
  },

  card_14: {
    id: "card_14",
    title: "Тимьян байкальский",
    buryatName: "Ганга",
    scientificName: "Thymus baicalensis Serg.",
    image: "media/cards/cards_photo/тимьян байкальский.jpg",
    fact: "Обладает сильным пряным ароматом.",
    modalContent: {
      fullDescription: "Многолетнее травянистое растение или полукустарничек семейства Яснотковые (Lamiaceae), высотой от 10 до 15 см. Цветёт с июня по август. Обладает сильным пряным ароматом, мелкие лилово-розовые цветки собраны в соцветия.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "",
      habitat: "Эндемик Сибири, распространён на территории Прибайкалья, Забайкалья и Монголии. В Бурятии встречается на сухих склонах, степных участках, каменистых лугах и лесных опушках. Предпочитает солнечные места с рыхлой почвой.",
      properties: ["Отхаркивающее", "Антисептическое", "Противовоспалительное", "Улучшает пищеварение"],
      facts: {
        height: "10-15 см",
        blooming: "Июнь-Август"
      },
      status: "В ряде регионов включён в списки редких растений"
    }
  },

  card_15: {
    id: "card_15",
    title: "Боярышник кроваво-красный",
    buryatName: "Долоогоно",
    scientificName: "Crataegus sanguinea Pall.",
    image: "media/cards/cards_photo/боярышник кроваво-красный.jpg",
    fact: "Плоды ярко-красные, созревают в августе-сентябре, имеют кисло-сладкий вкус.",
    modalContent: {
      fullDescription: "Многолетний кустарник или небольшое дерево семейства Розовые (Rosaceae), высотой от 1 до 4 метров. Цветёт в мае-июне. Плоды ярко-красные, созревают в августе-сентябре, имеют кисло-сладкий вкус.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "",
      habitat: "Широко распространён в Сибири, на Дальнем Востоке, в Монголии, Казахстане и Северном Китае. В Бурятии встречается по опушкам лесов, склонам, берегам рек, среди кустарников. Предпочитает светлые участки с дренированными почвами.",
      properties: ["Сердечное", "Сосудорасширяющее", "Седативное", "Нормализует давление"],
      facts: {
        height: "1-4 м",
        blooming: "Май-Июнь"
      },
      status: "Не охраняется, но рекомендуется бережный сбор"
    }
  },

  card_16: {
    id: "card_16",
    title: "Зверобой продырявленный",
    buryatName: "Дэгдэ",
    scientificName: "Hypericum perforatum L.",
    image: "media/cards/cards_photo/зверобой продырявленный.jpg",
    fact: "Отличается золотисто-жёлтыми цветками с чёрными точечками по краям лепестков.",
    modalContent: {
      fullDescription: "Многолетнее травянистое растение семейства Зверобойные (Hypericaceae), высотой от 30 до 80 см. Цветёт с июня по август. Отличается золотисто-жёлтыми цветками с чёрными точечками по краям лепестков и прозрачными 'дырочками' на листьях.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "",
      habitat: "Широко распространён по всей Евразии. В Бурятии встречается на лугах, в лесах, на опушках, в степях и по обочинам дорог. Предпочитает солнечные места и хорошо дренированные почвы.",
      properties: ["Противовоспалительное", "Антисептическое", "Успокаивающее", "Желчегонное"],
      facts: {
        height: "30-80 см",
        blooming: "Июнь-Август"
      },
      status: "Не охраняется, включён в Государственную фармакопею России"
    }
  },

  card_17: {
    id: "card_17",
    title: "Рододендрон Адамса",
    buryatName: "Сагаан дали",
    scientificName: "Rhododendron adamsii Rehder",
    image: "media/cards/cards_photo/рододендрон адамса.jpg",
    fact: "Имеет кожистые, мелкие листья с пряным ароматом.",
    modalContent: {
      fullDescription: "Вечнозелёный кустарничек семейства Вересковые (Ericaceae), высотой от 15 до 60 см. Цветёт в июне-июле. Имеет кожистые, мелкие листья с пряным ароматом и нежно-розовые или бело-розовые цветки, собранные в соцветия.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "",
      habitat: "Эндемик Сибири и Восточной Азии. В Бурятии встречается в горах Восточного Саяна, Прибайкалья, Забайкалья, в тундровых и субальпийских зонах, на каменистых склонах, среди редколесий и на высокогорных лугах.",
      properties: ["Тонизирующее", "Общеукрепляющее", "Стимулирующее", "Повышает выносливость"],
      facts: {
        height: "15-60 см",
        blooming: "Июнь-Июль"
      },
      status: "Включён в Красную книгу Республики Бурятия"
    }
  },

  card_18: {
    id: "card_18",
    title: "Облепиха крушиновидная",
    buryatName: "Шасаргана",
    scientificName: "Hippophae rhamnoides L.",
    image: "media/cards/cards_photo/облепиха крушиновидная.jpg",
    fact: "Плоды - ярко-оранжевые ягоды с кислым вкусом, плотно облепляющие ветви.",
    modalContent: {
      fullDescription: "Многолетний кустарник или небольшое дерево семейства Лоховые (Elaeagnaceae), высотой от 1 до 6 м. Цветёт в мае, плоды созревают в августе-сентябре. Плоды - ярко-оранжевые ягоды с кислым вкусом, плотно облепляющие ветви.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "",
      habitat: "Широко распространена в Сибири, на Алтае, в Монголии, Казахстане, Китае и на Дальнем Востоке. В Бурятии растёт по берегам рек, в долинах, на песчаных и галечных почвах. Предпочитает солнечные, сухие и бедные почвы, хорошо переносит морозы.",
      properties: ["Общеукрепляющее", "Противовоспалительное", "Ранозаживляющее", "Витаминное"],
      facts: {
        height: "1-6 м",
        blooming: "Май"
      },
      status: "Не охраняется, активно культивируется"
    }
  },

  card_19: {
    id: "card_19",
    title: "Панцерина шерстистая",
    buryatName: "Шэмэдэг",
    scientificName: "Panzerina lanata (L.) Soják",
    image: "media/cards/cards_photo/панцерина шерстистая.jpg",
    fact: "Отличается густым беловатым опушением стебля и листьев.",
    modalContent: {
      fullDescription: "Многолетнее травянистое растение семейства Яснотковые (Lamiaceae), высотой до 30 см. Цветёт в июне-августе. Отличается густым беловатым опушением стебля и листьев, из-за чего кажется 'шерстистым', цветки лилово-розовые, собраны в мутовки.",
      sketchfabEmbed: `<img src="media/cards/-3D.png" alt="Нет 3D-модели" class="sketchfab-embed-wrapper">`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00022",
      habitat: "Распространена в степных и полупустынных районах Восточной Европы, Сибири, Монголии и Казахстана. В Бурятии встречается на сухих солнечных склонах, в степях, по каменистым почвам, на заброшенных полях и пастбищах.",
      properties: ["Отхаркивающее", "Противовоспалительное", "Ранозаживляющее", "Общеукрепляющее"],
      facts: {
        height: "до 30 см",
        blooming: "Июнь-Август"
      },
      status: "Не охраняется"
    }
  },

  card_20: {
    id: "card_20",
    title: "Кровохлебка лекарственная",
    buryatName: "hүдэ гэшэгэнээн",
    scientificName: "Sanguisorba officinalis L.",
    image: "media/cards/cards_photo/кровохлебка лекарственная.jpg",
    fact: "Имеет тёмно-красные вытянутые соцветия-колоски.",
    modalContent: {
      fullDescription: "Многолетнее травянистое растение семейства Розовые (Rosaceae), высотой от 30 до 120 см. Цветёт с июня по сентябрь. Имеет тёмно-красные вытянутые соцветия-колоски и крепкое корневище, благодаря чему легко узнаваема.",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper"> 
      <iframe title="Кровохлебка лекарственная (S. officinalis)" frameborder="0" allowfullscreen mozallowfullscreen="true" 
      webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking 
      execution-while-out-of-viewport execution-while-not-rendered web-share 
      src="https://sketchfab.com/models/057a75ba494b4e42b2b31a780651ad62/embed?autospin=1&autostart=1"> 
      </iframe> </div>`,
      herbariumLink: "https://elib.bgsha.ru/hbr/00124",
      habitat: "Широко распространена в умеренной зоне Евразии. В Бурятии встречается на влажных лугах, по берегам рек, на болотистых склонах, среди кустарников и в лесных опушках. Предпочитает сырые, рыхлые почвы.",
      properties: ["Кровоостанавливающее", "Противовоспалительное", "Вяжущее", "Ранозаживляющее"],
      facts: {
        height: "30-120 см",
        blooming: "Июнь-Сентябрь"
      },
      status: "Не охраняется, входит в Государственную фармакопею России"
    }
  }
};

// Функции для работы с данными
export function getCardData(cardId) {
  return cardsData[cardId];
}

export function getAllCardIds() {
  return Object.keys(cardsData);
}