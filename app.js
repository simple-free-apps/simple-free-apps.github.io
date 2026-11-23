const products = [
  {
    name: 'Liquid Sort Puzzle',
    ar: 'لغز فرز السوائل',
    stackKey: 'kotlin',
    level: 'Procedural chapters',
    levelAr: 'فصول إجرائية',
    tech: 'Kotlin · Jetpack Compose',
    desc: 'Water-sort puzzles with hidden layers, keyed flasks, chapter trials and a certified hint solver. Offline play.',
    descAr: 'ألغاز فرز الماء بطبقات مخفية وقوارير مقفلة وتحديات فصول وحلّال تلميحات موثوق. لعب دون اتصال.',
    img: 'assets/catalog/liquidsort-hero.jpg',
    codester: 'https://www.codester.com/items/64630/liquid-sort-puzzle-kotlin-android-game-template?ref=Gr8Man',
    sellanycode: 'https://www.sellanycode.com/item.php?id=28631',
    sacPrice: 20,
    video: 'https://www.youtube.com/watch?v=X3z5HdDfmYY',
    play: 'https://play.google.com/store/apps/details?id=com.gr8.games.liquidsortpuzzle',
    codPrice: 14
  },
  {
    name: 'Soravel: Puzzle Pack 5-in-1',
    ar: 'Soravel: حزمة ألغاز 5 في 1',
    stackKey: 'kotlin',
    level: '1,928+ campaign levels',
    levelAr: 'أكثر من 1,928 مرحلة',
    tech: 'Kotlin · Jetpack Compose',
    desc: 'Five offline puzzle games in one hub: light paths, tactical sliding, mosaics, kite escape and prism blocks.',
    descAr: 'خمس ألعاب ألغاز دون اتصال في مركز واحد: مسارات ضوئية وانزلاق تكتيكي وفسيفساء وطائرات ورقية وكتل منشورية.',
    img: 'assets/catalog/bundle5in1-hero.jpg',
    codester: 'https://www.codester.com/items/76186/puzzle-pack-5-in-1-kotlin-android-game-bundle?ref=Gr8Man',
    sellanycode: 'https://www.sellanycode.com/item.php?id=28630',
    sacPrice: 29,
    video: 'https://www.youtube.com/watch?v=XFTPVgakCII',
    codPrice: 14
  },
  {
    name: 'Orvaleth: Clockwork Spires',
    ar: 'Orvaleth: أبراج الساعة',
    stackKey: 'godot',
    level: '60 levels · 4 worlds',
    levelAr: '60 مرحلة · 4 عوالم',
    tech: 'Godot · 3D',
    desc: 'Build marble contraptions across clockwork worlds, then experiment in a 5×5 in-game level workshop.',
    descAr: 'ابنِ آلات للكرات في عوالم آلية، وجرّب في محرر مراحل داخل اللعبة بحجم 5×5.',
    img: 'assets/catalog/orvaleth-hero.jpg',
    codester: 'https://www.codester.com/items/76144/orvaleth-godot-3d-clockwork-puzzle-game?ref=Gr8Man',
    sellanycode: 'https://www.sellanycode.com/item.php?id=28633',
    sacPrice: 20,
    video: 'https://www.youtube.com/watch?v=um0hAMs7dpY',
    play: 'https://play.google.com/store/apps/details?id=com.valkora.serenth.orvaleth',
    codPrice: 14
  },
  {
    name: 'Trelovix (NeonBlocks)',
    ar: 'Trelovix (NeonBlocks)',
    stackKey: 'kotlin',
    level: '500 levels · 4 game modes',
    levelAr: '500 مرحلة · 4 أوضاع لعب',
    tech: 'Kotlin · Jetpack Compose',
    desc: 'Prism-block puzzles with Campaign, Classic Endless, Timed Blitz and a Daily Challenge.',
    descAr: 'ألغاز كتل منشورية مع الحملة والوضع اللانهائي والسباق المحدد والتحدي اليومي.',
    img: 'assets/catalog/trelovix-hero.jpg',
    codester: 'https://www.codester.com/items/76112/trelovix-500-levels-block-puzzle-kotlin?ref=Gr8Man',
    video: 'https://www.youtube.com/watch?v=_OlZw89RxwE',
    play: 'https://play.google.com/store/apps/details?id=com.vornalix.zelvarok.trelovix',
    codPrice: 14
  },
  {
    name: 'Zelquavex (ArrowEscape)',
    ar: 'Zelquavex (ArrowEscape)',
    stackKey: 'kotlin',
    level: '1,200 circuit puzzles',
    levelAr: '1,200 لغز دوائر',
    tech: 'Kotlin · Jetpack Compose',
    desc: 'Slide circuit pieces to the exit, charge relays and solve a new deterministic daily board.',
    descAr: 'حرّك قطع الدوائر إلى المخرج واشحن المرحّلات وحل لوحة يومية حتمية جديدة.',
    img: 'assets/catalog/zelquavex-hero.jpg',
    codester: 'https://www.codester.com/items/76106/zelquavex-1-200-circuit-puzzles-android?ref=Gr8Man',
    video: 'https://www.youtube.com/watch?v=49QDPeaT32k',
    play: 'https://play.google.com/store/apps/details?id=com.vorqali.nexumir.zelquavex',
    codPrice: 14
  },
  {
    name: 'Kivorivane',
    ar: 'Kivorivane',
    stackKey: 'kotlin',
    level: '1,200 kite-escape levels',
    levelAr: '1,200 مرحلة هروب الطائرات الورقية',
    tech: 'Kotlin · Jetpack Compose',
    desc: 'Plan non-colliding escape paths for paper kites across six scenic chapters, plus daily flights.',
    descAr: 'خطّط لمسارات خروج آمنة للطائرات الورقية عبر ستة فصول، مع رحلات يومية.',
    img: 'assets/catalog/kivorivane-hero.jpg',
    codester: 'https://www.codester.com/items/76093/kivorivane-1000-levels-kite-escape-kotlin?ref=Gr8Man',
    video: 'https://www.youtube.com/watch?v=1FEwvlkDMkw',
    play: 'https://play.google.com/store/apps/details?id=com.mirveki.savureth.kivorivane',
    codPrice: 14
  },
  {
    name: 'Veyravel',
    ar: 'Veyravel',
    stackKey: 'godot',
    level: '36 missions · 3 modes',
    levelAr: '36 مهمة · 3 أوضاع',
    tech: 'Godot · 3D action roguelite',
    desc: 'Pilot a courier drone through four floating regions, dodge telegraphed threats and upgrade between waves.',
    descAr: 'قد طائرة توصيل عبر أربع مناطق عائمة، وتفادَ الأخطار وطوّرها بين الموجات.',
    img: 'assets/catalog/veyravel-hero.jpg',
    codester: 'https://www.codester.com/items/76079/veyravel-3d-android-action-game-godot?ref=Gr8Man',
    sellanycode: 'https://www.sellanycode.com/item.php?id=28634',
    sacPrice: 20,
    video: 'https://www.youtube.com/watch?v=i2OG4xjzQNc',
    codPrice: 14
  },
  {
    name: 'Tessavora',
    ar: 'Tessavora',
    stackKey: 'kotlin',
    level: '120 levels · 6 chapters',
    levelAr: '120 مرحلة · 6 فصول',
    tech: 'Kotlin · Jetpack Compose',
    desc: 'Fit and rotate mosaic pieces, then create your own guaranteed-solvable silhouettes in the board designer.',
    descAr: 'رتّب قطع الفسيفساء ودوّرها، وصمّم أشكالاً قابلة للحل في محرر اللوحات.',
    img: 'assets/catalog/tessavora-hero.jpg',
    codester: 'https://www.codester.com/items/76001/tessavora-mosaic-puzzle-android-game?ref=Gr8Man',
    video: 'https://www.youtube.com/watch?v=pxO0F_5HY-4',
    play: 'https://play.google.com/store/apps/details?id=com.dralvoni.senvarek.tessavora',
    codPrice: 14
  },
  {
    name: 'PillarGlide',
    ar: 'PillarGlide',
    stackKey: 'kotlin',
    level: '60 levels · AI duels · studio',
    levelAr: '60 مرحلة · مواجهات ذكاء اصطناعي · استوديو',
    tech: 'Kotlin · Jetpack Compose',
    desc: 'Tactical sliding puzzles plus AI and pass-and-play duels, a daily trial and a visual level studio.',
    descAr: 'ألغاز انزلاق تكتيكية ومواجهات ضد الذكاء الاصطناعي أو لاعب آخر، مع تحدٍ يومي واستوديو مراحل.',
    img: 'assets/catalog/pillarglide-hero.jpg',
    codester: 'https://www.codester.com/items/75998/pillarglide-tactical-slide-game-kotlin?ref=Gr8Man',
    video: 'https://www.youtube.com/watch?v=5tzqqfIUVZI',
    play: 'https://play.google.com/store/apps/details?id=com.brimavel.noruvik.pillarglide',
    codPrice: 14
  },
  {
    name: 'LanternLoom',
    ar: 'LanternLoom',
    stackKey: 'kotlin',
    level: '48 levels · 4 chapters',
    levelAr: '48 مرحلة · 4 فصول',
    tech: 'Kotlin · Jetpack Compose',
    desc: 'Rotate light-path pieces to illuminate each lantern. Includes an offline hint solver and Arabic RTL.',
    descAr: 'دوّر قطع مسار الضوء لإنارة الفوانيس، مع حلّال تلميحات يعمل دون اتصال ودعم العربية RTL.',
    img: 'assets/catalog/lanternloom-hero.jpg',
    codester: 'https://www.codester.com/items/75956/lanternloom-light-path-puzzle-game-for-android?ref=Gr8Man',
    video: 'https://www.youtube.com/watch?v=4_4Zvb88QS8',
    play: 'https://play.google.com/store/apps/details?id=com.tavrolin.quemsy.lanternloom',
    codPrice: 14
  }
];

