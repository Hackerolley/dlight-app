/* ═══ DATA ═══ */
const TEACHER = {name:'Sh. Abdullah Yusuf',initials:'AY',subject:'Quran Hifz & Tajweed',email:'a.yusuf@dlight.edu'};

const STUDENTS = [
  {id:'S001',name:'Ahmad Bilal',level:'Ibtidaiy',juz:14,hifz:75,tajweed:70,arabic:60,streak:22,status:'Active',color:'#0d6e4f'},
  {id:'S002',name:'Fatima Hassan',level:'Mutawassit',juz:20,hifz:82,tajweed:85,arabic:78,streak:18,status:'Active',color:'#9a6d10'},
  {id:'S003',name:'Ibrahim Yusuf',level:'Ibtidaiy',juz:11,hifz:68,tajweed:65,arabic:55,streak:15,status:'Active',color:'#1a6ea8'},
  {id:'S004',name:'Aisha Rahman',level:'Rawdah',juz:6,hifz:82,tajweed:80,arabic:70,streak:12,status:'Active',color:'#6b4fb0'},
  {id:'S005',name:'Omar Khalid',level:'Ibtidaiy',juz:8,hifz:42,tajweed:40,arabic:35,streak:2,status:'At Risk',color:'#e07b2a'},
  {id:'S006',name:'Zainab Ahmed',level:'Ibtidaiy',juz:9,hifz:55,tajweed:50,arabic:45,streak:6,status:'Active',color:'#6b4226'},
  {id:'S007',name:'Khalid Al-Amin',level:'Mutawassit',juz:22,hifz:79,tajweed:75,arabic:72,streak:9,status:'Active',color:'#0d6e4f'},
  {id:'S008',name:'Maryam Idris',level:'Rawdah',juz:4,hifz:88,tajweed:85,arabic:80,streak:20,status:'Active',color:'#6b4fb0'},
  {id:'S009',name:'Yusuf Ibrahim',level:'Rawdah',juz:2,hifz:60,tajweed:58,arabic:50,streak:5,status:'Active',color:'#1a6ea8'},
  {id:'S010',name:'Hana Al-Rashid',level:'Ibtidaiy',juz:9,hifz:38,tajweed:35,arabic:42,streak:0,status:'At Risk',color:'#9a3a3a'},
  {id:'S011',name:'Ali Hassan',level:'Mutawassit',juz:18,hifz:71,tajweed:68,arabic:65,streak:11,status:'Active',color:'#0d6e4f'},
  {id:'S012',name:'Nadia Mahmoud',level:'Ibtidaiy',juz:7,hifz:65,tajweed:62,arabic:55,streak:8,status:'Active',color:'#9a6d10'},
];

/* class sessions: compute dynamic times relative to now */
function makeClasses() {
  const now = new Date();
  const today = new Date(now);
  function ts(h,m){ const d=new Date(today); d.setHours(h,m,0,0); return d; }
  return [
    {id:'C1',name:'Quran Hifz — Group A',subject:'Quran Hifz',day:'Monday',start:ts(8,0),end:ts(8,45),link:'https://zoom.us/j/111',students:6,color:'#0d6e4f',room:'Room A'},
    {id:'C2',name:'Tajweed — All Levels',subject:'Tajweed',day:'Monday',start:ts(10,0),end:ts(10,45),link:'https://zoom.us/j/222',students:14,color:'#1a6ea8',room:'Room B'},
    {id:'C3',name:'Quran Hifz — Group B',subject:'Quran Hifz',day:'Monday',start:ts(14,0),end:ts(14,45),link:'https://zoom.us/j/333',students:8,color:'#0d6e4f',room:'Room A'},
    {id:'C4',name:'Tajweed — Advanced',subject:'Tajweed',day:'Tuesday',start:ts(9,0),end:ts(9,45),link:'https://zoom.us/j/444',students:5,color:'#1a6ea8',room:'Room B'},
    {id:'C5',name:'Quran Revision — Rawdah',subject:'Quran Hifz',day:'Wednesday',start:ts(8,30),end:ts(9,15),link:'https://zoom.us/j/555',students:4,color:'#6b4fb0',room:'Room C'},
    {id:'C6',name:'Tajweed — Beginners',subject:'Tajweed',day:'Thursday',start:ts(11,0),end:ts(11,45),link:'https://zoom.us/j/666',students:6,color:'#1a6ea8',room:'Room B'},
    {id:'C7',name:'Hifz Review Session',subject:'Quran Hifz',day:'Friday',start:ts(9,0),end:ts(9,45),link:'https://zoom.us/j/777',students:14,color:'#0d6e4f',room:'Room A'},
  ];
}
const CLASSES = makeClasses();

