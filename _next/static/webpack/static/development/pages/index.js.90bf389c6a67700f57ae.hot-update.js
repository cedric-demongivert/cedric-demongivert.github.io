webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/data/alchemy/processed/CeruleanInfusion.tsx":
/*!****************************************************************!*\
  !*** ./typescript/data/alchemy/processed/CeruleanInfusion.tsx ***!
  \****************************************************************/
/*! exports provided: CeruleanInfusion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeruleanInfusion", function() { return CeruleanInfusion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Unit */ "./components/Unit.tsx");
/* harmony import */ var _alchemy_AlchemicMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../alchemy/AlchemicMaterial */ "./typescript/alchemy/AlchemicMaterial.ts");
/* harmony import */ var _alchemy_AlchemicProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../alchemy/AlchemicProperty */ "./typescript/alchemy/AlchemicProperty.ts");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\typescript\\data\\alchemy\\processed\\CeruleanInfusion.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var CeruleanInfusion = _alchemy_AlchemicMaterial__WEBPACK_IMPORTED_MODULE_2__["AlchemicMaterial"].builder().setName('Infusion azurée').setIdentifier('cerulean-infusion').setDescription(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}, "L'infusion azur\xE9e est une solution de lys azur\xE9s port\xE9e \xE0 \xE9bulition pendant une petite dizaine de minute. Cette infusion est connue pour aider les blessures \xE0 cicatriser."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}, __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}, "Stabilisant."), " \xC9quivalent \xE0 la r\xE9ussite automatique d'une tentative de stabilisation en cas de coma. La dur\xE9e d'un coma est divis\xE9 par deux quand le stabilisant est ing\xE9r\xE9. L'utilisation multiple du stabilisant ne r\xE9duit pas plus la dur\xE9e du coma."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}, __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 11
  }
}, "R\xE9g\xE9n\xE9ration."), " Le personnage r\xE9cup\xE8re un nombre de points de vie \xE9quivalent \xE0 sa constitution divis\xE9e par 4 \xE0 la fin de chaque journ\xE9e pendant laquelle l'effet de r\xE9g\xE9n\xE9ration \xE0 cours. L'utilisation multiple de la r\xE9g\xE9n\xE9ration n'augmente pas plus son effet. Si l'effet de r\xE9g\xE9n\xE9ration est concentr\xE9 le personnage gagne alors un point de vie suppl\xE9mentaire par niveau de concentration. Si plusieurs effets de r\xE9g\xE9n\xE9ration sont ing\xE9r\xE9s, le plus concentr\xE9 prime sur tous les autres."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
}, __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 11
  }
}, "Ossature v\xE9g\xE9tale."), " Le temps de gu\xE9rison des fractures est divis\xE9 par deux. Un personnage sous effet de l'ossature v\xE9g\xE9tale peut annuler toute fracture potentielle en r\xE9alisant un test d'opposition entre sa constitution et un degr\xE9 de difficult\xE9 de 8 points."))).addProperty(_alchemy_AlchemicProperty__WEBPACK_IMPORTED_MODULE_3__["AlchemicProperty"].builder().addEffect(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Stabilisant (Qa \u2265 10)")).setCost(1).setDuration(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "1", __jsx(_components_Unit__WEBPACK_IMPORTED_MODULE_1__["Unit"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 25
  }
}, "r"), " + 1", __jsx(_components_Unit__WEBPACK_IMPORTED_MODULE_1__["Unit"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 43
  }
}, "r"), " \xD7 \xBCQa")).build()).addProperty(_alchemy_AlchemicProperty__WEBPACK_IMPORTED_MODULE_3__["AlchemicProperty"].builder().addEffect(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "R\xE9g\xE9n\xE9ration")).setCost(1).setDuration(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "1", __jsx(_components_Unit__WEBPACK_IMPORTED_MODULE_1__["Unit"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 25
  }
}, "j"), " + 1", __jsx(_components_Unit__WEBPACK_IMPORTED_MODULE_1__["Unit"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 43
  }
}, "j"), " \xD7 \u2155Qa")).build()).addProperty(_alchemy_AlchemicProperty__WEBPACK_IMPORTED_MODULE_3__["AlchemicProperty"].builder().addEffect(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Ossature v\xE9g\xE9tale (Liqueur de lys)")).setCost(1).setDuration(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "10", __jsx(_components_Unit__WEBPACK_IMPORTED_MODULE_1__["Unit"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 26
  }
}, "m"), " \xD7 Qa")).build()).build();

/***/ }),

/***/ "./typescript/data/alchemy/processed/index.ts":
/*!****************************************************!*\
  !*** ./typescript/data/alchemy/processed/index.ts ***!
  \****************************************************/
