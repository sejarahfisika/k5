// ============================
//  DATA LEVELS & QUESTIONS
// ============================

const levels = [
  {
    id: 1,
    name: "Babilonia",
    tag: "Akar Astronomi & Aritmetika",
    description:
      "Mengamati gerak benda langit dan mengembangkan sistem bilangan 60.",
    content:
      "Bangsa Babilonia terkenal dengan catatan astronomi yang teliti dan sistem bilangan berbasis 60. Dari sini lahir pembagian lingkaran menjadi 360 derajat, serta menit dan detik yang masih digunakan dalam fisika dan astronomi modern.",
    question:
      "Konsep apa dari sistem bilangan Babilonia yang masih digunakan dalam fisika modern?",
    options: [
      "Pembagian lingkaran menjadi 360° serta menit dan detik",
      "Sistem bilangan biner untuk komputer",
      "Konsep energi mekanik",
      "Teori relativitas ruang-waktu"
    ],
    correctIndex: 0,
    image: "assets/images/babilonia-sky.jpg",
    imageCaption:
      "Peradaban Babilonia mengamati posisi bintang dan planet secara sistematis."
  },
  {
    id: 2,
    name: "Yunani Kuno",
    tag: "Filsafat Alam & Geometri",
    description:
      "Menjelaskan alam dengan logika, geometri, dan pemikiran rasional.",
    content:
      "Tokoh-tokoh seperti Thales, Pythagoras, dan Aristoteles mencoba menjelaskan fenomena alam tanpa mitos, melainkan dengan argumen rasional. Mereka meletakkan dasar geometri, konsep gaya, hingga gagasan awal tentang gerak benda.",
    question:
      "Pernyataan manakah yang paling tepat menggambarkan kontribusi Archimedes?",
    options: [
      "Menjelaskan gerak planet mengelilingi Matahari",
      "Merumuskan hukum daya apung pada benda yang dicelupkan ke dalam fluida",
      "Menentukan kecepatan cahaya di ruang hampa",
      "Mengembangkan teori kuantum tentang atom"
    ],
    correctIndex: 1,
    image: "assets/images/archimedes.jpg",
    imageCaption:
      "Archimedes dan cerita 'Eureka' saat menemukan konsep gaya apung."
  },
  {
    id: 3,
    name: "Peradaban Islam",
    tag: "Optika & Metode Eksperimen",
    description:
      "Mengembangkan metode ilmiah dan eksperimen sistematis.",
    content:
      "Ilmuwan Islam seperti Ibn al-Haytham (Alhazen) mengembangkan optika berbasis eksperimen. Mereka menekankan pengamatan, pengujian, dan pembuktian, bukan hanya spekulasi. Inilah cikal bakal metode ilmiah modern.",
    question:
      "Kontribusi penting Ibn al-Haytham dalam sejarah fisika adalah pada bidang apa?",
    options: [
      "Mekanik orbit planet",
      "Optika dan studi tentang cahaya",
      "Elektromagnetik",
      "Fisi nuklir"
    ],
    correctIndex: 1,
    image: "assets/images/ibn-al-haytham.jpg",
    imageCaption:
      "Ibn al-Haytham menguji teori cahaya melalui percobaan kamera obscura."
  },
  {
    id: 4,
    name: "Fisika Klasik",
    tag: "Mekanika Newton",
    description:
      "Menjelaskan gerak benda dari apel jatuh hingga orbit planet.",
    content:
      "Isaac Newton merumuskan tiga hukum gerak dan hukum gravitasi universal. Dengan konsep gaya, massa, dan percepatan, fisika klasik mampu menjelaskan banyak fenomena sehari-hari seperti mobil bergerak, benda jatuh, hingga gerak planet.",
    question:
      "Manakah contoh penerapan langsung dari Hukum II Newton (F = m · a)?",
    options: [
      "Perubahan arah cahaya saat melewati prisma",
      "Percepatan mobil ketika pedal gas diinjak",
      "Pembelokan cahaya oleh gravitasi bintang",
      "Pembentukan spektrum garis atom"
    ],
    correctIndex: 1,
    image: "assets/images/newton-apple.jpg",
    imageCaption:
      "Newton menggunakan konsep gaya dan percepatan untuk menjelaskan gerak benda."
  },
  {
    id: 5,
    name: "Listrik & Magnet",
    tag: "Medan & Gelombang EM",
    description:
      "Menggabungkan listrik, magnet, dan cahaya dalam satu teori.",
    content:
      "James Clerk Maxwell menyatukan listrik dan magnet dalam satu set persamaan. Ia menunjukkan bahwa cahaya adalah gelombang elektromagnetik, membuka jalan bagi teknologi modern seperti radio, antena, dan komunikasi nirkabel.",
    question:
      "Pernyataan yang tepat tentang gelombang elektromagnetik adalah...",
    options: [
      "Selalu membutuhkan medium udara untuk merambat",
      "Tidak dapat merambat di ruang hampa",
      "Dapat merambat di ruang hampa dengan kecepatan cahaya",
      "Hanya muncul pada bahan logam"
    ],
    correctIndex: 2,
    image: "assets/images/maxwell.jpg",
    imageCaption:
      "Persamaan Maxwell menjelaskan hubungan antara medan listrik, magnet, dan cahaya."
  },
  {
    id: 6,
    name: "Relativitas",
    tag: "Ruang-Waktu & Gravitasi",
    description:
      "Mengubah cara pandang kita terhadap ruang, waktu, dan gravitasi.",
    content:
      "Teori relativitas khusus dan umum Einstein menjelaskan bahwa ruang dan waktu saling terkait dan bergantung pada kecepatan serta gravitasi. Gravitasi tidak lagi dipandang sebagai gaya biasa, tetapi kelengkungan ruang-waktu.",
    question:
      "Menurut relativitas khusus, apa yang terjadi ketika benda bergerak mendekati kecepatan cahaya?",
    options: [
      "Massa berkurang dan waktu berjalan lebih cepat",
      "Massa tampak bertambah dan waktu berjalan lebih lambat",
      "Massa tetap dan waktu tidak berubah",
      "Ruang dan waktu tidak saling memengaruhi"
    ],
    correctIndex: 1,
    image: "assets/images/einstein-relativity.jpg",
    imageCaption:
      "Relativitas menunjukkan bahwa waktu dan ruang bergantung pada pengamat."
  },
  {
    id: 7,
    name: "Mekanika Kuantum",
    tag: "Dunia Mikro & Probabilitas",
    description:
      "Menjelaskan perilaku partikel sangat kecil dengan probabilitas.",
    content:
      "Mekanika kuantum muncul untuk menjelaskan fenomena pada skala atom dan subatom. Konsep seperti kuanta energi, fungsi gelombang, dan asas ketidakpastian Heisenberg mengubah cara kita memahami realitas pada skala sangat kecil.",
    question:
      "Fenomena apa yang tidak dapat dijelaskan dengan baik oleh fisika klasik sehingga memicu lahirnya fisika kuantum?",
    options: [
      "Gerak parabola peluru",
      "Radiasi benda hitam dan efek fotolistrik",
      "Gerakan planet mengelilingi Matahari",
      "Gerak bandul sederhana"
    ],
    correctIndex: 1,
    image: "assets/images/quantum.jpg",
    imageCaption:
      "Eksperimen pada radiasi benda hitam dan efek fotolistrik menantang fisika klasik."
  },
  {
    id: 8,
    name: "Fisika Modern Terapan",
    tag: "Teknologi Zaman Kini",
    description:
      "Menerapkan konsep fisika modern dalam teknologi sehari-hari.",
    content:
      "Konsep relativitas dan mekanika kuantum melahirkan teknologi seperti GPS, laser, semikonduktor, hingga MRI. Fisika bukan hanya teori abstrak, tetapi dasar dari hampir semua teknologi modern yang kita gunakan.",
    question:
      "Contoh penerapan langsung mekanika kuantum dalam kehidupan sehari-hari adalah...",
    options: [
      "Navigasi menggunakan kompas",
      "Penggunaan panel surya di atap rumah",
      "Kerja transistor dalam chip komputer dan ponsel",
      "Gerak mobil di jalan raya"
    ],
    correctIndex: 2,
    image: "assets/images/chip.jpg",
    imageCaption:
      "Transistor berbasis prinsip kuantum menjadi jantung komputer dan ponsel."
  }
];

