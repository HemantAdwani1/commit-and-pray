/* =========================================================
   ZENITH ACADEMY — SCRIPT.JS
   Modular vanilla JS. Each section is a self-contained
   function, all wired up from init() at the bottom.
   ========================================================= */

'use strict';

/* ---------------------------------------------------------
   DATA
   --------------------------------------------------------- */

const COURSES = [
  {
    id: 'foundation',
    tag: 'Class 8–10',
    name: 'Foundation Course',
    target: 'For school students building core concepts early',
    duration: '1 Year',
    timing: 'Mon, Wed, Fri · 5:00–7:00 PM',
    desc: 'Strengthens Maths & Science fundamentals so students enter JEE/NEET tracks exam-ready.',
    syllabus: ['Physics & Chemistry fundamentals', 'Mathematics building blocks', 'Mental ability & reasoning', 'Monthly assessments']
  },
  {
    id: 'jee',
    tag: 'Class 11–12',
    name: 'JEE Preparation',
    target: 'For aspirants targeting JEE Main & Advanced',
    duration: '2 Years',
    timing: 'Mon–Sat · 4:00–8:00 PM',
    desc: 'Complete Physics, Chemistry & Maths coverage with problem-solving labs and full-length mocks.',
    syllabus: ['PCM concept-to-application bridge', 'Weekly JEE-pattern tests', 'Previous-year paper analysis', 'Rank-improvement mentoring']
  },
  {
    id: 'neet',
    tag: 'Class 11–12',
    name: 'NEET Preparation',
    target: 'For aspirants targeting NEET UG',
    duration: '2 Years',
    timing: 'Mon–Sat · 4:00–8:00 PM',
    desc: 'Biology-intensive curriculum paired with Physics & Chemistry mastery for medical entrance success.',
    syllabus: ['NCERT-first Biology mastery', 'Diagram & terminology drills', 'NEET-pattern weekly tests', 'Rank-improvement mentoring']
  },
  {
    id: 'boards',
    tag: 'Class 10 & 12',
    name: 'Board Exam Preparation',
    target: 'For CBSE / State board students',
    duration: '1 Year',
    timing: 'Tue, Thu, Sat · 5:00–7:00 PM',
    desc: 'Board-pattern practice with answer-writing technique to help students maximise scores.',
    syllabus: ['Chapter-wise NCERT coverage', 'Answer-writing workshops', 'Sample-paper practice', 'Pre-board mock series']
  },
  {
    id: 'maths',
    tag: 'Class 9–12',
    name: 'Mathematics',
    target: 'For students who want focused Maths mastery',
    duration: '1 Year',
    timing: 'Tue, Thu · 6:00–7:30 PM',
    desc: 'Concept-first Mathematics coaching from algebra to calculus, with daily problem sets.',
    syllabus: ['Algebra & trigonometry', 'Calculus foundations', 'Speed-solving techniques', 'Weekly problem sets']
  },
  {
    id: 'science',
    tag: 'Class 9–10',
    name: 'Science',
    target: 'For students strengthening Physics, Chemistry & Biology',
    duration: '1 Year',
    timing: 'Mon, Wed · 6:00–7:30 PM',
    desc: 'Lab-linked Science coaching that connects textbook concepts to real experiments.',
    syllabus: ['Physics & Chemistry basics', 'Biology & life processes', 'Practical-linked learning', 'Concept quizzes']
  },
  {
    id: 'competitive',
    tag: 'Class 6–10',
    name: 'Competitive Exam Preparation',
    target: 'For NTSE, Olympiads & scholarship exams',
    duration: '6 Months',
    timing: 'Sat · 10:00 AM–1:00 PM',
    desc: 'Focused preparation for NTSE, Olympiads and scholarship exams with past-paper practice.',
    syllabus: ['Reasoning & aptitude', 'Subject-wise Olympiad prep', 'Scholarship exam patterns', 'Timed mock rounds']
  }
];

