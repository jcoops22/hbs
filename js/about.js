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

// about carosel
let shanPics = [
  "./resources/shan.jpg",
  "./resources/shan1.jpg",
  "./resources/shan2.jpg",
  "./resources/shan3.jpg",
];
let counter = 0;
let carosel = document.querySelector("#shanImage");
console.log(carosel.src);

changePic = () => {
  counter >= shanPics.length - 1 ? (counter = 0) : counter++;
  carosel.src = shanPics[counter];
};
setInterval(() => {
  changePic();
}, 3000);
