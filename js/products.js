// nav bar hamburger
let hamburger = document.getElementById("hamburger");
let patty1 = document.getElementById("patty1");
let patty2 = document.getElementById("patty2");
let mobileNav = document.querySelector(".mobileNavMenu");
let expanded = false;

window.addEventListener("resize", () => {
  expanded = false;
  hamburger.style.transform = "rotate(0deg)";
  patty1.style.transform = "rotate(0deg)";
  patty1.style.top = "12px";
  patty2.style.top = "19px";
  // animate slide in nav menu
  mobileNav.style.transform = "translate(80vw)";
  mobileNav.style.width = 0;
  setTimeout(() => {
    mobileNav.style.display = "none";
  }, 600);
});
hamburger.addEventListener(
  "click",
  (e) => {
    if (!expanded) {
      expanded = true;
      // animate hamburger
      hamburger.style.transform = "rotate(137deg)";
      patty1.style.transform = "rotate(-90deg)";
      patty1.style.top = "17px";
      patty2.style.top = "14px";
      // animate slide in nav menu
      mobileNav.style.display = "flex";
      setTimeout(() => {
        mobileNav.style.transform = "translate(-80vw)";
        mobileNav.style.width = "80vw";
      }, 100);
    } else {
      expanded = false;
      hamburger.style.transform = "rotate(0deg)";
      patty1.style.transform = "rotate(0deg)";
      patty1.style.top = "12px";
      patty2.style.top = "19px";
      // animate slide in nav menu
      mobileNav.style.transform = "translate(80vw)";
      mobileNav.style.width = 0;
      setTimeout(() => {
        mobileNav.style.display = "none";
      }, 600);
    }
  },
  { passive: true }
);

// overlay effect
let overlay = document.querySelector(".product_overlay");
let header = document.querySelector(".product_container h1");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    overlay.style.opacity = 0;
    header.style.opacity = 0;
  } else {
    overlay.style.opacity = "0.7";
    header.style.opacity = 1;
  }
});
// end overlay effect

// sticky navbar
const navbarOffController = new ScrollMagic.Controller();
const navbarController = new ScrollMagic.Controller();
const tweenNavbar = TweenMax.to(".scrolledNav", ".3", {
  position: "fixed",
  height: "4rem",
  zIndex: 3,
  display: "flex",
});
const navbarScene = new ScrollMagic.Scene({
  triggerElement: "#servicesHeaderDiv",
  triggerHook: "onCenter",
  offset: 190,
})
  .setTween(tweenNavbar)
  .addTo(navbarController);
// sticky navbar end