// ============================
//  BADGES & SCIENTISTS & CUTSCENES
// ============================

const badgeDefinitions = [
  {
    id: "starter",
    label: "First Step",
    description: "Menyelesaikan 1 level pertama.",
    condition: (state) => state.completedLevels.length >= 1
  },
  {
    id: "halfway",
    label: "Halfway Explorer",
    description: "Menyelesaikan 4 level.",
    condition: (state) => state.completedLevels.length >= 4
  },
  {
    id: "full-journey",
    label: "Journey Master",
    description: "Menyelesaikan seluruh level.",
    condition: (state) => state.completedLevels.length === levels.length
  },
  {
    id: "accuracy-80",
    label: "Sharp Mind",
    description: "Akurasi jawaban ≥ 80%.",
    condition: (state) => {
      if (state.answered === 0) return false;
      return (state.correct / state.answered) * 100 >= 80;
    }
  },
  {
    id: "quantum",
    label: "Quantum Master",
    description: "Menyelesaikan level Mekanika Kuantum.",
    condition: (state) => state.completedLevels.includes(7)
  },
  {
    id: "relativity",
    label: "Relativitas Explorer",
    description: "Menyelesaikan level Relativitas.",
    condition: (state) => state.completedLevels.includes(6)
  }
];

const scientistCards = [
  {
    levelId: 1,
    name: "Ahli Babilonia",
    era: "±1900 SM",
    tagline: "Merintis astronomi dan sistem bilangan 60."
  },
  {
    levelId: 2,
    name: "Archimedes",
    era: "287–212 SM",
    tagline: "Merumuskan hukum daya apung dan momen gaya."
  },
  {
    levelId: 3,
    name: "Ibn al-Haytham",
    era: "965–1040 M",
    tagline: "Perintis optika dan metode eksperimen."
  },
  {
    levelId: 4,
    name: "Isaac Newton",
    era: "1643–1727",
    tagline: "Tiga hukum gerak dan gravitasi universal."
  },
  {
    levelId: 5,
    name: "James Clerk Maxwell",
    era: "1831–1879",
    tagline: "Menyatukan listrik, magnet, dan cahaya."
  },
  {
    levelId: 6,
    name: "Albert Einstein",
    era: "1879–1955",
    tagline: "Relativitas khusus dan umum."
  },
  {
    levelId: 7,
    name: "Tokoh Kuantum",
    era: "Abad 20",
    tagline: "Planck, Bohr, Schrödinger, Heisenberg, dan lainnya."
  },
  {
    levelId: 8,
    name: "Engineer Modern",
    era: "Abad 21",
    tagline: "Menerapkan fisika modern ke teknologi sehari-hari."
  }
];

