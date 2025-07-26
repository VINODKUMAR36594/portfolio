// Toggle Nav Menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Typing Animation
document.addEventListener("DOMContentLoaded", () => {
    new Typed("#typed-text", {
        strings: ["Vinod Kumar", "a Full Stack Developer", "a Problem Solver", "a Student at GRIET"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});

// Scroll Fade-In
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(sec => {
    sec.classList.add("fade-in");
    observer.observe(sec);
});

// Back to Top Button
const topBtn = document.getElementById("backToTop");

window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    setActiveNav();
};

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active Nav Highlight
const navItems = document.querySelectorAll(".nav-links li");

function setActiveNav() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navItems.forEach(li => li.classList.remove("active"));
    if (navItems[index]) navItems[index].classList.add("active");
}
