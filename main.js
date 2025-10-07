const moon = document.querySelector(".moon");
const servicesSection = document.querySelector("#services");
const sections = document.querySelectorAll(".container, #services, #skills, #projects, #contact");
const shownSections = new Set();


if(window.innerWidth <= 780){
  moon.style.width = "120px";
  moon.style.height = "120px";
}

let moonTop = 50;
const parallaxFactor = 0.8; 
function updateMoon() {
  const scrollY = window.scrollY;


  const targetY = 50 + scrollY * parallaxFactor;
  moonTop += (targetY - moonTop) * 0.1; 
moon.style.transform = `translate(-50%, ${moonTop}px)`;


  const moonRect = moon.getBoundingClientRect();
  const moonCenterY = scrollY + moonRect.top + moonRect.height / 2;


  if(moonCenterY >= servicesSection.offsetTop){
    moon.style.opacity = "0";
  } else {
    moon.style.opacity = "1";
  }

  // animate sections
  const triggerBottom = window.innerHeight * 0.83;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom && !shownSections.has(section)){
      section.classList.add("visible");
      shownSections.add(section);
    }
  });

  requestAnimationFrame(updateMoon);
}
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active'); // optional: for animation
});

// start
updateMoon();
