/* ═══════════════════════════════
   DUMMY DATA
═══════════════════════════════ */
const STUDENTS = [
  {id:'S001',name:'Ahmad Bilal',level:'Ibtidaiy',juz:14,pct:75,tajweed:70,arabic:60,streak:22,status:'Active',teacher:'Sh. Abdullah Yusuf',color:'#0d6e4f'},
  {id:'S002',name:'Fatima Hassan',level:'Mutawassit',juz:20,pct:82,tajweed:85,arabic:78,streak:18,status:'Active',teacher:'Ust. Fatimah Hassan',color:'#9a6d10'},
  {id:'S003',name:'Ibrahim Yusuf',level:'Ibtidaiy',juz:11,pct:68,tajweed:65,arabic:55,streak:15,status:'Active',teacher:'Sh. Abdullah Yusuf',color:'#1a6ea8'},
  {id:'S004',name:'Aisha Rahman',level:'Rawdah',juz:6,pct:82,tajweed:80,arabic:70,streak:12,status:'Active',teacher:'Ust. Fatimah Hassan',color:'#6b4fb0'},
  {id:'S005',name:'Omar Khalid',level:'Ibtidaiy',juz:8,pct:42,tajweed:40,arabic:35,streak:2,status:'At Risk',teacher:'Sh. Abdullah Yusuf',color:'#e07b2a'},
  {id:'S006',name:'Zainab Ahmed',level:'Mutawassit',juz:16,pct:38,tajweed:45,arabic:40,streak:1,status:'At Risk',teacher:'Sh. Muhammad Al-Amin',color:'#6b4226'},
  {id:'S007',name:'Khalid Al-Amin',level:'Mutawassit',juz:22,pct:79,tajweed:75,arabic:72,streak:9,status:'Active',teacher:'Sh. Muhammad Al-Amin',color:'#0d6e4f'},
  {id:'S008',name:'Maryam Idris',level:'Rawdah',juz:4,pct:88,tajweed:85,arabic:80,streak:20,status:'Active',teacher:'Ust. Fatimah Hassan',color:'#6b4fb0'},
  {id:'S009',name:'Yusuf Ibrahim',level:'Rawdah',juz:2,pct:60,tajweed:58,arabic:50,streak:5,status:'Active',teacher:'Sh. Ibrahim Musa',color:'#1a6ea8'},
  {id:'S010',name:'Muhammad Farooq',level:'Advanced',juz:28,pct:45,tajweed:60,arabic:55,streak:0,status:'Inactive',teacher:'Sh. Ibrahim Musa',color:'#555'},
  {id:'S011',name:'Hana Al-Rashid',level:'Ibtidaiy',juz:9,pct:55,tajweed:50,arabic:48,streak:4,status:'Active',teacher:'Sh. Abdullah Yusuf',color:'#9a3a3a'},
  {id:'S012',name:'Ali Hassan',level:'Mutawassit',juz:18,pct:71,tajweed:68,arabic:65,streak:11,status:'Active',teacher:'Sh. Muhammad Al-Amin',color:'#0d6e4f'},
];

const TEACHERS = [
  {name:'Sh. Abdullah Yusuf',role:'Quran Hifz · Tajweed',qual:'Hafiz · Ijazah in Hafs ʿan ʿĀsim',subjects:['Quran Hifz','Tajweed'],students:14,status:'online',color:'#0d6e4f',initials:'AY'},
  {name:'Ust. Fatimah Hassan',role:'Tajweed · Quran',qual:"Specialist in Qirā'āt Sciences",subjects:['Tajweed','Quran'],students:12,status:'online',color:'#9a6d10',initials:'FH'},
  {name:'Sh. Muhammad Al-Amin',role:'Arabic Grammar · Khatt',qual:'BA Arabic, Islamic University Madinah',subjects:['Arabiyyah','Khatt','Nahw'],students:10,status:'busy',color:'#1a6ea8',initials:'MA'},
  {name:'Sh. Ibrahim Musa',role:'Tawheed · Fiqh · Hadith',qual:'MA Islamic Studies · Fiqh specialist',subjects:['Tawheed','Fiqh','Hadith'],students:12,status:'offline',color:'#6b4226',initials:'IM'},
  {name:'Ust. Khadijah Rahman',role:'Seerah · Tafseer',qual:"BA Islamic Studies, Madinah University",subjects:['Seerah','Tafseer'],students:8,status:'online',color:'#6b4fb0',initials:'KR'},
  {name:'Sh. Bilal Mansoor',role:'Quran Hifz',qual:"Hafiz · 25 years experience",subjects:['Quran Hifz'],students:8,status:'offline',color:'#2c7a5a',initials:'BM'},
];