const cutscenes = [
  {
    id: 1,
    title: "Dari Langit Babilonia ke Filsafat Yunani",
    text:
      "Catatan bintang dari Babilonia menginspirasi pemikiran sistematis di Yunani. Fisika lahir saat manusia berani bertanya: mengapa alam bekerja seperti ini tanpa mengandalkan mitos."
  },
  {
    id: 2,
    title: "Dari Eksperimen Islam ke Revolusi Newton",
    text:
      "Metode eksperimen ilmuwan Islam menyiapkan panggung bagi Newton untuk merumuskan hukum gerak dan gravitasi. Alam dipandang sebagai sistem yang dapat dimodelkan dengan matematika."
  },
  {
    id: 3,
    title: "Gelombang, Ruang-Waktu, dan Dunia Kuantum",
    text:
      "Maxwell, Einstein, dan para fisikawan kuantum mengubah cara kita memandang realitas. Cahaya, ruang-waktu, dan partikel kecil jauh lebih kompleks dan menarik daripada dugaan fisika klasik."
  },
  {
    id: 4,
    title: "Fisika di Saku Anda",
    text:
      "Setiap kali menyalakan ponsel, memakai GPS, atau memindai dengan MRI, Anda memanfaatkan hasil perjalanan panjang fisika selama berabad-abad. Perjalanan itu berlanjut bersama generasi berikutnya."
  }
];

const randomFacts = [
  "Kecepatan cahaya di ruang hampa kira-kira 300.000 km/detik dan menjadi batas kecepatan kosmik.",
  "GPS di ponsel memerlukan koreksi relativitas agar posisi tetap akurat.",
  "Efek fotolistrik yang dijelaskan Einstein menjadi dasar teknologi sel surya.",
  "Sebuah atom sebagian besar terdiri dari ruang kosong; inti atom jauh lebih kecil dari keseluruhan volumenya.",
  "Superkonduktor dapat mengalirkan arus listrik tanpa hambatan pada suhu sangat rendah.",
  "Laser pertama kali dipraktikkan tahun 1960 dan kini dipakai pada CD, internet fiber, hingga kedokteran."
];

// ============================
//  STATE
// ============================

const defaultState = {
  playerName: "Player Fisika",
  studentId: "",
  classGroup: "",
  studyProgram: "",
  score: 0,
  completedLevels: [],
  answered: 0,
  correct: 0,
  badges: [],
  unlockedScientists: [],
  cutscenesShown: [],
  leaderboard: [],
  onboarded: false,
  settings: {
    soundOn: true,
    musicOn: false,
    darkMode: false
  }
};

let state = structuredClone(defaultState);

// challenge state (mode challenge & extreme)
let challengeActive = false;
let challengeModeType = "challenge"; // "challenge" | "extreme"
let challengeTimer = null;
let challengeTimeLeft = 60;
let challengeCorrect = 0;
let challengeWrong = 0;
let currentChallengeQuestion = null;

// level play temp
let currentLevelId = null;
let selectedOptionIndex = null;

// ============================
//  DOM REFERENCES
// ============================

// intro
const introScreen = document.getElementById("introScreen");
const introStep1 = document.getElementById("introStep1");
const introStep2 = document.getElementById("introStep2");
const introNextBtn = document.getElementById("introNextBtn");
const introBackBtn = document.getElementById("introBackBtn");
const introStartBtn = document.getElementById("introStartBtn");
const introNameInput = document.getElementById("introName");
const introNimInput = document.getElementById("introNim");
const introClassInput = document.getElementById("introClass");
const introStudyInput = document.getElementById("introStudy");

const overlayEl = document.getElementById("overlay");

