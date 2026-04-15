/* ═══════════════════════════════
   ROLE CONFIGURATION
═══════════════════════════════ */
const ROLES = {
  admin: {
    badge:   'rb-admin',
    ico:     '⚙️',
    txt:     'Signing in as Admin',
    redirect:'../admin_dashboard/index.html',
    roIco:   '⚙️',
    roTitle: 'Welcome, Admin!',
    roSub:   'Redirecting to Admin Portal…',
  },
  teacher: {
    badge:   'rb-teacher',
    ico:     '👩‍🏫',
    txt:     'Signing in as Teacher',
    redirect:'../teacher_dashboard/index.html',
    roIco:   '👩‍🏫',
    roTitle: 'Welcome, Teacher!',
    roSub:   'Redirecting to Teacher Portal…',
  },
  student: {
    badge:   'rb-student',
    ico:     '👨‍🎓',
    txt:     'Signing in as Student',
    redirect:'../student_dashboard/index.html',
    roIco:   '📖',
    roTitle: 'Marhaban, Student!',
    roSub:   'Redirecting to Student Dashboard…',
  },
};

/* dummy credentials */
const CREDS = {
  'admin@dlight.edu':        { pass:'admin123',   role:'admin'   },
  'a.yusuf@dlight.edu':      { pass:'teacher123', role:'teacher' },
  'ahmad.bilal@dlight.edu':  { pass:'student123', role:'student' },
};

let currentRole = 'student';

/* ═══════════════════════════════
   ROLE SELECTOR
═══════════════════════════════ */
function selectRole(role, btn) {
  currentRole = role;
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cfg = ROLES[role];
  const badge = document.getElementById('role-badge');
  badge.className = 'role-badge ' + cfg.badge;
  document.getElementById('role-badge-ico').textContent = cfg.ico;
  document.getElementById('role-badge-txt').textContent = cfg.txt;

  // clear alerts on role switch
  hideAlert();
  clearError('email');
  clearError('password');

  // update placeholder hint
  document.getElementById('email').placeholder = `${role}@example.com`;
}

/* ═══════════════════════════════
   FORM VALIDATION
═══════════════════════════════ */
function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function showFieldError(field, msg) {
  const input = document.getElementById(field);
  const errEl = document.getElementById(field + '-error');
  const msgEl = document.getElementById(field + '-error-msg');
  if (input)  input.classList.add('error');
  if (msgEl)  msgEl.textContent = msg;
  if (errEl)  errEl.classList.add('show');
}

function clearError(field) {
  const input = document.getElementById(field);
  const errEl = document.getElementById(field + '-error');
  if (input) input.classList.remove('error');
  if (errEl) errEl.classList.remove('show');
  hideAlert();
}

function showAlert(msg, type='error') {
  const box  = document.getElementById('alert-box');
  const msgEl = document.getElementById('alert-msg');
  box.className = 'alert alert-' + type + ' show';
  msgEl.textContent = msg;
}

function hideAlert() {
  document.getElementById('alert-box').classList.remove('show');
}

/* ═══════════════════════════════
   PASSWORD EYE TOGGLE
═══════════════════════════════ */
let passVisible = false;
function toggleEye() {
  passVisible = !passVisible;
  const inp = document.getElementById('password');
  const btn = document.getElementById('eye-btn');
  inp.type = passVisible ? 'text' : 'password';
  btn.textContent = passVisible ? '🙈' : '👁️';
}

/* ═══════════════════════════════
   FILL DEMO
═══════════════════════════════ */
function fillDemo(email, pass, role) {
  document.getElementById('email').value    = email;
  document.getElementById('password').value = pass;
  // select the right role button
  const btn = document.querySelector(`.role-btn[data-role="${role}"]`);
  if (btn) selectRole(role, btn);
  clearError('email');
  clearError('password');
  hideAlert();
  // subtle pulse on the login button
  const lb = document.getElementById('login-btn');
  lb.style.transform = 'scale(1.02)';
  setTimeout(() => lb.style.transform = '', 200);
}