const ASSIGNMENTS_DATA = [
  {title:'Memorise Al-Kahf Verses 43–55',subject:'Quran Hifz',due:'2025-04-15',assignedTo:'All Students',submitted:8,total:14,status:'Pending',color:'ci-g'},
  {title:'Tajweed Worksheet — Madd Rules',subject:'Tajweed',due:'2025-04-16',assignedTo:'All Students',submitted:11,total:14,status:'Pending',color:'ci-b'},
  {title:'Recitation Recording — Al-Kahf 1–10',subject:'Tajweed',due:'2025-04-12',assignedTo:'Mutawassit Group',submitted:3,total:6,status:'Overdue',color:'ci-b'},
  {title:'Al-Mulk Complete Memorisation',subject:'Quran Hifz',due:'2025-04-05',assignedTo:'All Students',submitted:14,total:14,status:'Completed',color:'ci-g'},
];

const MESSAGES_DATA = [
  {from:'Ahmad Bilal',role:'Student',msg:"Assalamu alaikum Ustadh! I have a question about verse 42 pronunciation.",time:'10:32',unread:true,color:'#0d6e4f',init:'AB'},
  {from:'Admin',role:'Admin',msg:'Please submit the monthly progress report by Friday.',time:'09:15',unread:true,color:'#c9a84c',init:'AD'},
  {from:'Omar Khalid',role:'Student',msg:"Ustadh I'm sorry for missing class. I was unwell.",time:'Yesterday',unread:true,color:'#e07b2a',init:'OK'},
  {from:'Fatima Hassan',role:'Student',msg:'I have completed the Madd Rules worksheet. Please check.',time:'Yesterday',unread:false,color:'#9a6d10',init:'FH'},
  {from:'Maryam Idris',role:'Student',msg:'JazakAllah khair for yesterday\'s class! Very beneficial.',time:'2 days ago',unread:false,color:'#6b4fb0',init:'MI'},
];

const NOTES_DATA = [
  {title:"Al-Kahf Session 5 — Verses 38–45",subject:"Quran Hifz",date:"Apr 14, 2025",note:"Covered verses 38–45 with full tajweed application. Ahmad excelled. Omar needs extra practice on Madd Muttasil. Assigned verses 43–55 for next session.",tag:"b-grn"},
  {title:"Tajweed — Madd Muttasil Review",subject:"Tajweed",date:"Apr 12, 2025",note:"Reviewed all Madd rules. Maryam and Khalid performed well. Group needs more practice on Madd Jaiz Munfasil. Will re-visit next Monday.",tag:"b-sky"},
  {title:"Group A — Monthly Assessment",subject:"Quran Hifz",date:"Apr 10, 2025",note:"Monthly assessment completed. Average score 76%. Fatima top performer at 92%. Omar requires additional support. Submitted report to admin.",tag:"b-gld"},
  {title:"Beginners Tajweed — Session 3",subject:"Tajweed",date:"Apr 9, 2025",note:"Introduced Noon Sakinah rules. Good engagement overall. Need to slow pace for Yusuf and Hana. Prepared new worksheet for next session.",tag:"b-sky"},
];

const ANN_DATA = [
  {title:'End-of-Term Assessments',msg:'Hifz and Tajweed evaluations will be held on May 10–12. Please prepare your students accordingly.',time:'2 hours ago',from:'Admin',color:'#c94040',priority:'b-red'},
  {title:'New Arabiyyah Resources',msg:'Extra worksheets for Chapter 4 are now in the library. Coordinate with Sh. Muhammad.',time:'Yesterday',from:'Admin',color:'#c9a84c',priority:'b-gld'},
  {title:'Eid Holiday Notice',msg:'Classes suspended from Ramadan 29 – Shawwal 3. Regular schedule resumes Shawwal 4. Eid Mubarak!',time:'3 days ago',from:'Admin',color:'#1eab7a',priority:'b-grn'},
  {title:'Teacher Training Webinar',msg:'Mandatory online CPD session on April 20 at 6 PM GMT. Please confirm your attendance.',time:'4 days ago',from:'Admin',color:'#1a6ea8',priority:'b-sky'},
];

const RESOURCES_DATA = [
  {title:'Quran Hifz Curriculum Guide',type:'PDF',size:'2.4 MB',ico:'📄',color:'ci-r'},
  {title:'Tajweed Rules Chart (Hafs)',type:'PDF',size:'1.1 MB',ico:'🎙️',color:'ci-b'},
  {title:'Al-Kahf Audio Recitation',type:'MP3',size:'8.3 MB',ico:'🔊',color:'ci-g'},
  {title:'Madd Rules Worksheet',type:'DOCX',size:'340 KB',ico:'📝',color:'ci-o'},
  {title:'Noon Sakinah Exercise Sheet',type:'PDF',size:'520 KB',ico:'📄',color:'ci-b'},
  {title:'Monthly Progress Template',type:'XLSX',size:'190 KB',ico:'📊',color:'ci-g'},
];

/* ═══ PAGE TITLES ═══ */
const TITLES = {
  dashboard:    ['Dashboard','Teacher Portal'],
  myclasses:    ['My Classes','Scheduled sessions'],
  students:     ['My Students','14 assigned to you'],
  progress:     ['Progress Tracking','Monitor student journeys'],
  attendance:   ['Attendance','Class attendance records'],
  assignments:  ['Assignments','Manage student work'],
  gradebook:    ['Grade Book','Scores & evaluations'],
  notes:        ['Lesson Notes','Teaching logs'],
  resources:    ['Resources','Teaching materials'],
  messages:     ['Messages','7 unread'],
  announcements:['Announcements','From school admin'],
  profile:      ['My Profile','Sh. Abdullah Yusuf'],
  settings:     ['Settings','Preferences'],
};

