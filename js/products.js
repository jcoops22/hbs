// overlay effect
let overlay = document.querySelector(".product_overlay");
let header = document.querySelector(".product_container h1");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
    header.style.opacity = 0;
  } else {
    overlay.style.opacity = "0.7";
    overlay.style.pointerEvents = "auto";
    header.style.opacity = 1;
  }
});
// end overlay effect
