webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./content/rules/fight/ArmorRule.tsx":
/*!*******************************************!*\
  !*** ./content/rules/fight/ArmorRule.tsx ***!
  \*******************************************/
/*! exports provided: ArmorRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorRule", function() { return ArmorRule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/subject/SubjectKeyword */ "./components/subject/SubjectKeyword.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/subject/Subject */ "./components/subject/Subject.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\rules\\fight\\ArmorRule.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function ArmorRule() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_5__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "rules-fight-armor"), __jsx(_components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__["SubjectKeyword"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "R\xE8gle"), __jsx(_components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__["SubjectKeyword"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "R\xE8gle de combat"), __jsx(_components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__["SubjectKeyword"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Armure"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Armure"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Armure physique."), " Toute entit\xE9e poss\xE8de un score d'armure physique \xE9quivalent \xE0 la somme des modificateurs d'armure apport\xE9s par son \xE9quipement et les \xE9ventuels effets secondaires dont elle peut faire l'objet. L'armure physique diminue le nombre de d\xE9g\xE2ts physiques re\xE7us mais s'av\xE8re inefficace contre les d\xE9g\xE2ts magiques."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Armure magique."), " Toute entit\xE9e poss\xE8de un score d'armure magique \xE9quivalent \xE0 la somme des modificateurs d'armure apport\xE9s par son \xE9quipement et les \xE9ventuels effets secondaires dont elle peut faire l'objet. L'armure magique diminue le nombre de d\xE9g\xE2ts magiques re\xE7us mais s'av\xE8re inefficace contre les d\xE9g\xE2ts physique."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Couches d'armure."), " Une entit\xE9e peut \xE9quiper plusieurs armures en m\xEAme temps, on dit alors qu'elle utilise des couches d'armures. Dans une telle situation, l'entit\xE9e doit alors sommer l'ensemble des effets des armures \xE9quip\xE9es, y compris les effets n\xE9gatifs. Il n'est pas possible d'\xE9quiper plus d'une armure par couche. Attention aussi, car certaines armures peuvent interdire l'utilisation d'autres pi\xE8ces tierces, comme dans le cas de l'utilisation d'une plaque seule en tant qu'armure interm\xE9diaire interdisant par le fait m\xEAme l'\xE9quipement de toute armure lourde."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Couches d'armure physique."), " une armure l\xE9g\xE8re, une armure interm\xE9diaire et une armure lourde"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "D\xE9g\xE2ts d'armures."), " Un score d'armure, qu'il soit magique ou physique, peut, tout comme les points de vie d'une entit\xE9e, faire l'objet de d\xE9g\xE2ts. Dans le cas o\xF9 une entit\xE9e subit des d\xE9g\xE2ts d'armure c'est le ou les effets les plus p\xE9riph\xE9riques qui encaissent les d\xE9g\xE2ts. Quand un modificateur d'armure tombe \xE0 z\xE9ro l'objet ou l'effet qui en est \xE0 l'origine est d\xE9truit ou dissip\xE9."), "Quand un score d'armure est sup\xE9rieur aux d\xE9g\xE2ts pris, l'entit\xE9 ne prends aucun d\xE9g\xE2ts.", __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "Si une pi\xE8ce d'armure accumule plus de d\xE9g\xE2ts d'armure qu'elle n'offre de points elle est alors d\xE9truite. C'est toujours la couche d'armure la plus \xE0 l'ext\xE9rieure qui prends les d\xE9g\xE2ts en premier. Pour qu'une pi\xE8ce d'armure r\xE9cup\xE8re les points d'armure perdus en combat elle doit \xEAtre r\xE9par\xE9e.")));
}

/***/ })

})
//# sourceMappingURL=index.js.cf4272561d96aad24201.hot-update.js.map