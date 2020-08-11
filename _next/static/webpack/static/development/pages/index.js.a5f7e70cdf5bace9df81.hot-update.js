webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./content/rules/fight/AttackRule.tsx":
/*!********************************************!*\
  !*** ./content/rules/fight/AttackRule.tsx ***!
  \********************************************/
/*! exports provided: AttackRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackRule", function() { return AttackRule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/subject/SubjectSummary */ "./components/subject/SubjectSummary.tsx");
/* harmony import */ var _components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/subject/SubjectContent */ "./components/subject/SubjectContent.tsx");
/* harmony import */ var _components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/subject/SubjectTitle */ "./components/subject/SubjectTitle.tsx");
/* harmony import */ var _components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/subject/SubjectIdentifier */ "./components/subject/SubjectIdentifier.tsx");
/* harmony import */ var _components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/subject/Subject */ "./components/subject/Subject.tsx");
var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\rules\\fight\\AttackRule.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function AttackRule() {
  return __jsx(_components_subject_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components_subject_SubjectIdentifier__WEBPACK_IMPORTED_MODULE_4__["SubjectIdentifier"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "rules-fight-attack"), __jsx(_components_subject_SubjectTitle__WEBPACK_IMPORTED_MODULE_3__["SubjectTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Attaque au corps \xE0 corps"), __jsx(_components_subject_SubjectSummary__WEBPACK_IMPORTED_MODULE_1__["SubjectSummary"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_components_subject_SubjectContent__WEBPACK_IMPORTED_MODULE_2__["SubjectContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Une attaque est une action simple qui n\xE9c\xE9ssite d'\xEAtre \xE0 port\xE9 de sa cible. Les attaques ne peuvent pas faire l'objet d'une quelconque coop\xE9ration mais leur succ\xE8s peuvent \xEAtre influenc\xE9 par l'environnement. Une attaque se d\xE9roule toujours en deux temps : la touche et la r\xE9solution des d\xE9g\xE2ts."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Lors de la phase de touche, le d\xE9fenseur peut s'il en a la capacit\xE9 choisir d'esquiver, de parer ou de ne rien faire. La touche est un test d'opposition standard entre la ma\xEEtrise de l'arme de l'attaquant et la ma\xEEtrise choisie par le d\xE9fenseur. Si le d\xE9fenseur ne fait rien ou ne peut ni esquiver le coup ni le parer, l'attaquant touche automatiquement."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Une entit\xE9e \xE0 le droit \xE0 une esquive par tour. Lors d'une esquive, le d\xE9fenseur oppose sa ma\xEEtrise de l'esquive \xE0 la ma\xEEtrise de l'arme de l'attaquant et choisi une direction dans laquelle esquiver. Si l'esquive est r\xE9ussie, le d\xE9fenseur peut alors r\xE9aliser un pas de placement dans la direction qu'il a choisie et l'attaquant \xE9choue son action. Le nombre d'esquive par tour peut varier en fonction des atouts et autres effets. Le d\xE9fenseur doit toujours equiver dans une direction qui est libre d'acc\xE8s."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Une entit\xE9e \xE0 le droit \xE0 une parade par tour. Lors d'une parade, le d\xE9fenseur oppose la ma\xEEtrise de sa propre arme, ou de son bouclier \xE0 la ma\xEEtrise de l'attaquant. Si la parade r\xE9ussie, l'attaquant \xE9choue son action. Le nombre de parade par tour peut varier en fonction des atouts et des effets."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Certaines situations sont \xE0 l'avantage de l'attaquant. Si le d\xE9fenseur esquive pour sortir de la zone de contr\xF4le de son adversaire il se voit alors attribuer un malus de 2 points sur sa ma\xEEtrise de l'esquive. Pour chaque entit\xE9e hostile autour de lui dont le d\xE9fenseur est l'objet de l'attention, le d\xE9fenseur se voit en plus attribuer un malus de 2 points suppl\xE9mentaire sur la ma\xEEtrise qu'il utilise pour se d\xE9fendre."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Certaines situations sont \xE0 l'avantage du d\xE9fenseur. Pour chaque entit\xE9e hostile autour de lui dont l'attaquant est l'objet de l'attention, le d\xE9fenseur se voit en plus attribuer un bonus de 2 points suppl\xE9mtaire sur la ma\xEEtrise qu'il utilise pour se d\xE9fendre. Si l'attaquant doit r\xE9aliser un pas de placement pour attaquer le d\xE9fenseur, celui-ci gagne 2 points suppl\xE9mentaire sur la ma\xEEtrise qu'il utilise pour se d\xE9fendre."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "Certaines r\xE8gles suppl\xE9mentaire peuvent encore modifier le niveau de ma\xEEtrise de l'attaquant ou du d\xE9fenseur en fonction du type d'action entrepris ou des effets actifs."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Si l'attaquant r\xE9ussi sa touche, il peut alors calculer les d\xE9g\xE2ts qu'il va infliger au d\xE9fenseur.")));
}

/***/ })

})
//# sourceMappingURL=index.js.a5f7e70cdf5bace9df81.hot-update.js.map