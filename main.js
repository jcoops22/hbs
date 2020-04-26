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
let back = document.querySelector("#back");

const mensCuts = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363201/HBS/mensCuts/mensCut_dapqh8.png",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut4_gcyc2p.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut2_hdmaaq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut3_npcccq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1586363200/HBS/mensCuts/mensCut1_vfanvm.jpg",
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
next.addEventListener("click", () => {
  modal.style.display = "none";
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
});
// rotate event left
// back.addEventListener("click", () => {
//   if (img1.classList.contains("middle1")) {
//     console.log("img1 has middle");
//     img3.style.zIndex = "-4";
//     img1.classList.add("left1");
//     img1.classList.remove("middle1");
//     img2.classList.add("middle2");
//     img2.classList.remove("right2");
//     img3.classList.add("right3");
//     img3.classList.remove("left3");
//     count3--;
//     setTimeout(() => {
//       if (count3 < 0) {
//         count3 = mensCuts.length - 1;
//         img3.src = mensCuts[count3];
//       } else {
//         img3.src = mensCuts[count3];
//       }
//     }, 300);
//   } else if (img1.classList.contains("right1")) {
//     console.log("img1 has right");
//     img2.style.zIndex = "-4";
//     img1.classList.add("middle1");
//     img1.classList.remove("right1");
//     img2.classList.add("right2");
//     img2.classList.remove("left2");
//     img3.classList.add("left3");
//     img3.classList.remove("middle3");
//     count2--;
//     setTimeout(() => {
//       if (count2 < 0) {
//         count2 = mensCuts.length - 1;
//         img2.src = mensCuts[count2];
//       } else {
//         img2.src = mensCuts[count2];
//       }
//     }, 300);
//   } else {
//     console.log("img1 has nothing or left");
//     img1.style.zIndex = "-4";
//     img1.classList.add("right1");
//     img1.classList.remove("left1");
//     img2.classList.add("left2");
//     img2.classList.remove("middle2");
//     img3.classList.add("middle3");
//     img3.classList.remove("right3");
//     count1--;
//     setTimeout(() => {
//       if (count1 < 0) {
//         count1 = mensCuts.length - 1;
//         img1.src = mensCuts[count1];
//       } else {
//         img1.src = mensCuts[count1];
//       }
//     }, 400);
//     setTimeout(() => {
//       img1.style.zIndex = "0";
//     }, 1000);
//   }
// });

let modal = document.querySelector(".modal");
let middle1 = document.querySelector(".middle1");
let middle2 = document.querySelector(".middle2");
let middle3 = document.querySelector(".middle3");
div2.addEventListener("click", () => {
  modal.style.display = "block";
});

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
  height: "10vh",
  zIndex: 100,
  display: "flex",
});
const navbarScene = new ScrollMagic.Scene({
  triggerElement: "#servicesHeaderDiv",
  triggerHook: "onCenter",
  offset: 190,
})
  .setTween(tweenNavbar)
  .addTo(navbarController);
// stickey navbar end

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
const tweenHeader = TweenMax.to(["#services_header", "#underline"], ".5", {
  fontSize: "25px",
  width: "15%",
  display: "flex",
  paddingLeft: "8px",
  margin: "0.5rem 0 0 0",
  y: -65,
});
const sceneHeader = new ScrollMagic.Scene({
  triggerElement: "#servicesHeaderDiv",
  triggerHook: "onCenter",
  duration: ".service_5",
  offset: 190,
})
  .setTween(tweenHeader)
  .setPin("#servicesHeaderDiv")
  .addTo(controller);
// sticky services header end

// // slide in divs
let services = document.getElementsByClassName("service");
for (let i = 0; i < services.length; i++) {
  const tween = TweenMax.from(services[i], ".7", {
    // width: '0',
    opacity: "0",
    display: "flex",
    transform: "scale(.5)",
  });
  const scene = new ScrollMagic.Scene({
    triggerElement: services[i],
    offset: "-200px",
    reverse: false,
  })
    .setTween(tween)
    .addTo(controller);
}
// slide in divs end

// change scroll location title
for (let i = 0; i < services.length; i++) {
  let where = document.querySelector("#where");
  let locations = ["Men's cuts", "Color", "Womens Cuts", "Styles"];

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
for (let i = 1; i < navItems.length; i++) {
  navItems[i].addEventListener("mouseover", (e) => {
    e.target.classList.add("active");
  });
  navItems[i].addEventListener("mouseout", (e) => {
    e.target.classList.remove("active");
  });
}
//   .to(".aboutOpen li", 0.2, {
//     visibility: "visible",
//     ease: Power1.easeOut,
//   });
// events

// navbar events
// about.addEventListener("mouseout", () => {
//   tlhover.reverse();
// });
