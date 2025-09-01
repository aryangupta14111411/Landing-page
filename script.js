// JavaScript Code

// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const toggleDark = document.getElementById('toggle-dark');
toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Newsletter Popup
// const popup = document.getElementById('newsletter-popup');
// const closePopup = document.getElementById('close-popup');
// setTimeout(() => {
//   popup.style.display = 'block';
// }, 10000);
// closePopup.addEventListener('click', () => {
//   popup.style.display = 'none';
// });

// Animated Stats Counter
const counters = document.querySelectorAll('.counter');
const statsSection = document.querySelector('.stats');
let started = false;

function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const increment = target / 200;
  let count = 0;
  const updateCount = () => {
    count += increment;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
}

window.addEventListener('scroll', () => {
  const sectionPos = statsSection.getBoundingClientRect().top;
  if (!started && sectionPos < window.innerHeight) {
    counters.forEach(counter => animateCounter(counter));
    started = true;
  }
});

// Live Clock Display
const clock = document.getElementById('clock');
function updateClock() {
  const now = new Date();
  clock.innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Scroll Progress Bar
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${progress}%`;
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Form submitted successfully!');
  form.reset();
});

// Newsletter Subscribe Button Fix
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletter-email').value.trim();
  if (!emailInput) {
    alert('Please enter your email address.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Thank you for subscribing!');
  this.reset();
  popup.style.display = 'none';
});
