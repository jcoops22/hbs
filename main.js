// start Vue
new Vue({
  el: "#app",
  data: {
    title: "Hair By Shandel",
    mensCuts: "./resources/mensCut.png",
    color: "./resources/color.png",
    womenCuts: "./resources/cut.png",
    healthyHair: "./resources/health.png",
    products: "./resources/products.png"
  }
});
// end Vue

// REG JS
let about = document.querySelector(".about");
let video = document.querySelector("#vid");
// GSAP
var tl = new TimelineMax({ paused: true });
var tlhover = new TimelineMax({ paused: true });

// controller for services slide in
const controller = new ScrollMagic.Controller();
let services = document.getElementsByClassName("service");
// controller for animating buttons
const controller2 = new ScrollMagic.Controller();
let buttons = document.getElementsByClassName("sbutton");
// controller for services header bar
const controller3 = new ScrollMagic.Controller();

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

  // animate buttons
  // const tween2 = TweenMax.fromTo(buttons[i], '1', {
  //   opacity: 0,
  //   width: "250px",
  //   backgroundColor: "red"
  // },{
  //   borderRadius: "50%",
  //   opacity: 1,
  //     width: "100px",
  //     backgroundColor: "green"
  // })
  // const scene1 = new ScrollMagic.Scene({
  //   triggerElement: services[i],
  //   triggerHook: .5,
  //   duration: "20%",
  //   reverse:true

  // })
  // .setTween(tween2)

  //   .addTo(controller)

  window.addEventListener("resize", () => {
    console.log("resizeded");
    // ScrollScene.refresh();
  });
}

// sticky services header
const tweenHeader = TweenMax.to(["#services_header", "#underline"], ".5", {
  fontSize: "25px",
  width: "15%",
  display: "flex",
  paddingLeft: "8px",
  margin: 0,
  y: -80
});
const sceneHeader = new ScrollMagic.Scene({
  triggerElement: "#divSer",
  triggerHook: "onCenter",
  duration: ".service_5",
  offset: 150
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
