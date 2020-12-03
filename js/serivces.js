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
    overlay.style.pointerEvents = "auto";
    services_h1.style.opacity = 1;
    downarrow.style.pointerEvents = "auto";
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
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947640/HBS/mensCuts/65852959_2231210986998204_4435553222978470377_n_klnczd.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947640/HBS/mensCuts/22801929_319742455167701_8518228519560413184_n_fwrn5h.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947640/HBS/mensCuts/18645632_186016658589205_4147774398784339968_n_jkc8jj.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947640/HBS/mensCuts/69346971_348618675850244_8935617509591558694_n_jrn217.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947640/HBS/mensCuts/20482553_311644312631580_18567766390865920_n_ghbhmn.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947639/HBS/mensCuts/14099665_1017741155012826_365427082_n_xrjtqm.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947640/HBS/mensCuts/67837850_169790300828975_1627652774582949304_n_tqpzun.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947639/HBS/mensCuts/17495323_1010016762432574_5995148705919926272_n_gddkq7.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947639/HBS/mensCuts/15624036_1319336064754472_958700476436578304_n_suri5o.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947639/HBS/mensCuts/15624119_773189479496512_2300784040250179584_n_hjwcmv.jpg",
];
const color = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947584/HBS/color/125205326_170971698029319_7318095439155907674_n_n2tii8.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947584/HBS/color/119747484_181263026787980_3969873825661156648_n_hevujm.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947583/HBS/color/118763831_336517694212718_3979350741567624131_n_vywftc.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947583/HBS/color/87412061_1770802613054180_3120746299829156846_n_gbpex2.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947583/HBS/color/108164108_140971230974497_7439637722705313870_n_fvjorl.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947583/HBS/color/104137562_263170641439622_8625467846189294595_n_plhiju.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947583/HBS/color/103099914_281731846287545_2930306948567424698_n_crvabb.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947583/HBS/color/92393013_225688238508753_9176120344107388245_n_wahywa.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947582/HBS/color/54731781_330260847620591_4304236692288012054_n_s2thcd.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947582/HBS/color/52159153_2257264044533604_842404120914186361_n_tr4bbd.jpg",
];
const styles = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947683/HBS/style/118767230_162621535458734_2273748880240175024_n_qssxmy.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947683/HBS/style/125462352_155101386297638_4664899709229585599_n_v8xjks.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947683/HBS/style/118158872_334967460967492_3976292444924916118_n_nlxog0.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947683/HBS/style/118746507_2843358002612049_5644613743808194071_n_znzgn5.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947682/HBS/style/117368532_600141007344187_7464985387917826627_n_rkw9dv.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947682/HBS/style/117105515_182238886668621_1758378368636624813_n_kr2xn8.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947682/HBS/style/118199770_2687760447993748_5499745537194391987_n_vud82r.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947682/HBS/style/109978690_1141443446226174_1432627389399514044_n_fua208.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947682/HBS/style/92288733_547315905920793_4459742617188665438_n_kuzdl8.jpg",
];
const ext = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947607/HBS/extensions/125828650_124285385929403_2595087030523657342_n_fvybbq.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947607/HBS/extensions/120652076_341030573811202_8950905285880780004_n_pvelrf.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947607/HBS/extensions/69745307_616491425548095_3415036349574934538_n_ttjngo.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947607/HBS/extensions/67958919_666022507139110_8923611120583210425_n_iij0qu.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947607/HBS/extensions/98295908_234888671134801_3463597128309510178_n_mbit7k.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947607/HBS/extensions/91969329_112833590175725_1080388242799153214_n_c6fzew.jpg",
];
const add = [
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947563/HBS/addons/88994624_805114276654160_3963705727274709088_n_rhsrz5.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947563/HBS/addons/107102740_1367720150089276_7358602388424280510_n_x8jo05.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947563/HBS/addons/120843968_818351892265093_4984557453989434297_n_vdusk2.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947563/HBS/addons/105971684_585954542108550_8908584836014177437_n_otamah.jpg",
  "https://res.cloudinary.com/drucvvo7f/image/upload/v1606947563/HBS/addons/118488136_108300257600197_4064789141973843095_n_lgcwgo.jpg",
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
// rotate carosel REVERSE
caroselSpinReverse = (arr, section, counter) => {
  let imgs = document.querySelectorAll(`.${section} img`);

  if (imgs[0].classList.contains("middle1")) {
    // imgs[0] is in the middle
    setTimeout(() => {
      imgs[0].style.zIndex = "-1";
      imgs[1].style.zIndex = "1";
      imgs[2].style.zIndex = "-1";
    }, 300);
    setTimeout(() => {
      counter.count--;
      if (counter.count < 0) {
        counter.count = arr.length - 1;
      }
      imgs[2].src = arr[counter.count];
      imgs[0].classList.add("left1");
      imgs[0].classList.remove("middle1");
      imgs[1].classList.add("middle2");
      imgs[1].classList.remove("right2");
      imgs[2].classList.add("right3");
      imgs[2].classList.remove("left3");
    }, 400);
  } else if (imgs[0].classList.contains("right1")) {
    // imgs[2] is in the middle
    setTimeout(() => {
      imgs[0].style.zIndex = "1";
      imgs[1].style.zIndex = "-1";
      imgs[2].style.zIndex = "-2";
    }, 300);
    setTimeout(() => {
      counter.count--;
      if (counter.count < 0) {
        counter.count = arr.length - 1;
      }
      imgs[1].src = arr[counter.count];
      imgs[0].classList.add("middle1");
      imgs[0].classList.remove("right1");
      imgs[1].classList.add("right2");
      imgs[1].classList.remove("left2");
      imgs[2].classList.add("left3");
      imgs[2].classList.remove("middle3");
    }, 400);
  } else {
    // imgs[1] is in the middle
    setTimeout(() => {
      imgs[0].style.zIndex = "-1";
      imgs[2].style.zIndex = "2";
      imgs[1].style.zIndex = "-1";
    }, 300);
    setTimeout(() => {
      counter.count--;
      if (counter.count < 0) {
        counter.count = arr.length - 1;
      }
      imgs[0].src = arr[counter.count];
      imgs[0].classList.add("right1");
      imgs[0].classList.remove("left1");
      imgs[1].classList.add("left2");
      imgs[1].classList.remove("middle2");
      imgs[2].classList.add("middle3");
      imgs[2].classList.remove("right3");
    }, 400);
  }
};
// carosel rotate REVERSE end

// calling rotate functions
// NEXT
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
// BACK
// let cutBack = document.querySelector("#back_1");
// cutBack.addEventListener("click", () => {
//   caroselSpinReverse(mensCuts, "caroselDivs", cuts_count);
// });
// let colorBack = document.querySelector("#back_2");
// colorBack.addEventListener("click", () => {
//   caroselSpinReverse(color, "caroselDivsColor", color_count);
// });
// let styleBack = document.querySelector("#back_3");
// styleBack.addEventListener("click", () =>
//   caroselSpinReverse(styles, "caroselDivsStyle", style_count)
// );
// let extBack = document.querySelector("#back_4");
// extBack.addEventListener("click", () =>
//   caroselSpinReverse(ext, "caroselDivsExt", ext_count)
// );
// let addBack = document.querySelector("#back_5");
// addBack.addEventListener("click", () =>
//   caroselSpinReverse(add, "caroselDivsAdd", add_count)
// );
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
