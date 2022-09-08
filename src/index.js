import loadHTML from "./loadpage";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

loadHTML();

// home tab
//Event listener
const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", () => {
  loadHome();
});

// menu tab
//event listener
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  loadMenu();
});

// hours/ location
//event listener
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", () => {
  loadContact();
});
