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
/* harmony import */ var _elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementClass */ "./src/elementClass.js");


const content = document.querySelector("#content");

function loadContact() {
  const contactElement = new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
    .addAttributes({ class: "contact-tab", id: "contact-tab" })
    .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("h1").setInnerText("Contact Us!"))
    .addChild(new _elementClass__WEBPACK_IMPORTED_MODULE_0__["default"]("div").addAttributes({ class: "contact-div" }));

  content.appendChild(contactElement.build());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXJDOztBQUVlO0FBQ2YsNkJBQTZCLHFEQUFPO0FBQ3BDLHFCQUFxQix5Q0FBeUM7QUFDOUQsa0JBQWtCLHFEQUFPO0FBQ3pCLGtCQUFrQixxREFBTyx3QkFBd0Isc0JBQXNCOztBQUV2RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEcUM7O0FBRXJDOztBQUVlO0FBQ2YsMEJBQTBCLHFEQUFPO0FBQ2pDLHFCQUFxQixtQkFBbUI7QUFDeEMsa0JBQWtCLHFEQUFPOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJxQzs7QUFFckM7O0FBRWU7QUFDZiwwQkFBMEIscURBQU87QUFDakMscUJBQXFCLG1CQUFtQjtBQUN4QyxrQkFBa0IscURBQU87O0FBRXpCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0o7QUFDQTtBQUNNO0FBQ007O0FBRTFDLHFEQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQWU7QUFDakIsRUFBRSxpREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBZTtBQUNqQixFQUFFLGlEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFlO0FBQ2pCLEVBQUUsb0RBQVc7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VsZW1lbnRDbGFzcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudENsYXNzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0RWxlbWVudCA9IG5ldyBFbGVtZW50KFwiZGl2XCIpXG4gICAgLmFkZEF0dHJpYnV0ZXMoeyBjbGFzczogXCJjb250YWN0LXRhYlwiLCBpZDogXCJjb250YWN0LXRhYlwiIH0pXG4gICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDFcIikuc2V0SW5uZXJUZXh0KFwiQ29udGFjdCBVcyFcIikpXG4gICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiZGl2XCIpLmFkZEF0dHJpYnV0ZXMoeyBjbGFzczogXCJjb250YWN0LWRpdlwiIH0pKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RFbGVtZW50LmJ1aWxkKCkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRUeXBlKSB7XG4gICAgdGhpcy5lbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxuXG4gIGFkZEF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKSkge1xuICAgICAgdGhpcy5hdHRyaWJ1dGVzW2tdID0gYXR0cmlidXRlc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZEVsZW1lbnQpIHtcbiAgICB0aGlzLmlubmVyVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGRFbGVtZW50KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0SW5uZXJUZXh0KHN0cmluZykge1xuICAgIHRoaXMuY2hpbGRlbiA9IFtdO1xuICAgIHRoaXMuaW5uZXJUZXh0ID0gc3RyaW5nO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBidWlsZCgpIHtcbiAgICAvLyBkb2N1bW5ldC5jcmVhdGUoZWxlbWVudCk7XG4gICAgbGV0IERPTWVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFR5cGUpO1xuXG4gICAgLy8gQXR0cmlidXRlc1xuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh0aGlzLmF0dHJpYnV0ZXMpKSB7XG4gICAgICBET01lbGVtZW50LnNldEF0dHJpYnV0ZShrLCB0aGlzLmF0dHJpYnV0ZXNba10pO1xuICAgIH1cblxuICAgIC8vIENoaWxkcmVuXG4gICAgaWYgKHRoaXMuaW5uZXJUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICBET01lbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkLmJ1aWxkKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgRE9NaW5uZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5pbm5lclRleHQpO1xuICAgICAgRE9NZWxlbWVudC5hcHBlbmRDaGlsZChET01pbm5lclRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gRE9NZWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudENsYXNzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBob21lRWxlbWVudCA9IG5ldyBFbGVtZW50KFwiZGl2XCIpXG4gICAgLmFkZEF0dHJpYnV0ZXMoeyBjbGFzczogXCJob21lLXRhYlwiIH0pXG4gICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDFcIikuc2V0SW5uZXJUZXh0KFwiVHJhc2ggMiBUdW1teVwiKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lRWxlbWVudC5idWlsZCgpKTtcbn1cblxuLyogcHN1ZWRvXG4gY29uc3QgaG9tZUVsZW1lbnQgPSBuZXcgRWxlbWVudCgnZGl2Jyk7XG4gaG9tZUVsZW1lbnQuYXR0cmlidXRlcyA9IHtcbiAgICBjbGFzcyA9ICd3aGF0ZXZlcic7XG4gICAgaWQgPSAnd2hhdGV2ZXJpZCdcbiB9XG4gaG9tZUVsZW1lbnQuY2hpbGRyZW4gPSBcblxuICBmdW5jdGlvbiBDcmVhdGVBbGxFbGVtZW50cyhtb2RlbE9iamVjdClcbiAge1xuICAgIGxvb3AgdGhyb3VnaCBvYmplY3QgdmFsdWVzXG4gICAge1xuICAgICAgICBuZXdFbGVtZW50ID0gZWxlbWVudC5jcmVhdGVFbGVtZW50KCd0eXBlJyk7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xhc3MnKTtcbiAgICAgICAgbmV3RWxlbWVudC5pbm5lclRleHQgPSAoJ2lubmVydGV4dClcblxuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKG5ld0VsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBob21lTW9kZWwgPSB7XG4gICAgdHlwZTogZGl2LFxuICAgIGNsYXNzOiBcbiAgICBpbm5lclRleHQ6XG4gICAgY2hpbGRyZW46XG4gICAgXG4gIH1cblxuXG5cblxuICBvbiBsb2FkIGhvbWU6XG4gICAgY3JlYXRlIGltYWdlXG4gICAgdGl0bGVcbiAgICBibHVyYiBhYm91dCB0aGUgcmVzdGF1cmFudFxuICAgIHJldmlld3NcblxuICAgIDxjb250ZW50PlxuICAgIDx0aXRsZS1ib3g+IGZsZXgtY29sdW1uXG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgPGltYWdlPiBcbiAgICA8Ymx1cmIgdGV4dCBib3g+IGZsZXggLWNvbHVtblxuICAgICAgICA8dGV4dC1ib3g+XG4gICAgICAgICAgICA8Ymx1cmIgdGl0bGU+IGFib3V0IHVzXG4gICAgICAgICAgICA8Ymx1cmIgdGV4dD4gd2UgZG8gdGhpcyBhbmQgc3R1ZmZmIGFib3V0IGl0XG4gICAgICAgIDxpbWctIGZhbWlseT5cbiAgICA8Ymx1cmIgdGV4dCBib3g+IGZsZXgtIHJvdyAoZ3JpZClcbiAgICAgICAgeDQgc21hcGxlIHBpY3Mgb2YgZm9vZFxuICAgIDxyZXZpZXcgYm94PlxuICAgICovXG4iLCJjb25zdCBIVE1MYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhUTUwoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImhvbWUtYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi5pbm5lclRleHQgPSBcIk1lbnVcIjtcblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1idXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG5cbiAgbmF2LmFwcGVuZChob21lQnV0dG9uLCBtZW51QnV0dG9uLCBjb250YWN0QnV0dG9uKTtcblxuICBIVE1MYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGhlYWRlcik7XG4gIGhlYWRlci5hcHBlbmQobmF2KTtcbn1cbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRDbGFzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgbWVudUVsZW1lbnQgPSBuZXcgRWxlbWVudChcImRpdlwiKVxuICAgIC5hZGRBdHRyaWJ1dGVzKHsgY2xhc3M6IFwibWVudS10YWJcIiB9KVxuICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgxXCIpLnNldElubmVyVGV4dChcIk1lbnVcIikpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUVsZW1lbnQuYnVpbGQoKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRlbnRCb3goKSB7XG4gIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gIGNvbnRlbnRCb3gucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHJldHVybjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIVE1MIGZyb20gXCIuL2xvYWRwYWdlXCI7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgY2xlYXJDb250ZW50Qm94IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5sb2FkSFRNTCgpO1xuXG4vLyBob21lIHRhYlxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idXR0b25cIik7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyQ29udGVudEJveCgpO1xuICBsb2FkSG9tZSgpO1xufSk7XG5cbi8vIG1lbnUgdGFiXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1dHRvblwiKTtcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJDb250ZW50Qm94KCk7XG4gIGxvYWRNZW51KCk7XG59KTtcblxuLy8gY29udGFjdCB0YWJcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtYnV0dG9uXCIpO1xuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGVhckNvbnRlbnRCb3goKTtcbiAgbG9hZENvbnRhY3QoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9