/*! exports provided: BloodDance, BloodyBellsInfusion, CeruleanInfusion, CourrierBlessing, DreamstarInfusion, GoldenSun, GreenleavesCurse, GreenleavesInfusion, GreenleavesPurifier, HunterBlessing, MercenaryBlessing, MorpheaNectar, PandoraInfusion, PegasusInfusion, SkyhammerInfusion, SquireBlessing, StormLiquor, SunriseInfusion, ThiefBlessing, TreeBlood, WarriorBlessing, WindSyrup, ALL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL", function() { return ALL; });
/* harmony import */ var _BloodDance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BloodDance */ "./typescript/data/alchemy/processed/BloodDance.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BloodDance", function() { return _BloodDance__WEBPACK_IMPORTED_MODULE_0__["BloodDance"]; });

/* harmony import */ var _BloodyBellsInfusion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BloodyBellsInfusion */ "./typescript/data/alchemy/processed/BloodyBellsInfusion.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BloodyBellsInfusion", function() { return _BloodyBellsInfusion__WEBPACK_IMPORTED_MODULE_1__["BloodyBellsInfusion"]; });

/* harmony import */ var _CeruleanInfusion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CeruleanInfusion */ "./typescript/data/alchemy/processed/CeruleanInfusion.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CeruleanInfusion", function() { return _CeruleanInfusion__WEBPACK_IMPORTED_MODULE_2__["CeruleanInfusion"]; });

/* harmony import */ var _CourrierBlessing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CourrierBlessing */ "./typescript/data/alchemy/processed/CourrierBlessing.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourrierBlessing", function() { return _CourrierBlessing__WEBPACK_IMPORTED_MODULE_3__["CourrierBlessing"]; });

/* harmony import */ var _DreamstarInfusion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DreamstarInfusion */ "./typescript/data/alchemy/processed/DreamstarInfusion.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DreamstarInfusion", function() { return _DreamstarInfusion__WEBPACK_IMPORTED_MODULE_4__["DreamstarInfusion"]; });

/* harmony import */ var _GoldenSun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GoldenSun */ "./typescript/data/alchemy/processed/GoldenSun.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoldenSun", function() { return _GoldenSun__WEBPACK_IMPORTED_MODULE_5__["GoldenSun"]; });

/* harmony import */ var _GreenleavesCurse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GreenleavesCurse */ "./typescript/data/alchemy/processed/GreenleavesCurse.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GreenleavesCurse", function() { return _GreenleavesCurse__WEBPACK_IMPORTED_MODULE_6__["GreenleavesCurse"]; });

/* harmony import */ var _GreenleavesInfusion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GreenleavesInfusion */ "./typescript/data/alchemy/processed/GreenleavesInfusion.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GreenleavesInfusion", function() { return _GreenleavesInfusion__WEBPACK_IMPORTED_MODULE_7__["GreenleavesInfusion"]; });

/* harmony import */ var _GreenleavesPurifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GreenleavesPurifier */ "./typescript/data/alchemy/processed/GreenleavesPurifier.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GreenleavesPurifier", function() { return _GreenleavesPurifier__WEBPACK_IMPORTED_MODULE_8__["GreenleavesPurifier"]; });

/* harmony import */ var _HunterBlessing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HunterBlessing */ "./typescript/data/alchemy/processed/HunterBlessing.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HunterBlessing", function() { return _HunterBlessing__WEBPACK_IMPORTED_MODULE_9__["HunterBlessing"]; });

/* harmony import */ var _MercenaryBlessing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MercenaryBlessing */ "./typescript/data/alchemy/processed/MercenaryBlessing.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MercenaryBlessing", function() { return _MercenaryBlessing__WEBPACK_IMPORTED_MODULE_10__["MercenaryBlessing"]; });

/* harmony import */ var _MorpheaNectar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MorpheaNectar */ "./typescript/data/alchemy/processed/MorpheaNectar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorpheaNectar", function() { return _MorpheaNectar__WEBPACK_IMPORTED_MODULE_11__["MorpheaNectar"]; });

/* harmony import */ var _PandoraInfusion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PandoraInfusion */ "./typescript/data/alchemy/processed/PandoraInfusion.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PandoraInfusion", function() { return _PandoraInfusion__WEBPACK_IMPORTED_MODULE_12__["PandoraInfusion"]; });

/* harmony import */ var _PegasusInfusion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PegasusInfusion */ "./typescript/data/alchemy/processed/PegasusInfusion.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PegasusInfusion", function() { return _PegasusInfusion__WEBPACK_IMPORTED_MODULE_13__["PegasusInfusion"]; });

