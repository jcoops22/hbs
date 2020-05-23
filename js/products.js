// overlay effect
let overlay = document.querySelector(".product_overlay");
let header = document.querySelector(".product_container h1");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
    header.style.opacity = 0;
  } else {
    overlay.style.opacity = "0.7";
    overlay.style.pointerEvents = "auto";
    header.style.opacity = 1;
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
  offset: 190,
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
    name: "Angel Rinse",
    desc:
      "rinse created to soothe and protect fine, damaged and colour-treated hair",
    img: "./resources/products/angelrinse.jpeg",
    link: "https://shop.saloninteractive.com/store/HairbyShandel/product/14/6",
  },
  {
    name: "Angel Rinse",
    desc:
      "rinse created to soothe and protect fine, damaged and colour-treated hair",
    img: "./resources/products/angelrinse.jpeg",
    link: "https://shop.saloninteractive.com/store/HairbyShandel/product/14/6",
  },
  {
    name: "Angel Rinse",
    desc:
      "rinse created to soothe and protect fine, damaged and colour-treated hair",
    img: "./resources/products/angelrinse.jpeg",
    link: "https://shop.saloninteractive.com/store/HairbyShandel/product/14/6",
  },
  {
    name: "Angel Rinse",
    desc:
      "rinse created to soothe and protect fine, damaged and colour-treated hair",
    img: "./resources/products/angelrinse.jpeg",
    link: "https://shop.saloninteractive.com/store/HairbyShandel/product/14/6",
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
