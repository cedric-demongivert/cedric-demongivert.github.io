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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('spell d-none d-md-block', props.className),
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
        className: "w-100",
        key: props.runes.length + index,
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
        className: "spell-rune",
        key: rune * runesByRow + index,
        src: './images/runic-' + props.runes[rune * runesByRow + index] + '.svg',
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
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('spell d-block d-md-none', props.className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, props.runes.map(function (rune, index) {
    return __jsx("img", {
      className: "spell-rune",
      key: index,
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

/***/ })

})
//# sourceMappingURL=index.js.d060730473f026c40ef0.hot-update.js.map