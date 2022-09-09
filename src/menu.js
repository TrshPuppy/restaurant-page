import { createTitleBox } from "./utilities";

const content = document.querySelector("#content");

const menuTextContent = {};

export default function loadMenu() {
  const titleBox = createTitleBox("Menu", "this is the menu bub");

  content.append(titleBox);
}