/* ═══════════════════════════════
   HANDLE LOGIN
═══════════════════════════════ */
function handleLogin(e) {
  e.preventDefault();
  hideAlert();

  const email = document.getElementById('email').value.trim();
  const pass  = document.getElementById('password').value;
  let valid   = true;

  // validate email
  if (!email) {
    showFieldError('email', 'Email address is required.');
    valid = false;
  } else if (!isValidEmail(email)) {
    showFieldError('email', 'Please enter a valid email address.');
    valid = false;
  }

  // validate password
  if (!pass) {
    showFieldError('password', 'Password is required.');
    valid = false;
  } else if (pass.length < 6) {
    showFieldError('password', 'Password must be at least 6 characters.');
    valid = false;
  }

  if (!valid) return;

  // show loading state
  setLoading(true);

  // simulate API call delay
  setTimeout(() => {
    const cred = CREDS[email.toLowerCase()];

    if (!cred) {
      setLoading(false);
      showAlert('No account found with that email address.');
      showFieldError('email', 'Email not recognised.');
      return;
    }

    if (cred.pass !== pass) {
      setLoading(false);
      showAlert('Incorrect password. Please try again.');
      showFieldError('password', 'Incorrect password.');
      return;
    }

    if (cred.role !== currentRole) {
      setLoading(false);
      showAlert(`This account is registered as a ${cred.role}, not ${currentRole}. Please select the correct role.`);
      return;
    }

    // SUCCESS — show redirect overlay
    setLoading(false);
    showRedirect(currentRole);
  }, 1400);
}

function setLoading(on) {
  const btn = document.getElementById('login-btn');
  if (on) {
    btn.classList.add('loading');
    document.getElementById('btn-text').textContent = 'Signing in…';
    document.getElementById('btn-spinner').style.display = 'block';
  } else {
    btn.classList.remove('loading');
    document.getElementById('btn-text').textContent = 'Sign In →';
    document.getElementById('btn-spinner').style.display = 'none';
  }
}

/* ═══════════════════════════════
   REDIRECT OVERLAY
═══════════════════════════════ */
function showRedirect(role) {
  const cfg = ROLES[role];
  document.getElementById('ro-icon').textContent  = cfg.roIco;
  document.getElementById('ro-title').textContent = cfg.roTitle;
  document.getElementById('ro-sub').textContent   = cfg.roSub;

  const overlay = document.getElementById('redirect-overlay');
  overlay.classList.add('show');

  // redirect after bar animation (1.8s)
  setTimeout(() => {
    window.location.href = cfg.redirect;
  }, 1900);
}

/* ═══════════════════════════════
   FORGOT PASSWORD
═══════════════════════════════ */
function showForgot(e) {
  e.preventDefault();
  const modal = document.getElementById('forgot-modal');
  modal.style.display = 'flex';
  // pre-fill email if entered
  const email = document.getElementById('email').value.trim();
  if (email) document.getElementById('forgot-email').value = email;
  setTimeout(() => document.getElementById('forgot-email').focus(), 50);
}

function closeForgot() {
  document.getElementById('forgot-modal').style.display = 'none';
}

function sendReset() {
  const email = document.getElementById('forgot-email').value.trim();
  if (!isValidEmail(email)) {
    document.getElementById('forgot-email').style.borderColor = 'var(--red)';
    return;
  }
  closeForgot();
  showAlert(`✅ Reset link sent to ${email} — check your inbox.`, 'success');
}

/* ═══════════════════════════════
   KEYBOARD SHORTCUT: Enter
═══════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('forgot-modal').style.display === 'flex') {
    sendReset();
  }
});

/* ═══════════════════════════════
   INIT
═══════════════════════════════ */
window.addEventListener('load', () => {
  // Auto-focus email field
  document.getElementById('email').focus();

  // Restore remembered email
  const saved = localStorage.getItem('dlight_email');
  if (saved) {
    document.getElementById('email').value = saved;
    document.getElementById('remember').checked = true;
  }
});

// Save email if remember checked
document.getElementById('login-form').addEventListener('submit', () => {
  const rem = document.getElementById('remember').checked;
  const email = document.getElementById('email').value.trim();
  if (rem) localStorage.setItem('dlight_email', email);
  else     localStorage.removeItem('dlight_email');
});
