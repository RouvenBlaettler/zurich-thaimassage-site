// ---------- Scroll reveal ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);

function revealVisible() {
  document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => revealObserver.observe(el));
}

// ---------- Panel navigation (Home / Angebot / Über uns) ----------
// Old site behaviour: these are not real pages, just client-side tabs.
const panels = document.querySelectorAll(".panel");
const navButtons = document.querySelectorAll("[data-nav]");
const mobileNav = document.querySelector(".mobile-nav");
const burger = document.querySelector(".burger");

function showPanel(name, { scrollTop = true } = {}) {
  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== name;
  });

  navButtons.forEach((btn) => {
    const isMatch = btn.dataset.nav === name;
    if (btn.classList.contains("nav-pill")) {
      if (isMatch) btn.setAttribute("aria-current", "page");
      else btn.removeAttribute("aria-current");
    }
  });

  if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });

  history.replaceState(null, "", `#${name}`);
  mobileNav?.classList.remove("open");
  burger?.setAttribute("aria-expanded", "false");

  revealVisible();
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => showPanel(btn.dataset.nav));
});

burger?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});

const initialPanel = ["home", "angebot", "ueberuns"].includes(location.hash.slice(1))
  ? location.hash.slice(1)
  : "home";
showPanel(initialPanel, { scrollTop: false });

// ---------- Angebot: filter tabs ----------
const filterTabs = document.querySelectorAll(".filter-tab");
const priceRows = document.querySelectorAll(".price-row");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;
    priceRows.forEach((row) => {
      const match = filter === "alle" || row.dataset.category === filter;
      row.classList.toggle("hidden-row", !match);
    });
  });
});

// ---------- "Jetzt buchen" on a price row -> jump to booking form ----------
document.querySelectorAll("[data-book]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nachricht = document.getElementById("f-nachricht");
    if (nachricht && !nachricht.value) {
      nachricht.value = `Ich möchte gerne folgenden Termin buchen: ${btn.dataset.book}`;
    }
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("f-vorname")?.focus();
  });
});

// ---------- Contact / booking form (frontend-only placeholder for now) ----------
const bookingForm = document.getElementById("booking-form");
bookingForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const successMsg = bookingForm.querySelector(".form-success");
  successMsg.hidden = false;
  bookingForm.reset();
  successMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

revealVisible();
