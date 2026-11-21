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
      ctaDescEn: '48 handcrafted optical levels in LanternLoom — or get all 5 Kotlin & Compose puzzle games (1,928+ levels) in one instant-download studio pack.',
      ctaDescAr: '48 مرحلة ضوئية في LanternLoom — أو احصل على 5 ألعاب كاملة (+1,928 مرحلة) في حزمة واحدة جاهزة.',
      bulletsEn: ['5 full games in Soravel bundle (1,928+ levels)', '57/57 verified JVM unit tests', 'Instant ZIP download on Payhip ($12)'],
      bulletsAr: ['5 ألعاب كاملة في حزمة Soravel (+1,928 مرحلة)', '57/57 اختبار وحدة ناجح', 'تحميل فوري من Payhip بـ 12$'],
      links: [
        { labelEn: 'Payhip 5-in-1 · $12', labelAr: 'حزمة Payhip · 12$', url: 'https://payhip.com/b/beFfj?utm_source=simple-free-apps.github.io&utm_medium=demo&utm_campaign=lantern', primary: true },
        { labelEn: 'LanternLoom on Codester · $14', labelAr: 'LanternLoom على Codester · 14$', url: 'https://www.codester.com/items/75956/lanternloom-light-path-puzzle-game-for-android?ref=Gr8Man', primary: false },
      ],
    },
    kite: {
      titleEn: 'Kivorivane: Kite Escape',
      titleAr: 'Kivorivane: هروب الطائرات',
      instEn: 'Tap a directional kite with a clear path to the edge so it flies off without colliding.',
      instAr: 'انقر على طائرة ورقية مسارها مفتوح حتى الحافة لتنطلق دون اصطدام.',
      eyebrowEn: '1,200 LEVELS · INSTANT DOWNLOAD',
      eyebrowAr: '1,200 مرحلة · تحميل فوري',
      ctaTitleEn: 'Kivorivane Full Source Kit',
      ctaTitleAr: 'حزمة كود Kivorivane الكاملة',
      ctaDescEn: '1,200 deterministic paper-kite escape boards across 6 chapters plus daily puzzles, EN/AR RTL UI, and AdMob test integration.',
      ctaDescAr: '1,200 لوحة هروب حتمية عبر 6 فصول مع تحدٍ يومي ودعم العربية RTL وتكامل AdMob.',
      bulletsEn: ['1,200 deterministic generated boards', '$9 instant download on Payhip (or $12 inside 5-in-1)', 'Complete offline EN & AR reskin guides'],
      bulletsAr: ['1,200 مرحلة حتمية مولّدة', 'تحميل فوري بـ 9$ على Payhip (أو 12$ ضمن 5 في 1)', 'دليل تعديل كامل بالعربية والإنجليزية'],
      links: [
        { labelEn: 'Payhip · $9', labelAr: 'Payhip · 9$', url: 'https://payhip.com/b/WsHQp?utm_source=simple-free-apps.github.io&utm_medium=demo&utm_campaign=kite', primary: true },
        { labelEn: '5-in-1 Bundle · $12', labelAr: 'الحزمة 5 في 1 · 12$', url: 'https://payhip.com/b/beFfj?utm_source=simple-free-apps.github.io&utm_medium=demo&utm_campaign=kite_bundle', primary: false },
        { labelEn: 'Codester · $14', labelAr: 'Codester · 14$', url: 'https://www.codester.com/items/76093/kivorivane-1000-levels-kite-escape-kotlin?ref=Gr8Man', primary: false },
      ],
    },
  };

  const urlGame = new URLSearchParams(location.search).get('game');
  let activeGame = (urlGame === 'liquid' || urlGame === 'lantern' || urlGame === 'kite') ? urlGame : 'liquid';
  let stageIdx = 0;
  let moves = 0;
  let solved = false;
  let history = [];
  let state = null;
  let hitTargets = [];

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

    document.getElementById('demo-cta-eyebrow').textContent = ar ? m.eyebrowAr : m.eyebrowEn;
    document.getElementById('demo-cta-title').textContent = ar ? m.ctaTitleAr : m.ctaTitleEn;
    document.getElementById('demo-cta-desc').textContent = ar ? m.ctaDescAr : m.ctaDescEn;

    const bulletsEl = document.getElementById('demo-cta-bullets');
    bulletsEl.replaceChildren(...(ar ? m.bulletsAr : m.bulletsEn).map((txt) => {
      const li = document.createElement('li');
      li.textContent = txt;
      return li;
    }));

    const linksEl = document.getElementById('demo-cta-links');
    linksEl.replaceChildren(...m.links.map((lk) => {
      const a = document.createElement('a');
      a.href = lk.url;
      a.rel = 'noopener';
      a.className = lk.primary ? 'button' : 'button button-secondary';
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

  initStage();
})();
