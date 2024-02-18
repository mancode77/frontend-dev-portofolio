/**
 * Mendapatkan elemen HTML dengan ID yang ditentukan.
 * 
 * @param {string} id ID elemen yang ingin diambil.
 * @returns {HTMLElement|null} Elemen dengan ID yang diberikan, atau null jika tidak ditemukan.
 */
const openHamburgerButton = document.getElementById("openHam");
const closeHamburgerButton = document.getElementById("closeHam");
const navigationItems = document.getElementById("navigation-items");

/**
 * Toggle tampilan menu hamburger.
 */
function toggleHamburgerMenu() {
  // Tampilkan/sembunyikan elemen daftar item navigasi
  navigationItems.style.display = navigationItems.style.display === "flex" ? "none" : "flex";

  // Tampilkan/sembunyikan tombol penutup berdasarkan status menu
  closeHamburgerButton.style.display = navigationItems.style.display === "flex" ? "block" : "none";

  // Tampilkan/sembunyikan tombol pembuka berdasarkan status menu (sebaliknya dari tombol penutup)
  openHamburgerButton.style.display = navigationItems.style.display === "flex" ? "none" : "block";
}

// Tambahkan event listener untuk kedua tombol
openHamburgerButton.addEventListener("click", toggleHamburgerMenu);
closeHamburgerButton.addEventListener("click", toggleHamburgerMenu);

// Hapus event listener lama untuk mencegah kebocoran memori (opsional)
openHamburger.removeEventListener("click", () =>
  hamburgerEvent("flex", "block", "none")
);
closeHamburger.removeEventListener("click", () =>
  hamburgerEvent("none", "none", "block")
);

/**
 * Menangani event scroll window.
 */
function handleScroll() {
  // Dapatkan elemen navbar
  const navbar = document.getElementById("navbar");

  // Ubah warna background navbar berdasarkan posisi scroll
  navbar.style.backgroundColor =
    window.scrollY > 130 ? "rgb(27, 24, 24)" : "transparent";
}

// Tambahkan event listener scroll ke window
window.addEventListener("scroll", handleScroll);