const ASSIGNMENTS = [
  {title:'Memorise Al-Kahf Verses 43–55',subject:'Quran Hifz',assignedTo:'Ibtidaiy Level',due:'2025-04-15',submitted:8,total:14,status:'Pending'},
  {title:'Tajweed Worksheet — Madd Rules',subject:'Tajweed',assignedTo:'All Students',due:'2025-04-16',submitted:30,total:48,status:'Pending'},
  {title:'Arabic Grammar Chapter 4',subject:'Arabiyyah',assignedTo:'Mutawassit',due:'2025-04-18',submitted:2,total:10,status:'Pending'},
  {title:'Aqeedah Quiz — Tawhid Ruboobi',subject:'Tawheed/Fiqh',assignedTo:'All Students',due:'2025-04-12',submitted:20,total:48,status:'Overdue'},
  {title:'40 Hadith — Hadith 25 Summary',subject:'Hadith',assignedTo:'Advanced',due:'2025-04-20',submitted:5,total:6,status:'Pending'},
  {title:'Al-Mulk Memorisation',subject:'Quran Hifz',assignedTo:'Rawdah Level',due:'2025-04-05',submitted:14,total:14,status:'Completed'},
];

const MESSAGES = [
  {from:'Ahmad Bilal',role:'Student',msg:'Assalamu alaikum. I have a question about today\'s lesson…',time:'10:32',unread:true,color:'#0d6e4f',init:'AB'},
  {from:'Ust. Fatimah Hassan',role:'Teacher',msg:'Admin, can we reschedule Thursday\'s Tajweed class?',time:'09:15',unread:true,color:'#9a6d10',init:'FH'},
  {from:'Omar Khalid',role:'Student',msg:'I am sorry for missing classes. I was unwell.',time:'Yesterday',unread:true,color:'#e07b2a',init:'OK'},
  {from:'Parent: Ali Hassan Sr.',role:'Guardian',msg:'Is there a fee payment extension available?',time:'Yesterday',unread:false,color:'#1a6ea8',init:'AH'},
  {from:'Sh. Ibrahim Musa',role:'Teacher',msg:'Quiz results uploaded. 3 students need extra help.',time:'2 days ago',unread:false,color:'#6b4226',init:'IM'},
];

const ANNOUNCEMENTS_DATA = [
  {title:'End-of-Term Assessments',msg:'Hifz and Tajweed evaluations will be held on May 10–12.',time:'2 hours ago',priority:'urgent',color:'#c94040'},
  {title:'New Teacher Welcome',msg:'Please welcome Ust. Khadijah Rahman joining us next term for Seerah & Tafseer.',time:'1 day ago',priority:'normal',color:'#1eab7a'},
  {title:'Eid Holiday Notice',msg:'Classes suspended Ramadan 29 – Shawwal 3. Resume Shawwal 4.',time:'3 days ago',priority:'important',color:'#c9a84c'},
  {title:'Monthly Reports Ready',msg:'April 2025 progress reports are now available for all students.',time:'4 days ago',priority:'normal',color:'#1a6ea8'},
];

/* ═══════════════════════════════
   PAGE TITLES
═══════════════════════════════ */
const TITLES = {
  overview:      ['Dashboard',        'Welcome back, Admin'],
  analytics:     ['Analytics',        'School-wide performance insights'],
  students:      ['All Students',     '48 enrolled students'],
  enroll:        ['Enrol Student',    'Add a new student'],
  progress:      ['Progress Tracking','Monitor all students'],
  teachers:      ['Teachers',         '8 active teachers'],
  curriculum:    ['Curriculum',       'Subjects & course structure'],
  assignments:   ['Assignments',      'Manage student assignments'],
  schedule:      ['Class Schedule',   'Weekly timetable'],
  messages:      ['Messages',         '12 unread'],
  announcements: ['Announcements',    'Broadcast to students & teachers'],
  reports:       ['Reports',          'Generate & download reports'],
  settings:      ['Settings',         'School configuration'],
};

