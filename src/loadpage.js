const HTMLbody = document.querySelector("body");
const content = document.querySelector("#content");

export default function loadHTML() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("home-button");
  homeButton.innerText = "Home";

  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-button");
  menuButton.innerText = "Menu";

  const contactButton = document.createElement("button");
  contactButton.classList.add("contact-button");
  contactButton.innerText = "Contact";

  nav.append(homeButton, menuButton, contactButton);

  HTMLbody.insertAdjacentElement("afterbegin", header);
  header.append(nav);

  //   const headline = document.createElement("div");
  //   headline.classList.add("headline");
  //   headline.textContent = "Best Restoraunt!";

  //   const catcher = document.createElement("div");
  //   catcher.classList.add("catcher");
  //   catcher.textContent = "Wow this is rly the bst restoraugnt!";

  //   content.appendChild(headline);
  //   content.appendChild(catcher);

  //   content.append(headline, catcher);
}