const BATCHES = [
  { course: 'JEE Main + Advanced', name: 'Weekday Batch A', start: '01 Sept 2026', days: 'Mon – Fri', time: '4:00 PM – 6:30 PM', duration: '2 Years', seats: 12, mode: 'Offline', category: ['jee'] },
  { course: 'JEE Main + Advanced', name: 'Weekend Batch', start: '15 Sept 2026', days: 'Sat & Sun', time: '9:00 AM – 1:00 PM', duration: '2 Years', seats: 18, mode: 'Offline', category: ['jee', 'weekend'] },
  { course: 'NEET UG', name: 'Weekday Batch B', start: '05 Sept 2026', days: 'Mon – Fri', time: '5:00 PM – 7:30 PM', duration: '2 Years', seats: 9, mode: 'Offline', category: ['neet'] },
  { course: 'NEET UG', name: 'Online Weekend Batch', start: '20 Sept 2026', days: 'Sat & Sun', time: '10:00 AM – 1:00 PM', duration: '2 Years', seats: 25, mode: 'Online', category: ['neet', 'weekend'] },
  { course: 'Foundation (Class 9)', name: 'Weekday Batch', start: '03 Sept 2026', days: 'Mon, Wed, Fri', time: '5:00 PM – 7:00 PM', duration: '1 Year', seats: 15, mode: 'Offline', category: ['foundation', 'school'] },
  { course: 'Foundation (Class 8)', name: 'Weekend Batch', start: '13 Sept 2026', days: 'Sat & Sun', time: '11:00 AM – 1:00 PM', duration: '1 Year', seats: 20, mode: 'Hybrid', category: ['foundation', 'school', 'weekend'] },
  { course: 'Board Exam Prep (Class 10)', name: 'Weekday Batch', start: '08 Sept 2026', days: 'Tue, Thu, Sat', time: '5:00 PM – 7:00 PM', duration: '1 Year', seats: 6, mode: 'Offline', category: ['school'] },
  { course: 'Board Exam Prep (Class 12)', name: 'Weekend Intensive', start: '19 Sept 2026', days: 'Sat & Sun', time: '2:00 PM – 5:00 PM', duration: '6 Months', seats: 14, mode: 'Hybrid', category: ['school', 'weekend'] }
];

const FACULTY = [
  { initials: 'RS', name: 'Dr. Rahul Sharma', subject: 'Physics Faculty', qualification: 'M.Sc. Physics, Ph.D.', years: '12+ Years Experience', desc: 'Specialises in mechanics & modern physics for JEE Advanced.' },
  { initials: 'AK', name: 'Anjali Kapoor', subject: 'Chemistry Faculty', qualification: 'M.Sc. Organic Chemistry', years: '10+ Years Experience', desc: 'Known for simplifying organic reaction mechanisms.' },
  { initials: 'VN', name: 'Dr. Vikram Nair', subject: 'Biology Faculty', qualification: 'M.Sc. Zoology, Ph.D.', years: '14+ Years Experience', desc: 'NEET Biology mentor with a diagram-first teaching style.' },
  { initials: 'SP', name: 'Sneha Patil', subject: 'Mathematics Faculty', qualification: 'M.Sc. Mathematics', years: '9+ Years Experience', desc: 'Focuses on speed-solving techniques for competitive exams.' },
  { initials: 'MK', name: 'Manish Khanna', subject: 'Mathematics Faculty', qualification: 'B.Tech, M.Ed.', years: '11+ Years Experience', desc: 'Builds strong foundations from Class 9 through JEE.' },
  { initials: 'PD', name: 'Dr. Priya Deshmukh', subject: 'Chemistry Faculty', qualification: 'M.Sc. Physical Chemistry, Ph.D.', years: '13+ Years Experience', desc: 'Blends theory with numerical problem-solving practice.' }
];

const TESTIMONIALS = [
  { quote: 'Zenith Academy\u2019s weekly tests kept my son consistent through the whole year — the difference showed in his JEE rank.', who: 'Mr. Suresh Verma', role: 'Parent of JEE Advanced student' },
  { quote: 'The doubt-solving sessions were a game changer. I never carried a pending doubt into the next class.', who: 'Ananya Verma', role: 'JEE Advanced, AIR 342' },
  { quote: 'Small batches meant the faculty actually knew where I was struggling and adjusted their teaching for me.', who: 'Rohan Mehta', role: 'NEET UG, AIR 1,205' },
  { quote: 'Regular parent-teacher updates gave us real visibility into her preparation — not just report cards.', who: 'Mrs. Kavita Rao', role: 'Parent of Board exam student' }
];

const FAQS = [
  { q: 'How can I enroll?', a: 'Fill the Admission Enquiry form on this page or call us directly — our counsellor will guide you through course selection and enrolment.' },
  { q: 'When are the next batches starting?', a: 'New batches begin through September 2026. Check the Upcoming Batches section above for exact start dates and seat availability.' },
  { q: 'Are demo classes available?', a: 'Yes, we offer a free demo class for every course so you can experience our teaching style before enrolling.' },
  { q: 'Do you provide study material?', a: 'Yes, every enrolled student receives curated, exam-mapped study material and revision notes at no extra cost.' },
  { q: 'Are online classes available?', a: 'Yes, several batches run in Online or Hybrid mode. Check the mode tag on each batch card in the Upcoming Batches section.' },
  { q: 'How can I contact an admission counsellor?', a: 'Call, WhatsApp or email us using the details in the Contact section, or submit the enquiry form for a callback.' },
  { q: 'What is the batch size?', a: 'We keep batches small — typically 15 to 25 students — so every learner gets individual attention.' }
];

