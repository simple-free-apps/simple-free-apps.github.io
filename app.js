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
    payhip: 'https://payhip.com/b/beFfj',
    payPrice: 12,
    codester: 'https://www.codester.com/items/76186/puzzle-pack-5-in-1-kotlin-android-game-bundle?ref=Gr8Man',
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
    payhip: 'https://payhip.com/b/hWmcv',
    payPrice: 9,
    codester: 'https://www.codester.com/items/76144/orvaleth-godot-3d-clockwork-puzzle-game?ref=Gr8Man',
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
    payhip: 'https://payhip.com/b/WsHQp',
    payPrice: 9,
    codester: 'https://www.codester.com/items/76093/kivorivane-1000-levels-kite-escape-kotlin?ref=Gr8Man',
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
    payhip: 'https://payhip.com/b/Jv6fL',
    payPrice: 9,
    codester: 'https://www.codester.com/items/76079/veyravel-3d-android-action-game-godot?ref=Gr8Man',
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
    codPrice: 14
  }
];

const catalogFilters = [
  { id: 'all', en: 'All kits (10)', ar: 'كل الحزم (10)' },
  { id: 'kotlin', en: 'Kotlin & Compose (8)', ar: 'Kotlin وCompose (8)' },
  { id: 'godot', en: 'Godot 3D (2)', ar: 'Godot ثلاثي الأبعاد (2)' },
  { id: 'play', en: 'Live Play Demo (2)', ar: 'تجربة Play حية (2)' }
];

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
    if (p.payhip) {
      const a = document.createElement('a');
      a.href = addTracking(p.payhip, `payhip-${i + 1}`);
      a.rel = 'noopener';
      a.dataset.en = `Payhip · $${p.payPrice}`;
      a.dataset.ar = `Payhip · $${p.payPrice}`;
      a.textContent = a.dataset.en;
      links.append(a);
    }
    const c = document.createElement('a');
    c.href = addTracking(p.codester, `codester-${i + 1}`);
    c.rel = 'noopener';
    c.dataset.en = `Codester · $${p.codPrice}`;
    c.dataset.ar = `Codester · $${p.codPrice}`;
    c.textContent = c.dataset.en;
    links.append(c);

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
