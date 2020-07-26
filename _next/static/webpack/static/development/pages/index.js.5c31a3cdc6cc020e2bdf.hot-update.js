webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./content/masteries/Introduction.tsx":
/*!********************************************!*\
  !*** ./content/masteries/Introduction.tsx ***!
  \********************************************/
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
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\masteries\\Introduction.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function range(size) {
  var result = [];

  for (var index = 0; index < size; ++index) {
    result.push(index);
  }

  return result;
}

function cost(index) {
  var base = Math.ceil(index / 5);
  return base * (base + 1) / 2;
}

function Introduction() {
  var _this = this;

  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_5__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "masteries-introduction"), __jsx(_components_subject_SubjectKeyword__WEBPACK_IMPORTED_MODULE_4__["SubjectKeyword"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Ma\xEEtrise"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Introduction"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Les ma\xEEtrises sont des champs disciplinaires appr\xE9ci\xE9s sur une \xE9chelle relative divis\xE9 en deux modificateurs : un modificateur inn\xE9 et un modificateur acquis."), __jsx(_components_Formula__WEBPACK_IMPORTED_MODULE_7__["Formula"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, '\\text{Niveau de maîtrise} = \\text{Modificateur inné} + ' + ' \\text{Modificateur acquis}'), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Le ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 14
    }
  }, "modificateur d'acquis"), " d'une ma\xEEtrise d\xE9pend du total de point d'exp\xE9rience investit dans celle-ci. Chaque point d'exp\xE9rience investi dans une ma\xEEtrise apporte un point d'acquis. Un \xEAtre humain ne peut pas d\xE9penser pour plus de 20 points d'acquis. Des modificateurs externe peuvent cependant amener une ma\xEEtrise au del\xE0 de 20 points."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Le ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 14
    }
  }, "modificateur d'inn\xE9"), " d\xE9pend des caract\xE9ristiques et varie de -5 points \xE0 5 points. Un modificateur d'inn\xE9 est \xE9gal \xE0 la valeur de la caract\xE9ristique qui lui est associ\xE9, soustraite de 10 points, divis\xE9 par 2, le tout arrondie \xE0 l'entier inf\xE9rieur."), __jsx(_components_Formula__WEBPACK_IMPORTED_MODULE_7__["Formula"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, '\\forall n \\in \\mathbb{N}, \\text{Inné}(n) = \\left \\lfloor' + '\\frac{n - 10}{2}' + '\\right \\rfloor'), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Si le modificateur est associ\xE9 \xE0 deux caract\xE9ristiques la caract\xE9ristique dite majeure peut impacter le personnage jusqu'\xE0 3 points maximum et la caract\xE9ristique secondaire peut impacter le personnage jusqu'\xE0 2 points maximum."), __jsx("table", {
    className: "table-1d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("td", {
    colSpan: 2,
    style: {
      borderRightColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 7,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 1,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "\u2190"), __jsx("td", {
    colSpan: 4,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Total"), __jsx("td", {
    colSpan: 1,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "\u2192"), __jsx("td", {
    colSpan: 2,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 2,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 3,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  })), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("td", {
    colSpan: 5,
    style: {
      borderTopColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 1,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "\u2190"), __jsx("td", {
    colSpan: 4,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, "Majeur"), __jsx("td", {
    colSpan: 1,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "\u2192"), __jsx("td", {
    colSpan: 2,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 2,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 3,
    style: {
      borderTopColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  })), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("td", {
    colSpan: 5,
    style: {
      borderTopColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 2,
    style: {
      borderTopColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 1,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "\u2190"), __jsx("td", {
    colSpan: 4,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, "Mineur"), __jsx("td", {
    colSpan: 1,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "\u2192"), __jsx("td", {
    colSpan: 2,
    style: {
      borderLeftColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 2,
    style: {
      borderTopColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }), __jsx("td", {
    colSpan: 3,
    style: {
      borderTopColor: 'transparent'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  })), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("td", {
    style: {
      width: '120px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, " Points d'inn\xE9 "), range(21).map(function (level) {
    return __jsx("td", {
      key: level,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, " ", Math.floor((level - 10) / 2), " ");
  })), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, " Caract\xE9ristique "), range(21).map(function (level) {
    return __jsx("th", {
      style: {
        width: '35px'
      },
      key: level,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }
    }, " ", level, " ");
  })))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Une ma\xEEtrise permet de r\xE9soudre des actions aux cons\xE9quences incertaines par des ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "r\xE9solutions par opposition"), " ou des ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 66
    }
  }, "tests d'auto-r\xE9solution"), ". Certaines ma\xEEtrises ont des effets suppl\xE9mentaires en fonction de leur niveau, dans ce cas la nature des effets sont sp\xE9cifi\xE9s dans la description de chaque ma\xEEtrise.")));
}

/***/ })

})
//# sourceMappingURL=index.js.5c31a3cdc6cc020e2bdf.hot-update.js.map