/* ═══ NAVIGATION ═══ */
function go(el, forcePage) {
  const page = forcePage || (el && el.dataset.page);
  if (!page) return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const t = document.getElementById('page-' + page);
  if (t) t.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));
  document.querySelectorAll('.bn-item').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  if (TITLES[page]) {
    document.getElementById('pg-title').textContent = TITLES[page][0];
    document.getElementById('pg-sub').textContent = TITLES[page][1];
  }
  document.getElementById('va').scrollTop = 0;
  closeSb(); closeDd();
}

/* ═══ SIDEBAR ═══ */
function openSb() { document.getElementById('sidebar').classList.add('open'); document.getElementById('sb-bd').classList.add('open'); document.body.style.overflow='hidden'; }
function closeSb() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sb-bd').classList.remove('open'); document.body.style.overflow=''; }
function toggleDd() { document.getElementById('dd').classList.toggle('open'); document.getElementById('dd-ov').classList.toggle('open'); }
function closeDd() { document.getElementById('dd').classList.remove('open'); document.getElementById('dd-ov').classList.remove('open'); }
function openM(id) { document.getElementById(id).classList.add('open'); }
function closeM(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-bg').forEach(m => m.addEventListener('click', e => { if(e.target===m) m.classList.remove('open'); }));
function doLogout() { if(confirm('Log out of Teacher Portal?')) window.location.href = '../login/index.html'; }

/* ═══ COUNTDOWN ENGINE ═══ */
let countdownInterval = null;

function getClassStatus(cls) {
  const now = new Date();
  if (now >= cls.start && now <= cls.end) return 'live';
  if (now < cls.start) return 'upcoming';
  return 'ended';
}

function msUntil(target) { return Math.max(0, target - new Date()); }

function formatCountdown(ms) {
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return { h, m, s };
}

function buildCountdownHTML(cls, containerId, showJoin=true) {
  const status = getClassStatus(cls);
  const statusLabel = status === 'live' ? '<span class="cd-status-badge cd-live">🔴 LIVE NOW</span>' :
                      status === 'upcoming' ? '<span class="cd-status-badge cd-soon">⏳ Starting Soon</span>' :
                      '<span class="cd-status-badge cd-ended">✓ Ended</span>';
  const joinBtn = status === 'live'
    ? `<button class="cd-join-btn cd-join-live" onclick="window.open('${cls.link}','_blank')">🚀 Join Live Class</button>`
    : status === 'upcoming'
    ? `<button class="cd-join-btn cd-join-soon" onclick="window.open('${cls.link}','_blank')">📎 Copy Link</button>`
    : '';

  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = `
    <div class="countdown-card">
      <div class="cd-header">
        <div class="cd-class-info">
          <h3>${cls.name}</h3>
          <p>${cls.subject} · ${cls.students} students · ${cls.start.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})} – ${cls.end.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</p>
        </div>
        ${statusLabel}
      </div>
      <div class="cd-timer" id="timer-${containerId}">
        <div class="cd-block"><div class="cd-num" id="cd-h-${containerId}">00</div><div class="cd-unit">Hours</div></div>
        <div class="cd-sep">:</div>
        <div class="cd-block"><div class="cd-num" id="cd-m-${containerId}">00</div><div class="cd-unit">Mins</div></div>
        <div class="cd-sep">:</div>
        <div class="cd-block"><div class="cd-num" id="cd-s-${containerId}">00</div><div class="cd-unit">Secs</div></div>
      </div>
      ${showJoin ? `<div class="cd-actions">${joinBtn}<button class="cd-join-btn cd-join-soon" onclick="go(null,'myclasses')">📅 View Schedule</button></div>` : `<div class="cd-actions">${joinBtn}</div>`}
      <div class="cd-next-label">${status==='live'?'Class is in session!':status==='upcoming'?'Countdown to class start':'Session has ended'}</div>
    </div>`;

  function tick() {
    const now = new Date();
    let target, ms;
    const s = getClassStatus(cls);
    if (s === 'upcoming') { target = cls.start; ms = msUntil(target); }
    else if (s === 'live') { target = cls.end; ms = msUntil(target); }
    else { ms = 0; }
    const { h, m, s: sec } = formatCountdown(ms);
    const hEl = document.getElementById(`cd-h-${containerId}`);
    const mEl = document.getElementById(`cd-m-${containerId}`);
    const sEl = document.getElementById(`cd-s-${containerId}`);
    if (hEl) hEl.textContent = String(h).padStart(2,'0');
    if (mEl) mEl.textContent = String(m).padStart(2,'0');
    if (sEl) sEl.textContent = String(sec).padStart(2,'0');
  }
  tick();
  return tick;
}

function startCountdowns() {
  if (countdownInterval) clearInterval(countdownInterval);
  // Find next/current class for today
  const today = new Date();
  const todayName = today.toLocaleDateString('en-US', {weekday:'long'});
  const todaysClasses = CLASSES.filter(c => c.day === todayName);
  const active = todaysClasses.find(c => getClassStatus(c) === 'live') ||
                 todaysClasses.find(c => getClassStatus(c) === 'upcoming');

  // Render dash countdown
  const dw = document.getElementById('dash-countdown-wrap');
  if (dw && active) {
    buildCountdownHTML(active, 'dash-countdown-wrap', true);
  } else if (dw) {
    dw.innerHTML = `<div class="countdown-card" style="margin-bottom:16px;"><div class="cd-class-info"><h3>No More Classes Today</h3><p>All sessions completed · Have a wonderful evening!</p></div><div style="margin-top:14px;"><button class="cd-join-btn cd-join-soon" onclick="go(null,'myclasses')">📅 View Full Schedule</button></div></div>`;
  }

  // Render classes page countdown
  const cw = document.getElementById('classes-countdown-wrap');
  if (cw && active) {
    buildCountdownHTML(active, 'classes-countdown-wrap', true);
  } else if (cw) {
    cw.innerHTML = '';
  }

  // Tick all countdown clocks
  countdownInterval = setInterval(() => {
    ['dash-countdown-wrap','classes-countdown-wrap'].forEach(id => {
      if (!active) return;
      const s = getClassStatus(active);
      let ms = s === 'upcoming' ? msUntil(active.start) :
               s === 'live'     ? msUntil(active.end) : 0;
      const { h, m, s: sec } = formatCountdown(ms);
      ['h','m','s'].forEach((unit,i) => {
        const el = document.getElementById(`cd-${unit}-${id}`);
        if (el) el.textContent = String([h,m,sec][i]).padStart(2,'0');
      });
    });
  }, 1000);
}

/* ═══ UPCOMING CLASSES (dash) ═══ */
function renderDashUpcoming() {
  const el = document.getElementById('dash-upcoming');
  if (!el) return;
  const today = new Date().toLocaleDateString('en-US',{weekday:'long'});
  const list = CLASSES.filter(c=>c.day===today);
  if (!list.length) { el.innerHTML = '<div style="text-align:center;padding:16px;color:var(--muted);font-size:13px;">No more classes today</div>'; return; }
  el.innerHTML = list.map(c => {
    const st = getClassStatus(c);
    const badge = st==='live'?'<span class="badge b-red">Live</span>':st==='upcoming'?'<span class="badge b-sky">Upcoming</span>':'<span class="badge b-grn">Done</span>';
    return `<div class="upcoming-class" onclick="go(null,'myclasses')">
      <div class="uc-time-col"><div class="uc-time">${c.start.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</div><div class="uc-period">–${c.end.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</div></div>
      <div class="uc-dot" style="background:${c.color};"></div>
      <div class="uc-info"><h4>${c.name}</h4><p>${c.students} students</p></div>
      ${badge}
    </div>`;
  }).join('');
}

/* ═══ RENDER ALL CLASSES LIST ═══ */
function renderAllClasses() {
  const el = document.getElementById('all-classes-list');
  if (!el) return;
  el.innerHTML = CLASSES.map(c => {
    const st = getClassStatus(c);
    const badge = st==='live'?'<span class="badge b-red">🔴 Live Now</span>':st==='upcoming'?'<span class="badge b-sky">Upcoming</span>':'<span class="badge b-grn">Scheduled</span>';
    return `<div style="background:var(--card);border-radius:13px;border:1.5px solid var(--border);padding:16px;margin-bottom:12px;box-shadow:var(--sh);transition:border .18s;" onmouseover="this.style.borderColor='var(--em-lt)'" onmouseout="this.style.borderColor='var(--border)'">
      <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:12px;">
        <div style="width:44px;height:44px;border-radius:10px;background:${c.color};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🕌</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:3px;">
            <span style="font-size:14px;font-weight:700;color:var(--ink);">${c.name}</span>${badge}
          </div>
          <div style="font-size:12px;color:var(--muted);">${c.day} · ${c.start.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})} – ${c.end.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})} · ${c.students} students · ${c.room}</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-primary btn-sm" onclick="window.open('${c.link}','_blank')">🚀 Join Class</button>
        <button class="btn btn-outline btn-sm" onclick="openM('modal-take-att')">✅ Take Attendance</button>
        <button class="btn btn-outline btn-sm" onclick="openM('modal-add-note')">📝 Add Note</button>
        <button class="btn btn-outline btn-sm">✏️ Edit</button>
      </div>
    </div>`;
  }).join('');
}

/* ═══ WEEKLY TIMETABLE ═══ */
function renderWeekly() {
  const el = document.getElementById('weekly-tbl');
  if (!el) return;
  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
  const times = ['08:00','09:00','10:00','11:00','14:00'];
  el.innerHTML = times.map(t => {
    const cells = days.map(d => {
      const cls = CLASSES.find(c => c.day===d && c.start.toTimeString().startsWith(t.replace(':',':')));
      return cls ? `<td style="background:rgba(13,110,79,0.05);border-radius:6px;"><div style="font-size:12.5px;font-weight:600;color:var(--em);">${cls.name}</div><div style="font-size:11px;color:var(--muted);margin-top:2px;">${cls.students} students</div></td>` : `<td style="color:var(--muted);font-size:12px;">—</td>`;
    }).join('');
    return `<tr><td style="font-weight:600;color:var(--muted);font-size:11.5px;min-width:52px;">${t}</td>${cells}</tr>`;
  }).join('');
}

/* ═══ RENDER STUDENTS TABLE ═══ */
function renderStudents(list) {
  const tb = document.getElementById('stu-tbody');
  if (!tb) return;
  const surahs = ['Al-Fatihah','Al-Baqarah','Al-Kahf','An-Nisa','Maryam','Al-Mulk','Yaseen'];
  tb.innerHTML = (list||STUDENTS).map(s => `
    <tr>
      <td><div class="td-av"><div class="st-av" style="background:${s.color};">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div><div class="td-name">${s.name}</div><div style="font-size:11px;color:var(--muted);">${s.id}</div></div></div></td>
      <td><span class="badge ${s.level==='Rawdah'?'b-grn':s.level==='Mutawassit'?'b-pur':'b-sky'}">${s.level}</span></td>
      <td><div style="display:flex;align-items:center;gap:7px;"><div class="mini-bar"><div class="mini-fill mf-g" style="width:${(s.juz/30)*100}%"></div></div><span style="font-size:12px;color:var(--muted);">${s.juz}/30</span></div></td>
      <td><strong style="color:${s.hifz>=70?'var(--em)':s.hifz>=50?'#9a6d10':'var(--red)'}">${s.hifz}%</strong></td>
      <td><strong style="color:${s.tajweed>=70?'var(--em)':s.tajweed>=50?'#9a6d10':'var(--red)'}">${s.tajweed}%</strong></td>
      <td>🔥 ${s.streak}d</td>
      <td><span class="badge ${s.status==='Active'?'b-grn':s.status==='At Risk'?'b-red':'b-gray'}">${s.status}</span></td>
      <td><div class="td-actions"><button class="btn btn-outline btn-xs" onclick="viewStudent('${s.id}')">Profile</button><button class="btn btn-primary btn-xs" onclick="openM('modal-add-note')">Note</button><button class="btn btn-sky btn-xs" onclick="go(null,'messages')">💬</button></div></td>
    </tr>`).join('');
}

function filterStu(val='') {
  const q = val.toLowerCase();
  renderStudents(STUDENTS.filter(s => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q)));
}