const totalScoreDisplay = document.getElementById("totalScoreDisplay");
const completedCountDisplay = document.getElementById("completedCountDisplay");
const answeredCountDisplay = document.getElementById("answeredCountDisplay");
const accuracyDisplay = document.getElementById("accuracyDisplay");
const progressFill = document.getElementById("progressFill");
const progressPercentLabel = document.getElementById("progressPercentLabel");
const summaryList = document.getElementById("summaryList");

const mapContainer = document.getElementById("mapContainer");
const badgeContainer = document.getElementById("badgeContainer");
const scientistContainer = document.getElementById("scientistContainer");
const leaderboardList = document.getElementById("leaderboardList");

const factBarText = document.getElementById("factText");
const nextFactBtn = document.getElementById("nextFactBtn");

const toggleSoundBtn = document.getElementById("toggleSoundBtn");
const toggleMusicBtn = document.getElementById("toggleMusicBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");

const modeNormalBtn = document.getElementById("modeNormalBtn");
const modeChallengeBtn = document.getElementById("modeChallengeBtn");
const modeExtremeBtn = document.getElementById("modeExtremeBtn");

// profile
const playerNameDisplay = document.getElementById("playerNameDisplay");
const profileMeta = document.getElementById("profileMeta");
const editNameBtn = document.getElementById("editNameBtn");

// Level modal
const levelModal = document.getElementById("levelModal");
const levelTitleEl = document.getElementById("levelTitle");
const levelTagEl = document.getElementById("levelTag");
const levelDescriptionEl = document.getElementById("levelDescription");
const levelContentEl = document.getElementById("levelContent");
const levelImageWrapper = document.getElementById("levelImageWrapper");
const levelImageEl = document.getElementById("levelImage");
const levelImageCaptionEl = document.getElementById("levelImageCaption");
const questionTextEl = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const narratorBtn = document.getElementById("narratorBtn");
const submitAnswerBtn = document.getElementById("submitAnswerBtn");

// Result modal
const resultModal = document.getElementById("resultModal");
const resultTitleEl = document.getElementById("resultTitle");
const resultMessageEl = document.getElementById("resultMessage");
const resultStatsEl = document.getElementById("resultStats");
const unlockedInfoEl = document.getElementById("unlockedInfo");
const resultOkBtn = document.getElementById("resultOkBtn");

// Cutscene modal
const cutsceneModal = document.getElementById("cutsceneModal");
const cutsceneTitleEl = document.getElementById("cutsceneTitle");
const cutsceneTextEl = document.getElementById("cutsceneText");
const cutsceneContinueBtn = document.getElementById("cutsceneContinueBtn");

// Challenge modal
const challengeModal = document.getElementById("challengeModal");
const challengeTimeDisplay = document.getElementById("challengeTimeDisplay");
const challengeCorrectDisplay = document.getElementById("challengeCorrectDisplay");
const challengeWrongDisplay = document.getElementById("challengeWrongDisplay");
const challengeQuestionText = document.getElementById("challengeQuestionText");
const challengeOptionsContainer = document.getElementById(
  "challengeOptionsContainer"
);
const challengeTitleEl = document.getElementById("challengeTitle");
const endChallengeBtn = document.getElementById("endChallengeBtn");

// sounds
const soundClick = document.getElementById("sound-click");
const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");
const soundLevelup = document.getElementById("sound-levelup");
const soundAlt = document.getElementById("sound-alt");
const bgMusic = document.getElementById("bg-music");

// ============================
//  UTILITIES
// ============================

function playSound(audioEl) {
  try {
    if (!audioEl) return;
    if (!state.settings.soundOn) return;
    audioEl.currentTime = 0;
    audioEl.play();
  } catch {
    // ignore autoplay errors
  }
}

function saveState() {
  try {
    localStorage.setItem("journeyPhysicsState", JSON.stringify(state));
  } catch {
    // ignore
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem("journeyPhysicsState");
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state = { ...structuredClone(defaultState), ...parsed };
  } catch {
    state = structuredClone(defaultState);
  }
}

function openOverlay() {
  overlayEl.classList.add("active");
}

function closeOverlayIfNoModal() {
  const anyOpen =
    levelModal.classList.contains("show") ||
    resultModal.classList.contains("show") ||
    cutsceneModal.classList.contains("show") ||
    challengeModal.classList.contains("show");
  if (!anyOpen) {
    overlayEl.classList.remove("active");
  }
}

function openModal(modalEl) {
  openOverlay();
  modalEl.classList.remove("hidden");
  requestAnimationFrame(() => {
    modalEl.classList.add("show");
  });
}

function closeModal(modalEl) {
  modalEl.classList.remove("show");
  setTimeout(() => {
    modalEl.classList.add("hidden");
    closeOverlayIfNoModal();
  }, 180);
}

