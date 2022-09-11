import Element from "./elementClass";

const content = document.querySelector("#content");

export default function loadMenu() {
  const menuElement = new Element("div")
    .addAttributes({ class: "menu-tab" })
    .addChild(new Element("h1").setInnerText("Menu"));

  content.appendChild(menuElement.build());
}
