let scrollSpeed = 0;
let scrollTarget = 0;
let easing = 0.2;

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    scrollTarget += e.deltaY;
  },
  { passive: false }
);

function smoothScroll() {
  scrollSpeed += (scrollTarget - scrollSpeed) * easing;
  window.scrollTo(0, scrollSpeed);
  requestAnimationFrame(smoothScroll);
}
smoothScroll();


const moon = document.querySelector(".moon");
const servicesSection = document.querySelector("#services");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = servicesSection.offsetTop - window.innerHeight / 2;


  moon.style.transform = `translateY(${scrollY * 0.2}px)`;


  if (scrollY > maxScroll) {
    moon.style.opacity = "0";
  } else {
    moon.style.opacity = "1";
  }
});


const sections = document.querySelectorAll(".container, #services, #skills, #projects, #contact");
const shownSections = new Set(); 

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    // Only animate once
    if (sectionTop < triggerBottom && !shownSections.has(section)) {
      section.classList.add("visible");
      shownSections.add(section);
    }
  });
});