/* ---------------------------------------------------------
   NAVBAR: sticky shadow + mobile hamburger
   --------------------------------------------------------- */
function initNavbar(){
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  }, { passive: true });

  function closeMenu(){
    navLinks.classList.remove('is-open');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    hamburger.classList.toggle('is-active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ---------------------------------------------------------
   COURSES: render cards + details modal
   --------------------------------------------------------- */
function renderCourses(){
  const grid = document.getElementById('courseGrid');
  grid.innerHTML = COURSES.map(c => `
    <article class="course-card">
      <span class="course-card__tag">${c.tag}</span>
      <h3>${c.name}</h3>
      <p class="course-card__target">${c.target}</p>
      <div class="course-card__meta">
        <div><strong>Duration</strong>${c.duration}</div>
        <div><strong>Timing</strong>${c.timing}</div>
      </div>
      <p class="course-card__desc">${c.desc}</p>
      <div class="course-card__actions">
        <button class="btn btn--outline btn--sm" data-view-course="${c.id}">View Details</button>
        <a href="#admission" class="btn btn--primary btn--sm">Enquire Now</a>
      </div>
    </article>
  `).join('');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-view-course]');
    if (!btn) return;
    openCourseModal(btn.getAttribute('data-view-course'));
  });
}

function openCourseModal(id){
  const course = COURSES.find(c => c.id === id);
  if (!course) return;
  const modal = document.getElementById('courseModal');
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <span class="course-card__tag">${course.tag}</span>
    <h3 id="modalTitle">${course.name}</h3>
    <p>${course.desc}</p>
    <div class="modal__grid">
      <div><strong>Duration</strong>${course.duration}</div>
      <div><strong>Timing</strong>${course.timing}</div>
    </div>
    <ul class="modal__syllabus">${course.syllabus.map(s => `<li>${s}</li>`).join('')}</ul>
    <a href="#admission" class="btn btn--primary btn--block" data-close-modal>Enquire About This Course</a>
  `;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCourseModal(){
  const modal = document.getElementById('courseModal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal(){
  const modal = document.getElementById('courseModal');
  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close-modal]')) closeCourseModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCourseModal();
  });
}

/* ---------------------------------------------------------
   BATCHES: render admit-card style cards + filtering
   --------------------------------------------------------- */
function batchCardHTML(b){
  const modeClass = 'batch-card__mode--' + b.mode.toLowerCase();
  const seatsLow = b.seats <= 10;
  return `
    <article class="batch-card" data-categories="${b.category.join(' ')}">
      <div class="batch-card__stub"><span>${b.start}</span></div>
      <div class="batch-card__perforation"></div>
      <div class="batch-card__body">
        <div class="batch-card__top">
          <span class="batch-card__course">${b.course}</span>
          <span class="batch-card__mode ${modeClass}">${b.mode}</span>
        </div>
        <p class="batch-card__name">${b.name}</p>
        <div class="batch-card__grid">
          <div><strong>Starts</strong>${b.start}</div>
          <div><strong>Days</strong>${b.days}</div>
          <div><strong>Timing</strong>${b.time}</div>
          <div><strong>Duration</strong>${b.duration}</div>
        </div>
        <div class="batch-card__seats">
          <span class="batch-card__seats-label">Seats Available</span>
          <span class="batch-card__seats-num ${seatsLow ? 'is-low' : ''}">${b.seats}</span>
        </div>
        <a href="#admission" class="btn btn--primary btn--sm btn--block">Enquire About Batch</a>
      </div>
    </article>
  `;
}

function renderBatches(list){
  document.getElementById('batchGrid').innerHTML = list.map(batchCardHTML).join('');
}

function initBatches(){
  renderBatches(BATCHES);

  const filters = document.getElementById('batchFilters');
  filters.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    filters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');

    const filter = chip.getAttribute('data-filter');
    const filtered = filter === 'all' ? BATCHES : BATCHES.filter(b => b.category.includes(filter));
    renderBatches(filtered);
    reobserveReveal();
  });
}

/* ---------------------------------------------------------
   FACULTY
   --------------------------------------------------------- */
function renderFaculty(){
  document.getElementById('facultyGrid').innerHTML = FACULTY.map(f => `
    <article class="faculty-card">
      <div class="faculty-card__photo">${f.initials}</div>
      <h3>${f.name}</h3>
      <p class="faculty-card__subject">${f.subject}</p>
      <p class="faculty-card__meta">${f.qualification} · ${f.years}</p>
      <p class="faculty-card__desc">${f.desc}</p>
    </article>
  `).join('');
}

/* ---------------------------------------------------------
   TESTIMONIAL SLIDER
   --------------------------------------------------------- */
function initTestimonials(){
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  let index = 0;
  let timer;

  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-slide">
      <p class="quote">\u201C${t.quote}\u201D</p>
      <p class="who">${t.who}</p>
      <p class="role">${t.role}</p>
    </div>
  `).join('');

  dotsWrap.innerHTML = TESTIMONIALS.map((_, i) => `<button aria-label="Go to testimonial ${i + 1}"></button>`).join('');
  const dots = [...dotsWrap.children];

  function update(){
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  }

  function go(newIndex){
    index = (newIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
    update();
  }

  function restartAutoplay(){
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 6000);
  }

  prevBtn.addEventListener('click', () => { go(index - 1); restartAutoplay(); });
  nextBtn.addEventListener('click', () => { go(index + 1); restartAutoplay(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); restartAutoplay(); }));

  update();
  restartAutoplay();
}

