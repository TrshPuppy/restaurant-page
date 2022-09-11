export default function clearContentBox() {
  const contentBox = document.querySelector("#content");
  console.log("hi");
  contentBox.replaceChildren();
  return;
}
