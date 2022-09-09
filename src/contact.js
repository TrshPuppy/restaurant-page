import createTitleBox from "./functions";

const content = document.querySelector("#content");

export default function loadContact() {
  const titleBox = createTitleBox("Contact", "This is the contact page");

  content.append(titleBox);
}
