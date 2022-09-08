const content = document.querySelector("#content");

export default function loadHTML() {
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = "Best Restoraunt!";

  const catcher = document.createElement("div");
  catcher.classList.add("catcher");
  catcher.textContent = "Wow this is rly the bst restoraugnt!";

  //   content.appendChild(headline);
  //   content.appendChild(catcher);

  content.append(headline, catcher);
}
