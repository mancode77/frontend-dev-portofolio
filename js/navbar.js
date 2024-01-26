let openHamburger = document.querySelector("#openHam");
let closeHamburger = document.querySelector("#closeHam");
let navigationItems = document.querySelector("#navigation-items");

const hamburgerEvent = (navigation, close, open) => {
  navigationItems.style.display = navigation;
  closeHam.style.display = close;
  openHam.style.display = open;
};

openHamburger.addEventListener("click", () =>
  hamburgerEvent("flex", "block", "none")
);
closeHamburger.addEventListener("click", () =>
  hamburgerEvent("none", "none", "block")
);

//* prevent memory leaks
openHamburger.removeEventListener("click", () =>
  hamburgerEvent("flex", "block", "none")
);
closeHamburger.removeEventListener("click", () =>
  hamburgerEvent("none", "none", "block")
);

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop || document.documentElement.scrollTop > 130){
        document.getElementById('navbar').style.backgroundColor = 'rgb(27, 24, 24)';
    } else {
        document.getElementById('navbar').style.backgroundColor = 'transparent';
    }
}
