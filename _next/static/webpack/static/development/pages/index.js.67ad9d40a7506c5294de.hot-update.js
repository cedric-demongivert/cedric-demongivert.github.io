webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/table/Table2D.tsx":
/*!**************************************!*\
  !*** ./components/table/Table2D.tsx ***!
  \**************************************/
/*! exports provided: Table2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table2D", function() { return Table2D; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Table2DCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Table2DCell */ "./components/table/Table2DCell.tsx");
/* harmony import */ var _Table2DRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Table2DRow */ "./components/table/Table2DRow.tsx");








var _jsxFileName = "D:\\development\\rpg\\ruleset-next\\components\\table\\Table2D.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Table2D = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Table2D, _Component);

  var _super = _createSuper(Table2D);

  /**
  * @see Component.constructor
  */
  function Table2D(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Table2D);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_rows", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_columns", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_handlers", void 0);

    _this.state = {
      column: -1,
      row: -1
    };
    _this._rows = 0;
    _this._columns = 0;
    _this._handlers = [];

    _this.computeCellSelectionHandlers(props.children);

    _this.handleDeselection = _this.handleDeselection.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.renderRow = _this.renderRow.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }
  /**
  *
  */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Table2D, [{
    key: "computeCellSelectionHandlers",
    value: function computeCellSelectionHandlers(children) {
      this._rows = react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.count(children);
      this._columns = react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.map(children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.count(child.props.children);
      }).reduce(function (a, b) {
        return Math.max(a, b);
      }, 0);
      this._handlers.length = 0;

      for (var row = 0; row < this._rows; ++row) {
        for (var column = 0; column < this._columns; ++column) {
          this._handlers.push(this.handleCellSelection.bind(this, column, row));
        }
      }
    }
    /**
    *
    */

  }, {
    key: "handleCellSelection",
    value: function handleCellSelection(column, row) {
      this.setState({
        row: row,
        column: column
      });
    }
    /**
    *
    */

  }, {
    key: "handleDeselection",
    value: function handleDeselection() {
      this.setState({
        row: -1,
        column: -1
      });
    }
    /**
    * @param Component.shouldComponentUpdate
    */

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.children !== this.props.children) {
        this.computeCellSelectionHandlers(nextProps.children);
      }

      return true;
    }
    /**
    * @param Component.render
    */

  }, {
    key: "render",
    value: function render() {
      var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()('table-2d', this.props.className);
      var properties = {
        className: className,
        onMouseOut: this.handleDeselection
      };

      if (this.props.width) {
        properties.style = {
          width: this.props.width
        };
      }

      return __jsx("table", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, properties, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 7
        }
      }), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.map(this.props.children, this.renderRow)));
    }
    /**
    *
    */

  }, {
    key: "renderRow",
    value: function renderRow(children, row) {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.cloneElement(children, {}, react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.map(children.props.children, function (cell, column) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.cloneElement(cell, {
          onSelect: _this2._handlers[row * _this2._columns + column],
          selected: _this2.state.row === _this2._rows - 1 && column === _this2.state.column || _this2.state.column === 0 && row === _this2.state.row || _this2.state.row !== _this2._rows - 1 && _this2.state.column !== 0 && (column === _this2.state.column || row === _this2.state.row)
        });
      }));
    }
  }]);

  return Table2D;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

(function (_Table2D) {
  var Cell = _Table2D.Cell = _Table2DCell__WEBPACK_IMPORTED_MODULE_10__["Table2DCell"];
  var Row = _Table2D.Row = _Table2DRow__WEBPACK_IMPORTED_MODULE_11__["Table2DRow"];
})(Table2D || (Table2D = {}));

/***/ })

})
//# sourceMappingURL=index.js.67ad9d40a7506c5294de.hot-update.js.map