/* ═══════════════════════════════
   NAVIGATION
═══════════════════════════════ */
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
    document.getElementById('pg-sub').textContent   = TITLES[page][1];
  }
  document.getElementById('va').scrollTop = 0;
  closeSb(); closeDd();
}

/* ═══════════════════════════════
   SIDEBAR
═══════════════════════════════ */
function openSb()  { document.getElementById('sidebar').classList.add('open'); document.getElementById('sb-bd').classList.add('open'); document.body.style.overflow='hidden'; }
function closeSb() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sb-bd').classList.remove('open'); document.body.style.overflow=''; }

/* ═══════════════════════════════
   DROPDOWN
═══════════════════════════════ */
function toggleDd() { document.getElementById('dd').classList.toggle('open'); document.getElementById('dd-ov').classList.toggle('open'); }
function closeDd()  { document.getElementById('dd').classList.remove('open'); document.getElementById('dd-ov').classList.remove('open'); }

/* ═══════════════════════════════
   MODALS
═══════════════════════════════ */
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-bg').forEach(m => m.addEventListener('click', e => { if(e.target===m) m.classList.remove('open'); }));

/* ═══════════════════════════════
   RENDER STUDENTS TABLE
═══════════════════════════════ */
function renderStudents(list) {
  const tb = document.getElementById('students-tbody');
  if(!tb) return;
  tb.innerHTML = list.map(s => `
    <tr>
      <td><div class="td-av"><div class="t-av" style="background:${s.color};">${s.initials||s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div><div class="td-name">${s.name}</div><div style="font-size:11px;color:var(--muted);">${s.id}</div></div></div></td>
      <td><span class="badge ${s.level==='Rawdah'?'b-grn':s.level==='Mutawassit'?'b-pur':s.level==='Advanced'?'b-gld':'b-sky'}">${s.level}</span></td>
      <td><div style="display:flex;align-items:center;gap:8px;"><div class="mini-bar"><div class="mini-fill mf-g" style="width:${(s.juz/30)*100}%"></div></div><span style="font-size:12px;color:var(--muted);">${s.juz}/30</span></div></td>
      <td><strong style="color:${s.pct>=70?'var(--em)':s.pct>=50?'#9a6d10':'var(--red)'}">${s.pct}%</strong></td>
      <td><span class="badge ${s.status==='Active'?'b-grn':s.status==='At Risk'?'b-red':'b-gray'}">${s.status}</span></td>
      <td style="font-size:12px;color:var(--muted);">${s.teacher}</td>
      <td><div class="td-actions"><button class="btn btn-outline btn-xs" onclick="viewStudent('${s.id}')">View</button><button class="btn btn-primary btn-xs">Edit</button><button class="btn btn-danger btn-xs">Remove</button></div></td>
    </tr>`).join('');
}

function filterStudents(val='') {
  const q = val.toLowerCase();
  const filtered = STUDENTS.filter(s => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q));
  renderStudents(filtered);
}

