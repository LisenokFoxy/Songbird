const instrumentsData = [
  [
    {
      id: 21934,
      name: 'Аккордеон',
      species: 'Akkordeon',
      description: 'Семейство коробчатых музыкальных инструментов сильфонного типа, также именуемые как концертные ручные гармоники.',
      image: 'https://www.kjmusic.com.au/wp-content/uploads/hohner-gal-mattia-iv-96-01-scaled.jpg',
      audio: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Accordian%20F2%20Sample-4170-Free-Loops.com.mp3'
    },
    {
      id: 32874,
      name: 'Метроном',
      species: 'Metronome',
      description: 'Прибор, отмечающий короткие промежутки времени равномерными ударами. В основном используется музыкантами как точный ориентир темпа при исполнении музыкального произведения на репетиции.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BD%D0%BE%D0%BC_%D0%B2_%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8.gif/220px-%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BD%D0%BE%D0%BC_%D0%B2_%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8.gif',
      audio: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Metronome.mp3-18915-Free-Loops.com.mp3'
    },
    {
      id: 88482,
      name: 'Шейкер',
      species: 'Shaker',
      description: 'Название целого ряда ударных музыкальных инструментов (перкуссии), используемых для создания ритмов, а также придания музыке оригинального звучания.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Shakers.jpg/280px-Shakers.jpg',
      audio: 'http://larkinam.com/mp3s/udu014.mp3'
    },
    {
      id: 24307,
      name: 'Кастаньеты',
      species: 'Castanets',
      description: 'Ударный музыкальный инструмент, представляющий собой две вогнутые пластинки-ракушки, в верхних частях связанные между собой шнурком.',
      image: 'https://kto72.ru/upload/iblock/d4c/1336.jpg',
      audio: 'http://www.scalatech.co.uk/bitstream/casts96.mp3'
    },
    {
      id: 86847,
      name: 'Кото',
      species: 'Koto',
      description: 'Японский щипковый музыкальный инструмент, длинная цитра с подвижными кобылками. До XX века кото в основном был солирующим инструментом',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Japanese_Koto.jpg',
      audio: 'http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Japanese%20Koto%20in%20F2-5109-Free-Loops.com.mp3'
    },
    {
      name: 'Губная гармоника',
      species: 'Harmonica',
      description: 'Музыкальный инструмент семейства гармоник. Представляет собой небольшой брусок со множеством отверстий сбоку. Выбор извлекаемых звуков осуществляется положением губ и языка на отверстиях, а также направлением движения воздуха на вдох или выдох..',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Harmonica_12.jpg/360px-Harmonica_12.jpg',
      audio: 'http://demo3.bigfishaudio.net/demo/orlp35_7.mp3'
    }
  ],
  [
    {
      id: 61251,
      name: 'Валторна',
      species: 'French horn',
      description: 'Медный духовой музыкальный инструмент тенорового регистра. Произошла от охотничьего сигнального рога, в оркестр вошла в середине XVII века.',
      image: 'https://static.turbosquid.com/Preview/2019/10/25__02_46_17/00304_French_Horn_Surface_v004_01_Preview.0000.jpg48B91F63-374A-4FBB-A306-687E666CDA43Zoom.jpg',
      audio: 'http://www.timusic.net/wp-content/uploads/JT-Ex1-Bend-around.mp3'
    },
    {
      id: 6837,
      name: 'Фанфара',
      species: 'Fanfara',
      description: 'Медный духовой музыкальный инструмент, используется в основном для подачи сигналов, представляет собой удлинённую трубу с узкой мензурой, обычно без вентилей.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Fotothek_df_roe-neg_0006521_010_Vier_Fanfarenbl%C3%A4ser_mit_Banner_der_Freien_Deutsc.jpg?uselang=ru',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Fanfares_of_President_of_the_Czech_Republic.ogg'
    },
    {
      id: 26769,
      name: 'Туба',
      species: 'Tube',
      description: 'Широкомензурный медный духовой музыкальный инструмент, самый низкий по регистру.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Tuba.JPG/220px-Tuba.JPG',
      audio: 'http://www.wonko.info/wOnKoBUZZ/samplesRus/tuba/taperingnote.wav'
    },
    {
      id: 87058,
      name: 'Тромбон',
      species: 'Trombone',
      description: 'Ев­ропейский ду­хо­вой ам­бу­шюр­ный ин­ст­ру­мент. Входит в ор­ке­ст­ро­вую груп­пу медных духовых музыкальных инструментов басово-тенорового регистра.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Trombone_CG_Bach42AG.jpg/280px-Trombone_CG_Bach42AG.jpg',
      audio: 'http://iem.at/~zmoelnig/pd/download/patches/PhaseLockedVocoder/trombone.wav'
    },
    {
      id: 72404,
      name: 'Труба',
      species: 'Trumpet',
      description: 'Медный духовой музыкальный инструмент альтово-сопранового регистра, самый высокий по звучанию среди медных духовых. С древнейших времён натуральная труба использовалась в качестве сигнального инструмента.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Trumpet_1.png/280px-Trumpet_1.png',
      audio: 'http://clipart.usscouts.org/library/BSA_Sea_Scouts_and_Explorers/WAV_files/51.wav'
    },
    {
      id: 64345,
      name: 'Саксофон',
      species: 'Saxophone',
      description: 'Тростевой духовой музыкальный инструмент. Семейство саксофонов сконструировано в 1842 году бельгийским музыкальным мастером Адольфом Саксом. Обладает полным и мощным звучанием, певучим тембром и большой технической подвижностью',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Yamaha_YAS-25_20040517.jpg?uselang=ru',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Jazz-Sax.ogg'
    }
  ],
  [
    {
      id: 31970,
      name: 'Тимбал',
      species: 'Poecile montanus',
      description: 'Кубинский[1] односторонний барабан, использующийся в афрокубинской, латиноамериканской музыке, джазе и регги.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Timbales-by-fontplay.jpg/280px-Timbales-by-fontplay.jpg',
      audio: 'http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Forest%20Timbale-732-Free-Loops.com.mp3'
    },
    {
      id: 48645,
      name: 'Треугольник',
      species: 'Triangle',
      description: 'Ударный музыкальный инструмент в виде металлического прута, изогнутого в форме треугольника. Один из углов оставлен открытым. Треугольник принадлежит к инструментам с неопределённой высотой звука, имеет блестящий и яркий тембр.',
      image: 'https://astri.ee/assets/medias/1572/9470/6810/1/triangel-1510751097883-kaare-lelula-1.jpg',
      audio: 'http://tipiwiki.free.fr/snd/Triangle.wav'
    },
    {
      id: 11383,
      name: 'Табла',
      species: 'Tabla',
      description: 'нИдийский ударный музыкальный инструмент. Небольшой парный барабан, спользуемый для сопровождения вокальной и инструментальной музыки и танца в стиле катхак.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/TABL2.jpg',
      audio: 'http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Indian%20Tabla-12072-Free-Loops.com.mp3'
    },
    {
      id: 15415,
      name: 'Бубен',
      species: 'Tambourine',
      description: 'Ударный музыкальный инструмент неопределённой высоты звучания, состоящий из кожаной мембраны, натянутой на деревянный обод.',
      image: 'https://toolsmusic.ru/wp-content/uploads/2017/12/buben1-300x175.jpg',
      audio: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Native%20American-6093-Free-Loops.com.mp3'
    },
    {
      id: 76563,
      name: 'Гонг',
      species: 'Gong',
      description: 'Традиционный древнекитайский самозвучащий ударный музыкальный инструмент, принадлежит к металлическим идиофонам с неопределённой высотой звучания, обладает мрачным, грозным, зловещим тембром.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/HelfferichGong.jpg',
      audio: 'http://cd.textfiles.com/thegreatunsorted/misc/dragon2.wav'
    },
    {
      id: 72493,
      name: 'Том-том',
      species: 'Tom-tom',
      description: 'Ударный музыкальный инструмент. «Том-том» происходит от названий барабанов и бубнов у ряда коренных американских, азиатских и африканских народов',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Tom-tom_12x8.jpg',
      audio: 'http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/TOMROLL1.WAV'
    }
  ],
  [
    {
      id: 8758,
      name: 'Банджо',
      species: 'Banjo',
      description: 'Струнно-щипковый музыкальный инструмент. В XIX веке банджо занимал центральное место в афроамериканской традиционной музыке. Банджо в тандеме со скрипкой стали основой американской старинной музыки.',
      image: 'https://static.wixstatic.com/media/13c708_e1bc15d06c17411bb9928291fcaabf14~mv2.jpg/v1/fill/w_394,h_259,al_c,q_80,usm_0.66_1.00_0.01/231-2314660_banjo-player-cowboy-with-ban.webp',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Angel_Band_-_Autoharp.ogg'
    },
    {
      id: 89411,
      name: 'Укулеле',
      species: 'Ukulele',
      description: 'Четырёхструнный щипковый музыкальный инструмент, разновидность гитары. На Гавайях инструмент получил своё новое название — «Укулеле», что переводится как «скачущая блоха».',
      image: 'http://xn----8sbnjcpkcfc4alnelg1l.xn--p1ai/wp-content/uploads/2019/08/8.jpg',
      audio: 'http://musicweb.ucsd.edu/~terbe/172/uke2.wav'
    },
    {
      id: 11482,
      name: 'Гитара',
      species: 'Guitar',
      description: 'Струнный щипковый музыкальный инструмент. Применяется в качестве аккомпанирующего или сольного инструмента во многих стилях и направлениях музыки, среди которых романс, блюз, кантри, фламенко, рок, джаз.',
      image: 'https://guitarmag.net/wiki/images/2/24/Guitar_1.jpg',
      audio: 'http://www.guitarsecrets.com/scales/cmajor.wav'
    },
    {
      id: 80715,
      name: 'Ситар',
      species: 'Sitar',
      description: 'Многострунный музыкальный инструмент, используемый для исполнения индийской классической музыки.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Sitar3.jpg',
      audio: 'http://cd.textfiles.com/sbsw/INSTRMNT/SITAR.WAV'
    },
    {
      id: 36331,
      name: 'Домбра',
      species: 'Dombra',
      description: 'Струнный щипковый музыкальный инструмент, который существует в культуре ногайского и казахского народов.',
      image: 'https://eomi.ru/img/plucked/domra_1.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Dimash-Kudaibergen_-_Adai-k%C3%BCy.wav'
    },
    {
      id: 92737,
      name: 'Арфа',
      species: 'Harp',
      description: 'Струнный щипковый музыкальный инструмент. Один из древнейших инструментов, символ Ирландии.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/M217_-_pedalharpa_-_Erard_Freres_-_f%C3%B6re_1902_-_foto_Olav_Nyhus.jpg?uselang=ru',
      audio: 'http://cd.textfiles.com/sbsw/INSTRMNT/HARPINIC.WAV'
    }
  ],
  [
    {
      id: 6921,
      name: 'Скрипка',
      species: 'Violin',
      description: 'струнный смычковый музыкальный инструмент высокого регистра. Имеет народное происхождение.',
      image: 'https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/public/img/musical_instruments/1-21[1].jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Violin_sounds_and_techniques.ogg'
    },
    {
      id: 60390,
      name: 'Гусле',
      species: 'Gusle',
      description: 'Не путать с гуслями! Народный струнный смычковый инструмент южных славян. Струна одна, реже — две. Звук у гусле пронзительный и несколько монотонный.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Serbian_Gusle.jpg?uselang=ru',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Gusle0001.ogg'
    },
    {
      id: 57296,
      name: 'Виола да гамба',
      species: 'Viola da gamba',
      description: 'Старинный струнный смычковый музыкальный инструмент семейства виол, близкий по размеру и диапазону современной виолончели. На виоле да гамба играли сидя, держа инструмент между ног или положив боком на бедро, — отсюда название.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/GambeUilderks.png?uselang=ru',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Christoph_Schaffrath_%281709-1763%29_-_Duetto_in_D-Minor_for_2_Violas_da_Gamba.ogg'
    },
    {
      id: 91219,
      name: 'Виолончель',
      species: 'Cello',
      description: 'Струнный смычковый музыкальный инструмент басового и тенорового регистра, известный с первой половины XVI века, такого же строения, что и скрипка или альт, однако значительно бо́льших размеров. Виолончель обладает широкими выразительными возможностями и тщательно разработанной техникой исполнения, используется как сольный, ансамблевый и оркестровый инструмент.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Cello_front_side.png',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/VossSarabande.ogg'
    },
    {
      id: 85645,
      name: 'Контрабас',
      species: 'Basso',
      description: 'Второй самый крупный по размерам (около двух метров в высоту) и второй самый низкий по звучанию из широко используемых смычковых струнных музыкальных инструментов, объединяющий в себе черты скрипичного семейства и семейства виол.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/AGK_bass1_full.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Jazz_walking_bass_on_double_bass.oga'
    },
    {
      id: 46437,
      name: 'Альт',
      species: 'Alto',
      description: ' струнно-смычковый музыкальный инструмент такого же устройства, что и скрипка, но несколько больших размеров, отчего звучит в более низком регистре.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Bratsche.jpg?uselang=ru',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Viola-walshimprov.ogg'
    }
  ],
  [
    {
      id: 33369,
      name: 'Било',
      species: 'Sturnus vulgaris',
      description: 'Деревянная или металлическая доска (брус), по которой ударяли молотком (палкой). В древности это был бытовой и сигнальный музыкальный инструмент; в дальнейшем им пользовались, главным образом, вместо церковного колокола.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Bilo_SR_musei.jpg?uselang=ru',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Beats-440Hz-442Hz-%28beat-frequency-2Hz%29-3s.ogg'
    },
    {
      id: 62777,
      name: 'Варган',
      species: 'Jews harp',
      description: 'Музыкальный инструмент в виде свободно колеблющегося в проёме рамки язычка, приводимого в движение пальцем или дёрганием за нитку. Инструмент устанавливают в области рта.  ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Kamuz.jpg?uselang=ru',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Jew%27s_harp_example.ogg'
    },
    {
      id: 39855,
      name: 'Стеклянная гармоника',
      species: 'Glass harmonica',
      description: 'редкий музыкальный инструмент, состоящий из стеклянных полусфер различного размера, нанизанных на горизонтальную вращающуюся металлическую ось. Пакет полусфер частично погружён в ящик-резонатор с разбавленным уксусом, благодаря чему края полусфер постоянно увлажнены.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Glassharmonica.png?uselang=ru',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Stars-GlassArmonica.ogg'
    },
    {
      id: 95133,
      name: 'Глюкофон',
      species: 'Tank drum',
      description: 'перкуссионный музыкальный инструмент, тональный лепестковый барабан. Изначально барабан делали из газового баллона.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Steel_tongue_drum_laying_on_the_grass.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Glukofon.ogg'
    },
    {
      id: 13636,
      name: 'Флексатон',
      species: 'Flex-a-tone',
      description: 'Металлический идиофон с определённой высотой звучания. На первых порах своего существования флексатон использовался в джазе, однако вскоре заинтересовал и композиторов классической музыки.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flexatone_Apr2005.jpg?uselang=ru',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flexatone01.ogg?uselang=ru'
    },
    {
      id: 34522,
      name: 'Рейнстик',
      species: 'Rainstick',
      description: 'Дождевая флейта. Представляет из себя длинную полую глухо закрытую на торцах трубу с расположенными по всей длине внутренними перегородками, частично заполненную мелким сыпучим наполнителем (крупы и другие семена, мелкие камешки). Был изобретен в Чили или Перу и использовался как культовый инструмент для вызова дождя',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Rainstick_01.png',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Rainstick_%281%29.ogg'
    }
  ]
];

export default instrumentsData;
