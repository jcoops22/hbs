let profile_pic = document.querySelector(".testimonial_profile_pic");
let user_name = document.querySelector(".testimonial_user span");
let quote = document.querySelector(".testimonial_quote");
let counter = 0;
const user = [
  {
    name: "Michelle",
    quote: "Shandel is the best!! My extensions are amazing!!!",
    pic: "./resources/testimonials/user1.jpg",
  },
  {
    name: "Lisa",
    quote: "I love coming to Shandel. We have so much fun!",
    pic: "./resources/testimonials/user2.jpg",
  },
  {
    name: "Josh",
    quote:
      "My cut is always fresh. People say I got that Paul George hairline.",
    pic: "./resources/testimonials/user3.jpg",
  },
  {
    name: "Sheronda",
    quote: "Girl had my hur lookin fly!",
    pic: "./resources/testimonials/user4.jpg",
  },
];

changeQuote = () => {
  user_name.textContent = user[counter].name;
  quote.textContent = user[counter].quote;
  profile_pic.src = user[counter].pic;
  counter >= user.length - 1 ? (counter = 0) : counter++;
};

document.addEventListener("DOMContentLoaded", () => {
  changeQuote();
  setInterval(() => {
    changeQuote();
  }, 3000);
});
