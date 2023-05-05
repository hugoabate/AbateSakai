function scrollToSection(sectionClass) {
  const section = document.querySelector(sectionClass);
  section.scrollIntoView({ behavior: "smooth" });
}

const navBtn = document.querySelector(".navBtn");
navBtn.addEventListener("click", function () {
  scrollToSection();
});

function topFunction() {
  document.documentElement.scrollTop = 0;
}
