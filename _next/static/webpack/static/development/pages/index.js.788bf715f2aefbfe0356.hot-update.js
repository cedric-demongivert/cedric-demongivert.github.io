webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/feat/FeatLinks.tsx":
/*!***************************************!*\
  !*** ./components/feat/FeatLinks.tsx ***!
  \***************************************/
/*! exports provided: FeatLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatLinks", function() { return FeatLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/Data */ "./components/data/Data.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\components\\feat\\FeatLinks.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FeatLinks(properties) {
  return __jsx(_data_Data__WEBPACK_IMPORTED_MODULE_1__["Data"].List, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, properties.children.map(function (feat, index) {
    return __jsx("a", {
      className: "data-element",
      href: '#feats-' + feat.identifier,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }
    }, feat.name);
  }));
}

(function (_FeatLinks) {})(FeatLinks || (FeatLinks = {}));

/***/ }),

/***/ "./content/masteries/supportMasteries/DodgeMastery.tsx":
/*!*************************************************************!*\
  !*** ./content/masteries/supportMasteries/DodgeMastery.tsx ***!
  \*************************************************************/
/*! exports provided: DodgeMastery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DodgeMastery", function() { return DodgeMastery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/subject/SubjectKeyword */ "./components/subject/SubjectKeyword.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/subject/Subject */ "./components/subject/Subject.tsx");
/* harmony import */ var _components_data_Data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/data/Data */ "./components/data/Data.tsx");
/* harmony import */ var _components_feat_FeatLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/feat/FeatLinks */ "./components/feat/FeatLinks.tsx");
/* harmony import */ var _typescript_data_feat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../typescript/data/feat */ "./typescript/data/feat/index.ts");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\masteries\\supportMasteries\\DodgeMastery.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function DodgeMastery() {
  var feats = _typescript_data_feat__WEBPACK_IMPORTED_MODULE_9__["ALL"].filter(function (x) {
    return x.keywords.has('esquive');
  });
  feats.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_5__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "masteries-misc-dodge"), __jsx(_components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__["SubjectKeyword"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Ma\xEEtrise"), __jsx(_components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__["SubjectKeyword"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Utilitaire"), __jsx(_components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__["SubjectKeyword"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Esquive"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Esquive"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("table", {
    className: "instinct-modifier",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "Majeure"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/characteristics/dexterity.svg",
    width: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }))))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "La ma\xEEtrise de l'esquive appr\xE9cie la capacit\xE9 d'un personnage \xE0 se mouvoir dans l'objectif d'\xE9chapper \xE0 une menace. L'esquive est une ma\xEEtrise importante pour les combats car elle permet d'\xE9viter un coup par tour tout en se repositionnant. Elle est aussi la seule comp\xE9tence permettant d'\xE9chapper \xE0 certains pi\xE8ges ou sortil\xE8ges."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "L'esquive se joue toujours en opposition avec le degr\xE9 de difficult\xE9 de la menace. Esquiver une attaque influera les chances de succ\xE8s de l'attaquant vis-\xE0-vis de sa propre ma\xEEtrise de son arme. Esquiver un sort ou un pi\xE8ge influera ses chances de succ\xE8s vis-\xE0-vis de son propre degr\xE9 de difficult\xE9. Le succ\xE8s d'une esquive peut \xEAtre mitig\xE9 dans certaines situations."), __jsx(_components_data_Data__WEBPACK_IMPORTED_MODULE_7__["Data"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_components_feat_FeatLinks__WEBPACK_IMPORTED_MODULE_8__["FeatLinks"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, feats))));
}

/***/ })

})
//# sourceMappingURL=index.js.788bf715f2aefbfe0356.hot-update.js.map