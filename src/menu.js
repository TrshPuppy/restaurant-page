import Element from "./elementClass";

const content = document.querySelector("#content");

export default function loadMenu() {
  const menuElement = new Element("div")
    .addAttributes({ id: "tab", class: "menu-tab" })
    .addChild(new Element("h1").setInnerText("Menu"))
    .addChild(
      new Element("div")
        .addAttributes({ class: "container-div", id: "menu-container" })
        .addChild(
          new Element("img").addAttributes({ class: "tab-img", id: "menu-img" })
        )
        .addChild(
          new Element("div")
            .addAttributes({ class: "div-child", id: "menu-child" })
            .addChild(
              new Element("h1")
                .addAttributes({ id: "menu-child-title" })
                .setInnerText("Our Daily Menu")
            )
            .addChild(
              new Element("ul")
                .addAttributes({ id: "menu-list" })
                .addChild(new Element("li").setInnerText("Espresso"))
                .addChild(new Element("li").setInnerText("Americano"))
            )
        )
    );

  content.appendChild(menuElement.build());
}

/* sudo HTML:
div content
  div menu tab
    h1 menu
    div container- flex box row-wrap
      img: of food
      div menu
        h1 menu title
        ul
          li
          li
          li
        ul


*/
