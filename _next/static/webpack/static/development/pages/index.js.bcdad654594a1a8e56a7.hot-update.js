webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./typescript/feat/FeatBuilder.ts":
/*!****************************************!*\
  !*** ./typescript/feat/FeatBuilder.ts ***!
  \****************************************/
/*! exports provided: FeatBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatBuilder", function() { return FeatBuilder; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Arrays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Arrays */ "./typescript/Arrays.ts");
/* harmony import */ var _Sets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sets */ "./typescript/Sets.ts");
/* harmony import */ var _Feat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Feat */ "./typescript/feat/Feat.ts");






var FeatBuilder = /*#__PURE__*/function () {
  function FeatBuilder() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeatBuilder);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "name", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "identifier", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "keywords", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "description", void 0);

    this.name = null;
    this.identifier = null;
    this.keywords = new Set();
    this.description = null;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FeatBuilder, [{
    key: "build",
    value: function build() {
      return {
        identifier: this.identifier,
        name: this.name,
        keywords: new Set(this.keywords),
        levels: [].concat(this.levels)
      };
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
      return this;
    }
  }, {
    key: "setIdentifier",
    value: function setIdentifier(identifier) {
      this.identifier = identifier;
      return this;
    }
  }, {
    key: "addLevel",
    value: function addLevel(level) {
      this.levels.push(level);
      return this;
    }
  }, {
    key: "setLevel",
    value: function setLevel(index, level) {
      while (this.levels.length <= index) {
        this.levels.push(null);
      }

      this.levels[index] = level;
      return this;
    }
  }, {
    key: "addKeyword",
    value: function addKeyword(keyword) {
      this.keywords.add(keyword);
      return this;
    }
  }, {
    key: "copy",
    value: function copy(toCopy) {
      this.name = toCopy.name;
      this.identifier = toCopy.identifier;
      _Arrays__WEBPACK_IMPORTED_MODULE_3__["Arrays"].copy(toCopy.levels, this.levels);
      _Sets__WEBPACK_IMPORTED_MODULE_4__["Sets"].copy(toCopy.keywords, this.keywords);
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      var result = new FeatBuilder();
      result.copy(this);
      return result;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.name = null;
      this.identifier = null;
      this.levels.length = 0;
      this.keywords.clear();
    }
  }, {
    key: "equals",
    value: function equals(other) {
      if (other == null) return false;
      if (other === this) return true;

      if (other instanceof FeatBuilder) {
        return _Feat__WEBPACK_IMPORTED_MODULE_5__["Feat"].equals(this, other);
      }
    }
  }]);

  return FeatBuilder;
}();

(function (_FeatBuilder) {
  var BUILDER = _FeatBuilder.BUILDER = new FeatBuilder();

  function clone(builder) {
    return builder == null ? builder : builder.clone();
  }

  _FeatBuilder.clone = clone;

  function equals(left, right) {
    return left == null ? left === right : left.equals(right);
  }

  _FeatBuilder.equals = equals;

  function builder() {
    BUILDER.clear();
    return BUILDER;
  }

  _FeatBuilder.builder = builder;
})(FeatBuilder || (FeatBuilder = {}));

/***/ })

})
//# sourceMappingURL=index.js.bcdad654594a1a8e56a7.hot-update.js.map