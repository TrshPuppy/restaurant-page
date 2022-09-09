export default function createTitleBox(title, text) {
  const myTitleElemtent = document.createElement("div");
  myTitleElemtent.classList.add(`${title}-title`);
  myTitleElemtent.innerText = text;

  return myTitleElemtent;
}

export function clearContentBox() {
  const contentBox = document.querySelector("#content");
  console.log("hi");
  contentBox.replaceChildren();
  return;
}
