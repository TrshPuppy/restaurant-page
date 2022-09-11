/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
const content = document.querySelector("#content");

function loadContact() {
  const titleBox = createTitleBox("Contact", "This is the contact page");

  content.append(titleBox);
}


/***/ }),

/***/ "./src/elementClass.js":
/*!*****************************!*\
  !*** ./src/elementClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Element)
/* harmony export */ });
class Element {
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
    // documnet.create(element);
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


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementClass */ "./src/elementClass.js");


const content = document.querySelector("#content");

function loadHome() {
  const homeElement = new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
    .addAttributes({ class: "home-tab" })
    .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setInnerText("Trash 2 Tummy"));

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


/***/ }),

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHTML)
/* harmony export */ });
const HTMLbody = document.querySelector("body");
const content = document.querySelector("#content");

function loadHTML() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("home-button");
  homeButton.innerText = "Home";

  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-button");
  menuButton.innerText = "Menu";

  const contactButton = document.createElement("button");
  contactButton.classList.add("contact-button");
  contactButton.innerText = "Contact";

  nav.append(homeButton, menuButton, contactButton);

  HTMLbody.insertAdjacentElement("afterbegin", header);
  header.append(nav);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementClass */ "./src/elementClass.js");


const content = document.querySelector("#content");

function loadMenu() {
  const menuElement = new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
    .addAttributes({ class: "menu-tab" })
    .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setInnerText("Menu"));

  content.appendChild(menuElement.build());
}


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearContentBox)
/* harmony export */ });
function clearContentBox() {
  const contentBox = document.querySelector("#content");
  console.log("hi");
  contentBox.replaceChildren();
  return;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage */ "./src/loadpage.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");






(0,_loadpage__WEBPACK_IMPORTED_MODULE_0__["default"])();

