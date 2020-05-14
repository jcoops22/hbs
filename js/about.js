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

// assist with "Follow" keyframes
let spans = document.querySelectorAll(".follow a span");
let del = 0;
spans.forEach((span) => {
  span.style.animationDelay = del + "s";
  del += Math.random() + 0.3;
});
// assist with "Follow" keyframes End

// fade in pictures
let counter = 0;
let shanImages = document.querySelectorAll(".caroselImg img");
// console.log(shanImages[0]);
// console.log(shanImages[1]);
// console.log(shanImages[2]);

const fadePicIn = new TweenMax.from(shanImages[counter], 1, {
  opacity: 0,
});
// fadePicIn.pause();

// about carosel
let shanPics = [
  "./resources/shan/hairshow.jpg",
  "./resources/shan/hairshow1.jpg",
  "./resources/shan/hairshow2.jpg",
];
// change pic function
changePic = () => {
  // check the counter
  counter >= shanImages.length - 1 ? (counter = 0) : counter++;
  shanImages.forEach((img) => {
    img.style.transform = `translateX(-${counter}00%)`;
  });
};

// call the change pic function
setInterval(() => {
  // slide pic
  changePic();
}, 3000);

// animate title onload
let title = document.querySelector(".about_content h1");
const slideTitleUp = new TweenMax.from(title, 0.8, {
  opacity: 0,
  y: 300,
  ease: Back.easeOut.config(1.7),
}).delay(1);

// animate stars onload
// let stars = document.querySelectorAll(".aboutHeader img");
let stars = document.querySelectorAll("img[alt=star]");

const slideInStar1 = new TweenMax.from(stars[0], 0.1, {
  x: 300,
}).delay(1.2);
const slideInStar2 = new TweenMax.from(stars[1], 0.1, {
  x: 300,
}).delay(1.3);
const slideInStar3 = new TweenMax.from(stars[2], 0.1, {
  x: 300,
}).delay(1.4);
