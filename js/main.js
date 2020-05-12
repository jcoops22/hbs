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
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250714/HBS/mensCuts/mensCuts7_yzpxwa.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250713/HBS/mensCuts/mensCut5_q96v5b.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250713/HBS/mensCuts/mensCuts8_g8zamd.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250713/HBS/mensCuts/mensCut6_ivkedn.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250713/HBS/mensCuts/mensCuts9_iiaqdj.jpg",
];
const color = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250923/HBS/color/darkred_mllqrb.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250923/HBS/color/darkblue_soere1.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250922/HBS/color/lightrainbow_orcftz.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086566/HBS/color/redorangehair_yzpmpn.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/rainbow_nsd7ue.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/redhair_l1uium.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/greenhair_vetnjs.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/blackhair_t2pocr.jpg",
];
const styles = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252489/HBS/style/style8_igy5ui.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252487/HBS/style/style6_ooxfj9.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252488/HBS/style/style9_q0djtp.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252487/HBS/style/style5_e5yquf.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252486/HBS/style/style7_vhenih.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252485/HBS/style/style4_arlhle.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252484/HBS/style/style1_fnhmaw.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252484/HBS/style/style3_zevifx.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252484/HBS/style/style2_zdbjfq.jpg",
];
const ext = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589251047/HBS/extensions/extensions_k4frzo.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589251045/HBS/extensions/ext6_lf2fc4.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589251044/HBS/extensions/ext_b02wit.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589251044/HBS/extensions/ext3_pw8kcb.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589251044/HBS/extensions/ext2_l1lfpq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589251044/HBS/extensions/ext1_vfbkvc.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589251044/HBS/extensions/ext5_t0rz73.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589251044/HBS/extensions/ext4_aww4le.jpg",
];
const add = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589254012/HBS/addons/addon4_yhudkg.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589254008/HBS/addons/addon3_ngasj2.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589254006/HBS/addons/addon6_dopctc.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589254007/HBS/addons/addon2_a8qzbn.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589254004/HBS/addons/addon1_rlvi92.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589251249/HBS/addons/addon_kdxol7.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588087030/HBS/addons/addons_aejepw.jpg",
];

// count for carosel
let cuts_count = { count: 2 };
let color_count = { count: 2 };
let style_count = { count: 2 };
let ext_count = { count: 2 };
let add_count = { count: 2 };

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
let styleNext = document.querySelector("#next_3");
styleNext.addEventListener("click", () =>
  caroselSpin(styles, "caroselDivsStyle", style_count)
);
let extNext = document.querySelector("#next_4");
extNext.addEventListener("click", () =>
  caroselSpin(ext, "caroselDivsExt", ext_count)
);
let addNext = document.querySelector("#next_5");
addNext.addEventListener("click", () =>
  caroselSpin(add, "caroselDivsAdd", add_count)
);

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