function pickRandom(array) {
  if (!array.length) return null;
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

// INTRO FLOW
function showIntroStep1() {
  introStep1.classList.remove("hidden");
  introStep2.classList.add("hidden");
}

function showIntroStep2() {
  introStep1.classList.add("hidden");
  introStep2.classList.remove("hidden");
}

function completeIntro() {
  const name = introNameInput.value.trim();
  const nim = introNimInput.value.trim();
  const kelas = introClassInput.value.trim();
  const prodi = introStudyInput.value.trim();

  if (name) {
    state.playerName = name;
  }
  state.studentId = nim;
  state.classGroup = kelas;
  state.studyProgram = prodi;
  state.onboarded = true;

  saveState();
  renderProfile();

  introScreen.classList.add("hidden");
}

// ============================
//  RENDER UI
// ============================

function renderProfile() {
  playerNameDisplay.textContent = state.playerName || "Player Fisika";

  const parts = [];
  if (state.studentId) parts.push(`NIM: ${state.studentId}`);
  if (state.classGroup) parts.push(`Kelas: ${state.classGroup}`);
  if (state.studyProgram) parts.push(state.studyProgram);

  profileMeta.textContent = parts.join(" · ");
}

function updateScoreboard() {
  totalScoreDisplay.textContent = state.score.toString();
  completedCountDisplay.textContent = `${state.completedLevels.length}/${levels.length}`;
  answeredCountDisplay.textContent = state.answered.toString();
  const accuracy =
    state.answered === 0 ? 0 : Math.round((state.correct / state.answered) * 100);
  accuracyDisplay.textContent = `${accuracy}%`;

  const percent = Math.round(
    (state.completedLevels.length / levels.length) * 100
  );
  progressFill.style.width = `${percent}%`;
  progressPercentLabel.textContent = `${percent}%`;

  summaryList.innerHTML = "";
  const li1 = document.createElement("li");
  li1.textContent = `Total skor: ${state.score}`;
  const li2 = document.createElement("li");
  li2.textContent = `Level selesai: ${state.completedLevels.length} dari ${levels.length}`;
  const li3 = document.createElement("li");
  li3.textContent = `Soal dijawab: ${state.answered} (benar ${state.correct})`;
  const li4 = document.createElement("li");
  li4.textContent = `Akurasi: ${accuracy}%`;
  summaryList.append(li1, li2, li3, li4);
}

function renderMap() {
  mapContainer.innerHTML = "";
  levels.forEach((level) => {
    const card = document.createElement("div");
    card.className = "level-card";
    card.dataset.levelId = level.id;

    const isCompleted = state.completedLevels.includes(level.id);

    const headerRow = document.createElement("div");
    headerRow.className = "level-header-row";

    const titleBlock = document.createElement("div");
    const nameEl = document.createElement("div");
    nameEl.className = "level-name";
    nameEl.textContent = level.name;
    const tagEl = document.createElement("div");
    tagEl.className = "level-tag-mini";
    tagEl.textContent = level.tag;
    titleBlock.append(nameEl, tagEl);

    const statusPill = document.createElement("div");
    statusPill.className = "level-status-pill";
    statusPill.textContent = isCompleted ? "Selesai" : "Belum";

    if (isCompleted) {
      statusPill.classList.add("completed");
    }

    headerRow.append(titleBlock, statusPill);

    const descEl = document.createElement("p");
    descEl.className = "level-desc";
    descEl.textContent = level.description;

    const footerRow = document.createElement("div");
    footerRow.className = "level-footer-row";
    const left = document.createElement("span");
    left.textContent = `Level ${level.id}`;
    const right = document.createElement("span");
    right.textContent = isCompleted ? "Terbuka" : "Belum dijelajahi";
    footerRow.append(left, right);

    card.append(headerRow, descEl, footerRow);
    card.addEventListener("click", () => {
      playSound(soundClick);
      openLevel(level.id);
    });

    mapContainer.appendChild(card);
  });
}

function renderBadges() {
  badgeContainer.innerHTML = "";
  let newlyEarned = false;

  badgeDefinitions.forEach((badge) => {
    const earned = badge.condition(state);
    if (earned && !state.badges.includes(badge.id)) {
      state.badges.push(badge.id);
      newlyEarned = true;
    }

    const pill = document.createElement("div");
    pill.className = "badge-pill";
    if (earned) pill.classList.add("earned");

    const iconSpan = document.createElement("span");
    iconSpan.className = "badge-icon";
    iconSpan.textContent = earned ? "●" : "○";

    const textSpan = document.createElement("span");
    textSpan.textContent = badge.label;

    pill.title = badge.description;
    pill.append(iconSpan, textSpan);
    badgeContainer.appendChild(pill);
  });

  if (newlyEarned) {
    playSound(soundAlt);
  }
}

function renderScientists() {
  scientistContainer.innerHTML = "";
  scientistCards.forEach((cardDef) => {
    const card = document.createElement("div");
    const unlocked = state.unlockedScientists.includes(cardDef.levelId);
    card.className = "scientist-card" + (unlocked ? "" : " locked");

    const nameEl = document.createElement("h4");
    nameEl.textContent = cardDef.name;

    const eraEl = document.createElement("div");
    eraEl.className = "scientist-era";
    eraEl.textContent = cardDef.era;

    const taglineEl = document.createElement("p");
    taglineEl.className = "scientist-tagline";
    taglineEl.textContent = cardDef.tagline;

    card.append(nameEl, eraEl, taglineEl);
    scientistContainer.appendChild(card);
  });
}

function renderLeaderboard() {
  leaderboardList.innerHTML = "";
  const sorted = [...state.leaderboard].sort((a, b) => b.score - a.score);
  const top = sorted.slice(0, 5);
  if (top.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Belum ada catatan. Coba Challenge Mode.";
    leaderboardList.appendChild(li);
    return;
  }
  top.forEach((entry, idx) => {
    const li = document.createElement("li");
    const left = document.createElement("span");
    left.textContent = `${idx + 1}. ${entry.name}`;
    const right = document.createElement("span");
    right.textContent = entry.score.toString();
    li.append(left, right);
    leaderboardList.appendChild(li);
  });
}

let currentFactIndex = 0;
function showCurrentFact() {
  factBarText.textContent = randomFacts[currentFactIndex];
}

function nextFact() {
  currentFactIndex = (currentFactIndex + 1) % randomFacts.length;
  showCurrentFact();
}

// ============================
//  LEVEL FLOW
// ============================

function openLevel(levelId) {
  currentLevelId = levelId;
  selectedOptionIndex = null;
  submitAnswerBtn.disabled = true;

  const level = levels.find((l) => l.id === levelId);
  if (!level) return;

  levelTitleEl.textContent = level.name;
  levelTagEl.textContent = level.tag;
  levelDescriptionEl.textContent = level.description;
  levelContentEl.textContent = level.content;
  questionTextEl.textContent = level.question;

  if (level.image) {
    levelImageWrapper.classList.remove("hidden");
    levelImageEl.src = level.image;
    levelImageEl.alt = level.imageCaption || "Ilustrasi materi";
    levelImageCaptionEl.textContent = level.imageCaption || "";
  } else {
    levelImageWrapper.classList.add("hidden");
  }

  optionsContainer.innerHTML = "";
  level.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.type = "button";
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      playSound(soundClick);
      selectedOptionIndex = idx;
      Array.from(optionsContainer.children).forEach((child) =>
        child.classList.remove("selected")
      );
      btn.classList.add("selected");
      submitAnswerBtn.disabled = false;
    });
    optionsContainer.appendChild(btn);
  });

  openModal(levelModal);
}

