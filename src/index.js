import loadHTML from "./loadpage";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import { clearContentBox } from "./utilities";

loadHTML();

// home tab
const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", () => {
  clearContentBox();
  loadHome();
});

// menu tab
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  loadMenu();
});

// contact tab
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", () => {
  loadContact();
});
