//Responsive Nav Bar

const toggleButton = document.getElementById("menuToggle");
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
