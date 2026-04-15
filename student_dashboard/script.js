/* ══ PAGE TITLES ══ */
const titles = {
  dashboard:     ['Dashboard',     'Home'],
  quran:         ['My Quran',      'Al-Kahf · Verse 42'],
  lessons:       ['Lessons',       'Your subjects & schedule'],
  assignments:   ['Assignments',   '3 pending'],
  tasks:         ['Tasks',         'This week'],
  messages:      ['Messages',      '5 unread'],
  announcements: ['Announcements', '3 new'],
  teachers:      ['My Teachers',   '4 assigned'],
  progress:      ['Progress Report','Term 2 · Apr–Jul 2025'],
  profile:       ['Profile',       'Ahmad Bilal'],
  settings:      ['Settings',      'Preferences']
};

/* ══ NAVIGATE ══ */
function navigate(el, forcePage) {
  const page = forcePage || (el && el.dataset.page);
  if (!page) return;

  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // show target
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // update sidebar active
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });

  // update bottom nav active
  document.querySelectorAll('.bn-item').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });

  // update topbar
  if (titles[page]) {
    document.getElementById('page-title').textContent = titles[page][0];
    document.getElementById('page-date').textContent = titles[page][1];
  }

  // scroll view to top
  document.getElementById('view-area').scrollTop = 0;

  closeSb();
  closeDd();
}

/* ══ SIDEBAR ══ */
function openSb() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sb-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSb() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sb-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══ DROPDOWN ══ */
function toggleDd() { document.getElementById('dd').classList.toggle('open'); document.getElementById('dd-ov').classList.toggle('open'); }
function closeDd()   { document.getElementById('dd').classList.remove('open'); document.getElementById('dd-ov').classList.remove('open'); }

/* ══ LOGOUT ══ */
function doLogout() { if(confirm('Log out of Dlight Institute?')) window.location.href = '../index.html'; }

/* ══ TASK TOGGLE ══ */
function toggleTask(el) {
  const row  = el.closest('.task-row');
  const name = row.querySelector('.task-name');
  el.classList.toggle('done');
  const done = el.classList.contains('done');
  el.textContent = done ? '✓' : '';
  name.classList.toggle('done-text', done);
  row.classList.toggle('done-row', done);
  row.dataset.status = done ? 'done' : 'pending';
}

/* ══ TASK FILTER ══ */
function filterTasks(type, btn) {
  document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.task-row').forEach(row => {
    const show =
      type === 'all'     ? true :
      type === 'pending' ? row.dataset.status === 'pending' :
      type === 'done'    ? row.dataset.status === 'done' :
      type === 'high'    ? row.dataset.pri === 'high' : true;
    row.style.display = show ? '' : 'none';
  });
}

/* ══ SETTINGS TOGGLES ══ */
document.querySelectorAll('.toggle').forEach(t => {
  t.addEventListener('click', () => t.classList.toggle('on'));
});

/* ══ GREETING ══ */
(function() {
  const h = new Date().getHours();
  const g =
    h >= 5  && h < 12 ? 'Ṣabāḥ al-khayr, Ahmad! 🌅' :
    h >= 12 && h < 17 ? 'Masāʾ al-khayr, Ahmad! ☀️' :
    h >= 17 && h < 21 ? 'Good Evening, Ahmad! 🌇' :
                        'As-Salāmu ʿAlaykum, Ahmad! 🌙';
  document.getElementById('greet-h').textContent = g;
})();

/* ══ DATE ══ */
(function() {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date();
  const str = days[d.getDay()] + ', ' + d.toLocaleDateString('en-GB',{day:'numeric',month:'long'});
  document.getElementById('page-date').textContent = str;
  const sch = document.getElementById('sch-date');
  if(sch) sch.textContent = days[d.getDay()];
})();

/* ══ JUZ GRID GENERATION ══ */
(function() {
  const juzGrid = document.getElementById('juz-grid');
  if (juzGrid) {
    for(let i=1;i<=30;i++){
      const cls = i<15?'done':i===15?'current':'';
      const div = document.createElement('div');
      div.className = `juz-cell ${cls}`;
      div.innerHTML = `<div class="jn">${i}</div><div class="jl">${cls==='done'?'✓':cls==='current'?'Now':''}</div>`;
      juzGrid.appendChild(div);
    }
  }
})();

/* ══ PROGRESS RING ANIMATE ══ */
window.addEventListener('load', () => {
  document.querySelectorAll('.r-fill').forEach(f => {
    const c = 2 * Math.PI * 45;
    f.style.strokeDasharray = c;
    f.style.strokeDashoffset = c * 0.25;
  });
});

/* ══ SWIPE TO CLOSE SIDEBAR ══ */
let tx = 0;
document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, {passive:true});
document.addEventListener('touchend',   e => {
  if (e.changedTouches[0].clientX - tx < -50 && document.getElementById('sidebar').classList.contains('open')) closeSb();
}, {passive:true});
