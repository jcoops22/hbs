// REG JS
let about = document.querySelector(".about");
let video = document.querySelector("#vid");
let instapic = document.querySelector("#insta");
// GSAP
var tl = new TimelineMax({ paused: true });
var tlhover = new TimelineMax({ paused: true });

// controller for services header bar
const controller3 = new ScrollMagic.Controller();
// controller for services slide in
const controller = new ScrollMagic.Controller();
let services = document.getElementsByClassName("service");

// // slide in divs
for (let i = 0; i < services.length; i++) {
  const tween = TweenMax.from(services[i], ".7", {
    // width: '0',
    opacity: "0",
    display: "flex",
    transform: "scale(.5)"
  });
  const scene = new ScrollMagic.Scene({
    triggerElement: services[i],
    offset: "-200px",
    reverse: false
  })
    .setTween(tween)
    .addTo(controller);
}

// sticky services header
const tweenHeader = TweenMax.to(["#services_header", "#underline"], ".5", {
  fontSize: "25px",
  width: "15%",
  display: "flex",
  paddingLeft: "8px",
  margin: 0,
  y: -65
});
const sceneHeader = new ScrollMagic.Scene({
  triggerElement: "#divSer",
  triggerHook: "onCenter",
  duration: ".service_5",
  offset: 278
})
  .setTween(tweenHeader)
  .setPin("#divSer")
  .addTo(controller);

// navbar hover
tlhover
  .to(".aboutOpen", 0.4, {
    height: "130px",
    width: "160px",
    ease: Power1.easeIn
  })
  .to(".aboutOpen li", 0.2, {
    visibility: "visible",
    ease: Power1.easeOut
  });

// events

// navbar events
about.addEventListener("mouseover", () => {
  tlhover.play();
});
about.addEventListener("mouseout", () => {
  tlhover.reverse();
});

// carosel
let rotateLeft = new TimelineMax({ paused: true });

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");

const rotateClasses = ["left", "middle", "right"];
let count1 = 0;
let count2 = 1;
let count3 = 2;

div1.addEventListener("click", () => {
  if (img1.classList.contains("middle1")) {
    console.log("img1 has middle");
    img1.classList.remove("middle1");
    img1.classList.add("right1");
    img2.classList.remove("right2");
    img2.classList.add("left2");
    img3.classList.remove("left3");
    img3.classList.add("middle3");
  } else if (img1.classList.contains("right1")) {
    console.log("img1 has right");
    img1.classList.add("left1");
    img1.classList.remove("right1");
    img2.classList.add("middle2");
    img2.classList.remove("left2");
    img3.classList.add("right3");
    img3.classList.remove("middle3");
  } else {
    console.log("img1 has nothing or left");
    img1.classList.add("middle1");
    img1.classList.remove("left1");
    img2.classList.add("right2");
    img2.classList.remove("middle2");
    img3.classList.add("left3");
    img3.classList.remove("right3");
  }
});
img1.addEventListener("mouseout", () => {
  // count1 >= mensCuts.length - 1 ? (count1 = 0) : count1++;
  // img1.src = mensCuts[count1];
  // count2 >= mensCuts.length - 1 ? (count2 = 0) : count2++;
  // img2.src = mensCuts[count2];
  // count3 >= mensCuts.length - 1 ? (count3 = 0) : count3++;
  // img3.src = mensCuts[count3];
});
