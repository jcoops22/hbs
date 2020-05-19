let profilePic = document.querySelector("#profilePicSection img");

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 768) {
    profilePic.src = profilePic.dataset.src;
    clearInterval(slide);
    resetImages();
  }
});
window.addEventListener("resize", () => {
  // stop the slide function
  if (window.innerWidth > 768) {
    profilePic.src = profilePic.dataset.src;
    clearInterval(slide);
    resetImages();
  }
});

// fade in pictures
let counter = 0;
let shanImages = document.querySelectorAll(".caroselImg img");

const fadePicIn = new TweenMax.from(".caroselImg", 1, {
  opacity: 0,
});

// change pic function
changePic = () => {
  // check the counter
  counter >= shanImages.length - 2 ? (counter = 0) : counter++;
  // slide the images
  shanImages.forEach((img) => {
    img.style.transform = `translateX(-${counter}00%)`;
  });
};

// call the change pic function
const slide = setInterval(() => {
  // slide pic
  changePic();
}, 3000);

// reset images to original position
resetImages = () => {
  shanImages.forEach((img) => {
    img.style.transform = `translateX(0)`;
  });
};

// animate title onload
let title = document.querySelector(".about_content h1");
let content = document.querySelector(".about_content div:nth-child(4)");
const slideTitleUp = new TweenMax.from([title, content], 0.8, {
  opacity: 0,
  y: 300,
  ease: Back.easeOut.config(1.7),
}).delay(1);

// animate stars onload
let stars = document.querySelectorAll("img[alt=star]");

const slideInStar1 = new TweenMax.from(stars[0], 0.1, {
  x: 1000,
}).delay(1.2);
const slideInStar2 = new TweenMax.from(stars[1], 0.1, {
  x: 1000,
}).delay(1.3);
const slideInStar3 = new TweenMax.from(stars[2], 0.1, {
  x: 1000,
}).delay(1.4);