/* ═══ STUDENT PROFILE MODAL ═══ */
function viewStudent(id) {
  const s = STUDENTS.find(x=>x.id===id); if(!s) return;
  document.getElementById('sd-modal-title').textContent = s.name;
  document.getElementById('sd-modal-body').innerHTML = `
    <div style="background:linear-gradient(120deg,var(--em),#0e8a60);border-radius:12px;padding:18px;margin-bottom:16px;display:flex;align-items:center;gap:14px;">
      <div style="width:56px;height:56px;border-radius:50%;background:${s.color};display:flex;align-items:center;justify-content:center;font-size:18px;color:#fff;font-weight:700;border:3px solid var(--gold);flex-shrink:0;">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
      <div><div style="font-size:17px;font-weight:700;color:#fff;">${s.name}</div><div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:3px;">${s.id} · ${s.level}</div>
        <div style="display:flex;gap:6px;margin-top:7px;"><span style="background:rgba(255,255,255,0.15);border-radius:20px;padding:3px 10px;font-size:11px;color:#fff;">🔥 ${s.streak}d streak</span><span class="badge ${s.status==='Active'?'b-grn':s.status==='At Risk'?'b-red':'b-gray'}">${s.status}</span></div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:16px;">
      <div style="background:var(--cream);border-radius:10px;padding:12px;border:1px solid var(--border);text-align:center;"><div style="font-size:20px;font-weight:700;color:var(--em);">${s.juz}/30</div><div style="font-size:11px;color:var(--muted);">Juz Done</div></div>
      <div style="background:var(--cream);border-radius:10px;padding:12px;border:1px solid var(--border);text-align:center;"><div style="font-size:20px;font-weight:700;color:var(--em);">${s.hifz}%</div><div style="font-size:11px;color:var(--muted);">Hifz Progress</div></div>
      <div style="background:var(--cream);border-radius:10px;padding:12px;border:1px solid var(--border);text-align:center;"><div style="font-size:20px;font-weight:700;color:var(--em);">${s.tajweed}%</div><div style="font-size:11px;color:var(--muted);">Tajweed</div></div>
    </div>
    <div style="margin-bottom:8px;"><div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span style="font-size:12px;font-weight:600;color:var(--ink2);">📖 Quran Hifz</span><span style="font-size:12px;color:var(--muted);">${s.hifz}%</span></div><div style="height:7px;background:var(--parch);border-radius:20px;overflow:hidden;"><div style="height:100%;border-radius:20px;background:linear-gradient(90deg,var(--em),var(--em-lt));width:${s.hifz}%"></div></div></div>
    <div style="margin-bottom:8px;"><div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span style="font-size:12px;font-weight:600;color:var(--ink2);">🎙️ Tajweed</span><span style="font-size:12px;color:var(--muted);">${s.tajweed}%</span></div><div style="height:7px;background:var(--parch);border-radius:20px;overflow:hidden;"><div style="height:100%;border-radius:20px;background:linear-gradient(90deg,#155e99,var(--sky));width:${s.tajweed}%"></div></div></div>
    <div style="margin-bottom:8px;"><div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span style="font-size:12px;font-weight:600;color:var(--ink2);">✍️ Arabiyyah</span><span style="font-size:12px;color:var(--muted);">${s.arabic}%</span></div><div style="height:7px;background:var(--parch);border-radius:20px;overflow:hidden;"><div style="height:100%;border-radius:20px;background:linear-gradient(90deg,#b8843a,var(--gold));width:${s.arabic}%"></div></div></div>`;
  openM('modal-student-detail');
}