const catalogFilters = [
  { id: 'all', en: 'All kits (10)', ar: 'كل الحزم (10)' },
  { id: 'kotlin', en: 'Kotlin & Compose (8)', ar: 'Kotlin وCompose (8)' },
  { id: 'godot', en: 'Godot 3D (2)', ar: 'Godot ثلاثي الأبعاد (2)' },
  { id: 'play', en: 'Live Play Demo (8)', ar: 'تجربة Play حية (8)' }
];

const playStoreApps = [
  {
    slug: 'inkear',
    group: 'app',
    featuredOnGamesPage: false,
    name: 'Inkear: Offline Speech to Text',
    ar: 'Inkear: تحويل الصوت إلى نص',
    catEn: 'Productivity',
    catAr: 'الإنتاجية',
    desc: 'Speech to text & audio transcription, offline: lectures, meetings, voice notes.',
    descAr: 'تحويل الصوت إلى نص بدون إنترنت: محاضرات واجتماعات ورسائل صوتية، بخصوصية تامة.',
    priceEn: 'One-time purchase',
    priceAr: 'شراء لمرة واحدة',
    icon: 'assets/play/inkear.png',
    pkg: 'com.gr8.app.inkear'
  },
  {
    slug: 'habitloom',
    group: 'app',
    featuredOnGamesPage: false,
    name: 'Habit Loom: Daily Streaks',
    ar: 'Habit Loom: عادات يومية',
    catEn: 'Productivity',
    catAr: 'الإنتاجية',
    desc: 'Build daily habits, tick them off and watch your streaks grow. Private & simple.',
    descAr: 'ابنِ عادات يومية، وقم بإنجازها، وشاهد سلسلة إنجازاتك تتزايد. الأمر بسيط وسري.',
    priceEn: 'Free · No Ads',
    priceAr: 'مجاني · بلا إعلانات',
    icon: 'assets/play/habitloom.png',
    pkg: 'com.fennoru.habitloom'
  },
  {
    slug: 'loomicost',
    group: 'app',
    featuredOnGamesPage: false,
    name: 'LoomiCost: Daily Expense Log',
    ar: 'LoomiCost: سجل المصاريف اليومية',
    catEn: 'Productivity',
    catAr: 'الإنتاجية',
    desc: 'Minimal offline expense tracker. Private, ad-free, and easy to use.',
    descAr: 'تطبيق بسيط لتتبع النفقات دون اتصال بالإنترنت. يتميز بالخصوصية والخلو من الإعلانات وسهولة الاستخدام.',
    priceEn: 'Free · No Ads',
    priceAr: 'مجاني · بلا إعلانات',
    icon: 'assets/play/loomicost.png',
    pkg: 'com.velluno.loomicost'
  },
  {
    slug: 'qrcode',
    group: 'app',
    featuredOnGamesPage: false,
    name: 'QR Nexus Pro: Scanner & Creator',
    ar: 'QR Nexus Pro - قارئ ومولد QR',
    catEn: 'Tools',
    catAr: 'أدوات',
    desc: 'Fast accurate QR code and barcode scanner & generator with custom logos & colors.',
    descAr: 'أسرع وأدق قارئ ومولد لرموز QR والباركود مع تخصيص الألوان ودعم كامل دون إنترنت.',
    priceEn: 'Free',
    priceAr: 'مجاني',
    icon: 'assets/play/qrcode.png',
    pkg: 'com.gr8.sup.qrcode'
  },
  {
    slug: 'emsakyah',
    group: 'app',
    featuredOnGamesPage: false,
    name: 'Ramadan 2027 Imsakiyah & Adhan',
    ar: 'إمساكية رمضان 2027 والأذان',
    catEn: 'Tools',
    catAr: 'أدوات',
    desc: 'Ramadan timetable, prayer times & adhan, Qibla, Quran recitation, azkar, ruqyah.',
    descAr: 'إمساكية رمضان ومواقيت الصلاة والأذان، القبلة، القرآن مسموعاً، الأذكار والرقية.',
    priceEn: 'Free',
    priceAr: 'مجاني',
    icon: 'assets/play/emsakyah.png',
    pkg: 'com.gr8.apps.sup.emsakyah'
  },
  {
    slug: 'chess',
    group: 'game',
    featuredOnGamesPage: true,
    name: 'Chess With Sara: Learn & Play',
    ar: 'شطرنج مع سارة: تعلّم والعب',
    catEn: 'Board · Chess AI',
    catAr: 'شطرنج · ذكاء اصطناعي',
    desc: 'Play online, solve puzzles and learn from Sara, a coach who explains your moves.',
    descAr: 'العب أونلاين وحلّ الألغاز وتعلّم مع سارة، المدرّبة التي تشرح نقلاتك بصوتها.',
    priceEn: 'Free',
    priceAr: 'مجاني',
    icon: 'assets/play/chess.png',
    pkg: 'com.gr8.games.chess.chesswithai'
  },
  {
    slug: 'psycho',
    group: 'game',
    featuredOnGamesPage: true,
    name: 'Psycho Mechanics: Physics',
    ar: 'آليات مجنونة: ألغاز فيزيائية',
    catEn: 'Simulation · Physics',
    catAr: 'فيزياء · آلات',
    desc: 'Build wacky contraptions, trigger chain reactions & solve fun physics puzzles!',
    descAr: 'ابنِ آلات ذكية، ابتكر تفاعلات متسلسلة، وتحدَّ عقلك بأمتع الألغاز الفيزيائية!',
    priceEn: 'Free',
    priceAr: 'مجاني',
    icon: 'assets/play/psycho.png',
    pkg: 'com.gr8.games.crazymachines'
  },
  {
    slug: 'gamesbox',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Games Box: All-in-One Games',
    ar: 'Games Box: ألعاب بدون نت',
    catEn: '10 Offline Games',
    catAr: '10 ألعاب بدون نت',
    desc: '10 offline games: Police Pursuit 3D, Tarneeb, Basra, Dominoes, Solitaire & more.',
    descAr: '10 ألعاب بدون إنترنت: مطاردة شرطة 3D، طرنيب، باصرة، دومينو، سوليتير وألغاز.',
    priceEn: 'Free',
    priceAr: 'مجاني',
    icon: 'assets/play/gamesbox.png',
    pkg: 'com.gr8.games.gamesbox'
  },
  {
    slug: 'tarneeb',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Tarneeb With AI',
    ar: 'طرنيب - لعبة الورق الكلاسيكية',
    catEn: 'Card Game',
    catAr: 'لعبة ورق',
    desc: 'Enjoy authentic Middle Eastern Tarneeb offline with smart AI now!',
    descAr: 'العب طرنيب الكلاسيكية مع ذكاء اصطناعي متطور وبدون إنترنت في أي وقت وأي مكان!',
    priceEn: 'Free',
    priceAr: 'مجاني',
    icon: 'assets/play/tarneeb.png',
    pkg: 'com.gr8.games.tarneeb'
  },
  {
    slug: 'basra',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Basra With AI',
    ar: 'باصره',
    catEn: 'Card Game',
    catAr: 'لعبة ورق',
    desc: 'Play classic Basra With AI! Smart offline duels, 3D felt tables & luxury decks.',
    descAr: 'العب باصره أوفلاين ضد أذكى ذكاء اصطناعي بأجواء كازينو فاخرة وطاولات 3D مذهلة!',
    priceEn: 'Free',
    priceAr: 'مجاني',
    icon: 'assets/play/basra.png',
    pkg: 'com.gr8.games.basra'
  },
  {
    slug: 'sudoku',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Sudoku Puzzle',
    ar: 'تحديات سودوكو',
    catEn: 'Number Puzzle',
    catAr: 'ألغاز أرقام',
    desc: 'Exciting challenges for all levels! Enjoy smart number puzzles with a clean interface.',
    descAr: 'سودوكو مثيرة لجميع المستويات! استمتع بألغاز أرقام ذكية مع واجهة أنيقة وسهلة.',
    priceEn: 'Free',
    priceAr: 'مجاني',
    icon: 'assets/play/sudoku.png',
    pkg: 'com.games.sup.sudoku'
  },
  {
    slug: 'liquidsort',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Liquid Sort Puzzle',
    ar: 'لغز فرز السوائل الملونة',
    catEn: 'Puzzle',
    catAr: 'ألغاز',
    desc: 'Pour coloured water, sort the bottles and solve puzzles at your own pace.',
    descAr: 'اسكب الماء الملوّن ورتّب الألوان في القوارير وحلّ الألغاز على راحتك.',
    priceEn: 'Free',
    priceAr: 'مجاني',
    icon: 'assets/play/liquidsort.png',
    pkg: 'com.gr8.games.liquidsortpuzzle'
  },
  {
    slug: 'orvaleth',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Orvaleth: Clockwork Spires',
    ar: 'أورفاليث: أبراج الساعة',
    catEn: '3D Puzzle',
    catAr: 'ألغاز ثلاثية الأبعاد',
    desc: 'Place 3D parts, set launch power & time the marble across 60 clockwork spires.',
    descAr: 'ركّب القطع واضبط قوة الإطلاق ووقّت كرة الأثير عبر 60 برجاً ميكانيكياً.',
    priceEn: 'Free · No Ads',
    priceAr: 'مجاني · بلا إعلانات',
    icon: 'assets/play/orvaleth.png',
    pkg: 'com.valkora.serenth.orvaleth'
  },
  {
    slug: 'tessavora',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Tessavora: Mosaic Puzzle',
    ar: 'Tessavora: ألغاز الفسيفساء',
    catEn: 'Puzzle',
    catAr: 'ألغاز',
    desc: 'Fit geometric pieces, explore 120 mosaics and design your own puzzles.',
    descAr: 'ركّب القطع الهندسية، واكتشف ١٢٠ لغز فسيفساء، وصمّم ألغازك الخاصة.',
    priceEn: 'Free · No Ads',
    priceAr: 'مجاني · بلا إعلانات',
    icon: 'assets/play/tessavora.png',
    pkg: 'com.dralvoni.senvarek.tessavora'
  },
  {
    slug: 'pillarglide',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'PillarGlide: Tactical Slide',
    ar: 'بيلار غلايد: تكتيك الانزلاق',
    catEn: 'Board · Strategy',
    catAr: 'لوحية · تكتيك',
    desc: 'Glide past stone pillars, conquer 60 puzzles, duel smart AI, and build boards.',
    descAr: 'انزلق بين الأعمدة الحجرية عبر 60 لغزاً، وتحدَّ الذكاء الاصطناعي، وصمّم لوحاتك.',
    priceEn: 'Free · No Ads',
    priceAr: 'مجاني · بلا إعلانات',
    icon: 'assets/play/pillarglide.png',
    pkg: 'com.brimavel.noruvik.pillarglide'
  },
  {
    slug: 'lanternloom',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Lanternloom: Light Path Puzzle',
    ar: 'Lanternloom: لغز مسار الضوء',
    catEn: 'Puzzle',
    catAr: 'ألغاز',
    desc: 'Guide the soothing light beam to illuminate every lantern in 48 peaceful levels.',
    descAr: 'وجّه شعاع الضوء الهادئ لإضاءة جميع الفوانيس عبر 48 مرحلة ممتعة دون إنترنت.',
    priceEn: 'Free · No Ads',
    priceAr: 'مجاني · بلا إعلانات',
    icon: 'assets/play/lanternloom.png',
    pkg: 'com.tavrolin.quemsy.lanternloom'
  },
  {
    slug: 'kivorivane',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Kivorivane: Kite Escape',
    ar: 'كيفوريفين: هروب الطائرات',
    catEn: 'Puzzle',
    catAr: 'ألغاز',
    desc: 'Set folded kites free in 1,200 offline puzzles and a new daily board.',
    descAr: 'أطلق الطائرات الورقية في ١٢٠٠ لغز بلا إنترنت، مع لوحة جديدة كل يوم.',
    priceEn: 'Free · No Ads',
    priceAr: 'مجاني · بلا إعلانات',
    icon: 'assets/play/kivorivane.png',
    pkg: 'com.mirveki.savureth.kivorivane'
  },
  {
    slug: 'trelovix',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Trelovix: Prism Grid',
    ar: 'تريلوفيكس: شبكة الموشور',
    catEn: 'Puzzle',
    catAr: 'ألغاز',
    desc: '500 prism grid levels, daily puzzle, blitz & classic block strategy.',
    descAr: '٥٠٠ مرحلة ألغاز، تحدٍ يومي، سباق الزمن والنمط الكلاسيكي دون إنترنت.',
    priceEn: 'Free · No Ads',
    priceAr: 'مجاني · بلا إعلانات',
    icon: 'assets/play/trelovix.png',
    pkg: 'com.vornalix.zelvarok.trelovix'
  },
  {
    slug: 'zelquavex',
    group: 'game',
    featuredOnGamesPage: false,
    name: 'Zelquavex: Circuit Slide',
    ar: 'زيلكوافيكس: ألغاز الدوائر',
    catEn: 'Puzzle',
    catAr: 'ألغاز',
    desc: 'Slide the arrow, power the relays, and solve 1,200 offline circuit puzzles.',
    descAr: 'حرّك السهم ونشّط المرحّلات وحلّ ١٢٠٠ لغز دون اتصال.',
    priceEn: 'Free · No Ads',
    priceAr: 'مجاني · بلا إعلانات',
    icon: 'assets/play/zelquavex.png',
    pkg: 'com.vorqali.nexumir.zelquavex'
  }
];

