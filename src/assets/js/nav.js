const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");

  if (!navLinks.classList.contains("hidden")) {
    navLinks.style.maxHeight = "30vh";
    navLinks.style.overflowY = "auto";
    navLinks.style.zIndex = "10";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    navLinks.classList.add("hidden");
    navLinks.style.maxHeight = "";
    navLinks.style.overflowY = "";
    navLinks.style.zIndex = "";
  }
});

window.dispatchEvent(new Event("resize"));
