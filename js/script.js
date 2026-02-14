const roles = [
  "Software Development Engineer (Java)",
  "Backend Developer - APIs and Auth",
  "REST API and Database Design",
  "Java + Node.js System Builder",
  "Problem Solver (DSA)"
];

let roleIndex = 0;

function rotateRoles() {
  const target = document.getElementById("typed-role");
  if (!target) return;

  target.textContent = roles[roleIndex];

  setInterval(() => {
    target.classList.add("is-exit");

    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      target.textContent = roles[roleIndex];
      target.classList.remove("is-exit");
      target.classList.add("is-enter");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          target.classList.remove("is-enter");
        });
      });
    }, 240);
  }, 2400);
}

function animateToolNames() {
  const cards = document.querySelectorAll(".tool-card[data-tooltip]");
  if (!cards.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const labels = Array.from(cards).map((card) => card.getAttribute("data-tooltip") || "");
  const maxLen = labels.reduce((max, label) => Math.max(max, label.length), 0);

  if (prefersReducedMotion) {
    cards.forEach((card, idx) => {
      card.setAttribute("data-typed", labels[idx]);
    });
    return;
  }

  cards.forEach((card) => card.setAttribute("data-typed", ""));

  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    charIndex += deleting ? -1 : 1;

    cards.forEach((card, idx) => {
      card.setAttribute("data-typed", labels[idx].slice(0, charIndex));
    });

    let delay = deleting ? 42 : 68;

    if (!deleting && charIndex === maxLen) {
      delay = 1000;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      delay = 300;
    }

    setTimeout(tick, delay);
  };

  tick();
}

function setToolCount() {
  const counter = document.getElementById("tool-count");
  if (!counter) return;
  counter.textContent = String(document.querySelectorAll(".tool-card[data-tooltip]").length);
}

function startToolsTyping() {
  const target = document.getElementById("typed-tool");
  if (!target) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const words = ["Build", "Test", "Deploy", "Iterate"];
  if (prefersReducedMotion) {
    target.textContent = words[0];
    return;
  }
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = words[wordIndex];
    charIndex += deleting ? -1 : 1;
    target.textContent = current.slice(0, charIndex);

    let delay = deleting ? 50 : 86;

    if (!deleting && charIndex === current.length) {
      delay = 1000;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 260;
    }

    setTimeout(tick, delay);
  };

  tick();
}

document.addEventListener("DOMContentLoaded", () => {
  rotateRoles();
  startToolsTyping();
  setToolCount();
  animateToolNames();

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-links a");
  const themeBtn = document.getElementById("toggle-theme");
  const contactForm = document.getElementById("contact-form");
  const contactStatus = document.getElementById("contact-status");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  if (themeBtn) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light");
      themeBtn.textContent = "\u2600\uFE0F";
    }

    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const isLight = document.body.classList.contains("light");
      themeBtn.textContent = isLight ? "\u2600\uFE0F" : "\uD83C\uDF19";
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  if (contactForm) {
    let lastSubmitAt = 0;
    const minIntervalMs = 12000;

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector(".submit-btn");
      const honeypot = contactForm.querySelector('input[name="company"]');
      const now = Date.now();

      if (honeypot && honeypot.value.trim() !== "") {
        if (contactStatus) {
          contactStatus.className = "contact-status is-visible is-success";
          contactStatus.textContent = "Message sent successfully.";
        }
        contactForm.reset();
        return;
      }

      if (now - lastSubmitAt < minIntervalMs) {
        if (contactStatus) {
          contactStatus.className = "contact-status is-visible is-error";
          contactStatus.textContent = "Please wait a few seconds before sending again.";
        }
        return;
      }
      lastSubmitAt = now;

      if (contactStatus) {
        contactStatus.className = "contact-status is-visible";
        contactStatus.textContent = "Sending message...";
      }
      if (submitBtn) {
        submitBtn.disabled = true;
      }

      emailjs.sendForm("service_v6kui43", "template_9ti6z9g", this).then(
        () => {
          if (contactStatus) {
            contactStatus.className = "contact-status is-visible is-success";
            contactStatus.textContent = "Message sent successfully.";
            setTimeout(() => {
              contactStatus.className = "contact-status";
              contactStatus.textContent = "";
            }, 4200);
          }
          contactForm.reset();
        },
        (error) => {
          if (contactStatus) {
            contactStatus.className = "contact-status is-visible is-error";
            contactStatus.textContent = "Could not send message. Please try again.";
            setTimeout(() => {
              contactStatus.className = "contact-status";
              contactStatus.textContent = "";
            }, 4800);
          }
          console.error(error);
        }
      ).finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
        }
      });
    });
  }
});