/* harmony import */ var _SkyhammerInfusion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SkyhammerInfusion */ "./typescript/data/alchemy/processed/SkyhammerInfusion.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkyhammerInfusion", function() { return _SkyhammerInfusion__WEBPACK_IMPORTED_MODULE_14__["SkyhammerInfusion"]; });

/* harmony import */ var _SquireBlessing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SquireBlessing */ "./typescript/data/alchemy/processed/SquireBlessing.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SquireBlessing", function() { return _SquireBlessing__WEBPACK_IMPORTED_MODULE_15__["SquireBlessing"]; });

/* harmony import */ var _StormLiquor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StormLiquor */ "./typescript/data/alchemy/processed/StormLiquor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StormLiquor", function() { return _StormLiquor__WEBPACK_IMPORTED_MODULE_16__["StormLiquor"]; });

/* harmony import */ var _SunriseInfusion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SunriseInfusion */ "./typescript/data/alchemy/processed/SunriseInfusion.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SunriseInfusion", function() { return _SunriseInfusion__WEBPACK_IMPORTED_MODULE_17__["SunriseInfusion"]; });

/* harmony import */ var _ThiefBlessing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ThiefBlessing */ "./typescript/data/alchemy/processed/ThiefBlessing.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThiefBlessing", function() { return _ThiefBlessing__WEBPACK_IMPORTED_MODULE_18__["ThiefBlessing"]; });

/* harmony import */ var _TreeBlood__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TreeBlood */ "./typescript/data/alchemy/processed/TreeBlood.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeBlood", function() { return _TreeBlood__WEBPACK_IMPORTED_MODULE_19__["TreeBlood"]; });

/* harmony import */ var _WarriorBlessing__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./WarriorBlessing */ "./typescript/data/alchemy/processed/WarriorBlessing.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarriorBlessing", function() { return _WarriorBlessing__WEBPACK_IMPORTED_MODULE_20__["WarriorBlessing"]; });

/* harmony import */ var _WindSyrup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./WindSyrup */ "./typescript/data/alchemy/processed/WindSyrup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindSyrup", function() { return _WindSyrup__WEBPACK_IMPORTED_MODULE_21__["WindSyrup"]; });













































var ALL = [_BloodDance__WEBPACK_IMPORTED_MODULE_0__["BloodDance"], _BloodyBellsInfusion__WEBPACK_IMPORTED_MODULE_1__["BloodyBellsInfusion"], _CeruleanInfusion__WEBPACK_IMPORTED_MODULE_2__["CeruleanInfusion"], _CourrierBlessing__WEBPACK_IMPORTED_MODULE_3__["CourrierBlessing"], _DreamstarInfusion__WEBPACK_IMPORTED_MODULE_4__["DreamstarInfusion"], _GoldenSun__WEBPACK_IMPORTED_MODULE_5__["GoldenSun"], _GreenleavesCurse__WEBPACK_IMPORTED_MODULE_6__["GreenleavesCurse"], _GreenleavesInfusion__WEBPACK_IMPORTED_MODULE_7__["GreenleavesInfusion"], _GreenleavesPurifier__WEBPACK_IMPORTED_MODULE_8__["GreenleavesPurifier"], _HunterBlessing__WEBPACK_IMPORTED_MODULE_9__["HunterBlessing"], _MercenaryBlessing__WEBPACK_IMPORTED_MODULE_10__["MercenaryBlessing"], _MorpheaNectar__WEBPACK_IMPORTED_MODULE_11__["MorpheaNectar"], _PandoraInfusion__WEBPACK_IMPORTED_MODULE_12__["PandoraInfusion"], _PegasusInfusion__WEBPACK_IMPORTED_MODULE_13__["PegasusInfusion"], _SkyhammerInfusion__WEBPACK_IMPORTED_MODULE_14__["SkyhammerInfusion"], _SquireBlessing__WEBPACK_IMPORTED_MODULE_15__["SquireBlessing"], _StormLiquor__WEBPACK_IMPORTED_MODULE_16__["StormLiquor"], _SunriseInfusion__WEBPACK_IMPORTED_MODULE_17__["SunriseInfusion"], _ThiefBlessing__WEBPACK_IMPORTED_MODULE_18__["ThiefBlessing"], _TreeBlood__WEBPACK_IMPORTED_MODULE_19__["TreeBlood"], _WarriorBlessing__WEBPACK_IMPORTED_MODULE_20__["WarriorBlessing"], _WindSyrup__WEBPACK_IMPORTED_MODULE_21__["WindSyrup"]];

/***/ })

})
//# sourceMappingURL=index.js.90bf389c6a67700f57ae.hot-update.js.map