const openHamburgerButton = document.getElementById("openHam");
const closeHamburgerButton = document.getElementById("closeHam");
const navigationItems = document.getElementById("navigation-items");

function toggleHamburgerMenu() {
 navigationItems.style.display = navigationItems.style.display === "flex" ? "none" : "flex";
 closeHamburgerButton.style.display = navigationItems.style.display === "flex" ? "block" : "none";
 openHamburgerButton.style.display = navigationItems.style.display === "flex" ? "none" : "block";
}

openHamburgerButton.addEventListener("click", toggleHamburgerMenu);
closeHamburgerButton.addEventListener("click", toggleHamburgerMenu);

//* prevent memory leaks
openHamburger.removeEventListener("click", () =>
  hamburgerEvent("flex", "block", "none")
);
closeHamburger.removeEventListener("click", () =>
  hamburgerEvent("none", "none", "block")
);

function handleScroll() {
 const navbar = document.getElementById("navbar");
 navbar.style.backgroundColor =
   window.scrollY > 130 ? "rgb(27, 24, 24)" : "transparent";
}

window.addEventListener("scroll", handleScroll);
