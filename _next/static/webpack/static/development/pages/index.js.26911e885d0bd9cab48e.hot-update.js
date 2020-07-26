webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/feat/FeatSubject.tsx":
/*!*****************************************!*\
  !*** ./components/feat/FeatSubject.tsx ***!
  \*****************************************/
/*! exports provided: FeatSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatSubject", function() { return FeatSubject; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/subject/SubjectKeyword */ "./components/subject/SubjectKeyword.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/subject/Subject */ "./components/subject/Subject.tsx");

var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\components\\feat\\FeatSubject.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function roman(index) {
  var result = '';

  while (index >= 100) {
    result += 'C';
    index -= 100;
  }

  while (index >= 10) {
    result += 'X';
    index -= 10;
  }

  while (index >= 9) {
    result += 'IX';
    index -= 9;
  }

  while (index >= 5) {
    result += 'V';
    index -= 5;
  }

  while (index >= 4) {
    result += 'IV';
    index -= 4;
  }

  while (index >= 1) {
    result += 'I';
    index -= 1;
  }

  return result;
}

function FeatSubject(properties) {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_6__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, 'feats-' + properties.children.identifier), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(properties.children.keywords).map(function (keyword, index) {
    return __jsx(_components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_5__["SubjectKeyword"], {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 18
      }
    }, keyword);
  }), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_4__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, properties.children.name), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_2__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_3__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, properties.children.description));
}

(function (_FeatSubject) {})(FeatSubject || (FeatSubject = {}));

/***/ })

})
//# sourceMappingURL=index.js.26911e885d0bd9cab48e.hot-update.js.map