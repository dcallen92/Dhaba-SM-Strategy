/* THE ROAD TO DHABA — strategy interactions: tabs, filters, split, language, rollout, calendar.
   Runs after deck.js has built the track, before road.js measures it. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const setOn = (list, el) => list.forEach(x => x.classList.toggle('is-on', x === el));
  // stop clicks on controls from bubbling into anything else
  const tap = (el, fn) => el.addEventListener('click', e => { e.stopPropagation(); fn(e); });

  // ---------- generic tabs ----------
  $$('.tabs').forEach(tabs => {
    const btns = $$('.tab-list button', tabs), panels = $$('.tab-panel', tabs);
    btns.forEach(b => tap(b, () => { setOn(btns, b); setOn(panels, panels.find(p => p.dataset.t === b.dataset.t)); }));
    tabs.selectTab = i => { const b = btns.find(x => x.dataset.t == i); if (b) b.click(); else setOn(panels, panels.find(p => p.dataset.t == i)); };
  });

  // ---------- objectives: pre / post filter ----------
  const objSeg = $('[data-filter="obj"]');
  if (objSeg) {
    const segBtns = $$('button', objSeg), tabs = $('.tabs.obj'), list = $$('.tab-list button', tabs);
    segBtns.forEach(b => tap(b, () => {
      setOn(segBtns, b);
      const v = b.dataset.v;
      list.forEach(t => t.classList.toggle('dimmed', v !== 'all' && t.dataset.ph !== v && t.dataset.ph !== 'both'));
      const on = list.find(t => t.classList.contains('is-on'));
      if (on && on.classList.contains('dimmed')) list.find(t => !t.classList.contains('dimmed')).click();
    }));
  }

  // ---------- content split ----------
  const splitSeg = $('[data-split]'), split = $('.split');
  if (splitSeg && split) {
    const btns = $$('button', splitSeg), bars = $$('.sp', split);
    const vals = { pre: split.dataset.pre.split(',').map(Number), post: split.dataset.post.split(',').map(Number) };
    btns.forEach(b => tap(b, () => {
      setOn(btns, b);
      bars.forEach((bar, i) => { const v = vals[b.dataset.v][i]; bar.style.setProperty('--v', v); $('.sp-n', bar).textContent = v + '%'; });
    }));
  }

  // ---------- language example ----------
  const langSeg = $('[data-lang]');
  if (langSeg && window.LANGEX) {
    const btns = $$('button', langSeg);
    btns.forEach(b => tap(b, () => {
      setOn(btns, b);
      const L = window.LANGEX[b.dataset.v];
      $('.lx-series').innerHTML = L.series; $('.lx-title').innerHTML = L.title;
      $('.lx-cover').setAttribute('dir', L.dir);
      $('.lx-k').textContent = L.k; $('.lx-cap').innerHTML = L.cap; $('.lx-cap').setAttribute('dir', L.dir); $('.lx-sub').textContent = L.sub;
    }));
  }

  // ---------- rollout timeline ----------
  const range = $('#weeks');
  if (range && window.PHASES) {
    const axis = $('#tl-axis'), barsEl = $('#tl-bars'), out = $('#wk-v'), note = $('#wk-note'), phTabs = $('.tabs.phs');
    let sel = 0;
    const bars = window.PHASES.map((ph, i) => {
      const b = document.createElement('button');
      b.className = 'tl-bar' + (i === 4 ? ' ongoing' : '');
      b.style.setProperty('--c', ph.c);
      b.style.top = (i * 2.9) + 'vh';
      b.textContent = `0${i + 1} ${ph.n}`;
      tap(b, () => { sel = i; bars.forEach((x, k) => x.classList.toggle('is-on', k === i)); phTabs.selectTab(i); });
      barsEl.appendChild(b); return b;
    });
    bars[0].classList.add('is-on');
    const notes = n => n <= 5
      ? 'A short road. Introduction keeps its full two weeks; Discovery and Anticipation squeeze into what is left, so the market and farm shoots must be filmed early.'
      : n <= 7 ? 'Workable. Introduction holds at two weeks; Discovery is shortened to keep Anticipation intact.'
      : n <= 10 ? 'The plan as written. Two weeks each for Introduction and Discovery, matching the first 30 days.'
      : 'If the date moves later, Introduction still runs two weeks and the extra time goes to Discovery: more Abu Dhabi episodes, more audience-led stops. Paid stays on low-cost reach until Reveal.';
    function draw() {
      const N = +range.value; out.textContent = N;
      const rem = N - 2;                                       // weeks before Arrival
      const intro = Math.min(2, rem);                          // Introduction is always two weeks
      const left = rem - intro;
      const ant = left >= 8 ? 3 : left >= 4 ? 2 : left >= 2 ? 1 : 0;
      const disc = left - ant;                                 // Discovery flexes
      const total = N + 5;                                      // axis: to 5 weeks after opening
      const segs = [[0, intro], [intro, disc], [intro + disc, ant], [rem, 4], [N + 2, 3]];
      const pct = w => (w / total * 100) + '%';
      segs.forEach(([s, l], i) => {
        bars[i].style.left = pct(s); bars[i].style.width = pct(l);
        bars[i].classList.toggle('zero', l <= 0);
      });
      axis.innerHTML = Array.from({ length: total + 1 }, (_, w) => (w % (total > 12 ? 2 : 1) === 0 && w < total) ? `<span style="left:${(w + .5) / total * 100}%">W${w + 1}</span>` : '').join('') +
        `<i class="mk" style="left:${pct(rem)}"><em>Date locked</em></i><i class="mk open" style="left:${pct(N)}"><em>Opening</em></i>`;
      note.textContent = notes(N);
    }
    range.addEventListener('input', draw);
    range.addEventListener('wheel', e => e.stopPropagation(), { passive: true });
    draw();
  }

  // ---------- first 30 days ----------
  const grid = $('.cal-grid');
  if (grid && window.CAL) {
    const days = $$('.day', grid), detail = $('#cal-detail'), fBtns = $$('[data-calf] button');
    const SRC = { A: 'Existing archive', L: 'Light capture: phone or voiceover', N: 'New shoot', D: 'Design only' };
    const PLAT = { ig: 'Instagram feed', tt: 'TikTok', fb: 'Facebook', st: 'Instagram Stories' };
    let filter = 'all', cur = 1;
    function show(d) {
      cur = d; days.forEach(x => x.classList.toggle('is-on', +x.dataset.d === d));
      const items = window.CAL.filter(c => c[0] === d && (filter === 'all' || c[1] === filter));
      const phase = d <= 14 ? 'Phase 01 · Meet Safi' : d <= 28 ? 'Phase 02 · Safi Discovers Abu Dhabi' : 'Phase 03 · The Making of Dhaba';
      detail.innerHTML = `<p class="cd-day">Day ${String(d).padStart(2, '0')}<small>${phase}</small></p>` + (items.length ? items.map(c =>
        (c[1] === 'tt' || c[1] === 'fb') && filter === 'all'
          ? `<div class="cd-item cd-mini"><i class="pf pf-${c[1]}">${PLAT[c[1]]}</i> <span class="meta">${c[1] === 'tt' ? 'Same reel, repurposed: hook, text, caption and audio adapted' : 'Same post, cross-published'}</span></div>`
          : `<div class="cd-item"><i class="pf pf-${c[1]}">${PLAT[c[1]]}</i> <span class="meta">${c[3]}</span><b>${c[2]}</b>
          <span class="meta">${c[4] !== '—' ? c[4] + ' · ' : ''}${c[5]} · ${c[6]} · </span><span class="src-l">${SRC[c[7]]}</span>${c[8] ? `<br><span class="meta">${c[8]}</span>` : ''}</div>`).join('')
        : `<p class="cd-hint">Nothing scheduled${filter !== 'all' ? ' on this platform' : ''}. Supporting Stories run daily.</p>`);
    }
    days.forEach(dEl => tap(dEl, () => show(+dEl.dataset.d)));
    fBtns.forEach(b => tap(b, () => {
      setOn(fBtns, b); filter = b.dataset.v;
      days.forEach(dEl => {
        const dots = $$('.dot', dEl);
        dots.forEach(dot => dot.classList.toggle('off', filter !== 'all' && dot.dataset.p !== filter));
        dEl.classList.toggle('empty', filter !== 'all' && !dots.some(dot => dot.dataset.p === filter));
      });
      show(cur);
    }));
    show(1);
  }
})();

// ---------- next steps: tickable checklist (remembered in this browser only) ----------
(() => {
  const items = [...document.querySelectorAll('.needs li')];
  const KEY = 'dhaba-next-steps';
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) {}
  items.forEach((li, i) => {
    li.setAttribute('role', 'checkbox'); li.tabIndex = 0;
    const set = on => { li.classList.toggle('done', on); li.setAttribute('aria-checked', on); };
    set(saved.includes(i));
    const toggle = e => {
      e.stopPropagation(); set(!li.classList.contains('done'));
      try { localStorage.setItem(KEY, JSON.stringify(items.map((x, k) => x.classList.contains('done') ? k : -1).filter(k => k >= 0))); } catch (err) {}
    };
    li.addEventListener('click', toggle);
    li.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(e); } });
  });
})();

// ---------- design direction: click a design to see it full size ----------
(() => {
  const figs = [...document.querySelectorAll('.dd, .zoom')];
  if (!figs.length) return;
  const lb = document.createElement('div'); lb.className = 'dd-lb'; lb.innerHTML = '<img alt="">';
  document.body.appendChild(lb);
  const close = () => lb.classList.remove('on');
  const open = f => { lb.querySelector('img').src = f.dataset.full; lb.querySelector('img').alt = (f.querySelector('img') || {}).alt || ''; lb.classList.add('on'); };
  figs.forEach(f => {
    f.addEventListener('click', e => { e.stopPropagation(); open(f); });
    f.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); open(f); } });
  });
  lb.addEventListener('click', e => { e.stopPropagation(); close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  addEventListener('wheel', close, { passive: true });
})();
