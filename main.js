// REG JS
let video = document.querySelector("#vid");
// carosel
let img1 = document.querySelector(".div1 img");
let img2 = document.querySelector(".div2 img");
let img3 = document.querySelector(".div3 img");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let next = document.querySelector("#next");
let overlay = document.querySelector(".overlay");
let overlayInd = 0;
let titleUnderline = document.querySelector(".titleUnderline");
// nav bar hamburger
let hamburger = document.getElementById("hamburger");
let patty1 = document.getElementById("patty1");
let patty2 = document.getElementById("patty2");
let mobileNav = document.querySelector(".mobileNavMenu");
let blowdryer = document.querySelector(".titleDiv img");
let expanded = false;

// changebackground = () => {
//   overlayInd >= mensCuts.length - 1 ? (overlayInd = 0) : overlayInd++;
//   overlay.style.backgroundImage = `url(${mensCuts[overlayInd]})`;

//   console.log("heeayrere");
//   console.log(mensCuts[0]);
// };
// setInterval(() => {
//   changebackground();
// }, 4000);
const rotateDryer = TweenMax.fromTo(
  blowdryer,
  0.3,
  {
    transform: "rotate(180deg)",
  },
  {
    transform: "rotate(0deg)",
  }
).delay(1);

const slide_title = TweenMax.from(".title", 0.3, {
  x: "100vw",
}).delay(0.5);
const underline_title = TweenMax.to(titleUnderline, 0.3, {
  width: "80vw",
}).delay(0.5);
hamburger.addEventListener(
  "click",
  () => {
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

const mensCuts = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363201/HBS/mensCuts/mensCut_dapqh8.png",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut4_gcyc2p.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut2_hdmaaq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut3_npcccq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut1_vfanvm.jpg",
];
const color = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086566/HBS/color/redorangehair_yzpmpn.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/rainbow_nsd7ue.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/redhair_l1uium.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/blackhair_t2pocr.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/greenhair_vetnjs.jpg",
];
const rotateClasses = ["left", "middle", "right"];
let count = 2;

function getNext() {
  if (count >= mensCuts.length - 1) {
    count = 0;
    return count;
  } else {
    count++;
    return count;
  }
}

// rotate event right
next.addEventListener(
  "click",
  () => {
    if (img1.classList.contains("middle1")) {
      // img1 is in the middle
      setTimeout(() => {
        img1.style.zIndex = "-4";
        img2.style.zIndex = "-5";
        img3.style.zIndex = "-4";
      }, 300);
      setTimeout(() => {
        count++;
        if (count >= mensCuts.length) {
          count = 0;
          img2.src = mensCuts[count];
        }
        img2.src = mensCuts[count];
        img1.classList.add("right1");
        img1.classList.remove("middle1");
        img2.classList.add("left2");
        img2.classList.remove("right2");
        img3.classList.add("middle3");
        img3.classList.remove("left3");
      }, 400);
    } else if (img1.classList.contains("right1")) {
      // img3 is in the middle
      setTimeout(() => {
        img1.style.zIndex = "-4";
        img2.style.zIndex = "0";
        img3.style.zIndex = "-9";
      }, 300);
      setTimeout(() => {
        count++;
        if (count >= mensCuts.length) {
          count = 0;
          img1.src = mensCuts[count];
        }
        img1.src = mensCuts[count];
        img1.classList.add("left1");
        img1.classList.remove("right1");
        img2.classList.add("middle2");
        img2.classList.remove("left2");
        img3.classList.add("right3");
        img3.classList.remove("middle3");
      }, 400);
    } else {
      // img2 is in the middle
      setTimeout(() => {
        img1.style.zIndex = "2";
        img3.style.zIndex = "-8";
        img2.style.zIndex = "1";
      }, 300);
      setTimeout(() => {
        count++;
        if (count >= mensCuts.length) {
          count = 0;
          img3.src = mensCuts[count];
        }
        img3.src = mensCuts[count];
        img1.classList.add("middle1");
        img1.classList.remove("left1");
        img2.classList.add("right2");
        img2.classList.remove("middle2");
        img3.classList.add("left3");
        img3.classList.remove("right3");
      }, 400);
    }
  },
  { passive: true }
);