/* ═══ PROGRESS TABLE ═══ */
function renderProgress() {
  const tb = document.getElementById('prog-tbody');
  if (!tb) return;
  const surahs = ['Al-Kahf','Al-Mulk','Yaseen','Maryam','An-Nisa','Al-Baqarah','Al-Fatihah'];
  tb.innerHTML = STUDENTS.map(s => `
    <tr>
      <td><div class="td-av"><div class="st-av" style="background:${s.color};font-size:10px;">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div class="td-name">${s.name}</div></div></td>
      <td style="font-size:12px;">${surahs[Math.floor(Math.random()*surahs.length)]}</td>
      <td><div style="display:flex;align-items:center;gap:6px;"><div class="mini-bar"><div class="mini-fill mf-g" style="width:${(s.juz/30)*100}%"></div></div><span style="font-size:11px;">${s.juz}/30</span></div></td>
      <td><strong style="color:${s.hifz>=70?'var(--em)':s.hifz>=50?'#9a6d10':'var(--red)'};">${s.hifz}%</strong></td>
      <td><strong style="color:${s.tajweed>=70?'var(--em)':s.tajweed>=50?'#9a6d10':'var(--red)'};">${s.tajweed}%</strong></td>
      <td><strong style="color:${s.arabic>=70?'var(--em)':s.arabic>=50?'#9a6d10':'var(--red)'};">${s.arabic}%</strong></td>
      <td>🔥 ${s.streak}d</td>
      <td><span class="badge ${s.status==='Active'?'b-grn':s.status==='At Risk'?'b-red':'b-gray'}">${s.status}</span></td>
      <td><button class="btn btn-outline btn-xs" onclick="viewStudent('${s.id}')">View</button></td>
    </tr>`).join('');
}

