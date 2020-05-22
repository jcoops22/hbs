// REG JS
// carosel
let img1 = document.querySelector(".div1 img");
let img2 = document.querySelector(".div2 img");
let img3 = document.querySelector(".div3 img");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");

// hide prices on resize
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    show.checked = false;
    prices_div.style.top = "-100rem";
  }
});

// animate services header/banner
let overlay = document.querySelector(".services_overlay");
let services_h1 = document.querySelector(".services_banner h1");
let underline = document.querySelector(".services_underline");
let downarrow = document.querySelector(".services_downarrow");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 10) {
    services_h1.style.opacity = 0;
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
    downarrow.style.opacity = 0;
    downarrow.style.pointerEvents = "none";
    underline.style.opacity = 0;
  } else {
    overlay.style.opacity = 0.7;
    services_h1.style.opacity = 1;
    downarrow.style.pointerEvents = "initial";
    downarrow.style.opacity = 1;
    underline.style.opacity = 1;
  }
});
// end serivices header/banner
const slide_underline = new TweenMax.from(".services_underline", 0.6, {
  left: "200%",
});
// show and hide the prices box
let show = document.querySelector("#show_prices_div span img");
let checked = false;
let prices_div = document.querySelector(".hidden_prices_div");
let ind = 0;
let priceHTML = [
  `<h4>Men's Cuts <img src="./resources/Icons/clippers.svg" alt="clippers" width="20px"></h4>
    <ul>
      <li>Haircut $25</li>
    </ul>
  `,
  `<h4>Color <img src="./resources/Icons/colorbrush.svg" alt="color brush" width="20px"></h4>
    <h5>($50 per hour)</h5>
    <ul>
      <li>Balayage $150 +</li>
      <li>Baby-lights $175 +</li>
      <li>Solid $130 +</li>
      <li>Roots Service $95 +</li>
      <li>Color Correction $200 +</li>
    </ul>
  `,
  `<h4>Style <img src="./resources/Icons/scissors.svg" alt="shears" width="20px"></h4>
      <ul>
        <li>Blowout $50 +</li>
        <li>Up-do $65 +</li>
      </ul>
  `,
  `<h4>Extensions <img src="./resources/Icons/extensions.svg" alt="extensions" width="20px"></h4>
    <ul>
      <li>Installation $150 +</li>
      <li>Move-up $100 +</li>
    </ul>
  `,
  `<h4>Add-on's <img src="./resources/Icons/toner.svg" alt="shiney hair icon" width="20px"></h4>
    <ul>
      <li>Shine $30 +</li>
      <li>Toner $30 +</li>
    </ul>
  `,
];
// show prices on check
show.addEventListener("click", () => {
  if (!checked) {
    console.log("bawls");
    checked = true;
    prices_div.innerHTML = priceHTML[ind];
    prices_div.style.top = "3.5rem";
    show.style.transform = "scale(0)";
    setTimeout(() => {
      show.style.transform = "scale(1)";
      show.src = "./resources/Icons/check.svg";
    }, 300);
  } else {
    checked = false;
    prices_div.style.top = "-100rem";
    show.src = "./resources/Icons/circle.svg";
  }
});

const mensCuts = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309916/HBS/mensCuts/mens9_rbf9zg.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309915/HBS/mensCuts/mens7_idispr.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309915/HBS/mensCuts/mens8_dk1bsx.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309914/HBS/mensCuts/mens6_yfltpz.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309914/HBS/mensCuts/mens3_mlvuiw.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309914/HBS/mensCuts/mens5_k4wnok.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309914/HBS/mensCuts/mens2_zkxdua.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309908/HBS/mensCuts/mens1_zjstqx.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250713/HBS/mensCuts/mensCut6_ivkedn.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250714/HBS/mensCuts/mensCuts7_yzpxwa.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250713/HBS/mensCuts/mensCuts8_g8zamd.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250713/HBS/mensCuts/mensCuts9_iiaqdj.jpg",
];
const color = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309816/HBS/color/color4_wss56i.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309816/HBS/color/color3_r8n6f4.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309815/HBS/color/color1_ht258m.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250923/HBS/color/darkred_mllqrb.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250923/HBS/color/darkblue_soere1.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589250922/HBS/color/lightrainbow_orcftz.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086566/HBS/color/redorangehair_yzpmpn.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/rainbow_nsd7ue.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/redhair_l1uium.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/blackhair_t2pocr.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1588086565/HBS/color/greenhair_vetnjs.jpg",
];
const styles = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252489/HBS/style/style8_igy5ui.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252487/HBS/style/style6_ooxfj9.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252488/HBS/style/style9_q0djtp.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252486/HBS/style/style7_vhenih.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252485/HBS/style/style4_arlhle.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252484/HBS/style/style1_fnhmaw.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252484/HBS/style/style3_zevifx.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589252484/HBS/style/style2_zdbjfq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589315496/HBS/style/style1_ptqkwr.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589315497/HBS/style/style2_rlonhy.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589315497/HBS/style/style4_yrptkq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589315497/HBS/style/style3_xbykec.jpg",
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
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1589309622/HBS/addons/addon1_nr0re6.jpg",
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

let cutNext = document.querySelector("#next_1");
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

// get lazy images
lazyLoad = (arr) => {
  let scrollTop = window.pageYOffset;
  arr.forEach((img) => {
    if (img.offsetTop < window.innerHeight + scrollTop) {
      img.src = img.dataset.src;
      img.classList.remove("lazy");
    }
  });
};

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
  [
    ".scrolledNav",
    "#services_header",
    "#underline",
    "#where",
    "#show_prices_div",
    ".hidden_prices_div",
  ],
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
const tweenHeader = TweenMax.to(
  ["#services_header", "#underline", "#show_prices_div"],
  ".2",
  {
    x: 130,
  }
);
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

// slide in divs
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
    // lazload
    .on("progress", (event) => {
      if (event.progress === 1) {
        let imgs = document.querySelectorAll("img.lazy");
        lazyLoad(imgs);
      }
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
        // hide prices div when scrolled to the top
        if (event.target.triggerElement().classList.contains("top")) {
          prices_div.style.opacity = 0;
        } else {
          prices_div.style.opacity = 0;
          ind = i - 1;
          setTimeout(() => {
            prices_div.innerHTML = priceHTML[ind];
            prices_div.style.opacity = 1;
          }, 300);
        }
      } else if (event.progress === 1) {
        where.innerHTML = locations[i];
        prices_div.style.opacity = 0;
        ind = i;
        setTimeout(() => {
          prices_div.innerHTML = priceHTML[ind];
          prices_div.style.opacity = 1;
        }, 300);
      }
    })
    .setTween(whereTween)
    .addTo(controller);
}
// change scroll location title end