let middle1 = document.querySelector(".middle1");
let middle2 = document.querySelector(".middle2");
let middle3 = document.querySelector(".middle3");

// GSAP

// constroller for navbar fade in
const navbarController = new ScrollMagic.Controller();
// controller for services header bar
const controller3 = new ScrollMagic.Controller();
// controller for services slide in
const controller = new ScrollMagic.Controller();
// controller for navbar hide
const navbarOffController = new ScrollMagic.Controller();
// sticky navbar
const tweenNavbar = TweenMax.to(".scrolledNav", ".3", {
  position: "fixed",
  height: "8vh",
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

// hide sticky navbar
const tweenNavbarOff = TweenMax.to(
  [".scrolledNav", "#services_header", "#underline"],
  ".3",
  {
    opacity: "0",
  }
);
const navbarOffScene = new ScrollMagic.Scene({
  triggerElement: "#footer",
  triggerHook: "onEnter",
  offset: 150,
})
  .setTween(tweenNavbarOff)
  .addTo(navbarOffController);
// hide sticky navbar end

// sticky services header
const tweenHeader = TweenMax.to(["#services_header", "#underline"], ".2", {
  x: 130,
});
const sceneHeader = new ScrollMagic.Scene({
  triggerElement: "#servicesHeaderDiv",
  // triggerHook: "onLeave",
  triggerHook: "onCenter",
  duration: ".service_5",
  // offset: -280,
  offset: 230,
})
  .setTween(tweenHeader)
  .setPin("#servicesHeaderDiv")
  .addTo(controller);
// sticky services header end

// // slide in divs
let services = document.getElementsByClassName("service");
for (let i = 0; i < services.length; i++) {
  const tween = TweenMax.from(services[i], ".7", {
    opacity: "0",
    display: "flex",
    transform: "scale(.5)",
  });
  const scene = new ScrollMagic.Scene({
    triggerElement: services[i],
    offset: "-100px",
    reverse: false,
  })
    .setTween(tween)
    .addTo(controller);
}
// slide in divs end

// change scroll location title
for (let i = 0; i < services.length; i++) {
  let where = document.querySelector("#where");
  let locations = [
    "Men's cuts",
    "Color",
    "Cuts",
    "Styles",
    "Extensions",
    "Add ons",
  ];

  const whereTween = new TweenMax.to("#where", ".7", {
    opacity: 1,
  });
  const scene = new ScrollMagic.Scene({
    triggerElement: services[i],
    triggerHook: "onCenter",
    offset: 124,
    reverse: true,
  })
    .on("progress", (event) => {
      if (event.progress === 0) {
        event.target.triggerElement().classList.contains("service_1")
          ? (where.innerHTML = locations[0])
          : (where.innerHTML = locations[i - 1]);
      } else if (event.progress === 1) {
        where.innerHTML = locations[i];
      }
    })
    .setTween(whereTween)
    .addTo(controller);
}
// change scroll location title end

// navbar tweens

let navHover = new TimelineMax({ paused: true });
let navItems = document.querySelectorAll(".navDiv nav div a");
// console.log(navItems);

// navbar hover
// for (let i = 1; i < navItems.length; i++) {
//   navItems[i].addEventListener("mouseover", (e) => {
//     e.target.classList.add("active");
//   });
//   navItems[i].addEventListener("mouseout", (e) => {
//     e.target.classList.remove("active");
//   });
// }
//   .to(".aboutOpen li", 0.2, {
//     visibility: "visible",
//     ease: Power1.easeOut,
//   });
// events

// navbar events
// about.addEventListener("mouseout", () => {
//   tlhover.reverse();
// });