const playFilters = [
  { id: 'all', en: 'All on Play (19)', ar: 'الكل (19)' },
  { id: 'game', en: 'Games (14)', ar: 'ألعاب (14)' },
  { id: 'app', en: 'Apps & Utilities (5)', ar: 'تطبيقات وأدوات (5)' }
];

let activePlayFilter = 'all';

let activeFilter = 'all';

function addTracking(raw, campaign) {
  const u = new URL(raw);
  u.searchParams.set('utm_source', 'simple-free-apps.github.io');
  u.searchParams.set('utm_medium', 'catalog');
  u.searchParams.set('utm_campaign', campaign);
  return u.href;
}

function isArabic() {
  return document.documentElement.lang === 'ar';
}

function renderFilters() {
  const bar = document.querySelector('#catalog-filters');
  if (!bar) return;
  const ar = isArabic();
  bar.replaceChildren(...catalogFilters.map((f) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-pill';
    btn.setAttribute('aria-pressed', activeFilter === f.id ? 'true' : 'false');
    btn.textContent = ar ? f.ar : f.en;
    btn.addEventListener('click', () => {
      activeFilter = f.id;
      renderFilters();
      renderProducts();
    });
    return btn;
  }));
}

function renderProducts() {
  const root = document.querySelector('#products');
  if (!root) return;
  const ar = isArabic();
  const visible = products.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'play') return Boolean(p.play);
    return p.stackKey === activeFilter;
  });

  root.replaceChildren(...visible.map((p, i) => {
    const card = document.createElement('article');
    card.className = 'product-card';

    const img = document.createElement('img');
    img.className = 'product-image';
    img.src = p.img;
    img.alt = p.name + ' source project preview';
    img.loading = 'lazy';

    const body = document.createElement('div');
    body.className = 'product-body';

    const title = document.createElement('h3');
    title.dataset.en = p.name;
    title.dataset.ar = p.ar;
    title.textContent = ar ? p.ar : p.name;

    const meta = document.createElement('div');
    meta.className = 'product-meta';
    for (const [en, arText, cls] of [[p.level, p.levelAr, 'level'], [p.tech, p.tech, 'tech']]) {
      const tag = document.createElement('span');
      tag.className = cls;
      tag.dataset.en = en;
      tag.dataset.ar = arText;
      tag.textContent = ar ? arText : en;
      meta.append(tag);
    }

    const desc = document.createElement('p');
    desc.dataset.en = p.desc;
    desc.dataset.ar = p.descAr;
    desc.textContent = ar ? p.descAr : p.desc;

    const links = document.createElement('div');
    links.className = 'product-links';
    const c = document.createElement('a');
    c.href = addTracking(p.codester, `codester-${i + 1}`);
    c.rel = 'noopener';
    c.dataset.en = `Codester · $${p.codPrice}`;
    c.dataset.ar = `Codester · $${p.codPrice}`;
    c.textContent = c.dataset.en;
    links.append(c);

    if (p.sellanycode) {
      const s = document.createElement('a');
      s.href = addTracking(p.sellanycode, `sellanycode-${i + 1}`);
      s.target = '_blank';
      s.rel = 'noopener';
      s.dataset.en = `SellAnyCode · $${p.sacPrice}`;
      s.dataset.ar = `SellAnyCode · $${p.sacPrice}`;
      s.textContent = s.dataset.en;
      links.append(s);
    }

    if (p.video) {
      const v = document.createElement('a');
      v.href = p.video;
      v.target = '_blank';
      v.rel = 'noopener';
      v.dataset.en = 'Demo Video ↗';
      v.dataset.ar = 'فيديو العرض ↗';
      v.textContent = ar ? v.dataset.ar : v.dataset.en;
      links.append(v);
    }

    if (p.play) {
      const g = document.createElement('a');
      g.className = 'play-badge-link play-badge-compact';
      g.href = addTracking(p.play, `play-${i + 1}`);
      g.rel = 'noopener';
      g.setAttribute('aria-label', ar ? `احصل على ${p.ar} من Google Play` : `Get ${p.name} on Google Play`);
      const badge = document.createElement('img');
      badge.className = 'play-badge-img';
      badge.width = 646;
      badge.height = 250;
      badge.dataset.srcEn = 'assets/badges/google-play-en.png';
      badge.dataset.srcAr = 'assets/badges/google-play-ar.png';
      badge.dataset.altEn = `Get ${p.name} on Google Play`;
      badge.dataset.altAr = `احصل على ${p.ar} من Google Play`;
      badge.src = ar ? badge.dataset.srcAr : badge.dataset.srcEn;
      badge.alt = ar ? badge.dataset.altAr : badge.dataset.altEn;
      g.append(badge);
      links.append(g);
    }

    body.append(title, meta, desc, links);
    card.append(img, body);
    return card;
  }));
}

