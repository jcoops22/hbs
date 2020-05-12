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

// rotate the header icon
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
}).delay(1);

// hide open hamburger on resize
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
// animate hamburger
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

const mensCuts = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363201/HBS/mensCuts/mensCut_dapqh8.png",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut4_gcyc2p.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut2_hdmaaq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut3_npcccq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut1_vfanvm.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086566/HBS/color/redorangehair_yzpmpn.jpg",
];
const color = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086566/HBS/color/redorangehair_yzpmpn.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/rainbow_nsd7ue.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/redhair_l1uium.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/blackhair_t2pocr.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/greenhair_vetnjs.jpg",
];
const styles = [];

// count for carosel
let cuts_count = { count: 2 };
let color_count = { count: 2 };

// carosel spin function
caroselSpin = (arr, section, counter) => {
  let imgs = document.querySelectorAll(`.${section} img`);

  if (imgs[0].classList.contains("middle1")) {
    // imgs[0] is in the middle
    setTimeout(() => {
      imgs[0].style.zIndex = "-4";
      imgs[1].style.zIndex = "-5";
      imgs[2].style.zIndex = "-4";
    }, 300);
    setTimeout(() => {
      counter.count++;
      if (counter.count >= arr.length) {
        counter.count = 0;
        imgs[1].src = arr[counter.count];
      }
      imgs[1].src = arr[counter.count];
      imgs[0].classList.add("right1");
      imgs[0].classList.remove("middle1");
      imgs[1].classList.add("left2");
      imgs[1].classList.remove("right2");
      imgs[2].classList.add("middle3");
      imgs[2].classList.remove("left3");
    }, 400);
  } else if (imgs[0].classList.contains("right1")) {
    // imgs[2] is in the middle
    setTimeout(() => {
      imgs[0].style.zIndex = "-4";
      imgs[1].style.zIndex = "0";
      imgs[2].style.zIndex = "-9";
    }, 300);
    setTimeout(() => {
      counter.count++;
      if (counter.count >= arr.length) {
        counter.count = 0;
        imgs[0].src = arr[counter.count];
      }
      imgs[0].src = arr[counter.count];
      imgs[0].classList.add("left1");
      imgs[0].classList.remove("right1");
      imgs[1].classList.add("middle2");
      imgs[1].classList.remove("left2");
      imgs[2].classList.add("right3");
      imgs[2].classList.remove("middle3");
    }, 400);
  } else {
    // imgs[1] is in the middle
    setTimeout(() => {
      imgs[0].style.zIndex = "2";
      imgs[2].style.zIndex = "-8";
      imgs[1].style.zIndex = "1";
    }, 300);
    setTimeout(() => {
      counter.count++;
      if (counter.count >= arr.length) {
        counter.count = 0;
        imgs[2].src = arr[counter.count];
      }
      imgs[2].src = arr[counter.count];
      imgs[0].classList.add("middle1");
      imgs[0].classList.remove("left1");
      imgs[1].classList.add("right2");
      imgs[1].classList.remove("middle2");
      imgs[2].classList.add("left3");
      imgs[2].classList.remove("right3");
    }, 400);
  }
};
// end rotate carosel function

let cutNext = document.querySelector("#next");
cutNext.addEventListener("click", () => {
  caroselSpin(mensCuts, "caroselDivs", cuts_count);
});
let colorNext = document.querySelector("#next_2");
colorNext.addEventListener("click", () => {
  caroselSpin(color, "caroselDivsColor", color_count);
});
// let styleNext = document.querySelector("#next_3");
// styleNext.addEventListener("click", caroselSpin());

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

// hide sticky navbar
const tweenNavbarOff = TweenMax.to(
  [".scrolledNav", "#services_header", "#underline", "#where"],
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
    offset: "-300px",
    reverse: false,
  })
    .setTween(tween)
    .addTo(controller);
}
// slide in divs end

// change scroll location title
for (let i = 0; i < services.length; i++) {
  let where = document.querySelector("#where");
  let locations = ["Men's cuts", "Color", "Styles", "Extensions", "Add ons"];

  const whereTween = new TweenMax.to("#where", "0.2", {
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
        event.target.triggerElement().classList.contains("top")
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
