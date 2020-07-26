webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./content/knowledges/Introduction.tsx":
/*!*********************************************!*\
  !*** ./content/knowledges/Introduction.tsx ***!
  \*********************************************/
/*! exports provided: Introduction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Introduction", function() { return Introduction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/subject/SubjectKeyword */ "./components/subject/SubjectKeyword.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/subject/Subject */ "./components/subject/Subject.tsx");
/* harmony import */ var _components_Formula__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Formula */ "./components/Formula.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\knowledges\\Introduction.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function range(size) {
  var result = [];

  for (var index = 0; index < size; ++index) {
    result.push(index);
  }

  return result;
}

function Introduction() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_5__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "knowledges-introduction"), __jsx(_components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__["SubjectKeyword"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Connaissance"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Introduction"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Les connaissances sont des champs disciplinaires appr\xE9ci\xE9s sur une \xE9chelle relative divis\xE9 en deux modificateurs : un modificateur de sp\xE9cialisation et un modificateur d'acquis. Les connaissances appartiennent \xE0 des domaines de connaissances, chaque domaine peut regrouper plusieurs connaissances diff\xE9rentes ayant un lien plus ou moins important entre elles."), __jsx(_components_Formula__WEBPACK_IMPORTED_MODULE_7__["Formula"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, '\\text{Niveau de connaissance} = ' + '\\text{Modificateur de spécialisation} + ' + '\\text{Modificateur d\'acquis}'), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Le ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 14
    }
  }, "modificateur d'acquis"), " d'une connaissance d\xE9pend du total de point d'exp\xE9rience investi dans celle-ci. Chaque point d'exp\xE9rience investi dans une connaissance apporte un point d'acquis. Il n'est pas possible pour un \xEAtre humain d'investir plus de 20 points d'exp\xE9rience dans une connaissance."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Le ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 14
    }
  }, "modificateur de sp\xE9cialisation"), " d\xE9pend de l'investissement du personnage dans le domaine parent de la connaissance. Un personnage peut toujours choisir de ce sp\xE9cialiser dans un domaine en \xE9change de 5 points d'exp\xE9rience. Un personnage peut se sp\xE9cialiser au maximum dans trois domaines diff\xE9rents. Chaque domaine est alors class\xE9 par ordre d'importance : le domaine primaire, le domaine secondaire et le domaine tertiaire. Toutes les connaissances du domaine primaire ont le droit \xE0 un bonus de sp\xE9cialisation de 3 points, toutes les connaissances du domaine secondaire ont le droit \xE0 un bonus de sp\xE9cialisation de 2 points et toutes les connaissances du domaine tertiaire ont le droit \xE0 un bonus de sp\xE9cialisation de 1 point."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Les connaissances permettent de r\xE9soudre des actions aux cons\xE9quences incertaines par des ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 31
    }
  }, "r\xE9solutions par opposition"), " ou des ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, "tests d'auto-r\xE9solution"), ". Certaines connaissances ont des effets suppl\xE9mentaires en fonction de leur niveau, dans ce cas la nature des effets sont sp\xE9cifi\xE9s dans la description de chaque connaissance.")));
}

/***/ })

})
//# sourceMappingURL=index.js.00adb2ecd21756ec7b0b.hot-update.js.map