function buildPlayCard(app, ar, prefix, campaign) {
  const card = document.createElement('article');
  card.className = 'play-card';

  const head = document.createElement('div');
  head.className = 'play-card-head';

  const icon = document.createElement('img');
  icon.className = 'play-icon';
  icon.src = prefix + app.icon;
  icon.alt = app.name;
  icon.width = 52;
  icon.height = 52;
  icon.loading = 'lazy';

  const titleWrap = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.dataset.en = app.name;
  h3.dataset.ar = app.ar;
  h3.textContent = ar ? app.ar : app.name;

  const cat = document.createElement('span');
  cat.className = 'play-cat';
  cat.dataset.en = app.catEn;
  cat.dataset.ar = app.catAr;
  cat.textContent = ar ? app.catAr : app.catEn;

  titleWrap.append(h3, cat);
  head.append(icon, titleWrap);

  const desc = document.createElement('p');
  desc.dataset.en = app.desc;
  desc.dataset.ar = app.descAr;
  desc.textContent = ar ? app.descAr : app.desc;

  const foot = document.createElement('div');
  foot.className = 'play-card-foot';

  const btn = document.createElement('a');
  btn.className = 'play-open-btn';
  btn.href = addTracking(`https://play.google.com/store/apps/details?id=${app.pkg}`, campaign);
  btn.target = '_blank';
  btn.rel = 'noopener';
  btn.dataset.en = 'Google Play ↗';
  btn.dataset.ar = 'Google Play ↗';
  btn.textContent = 'Google Play ↗';

  const price = document.createElement('span');
  price.className = 'play-price-tag';
  price.dataset.en = app.priceEn;
  price.dataset.ar = app.priceAr;
  price.textContent = ar ? app.priceAr : app.priceEn;

  foot.append(btn, price);
  card.append(head, desc, foot);
  return card;
}

