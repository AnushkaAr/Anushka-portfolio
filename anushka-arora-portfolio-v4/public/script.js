// ============================================================
// CERTIFICATES — this is the ONLY place you need to touch to add
// a new certificate in future. Just copy one object below, fill
// in the fields, drop the image file into /public/assets/certs/,
// and it will automatically appear in the grid. No HTML editing.
// ============================================================
const CERTIFICATES = [
  {
    title: "Certified Instructional Design Specialist (CIDS)",
    issuer: "Henry Harvin Education",
    date: "November 2025",
    image: "assets/certs/cids.jpeg"
  },
  {
    title: "Generative AI & ChatGPT for K–12 Educators",
    issuer: "Vanderbilt University · Coursera",
    date: "October 2025",
    image: "assets/certs/genai-k12.jpeg"
  },
  {
    title: "Innovative Teaching with ChatGPT",
    issuer: "Vanderbilt University · Coursera",
    date: "October 2025",
    image: "assets/certs/innovative-teaching.jpeg"
  },
  {
    title: "Generative AI for Kids, Parents & Teachers",
    issuer: "Vanderbilt University · Coursera",
    date: "October 2025",
    image: "assets/certs/genai-kids.jpeg"
  },
  {
    title: "6th International Conference — RAFAS 2025",
    issuer: "Lovely Professional University",
    date: "April 2025",
    image: "assets/certs/research-paper.jpeg"
  },
  {
    title: "Teaching Internship Completion",
    issuer: "Cambridge International School, Phagwara",
    date: "May 2026",
    image: "assets/certs/internship.jpeg"
  }
  // ↓ Add new certificates here, e.g.:
  // {
  //   title: "New Certificate Name",
  //   issuer: "Issuing Body",
  //   date: "Month Year",
  //   image: "assets/certs/your-file.jpeg"
  // }
];

function renderCertificates() {
  const grid = document.getElementById("certGrid");
  if (!grid) return;
  grid.innerHTML = CERTIFICATES.map((c, i) => `
    <div class="cert-card" data-index="${i}" tabindex="0" role="button" aria-label="View ${c.title} certificate">
      <div class="cert-thumb"><img src="${c.image}" alt="${c.title}" loading="lazy" /></div>
      <div class="cert-body">
        <h3>${c.title}</h3>
        <p>${c.issuer} · ${c.date}</p>
      </div>
    </div>
  `).join("") + `
    <div class="cert-card cert-add" aria-hidden="true">
      <strong>+ More coming soon</strong>
      <span>New certifications are added here as they're earned.</span>
    </div>
  `;

  grid.querySelectorAll(".cert-card:not(.cert-add)").forEach(card => {
    card.addEventListener("click", () => openLightbox(Number(card.dataset.index)));
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter") openLightbox(Number(card.dataset.index));
    });
  });
}

function openLightbox(index) {
  const c = CERTIFICATES[index];
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = c.image;
  document.getElementById("lightboxImg").alt = c.title;
  document.getElementById("lightboxCaption").textContent = `${c.title} — ${c.issuer}, ${c.date}`;
  lb.classList.add("is-open");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("is-open");
}

// ============================================================
// THEME TOGGLE (light default, remembers choice, respects OS)
// ============================================================
function initTheme() {
  const stored = localStorage.getItem("aa-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("aa-theme", next);
}

// ============================================================
// SCROLL PROGRESS BAR
// ============================================================
function updateScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const pct = height > 0 ? (scrollTop / height) * 100 : 0;
  bar.style.width = pct + "%";
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => io.observe(item));
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCertificates();
  initReveal();
  document.getElementById("year").textContent = new Date().getFullYear();

  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();
});