/* ═══ ATTENDANCE TABLE ═══ */
function renderAttendance() {
  const tb = document.getElementById('att-tbody');
  if (!tb) return;
  const rows = STUDENTS.map(s => {
    const days = [1,2,3,4,5].map(() => Math.random()>0.15 ? '✅' : '❌');
    const pct = Math.round((days.filter(d=>d==='✅').length/5)*100);
    return `<tr><td><div class="td-av"><div class="st-av" style="background:${s.color};font-size:10px;">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div class="td-name">${s.name}</div></div></td>${days.map(d=>`<td style="text-align:center;font-size:15px;">${d}</td>`).join('')}<td><strong style="color:${pct>=80?'var(--em)':pct>=60?'#9a6d10':'var(--red)'};">${pct}%</strong></td><td><span class="badge ${pct>=80?'b-grn':pct>=60?'b-gld':'b-red'}">${pct>=80?'Good':pct>=60?'Fair':'Absent'}</span></td></tr>`;
  }).join('');
  tb.innerHTML = rows;

  // Attendance modal body
  const amb = document.getElementById('att-modal-body');
  if (amb) {
    amb.innerHTML = `<div style="margin-bottom:12px;font-size:13px;color:var(--muted);">Mark attendance for today's class</div>` +
      STUDENTS.map(s => `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);">
        <div class="st-av" style="background:${s.color};font-size:11px;">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
        <div style="flex:1;font-size:13px;font-weight:500;">${s.name}</div>
        <div style="display:flex;gap:6px;">
          <button onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('active-att'));this.classList.add('active-att')" style="padding:5px 10px;border-radius:8px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:12px;font-weight:600;color:var(--em);transition:all .15s;" class="active-att">✅ Present</button>
          <button onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('active-att'));this.classList.add('active-att')" style="padding:5px 10px;border-radius:8px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:12px;font-weight:600;color:var(--red);transition:all .15s;">❌ Absent</button>
        </div></div>`).join('');
  }
}

