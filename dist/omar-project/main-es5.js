(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/bc1":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex82/Ex82.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex82Component */

    /***/
    function bc1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex82Component", function () {
        return Ex82Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex82Component = /*#__PURE__*/function () {
        function Ex82Component() {
          _classCallCheck(this, Ex82Component);
        }

        _createClass(Ex82Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex82Component;
      }();

      Ex82Component.ɵfac = function Ex82Component_Factory(t) {
        return new (t || Ex82Component)();
      };

      Ex82Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex82Component,
        selectors: [["app-Ex82"]],
        decls: 11,
        vars: 0,
        consts: [["id", "aufgabe"]],
        template: function Ex82Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "8.2 async/await");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "L\xF6sen Sie die letzte Aufgabe mit async / await statt Promise. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "<!DOCTYPE html>\n    <html>\n    \n    <head>\n    \n        <script>\n           \n    (async _=> {\n           var texta\n            var textb \n    \n                    await Promise.all([\n                        (async _=> a = await readFile('.A.txt'))(),\n                        (async _=> b = await readFile('.B.txt'))()\n                    ]);\n    \n           \n                var maxlen = (arrayA.length >= arrayB.length) ? maxlen = arrayA.length : maxlen = arrayB.length;\n    \n                for (var i = 0; i < maxlen; i++) {\n                    document.getElementById(\"feld\").textContent += arrayA[i] + arrayB[i];\n                }\n            });\n                     async function readFile(text){\n                    let importText = await fetch(text);\n                    let newText = await importText.text();\n                    return newText.split('\\r\\n');\n                }\n    \n        </script>\n    \n    </head>\n    \n    <body>\n        <div>\n            <h1>8.1. Promises</h1>\n            <div id=\"feld\"></div>\n    \n        </div>\n    \n    </body>\n    \n    </html>\n    \n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  background-color: #689ef7;\n  color: white;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg4Mi9FeDgyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXg4Mi9FeDgyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uZXhlY3V0ZSB7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggI2FiYWJhYjtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4OWVmNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex82Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex82',
            templateUrl: './Ex82.component.html',
            styleUrls: ['./Ex82.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "/l4N":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex65/Ex65.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex65Component */

    /***/
    function l4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex65Component", function () {
        return Ex65Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex65Component = /*#__PURE__*/function () {
        function Ex65Component() {
          _classCallCheck(this, Ex65Component);
        }

        _createClass(Ex65Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex65Component;
      }();

      Ex65Component.ɵfac = function Ex65Component_Factory(t) {
        return new (t || Ex65Component)();
      };

      Ex65Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex65Component,
        selectors: [["app-Ex65"]],
        decls: 27,
        vars: 0,
        consts: [["id", "aufgabe"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator", "target", "_blank"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map", "target", "_blank"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries", "target", "_blank"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries", "target", "_blank"], ["href", "https://developer.mozilla.org/de/docs/Web/API/Console/assert", "target", "_blank"]],
        template: function Ex65Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "6.5. DeepCopy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Schreiben Sie eine rekursive Funktion deepCopy( struct ) als ES6-Ausdruck, so dass beliebig geschachtelte Arrays und Objekte struct tiefenkopiert werden k\xF6nnen . Verwenden Sie zu diesem Zweck den");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " konditionalen tern\xE4ren Operator ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Array.map()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Object.fromEntries() ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "und ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Object.entries()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ". Verwenden Sie dabei nur Arrow Functions und Ausdr\xFCcke, keine Anweisungen, keine Bl\xF6cke. Verwenden Sie nicht die JSON-Methoden. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Geben Sie die HTML-Seite inkl. ES6-Code inkl. Tests hier ein. Verwenden Sie f\xFCr Ihre Tests die Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "console.assert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "    const struct = {\n      name: \"omar\",\n      vorname: \"guella\",\n      objekt: {\n          matrikel: [\"student\", 123]\n      }\n  }\n  const deepCopy = (struct) => {\n      return Object.fromEntries(Object.entries(struct));\n  }\n  const copy = deepCopy(struct);\n  \n  console.assert(struct === copy, \"richtig copiert\");\n  console.assert(struct !== copy, \"ACHTUNG nicht richtig copiert\");\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  background-color: #689ef7;\n  color: white;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg2NS9FeDY1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXg2NS9FeDY1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4ZWN1dGUge1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICNhYmFiYWI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex65Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex65',
            templateUrl: './Ex65.component.html',
            styleUrls: ['./Ex65.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "/mFQ":
    /*!***************************************************!*\
      !*** ./src/app/exercice/Ex112/Ex112.component.ts ***!
      \***************************************************/

    /*! exports provided: Ex112Component */

    /***/
    function mFQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex112Component", function () {
        return Ex112Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex112Component = /*#__PURE__*/function () {
        function Ex112Component() {
          _classCallCheck(this, Ex112Component);
        }

        _createClass(Ex112Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex112Component;
      }();

      Ex112Component.ɵfac = function Ex112Component_Factory(t) {
        return new (t || Ex112Component)();
      };

      Ex112Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex112Component,
        selectors: [["app-Ex112"]],
        decls: 22,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "http://localhost/phpscript/login.php", "target", "_blank", 1, "execute"]],
        template: function Ex112Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "11.2 Login mit PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Schreiben Sie eine sichere PHP-L\xF6sung f\xFCr Login, das die persistierten Registrierungsdaten aus der letzten Aufgabe nutzt. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Geben Sie alle Ihre PHP-Skripte hier an:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "        <?php\n        \n            $username = $_POST['username'];\n            $Password = $_POST[\"password\"];\n        \n            $lines = file(\"./Accounts.csv\");\n            $Account = false;\n            foreach($lines as $line_num => $line){\n                list( $csvUsername, $csvPassword) = explode(\",\", $line);\n                if($csvUsername === hash(\"sha256\", $username)){\n                    if($csvPassword === hash(\"sha256\", $Password) . \"\\n\"){\n                        echo \"<script>alert('Login erfolgreich!')</script>\";\n                        $Account = true;\n                        break;\n                    }\n                }\n            }\n            if(!$Account && ($username || $Password)){\n                echo \"<script>alert('Name oder Password falsch!')</script>\";\n            }\n        \n        ?>\n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Geben Sie Ihren Client-Code (HTML, CSS, Javascript), falls zus\xE4tzlich zum PHP-Skript vorhanden, hier an:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "            <!DOCTYPE html>\n<html>\n<head>\n\n</head>\n\n\n    <div class=main> \n    <h1>LOGIN</h1>\n<form method=\"post\">\n        Username:<br>\n        <input type=\"text\" name=\"username\">\n        <br>\n        PASSWORD:<br>\n        <input type=\"password\" name=\"password\">\n        <br>\n        <input type=\"submit\" >\n</form>\n\n\n\n</div>\n\n</html>\n\n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgxMTIvRXgxMTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUpGOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBLFdBQUE7O0FBQ0E7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLGVBQUE7RUFORjs7RUFTQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaWNlL0V4MTEyL0V4MTEyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWlkZGxlcGFuZSB7XHJcbiAgd2lkdGg6IDc2JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWZkZmY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGdyaWQtYXJlYTogYjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5Y2NjYztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0cGFuZSB7XHJcbiAgd2lkdGg6IDI0JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcblxyXG59XHJcblxyXG4jYXVzZnVocmVuIHtcclxuICBjb2xvcjogcmdiKDEwNSwgMzUsIDU2KTtcclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uU2VpdGVfaHRtbCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG59XHJcblxyXG4jYXVmZ2FiZSB7XHJcbiAgYmFja2dyb3VuZDogI2RhZmRmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNlM2ZjZGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxufVxyXG5cclxuXHJcblxyXG4uZXhlY3V0ZSB7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggI2FiYWJhYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4OWVmNztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTAwcHgpIHtcclxuICAjYXVzZnVocmVuIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICB9XHJcblxyXG4gIC5leGVjdXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex112Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex112',
            templateUrl: './Ex112.component.html',
            styleUrls: ['./Ex112.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "/uZe":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex23/Ex23.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex23Component */

    /***/
    function uZe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex23Component", function () {
        return Ex23Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex23Component = /*#__PURE__*/function () {
        function Ex23Component() {
          _classCallCheck(this, Ex23Component);
        }

        _createClass(Ex23Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex23Component;
      }();

      Ex23Component.ɵfac = function Ex23Component_Factory(t) {
        return new (t || Ex23Component)();
      };

      Ex23Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex23Component,
        selectors: [["app-Ex23"]],
        decls: 30,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["src", "https://kaul.inf.h-brs.de/we/assets/img/survey.png", 2, "max-width", "600px", "width", "100%"], ["href", "https://developer.mozilla.org/de/docs/Tools/Eyedropper", "target", "_blank"], ["href", "https://fonts.google.com/", "target", "_blank"], ["href", "https://www.zeichenschatz.net/typography/websichere-schriften", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "assets/loesung 2.3.html", "target", "_blank", 1, "execute"]],
        template: function Ex23Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aufgabe 2.3. Wireframe with HTML and CSS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gegeben ist folgendes HTML-Wireframe:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hinweis zu den Farben: Firefox DevTools anthalten eine Pipette namens ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\"Eyedropper\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", mit der man die Farben aus einer Webseite auslesen kann. Die gr\xFCnliche Farbe im Rahmen des Wireframes ist demnach #b2d6d1, Hinweis zu den Schriften (Fonts): Die gr\xF6\xDFte Sammlung an \"kostenlosen\" Web-Schriften stammt von Google und ist unter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Google Fonts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " zu finden. Wer lieber aus dem Vorrat an");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " vorhanden Schriften");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ausw\xE4hlt, wird unter websichere Schriften f\xFCndig. Frage: Mit welchem HTML- und CSS-Code kann man diesen Wireframe exakt nachbilden? Schreiben Sie Ihren CSS-Code direkt in die HTML-Datei. Geben Sie Ihren HTML- und CSS-Quellcode zusammen in dieses Textfeld ein: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\t\t\t\t<!DOCTYPE html>\n\t\t\t\t<style>\n\t\t\t\t.grandpa {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tbackground-color: #b2d6d1;\n\t\t\t\t} \n\t\t\t\t\n\t\t\t\t.papa {\n\t\t\t\t\tleft: 5%;\n\t\t\t\t\ttop: 11%;\n\t\t\t\t\twidth: 90%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tbackground-color: #F0FFFF;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.p0 {\n\t\t\t\t\tmargin-top: 10px;\n\t\t\t\t\tmargin-left: 45%;\n\t\t\t\t\tfont-family: \"Brush Script MT\";\n\t\t\t\t\tfont-size: 40px;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.p1 {\n\t\t\t\t\tdisplay : flex;\n\t\t\t\t\tmargin-top: 30px;\n\t\t\t\t\tmargin-left: 35%;\n\t\t\t\t\tfont-family: \"Lucida Handwriting\";\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\ttd {\n\t\t\t\t\theight: 50px;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.left {\n\t\t\t\t\ttext-align: right;\n\t\t\t\t\tfont-family: \"Papyrus\";\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.right {\n\t\t\t\t\ttext-align: left;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\ttable {\n\t\t\t\t\tdisplay : flex;\n\t\t\t\t\n\t\t\t\t\twidth: 80%;\n\t\t\t\t\tmargin-left: 10%;\n\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t\t<div class=\"grandpa\">\n\t\t\t\t\t<p class=\"p0\">Survey Form</p>\n\t\t\t\t\t<div class=\"papa\">\n\t\t\t\t\n\t\t\t\t\t\t<p class=\"p1\">let us know how we can improve freeCodeCamp</p>\n\t\t\t\t\t\t<table>\n\t\t\t\t\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"left\">*NAME</td>\n\t\t\t\t\t\t\t\t<td class=\"right\"><input type=\"name\" id=\"w3review\"  placeholder=\"Enter your name\"></input></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"left\">*Email</td>\n\t\t\t\t\t\t\t\t<td class=\"right\"><input type=\"name\" id=\"w3review\" placeholder=\"Enter your Email\"></input></td>\n\t\t\t\t\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"left\">*AGE </td>\n\t\t\t\t\t\t\t\t<td class=\"right\"><input type=\"number\" id=\"quantity\"\n\t\t\t\t\t\t\t\t\tname=\"quantity\" min=\"12\" max=\"100\"  placeholder=\"AGE\"></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"left\">Wich options best descripes your current role</td>\n\t\t\t\t\t\t\t\t<td class=\"right\"><select id=\"cars\" name=\"cars\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"volvo\">Student</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"saab\">Mitarbeiter</option></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"left\">How likely is that you would recommend\n\t\t\t\t\t\t\t\t\tfreeCodeCamp to a Friend</td>\n\t\t\t\t\t\t\t\t<td class=\"right\"><input type=\"radio\" id=\"html\"\n\t\t\t\t\t\t\t\t\tname=\"fav_language\" value=\"HTML\"> <label for=\"html\">Defintely</label><br>\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"css\" name=\"fav_language\" value=\"CSS\">\n\t\t\t\t\t\t\t\t\t<label for=\"css\">Mabye</label><br> <input type=\"radio\"\n\t\t\t\t\t\t\t\t\tid=\"javascript\" name=\"fav_language\" value=\"JavaScript\"> <label\n\t\t\t\t\t\t\t\t\tfor=\"javascript\">Not Sure</label><br> <br></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"left\">What do you like moste in FCC</td>\n\t\t\t\t\t\t\t\t<td class=\"right\"><select id=\"cars\" name=\"cars\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"volvo\">Select an Option</option></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"left\">Things that Should be improved in the future\n\t\t\t\t\t\t\t\t\t(check all that apply)</td>\n\t\t\t\t\t\t\t\t<td class=\"right\"><input type=\"radio\" id=\"html\"\n\t\t\t\t\t\t\t\t\tname=\"fav_language\" value=\"HTML\"> <label for=\"html\">Front-end\n\t\t\t\t\t\t\t\t\t\tProjects</label><br> <input type=\"radio\" id=\"css\" name=\"fav_language\"\n\t\t\t\t\t\t\t\t\tvalue=\"CSS\"> <label for=\"css\">Back-end Projects</label><br>\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"javascript\" name=\"fav_language\"\n\t\t\t\t\t\t\t\t\tvalue=\"JavaScript\"> <label for=\"javascript\">Data\n\t\t\t\t\t\t\t\t\t\tVisualization </label><br> <br></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " QUELLCODE AUSF\xDCHRUNG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgyMy9FeDIzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDIzL0V4MjMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex23Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex23',
            templateUrl: './Ex23.component.html',
            styleUrls: ['./Ex23.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "/yFN":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex52/Ex52.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex52Component */

    /***/
    function yFN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex52Component", function () {
        return Ex52Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex52Component = /*#__PURE__*/function () {
        function Ex52Component() {
          _classCallCheck(this, Ex52Component);
        }

        _createClass(Ex52Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex52Component;
      }();

      Ex52Component.ɵfac = function Ex52Component_Factory(t) {
        return new (t || Ex52Component)();
      };

      Ex52Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex52Component,
        selectors: [["app-Ex52"]],
        decls: 31,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://www.w3schools.com/js/js_htmldom.asp", "target", "_blank"], ["href", "https://www.w3schools.com/js/js_timing.asp", "target", "_blank"], ["src", "https://kaul.inf.h-brs.de/we/assets/img/Rednerliste.png", 2, "max-width", "600px", "width", "100%"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "assets/loesung5.2.html", "target", "_blank", 1, "execute"]],
        template: function Ex52Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "5.2. Rednerliste mit Zeitmessung ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Implementieren Sie die interaktive Anwendung \"Rednerliste mit Zeitmessung\" selbstst\xE4ndig in JavaScript durch Nutzung der");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " DOM API");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " und der ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Timer-Funktionen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". Neue Redner sollen auf Knopfdruck hinzugef\xFCgt werden k\xF6nnen. Deren Uhr wird dann sofort automatisch gestartet und alle anderen Uhren angehalten. Bei jedem Redner soll die individuelle, gemessene Redezeit sekundengenau angezeigt werden. F\xFCr jeden Redner soll es einen eigenen Start-/Stopp-Button geben. Es soll immer nur eine Uhr laufen. Angezeigt werden sollen die bisherigen Summenzeiten aller Redebeitr\xE4ge der betreffenden Person. Suchen Sie eine m\xF6glichst kurze und elegante L\xF6sung. Achten Sie gleichzeitig auf gute Usability: z.B. wenn die Eingabe mit einem Return beendet wird, soll der Button-Click nicht mehr erforderlich sein, usw.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Geben Sie die komplette HTML-Seite exkl. JavaScript-Quelltext an. Schreiben Sie Ihren JavaScript-Quelltext in eine separate Datei.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "<!DOCTYPE html>\n        <html><head>\n                <script type=\"text/javascript\" src=\"\xDCbung5_2rednerListe.js\"></script>\n            </head>\n            <body>\n                <h1>Redner Liste</h1>\n                <table id=\"input\">\n                            <tr>\n                        <td>NeueRedner:</td>\n                        <td><input type=\"text\" id=\"inputValue\"></td>\n                        <td><button id=\"newButtuon\">add</button></td>\n                        </tr>\n                </table>\n        \n                <ul id=\"Rednerliste\"></ul>\n            \n        \n        </body></html>\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "F\xFCgen Sie Ihren JavaScript-Quelltext aus der separaten Datei in das folgende Textarea ein:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "let aktuTime , aktuIntervl , aktuButton;\n\n        window.onload = function () {\n                const list = document.getElementById(\"Rednerliste\");\n                const input = document.getElementById(\"inputValue\");\n                const button = document.getElementById(\"newButtuon\");\n        \n            if ( input || list  ||button) {\n                button.addEventListener(\"click\", (event) => {const name = input.value;\n                    if (name != \"\") {\n                            const table = document.createElement(\"table\");\n                            const redner = document.createElement(\"li\");\n                            const tr = document.createElement(\"tr\");\n                            const timeCreat = document.createElement(\"td\");\n                            const buttonCreat = document.createElement(\"td\");\n                            const nameCreat = document.createElement(\"td\");\n                            const newButton = document.createElement(\"button\");\n        \n                            tr.appendChild(nameCreat);\n                            tr.appendChild(timeCreat);\n                            tr.appendChild(buttonCreat);\n                            buttonCreat.appendChild(newButton);\n                            redner.appendChild(table);\n                            table.appendChild(tr);\n                            newButton.innerText = \"Stopp\";\n                            timeCreat.innerText = \"00:00:00\";\n                            nameCreat.innerText = name;\n                            let intervl = setInterval(Timer(timeCreat), 900);\n                            newButton.onclick = stopTime(intervl ,newButton, Timer(timeCreat));\n                            stopAll(Timer(timeCreat), newButton, intervl);\n                            list.appendChild(redner);\n                    } \n                });\n            } \n        };\n        \n        function Timer(time) {\n            let h = 0; let m = 0; let s = 0;\n            function begin() {\n                if (s == 59) { s = 0; newMinute();}\n                else {++s; }\n                \n                htmlPut(); }\n            function newMinute() {\n                if (m == 59) {\n                    m = 0;\n                    ++h;\n                } else {\n                    ++m;}\n                    }\n        \n                function htmlPut() {\n                const timeString = numUmwandlung(h) + \":\" + numUmwandlung(m) + \":\" + numUmwandlung(s);\n                time.innerText = timeString;}\n        \n                function numUmwandlung(num) {\n                return (\"0\" + num).slice(-2); }\n        \n                function getButton() {\n                return button;}\n        \n            return begin;\n        }\n        \n        function stopTime(intervl, button, timer) {\n            return function () {\n                clearInterval(intervl);\n                button.innerText = \"Start\";\n                button.onclick = restartTimer(intervl, button, timer);};\n        \n        }\n        \n        function restartTimer(intervl, button, timer) {\n            return function () {\n                intervl = setInterval(timer, 900);\n                stopAll( timer, button,intervl);\n                button.innerText = \"Stopp\";\n                button.onclick = stopTime(intervl, button, timer);};\n        }\n        \n        function stopAll( timer, button,intervl) {\n            if ( aktuTime != null && aktuButton != null && aktuIntervl != null ) {\n                stopTime(aktuIntervl, aktuButton, aktuTime)();\n            } \n            aktuButton = button; aktuIntervl = intervl; aktuTime = timer;\n        }\n        \n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg1Mi9FeDUyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDUyL0V4NTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex52Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex52',
            templateUrl: './Ex52.component.html',
            styleUrls: ['./Ex52.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\omar\Desktop\Web_Einf_Projekt\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0TBA":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex61/Ex61.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex61Component */

    /***/
    function TBA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex61Component", function () {
        return Ex61Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex61Component = /*#__PURE__*/function () {
        function Ex61Component() {
          _classCallCheck(this, Ex61Component);
        }

        _createClass(Ex61Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex61Component;
      }();

      Ex61Component.ɵfac = function Ex61Component_Factory(t) {
        return new (t || Ex61Component)();
      };

      Ex61Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex61Component,
        selectors: [["app-Ex61"]],
        decls: 25,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://developer.mozilla.org/de/docs/Web/API/Console/assert", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "assets/loesung 6.1.html", "target", "_blank", 1, "execute"]],
        template: function Ex61Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "6.1. Klammerpaare");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Schreiben Sie eine Webseite, in die man eine Zeichenkette mit beliebigen Buchstaben, Zahlen und Sonderzeichen eingeben kann, die beliebig geschachtelte Klammern ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "[...], (...)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " und enth\xE4lt, so dass sofort gepr\xFCft wird, ob alle Klammerpaare korrekt geschachtelt sind. Das Eingabefeld der Zeichenkette soll rot gef\xE4rbt werden, wenn es ein Klammerpaar gibt, das falsch geschachtelt ist. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Geben Sie die HTML-Seite inkl. ES6-Code inkl. Tests hier ein. Verwenden Sie f\xFCr Ihre Tests die Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " console.assert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "<!DOCTYPE html>\n        <html>\n        <head>\n        \n        </head>\n        <body>\n        \n        \n        <h1>Write Your text im Field and see if you have forgot to Close any nested brackets</h1>\n        \n        <textarea id=\"textarea\" rows=\"4\" cols=\"50\" placeholder=\"write your Text and please use some nested brackets\" >\n        </textarea>\n        \n          <button class=\"button\" onclick = check() >check Text</button>\n        <script>\n        const zeichen = {\n            openklamma: 0,\n            openEckigeKlammer: 0,\n            openGeschweifteKlammer: 0,\n        \n        };\n        \n        \n        function check() {\n          const text= document.getElementById(\"textarea\").value;\n            for (let i of text) {\n        \n                if (i == \"(\") {\n                    zeichen.openklamma++;\n                }\n                if (i == \"{\") {\n                    zeichen.openGeschweifteKlammer++;\n                }\n                if (i == \"[\") {\n        \n                    zeichen.openEckigeKlammer++;\n                }\n        \n                if (i == \")\") {\n                    zeichen.openklamma--;\n                }\n                if (i == \"}\") {\n        \n                    zeichen.openGeschweifteKlammer--;\n                }\n                if (i == \"]\") {\n                    zeichen.openEckigeKlammer--;\n                }\n        \n            }\n        \n            var s = (zeichen.openklamma + zeichen.openGeschweifteKlammer + zeichen.openEckigeKlammer) == 0;\n        \n            console.assert(s, 'the Text IS NOT ACCEPTED');\n        \n            if (s == false) {\n                document.getElementById(\"textarea\").style=\"background-color:red;\";\n            }\n        \n        }\n         \n         \n        \n        </script>\n        \n        </body>\n        </html>\n        \n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg2MS9FeDYxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDYxL0V4NjEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex61Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex61',
            templateUrl: './Ex61.component.html',
            styleUrls: ['./Ex61.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "3K0J":
    /*!************************************************!*\
      !*** ./src/app/solution/solution.component.ts ***!
      \************************************************/

    /*! exports provided: SolutionComponent */

    /***/
    function K0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolutionComponent", function () {
        return SolutionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SolutionComponent = /*#__PURE__*/function () {
        function SolutionComponent() {
          _classCallCheck(this, SolutionComponent);
        }

        _createClass(SolutionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SolutionComponent;
      }();

      SolutionComponent.ɵfac = function SolutionComponent_Factory(t) {
        return new (t || SolutionComponent)();
      };

      SolutionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SolutionComponent,
        selectors: [["app-solution"]],
        decls: 40,
        vars: 0,
        template: function SolutionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbHV0aW9uL3NvbHV0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolutionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-solution',
            templateUrl: './solution.component.html',
            styleUrls: ['./solution.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "5hVl":
    /*!**********************************************!*\
      !*** ./src/app/nav-bar/nav-bar.component.ts ***!
      \**********************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function hVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function NavBarComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1.1 WWW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1.2 HTTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "1.3 HTML-Literaturon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1.4 HTML Wireframe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "2.1 CSS Selektoren und CSS Farben");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2.2 CSS Positionierung");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2.3 Wireframe with HTML and CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 3.1 Responsiv mit Flexbox Desktop-First");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 3.2 Responsiv mit Grid Mobile-First");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3.3 Responsiv mit Grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "4.1 Funktionen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "4.2 Objekte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4.3 Fibonacci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "4.4 Topsort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 5.1 Performanzmessungen von DOM-Operationen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "5.2 Rednerliste mit Zeitmessung");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "5.3 topSort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "6.1 KlammerPaar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "6.2 Topologische Iterierbarkeit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "6.3. Topologischer Generator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "6.4. Proxy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "6.5. DeepCopy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "7.1 Funktionen in JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "7.2 Textanalyse mit filter-map-reduce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "8.1 Promises");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "8.2 Fetch mit async / await");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "9.1 SVG Grafik von Hand erstellen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 9.2 Statistik-Balkendiagramm in SVG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 10.1 Static classes in TypeScript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 10.2 Fehler finden mit TypeScript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "10.3 TypeScript auf Deno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "11.1 Registrierung mit PHP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "11.2 Login mit PHP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "11.3 WWW-Navigator ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent() {
          _classCallCheck(this, NavBarComponent);
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)();
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        inputs: {
          sheet1: "sheet1",
          sheet2: "sheet2",
          sheet3: "sheet3",
          sheet4: "sheet4",
          sheet5: "sheet5",
          sheet6: "sheet6",
          sheet7: "sheet7",
          sheet8: "sheet8",
          sheet9: "sheet9",
          sheet10: "sheet10",
          sheet11: "sheet11"
        },
        decls: 13,
        vars: 11,
        consts: [[1, "aufgabe"], ["class", "buttons", 4, "ngIf"], [1, "buttons"], ["routerLink", "/exercice/sheet1Ex1"], ["routerLink", "/exercice/Ex12"], ["routerLink", "/exercice/Ex13"], ["routerLink", "/exercice/Ex14"], ["routerLink", "/exercice/Ex21"], ["routerLink", "/exercice/Ex22"], ["routerLink", "/exercice/Ex23"], ["routerLink", "/exercice/Ex31"], ["routerLink", "/exercice/Ex32"], ["routerLink", "/exercice/Ex33"], ["routerLink", "/exercice/Ex41"], ["routerLink", "/exercice/Ex42"], ["routerLink", "/exercice/Ex43"], ["routerLink", "/exercice/Ex44"], ["routerLink", "/exercice/Ex51"], ["routerLink", "/exercice/Ex52"], ["routerLink", "/exercice/Ex53"], ["routerLink", "/exercice/Ex61"], ["routerLink", "/exercice/Ex62"], ["routerLink", "/exercice/Ex63"], ["routerLink", "/exercice/Ex64"], ["routerLink", "/exercice/Ex65"], ["routerLink", "/exercice/Ex71"], ["routerLink", "/exercice/Ex72"], ["routerLink", "/exercice/Ex81"], ["routerLink", "/exercice/Ex82"], ["routerLink", "/exercice/Ex91"], ["routerLink", "/exercice/Ex92"], ["routerLink", "/exercice/Ex101"], ["routerLink", "/exercice/Ex102"], ["routerLink", "/exercice/Ex103"], ["routerLink", "/exercice/Ex111"], ["routerLink", "/exercice/Ex112"], ["routerLink", "/exercice/Ex113"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AUFGABEN ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_div_2_Template, 14, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavBarComponent_div_3_Template, 11, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavBarComponent_div_4_Template, 11, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavBarComponent_div_5_Template, 14, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavBarComponent_div_6_Template, 11, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavBarComponent_div_7_Template, 17, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavBarComponent_div_8_Template, 8, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavBarComponent_div_9_Template, 8, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavBarComponent_div_10_Template, 8, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavBarComponent_div_11_Template, 11, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavBarComponent_div_12_Template, 11, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sheet11);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["ul[_ngcontent-%COMP%] {\n  line-height: 0.9;\n  letter-spacing: -0.14em;\n  font-weight: 500;\n  padding-left: 24px;\n  margin-left: -16px;\n  position: absolute;\n  top: 100px;\n  list-style-type: none;\n}\n\nli[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  \n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  cursor: pointer;\n  width: 150px;\n  display: block;\n  height: 900px;\n}\n\n.aufgabe[_ngcontent-%COMP%] {\n  letter-spacing: 0.011em;\n  font-style: normal;\n  min-width: auto;\n  padding-left: 12%;\n  color: #d3e3f0;\n  font-family: \"Rouge Script\", cursive;\n  font-size: 40px;\n  line-height: 90px;\n  text-shadow: 1px 1px 2px #082b34;\n  position: absolute;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 250px;\n  right: 25px;\n  box-shadow: inset 0px -21px 48px -13px #23395e;\n  background: linear-gradient(to bottom, #2e466e 5%, #415989 100%);\n  border: 1px solid #1f2f47;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Verdana;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 14px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #263666;\n  position: relative;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to bottom, #415989 5%, #2e466e 100%);\n  background-color: #415989;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  position: relative;\n  top: 1px;\n}\n\n@media screen and (max-width: 1900px) {\n  .aufgabe[_ngcontent-%COMP%] {\n    top: -11px;\n    font-size: 30px;\n    padding-left: 12%;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 192px;\n    font-size: 14px;\n  }\n\n  li[_ngcontent-%COMP%] {\n    padding: 9px;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    top: 55px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .aufgabe[_ngcontent-%COMP%] {\n    top: -23px;\n    font-size: 13px;\n    left: -10%;\n  }\n\n  li[_ngcontent-%COMP%] {\n    display: inline;\n    padding: 9px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 53px;\n    font-size: 6px;\n    padding: 5px;\n    width: 53px;\n    right: -18px;\n  }\n\n  .buttons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    top: -9px;\n    left: 75px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUdBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7RUFDQSxnRUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUtBO0VBQ0UsZ0VBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBRkY7O0FBTUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFIRjs7RUFNQTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VBSEY7O0VBUUE7SUFDRSxZQUFBO0VBTEY7O0VBUUE7SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUFORjs7RUFTQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VBTkY7O0VBU0E7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQU5GOztFQVNBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUFORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaW5lLWhlaWdodDogMC45O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5saSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogR3JlZW4gKi9cbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA5MDBweDtcbn1cblxuXG4uYXVmZ2FiZSB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxMWVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxMiU7XG4gIGNvbG9yOiAjZDNlM2YwO1xuICBmb250LWZhbWlseTogJ1JvdWdlIFNjcmlwdCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMDgyYjM0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMjFweCA0OHB4IC0xM3B4ICMyMzM5NWU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZTQ2NmUgNSUsICM0MTU5ODkgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjJmNDc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICMyNjM2NjY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0MTU5ODkgNSUsICMyZTQ2NmUgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTU5ODk7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xuICAuYXVmZ2FiZSB7XG4gICAgdG9wOiAtMTFweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XG4gIH1cblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxOTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuXG5cbiAgbGkge1xuICAgIHBhZGRpbmc6IDlweDtcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgdG9wOiA1NXB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5hdWZnYWJlIHtcbiAgICB0b3A6IC0yM3B4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZWZ0OiAtMTAlO1xuICB9XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiA5cHg7XG4gIH1cblxuICBidXR0b24ge1xuICAgIHdpZHRoOiA1M3B4O1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTNweDtcbiAgICByaWdodDogLTE4cHg7XG4gIH1cblxuICAuYnV0dG9ucyB1bCB7XG4gICAgdG9wOiAtOXB4O1xuICAgIGxlZnQ6IDc1cHg7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.scss']
          }]
        }], function () {
          return [];
        }, {
          sheet1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet5: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet6: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet7: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet8: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet9: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet10: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sheet11: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "7y4U":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex81/Ex81.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex81Component */

    /***/
    function y4U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex81Component", function () {
        return Ex81Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex81Component = /*#__PURE__*/function () {
        function Ex81Component() {
          _classCallCheck(this, Ex81Component);
        }

        _createClass(Ex81Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex81Component;
      }();

      Ex81Component.ɵfac = function Ex81Component_Factory(t) {
        return new (t || Ex81Component)();
      };

      Ex81Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex81Component,
        selectors: [["app-Ex81"]],
        decls: 12,
        vars: 0,
        consts: [["id", "aufgabe"]],
        template: function Ex81Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "8.1 Promises");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Erstellen Sie auf Ihrem Server www2.inf.h-brs.de (oder localhost) zwei Text-Dateien A.txt und B.txt mit ungef\xE4hr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. Geschwindigkeit durch maximale Parallelit\xE4t. Achten Sie gleichzeitig auf Korrektheit. Verwenden Sie dabei ausschlie\xDFlich die Promise API ohne async / await.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Geben Sie die komplette HTML-Seite f\xFCr die Promise-L\xF6sung inkl. JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<!DOCTYPE html>\n    <html>\n    \n    <head>\n    \n        <script>\n            var texta = fetch('A.txt');\n            var textb = fetch('B.txt');\n    \n            Promise.all([\n                arrayA.then(x => x.text()).split(\"'\\r\\n\"),\n                ArrayB.then(x => x.text()).split(\"'\\r\\n\")\n            ]).then(() => {\n                var maxlen = (arrayA.length >= arrayB.length) ? maxlen = arrayA.length : maxlen = arrayB.length;\n    \n                for (var i = 0; i < maxlen; i++) {\n                    document.getElementById(\"feld\").textContent += arrayA[i] + arrayB[i];\n                }\n            });\n        </script>\n    \n    </head>\n    \n    <body>\n        <div>\n            <h1>8.1. Promises</h1>\n            <div id=\"feld\"></div>\n    \n        </div>\n    \n    </body>\n    \n    </html>\n    \n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  background-color: #689ef7;\n  color: white;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg4MS9FeDgxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUZGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXg4MS9FeDgxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG5cclxuLmV4ZWN1dGUge1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICNhYmFiYWI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex81Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex81',
            templateUrl: './Ex81.component.html',
            styleUrls: ['./Ex81.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CVn9":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex62/Ex62.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex62Component */

    /***/
    function CVn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex62Component", function () {
        return Ex62Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex62Component = /*#__PURE__*/function () {
        function Ex62Component() {
          _classCallCheck(this, Ex62Component);
        }

        _createClass(Ex62Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex62Component;
      }();

      Ex62Component.ɵfac = function Ex62Component_Factory(t) {
        return new (t || Ex62Component)();
      };

      Ex62Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex62Component,
        selectors: [["app-Ex62"]],
        decls: 74,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], [2, "color", "#ff0000"], [1, "box", "code"], ["href", "https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys", "target", "_blank"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map", "target", "_blank"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set", "target", "_blank"], ["href", "https://developer.mozilla.org/de/docs/Web/API/Console/assert", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "assets/loesung 6.2.2.html", "target", "_blank", 1, "execute"]],
        template: function Ex62Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "6.2. Topologische Iterierbarkeit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Schreiben Sie eine ES6-Klasse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Vorrang");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " f\xFCr Vorrangrelationen, z.B.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " new Vorrang([ [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"studieren\", \"pr\xFCfen\"] ])");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " . W\xE4hlen Sie eine Implementierung, die universell g\xFCltig, also nicht nur f\xFCr dieses Beispiel gilt. (\xDCberlegen Sie sich, \xFCber welche Properties und Methoden eine solche Klasse verf\xFCgen sollte und wie TopSort hier hineinspielt. Topologische Iterierbarkeit und topologischer Generator sind jedoch Gegenstand der n\xE4chsten \xDCbungen weiter unten auf diesem \xDCbungsblatt und sollten f\xFCr die folgenden Aufgaben aufgespart werden.) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Stellen Sie bei Ihrer Klasse die topologische Iterierbarkeit her (zun\xE4chst \xFCber das Iterationsprotokoll, ohne Generator, ohne yield). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Zum Beispiel soll dadurch folgende for ... of loop m\xF6glich werden, mit der die Elemente in topologischer Sortierung durchlaufen werden: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Auf der Console wird dadurch ausgegeben: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " schlafen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " essen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " studieren");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " pr\xFCfen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "W\xE4hlen Sie eine Implementierung, die universell g\xFCltig, also nicht nur f\xFCr dieses Beispiel gilt. Eine topologische Sortierung im Konstruktor vorzuberechnen, w\xE4re eine triviale L\xF6sung. Versuchen Sie es stattdessen \"lazy computation\", d.h. erst beim Aufruf von ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "next()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " wird die erforderliche Berechnung durchgef\xFChrt. Nebenbedingung ist minimaler Aufwand, d.h. bei jedem ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "next()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " erneut alles zu sortieren, wird nicht als L\xF6sung akzeptiert. Verwenden Sie so weit wie m\xF6glich High-Level-Methoden wie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Object.keys");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " und High-Level-Datenstrukturen wie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " und ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "und deren Methoden, anstatt m\xFChsam von Hand zu iterieren und zu z\xE4hlen. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Geben Sie die HTML-Seite inkl. ES6-Code inkl. Tests hier ein. Verwenden Sie f\xFCr Ihre Tests die Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "console.assert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "function topsort(array) {\n\n\n        var Knoten = [];\n        var pack = [];\n        var gesehen = [];\n    \n        for (var k = 0; k < array.length; k++) {\n            if (Knoten.indexOf(array[k][0]) < 0) Knoten.push(array[k][0]);\n            if (Knoten.indexOf(array[k][1]) < 0) Knoten.push(array[k][1]);\n        }\n    \n        Knoten.forEach(function (knote) {\n            if (gesehen.indexOf(knote) < 0) {\n                sort(knote);\n            }\n        });\n    \n        function sort(knote) {\n            gesehen.push(knote);\n            array.forEach(function (Kante) {\n                if (gesehen.indexOf(Kante[1]) < 0 && Kante[0] == knote) {\n                    sort(Kante[1]);\n                }\n            });\n            pack.push(knote);\n        }\n        return pack.reverse();\n    }\n    \n    class Vorrang {\n        [Symbol.iterator]() {\n            return this.array.values()\n        }\n        constructor(array) {\n            this.array = topsort(array);\n        }\n    \n    \n    }\n    \n    \n    function check() {\n        try {\n    \n            var text = \"schlafen,studieren,essen,studieren,studieren,pr\xFCfen\";\n            console.log(text);\n    \n            var array = text.split(\",\").map(String);\n            if ((array.length % 2) != 0) {\n                throw new Error(' Geben Sie bitte eine Komplette Vorrangrelationen');\n            }\n    \n            var gfg = new Array(array.length / 2);\n    \n    \n            // Loop to create 2D array using 1D array\n            for (var i = 0; i < gfg.length; i++) {\n                gfg[i] = new Array(2);\n            }\n    \n            var h = 0;\n    \n            // Loop to initialize 2D array elements.\n            for (let i = 0; i < array.length / 2; i++) {\n                for (let j = 0; j < 2; j++) {\n                    gfg[i][j] = array[h++];\n                }\n            }\n    \n            const studentenLeben = new Vorrang(gfg);\n    \n            var final = [];\n            for (const next of studentenLeben) {\n                final.push(next);\n            }\n    \n            console.log(final);\n    \n        } catch (err) {\n    \n            console.log(err.message);\n        }\n    }\n    //RUN\n    check()\n    \n    //TEST\n    function test() {\n        const array = new Vorrang([\n            [\"schlafen\", \"studieren\"],\n            [\"essen\", \"studieren\"],\n            [\"studieren\", \"pr\xFCfen\"]\n        ]);\n        var arrayfinal = [];\n        for (const next of array) {\n            arrayfinal.push(next);\n        }\n        var ausgabe= [\"schlafen\", \"essen\", \"studieren\", \"pr\xFCfen\"];\n        for (let i = 0; i < arrayfinal.length; i++) {\n    \n            console.assert(ausgabe[i] === arrayfinal[i], `diese beide Werte ${ausgabe[i]} und ${arrayfinal[i]} sind nicht gleich`);\n        }\n    }\n    test()\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Betten Sie Ihren ECMAScript-Code in eine Webseite ein, so dass man die Vorrangrelation dort eingeben kann. Geben Sie hier die HTML-Seite an:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "<!DOCTYPE html>\n        <html>\n        <head>\n        \n        </head>\n        <body>\n        \n        \n        <h1>Geben Sie Bitte eine Vorrangrelationen in Dieser Schreibweise  :<br>\n                   schlafen,studieren,essen,studieren,studieren,pr\xFCfen</h1>\n        <br>\n        \n        \n        <textarea id=\"textarea\" rows=\"4\" cols=\"50\" placeholder=\"write your Text and please use some nested brackets\" >\n        </textarea>\n        \n          <button class=\"button\" onclick = check() >check Text</button>\n        \n        <br>\n        \n        <textarea id=\"textarea2\" rows=\"4\" cols=\"50\" placeholder=\"your result\" >\n        </textarea>\n         <script>\n        \n        function topsort(array) {\n        \n        \n            var Knoten = [];\n            var pack = [];\n            var gesehen = [];\n        \n            for (var k = 0; k < array.length; k++) {\n                if (Knoten.indexOf(array[k][0]) < 0) Knoten.push(array[k][0]);\n                if (Knoten.indexOf(array[k][1]) < 0) Knoten.push(array[k][1]);\n            }\n        \n            Knoten.forEach(function (knote) {\n                if (gesehen.indexOf(knote) < 0) {\n                    sort(knote);\n                }\n            });\n        \n            function sort(knote) {\n                gesehen.push(knote);\n                array.forEach(function (Kante) {\n                    if (gesehen.indexOf(Kante[1]) < 0 && Kante[0] == knote) {\n                        sort(Kante[1]);\n                    }\n                });\n                pack.push(knote);\n            }\n            return pack.reverse();\n        }\n        \n        class Vorrang {\n            [Symbol.iterator]() {\n                return this.array.values()\n            }\n            constructor(array) {\n                this.array = topsort(array);\n            }\n        \n        \n        }\n        \n        \n        function check() {\n            try {\n        \n                var text= document.getElementById(\"textarea\").value;\n                console.log(text);\n        \n                var array = text.split(\",\").map(String);\n                if ((array.length % 2) != 0) {\n                    throw new Error(' Geben Sie bitte eine Komplette Vorrangrelationen');\n                }\n        \n                var gfg = new Array(array.length / 2);\n        \n        \n                // Loop to create 2D array using 1D array\n                for (var i = 0; i < gfg.length; i++) {\n                    gfg[i] = new Array(2);\n                }\n        \n                var h = 0;\n        \n                // Loop to initialize 2D array elements.\n                for (var i = 0; i < array.length / 2; i++) {\n                    for (var j = 0; j < 2; j++) {\n                        gfg[i][j] = array[h++];\n                    }\n                }\n        \n                const studentenLeben = new Vorrang(gfg);\n        \n                var final = [];\n                for (const next of studentenLeben) {\n                    final.push(next);\n                }\n                \n                //test\n                test();\n        \n                document.getElementById(\"textarea2\").value=final;\n        \n            } catch (err) {\n        \n                document.getElementById(\"textarea2\").value=err.message;\n            }\n        }\n        \n        //test\n        function test() {\n            const array = new Vorrang([\n                [\"schlafen\", \"studieren\"],\n                [\"essen\", \"studieren\"],\n                [\"studieren\", \"pr\xFCfen\"]\n            ]);\n            var arrayfinal = [];\n            for (const next of array) {\n                arrayfinal.push(next);\n            }\n           var ausgabe = [\"schlafen\", \"essen\", \"studieren\", \"pr\xFCfen\"];\n            for (let i = 0; i < arrayfinal.length; i++) {\n        \n                console.assert(ausgabe[i] === arrayfinal[i], `diese beide Werte ${ausgabe[i]} und ${arrayfinal[i]} sind nicht gleich`);\n            }\n        }\n        \n        \n        </script>\n        \n        </body>\n        </html>\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 29px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 1%;\n  position: absolute;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg2Mi9FeDYyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFZQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBYUEsV0FBQTs7QUFDQTtFQUNFLDZFQUFBO0VBQ0EsMEJBQUE7QUFWRjs7QUFhQTtFQUNFO0lBQ0UsZUFBQTtFQVZGOztFQWdCQTtJQUNFLGVBQUE7RUFiRjs7RUFnQkE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQWJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDYyL0V4NjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTAwcHgpIHtcclxuICAjYXVzZnVocmVuIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex62Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex62',
            templateUrl: './Ex62.component.html',
            styleUrls: ['./Ex62.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "DvEU":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex33/Ex33.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex33Component */

    /***/
    function DvEU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex33Component", function () {
        return Ex33Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex33Component = /*#__PURE__*/function () {
        function Ex33Component() {
          _classCallCheck(this, Ex33Component);
        }

        _createClass(Ex33Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex33Component;
      }();

      Ex33Component.ɵfac = function Ex33Component_Factory(t) {
        return new (t || Ex33Component)();
      };

      Ex33Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex33Component,
        selectors: [["app-Ex33"]],
        decls: 60,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["src", "https://kaul.inf.h-brs.de/we/assets/img/landing.png", 2, "max-width", "600px", "width", "100%"], [1, "rightpane"], ["id", "ausfuhren"], [1, "Seite_html"], [2, "background", "#414141"], ["href", "#"], [1, "title2"], [1, "content"], ["src", "https://kaul.inf.h-brs.de/we/assets/img/landing-img.png", "alt", "img", 2, "max-width", "400px", "width", "100%"], [1, "paragraph"]],
        template: function Ex33Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aufgabe 3.3. Responsiv mit Grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Implementieren Sie folgende Landing Page responsiv mit Grid Layout. Vermeiden Sie au\xDFerdem das Erscheinen von Scrollbars so weit wie m\xF6glich. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Implementieren Sie dann das gleiche responsive Webdesign wie in Aufgabe 3.1 allerdings mit Grid und der Mobile-First-Strategie! Vermeiden Sie diesmal au\xDFerdem das Erscheinen von Scrollbars. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n        <meta charset=\"UTF-8\">\n        </head>\n        <style>\n        * {\n          padding: 0;\n          margin: 0;\n          box-sizing: border-box;\n           height:100px;\n          \n        }\n        \n        body {\n          display: grid;\n          grid-template: \"a\" \"b\" \"c\" \"d\";\n          min-height: 100vh;\n        }\n        \n        header nav ul {\n          background-color: #414141;\n          grid-area: a;\n          padding: 30px;\n          display: flex;\n          justify-content: center;\n          gap: 90px;\n          list-style: none;\n          \n        }\n        \n        a {\n          text-decoration: none;\n          color: white;\n          font-size: 20px;\n        }\n        \n        h1 {\n          grid-area: b;\n          text-align: center;\n          background-color: #d9cccc;\n          padding: 30px;\n        }\n        .content {\n          grid-area: c;\n          display: flex;\n          justify-content: center;\n          gap: 120px;\n          background-color: #d9cccc;\n          padding: 15px;\n             height:600px;\n          \n        }\n        \n        .content img {\n            height: 90%;\n             border: black 1px solid;\n          border-radius: 20px;\n            \n        }\n        \n        .content .paragraph {\n            text-align: center;\n            padding-top: 100px;\n        }\n        \n        footer {\n            grid-area: d;\n            background-color: #010224;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            padding: 60px;\n            gap: 20px;\n              font-size: 20px;\n        }\n        \n        button {\n            background-color: orange;\n            width: 300px;\n           height:40px;\n          border-radius: 8px;\n           \n            \n        }\n        \n        </style>\n        \n        <body>\n          <header>\n            <nav>\n              <ul>\n                <li><a href=\"#\">The book series</a></li>\n                <li><a href=\"#\">Testemonials</a></li>\n                <li><a href=\"#\">The Author</a></li>\n                <li><a href=\"#\">Free resources</a></li>\n              </ul>\n            </nav>\n          </header>\n        \n          <h1 class=\"title\">You Dont know JavaScript</h1>\n        \n          <div class=\"content\">\n            <img src=\"https://kaul.inf.h-brs.de/we/assets/img/landing-img.png\"\n              alt=\"img\" />\n            <div class=\"paragraph\">\n              Dont just drift through JavaScript <br> <br> <br>\n              Understand how JavaScript works <br> <br> <br> Start\n              your journey through the bumpy side of JavaScript <br> <br>\n              <br>\n              <button>ORDER YOUR COPY NOW</button>\n            </div>\n          </div>\n        \n        \n        \n          <footer>\n            <p>The first ebook in the book series is absolutely free.</p>\n            <button>FIND OUT MORE ABOUT THIS OFFER</button>\n          </footer>\n        </body>\n        </html>\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " QUELLCODE AUSF\xDCHRUNG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "header", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "The book series");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Testemonials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "The Author");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Free resources");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "You Dont know JavaScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Dont just drift through JavaScript ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Understand how JavaScript works ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Start your journey through the bumpy side of JavaScript ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ORDER YOUR COPY NOW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "The first ebook in the book series is absolutely free.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "FIND OUT MORE ABOUT THIS OFFER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 64%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: \"a\" \"b\" \"c\" \"d\";\n  min-height: 100vh;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background-color: #414141;\n  grid-area: a;\n  padding: 30px;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  list-style: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.content[_ngcontent-%COMP%] {\n  grid-area: c;\n  display: flex;\n  justify-content: center;\n  gap: 120px;\n  background-color: #d9cccc;\n  padding: 15px;\n  height: 600px;\n  margin-top: -21px;\n}\n\n.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 58%;\n  border: black 1px solid;\n  border-radius: 20px;\n  margin-top: 10%;\n}\n\n.content[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 100px;\n}\n\nfooter[_ngcontent-%COMP%] {\n  grid-area: d;\n  background-color: #010224;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n  gap: 20px;\n  font-size: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: orange;\n  width: 250px;\n  height: 30px;\n  border-radius: 4px;\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .rightpane[_ngcontent-%COMP%] {\n    left: 1px;\n    width: 36%;\n    height: 100%;\n    position: relative;\n    float: right;\n  }\n\n  header[_ngcontent-%COMP%] {\n    width: 87%;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    gap: 21px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    gap: 2px;\n    width: 340px;\n    padding-top: 10px;\n    font-size: 25px;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    gap: 13px;\n    font-size: 15px;\n    width: 60%;\n  }\n\n  .title2[_ngcontent-%COMP%] {\n    padding: 10px;\n    margin-top: -1px;\n    font-size: 20pX;\n    width: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgzMy9FeDMzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVNBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVVBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBWUE7RUFDRTtJQUNFLGVBQUE7RUFURjs7RUFZQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQVRGOztFQVlBO0lBQ0UsVUFBQTtFQVRGOztFQVlBO0lBQ0UsU0FBQTtFQVRGOztFQWNBO0lBQ0UsUUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFYRjs7RUFjQTtJQUNFLFNBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQVhGOztFQWNBO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUFYRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXgzMy9FeDMzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWlkZGxlcGFuZSB7XHJcbiAgd2lkdGg6IDY0JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWZkZmY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnJpZ2h0cGFuZSB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcblxyXG59XHJcblxyXG4jYXVzZnVocmVuIHtcclxuICBjb2xvcjogcmdiKDEwNSwgMzUsIDU2KTtcclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uU2VpdGVfaHRtbCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG59XHJcblxyXG4jYXVmZ2FiZSB7XHJcbiAgYmFja2dyb3VuZDogI2RhZmRmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNlM2ZjZGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiBcImFcIlwiYlwiXCJjXCJcImRcIjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB1bCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcclxuICBncmlkLWFyZWE6IGE7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMzBweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBncmlkLWFyZWE6IGM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMXB4O1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQgaW1nIHtcclxuICBoZWlnaHQ6IDU4JTtcclxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50IC5wYXJhZ3JhcGgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgZ3JpZC1hcmVhOiBkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyMjQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDYwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkwMHB4KSB7XHJcbiAgI2F1c2Z1aHJlbiB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgfVxyXG5cclxuICAucmlnaHRwYW5lIHtcclxuICAgIGxlZnQ6IDFweDtcclxuICAgIHdpZHRoOiAzNiU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIge1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGdhcDogMjFweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZ2FwOiAycHg7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBnYXA6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlMiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBwWDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex33Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex33',
            templateUrl: './Ex33.component.html',
            styleUrls: ['./Ex33.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Ehkv":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex22/Ex22.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex22Component */

    /***/
    function Ehkv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex22Component", function () {
        return Ex22Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex22Component = /*#__PURE__*/function () {
        function Ex22Component() {
          _classCallCheck(this, Ex22Component);
        }

        _createClass(Ex22Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex22Component;
      }();

      Ex22Component.ɵfac = function Ex22Component_Factory(t) {
        return new (t || Ex22Component)();
      };

      Ex22Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex22Component,
        selectors: [["app-Ex22"]],
        decls: 75,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["id", "ub"], ["href", "https://www.youtube.com/watch?v=PE3POxjDspo", "target", "_blank"], ["src", "https://raw.githubusercontent.com/omarguella/-Web-Engineering/main/Exercice for the Web Seite(Aufgabenstellung %2BLosungen)/2. CSS 1. Teil/css Pos.jpg", 1, "img", 2, "max-width", "800px", "width", "100%"], ["href", "https://www.youtube.com/watch?v=HVmnv3k4__E", "target", "_blank"], ["src", "https://upload.wikimedia.org/wikipedia/commons/a/a4/Hochschule_Bonn-Rhein-Sieg_Wolfgang_G%C3%B6ddertz_Induktion.jpg", 2, "max-width", "800px", "width", "100%"], [1, "rightpane"], ["id", "ausfuhren"], [1, "Seite_html"], ["id", "title"], ["id", "parg"], ["id", "u2"], ["id", "myInput", "type", "checkbox", "name", "myInput"], ["for", "myInput"]],
        template: function Ex22Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aufgabe 2.2. CSS Positionierung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Schauen Sie sich folgendes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Video");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " an und bauen Sie das dynamische Verhalten exakt nach (nur mit HTML und CSS, ohne JavaScript): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " <!DOCTYPE html>\n          <html>\n          <head>\n          <style>\n          h1,h2,h3 {\n            background-color: white;\n            opacity: 0.8;\n            font-size: 40px;\n            position: sticky;\n            left: 30px;\n            border: 1px solid ;\n            top : 0;\n            padding: 0.9em;\n            margin: 0.2em\n          }\n           div {\n                     background-color: lightpink;\n                    font-family:   Arial, Helvetica, sans-serif;\n                      font-size: 20px;\n                    padding: 0.5em;\n                     margin: 0.5em;\n                 }\n          </style>\n          </head>\n          <body>\n          \n          <h1>Erste Uberschrift</h1>\n          <div> TEXT  </div>\n          \n          <div> TEXT </div>\n          <div> TEXT </div>\n          \n          <div> TEXT </div>\n          \n          <h2>Zweite Uberschrift</h2>\n          <div> TEXT </div>\n          \n          <div> TEXT </div>\n          <div> TEXT </div>\n          <div TEXT </div>\n          \n          <h3>Dritte Uberschrift</h3>\n          <div> TEXT </div>\n          <div> TEXT </div>\n          <div TEXT </div>\n          \n          \n          \n          </body>\n          </html>\n          \n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Schauen Sie sich folgendes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Video");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " an und bauen Sie das dynamische Verhalten exakt nach (nur mit HTML und CSS, ohne JavaScript): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " <!DOCTYPE html>\n            <html>\n            <head>\n            <style> \n            h1{\n             \n              font-size: 40px;\n             }\n            \n            \n            input[type='checkbox']:checked + label {\n              background: url('https://upload.wikimedia.org/wikipedia/commons/a/a4/Hochschule_Bonn-Rhein-Sieg_Wolfgang_G%C3%B6ddertz_Induktion.jpg') ;\n              max-width: 900px;\n              height: 600px; \n              background-size: contain;\n              display: block;\n               margin-left: auto;\n               margin-right: auto;\n            }\n            </style>\n            </head>\n            <body>\n              <h1> Ubung 2.2</h1>\n            <input id=\"myInput\" type=\"checkbox\" name=\"myInput\">hide and show via checkbox</input>\n            <label for=\"myInput\"></label>\n            \n            </body>\n            </html>\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " QUELLCODE AUSF\xDCHRUNG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Erste Uberschrift");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Le fran\xE7ais est parl\xE9, en 2018, sur tous les continents par environ 300 millions de personnes5,2 : 235 millions l'emploient quotidiennement, et 90 millions3 en sont des locuteurs natifs. En 2018, 80 millions d'\xE9l\xE8ves et \xE9tudiants s'instruisent en fran\xE7ais dans le monde6. Selon l'Organisation internationale de la francophonie (OIF), il pourrait y avoir 700 millions de francophones sur Terre en 20507. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Dans le monde, 29 \xC9tats ont le fran\xE7ais comme langue officielle. C'est une des six langues officielles ainsi qu'une des deux langues de travail France et Belgique ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Zweite Uberschrift");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Le fran\xE7ais est parl\xE9, en 2018, sur tous les continents par environ 300 millions de personnes5,2 : 235 millions l'emploient quotidiennement, et 90 millions3 en sont des locuteurs natifs. En 2018, 80 millions d'\xE9l\xE8ves et \xE9tudiants s'instruisent en fran\xE7ais dans le monde6. Selon l'Organisation internationale de la francophonie (OIF), il pourrait y avoir 700 millions de francophones sur Terre en 20507. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Dans le monde, 29 \xC9tats ont le fran\xE7ais comme langue officielle. C'est une des six langues officielles ainsi qu'une des deux langues de travail de rl\xE9es originellement dans la partie septentrionale du domaine gallo-roman, sur le territoire des actuelles Suisse, France et Belgique ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dritte Uberschrift");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Dans le monde, 29 \xC9tats ont le fran\xE7ais comme langue officielle. C'est une des six langues officielles ainsi qu'une des deux langues de travail de l'O\xEFl, un groupe de langues romanes parl\xE9es originellement dans la partie septentrionale du domaine gallo-roman, sur le territoire des actuelles Suisse, France et Belgique ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " QUELLCODE AUSF\xDCHRUNG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Ubung 2.2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "hide and show via checkbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 64%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#ub[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n#title[_ngcontent-%COMP%] {\n  background-color: white;\n  opacity: 0.8;\n  font-size: 40px;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 30px;\n  border: 1px solid;\n  top: 0;\n  padding: 0.9em;\n  margin: 0.2em;\n}\n\n#parg[_ngcontent-%COMP%] {\n  background-color: lightpink;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  padding: 0.5em;\n  margin: 0.5em;\n}\n\n#u2[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background: url(\"https://upload.wikimedia.org/wikipedia/commons/a/a4/Hochschule_Bonn-Rhein-Sieg_Wolfgang_G%C3%B6ddertz_Induktion.jpg\");\n  max-width: 500px;\n  height: 300px;\n  background-size: contain;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgyMi9FeDIyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFFRSxlQUFBO0FBSkY7O0FBUUE7RUFDRSxzSUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMRiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaWNlL0V4MjIvRXgyMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWlkZGxlcGFuZSB7XG4gIHdpZHRoOiA2NCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLnJpZ2h0cGFuZSB7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG5cblxufVxuXG4uU2VpdGVfaHRtbCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbn1cblxuI3ViIHtcbiAgZ3JpZC1hcmVhOiBiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuI2F1c2Z1aHJlbiB7XG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNhdWZnYWJlIHtcbiAgYmFja2dyb3VuZDogI2RhZmRmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNlM2ZjZGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xufVxuXG4jdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDAuOWVtO1xuICBtYXJnaW46IDAuMmVtXG59XG5cbiNwYXJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblxuI3UyIHtcblxuICBmb250LXNpemU6IDQwcHg7XG59XG5cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkK2xhYmVsIHtcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2EvYTQvSG9jaHNjaHVsZV9Cb25uLVJoZWluLVNpZWdfV29sZmdhbmdfRyVDMyVCNmRkZXJ0el9JbmR1a3Rpb24uanBnJyk7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex22Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex22',
            templateUrl: './Ex22.component.html',
            styleUrls: ['./Ex22.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "EpvI":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex63/Ex63.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex63Component */

    /***/
    function EpvI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex63Component", function () {
        return Ex63Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex63Component = /*#__PURE__*/function () {
        function Ex63Component() {
          _classCallCheck(this, Ex63Component);
        }

        _createClass(Ex63Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex63Component;
      }();

      Ex63Component.ɵfac = function Ex63Component_Factory(t) {
        return new (t || Ex63Component)();
      };

      Ex63Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex63Component,
        selectors: [["app-Ex63"]],
        decls: 22,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://developer.mozilla.org/de/docs/Web/API/Console/assert", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "assets/loesung 6.3.html", "target", "_blank", 1, "execute"]],
        template: function Ex63Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "6.3. Topologischer Generator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Stellen Sie bei Ihrer Klasse aus der letzten Aufgabe die topologische Iterierbarkeit mittels Generator her. W\xE4hlen Sie eine Implementierung, die universell g\xFCltig, also nicht nur f\xFCr das Beispiel gilt. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Geben Sie die HTML-Seite inkl. ES6-Code inkl. Tests hier ein. Verwenden Sie f\xFCr Ihre Tests die Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "console.assert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "<!DOCTYPE html>\n        <html>\n        <head>\n        \n        </head>\n        <body>\n        \n        \n        <h1>Geben Sie Bitte eine Vorrangrelationen in Dieser Schreibweise  :<br>\n                   schlafen,studieren,essen,studieren,studieren,pr\xFCfen</h1>\n        <br>\n        \n        \n        <textarea id=\"textarea\" rows=\"4\" cols=\"50\" placeholder=\"write your Text and please use some nested brackets\" >\n        </textarea>\n        \n          <button class=\"button\" onclick = check() >check Text</button>\n        \n        <br>\n        \n        <textarea id=\"textarea2\" rows=\"4\" cols=\"50\" placeholder=\"your result\" >\n        </textarea>\n         <script>\n        \n        function topsort(array) {\n        \n        \n            var Knoten = [];\n            var pack = [];\n            var gesehen = [];\n        \n            for (var k = 0; k < array.length; k++) {\n                if (Knoten.indexOf(array[k][0]) < 0) Knoten.push(array[k][0]);\n                if (Knoten.indexOf(array[k][1]) < 0) Knoten.push(array[k][1]);\n            }\n        \n            Knoten.forEach(function (knote) {\n                if (gesehen.indexOf(knote) < 0) {\n                    sort(knote);\n                }\n            });\n        \n            function sort(knote) {\n                gesehen.push(knote);\n                array.forEach(function (Kante) {\n                    if (gesehen.indexOf(Kante[1]) < 0 && Kante[0] == knote) {\n                        sort(Kante[1]);\n                    }\n                });\n                pack.push(knote);\n            }\n            return pack.reverse();\n        }\n        \n        class Vorrang {\n            //GENERATOR\n            *[Symbol.iterator]() {\n                    for(const arrayElem of this.array){\n                        yield arrayElem;\n                    }\n                }\n            constructor(array) {\n                this.array = topsort(array);\n            }\n        \n        \n        }\n        \n        \n        function check() {\n            try {\n        \n                var text= document.getElementById(\"textarea\").value;\n                console.log(text);\n        \n                var array = text.split(\",\").map(String);\n                if ((array.length % 2) != 0) {\n                    throw new Error(' Geben Sie bitte eine Komplette Vorrangrelationen');\n                }\n        \n                var gfg = new Array(array.length / 2);\n        \n        \n                // Loop to create 2D array using 1D array\n                for (var i = 0; i < gfg.length; i++) {\n                    gfg[i] = new Array(2);\n                }\n        \n                var h = 0;\n        \n                // Loop to initialize 2D array elements.\n                for (var i = 0; i < array.length / 2; i++) {\n                    for (var j = 0; j < 2; j++) {\n                        gfg[i][j] = array[h++];\n                    }\n                }\n        \n                const studentenLeben = new Vorrang(gfg);\n        \n                var final = [];\n                for (const next of studentenLeben) {\n                    final.push(next);\n                }\n                \n                //test\n                test();\n        \n                document.getElementById(\"textarea2\").value=final;\n        \n            } catch (err) {\n        \n                document.getElementById(\"textarea2\").value=err.message;\n            }\n        }\n        \n        //test\n        function test() {\n            const array = new Vorrang([\n                [\"schlafen\", \"studieren\"],\n                [\"essen\", \"studieren\"],\n                [\"studieren\", \"pr\xFCfen\"]\n            ]);\n            var arrayfinal = [];\n            for (const next of array) {\n                arrayfinal.push(next);\n            }\n            var ausgabe = [\"schlafen\", \"essen\", \"studieren\", \"pr\xFCfen\"];\n            for (let i = 0; i < arrayfinal.length; i++) {\n        \n                console.assert(ausgabe[i] === arrayfinal[i], `diese beide Werte ${ausgabe[i]} und ${arrayfinal[i]} sind nicht gleich`);\n            }\n        }\n        \n        \n        </script>\n        \n        </body>\n        </html>\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg2My9FeDYzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDYzL0V4NjMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex63Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex63',
            templateUrl: './Ex63.component.html',
            styleUrls: ['./Ex63.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "F4uq":
    /*!***********************************************************!*\
      !*** ./src/app/exercice/sheet1Ex1/sheet1Ex1.component.ts ***!
      \***********************************************************/

    /*! exports provided: Sheet1Ex1Component */

    /***/
    function F4uq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sheet1Ex1Component", function () {
        return Sheet1Ex1Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Sheet1Ex1Component = /*#__PURE__*/function () {
        function Sheet1Ex1Component() {
          _classCallCheck(this, Sheet1Ex1Component);
        }

        _createClass(Sheet1Ex1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Sheet1Ex1Component;
      }();

      Sheet1Ex1Component.ɵfac = function Sheet1Ex1Component_Factory(t) {
        return new (t || Sheet1Ex1Component)();
      };

      Sheet1Ex1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Sheet1Ex1Component,
        selectors: [["app-sheet1Ex1"]],
        decls: 18,
        vars: 0,
        consts: [["id", "aufgabe"]],
        template: function Sheet1Ex1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aufgabe 1.1 Fachliche Argumentation \xFCber Erfolgsprinzipien des WWW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Das WWW-Proposal war nur eine Idee (Konzept-Papier) und kein offizielles Projekt.Fehlende Integration sogar innerhalb eines Betriebs.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "das Konzept ist mit Evolvierbarkeit verwechselt . dann ist es Implementiert als U-Boot-Projekt den ersten WWW-Server, den ersten WWW-Browser f\xFCr HTML-Dokumente auf NeXT. Neben dem Browser war es das Hypertext Transfer Protocol (HTTP), das Protokoll zur \xDCbertragung von Daten, sowie der Uniform Resource Identifier (URI), der der eindeutigen Identifizierung eines Dokuments im Netz dient. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Was w\xE4re der Preis f\xFCr die garantierte Verhinderung von \u201Cbroken links\u201D?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "um die Verhinderung von \u201Cbroken links\u201D ist die referentielle integrit\xE4t benutzt. Bei der referentiellen Integrit\xE4t k\xF6nnen Datens\xE4tze die einen Fremdschl\xFCssel aufweisen nur dann gespeichert werden, wenn der Wert des Fremdschl\xFCssels einmalig in der referenzierten Tabelle existiert. dann alle \xC4nderungen m\xFCssen nachvollziehbar sein.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2Uvc2hlZXQxRXgxL3NoZWV0MUV4MS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaWNlL3NoZWV0MUV4MS9zaGVldDFFeDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXVmZ2FiZSB7XHJcbiAgYmFja2dyb3VuZDogI2RhZmRmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuaDEge1xyXG4gIGdyaWQtYXJlYTogYjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5Y2NjYztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sheet1Ex1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sheet1Ex1',
            templateUrl: './sheet1Ex1.component.html',
            styleUrls: ['./sheet1Ex1.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "FAtD":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex12/Ex12.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex12Component */

    /***/
    function FAtD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex12Component", function () {
        return Ex12Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex12Component = /*#__PURE__*/function () {
        function Ex12Component() {
          _classCallCheck(this, Ex12Component);
        }

        _createClass(Ex12Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex12Component;
      }();

      Ex12Component.ɵfac = function Ex12Component_Factory(t) {
        return new (t || Ex12Component)();
      };

      Ex12Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex12Component,
        selectors: [["app-Ex12"]],
        decls: 28,
        vars: 0,
        consts: [["id", "aufgabe"]],
        template: function Ex12Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aufgabe 1.2. HTTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " HTTP-Statuscode 200 OK gibt an, dass eine Anfrage erfolgreich verlaufen ist.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HTTP Status Code 301 bedeutet, dass der URI der angeforderten Ressource ge\xE4ndert wurde. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was k\xF6nnen Sie dagegen tun? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "HTTP Status Code 400 bedeutet, dass der Server die Anfrage aufgrund einer ung\xFCltigen Syntax nicht verstehen konnte. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was k\xF6nnen Sie dagegen tun? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Der Client hat keine Zugriffsrechte auf den Inhalt. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "In einer Webanwendung ben\xF6tigen Sie eine OPTIONS-Anfrage, die die Optionen des Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performanzgr\xFCnden soll die Abfrage jedoch cacheable sein. Wie k\xF6nnten Sie daf\xFCr eine L\xF6sung angehen? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Die Abfrage belebig oft stellen um die gleiche Ergebnisse zu bekommen oder Man kann auch die Access-Control-Max-Age benutzen,somit maximale Anzahl von Sekunden, f\xFCr die die Ergebnisse zwischengespeichert werden k\xF6nnen. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgxMi9FeDEyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXgxMi9FeDEyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex12Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex12',
            templateUrl: './Ex12.component.html',
            styleUrls: ['./Ex12.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "FPlC":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex43/Ex43.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex43Component */

    /***/
    function FPlC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex43Component", function () {
        return Ex43Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex43Component = /*#__PURE__*/function () {
        function Ex43Component() {
          _classCallCheck(this, Ex43Component);
        }

        _createClass(Ex43Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex43Component;
      }();

      Ex43Component.ɵfac = function Ex43Component_Factory(t) {
        return new (t || Ex43Component)();
      };

      Ex43Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex43Component,
        selectors: [["app-Ex43"]],
        decls: 45,
        vars: 0,
        consts: [["id", "aufgabe"], ["href", "https://cssgridgarden.com/#de", "target", "_blank"], ["href", "https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER", "target", "_blank"], ["href", "https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE", "target", "_blank"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt", "target", "_blank"]],
        template: function Ex43Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aufgabe 4.3. Fibonacci");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Schreiben Sie im Browser die ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fibonacci-Funktion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " in JavaScript und geben Sie die ersten 2000 Fibonacci-Zahlen 0,1,1,2,3,5,8,13,... auf der Konsole mit console.log() aus. Achten Sie auf Performanz: Berechnen Sie jeden Fibonacci-Wert nur einmal. Speichern Sie zu diesem Zweck jede bereits berechnete Fibonacci-Zahl in einer Tabelle. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " <!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset=\"ISO-8859-1\">\n        <title>Insert title here</title>\n        <script>function fibonacci(n) {\n            var tabelle = [1,1]\n            for (let i=2; i < n; i++) {\n                tabelle[i] = tabelle[i-1] + tabelle[i-2];\n                console.log(tabelle[i]);\n            }\n            return tabelle;\n        }\n        </script> \n        \n        </head>\n        <body >\n            <button type =\"button\" onclick=\"fibonacci(100)\"> OUTPUT </button>\n        </body>\n        </html>\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Was ist die gr\xF6\xDFte Fibonacci-Zahl, die sich noch als Integer sicher speichern l\xE4sst ( ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Number.MAX_SAFE_INTEGER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ")? Die wievielte Fibonacci-Zahl in der Fibonacci-Folge ist das? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "function fibonacci(n) {\n                var tabelle = [1,1]\n                const x = Number.MAX_SAFE_INTEGER;\n                var y = 0;\n                for (let i=2; i < n; i++) {\n                    tabelle[i] = tabelle[i-1] + tabelle[i-2]\n                    if(tabelle[i]>x){ \n                        y=tabelle[i-1];\n                        console.log( \"the number is  \" + y + \"  and in der Folge  \"+ i--); \n                        break;\n                    }\n                }  \n            }\n            fibonacci(100);\n            \n            //the number is  8944394323791464  kommt in der Stelle 78\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Was ist die gr\xF6\xDFte Fibonacci-Zahl, die sich noch als Number speichern l\xE4sst (");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Number.MAX_VALUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ")? Die wievielte Fibonacci-Zahl in der Fibonacci-Folge ist das (d.h. welche Stelle in der Fibonacci-Folge)? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "function fibonacci(n) {\n                var tabelle = [1,1]\n                const x = Number.MAX_VALUE;\n                var y = 0;\n                for (let i=2; i < n; i++) {\n                    tabelle[i] = tabelle[i-1] + tabelle[i-2]\n                            console.log(tabelle[i]);\n            \n                    if(tabelle[i]>x){ \n                        y=tabelle[i-1];\n                        console.log( \"the number is  \" + y + \"  kommt in der Folge  \"+ i--); \n                        break;\n                    }\n                }\n                \n            }\n            fibonacci(1000);\n            \n            //the number is  1.3069892237633987e+308  kommt in der Stelle 1476");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Wechseln Sie zu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "BigInt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ", um alle 2000 Fibonacci-Zahlen korrekt anzuzeigen. Geben Sie hier HTML- und JavaScript-Code zusammen ein: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "<!DOCTYPE html>\n            <html>\n            <head>\n            <meta charset=\"ISO-8859-1\">\n            <title>Insert title here</title>\n            <script>\n            function fibonacci(n) {\n                var tabelle = [BigInt(1),BigInt(1)]\n             \n                for ( i=2; i < n; i++) {\n                    tabelle[i] = BigInt(tabelle[i-1]) + BigInt(tabelle[i-2]);\n                            console.log(tabelle[i]);\n            \n             \n                }\n                \n            }\n            \n            \n            </script> \n            \n            </head>\n            <body >\n                <button type =\"button\" onclick=\"fibonacci(2000)\"> OUTPUT </button>\n            </body>\n            </html>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Optional: Was ist die gr\xF6\xDFte Fibonacci-Zahl, die Sie mit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " BigInt ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "korrekt berechnet haben? An welcher Stelle in der Fibonacci-Folge steht diese? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "the number is  8944394323791464n  kommt in der Stelle 78 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg0My9FeDQzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXg0My9FeDQzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uZXhlY3V0ZSB7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggI2FiYWJhYjtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex43Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex43',
            templateUrl: './Ex43.component.html',
            styleUrls: ['./Ex43.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "G2Si":
    /*!***************************************************!*\
      !*** ./src/app/exercice/Ex111/Ex111.component.ts ***!
      \***************************************************/

    /*! exports provided: Ex111Component */

    /***/
    function G2Si(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex111Component", function () {
        return Ex111Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex111Component = /*#__PURE__*/function () {
        function Ex111Component() {
          _classCallCheck(this, Ex111Component);
        }

        _createClass(Ex111Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex111Component;
      }();

      Ex111Component.ɵfac = function Ex111Component_Factory(t) {
        return new (t || Ex111Component)();
      };

      Ex111Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex111Component,
        selectors: [["app-Ex111"]],
        decls: 23,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://de.wikipedia.org/wiki/Wettlaufsituation", "target", "_blank"], ["href", "https://de.wikipedia.org/wiki/Verlorenes_Update", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "http://localhost/phpscript/register.php", "target", "_blank", 1, "execute"]],
        template: function Ex111Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "11.1 Registrierung mit PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Erstellen Sie mit PHP 5 auf www2.inf.h-brs.de ein Registrierungsformular. Speichern Sie die eingegebenen Daten persistent in einer Datei auf www2.inf.h-brs.de. Schreiben Sie Ihre PHP-Scripte so, dass es zu keinen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Nebenl\xE4ufigkeitsartefakten");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " (z.B.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Lost Update ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ") kommen kann, egal wie viele Nutzer sich gleichzeitig registrieren. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Geben Sie hier Ihre vollst\xE4ndige L\xF6sung f\xFCr das Registrierungsformular (ggfs. mit allen Dateien hintereinander) ein:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "<!DOCTYPE html>\n        <html>\n        <head>\n        \n        </head>\n        \n        \n            <div class=main> \n            <h1>Registrierung</h1>\n        <form method=\"post\">\n                Username:<br>\n                <input type=\"text\" name=\"username\">\n                <br>\n                PASSWORD:<br>\n                <input type=\"password\" name=\"password\">\n                <br>\n                <input type=\"submit\" >\n        </form>\n        \n        \n        \n        </div>\n        \n        </html>\n        <?php\n            if(isset($_POST['username']) && isset($_POST['password'])) {\n                $username = $_POST['username'];\n                $password = $_POST['password'];\n                $file = './Accounts.csv';\n                $new_line = hash(\"sha256\", $username) . ',' . hash(\"sha256\", $password) . \"\\n\";\n                if(file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) {\n                    echo \"<script>alert('Erfolgreich registriert')</script>\";\n                 }\n             }\n        ?>\n            \n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgxMTEvRXgxMTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUpGOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBLFdBQUE7O0FBQ0E7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLGVBQUE7RUFORjs7RUFTQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaWNlL0V4MTExL0V4MTExLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWlkZGxlcGFuZSB7XHJcbiAgd2lkdGg6IDc2JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWZkZmY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGdyaWQtYXJlYTogYjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5Y2NjYztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0cGFuZSB7XHJcbiAgd2lkdGg6IDI0JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcblxyXG59XHJcblxyXG4jYXVzZnVocmVuIHtcclxuICBjb2xvcjogcmdiKDEwNSwgMzUsIDU2KTtcclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uU2VpdGVfaHRtbCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG59XHJcblxyXG4jYXVmZ2FiZSB7XHJcbiAgYmFja2dyb3VuZDogI2RhZmRmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNlM2ZjZGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxufVxyXG5cclxuXHJcblxyXG4uZXhlY3V0ZSB7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggI2FiYWJhYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4OWVmNztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTAwcHgpIHtcclxuICAjYXVzZnVocmVuIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICB9XHJcblxyXG4gIC5leGVjdXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex111Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex111',
            templateUrl: './Ex111.component.html',
            styleUrls: ['./Ex111.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "GXPF":
    /*!******************************************!*\
      !*** ./src/app/tasks/tasks.component.ts ***!
      \******************************************/

    /*! exports provided: TasksComponent */

    /***/
    function GXPF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
        return TasksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TasksComponent = /*#__PURE__*/function () {
        function TasksComponent() {
          _classCallCheck(this, TasksComponent);
        }

        _createClass(TasksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TasksComponent;
      }();

      TasksComponent.ɵfac = function TasksComponent_Factory(t) {
        return new (t || TasksComponent)();
      };

      TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TasksComponent,
        selectors: [["app-tasks"]],
        decls: 40,
        vars: 0,
        template: function TasksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " tasks works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tasks',
            templateUrl: './tasks.component.html',
            styleUrls: ['./tasks.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "HDLZ":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex53/Ex53.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex53Component */

    /***/
    function HDLZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex53Component", function () {
        return Ex53Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex53Component = /*#__PURE__*/function () {
        function Ex53Component() {
          _classCallCheck(this, Ex53Component);
        }

        _createClass(Ex53Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex53Component;
      }();

      Ex53Component.ɵfac = function Ex53Component_Factory(t) {
        return new (t || Ex53Component)();
      };

      Ex53Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex53Component,
        selectors: [["app-Ex53"]],
        decls: 33,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://www.w3schools.com/html/html_forms.asp", "target", "_blank"], ["href", "https://www.w3schools.com/tags/att_global_contenteditable.asp", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "assets/loesung5.3.html", "target", "_blank", 1, "execute"]],
        template: function Ex53Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "5.3. TopSort als WebApp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Schreiben Sie eine Web-Oberfl\xE4che, in der man beliebige Beziehungen (Vorrang-Relationen) eingeben kann, f\xFCr die dann die topologische Sortierung per Knopfdruck auf der Webseite ausgegeben wird. F\xFCr die Eingabe k\xF6nnen Sie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " HTML5-Eingabefelder ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "oder ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "contentEditable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " verwenden. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Geben Sie die komplette HTML-Seite exkl. JavaScript-Quelltext an. Schreiben Sie Ihren JavaScript-Quelltext in eine separate Datei. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " <!DOCTYPE html>\n        <html lang=\"de\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>TopSort</title>\n            <title>Aufgabe 5.3 TopSort</title>\n           \n        </head>\n        \n        <body>\n            <header>\n                <h1>Aufgabe 5.3 TopSort</h1>\n            \n            </header>\n                <p><b>NEUE RELATION HINFUGEN </b><button onclick=\"newRelation()\">neue Relation</button></p>\n                \n        \n                <form id=\"newRelation\"> </form> <br>\n                <input id=\"newRelation-submit\"  onclick=\"inputGet()\"  type=\"submit\" value=\"DONE\">\n                <p id=\"ergbnis\" > Eine M\xF6gliche topologische Sortierung: </p>\n        \n           \n            <script src=\"topSort.js\"></script>\n        </body>\n        <script>\n        \n        \n        \n        \n        </script>\n        </html> \n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "F\xFCgen Sie Ihren JavaScript-Quelltext aus der separaten Datei in das folgende Textarea ein:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "topSort.js:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n        var formNum = 0,arrRelations = [];\n        function newRelation() {\n        let i=0;\n            while(i!=2) {\n              i++;\n              var newIn = 'newRelation-input-' + formNum++;\n              var input = document.createElement(\"input\");\n                    input.type = \"text\";\n                input.id = newIn;\t\n              document.getElementById(\"newRelation\").appendChild(input);\n            }\n            \n        }\n        function inputGet() {\n            var d2Arr = [];\n            for (i = 0; i < formNum; i++) {\n                d2Arr.push(document.getElementById(`newRelation-input-${i}`).value);\n                if (i % 2 != 0) {arrRelations.push(d2Arr); d2Arr = [];\n                 }\n             }\n          topsort(arrRelations);\n        }\n        \n        \n        function topsort(array) {\n               var length = 0, finalArray = [], listPred = {};\n        \n                for(var i in array) {\n                        if(listPred[array[i][0]] == null) {\n                                listPred[array[i][0]] = 0;\n                                length++; }\n                        \n                        if(listPred[array[i][1]] == null) {\n                                listPred[array[i][1]] = 1;\n                                length++;} else {\n                                listPred[array[i][1]]++;\n                      }\n              }\n                \n              while(length > 0) {\n                     for(var i in listPred) {\n                                if(listPred[i] == 0) {\n                                  finalArray.push(i);  \n                                  for(var j in array) {\n                                        if(array[j][0] === i) {\n                                              listPred[array[j][1]]--; }\n                                        }\n                                        \n                                        delete listPred[i];\n                                        length--;\n                              }\n                      }\n               }\n                \n        document.getElementById(\"ergbnis\").innerHTML = finalArray.toString();\n        }\n        \n        \n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg1My9FeDUzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDUzL0V4NTMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex53Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex53',
            templateUrl: './Ex53.component.html',
            styleUrls: ['./Ex53.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "N+Ap":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex41/Ex41.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex41Component */

    /***/
    function NAp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex41Component", function () {
        return Ex41Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex41Component = /*#__PURE__*/function () {
        function Ex41Component() {
          _classCallCheck(this, Ex41Component);
        }

        _createClass(Ex41Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex41Component;
      }();

      Ex41Component.ɵfac = function Ex41Component_Factory(t) {
        return new (t || Ex41Component)();
      };

      Ex41Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex41Component,
        selectors: [["app-Ex41"]],
        decls: 87,
        vars: 0,
        consts: [["id", "aufgabe"]],
        template: function Ex41Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aufgabe 4.1. Funktionen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Schreiben Sie eine Funktion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " identity()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", die ein Argument als Parameter entgegen nimmt und dieses als Ergebnis zur\xFCck gibt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " function identity(arg) {\n    return arg; }\n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Schreiben Sie eine Funktion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " identity_function()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ", die ein Argument als Parameter entgegen nimmt und eine Funktion zur\xFCck gibt, die dieses Argument zur\xFCck gibt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " function identity_function(arg) {\n    return (\n        function() {\n            return arg;\n        }\n    )\n\n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Schreiben Sie zwei bin\xE4re Funktionen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " und ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " mul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ", die Summe und Produkt berechnen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " function add(x,y) {\n    return x+y;\n}\n\nfunction mul(x,y) {\n    return x*y;\n}\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Schreiben Sie eine Addier-Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " addf()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " sodass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " addf(x)(y)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " genau ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " x+y");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " ,zur\xFCck gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "addf(x)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " liefert eine Funktion, die auf ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "y");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " angewandt wird.)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " function addf(x){\n                return (\n                    function(y) {\n                        return x+y;\n                    }  ) }\n            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Schreiben Sie eine Funktion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " applyf(),");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " die aus einer bin\xE4ren Funktion wie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "add(x,y)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " eine Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "addf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " berechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "addf = applyf(add); addf(x)(y) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " soll ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "add(x,y)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " liefern. Entsprechend ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "applyf(mul)(5)(6)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " soll ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "30 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " liefern, wenn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "mul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " die bin\xE4re Multiplikation ist. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " function applyf(binar) {\n    return (\n        function(x) {\n            return (\n                function(y) {\n                    return binar(x,y);\n             }\n          )\n      }\n   )\n}\nconsole.log(applyf(mul)(5)(3))\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg0MS9FeDQxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXg0MS9FeDQxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uZXhlY3V0ZSB7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggI2FiYWJhYjtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex41Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex41',
            templateUrl: './Ex41.component.html',
            styleUrls: ['./Ex41.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "OWb/":
    /*!****************************************!*\
      !*** ./src/app/body/body.component.ts ***!
      \****************************************/

    /*! exports provided: BodyComponent */

    /***/
    function OWb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BodyComponent", function () {
        return BodyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../tasks/tasks.component */
      "GXPF");
      /* harmony import */


      var _solution_solution_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../solution/solution.component */
      "3K0J");

      var BodyComponent = /*#__PURE__*/function () {
        function BodyComponent() {
          _classCallCheck(this, BodyComponent);
        }

        _createClass(BodyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BodyComponent;
      }();

      BodyComponent.ɵfac = function BodyComponent_Factory(t) {
        return new (t || BodyComponent)();
      };

      BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BodyComponent,
        selectors: [["app-body"]],
        decls: 4,
        vars: 0,
        consts: [[1, "middlepane"], [1, "rightpane"]],
        template: function BodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-solution");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__["TasksComponent"], _solution_solution_component__WEBPACK_IMPORTED_MODULE_2__["SolutionComponent"]],
        styles: [".middlepane[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: royalblue;\n  border-collapse: collapse;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  position: relative;\n  float: right;\n  background-color: white;\n  border-collapse: collapse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5yaWdodHBhbmUge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-body',
            templateUrl: './body.component.html',
            styleUrls: ['./body.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Qj28":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex51/Ex51.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex51Component */

    /***/
    function Qj28(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex51Component", function () {
        return Ex51Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex51Component = /*#__PURE__*/function () {
        function Ex51Component() {
          _classCallCheck(this, Ex51Component);
        }

        _createClass(Ex51Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex51Component;
      }();

      Ex51Component.ɵfac = function Ex51Component_Factory(t) {
        return new (t || Ex51Component)();
      };

      Ex51Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex51Component,
        selectors: [["app-Ex51"]],
        decls: 44,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], [2, "color", "#ff0000"], ["href", "https://www.w3schools.com/js/js_htmldom.asp", "target", "_blank"], ["href", "https://developer.mozilla.org/en-US/docs/Web/API/Performance/now", "target", "_blank"], ["href", "https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now", "target", "_blank"], ["href", "https://spectreattack.com/", "target", "_blank"], ["href", "https://de.wikipedia.org/wiki/Meltdown_(Sicherheitsl%C3%BCcke)", "target", "_blank"], ["href", "https://stackoverflow.com/questions/50117537/how-to-get-microsecond-timings-in-javascript-since-spectre-and-meltdown", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "assets/loesung5.1.html", "target", "_blank", 1, "execute"]],
        template: function Ex51Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "5.1. Performanzmessungen von DOM-Operationen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Implementieren Sie Performanzmessungen zum Vergleich von ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " innerHTML, innerText, textContent und outerHTML ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "selbstst\xE4ndig in JavaScript durch Nutzung der ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DOM API");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". Geben Sie die Messergebnisse als Tabelle aus. Verwenden Sie die eingebauten Zeitmess-Funktionen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "performance.now ()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ", siehe auch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " When-milliseconds-are-not-enough-performance-now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ". Suchen Sie eine m\xF6glichst kurze und elegante L\xF6sung.Dabei ist zu beachten, dass Browser, um potenzielle Sicherheitsbedrohungen wie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Spectre ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "oder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Meltdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " zu minimieren, den zur\xFCckgegebenen Wert normalerweise um einen bestimmten Betrag runden. Dies f\xFChrt zu einer gewissen Ungenauigkeit. Beispielsweise rundet Firefox die zur\xFCckgegebene Zeit in Schritten von 1 Millisekunde. Diese Zwangsrundung kann man jedoch wiederum abschalten mittels Firefox setting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "aprivacy.reduceTimerPrecision ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " siehe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "How to get microsecond timings in JavaScript since Spectre and Meltdown.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Geben Sie die komplette HTML-Seite inkl. JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " <!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset=\"ISO-8859-1\">\n           \n        </head>\n              \n        \n        <body>\n        \n            <div  >\n            <h1 id=\"text\">dieser Text wiederholt sich 10000 Mal</h1>\n            </div>\n            <table>\n               <tr>\n                    <td>innerHtml </td>\n                    <td id=\"innerHtml\"></td>\n               </tr>\n        \n               <tr>\n                    <td> innerText</td>\n                    <td id=\"innerText\"></td>\n               </tr>\n                \n               <tr>\n                    <td>textContent</td>\n                    <td id=\"textContent\"></td>\n               </tr>\n                \n               <tr>\n                    <td>outerHtml\n                    </td><td id=\"outerHtml\"></td>\n               </tr>    \n            </table>\n        \n        </body>\n          <script > var list = document.getElementById('text');\n                let time = performance.now();\n                for (var i = 0; i < 10000; i++) \n                {list.innerHTML ;}\n                let timeNew = performance.now();\n                document.getElementById(\"innerHtml\").textContent = `${timeNew -time}ms`;\n                \n                 time = performance.now();\n                for (var i = 0; i < 10000; i++) \n                {list.innerText ;}\n                timeNew = performance.now();\n                document.getElementById(\"innerText\").textContent = `${timeNew - time}ms`;\n                \n                time = performance.now();\n                for (var i = 0; i < 10000; i++)\n                {list.textContent ;}\n                timeNew = performance.now();\n                document.getElementById(\"textContent\").textContent = `${timeNew - time}ms`;\n                \n                time = performance.now();\n                for (var i = 0; i < 10000; i++)\n                {  list.outerHtml ; }\n               timeNew = performance.now();    \n                document.getElementById(\"outerHtml\").textContent = `${timeNew - time} ms`;\n                </script>\n        </html>\n        \n        \n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg1MS9FeDUxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDUxL0V4NTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex51Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex51',
            templateUrl: './Ex51.component.html',
            styleUrls: ['./Ex51.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'omar-project';
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Vjdv":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex72/Ex72.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex72Component */

    /***/
    function Vjdv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex72Component", function () {
        return Ex72Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex72Component = /*#__PURE__*/function () {
        function Ex72Component() {
          _classCallCheck(this, Ex72Component);
        }

        _createClass(Ex72Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex72Component;
      }();

      Ex72Component.ɵfac = function Ex72Component_Factory(t) {
        return new (t || Ex72Component)();
      };

      Ex72Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex72Component,
        selectors: [["app-Ex72"]],
        decls: 24,
        vars: 0,
        consts: [["id", "aufgabe"], ["href", "https://kaul.inf.h-brs.de/we/assets/html/plagiatsresolution.html", "target", "_blank"], ["href", "https://de.wikipedia.org/wiki/Stoppwort", "target", "_blank"], ["href", "https://github.com/stopwords-iso/stopwords-de", "target", "_blank"]],
        template: function Ex72Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "7.2 Textanalyse mit filter-map-reduce");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Schreiben Sie in JavaScript eine Textanalyse. Ermitteln Sie die h\xE4ufigsten Begriffe im Text ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Plagiatsresolution.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Filtern Sie dabei alle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Stoppworte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " und HTML-Tags. Reduzieren Sie das Ergebnis auf die 3 h\xE4ufigsten Begriffe. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Hinweis: Eine gr\xF6\xDFere Stoppwort-Liste finden Sie auch unter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " github.com/stopwords-iso/stopwords-de");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\xDCben Sie sich in Funktionaler Programmierung. Geben Sie Ihren Quellcode hier ein. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " var Stoppworte = [\"ab\", \"aber\", \"alle\", \"allem\", \"allen\", \"aller\", \"allerdings\",\"als\", \"also\", \"am\", \"an\", \"andere\", \"anderem\", \"anderen\", \"anderer\", \n\t\"andernfalls\", \"anders\", \"andersherum\", \"anfangs\", \"anhand\", \"anschlie\xDFend\",\n\t\"ansonsten\", \"anstatt\", \"auch\", \"auf\", \"aufgrund\", \"aus\", \"au\xDFerdem\", \"befindet\",\n\t\"bei\", \"beide\", \"beim\", \"beispielsweise\", \"bereits\", \"besonders\", \"besteht\", \"bestimmte\",\n\t\"bestimmten\", \"bestimmter\", \"bevor\", \"bietet\", \"bis\", \"bleiben\", \"bringen\", \"bringt\", \"bsp\",\n\t\"bzw\", \"d.h\", \"da\", \"dabei\", \"daf\xFCr\", \"daher\", \"damit\", \"danach\", \"dann\", \"dar\", \"daran\", \"darauf\",\n\t\"daraus\", \"darf\", \"darstellt\", \"dar\xFCber\", \"das\", \"dass\", \"davon\", \"dazu\", \"dem\", \"demzufolge\", \"den\", \n\t\"denen\", \"denn\", \"der\", \"deren\", \"des\", \"dessen\", \"desto\", \"die\", \"dies\", \"diese\", \"diesem\", \"diesen\", \n\t\"dieser\", \"dieses\", \"doch\", \"dort\", \"durch\", \"ebenfalls\", \"eher\", \"eigenen\", \"eigentlich\", \"ein\", \"eine\",\t\t\t\t\n\t\"einem\", \"einen\", \"einer\", \"eines\", \"einigen\", \"einiges\", \"einmal\", \"einzelnen\", \"entscheidend\", \"entweder\",\t\t\t\n\t\"er\", \"erstmals\", \"es\", \"etc\", \"etwas\", \"euch\", \"folgende\", \"folgendem\", \"folgenden\", \"folgender\", \"folgendes\", \n\t\"folgt\", \"f\xFCr\", \"ganz\", \"gegen\", \"gehen\", \"gemacht\", \"genannte\", \"genannten\", \"gerade\", \"gerne\", \"gibt\", \"gilt\",\n\t\"gleich\", \"gleichen\", \"gleichzeitig\", \"habe\", \"haben\", \"h\xE4lt\", \"hat\", \"hatte\", \"h\xE4tte\", \"haupts\xE4chlich\", \"her\", \n\t\"heutigen\", \"hier\", \"hierbei\", \"hierf\xFCr\", \"hin\", \"hingegen\", \"hinzu\", \"hoch\", \"ihn\", \"ihr\", \"ihre\", \"ihren\", \"ihrer\",\n\t\"im\", \"immer\", \"immerhin\", \"in\", \"indem\", \"insgesamt\", \"ist\", \"ja\", \"je\", \"jede\", \"jedem\", \"jeder\", \"jedes\", \"jedoch\", \n\t\"jetzt\", \"jeweilige\", \"jeweiligen\", \"jeweils\", \"kam\", \"kann\", \"keine\", \"kommen\", \"kommt\", \"k\xF6nnen\", \"konnte\", \"k\xF6nnte\",\n\t\"konnten\", \"lassen\", \"l\xE4sst\", \"lautet\", \"lediglich\", \"leider\", \"letztendlich\", \"letztere\", \"letzteres\", \"liegt\", \"machen\",\n\t\"macht\", \"mal\", \"man\", \"mehr\", \"mehrere\", \"meine\", \"meinem\", \"meisten\", \"mich\", \"mit\", \"mithilfe\", \"mittels\", \"m\xF6chte\", \"m\xF6glich\", \n\t\"m\xF6glichst\", \"momentan\", \"muss\", \"m\xFCssen\", \"musste\", \"nach\", \"nachdem\", \"n\xE4chsten\", \"nahezu\", \"n\xE4mlich\", \"nat\xFCrlich\", \"neue\", \"neuen\", \"nicht\",\n\t\"nichts\", \"noch\", \"nun\", \"nur\", \"ob\", \"obwohl\", \"oder\", \"oftmals\", \"ohne\", \"per\", \"s\xE4mtliche\", \"scheint\", \"schon\", \"sehr\", \"sein\", \"seine\", \"seinem\", \"seinen\", \"sich\", \"sicherlich\", \"sie\", \"siehe\", \"sind\", \"so\", \"sobald\", \"sofern\", \"solche\", \"solchen\", \"soll\", \"sollen\", \"sollte\", \"sollten\", \"somit\", \"sondern\", \"sorgt\", \"sowie\", \"sowohl\", \"sp\xE4ter\", \"sprich\", \"statt\", \"trotz\", \"\xFCber\", \"\xFCberhaupt\", \"um\", \"und\", \"uns\", \"unter\", \"usw\", \"viel\", \"viele\", \"vielen\", \"v\xF6llig\", \"vom\", \"von\", \"vor\", \"vorerst\", \"vorher\", \"w\xE4hrend\", \"war\", \"w\xE4re\", \"waren\", \"warum\", \"was\", \"weil\", \"weitere\", \"weiteren\", \"weiterer\", \"weiteres\", \"weiterhin\", \"welche\", \"welchen\", \"welcher\", \"welches\", \"wenn\", \"wer\", \"werden\", \"wesentlich\", \"wichtige\", \"wichtigsten\", \"wie\", \"wieder\", \"wiederum\", \"will\", \"wir\", \"wird\", \"wirklich\", \"wo\", \"wobei\", \"worden\", \"wurde\", \"wurden\", \"z.b\", \"ziemlich\", \"zu\", \"zuerst\", \"zum\", \"zur\", \"zus\xE4tzlich\", \"zuvor\", \"zwar\", \"zwecks\"];\n\nvar XMLHttpRequest = require(\"xmlhttprequest\").XMLHttpRequest;\n\nvar xhr = new XMLHttpRequest();\nxhr.open(\"GET\", \"https://kaul.inf.h-brs.de/we/assets/html/plagiatsresolution.html\");\nxhr.send();\nvar text = responseText;\n//text sabuer machen\nvar text = text.replaceAll(/@^()[]%\\n\\d\\r\\t,.\"'#_-`'!{}/g, \" \")\n.split(\" \").trim().filter(x => !Stoppworte.includes(x) && x !== \"\");\n\n\nvar anzahlWord = {};\n\n\ntext.forEach(word => {\nanzahlWord[word] = anzahlWord[word] ? anzahlWord[word] + 1 : 1;\n\u2003 \u2003\u2003 });\n\nvar Begriffe =bject.keys(arg).sort(function (a, b) {\n\u2003 \u2003 return arg[a] - arg[b]\n\u2003 });\n\n\u2003 console.log(\"die 3 h\xE4ufigsten Begriffe sind = \"+ Object.values(woerter).slice(Object.values(alleWoerter).length-3));\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  background-color: #689ef7;\n  color: white;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg3Mi9FeDcyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXg3Mi9FeDcyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4ZWN1dGUge1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICNhYmFiYWI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex72Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex72',
            templateUrl: './Ex72.component.html',
            styleUrls: ['./Ex72.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Vkb/":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex92/Ex92.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex92Component */

    /***/
    function Vkb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex92Component", function () {
        return Ex92Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex92Component = /*#__PURE__*/function () {
        function Ex92Component() {
          _classCallCheck(this, Ex92Component);
        }

        _createClass(Ex92Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex92Component;
      }();

      Ex92Component.ɵfac = function Ex92Component_Factory(t) {
        return new (t || Ex92Component)();
      };

      Ex92Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex92Component,
        selectors: [["app-Ex92"]],
        decls: 26,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html", "target", "_blank"], ["href", "https://www.highcharts.com/demo/bar-basic", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "assets/loesung 9.2.html", "target", "_blank", 1, "execute"]],
        template: function Ex92Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "9.2. Statistik-Balkendiagramm in SVG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Implementieren Sie ein eigenes Balkendiagramm mit HTML, Inline SVG, CSS und JavaScript. Geben Sie die Daten f\xFCr das Balkendiagramm im JSON-Format vor. Nehmen Sie als Beispieldaten die ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "COVID-19: Fallzahlen in Deutschland");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". Animieren Sie die Grafik (siehe z.B. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Highchart Bar Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ").");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Geben Sie hier eine ablauff\xE4hige HTML-Seite inklusive SVG-Code ein: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "<!DOCTYPE html>\n        <html lang=\"en\">\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js\"></script>\n        <canvas id=\"myChart\" style=\"width:100%;max-width:700px\"></canvas>\n        <script>\n        var myChart = new Chart(\"myChart\", {\n            type: \"bar\",\n            data: {},\n            options: {}\n          });\n          var xValues = [\"Baden-W\xFCrttem\xADberg\", \"Bayern\", \"Berlin\", \"Branden\xADburg\",\"Bremen\",\"Hamburg\",\"Nord\xADrhein-West\xADfalen\",\"Sachsen\"];\n        var yValues = [880657, 1191561 , 285058, 192271, 40950, 118126, 1221048 ,544655];\n        var barColors = [\"red\", \"green\",\"blue\",\"orange\",\"yellow\",\"pink\",\"gray\",\"brown\"];\n        \n        new Chart(\"myChart\", {\n          type: \"bar\",\n          data: {\n            labels: xValues,\n            datasets: [{\n              backgroundColor: barColors,\n              data: yValues\n            }]\n          },options: {\n          \n              legend: {display: false},\n        \n            title: {\n              display: true,\n              text: \"Fallzahlen in Deutschland\",\n        \n            }\n          }\n        });\n        </script>\n        \n        <body>\n            \n        </body>\n        </html>\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg5Mi9FeDkyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDkyL0V4OTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex92Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex92',
            templateUrl: './Ex92.component.html',
            styleUrls: ['./Ex92.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Xpf1":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex44/Ex44.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex44Component */

    /***/
    function Xpf1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex44Component", function () {
        return Ex44Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex44Component = /*#__PURE__*/function () {
        function Ex44Component() {
          _classCallCheck(this, Ex44Component);
        }

        _createClass(Ex44Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex44Component;
      }();

      Ex44Component.ɵfac = function Ex44Component_Factory(t) {
        return new (t || Ex44Component)();
      };

      Ex44Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex44Component,
        selectors: [["app-Ex44"]],
        decls: 41,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://de.wikipedia.org/wiki/Topologische_Sortierung", "target", "_blank"], ["href", "https://developer.mozilla.org/de/docs/Web/API/Console/assert", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "assets/loesung 4.4.html", "target", "_blank", 1, "execute"]],
        template: function Ex44Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aufgabe 4.4. Topsort");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "[ [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"studieren\", \"pr\xFCfen\"] ]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "In jedem Projekt fallen Aufgaben (Tasks) an. Zwischen den Aufgaben gibt es paarweise Abh\xE4ngigkeiten. Z.B. kann Task2 von Task1 abh\xE4ngen, d.h. erst muss Task1 fertig sein, bevor Task2 starten kann, weil es dessen Ergebnisse ben\xF6tigt. Tasks k\xF6nnen auch unabh\xE4ngig voneinander sein und parallel ablaufen. In JavaScript k\xF6nnen Sie die Abh\xE4ngigkeiten in Arrays codieren, z.B. kann man bei nicht pr\xFCfen, ohne vorher gegessen zu haben. Transitive Abh\xE4ngigkeiten m\xFCssen also ber\xFCcksichtigt werden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Schreiben Sie in JavaScript eine Funktion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " topsort()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ", die eine ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "topologische Sortierung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " berechnet. Topologische Sortierung ist eine Form von Sortierung. Sie kennen die Funktion Array.prototype.sort() und wissen, was als Ergebnis erwartet wird, n\xE4mlich eine sortiere Liste. Genauso ist das hier. Die Funktion topsort() soll eine sortierte Liste ausgeben, die keine der eingegebenen Abh\xE4ngigkeiten verletzt. Achten Sie auf Performanz. Berechnen Sie die topologische Sortierung in linearer Zeit (Average Case).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " <!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset=\"UTF-8\"/>\n        </head>\n        <body>\n        <div id=\"sortedArray\"></div>\n        <script>\n        \n        document.getElementById(\"sortedArray\").innerHTML = topsort([ [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"studieren\", \"pr\xFCfen\"] ])\n        \n        function topsort(array) {\n               var length = 0, finalArray = [], listPred = {};\n        \n                for(var i in array) {\n                        if(listPred[array[i][0]] == null) {\n                                listPred[array[i][0]] = 0;\n                                length++; }\n                        \n                        if(listPred[array[i][1]] == null) {\n                                listPred[array[i][1]] = 1;\n                                length++;} else {\n                                listPred[array[i][1]]++;\n                      }\n              }\n                \n              while(length > 0) {\n                     for(var i in listPred) {\n                                if(listPred[i] == 0) {\n                                  finalArray.push(i);  \n                                  for(var j in array) {\n                                        if(array[j][0] === i) {\n                                              listPred[array[j][1]]--; }\n                                        }\n                                        \n                                        delete listPred[i];\n                                        length--;\n                              }\n                      }\n               }\n                \n                return finalArray;\n        }\n        </script>\n        </body>\n        </html>\n        \n        \n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Testen Sie Ihren JavaScript-Code. Verwenden Sie f\xFCr Ihre Tests die Funktion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " console.assert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ". Geben Sie hier Ihre Tests ein");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\nvar array = [ [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"studieren\", \"pr\xFCfen\"]];\n \nconsole.assert(topSort(array) === [ \"schlafen\", \"essen\", \"studieren\", \"pr\xFCfen\"], \"Richtige Ergebnisse\");\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "klicken SIE HIER BITTE ! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg0NC9FeDQ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDQ0L0V4NDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex44Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex44',
            templateUrl: './Ex44.component.html',
            styleUrls: ['./Ex44.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _exercice_aboutMe_aboutMe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./exercice/aboutMe/aboutMe.component */
      "vaNh");
      /* harmony import */


      var _exercice_Ex65_Ex65_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./exercice/Ex65/Ex65.component */
      "/l4N");
      /* harmony import */


      var _exercice_Ex113_Ex113_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./exercice/Ex113/Ex113.component */
      "jXIw");
      /* harmony import */


      var _exercice_Ex112_Ex112_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exercice/Ex112/Ex112.component */
      "/mFQ");
      /* harmony import */


      var _exercice_Ex111_Ex111_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./exercice/Ex111/Ex111.component */
      "G2Si");
      /* harmony import */


      var _exercice_Ex103_Ex103_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./exercice/Ex103/Ex103.component */
      "qJP3");
      /* harmony import */


      var _exercice_Ex102_Ex102_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exercice/Ex102/Ex102.component */
      "lK6/");
      /* harmony import */


      var _exercice_Ex101_Ex101_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./exercice/Ex101/Ex101.component */
      "oIi1");
      /* harmony import */


      var _exercice_Ex92_Ex92_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./exercice/Ex92/Ex92.component */
      "Vkb/");
      /* harmony import */


      var _exercice_Ex91_Ex91_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./exercice/Ex91/Ex91.component */
      "iNJO");
      /* harmony import */


      var _exercice_Ex82_Ex82_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./exercice/Ex82/Ex82.component */
      "/bc1");
      /* harmony import */


      var _exercice_Ex81_Ex81_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./exercice/Ex81/Ex81.component */
      "7y4U");
      /* harmony import */


      var _exercice_Ex72_Ex72_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./exercice/Ex72/Ex72.component */
      "Vjdv");
      /* harmony import */


      var _exercice_Ex71_Ex71_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./exercice/Ex71/Ex71.component */
      "iD1+");
      /* harmony import */


      var _exercice_Ex64_Ex64_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./exercice/Ex64/Ex64.component */
      "cU/L");
      /* harmony import */


      var _exercice_Ex63_Ex63_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./exercice/Ex63/Ex63.component */
      "EpvI");
      /* harmony import */


      var _exercice_Ex62_Ex62_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./exercice/Ex62/Ex62.component */
      "CVn9");
      /* harmony import */


      var _exercice_Ex61_Ex61_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./exercice/Ex61/Ex61.component */
      "0TBA");
      /* harmony import */


      var _exercice_Ex53_Ex53_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./exercice/Ex53/Ex53.component */
      "HDLZ");
      /* harmony import */


      var _exercice_Ex51_Ex51_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./exercice/Ex51/Ex51.component */
      "Qj28");
      /* harmony import */


      var _exercice_Ex44_Ex44_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./exercice/Ex44/Ex44.component */
      "Xpf1");
      /* harmony import */


      var _exercice_Ex43_Ex43_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./exercice/Ex43/Ex43.component */
      "FPlC");
      /* harmony import */


      var _exercice_Ex42_Ex42_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./exercice/Ex42/Ex42.component */
      "i8P/");
      /* harmony import */


      var _exercice_Ex41_Ex41_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./exercice/Ex41/Ex41.component */
      "N+Ap");
      /* harmony import */


      var _exercice_Ex33_Ex33_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./exercice/Ex33/Ex33.component */
      "DvEU");
      /* harmony import */


      var _exercice_Ex31_Ex31_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./exercice/Ex31/Ex31.component */
      "fvoq");
      /* harmony import */


      var _exercice_Ex23_Ex23_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./exercice/Ex23/Ex23.component */
      "/uZe");
      /* harmony import */


      var _exercice_Ex22_Ex22_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./exercice/Ex22/Ex22.component */
      "Ehkv");
      /* harmony import */


      var _exercice_Ex21_Ex21_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./exercice/Ex21/Ex21.component */
      "wj+h");
      /* harmony import */


      var _exercice_Ex14_Ex14_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./exercice/Ex14/Ex14.component */
      "gKVh");
      /* harmony import */


      var _exercice_Ex13_Ex13_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./exercice/Ex13/Ex13.component */
      "dmor");
      /* harmony import */


      var _exercice_Ex12_Ex12_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./exercice/Ex12/Ex12.component */
      "FAtD");
      /* harmony import */


      var _exercice_sheet1Ex1_sheet1Ex1_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./exercice/sheet1Ex1/sheet1Ex1.component */
      "F4uq");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _exercice_exercice_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./exercice/exercice.component */
      "hHlX");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./nav-bar/nav-bar.component */
      "5hVl");
      /* harmony import */


      var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./tasks/tasks.component */
      "GXPF");
      /* harmony import */


      var _solution_solution_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./solution/solution.component */
      "3K0J");
      /* harmony import */


      var _body_body_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./body/body.component */
      "OWb/");
      /* harmony import */


      var _exercice_Ex32_Ex32_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./exercice/Ex32/Ex32.component */
      "sjZb");
      /* harmony import */


      var _exercice_Ex52_Ex52_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./exercice/Ex52/Ex52.component */
      "/yFN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_35__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"], _exercice_exercice_component__WEBPACK_IMPORTED_MODULE_37__["ExerciceComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_38__["NavBarComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_39__["TasksComponent"], _solution_solution_component__WEBPACK_IMPORTED_MODULE_40__["SolutionComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_41__["BodyComponent"], _exercice_sheet1Ex1_sheet1Ex1_component__WEBPACK_IMPORTED_MODULE_32__["Sheet1Ex1Component"], _exercice_Ex12_Ex12_component__WEBPACK_IMPORTED_MODULE_31__["Ex12Component"], _exercice_Ex13_Ex13_component__WEBPACK_IMPORTED_MODULE_30__["Ex13Component"], _exercice_Ex14_Ex14_component__WEBPACK_IMPORTED_MODULE_29__["Ex14Component"], _exercice_Ex21_Ex21_component__WEBPACK_IMPORTED_MODULE_28__["Ex21Component"], _exercice_Ex22_Ex22_component__WEBPACK_IMPORTED_MODULE_27__["Ex22Component"], _exercice_Ex23_Ex23_component__WEBPACK_IMPORTED_MODULE_26__["Ex23Component"], _exercice_Ex31_Ex31_component__WEBPACK_IMPORTED_MODULE_25__["Ex31Component"], _exercice_Ex32_Ex32_component__WEBPACK_IMPORTED_MODULE_42__["Ex32Component"], _exercice_Ex33_Ex33_component__WEBPACK_IMPORTED_MODULE_24__["Ex33Component"], _exercice_Ex41_Ex41_component__WEBPACK_IMPORTED_MODULE_23__["Ex41Component"], _exercice_Ex42_Ex42_component__WEBPACK_IMPORTED_MODULE_22__["Ex42Component"], _exercice_Ex43_Ex43_component__WEBPACK_IMPORTED_MODULE_21__["Ex43Component"], _exercice_Ex44_Ex44_component__WEBPACK_IMPORTED_MODULE_20__["Ex44Component"], _exercice_Ex51_Ex51_component__WEBPACK_IMPORTED_MODULE_19__["Ex51Component"], _exercice_Ex52_Ex52_component__WEBPACK_IMPORTED_MODULE_43__["Ex52Component"], _exercice_Ex53_Ex53_component__WEBPACK_IMPORTED_MODULE_18__["Ex53Component"], _exercice_Ex61_Ex61_component__WEBPACK_IMPORTED_MODULE_17__["Ex61Component"], _exercice_Ex62_Ex62_component__WEBPACK_IMPORTED_MODULE_16__["Ex62Component"], _exercice_Ex63_Ex63_component__WEBPACK_IMPORTED_MODULE_15__["Ex63Component"], _exercice_Ex64_Ex64_component__WEBPACK_IMPORTED_MODULE_14__["Ex64Component"], _exercice_Ex65_Ex65_component__WEBPACK_IMPORTED_MODULE_1__["Ex65Component"], _exercice_Ex71_Ex71_component__WEBPACK_IMPORTED_MODULE_13__["Ex71Component"], _exercice_Ex72_Ex72_component__WEBPACK_IMPORTED_MODULE_12__["Ex72Component"], _exercice_Ex81_Ex81_component__WEBPACK_IMPORTED_MODULE_11__["Ex81Component"], _exercice_Ex82_Ex82_component__WEBPACK_IMPORTED_MODULE_10__["Ex82Component"], _exercice_Ex91_Ex91_component__WEBPACK_IMPORTED_MODULE_9__["Ex91Component"], _exercice_Ex92_Ex92_component__WEBPACK_IMPORTED_MODULE_8__["Ex92Component"], _exercice_Ex101_Ex101_component__WEBPACK_IMPORTED_MODULE_7__["Ex101Component"], _exercice_Ex102_Ex102_component__WEBPACK_IMPORTED_MODULE_6__["Ex102Component"], _exercice_Ex103_Ex103_component__WEBPACK_IMPORTED_MODULE_5__["Ex103Component"], _exercice_Ex111_Ex111_component__WEBPACK_IMPORTED_MODULE_4__["Ex111Component"], _exercice_Ex112_Ex112_component__WEBPACK_IMPORTED_MODULE_3__["Ex112Component"], _exercice_Ex113_Ex113_component__WEBPACK_IMPORTED_MODULE_2__["Ex113Component"], _exercice_aboutMe_aboutMe_component__WEBPACK_IMPORTED_MODULE_0__["AboutMeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_35__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_34__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"], _exercice_exercice_component__WEBPACK_IMPORTED_MODULE_37__["ExerciceComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_38__["NavBarComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_39__["TasksComponent"], _solution_solution_component__WEBPACK_IMPORTED_MODULE_40__["SolutionComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_41__["BodyComponent"], _exercice_sheet1Ex1_sheet1Ex1_component__WEBPACK_IMPORTED_MODULE_32__["Sheet1Ex1Component"], _exercice_Ex12_Ex12_component__WEBPACK_IMPORTED_MODULE_31__["Ex12Component"], _exercice_Ex13_Ex13_component__WEBPACK_IMPORTED_MODULE_30__["Ex13Component"], _exercice_Ex14_Ex14_component__WEBPACK_IMPORTED_MODULE_29__["Ex14Component"], _exercice_Ex21_Ex21_component__WEBPACK_IMPORTED_MODULE_28__["Ex21Component"], _exercice_Ex22_Ex22_component__WEBPACK_IMPORTED_MODULE_27__["Ex22Component"], _exercice_Ex23_Ex23_component__WEBPACK_IMPORTED_MODULE_26__["Ex23Component"], _exercice_Ex31_Ex31_component__WEBPACK_IMPORTED_MODULE_25__["Ex31Component"], _exercice_Ex32_Ex32_component__WEBPACK_IMPORTED_MODULE_42__["Ex32Component"], _exercice_Ex33_Ex33_component__WEBPACK_IMPORTED_MODULE_24__["Ex33Component"], _exercice_Ex41_Ex41_component__WEBPACK_IMPORTED_MODULE_23__["Ex41Component"], _exercice_Ex42_Ex42_component__WEBPACK_IMPORTED_MODULE_22__["Ex42Component"], _exercice_Ex43_Ex43_component__WEBPACK_IMPORTED_MODULE_21__["Ex43Component"], _exercice_Ex44_Ex44_component__WEBPACK_IMPORTED_MODULE_20__["Ex44Component"], _exercice_Ex51_Ex51_component__WEBPACK_IMPORTED_MODULE_19__["Ex51Component"], _exercice_Ex52_Ex52_component__WEBPACK_IMPORTED_MODULE_43__["Ex52Component"], _exercice_Ex53_Ex53_component__WEBPACK_IMPORTED_MODULE_18__["Ex53Component"], _exercice_Ex61_Ex61_component__WEBPACK_IMPORTED_MODULE_17__["Ex61Component"], _exercice_Ex62_Ex62_component__WEBPACK_IMPORTED_MODULE_16__["Ex62Component"], _exercice_Ex63_Ex63_component__WEBPACK_IMPORTED_MODULE_15__["Ex63Component"], _exercice_Ex64_Ex64_component__WEBPACK_IMPORTED_MODULE_14__["Ex64Component"], _exercice_Ex65_Ex65_component__WEBPACK_IMPORTED_MODULE_1__["Ex65Component"], _exercice_Ex71_Ex71_component__WEBPACK_IMPORTED_MODULE_13__["Ex71Component"], _exercice_Ex72_Ex72_component__WEBPACK_IMPORTED_MODULE_12__["Ex72Component"], _exercice_Ex81_Ex81_component__WEBPACK_IMPORTED_MODULE_11__["Ex81Component"], _exercice_Ex82_Ex82_component__WEBPACK_IMPORTED_MODULE_10__["Ex82Component"], _exercice_Ex91_Ex91_component__WEBPACK_IMPORTED_MODULE_9__["Ex91Component"], _exercice_Ex92_Ex92_component__WEBPACK_IMPORTED_MODULE_8__["Ex92Component"], _exercice_Ex101_Ex101_component__WEBPACK_IMPORTED_MODULE_7__["Ex101Component"], _exercice_Ex102_Ex102_component__WEBPACK_IMPORTED_MODULE_6__["Ex102Component"], _exercice_Ex103_Ex103_component__WEBPACK_IMPORTED_MODULE_5__["Ex103Component"], _exercice_Ex111_Ex111_component__WEBPACK_IMPORTED_MODULE_4__["Ex111Component"], _exercice_Ex112_Ex112_component__WEBPACK_IMPORTED_MODULE_3__["Ex112Component"], _exercice_Ex113_Ex113_component__WEBPACK_IMPORTED_MODULE_2__["Ex113Component"], _exercice_aboutMe_aboutMe_component__WEBPACK_IMPORTED_MODULE_0__["AboutMeComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_35__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cU/L":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex64/Ex64.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex64Component */

    /***/
    function cUL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex64Component", function () {
        return Ex64Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex64Component = /*#__PURE__*/function () {
        function Ex64Component() {
          _classCallCheck(this, Ex64Component);
        }

        _createClass(Ex64Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex64Component;
      }();

      Ex64Component.ɵfac = function Ex64Component_Factory(t) {
        return new (t || Ex64Component)();
      };

      Ex64Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex64Component,
        selectors: [["app-Ex64"]],
        decls: 22,
        vars: 0,
        consts: [["id", "aufgabe"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy", "target", "_blank"], ["href", "https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys", "target", "_blank"], ["href", "https://developer.mozilla.org/de/docs/Web/API/Console/assert", "target", "_blank"]],
        template: function Ex64Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "6.4. Proxy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Erweitern Sie Ihre Vorrang-Klasse um Logging, indem Sie ein ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Proxy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "einf\xFCgen. Lassen Sie sich vom Logger bei jedem Schritt ausgeben, wie viele der Vorrangrelationen noch \xFCbrig bleiben. Verwenden Sie so weit wie m\xF6glich High-Level-Methoden wie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Object.keys ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "und High-Level-Datenstrukturen wie Map und Set und deren Methoden, anstatt m\xFChsam von Hand zu iterieren und zu z\xE4hlen. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Geben Sie die HTML-Seite inkl. ES6-Code inkl. Tests hier ein. Verwenden Sie f\xFCr Ihre Tests die Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "console.assert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\tfunction topsort(array) {\n\n\n    var Knoten = [];\n    var pack = [];\n    var gesehen = [];\n\n    for (var k = 0; k < array.length; k++) {\n        if (Knoten.indexOf(array[k][0]) < 0) Knoten.push(array[k][0]);\n        if (Knoten.indexOf(array[k][1]) < 0) Knoten.push(array[k][1]);\n    }\n\n    Knoten.forEach(function (knote) {\n        if (gesehen.indexOf(knote) < 0) {\n            sort(knote);\n        }\n    });\n\n    function sort(knote) {\n        gesehen.push(knote);\n        array.forEach(function (Kante) {\n            if (gesehen.indexOf(Kante[1]) < 0 && Kante[0] == knote) {\n                sort(Kante[1]);\n            }\n        });\n        pack.push(knote);\n    }\n    return pack.reverse();\n}\n\nclass Vorrang {\n    [Symbol.iterator]() {\n        return this.array.values()\n    }\n    constructor(array) {\n        this.array = topsort(array);\n    }\n\n\n}\n\n\n\ntry {\n\n    var text = \"schlafen,studieren,essen,studieren,studieren,pr\xFCfen\";\n    console.log(text);\n\n    var array = text.split(\",\").map(String);\n    if ((array.length % 2) != 0) {\n        throw new Error(' Geben Sie bitte eine Komplette Vorrangrelationen');\n    }\n\n    var gfg = new Array(array.length / 2);\n\n\n    // Loop to create 2D array using 1D array\n    for (var i = 0; i < gfg.length; i++) {\n        gfg[i] = new Array(2);\n    }\n\n    var h = 0;\n\n    // Loop to initialize 2D array elements.\n    for (let i = 0; i < array.length / 2; i++) {\n        for (let j = 0; j < 2; j++) {\n            gfg[i][j] = array[h++];\n        }\n    }\n\n    const studentenLeben = new Vorrang(gfg);\n\n    var final = [];\n    for (const next of studentenLeben) {\n        final.push(next);\n    }\n\n    console.log(final);\n\n} catch (err) {\n\n    console.log(err.message);\n}\n\n\n\n\nconst studentenLeben = new Vorrang([\n    [\"schlafen\", \"studieren\"],\n    [\"essen\", \"studieren\"],\n    [\"studieren\", \"pr\xFCfen\"]\n]);\n\n//TEST\nconst arrayTest = new Vorrang([\n    [\"schlafen\", \"studieren\"],\n    [\"essen\", \"studieren\"],\n    [\"studieren\", \"pr\xFCfen\"]\n]);\nvar arrayfinal = [];\nfor (const next of arrayTest) {\n    arrayfinal.push(next);\n}\nvar ausgabe = [\"schlafen\", \"essen\", \"studieren\", \"pr\xFCfen\"];\nfor (let i = 0; i < arrayfinal.length; i++) {\n\n    console.assert(ausgabe[i] === arrayfinal[i], `diese beide Werte ${ausgabe[i]} und ${arrayfinal[i]} sind nicht gleich`);\n}\n\n\n//Proxy\n\nconst generator = new Proxy(studentenLeben.gen, {\n    apply(target, thisArg, argumentList) {\n        console.log(studentenLeben.getSize());\n        return target(studentenLeben);\n    }\n});\n\nwhile (true) {\n    tab = generator().next();\n    if (tab[\"done\"] !== false) {\n        break;\n    }\n    console.assert(final.includes(out[\"value\"]));\n    console.assert(ausgabe[0] === out[\"value\"]);\n    testArraySequence.splice(0, 1);\n} \n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  background-color: #689ef7;\n  color: white;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg2NC9FeDY0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXg2NC9FeDY0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4ZWN1dGUge1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICNhYmFiYWI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex64Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex64',
            templateUrl: './Ex64.component.html',
            styleUrls: ['./Ex64.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "dmor":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex13/Ex13.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex13Component */

    /***/
    function dmor(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex13Component", function () {
        return Ex13Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex13Component = /*#__PURE__*/function () {
        function Ex13Component() {
          _classCallCheck(this, Ex13Component);
        }

        _createClass(Ex13Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex13Component;
      }();

      Ex13Component.ɵfac = function Ex13Component_Factory(t) {
        return new (t || Ex13Component)();
      };

      Ex13Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex13Component,
        selectors: [["app-Ex13"]],
        decls: 75,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://www.w3schools.com/html/default.asp", "target", "_blank"], ["href", "https://wiki.selfhtml.org/wiki/HTML/Tutorials/HTML-Einstieg", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], [1, "Seite_html"]],
        template: function Ex13Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1.3. HTML-Literatur lesen und Fragen beantworten");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Arbeiten Sie ein HTML-Tutorial durch ( ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "W3 Schools");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " oder ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "selfhtml");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ) und beantworten Sie dazu folgende Fragen: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Was ist HTML?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "HTML ist HyperText Markup Sprache f\xFCr Webseiten.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Wie kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3 erzeugen? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "<!DOCTYPE html>\n<html>\n<body>\n\n<h2>geschachtelte geordnete </h2>\n<p>List:</p>\n\n<ol>\n <li>Erste Element</li>\n <li>Zweite Element\n  <ol>\n    <li>Schachtelungstiefe 1</li>\n    <ol>\n    <li>Schachtelungstiefe 2</li>\n\t</ol>\n   </ol>\n </li>\n <li>Dritte Element</li>\n</ol>\n\n</body>\n</html>\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wie ist eine HTML-Tabelle aufgebaut? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "<table >\n  <tr>\n    <th>Titel 1</th>\n    <th>Titel 2</th>\n  </tr>\n  <tr>\n    <td>Element des Titel 1</td>\n    <td>Element des Titel 2</td>\n  </tr>\n  <tr>\n     <td>Element des Titel 1</td>\n    <td>Element des Titel 2</td>\n  </tr>\n</table>\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Welche Konventionen sollte man bei Pfaden und Dateinamen beachten?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Es gibt spezielle Zeichen, die nicht verwendet werden d\xFCrfen, weil sie im Dateisystem eine Bedeutung haben. Dazu geh\xF6ren der Doppelpunkt und die Schr\xE4gstriche / und \\ als Trennzeichen f\xFCr Laufwerksbuchstaben und Ordner, und die Zeichen * und ? als Jokerzeichen in der Dateisuche. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Wie baut man in HTML ein Men\xFC?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "<div class=\"menu\">\n  <a href=\"#\" class=\"active\">Home</a>\n  <a href=\"#\">link 1</a>\n  <a href=\"#\">Link 2</a>\n  <a href=\"#\">Link 3</a>\n  <a href=\"#\">Link 4</a>\n</div>\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Welche Attribute sollte man bei Bildern wie verwenden?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "src attribute specifies the path (URL) to the image. alt attribute should describe the image. style,width and height attribute to specify the width and height of an image.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " QUELLCODE AUSF\xDCHRUNG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "execute A1 E3 F1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "geschachtelte geordnete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "List:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Erste Element");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Zweite Element ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Schachtelungstiefe 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Schachtelungstiefe 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Dritte Element");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 64%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgxMy9FeDEzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0EsV0FBQTs7QUFDQTtFQUNFLDZFQUFBO0VBQ0EsMEJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaWNlL0V4MTMvRXgxMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMzUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxufVxyXG5cclxuLlNlaXRlX2h0bWwge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxufVxyXG5cclxuI2F1c2Z1aHJlbiB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDM1LCA1Nik7XHJcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uZXhlY3V0ZSB7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggI2FiYWJhYjtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex13Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex13',
            templateUrl: './Ex13.component.html',
            styleUrls: ['./Ex13.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fvoq":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex31/Ex31.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex31Component */

    /***/
    function fvoq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex31Component", function () {
        return Ex31Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex31Component = /*#__PURE__*/function () {
        function Ex31Component() {
          _classCallCheck(this, Ex31Component);
        }

        _createClass(Ex31Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex31Component;
      }();

      Ex31Component.ɵfac = function Ex31Component_Factory(t) {
        return new (t || Ex31Component)();
      };

      Ex31Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex31Component,
        selectors: [["app-Ex31"]],
        decls: 28,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "http://flexboxfroggy.com/#de", "target", "_blank"], ["src", "https://kaul.inf.h-brs.de/we/assets/img/holy-grail1.png", 2, "max-width", "400px", "width", "100%"], [1, "rightpane"], ["id", "ausfuhren"], [1, "Seite_html"], [1, "body"], [1, "left"], [1, "right"]],
        template: function Ex31Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aufgabe 3.1. Responsiv mit Flexbox Desktop-First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Spielen Sie zun\xE4chst das Flexbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\"Froggy-Spiel\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", um Flexbox zu lernen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Implementieren Sie dann ausschlie\xDFlich mit HTML und CSS Flexbox folgendes responsive Webdesign nach der Desktop-First-Strategie! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " <!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset=\"ISO-8859-1\">\n        <title>Insert title here</title>\n        </head>\n        <style>\n        \n        *, ::after, ::before {\n          box-sizing: border-box;\n        }\n        \n         \n        \n        .container {\n          \n          max-width: 1400px; \n          display: flex;\n          flex-wrap: wrap;\n        }\n        \n        .column {\n          --columns: 12; \n        \n          --width: 0; \n            \n          border: LavenderBlush 5px solid;\n          border-radius: 20px;\n          padding: 16px;\n          flex-basis: calc(var(--width) / var(--columns) * 100%);\n        }\n        \n        @media screen and (max-width: 800px) {\n           aside.rechts { --width: 12; height: 10rem; }\n           nav.nav {  --width: 10;   }\n              main.links {  --width: 2;   }\n           \n           }\n          \n        @media screen and (max-width:600px) {\n           nav.nav { --width: 12;  }\n           main.links { --width:6; height:20rem; }\n           aside.rechts { --width:6; height:20rem; }\n           nav.nav { order: 1; }\n           main.links { order: 2; }\n           aside.rechts { order: 3; }\n           \n        }\n        \n        \n        .header {\n          --width: 12;\n            height: 8rem;\n            background-color: red;\n          \n        }\n        \n        .links {\n          --width: 2.5;\n          height: 64rem;\n            background-color: pink;\n          \n        }\n        \n        .nav {\n          --width: 7;\n              background-color: blue;\n            height: 64rem;\n          \n        }\n        \n        .rechts {\n          --width: 2.5;\n             background-color: lightgreen ;\n            height: 64rem;\n          \n        }\n        \n        \n        \n        </style>\n        \n        <body>\n        \n        \n          <div class=\"container\">\n            <header class=\"header column\">  </header>\n            <main class=\"links column\">  </main>\n                <nav class=\"nav column\">  </nav>\n            \n            <aside class=\"rechts column\"></aside>\n          </div>\n        \n        \n        </body>\n        </html>\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " QUELLCODE AUSF\xDCHRUNG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "body", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "aside", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "aside", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 64%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nheader[_ngcontent-%COMP%] {\n  grid-area: header;\n  background-color: red;\n}\n\nmain[_ngcontent-%COMP%] {\n  grid-area: main;\n  background-color: blue;\n}\n\naside.left[_ngcontent-%COMP%] {\n  grid-area: left;\n  background-color: lightgreen;\n}\n\naside.right[_ngcontent-%COMP%] {\n  grid-area: right;\n  background-color: pink;\n}\n\n.body[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 100vh;\n  height: 100vh;\n  grid-template-areas: \"header\" \"left\" \"main\" \"main\" \"right\";\n}\n\n@media screen and (min-width: 500px) {\n  .body[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"header header\" \"left main \" \"right right\";\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 150px 1fr 100px 30px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"header header header\" \"left main right\";\n    grid-template-columns: 150px 1fr 150px;\n    grid-template-rows: 100px 1fr 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgzMS9FeDMxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMERBQ0U7QUFKSjs7QUFhQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLCtEQUFBO0lBSUEsOEJBQUE7SUFDQSx3Q0FBQTtFQWJGO0FBQ0Y7O0FBaUJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkRBQUE7SUFFQSxzQ0FBQTtJQUNBLGtDQUFBO0VBaEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDMxL0V4MzEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMzUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZXhlY3V0ZSB7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggI2FiYWJhYjtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbmFzaWRlLmxlZnQge1xyXG4gIGdyaWQtYXJlYTogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG59XHJcblxyXG5hc2lkZS5yaWdodCB7XHJcbiAgZ3JpZC1hcmVhOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcImhlYWRlclwiXHJcbiAgICBcImxlZnRcIlxyXG4gICAgXCJtYWluXCJcclxuICAgIFwibWFpblwiXHJcbiAgICBcInJpZ2h0XCI7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgaGVhZGVyXCJcclxuICAgICAgXCJsZWZ0IG1haW4gXCJcclxuICAgICAgXCJyaWdodCByaWdodFwiXHJcbiAgICA7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IDFmciAxMDBweCAzMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmJvZHkge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcIlxyXG4gICAgICBcImxlZnQgbWFpbiByaWdodFwiO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxZnIgMTUwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAzMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex31Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex31',
            templateUrl: './Ex31.component.html',
            styleUrls: ['./Ex31.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gKVh":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex14/Ex14.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex14Component */

    /***/
    function gKVh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex14Component", function () {
        return Ex14Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex14Component = /*#__PURE__*/function () {
        function Ex14Component() {
          _classCallCheck(this, Ex14Component);
        }

        _createClass(Ex14Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex14Component;
      }();

      Ex14Component.ɵfac = function Ex14Component_Factory(t) {
        return new (t || Ex14Component)();
      };

      Ex14Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex14Component,
        selectors: [["app-Ex14"]],
        decls: 91,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "ub"], ["src", "https://kaul.inf.h-brs.de/we/assets/img/wireframe01.jpg", 2, "max-width", "400px", "width", "100%"], ["href", "https://kaul.inf.h-brs.de/we/assets/img/tbl.jpg", "target", "_blank"], ["href", "https://kaul.inf.h-brs.de/we/assets/img/eich.jpg", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], [1, "Seite_html"], ["cellpadding", "3"], ["colspan", "4"], ["colspan", "2"], ["src", "https://kaul.inf.h-brs.de/we/assets/img/tbl.jpg"], ["src", "https://kaul.inf.h-brs.de/we/assets/img/eich.jpg"]],
        template: function Ex14Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1.4. HTML Wireframe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gegeben ist folgendes HTML-Wireframe:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Mit welchem HTML-Code (ohne CSS, nur mit HTML-Tags) kann man diesen Wireframe exakt nachbilden? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Die beiden Bilder finden Sie z.B. unter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " TBL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "und ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Eich.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n  <!DOCTYPE html>\n  <html>\n  <body>\n  \n  <h1 >\xDCbung1.2: Inventors of the Web</h1>\n  <ul  >\n    <li> <b><u><mark> Tim Berners-Lee:</mark></u></b> WWW,HTTP,HTML,URI </li>\n    <li><b>Hakom lie and Bert Bos:</b>CSS</li>\n    <li><b>Brendan Eich:</b>JavaScript</li>\n  </ul>  \n  <hr>\n  <h2>Inventors of the WWW</h2>\n\n  <table  border=\"10\"  cellpadding=\"3\" align=\"center\" >\n   <thead>\n    <th  colspan=\"4\"> Inventors of the Web  </th>\n  </thead>\n  <tr>\n    <th>WWW</th>\n    <th>HTML</th>\n    <th>CSS</th>\n    <th>JavaScript</th>\n\n  </tr>\n  <tr>\n    <td bgcolor=\"yellow\"><b>Tim Berners-Lee</b></td>\n    <td bgcolor=\"yellow\"><b>Tim Berners-Lee</b></td>\n    <td>Hakom lie and Bert Bos</td>\n    <td>Brendan Eich </td>\n\n  </tr>\n </table>\n <hr>\n\n\n\n <table  >\n  <tr>\n    <th colspan=\"2\" ><font size=\"5pt\"><u>Inventors of the WWW</u> </th> \n  </tr>\n\n  <tr>  \n    <th>HTML</th>\n    <th>JavaScript  </th>\n  </tr>\n  <tr>\n    <td ><img src=\"https://kaul.inf.h-brs.de/we/assets/img/tbl.jpg\"></td>\n    <td><img src=\"https://kaul.inf.h-brs.de/we/assets/img/eich.jpg\"></td>\n  </tr>\n  <tr>\n    <td>Tim Berners-Lee</td>\n    <td>Brendan Eich </td>\n  </tr>\n </table>\n\n </body>\n </html>\n\n\n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " QUELLCODE AUSF\xDCHRUNG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\xDCbung1.2: Inventors of the Web");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "u");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Tim Berners-Lee:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " WWW,HTTP,HTML,URI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Hakom lie and Bert Bos:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "CSS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Brendan Eich:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "JavaScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Inventors of the WWW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Inventors of the Web ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "WWW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "HTML");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "CSS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "JavaScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Tim Berners-Lee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Tim Berners-Lee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Hakom lie and Bert Bos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Brendan Eich ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "u");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Inventors of the WWW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "HTML");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "JavaScript ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Tim Berners-Lee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Brendan Eich ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 64%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n#ub[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgxNC9FeDE0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0EsV0FBQTs7QUFDQTtFQUNFLDZFQUFBO0VBQ0EsMEJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaWNlL0V4MTQvRXgxNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pZGRsZXBhbmUge1xyXG4gIHdpZHRoOiA2NCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFmZGZmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5yaWdodHBhbmUge1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcblxyXG5cclxufVxyXG5cclxuLlNlaXRlX2h0bWwge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxufVxyXG5cclxuI2F1c2Z1aHJlbiB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDM1LCA1Nik7XHJcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3ViIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmV4ZWN1dGUge1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICNhYmFiYWI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNlM2ZjZGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex14Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex14',
            templateUrl: './Ex14.component.html',
            styleUrls: ['./Ex14.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hHlX":
    /*!************************************************!*\
      !*** ./src/app/exercice/exercice.component.ts ***!
      \************************************************/

    /*! exports provided: ExerciceComponent */

    /***/
    function hHlX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExerciceComponent", function () {
        return ExerciceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../nav-bar/nav-bar.component */
      "5hVl");

      var ExerciceComponent = /*#__PURE__*/function () {
        function ExerciceComponent(_router) {
          _classCallCheck(this, ExerciceComponent);

          this._router = _router;
        }

        _createClass(ExerciceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sheet1 = true;

            this._router.navigate(['exercice/aboutMe']);
          }
        }, {
          key: "sheet1clicked",
          value: function sheet1clicked() {
            this.sheet1 = true;
            this.sheet2 = false;
            this.sheet3 = false;
            this.sheet4 = false;
            this.sheet5 = false;
            this.sheet6 = false;
            this.sheet7 = false;
            this.sheet8 = false;
            this.sheet9 = false;
            this.sheet10 = false;
            this.sheet11 = false;
          }
        }, {
          key: "sheet2clicked",
          value: function sheet2clicked() {
            this.sheet1 = false;
            this.sheet2 = true;
            this.sheet3 = false;
            this.sheet4 = false;
            this.sheet5 = false;
            this.sheet6 = false;
            this.sheet7 = false;
            this.sheet8 = false;
            this.sheet9 = false;
            this.sheet10 = false;
            this.sheet11 = false;
          }
        }, {
          key: "sheet3clicked",
          value: function sheet3clicked() {
            this.sheet1 = false;
            this.sheet2 = false;
            this.sheet3 = true;
            this.sheet4 = false;
            this.sheet5 = false;
            this.sheet6 = false;
            this.sheet7 = false;
            this.sheet8 = false;
            this.sheet9 = false;
            this.sheet10 = false;
            this.sheet11 = false;
          }
        }, {
          key: "sheet4clicked",
          value: function sheet4clicked() {
            this.sheet1 = false;
            this.sheet2 = false;
            this.sheet3 = false;
            this.sheet4 = true;
            this.sheet5 = false;
            this.sheet6 = false;
            this.sheet7 = false;
            this.sheet8 = false;
            this.sheet9 = false;
            this.sheet10 = false;
            this.sheet11 = false;
          }
        }, {
          key: "sheet5clicked",
          value: function sheet5clicked() {
            this.sheet1 = false;
            this.sheet2 = false;
            this.sheet3 = false;
            this.sheet4 = false;
            this.sheet5 = true;
            this.sheet6 = false;
            this.sheet7 = false;
            this.sheet8 = false;
            this.sheet9 = false;
            this.sheet10 = false;
            this.sheet11 = false;
          }
        }, {
          key: "sheet6clicked",
          value: function sheet6clicked() {
            this.sheet1 = false;
            this.sheet2 = false;
            this.sheet3 = false;
            this.sheet4 = false;
            this.sheet5 = false;
            this.sheet6 = true;
            this.sheet7 = false;
            this.sheet8 = false;
            this.sheet9 = false;
            this.sheet10 = false;
            this.sheet11 = false;
          }
        }, {
          key: "sheet7clicked",
          value: function sheet7clicked() {
            this.sheet1 = false;
            this.sheet2 = false;
            this.sheet3 = false;
            this.sheet4 = false;
            this.sheet5 = false;
            this.sheet6 = false;
            this.sheet7 = true;
            this.sheet8 = false;
            this.sheet9 = false;
            this.sheet10 = false;
            this.sheet11 = false;
          }
        }, {
          key: "sheet8clicked",
          value: function sheet8clicked() {
            this.sheet1 = false;
            this.sheet2 = false;
            this.sheet3 = false;
            this.sheet4 = false;
            this.sheet5 = false;
            this.sheet6 = false;
            this.sheet7 = false;
            this.sheet8 = true;
            this.sheet9 = false;
            this.sheet10 = false;
            this.sheet11 = false;
          }
        }, {
          key: "sheet9clicked",
          value: function sheet9clicked() {
            this.sheet1 = false;
            this.sheet2 = false;
            this.sheet3 = false;
            this.sheet4 = false;
            this.sheet5 = false;
            this.sheet6 = false;
            this.sheet7 = false;
            this.sheet8 = false;
            this.sheet9 = true;
            this.sheet10 = false;
            this.sheet11 = false;
          }
        }, {
          key: "sheet10clicked",
          value: function sheet10clicked() {
            this.sheet1 = false;
            this.sheet2 = false;
            this.sheet3 = false;
            this.sheet4 = false;
            this.sheet5 = false;
            this.sheet6 = false;
            this.sheet7 = false;
            this.sheet8 = false;
            this.sheet9 = false;
            this.sheet10 = true;
            this.sheet11 = false;
          }
        }, {
          key: "sheet11clicked",
          value: function sheet11clicked() {
            this.sheet1 = false;
            this.sheet2 = false;
            this.sheet3 = false;
            this.sheet4 = false;
            this.sheet5 = false;
            this.sheet6 = false;
            this.sheet7 = false;
            this.sheet8 = false;
            this.sheet9 = false;
            this.sheet10 = false;
            this.sheet11 = true;
          }
        }]);

        return ExerciceComponent;
      }();

      ExerciceComponent.ɵfac = function ExerciceComponent_Factory(t) {
        return new (t || ExerciceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ExerciceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExerciceComponent,
        selectors: [["app-exercice"]],
        outputs: {
          sheet1: "sheet1",
          sheet2: "sheet2",
          sheet3: "sheet3",
          sheet4: "sheet4",
          sheet5: "sheet5",
          sheet6: "sheet6",
          sheet7: "sheet7",
          sheet8: "sheet8",
          sheet9: "sheet9",
          sheet10: "sheet10",
          sheet11: "sheet11"
        },
        decls: 34,
        vars: 11,
        consts: [[1, "container"], [1, "toppane"], ["routerLink", "/exercice/aboutMe", 1, "aboutme"], ["src", "https://upload.wikimedia.org/wikipedia/commons/8/83/HochschuleB-R-S.svg", "id", "logo"], ["id", "title1"], [1, "toppanedown"], [1, "navbt", 3, "click"], [1, "leftpane"], [3, "sheet1", "sheet2", "sheet3", "sheet4", "sheet5", "sheet6", "sheet7", "sheet8", "sheet9", "sheet10", "sheet11"], [1, "rightpane"]],
        template: function ExerciceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u27A5About Me !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Einf\xFChrung in Web Engineering ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_8_listener() {
              return ctx.sheet1clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1.Einf\xFChrung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_10_listener() {
              return ctx.sheet2clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2.CSS Teil I");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_12_listener() {
              return ctx.sheet3clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3.CSS Teil II");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_14_listener() {
              return ctx.sheet4clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4.JavaScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_16_listener() {
              return ctx.sheet5clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5.DOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_18_listener() {
              return ctx.sheet6clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "6.ECMAScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_20_listener() {
              return ctx.sheet7clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "7.Functional");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_22_listener() {
              return ctx.sheet8clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "8.Async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_24_listener() {
              return ctx.sheet9clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "9.SVG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_26_listener() {
              return ctx.sheet10clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "10.TypeScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExerciceComponent_Template_button_click_28_listener() {
              return ctx.sheet11clicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "11.1 PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-nav-bar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sheet1", ctx.sheet1)("sheet2", ctx.sheet2)("sheet3", ctx.sheet3)("sheet4", ctx.sheet4)("sheet5", ctx.sheet5)("sheet6", ctx.sheet6)("sheet7", ctx.sheet7)("sheet8", ctx.sheet8)("sheet9", ctx.sheet9)("sheet10", ctx.sheet10)("sheet11", ctx.sheet11);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 0.9fr 0.9fr 1fr 1fr;\n  grid-template-rows: 0.9fr 0.5fr 1.6fr;\n  gap: 4px 0px;\n  grid-template-areas:\n    \"toppane toppane toppane toppane\"\n    \"toppanedown toppanedown toppanedown toppanedown\"\n    \"leftpane rightpane rightpane rightpane\";\n}\n\n.toppane[_ngcontent-%COMP%] {\n  grid-area: toppane;\n}\n\n.toppanedown[_ngcontent-%COMP%] {\n  grid-area: toppanedown;\n}\n\n.leftpane[_ngcontent-%COMP%] {\n  grid-area: leftpane;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  grid-area: rightpane;\n}\n\n.leftpane[_ngcontent-%COMP%] {\n  width: 16%;\n  float: left;\n  background-image: linear-gradient(rgb(96, 123, 245), #FFFFFF);\n  margin-left: -7px;\n  padding-left: 0.02%;\n  position: absolute;\n  top: 262px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 1702px;\n  position: absolute;\n  float: right;\n  background-color: #4ee6ee;\n  border-style: solid;\n  border-width: 1px;\n  left: 326px;\n  top: 264px;\n\n}\n\n.toppane[_ngcontent-%COMP%] {\n  height: 176PX;\n  border-collapse: collapse;\n  background-image: linear-gradient(#FFFFFF, rgb(96, 123, 245));\n  margin-left: -7px;\n  margin-right: -7px;\n}\n\n.toppanedown[_ngcontent-%COMP%] {\n  width: 2029px;\n  height: 8%;\n  background-color: rgb(96, 123, 245);\n  margin-left: -7px;\n  position: absolute;\n  top: 184px;\n}\n\n#logo[_ngcontent-%COMP%] {\n  width: 17%;\n  height: 43%;\n  opacity: 80%;\n}\n\n.aboutme[_ngcontent-%COMP%] {\n  left: 90%;\n  box-shadow: 0px 12px 12px -7px #3e7327;\n  background: linear-gradient(to bottom, #77b55a 5%, #72b352 100%);\n  border-radius: 4px;\n  border: 1px solid #4b8f29;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 6px 37px;\n  text-decoration: none;\n  text-shadow: -1px -1px 50px #5b8a3c;\n  position: absolute;\n\n}\n\n.aboutme[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to bottom, #72b352 5%, #77b55a 100%);\n  background-color: #72b352;\n}\n\n.aboutme[_ngcontent-%COMP%]:active {\n  transform: translateY(8px);\n}\n\n#aboutme[_ngcontent-%COMP%]:active {\n  background-color: rgb(144, 130, 219);\n  color: white;\n  box-shadow: 0 12px 16px 0 rgba(37, 50, 231, 0.24), 0 17px 50px 0 rgba(108, 120, 228, 0.19);\n  transform: translateY(8px);\n}\n\n#title1[_ngcontent-%COMP%] {\n  width: auto;\n  padding-left: 30%;\n  color: #CEF0D4;\n  font-family: 'Rouge Script', cursive;\n  font-size: 50px;\n  line-height: 108px;\n  margin: 9px 0 -50px;\n  text-shadow: 1px 1px 2px #082b34;\n}\n\n.navbt[_ngcontent-%COMP%] {\n  background-color: rgb(96, 123, 245);\n  color: white;\n  padding: 25px;\n  border: none;\n  font-family: \"Trebuchet MS\";\n  font-size: 18px;\n  position: relative;\n  left: 16%;\n  top: 16%;\n}\n\n.navbt[_ngcontent-%COMP%]:hover {\n  background-color: rgb(228, 206, 167);\n  color: rgb(0, 26, 255)\n}\n\n.navbt[_ngcontent-%COMP%]:active {\n  transform: translateY(-8px);\n\n}\n\n@media screen and (max-width: 1900px) {\n  .toppanedown[_ngcontent-%COMP%] {\n    top: 157px;\n    height: 10%;\n    width: 1347px;\n    margin-left: -7px;\n  }\n\n  .aboutme[_ngcontent-%COMP%] {\n    left: 86%;\n  }\n\n  #logo[_ngcontent-%COMP%] {\n    width: 24%;\n  }\n\n  .navbt[_ngcontent-%COMP%] {\n    padding: 19px;\n    font-size: 17px;\n    left: 3%;\n    top: 6%;\n  }\n\n\n  .leftpane[_ngcontent-%COMP%] {\n    width: 19%;\n    top: 219px;\n  }\n\n  #title1[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 46px;\n  }\n\n  .rightpane[_ngcontent-%COMP%] {\n    width: 1088px;\n    left: 258px;\n    top: 219px;\n  }\n\n  .toppane[_ngcontent-%COMP%] {\n    height: 149PX;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 0.7fr 1.3fr 1fr 1fr 1fr;\n    grid-template-rows: 0.3fr 0.2fr 1.3fr;\n    gap: 4px 0px;\n    grid-template-areas:\n      \"toppane toppane toppane toppane toppane\"\n      \"leftpane leftpane leftpane leftpane leftpane\"\n      \"toppanedown rightpane rightpane rightpane rightpane\";\n  }\n\n  .toppane[_ngcontent-%COMP%] {\n    grid-area: toppane;\n  }\n\n  .toppanedown[_ngcontent-%COMP%] {\n    grid-area: toppanedown;\n    height: 356%;\n    background-image: linear-gradient(rgb(96, 123, 245), #FFFFFF);\n  }\n\n  .leftpane[_ngcontent-%COMP%] {\n    grid-area: leftpane;\n  }\n\n  .rightpane[_ngcontent-%COMP%] {\n    grid-area: rightpane;\n  }\n\n  #title1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .toppane[_ngcontent-%COMP%] {\n    top: -1%;\n    position: absolute;\n    width: 385px;\n    left: 8px;\n  }\n\n  #logo[_ngcontent-%COMP%] {\n    width: 54%;\n  }\n\n\n  .aboutme[_ngcontent-%COMP%] {\n    padding: 5px 7px;\n    left: 74%;\n    font-size: 12px;\n    top: 21px;\n  }\n\n  #title1[_ngcontent-%COMP%] {\n    margin: 9px -48px;\n    font-size: 18px;\n  }\n\n  .rightpane[_ngcontent-%COMP%] {\n    width: 278px;\n    left: 104px;\n    top: 187px;\n  }\n\n  .navbt[_ngcontent-%COMP%] {\n    font-size: 10px;\n    width: 97%;\n    padding: 19px;\n    top: 1px;\n    left: 3%;\n  }\n\n\n\n  .toppanedown[_ngcontent-%COMP%] {\n    top: -41px;\n    height: 410%;\n    left: 52px;\n    width: 103px;\n    margin-left: -59px;\n    position: relative;\n    background-image: linear-gradient(rgb(96, 123, 245), #FFFFFF);\n  }\n\n  .leftpane[_ngcontent-%COMP%] {\n    width: 385px;\n    top: 139px;\n    left: 8px;\n    background-image: linear-gradient(rgb(96, 123, 245), rgb(96, 123, 245));\n    height: 48px;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvZXhlcmNpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaOzs7NENBRzBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUdBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCw2REFBNkQ7RUFDN0QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDZEQUE2RDtFQUM3RCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBSUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsZ0VBQWdFO0VBQ2hFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsZ0VBQWdFO0VBQ2hFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osMEZBQTBGO0VBQzFGLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBSUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQztBQUNGOztBQUVBO0VBQ0UsMkJBQTJCOztBQUU3Qjs7QUFJQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixRQUFRO0lBQ1IsT0FBTztFQUNUOzs7RUFHQTtJQUNFLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaOzs7MkRBR3VEO0VBQ3pEOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw2REFBNkQ7RUFDL0Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztFQUNYOztFQUVBO0lBQ0UsVUFBVTtFQUNaOzs7RUFHQTtJQUNFLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZTtJQUNmLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtFQUNWOzs7O0VBSUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw2REFBNkQ7RUFDL0Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCx1RUFBdUU7SUFDdkUsWUFBWTtFQUNkOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvZXhlcmNpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOWZyIDAuOWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC45ZnIgMC41ZnIgMS42ZnI7XG4gIGdhcDogNHB4IDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcInRvcHBhbmUgdG9wcGFuZSB0b3BwYW5lIHRvcHBhbmVcIlxuICAgIFwidG9wcGFuZWRvd24gdG9wcGFuZWRvd24gdG9wcGFuZWRvd24gdG9wcGFuZWRvd25cIlxuICAgIFwibGVmdHBhbmUgcmlnaHRwYW5lIHJpZ2h0cGFuZSByaWdodHBhbmVcIjtcbn1cblxuLnRvcHBhbmUge1xuICBncmlkLWFyZWE6IHRvcHBhbmU7XG59XG5cbi50b3BwYW5lZG93biB7XG4gIGdyaWQtYXJlYTogdG9wcGFuZWRvd247XG59XG5cbi5sZWZ0cGFuZSB7XG4gIGdyaWQtYXJlYTogbGVmdHBhbmU7XG59XG5cbi5yaWdodHBhbmUge1xuICBncmlkLWFyZWE6IHJpZ2h0cGFuZTtcbn1cblxuXG4ubGVmdHBhbmUge1xuICB3aWR0aDogMTYlO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig5NiwgMTIzLCAyNDUpLCAjRkZGRkZGKTtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIHBhZGRpbmctbGVmdDogMC4wMiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNjJweDtcbn1cblxuLnJpZ2h0cGFuZSB7XG4gIHdpZHRoOiAxNzAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVlNmVlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgbGVmdDogMzI2cHg7XG4gIHRvcDogMjY0cHg7XG5cbn1cblxuLnRvcHBhbmUge1xuICBoZWlnaHQ6IDE3NlBYO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI0ZGRkZGRiwgcmdiKDk2LCAxMjMsIDI0NSkpO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAtN3B4O1xufVxuXG4udG9wcGFuZWRvd24ge1xuICB3aWR0aDogMjAyOXB4O1xuICBoZWlnaHQ6IDglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDEyMywgMjQ1KTtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxODRweDtcbn1cblxuXG5cbiNsb2dvIHtcbiAgd2lkdGg6IDE3JTtcbiAgaGVpZ2h0OiA0MyU7XG4gIG9wYWNpdHk6IDgwJTtcbn1cblxuLmFib3V0bWUge1xuICBsZWZ0OiA5MCU7XG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDEycHggLTdweCAjM2U3MzI3O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzdiNTVhIDUlLCAjNzJiMzUyIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YjhmMjk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNnB4IDM3cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCA1MHB4ICM1YjhhM2M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxufVxuXG4uYWJvdXRtZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3MmIzNTIgNSUsICM3N2I1NWEgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MmIzNTI7XG59XG5cbi5hYm91dG1lOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xufVxuXG4jYWJvdXRtZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAxMzAsIDIxOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDM3LCA1MCwgMjMxLCAwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDEwOCwgMTIwLCAyMjgsIDAuMTkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbn1cblxuI3RpdGxlMSB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgY29sb3I6ICNDRUYwRDQ7XG4gIGZvbnQtZmFtaWx5OiAnUm91Z2UgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogMTA4cHg7XG4gIG1hcmdpbjogOXB4IDAgLTUwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMDgyYjM0O1xufVxuXG5cblxuLm5hdmJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCAxMjMsIDI0NSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE2JTtcbiAgdG9wOiAxNiU7XG59XG5cbi5uYXZidDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIwNiwgMTY3KTtcbiAgY29sb3I6IHJnYigwLCAyNiwgMjU1KVxufVxuXG4ubmF2YnQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xuXG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTAwcHgpIHtcbiAgLnRvcHBhbmVkb3duIHtcbiAgICB0b3A6IDE1N3B4O1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiAxMzQ3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIH1cblxuICAuYWJvdXRtZSB7XG4gICAgbGVmdDogODYlO1xuICB9XG5cbiAgI2xvZ28ge1xuICAgIHdpZHRoOiAyNCU7XG4gIH1cblxuICAubmF2YnQge1xuICAgIHBhZGRpbmc6IDE5cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxlZnQ6IDMlO1xuICAgIHRvcDogNiU7XG4gIH1cblxuXG4gIC5sZWZ0cGFuZSB7XG4gICAgd2lkdGg6IDE5JTtcbiAgICB0b3A6IDIxOXB4O1xuICB9XG5cbiAgI3RpdGxlMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDZweDtcbiAgfVxuXG4gIC5yaWdodHBhbmUge1xuICAgIHdpZHRoOiAxMDg4cHg7XG4gICAgbGVmdDogMjU4cHg7XG4gICAgdG9wOiAyMTlweDtcbiAgfVxuXG4gIC50b3BwYW5lIHtcbiAgICBoZWlnaHQ6IDE0OVBYO1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDEuM2ZyIDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgMC4yZnIgMS4zZnI7XG4gICAgZ2FwOiA0cHggMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcInRvcHBhbmUgdG9wcGFuZSB0b3BwYW5lIHRvcHBhbmUgdG9wcGFuZVwiXG4gICAgICBcImxlZnRwYW5lIGxlZnRwYW5lIGxlZnRwYW5lIGxlZnRwYW5lIGxlZnRwYW5lXCJcbiAgICAgIFwidG9wcGFuZWRvd24gcmlnaHRwYW5lIHJpZ2h0cGFuZSByaWdodHBhbmUgcmlnaHRwYW5lXCI7XG4gIH1cblxuICAudG9wcGFuZSB7XG4gICAgZ3JpZC1hcmVhOiB0b3BwYW5lO1xuICB9XG5cbiAgLnRvcHBhbmVkb3duIHtcbiAgICBncmlkLWFyZWE6IHRvcHBhbmVkb3duO1xuICAgIGhlaWdodDogMzU2JTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDk2LCAxMjMsIDI0NSksICNGRkZGRkYpO1xuICB9XG5cbiAgLmxlZnRwYW5lIHtcbiAgICBncmlkLWFyZWE6IGxlZnRwYW5lO1xuICB9XG5cbiAgLnJpZ2h0cGFuZSB7XG4gICAgZ3JpZC1hcmVhOiByaWdodHBhbmU7XG4gIH1cblxuICAjdGl0bGUxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAudG9wcGFuZSB7XG4gICAgdG9wOiAtMSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzODVweDtcbiAgICBsZWZ0OiA4cHg7XG4gIH1cblxuICAjbG9nbyB7XG4gICAgd2lkdGg6IDU0JTtcbiAgfVxuXG5cbiAgLmFib3V0bWUge1xuICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgbGVmdDogNzQlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0b3A6IDIxcHg7XG4gIH1cblxuICAjdGl0bGUxIHtcbiAgICBtYXJnaW46IDlweCAtNDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAucmlnaHRwYW5lIHtcbiAgICB3aWR0aDogMjc4cHg7XG4gICAgbGVmdDogMTA0cHg7XG4gICAgdG9wOiAxODdweDtcbiAgfVxuXG4gIC5uYXZidCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHdpZHRoOiA5NyU7XG4gICAgcGFkZGluZzogMTlweDtcbiAgICB0b3A6IDFweDtcbiAgICBsZWZ0OiAzJTtcbiAgfVxuXG5cblxuICAudG9wcGFuZWRvd24ge1xuICAgIHRvcDogLTQxcHg7XG4gICAgaGVpZ2h0OiA0MTAlO1xuICAgIGxlZnQ6IDUycHg7XG4gICAgd2lkdGg6IDEwM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTlweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig5NiwgMTIzLCAyNDUpLCAjRkZGRkZGKTtcbiAgfVxuXG4gIC5sZWZ0cGFuZSB7XG4gICAgd2lkdGg6IDM4NXB4O1xuICAgIHRvcDogMTM5cHg7XG4gICAgbGVmdDogOHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoOTYsIDEyMywgMjQ1KSwgcmdiKDk2LCAxMjMsIDI0NSkpO1xuICAgIGhlaWdodDogNDhweDtcbiAgfVxuXG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-exercice',
            templateUrl: './exercice.component.html',
            styleUrls: ['./exercice.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          sheet1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet5: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet6: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet7: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet8: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet9: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet10: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          sheet11: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "i8P/":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex42/Ex42.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex42Component */

    /***/
    function i8P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex42Component", function () {
        return Ex42Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex42Component = /*#__PURE__*/function () {
        function Ex42Component() {
          _classCallCheck(this, Ex42Component);
        }

        _createClass(Ex42Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex42Component;
      }();

      Ex42Component.ɵfac = function Ex42Component_Factory(t) {
        return new (t || Ex42Component)();
      };

      Ex42Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex42Component,
        selectors: [["app-Ex42"]],
        decls: 13,
        vars: 0,
        consts: [["id", "aufgabe"]],
        template: function Ex42Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aufgabe 4.2. Objekte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Schreiben Sie die Prototypen Person und Auto in JavaScript, so dass jede Person wei\xDF, welche Autos sie besitzt. Schreiben Sie eine Funktion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " conflict()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", die feststellt, ob ein Auto von mehr als einer Person besessen wird.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "    function Person(name, autos) {\n        this.name = name;\n        this.autos = autos;\n    }\n    \n    function Auto(matrikel) {\n        this.matrikel = matrikel;\n    }\n    \n    function conflict(listPersons, auto) {\n        var besitzer = 0;\n        listPersons.forEach((per)=>{\n           if (per.autos.includes(auto.matrikel)) {\n               besitzer++;\n           }\n        })  \n    \n        if(besitzer > 1) \n        console.log(\"Das Auto mit der kennzeichen \"+ auto.matrikel + \" hat Mehrere besitzer\");\n        else\n         console.log(\"Das Auto mit der kennzeichen \"+ auto.matrikel + \"  hat ein oder kein besitzer\");\n    }\n    \n    var persons = [new Person(\"omar\", [\"11\", \"10\", \"12\"]), new Person(\"guella\", [\"11\", \"2\", \"3\"])]\n    var auto = new Auto(\"11\");\n    \n    conflict(persons, auto);\n    \n    \n    }\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg0Mi9FeDQyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXg0Mi9FeDQyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG5cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4OWVmNztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcblxyXG4vKlczc2Nob29sKi9cclxuLmV4ZWN1dGU6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex42Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex42',
            templateUrl: './Ex42.component.html',
            styleUrls: ['./Ex42.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "iD1+":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex71/Ex71.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex71Component */

    /***/
    function iD1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex71Component", function () {
        return Ex71Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex71Component = /*#__PURE__*/function () {
        function Ex71Component() {
          _classCallCheck(this, Ex71Component);
        }

        _createClass(Ex71Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex71Component;
      }();

      Ex71Component.ɵfac = function Ex71Component_Factory(t) {
        return new (t || Ex71Component)();
      };

      Ex71Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex71Component,
        selectors: [["app-Ex71"]],
        decls: 186,
        vars: 0,
        consts: [["id", "aufgabe"], [2, "color", "#ff0000"]],
        template: function Ex71Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "7.1 Funktionen in JavaScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Schreiben Sie eine Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "identity_function()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " die ein Argument als Parameter entgegennimmt und eine Funktion zur\xFCckgibt, die dieses Argument zur\xFCckgibt. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "    function identity(x){\n      return x;\n  }\n  \n  function identity_function(y){\n      return(identity(y));\n  }\nconsole.log(identity_function(3));\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Schreiben Sie eine Addier-Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "addf()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ", so dass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "addf(x)(y)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " genau ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "x + y ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "zur\xFCck gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " addf(x)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " liefert eine Funktion, die auf ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "y");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " angewandt wird.) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "    function addf (x) {\nreturn function (y) {\nreturn x+y;\n}\n}\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Schreiben Sie eine Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "applyf()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ", die aus einer bin\xE4ren Funktion wie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "add(x,y)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " eine Funktion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "addf ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "berechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "addf = applyf(add)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "addf(x)(y)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " soll ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "add(x,y)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " liefern. Entsprechend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " applyf(mul)(5)(6) soll 30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " liefern, wenn mul die bin\xE4re Multiplikation ist. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "   function add(x,y) {\n\u2003 return x+y;\n}\n\nfunction mul(x,y) {\n\u2003 return x*y;\n}\n\nfunction applyf(f){\nreturn function(x){\nreturn function(y){\nreturn f(x,y);\n}\n}\n}\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Schreiben Sie eine Funktion curry() (von Currying), die eine bin\xE4re Funktion und ein Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. add3 = curry(add, 3);add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "  function curry(f, x){\nreturn function(y){\nreturn f(x,y);\n}\n}\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben, ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und l\xE4sst sich nat\xFCrlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten der inc()-Implementierung zu schreiben?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "function curry(f, x){\nreturn f(x,1) \n}\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Schreiben Sie eine Funktion methodize(), die eine bin\xE4re Funktion (z.B. add, mul) in eine un\xE4re Methode verwandelt. Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "function methodize(f){\nreturn function(x){\nreturn f(this,x);\n}\n}\n\nNumber.prototype.add = methodize(add); \n\nconsole.log((3).add(4));\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Schreiben Sie eine Funktion methodize(), die eine bin\xE4re Funktion (z.B. add, mul) in eine un\xE4re Methode verwandelt. Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "function demethodize(f) {\nreturn (function(x, y) {\n  return f(x, y);\n});\n}\nNumber.prototype.add = add;\nconsole.log(demethodize(Number.prototype.add)(5, 6));\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Schreiben Sie eine Funktion twice(), die eine bin\xE4re Funktion in eine un\xE4re Funktion umwandelt, die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "function twice(f) {\nreturn (function(x) {\n  return f(x,x);\n});\n}\nvar double = twice(add);\nvar square = twice(mul);\nconsole.log(double(11));\nconsole.log(square(11));\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Schreiben Sie eine Funktion composeu(), die zwei un\xE4re Funktionen in eine einzelne un\xE4re Funktion transformiert, die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "function twice(f) {\nreturn (function(x) {\n  return f(x,x);\n});\n}\nvar double = twice(add);\nvar square = twice(mul);\n\nfunction composeu(d,s) {\nreturn (function(x) {\n  return s(d(x));\n});\n}\nconsole.log(composeu(double, square)(3));\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Schreiben Sie eine Funktion composeb(), die zwei bin\xE4re Funktionen in eine einzelne Funktion transformiert, die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "function composeb(f,m) {\nreturn (function(a, b, c) {\n  return m(c, f(b, a));\n});\n}\nconsole.log(composeb(add, mul)(2, 3, 5));\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden, z.B. a dd_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "function once(f) {\nvar check = false;\nreturn function(a,b) {\n  if(check) {\n    return (\"Fehlerabbruch \");\n  } else {\n  check=true;\n  return f(a,b)\n  }\n}\n}\n\nadd_once = once(add);\nconsole.log(add_once(3, 4));\nconsole.log(add_once(3, 4));\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Schreiben Sie eine Fabrik-Funktion counterf(), die zwei Funktionen inc() und dec() berechnet, die einen Z\xE4hler hoch- und herunterz\xE4hlen. Z.B. counter = counterf(10); Dann soll counter.inc() 11 und counter.dec() wieder 10 ergeben.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "function counterf(x) {\nreturn {\n  inc: () => { return ++x; },\n  dec: () => { return --x; }\n};\n}\n\ncounter = counterf(10);\n\nconsole.log(counter.inc());\nconsole.log(counter.dec());\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Schreiben Sie eine r\xFCcknehmbare Funktion revocable(), die als Parameter eine Funktion nimmt und diese bei Aufruf ausf\xFChrt. Sobald die Funktion aber mit revoke() zur\xFCck genommen wurde, f\xFChrt ein erneuter Aufruf zu einem Fehler. Z.B. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "temp = revocable(alert); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " temp.invoke(7); // f\xFChrt zu alert(7);");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " temp.revoke();");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " temp.invoke(8); // Fehlerabbruch!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "QUELLCODE: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "function revocable(f) {\nreturn {\n  isRevok: false,\n  invoke: (a) => {\n    if(!this.isRevok) {\n      f(a);\n    } else {\n      return (\"Sie M\xFCssen revoke machen\");\n    }\n  },\n  revoke: () => {\n    this.isRevok = true;\n  }\n};\n}\ntemp = revocable(add);\ntemp.invoke(7); // f\xFChrt zu alert(7);\ntemp.revoke();\nconsole.log(temp.invoke(8));\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Implementieren Sie ein \"Array Wrapper\"-Objekt mit den Methoden get, store und append, so dass ein Angreifer keinen Zugriff auf das innere, private Array hat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " my_vector = vector();");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " my_vector.append(7);");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " my_vector.store(1, 8);");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " my_vector.get(0) // 7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " my_vector.get(1) // 8 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Geben Sie den JavaScript-Quelltext an: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " function add(x, y) {\n\u2003 return x+y;\n}\nfunction mul(x, y) {\n\u2003 return x*y;\n}\nfunction vector() {\nlet v=[];\nreturn {\n  append:(x) => { v.push(x); },\n  store: (index,x) => {v[index] = x;}, \n  get:(index) => { return vec[index]; }\n}\n}\n\nmy_vector = vector();\nmy_vector.append(7);\nmy_vector.store(1, 8);\nconsole.log(my_vector.get(0));\nconsole.log(my_vector.get(1));\n\n\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  background-color: #689ef7;\n  color: white;\n  border: none;\n  border-radius: 9px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg3MS9FeDcxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXg3MS9FeDcxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuaDEge1xyXG4gIGdyaWQtYXJlYTogYjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5Y2NjYztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmV4ZWN1dGUge1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICNhYmFiYWI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex71Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex71',
            templateUrl: './Ex71.component.html',
            styleUrls: ['./Ex71.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "iNJO":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex91/Ex91.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex91Component */

    /***/
    function iNJO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex91Component", function () {
        return Ex91Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex91Component = /*#__PURE__*/function () {
        function Ex91Component() {
          _classCallCheck(this, Ex91Component);
        }

        _createClass(Ex91Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex91Component;
      }();

      Ex91Component.ɵfac = function Ex91Component_Factory(t) {
        return new (t || Ex91Component)();
      };

      Ex91Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex91Component,
        selectors: [["app-Ex91"]],
        decls: 37,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["src", "https://kaul.inf.h-brs.de/we/assets/img/use_the_platform.png", 2, "max-width", "300px", "width", "100%"], [1, "rightpane"], ["id", "ausfuhren"], ["data-v-2c77a4f5", "", "width", "300", "height", "300"], ["data-v-2c77a4f5", "", "width", "300", "height", "300", 2, "fill", "rgb(184, 101, 101)"], ["data-v-2c77a4f5", "", "x", "30", "y", "70", 2, "fill", "White", "font-weight", "400", "font-size", "50px", "font-family", "Arial"], ["data-v-2c77a4f5", "", "x1", "30", "y1", "85", "x2", "275", "y2", "85", 2, "stroke", "White", "stroke-width", "4"], ["data-v-2c77a4f5", "", "x", "30", "y", "165", 2, "fill", "White", "font-weight", "400", "font-size", "50px", "font-family", "Arial"], ["data-v-2c77a4f5", "", "x1", "30", "y1", "180", "x2", "275", "y2", "180", 2, "stroke", "White", "stroke-width", "4"], ["data-v-2c77a4f5", "", "x", "30", "y", "265", 2, "fill", "White", "font-weight", "400", "font-size", "50px", "font-family", "Arial"], ["data-v-2c77a4f5", "", "x1", "30", "y1", "280", "x2", "275", "y2", "280", 2, "stroke", "White", "stroke-width", "4"]],
        template: function Ex91Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "9.1. SVG Grafik von Hand erstellen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Codieren Sie eine HTML-Datei mit Inline SVG, so dass sich folgendes Aussehen ergibt:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " F\xFCgen Sie als Hover-Effekt eine CSS-Animation hinzu, die die Gr\xF6\xDFe der SVG-Grafik verdoppelt, wenn man mit dem Cursor \xFCber die Grafik geht.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Geben Sie hier den vollst\xE4ndigen HTML- und SVG-Code ein: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "<!DOCTYPE html>\n        <html>\n         <body>\n        \n          <h1>SVG Use The Platform</h1>\n        \n          <svg data-v-2c77a4f5=\"\" width=\"300\" height=\"300\">\n              <rect data-v-2c77a4f5=\"\" width=\"300\" height=\"300\" style=\"fill: rgb(184, 101, 101);\"></rect>      \n        \n              <text data-v-2c77a4f5=\"\" x=\"30\" y=\"70\" style=\"fill:White;font-weight:400;font-size:50px;font-family:Arial\"> Use </text>      \n        \n              <line data-v-2c77a4f5=\"\" x1=\"30\" y1=\"85\" x2=\"275\" y2=\"85\" style=\"stroke:White;stroke-width:4\"></line>\n              <text data-v-2c77a4f5=\"\" x=\"30\" y=\"165\" style=\"fill:White;font-weight:400;font-size:50px;font-family:Arial\"> The </text>\n              <line data-v-2c77a4f5=\"\" x1=\"30\" y1=\"180\" x2=\"275\" y2=\"180\" style=\"stroke:White;stroke-width:4\"></line>      \n              <text data-v-2c77a4f5=\"\" x=\"30\" y=\"265\" style=\"fill:White;font-weight:400;font-size:50px;font-family:Arial\"> Platform </text>      \n                    \n              <line data-v-2c77a4f5=\"\" x1=\"30\" y1=\"280\" x2=\"275\" y2=\"280\" style=\"stroke:White;stroke-width:4\"></line>            \n          </svg>\n         \n         </body>\n        </html>\n        \n        <style>\n        svg:hover {\n          transform: scale(2);\n        }\n        svg {\n          transition: all 0s;\n          transform-origin: 10% 0%;\n        }\n        </style>\n        \n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "SVG Use The Platform");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "rect", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "text", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "text", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "text", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Platform ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXg5MS9FeDkxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQSxXQUFBOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDkxL0V4OTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGVwYW5lIHtcclxuICB3aWR0aDogNzYlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZmRmZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDljY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHRwYW5lIHtcclxuICB3aWR0aDogMjQlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbn1cclxuXHJcbiNhdXNmdWhyZW4ge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAzNSwgNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5TZWl0ZV9odG1sIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbn1cclxuXHJcbiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGVjdXRlIHtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjYWJhYmFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICNhdXNmdWhyZW4ge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex91Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex91',
            templateUrl: './Ex91.component.html',
            styleUrls: ['./Ex91.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jXIw":
    /*!***************************************************!*\
      !*** ./src/app/exercice/Ex113/Ex113.component.ts ***!
      \***************************************************/

    /*! exports provided: Ex113Component */

    /***/
    function jXIw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex113Component", function () {
        return Ex113Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex113Component = /*#__PURE__*/function () {
        function Ex113Component() {
          _classCallCheck(this, Ex113Component);
        }

        _createClass(Ex113Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex113Component;
      }();

      Ex113Component.ɵfac = function Ex113Component_Factory(t) {
        return new (t || Ex113Component)();
      };

      Ex113Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex113Component,
        selectors: [["app-Ex113"]],
        decls: 33,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://de.wikipedia.org/wiki/Wettlaufsituation", "target", "_blank"], ["href", "https://de.wikipedia.org/wiki/Verlorenes_Update", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], ["href", "http://localhost/phpscript/LogNavigator.php", "target", "_blank", 1, "execute"]],
        template: function Ex113Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "11.3 WWW-Navigator zum Content-Editor ausbauen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bauen Sie Ihren WWW-Navigator zum Content-Editor aus, mit dem Sie weitere Inhalte hinzu f\xFCgen k\xF6nnen, die persistent auf dem Server mittels PHP gespeichert werden. Schreiben Sie Ihre PHP-Scripte so, dass es zu keinen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\"Nebenl\xE4ufigkeitsartefakten\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " kommen kann, egal wie viele Nutzer gleichzeitig editieren und speichern.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Speichern Sie die Inhalte Ihres WWW-Navigators auf dem Server www2.inf.h-brs.de. Erweitern Sie Ihren WWW-Navigator um eine Edit-Funktionalit\xE4t, so dass Inhalte editiert und erg\xE4nzt werden k\xF6nnen. Vermeiden Sie die ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\"Lost Update-Anomalie \"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " .");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sch\xFCtzen Sie Ihre Inhalte mit einem Login. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Login QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "<!DOCTYPE html>\n        <html>\n        <head>\n        \n        </head>\n        \n        \n            <div class=main> \n            <h1>LOGIN</h1>\n        <form method=\"post\">\n                Username:<br>\n                <input type=\"text\" name=\"username\">\n                <br>\n                PASSWORD:<br>\n                <input type=\"password\" name=\"password\">\n                <br>\n                <input type=\"submit\" >\n        </form>\n        \n        \n        \n        </div>\n        \n        </html>\n        \n        <?php\n        \n            $username = $_POST['username'];\n            $Password = $_POST[\"password\"];\n        \n            $lines = file(\"./Accounts.csv\");\n            $Account = false;\n            foreach($lines as $line_num => $line){\n                list( $csvUsername, $csvPassword) = explode(\",\", $line);\n                if($csvUsername === hash(\"sha256\", $username)){\n                    if($csvPassword === hash(\"sha256\", $Password) . \"\\n\"){\n                        echo \"<script>alert('Login erfolgreich!')</script>\";\n                header(\"Location: ./WWW-Navigator.php\");\n                        $Account = true;\n                        break;\n                    }\n                }\n            }\n            if(!$Account && ($username || $Password)){\n                echo \"<script>alert('Name oder Password falsch!')</script>\";\n            }\n        \n        ?>\n        \n        \n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " WWW-Navigator QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "            <!doctype html>\n\n            <style>\n             textarea{ position: absolute;\n              top: 107px;\n              width: 25%;\n              height: 90px;\n              left: 9px;\n            }\n            </style>\n            \n            \n            <div class=\"main\">\n            <h1> WWW-Navigator mit PHP</h1>\n            <form method=\"post\">\n                    <select name=\"top_thema\">\n                        <option style=\"position: absolute;top: 81px; \" value=\"We_App\">We_App</option>\n                        <option style=\"position: absolute;top: 81px;width: 5%;position: absolute;top: 81px;width: 5%;left: 132px;\" value=\"Aufgaben\">Aufgaben</option>\n                    </select>\n                    <select name=\"sub_thema\">\n                    </select>\n                    <textarea name=\"content\"></textarea>\n                    <input type=\"submit\" value=\"Submit\">\n            </form>\n            </div>\n            <?PHP\n            $datei = './content.json';\n            $contents = file_get_contents( $datei );\n            $json = json_decode( $contents, true );\n            ?>\n            <script>\n                let json = <?PHP echo json_encode( $json ) ?>;\n                let sub_thema = document.querySelector('select[name=\"sub_thema\"]');\n                let top_thema = document.querySelector('select[name=\"top_thema\"]');\n                let content = document.querySelector('textarea[name=\"content\"');\n                    top_thema.addEventListener('click', e => {\n                    content.innerHTML = \"\";\n                    for(let i = sub_thema.options.length-1; i >= 0; i--){ sub_thema.options[i] = null;}          \n                   \n                 Object.keys( json[ e.target.value ] ).forEach( key => {\n                        let newOption = document.createElement('option');\n                        newOption.value = key;\n                        newOption.innerText = key;\n                        sub_thema.appendChild( newOption ); });\n                });\n                sub_thema.addEventListener('click', e => {\n                    if(json[top_thema.value][sub_thema.value]) \n                {content.innerHTML = json[top_thema.value][sub_thema.value];}\n                     else {content.innerHTML = \"\";}});\n            \n            \n            </script>\n            \n            <?PHP\n            \n            if ( isset($_POST[ 'top_thema' ]) && isset($_POST[ 'sub_thema' ]) && isset($_POST[ 'content' ]) ){\n                $top_thema = $_POST[ 'top_thema' ];\n              $content = $_POST[ 'content' ];\n                $sub_thema = $_POST[ 'sub_thema' ];\n            \n                    $json[ $top_thema ][ $sub_thema ] = $content;\n                    if ( file_put_contents( $datei, json_encode( $json, true )) ){\n                        echo \"<script>alert('Erfolgreich gespeichert!')</script>\";\n                        header(\"Refresh:0\");\n                    }\n            }\n            ?>\n             \n\n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " QUELLCODE AUSF\xDCHREN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "klicken SIE HIER BITTE !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 24%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 25px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n  margin-left: 12%;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\n@media screen and (max-width: 1900px) {\n  #ausfuhren[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .execute[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgxMTMvRXgxMTMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUpGOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBLFdBQUE7O0FBQ0E7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLGVBQUE7RUFORjs7RUFTQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaWNlL0V4MTEzL0V4MTEzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWlkZGxlcGFuZSB7XHJcbiAgd2lkdGg6IDc2JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWZkZmY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGdyaWQtYXJlYTogYjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5Y2NjYztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0cGFuZSB7XHJcbiAgd2lkdGg6IDI0JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcblxyXG59XHJcblxyXG4jYXVzZnVocmVuIHtcclxuICBjb2xvcjogcmdiKDEwNSwgMzUsIDU2KTtcclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uU2VpdGVfaHRtbCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG59XHJcblxyXG4jYXVmZ2FiZSB7XHJcbiAgYmFja2dyb3VuZDogI2RhZmRmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNlM2ZjZGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxufVxyXG5cclxuXHJcblxyXG4uZXhlY3V0ZSB7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggI2FiYWJhYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4OWVmNztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTAwcHgpIHtcclxuICAjYXVzZnVocmVuIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICB9XHJcblxyXG4gIC5leGVjdXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex113Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex113',
            templateUrl: './Ex113.component.html',
            styleUrls: ['./Ex113.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "lK6/":
    /*!***************************************************!*\
      !*** ./src/app/exercice/Ex102/Ex102.component.ts ***!
      \***************************************************/

    /*! exports provided: Ex102Component */

    /***/
    function lK6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex102Component", function () {
        return Ex102Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex102Component = /*#__PURE__*/function () {
        function Ex102Component() {
          _classCallCheck(this, Ex102Component);
        }

        _createClass(Ex102Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex102Component;
      }();

      Ex102Component.ɵfac = function Ex102Component_Factory(t) {
        return new (t || Ex102Component)();
      };

      Ex102Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex102Component,
        selectors: [["app-Ex102"]],
        decls: 23,
        vars: 0,
        consts: [["id", "aufgabe"], ["src", "assets/Screen.jpg", 2, "max-width", "600px", "width", "100%"]],
        template: function Ex102Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "10.2 Fehler finden mit TypeScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Gegeben sei folgendes fehlerbehaftete JavaScript-Programm. Erg\xE4nzen Sie dieses um m\xF6glichst viele Typisierungen und \xFCbersetzen Sie es in ein TypeScript-Programm.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Was ist der Fehler in dem gegebenen JavaScript-Code?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "das Programm wird hier true mit 1 und false mit 0 ersetzen und beide werte addiert was im \n\tPrinzip add addiert nur integer Werte deswegen soll die Datentype von x und y  deklariert werden. \n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Geben Sie hier Ihren TypeScript-Code ein:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "const add = (x:number,y:number) => x+y;\nconst equals = (x:boolean,y:boolean) => x===y;\n\nconsole.log( add(1,2) ); \nconsole.log( add(true, true ) ); \nconsole.log( add(true, false ) ); \nvar x = y = 1; \nconsole.log( add(equals(x,y), equals(y,x)) );\n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Welche Fehler meldet TypeScript?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fehler 1:\nconsole.log( add(true, true ) ); \nboolean type anstatt number abgegeben \n\nFehler 2:\nvar x = y = 1; \ny ist nicht Deklariert\n\nFehler 3:\nconsole.log( add(equals(x,y), equals(y,x)) );\nequals liefert Booleane werte zur\xFCck aber add soll number werte addieren.\n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Geben Sie weitere Beispiele an, wie TypeScript bei der Fehlersuche helfen kann:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "let erste= () => (   \xFCbung:10, aufgabe: 2  );\nlet zweite = () => (   \xFCbung:10 ,aufgabe: 2 , frage:\"letzte_Frage\"  );\nerste= zweite ;  //works\nzweite = erste;  //Not working");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgxMDIvRXgxMDIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBLFdBQUE7O0FBQ0E7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDEwMi9FeDEwMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmV4ZWN1dGUge1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICNhYmFiYWI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNlM2ZjZGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex102Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex102',
            templateUrl: './Ex102.component.html',
            styleUrls: ['./Ex102.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "oIi1":
    /*!***************************************************!*\
      !*** ./src/app/exercice/Ex101/Ex101.component.ts ***!
      \***************************************************/

    /*! exports provided: Ex101Component */

    /***/
    function oIi1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex101Component", function () {
        return Ex101Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex101Component = /*#__PURE__*/function () {
        function Ex101Component() {
          _classCallCheck(this, Ex101Component);
        }

        _createClass(Ex101Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex101Component;
      }();

      Ex101Component.ɵfac = function Ex101Component_Factory(t) {
        return new (t || Ex101Component)();
      };

      Ex101Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex101Component,
        selectors: [["app-Ex101"]],
        decls: 10,
        vars: 0,
        consts: [["id", "aufgabe"]],
        template: function Ex101Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "10.1 Static classes in TypeScript ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Gibt es in TypeScript statische Klassen? Erl\xE4utern Sie den Unterschied von TypeScript zu anderen objekt-orientierten, statisch typisierten Programmiersprachen wie Java und C#.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Geben Sie hier Ihre Antwort und Erl\xE4uterung ein: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "in TypeScript  ist die Typisierung strukturelle, im gegensatz die andere Programmieresprachen wie java und C#, die nominale Typisierung sind.\nin TypeScript  haben wir die m\xF6glichkeit, Variablen aus zwei verschiedenen Classen,die gleiche strukturiert sind , in einer \nFunktion zu lesen und zu \xE4ndern \n\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgxMDEvRXgxMDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBLFdBQUE7O0FBQ0E7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDEwMS9FeDEwMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmV4ZWN1dGUge1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICNhYmFiYWI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNlM2ZjZGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex101Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex101',
            templateUrl: './Ex101.component.html',
            styleUrls: ['./Ex101.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "qJP3":
    /*!***************************************************!*\
      !*** ./src/app/exercice/Ex103/Ex103.component.ts ***!
      \***************************************************/

    /*! exports provided: Ex103Component */

    /***/
    function qJP3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex103Component", function () {
        return Ex103Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex103Component = /*#__PURE__*/function () {
        function Ex103Component() {
          _classCallCheck(this, Ex103Component);
        }

        _createClass(Ex103Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex103Component;
      }();

      Ex103Component.ɵfac = function Ex103Component_Factory(t) {
        return new (t || Ex103Component)();
      };

      Ex103Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex103Component,
        selectors: [["app-Ex103"]],
        decls: 29,
        vars: 0,
        consts: [["id", "aufgabe"], ["href", "https://deno.land/", "target", "_blank"], [2, "color", "#ff0000"], ["href", "https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html", "target", "_blank"], ["href", "https://deno.land/manual", "target", "_blank"], ["href", "https://deno.land/manual@v1.16.4/getting_started/first_steps#making-an-http-request", "target", "_blank"]],
        template: function Ex103Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "10.3. TypeScript auf ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Deno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Auf Deno ist TypeScript ohne \xDCbersetzung direkt ablauff\xE4hig. Deno ist also die Runtime Engine f\xFCr TypeScript. Schreiben Sie in TypeScript m\xF6glichst umfangreich statisch typisiert ein auf Deno ablauff\xE4higes Programm ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "server.ts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", das Sie mit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " deno run --allow-net server.ts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " starten k\xF6nnen, das die ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "COVID-19-Fallzahlen in Deutschland");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " einliest, Minimum, Maximum, Durchschnitt und Summe berechnet und diese auf einer Webseite ausgibt. Ein Beispiel-Programm zu server.ts finden Sie im");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Deno-Manual");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " unter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Making an HTTP request");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Geben Sie hier Ihr Programm ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "server.ts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " ein:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "class Corona {\n    constructor(public place: string, public cases: number) {\n    }\n}\n\nclass Stats {\n    constructor(public min: number, public max: number, public average: number) {\n    }\n}\n\nconst getStats = (coronaCases: Corona[]): Stats => {\n    let sum = 0;\n    let max: number = coronaCases[0].cases;\n    let min: number = coronaCases[0].cases;\n    coronaCases.forEach((c) => {\n        sum += c.cases\n        if (c.cases > max) max = c.cases;\n        if (c.cases < min) min = c.cases;\n    })\n\n    return new Stats(min, max, sum / coronaCases.length);\n}\n\nconst coronaCases: Corona[] = [\n    new Corona('Baden-W\xFCrttenberg', 932965),\n    new Corona('Bayern', 1246136),\n    new Corona('Berlin', 297446),\n    new Corona('Brandeburg', 210009),\n    new Corona('Bremen', 42434),\n    new Corona('Hamburg', 122871)\n]\n\n// Start listening on port 8080 of localhost.\nconst server = Deno.listen({port: 8080});\nconsole.log(HTTP webserver running.  Access it at:  http://localhost:8080/);\n\n// Connections to the server will be yielded up as an async iterable.\nfor await (const conn of server) {\n    // In order to not be blocking, we need to handle each connection individually\n    // without awaiting the function\n    serveHttp(conn);\n}\n\nasync function serveHttp(conn: Deno.Conn) {\n    // This \"upgrades\" a network connection into an HTTP connection.\n    const httpConn = Deno.serveHttp(conn);\n    // Each request sent over the HTTP connection will be yielded as an async\n    // iterator from the HTTP connection.\n    for await (const requestEvent of httpConn) {\n        // The native HTTP server uses the web standard Request and Response\n        // objects.\n        const stats = getStats(coronaCases);\n        const body = min: ${stats.min}, max: ${stats.max}, average: ${stats.average}\n        // The requestEvent's .respondWith() method is how we send the response\n        // back to the client.\n        requestEvent.respondWith(\n            new Response(body, {\n                status: 200,\n            }),\n        );\n    }\n}\n  \n\t\t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\n.execute[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  cursor: pointer;\n  font-size: 17px;\n  font-family: Verdana, sans-serif;\n  text-shadow: 3px 3px 3px #ababab;\n  color: white;\n  background-color: #689ef7;\n  border: none;\n  border-radius: 9px;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n\n\n.execute[_ngcontent-%COMP%]:active {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transform: translateY(8px);\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgxMDMvRXgxMDMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBLFdBQUE7O0FBQ0E7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9leGVyY2ljZS9FeDEwMy9FeDEwMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdWZnYWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGFmZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmV4ZWN1dGUge1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICNhYmFiYWI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZWY3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi8qVzNzY2hvb2wqL1xyXG4uZXhlY3V0ZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNlM2ZjZGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex103Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex103',
            templateUrl: './Ex103.component.html',
            styleUrls: ['./Ex103.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "sjZb":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex32/Ex32.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex32Component */

    /***/
    function sjZb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex32Component", function () {
        return Ex32Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex32Component = /*#__PURE__*/function () {
        function Ex32Component() {
          _classCallCheck(this, Ex32Component);
        }

        _createClass(Ex32Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex32Component;
      }();

      Ex32Component.ɵfac = function Ex32Component_Factory(t) {
        return new (t || Ex32Component)();
      };

      Ex32Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex32Component,
        selectors: [["app-Ex32"]],
        decls: 27,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["href", "https://cssgridgarden.com/#de", "target", "_blank"], [1, "rightpane"], ["id", "ausfuhren"], [1, "Seite_html"], [1, "body"], [1, "left"], [1, "right"]],
        template: function Ex32Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aufgabe 3.2. Responsiv mit Grid Mobile-First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Spielen Sie zun\xE4chst das ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Grid Garden ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-Spiel, um Grid Layout zu lernen. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Implementieren Sie dann das gleiche responsive Webdesign wie in Aufgabe 3.1 allerdings mit Grid und der Mobile-First-Strategie! Vermeiden Sie diesmal au\xDFerdem das Erscheinen von Scrollbars. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "QUELLCODE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n        <meta charset=\"UTF-8\">\n        </head>\n        \n            \n            <style>\n               header { \n                   grid-area: header;\n                   background-color: red;\n                }\n        \n               main { \n                   grid-area: main;\n                   background-color: blue;\n                }\n        \n               aside.left { \n                   grid-area: left;\n                   background-color: lightgreen; \n                }\n        \n               aside.right { \n                   grid-area: right; \n                   background-color: pink; \n                }\n        \n                .body {\n                        display: grid;\n                        min-height: 100vh;\n                        height: 100vh;\n                        grid-template-areas:\n                                      \"header\"\n                                      \"left\"\n                                      \"main\"\n                                      \"main\"\n                                      \"right\";\n                }\n        \n               \n        \n                @media screen and (min-width: 500px) {\n                  .body {\n                  display: grid;\n                  grid-template-areas: \"header header\"\n                                       \"left main \"\n                                         \"right right\"\n                                         ;\n                  grid-template-columns: 1fr 2fr;\n                  grid-template-rows: 150px 1fr 100px 30px;\n                }\n                \n            } \n        \n                @media screen and (min-width: 800px) {\n                  .body {\n                  display: grid;\n                  grid-template-areas: \"header header header\"\n                                       \"left main right\";\n                  grid-template-columns: 150px 1fr 150px;\n                  grid-template-rows: 100px 1fr 30px;\n                }\n            }\n        \n                \n            </style>\n            \n                <body class=\"body\">\n                <header ></header>\n                <main ></main>\n                <aside class=\"left\"></aside>\n                <aside class=\"right\"></aside>\n            </body>\n        </html>\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " QUELLCODE AUSF\xDCHRUNG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "body", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "aside", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "aside", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.middlepane[_ngcontent-%COMP%] {\n  width: 64%;\n  height: 100%;\n  position: relative;\n  float: left;\n  background-color: #dafdff;\n  border-collapse: collapse;\n}\n\n.rightpane[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 100%;\n  position: relative;\n  float: right;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n\n#ausfuhren[_ngcontent-%COMP%] {\n  color: #692338;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n}\n\n.Seite_html[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 5px;\n  background-color: white;\n}\n\n#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #e3fcde;\n  border: 2px solid gray;\n  border-style: dotted;\n}\n\nheader[_ngcontent-%COMP%] {\n  grid-area: header;\n  background-color: red;\n}\n\nmain[_ngcontent-%COMP%] {\n  grid-area: main;\n  background-color: blue;\n}\n\naside.left[_ngcontent-%COMP%] {\n  grid-area: left;\n  background-color: lightgreen;\n}\n\naside.right[_ngcontent-%COMP%] {\n  grid-area: right;\n  background-color: pink;\n}\n\n.body[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 100vh;\n  height: 100vh;\n  grid-template-areas: \"header\" \"left\" \"main\" \"main\" \"right\";\n}\n\n@media screen and (min-width: 500px) {\n  .body[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"header header\" \"left main \" \"right right\";\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 150px 1fr 100px 30px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"header header header\" \"left main right\";\n    grid-template-columns: 150px 1fr 150px;\n    grid-template-rows: 100px 1fr 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgzMi9FeDMyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFVQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMERBQ0U7QUFSSjs7QUFpQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSwrREFBQTtJQUlBLDhCQUFBO0lBQ0Esd0NBQUE7RUFqQkY7QUFDRjs7QUFxQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSw2REFBQTtJQUVBLHNDQUFBO0lBQ0Esa0NBQUE7RUFwQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaWNlL0V4MzIvRXgzMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pZGRsZXBhbmUge1xyXG4gIHdpZHRoOiA2NCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFmZGZmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5yaWdodHBhbmUge1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcblxyXG5cclxufVxyXG5cclxuaDEge1xyXG4gIGdyaWQtYXJlYTogYjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5Y2NjYztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuI2F1c2Z1aHJlbiB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDM1LCA1Nik7XHJcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLlNlaXRlX2h0bWwge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxufVxyXG5cclxuI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZTNmY2RlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmhlYWRlciB7XHJcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBncmlkLWFyZWE6IG1haW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuYXNpZGUubGVmdCB7XHJcbiAgZ3JpZC1hcmVhOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbmFzaWRlLnJpZ2h0IHtcclxuICBncmlkLWFyZWE6IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiaGVhZGVyXCJcclxuICAgIFwibGVmdFwiXHJcbiAgICBcIm1haW5cIlxyXG4gICAgXCJtYWluXCJcclxuICAgIFwicmlnaHRcIjtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gIC5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlciBoZWFkZXJcIlxyXG4gICAgICBcImxlZnQgbWFpbiBcIlxyXG4gICAgICBcInJpZ2h0IHJpZ2h0XCJcclxuICAgIDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyIDEwMHB4IDMwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgaGVhZGVyIGhlYWRlclwiXHJcbiAgICAgIFwibGVmdCBtYWluIHJpZ2h0XCI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDFmciAxNTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDMwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex32Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex32',
            templateUrl: './Ex32.component.html',
            styleUrls: ['./Ex32.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _exercice_aboutMe_aboutMe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./exercice/aboutMe/aboutMe.component */
      "vaNh");
      /* harmony import */


      var _exercice_Ex33_Ex33_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./exercice/Ex33/Ex33.component */
      "DvEU");
      /* harmony import */


      var _exercice_Ex65_Ex65_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./exercice/Ex65/Ex65.component */
      "/l4N");
      /* harmony import */


      var _exercice_Ex113_Ex113_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exercice/Ex113/Ex113.component */
      "jXIw");
      /* harmony import */


      var _exercice_Ex112_Ex112_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./exercice/Ex112/Ex112.component */
      "/mFQ");
      /* harmony import */


      var _exercice_Ex111_Ex111_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./exercice/Ex111/Ex111.component */
      "G2Si");
      /* harmony import */


      var _exercice_Ex103_Ex103_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exercice/Ex103/Ex103.component */
      "qJP3");
      /* harmony import */


      var _exercice_Ex102_Ex102_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./exercice/Ex102/Ex102.component */
      "lK6/");
      /* harmony import */


      var _exercice_Ex101_Ex101_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./exercice/Ex101/Ex101.component */
      "oIi1");
      /* harmony import */


      var _exercice_Ex92_Ex92_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./exercice/Ex92/Ex92.component */
      "Vkb/");
      /* harmony import */


      var _exercice_Ex91_Ex91_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./exercice/Ex91/Ex91.component */
      "iNJO");
      /* harmony import */


      var _exercice_Ex82_Ex82_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./exercice/Ex82/Ex82.component */
      "/bc1");
      /* harmony import */


      var _exercice_Ex81_Ex81_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./exercice/Ex81/Ex81.component */
      "7y4U");
      /* harmony import */


      var _exercice_Ex72_Ex72_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./exercice/Ex72/Ex72.component */
      "Vjdv");
      /* harmony import */


      var _exercice_Ex71_Ex71_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./exercice/Ex71/Ex71.component */
      "iD1+");
      /* harmony import */


      var _exercice_Ex64_Ex64_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./exercice/Ex64/Ex64.component */
      "cU/L");
      /* harmony import */


      var _exercice_Ex63_Ex63_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./exercice/Ex63/Ex63.component */
      "EpvI");
      /* harmony import */


      var _exercice_Ex62_Ex62_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./exercice/Ex62/Ex62.component */
      "CVn9");
      /* harmony import */


      var _exercice_Ex61_Ex61_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./exercice/Ex61/Ex61.component */
      "0TBA");
      /* harmony import */


      var _exercice_Ex53_Ex53_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./exercice/Ex53/Ex53.component */
      "HDLZ");
      /* harmony import */


      var _exercice_Ex52_Ex52_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./exercice/Ex52/Ex52.component */
      "/yFN");
      /* harmony import */


      var _exercice_Ex51_Ex51_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./exercice/Ex51/Ex51.component */
      "Qj28");
      /* harmony import */


      var _exercice_Ex44_Ex44_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./exercice/Ex44/Ex44.component */
      "Xpf1");
      /* harmony import */


      var _exercice_Ex43_Ex43_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./exercice/Ex43/Ex43.component */
      "FPlC");
      /* harmony import */


      var _exercice_Ex42_Ex42_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./exercice/Ex42/Ex42.component */
      "i8P/");
      /* harmony import */


      var _exercice_Ex41_Ex41_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./exercice/Ex41/Ex41.component */
      "N+Ap");
      /* harmony import */


      var _exercice_Ex32_Ex32_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./exercice/Ex32/Ex32.component */
      "sjZb");
      /* harmony import */


      var _exercice_Ex31_Ex31_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./exercice/Ex31/Ex31.component */
      "fvoq");
      /* harmony import */


      var _exercice_Ex23_Ex23_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./exercice/Ex23/Ex23.component */
      "/uZe");
      /* harmony import */


      var _exercice_Ex22_Ex22_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./exercice/Ex22/Ex22.component */
      "Ehkv");
      /* harmony import */


      var _exercice_Ex21_Ex21_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./exercice/Ex21/Ex21.component */
      "wj+h");
      /* harmony import */


      var _exercice_Ex14_Ex14_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./exercice/Ex14/Ex14.component */
      "gKVh");
      /* harmony import */


      var _exercice_Ex13_Ex13_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./exercice/Ex13/Ex13.component */
      "dmor");
      /* harmony import */


      var _exercice_Ex12_Ex12_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./exercice/Ex12/Ex12.component */
      "FAtD");
      /* harmony import */


      var _exercice_sheet1Ex1_sheet1Ex1_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./exercice/sheet1Ex1/sheet1Ex1.component */
      "F4uq");
      /* harmony import */


      var _exercice_exercice_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./exercice/exercice.component */
      "hHlX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        component: _exercice_exercice_component__WEBPACK_IMPORTED_MODULE_35__["ExerciceComponent"]
      }, {
        path: 'exercice',
        component: _exercice_exercice_component__WEBPACK_IMPORTED_MODULE_35__["ExerciceComponent"],
        children: [{
          path: 'aboutMe',
          component: _exercice_aboutMe_aboutMe_component__WEBPACK_IMPORTED_MODULE_0__["AboutMeComponent"]
        }, {
          path: 'sheet1Ex1',
          component: _exercice_sheet1Ex1_sheet1Ex1_component__WEBPACK_IMPORTED_MODULE_34__["Sheet1Ex1Component"]
        }, {
          path: 'Ex12',
          component: _exercice_Ex12_Ex12_component__WEBPACK_IMPORTED_MODULE_33__["Ex12Component"]
        }, {
          path: 'Ex13',
          component: _exercice_Ex13_Ex13_component__WEBPACK_IMPORTED_MODULE_32__["Ex13Component"]
        }, {
          path: 'Ex14',
          component: _exercice_Ex14_Ex14_component__WEBPACK_IMPORTED_MODULE_31__["Ex14Component"]
        }, {
          path: 'Ex21',
          component: _exercice_Ex21_Ex21_component__WEBPACK_IMPORTED_MODULE_30__["Ex21Component"]
        }, {
          path: 'Ex22',
          component: _exercice_Ex22_Ex22_component__WEBPACK_IMPORTED_MODULE_29__["Ex22Component"]
        }, {
          path: 'Ex23',
          component: _exercice_Ex23_Ex23_component__WEBPACK_IMPORTED_MODULE_28__["Ex23Component"]
        }, {
          path: 'Ex31',
          component: _exercice_Ex31_Ex31_component__WEBPACK_IMPORTED_MODULE_27__["Ex31Component"]
        }, {
          path: 'Ex32',
          component: _exercice_Ex32_Ex32_component__WEBPACK_IMPORTED_MODULE_26__["Ex32Component"]
        }, {
          path: 'Ex33',
          component: _exercice_Ex33_Ex33_component__WEBPACK_IMPORTED_MODULE_1__["Ex33Component"]
        }, {
          path: 'Ex41',
          component: _exercice_Ex41_Ex41_component__WEBPACK_IMPORTED_MODULE_25__["Ex41Component"]
        }, {
          path: 'Ex42',
          component: _exercice_Ex42_Ex42_component__WEBPACK_IMPORTED_MODULE_24__["Ex42Component"]
        }, {
          path: 'Ex43',
          component: _exercice_Ex43_Ex43_component__WEBPACK_IMPORTED_MODULE_23__["Ex43Component"]
        }, {
          path: 'Ex44',
          component: _exercice_Ex44_Ex44_component__WEBPACK_IMPORTED_MODULE_22__["Ex44Component"]
        }, {
          path: 'Ex51',
          component: _exercice_Ex51_Ex51_component__WEBPACK_IMPORTED_MODULE_21__["Ex51Component"]
        }, {
          path: 'Ex52',
          component: _exercice_Ex52_Ex52_component__WEBPACK_IMPORTED_MODULE_20__["Ex52Component"]
        }, {
          path: 'Ex53',
          component: _exercice_Ex53_Ex53_component__WEBPACK_IMPORTED_MODULE_19__["Ex53Component"]
        }, {
          path: 'Ex61',
          component: _exercice_Ex61_Ex61_component__WEBPACK_IMPORTED_MODULE_18__["Ex61Component"]
        }, {
          path: 'Ex62',
          component: _exercice_Ex62_Ex62_component__WEBPACK_IMPORTED_MODULE_17__["Ex62Component"]
        }, {
          path: 'Ex63',
          component: _exercice_Ex63_Ex63_component__WEBPACK_IMPORTED_MODULE_16__["Ex63Component"]
        }, {
          path: 'Ex64',
          component: _exercice_Ex64_Ex64_component__WEBPACK_IMPORTED_MODULE_15__["Ex64Component"]
        }, {
          path: 'Ex65',
          component: _exercice_Ex65_Ex65_component__WEBPACK_IMPORTED_MODULE_2__["Ex65Component"]
        }, {
          path: 'Ex71',
          component: _exercice_Ex71_Ex71_component__WEBPACK_IMPORTED_MODULE_14__["Ex71Component"]
        }, {
          path: 'Ex72',
          component: _exercice_Ex72_Ex72_component__WEBPACK_IMPORTED_MODULE_13__["Ex72Component"]
        }, {
          path: 'Ex81',
          component: _exercice_Ex81_Ex81_component__WEBPACK_IMPORTED_MODULE_12__["Ex81Component"]
        }, {
          path: 'Ex82',
          component: _exercice_Ex82_Ex82_component__WEBPACK_IMPORTED_MODULE_11__["Ex82Component"]
        }, {
          path: 'Ex91',
          component: _exercice_Ex91_Ex91_component__WEBPACK_IMPORTED_MODULE_10__["Ex91Component"]
        }, {
          path: 'Ex92',
          component: _exercice_Ex92_Ex92_component__WEBPACK_IMPORTED_MODULE_9__["Ex92Component"]
        }, {
          path: 'Ex101',
          component: _exercice_Ex101_Ex101_component__WEBPACK_IMPORTED_MODULE_8__["Ex101Component"]
        }, {
          path: 'Ex102',
          component: _exercice_Ex102_Ex102_component__WEBPACK_IMPORTED_MODULE_7__["Ex102Component"]
        }, {
          path: 'Ex103',
          component: _exercice_Ex103_Ex103_component__WEBPACK_IMPORTED_MODULE_6__["Ex103Component"]
        }, {
          path: 'Ex111',
          component: _exercice_Ex111_Ex111_component__WEBPACK_IMPORTED_MODULE_5__["Ex111Component"]
        }, {
          path: 'Ex112',
          component: _exercice_Ex112_Ex112_component__WEBPACK_IMPORTED_MODULE_4__["Ex112Component"]
        }, {
          path: 'Ex113',
          component: _exercice_Ex113_Ex113_component__WEBPACK_IMPORTED_MODULE_3__["Ex113Component"]
        }]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_36__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_37__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vaNh":
    /*!*******************************************************!*\
      !*** ./src/app/exercice/aboutMe/aboutMe.component.ts ***!
      \*******************************************************/

    /*! exports provided: AboutMeComponent */

    /***/
    function vaNh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
        return AboutMeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);

      var AboutMeComponent = /*#__PURE__*/function () {
        function AboutMeComponent() {
          _classCallCheck(this, AboutMeComponent);
        }

        _createClass(AboutMeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "saveFile",
          value: function saveFile(text) {
            var blob = new Blob([text], {
              type: "text/plain;charset=utf-8"
            });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, "feed-back.txt");
          }
        }]);

        return AboutMeComponent;
      }();

      AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
        return new (t || AboutMeComponent)();
      };

      AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutMeComponent,
        selectors: [["app-aboutMe"]],
        decls: 42,
        vars: 0,
        consts: [[1, "container"], [1, "middlepane"], ["id", "aufgabe"], ["id", "name"], ["id", "st"], ["id", "pr"], ["id", "jahr"], ["id", "git"], ["id", "git", "href", "https://github.com/omarguella/-Web-Engineering", "target", "_blank"], ["id", "git", "href", "https://github.com/omarguella/Web_Einf_Projekt", "target", "_blank"], ["id", "angular"], ["src", "assets/angular.png", "id", "logo", 2, "max-width", "260px", "width", "100%"], ["href", "mailto:omar.guella@smail.inf.h-brs.de?subject=Feedback&body=Message", 2, "color", "red", "font-size", "38px"], ["id", "pro"], [1, "rightpane"]],
        template: function AboutMeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduction of myself");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " OMAR GUELLA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "(oguell2s)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Hochschule Bonn-Rhein-Sieg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Hausarbeit Einf\xFChrung in Web Engineering ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " WS 21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Kontakt: omar.guella@smail.inf.h-brs.de");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Link Github:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Github AUFGABEN im Lauf des Semesters ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Github for the PROJECT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " used Technology ANGULAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Send Feedback ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Introduction of the Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Die Aufgabe im Semesterprojekt ist die Erstellung und Pflege einer eigenen Homepage im Rahmen der w\xF6chentlichen Praktikumsaufgaben. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "In meiner Webseite sind sowohl die Aufgabenstellungen als auch die L\xF6sungen pr\xE4sentiert.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Bei jedem Vorlesungsthema finden Sie LINKS die Aufgaben,die ich im Laufe des Semesters abgegeben habe. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@import url('https://fonts.googleapis.com/css?family=Quicksand');\r\n@import url('https://fonts.googleapis.com/css?family=Angkor');\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.middlepane[_ngcontent-%COMP%] {\r\n  width: 85%;\r\n  height: 100%;\r\n  position: relative;\r\n  float: left;\r\n  background-color: #dafdff;\r\n  border-collapse: collapse;\r\n}\r\n.rightpane[_ngcontent-%COMP%] {\r\n  width: 15%;\r\n  height: 100%;\r\n  position: relative;\r\n  float: right;\r\n\r\n\r\n}\r\n.Seite_html[_ngcontent-%COMP%] {\r\n  border-style: solid;\r\n  border-width: 5px;\r\n  background-color: rgb(255, 255, 255);\r\n\r\n}\r\n#ausfuhren[_ngcontent-%COMP%] {\r\n  color: rgb(105, 35, 56);\r\n  font-family: 'Helvetica Neue', sans-serif;\r\n  font-size: 27px;\r\n  font-weight: bold;\r\n  letter-spacing: -1px;\r\n  line-height: 1;\r\n  text-align: center;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  text-align: center;\r\n\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  padding: 11px;\r\n  margin: 8px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: -20px;\r\n}\r\n#pro[_ngcontent-%COMP%] {\r\n  font-family: \"Quicksand\", sans-serif;\r\n  text-align: center;\r\n  font-size: 25px;\r\n  color: rgb(0, 0, 0);\r\n}\r\n#name[_ngcontent-%COMP%] {\r\n  font-family: \"Angkor\", cursive;\r\n  text-align: center;\r\n  font-size: 35px;\r\n  color: rgb(22, 190, 190);\r\n  text-shadow: rgb(3, 3, 32) 2px 2px 2px;\r\n\r\n}\r\n#aufgabe[_ngcontent-%COMP%] {\r\n  background: #dafdff;\r\n  border: 1px solid black;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  grid-area: b;\r\n  text-align: center;\r\n  background-color: #d9cccc;\r\n  padding: 10px;\r\n  margin-top: 0px;\r\n}\r\n.execute[_ngcontent-%COMP%] {\r\n  padding: 5px 11px;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  font-family: Verdana, sans-serif;\r\n  text-shadow: 3px 3px 3px #ababab;\r\n\r\n  color: white;\r\n  background-color: #689ef7;\r\n  border: none;\r\n  border-radius: 9px;\r\n}\r\n\r\n.execute[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  transform: translateY(8px);\r\n}\r\npre[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  background: #e3fcde;\r\n  border: 2px solid gray;\r\n  border-style: dotted;\r\n}\r\n@media screen and (max-width: 500px) {\r\n  li[_ngcontent-%COMP%] {\r\n    padding: 11px;\r\n    margin-left: -27px;\r\n    font-size: 16px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvYWJvdXRNZS9hYm91dE1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0VBQWdFO0FBQ2hFLDZEQUE2RDtBQUU3RDtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZOzs7QUFHZDtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQ0FBb0M7O0FBRXRDO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCOztBQUVwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFHQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixzQ0FBc0M7O0FBRXhDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGdDQUFnQzs7RUFFaEMsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUEsV0FBVztBQUNYO0VBQ0UsNkVBQTZFO0VBQzdFLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCO0FBR0E7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvYWJvdXRNZS9hYm91dE1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1aWNrc2FuZCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFuZ2tvcicpO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWlkZGxlcGFuZSB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWZkZmY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnJpZ2h0cGFuZSB7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcblxyXG59XHJcblxyXG4uU2VpdGVfaHRtbCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG59XHJcblxyXG4jYXVzZnVocmVuIHtcclxuICBjb2xvcjogcmdiKDEwNSwgMzUsIDU2KTtcclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBDU1MgYnkgR2VuZXJhdGVDU1MuY29tICovXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxubGkge1xyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5cclxuI3BybyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG5cclxuI25hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFuZ2tvclwiLCBjdXJzaXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6IHJnYigyMiwgMTkwLCAxOTApO1xyXG4gIHRleHQtc2hhZG93OiByZ2IoMywgMywgMzIpIDJweCAycHggMnB4O1xyXG5cclxufVxyXG5cclxuI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uZXhlY3V0ZSB7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggI2FiYWJhYjtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODllZjc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLypXM3NjaG9vbCovXHJcbi5leGVjdXRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UzZmNkZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBsaSB7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yN3B4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-aboutMe',
            templateUrl: './aboutMe.component.html',
            styleUrls: ['./aboutMe.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "wj+h":
    /*!*************************************************!*\
      !*** ./src/app/exercice/Ex21/Ex21.component.ts ***!
      \*************************************************/

    /*! exports provided: Ex21Component */

    /***/
    function wjH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ex21Component", function () {
        return Ex21Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ex21Component = /*#__PURE__*/function () {
        function Ex21Component() {
          _classCallCheck(this, Ex21Component);
        }

        _createClass(Ex21Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Ex21Component;
      }();

      Ex21Component.ɵfac = function Ex21Component_Factory(t) {
        return new (t || Ex21Component)();
      };

      Ex21Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Ex21Component,
        selectors: [["app-Ex21"]],
        decls: 59,
        vars: 0,
        consts: [["id", "aufgabe"], [2, "color", "#FF0000"]],
        template: function Ex21Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aufgabe 2.1. CSS Selektoren und CSS Farben");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Berechnen Sie die Spezifit\xE4t folgender CSS-Selektoren:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.div div div:focus .inner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2.h1 + div.main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3.div a:link[href*='h-brs']");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "4.nav > a:hover::before");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "5.ul#primary-nav li.active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1: div div div:focus .inner = 32 Spezifit\xE4t ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2: h1 + div.main = 12 Spezifit\xE4t ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3: div a:link[href*='h-brs'] = 22 Spezifit\xE4t ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "4: nav > a:hover::before =13 Spezifit\xE4t ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "5: ul#primary-nav li.active = 112 Spezifit\xE4t ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Rechnen Sie folgende RGB-Werte in HSL-Werte um:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1. #ffffff");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2.#000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "3.#ab0978");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "4.rgb(127,255,33)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5.rgba(255,127,33,0.8)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1: #ffffff = HSL (0,0%,1000%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2: #000= HSL (0,0%,0%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3: #ab0978=HSL(319, 90%, 35%) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "4: rgb(127,255,33)=HSL(95, 100%, 56%) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "5: rgba(255,127,33,0.8) = hsla(25, 100%, 56%, 0.8) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#aufgabe[_ngcontent-%COMP%] {\n  background: #dafdff;\n  border: 1px solid black;\n}\n\nh1[_ngcontent-%COMP%] {\n  grid-area: b;\n  text-align: center;\n  background-color: #d9cccc;\n  padding: 10px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpY2UvRXgyMS9FeDIxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpY2UvRXgyMS9FeDIxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1ZmdhYmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYWZkZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmgxIHtcclxuICBncmlkLWFyZWE6IGI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ex21Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-Ex21',
            templateUrl: './Ex21.component.html',
            styleUrls: ['./Ex21.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map