function handleSubmitLevelAnswer() {
  if (currentLevelId == null || selectedOptionIndex == null) return;

  const level = levels.find((l) => l.id === currentLevelId);
  const isCorrect = selectedOptionIndex === level.correctIndex;

  state.answered++;
  if (isCorrect) {
    state.correct++;
    state.score += 10;
    playSound(soundCorrect);
  } else {
    playSound(soundWrong);
  }

  if (!state.completedLevels.includes(level.id)) {
    state.completedLevels.push(level.id);
    if (!state.unlockedScientists.includes(level.id)) {
      state.unlockedScientists.push(level.id);
    }
    playSound(soundLevelup);
    maybeShowCutscene();
  }

  renderBadges();
  renderScientists();
  updateScoreboard();
  renderMap();
  saveState();

  closeModal(levelModal);
  showLevelResult(isCorrect, level);
}

function showLevelResult(isCorrect, level) {
  resultTitleEl.textContent = isCorrect ? "Jawaban Tepat" : "Jawaban Belum Tepat";
  resultMessageEl.textContent = isCorrect
    ? "Kamu berhasil menjawab soal pada level ini dengan benar."
    : "Jawaban belum tepat. Manfaatkan materi singkat untuk meninjau kembali konsep penting.";

  const accuracy =
    state.answered === 0 ? 0 : Math.round((state.correct / state.answered) * 100);

  resultStatsEl.innerHTML = `
    <p><strong>Level:</strong> ${level.name}</p>
    <p><strong>Skor total:</strong> ${state.score}</p>
    <p><strong>Soal dijawab:</strong> ${state.answered} (benar ${state.correct})</p>
    <p><strong>Akurasi keseluruhan:</strong> ${accuracy}%</p>
  `;

  const newlyUnlocked = [];
  if (state.unlockedScientists.includes(level.id)) {
    newlyUnlocked.push(
      `Kartu ilmuwan untuk <span class="highlight">${level.name}</span> telah terbuka.`
    );
  }
  const earnedBadges = badgeDefinitions.filter((b) =>
    state.badges.includes(b.id)
  );
  if (earnedBadges.length) {
    newlyUnlocked.push(
      `Saat ini kamu memiliki <span class="highlight">${earnedBadges.length}</span> badge. Lihat di panel sebelah kiri.`
    );
  }

  if (newlyUnlocked.length === 0) {
    unlockedInfoEl.innerHTML = "";
  } else {
    unlockedInfoEl.innerHTML = newlyUnlocked
      .map((txt) => `<p>${txt}</p>`)
      .join("");
  }

  openModal(resultModal);
}

// ============================
//  CUTSCENES
// ============================

