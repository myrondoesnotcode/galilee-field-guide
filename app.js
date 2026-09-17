/* ============================================================
   Galilee field guide — view engine
   No dependencies. Everything renders from CONTENT (content.js).
   ============================================================ */
(function () {
  'use strict';

  var C = window.CONTENT;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- helpers ---------- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  /* Trip-day clock. Israel is UTC+3 on 17 Sep 2026 (IDT).
     We work in Israel wall-clock minutes so the app is correct
     whether the phone is set to Israel time or not. */
  var TRIP = { y: 2026, m: 9, d: 17, offsetMin: 180 };

  function israelNow() {
    var now = new Date();
    var utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utcMs + TRIP.offsetMin * 60000);
  }
  function minutesOf(hhmm) {
    var p = hhmm.split(':');
    return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
  }
  function isTripDay(d) {
    return d.getFullYear() === TRIP.y && (d.getMonth() + 1) === TRIP.m && d.getDate() === TRIP.d;
  }
  function fmtDur(mins) {
    if (mins < 1) return 'now';
    if (mins < 60) return mins + ' min';
    var h = Math.floor(mins / 60), m = mins % 60;
    return h + 'h' + (m ? ' ' + m + 'm' : '');
  }

  /* ---------- day state ---------- */
  function dayState() {
    var now = israelNow();
    var mins = now.getHours() * 60 + now.getMinutes();
    var onDay = isTripDay(now);
    var stops = C.stops;
    var st = { now: now, mins: mins, onDay: onDay, phase: 'before', index: -1, next: -1, pct: 0 };

    if (!onDay) {
      st.phase = (now < new Date(TRIP.y, TRIP.m - 1, TRIP.d)) ? 'before-day' : 'after-day';
      return st;
    }
    var depart = minutesOf(C.day.departMins);
    var homeM = minutesOf(C.day.homeMins);

    if (mins < depart) { st.phase = 'pre'; st.next = 0; return st; }
    if (mins >= homeM) { st.phase = 'done'; return st; }

    for (var i = 0; i < stops.length; i++) {
      var s = minutesOf(stops[i].time), e = minutesOf(stops[i].end);
      if (mins >= s && mins < e) {
        st.phase = 'at'; st.index = i; st.next = i + 1;
        st.pct = Math.round(((mins - s) / (e - s)) * 100);
        return st;
      }
      if (mins < s) { st.phase = 'travel'; st.next = i; st.index = i - 1; return st; }
    }
    st.phase = 'returning';
    return st;
  }

  /* ---------- NOW BAR ---------- */
  function renderNowBar() {
    var st = dayState();
    var now = st.now;
    $('#nb-clock').textContent = pad(now.getHours()) + ':' + pad(now.getMinutes());

    var txt;
    if (!st.onDay) {
      txt = st.phase === 'before-day' ? C.day.gregShort + ' · trip day' : 'Trip complete · browse anytime';
      $('#nowbar').querySelector('.pulse').style.opacity = '.3';
    } else if (st.phase === 'pre') {
      txt = 'Departure ' + C.day.departMins + ' · in ' + fmtDur(minutesOf(C.day.departMins) - st.mins);
    } else if (st.phase === 'at') {
      var s = C.stops[st.index];
      txt = 'At ' + s.name + ' · ' + fmtDur(minutesOf(s.end) - st.mins) + ' left';
    } else if (st.phase === 'travel') {
      var n = C.stops[st.next];
      txt = 'En route · ' + n.name + ' in ' + fmtDur(minutesOf(n.time) - st.mins);
    } else if (st.phase === 'returning') {
      txt = 'Heading home · arrive ~' + C.day.homeMins;
    } else {
      txt = 'Home · ' + C.day.hebEn;
    }
    $('#nb-main').textContent = txt;
  }

  /* ---------- LIVE CARD ---------- */
  function renderLive() {
    var st = dayState();
    var mount = $('#live-mount');
    mount.innerHTML = '';
    var card = el('div', 'live');
    var s, label, name, who, foot;

    if (st.phase === 'at') {
      s = C.stops[st.index];
      label = 'You are here';
      name = s.name; who = s.who;
      foot = '<b>' + esc(s.time) + '–' + esc(s.end) + '</b> · ' + fmtDur(minutesOf(s.end) - st.mins) + ' until departure';
      card.style.setProperty('--acc', s.accent);
    } else if (st.phase === 'travel' || st.phase === 'pre') {
      s = C.stops[st.next] || C.stops[0];
      label = st.phase === 'pre' ? 'First stop' : 'Next stop';
      name = s.name; who = s.who;
      foot = '<b>Arrive ' + esc(s.time) + '</b> · ' + fmtDur(minutesOf(s.time) - st.mins) + ' from now';
      card.style.setProperty('--acc', s.accent);
    } else if (st.phase === 'returning' || st.phase === 'done') {
      s = C.stops[C.stops.length - 1];
      label = st.phase === 'done' ? 'The day is complete' : 'Heading home';
      name = st.phase === 'done' ? 'Tzeischem l\'shalom' : 'On the road south';
      who = st.phase === 'done'
        ? 'You stood today at graves spanning sixteen centuries. Yom Kippur is in four days.'
        : 'Roughly two hours back to Tel Aviv.';
      foot = '<b>Home ~' + esc(C.day.homeMins) + '</b>';
      card.style.setProperty('--acc', 'var(--tiberias)');
    } else {
      s = C.stops[0];
      label = 'Trip day';
      name = C.day.gregShort;
      who = C.day.hebEn + ' · the live schedule wakes up on the day. Everything else is readable now.';
      foot = '<b>Departure ' + esc(C.day.departMins) + '</b> · ' + esc(C.day.departFrom);
      card.style.setProperty('--acc', 'var(--flame)');
    }

    card.innerHTML =
      '<div class="live-top"><span class="pulse" aria-hidden="true"></span><span class="eyebrow">' + esc(label) + '</span></div>' +
      '<div class="live-body">' +
        '<div class="live-name">' + esc(name) + '</div>' +
        '<p class="live-who">' + esc(who) + '</p>' +
      '</div>' +
      (st.phase === 'at' ? '<div class="live-meter"><i style="width:' + st.pct + '%"></i></div>' : '') +
      '<div class="live-foot">' + foot + '</div>';

    if (st.phase === 'at' || st.phase === 'travel' || st.phase === 'pre') {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function () { location.hash = '#/stop/' + s.id; });
    }
    mount.appendChild(card);
  }

  /* ---------- STOP CARDS ---------- */
  var OT = ['\u05D0', '\u05D1', '\u05D2', '\u05D3', '\u05D4', '\u05D5'];

  function stopCard(s, i, st) {
    var a = el('a', 'stopcard');
    a.href = '#/stop/' + s.id;
    a.setAttribute('data-ot', OT[i] || '');
    a.style.setProperty('--acc', s.accent);
    if (st && st.onDay) {
      if (st.phase === 'at' && st.index === i) a.className += ' now';
      else if (minutesOf(s.end) < st.mins) a.className += ' done';
    }
    a.innerHTML =
      '<div class="sc-head">' +
        '<span class="sc-time">' + esc(s.time) + '–' + esc(s.end) + '</span>' +
        '<span class="sc-cent">' + esc(s.century) + '</span>' +
      '</div>' +
      '<div class="sc-name">' + esc(s.name) + '</div>' +
      '<div class="sc-he">' + esc(s.he) + '</div>' +
      '<p class="sc-who">' + esc(s.who) + '</p>' +
      '<div class="sc-go">Read →</div>';
    return a;
  }

  function renderRoute(mountSel, withDrives) {
    var st = dayState();
    var m = $(mountSel);
    if (!m) return;
    m.innerHTML = '';
    C.stops.forEach(function (s, i) {
      m.appendChild(stopCard(s, i, st));
      if (withDrives && C.drives[i]) m.appendChild(el('div', 'drive', esc(C.drives[i])));
    });
  }

  /* ---------- BLOCK RENDERER ---------- */
  function blocks(list) {
    return list.map(function (b) {
      if (typeof b === 'string') return '<p>' + b + '</p>';
      switch (b.t) {
        case 'h3': return '<h3>' + esc(b.x) + '</h3>';
        case 'p':  return '<p>' + b.x + '</p>';
        case 'ul': return '<ul>' + b.x.map(function (li) { return '<li>' + li + '</li>'; }).join('') + '</ul>';
        case 'quote':
          return '<blockquote class="source-quote">' +
            (b.he ? '<div class="he">' + esc(b.he) + '</div>' : '') +
            (b.en ? '<div class="en">' + b.en + '</div>' : '') +
            '<cite>' + (b.url ? '<a href="' + esc(b.url) + '" target="_blank" rel="noopener">' + esc(b.cite) + ' ↗</a>' : esc(b.cite)) + '</cite>' +
            '</blockquote>';
        case 'wow':
          return '<div class="wow"><span class="eyebrow">' + esc(b.label || 'Worth knowing') + '</span>' +
            b.x.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>';
        case 'tradition':
          return '<div class="tradition"><span class="eyebrow">' + esc(b.label || 'Tradition, not documented history') + '</span>' + b.x + '</div>';
        default: return '';
      }
    }).join('');
  }

  /* ---------- STOP DETAIL ---------- */
  function renderStop(id) {
    var s = null;
    for (var i = 0; i < C.stops.length; i++) if (C.stops[i].id === id) s = C.stops[i];
    var m = $('#stop-mount');
    if (!s) { m.innerHTML = '<section><h1>Stop not found</h1><p><a class="back" href="#/route">← Back to the route</a></p></section>'; return; }

    var h = '';
    h += '<div class="stophero" style="--acc:' + s.accent + '">' +
      '<a class="back" href="#/route" style="margin:0 0 18px">← The route</a>' +
      '<div class="eyebrow" style="margin-bottom:10px">Stop ' + (C.stops.indexOf(s) + 1) + ' of ' + C.stops.length + ' · ' + esc(s.time) + '–' + esc(s.end) + '</div>' +
      '<h1>' + esc(s.title || s.name) + '</h1>' +
      '<div class="he">' + esc(s.he) + '</div>' +
      '<div class="meta">' +
        '<span class="chip acc">' + esc(s.century) + '</span>' +
        (s.chips || []).map(function (c) { return '<span class="chip">' + esc(c) + '</span>'; }).join('') +
      '</div>' +
      '</div>';

    h += '<div style="--acc:' + s.accent + '">';
    h += '<div class="brief"><span class="eyebrow">Sixty seconds, standing here</span>' +
      s.brief.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>';

    if (s.waze || s.gmaps) {
      h += '<div class="actions">';
      if (s.waze) h += '<a class="act" href="' + esc(s.waze) + '" target="_blank" rel="noopener"><span>Navigate</span><b>Waze</b></a>';
      if (s.gmaps) h += '<a class="act" href="' + esc(s.gmaps) + '" target="_blank" rel="noopener"><span>Navigate</span><b>Maps</b></a>';
      h += '<a class="act" href="#/tefillos"><span>At the kever</span><b>Tefillos</b></a>';
      h += '<a class="act" href="#/field"><span>Practical</span><b>Field notes</b></a>';
      h += '</div>';
    }

    if ((s.sections || []).length > 1) {
      h += '<nav class="secindex"><span class="eyebrow">What is on this page</span><ol>' +
        s.sections.map(function (sec, i) {
          return '<li><a href="#/stop/' + esc(s.id) + '" data-sec="sec-' + i + '">' + esc(sec.h) + '</a></li>';
        }).join('') + '</ol></nav>';
    }

    h += '<div class="prose">';
    (s.sections || []).forEach(function (sec, i) {
      h += '<h2 id="sec-' + i + '">' + esc(sec.h) + '</h2>' + blocks(sec.b);
    });
    h += '</div>';

    (s.more || []).forEach(function (d) {
      h += '<details class="more"><summary>' + esc(d.s) + '</summary><div class="inner prose">' + blocks(d.b) + '</div></details>';
    });

    if (s.onsite) {
      h += '<div class="fieldcard" style="margin:24px 0"><h3>On the ground</h3>' +
        '<ul>' + s.onsite.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>';
    }

    var idx = C.stops.indexOf(s);
    h += '<div class="actions" style="grid-template-columns:1fr 1fr;margin-top:26px">';
    h += idx > 0 ? '<a class="act" href="#/stop/' + C.stops[idx - 1].id + '"><span>Previous</span><b>' + esc(C.stops[idx - 1].name) + '</b></a>' : '<a class="act" href="#/route"><span>Back</span><b>The route</b></a>';
    h += idx < C.stops.length - 1 ? '<a class="act" href="#/stop/' + C.stops[idx + 1].id + '"><span>Next</span><b>' + esc(C.stops[idx + 1].name) + '</b></a>' : '<a class="act" href="#/sources"><span>Check our work</span><b>Sources</b></a>';
    h += '</div></div>';

    m.innerHTML = h;

    glossify(m);

    $$('.secindex a', m).forEach(function (a) {
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        var t = document.getElementById(a.dataset.sec);
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    window.scrollTo(0, 0);
  }

  /* ---------- SAGES + SPINE ---------- */
  function renderSages() {
    var m = $('#sage-mount');
    m.innerHTML = C.sages.map(function (s) {
      return '<a class="sage" href="#/stop/' + esc(s.stop) + '" style="--acc:' + s.accent + '">' +
        '<div class="row"><b>' + esc(s.name) + '</b><span class="yrs">' + esc(s.years) + '</span></div>' +
        '<div class="he">' + esc(s.he) + '</div>' +
        '<p>' + s.line + '</p></a>';
    }).join('');

    var sp = $('#spine-mount');
    sp.innerHTML = C.spine.map(function (e) {
      return '<div class="era' + (e.stop ? ' stop' : '') + '"' + (e.accent ? ' style="--acc:' + e.accent + '"' : '') + '>' +
        '<span class="yr">' + esc(e.year) + '</span>' +
        '<h4>' + esc(e.h) + '</h4>' +
        '<p>' + e.p + '</p>' +
        (e.stop ? '<span class="tag">Stop ' + esc(e.stop) + '</span>' : '') +
        '</div>';
    }).join('');
  }

  /* ---------- TEFILLOS ---------- */
  function renderTefillos() {
    var h = '<section><span class="eyebrow">At the kever</span>' +
      '<h1 style="font-size:clamp(2rem,9vw,2.9rem);margin-top:10px">What to say</h1>' +
      '<p class="lede" style="margin-top:14px">' + C.tefillosIntro + '</p></section>';
    h += '<section style="padding-top:0">' + C.tefillos.map(function (t) {
      return '<div class="tefilla"><div class="tefilla-h"><h3>' + esc(t.h) + '</h3><p>' + t.sub + '</p></div>' +
        '<div class="tefilla-b">' +
        (t.he ? '<div class="he">' + esc(t.he) + '</div>' : '') +
        (t.tl ? '<div class="tl">' + esc(t.tl) + '</div>' : '') +
        (t.en ? '<div class="en">' + t.en + '</div>' : '') +
        '</div></div>';
    }).join('') + '</section>';
    $('#tefilla-mount').innerHTML = h;
    glossify($('#tefilla-mount'));
  }

  /* ---------- FIELD ---------- */
  function renderField() {
    var h = '<section><span class="eyebrow">Practical</span>' +
      '<h1 style="font-size:clamp(2rem,9vw,2.9rem);margin-top:10px">Field notes</h1>' +
      '<p class="lede" style="margin-top:14px">' + C.fieldIntro + '</p>';
    h += (C.alerts || []).map(function (a) {
      return '<div class="alert"><span class="eyebrow">' + esc(a.label) + '</span>' +
        a.body.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>';
    }).join('');
    h += '</section><section style="padding-top:0"><div class="fieldgrid">' +
      C.field.map(function (f) {
        return '<div class="fieldcard"><h3>' + esc(f.h) + '</h3>' +
          (f.p ? '<p>' + f.p + '</p>' : '') +
          (f.ul ? '<ul>' + f.ul.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' : '') +
          '</div>';
      }).join('') + '</div></section>';
    h += '<section style="padding-top:8px"><a class="act" href="#/sources" style="display:block"><span>Every claim, traced</span><b>Sources &amp; how we checked →</b></a></section>';
    $('#field-mount').innerHTML = h;
    glossify($('#field-mount'));
  }

  /* ---------- SOURCES ---------- */
  function renderSources() {
    var h = '<section><a class="back" href="#/field" style="margin:0 0 18px">← Field notes</a>' +
      '<span class="eyebrow">Check our work</span>' +
      '<h1 style="font-size:clamp(1.9rem,8vw,2.6rem);margin-top:10px">Sources</h1>' +
      '<p class="lede" style="margin-top:14px">' + C.sourcesIntro + '</p></section>';
    h += '<section style="padding-top:0"><div class="srclist">' + C.sources.map(function (s) {
      return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener"><b>' + esc(s.t) + '</b><span>' + esc(s.url) + '</span></a>';
    }).join('') + '</div></section>';
    h += '<section class="foot">' + C.colophon.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</section>';
    $('#sources-mount').innerHTML = h;
  }

  /* ---------- ZMANIM ---------- */
  function renderZmanim() {
    $('#zman-table').innerHTML = C.zmanim.map(function (z) {
      return '<tr' + (z.hl ? ' class="hl"' : '') + '><td>' + esc(z.l) + '</td><td>' + esc(z.t) + '</td></tr>';
    }).join('');
  }

  /* ---------- ALERTS ON NOW ---------- */
  function renderNowAlerts() {
    $('#now-alerts').innerHTML = (C.alerts || []).filter(function (a) { return a.pin; }).map(function (a) {
      return '<div class="alert" style="margin-top:20px"><span class="eyebrow">' + esc(a.label) + '</span>' +
        a.body.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>';
    }).join('');
  }


  /* ---------- ELEVATION PROFILE ----------
     The day climbs to 1,204 m and drops to 200 m below sea level.
     Nobody sees that curve unless you draw it. */
  function renderElevation() {
    var mount = $('#elev-mount');
    if (!mount || !C.elevation) return;
    var pts = C.elevation.points;
    var W = 660, H = 190, padX = 46, padY = 26;
    var hi = 1320, lo = -320;
    var x = function (i) { return padX + (i * (W - padX * 2)) / (pts.length - 1); };
    var y = function (m) { return padY + ((hi - m) / (hi - lo)) * (H - padY * 2); };
    var sea = y(0);

    var line = pts.map(function (p, i) { return (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(p.m).toFixed(1); }).join(' ');
    var area = line + ' L' + x(pts.length - 1).toFixed(1) + ' ' + sea.toFixed(1) + ' L' + x(0).toFixed(1) + ' ' + sea.toFixed(1) + ' Z';

    var dots = pts.map(function (p, i) {
      var cy = y(p.m);
      return '<circle class="ev-dot" cx="' + x(i).toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="4.5"' +
             ' style="animation-delay:' + (0.75 + i * 0.13) + 's"/>' +
             '<text class="ev-place" x="' + x(i).toFixed(1) + '" y="' + (H - 6) + '">' + esc(p.at) + '</text>' +
             (p.label ? '<text class="ev-m" x="' + x(i).toFixed(1) + '" y="' + (cy - 12).toFixed(1) + '">' + esc(p.label) + '</text>' : '');
    }).join('');

    mount.innerHTML =
      '<svg viewBox="0 0 ' + W + ' ' + H + '" class="elev" role="img" aria-label="Elevation across the day: sea level at Tel Aviv, 1,204 metres at Meron, 937 at Tzfat, 200 metres below sea level at Teveria.">' +
        '<line class="ev-sea" x1="' + padX + '" y1="' + sea.toFixed(1) + '" x2="' + (W - padX) + '" y2="' + sea.toFixed(1) + '"/>' +
        '<text class="ev-sealabel" x="' + (padX - 6) + '" y="' + (sea - 5).toFixed(1) + '">sea level</text>' +
        '<path class="ev-area" d="' + area + '"/>' +
        '<path class="ev-line" d="' + line + '"/>' +
        dots +
      '</svg>' +
      '<p class="ev-note">' + esc(C.elevation.note) + '</p>';
  }

  /* ---------- CENTURY SCRUBBER ----------
     Drag through time. The ~900 empty years between Rabbi Meir and the
     Rambam are the point of the whole trip, and you can feel them here. */
  function renderScrubber() {
    var mount = $('#scrub-mount');
    if (!mount) return;
    mount.innerHTML =
      '<div class="scrub">' +
        '<div class="scrub-head">' +
          '<span class="scrub-year" id="scrub-year">—</span>' +
          '<span class="scrub-live" id="scrub-live"></span>' +
        '</div>' +
        '<input type="range" id="scrub" min="1" max="2026" value="1" step="1" aria-label="Drag through the centuries">' +
        '<div class="scrub-ticks" id="scrub-ticks"></div>' +
        '<ul class="scrub-list" id="scrub-list"></ul>' +
      '</div>';

    var ticks = C.sages.map(function (s) {
      return '<i style="left:' + ((s.from / 2026) * 100).toFixed(2) + '%;background:' + s.accent + '"></i>';
    }).join('');
    $('#scrub-ticks').innerHTML = ticks;

    var list = $('#scrub-list');
    list.innerHTML = C.sages.map(function (s, i) {
      return '<li data-i="' + i + '"><b>' + esc(s.name) + '</b><span>' + esc(s.years) + '</span></li>';
    }).join('');

    function paint(yr) {
      $('#scrub-year').textContent = yr < 1 ? '—' : yr + ' CE';
      var alive = 0;
      $$('#scrub-list li').forEach(function (li) {
        var s = C.sages[+li.dataset.i];
        var on = yr >= s.from && yr <= s.to;
        li.classList.toggle('on', on);
        li.style.setProperty('--acc', s.accent);
        if (on) alive++;
      });
      var l = $('#scrub-live');
      if (alive) {
        l.textContent = alive + (alive === 1 ? ' of the ten alive' : ' of the ten alive');
      } else {
        var earliest = Math.min.apply(null, C.sages.map(function (s) { return s.from; }));
        var latest = Math.max.apply(null, C.sages.map(function (s) { return s.to; }));
        if (yr < earliest) l.textContent = 'none of them born yet';
        else if (yr > latest) l.textContent = 'all ten are gone';
        else l.textContent = 'the gap \u2014 nobody on your route is alive';
      }
      l.classList.toggle('empty', !alive);
    }

    var input = $('#scrub');
    input.addEventListener('input', function () { paint(+input.value); });
    paint(1);
  }

  /* ---------- ONE MORE THING ----------
     40 marginal notes across the site. Pull one at random.
     Built for somebody on a bus who wants something to read out loud. */
  var POOL = null;
  function buildPool() {
    POOL = [];
    C.stops.forEach(function (st) {
      function scan(bl) {
        (bl || []).forEach(function (b) {
          if (b && b.t === 'wow') POOL.push({ label: b.label, x: b.x, stop: st });
        });
      }
      (st.sections || []).forEach(function (sec) { scan(sec.b); });
      (st.more || []).forEach(function (d) { scan(d.b); });
    });
  }
  var lastPick = -1;
  function showOneMore() {
    if (!POOL) buildPool();
    if (!POOL.length) return;
    var i = Math.floor(Math.random() * POOL.length);
    if (POOL.length > 1) { while (i === lastPick) i = Math.floor(Math.random() * POOL.length); }
    lastPick = i;
    var w = POOL[i];
    var d = $('#omt');
    d.style.setProperty('--acc', w.stop.accent);
    $('#omt-body').innerHTML =
      '<span class="eyebrow">' + esc(w.stop.name) + ' · ' + esc(w.label || 'Worth knowing') + '</span>' +
      w.x.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
      '<a class="omt-go" href="#/stop/' + esc(w.stop.id) + '">Read the whole stop →</a>';
    glossify($('#omt-body'));
    d.hidden = false;
    d.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }
  function hideOneMore() {
    $('#omt').hidden = true;
    document.body.style.overflow = '';
  }
  function initOneMore() {
    $('#omt-btn').addEventListener('click', showOneMore);
    $('#omt-again').addEventListener('click', showOneMore);
    $('#omt-close').addEventListener('click', hideOneMore);
    $('#omt').addEventListener('click', function (e) { if (e.target.id === 'omt') hideOneMore(); });
    $('#omt-body').addEventListener('click', function (e) {
      if (e.target.classList.contains('omt-go')) hideOneMore();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !$('#omt').hidden) hideOneMore();
    });
  }


  /* ---------- GLOSSARY ----------
     Every hard word becomes tappable, first time it appears in a view.
     Nobody should be left holding a question they can't answer on the bus. */
  var GTERMS = null;
  function reEsc(t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function glossify(root) {
    if (!C.glossary || !root) return;
    if (!GTERMS) {
      GTERMS = Object.keys(C.glossary).sort(function (a, b) { return b.length - a.length; });
    }
    var used = {};
    var SKIP = { A: 1, BUTTON: 1, CITE: 1, SCRIPT: 1, STYLE: 1, H1: 1, H2: 1, H3: 1 };
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        while (p && p !== root) {
          if (SKIP[p.tagName]) return NodeFilter.FILTER_REJECT;
          if (p.classList && (p.classList.contains('hebrew') || p.classList.contains('he') ||
                              p.classList.contains('eyebrow') || p.classList.contains('gl'))) {
            return NodeFilter.FILTER_REJECT;
          }
          p = p.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (n) {
      for (var i = 0; i < GTERMS.length; i++) {
        var t = GTERMS[i];
        if (used[t]) continue;
        var re = new RegExp("(^|[^A-Za-z’'\\-])(" + reEsc(t) + ")(?![A-Za-z’'\\-])", 'i');
        var m = n.nodeValue.match(re);
        if (!m) continue;
        var at = m.index + m[1].length;
        var rest = n.splitText(at);
        rest.nodeValue = rest.nodeValue.slice(m[2].length);
        var b = document.createElement('button');
        b.className = 'gl'; b.type = 'button';
        b.setAttribute('data-t', t);
        b.setAttribute('aria-label', m[2] + ' — tap for a definition');
        b.textContent = m[2];
        rest.parentNode.insertBefore(b, rest);
        used[t] = 1;
        return;
      }
    });
  }

  function showGloss(term, word) {
    var def = C.glossary[term];
    if (!def) return;
    $('#gl-word').textContent = word || term;
    $('#gl-def').textContent = def;
    $('#glx').hidden = false;
  }
  function initGloss() {
    document.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button.gl') : null;
      if (b) { e.preventDefault(); showGloss(b.getAttribute('data-t'), b.textContent); return; }
      if (e.target.id === 'glx' || e.target.id === 'gl-close') $('#glx').hidden = true;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !$('#glx').hidden) $('#glx').hidden = true;
    });
  }

  /* ---------- ROUTER ---------- */
  var VIEWS = ['now', 'route', 'stop', 'sages', 'tefillos', 'field', 'sources'];
  function route() {
    var hash = location.hash.replace(/^#\/?/, '') || 'now';
    var parts = hash.split('/');
    var v = parts[0];
    if (VIEWS.indexOf(v) === -1) v = 'now';

    if (v === 'stop') renderStop(parts[1]);

    $$('.view').forEach(function (n) { n.classList.remove('on'); });
    var target = $('#v-' + v);
    if (target) target.classList.add('on');

    var navFor = (v === 'stop') ? 'route' : (v === 'sources' ? 'field' : v);
    $$('#nav a').forEach(function (a) { a.classList.toggle('on', a.dataset.v === navFor); });

    if (v !== 'stop') window.scrollTo(0, 0);
  }

  /* ---------- NIGHT MODE (for the drive home) ---------- */
  function initNight() {
    var saved;
    try { saved = localStorage.getItem('night'); } catch (e) { saved = null; }
    if (saved === 'on') document.documentElement.setAttribute('data-night', 'on');
    var meta = document.querySelector('meta[name=theme-color]');
    if (saved === 'on' && meta) meta.setAttribute('content', '#12131A');
    $('#sunbtn').addEventListener('click', function () {
      var on = document.documentElement.getAttribute('data-night') === 'on';
      document.documentElement.setAttribute('data-night', on ? 'off' : 'on');
      if (meta) meta.setAttribute('content', on ? '#E9E4D6' : '#12131A');
      try { localStorage.setItem('night', on ? 'off' : 'on'); } catch (e) {}
    });
  }

  /* ---------- BOOT ---------- */
  function boot() {
    $('#h-greg').textContent = C.day.greg;
    var cs = $('#c-sages'); if (cs) cs.textContent = String(C.sages.length);
    $('#h-heb').textContent = C.day.heb;
    renderRoute('#route-mini', false);
    renderRoute('#route-full', true);
    renderSages();
    renderTefillos();
    renderField();
    renderSources();
    renderZmanim();
    renderElevation();
    renderScrubber();
    initOneMore();
    initGloss();
    glossify($('#now-alerts'));
    glossify($('#v-sages'));
    renderNowAlerts();
    renderLive();
    renderNowBar();
    initNight();
    route();

    window.addEventListener('hashchange', route);
    setInterval(function () {
      renderNowBar(); renderLive();
      renderRoute('#route-mini', false); renderRoute('#route-full', true);
    }, 30000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
