export default class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
  }

  addAttributes(attributes) {
    for (const k of Object.keys(attributes)) {
      this.attributes[k] = attributes[k];
    }
    return this;
  }

  addChild(childElement) {
    this.innerText = undefined;
    this.children.push(childElement);

    return this;
  }

  setInnerText(string) {
    this.childen = [];
    this.innerText = string;

    return this;
  }

  build() {
    let DOMelement = document.createElement(this.elementType);

    // Attributes
    for (const k of Object.keys(this.attributes)) {
      DOMelement.setAttribute(k, this.attributes[k]);
    }

    // Children
    if (this.innerText === undefined) {
      for (const child of this.children) {
        DOMelement.appendChild(child.build());
      }
    } else {
      let DOMinnerText = document.createTextNode(this.innerText);
      DOMelement.appendChild(DOMinnerText);
    }
    return DOMelement;
  }
}
