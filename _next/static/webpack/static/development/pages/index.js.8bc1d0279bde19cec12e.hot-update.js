webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/alchemy/AlchemicProperty.tsx":
/*!*************************************************!*\
  !*** ./components/alchemy/AlchemicProperty.tsx ***!
  \*************************************************/
/*! exports provided: AlchemicProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlchemicProperty", function() { return AlchemicProperty; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/Data */ "./components/data/Data.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\components\\alchemy\\AlchemicProperty.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function AlchemicProperty(properties) {
  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('data-alchemic-property', properties.className);
  return __jsx(_data_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].List, {
    row: true,
    className: className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_data_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].Element, {
    className: "data-alchemic-property-effects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, properties.children.effects.map(function (effect, index) {
    return __jsx(_data_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].Element, {
      key: index,
      className: "data-alchemic-property-effect",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, effect);
  })), __jsx(_data_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].Element, {
    "static": true,
    className: "data-alchemic-property-duration text-center",
    width: "120px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, properties.children.duration), __jsx(_data_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].Element, {
    "static": true,
    className: "data-alchemic-property-cost text-center",
    width: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, properties.children.cost));
}

(function (_AlchemicProperty) {})(AlchemicProperty || (AlchemicProperty = {}));

/***/ })

})
//# sourceMappingURL=index.js.8bc1d0279bde19cec12e.hot-update.js.map