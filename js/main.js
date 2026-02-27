document.addEventListener("DOMContentLoaded", () => {
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

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").replace("#", "");
      const targetSection = document.getElementById(targetId);

      const offset = 70;
      const position = targetSection.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    });
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  function setActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll("#nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  const viewProjectsBtn = document.getElementById("view-projects-btn");

  viewProjectsBtn.addEventListener("click", () => {
    const projectsSection = document.getElementById("projects");

    projectsSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
