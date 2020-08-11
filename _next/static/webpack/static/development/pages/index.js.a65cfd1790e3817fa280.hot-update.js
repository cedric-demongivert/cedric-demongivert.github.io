webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./content/rules/fight/ActionRule.tsx":
/*!********************************************!*\
  !*** ./content/rules/fight/ActionRule.tsx ***!
  \********************************************/
/*! exports provided: ActionRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionRule", function() { return ActionRule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/subject/Subject */ "./components/subject/Subject.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\rules\\fight\\ActionRule.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function ActionRule() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "rules-fight-action"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Actions"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Action."), " Quand une entit\xE9e prend l'action lors d'un tour, celle-ci doit alors d\xE9crire les d\xE9cisions qu'elle souhaite prendre. Si le ma\xEEtre du jeu accepte la description propos\xE9e, l'entit\xE9e peut alors r\xE9soudre chaque d\xE9cision en suivant les r\xE8gles qui lui sont li\xE9e. Si la ou les d\xE9cisions d'une entit\xE9e suivent un sch\xE9ma pr\xE9-\xE9tabli, il n'est pas utile de valider la d\xE9cision."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Sous-charge."), " Une entit\xE9e est consid\xE9r\xE9 en sous-charge quand elle poss\xE8de plus de points de charge qu'il n'en faut pour supporter l'enti\xE8ret\xE9 de son \xE9quipement. Dans cette situation, tous les deux points de charge non utilis\xE9 sont convertis \xE0 la fois en points d'initiative bonus et en points de d\xE9g\xE2ts suppl\xE9mentaires ajoutable aux attaques au corps \xE0 corps."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Sur-charge."), " Tous les points de charge au dessus de la limite de l'entit\xE9 implique la perte d'un point de d\xE9g\xE2t \xE0 toutes les attaques au corps \xE0 corps et la perte d'un point \xE0 son initiative.")));
}

/***/ }),

/***/ "./content/rules/fight/FightRules.tsx":
/*!********************************************!*\
  !*** ./content/rules/fight/FightRules.tsx ***!
  \********************************************/
/*! exports provided: FightRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightRules", function() { return FightRules; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/subject/Subject */ "./components/subject/Subject.tsx");
/* harmony import */ var _components_LocalSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/LocalSummary */ "./components/LocalSummary.tsx");
/* harmony import */ var _ArmorRule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArmorRule */ "./content/rules/fight/ArmorRule.tsx");
/* harmony import */ var _AttackRule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AttackRule */ "./content/rules/fight/AttackRule.tsx");
/* harmony import */ var _DamageRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DamageRule */ "./content/rules/fight/DamageRule.tsx");
/* harmony import */ var _HealthPointRule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HealthPointRule */ "./content/rules/fight/HealthPointRule.tsx");
/* harmony import */ var _InitiativeRule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InitiativeRule */ "./content/rules/fight/InitiativeRule.tsx");
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Introduction */ "./content/rules/fight/Introduction.tsx");
/* harmony import */ var _WeigthPointRule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WeigthPointRule */ "./content/rules/fight/WeigthPointRule.tsx");
/* harmony import */ var _ActionRule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ActionRule */ "./content/rules/fight/ActionRule.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\rules\\fight\\FightRules.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















function FightRules() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "rules-fight"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Sc\xE8nes d'action"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_LocalSummary__WEBPACK_IMPORTED_MODULE_6__["LocalSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_Introduction__WEBPACK_IMPORTED_MODULE_12__["Introduction"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(_InitiativeRule__WEBPACK_IMPORTED_MODULE_11__["InitiativeRule"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_HealthPointRule__WEBPACK_IMPORTED_MODULE_10__["HealthPointRule"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(_ArmorRule__WEBPACK_IMPORTED_MODULE_7__["ArmorRule"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(_WeigthPointRule__WEBPACK_IMPORTED_MODULE_13__["WeigthPointRule"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_ActionRule__WEBPACK_IMPORTED_MODULE_14__["ActionRule"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(_AttackRule__WEBPACK_IMPORTED_MODULE_8__["AttackRule"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_DamageRule__WEBPACK_IMPORTED_MODULE_9__["DamageRule"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.a65cfd1790e3817fa280.hot-update.js.map