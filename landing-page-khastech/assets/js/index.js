let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scroll ke bawah, sembunyikan navbar
    navbar.classList.add("hidden");
  } else {
    // Scroll ke atas, tampilkan navbar
    navbar.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});

// animasi
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animation = element.getAttribute("data-animation");
          const delay = element.getAttribute("data-delay") || "0s";

          // Tambahkan animasi dan delay
          element.style.animationDelay = delay;
          element.classList.add(animation);

          // Setelah animasi dijalankan, hentikan pengamatan
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.1 } // Elemen terlihat 10% sebelum animasi
  );

  elements.forEach((el) => observer.observe(el));
});
