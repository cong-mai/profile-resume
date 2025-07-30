// Animated intro text
const roles = [
  'Software Developer',
  'Web Enthusiast',
  'Machine Learning Explorer',
  'Full Stack Engineer',
  'Lifelong Learner'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleElement = document.getElementById('animated-role');

function typeRole() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    charIndex--;
    roleElement.textContent = currentRole.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
    } else {
      setTimeout(typeRole, 40);
    }
  } else {
    charIndex++;
    roleElement.textContent = currentRole.substring(0, charIndex);
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, 1200);
    } else {
      setTimeout(typeRole, 80);
    }
  }
}
if (roleElement) typeRole();

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
}); 