function renderPlayFilters() {
  const bar = document.querySelector('#play-filters');
  if (!bar) return;
  const ar = isArabic();
  bar.replaceChildren(...playFilters.map((f) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-pill';
    btn.setAttribute('aria-pressed', activePlayFilter === f.id ? 'true' : 'false');
    btn.textContent = ar ? f.ar : f.en;
    btn.addEventListener('click', () => {
      activePlayFilter = f.id;
      renderPlayFilters();
      renderPlayDirectory();
    });
    return btn;
  }));
}

function renderPlayDirectory() {
  const root = document.querySelector('#play-directory');
  if (!root) return;
  const ar = isArabic();
  const prefix = root.dataset.assetPrefix || '';
  const visible = playStoreApps.filter((a) => activePlayFilter === 'all' || a.group === activePlayFilter);
  root.replaceChildren(...visible.map((a) => buildPlayCard(a, ar, prefix, `play-dir-${a.slug}`)));
}

function renderMoreGames() {
  const root = document.querySelector('#more-games-grid');
  if (!root) return;
  const ar = isArabic();
  const prefix = root.dataset.assetPrefix || '';
  const visible = playStoreApps.filter((a) => a.group === 'game' && !a.featuredOnGamesPage);
  root.replaceChildren(...visible.map((a) => buildPlayCard(a, ar, prefix, `play-games-${a.slug}`)));
}

