import createTitleBox from "./functions";

const content = document.querySelector("#content");

export default function loadHome() {
  const titleBox = createTitleBox("Home", "This is the homepage");

  content.append(titleBox);

  /* psuedo
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
}
