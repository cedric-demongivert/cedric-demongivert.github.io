webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/data/feat/ChainDodge.tsx":
/*!*********************************************!*\
  !*** ./typescript/data/feat/ChainDodge.tsx ***!
  \*********************************************/
/*! exports provided: ChainDodge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainDodge", function() { return ChainDodge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feat_Feat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../feat/Feat */ "./typescript/feat/Feat.ts");
/* harmony import */ var _feat_FeatLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../feat/FeatLevel */ "./typescript/feat/FeatLevel.ts");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\typescript\\data\\feat\\ChainDodge.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ChainDodge = _feat_Feat__WEBPACK_IMPORTED_MODULE_1__["Feat"].builder().setIdentifier('chain-dodge').setName('Esquive en chaîne').addKeyword('atout').addKeyword('esquive').addKeyword('esquive en chaîne').addLevel(_feat_FeatLevel__WEBPACK_IMPORTED_MODULE_2__["FeatLevel"].builder().addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Esquive 8+")).setDescription(__jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
}, "Le personnage gagne une esquive suppl\xE9mentaire par round, chaque esquive suppl\xE9mentaire jou\xE9e durant un round se voit attribu\xE9e un malus de 10% cumulatif.")).build()).addLevel(_feat_FeatLevel__WEBPACK_IMPORTED_MODULE_2__["FeatLevel"].builder().addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Esquive 12+")).addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Esquive en cha\xEEne I")).setDescription(__jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 11
  }
}, "Le personnage gagne deux esquives suppl\xE9mentaire par round, chaque esquive suppl\xE9mentaire jou\xE9e durant un round se voit attribu\xE9e un malus de 10% cumulatif.")).build()).addLevel(_feat_FeatLevel__WEBPACK_IMPORTED_MODULE_2__["FeatLevel"].builder().addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Esquive 16+")).addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Dext\xE9rit\xE9 16+")).addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Esquive en cha\xEEne II")).setDescription(__jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 11
  }
}, "Le personnage gagne trois esquives suppl\xE9mentaire par round, chaque esquive suppl\xE9mentaire jou\xE9e durant un round se voit attribu\xE9e un malus de 10% cumulatif.")).build()).build();

/***/ }),

/***/ "./typescript/data/feat/index.ts":
/*!***************************************!*\
  !*** ./typescript/data/feat/index.ts ***!
  \***************************************/
/*! exports provided: AcrobaticDodging, AcrobaticParry, AtlasBurden, BloodBath, BloodThirst, BullCharge, CatGrace, ChainAttack, ChainDodge, ALL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL", function() { return ALL; });
/* harmony import */ var _AcrobaticDodging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcrobaticDodging */ "./typescript/data/feat/AcrobaticDodging.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcrobaticDodging", function() { return _AcrobaticDodging__WEBPACK_IMPORTED_MODULE_0__["AcrobaticDodging"]; });

/* harmony import */ var _AcrobaticParry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcrobaticParry */ "./typescript/data/feat/AcrobaticParry.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcrobaticParry", function() { return _AcrobaticParry__WEBPACK_IMPORTED_MODULE_1__["AcrobaticParry"]; });

/* harmony import */ var _AtlasBurden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AtlasBurden */ "./typescript/data/feat/AtlasBurden.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AtlasBurden", function() { return _AtlasBurden__WEBPACK_IMPORTED_MODULE_2__["AtlasBurden"]; });

/* harmony import */ var _BloodBath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BloodBath */ "./typescript/data/feat/BloodBath.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BloodBath", function() { return _BloodBath__WEBPACK_IMPORTED_MODULE_3__["BloodBath"]; });

/* harmony import */ var _BloodThirst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BloodThirst */ "./typescript/data/feat/BloodThirst.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BloodThirst", function() { return _BloodThirst__WEBPACK_IMPORTED_MODULE_4__["BloodThirst"]; });

/* harmony import */ var _BullCharge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BullCharge */ "./typescript/data/feat/BullCharge.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BullCharge", function() { return _BullCharge__WEBPACK_IMPORTED_MODULE_5__["BullCharge"]; });

/* harmony import */ var _CatGrace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CatGrace */ "./typescript/data/feat/CatGrace.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CatGrace", function() { return _CatGrace__WEBPACK_IMPORTED_MODULE_6__["CatGrace"]; });

/* harmony import */ var _ChainAttack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChainAttack */ "./typescript/data/feat/ChainAttack.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChainAttack", function() { return _ChainAttack__WEBPACK_IMPORTED_MODULE_7__["ChainAttack"]; });

/* harmony import */ var _ChainDodge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChainDodge */ "./typescript/data/feat/ChainDodge.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChainDodge", function() { return _ChainDodge__WEBPACK_IMPORTED_MODULE_8__["ChainDodge"]; });



















var ALL = [_AcrobaticDodging__WEBPACK_IMPORTED_MODULE_0__["AcrobaticDodging"], _AcrobaticParry__WEBPACK_IMPORTED_MODULE_1__["AcrobaticParry"], _AtlasBurden__WEBPACK_IMPORTED_MODULE_2__["AtlasBurden"], _BloodBath__WEBPACK_IMPORTED_MODULE_3__["BloodBath"], _BloodThirst__WEBPACK_IMPORTED_MODULE_4__["BloodThirst"], _BullCharge__WEBPACK_IMPORTED_MODULE_5__["BullCharge"], _CatGrace__WEBPACK_IMPORTED_MODULE_6__["CatGrace"], _ChainAttack__WEBPACK_IMPORTED_MODULE_7__["ChainAttack"], _ChainDodge__WEBPACK_IMPORTED_MODULE_8__["ChainDodge"]];

/***/ })

})
//# sourceMappingURL=index.js.24d2d2c75d694b149828.hot-update.js.map