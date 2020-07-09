webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/data/feat/BullCharge.tsx":
/*!*********************************************!*\
  !*** ./typescript/data/feat/BullCharge.tsx ***!
  \*********************************************/
/*! exports provided: BullCharge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BullCharge", function() { return BullCharge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feat_Feat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../feat/Feat */ "./typescript/feat/Feat.ts");
/* harmony import */ var _feat_FeatLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../feat/FeatLevel */ "./typescript/feat/FeatLevel.ts");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\typescript\\data\\feat\\BullCharge.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var BullCharge = _feat_Feat__WEBPACK_IMPORTED_MODULE_1__["Feat"].builder().setIdentifier('bull-charge').setName('Charge du taureau').addKeyword('atout').addKeyword('force').addKeyword('armure lourde').addKeyword('charge').addKeyword('soif de sang').addLevel(_feat_FeatLevel__WEBPACK_IMPORTED_MODULE_2__["FeatLevel"].builder().addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Force 12+")).addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Armures lourdes 5+")).setDescription(__jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}, "Lors d'une charge, ajouter un point de d\xE9g\xE2t physique suppl\xE9mentaire tous les 4 points de charge utilis\xE9s.")).build()).addLevel(_feat_FeatLevel__WEBPACK_IMPORTED_MODULE_2__["FeatLevel"].builder().addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Force 14+")).addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Armures lourdes 10+")).addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Charge du taureau I")).setDescription(__jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 11
  }
}, "Lors d'une charge, ajouter un point de d\xE9g\xE2t physique suppl\xE9mentaire tous les 2 points de charge utilis\xE9s.")).build()).addLevel(_feat_FeatLevel__WEBPACK_IMPORTED_MODULE_2__["FeatLevel"].builder().addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Force 18+")).addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Armures lourdes 18+")).addRequirement(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Charge du taureau II")).setDescription(__jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 11
  }
}, "Lors d'une charge, ajouter un point de d\xE9g\xE2t physique suppl\xE9mentaire par point de charge utilis\xE9.")).build()).build();

/***/ }),

/***/ "./typescript/data/feat/index.ts":
/*!***************************************!*\
  !*** ./typescript/data/feat/index.ts ***!
  \***************************************/
/*! exports provided: AcrobaticDodging, AcrobaticParry, AtlasBurden, BloodBath, BloodThirst, BullCharge, ALL */
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













var ALL = [_AcrobaticDodging__WEBPACK_IMPORTED_MODULE_0__["AcrobaticDodging"], _AcrobaticParry__WEBPACK_IMPORTED_MODULE_1__["AcrobaticParry"], _AtlasBurden__WEBPACK_IMPORTED_MODULE_2__["AtlasBurden"], _BloodBath__WEBPACK_IMPORTED_MODULE_3__["BloodBath"], _BloodThirst__WEBPACK_IMPORTED_MODULE_4__["BloodThirst"], _BullCharge__WEBPACK_IMPORTED_MODULE_5__["BullCharge"]];

/***/ })

})
//# sourceMappingURL=index.js.25970a570ebee13977f6.hot-update.js.map