function updateSavings() {
  const spendEl = document.querySelector('#spend');
  const priceEl = document.querySelector('#price');
  const out = document.querySelector('#saving');
  if (!spendEl || !priceEl || !out) return;
  const spend = Math.max(0, Number(spendEl.value) || 0);
  const price = Math.max(0, Number(priceEl.value) || 0);
  const months = spend > 0 ? Math.ceil(price / spend) : null;
  if (isArabic()) {
    out.textContent = months === null
      ? 'أدخل إنفاقاً شهرياً أكبر من صفر لحساب المدة.'
      : `مقارنة توضيحية: نحو ${months} شهرًا بهذا الإنفاق.`;
  } else {
    out.textContent = months === null
      ? 'Enter monthly spend above zero to estimate.'
      : `Illustrative comparison: about ${months} month${months === 1 ? '' : 's'} at this spend.`;
  }
}

function initLightbox() {
  const dialog = document.querySelector('#lightbox');
  const imgEl = document.querySelector('#lightbox-img');
  const capEl = document.querySelector('#lightbox-caption');
  const prevBtn = document.querySelector('#lightbox-prev');
  const nextBtn = document.querySelector('#lightbox-next');
  const closeBtn = document.querySelector('#lightbox-close');
  if (!dialog || !imgEl || !capEl) return;

  const galleryImgs = Array.from(document.querySelectorAll('.screens img, .feature-art, .starter-thumb'));
  if (!galleryImgs.length) return;
  let currentIndex = 0;

  function showAt(idx) {
    currentIndex = (idx + galleryImgs.length) % galleryImgs.length;
    const target = galleryImgs[currentIndex];
    imgEl.src = target.currentSrc || target.src;
    imgEl.alt = target.alt || '';
    capEl.textContent = target.alt || '';
  }

  galleryImgs.forEach((img, idx) => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.addEventListener('click', () => {
      showAt(idx);
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showAt(idx);
        if (typeof dialog.showModal === 'function') dialog.showModal();
      }
    });
  });

  prevBtn?.addEventListener('click', () => showAt(currentIndex - 1));
  nextBtn?.addEventListener('click', () => showAt(currentIndex + 1));
  closeBtn?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showAt(currentIndex - 1);
    else if (e.key === 'ArrowRight') showAt(currentIndex + 1);
  });
}

