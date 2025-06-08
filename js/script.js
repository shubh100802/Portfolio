// ============ Header typing ============ //

const roles = [
  "Full Stack Developer",
  "Software Developer - Java",
  "Cybersecurity Student",
  "Problem Solver",
  "Image/Video Editor",
];


let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  if (index === roles.length) index = 0;
  currentRole = roles[index];

  let displayText = isDeleting
    ? currentRole.substring(0, charIndex--)
    : currentRole.substring(0, charIndex++);

  document.getElementById("typed-role").textContent = displayText;

  if (!isDeleting && charIndex === currentRole.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ============ Navbar ============ //

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});


// ============ Color change ============ //

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Destroy old particles canvas
  document.getElementById("particles-js").innerHTML = "";

  const isDark = document.body.classList.contains("dark");
  loadParticles(isDark ? "#00ffff" : "#0077b6", isDark ? "#00ffff" : "#0077b6");
});


// ============ Gmail ============ //

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_v6kui43", "template_9ti6z9g", this)
    .then(function () {
      alert("Message sent successfully! ✅");
      document.getElementById("contact-form").reset();
    }, function (error) {
      alert("Oops! Something went wrong. ❌");
      console.log(error);
    });
});