function viewStudent(id) {
  const s = STUDENTS.find(x => x.id===id);
  if(!s) return;
  document.getElementById('sp-modal-name').textContent = s.name;
  document.getElementById('sp-modal-body').innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:18px;padding:18px;background:linear-gradient(120deg,var(--em),#0e8a60);border-radius:12px;">
      <div style="width:56px;height:56px;border-radius:50%;background:${s.color};display:flex;align-items:center;justify-content:center;font-size:18px;color:#fff;font-weight:700;border:3px solid var(--gold);flex-shrink:0;">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
      <div><div style="font-size:17px;font-weight:700;color:#fff;">${s.name}</div><div style="font-size:12px;color:rgba(255,255,255,0.72);">${s.id} · ${s.level} · ${s.teacher}</div>
        <div style="display:flex;gap:6px;margin-top:7px;flex-wrap:wrap;">
          <span style="background:rgba(255,255,255,0.15);border-radius:20px;padding:3px 10px;font-size:11px;color:#fff;">🔥 ${s.streak} day streak</span>
          <span class="badge ${s.status==='Active'?'b-grn':s.status==='At Risk'?'b-red':'b-gray'}">${s.status}</span>
        </div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
      <div style="background:var(--cream);border-radius:10px;padding:12px;border:1px solid var(--border);text-align:center;"><div style="font-size:22px;font-weight:700;color:var(--em);">${s.juz}<span style="font-size:14px;color:var(--muted);">/30</span></div><div style="font-size:11px;color:var(--muted);">Juz Completed</div></div>
      <div style="background:var(--cream);border-radius:10px;padding:12px;border:1px solid var(--border);text-align:center;"><div style="font-size:22px;font-weight:700;color:var(--em);">${s.pct}%</div><div style="font-size:11px;color:var(--muted);">Overall Progress</div></div>
    </div>
    <div style="margin-bottom:6px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="font-size:12px;font-weight:600;color:var(--ink2);">🎙️ Tajweed</span><span style="font-size:12px;color:var(--muted);">${s.tajweed}%</span></div>
      <div style="height:7px;background:var(--parch);border-radius:20px;overflow:hidden;"><div style="height:100%;border-radius:20px;background:linear-gradient(90deg,#155e99,var(--sky));width:${s.tajweed}%"></div></div>
    </div>
    <div style="margin-bottom:6px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="font-size:12px;font-weight:600;color:var(--ink2);">✍️ Arabiyyah</span><span style="font-size:12px;color:var(--muted);">${s.arabic}%</span></div>
      <div style="height:7px;background:var(--parch);border-radius:20px;overflow:hidden;"><div style="height:100%;border-radius:20px;background:linear-gradient(90deg,#b8843a,var(--gold));width:${s.arabic}%"></div></div>
    </div>`;
  openModal('modal-student-profile');
}

/* ═══════════════════════════════
   RENDER PROGRESS TABLE
═══════════════════════════════ */
function renderProgress() {
  const tb = document.getElementById('progress-tbody');
  if(!tb) return;
  const surahs = ['Al-Fatihah','Al-Baqarah','Al-Kahf','An-Nisa','Al-Maidah','Maryam','Al-Mulk','Yaseen'];
  tb.innerHTML = STUDENTS.map(s => `
    <tr>
      <td><div class="td-av"><div class="t-av" style="background:${s.color};font-size:10px;">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div class="td-name">${s.name}</div></div></td>
      <td style="font-size:12px;">${surahs[Math.floor(Math.random()*surahs.length)]}</td>
      <td><div style="display:flex;align-items:center;gap:6px;"><div class="mini-bar"><div class="mini-fill mf-g" style="width:${(s.juz/30)*100}%"></div></div><span style="font-size:11px;">${s.juz}/30</span></div></td>
      <td><strong style="color:${s.pct>=70?'var(--em)':s.pct>=50?'#9a6d10':'var(--red)'};">${s.pct}%</strong></td>
      <td><strong style="color:${s.tajweed>=70?'var(--em)':s.tajweed>=50?'#9a6d10':'var(--red)'};">${s.tajweed}%</strong></td>
      <td><strong style="color:${s.arabic>=70?'var(--em)':s.arabic>=50?'#9a6d10':'var(--red)'};">${s.arabic}%</strong></td>
      <td>🔥 ${s.streak}d</td>
      <td><span class="badge ${s.status==='Active'?'b-grn':s.status==='At Risk'?'b-red':'b-gray'}">${s.status}</span></td>
    </tr>`).join('');
}

/* ═══════════════════════════════
   RENDER TEACHERS
═══════════════════════════════ */
function renderTeachers() {
  const g = document.getElementById('teachers-grid');
  if(!g) return;
  const COLORS={online:'#2fc75e',busy:'#c9a84c',offline:'#8888aa'};
  g.innerHTML = TEACHERS.map(t => `
    <div class="card" style="transition:all .18s;" onmouseover="this.style.borderColor='var(--em-lt)'" onmouseout="this.style.borderColor='var(--border)'">
      <div class="card-bd" style="padding:18px;">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
          <div style="width:52px;height:52px;border-radius:50%;background:${t.color};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;border:3px solid var(--parch);flex-shrink:0;">${t.initials}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:14.5px;font-weight:700;color:var(--ink);">${t.name}</div>
            <div style="font-size:12px;color:var(--muted);margin-top:2px;">${t.qual}</div>
            <div style="display:flex;align-items:center;gap:5px;margin-top:4px;">
              <div style="width:7px;height:7px;border-radius:50%;background:${COLORS[t.status]};flex-shrink:0;"></div>
              <span style="font-size:11px;color:${COLORS[t.status]};font-weight:600;">${t.status.charAt(0).toUpperCase()+t.status.slice(1)}</span>
              <span style="font-size:11px;color:var(--muted);">· ${t.students} students</span>
            </div>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:14px;">
          ${t.subjects.map(s=>`<span style="background:rgba(13,110,79,0.08);color:var(--em);border-radius:20px;padding:3px 10px;font-size:11px;font-weight:600;">${s}</span>`).join('')}
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-primary btn-sm" style="flex:1;">💬 Message</button>
          <button class="btn btn-outline btn-sm" style="flex:1;">📅 Schedule</button>
          <button class="btn btn-outline btn-sm">✏️</button>
        </div>
      </div>
    </div>`).join('');
}

/* ═══════════════════════════════
   RENDER ASSIGNMENTS
═══════════════════════════════ */
function renderAssignments() {
  const tb = document.getElementById('assignments-tbody');
  if(!tb) return;
  tb.innerHTML = ASSIGNMENTS.map(a => `
    <tr>
      <td class="td-name">${a.title}</td>
      <td><span class="badge b-sky">${a.subject}</span></td>
      <td style="font-size:12px;color:var(--muted);">${a.assignedTo}</td>
      <td style="font-size:12.5px;">${a.due}</td>
      <td><div style="display:flex;align-items:center;gap:6px;"><div class="mini-bar"><div class="mini-fill ${a.status==='Completed'?'mf-g':'mf-b'}" style="width:${(a.submitted/a.total)*100}%"></div></div><span style="font-size:11px;">${a.submitted}/${a.total}</span></div></td>
      <td><span class="badge ${a.status==='Completed'?'b-grn':a.status==='Overdue'?'b-red':'b-gld'}">${a.status}</span></td>
      <td><div class="td-actions"><button class="btn btn-outline btn-xs">View</button><button class="btn btn-primary btn-xs">Grade</button></div></td>
    </tr>`).join('');
}

/* ═══════════════════════════════
   RENDER MESSAGES
═══════════════════════════════ */
function renderMessages() {
  const ml = document.getElementById('messages-list');
  if(!ml) return;
  ml.innerHTML = MESSAGES.map(m => `
    <div style="display:flex;align-items:flex-start;gap:11px;padding:11px 0;border-bottom:1px solid var(--border);cursor:pointer;border-left:${m.unread?'3px solid var(--em)':'3px solid transparent'};padding-left:${m.unread?'10px':'0'};">
      <div style="width:36px;height:36px;border-radius:50%;background:${m.color};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;flex-shrink:0;">${m.init}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;font-weight:600;color:var(--ink);">${m.from} <span style="font-size:10.5px;color:var(--muted);font-weight:400;">(${m.role})</span></div>
        <div style="font-size:12px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px;">${m.msg}</div>
      </div>
      <div style="flex-shrink:0;text-align:right;">
        <div style="font-size:10px;color:var(--muted);">${m.time}</div>
        ${m.unread?'<div style="width:7px;height:7px;border-radius:50%;background:var(--em);margin:4px 0 0 auto;"></div>':''}
      </div>
    </div>`).join('');
}

/* ═══════════════════════════════
   RENDER ANNOUNCEMENTS
═══════════════════════════════ */
function renderAnnouncements() {
  const al = document.getElementById('ann-list');
  if(!al) return;
  al.innerHTML = ANNOUNCEMENTS_DATA.map(a => `
    <div style="display:flex;gap:11px;padding:11px 0;border-bottom:1px solid var(--border);">
      <div style="width:9px;height:9px;border-radius:50%;background:${a.color};flex-shrink:0;margin-top:4px;"></div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:var(--ink);margin-bottom:3px;">${a.title}</div>
        <div style="font-size:12px;color:var(--ink2);">${a.msg}</div>
        <div style="font-size:10.5px;color:var(--muted);margin-top:4px;">${a.time}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:5px;flex-shrink:0;">
        <span class="badge ${a.priority==='urgent'?'b-red':a.priority==='important'?'b-gld':'b-grn'}">${a.priority}</span>
        <button class="btn btn-danger btn-xs">Delete</button>
      </div>
    </div>`).join('');
}

/* ═══════════════════════════════
   RENDER CURRICULUM
═══════════════════════════════ */
function renderCurriculum() {
  const g = document.getElementById('curriculum-cards');
  if(!g) return;
  const subjects = [
    {ico:'📖',name:'Quran Hifz',desc:'Memorisation of the Holy Quran',teacher:'Sh. Abdullah Yusuf',students:48,color:'ci-g'},
    {ico:'🎙️',name:'Tajweed',desc:'Rules of Quranic recitation',teacher:'Ust. Fatimah Hassan',students:48,color:'ci-b'},
    {ico:'✍️',name:'Arabiyyah',desc:'Arabic grammar, Nahw & Sarf',teacher:'Sh. Muhammad Al-Amin',students:40,color:'ci-o'},
    {ico:'📕',name:'Tawheed & Fiqh',desc:'Islamic theology and jurisprudence',teacher:'Sh. Ibrahim Musa',students:42,color:'ci-r'},
    {ico:'📚',name:'Hadith Studies',desc:'40 Hadith of Imam Nawawi',teacher:'Sh. Ibrahim Musa',students:38,color:'ci-p'},
    {ico:'🖊️',name:'Khatt',desc:'Arabic calligraphy – Naskh style',teacher:'Sh. Muhammad Al-Amin',students:30,color:'ci-g'},
  ];
  g.innerHTML = subjects.map(s => `
    <div class="card"><div class="card-hd"><div class="c-ico ${s.color}">${s.ico}</div><div><div class="c-title">${s.name}</div><div class="c-sub">${s.desc}</div></div><div class="c-act">Edit ›</div></div>
    <div class="card-bd">
      <div class="row-item"><span style="font-size:12.5px;color:var(--muted);">Teacher</span><span style="font-size:12.5px;font-weight:600;">${s.teacher}</span></div>
      <div class="row-item"><span style="font-size:12.5px;color:var(--muted);">Students enrolled</span><span style="font-size:12.5px;font-weight:600;">${s.students}</span></div>
      <div style="margin-top:10px;display:flex;gap:7px;"><button class="btn btn-outline btn-sm" style="flex:1;">📋 Assignments</button><button class="btn btn-primary btn-sm" style="flex:1;">📚 Materials</button></div>
    </div></div>`).join('');
}

/* ═══════════════════════════════
   RENDER SCHEDULE
═══════════════════════════════ */
function renderSchedule() {
  const tc = document.getElementById('todays-classes');
  if(!tc) return;
  const classes = [
    {time:'08:00',name:'Quran Hifz',teacher:'Sh. Abdullah Yusuf',status:'done'},
    {time:'10:00',name:'Tajweed',teacher:'Ust. Fatimah Hassan',status:'live'},
    {time:'12:00',name:'Break (Dhuhr)',teacher:'—',status:'soon'},
    {time:'14:00',name:'Arabic Grammar',teacher:'Sh. Muhammad Al-Amin',status:'soon'},
    {time:'16:00',name:'Hadith Circle',teacher:'Sh. Ibrahim Musa',status:'upcoming'},
  ];
  tc.innerHTML = classes.map(c => `
    <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);">
      <span style="font-size:11px;color:var(--muted);min-width:42px;flex-shrink:0;">${c.time}</span>
      <span style="width:8px;height:8px;border-radius:50%;background:${c.status==='live'?'var(--red)':c.status==='done'?'var(--em-lt)':'var(--gold)'};flex-shrink:0;display:inline-block;"></span>
      <div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:600;color:var(--ink);">${c.name}</div><div style="font-size:11px;color:var(--muted);">${c.teacher}</div></div>
      <span class="badge ${c.status==='live'?'b-red':c.status==='done'?'b-grn':'b-gld'}">${c.status==='live'?'Live':c.status==='done'?'Done':'Soon'}</span>
    </div>`).join('');

  const ws = document.getElementById('weekly-sched');
  if(ws) {
    const rows = [
      ['08:00','Quran Hifz','Quran Hifz','Quran Hifz','Quran Hifz','Quran Hifz'],
      ['10:00','Tajweed','Arabiyyah','Tajweed','Arabiyyah','Tajweed'],
      ['12:00','Break','Break','Break','Break','Break'],
      ['14:00','Arabiyyah','Hadith','Tawheed','Hadith','—'],
      ['16:00','Hadith Circle','Fiqh','Hadith Circle','Fiqh','—'],
    ];
    ws.innerHTML = rows.map(r => `<tr>${r.map((c,i) => i===0?`<td style="font-weight:600;color:var(--muted);font-size:11.5px;">${c}</td>`:`<td style="font-size:12.5px;">${c==='Break'?`<span class="badge b-gray">Break</span>`:c==='—'?'<span style="color:var(--muted);">—</span>':c}</td>`).join('')}</tr>`).join('');
  }
}

/* ═══════════════════════════════
   CHART: ENROLMENTS
═══════════════════════════════ */
function renderChart(id, data) {
  const el = document.getElementById(id);
  if(!el) return;
  const max = Math.max(...data.map(d=>d.v));
  el.innerHTML = data.map(d => {
    const h = Math.round((d.v/max)*100);
    return `<div class="bar-col"><div class="bar-val">${d.v}</div><div class="bar-fill" style="height:${h}%;background:${d.v===max?'var(--em)':'var(--em-lt)'};opacity:${0.4+0.6*(d.v/max)};"></div><div class="bar-lbl">${d.l}</div></div>`;
  }).join('');
}

/* ═══════════════════════════════
   GLOBAL SEARCH
═══════════════════════════════ */
function globalSearch(val) {
  if(val.length < 2) return;
  const q = val.toLowerCase();
  const found = STUDENTS.filter(s => s.name.toLowerCase().includes(q));
  if(found.length) { go(null,'students'); setTimeout(()=>filterStudents(val),50); }
}

/* ═══════════════════════════════
   LOGOUT
═══════════════════════════════ */
function doLogout() { if(confirm('Log out of Admin Portal?')) window.location.href = '../login/index.html'; }

/* ═══════════════════════════════
   SWIPE CLOSE
═══════════════════════════════ */
let tx=0;
document.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
document.addEventListener('touchend',e=>{if(e.changedTouches[0].clientX-tx<-50&&document.getElementById('sidebar').classList.contains('open'))closeSb();},{passive:true});

/* ═══════════════════════════════
   GREETING
═══════════════════════════════ */
(function(){
  const h=new Date().getHours();
  const g=h>=5&&h<12?'Good morning, Admin! 🌅':h>=12&&h<17?'Good afternoon, Admin! ☀️':h>=17&&h<21?'Good evening, Admin! 🌇':'As-Salāmu ʿAlaykum, Admin! 🌙';
  const el=document.getElementById('admin-greet'); if(el) el.textContent=g;
})();

/* ═══════════════════════════════
   DATE
═══════════════════════════════ */
(function(){
  const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d=new Date();
  const str=days[d.getDay()]+', '+d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  document.getElementById('pg-sub').textContent=str;
  const sd=document.getElementById('sched-today-date');if(sd)sd.textContent=days[d.getDay()];
})();

/* ═══════════════════════════════
   INIT ALL RENDERS
═══════════════════════════════ */
window.addEventListener('load', () => {
  renderStudents(STUDENTS);
  renderProgress();
  renderTeachers();
  renderAssignments();
  renderMessages();
  renderAnnouncements();
  renderCurriculum();
  renderSchedule();
  renderChart('enrol-chart',[{l:'Nov',v:4},{l:'Dec',v:6},{l:'Jan',v:9},{l:'Feb',v:7},{l:'Mar',v:12},{l:'Apr',v:10}]);
  renderChart('analytics-chart1',[{l:'Nov',v:4},{l:'Dec',v:6},{l:'Jan',v:9},{l:'Feb',v:7},{l:'Mar',v:12},{l:'Apr',v:10}]);
  // Progress ring
  document.querySelectorAll('.rf').forEach(f => {
    const c=2*Math.PI*45; f.style.strokeDasharray=c; f.style.strokeDashoffset=c*0.27;
  });
});
