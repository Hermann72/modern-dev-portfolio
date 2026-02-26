function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((section) => {
    const elementTop = section.getBoundingClientRect().top;
    const visible = 120;

    if (elementTop < windowHeight - visible) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Scroll correcto del navbar */

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").replace("#", "");
    const targetSection = document.getElementById(targetId);

    const offset = 70; // altura del navbar
    const position = targetSection.offsetTop - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
});