/* ---------------------------------------------------------
   FAQ ACCORDION
   --------------------------------------------------------- */
function initFAQ(){
  const list = document.getElementById('faqList');
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item">
      <button class="faq-item__q" aria-expanded="false">
        <span class="faq-item__num">${String(i + 1).padStart(2, '0')}</span>
        <span>${f.q}</span>
        <span class="faq-item__icon">+</span>
      </button>
      <div class="faq-item__a"><p>${f.a}</p></div>
    </div>
  `).join('');

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-item__q');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-item__a');
    const isOpen = item.classList.contains('is-open');

    list.querySelectorAll('.faq-item.is-open').forEach(open => {
      if (open !== item){
        open.classList.remove('is-open');
        open.querySelector('.faq-item__a').style.maxHeight = null;
        open.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false');
      }
    });

    if (isOpen){
      item.classList.remove('is-open');
      answer.style.maxHeight = null;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('is-open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

/* ---------------------------------------------------------
   ADMISSION FORM VALIDATION
   --------------------------------------------------------- */
function initAdmissionForm(){
  const form = document.getElementById('admissionForm');
  const successMsg = document.getElementById('formSuccess');

  const validators = {
    studentName: (v) => v.trim().length >= 2 ? '' : 'Please enter the student\u2019s name.',
    parentName: (v) => v.trim().length >= 2 ? '' : 'Please enter the parent\u2019s name.',
    phone: (v) => /^[6-9]\d{9}$/.test(v.trim()) ? '' : 'Enter a valid 10-digit phone number.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email address.',
    course: (v) => v ? '' : 'Please select a course.'
  };

  function validateField(name){
    const field = form.elements[name];
    const error = validators[name] ? validators[name](field.value) : '';
    const wrapper = field.closest('.form-field');
    const errorEl = document.getElementById('err-' + name);
    wrapper.classList.toggle('has-error', !!error);
    if (errorEl) errorEl.textContent = error;
    return !error;
  }

  Object.keys(validators).forEach(name => {
    form.elements[name].addEventListener('blur', () => validateField(name));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMsg.hidden = true;

    const results = Object.keys(validators).map(validateField);
    const isValid = results.every(Boolean);

    if (!isValid){
      const firstError = form.querySelector('.has-error input, .has-error select');
      if (firstError) firstError.focus();
      return;
    }

    // Simulate submission (no backend available)
    successMsg.hidden = false;
    form.reset();
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/* ---------------------------------------------------------
   SCROLL REVEAL
   --------------------------------------------------------- */
let revealObserver;
function initScrollReveal(){
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function reobserveReveal(){
  document.querySelectorAll('.batch-card').forEach(el => {
    el.classList.add('is-visible');
  });
}

/* ---------------------------------------------------------
   BACK TO TOP
   --------------------------------------------------------- */
function initBackToTop(){
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------------------------------------------------------
   MISC
   --------------------------------------------------------- */
function initFooterYear(){
  document.getElementById('year').textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
function init(){
  initNavbar();
  renderCourses();
  initModal();
  initBatches();
  renderFaculty();
  initTestimonials();
  initFAQ();
  initAdmissionForm();
  initBackToTop();
  initFooterYear();
  initScrollReveal();
}

document.addEventListener('DOMContentLoaded', init);
