webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./content/Map.tsx":
/*!*************************!*\
  !*** ./content/Map.tsx ***!
  \*************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\content\\Map.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Map = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Map, _PureComponent);

  var _super = _createSuper(Map);

  function Map(props, context) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Map);

    _this = _super.call(this, props, context);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_root", void 0);

    _this._root = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window != undefined) {
        var leaflet = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");

        var map = leaflet.map(this._root.current, {
          crs: leaflet.CRS.Simple
        });
        var bounds = [[0, 0], [1654, 1165]];
        var tiles = leaflet.tileLayer('./images/map/m-z{z}-x{x}-y{y}.png', {
          minZoom: 0,
          maxZoom: 1,
          tileSize: leaflet.point(1654, 1165),
          noWrap: true,
          bounds: bounds
        }).addTo(map);
        map.setView([10, 10], 0); //map.fitBounds(bounds)
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "map",
        ref: this._root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }
      });
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/***/ })

})
//# sourceMappingURL=index.js.88dce2714da2026c6bff.hot-update.js.map