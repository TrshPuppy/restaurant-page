import Element from "./utilities";

const content = document.querySelector("#content");

export default function loadHome() {
  const homeElement = new Element("div")
    .addAttributes({ class: "home-tab" })
    .addChild(new Element("h1").setInnerText("Hi there!"));

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
