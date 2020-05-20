let profile_pic = document.querySelector(".testimonial_profile_pic");
let user_name = document.querySelector(".testimonial_user span");
let quote = document.querySelector(".testimonial_quote");
let entry = document.querySelector(".entry");
let counter = 0;
const user = [
  {
    name: "Michelle",
    quote: `"Shandel is the best!! My extensions are amazing!!!"`,
    pic:
      "https://res.cloudinary.com/drucvvo7f/image/upload/v1589918319/HBS/testimonials/user1_jv8fpv.jpg",
  },
  {
    name: "Lisa",
    quote: `"I love coming to Shandel. We have so much fun!"`,
    pic:
      "https://res.cloudinary.com/drucvvo7f/image/upload/v1589918379/HBS/testimonials/user2_jgagzm.jpg",
  },
  {
    name: "Josh",
    quote: `"My cut is always fresh. People say I got that Paul George hairline."`,
    pic:
      "https://res.cloudinary.com/drucvvo7f/image/upload/v1589918357/HBS/testimonials/user3_bm9nmg.jpg",
  },
  {
    name: "Sheronda",
    quote: `"Girl had my hur lookin fly!"`,
    pic:
      "https://res.cloudinary.com/drucvvo7f/image/upload/v1589918351/HBS/testimonials/user4_hthrd4.jpg",
  },
];

changeQuote = () => {
  entry.style.opacity = 0.3;
  entry.style.filter = "blur(8px)";
  setTimeout(() => {
    user_name.textContent = user[counter].name;
    quote.textContent = user[counter].quote;
    profile_pic.src = user[counter].pic;
    counter >= user.length - 1 ? (counter = 0) : counter++;
    entry.style.opacity = 1;
    entry.style.filter = "blur(0)";
  }, 300);
};

window.addEventListener("scroll", () => {
  let scrolled = window.pageYOffset;
  const background = document.querySelector(".overlay");
  background.style.top = scrolled * 0.3 + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  changeQuote();
  setInterval(() => {
    changeQuote();
  }, 5000);
});
