import Element from "./elementClass";

const content = document.querySelector(".content");

export default function loadHome() {
  const homeElement = new Element("div")
    .addAttributes({ id: "home-tab", class: "tab" })
    .addChild(new Element("h1").setInnerText("Welcome to Trash Cafe"))
    .addChild(
      new Element("img").addAttributes({ class: "tab-img", id: "home-img" })
    )
    .addChild(
      new Element("p")
        .addAttributes({ class: "blurb" })
        .setInnerText(
          "Do you love coffee? Do you also love feral cats? Then come visit us at Trash Cafe, where coffee and feral trash kittens make up the bulk of our aesthetic!"
        )
    )
    .addChild(new Element("h2").setInnerText("What is a cat-cafe?"))
    .addChild(
      new Element("p").setInnerText(
        "We give back to the trash kitty community by giving local feral cats a place to lounge, eat, and relax."
      )
    );

  content.appendChild(homeElement.build());
}

/* psuedo
 const homeElement = new Element('div');
 homeElement.attributes = {
    class = 'whatever';
    id = 'whateverid'
 }
 homeElement.children = 

  function CreateAllElements(modelObject)
  {
    loop through object values
    {
        newElement = element.createElement('type');
        newElement.classList.add('class');
        newElement.innerText = ('innertext)


        content.append(newElement);
    }
  }
  homeModel = {
    type: div,
    class: 
    innerText:
    children:
    
  }




  on load home:
    create image
    title
    blurb about the restaurant
    reviews

    <content>
    <title-box> flex-column
        <title>
        <image> 
    <blurb text box> flex -column
        <text-box>
            <blurb title> about us
            <blurb text> we do this and stufff about it
        <img- family>
    <blurb text box> flex- row (grid)
        x4 smaple pics of food
    <review box>
    */