function maybeShowCutscene() {
  const completed = state.completedLevels.length;
  if (completed % 2 !== 0) return;
  const index = completed / 2 - 1;
  if (index < 0 || index >= cutscenes.length) return;

  const cs = cutscenes[index];
  if (state.cutscenesShown.includes(cs.id)) return;

  state.cutscenesShown.push(cs.id);
  saveState();

  cutsceneTitleEl.textContent = cs.title;
  cutsceneTextEl.textContent = cs.text;
  openModal(cutsceneModal);
  playSound(soundAlt);
}

// ============================
//  CHALLENGE & EXTREME MODE
// ============================

function createQuestionPool() {
  return levels.map((l) => ({
    sourceLevelId: l.id,
    question: l.question,
    options: l.options,
    correctIndex: l.correctIndex
  }));
}

function startChallenge(modeType = "challenge") {
  if (challengeActive) return;
  challengeActive = true;
  challengeModeType = modeType;

  challengeTimeLeft = modeType === "challenge" ? 60 : 45;
  challengeCorrect = 0;
  challengeWrong = 0;

  challengeTimeDisplay.textContent = challengeTimeLeft.toString();
  challengeCorrectDisplay.textContent = "0";
  challengeWrongDisplay.textContent = "0";

  challengeTitleEl.textContent =
    modeType === "challenge"
      ? "Challenge Mode – Latihan Cepat"
      : "Extreme Mode – Risiko Skor Turun";

  openModal(challengeModal);
  playSound(soundAlt);
  nextChallengeQuestion();

  if (challengeTimer) clearInterval(challengeTimer);
  challengeTimer = setInterval(() => {
    challengeTimeLeft--;
    challengeTimeDisplay.textContent = challengeTimeLeft.toString();
    if (challengeTimeLeft <= 0) {
      stopChallenge();
    }
  }, 1000);
}

function nextChallengeQuestion() {
  const pool = createQuestionPool();
  currentChallengeQuestion = pickRandom(pool);
  if (!currentChallengeQuestion) return;
  challengeQuestionText.textContent = currentChallengeQuestion.question;
  challengeOptionsContainer.innerHTML = "";

  currentChallengeQuestion.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.type = "button";
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      handleChallengeAnswer(idx);
    });
    challengeOptionsContainer.appendChild(btn);
  });
}

function handleChallengeAnswer(selectedIdx) {
  if (!currentChallengeQuestion) return;
  const isCorrect = selectedIdx === currentChallengeQuestion.correctIndex;

  state.answered++;
  if (isCorrect) {
    state.correct++;
    state.score += challengeModeType === "challenge" ? 3 : 4;
    challengeCorrect++;
    playSound(soundCorrect);
  } else {
    if (challengeModeType === "extreme") {
      state.score = Math.max(0, state.score - 1);
    }
    challengeWrong++;
    playSound(soundWrong);
  }

  challengeCorrectDisplay.textContent = challengeCorrect.toString();
  challengeWrongDisplay.textContent = challengeWrong.toString();

  renderBadges();
  renderScientists();
  updateScoreboard();
  renderMap();
  saveState();

  nextChallengeQuestion();
}

function stopChallenge() {
  if (!challengeActive) return;
  challengeActive = false;
  if (challengeTimer) {
    clearInterval(challengeTimer);
    challengeTimer = null;
  }

  const sessionScore =
    challengeModeType === "challenge"
      ? challengeCorrect * 3
      : challengeCorrect * 4 - challengeWrong;
  const finalScore = Math.max(0, sessionScore);

  const entry = {
    name: state.playerName,
    score: finalScore,
    mode: challengeModeType,
    date: new Date().toISOString()
  };
  state.leaderboard.push(entry);
  renderLeaderboard();
  saveState();

  closeModal(challengeModal);

  resultTitleEl.textContent = "Challenge Selesai";
  resultMessageEl.textContent =
    "Latihan cepat berakhir. Berikut ringkasan hasil selama sesi challenge.";
  resultStatsEl.innerHTML = `
    <p><strong>Mode:</strong> ${
      challengeModeType === "challenge" ? "Challenge" : "Extreme"
    }</p>
    <p><strong>Benar:</strong> ${challengeCorrect}</p>
    <p><strong>Salah:</strong> ${challengeWrong}</p>
    <p><strong>Skor sesi challenge:</strong> ${finalScore}</p>
    <p><strong>Skor total saat ini:</strong> ${state.score}</p>
  `;
  unlockedInfoEl.innerHTML =
    `<p>Catatan skor challenge disimpan di bagian <span class="highlight">Leaderboard Lokal</span>.</p>`;
  openModal(resultModal);
}

// ============================
//  NARRATOR MODE
// ============================

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("Fitur narasi tidak didukung di browser ini.");
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  } catch {
    // ignore
  }
}

function handleNarrator() {
  if (currentLevelId == null) return;
  const level = levels.find((l) => l.id === currentLevelId);
  if (!level) return;
  const textToSpeak = `${level.name}. ${level.description}. ${
    level.content
  }. Pertanyaan: ${level.question}`;
  speakText(textToSpeak);
}

