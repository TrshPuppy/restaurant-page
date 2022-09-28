import Element from "./elementClass";

const content = document.querySelector(".content");

export default function loadContact() {
  const contactElement = new Element("div")
    .addAttributes({ id: "contact-tab", class: "tab" })
    .addChild(new Element("h1").setInnerText("Contact Us"))
    .addChild(
      new Element("div")
        .addAttributes({
          class: "container-div",
          id: "contact-container",
        })
        .addChild(
          new Element("div")
            .addAttributes({
              class: "div-child",
              id: "contact-child",
            })
            .addChild(
              new Element("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("What to Expect")
            )
            .addChild(
              new Element("ul").addChild(
                new Element("p")
                  .addAttributes({ id: "contact-about-p" })
                  .setInnerText(
                    "When you come to visit, expect to be joined by at least 15 feral cats. These kitties are (mostly) harmless and love to lounge while you enjoy your coffee!"
                  )
              )
            )
            .addChild(
              new Element("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("Our Hours")
            )
            .addChild(
              new Element("p")
                .addAttributes({ id: "contact-about-p" })
                .setInnerText("We are open 24 hours!")
            )
            .addChild(
              new Element("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("Phone")
            )
            .addChild(
              new Element("p")
                .addAttributes({ id: "contact-about-p" })
                .setInnerText("(696)969-6969")
            )
            .addChild(
              new Element("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("Email")
            )
            .addChild(
              new Element("p")
                .addAttributes({ id: "contact-about-p" })
                .setInnerText("WeLoveCats&Coffee@catco.ffee")
            )
        )
        .addChild(
          new Element("div")
            .addAttributes({
              class: "div-child",
              id: "contact-child",
            })
            .addChild(
              new Element("img").addAttributes({
                class: "tab-img",
                id: "contact-img",
              })
            )
            .addChild(
              new Element("h3")
                .addAttributes({ id: "contact-h2" })
                .setInnerText("Location")
            )
            .addChild(
              new Element("p")
                .addAttributes({ id: "contact-about-p" })
                .setInnerText("6969 Alley Cat Ave, Nowhere Town, USA")
            )
        )
    );
  content.appendChild(contactElement.build());
}

/* 
sudo HTML:

container div
  
  div child
    ul
      li: our hours
      li: our location
      li: phone number:
      li: website
    ul
.div child
    h2 "our location"
    p:flkald;kkfd;af"
    img: map or somehting
*/
