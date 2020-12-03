// tween underline
let underline = document.querySelector(".products_underline");
const slideIn = new TweenMax.from(".products_underline", 0.6, {
  left: "200%",
});
// overlay effect
let overlay = document.querySelector(".product_overlay");
let header = document.querySelector(".product_container h1");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
    header.style.opacity = 0;
    underline.style.opacity = 0;
  } else {
    overlay.style.opacity = "0.7";
    overlay.style.pointerEvents = "auto";
    header.style.opacity = 1;
    underline.style.opacity = 1;
  }
});
// end overlay effect

// constroller for navbar fade in
const navbarController = new ScrollMagic.Controller();
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
  triggerElement: ".products_content",
  triggerHook: "onCenter",
  offset: 100,
})
  .setTween(tweenNavbar)
  .addTo(navbarController);
// sticky navbar end

// hide sticky navbar
const tweenNavbarOff = TweenMax.to(".scrolledNav", ".3", {
  opacity: "0",
});
const navbarOffScene = new ScrollMagic.Scene({
  triggerElement: "#footer",
  triggerHook: "onEnter",
  offset: 150,
})
  .setTween(tweenNavbarOff)
  .addTo(navbarOffController);
// hide sticky navbar end

// populate items
let items = [
  {
    name: "Angel Rinse",
    desc:
      "rinse created to soothe and protect fine, damaged and colour-treated hair",
    img: "./resources/products/angelrinse.jpeg",
    link: "https://shop.saloninteractive.com/store/HairbyShandel/product/14/6",
  },
  {
    name: "ANTI.GRAVITY SPRAY",
    desc: "Defy gravity, and go bigger. ",
    img: "./resources/products/antigravity.jpg",
    link: "https://shop.saloninteractive.com/store/HairbyShandel/product/41/23",
  },
  {
    name: "BODY.MASS",
    desc:
      "helps strengthen the hair, while imparting a fullness and thickness that gives you beautiful body and bounce",
    img: "./resources/products/bodymass.jpg",
    link: "https://shop.saloninteractive.com/store/HairbyShandel/product/62/40",
  },
  {
    name: "EASY.RIDER",
    desc: "a defining anti-frizz crème designed to de-frizz and activate curl",
    img: "./resources/products/easyrider.jpg",
    link: "https://shop.saloninteractive.com/store/HairbyShandel/product/45/60",
  },
  {
    name: "HYDRATE-ME.WASH",
    desc:
      "super-smoothing, hydrating wash that will replenish hair with much needed moisture",
    img: "./resources/products/hydrateme.jpg",
    link:
      "https://shop.saloninteractive.com/store/HairbyShandel/product/26/1857",
  },
  {
    name: "Detangling Brush",
    desc:
      "beautiful design and felixible bristles are perfect for both wet and dry hair",
    img: "./resources/products/brushblue.jpg",
    link:
      "https://shop.saloninteractive.com/store/HairbyShandel/product/26182/29633",
  },
  {
    name: "KILLER.CURLS",
    desc:
      "helps to activate curls while adding essential moisture to throw out the frizz",
    img: "./resources/products/killercurls.jpg",
    link:
      "https://shop.saloninteractive.com/store/HairbyShandel/product/26059/95",
  },
  {
    name: "NIGHT.RIDER",
    desc:
      "this state-of-the-art paste helps seal in moisture to prevent hair breakage",
    img: "./resources/products/nightrider.jpg",
    link:
      "https://shop.saloninteractive.com/store/HairbyShandel/product/15754/130",
  },
  {
    name: "Young.Again Dry Conditioner",
    desc:
      "weightless spray that nourishes your tresses, restores softness, adds manageability",
    img: "./resources/products/KMDC.jpg",
    link:
      "https://shop.saloninteractive.com/store/HairbyShandel/product/36949/40400",
  },
];
let container = document.querySelector(".products_content");
items.forEach((product) => {
  container.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="item">
          <img src="${product.img}" alt="hair product" loading="lazy">
          <div class="info">
           <p class="title">${product.name}</p>
            <p class="desc">${product.desc}</p>
           <a href="${product.link}" target="_blank" rel="noopener noreferrer"><button>Shop Now</button></a>
          </div>
        </div>
  `
  );
});
