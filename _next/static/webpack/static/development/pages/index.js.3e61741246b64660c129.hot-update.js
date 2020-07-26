webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/feat/Feat.ts":
/*!*********************************!*\
  !*** ./typescript/feat/Feat.ts ***!
  \*********************************/
/*! exports provided: Feat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feat", function() { return Feat; });
/* harmony import */ var _Sets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Sets */ "./typescript/Sets.ts");
/* harmony import */ var _FeatBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatBuilder */ "./typescript/feat/FeatBuilder.ts");


var Feat;

(function (_Feat) {
  function equals(left, right) {
    if (left == null) return left === right;
    if (right == null) return false;
    if (left === right) return true;
    return left.name === right.name && left.identifier === right.identifier && left.description === right.description && _Sets__WEBPACK_IMPORTED_MODULE_0__["Sets"].equals(left.keywords, right.keywords);
  }

  _Feat.equals = equals;

  function builder() {
    return _FeatBuilder__WEBPACK_IMPORTED_MODULE_1__["FeatBuilder"].builder();
  }

  _Feat.builder = builder;
})(Feat || (Feat = {}));

/***/ })

})
//# sourceMappingURL=index.js.3e61741246b64660c129.hot-update.js.map