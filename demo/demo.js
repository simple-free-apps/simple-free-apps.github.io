(function () {
  const canvas = document.getElementById('demo-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const LIQUID_COLORS = {
    R: '#ef4444',
    B: '#38bdf8',
    Y: '#facc15',
    G: '#34d399',
    P: '#c084fc',
  };

  const LIQUID_LEVELS = [
    [
      ['R', 'B', 'R', 'B'],
      ['B', 'R', 'B', 'R'],
      [],
    ],
    [
      ['R', 'Y', 'B', 'Y'],
      ['B', 'R', 'Y', 'R'],
      ['Y', 'B', 'R', 'B'],
      [],
      [],
    ],
    [
      ['G', 'P', 'R', 'B'],
      ['B', 'G', 'P', 'R'],
      ['R', 'B', 'G', 'P'],
      ['P', 'R', 'B', 'G'],
      [],
      [],
    ],
  ];

  // Grid cell codes: '.' empty, '#' wall, 'E' emitter (dir), 'L' lantern, '/' or '\' rotatable mirror
  const LANTERN_LEVELS = [
    {
      size: 4,
      emitter: { r: 1, c: 0, dr: 0, dc: 1 },
      grid: [
        ['.', '.', '.', '.'],
        ['E', '.', '/', '.'],
        ['.', '.', '.', '.'],
        ['.', '.', 'L', '.'],
      ],
      mirrors: [{ r: 1, c: 2, type: '\\' }], // Start tilted wrong so user taps to solve to '/' -> wait: down is (dr=1, dc=0), so from right (0,1) -> '\' sends down (1,0)!
    },
    {
      size: 5,
      emitter: { r: 0, c: 1, dr: 1, dc: 0 },
      grid: [
        ['.', 'E', '.', '.', '.'],
        ['.', '.', '.', '#', '.'],
        ['.', '/', '.', '/', '.'],
        ['.', '.', '.', '.', 'L'],
        ['.', '.', '.', '.', '.'],
      ],
      mirrors: [
        { r: 2, c: 1, type: '/' }, // Needs '\' to send right (0,1) to (2,3)
        { r: 2, c: 3, type: '/' }, // Needs '\' to send down? Wait: (2,3) '\' sends (0,1)->(1,0) down to (3,3), let's put L at (3,3) or add third mirror!
      ],
    },
    {
      size: 5,
      emitter: { r: 4, c: 0, dr: 0, dc: 1 },
      grid: [
        ['.', '.', '.', 'L', '.'],
        ['.', '/', '.', '/', '.'],
        ['.', '.', '#', '.', '.'],
        ['.', '.', '.', '.', '.'],
        ['E', '/', '.', '.', '.'],
      ],
      mirrors: [
        { r: 4, c: 1, type: '\\' }, // Needs '/' to go up along col 1
        { r: 1, c: 1, type: '\\' }, // Needs '/' to go right along row 1
        { r: 1, c: 3, type: '/' },  // Needs '\' to go up from (1,3)? Wait: going right (0,1) hitting '/' goes UP (-1,0) -> (0,3) = L!
      ],
    },
  ];

  // Fix level 1 and 2 coordinates cleanly so all 3 are verified solvable!
  LANTERN_LEVELS[0] = {
    size: 4,
    emitter: { r: 1, c: 0, dr: 0, dc: 1 },
    grid: [
      ['.', '.', '.', '.'],
      ['E', '.', '.', '.'],
      ['.', '.', '.', '.'],
      ['.', '.', 'L', '.'],
    ],
    mirrors: [{ r: 1, c: 2, type: '/' }], // Tapping turns '/' -> '\', routing (0,1) -> (1,0) straight into L at (3,2)
  };
  LANTERN_LEVELS[1] = {
    size: 5,
    emitter: { r: 0, c: 1, dr: 1, dc: 0 },
    grid: [
      ['.', 'E', '.', '.', '.'],
      ['.', '.', '.', '#', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '.', '.', 'L', '.'],
      ['.', '.', '.', '.', '.'],
    ],
    mirrors: [
      { r: 2, c: 1, type: '/' },  // Tap -> '\' turns down (1,0) -> right (0,1)
      { r: 2, c: 3, type: '/' },  // Tap -> '\' turns right (0,1) -> down (1,0) to L at (3,3)
    ],
  };
  LANTERN_LEVELS[2] = {
    size: 5,
    emitter: { r: 4, c: 0, dr: 0, dc: 1 },
    grid: [
      ['.', '.', '.', 'L', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '.', '#', '.', '.'],
      ['.', '.', '.', '.', '.'],
      ['E', '.', '.', '.', '.'],
    ],
    mirrors: [
      { r: 4, c: 1, type: '\\' }, // Tap -> '/' turns (0,1) -> up (-1,0)
      { r: 1, c: 1, type: '\\' }, // Tap -> '/' turns (-1,0) -> right (0,1)
      { r: 1, c: 3, type: '\\' }, // Tap -> '/' turns (0,1) -> up (-1,0) to L at (0,3)
    ],
  };

  // Kivorivane directional kite levels: U, D, L, R
  const KITE_LEVELS = [
    {
      size: 3,
      kites: [
        { r: 0, c: 1, dir: 'U', color: '#38bdf8' },
        { r: 1, c: 1, dir: 'R', color: '#facc15' },
        { r: 1, c: 2, dir: 'U', color: '#34d399' },
        { r: 2, c: 1, dir: 'D', color: '#fb7185' },
      ],
    },
    {
      size: 4,
      kites: [
        { r: 0, c: 0, dir: 'L', color: '#38bdf8' },
        { r: 0, c: 2, dir: 'U', color: '#34d399' },
        { r: 1, c: 1, dir: 'U', color: '#facc15' },
        { r: 1, c: 2, dir: 'R', color: '#fb7185' },
        { r: 2, c: 1, dir: 'L', color: '#c084fc' },
        { r: 2, c: 2, dir: 'D', color: '#f59e0b' },
      ],
    },
    {
      size: 4,
      kites: [
        { r: 0, c: 1, dir: 'R', color: '#38bdf8' },
        { r: 0, c: 2, dir: 'U', color: '#34d399' },
        { r: 1, c: 0, dir: 'L', color: '#facc15' },
        { r: 1, c: 1, dir: 'L', color: '#fb7185' },
        { r: 1, c: 2, dir: 'U', color: '#c084fc' },
        { r: 2, c: 1, dir: 'D', color: '#f59e0b' },
        { r: 2, c: 2, dir: 'R', color: '#a3e635' },
        { r: 3, c: 1, dir: 'L', color: '#22d3ee' },
      ],
    },
  ];

  const META = {
    liquid: {
      titleEn: 'Liquid Sort Puzzle',
      titleAr: 'لغز فرز السوائل',
      instEn: 'Tap a flask to pick its top color, then tap a matching or empty flask.',
      instAr: 'انقر على قارورة لالتقاط اللون العلوي ثم انقر على قارورة مطابقة أو فارغة.',
      eyebrowEn: 'FULL NATIVE ANDROID PROJECT',
      eyebrowAr: 'مشروع أندرويد كامل بلغة Kotlin',
      ctaTitleEn: 'Liquid Sort Puzzle Source Kit',
      ctaTitleAr: 'حزمة كود لعبة فرز السوائل',
      ctaDescEn: 'Multi-chapter Kotlin + Jetpack Compose puzzle game with locked flasks, hint solver, EN/AR UI, and Google Play / AdMob flavors.',
      ctaDescAr: 'لعبة ألغاز متعددة الفصول بـ Kotlin وJetpack Compose مع قوارير مقفلة وحلّال تلميحات ودعم عربي/إنجليزي ونكهتي Play وCodester.',
      bulletsEn: ['Procedural chapters & locked flasks', 'Certified BFS hint solver', 'Play (noAds) & Codester (withAds) flavors'],
      bulletsAr: ['فصول متدرجة وقوارير مقفلة', 'حلّال تلميحات موثوق', 'نسخة Play بلا إعلانات ونسخة Codester مع AdMob'],
      codesterEyebrowEn: 'NATIVE KOTLIN ANDROID PUZZLE',
      codesterEyebrowAr: 'لعبة ألغاز أصلية بـ Kotlin لأندرويد',
      codesterTitleEn: 'Liquid Sort Puzzle',
      codesterTitleAr: 'لعبة فرز السوائل',
      codesterDescEn: 'Multi-chapter Kotlin & Jetpack Compose water-sort mechanics demo with procedural chapters, locked flasks, certified BFS hint solver, and EN/AR RTL UI.',
      codesterDescAr: 'معاينة لميكانيكية فرز السوائل بلغة Kotlin وJetpack Compose مع فصول متدرجة وقوارير مقفلة وحلّال تلميحات BFS وواجهة عربية وإنجليزية.',
      codesterBulletsEn: ['Procedural chapters & locked flasks', 'Certified BFS hint solver', 'Bilingual EN/AR RTL interface & procedural audio'],
      codesterBulletsAr: ['فصول متدرجة وقوارير مقفلة', 'حلّال تلميحات BFS موثوق', 'واجهة ثنائية اللغة عربي/إنجليزي وأصوات مدمجة'],
      links: [
        { labelEn: 'Codester · $14', labelAr: 'Codester · 14$', url: 'https://www.codester.com/items/64630/liquid-sort-puzzle-kotlin-android-game-template?ref=Gr8Man', primary: true },
        { labelEn: 'Play Store Demo', labelAr: 'تجربة Google Play', url: 'https://play.google.com/store/apps/details?id=com.gr8.games.liquidsortpuzzle', primary: false },
      ],
    },
    lantern: {
      titleEn: 'LanternLoom: Light Path',
      titleAr: 'LanternLoom: مسارات الضوء',
      instEn: 'Tap any mirror (/ or \\) to rotate 90° and steer the amber beam into the lantern.',
      instAr: 'انقر على أي مرآة لتدويرها 90° وتوجيه شعاع الضوء نحو الفانوس.',
      eyebrowEn: 'INCLUDED IN SORAVEL 5-IN-1',
      eyebrowAr: 'ضمن حزمة Soravel 5 في 1',
      ctaTitleEn: 'LanternLoom & Soravel 5-in-1 Pack',
      ctaTitleAr: 'LanternLoom وحزمة Soravel 5 في 1',
      ctaDescEn: '48 handcrafted optical levels in LanternLoom — or get all 5 Kotlin & Compose puzzle games (1,928+ levels) in one studio source pack on Codester.',
      ctaDescAr: '48 مرحلة ضوئية في LanternLoom — أو احصل على 5 ألعاب كاملة (+1,928 مرحلة) في حزمة واحدة جاهزة على Codester.',
      bulletsEn: ['5 full games in Soravel bundle (1,928+ levels)', '54/54 verified JVM unit tests', 'Complete Kotlin & Compose source pack on Codester ($14)'],
      bulletsAr: ['5 ألعاب كاملة في حزمة Soravel (+1,928 مرحلة)', '54/54 اختبار وحدة ناجح', 'حزمة مصدر Kotlin وCompose كاملة على Codester بـ 14$'],
      codesterEyebrowEn: 'NATIVE ANDROID OPTICAL PUZZLE',
      codesterEyebrowAr: 'لعبة ألغاز ضوئية أصلية لأندرويد',
      codesterTitleEn: 'LanternLoom: Light Path Puzzle',
      codesterTitleAr: 'LanternLoom: ألغاز مسارات الضوء',
      codesterDescEn: '48 handcrafted optical beam levels built with Kotlin & Jetpack Compose, offline BFS hint solver, procedural graphics, and bilingual EN/AR RTL UI.',
      codesterDescAr: '48 مرحلة ضوئية مصممة بعناية بلغة Kotlin وJetpack Compose مع حلّال تلميحات يعمل دون اتصال ورسومات Canvas ودعم العربية RTL.',
      codesterBulletsEn: ['48 handcrafted optical beam levels across 4 chapters', '54/54 verified JVM unit tests & offline hint solver', 'Bilingual EN/AR RTL interface & dual Gradle flavors'],
      codesterBulletsAr: ['48 مرحلة ضوئية عبر 4 فصول', '54/54 اختبار وحدة ناجح وحلّال تلميحات دون اتصال', 'واجهة ثنائية اللغة EN/AR وبنيتا بناء منظمتان'],
      links: [
        { labelEn: 'Soravel 5-in-1 on Codester · $14', labelAr: 'حزمة Soravel على Codester · 14$', url: 'https://www.codester.com/items/76186/puzzle-pack-5-in-1-kotlin-android-game-bundle?ref=Gr8Man', primary: true },
        { labelEn: 'LanternLoom on Codester · $14', labelAr: 'LanternLoom على Codester · 14$', url: 'https://www.codester.com/items/75956/lanternloom-light-path-puzzle-game-for-android?ref=Gr8Man', primary: false },
        { labelEn: 'Play Store Demo', labelAr: 'تجربة Google Play', url: 'https://play.google.com/store/apps/details?id=com.tavrolin.quemsy.lanternloom', primary: false },
      ],
    },
    kite: {
      titleEn: 'Kivorivane: Kite Escape',
      titleAr: 'Kivorivane: هروب الطائرات',
      instEn: 'Tap a directional kite with a clear path to the edge so it flies off without colliding.',
      instAr: 'انقر على طائرة ورقية مسارها مفتوح حتى الحافة لتنطلق دون اصطدام.',
      eyebrowEn: '1,200 LEVELS · FULL SOURCE KIT',
      eyebrowAr: '1,200 مرحلة · حزمة مصدر كاملة',
      ctaTitleEn: 'Kivorivane Full Source Kit',
      ctaTitleAr: 'حزمة كود Kivorivane الكاملة',
      ctaDescEn: '1,200 deterministic paper-kite escape boards across 6 chapters plus daily puzzles, EN/AR RTL UI, and AdMob test integration.',
      ctaDescAr: '1,200 لوحة هروب حتمية عبر 6 فصول مع تحدٍ يومي ودعم العربية RTL وتكامل AdMob.',
      bulletsEn: ['1,200 deterministic generated boards', 'Available individually ($14) or inside Soravel 5-in-1 ($14) on Codester', 'Complete offline EN & AR reskin guides'],
      bulletsAr: ['1,200 مرحلة حتمية مولّدة', 'متاحة منفردة (14$) أو ضمن حزمة Soravel 5 في 1 (14$) على Codester', 'دليل تعديل كامل بالعربية والإنجليزية'],
      codesterEyebrowEn: '1,200 LEVELS · KOTLIN PUZZLE',
      codesterEyebrowAr: '1,200 مرحلة · لعبة ألغاز Kotlin',
      codesterTitleEn: 'Kivorivane: Kite Escape',
      codesterTitleAr: 'Kivorivane: هروب الطائرات الورقية',
      codesterDescEn: '1,200 deterministic paper-kite escape boards across 6 chapters plus daily puzzles, pure-Kotlin board logic, EN/AR RTL UI, and dual Gradle flavors.',
      codesterDescAr: '1,200 لوحة هروب حتمية عبر 6 فصول مع تحدٍ يومي ومنطق Kotlin صافي وواجهة عربية/إنجليزية RTL.',
      codesterBulletsEn: ['1,200 deterministic generated boards across 6 chapters', 'Daily puzzle flight challenge & local achievements', 'Complete offline EN & AR documentation guides'],
      codesterBulletsAr: ['1,200 مرحلة حتمية عبر 6 فصول', 'تحدي طيران يومي وإنجازات محلية', 'دليل تعديل متكامل بالعربية والإنجليزية'],
      links: [
        { labelEn: 'Kivorivane on Codester · $14', labelAr: 'Kivorivane على Codester · 14$', url: 'https://www.codester.com/items/76093/kivorivane-1000-levels-kite-escape-kotlin?ref=Gr8Man', primary: true },
        { labelEn: 'Soravel 5-in-1 on Codester · $14', labelAr: 'حزمة Soravel 5 في 1 · 14$', url: 'https://www.codester.com/items/76186/puzzle-pack-5-in-1-kotlin-android-game-bundle?ref=Gr8Man', primary: false },
      ],
    },
  };

  const urlParams = new URLSearchParams(location.search);
  const urlGame = urlParams.get('game');
  const isCodesterDemo = urlParams.get('source') === 'codester';
  let activeGame = (urlGame === 'liquid' || urlGame === 'lantern' || urlGame === 'kite') ? urlGame : 'liquid';
  let stageIdx = 0;
  let moves = 0;
  let solved = false;
  let history = [];
  let state = null;
  let hitTargets = [];

  function applyCodesterMode() {
    if (!isCodesterDemo) return;
    const navEl = document.querySelector('header.top nav');
    if (navEl) navEl.style.display = 'none';
    const brandEl = document.querySelector('header.top a.brand');
    if (brandEl) {
      brandEl.removeAttribute('href');
      brandEl.style.pointerEvents = 'none';
    }
    const footerLinks = document.querySelector('footer .footer-links');
    if (footerLinks) footerLinks.style.display = 'none';
    const introH1 = document.querySelector('.demo-intro h1');
    if (introH1) {
      introH1.dataset.en = 'Interactive Puzzle Mechanics Preview';
      introH1.dataset.ar = 'معاينة تفاعلية لآليات الألغاز';
      introH1.textContent = isAr() ? introH1.dataset.ar : introH1.dataset.en;
    }
    const introLead = document.querySelector('.demo-intro p.lead');
    if (introLead) {
      introLead.dataset.en = 'Three lightweight browser previews illustrating the core gameplay loops of our native Kotlin & Jetpack Compose Android puzzle engines.';
      introLead.dataset.ar = 'ثلاث معاينات تفاعلية خفيفة توضح جوهر آليات اللعب في محركات الألغاز الأصلية بلغة Kotlin وJetpack Compose.';
      introLead.textContent = isAr() ? introLead.dataset.ar : introLead.dataset.en;
    }
    const disclosureEl = document.querySelector('.demo-cta-panel .disclosure');
    if (disclosureEl) {
      disclosureEl.dataset.en = 'Note: This HTML5 canvas preview demonstrates core gameplay mechanics only.';
      disclosureEl.dataset.ar = 'ملاحظة: هذه المعاينة في المتصفح توضح منطق اللعب الأساسي فقط.';
      disclosureEl.textContent = isAr() ? disclosureEl.dataset.ar : disclosureEl.dataset.en;
    }
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function isAr() {
    return document.documentElement.lang === 'ar';
  }

  function initStage() {
    moves = 0;
    solved = false;
    history = [];
    if (activeGame === 'liquid') {
      state = { tubes: clone(LIQUID_LEVELS[stageIdx]), selected: -1 };
    } else if (activeGame === 'lantern') {
      state = clone(LANTERN_LEVELS[stageIdx]);
      evaluateLantern();
    } else {
      state = { size: KITE_LEVELS[stageIdx].size, kites: clone(KITE_LEVELS[stageIdx].kites), flashBlocked: null };
    }
    updateUi();
    draw();
  }

  function evaluateLiquidWin() {
    return state.tubes.every((t) => t.length === 0 || (t.length === 4 && t.every((c) => c === t[0])));
  }

  function evaluateLantern() {
    const { size, emitter, grid, mirrors } = state;
    const mirrorMap = new Map();
    mirrors.forEach((m) => mirrorMap.set(`${m.r},${m.c}`, m));
    const path = [];
    let r = emitter.r;
    let c = emitter.c;
    let dr = emitter.dr;
    let dc = emitter.dc;
    let lit = false;
    const visited = new Set();

    path.push({ r, c });
    for (let step = 0; step < size * size * 4; step++) {
      r += dr;
      c += dc;
      if (r < 0 || r >= size || c < 0 || c >= size) break;
      path.push({ r, c });
      const cell = grid[r][c];
      if (cell === '#') break;
      if (cell === 'L') {
        lit = true;
        break;
      }
      const m = mirrorMap.get(`${r},${c}`);
      if (m) {
        const key = `${r},${c},${dr},${dc}`;
        if (visited.has(key)) break;
        visited.add(key);
        if (m.type === '/') {
          const ndr = -dc;
          const ndc = -dr;
          dr = ndr;
          dc = ndc;
        } else {
          const ndr = dc;
          const ndc = dr;
          dr = ndr;
          dc = ndc;
        }
      }
    }
    state.beamPath = path;
    solved = lit;
  }

  function canKiteFly(kite) {
    const delta = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] }[kite.dir];
    let r = kite.r + delta[0];
    let c = kite.c + delta[1];
    while (r >= 0 && r < state.size && c >= 0 && c < state.size) {
      if (state.kites.some((k) => k.r === r && k.c === c)) return false;
      r += delta[0];
      c += delta[1];
    }
    return true;
  }

  function handleAction(target) {
    if (solved) return;
    if (activeGame === 'liquid') {
      const idx = target.index;
      if (state.selected === -1) {
        if (state.tubes[idx].length > 0) state.selected = idx;
      } else if (state.selected === idx) {
        state.selected = -1;
      } else {
        const src = state.tubes[state.selected];
        const dst = state.tubes[idx];
        const top = src[src.length - 1];
        if (dst.length < 4 && (dst.length === 0 || dst[dst.length - 1] === top)) {
          history.push(clone(state.tubes));
          while (src.length > 0 && dst.length < 4 && src[src.length - 1] === top) {
            dst.push(src.pop());
          }
          moves++;
          state.selected = -1;
          solved = evaluateLiquidWin();
        } else {
          state.selected = state.tubes[idx].length > 0 ? idx : -1;
        }
      }
    } else if (activeGame === 'lantern') {
      const m = state.mirrors[target.index];
      history.push(clone(state.mirrors));
      m.type = m.type === '/' ? '\\' : '/';
      moves++;
      evaluateLantern();
    } else if (activeGame === 'kite') {
      const kite = state.kites[target.index];
      if (canKiteFly(kite)) {
        history.push(clone(state.kites));
        state.kites.splice(target.index, 1);
        state.flashBlocked = null;
        moves++;
        solved = state.kites.length === 0;
      } else {
        state.flashBlocked = `${kite.r},${kite.c}`;
      }
    }
    updateUi();
    draw();
  }

  function updateUi() {
    const ar = isAr();
    const m = META[activeGame];
    document.getElementById('demo-title').textContent = ar ? m.titleAr : m.titleEn;
    document.getElementById('demo-instruction').textContent = ar ? m.instAr : m.instEn;
    document.getElementById('demo-level-badge').textContent = ar ? `المرحلة ${stageIdx + 1} / 3` : `Stage ${stageIdx + 1} / 3`;
    document.getElementById('demo-moves-badge').textContent = ar ? `الحركات: ${moves}` : `Moves: ${moves}`;

    const winBanner = document.getElementById('demo-win-banner');
    winBanner.classList.toggle('hidden', !solved);
    document.getElementById('demo-win-text').textContent = ar
      ? `تم حل المرحلة ${stageIdx + 1} في ${moves} حركات!`
      : `Stage ${stageIdx + 1} cleared in ${moves} moves!`;
    const nextBtn = document.getElementById('demo-next-btn');
    nextBtn.textContent = stageIdx < 2 ? (ar ? 'المرحلة التالية ←' : 'Next Stage →') : (ar ? 'إعادة المرحلة 1' : 'Replay Stage 1');

    document.getElementById('demo-undo-btn').disabled = history.length === 0 || solved;

    document.querySelectorAll('.demo-tab').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.game === activeGame ? 'true' : 'false');
    });
    document.querySelectorAll('[data-stage]').forEach((btn) => {
      btn.setAttribute('aria-pressed', Number(btn.dataset.stage) === stageIdx ? 'true' : 'false');
    });

    const eyebrowEl = document.getElementById('demo-cta-eyebrow');
    const titleEl = document.getElementById('demo-cta-title');
    const descEl = document.getElementById('demo-cta-desc');

    if (isCodesterDemo) {
      eyebrowEl.textContent = ar ? (m.codesterEyebrowAr || m.eyebrowAr) : (m.codesterEyebrowEn || m.eyebrowEn);
      titleEl.textContent = ar ? (m.codesterTitleAr || m.ctaTitleAr) : (m.codesterTitleEn || m.ctaTitleEn);
      descEl.textContent = ar ? (m.codesterDescAr || m.ctaDescAr) : (m.codesterDescEn || m.ctaDescEn);
    } else {
      eyebrowEl.textContent = ar ? m.eyebrowAr : m.eyebrowEn;
      titleEl.textContent = ar ? m.ctaTitleAr : m.ctaTitleEn;
      descEl.textContent = ar ? m.ctaDescAr : m.ctaDescEn;
    }

    const bulletsList = isCodesterDemo
      ? (ar ? (m.codesterBulletsAr || m.bulletsAr) : (m.codesterBulletsEn || m.bulletsEn))
      : (ar ? m.bulletsAr : m.bulletsEn);
    const bulletsEl = document.getElementById('demo-cta-bullets');
    bulletsEl.replaceChildren(...bulletsList.map((txt) => {
      const li = document.createElement('li');
      li.textContent = txt;
      return li;
    }));

    const linksList = isCodesterDemo
      ? m.links.filter((lk) => lk.url.startsWith('https://play.google.com/'))
      : m.links;
    const linksEl = document.getElementById('demo-cta-links');
    linksEl.classList.toggle('hidden', linksList.length === 0);
    linksEl.replaceChildren(...linksList.map((lk) => {
      const a = document.createElement('a');
      a.href = lk.url;
      a.rel = 'noopener';
      a.className = (lk.primary || isCodesterDemo) ? 'button' : 'button button-secondary';
      a.textContent = ar ? lk.labelAr : lk.labelEn;
      return a;
    }));
  }

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    hitTargets = [];

    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#0d1525');
    grad.addColorStop(1, '#080c16');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    if (activeGame === 'liquid') drawLiquid(w, h);
    else if (activeGame === 'lantern') drawLantern(w, h);
    else drawKites(w, h);
  }

  function drawLiquid(w, h) {
    const n = state.tubes.length;
    const tubeW = 64;
    const tubeH = 220;
    const gap = Math.min(28, (w - n * tubeW - 40) / Math.max(1, n - 1));
    const startX = (w - (n * tubeW + (n - 1) * gap)) / 2;
    const baseY = 120;

    state.tubes.forEach((tube, idx) => {
      const lift = state.selected === idx ? -22 : 0;
      const x = startX + idx * (tubeW + gap);
      const y = baseY + lift;

      ctx.strokeStyle = state.selected === idx ? '#9ff0ce' : '#587094';
      ctx.lineWidth = state.selected === idx ? 3.5 : 2;
      roundRect(ctx, x, y, tubeW, tubeH, 16);
      ctx.fillStyle = '#0f182a';
      ctx.fill();
      ctx.stroke();

      const segH = (tubeH - 22) / 4;
      tube.forEach((colorKey, sIdx) => {
        const sy = y + tubeH - 10 - (sIdx + 1) * segH;
        ctx.fillStyle = LIQUID_COLORS[colorKey];
        roundRect(ctx, x + 7, sy + 2, tubeW - 14, segH - 4, 7);
        ctx.fill();
      });

      hitTargets.push({ x: x - 6, y: baseY - 26, w: tubeW + 12, h: tubeH + 34, index: idx });
    });
  }

  function drawLantern(w, h) {
    const { size, grid, emitter, mirrors, beamPath } = state;
    const pad = 42;
    const boardPx = Math.min(w, h) - pad * 2;
    const cell = boardPx / size;
    const ox = (w - boardPx) / 2;
    const oy = (h - boardPx) / 2;

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const x = ox + c * cell;
        const y = oy + r * cell;
        ctx.fillStyle = grid[r][c] === '#' ? '#26344b' : '#111a2c';
        ctx.strokeStyle = '#283854';
        ctx.lineWidth = 1.5;
        roundRect(ctx, x + 3, y + 3, cell - 6, cell - 6, 10);
        ctx.fill();
        ctx.stroke();

        if (grid[r][c] === 'E') {
          ctx.fillStyle = '#f2bd62';
          ctx.beginPath();
          ctx.arc(x + cell / 2, y + cell / 2, cell * 0.24, 0, Math.PI * 2);
          ctx.fill();
        } else if (grid[r][c] === 'L') {
          ctx.fillStyle = solved ? '#9ff0ce' : '#334866';
          ctx.beginPath();
          ctx.arc(x + cell / 2, y + cell / 2, cell * 0.26, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#f2bd62';
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }
      }
    }

    if (beamPath && beamPath.length > 1) {
      ctx.save();
      ctx.strokeStyle = solved ? '#9ff0ce' : '#facc15';
      ctx.lineWidth = 5;
      ctx.shadowColor = '#facc15';
      ctx.shadowBlur = 14;
      ctx.beginPath();
      beamPath.forEach((pt, idx) => {
        const px = ox + (pt.c + 0.5) * cell;
        const py = oy + (pt.r + 0.5) * cell;
        if (idx === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
      ctx.restore();
    }

    mirrors.forEach((m, idx) => {
      const x = ox + m.c * cell;
      const y = oy + m.r * cell;
      ctx.strokeStyle = '#9ff0ce';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      if (m.type === '/') {
        ctx.moveTo(x + cell * 0.24, y + cell * 0.76);
        ctx.lineTo(x + cell * 0.76, y + cell * 0.24);
      } else {
        ctx.moveTo(x + cell * 0.24, y + cell * 0.24);
        ctx.lineTo(x + cell * 0.76, y + cell * 0.76);
      }
      ctx.stroke();
      hitTargets.push({ x, y, w: cell, h: cell, index: idx });
    });
  }

  function drawKites(w, h) {
    const size = state.size;
    const boardPx = Math.min(w, h) - 80;
    const cell = boardPx / size;
    const ox = (w - boardPx) / 2;
    const oy = (h - boardPx) / 2;

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const x = ox + c * cell;
        const y = oy + r * cell;
        ctx.fillStyle = '#111a2c';
        ctx.strokeStyle = state.flashBlocked === `${r},${c}` ? '#ef4444' : '#263652';
        ctx.lineWidth = state.flashBlocked === `${r},${c}` ? 2.5 : 1.2;
        roundRect(ctx, x + 4, y + 4, cell - 8, cell - 8, 12);
        ctx.fill();
        ctx.stroke();
      }
    }

    const angles = { U: -Math.PI / 2, R: 0, D: Math.PI / 2, L: Math.PI };
    state.kites.forEach((k, idx) => {
      const cx = ox + (k.c + 0.5) * cell;
      const cy = oy + (k.r + 0.5) * cell;
      const rad = cell * 0.29;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angles[k.dir]);
      ctx.fillStyle = k.color;
      ctx.beginPath();
      ctx.moveTo(rad, 0);
      ctx.lineTo(-rad * 0.72, -rad * 0.65);
      ctx.lineTo(-rad * 0.32, 0);
      ctx.lineTo(-rad * 0.72, rad * 0.65);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      hitTargets.push({ x: ox + k.c * cell, y: oy + k.r * cell, w: cell, h: cell, index: idx });
    });
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.lineTo(x + w - r, y);
    c.quadraticCurveTo(x + w, y, x + w, y + r);
    c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    c.lineTo(x + r, y + h);
    c.quadraticCurveTo(x, y + h, x, y + h - r);
    c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y);
    c.closePath();
  }

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const py = ((e.clientY - rect.top) / rect.height) * canvas.height;
    const hit = hitTargets.find((t) => px >= t.x && px <= t.x + t.w && py >= t.y && py <= t.y + t.h);
    if (hit) handleAction(hit);
  });

  document.querySelectorAll('.demo-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeGame = btn.dataset.game;
      stageIdx = 0;
      initStage();
    });
  });

  document.querySelectorAll('[data-stage]').forEach((btn) => {
    btn.addEventListener('click', () => {
      stageIdx = Number(btn.dataset.stage);
      initStage();
    });
  });

  document.getElementById('demo-reset-btn')?.addEventListener('click', initStage);
  document.getElementById('demo-undo-btn')?.addEventListener('click', () => {
    if (!history.length || solved) return;
    const prev = history.pop();
    if (activeGame === 'liquid') state.tubes = prev;
    else if (activeGame === 'lantern') {
      state.mirrors = prev;
      evaluateLantern();
    } else state.kites = prev;
    moves = Math.max(0, moves - 1);
    updateUi();
    draw();
  });
  document.getElementById('demo-next-btn')?.addEventListener('click', () => {
    stageIdx = stageIdx < 2 ? stageIdx + 1 : 0;
    initStage();
  });

  document.getElementById('language')?.addEventListener('click', () => {
    setTimeout(() => { updateUi(); draw(); }, 0);
  });

  applyCodesterMode();
  initStage();
})();
