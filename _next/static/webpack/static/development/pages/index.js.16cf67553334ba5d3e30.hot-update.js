webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/alchemy/AlchemicTransformation.ts":
/*!******************************************************!*\
  !*** ./typescript/alchemy/AlchemicTransformation.ts ***!
  \******************************************************/
/*! exports provided: AlchemicTransformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlchemicTransformation", function() { return AlchemicTransformation; });
var AlchemicTransformation;

(function (_AlchemicTransformation) {
  var INFUSION = _AlchemicTransformation.INFUSION = 0;
  var DECOCTION = _AlchemicTransformation.DECOCTION = 1;
  var MACERATION = _AlchemicTransformation.MACERATION = 2;
  var PERCOLATION = _AlchemicTransformation.PERCOLATION = 3;
  var DISTILLATION = _AlchemicTransformation.DISTILLATION = 4;
  var DILLUTION = _AlchemicTransformation.DILLUTION = 5;
  var CONCENTRATION = _AlchemicTransformation.CONCENTRATION = 6;
  var REDUCTION = _AlchemicTransformation.REDUCTION = 7;
  var ALL = _AlchemicTransformation.ALL = [INFUSION, DECOCTION, MACERATION, PERCOLATION, DISTILLATION, DILLUTION, CONCENTRATION, REDUCTION];

  function toString(transformation) {
    switch (transformation) {
      case INFUSION:
        return 'INFUSION';

      case DECOCTION:
        return 'DECOCTION';

      case MACERATION:
        return 'MACERATION';

      case PERCOLATION:
        return 'PERCOLATION';

      case DISTILLATION:
        return 'DISTILLATION';

      case DILLUTION:
        return 'DILLUTION';

      case CONCENTRATION:
        return 'CONCENTRATION';

      case REDUCTION:
        return 'REDUCTION';

      default:
        return undefined;
    }
  }

  _AlchemicTransformation.toString = toString;

  function toFrench(transformation) {
    switch (transformation) {
      case INFUSION:
        return 'infusion';

      case DECOCTION:
        return 'décoction';

      case MACERATION:
        return 'macération';

      case PERCOLATION:
        return 'percolation';

      case DISTILLATION:
        return 'distillation';

      case DILLUTION:
        return 'dillution';

      case CONCENTRATION:
        return 'concentration';

      case REDUCTION:
        return 'réduction';

      default:
        return undefined;
    }
  }

  _AlchemicTransformation.toFrench = toFrench;
})(AlchemicTransformation || (AlchemicTransformation = {}));

/***/ })

})
//# sourceMappingURL=index.js.16cf67553334ba5d3e30.hot-update.js.map