// ============================
//  SETTINGS
// ============================

function applyTheme() {
  if (state.settings.darkMode) {
    document.body.classList.remove("light");
    toggleThemeBtn.textContent = "Mode Terang";
  } else {
    document.body.classList.add("light");
    toggleThemeBtn.textContent = "Mode Gelap";
  }
}

function updateSoundButton() {
  toggleSoundBtn.textContent = state.settings.soundOn
    ? "Suara: ON"
    : "Suara: OFF";
}

function updateMusicButton() {
  toggleMusicBtn.textContent = state.settings.musicOn
    ? "Musik: ON"
    : "Musik: OFF";
}

function ensureMusicState() {
  try {
    if (state.settings.musicOn) {
      bgMusic.volume = 0.6;
      bgMusic
        .play()
        .catch(() => {
          // user gesture may be needed
        });
    } else {
      bgMusic.pause();
    }
  } catch {
    // ignore
  }
}

// ============================
//  EVENT LISTENERS
// ============================

// Intro
if (introNextBtn) {
  introNextBtn.addEventListener("click", () => {
    playSound(soundClick);
    showIntroStep2();
  });
}

if (introBackBtn) {
  introBackBtn.addEventListener("click", () => {
    playSound(soundClick);
    showIntroStep1();
  });
}

if (introStartBtn) {
  introStartBtn.addEventListener("click", () => {
    playSound(soundClick);
    completeIntro();
  });
}

// Close modal buttons
document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetId = e.currentTarget.getAttribute("data-close-modal");
    if (!targetId) return;
    const modalEl = document.getElementById(targetId);
    if (!modalEl) return;

    if (targetId === "challengeModal") {
      stopChallenge();
    } else {
      closeModal(modalEl);
    }
  });
});

resultOkBtn.addEventListener("click", () => {
  playSound(soundClick);
  closeModal(resultModal);
});

cutsceneContinueBtn.addEventListener("click", () => {
  playSound(soundClick);
  closeModal(cutsceneModal);
});

// overlay click -> tidak menutup modal (supaya tidak tertutup tanpa sengaja)
overlayEl.addEventListener("click", () => {});

// Level modal actions
submitAnswerBtn.addEventListener("click", () => {
  playSound(soundClick);
  handleSubmitLevelAnswer();
});

narratorBtn.addEventListener("click", () => {
  playSound(soundClick);
  handleNarrator();
});

// fact bar
nextFactBtn.addEventListener("click", () => {
  playSound(soundClick);
  nextFact();
});

// settings buttons
toggleSoundBtn.addEventListener("click", () => {
  state.settings.soundOn = !state.settings.soundOn;
  updateSoundButton();
  saveState();
  playSound(soundClick);
});

toggleMusicBtn.addEventListener("click", () => {
  state.settings.musicOn = !state.settings.musicOn;
  updateMusicButton();
  saveState();
  ensureMusicState();
  playSound(soundClick);
});

toggleThemeBtn.addEventListener("click", () => {
  state.settings.darkMode = !state.settings.darkMode;
  applyTheme();
  saveState();
  playSound(soundClick);
});

resetProgressBtn.addEventListener("click", () => {
  const ok = confirm(
    "Yakin ingin menghapus semua progres, skor, badge, dan leaderboard?"
  );
  if (!ok) return;
  state = structuredClone(defaultState);
  saveState();
  applyTheme();
  updateSoundButton();
  updateMusicButton();
  ensureMusicState();
  renderProfile();
  updateScoreboard();
  renderMap();
  renderBadges();
  renderScientists();
  renderLeaderboard();
  nextFact();
  playSound(soundClick);
});

// profile name
editNameBtn.addEventListener("click", () => {
  const newName = prompt("Nama yang ingin ditampilkan:", state.playerName);
  if (!newName) return;
  state.playerName = newName.trim().slice(0, 32) || state.playerName;
  renderProfile();
  saveState();
  playSound(soundClick);
});

// modes
modeNormalBtn.addEventListener("click", () => {
  playSound(soundClick);
  alert("Mode belajar biasa: klik level pada peta untuk memilih materi.");
});

modeChallengeBtn.addEventListener("click", () => {
  playSound(soundClick);
  startChallenge("challenge");
});

modeExtremeBtn.addEventListener("click", () => {
  playSound(soundClick);
  startChallenge("extreme");
});

// end challenge button
endChallengeBtn.addEventListener("click", () => {
  stopChallenge();
});

// ============================
//  INIT
// ============================

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  applyTheme();
  updateSoundButton();
  updateMusicButton();
  ensureMusicState();
  renderProfile();
  updateScoreboard();
  renderMap();
  renderBadges();
  renderScientists();
  renderLeaderboard();
  showCurrentFact();

  if (state.onboarded) {
    introScreen.classList.add("hidden");
  } else {
    showIntroStep1();
  }
});