function setLanguage(lang) {
  const ar = lang === 'ar';
  document.documentElement.lang = ar ? 'ar' : 'en';
  document.documentElement.dir = ar ? 'rtl' : 'ltr';
  document.body.dir = ar ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-en]').forEach((el) => {
    el.textContent = ar ? el.dataset.ar : el.dataset.en;
  });

  document.querySelectorAll('img[data-src-en]').forEach((img) => {
    img.src = ar ? img.dataset.srcAr : img.dataset.srcEn;
    if (img.dataset.altEn) {
      img.alt = ar ? img.dataset.altAr : img.dataset.altEn;
    }
  });

  const titleMeta = document.querySelector(ar ? 'meta[name="title-ar"]' : 'meta[name="title-en"]');
  if (titleMeta && titleMeta.content) document.title = titleMeta.content;

  const btn = document.querySelector('#language');
  if (btn) btn.textContent = ar ? 'English' : 'العربية';

  try {
    localStorage.setItem('gr8_lang', ar ? 'ar' : 'en');
  } catch (_) {}

  renderFilters();
  renderProducts();
  renderPlayFilters();
  renderPlayDirectory();
  renderMoreGames();
  updateSavings();
}

const urlLang = new URLSearchParams(location.search).get('lang');
let initialLang = 'en';
if (urlLang === 'ar' || urlLang === 'en') {
  initialLang = urlLang;
} else {
  try {
    const saved = localStorage.getItem('gr8_lang');
    if (saved === 'ar' || saved === 'en') initialLang = saved;
  } catch (_) {}
}

document.querySelector('#language')?.addEventListener('click', () => {
  setLanguage(isArabic() ? 'en' : 'ar');
});
document.querySelectorAll('.calculator input').forEach((el) => {
  el.addEventListener('input', updateSavings);
});
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

setLanguage(initialLang);
initLightbox();
