/**
 * Menginisialisasi slider Swiper untuk menampilkan portofolio.
 * 
 * @param {string} containerSelector Selektor CSS untuk elemen container portofolio.
 * @param {object} options Konfigurasi untuk slider Swiper.
 */
const swiper = new Swiper(".continer-portofolio", {
  slidesPerView: 3,           // Jumlah slide yang ditampilkan sekaligus (3 pada awalnya).
  spaceBetween: 25,          // Jarak antar slide dalam piksel (25 piksel).
  loop: true,                // Mengaktifkan loop carousel (slide terakhir berpindah ke awal).
  grabCursor: true,           // Menampilkan kursor tangan saat hover di atas slider.
  centeredSlides: true,        // Menempatkan slide aktif di tengah container.
  autoplay: {
    delay: 2000,             // Durasi penundaan antar slide dalam milidetik (2 detik).
    disableOnInteraction: false, // Tetap putar otomatis meski pengguna berinteraksi.
  },
  pagination: {
    el: ".swiper-pagination",   // Selektor CSS untuk elemen pagination.
    clickable: true,           // Mengaktifkan klik pada elemen pagination untuk navigasi.
    dynamicBullets: true,      // Membuat elemen bullet pagination secara dinamis sesuai jumlah slide.
  },
  navigation: {
    nextEl: ".swiper-button-next",  // Selektor CSS untuk tombol navigasi "Selanjutnya".
    prevEl: ".swiper-button-prev",  // Selektor CSS untuk tombol navigasi "Sebelumnya".
  },

  breakpoints: {
    0: {
      slidesPerView: 1,        // 1 slide untuk layar dengan lebar kurang dari 626 piksel.
    },
    626: {
      slidesPerView: 2,        // 2 slide untuk layar dengan lebar antara 626 dan 920 piksel.
    },
    921: {
      slidesPerView: 3,        // 3 slide untuk layar dengan lebar lebih dari 920 piksel.
    },
  },
});
