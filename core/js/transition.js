/* Page transition with falling letters, used when moving between pages (index.html <-> Gym and course pages).
 *
 * Leaving: colourful Cyrillic letters and signs rain down, an ink curtain drops behind them,
 *          and a sticker pops up ("пое́хали!" going to a page, "домо́й!" going home).
 * Arriving: the new page opens under the same letters, which tumble off the bottom of the
 *           screen and take the curtain with them.
 *
 * Self-contained: it injects its own styles and touches nothing else, so the course pages
 * (which don't load the rest of core/) can use it too. Load it in <head> WITHOUT defer/async,
 * so the arriving page is covered before its first paint.
 * Skipped entirely when the user prefers reduced motion.
 */
(function () {
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!Element.prototype.animate) return;

  var KEY = 'rg_transition';               // sessionStorage: hands the letter layout to the next page
  var MAX_AGE = 6000;                      // ignore a stale hand-off (e.g. navigation failed)
  var Z = 2147483647;
  var INK = '#0d0d0d';
  var COLORS = ['#fe98c0', '#80eb3d', '#3dd0eb', '#eb583d', '#ffe14d', '#c4a5ff', '#fffaf7'];
  var GLYPHS = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЭЮЯ'.split('').concat(['✦', '★', '!', '?', '✦', '★']);
  var GRAVITY = 'cubic-bezier(.55,0,1,.45)';

  var css =
    'html.rg-tr-cover::after{content:"";position:fixed;inset:0;z-index:' + Z + ';background:' + INK + '}' +
    '.rg-tr{position:fixed;inset:0;z-index:' + Z + ';overflow:hidden;pointer-events:auto;cursor:progress}' +
    '.rg-tr__panel{position:absolute;inset:0;background:' + INK + '}' +
    '.rg-tr__ch{position:absolute;margin:-.5em 0 0 -.35em;font:900 10px/1 "Golos Text",system-ui,sans-serif;' +
      '-webkit-text-stroke:3px ' + INK + ';paint-order:stroke fill;text-shadow:4px 4px 0 ' + INK + ';will-change:transform;user-select:none}' +
    '.rg-tr__tag{position:absolute;left:50%;top:50%;padding:.18em .7em .24em;border:3px solid ' + INK + ';border-radius:999px;' +
      'background:#ffe14d;color:' + INK + ';box-shadow:7px 7px 0 #fe98c0;white-space:nowrap;' +
      'font:800 clamp(30px,7vw,64px)/1.1 "Bricolage Grotesque","Golos Text",system-ui,sans-serif;letter-spacing:-.02em;' +
      'transform:translate(-50%,-50%) rotate(-5deg)}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function rnd(a, b) { return a + Math.random() * (b - a); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function store(v) { try { sessionStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
  function take() {
    try {
      var v = JSON.parse(sessionStorage.getItem(KEY));
      sessionStorage.removeItem(KEY);
      return v && Date.now() - v.t < MAX_AGE ? v : null;
    } catch (e) { return null; }
  }

  // A loose grid of letters that covers the screen. Positions are fractions of the viewport.
  function layout() {
    var w = innerWidth, h = innerHeight, cell = w < 600 ? 78 : 118;
    var cols = Math.max(3, Math.round(w / cell)), rows = Math.max(4, Math.round(h / cell)), out = [];
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        if (Math.random() < 0.18) continue;
        out.push({
          ch: pick(GLYPHS),
          x: (c + rnd(0.15, 0.85)) / cols,
          y: (r + rnd(0.15, 0.85)) / rows,
          s: Math.round(cell * rnd(0.5, 1.05)),
          r: Math.round(rnd(-28, 28)),
          c: pick(COLORS)
        });
      }
    }
    return out;
  }

  function build(letters, label) {
    var root = document.createElement('div');
    root.className = 'rg-tr';
    root.setAttribute('aria-hidden', 'true');
    var panel = document.createElement('div');
    panel.className = 'rg-tr__panel';
    root.appendChild(panel);
    var els = letters.map(function (l) {
      var el = document.createElement('span');
      el.className = 'rg-tr__ch';
      el.textContent = l.ch;
      el.style.cssText = 'left:' + (l.x * 100) + '%;top:' + (l.y * 100) + '%;font-size:' + l.s + 'px;color:' + l.c +
        ';transform:rotate(' + l.r + 'deg)';
      root.appendChild(el);
      return el;
    });
    var tag = document.createElement('div');
    tag.className = 'rg-tr__tag';
    tag.textContent = label;
    root.appendChild(tag);
    document.body.appendChild(root);
    return { root: root, panel: panel, els: els, tag: tag };
  }

  function tagFrames(from, to) {
    return [
      { transform: 'translate(-50%,-50%) rotate(-5deg) scale(' + from + ')' },
      { transform: 'translate(-50%,-50%) rotate(-5deg) scale(' + to + ')' }
    ];
  }

  // ---- Leaving: letters fall in, curtain drops, sticker pops, then navigate ----
  var busy = false;
  function leave(url, goingHome) {
    busy = true;
    var letters = layout();
    var label = goingHome ? 'домо́й!' : 'пое́хали!';
    var o = build(letters, label);
    var h = innerHeight;

    o.panel.animate([{ transform: 'translateY(-100%)' }, { transform: 'translateY(0)' }],
      { duration: 460, delay: 200, easing: GRAVITY, fill: 'both' });

    o.els.forEach(function (el, i) {
      var l = letters[i], r = l.r;
      var drop = l.y * h + l.s + 80;
      el.animate([
        { transform: 'translateY(' + (-drop) + 'px) rotate(' + (r + rnd(-80, 80)) + 'deg)', easing: GRAVITY },
        { transform: 'translateY(0) rotate(' + r + 'deg)', offset: 0.78, easing: 'ease-out' },
        { transform: 'translateY(-14px) rotate(' + (r - 4) + 'deg)', offset: 0.89, easing: 'ease-in' },
        { transform: 'translateY(0) rotate(' + r + 'deg)' }
      ], { duration: 380 + l.y * 360, delay: rnd(0, 300), fill: 'both' });
    });

    o.tag.animate([
      { transform: 'translate(-50%,-50%) rotate(-5deg) scale(0)' },
      { transform: 'translate(-50%,-50%) rotate(-5deg) scale(1.15)', offset: 0.7 },
      { transform: 'translate(-50%,-50%) rotate(-5deg) scale(1)' }
    ], { duration: 320, delay: 680, easing: 'ease-out', fill: 'both' });

    store({ t: Date.now(), letters: letters, label: label, w: innerWidth });
    setTimeout(function () { location.href = url; }, 1080);
  }

  // ---- Arriving: start fully covered, then everything falls away ----
  function arrive(v) {
    var o = build(v.letters, v.label);
    document.documentElement.classList.remove('rg-tr-cover');
    var h = innerHeight, end = 0;

    o.tag.animate(tagFrames(1, 0), { duration: 220, delay: 60, easing: 'ease-in', fill: 'both' });

    o.els.forEach(function (el, i) {
      var l = v.letters[i];
      var dist = (1 - l.y) * h + l.s + 120;
      var delay = rnd(80, 360), dur = rnd(520, 760);
      end = Math.max(end, delay + dur);
      el.animate([
        { transform: 'translateY(0) rotate(' + l.r + 'deg)' },
        { transform: 'translateY(-' + Math.round(rnd(10, 40)) + 'px) rotate(' + (l.r + rnd(-15, 15)) + 'deg)', offset: 0.15 },
        { transform: 'translateY(' + dist + 'px) rotate(' + (l.r + rnd(-140, 140)) + 'deg)' }
      ], { duration: dur, delay: delay, easing: GRAVITY, fill: 'both' });
    });

    o.panel.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(100%)' }],
      { duration: 620, delay: 240, easing: GRAVITY, fill: 'both' });
    end = Math.max(end, 240 + 620);

    setTimeout(function () { o.root.remove(); }, end + 40);
  }

  var incoming = take();
  if (incoming && incoming.letters) {
    document.documentElement.classList.add('rg-tr-cover');
    // Failsafe: never leave the page covered.
    var failsafe = setTimeout(function () { document.documentElement.classList.remove('rg-tr-cover'); }, 3000);
    var start = function () {
      // Give the letter font a moment to load so the letters match what fell on the last page.
      var fontReady = document.fonts && document.fonts.load ? document.fonts.load('900 40px "Golos Text"') : Promise.resolve();
      Promise.race([fontReady, new Promise(function (res) { setTimeout(res, 350); })])
        .catch(function () {})
        .then(function () {
          clearTimeout(failsafe);
          try { arrive(incoming); } catch (e) { document.documentElement.classList.remove('rg-tr-cover'); }
        });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
  }

  // Coming back with the browser's Back button can restore a page mid-transition: clean it up.
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    busy = false;
    document.documentElement.classList.remove('rg-tr-cover');
    var old = document.querySelectorAll('.rg-tr');
    for (var i = 0; i < old.length; i++) old[i].remove();
  });

  // Links to another page of the site (not hash links within the same page) get the transition.
  document.addEventListener('click', function (e) {
    if (busy || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
    var u;
    try { u = new URL(a.href, location.href); } catch (err) { return; }
    if (u.protocol !== location.protocol || u.host !== location.host) return;
    if (u.pathname === location.pathname) return;
    if (!/(\.html?|\/)$/i.test(u.pathname)) return;
    e.preventDefault();
    leave(u.href, /(^|\/)index\.html?$|\/$/i.test(u.pathname));
  });
})();