/* ═══ ASSIGNMENTS ═══ */
function renderAssignments() {
  const el = document.getElementById('asgn-list');
  if (!el) return;
  el.innerHTML = ASSIGNMENTS_DATA.map(a => `
    <div class="asgn-card">
      <div class="asgn-top">
        <div class="asgn-ico ${a.color}" style="font-size:18px;">${a.color==='ci-g'?'📖':'🎙️'}</div>
        <div class="asgn-info"><h4>${a.title}</h4><p>${a.subject} · Assigned to: ${a.assignedTo} · Due: ${a.due}</p></div>
        <div style="margin-left:auto;flex-shrink:0;"><span class="badge ${a.status==='Completed'?'b-grn':a.status==='Overdue'?'b-red':'b-gld'}">${a.status}</span></div>
      </div>
      <div class="asgn-bar-wrap">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span style="font-size:12px;color:var(--muted);">Submissions</span><span style="font-size:12px;font-weight:600;color:var(--ink2);">${a.submitted}/${a.total}</span></div>
        <div class="asgn-prog-bar"><div class="asgn-prog-fill ${a.status==='Completed'?'fg':'fb'}" style="width:${(a.submitted/a.total)*100}%"></div></div>
      </div>
      <div class="asgn-foot">
        <div style="display:flex;gap:8px;">
          <button class="btn btn-primary btn-sm">📋 View Submissions</button>
          <button class="btn btn-outline btn-sm">⭐ Grade All</button>
          <button class="btn btn-outline btn-sm">✏️ Edit</button>
        </div>
        <button class="btn btn-danger btn-sm">🗑️</button>
      </div>
    </div>`).join('');
}

/* ═══ GRADE BOOK ═══ */
function renderGrades() {
  const tb = document.getElementById('grade-tbody');
  if (!tb) return;
  tb.innerHTML = STUDENTS.map(s => {
    const g1=Math.floor(60+Math.random()*40), g2=Math.floor(55+Math.random()*45), g3=Math.floor(50+Math.random()*50), g4=Math.floor(55+Math.random()*45);
    const avg = Math.round((g1+g2+g3+g4)/4);
    const remark = avg>=85?'Excellent':avg>=70?'Good':avg>=55?'Needs Work':'Struggling';
    return `<tr><td><div class="td-av"><div class="st-av" style="background:${s.color};font-size:10px;">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div class="td-name">${s.name}</div></div></td>
      <td><strong style="color:${g1>=70?'var(--em)':g1>=50?'#9a6d10':'var(--red)'};">${g1}/100</strong></td>
      <td><strong style="color:${g2>=70?'var(--em)':g2>=50?'#9a6d10':'var(--red)'};">${g2}/100</strong></td>
      <td><strong style="color:${g3>=70?'var(--em)':g3>=50?'#9a6d10':'var(--red)'};">${g3}/100</strong></td>
      <td><strong style="color:${g4>=70?'var(--em)':g4>=50?'#9a6d10':'var(--red)'};">${g4}/100</strong></td>
      <td><span class="badge ${avg>=80?'b-grn':avg>=60?'b-gld':'b-red'}">${avg}%</span></td>
      <td style="font-size:12px;color:var(--muted);">${remark}</td></tr>`;
  }).join('');
}

/* ═══ NOTES ═══ */
function renderNotes() {
  const el = document.getElementById('notes-grid');
  if (!el) return;
  el.innerHTML = NOTES_DATA.map(n => `
    <div class="note-card">
      <div class="note-card-top"><h4>${n.title}</h4><span class="badge ${n.tag}">${n.subject}</span></div>
      <p>${n.note}</p>
      <div class="note-card-foot"><span>📅 ${n.date}</span><div style="display:flex;gap:6px;"><button class="btn btn-outline btn-xs">Edit</button><button class="btn btn-danger btn-xs">Delete</button></div></div>
    </div>`).join('');
}

/* ═══ RESOURCES ═══ */
function renderResources() {
  const el = document.getElementById('resources-grid');
  if (!el) return;
  el.innerHTML = RESOURCES_DATA.map(r => `
    <div class="card" style="transition:all .18s;cursor:pointer;" onmouseover="this.style.borderColor='var(--em-lt)'" onmouseout="this.style.borderColor='var(--border)'">
      <div class="card-bd" style="text-align:center;padding:20px 16px;">
        <div style="font-size:36px;margin-bottom:10px;">${r.ico}</div>
        <div style="font-size:13.5px;font-weight:700;color:var(--ink);margin-bottom:4px;">${r.title}</div>
        <div style="font-size:11.5px;color:var(--muted);margin-bottom:14px;">${r.type} · ${r.size}</div>
        <div style="display:flex;gap:7px;">
          <button class="btn btn-primary btn-sm" style="flex:1;">⬇ Download</button>
          <button class="btn btn-outline btn-sm">Share</button>
        </div>
      </div>
    </div>`).join('');
}

/* ═══ MESSAGES ═══ */
function renderMessages() {
  const el = document.getElementById('messages-list');
  if (!el) return;
  el.innerHTML = MESSAGES_DATA.map(m => `
    <div class="msg-row ${m.unread?'unread':''}">
      <div class="m-av" style="background:${m.color};">${m.init}</div>
      <div class="m-body"><div class="m-sender">${m.from} <span style="font-size:10.5px;color:var(--muted);font-weight:400;">(${m.role})</span></div><div class="m-snippet">${m.msg}</div></div>
      <div class="m-right"><div class="m-time">${m.time}</div>${m.unread?'<div class="m-dot"></div>':''}</div>
    </div>`).join('');
}

