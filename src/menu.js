import Element from "./elementClass";

const content = document.querySelector(".content");

export default function loadMenu() {
  const menuElement = new Element("div")
    .addAttributes({ id: "menu-tab", class: "tab" })
    .addChild(new Element("h1").setInnerText("Our Daily Menu"))
    .addChild(
      new Element("div")
        .addAttributes({ class: "container-div", id: "menu-container" })
        .addChild(
          new Element("img").addAttributes({
            class: "div-child",
            id: "menu-img",
          })
        )
        .addChild(
          new Element("div")
            .addAttributes({ class: "div-child", id: "menu-child" })
            .addChild(new Element("h2").setInnerText("Coffees"))
            .addChild(
              new Element("ul")
                .addAttributes({ class: "menu-list", id: "coffee-list" })
                .addChild(new Element("li").setInnerText("Espresso"))
                .addChild(new Element("li").setInnerText("Americano"))
                .addChild(new Element("li").setInnerText("Cold Brew"))
                .addChild(new Element("li").setInnerText("Cappuccino"))
                .addChild(new Element("li").setInnerText("Macchiato"))
                .addChild(new Element("li").setInnerText("Latte"))
            )
            .addChild(new Element("h2").setInnerText("Teas"))
            .addChild(
              new Element("ul")
                .addAttributes({ class: "menu-list", id: "tea-list" })
                .addChild(new Element("li").setInnerText("Chai"))
                .addChild(new Element("li").setInnerText("London Fog"))
                .addChild(new Element("li").setInnerText("Black Tea"))
                .addChild(new Element("li").setInnerText("Green Tea"))
                .addChild(new Element("li").setInnerText("Oolong"))
                .addChild(
                  new Element("li").setInnerText("Chamomile with cat hair")
                )
            )
            .addChild(new Element("h2").setInnerText("Treats"))
            .addChild(
              new Element("ul")
                .addAttributes({ class: "menu-list", id: "treats-list" })
                .addChild(new Element("li").setInnerText("Pumpkin Bread"))
                .addChild(new Element("li").setInnerText("Banana Bread"))
                .addChild(new Element("li").setInnerText("Cake Pop"))
                .addChild(
                  new Element("li").setInnerText("Bagle w/ cream cheese")
                )
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
