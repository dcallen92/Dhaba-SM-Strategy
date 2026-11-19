/* THE ROAD TO DHABA — SOCIAL MEDIA STRATEGY
   Continuation of the approved INHAUS pitch. Same road, same taxi, same archive.
   Every slide is a `.stop` on the horizontal road; `.inter` panels are photographic
   roadside interludes (no anchor, not counted).
   Safe zone at every anchor: the taxi owns x 8–36vw / y 57–100vh, the road the bottom 22vh.
   Left box: x 8–38vw, y 9–55vh.  Right box: x 40–96vw, y 9–76vh.
   Interactive elements carry `.ix` (pointer events on; see strategy.js). */
(() => {
  const AR = window.PHOTO_AR || {};

  // ---------- helpers ----------
  const pol = (id, l, t, h, r = 0, cap = '', depth = 1, cls = '') =>
    `<figure class="pol rv ${cls}" data-depth="${depth}" style="left:${l}vw;top:${t}vh;height:${h}vh;aspect-ratio:${AR[id] || 1.5};--r:${r}deg">` +
    `<img data-src="assets/photos/${id}.webp" alt="">${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
  const plate = (id, l, t, h, cls = '', depth = 1) =>
    `<figure class="plate rv ${cls}" data-depth="${depth}" style="left:${l}vw;top:${t}vh;height:${h}vh;aspect-ratio:${AR[id] || 1.5}">` +
    `<img data-src="assets/photos/${id}.webp" alt=""></figure>`;
  const ill = (name, l, h, lift = 0) =>
    `<img class="roadside" data-src="assets/ill/${name}.webp" style="left:${l}vw;height:${h}vh;--lift:${lift}vh" alt="">`;
  const milestone = (l, num, label, cap = 'var(--orange)') =>
    `<div class="milestone" style="left:${l}vw;--cap:${cap}"><span class="cap"></span><b>${num}</b><em>${label}</em></div>`;
  const lines = arr => arr.map((x, i) => `<span class="ln rv" style="--d:${i}">${x}</span>`).join('');
  const small = s => s ? `<p class="s-small rv">${s}</p>` : '';
  const num = (t = '') => `<p class="s-num rv">%%N%%${t ? ' · ' + t : ''}</p>`;
  // asset placeholder: clearly labelled, never stock
  const slot = (label, need, l, t, h, ar = 0.8, r = 0) =>
    `<figure class="slot rv" style="left:${l}vw;top:${t}vh;height:${h}vh;aspect-ratio:${ar};--r:${r}deg"><span class="slot-k">Asset required</span><b>${label}</b><em>${need}</em></figure>`;
  const plat = s => s.split(' ').map(p => `<i class="pf pf-${p}">${{ ig: 'IG', tt: 'TikTok', fb: 'FB', st: 'Stories' }[p]}</i>`).join('');
  const pill = (k, t) => `<span class="pill p-${k}">${t}</span>`;

  // ---------- palette (from the approved pitch) ----------
  const BLUE = '#142196', CREAM = '#F5EDDE', ORANGE = '#FA682C', GREEN = '#47984B', TEAL = '#002B35',
    YELLOW = '#FFF8B5', PINK = '#FAD0F0', LILAC = '#D1C2F5', SKY = '#D0EAF9', LIME = '#D1E877',
    MAGENTA = '#D04C91', PLUM = '#591950', RUST = '#B4381C', DEEP = '#00553B', GOLD = '#FFD208';

  const P = [];
  const slide = o => P.push({ kind: 'slide', w: 100, ...o });
  const inter = o => P.push({ kind: 'inter', w: 80, bg: CREAM, ink: BLUE, ...o });

  /* =====================================================================
     OPENING
     ===================================================================== */
  slide({ label: 'The Road to Dhaba · Social strategy', bg: BLUE, ink: CREAM, ghost: 'DHABA', html: `
    <div class="t-title">
      <p class="s-num rv">Dhaba × INHAUS · Social media strategy</p>
      <h1 class="s-title xl rv" style="--d:1">THE ROAD TO DHABA</h1>
      <p class="s-body center rv" style="--d:2">How the journey unfolds on Instagram, TikTok and Facebook, chapter by chapter, until Dhaba arrives.</p>
    </div>
    <p class="hint"><span>Scroll to drive</span> <i class="arrow"></i></p>` });

  slide({ label: 'Where we left off', bg: CREAM, ink: BLUE, ghost: 'AGREED', w: 110, html: `
    <div class="col-l">${num('Where we left off')}<h2 class="s-title l rv" style="--d:1">The direction is agreed.<br><em>Now we put it on the road.</em></h2>
      <p class="s-body rv" style="--d:2">This is not a new pitch. It is the working plan: channels, chapters, content, cadence and measurement.</p></div>
    <div class="agreed">
      ${[['The journey is the hero.', 'Dhaba is the destination.'], ['Familiarity before first visit.', 'The opening should feel like an arrival, not an introduction.'], ['A journal, not a restaurant feed.', 'Field notes, portraits, voice notes, maps, food.']]
        .map(([t, d], i) => `<div class="ag rv" style="--d:${i + 2}"><small>Agreed · 0${i + 1}</small><b>${t}</b><span>${d}</span></div>`).join('')}
    </div>
    ${pol('pf-portrait', 78, 10, 36, 2.5, 'Safi', 1.05)}` });

  slide({ label: 'What we know', bg: YELLOW, ink: BLUE, ghost: 'FACTS', w: 105, html: `
    <div class="col-l">${num('Launch facts')}<h2 class="s-title l rv" style="--d:1">What we know.<br><em>What we don't, yet.</em></h2>
      <p class="s-body rv" style="--d:2">The plan is built on relative phases, not dates. Nothing unconfirmed is announced.</p></div>
    <ul class="facts rv" style="--d:2">
      <li><b>Restaurant</b><span>Dhaba Indian Kitchen</span>${pill('ok', 'Confirmed')}</li>
      <li><b>Location</b><span>Saadiyat Grove, Abu Dhabi</span>${pill('ok', 'Confirmed')}</li>
      <li><b>Opening window</b><span>Mid-December to mid-January</span>${pill('prov', 'Provisional')}</li>
      <li><b>Opening date</b><span>To be confirmed by Dhaba</span>${pill('pend', 'Pending')}</li>
      <li><b>Website</b><span>dhabakitchen.ae, expected before 26 November</span>${pill('prov', 'In build')}</li>
      <li><b>Menu &amp; signature dishes</b><span>Being finalised</span>${pill('pend', 'Pending')}</li>
      <li><b>Events, collaborations, promotions</b><span>None confirmed</span>${pill('pend', 'None yet')}</li>
      <li><b>Instagram</b><span>@dhabakitchen · INHAUS access granted</span>${pill('ok', 'Access')}</li>
      <li><b>Facebook · TikTok</b><span>Created</span>${pill('ok', 'Live')}</li>
    </ul>` });

  /* =====================================================================
     PART ONE — THE STRATEGY
     ===================================================================== */
  slide({ label: 'Part one: The strategy', bg: ORANGE, ink: CREAM, ghost: 'PART ONE', html: `
    <div class="t-part"><p class="s-num rv">Part one</p><h2 class="s-title xxl rv" style="--d:1">THE STRATEGY</h2></div>
    ${milestone(66, 'km 1', 'The idea', BLUE)}` });

  slide({ label: 'The opportunity', bg: CREAM, ink: BLUE, ghost: 'SAFI', w: 110, html: `
    <div class="col-l">${num('The guiding principle')}<h2 class="s-title l rv" style="--d:1">Safi first.<br><em>Dhaba second.</em></h2>
      <p class="s-body rv" style="--d:2">We introduce the person first, so that by the time we introduce the restaurant, people already want to experience it.</p>
      ${small('Not a generic food influencer. The person whose experiences, character and approach to food give Dhaba its identity.')}</div>
    <div class="prog rv" style="--d:2">
      <p class="bl-k">The audience journey</p>
      <ol class="prog-row">
        ${[['Meet Safi', 'His story, his warmth, his food'], ['Follow his journey', 'Kabul to Copenhagen to Abu Dhabi'], ['Discover Dhaba', 'His next chapter, at Saadiyat Grove'], ['Want to visit', 'The table he has been building towards']]
          .map(([t, d], i) => `<li class="rv" style="--d:${i + 3}"><b>0${i + 1}</b><strong>${t}</strong><span>${d}</span></li>`).join('')}
      </ol>
      <blockquote class="want rv" style="--d:7"><small>The reaction we are building towards</small>“I want to go to this guy's restaurant.”</blockquote>
      <p class="prog-loc rv" style="--d:8">A story shaped by many places, arriving in one of Abu Dhabi's most culturally significant destinations.</p>
    </div>` });

  // OBJECTIVES — tabbed, with pre/post-launch filter
  const OBJ = [
    ['01', 'Establish the person', 'pre', 'Introduce Safi: his personality, his experiences and his relationship with food. Build familiarity, trust and an emotional connection.',
      'Safi before the sign. Archive, interviews and his own voice carry the first two weeks; Dhaba is barely mentioned.',
      'Meet Safi · Chapter 01: Where it started · From Safi\'s Archives · Safi\'s Notes',
      'Recognises his face, watches to the end, replies to his voice notes, starts calling him "this guy".',
      'Reach in Abu Dhabi · average watch time · follows · saves and shares · comments and Story replies about Safi'],
    ['02', 'Introduce his project', 'pre', 'Once audiences know who Safi is, introduce Dhaba as the next chapter of his journey.',
      'Dhaba arrives inside his story, never as an advert: a letter in his voice, then the road that leads to Saadiyat Grove.',
      'Dear guest · The Road Leads Here · Kabul to Saadiyat, mapped',
      'Connects the person to the place, looks up Saadiyat Grove, follows for the next chapter.',
      'Profile visits · website clicks · saves on Dhaba posts · comments asking when and where'],
    ['03', 'Build cultural connection', 'pre', 'Show Safi exploring Abu Dhabi: its people, its ingredients and its food culture.',
      'Safi goes to them first: the fish market, the spice trail and the date farm, filmed early so they land before opening, in Arabic as well as English where it matters.',
      'The Fish Market · The Spice Trail · A Visit to the Date Farm · Conversations Along the Way',
      'Comments in Arabic, tags friends and family, shares to private chats, suggests where he should go next.',
      'Engagement from Abu Dhabi audiences · Arabic vs English performance · shares · watch time'],
    ['04', 'Build anticipation', 'pre', 'Create curiosity around the food, the restaurant and the overall experience.',
      'Cooking at the farm, the team and carefully paced details of the restaurant. Show the making of Dhaba; reveal only what is approved.',
      'Fire, Food and Stories · Cooking with Safi · The Making of Dhaba · The First Look',
      'Saves food posts, turns on notifications, asks when the doors open.',
      'Saves · notification turn-ons · website clicks · DMs about opening'],
    ['05', 'Drive discovery and visits', 'post', 'Turn the connection people have with Safi into a desire to visit Dhaba.',
      'Make visiting effortless: Saadiyat Grove, hours, booking, pinned posts and Highlights. Position Dhaba as a stop in a day at Saadiyat. Retarget everyone who watched the journey.',
      'Dhaba Arrives · Your Next Stop, Saadiyat · A Day in Saadiyat · A Dish, A Story',
      'Taps the link, asks for directions, books, brings someone. "I want to go to this guy\'s restaurant."',
      'Link clicks · reservations and enquiries · direction requests · website sessions from social']
  ];
  slide({ label: 'Objectives', bg: BLUE, ink: CREAM, ghost: 'OBJECTIVES', w: 105, html: `
    <div class="col-l narrow-l">${num('Objectives')}<h2 class="s-title l rv" style="--d:1">Five objectives.<br><em>The person, then the place.</em></h2>
      <p class="s-body rv" style="--d:2">Meet Safi → follow his journey → discover Dhaba → want to visit. The first four happen before the doors open.</p>
      <div class="seg ix rv" style="--d:3" data-filter="obj"><button class="is-on" data-v="all">All</button><button data-v="pre">Pre-launch</button><button data-v="post">Launch + post</button></div></div>
    <div class="tabs ix obj rv" style="--d:2" data-group="obj">
      <div class="tab-list">${OBJ.map((o, i) => `<button class="${i ? '' : 'is-on'}" data-t="${i}" data-ph="${o[2]}"><b>${o[0]}</b>${o[1]}<em>${{ pre: 'Pre-launch', post: 'Launch + post-launch', both: 'Pre + post' }[o[2]]}</em></button>`).join('')}</div>
      <div class="tab-panels">${OBJ.map((o, i) => `<div class="tab-panel ${i ? '' : 'is-on'}" data-t="${i}">
        <p class="tp-lead">${o[3]}</p>
        <dl><dt>Strategic approach</dt><dd>${o[4]}</dd><dt>Content</dt><dd>${o[5]}</dd><dt>Audience behaviour</dt><dd>${o[6]}</dd><dt>KPIs</dt><dd class="kpi">${o[7]}</dd></dl></div>`).join('')}</div>
    </div>` });

  inter({ label: 'Old Delhi', bg: PINK, w: 95, html: `
    ${pol('del-chai', 4, 7, 44, -2.5, 'Old Delhi', .92)}
    ${pol('del-karim', 30, 16, 32, 2, '', 1.06)}
    ${pol('del-naan', 64, 5, 40, -1.5, '', .97)}
    ${ill('bike', 48, 26)}` });

  // AUDIENCES
  const AUD = [
    ['Emiratis', 'Families and hosts · food-curious younger Emiratis · home cooks and the culinary community',
      'A new table worth bringing family and guests to, run by someone who respects local food culture.',
      'Safi at the fish market and the date farm. Local ingredients through a new lens. Generous, shared tables.',
      'Arabic-first for selected local stories and paid tests. Bilingual carousels. Arabic subtitles on key reels.',
      'Instagram first. TikTok as extra reach for the same reels.', 'Follow, share with family, save for a group plan, book.'],
    ['Residents & expats', 'Abu Dhabi\'s diverse residential community: Arab, South Asian, European and international residents, including Saadiyat\'s own',
      'Somewhere new worth recommending, with a real story behind it. Weekend plans at Saadiyat.',
      'Safi\'s personality, his cooking, food reels, the restaurant reveal, practical information.',
      'English-first. Bilingual where Arab residents are the focus.',
      'Instagram, with reels repurposed to TikTok. Facebook for community groups.', 'Follow, tag a friend, save, reserve.'],
    ['Tourists & visitors', 'International and regional visitors exploring Abu Dhabi · culture-led travellers on Saadiyat · people visiting friends and family',
      'A distinctive meal that fits into a day of museums, beaches and culture, and a story worth telling at home.',
      'Safi\'s story, A Day in Saadiyat, approved dishes, location and how to plan the visit.',
      'English-first with clear practical information. Arabic for regional visitors.',
      'Instagram, Google Maps and search, hotel and travel recommendations.', 'Save for the trip, ask for directions, book.']
  ];
  slide({ label: 'Audience matrix', bg: CREAM, ink: BLUE, ghost: 'AUDIENCE', w: 105, html: `
    <div class="col-l narrow-l">${num('Audiences')}<h2 class="s-title l rv" style="--d:1">Three audiences.<br><em>One road.</em></h2>
      <p class="s-body rv" style="--d:2">Built for Abu Dhabi and for Saadiyat, not adapted from Denmark.</p>
      ${small('Strategic hypotheses, to be tested against real audience data in the first 30 days. No audience is treated as one homogeneous group.')}</div>
    <div class="mx rv" style="--d:2">
      <div class="mx-h"><span></span>${AUD.map(a => `<b>${a[0]}</b>`).join('')}</div>
      ${['Who, more precisely', 'Motivation', 'Content interests', 'Language approach', 'Platform', 'Desired action']
        .map((r, k) => `<div class="mx-r"><span>${r}</span>${AUD.map(a => `<p>${a[k + 1]}</p>`).join('')}</div>`).join('')}
    </div>` });

  /* =====================================================================
     PART TWO — THE CHAPTERS
     ===================================================================== */
  slide({ label: 'Part two: The chapters', bg: GREEN, ink: CREAM, ghost: 'PART TWO', html: `
    <div class="t-part"><p class="s-num rv">Part two</p><h2 class="s-title xxl rv" style="--d:1">THE CHAPTERS</h2></div>
    ${milestone(70, 'km 2', 'The story', ORANGE)}` });

  slide({ label: 'Five chapters', bg: CREAM, ink: BLUE, ghost: 'CHAPTERS', w: 150, anchors: '0,50', html: `
    <div class="col-l">${num('The chapter system')}<h2 class="s-title l rv" style="--d:1">Five chapters.<br><em>The person before the place.</em></h2>
      <p class="s-body rv" style="--d:2">The person, the explorer, the creator, the restaurateur, the host. Three chapters happen before the doors open.</p>
      ${small('Chapters overlap in the feed. The archive never fully stops; it simply makes room.')}</div>
    <ol class="chap-road">
      ${[['01', 'Meet Safi', 'The Person', 'Pre-launch', BLUE], ['02', 'Safi Discovers Abu Dhabi', 'The Explorer', 'Pre-launch', ORANGE], ['03', 'The Making of Dhaba', 'The Creator', 'Pre-launch', GREEN], ['04', 'The Arrival', 'The Restaurateur', 'Launch', MAGENTA], ['05', 'The Story Continues', 'The Host', 'Post-launch', TEAL]]
        .map(([n, t, st, w, c], i) => `<li class="rv" style="--d:${i + 2};--c:${c}"><b>${n}</b><em class="stage">${st}</em><strong>${t}</strong><span>${w} · Phase ${String(i + 1).padStart(2, '0')}</span></li>`).join('')}
    </ol>` });

  // chapter slide builder
  const chapter = o => slide({ label: `Chapter ${o.n}: ${o.t}`, bg: o.bg, ink: o.ink, ghost: o.ghost, w: 172, anchors: '0,72', html: `
    <div class="col-l ch-l">${num('Chapter ' + o.n + ' · ' + o.stage)}<h2 class="s-title l rv" style="--d:1">${o.t.toUpperCase()}</h2>
      <p class="s-body rv" style="--d:2">${o.narr}</p>
      <p class="s-body strong rv" style="--d:3">${o.purpose}</p></div>
    <div class="concepts">
      <p class="cc-k rv" style="--d:2">Content concepts</p>
      ${o.cc.map(([t, d, f, p, src], i) => `<div class="cc rv" style="--d:${i + 3}"><b>${t}</b><p>${d}</p><div class="cc-m"><span class="fmt">${f}</span>${plat(p)}${src ? `<span class="src s-${src}">${{ A: 'Archive', N: 'New shoot', AN: 'Archive + new', D: 'Designed from archive' }[src]}</span>` : ''}</div></div>`).join('')}
    </div>
    <div class="ch-side rv" style="--d:3"><p class="cc-k">Visual approach</p><p>${o.visual}</p>${o.note ? `<p class="ch-note">${o.note}</p>` : ''}</div>
    ${o.art}` });

  chapter({ n: '01', t: 'Meet Safi', stage: 'The Person · Pre-launch', bg: CREAM, ink: BLUE, ghost: 'ARCHIVE',
    narr: 'Who is Safi, where does he come from, what shaped him, and why is he worth following? Kabul, Copenhagen, India, and now Abu Dhabi, told like opening someone\'s personal archive rather than reading a biography.',
    purpose: 'Purpose: familiarity, trust and an emotional connection with Safi before Dhaba takes centre stage.',
    cc: [['Meet Safi', 'An intimate introduction: archive footage with his own voiceover.', 'Reel · 30–45s', 'ig tt fb', 'AN'],
      ['From the Archives', 'Editorial photo carousels from different stages of Safi\'s life.', 'Carousel', 'ig fb', 'A'],
      ['A Life Through Food', 'Short documentary reels: how each place shaped his cooking.', 'Reel · 45–75s', 'ig tt', 'A'],
      ['The Stories Behind the Photographs', 'One photograph, one memory, in Safi\'s words.', 'Single image', 'ig st', 'A'],
      ['Dear guest,', 'A letter in Safi\'s voice that introduces Dhaba as his next chapter.', 'Collage post', 'ig fb', 'D']],
    visual: 'Archival imagery, layered typography, documentary stills, handwritten dates and personal notes. Polaroid frames on cream, as in the pitch.',
        art: `<div class="phone rv" style="left:126vw;top:7vh;--d:2"><div class="ph-bar"><i></i><i></i><i></i></div><img data-src="assets/photos/pf-copenhagen.webp" alt="">
        <div class="ph-cover"><small>From Safi's Archives · No.01</small><b>Copenhagen.</b></div></div>
      ${pol('jai-hug', 146, 9, 22, 3, 'The story behind the photograph', 1.04, 'mini')}
      ${pol('del-safi-market', 147, 36, 24, -2, 'New Delhi', .97, 'mini')}` });

  inter({ label: 'Jaipur, Rajasthan', bg: PINK, w: 100, html: `
    ${pol('jai-roti', 5, 10, 32, -2, 'Jaipur, Rajasthan', .93)}
    ${pol('jai-brass', 42, 6, 46, 2, '', 1.07)}
    ${pol('jai-arch', 70, 14, 34, -1.5, '', .97)}
    ${ill('peacock', 28, 30)}` });

  chapter({ n: '02', t: 'Safi Discovers Abu Dhabi', stage: 'The Explorer · Pre-launch', bg: SKY, ink: BLUE, ghost: 'ABU DHABI',
    narr: 'Before the restaurant, Safi gets to know the city: the fish market, the spice trail, the date farm and the people behind them. A major part of the pre-launch story, filmed early so it lands before opening.',
    purpose: 'Purpose: cultural connection, and real curiosity about Safi in Abu Dhabi.',
    cc: [['The Fish Market', 'Safi at the market, talking to vendors, learning the local catch.', 'Documentary reel', 'ig tt fb', 'N'],
      ['The Spice Trail', 'Spice markets, ingredients and the stories behind them.', 'Reel + carousel', 'ig tt', 'N'],
      ['A Visit to the Date Farm', 'Dates, their cultural significance, and how Safi approaches an ingredient.', 'Reel + carousel', 'ig tt fb', 'N'],
      ['Conversations Along the Way', 'Short, informal interviews with vendors and producers.', 'Reel · 20–40s', 'ig tt', 'N'],
      ['Seeing Abu Dhabi Through Food', 'A chapter-closing film of places, ingredients and reflections.', 'Reel · 60s', 'ig tt fb', 'N']],
    visual: 'Natural light, handheld camera, ambient sound, candid exchanges. Intimate food-and-travel journalism in the spirit of Anthony Bourdain. No studios, no scripted influencer moments.',
    note: 'Pre-launch, subject to shoot scheduling: filmed in Shoot 01 within the first two weeks, with location permits and signed consent from everyone on camera.',
    art: `${pol('ad-fish-market', 119, 8, 36, -2, 'The fish market', .96)}
      ${pol('ad-date-farm', 141, 12, 24, 2, 'The date farm', 1.04)}
      ${pol('koc-spices', 140, 42, 17, -1.5, 'Mood reference · India archive', 1.03, 'mini')}` });

  chapter({ n: '03', t: 'The Making of Dhaba', stage: 'The Creator · Pre-launch', bg: TEAL, ink: CREAM, ghost: 'FIRE',
    narr: 'The journey takes shape through food: Safi cooking on a friend\'s working farm near Dubai, the ingredients he found in Abu Dhabi, and the steady progression towards the restaurant at Saadiyat Grove.',
    purpose: 'Purpose: food appeal and anticipation for what Safi is building.',
    cc: [['Fire, Food and Stories', 'A cinematic reel of Safi cooking on the tandoor and the grill.', 'Hero reel', 'ig tt fb', 'N'],
      ['An Ingredient\'s Journey', 'One ingredient from the markets, followed to the plate.', 'Reel', 'ig tt', 'N'],
      ['Cooking with Safi', 'Informal technique, ingredients and influences.', 'Reel series', 'ig tt', 'N'],
      ['The Making of Dhaba', 'From concept to restaurant: the team, the tandoors, the site as permitted.', 'Stories + reels', 'ig st', 'N'],
      ['An Evening at the Farm', 'Optional: an intimate dinner with about 15–20 Emirati guests.', 'Event content', 'ig st', 'N']],
    visual: 'Textural close-ups, the sound of cooking, warm light, real conversation. Fire as the visual signature, as the tandoors will be at Saadiyat.',
    note: 'The farm\'s tandoor, grill, mist system, produce and dairy are to be confirmed on a recce. An Evening at the Farm is an optional idea, subject to approval, guest consent and budget.',
    art: `${plate('pf-fire', 118, 7, 40, 'glow')}
      ${pol('luc-fire', 145, 12, 30, 2.5, 'Mood reference · archive', 1.05, 'mini')}` });

  inter({ label: 'Lucknow, Uttar Pradesh', bg: LIME, w: 100, html: `
    ${pol('luc-pan', 4, 6, 44, -2, 'Lucknow, Uttar Pradesh', .93)}
    ${pol('luc-flowers', 34, 12, 38, 2.5, '', 1.06)}
    ${pol('luc-milk', 62, 8, 42, -1.5, '', .97)}
    ${ill('tandoor', 84, 30)}` });

  chapter({ n: '04', t: 'The Arrival', stage: 'The Restaurateur · Launch', bg: MAGENTA, ink: CREAM, ghost: 'ARRIVAL',
    narr: 'The road leads to Saadiyat Grove, in one of Abu Dhabi\'s most culturally significant destinations. Dhaba is introduced as the culmination of Safi\'s journey, revealed slowly and only as approved.',
    purpose: 'Purpose: turn the connection people feel with Safi into real interest in his restaurant.',
    cc: [['The Road Leads Here', 'Safi\'s journey arrives at Saadiyat Grove: the map, the place, the first glimpse.', 'Reel + carousel', 'ig tt fb', 'AN'],
      ['The First Look', 'Selected details of the restaurant, never a render.', 'Carousel + Stories', 'ig st fb', 'N'],
      ['The People of Dhaba', 'The team and their roles, introduced as people.', 'Portrait series', 'ig fb', 'N'],
      ['The Table Is Almost Ready', 'Atmosphere, approved dishes and carefully paced reveals.', 'Reel + Stories', 'ig tt st', 'N'],
      ['Dhaba Arrives', 'The opening announcement with location and visiting details, once the date is confirmed.', 'Hero film + carousel', 'ig tt fb st', 'N']],
    visual: 'The editorial storytelling of the journal, now meeting elevated food and hospitality photography.',
    note: 'No menu details, prices or opening date are published until Dhaba approves them.',
    art: `<div class="finale-mini rv" style="left:118vw;top:9vh;--d:2"><img data-src="assets/finale/restaurant.webp" alt=""><span>Every restaurant opens.<br><b>Dhaba arrives.</b></span></div>` });

  chapter({ n: '05', t: 'The Story Continues', stage: 'The Host · Post-launch', bg: CREAM, ink: BLUE, ghost: 'JOURNAL',
    narr: 'The doors open and people finally experience Safi\'s hospitality for themselves. The storytelling keeps going, now at the table.',
    purpose: 'Purpose: stay relevant, encourage discovery and support repeat visits.',
    cc: [['At the Table', 'Food and shared dining moments.', 'Reel + photo', 'ig fb', 'N'],
      ['Safi\'s Kitchen', 'Founder-led cooking, with the team beside him.', 'Reel', 'ig tt', 'N'],
      ['A Dish, A Story', 'The inspiration behind each approved menu item.', 'Carousel', 'ig fb', 'AN'],
      ['A Day in Saadiyat', 'Dhaba as a dining stop within a wider cultural day on the island.', 'Carousel + reel', 'ig tt fb', 'N'],
      ['Around Dhaba', 'The neighbourhood, nearby cultural attractions and guest moments.', 'Mixed', 'ig st', 'N']],
    visual: 'The Dhaba Journal from the pitch: the editorial world carries on once the road ends at the door.',
    note: 'Guest content only with consent. Sustainable rhythm: one monthly video shoot, as scoped.',
    art: `${pol('luc-feast', 118, 8, 28, -2, 'At the Table · tone reference', .96)}
      ${pol('jai-table', 140, 30, 24, 2.5, '', 1.05)}` });

  slide({ label: 'How each audience joins the road', bg: SKY, ink: BLUE, ghost: 'JOIN', w: 110, html: `
    <div class="col-l">${num('Audiences')}<h2 class="s-title l rv" style="--d:1">Everyone gets on at a different stop.</h2>
      <p class="s-body rv" style="--d:2">The story is the same. The way in is not.</p></div>
    <div class="joins">
      ${[['Emiratis', 'Chapter 02 · 03', 'They meet Safi in their own city. He is the guest at the fish market and the date farm before he is the host at Saadiyat.', 'An Evening at the Farm, if approved, makes them part of the story rather than its audience.'],
         ['Residents & expats', 'Chapter 01 · 03 · 04', 'They follow a personality. The archive makes Safi interesting; the cooking makes him credible; the reveal turns Dhaba into a plan.', 'Tag-a-friend food content and the opening carry the social occasion.'],
         ['Tourists & visitors', 'Chapter 01 · 04 · 05', 'They find the story while planning a day on Saadiyat. Safi\'s road gives them something to remember; the location makes it easy to fit in.', 'Then practical clarity does the rest: where, when, how to book, saved to Maps.']]
        .map(([a, c, t, d], i) => `<div class="jn rv" style="--d:${i + 2}"><small>${c}</small><b>${a}</b><p>${t}</p><p class="dim">${d}</p></div>`).join('')}
    </div>` });

  /* =====================================================================
     PART THREE — THE SYSTEM
     ===================================================================== */
  slide({ label: 'Part three: The system', bg: PLUM, ink: CREAM, ghost: 'PART THREE', html: `
    <div class="t-part"><p class="s-num rv">Part three</p><h2 class="s-title xxl rv" style="--d:1">THE SYSTEM</h2></div>
    ${milestone(70, 'km 3', 'Every week', GOLD)}` });

  const PIL = [
    ['The Journey', BLUE, 'jai-portrait', 'Establish Safi as a person: familiarity, trust and connection.', 'Meet Safi → follow his journey',
      'Archive carousels · documentary reels · voice notes · founder clips',
      ['Meet Safi', 'From Safi\'s Archives', 'The Road Leads Here: Kabul to Saadiyat, mapped'],
      'Every recipe has an address.', 'Archival grain, polaroid frames, handwritten dates, layered type.', 'Share rate'],
    ['The Ingredients', ORANGE, 'del-spices', 'Cultural connection: Safi exploring Abu Dhabi.', 'Follow his journey',
      'Market documentaries · bilingual ingredient carousels · vendor conversations',
      ['The Fish Market', 'The Spice Trail', 'A Visit to the Date Farm'],
      'Abu Dhabi, one market at a time.', 'Natural light, handheld, ambient sound, ingredient names in Arabic and English.', 'Average watch time'],
    ['The Craft', GREEN, 'koc-stove', 'Food appeal and desire.', 'Desire',
      'Cooking reels · close-up sound-led clips · technique carousels',
      ['Fire, Food and Stories', 'Cooking with Safi', 'Hands at work: the kitchen team, after opening'],
      'Fire first. Then food.', 'Textural close-ups, warm light, real kitchen sound, minimal text.', 'Saves'],
    ['The People', MAGENTA, 'koc-laugh', 'Community and conversation.', 'Engagement → advocacy',
      'Conversations · environmental portraits · polls and Q&A · guest reposts',
      ['Conversations Along the Way', 'Where should Safi eat?', 'The People of Dhaba'],
      'The road is full of people.', 'Candid portraits, names and roles (with consent), collaborator co-posts.', 'Comments and DMs'],
    ['The Experience', TEAL, 'jai-setting', 'Discovery and visits, with Saadiyat as part of the plan.', 'Discover Dhaba → want to visit',
      'Reveal carousels · opening announcements · practical Stories · Highlights',
      ['The First Look', 'Your Next Stop, Saadiyat', 'A Day in Saadiyat'],
      'The table is almost ready.', 'Elevated food and hospitality photography inside editorial frames.', 'Link clicks and reservations']
  ];
  slide({ label: 'Content pillars', bg: CREAM, ink: BLUE, ghost: 'PILLARS', w: 105, html: `
    <div class="col-l narrow-l">${num('Content pillars')}<h2 class="s-title l rv" style="--d:1">The chapters guide the launch.<br><em>The pillars keep it going.</em></h2>
      ${small('Select a pillar.')}</div>
    <div class="tabs ix pil rv" style="--d:2" data-group="pil">
      <div class="tab-list">${PIL.map((p, i) => `<button class="${i ? '' : 'is-on'}" data-t="${i}" style="--c:${p[1]}"><b>0${i + 1}</b>${p[0]}</button>`).join('')}</div>
      <div class="tab-panels">${PIL.map((p, i) => `<div class="tab-panel ${i ? '' : 'is-on'}" data-t="${i}" style="--c:${p[1]}">
        <figure><img data-src="assets/photos/${p[2]}.webp" alt=""><figcaption>“${p[7]}”</figcaption></figure>
        <dl><dt>Objective</dt><dd>${p[3]}</dd><dt>Customer journey</dt><dd>${p[4]}</dd><dt>Formats</dt><dd>${p[5]}</dd>
          <dt>Three concepts</dt><dd><ol>${p[6].map(c => `<li>${c}</li>`).join('')}</ol></dd>
          <dt>Visual treatment</dt><dd>${p[8]}</dd><dt>Primary KPI</dt><dd class="kpi">${p[9]}</dd></dl></div>`).join('')}</div>
    </div>` });

  // THE DESIGN DIRECTION — one approved direction: contemporary editorial scrapbook collage.
  // Approved artworks are shown exactly as supplied (uncropped, unaltered). Lower thirds are a proposed mock-up.
  const art = (file, cls, cap) => `<figure class="art zoom ${cls}" tabindex="0" data-full="assets/direction/${file}.webp"><img data-src="assets/direction/${file}.webp" alt="${cap}">${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
  slide({ label: 'The design direction', bg: TEAL, ink: CREAM, ghost: 'COLLAGE', w: 105, html: `
    <div class="col-l dd-l">${num('Design direction')}<h2 class="s-title m rv" style="--d:1">ONE VISUAL LANGUAGE.</h2>
      <p class="dd-sub rv" style="--d:2">Many ways to tell the story.</p>
      <p class="s-body rv" style="--d:3">Contemporary editorial scrapbook collage: Safi's memories, recipes and travels, gathered on one page through his eyes. Personal, tactile, expressive, and unmistakably Dhaba.</p>
      <ul class="dd-princ rv" style="--d:4">${['Real photography is always the hero.', 'Collage adds meaning, never just decoration.', 'Torn paper, tape and clips create depth.', 'Type is purposeful, legible and balanced.', 'Colour is selective, in light or dark.', 'Every post art-directed; one family.'].map(t => `<li>${t}</li>`).join('')}</ul></div>
    <div class="dd1-art rv" style="--d:3">${art('static-dear-guest', 'a-feed', '')}</div>` });

  slide({ label: 'Static and Stories', bg: CREAM, ink: BLUE, ghost: 'FORMAT', w: 105, html: `
    <div class="col-l narrow-l">${num('Applications · 01–02')}<h2 class="s-title m rv" style="--d:1">THE STORY, IN EVERY FORMAT.</h2>
      <p class="s-body rv" style="--d:2">The feed post carries the full composition. Stories use the same collage language in a quicker, vertical format, designed for the screen rather than stretched to fit it.</p>
      ${small('Stories keep the top and bottom clear for Instagram\'s interface, and leave room for polls, countdowns and stickers.')}</div>
    <div class="fmt-pair">
      <div class="fp rv" style="--d:2">${art('static-dear-guest', 'a-feed2', '')}<p class="fp-cap"><b>01 · Static post</b>Feed · 4:5</p></div>
      <div class="fp rv" style="--d:4"><div class="story-phone zoom" tabindex="0" data-full="assets/direction/story-chefs-day-off.webp"><img data-src="assets/direction/story-chefs-day-off.webp" alt="Chef's day off, Instagram Story">
        <div class="ig-top"><i></i><i class="on"></i><i></i><span><em></em>dhabakitchen</span></div></div>
        <p class="fp-cap"><b>02 · Instagram Story</b>9:16 · built around a question sticker</p></div>
    </div>` });

  slide({ label: 'Carousels', bg: BLUE, ink: CREAM, ghost: 'SWIPE', w: 128, anchors: '0,28', html: `
    <div class="col-l narrow-l">${num('Application · 03')}<h2 class="s-title m rv" style="--d:1">STORIES WORTH SWIPING THROUGH.</h2>
      <p class="s-body rv" style="--d:2">Four frames, four layouts, one scrapbook. Each swipe turns a page of Safi's story, from who he is to where it all ends up.</p>
      <p class="swipe rv" style="--d:3"><i class="on"></i><i></i><i></i><i></i> Swipe →</p></div>
    <div class="car-strip">
      ${[['carousel-01', 'The person', 'An archival profile card introduces Safi.'], ['carousel-02', 'The ingredients', 'A full-bleed pause on texture and colour.'], ['carousel-03', 'The source', 'Safi at the market, in his own typewritten words.'], ['carousel-04', 'The table', 'Fire, the journey in four lines, and where it lands: Saadiyat.']]
        .map(([f, t, d], i) => `<div class="cf rv" style="--d:${i + 2}">${art(f, 'a-car', '')}<p class="fp-cap"><b>0${i + 1} · ${t}</b>${d}</p></div>`).join('')}
    </div>` });

  slide({ label: 'Lower thirds', bg: TEAL, ink: CREAM, ghost: 'MOTION', w: 105, html: `
    <div class="col-l narrow-l">${num('Application · 04')}<h2 class="s-title m rv" style="--d:1">THE SCRAPBOOK IN MOTION.</h2>
      <p class="s-body rv" style="--d:2">Small paper labels, handwritten notes and typewritten strips, taped in and torn away. The footage stays the hero.</p>
      ${small('Proposed treatment, mocked up on existing photography. Not a finished asset.')}</div>
    <div class="lt-row">
      <div class="lt rv" style="--d:2"><div class="reel"><img data-src="assets/photos/del-safi-market.webp" alt="" style="object-position:76% 40%">
          <div class="reel-ui"><i></i><i></i><i></i></div><div class="reel-cap"><b></b><i></i></div>
          <div class="lt-el lt-tag"><span class="tape"></span><b>safi.</b><small>chef &amp; founder · dhaba</small></div></div>
        <p class="fp-cap"><b>Name label</b>Paper tag, taped in for a few seconds</p></div>
      <div class="lt rv" style="--d:3"><div class="reel"><img data-src="assets/photos/koc-spices.webp" alt="" style="object-position:62% 50%">
          <div class="reel-ui"><i></i><i></i><i></i></div><div class="reel-cap"><b></b><i></i></div>
          <div class="lt-el lt-place"><span>kochi, india</span></div>
          <div class="lt-el lt-note">cinnamon, from the source<svg viewBox="0 0 200 14" preserveAspectRatio="none"><path d="M3 9 C 50 3, 110 12, 197 5" /></svg></div></div>
        <p class="fp-cap"><b>Annotation</b>Handwritten note on an ingredient</p></div>
      <div class="lt rv" style="--d:4"><div class="reel"><img data-src="assets/photos/luc-talk.webp" alt="" style="object-position:30% 40%">
          <div class="reel-ui"><i></i><i></i><i></i></div><div class="reel-cap"><b></b><i></i></div>
          <div class="lt-el lt-strips"><span><em>-</em>haggle a little.</span><span><em>-</em>listen a lot.</span></div></div>
        <p class="fp-cap"><b>Caption strips</b>Typewritten lines on torn paper</p></div>
    </div>` });

  const SPLIT = { pre: [40, 30, 15, 10, 5], post: [15, 10, 25, 20, 30] };
  slide({ label: 'Content split', bg: LILAC, ink: BLUE, ghost: 'SPLIT', w: 105, html: `
    <div class="col-l">${num('Content split')}<h2 class="s-title l rv" style="--d:1">The mix changes as the road shortens.</h2>
      <p class="s-body rv" style="--d:2">The person leads before opening. The restaurant leads after it. Safi never leaves the feed.</p>
      <div class="seg ix rv" style="--d:3" data-split><button class="is-on" data-v="pre">Pre-launch</button><button data-v="post">Post-launch</button></div></div>
    <div class="split rv" style="--d:2" data-pre="${SPLIT.pre}" data-post="${SPLIT.post}">
      ${PIL.map((p, i) => `<div class="sp" style="--c:${p[1]};--v:${SPLIT.pre[i]}"><b class="sp-n">${SPLIT.pre[i]}%</b><i></i><span>${p[0]}</span></div>`).join('')}
      <p class="sp-total">Total <b>100%</b></p>
    </div>` });

  slide({ label: 'Platforms', bg: CREAM, ink: BLUE, ghost: 'PLATFORMS', w: 105, html: `
    <div class="col-l narrow-l">${num('Platforms')}<h2 class="s-title l rv" style="--d:1">Instagram first.<br><em>The rest follows it.</em></h2>
      ${small('TikTok and Facebook add reach to content already made for Instagram. TikTok has no separate production allocation, so there are no TikTok-only shoots or series.')}</div>
    <div class="plats">
      ${[['Instagram', 'Primary content platform', 'Where the story is made', ['Original reels, carousels and photography', 'Daily Stories', 'Founder-led storytelling', 'Restaurant information and launch'], 'All content planning and production starts here. Highlights become the restaurant\'s guide.', 'Reach · saves · shares · profile visits · link clicks'],
         ['TikTok', 'Repurposed video distribution', 'Extra reach, same reels', ['Relevant Instagram reels republished', 'Length trimmed where needed', 'Opening hook and on-screen text adapted', 'Captions, hashtags and audio adjusted'], 'Light platform adaptations of existing Instagram video, not separate productions. What goes out follows the reels Instagram already has.', 'Views · watch time · follows'],
         ['Facebook', 'Supporting distribution', 'Local and practical', ['Instagram feed cross-posted', 'Opening updates and restaurant information', 'Community communication', 'Paid media infrastructure'], 'Mirrors the Instagram feed: the same posts, cross-published. Hours, location and opening updates live on the Page, which is also the backbone for Meta ads.', 'Reach · page actions · message responses']]
        .map(([n, r, t, roles, a, m], i) => `<div class="plat rv" style="--d:${i + 2}"><small>${r}</small><b>${n}</b><em>${t}</em><ul>${roles.map(x => `<li>${x}</li>`).join('')}</ul><p>${a}</p><p class="kpi">${m}</p></div>`).join('')}
    </div>` });

  inter({ label: 'Kochi, Kerala', bg: SKY, w: 105, html: `
    ${pol('koc-boat', 4, 12, 30, -2, 'Kochi, Kerala', .93)}
    ${pol('koc-woman', 38, 6, 44, 2, '', 1.06)}
    ${pol('koc-shop', 66, 10, 34, -1.5, '', .97)}
    <img class="oncoming" data-src="assets/ill/samosa.webp" data-from="115" data-rate="0.7" alt="">` });

  const SER = [
    ['The Road to Dhaba', 'koc-boat', 'The main documentary series following Safi\'s journey to the door.', 'The tentpole. Reach, paid amplification, press.', 'Instagram reel 60–90s · repurposed to TikTok and Facebook', 'One episode per location, front-loaded before launch', ['The Fish Market', 'A Visit to the Date Farm', 'Fire at the Farm'], '"First rule of a new city: go where the cooks shop."', 'Documentary, handheld, natural light. Chapter number and episode title cards in Publish Gothic.'],
    ['From Safi\'s Archives', 'pf-rickshaw', 'Personal photographs, memories and the stories behind them.', 'Establishes the person. Carries the feed before new shoots exist.', 'Carousel, 6–10 frames', 'Weekly pre-launch · monthly after', ['Copenhagen', 'The Cookbook Years', 'The India Notebooks: Delhi, Jaipur, Lucknow, Kochi'], '"Some kitchens begin with a menu. This one begins with a photo album."', 'Polaroid frames on cream paper, handwritten dates, film grain.'],
    ['A City Through Its Ingredients', 'koc-cucumber', 'Safi learning Abu Dhabi\'s food culture, one ingredient at a time.', 'Cultural relevance, especially for Emirati audiences.', 'Carousel + short reel, bilingual', 'Fortnightly', ['The local catch', 'The Spice Trail', 'Dates'], '"One ingredient. Three people in Abu Dhabi. Three ways to cook it."', 'Ingredient on cream with its Arabic and English names; market colour around it.'],
    ['At the Table', 'luc-feast', 'Food, people and shared experiences.', 'Food appeal into community. The backbone after opening.', 'Reel + photo set', 'Occasional pre-launch · weekly after', ['The Shared Table, at the farm', 'An Evening at the Farm (if approved)', 'The first guests'], '"Nobody eats alone at a dhaba."', 'Overhead tablescapes, hands passing plates, warm light.'],
    ['The Making of Dhaba', 'jai-ladle', 'From concept to restaurant: the site, the team, the kitchen.', 'Anticipation and the bridge to conversion.', 'Stories first, then reels and carousels', 'Weekly from Phase 03', ['The site, as permitted', 'The team', 'The tandoors arrive'], '"What\'s happening at Saadiyat Grove."', 'Behind-the-scenes documentary. Real textures and progress. Never a render.'],
    ['Safi\'s Notes', 'chef-avatar', 'Short personal reflections and observations from the road.', 'Personality and presence between shoots, at low production cost.', 'Instagram Stories voice notes · phone-shot reels · text on photo', '1–2 per week', ['The first thing I ate in Abu Dhabi', 'What I miss about Copenhagen', 'Why the tandoor comes first'], '"Quick note from the road…"', 'Phone-native. The voice-note design from the pitch. Handwritten cards.']
  ];
  slide({ label: 'Recurring series', bg: CREAM, ink: BLUE, ghost: 'SERIES', w: 105, html: `
    <div class="col-l narrow-l">${num('Recurring series')}<h2 class="s-title l rv" style="--d:1">Six series.<br><em>One brand world.</em></h2>
      ${small('Recognisable formats the audience learns to look for. Select a series.')}</div>
    <div class="tabs ix ser rv" style="--d:2" data-group="ser">
      <div class="tab-list">${SER.map((s, i) => `<button class="${i ? '' : 'is-on'}" data-t="${i}">${s[0]}</button>`).join('')}</div>
      <div class="tab-panels">${SER.map((s, i) => `<div class="tab-panel ${i ? '' : 'is-on'}" data-t="${i}">
        <figure><img data-src="assets/photos/${s[1]}.webp" alt=""><figcaption>${s[7]}</figcaption></figure>
        <dl><dt>Premise</dt><dd>${s[2]}</dd><dt>Strategic role</dt><dd>${s[3]}</dd><dt>Format</dt><dd>${s[4]}</dd><dt>Frequency</dt><dd>${s[5]}</dd>
          <dt>Episodes</dt><dd><ol>${s[6].map(c => `<li>${c}</li>`).join('')}</ol></dd><dt>Visual direction</dt><dd>${s[8]}</dd></dl></div>`).join('')}</div>
    </div>` });

  slide({ label: 'Language', bg: DEEP, ink: CREAM, ghost: 'لغة', w: 105, html: `
    <div class="col-l narrow-l">${num('Language & localisation')}<h2 class="s-title l rv" style="--d:1">English first.<br><em>Arabic where it matters most.</em></h2>
      ${small('All Arabic copy is written or reviewed by a professional native copywriter. No machine translation is published.')}</div>
    <div class="langs">
      ${[['English-first', '≈ 70% of output', 'Broad accessibility across Abu Dhabi\'s multicultural audience.', 'Archive stories, Safi\'s Notes, cooking content.'],
         ['Bilingual', '≈ 20%', 'Selected editorial carousels, captions and every key announcement.', 'A City Through Its Ingredients, the opening announcement, practical information.'],
         ['Arabic-first', '≈ 10% + paid tests', 'Local stories where the conversation itself is in Arabic.', 'Vendor and producer conversations, Emirati-focused paid creative.']]
        .map(([t, s, d, e], i) => `<div class="lg rv" style="--d:${i + 2}"><small>${s}</small><b>${t}</b><p>${d}</p><p class="dim"><span>Best for</span> ${e}</p></div>`).join('')}
      <div class="lg wide rv" style="--d:5"><b>Subtitles</b><p>English subtitles on every Arabic interview. Arabic subtitles on selected English films: hero episodes and anything with paid behind it.</p></div>
      <div class="lg wide rv" style="--d:6"><b>Paid localisation</b><p>A/B test English and Arabic versions of the same creative. Abu Dhabi first; regional audiences such as Al Ain tested, subject to media planning.</p></div>
    </div>` });

  const LANGEX = {
    en: { dir: 'ltr', k: 'English-first', series: 'A City Through Its Ingredients', title: 'No.03<br>Dates.', cap: 'Before he cooks with them, Safi wanted to understand them. A morning at a date farm, and a lesson in patience.', sub: 'Arabic subtitles on the reel' },
    bi: { dir: 'ltr', k: 'Bilingual', series: 'A City Through Its Ingredients · <span lang="ar">مدينة تُروى بمكوّناتها</span>', title: 'Dates.<br><span lang="ar" class="ar">التمر.</span>', cap: 'Before he cooks with them, Safi wanted to understand them.<br><span lang="ar" class="ar" dir="rtl">قبل أن يطبخ بها، أراد صافي أن يفهمها.</span>', sub: 'English caption first, Arabic second' },
    ar: { dir: 'rtl', k: 'Arabic-first', series: '<span lang="ar">مدينة تُروى بمكوّناتها · الحلقة ٠٣</span>', title: '<span lang="ar" class="ar">قبل المطبخ…<br>كانت المزرعة.</span>', cap: '<span lang="ar" class="ar">صباحٌ في مزرعة نخيل، ودرسٌ في الصبر. قبل أن يطبخ بها، أراد صافي أن يفهمها.</span>', sub: 'English subtitles on the farmer interview · Arabic-first paid test' }
  };
  window.LANGEX = LANGEX;
  slide({ label: 'One concept, three languages', bg: CREAM, ink: BLUE, ghost: 'DATES', w: 110, html: `
    <div class="col-l">${num('Localisation in practice')}<h2 class="s-title l rv" style="--d:1">One concept.<br><em>Three executions.</em></h2>
      <p class="s-body rv" style="--d:2">A City Through Its Ingredients, No.03: the date farm.</p>
      <div class="seg ix rv" style="--d:3" data-lang><button class="is-on" data-v="en">English-first</button><button data-v="bi">Bilingual</button><button data-v="ar">Arabic-first</button></div>
      ${small('Arabic shown is a working draft for professional review, not final copy.')}</div>
    <div class="lx rv" style="--d:2">
      <div class="phone lx-phone"><div class="ph-bar"><i></i><i></i><i></i></div>
        <div class="lx-img"><img data-src="assets/photos/ad-date-hand.webp" alt=""></div>
        <div class="ph-cover lx-cover"><small class="lx-series">${LANGEX.en.series}</small><b class="lx-title">${LANGEX.en.title}</b></div></div>
      <div class="lx-copy"><small class="lx-k">${LANGEX.en.k}</small><p class="lx-cap">${LANGEX.en.cap}</p><p class="lx-sub">${LANGEX.en.sub}</p></div>
    </div>` });

  /* =====================================================================
     PART FOUR — THE ROLLOUT
     ===================================================================== */
  slide({ label: 'Part four: The rollout', bg: RUST, ink: CREAM, ghost: 'PART FOUR', html: `
    <div class="t-part"><p class="s-num rv">Part four</p><h2 class="s-title xxl rv" style="--d:1">THE ROLLOUT</h2></div>
    ${milestone(70, 'km 4', 'The timeline', GREEN)}` });

  const PH = [
    ['Introduction', BLUE, 'Stage 01, the person: who Safi is and what shaped him.', 'Establish Safi as a person.', '"Before Dhaba, there was Safi."', 'Ch 01 · Meet Safi · Pre-launch', 'Meet Safi · Where it started · archive carousels · Safi\'s Notes', 'Instagram reels, carousels and Stories · reels repurposed to TikTok', 'Meet Safi · Chapter 01: Where it started · Safi, on paper', 'Follow Safi\'s road.', 'Reach · follows · watch time · saves · comments about Safi', 'Archive reviewed and cleared · Meet Safi voiceover and interview recorded · Shoot 01 booked'],
    ['Discovery', ORANGE, 'Stage 02, the explorer: Safi discovers Abu Dhabi, and Dhaba appears as his next chapter.', 'Build cultural connection; introduce his project.', '"Safi meets Abu Dhabi, one ingredient at a time."', 'Ch 02 · Safi Discovers Abu Dhabi · Pre-launch', 'Fish market · spice trail · date farm · conversations · the Dear guest letter', 'Documentary reels · bilingual carousels · Stories polls · reels repurposed to TikTok', 'The Fish Market · The Spice Trail · A Visit to the Date Farm', 'Tell him where to go next.', 'Watch time · shares · Abu Dhabi and Arabic-audience engagement · comments', 'Shoot 01 (markets and date farm) filmed in the first two weeks · permits and consent · Arabic copywriter'],
    ['Anticipation', GREEN, 'Stage 03, the creator: the food, and the making of Dhaba.', 'Build anticipation.', '"The journey takes shape on the plate."', 'Ch 03 · The Making of Dhaba · Pre-launch', 'Farm cooking · Fire, Food and Stories · the team · The Road Leads Here', 'Cinematic reels · behind-the-scenes Stories · carousels', 'Fire, Food and Stories · Cooking with Safi · The Road Leads Here', 'Turn on notifications.', 'Saves · profile visits · website clicks · notification turn-ons', 'Farm confirmed · any dish shown approved · team confirmed · website live'],
    ['Arrival', MAGENTA, 'Stage 04, the restaurateur: Dhaba arrives at Saadiyat Grove.', 'Generate visits, enquiries and reservations when available.', '"Every restaurant opens. Dhaba arrives."', 'Ch 04 · The Arrival · Launch', 'First Look · opening announcement · Your Next Stop, Saadiyat · location, hours, booking · launch paid', 'Reveal reels · carousels · link Stories · pinned posts · Highlights · Facebook updates', 'The First Look · Dhaba Arrives · Your Next Stop, Saadiyat', 'Reserve your table (once booking is live).', 'Link clicks · reservations and enquiries · direction requests · reach', 'Confirmed opening date · booking system · menu and prices approved · restaurant photography'],
    ['Momentum', TEAL, 'Stage 05, the host: guests experience Safi\'s hospitality.', 'Sustain awareness and encourage repeat visits.', '"The road ends at the door. The story doesn\'t."', 'Ch 05 · The Story Continues · Post-launch', 'At the Table · A Dish, A Story · A Day in Saadiyat · guest moments', 'The full mix, plus guest reposts', 'A Dish, A Story · A Day in Saadiyat · Around Dhaba', 'Book · bring someone.', 'Reservations from social · engagement rate · guest content · reviews', 'Monthly shoot · guest consent policy · menu updates shared with INHAUS']
  ];
  window.PHASES = PH.map(p => ({ n: p[0], c: p[1] }));
  slide({ label: 'Rollout timeline', bg: CREAM, ink: BLUE, ghost: 'ROLLOUT', w: 105, html: `
    <div class="col-l narrow-l">${num('Rollout')}<h2 class="s-title l rv" style="--d:1">Five phases.<br><em>No fixed dates.</em></h2>
      <div class="flex-ctl ix rv" style="--d:2">
        <label for="weeks">Weeks from first post to opening: <b id="wk-v">8</b></label>
        <input id="weeks" type="range" min="4" max="12" step="1" value="8">
        <p id="wk-note" class="wk-note"></p>
      </div></div>
    <div class="tl ix rv" style="--d:2">
      <div class="tl-axis" id="tl-axis"></div>
      <div class="tl-bars" id="tl-bars"></div>
    </div>
    <div class="tabs ix phs rv" style="--d:3" data-group="ph">
      <div class="tab-panels">${PH.map((p, i) => `<div class="tab-panel ${i ? '' : 'is-on'}" data-t="${i}" style="--c:${p[1]}">
        <div class="ph-head"><b>Phase 0${i + 1} · ${p[0]}</b><span>${p[5]}</span><em>${p[4]}</em></div>
        <dl><dt>Objective</dt><dd>${p[3]}</dd><dt>Narrative focus</dt><dd>${p[2]}</dd><dt>Content priorities</dt><dd>${p[6]}</dd><dt>Formats</dt><dd>${p[7]}</dd>
          <dt>Example posts</dt><dd>${p[8]}</dd><dt>CTA</dt><dd>${p[9]}</dd><dt>KPIs</dt><dd class="kpi">${p[10]}</dd><dt>Dependencies</dt><dd class="dep">${p[11]}</dd></dl></div>`).join('')}</div>
    </div>` });

  // THE FIRST 30 DAYS — calendar data
  // [day, platform, title, format, series, pillar, language, source, note]
  // source: A existing archive · L light new capture (phone / voiceover) · N new shoot · D design only
  const REP = 'Repurposed from the Instagram reel: hook, on-screen text, caption and audio adapted. No separate production.';
  const C = [
    [1, 'ig', 'Meet Safi', 'Reel · 30–45s', 'The Road to Dhaba · Ep.00', 'Journey', 'EN', 'A', 'Archive footage with Safi\'s voiceover. Pinned to the grid. Dhaba is barely mentioned.'],
    [1, 'st', 'Follow Safi\'s road', 'Story set', '—', 'Journey', 'EN', 'D', 'Introduces Safi and the journal.'],
    [2, 'st', 'Guess the city', 'Quiz Story', 'From Safi\'s Archives', 'Journey', 'EN', 'A', 'Archive photo, four city options.'],
    [3, 'ig', 'Chapter 01: Where it started', 'Carousel', 'From Safi\'s Archives · No.01', 'Journey', 'EN', 'D', 'Kabul. The aged-paper chapter opener from the design direction.'],
    [4, 'st', 'A voice note from Safi', 'Story', 'Safi\'s Notes', 'Journey', 'EN', 'L', 'The voice-note design from the pitch.'],
    [5, 'ig', 'Safi, on paper', 'Single image', 'From Safi\'s Archives', 'Journey', 'EN', 'D', 'The typewritten profile card: born Kabul, based Copenhagen, next Abu Dhabi. Every fact confirmed with Safi first.'],
    [6, 'st', 'Ask Safi anything', 'Q&A Story', '—', 'People', 'EN / AR', 'D', 'Answers feed Safi\'s Notes.'],
    [7, 'ig', 'A Life Through Food: Old Delhi', 'Reel · 45s', 'A Life Through Food', 'Journey', 'EN', 'A', 'India footage with Safi\'s voiceover, subject to review.'],
    [8, 'ig', 'From Safi\'s Archives: Copenhagen', 'Carousel · 8', 'From Safi\'s Archives · No.02', 'Journey', 'EN', 'A', 'The city where Dhaba began.'],
    [9, 'st', 'Digging through the archive', 'Story', 'Safi\'s Notes', 'Journey', 'EN', 'L', 'Phone footage of boxes, books, photos.'],
    [10, 'ig', 'Meet Safi: in his words', 'Reel · 60s', 'The Road to Dhaba', 'Journey', 'EN', 'L', 'Short sit-down interview with archive cutaways. Personality first.'],
    [11, 'st', 'This or that', 'Poll Story', '—', 'People', 'EN / AR', 'D', 'Light, personal questions that Safi answers on camera.'],
    [12, 'ig', 'Dear guest,', 'Collage post', 'From Safi\'s Archives', 'Journey', 'EN / AR caption', 'D', 'Safi\'s letter: Dhaba introduced as his next chapter, in his own words.'],
    [13, 'st', 'Where should Safi go first?', 'Poll + question', '—', 'People', 'EN / AR', 'D', 'Fish market, spice trail or date farm: the audience chooses the order.'],
    [14, 'ig', 'The Road Leads Here', 'Carousel · map', 'The Road to Dhaba', 'Experience', 'EN / AR', 'D', 'Kabul → Copenhagen → India → Saadiyat Grove. Phase 01 hands over to Phase 02.'],
    [15, 'ig', 'The Fish Market', 'Reel · 75s', 'The Road to Dhaba · Ep.01', 'Ingredients', 'EN + AR subs', 'N', 'From Shoot 01, filmed by Day 12.'],
    [16, 'st', 'Name this fish', 'Quiz Story', '—', 'Ingredients', 'AR / EN', 'N', 'Arabic name first.'],
    [17, 'ig', 'What Safi found at the market', 'Carousel · 8', 'A City Through Its Ingredients · No.01', 'Ingredients', 'Bilingual', 'N', 'Stills from Shoot 01.'],
    [18, 'st', 'You chose. He went.', 'Story set', '—', 'People', 'EN / AR', 'N', 'Result of the Day 13 poll.'],
    [19, 'ig', 'Conversations Along the Way', 'Reel · 40s', 'Conversations Along the Way', 'People', 'AR + EN subs', 'N', 'A vendor in their own words, with consent.'],
    [20, 'st', 'Behind the market shoot', 'Story', 'Safi\'s Notes', 'Ingredients', 'EN', 'N', ''],
    [21, 'ig', 'The Spice Trail', 'Reel · 75s', 'The Road to Dhaba · Ep.02', 'Ingredients', 'EN + AR subs', 'N', 'From Shoot 01.'],
    [22, 'ig', 'A City Through Its Ingredients: spices', 'Carousel', 'A City Through Its Ingredients · No.02', 'Ingredients', 'Bilingual', 'N', ''],
    [23, 'st', 'Spice quiz', 'Quiz Story', '—', 'Ingredients', 'EN / AR', 'N', ''],
    [24, 'ig', 'A Visit to the Date Farm', 'Reel · 75s', 'The Road to Dhaba · Ep.03', 'Ingredients', 'EN + AR subs', 'N', 'From Shoot 01.'],
    [25, 'st', 'A voice note from Safi', 'Story', 'Safi\'s Notes', 'Journey', 'EN', 'L', 'What the date farm taught him.'],
    [26, 'ig', 'A City Through Its Ingredients: dates', 'Carousel', 'A City Through Its Ingredients · No.03', 'Ingredients', 'Bilingual', 'N', 'The localisation example in this deck.'],
    [27, 'st', 'Your favourite Saadiyat stop?', 'Question Story', '—', 'Experience', 'EN / AR', 'D', 'Answers feed A Day in Saadiyat later.'],
    [28, 'ig', 'Seeing Abu Dhabi Through Food', 'Reel · 60s', 'The Road to Dhaba', 'Ingredients', 'EN + AR subs', 'N', 'The explorer chapter, in one film.'],
    [29, 'st', 'Next: the fire', 'Story', 'Safi\'s Notes', 'Craft', 'EN', 'L', 'Teases Chapter 03.'],
    [30, 'ig', 'Fire, Food and Stories: first light', 'Reel · 30s', 'The Road to Dhaba · Ep.04', 'Craft', 'EN', 'N', 'First cut from the farm. Subject to Shoot 02 and production readiness.']
  ];
  // TikTok repurposes every Instagram reel (no separate production)
  C.filter(c => c[1] === 'ig' && c[3].startsWith('Reel')).forEach(c => C.push([c[0], 'tt', c[2], 'Repurposed IG reel', c[4], c[5], c[6], c[7], REP]));
  // Facebook mirrors every Instagram feed post
  C.filter(c => c[1] === 'ig').forEach(c => C.push([c[0], 'fb', c[2], c[3], c[4], c[5], c[6], c[7], 'Same post as Instagram, cross-published.']));
  C.sort((x, y) => x[0] - y[0] || ['ig', 'tt', 'fb', 'st'].indexOf(x[1]) - ['ig', 'tt', 'fb', 'st'].indexOf(y[1]));
  window.CAL = C;
  const feed = C.filter(c => c[1] !== 'st' && c[1] !== 'fb');
  const fromExisting = Math.round(feed.filter(c => 'ALD'.includes(c[7])).length / feed.length * 100);
  const wk = [1, 8, 15, 22, 29];
  slide({ label: 'The first 30 days', bg: BLUE, ink: CREAM, ghost: '30 DAYS', w: 168, anchors: '0,68', html: `
    <div class="col-l cal-l">${num('The first 30 days')}<h2 class="s-title m rv" style="--d:1">The first 30 days.<br><em>Safi first.</em></h2>
      <div class="cal-detail ix rv" id="cal-detail" style="--d:2"><p class="cd-hint">Select a day to see what goes out.</p></div></div>
    <div class="cal ix rv" style="--d:2">
      <div class="cal-filter" data-calf><button class="is-on" data-v="all">All</button><button data-v="ig">Instagram</button><button data-v="tt">TikTok</button><button data-v="fb">Facebook</button><button data-v="st">Stories</button></div>
      <div class="cal-grid">${Array.from({ length: 30 }, (_, i) => {
        const d = i + 1, items = C.filter(c => c[0] === d);
        const phase = d <= 14 ? 1 : d <= 28 ? 2 : 3;
        return `<button class="day ph${phase}${d === 1 ? ' is-on' : ''}" data-d="${d}"><b>${String(d).padStart(2, '0')}</b>${items.map(c => `<i class="dot pf-${c[1]} s-${c[7]}" data-p="${c[1]}" title="${c[2]}"></i>`).join('')}${d === 12 ? '<em class="flag">Shoot 01</em>' : ''}${d === 15 ? '<em class="flag">Phase 02 →</em>' : ''}${d === 29 ? '<em class="flag">Phase 03 →</em>' : ''}</button>`;
      }).join('')}</div>
      <div class="cal-legend"><span><i class="dot pf-ig"></i>Instagram feed</span><span><i class="dot pf-tt"></i>TikTok (repurposed reels)</span><span><i class="dot pf-fb"></i>Facebook</span><span><i class="dot pf-st"></i>Stories (plus daily supporting Stories)</span><span><i class="dot hollow"></i>Ringed = new shoot</span></div>
    </div>
    <div class="cal-side">
      <div class="cs rv" style="--d:3"><small>Cadence</small>
        <ul><li><b>3–4</b> Instagram feed posts a week</li><li><b>Daily</b> supporting Instagram Stories</li><li><b>Every</b> suitable Instagram reel, repurposed to TikTok</li><li><b>Same</b> posts on Facebook, mirroring the Instagram feed</li></ul></div>
      <div class="cs big rv" style="--d:4"><small>Runs on what already exists</small><b>${fromExisting}%</b><p>of posts in the first 30 days come from the archive, light phone capture or design. New footage is the markets and date farm, plus a first look at the farm.</p></div>
      <div class="cs rv" style="--d:5"><small>Assumes</small><p>Days 1–14: Meet Safi. Days 15–28: Safi Discovers Abu Dhabi. Days 29–30: The Making of Dhaba begins. Shoot 01 (markets and date farm) filmed by Day 12. TikTok only republishes Instagram reels. Planning recommendation, to be confirmed against the agreed scope.</p></div>
    </div>` });

  inter({ label: 'On the table', bg: YELLOW, w: 95, html: `
    ${pol('pf-plantain', 6, 8, 40, -2.5, 'From the cookbooks', .93)}
    ${pol('del-seekh', 36, 16, 30, 2, 'Old Delhi', 1.06)}
    ${pol('pf-fish-leaf', 66, 6, 42, -1, '', .97)}
    ${ill('elephant', 50, 28)}` });

  slide({ label: 'New production', bg: LIME, ink: TEAL, ghost: 'SHOOTS', w: 105, html: `
    <div class="col-l narrow-l">${num('New production')}<h2 class="s-title l rv" style="--d:1">The explorer chapter is filmed first.</h2>
      ${small('One video shoot a month, as scoped. Markets and the date farm come first so they land before opening. Every shoot is planned for Instagram; TikTok and Facebook reuse the same footage.')}</div>
    <div class="shoots">
      ${[['Shoot 01', 'Markets and the date farm', 'Chapter 02 · Pre-launch', 'Fish market, spice trail and date farm, with Safi, vendors and producers. One or two shoot days.', 'Filmed by Day 12', 'Location permits · consent forms · Arabic-speaking crew member'],
         ['Shoot 02', 'The farm near Dubai', 'Chapter 03 · Pre-launch', 'Tandoor, grill, produce, a shared table. Optional evening with guests.', 'End of month one', 'Recce · facilities confirmed · guest list and budget if the evening goes ahead'],
         ['Shoot 03', 'Saadiyat Grove', 'Chapter 04 · Launch', 'The restaurant, the team, approved dishes, the tandoors, the neighbourhood.', 'Phase 03 → 04', 'Fit-out ready · menu approved · team confirmed'],
         ['Shoot 04', 'Around Saadiyat', 'Chapter 05 · Post-launch', 'A Day in Saadiyat and Around Dhaba: the neighbourhood and guest moments.', 'After opening', 'Permission for any filming outside the restaurant · guest consent']]
        .map(([n, t, c, d, w, dep], i) => `<div class="sh rv" style="--d:${i + 2}"><small>${n} · ${c}</small><b>${t}</b><p>${d}</p><p class="when">${w}</p><p class="dep">${dep}</p></div>`).join('')}
    </div>` });

  /* =====================================================================
     PART FIVE — THE MACHINERY
     ===================================================================== */
  slide({ label: 'Part five: The foundations', bg: TEAL, ink: CREAM, ghost: 'PART FIVE', html: `
    <div class="t-part"><p class="s-num rv">Part five</p><h2 class="s-title xxl rv" style="--d:1">THE ENGINE</h2>
      <p class="s-body big rv" style="--d:2">Community, paid, measurement, workflow.</p></div>
    ${milestone(72, 'km 5', 'Under the bonnet', ORANGE)}` });

  slide({ label: 'Community management', bg: PINK, ink: BLUE, ghost: 'REPLY', w: 110, html: `
    <div class="col-l narrow-l">${num('Community')}<h2 class="s-title l rv" style="--d:1">Reply like a host, not a help desk.</h2>
      ${small('Arabic messages answered in Arabic by a native speaker. Collaborator and guest content reposted only with permission.')}</div>
    <div class="faq">
      <p class="cc-k rv" style="--d:2">The questions we expect before opening</p>
      ${[['When do you open?', 'Soon. Follow the road: you\'ll hear it here first.'], ['What\'s on the menu?', 'Safi is still cooking his way through it. The first dishes appear here when they\'re ready.'], ['Where will you be?', 'Saadiyat Grove, Abu Dhabi.'], ['Can I book?', 'Not yet. Turn on notifications and you won\'t miss it.'], ['Are you the Dhaba from Copenhagen?', 'Same roots, new road. Safi brings the story to Abu Dhabi.']]
        .map(([q, a], i) => `<div class="qa rv" style="--d:${i + 3}"><b>${q}</b><p>${a}</p></div>`).join('')}
      <div class="cm-rules rv" style="--d:8"><span>Same business day · within hours during launch</span><span>Escalation path for complaints and press</span><span>Weekly digest of questions → content ideas</span></div>
    </div>` });

  slide({ label: 'Paid media', bg: BLUE, ink: CREAM, ghost: 'PAID', w: 105, html: `
    <div class="col-l narrow-l">${num('Paid media')}<h2 class="s-title l rv" style="--d:1">Paid follows the same road.</h2>
      ${small('As agreed in the pitch: Introduce → Carry → Reveal → Book. Media budget separate from agency fees.')}</div>
    <ol class="steps paid">
      ${[['Introduce', 'Phase 01', 'Meet Safi and the strongest archive films. Reach and video views in Abu Dhabi.'], ['Carry', 'Phase 02–03', 'The market episodes and the Dear guest letter. Retarget people who watched Safi.'], ['Reveal', 'Phase 03–04', 'Saadiyat Grove, the restaurant, the food, the date.'], ['Book', 'Phase 04–05', 'Reservations and retargeting, with Saadiyat as the destination.']]
        .map(([t, p, d], i) => `<li class="rv" style="--d:${i + 2}"><b>${t}</b><small>${p}</small>${d}</li>`).join('')}
    </ol>
    <div class="paid-aud rv" style="--d:6">
      <div><small>Audiences</small><p>Emiratis and residents across Abu Dhabi · a radius around Saadiyat and the cultural district · tourists and visitors travelling in Abu Dhabi · people interested in museums, art and culture · Al Ain and regional audiences (test, subject to media planning) · engagers and video viewers</p></div>
      <div><small>Language test</small><p>Same creative, English vs Arabic copy and subtitles. Compare cost per ThruPlay, click-through and engagement, then shift budget to the winner per audience.</p></div>
    </div>` });

  slide({ label: 'Measurement', bg: CREAM, ink: BLUE, ghost: 'MEASURE', w: 110, html: `
    <div class="col-l narrow-l">${num('Measurement')}<h2 class="s-title l rv" style="--d:1">Baseline first.<br><em>Targets second.</em></h2>
      ${small('With no existing audience there is nothing honest to benchmark against. We record Day 1, set targets with Dhaba at Day 30, and review monthly.')}</div>
    <div class="meas">
      <div class="ms rv" style="--d:2"><small>Before opening</small><b>Do people know Safi, and want more?</b>
        <ul><li>Follows and profile visits driven by Safi content</li><li>Comments, DMs and replies about Safi</li><li>Reach and video views in Abu Dhabi</li><li>Average watch time and completion</li><li>Saves and shares</li><li>English vs Arabic performance</li><li>Website clicks and notification turn-ons</li></ul></div>
      <div class="ms rv" style="--d:3"><small>After opening</small><b>Do they want to go to his restaurant?</b>
        <ul><li>Reservations and enquiries from social</li><li>Direction requests to Saadiyat Grove and website sessions</li><li>Engagement rate</li><li>Guest content and mentions</li><li>Reviews</li><li>Paid efficiency: cost per reservation</li></ul></div>
      <div class="ms rv" style="--d:4"><small>Reporting rhythm</small><b>Weekly in launch. Monthly always.</b>
        <ul><li>Weekly snapshot during Phases 03–04</li><li>Monthly report and review meeting</li><li>Each report ends with what we'll change</li></ul></div>
    </div>` });

  slide({ label: 'Workflow', bg: GOLD, ink: BLUE, ghost: 'APPROVE', w: 110, html: `
    <div class="col-l narrow-l">${num('Workflow')}<h2 class="s-title l rv" style="--d:1">How a month gets made.</h2>
      ${small('Safi approves anything in his own voice. Every person on camera signs a consent form. Music is licensed for each platform.')}</div>
    <ol class="flow">
      ${[['Plan', 'Monthly calendar and shoot plan shared with Dhaba'], ['Approve', 'Calendar sign-off within 3 working days'], ['Shoot', 'One video shoot a month, planned for Instagram, plus phone capture'], ['Edit', 'Instagram masters, then light TikTok and Facebook adaptations; subtitles; Arabic review'], ['Review', 'Final posts shared a week ahead'], ['Publish', 'Scheduled, monitored, replied to'], ['Report', 'Monthly results and next month\'s changes']]
        .map(([t, d], i) => `<li class="rv" style="--d:${i + 2}"><b>${String(i + 1).padStart(2, '0')}</b><strong>${t}</strong><span>${d}</span></li>`).join('')}
    </ol>` });

  slide({ label: 'What we need from Dhaba', bg: CREAM, ink: BLUE, ghost: 'NEXT', w: 105, html: `
    <div class="col-l narrow-l">${num('Next steps')}<h2 class="s-title l rv" style="--d:1">To start the engine.</h2></div>
    <div class="needs ix">
      <div class="nd rv" style="--d:2"><small>From Dhaba</small><ul>
        <li>Access to the full archive (Drive and WeTransfer links)</li><li>Brand guidelines files and logo package</li><li>The original positioning presentation</li><li>Preferred spelling of Safi's name for public use</li><li>Opening date, as soon as it is firm</li><li>Booking system and web developer contact</li><li>Introductions for the fish market, spice trail, date farm and the farm near Dubai</li></ul></div>
      <div class="nd rv" style="--d:3"><small>From INHAUS</small><ol>
        <li><b>This week</b> · Accounts, Business portfolio, handles</li><li><b>Week 1</b> · Archive audit and asset tagging</li><li><b>Week 1</b> · Meet Safi recording session</li><li><b>Week 1–2</b> · Shoot 01: markets and date farm</li><li><b>Week 2</b> · First 30 days for approval</li><li><b>Go</b> · Phase 01 begins</li></ol></div>
    </div>` });

  slide({ label: 'The road starts now', bg: BLUE, ink: CREAM, ghost: '', w: 100, html: `
    <div class="t-pause"><h2 class="s-title xl rv">The road starts now.</h2>
      <p class="s-body big center rv" style="--d:2">By the time the doors open, Abu Dhabi already knows Safi, and wants a seat at his table.</p></div>` });

  // CLOSE (finale scrubbed by road.js)
  slide({ label: 'Close', bg: BLUE, ink: CREAM, ghost: '', w: 100, end: true, html: `` });

  // ---------- build ----------
  const track = document.getElementById('track');
  let k = 0;
  P.forEach(p => { if (p.kind === 'slide') { p.n = String(k++).padStart(2, '0'); p.html = p.html.replaceAll('%%N%%', p.n); } });
  window.DECK_LAST = P.filter(p => p.kind === 'slide').length - 1;
  track.innerHTML = P.map(p =>
    `<section class="stop ${p.kind}${p.end ? ' end' : ''}" data-kind="${p.kind}" data-n="${p.n || ''}" data-label="${p.label || ''}" data-bg="${p.bg}" data-ink="${p.ink}" data-ghost="${p.ghost || ''}" data-w="${p.w}"${p.anchors ? ` data-anchors="${p.anchors}"` : ''}>${p.html}</section>`
  ).join('');
})();