/* ═══ ANNOUNCEMENTS ═══ */
function renderAnn() {
  const el = document.getElementById('ann-list');
  if (!el) return;
  el.innerHTML = ANN_DATA.map(a => `
    <div style="background:var(--card);border-radius:13px;border:1.5px solid var(--border);overflow:hidden;margin-bottom:12px;box-shadow:var(--sh);">
      <div style="display:flex;align-items:flex-start;gap:12px;padding:15px 16px 12px;">
        <div style="width:9px;height:9px;border-radius:50%;background:${a.color};flex-shrink:0;margin-top:5px;"></div>
        <div style="flex:1;min-width:0;"><div style="font-size:13.5px;font-weight:700;color:var(--ink);margin-bottom:5px;">${a.title}</div><div style="font-size:12.5px;color:var(--ink2);line-height:1.65;">${a.msg}</div></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:var(--cream);border-top:1px solid var(--border);">
        <span style="font-size:10.5px;color:var(--muted);">⏰ ${a.time} · ${a.from}</span>
        <span class="badge ${a.priority}">${a.priority.replace('b-','').replace('grn','Normal').replace('red','Urgent').replace('gld','Important').replace('sky','Info')}</span>
      </div>
    </div>`).join('');
}

/* ═══ DASHBOARD ACTIVITY + AT RISK ═══ */
function renderDashActivity() {
  const el = document.getElementById('dash-activity');
  if (!el) return;
  const acts = [
    {dot:'ci-g',ico:'✅',msg:'Ahmad Bilal completed Al-Mulk',sub:'Quran Hifz',time:'5m ago'},
    {dot:'ci-b',ico:'📝',msg:'Fatima Hassan submitted Tajweed worksheet',sub:'Tajweed',time:'22m ago'},
    {dot:'ci-r',ico:'❌',msg:'Omar Khalid missed Hifz class',sub:'3rd absence this month',time:'1h ago'},
    {dot:'ci-o',ico:'💬',msg:'Maryam Idris sent a message',sub:'Question about verse 42',time:'2h ago'},
    {dot:'ci-g',ico:'🔥',msg:'Khalid Al-Amin 9-day streak!',sub:'Consistent daily practice',time:'Today'},
  ];
  el.innerHTML = acts.map(a => `
    <div class="feed-item">
      <div class="feed-dot ${a.dot}">${a.ico}</div>
      <div class="feed-body"><strong>${a.msg}</strong><span>${a.sub}</span></div>
      <div class="feed-time">${a.time}</div>
    </div>`).join('');
}

function renderDashAtRisk() {
  const el = document.getElementById('dash-atrisk');
  if (!el) return;
  const at = STUDENTS.filter(s=>s.status==='At Risk');
  el.innerHTML = at.map(s => `
    <div class="row-item"><div class="st-av" style="background:${s.color};font-size:11px;">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
      <div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:600;color:var(--ink);">${s.name}</div><div style="font-size:11.5px;color:var(--muted);">${s.hifz}% progress · ${s.streak===0?'No recent activity':'Low streak'}</div></div>
      <button class="btn btn-outline btn-xs" onclick="viewStudent('${s.id}')">View</button>
    </div>`).join('');
}

/* ═══ GREETING ═══ */
(function(){
  const h = new Date().getHours();
  const g = h>=5&&h<12?'Ṣabāḥ al-khayr, Sh. Abdullah! 🌅':h>=12&&h<17?'Masāʾ al-khayr, Sh. Abdullah! ☀️':h>=17&&h<21?'Good Evening, Sh. Abdullah! 🌇':'As-Salāmu ʿAlaykum, Sh. Abdullah! 🌙';
  const el = document.getElementById('teach-greet'); if(el) el.textContent=g;
})();

/* ═══ DATE ═══ */
(function(){
  const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d=new Date();
  const str=days[d.getDay()]+', '+d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  document.getElementById('pg-sub').textContent=str;
  const wl=document.getElementById('week-label');if(wl)wl.textContent='Week of '+d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
})();

/* ═══ SWIPE ═══ */
let tx=0;
document.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
document.addEventListener('touchend',e=>{if(e.changedTouches[0].clientX-tx<-50&&document.getElementById('sidebar').classList.contains('open'))closeSb();},{passive:true});

/* ═══ INIT ═══ */
window.addEventListener('load', () => {
  renderStudents();
  renderProgress();
  renderAttendance();
  renderAssignments();
  renderGrades();
  renderNotes();
  renderResources();
  renderMessages();
  renderAnn();
  renderDashActivity();
  renderDashAtRisk();
  renderDashUpcoming();
  renderAllClasses();
  renderWeekly();
  startCountdowns();
  // Progress rings
  document.querySelectorAll('.rf').forEach(f=>{
    const c=2*Math.PI*45; f.style.strokeDasharray=c; f.style.strokeDashoffset=c*0.26;
  });
});
