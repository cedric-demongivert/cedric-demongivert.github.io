webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Spell.tsx":
/*!******************************!*\
  !*** ./components/Spell.tsx ***!
  \******************************/
/*! exports provided: Spell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spell", function() { return Spell; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\components\\Spell.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(range);




function range(size) {
  var index;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function range$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < size)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return index;

        case 4:
          ++index;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function Spell(props) {
  var runesByRow = Math.ceil(props.runes.length / props.rows);
  return __jsx("div", {
    className: "spells",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('spell d-none d-lg-flex', props.className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(range(props.rows)).map(function (index) {
    var runes = [];

    if (index > 0) {
      runes.push(__jsx("div", {
        key: props.runes.length + index,
        className: "w-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }));
    }

    for (var rune = 0; rune < runesByRow; ++rune) {
      runes.push(__jsx("img", {
        key: rune * props.rows + index,
        className: "spell-rune",
        src: './images/runic-' + props.runes[rune * props.rows + index] + '.svg',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }));
    }

    return runes;
  }).reduce(function (a, b) {
    return a.concat(b);
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('spell spell-column d-flex d-lg-none', props.className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, props.runes.map(function (rune, index) {
    return __jsx("img", {
      key: index,
      className: "spell-rune",
      src: './images/runic-' + rune + '.svg',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 20
      }
    });
  })));
}

/***/ }),

/***/ "./content/magic/evocation/Evocation.tsx":
/*!***********************************************!*\
  !*** ./content/magic/evocation/Evocation.tsx ***!
  \***********************************************/
/*! exports provided: Evocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evocation", function() { return Evocation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/subject/Subject */ "./components/subject/Subject.tsx");
/* harmony import */ var _components_LocalSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/LocalSummary */ "./components/LocalSummary.tsx");
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Introduction */ "./content/magic/evocation/Introduction.tsx");
/* harmony import */ var _Incantation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Incantation */ "./content/magic/evocation/Incantation.tsx");
/* harmony import */ var _Canalization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Canalization */ "./content/magic/evocation/Canalization.tsx");
/* harmony import */ var _spells__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spells */ "./content/magic/evocation/spells/index.ts");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\magic\\evocation\\Evocation.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Evocation() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "magic-spells"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "\xC9vocation"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_components_LocalSummary__WEBPACK_IMPORTED_MODULE_6__["LocalSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_Introduction__WEBPACK_IMPORTED_MODULE_7__["Introduction"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_Incantation__WEBPACK_IMPORTED_MODULE_8__["Incantation"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(_Canalization__WEBPACK_IMPORTED_MODULE_9__["Canalization"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(_spells__WEBPACK_IMPORTED_MODULE_10__["Spells"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./content/magic/evocation/spells/FireBreath.tsx":
/*!*******************************************************!*\
  !*** ./content/magic/evocation/spells/FireBreath.tsx ***!
  \*******************************************************/
/*! exports provided: FireBreath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireBreath", function() { return FireBreath; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/subject/Subject */ "./components/subject/Subject.tsx");
/* harmony import */ var _components_Spell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Spell */ "./components/Spell.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\magic\\evocation\\spells\\FireBreath.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function FireBreath() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "magic-evocation-spells-fire-breath"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Vent de flamme"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
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
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_components_Spell__WEBPACK_IMPORTED_MODULE_6__["Spell"], {
    runes: ['zet', 'semet', 'ket', 'yemet'],
    rows: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "text-center ipa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "[z\u025Bt se.m\u025Bt k\u025Bt je.m\u025Bt]")));
}

/***/ }),

/***/ "./content/magic/evocation/spells/Liquefaction.tsx":
/*!*********************************************************!*\
  !*** ./content/magic/evocation/spells/Liquefaction.tsx ***!
  \*********************************************************/
/*! exports provided: Liquefaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Liquefaction", function() { return Liquefaction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/subject/Subject */ "./components/subject/Subject.tsx");
/* harmony import */ var _components_Spell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Spell */ "./components/Spell.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\magic\\evocation\\spells\\Liquefaction.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Liquefaction() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "magic-evocation-spells-liquefaction"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Liqu\xE9faction"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
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
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_components_Spell__WEBPACK_IMPORTED_MODULE_6__["Spell"], {
    runes: ['set', 'kemet', 'met', 'zemet', 'zet', 'metzeter'],
    rows: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "text-center ipa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "[s\u025Bt ke.m\u025Bt m\u025Bt ze.m\u025Bt z\u025Bt m\u025Bt.ze.t\u025B\u0280]")));
}

/***/ }),

/***/ "./content/magic/evocation/spells/Sandblast.tsx":
/*!******************************************************!*\
  !*** ./content/magic/evocation/spells/Sandblast.tsx ***!
  \******************************************************/
/*! exports provided: Sandblast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sandblast", function() { return Sandblast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/subject/Subject */ "./components/subject/Subject.tsx");
/* harmony import */ var _components_Spell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Spell */ "./components/Spell.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\magic\\evocation\\spells\\Sandblast.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Sandblast() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "magic-evocation-spells-sand-blast"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Jet de sable"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
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
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_components_Spell__WEBPACK_IMPORTED_MODULE_6__["Spell"], {
    runes: ['zet', 'semet', 'ket', 'kemet'],
    rows: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "text-center ipa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "[z\u025Bt se.m\u025Bt k\u025Bt ke.m\u025Bt]")));
}

/***/ }),

/***/ "./content/magic/evocation/spells/Spells.tsx":
/*!***************************************************!*\
  !*** ./content/magic/evocation/spells/Spells.tsx ***!
  \***************************************************/
/*! exports provided: Spells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spells", function() { return Spells; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/subject/Subject */ "./components/subject/Subject.tsx");
/* harmony import */ var _FireBreath__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FireBreath */ "./content/magic/evocation/spells/FireBreath.tsx");
/* harmony import */ var _Sandblast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sandblast */ "./content/magic/evocation/spells/Sandblast.tsx");
/* harmony import */ var _Liquefaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Liquefaction */ "./content/magic/evocation/spells/Liquefaction.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\magic\\evocation\\spells\\Spells.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Spells() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "magic-evocation-spells"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Sorts"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_Liquefaction__WEBPACK_IMPORTED_MODULE_8__["Liquefaction"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(_Sandblast__WEBPACK_IMPORTED_MODULE_7__["Sandblast"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(_FireBreath__WEBPACK_IMPORTED_MODULE_6__["FireBreath"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./content/magic/evocation/spells/index.ts":
/*!*************************************************!*\
  !*** ./content/magic/evocation/spells/index.ts ***!
  \*************************************************/
/*! exports provided: Spells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spells */ "./content/magic/evocation/spells/Spells.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spells", function() { return _Spells__WEBPACK_IMPORTED_MODULE_0__["Spells"]; });



/***/ })

})
//# sourceMappingURL=index.js.5d983d96a1977bff55cb.hot-update.js.map