// home tab
const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", () => {
  (0,_utilities__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

// menu tab
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  (0,_utilities__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

// contact tab
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", () => {
  (0,_utilities__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHFDOztBQUVyQzs7QUFFZTtBQUNmLDBCQUEwQixxREFBTztBQUNqQyxxQkFBcUIsbUJBQW1CO0FBQ3hDLGtCQUFrQixxREFBTzs7QUFFekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCcUM7O0FBRXJDOztBQUVlO0FBQ2YsMEJBQTBCLHFEQUFPO0FBQ2pDLHFCQUFxQixtQkFBbUI7QUFDeEMsa0JBQWtCLHFEQUFPOztBQUV6QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNKO0FBQ0E7QUFDTTtBQUNNOztBQUUxQyxxREFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFlO0FBQ2pCLEVBQUUsaURBQVE7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQWU7QUFDakIsRUFBRSxpREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBZTtBQUNqQixFQUFFLG9EQUFXO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9lbGVtZW50Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCB0aXRsZUJveCA9IGNyZWF0ZVRpdGxlQm94KFwiQ29udGFjdFwiLCBcIlRoaXMgaXMgdGhlIGNvbnRhY3QgcGFnZVwiKTtcblxuICBjb250ZW50LmFwcGVuZCh0aXRsZUJveCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudFR5cGUpIHtcbiAgICB0aGlzLmVsZW1lbnRUeXBlID0gZWxlbWVudFR5cGU7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYWRkQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICB0aGlzLmF0dHJpYnV0ZXNba10gPSBhdHRyaWJ1dGVzW2tdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkRWxlbWVudCkge1xuICAgIHRoaXMuaW5uZXJUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRJbm5lclRleHQoc3RyaW5nKSB7XG4gICAgdGhpcy5jaGlsZGVuID0gW107XG4gICAgdGhpcy5pbm5lclRleHQgPSBzdHJpbmc7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCkge1xuICAgIC8vIGRvY3VtbmV0LmNyZWF0ZShlbGVtZW50KTtcbiAgICBsZXQgRE9NZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50VHlwZSk7XG5cbiAgICAvLyBBdHRyaWJ1dGVzXG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMuYXR0cmlidXRlcykpIHtcbiAgICAgIERPTWVsZW1lbnQuc2V0QXR0cmlidXRlKGssIHRoaXMuYXR0cmlidXRlc1trXSk7XG4gICAgfVxuXG4gICAgLy8gQ2hpbGRyZW5cbiAgICBpZiAodGhpcy5pbm5lclRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgIERPTWVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQuYnVpbGQoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBET01pbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmlubmVyVGV4dCk7XG4gICAgICBET01lbGVtZW50LmFwcGVuZENoaWxkKERPTWlubmVyVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBET01lbGVtZW50O1xuICB9XG59XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50Q2xhc3NcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGhvbWVFbGVtZW50ID0gbmV3IEVsZW1lbnQoXCJkaXZcIilcbiAgICAuYWRkQXR0cmlidXRlcyh7IGNsYXNzOiBcImhvbWUtdGFiXCIgfSlcbiAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJoMVwiKS5zZXRJbm5lclRleHQoXCJUcmFzaCAyIFR1bW15XCIpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVFbGVtZW50LmJ1aWxkKCkpO1xufVxuXG4vKiBwc3VlZG9cbiBjb25zdCBob21lRWxlbWVudCA9IG5ldyBFbGVtZW50KCdkaXYnKTtcbiBob21lRWxlbWVudC5hdHRyaWJ1dGVzID0ge1xuICAgIGNsYXNzID0gJ3doYXRldmVyJztcbiAgICBpZCA9ICd3aGF0ZXZlcmlkJ1xuIH1cbiBob21lRWxlbWVudC5jaGlsZHJlbiA9IFxuXG4gIGZ1bmN0aW9uIENyZWF0ZUFsbEVsZW1lbnRzKG1vZGVsT2JqZWN0KVxuICB7XG4gICAgbG9vcCB0aHJvdWdoIG9iamVjdCB2YWx1ZXNcbiAgICB7XG4gICAgICAgIG5ld0VsZW1lbnQgPSBlbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3R5cGUnKTtcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbGFzcycpO1xuICAgICAgICBuZXdFbGVtZW50LmlubmVyVGV4dCA9ICgnaW5uZXJ0ZXh0KVxuXG5cbiAgICAgICAgY29udGVudC5hcHBlbmQobmV3RWxlbWVudCk7XG4gICAgfVxuICB9XG4gIGhvbWVNb2RlbCA9IHtcbiAgICB0eXBlOiBkaXYsXG4gICAgY2xhc3M6IFxuICAgIGlubmVyVGV4dDpcbiAgICBjaGlsZHJlbjpcbiAgICBcbiAgfVxuXG5cblxuXG4gIG9uIGxvYWQgaG9tZTpcbiAgICBjcmVhdGUgaW1hZ2VcbiAgICB0aXRsZVxuICAgIGJsdXJiIGFib3V0IHRoZSByZXN0YXVyYW50XG4gICAgcmV2aWV3c1xuXG4gICAgPGNvbnRlbnQ+XG4gICAgPHRpdGxlLWJveD4gZmxleC1jb2x1bW5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICA8aW1hZ2U+IFxuICAgIDxibHVyYiB0ZXh0IGJveD4gZmxleCAtY29sdW1uXG4gICAgICAgIDx0ZXh0LWJveD5cbiAgICAgICAgICAgIDxibHVyYiB0aXRsZT4gYWJvdXQgdXNcbiAgICAgICAgICAgIDxibHVyYiB0ZXh0PiB3ZSBkbyB0aGlzIGFuZCBzdHVmZmYgYWJvdXQgaXRcbiAgICAgICAgPGltZy0gZmFtaWx5PlxuICAgIDxibHVyYiB0ZXh0IGJveD4gZmxleC0gcm93IChncmlkKVxuICAgICAgICB4NCBzbWFwbGUgcGljcyBvZiBmb29kXG4gICAgPHJldmlldyBib3g+XG4gICAgKi9cbiIsImNvbnN0IEhUTUxib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSFRNTCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idXR0b25cIik7XG4gIGhvbWVCdXR0b24uaW5uZXJUZXh0ID0gXCJIb21lXCI7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcblxuICBuYXYuYXBwZW5kKGhvbWVCdXR0b24sIG1lbnVCdXR0b24sIGNvbnRhY3RCdXR0b24pO1xuXG4gIEhUTUxib2R5Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZChuYXYpO1xufVxuIiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudENsYXNzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtZW51RWxlbWVudCA9IG5ldyBFbGVtZW50KFwiZGl2XCIpXG4gICAgLmFkZEF0dHJpYnV0ZXMoeyBjbGFzczogXCJtZW51LXRhYlwiIH0pXG4gICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDFcIikuc2V0SW5uZXJUZXh0KFwiTWVudVwiKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51RWxlbWVudC5idWlsZCgpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyQ29udGVudEJveCgpIHtcbiAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc29sZS5sb2coXCJoaVwiKTtcbiAgY29udGVudEJveC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgcmV0dXJuO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhUTUwgZnJvbSBcIi4vbG9hZHBhZ2VcIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBjbGVhckNvbnRlbnRCb3ggZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmxvYWRIVE1MKCk7XG5cbi8vIGhvbWUgdGFiXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWJ1dHRvblwiKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJDb250ZW50Qm94KCk7XG4gIGxvYWRIb21lKCk7XG59KTtcblxuLy8gbWVudSB0YWJcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnV0dG9uXCIpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGVhckNvbnRlbnRCb3goKTtcbiAgbG9hZE1lbnUoKTtcbn0pO1xuXG4vLyBjb250YWN0IHRhYlxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1idXR0b25cIik7XG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyQ29udGVudEJveCgpO1xuICBsb2FkQ29udGFjdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=