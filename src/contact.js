import Element from "./elementClass";

const content = document.querySelector("#content");

export default function loadContact() {
  const contactElement = new Element("div")
    .addAttributes({ id: "tab", class: "contact-tab" })
    .addChild(new Element("h1").setInnerText("Contact Us!"))
    .addChild(new Element("div").addAttributes({ class: "contact-div" }));

  content.appendChild(contactElement.build());
}
