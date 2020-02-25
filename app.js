/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/twig/twig.js":
/*!***********************************!*\
  !*** ./node_modules/twig/twig.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sprintf() {
  //  discuss at: http://locutus.io/php/sprintf/
  // original by: Ash Searle (http://hexmen.com/blog/)
  // improved by: Michael White (http://getsprink.com)
  // improved by: Jack
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Dj
  // improved by: Allidylls
  //    input by: Paulo Freitas
  //    input by: Brett Zamir (http://brett-zamir.me)
  //   example 1: sprintf("%01.2f", 123.1)
  //   returns 1: '123.10'
  //   example 2: sprintf("[%10s]", 'monkey')
  //   returns 2: '[    monkey]'
  //   example 3: sprintf("[%'#10s]", 'monkey')
  //   returns 3: '[####monkey]'
  //   example 4: sprintf("%d", 123456789012345)
  //   returns 4: '123456789012345'
  //   example 5: sprintf('%-03s', 'E')
  //   returns 5: 'E00'

  var regex = /%%|%(\d+\$)?([\-+'#0 ]*)(\*\d+\$|\*|\d+)?(?:\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
  var a = arguments;
  var i = 0;
  var format = a[i++];

  var _pad = function _pad(str, len, chr, leftJustify) {
    if (!chr) {
      chr = ' ';
    }
    var padding = str.length >= len ? '' : new Array(1 + len - str.length >>> 0).join(chr);
    return leftJustify ? str + padding : padding + str;
  };

  var justify = function justify(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
    var diff = minWidth - value.length;
    if (diff > 0) {
      if (leftJustify || !zeroPad) {
        value = _pad(value, minWidth, customPadChar, leftJustify);
      } else {
        value = [value.slice(0, prefix.length), _pad('', diff, '0', true), value.slice(prefix.length)].join('');
      }
    }
    return value;
  };

  var _formatBaseX = function _formatBaseX(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
    // Note: casts negative numbers to positive ones
    var number = value >>> 0;
    prefix = prefix && number && {
      '2': '0b',
      '8': '0',
      '16': '0x'
    }[base] || '';
    value = prefix + _pad(number.toString(base), precision || 0, '0', false);
    return justify(value, prefix, leftJustify, minWidth, zeroPad);
  };

  // _formatString()
  var _formatString = function _formatString(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
    if (precision !== null && precision !== undefined) {
      value = value.slice(0, precision);
    }
    return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
  };

  // doFormat()
  var doFormat = function doFormat(substring, valueIndex, flags, minWidth, precision, type) {
    var number, prefix, method, textTransform, value;

    if (substring === '%%') {
      return '%';
    }

    // parse flags
    var leftJustify = false;
    var positivePrefix = '';
    var zeroPad = false;
    var prefixBaseX = false;
    var customPadChar = ' ';
    var flagsl = flags.length;
    var j;
    for (j = 0; j < flagsl; j++) {
      switch (flags.charAt(j)) {
        case ' ':
          positivePrefix = ' ';
          break;
        case '+':
          positivePrefix = '+';
          break;
        case '-':
          leftJustify = true;
          break;
        case "'":
          customPadChar = flags.charAt(j + 1);
          break;
        case '0':
          zeroPad = true;
          customPadChar = '0';
          break;
        case '#':
          prefixBaseX = true;
          break;
      }
    }

    // parameters may be null, undefined, empty-string or real valued
    // we want to ignore null, undefined and empty-string values
    if (!minWidth) {
      minWidth = 0;
    } else if (minWidth === '*') {
      minWidth = +a[i++];
    } else if (minWidth.charAt(0) === '*') {
      minWidth = +a[minWidth.slice(1, -1)];
    } else {
      minWidth = +minWidth;
    }

    // Note: undocumented perl feature:
    if (minWidth < 0) {
      minWidth = -minWidth;
      leftJustify = true;
    }

    if (!isFinite(minWidth)) {
      throw new Error('sprintf: (minimum-)width must be finite');
    }

    if (!precision) {
      precision = 'fFeE'.indexOf(type) > -1 ? 6 : type === 'd' ? 0 : undefined;
    } else if (precision === '*') {
      precision = +a[i++];
    } else if (precision.charAt(0) === '*') {
      precision = +a[precision.slice(1, -1)];
    } else {
      precision = +precision;
    }

    // grab value using valueIndex if required?
    value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

    switch (type) {
      case 's':
        return _formatString(value + '', leftJustify, minWidth, precision, zeroPad, customPadChar);
      case 'c':
        return _formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
      case 'b':
        return _formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'o':
        return _formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'x':
        return _formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'X':
        return _formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
      case 'u':
        return _formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'i':
      case 'd':
        number = +value || 0;
        // Plain Math.round doesn't just truncate
        number = Math.round(number - number % 1);
        prefix = number < 0 ? '-' : positivePrefix;
        value = prefix + _pad(String(Math.abs(number)), precision, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
      case 'e':
      case 'E':
      case 'f': // @todo: Should handle locales (as per setlocale)
      case 'F':
      case 'g':
      case 'G':
        number = +value;
        prefix = number < 0 ? '-' : positivePrefix;
        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
        value = prefix + Math.abs(number)[method](precision);
        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
      default:
        return substring;
    }
  };

  return format.replace(regex, doFormat);
};
//# sourceMappingURL=sprintf.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Twig.js
 *
 * @copyright 2011-2016 John Roepke and the Twig.js Contributors
 * @license   Available under the BSD 2-Clause License
 * @link      https://github.com/twigjs/twig.js
 */

module.exports = __webpack_require__(3)();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// ## twig.factory.js
//
// This file handles creating the Twig library
module.exports = function factory() {
    const Twig = {
        VERSION: '1.14.0'
    };

    __webpack_require__(4)(Twig);
    __webpack_require__(5)(Twig);
    __webpack_require__(6)(Twig);
    __webpack_require__(8)(Twig);
    __webpack_require__(9)(Twig);
    __webpack_require__(10)(Twig);
    __webpack_require__(19)(Twig);
    __webpack_require__(20)(Twig);
    __webpack_require__(22)(Twig);
    __webpack_require__(23)(Twig);
    __webpack_require__(24)(Twig);
    __webpack_require__(25)(Twig);
    __webpack_require__(26)(Twig);
    __webpack_require__(27)(Twig);
    __webpack_require__(28)(Twig);

    Twig.exports.factory = factory;

    return Twig.exports;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// ## twig.core.js
//
// This file handles template level tokenizing, compiling and parsing.
module.exports = function (Twig) {
    'use strict';

    Twig.trace = false;
    Twig.debug = false;

    // Default caching to true for the improved performance it offers
    Twig.cache = true;

    Twig.noop = function () {};

    Twig.merge = function (target, source, onlyChanged) {
        Object.keys(source).forEach(key => {
            if (onlyChanged && !(key in target)) {
                return;
            }

            target[key] = source[key];
        });

        return target;
    };

    /**
     * Exception thrown by twig.js.
     */
    Twig.Error = function (message, file) {
        this.message = message;
        this.name = 'TwigException';
        this.type = 'TwigException';
        this.file = file;
    };

    /**
     * Get the string representation of a Twig error.
     */
    Twig.Error.prototype.toString = function () {
        const output = this.name + ': ' + this.message;

        return output;
    };

    /**
     * Wrapper for logging to the console.
     */
    Twig.log = {
        trace(...args) {
            if (Twig.trace && console) {
                console.log(Array.prototype.slice.call(args));
            }
        },
        debug(...args) {
            if (Twig.debug && console) {
                console.log(Array.prototype.slice.call(args));
            }
        }
    };

    if (typeof console === 'undefined') {
        Twig.log.error = function () {};
    } else if (typeof console.error !== 'undefined') {
        Twig.log.error = function (...args) {
            console.error(...args);
        };
    } else if (typeof console.log !== 'undefined') {
        Twig.log.error = function (...args) {
            console.log(...args);
        };
    }

    /**
     * Container for methods related to handling high level template tokens
     *      (for example: {{ expression }}, {% logic %}, {# comment #}, raw data)
     */
    Twig.token = {};

    /**
     * Token types.
     */
    Twig.token.type = {
        output: 'output',
        logic: 'logic',
        comment: 'comment',
        raw: 'raw',
        outputWhitespacePre: 'output_whitespace_pre',
        outputWhitespacePost: 'output_whitespace_post',
        outputWhitespaceBoth: 'output_whitespace_both',
        logicWhitespacePre: 'logic_whitespace_pre',
        logicWhitespacePost: 'logic_whitespace_post',
        logicWhitespaceBoth: 'logic_whitespace_both'
    };

    /**
     * Token syntax definitions.
     */
    Twig.token.definitions = [
        {
            type: Twig.token.type.raw,
            open: '{% raw %}',
            close: '{% endraw %}'
        },
        {
            type: Twig.token.type.raw,
            open: '{% verbatim %}',
            close: '{% endverbatim %}'
        },
        // *Whitespace type tokens*
        //
        // These typically take the form `{{- expression -}}` or `{{- expression }}` or `{{ expression -}}`.
        {
            type: Twig.token.type.outputWhitespacePre,
            open: '{{-',
            close: '}}'
        },
        {
            type: Twig.token.type.outputWhitespacePost,
            open: '{{',
            close: '-}}'
        },
        {
            type: Twig.token.type.outputWhitespaceBoth,
            open: '{{-',
            close: '-}}'
        },
        {
            type: Twig.token.type.logicWhitespacePre,
            open: '{%-',
            close: '%}'
        },
        {
            type: Twig.token.type.logicWhitespacePost,
            open: '{%',
            close: '-%}'
        },
        {
            type: Twig.token.type.logicWhitespaceBoth,
            open: '{%-',
            close: '-%}'
        },
        // *Output type tokens*
        //
        // These typically take the form `{{ expression }}`.
        {
            type: Twig.token.type.output,
            open: '{{',
            close: '}}'
        },
        // *Logic type tokens*
        //
        // These typically take a form like `{% if expression %}` or `{% endif %}`
        {
            type: Twig.token.type.logic,
            open: '{%',
            close: '%}'
        },
        // *Comment type tokens*
        //
        // These take the form `{# anything #}`
        {
            type: Twig.token.type.comment,
            open: '{#',
            close: '#}'
        }
    ];

    /**
     * What characters start "strings" in token definitions. We need this to ignore token close
     * strings inside an expression.
     */
    Twig.token.strings = ['"', '\''];

    Twig.token.findStart = function (template) {
        const output = {
            position: null,
            def: null
        };
        let closePosition = null;
        const len = Twig.token.definitions.length;
        let i;
        let tokenTemplate;
        let firstKeyPosition;
        let closeKeyPosition;

        for (i = 0; i < len; i++) {
            tokenTemplate = Twig.token.definitions[i];
            firstKeyPosition = template.indexOf(tokenTemplate.open);
            closeKeyPosition = template.indexOf(tokenTemplate.close);

            Twig.log.trace('Twig.token.findStart: ', 'Searching for ', tokenTemplate.open, ' found at ', firstKeyPosition);

            // Special handling for mismatched tokens
            if (firstKeyPosition >= 0) {
                // This token matches the template
                if (tokenTemplate.open.length !== tokenTemplate.close.length) {
                    // This token has mismatched closing and opening tags
                    if (closeKeyPosition < 0) {
                        // This token's closing tag does not match the template
                        continue;
                    }
                }
            }
            // Does this token occur before any other types?

            if (firstKeyPosition >= 0 && (output.position === null || firstKeyPosition < output.position)) {
                output.position = firstKeyPosition;
                output.def = tokenTemplate;
                closePosition = closeKeyPosition;
            } else if (firstKeyPosition >= 0 && output.position !== null && firstKeyPosition === output.position) {
                /* This token exactly matches another token,
                greedily match to check if this token has a greater specificity */
                if (tokenTemplate.open.length > output.def.open.length) {
                    // This token's opening tag is more specific than the previous match
                    output.position = firstKeyPosition;
                    output.def = tokenTemplate;
                    closePosition = closeKeyPosition;
                } else if (tokenTemplate.open.length === output.def.open.length) {
                    if (tokenTemplate.close.length > output.def.close.length) {
                        // This token's opening tag is as specific as the previous match,
                        // but the closing tag has greater specificity
                        if (closeKeyPosition >= 0 && closeKeyPosition < closePosition) {
                            // This token's closing tag exists in the template,
                            // and it occurs sooner than the previous match
                            output.position = firstKeyPosition;
                            output.def = tokenTemplate;
                            closePosition = closeKeyPosition;
                        }
                    } else if (closeKeyPosition >= 0 && closeKeyPosition < closePosition) {
                        // This token's closing tag is not more specific than the previous match,
                        // but it occurs sooner than the previous match
                        output.position = firstKeyPosition;
                        output.def = tokenTemplate;
                        closePosition = closeKeyPosition;
                    }
                }
            }
        }

        return output;
    };

    Twig.token.findEnd = function (template, tokenDef, start) {
        let end = null;
        let found = false;
        let offset = 0;

        // String position variables
        let strPos = null;
        let strFound = null;
        let pos = null;
        let endOffset = null;
        let thisStrPos = null;
        let endStrPos = null;

        // For loop variables
        let i;
        let l;

        while (!found) {
            strPos = null;
            strFound = null;
            pos = template.indexOf(tokenDef.close, offset);

            if (pos >= 0) {
                end = pos;
                found = true;
            } else {
                // Throw an exception
                throw new Twig.Error('Unable to find closing bracket \'' + tokenDef.close +
                                '\' opened near template position ' + start);
            }

            // Ignore quotes within comments; just look for the next comment close sequence,
            // regardless of what comes before it. https://github.com/justjohn/twig.js/issues/95
            if (tokenDef.type === Twig.token.type.comment) {
                break;
            }
            // Ignore quotes within raw tag
            // Fixes #283

            if (tokenDef.type === Twig.token.type.raw) {
                break;
            }

            l = Twig.token.strings.length;
            for (i = 0; i < l; i += 1) {
                thisStrPos = template.indexOf(Twig.token.strings[i], offset);

                if (thisStrPos > 0 && thisStrPos < pos &&
                        (strPos === null || thisStrPos < strPos)) {
                    strPos = thisStrPos;
                    strFound = Twig.token.strings[i];
                }
            }

            // We found a string before the end of the token, now find the string's end and set the search offset to it
            if (strPos !== null) {
                endOffset = strPos + 1;
                end = null;
                found = false;
                for (;;) {
                    endStrPos = template.indexOf(strFound, endOffset);
                    if (endStrPos < 0) {
                        throw Twig.Error('Unclosed string in template');
                    }
                    // Ignore escaped quotes

                    if (template.substr(endStrPos - 1, 1) === '\\') {
                        endOffset = endStrPos + 1;
                    } else {
                        offset = endStrPos + 1;
                        break;
                    }
                }
            }
        }

        return end;
    };

    /**
     * Convert a template into high-level tokens.
     */
    Twig.tokenize = function (template) {
        const tokens = [];
        // An offset for reporting errors locations in the template.
        let errorOffset = 0;

        // The start and type of the first token found in the template.
        let foundToken = null;
        // The end position of the matched token.
        let end = null;

        while (template.length > 0) {
            // Find the first occurance of any token type in the template
            foundToken = Twig.token.findStart(template);

            Twig.log.trace('Twig.tokenize: ', 'Found token: ', foundToken);

            if (foundToken.position === null) {
                // No more tokens -> add the rest of the template as a raw-type token
                tokens.push({
                    type: Twig.token.type.raw,
                    value: template
                });
                template = '';
            } else {
                // Add a raw type token for anything before the start of the token
                if (foundToken.position > 0) {
                    tokens.push({
                        type: Twig.token.type.raw,
                        value: template.substring(0, foundToken.position)
                    });
                }

                template = template.substr(foundToken.position + foundToken.def.open.length);
                errorOffset += foundToken.position + foundToken.def.open.length;

                // Find the end of the token
                end = Twig.token.findEnd(template, foundToken.def, errorOffset);

                Twig.log.trace('Twig.tokenize: ', 'Token ends at ', end);

                tokens.push({
                    type: foundToken.def.type,
                    value: template.substring(0, end).trim()
                });

                if (template.substr(end + foundToken.def.close.length, 1) === '\n') {
                    switch (foundToken.def.type) {
                        case 'logic_whitespace_pre':
                        case 'logic_whitespace_post':
                        case 'logic_whitespace_both':
                        case 'logic':
                            // Newlines directly after logic tokens are ignored
                            end += 1;
                            break;
                        default:
                            break;
                    }
                }

                template = template.substr(end + foundToken.def.close.length);

                // Increment the position in the template
                errorOffset += end + foundToken.def.close.length;
            }
        }

        return tokens;
    };

    Twig.compile = function (tokens) {
        const self = this;
        try {
            // Output and intermediate stacks
            const output = [];
            const stack = [];
            // The tokens between open and close tags
            let intermediateOutput = [];

            let token = null;
            let logicToken = null;
            let unclosedToken = null;
            // Temporary previous token.
            let prevToken = null;
            // Temporary previous output.
            let prevOutput = null;
            // Temporary previous intermediate output.
            let prevIntermediateOutput = null;
            // The previous token's template
            let prevTemplate = null;
            // Token lookahead
            let nextToken = null;
            // The output token
            let tokOutput = null;

            // Logic Token values
            let type = null;
            let open = null;
            let next = null;

            const compileOutput = function (token) {
                Twig.expression.compile.call(self, token);
                if (stack.length > 0) {
                    intermediateOutput.push(token);
                } else {
                    output.push(token);
                }
            };

            const compileLogic = function (token) {
                // Compile the logic token
                logicToken = Twig.logic.compile.call(self, token);

                type = logicToken.type;
                open = Twig.logic.handler[type].open;
                next = Twig.logic.handler[type].next;

                Twig.log.trace('Twig.compile: ', 'Compiled logic token to ', logicToken,
                    ' next is: ', next, ' open is : ', open);

                // Not a standalone token, check logic stack to see if this is expected
                if (open !== undefined && !open) {
                    prevToken = stack.pop();
                    prevTemplate = Twig.logic.handler[prevToken.type];

                    if (prevTemplate.next.indexOf(type) < 0) {
                        throw new Error(type + ' not expected after a ' + prevToken.type);
                    }

                    prevToken.output = prevToken.output || [];

                    prevToken.output = prevToken.output.concat(intermediateOutput);
                    intermediateOutput = [];

                    tokOutput = {
                        type: Twig.token.type.logic,
                        token: prevToken
                    };
                    if (stack.length > 0) {
                        intermediateOutput.push(tokOutput);
                    } else {
                        output.push(tokOutput);
                    }
                }

                // This token requires additional tokens to complete the logic structure.
                if (next !== undefined && next.length > 0) {
                    Twig.log.trace('Twig.compile: ', 'Pushing ', logicToken, ' to logic stack.');

                    if (stack.length > 0) {
                        // Put any currently held output into the output list of the logic operator
                        // currently at the head of the stack before we push a new one on.
                        prevToken = stack.pop();
                        prevToken.output = prevToken.output || [];
                        prevToken.output = prevToken.output.concat(intermediateOutput);
                        stack.push(prevToken);
                        intermediateOutput = [];
                    }

                    // Push the new logic token onto the logic stack
                    stack.push(logicToken);
                } else if (open !== undefined && open) {
                    tokOutput = {
                        type: Twig.token.type.logic,
                        token: logicToken
                    };
                    // Standalone token (like {% set ... %}
                    if (stack.length > 0) {
                        intermediateOutput.push(tokOutput);
                    } else {
                        output.push(tokOutput);
                    }
                }
            };

            while (tokens.length > 0) {
                token = tokens.shift();
                prevOutput = output[output.length - 1];
                prevIntermediateOutput = intermediateOutput[intermediateOutput.length - 1];
                nextToken = tokens[0];
                Twig.log.trace('Compiling token ', token);
                switch (token.type) {
                    case Twig.token.type.raw:
                        if (stack.length > 0) {
                            intermediateOutput.push(token);
                        } else {
                            output.push(token);
                        }

                        break;

                    case Twig.token.type.logic:
                        compileLogic.call(self, token);
                        break;

                    // Do nothing, comments should be ignored
                    case Twig.token.type.comment:
                        break;

                    case Twig.token.type.output:
                        compileOutput.call(self, token);
                        break;

                    // Kill whitespace ahead and behind this token
                    case Twig.token.type.logicWhitespacePre:
                    case Twig.token.type.logicWhitespacePost:
                    case Twig.token.type.logicWhitespaceBoth:
                    case Twig.token.type.outputWhitespacePre:
                    case Twig.token.type.outputWhitespacePost:
                    case Twig.token.type.outputWhitespaceBoth:
                        if (token.type !== Twig.token.type.outputWhitespacePost && token.type !== Twig.token.type.logicWhitespacePost) {
                            if (prevOutput) {
                                // If the previous output is raw, pop it off
                                if (prevOutput.type === Twig.token.type.raw) {
                                    output.pop();

                                    // If the previous output is not just whitespace, trim it
                                    if (prevOutput.value.match(/^\s*$/) === null) {
                                        prevOutput.value = prevOutput.value.trim();
                                        // Repush the previous output
                                        output.push(prevOutput);
                                    }
                                }
                            }

                            if (prevIntermediateOutput) {
                                // If the previous intermediate output is raw, pop it off
                                if (prevIntermediateOutput.type === Twig.token.type.raw) {
                                    intermediateOutput.pop();

                                    // If the previous output is not just whitespace, trim it
                                    if (prevIntermediateOutput.value.match(/^\s*$/) === null) {
                                        prevIntermediateOutput.value = prevIntermediateOutput.value.trim();
                                        // Repush the previous intermediate output
                                        intermediateOutput.push(prevIntermediateOutput);
                                    }
                                }
                            }
                        }

                        // Compile this token
                        switch (token.type) {
                            case Twig.token.type.outputWhitespacePre:
                            case Twig.token.type.outputWhitespacePost:
                            case Twig.token.type.outputWhitespaceBoth:
                                compileOutput.call(self, token);
                                break;
                            case Twig.token.type.logicWhitespacePre:
                            case Twig.token.type.logicWhitespacePost:
                            case Twig.token.type.logicWhitespaceBoth:
                                compileLogic.call(self, token);
                                break;
                            default:
                                break;
                        }

                        if (token.type !== Twig.token.type.outputWhitespacePre && token.type !== Twig.token.type.logicWhitespacePre) {
                            if (nextToken) {
                                // If the next token is raw, shift it out
                                if (nextToken.type === Twig.token.type.raw) {
                                    tokens.shift();

                                    // If the next token is not just whitespace, trim it
                                    if (nextToken.value.match(/^\s*$/) === null) {
                                        nextToken.value = nextToken.value.trim();
                                        // Unshift the next token
                                        tokens.unshift(nextToken);
                                    }
                                }
                            }
                        }

                        break;
                    default:
                        break;
                }

                Twig.log.trace('Twig.compile: ', ' Output: ', output,
                    ' Logic Stack: ', stack,
                    ' Pending Output: ', intermediateOutput
                );
            }

            // Verify that there are no logic tokens left in the stack.
            if (stack.length > 0) {
                unclosedToken = stack.pop();
                throw new Error('Unable to find an end tag for ' + unclosedToken.type +
                                ', expecting one of ' + unclosedToken.next);
            }

            return output;
        } catch (error) {
            if (self.options.rethrow) {
                if (error.type === 'TwigException' && !error.file) {
                    error.file = self.id;
                }

                throw error;
            } else {
                Twig.log.error('Error compiling twig template ' + self.id + ': ');
                if (error.stack) {
                    Twig.log.error(error.stack);
                } else {
                    Twig.log.error(error.toString());
                }
            }
        }
    };

    function handleException(state, ex) {
        if (state.template.options.rethrow) {
            if (typeof ex === 'string') {
                ex = new Twig.Error(ex);
            }

            if (ex.type === 'TwigException' && !ex.file) {
                ex.file = state.template.id;
            }

            throw ex;
        } else {
            Twig.log.error('Error parsing twig template ' + state.template.id + ': ');
            if (ex.stack) {
                Twig.log.error(ex.stack);
            } else {
                Twig.log.error(ex.toString());
            }

            if (Twig.debug) {
                return ex.toString();
            }
        }
    }

    /**
     * Tokenize and compile a string template.
     *
     * @param {string} data The template.
     *
     * @return {Array} The compiled tokens.
     */
    Twig.prepare = function (data) {
        // Tokenize
        Twig.log.debug('Twig.prepare: ', 'Tokenizing ', data);
        const rawTokens = Twig.tokenize.call(this, data);

        // Compile
        Twig.log.debug('Twig.prepare: ', 'Compiling ', rawTokens);
        const tokens = Twig.compile.call(this, rawTokens);

        Twig.log.debug('Twig.prepare: ', 'Compiled ', tokens);

        return tokens;
    };

    /**
     * Join the output token's stack and escape it if needed
     *
     * @param {Array} Output token's stack
     *
     * @return {string|String} Autoescaped output
     */
    Twig.output = function (output) {
        const {autoescape} = this.options;

        if (!autoescape) {
            return output.join('');
        }

        const strategy = (typeof autoescape === 'string') ? autoescape : 'html';

        const escapedOutput = output.map(str => {
            if (
                str &&
                (str.twigMarkup !== true && str.twigMarkup !== strategy) &&
                !(strategy === 'html' && str.twigMarkup === 'html_attr')
            ) {
                str = Twig.filters.escape(str, [strategy]);
            }

            return str;
        });

        if (escapedOutput.length === 0) {
            return '';
        }

        return new Twig.Markup(escapedOutput.join(''), true);
    };

    // Namespace for template storage and retrieval
    Twig.Templates = {
        /**
         * Registered template loaders - use Twig.Templates.registerLoader to add supported loaders
         * @type {Object}
         */
        loaders: {},

        /**
         * Registered template parsers - use Twig.Templates.registerParser to add supported parsers
         * @type {Object}
         */
        parsers: {},

        /**
         * Cached / loaded templates
         * @type {Object}
         */
        registry: {}
    };

    /**
     * Is this id valid for a twig template?
     *
     * @param {string} id The ID to check.
     *
     * @throws {Twig.Error} If the ID is invalid or used.
     * @return {boolean} True if the ID is valid.
     */
    Twig.validateId = function (id) {
        if (id === 'prototype') {
            throw new Twig.Error(id + ' is not a valid twig identifier');
        } else if (Twig.cache && Object.hasOwnProperty.call(Twig.Templates.registry, id)) {
            throw new Twig.Error('There is already a template with the ID ' + id);
        }

        return true;
    };

    /**
     * Register a template loader
     *
     * @example
     * Twig.extend(function (Twig) {
     *    Twig.Templates.registerLoader('custom_loader', function (location, params, callback, errorCallback) {
     *        // ... load the template ...
     *        params.data = loadedTemplateData;
     *        // create and return the template
     *        var template = new Twig.Template(params);
     *        if (typeof callback === 'function') {
     *            callback(template);
     *        }
     *        return template;
     *    });
     * });
     *
     * @param {String} methodName The method this loader is intended for (ajax, fs)
     * @param {Function} func The function to execute when loading the template
     * @param {Object|undefined} scope Optional scope parameter to bind func to
     *
     * @throws Twig.Error
     *
     * @return {void}
     */
    Twig.Templates.registerLoader = function (methodName, func, scope) {
        if (typeof func !== 'function') {
            throw new Twig.Error('Unable to add loader for ' + methodName + ': Invalid function reference given.');
        }

        if (scope) {
            func = func.bind(scope);
        }

        this.loaders[methodName] = func;
    };

    /**
     * Remove a registered loader
     *
     * @param {String} methodName The method name for the loader you wish to remove
     *
     * @return {void}
     */
    Twig.Templates.unRegisterLoader = function (methodName) {
        if (this.isRegisteredLoader(methodName)) {
            delete this.loaders[methodName];
        }
    };

    /**
     * See if a loader is registered by its method name
     *
     * @param {String} methodName The name of the loader you are looking for
     *
     * @return {boolean}
     */
    Twig.Templates.isRegisteredLoader = function (methodName) {
        return Object.hasOwnProperty.call(this.loaders, methodName);
    };

    /**
     * Register a template parser
     *
     * @example
     * Twig.extend(function (Twig) {
     *    Twig.Templates.registerParser('custom_parser', function (params) {
     *        // this template source can be accessed in params.data
     *        var template = params.data
     *
     *        // ... custom process that modifies the template
     *
     *        // return the parsed template
     *        return template;
     *    });
     * });
     *
     * @param {String} methodName The method this parser is intended for (twig, source)
     * @param {Function} func The function to execute when parsing the template
     * @param {Object|undefined} scope Optional scope parameter to bind func to
     *
     * @throws Twig.Error
     *
     * @return {void}
     */
    Twig.Templates.registerParser = function (methodName, func, scope) {
        if (typeof func !== 'function') {
            throw new Twig.Error('Unable to add parser for ' + methodName + ': Invalid function regerence given.');
        }

        if (scope) {
            func = func.bind(scope);
        }

        this.parsers[methodName] = func;
    };

    /**
     * Remove a registered parser
     *
     * @param {String} methodName The method name for the parser you wish to remove
     *
     * @return {void}
     */
    Twig.Templates.unRegisterParser = function (methodName) {
        if (this.isRegisteredParser(methodName)) {
            delete this.parsers[methodName];
        }
    };

    /**
     * See if a parser is registered by its method name
     *
     * @param {String} methodName The name of the parser you are looking for
     *
     * @return {boolean}
     */
    Twig.Templates.isRegisteredParser = function (methodName) {
        return Object.hasOwnProperty.call(this.parsers, methodName);
    };

    /**
     * Save a template object to the store.
     *
     * @param {Twig.Template} template   The twig.js template to store.
     */
    Twig.Templates.save = function (template) {
        if (template.id === undefined) {
            throw new Twig.Error('Unable to save template with no id');
        }

        Twig.Templates.registry[template.id] = template;
    };

    /**
     * Load a previously saved template from the store.
     *
     * @param {string} id   The ID of the template to load.
     *
     * @return {Twig.Template} A twig.js template stored with the provided ID.
     */
    Twig.Templates.load = function (id) {
        if (!Object.hasOwnProperty.call(Twig.Templates.registry, id)) {
            return null;
        }

        return Twig.Templates.registry[id];
    };

    /**
     * Load a template from a remote location using AJAX and saves in with the given ID.
     *
     * Available parameters:
     *
     *      async:       Should the HTTP request be performed asynchronously.
     *                      Defaults to true.
     *      method:      What method should be used to load the template
     *                      (fs or ajax)
     *      parser:      What method should be used to parse the template
     *                      (twig or source)
     *      precompiled: Has the template already been compiled.
     *
     * @param {string} location  The remote URL to load as a template.
     * @param {Object} params The template parameters.
     * @param {function} callback  A callback triggered when the template finishes loading.
     * @param {function} errorCallback  A callback triggered if an error occurs loading the template.
     *
     *
     */
    Twig.Templates.loadRemote = function (location, params, callback, errorCallback) {
        // Default to the URL so the template is cached.
        const id = typeof params.id === 'undefined' ? location : params.id;
        const cached = Twig.Templates.registry[id];

        // Check for existing template
        if (Twig.cache && typeof cached !== 'undefined') {
            // A template is already saved with the given id.
            if (typeof callback === 'function') {
                callback(cached);
            }
            // TODO: if async, return deferred promise

            return cached;
        }

        // If the parser name hasn't been set, default it to twig
        params.parser = params.parser || 'twig';
        params.id = id;

        // Default to async
        if (typeof params.async === 'undefined') {
            params.async = true;
        }

        // Assume 'fs' if the loader is not defined
        const loader = this.loaders[params.method] || this.loaders.fs;
        return loader.call(this, location, params, callback, errorCallback);
    };

    // Determine object type
    function is(type, obj) {
        const clas = Object.prototype.toString.call(obj).slice(8, -1);
        return obj !== undefined && obj !== null && clas === type;
    }

    /**
     * A wrapper for template blocks.
     *
     * @param  {Twig.Template} The template that the block was originally defined in.
     * @param  {Object} The compiled block token.
     */
    Twig.Block = function (template, token) {
        this.template = template;
        this.token = token;
    };

    /**
     * Render the block using a specific parse state and context.
     *
     * @param  {Twig.ParseState} parseState
     * @param  {Object} context
     *
     * @return {Promise}
     */
    Twig.Block.prototype.render = function (parseState, context) {
        const originalTemplate = parseState.template;
        let promise;

        parseState.template = this.template;

        if (this.token.expression) {
            promise = Twig.expression.parseAsync.call(parseState, this.token.output, context);
        } else {
            promise = parseState.parseAsync(this.token.output, context);
        }

        return promise
            .then(value => {
                return Twig.expression.parseAsync.call(
                    parseState,
                    {
                        type: Twig.expression.type.string,
                        value
                    },
                    context
                );
            })
            .then(output => {
                parseState.template = originalTemplate;

                return output;
            });
    };

    /**
     * Holds the state needed to parse a template.
     *
     * @param {Twig.Template} template The template that the tokens being parsed are associated with.
     * @param {Object} blockOverrides Any blocks that should override those defined in the associated template.
     */
    Twig.ParseState = function (template, blockOverrides) {
        this.renderedBlocks = {};
        this.overrideBlocks = blockOverrides === undefined ? {} : blockOverrides;
        this.context = {};
        this.macros = {};
        this.nestingStack = [];
        this.template = template;
    };

    /**
     * Get a block by its name, resolving in the following order:
     *     - override blocks specified when initialized (except when excluded)
     *     - blocks resolved from the associated template
     *     - blocks resolved from the parent template when extending
     *
     * @param {String} name The name of the block to return.
     * @param {Boolean} checkOnlyInheritedBlocks Whether to skip checking the overrides and associated template, will not skip by default.
     *
     * @return {Twig.Block|undefined}
     */
    Twig.ParseState.prototype.getBlock = function (name, checkOnlyInheritedBlocks) {
        let block;

        if (checkOnlyInheritedBlocks !== true) {
            // Blocks specified when initialized
            block = this.overrideBlocks[name];
        }

        if (block === undefined) {
            // Block defined by the associated template
            block = this.template.getBlock(name, checkOnlyInheritedBlocks);
        }

        if (block === undefined && this.template.parentTemplate !== null) {
            // Block defined in the parent template when extending
            block = this.template.parentTemplate.getBlock(name);
        }

        return block;
    };

    /**
     * Get all the available blocks, resolving in the following order:
     *     - override blocks specified when initialized
     *     - blocks resolved from the associated template
     *     - blocks resolved from the parent template when extending (except when excluded)
     *
     * @param {Boolean} includeParentBlocks Whether to get blocks from the parent template when extending, will always do so by default.
     *
     * @return {Object}
     */
    Twig.ParseState.prototype.getBlocks = function (includeParentBlocks) {
        let blocks = {};

        if (includeParentBlocks !== false &&
            this.template.parentTemplate !== null &&
            // Prevent infinite loop
            this.template.parentTemplate !== this.template
        ) {
            // Blocks from the parent template when extending
            blocks = this.template.parentTemplate.getBlocks();
        }

        blocks = {
            ...blocks,
            // Override with any blocks defined within the associated template
            ...this.template.getBlocks(),
            // Override with any blocks specified when initialized
            ...this.overrideBlocks
        };

        return blocks;
    };

    /**
     * Get the closest token of a specific type to the current nest level.
     *
     * @param  {String} type  The logic token type
     *
     * @return {Object}
     */
    Twig.ParseState.prototype.getNestingStackToken = function (type) {
        let matchingToken;

        this.nestingStack.forEach(token => {
            if (matchingToken === undefined && token.type === type) {
                matchingToken = token;
            }
        });

        return matchingToken;
    };

    /**
     * Parse a set of tokens using the current state.
     *
     * @param {Array} tokens The compiled tokens.
     * @param {Object} context The context to set the state to while parsing.
     * @param {Boolean} allowAsync Whether to parse asynchronously.
     * @param {Object} blocks Blocks that should override any defined while parsing.
     *
     * @return {String} The rendered tokens.
     *
     */
    Twig.ParseState.prototype.parse = function (tokens, context, allowAsync) {
        const state = this;
        let output = [];

        // Store any error that might be thrown by the promise chain.
        let err = null;

        // This will be set to isAsync if template renders synchronously
        let isAsync = true;
        let promise = null;
        // Track logic chains
        let chain = true;

        if (context) {
            state.context = context;
        }

        /*
         * Extracted into it's own function such that the function
         * does not get recreated over and over again in the `forEach`
         * loop below. This method can be compiled and optimized
         * a single time instead of being recreated on each iteration.
         */
        function outputPush(o) {
            output.push(o);
        }

        function parseTokenLogic(logic) {
            if (typeof logic.chain !== 'undefined') {
                chain = logic.chain;
            }

            if (typeof logic.context !== 'undefined') {
                state.context = logic.context;
            }

            if (typeof logic.output !== 'undefined') {
                output.push(logic.output);
            }
        }

        promise = Twig.async.forEach(tokens, token => {
            Twig.log.debug('Twig.ParseState.parse: ', 'Parsing token: ', token);

            switch (token.type) {
                case Twig.token.type.raw:
                    output.push(Twig.filters.raw(token.value));
                    break;

                case Twig.token.type.logic:
                    return Twig.logic.parseAsync.call(state, token.token /* logicToken */, state.context, chain)
                        .then(parseTokenLogic);
                case Twig.token.type.comment:
                    // Do nothing, comments should be ignored
                    break;

                // Fall through whitespace to output
                case Twig.token.type.outputWhitespacePre:
                case Twig.token.type.outputWhitespacePost:
                case Twig.token.type.outputWhitespaceBoth:
                case Twig.token.type.output:
                    Twig.log.debug('Twig.ParseState.parse: ', 'Output token: ', token.stack);
                    // Parse the given expression in the given context
                    return Twig.expression.parseAsync.call(state, token.stack, state.context)
                        .then(outputPush);
                default:
                    break;
            }
        }).then(() => {
            output = Twig.output.call(state.template, output);
            isAsync = false;
            return output;
        }).catch(error => {
            if (allowAsync) {
                handleException(state, error);
            }

            err = error;
        });

        // If `allowAsync` we will always return a promise since we do not
        // know in advance if we are going to run asynchronously or not.
        if (allowAsync) {
            return promise;
        }

        // Handle errors here if we fail synchronously.
        if (err !== null) {
            return handleException(state, err);
        }

        // If `allowAsync` is not true we should not allow the user
        // to use asynchronous functions or filters.
        if (isAsync) {
            throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');
        }

        return output;
    };

    /**
     * Create a new twig.js template.
     *
     * Parameters: {
     *      data:   The template, either pre-compiled tokens or a string template
     *      id:     The name of this template
     * }
     *
     * @param {Object} params The template parameters.
     */
    Twig.Template = function (params) {
        const {data, id, base, path, url, name, method, options} = params;

        // # What is stored in a Twig.Template
        //
        // The Twig Template hold several chucks of data.
        //
        //     {
        //          id:     The token ID (if any)
        //          tokens: The list of tokens that makes up this template.
        //          base:   The base template (if any)
        //            options:  {
        //                Compiler/parser options
        //
        //                strict_variables: true/false
        //                    Should missing variable/keys emit an error message. If false, they default to null.
        //            }
        //     }
        //

        this.base = base;
        this.blocks = {
            defined: {},
            imported: {}
        };
        this.id = id;
        this.method = method;
        this.name = name;
        this.options = options;
        this.parentTemplate = null;
        this.path = path;
        this.url = url;

        if (is('String', data)) {
            this.tokens = Twig.prepare.call(this, data);
        } else {
            this.tokens = data;
        }

        if (id !== undefined) {
            Twig.Templates.save(this);
        }
    };

    /**
     * Get a block by its name, resolving in the following order:
     *     - blocks defined in the template itself
     *     - blocks imported from another template
     *
     * @param {String} name The name of the block to return.
     * @param {Boolean} checkOnlyInheritedBlocks Whether to skip checking the blocks defined in the template itself, will not skip by default.
     *
     * @return {Twig.Block|undefined}
     */
    Twig.Template.prototype.getBlock = function (name, checkOnlyInheritedBlocks) {
        let block;

        if (checkOnlyInheritedBlocks !== true) {
            block = this.blocks.defined[name];
        }

        if (block === undefined) {
            block = this.blocks.imported[name];
        }

        return block;
    };

    /**
     * Get all the available blocks, resolving in the following order:
     *     - blocks defined in the template itself
     *     - blocks imported from other templates
     *
     * @return {Object}
     */
    Twig.Template.prototype.getBlocks = function () {
        let blocks = {};

        blocks = {
            ...blocks,
            // Get any blocks imported from other templates
            ...this.blocks.imported,
            // Override with any blocks defined within the template itself
            ...this.blocks.defined
        };

        return blocks;
    };

    Twig.Template.prototype.render = function (context, params, allowAsync) {
        const template = this;

        params = params || {};

        return Twig.async.potentiallyAsync(template, allowAsync, () => {
            const state = new Twig.ParseState(template, params.blocks);

            return state.parseAsync(template.tokens, context)
                .then(output => {
                    let parentTemplate;
                    let url;

                    if (template.parentTemplate !== null) {
                        // This template extends another template

                        if (template.options.allowInlineIncludes) {
                            // The template is provided inline
                            parentTemplate = Twig.Templates.load(template.parentTemplate);

                            if (parentTemplate) {
                                parentTemplate.options = template.options;
                            }
                        }

                        // Check for the template file via include
                        if (!parentTemplate) {
                            url = Twig.path.parsePath(template, template.parentTemplate);

                            parentTemplate = Twig.Templates.loadRemote(url, {
                                method: template.getLoaderMethod(),
                                base: template.base,
                                async: false,
                                id: url,
                                options: template.options
                            });
                        }

                        template.parentTemplate = parentTemplate;

                        return template.parentTemplate.renderAsync(
                            state.context,
                            {
                                blocks: state.getBlocks(false),
                                isInclude: true
                            }
                        );
                    }

                    if (params.isInclude === true) {
                        return output;
                    }

                    return output.valueOf();
                });
        });
    };

    Twig.Template.prototype.importFile = function (file) {
        let url = null;
        let subTemplate;
        if (!this.url && this.options.allowInlineIncludes) {
            file = this.path ? Twig.path.parsePath(this, file) : file;
            subTemplate = Twig.Templates.load(file);

            if (!subTemplate) {
                subTemplate = Twig.Templates.loadRemote(url, {
                    id: file,
                    method: this.getLoaderMethod(),
                    async: false,
                    path: file,
                    options: this.options
                });

                if (!subTemplate) {
                    throw new Twig.Error('Unable to find the template ' + file);
                }
            }

            subTemplate.options = this.options;

            return subTemplate;
        }

        url = Twig.path.parsePath(this, file);

        // Load blocks from an external file
        subTemplate = Twig.Templates.loadRemote(url, {
            method: this.getLoaderMethod(),
            base: this.base,
            async: false,
            options: this.options,
            id: url
        });

        return subTemplate;
    };

    Twig.Template.prototype.getLoaderMethod = function () {
        if (this.path) {
            return 'fs';
        }

        if (this.url) {
            return 'ajax';
        }

        return this.method || 'fs';
    };

    Twig.Template.prototype.compile = function (options) {
        // Compile the template into raw JS
        return Twig.compiler.compile(this, options);
    };

    /**
     * Create safe output
     *
     * @param {string} Content safe to output
     *
     * @return {String} Content wrapped into a String
     */

    Twig.Markup = function (content, strategy) {
        if (typeof content !== 'string' || content.length === 0) {
            return content;
        }

        /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
        const output = new String(content);
        /* eslint-enable */
        output.twigMarkup = (typeof strategy === 'undefined') ? true : strategy;

        return output;
    };

    return Twig;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// ## twig.compiler.js
//
// This file handles compiling templates into JS
module.exports = function (Twig) {
    /**
     * Namespace for compilation.
     */
    Twig.compiler = {
        module: {}
    };

    // Compile a Twig Template to output.
    Twig.compiler.compile = function (template, options) {
        // Get tokens
        const tokens = JSON.stringify(template.tokens);
        const {id} = template;
        let output = null;

        if (options.module) {
            if (Twig.compiler.module[options.module] === undefined) {
                throw new Twig.Error('Unable to find module type ' + options.module);
            }

            output = Twig.compiler.module[options.module](id, tokens, options.twig);
        } else {
            output = Twig.compiler.wrap(id, tokens);
        }

        return output;
    };

    Twig.compiler.module = {
        amd(id, tokens, pathToTwig) {
            return 'define(["' + pathToTwig + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + Twig.compiler.wrap(id, tokens) + '\n\treturn templates;\n});';
        },
        node(id, tokens) {
            return 'var twig = require("twig").twig;\nexports.template = ' + Twig.compiler.wrap(id, tokens);
        },
        cjs2(id, tokens, pathToTwig) {
            return 'module.declare([{ twig: "' + pathToTwig + '" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = ' + Twig.compiler.wrap(id, tokens) + '\n});';
        }
    };

    Twig.compiler.wrap = function (id, tokens) {
        return 'twig({id:"' + id.replace('"', '\\"') + '", data:' + tokens + ', precompiled: true});\n';
    };

    return Twig;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// ## twig.expression.js
//
// This file handles tokenizing, compiling and parsing expressions.
module.exports = function (Twig) {
    'use strict';

    function parseParams(state, params, context) {
        if (params) {
            return Twig.expression.parseAsync.call(state, params, context);
        }

        return Twig.Promise.resolve(false);
    }

    /**
     * Namespace for expression handling.
     */
    Twig.expression = { };

    __webpack_require__(7)(Twig);

    /**
     * Reserved word that can't be used as variable names.
     */
    Twig.expression.reservedWords = [
        'true', 'false', 'null', 'TRUE', 'FALSE', 'NULL', '_context', 'and', 'b-and', 'or', 'b-or', 'b-xor', 'in', 'not in', 'if', 'matches', 'starts', 'ends', 'with'
    ];

    /**
     * The type of tokens used in expressions.
     */
    Twig.expression.type = {
        comma: 'Twig.expression.type.comma',
        operator: {
            unary: 'Twig.expression.type.operator.unary',
            binary: 'Twig.expression.type.operator.binary'
        },
        string: 'Twig.expression.type.string',
        bool: 'Twig.expression.type.bool',
        slice: 'Twig.expression.type.slice',
        array: {
            start: 'Twig.expression.type.array.start',
            end: 'Twig.expression.type.array.end'
        },
        object: {
            start: 'Twig.expression.type.object.start',
            end: 'Twig.expression.type.object.end'
        },
        parameter: {
            start: 'Twig.expression.type.parameter.start',
            end: 'Twig.expression.type.parameter.end'
        },
        subexpression: {
            start: 'Twig.expression.type.subexpression.start',
            end: 'Twig.expression.type.subexpression.end'
        },
        key: {
            period: 'Twig.expression.type.key.period',
            brackets: 'Twig.expression.type.key.brackets'
        },
        filter: 'Twig.expression.type.filter',
        _function: 'Twig.expression.type._function',
        variable: 'Twig.expression.type.variable',
        number: 'Twig.expression.type.number',
        _null: 'Twig.expression.type.null',
        context: 'Twig.expression.type.context',
        test: 'Twig.expression.type.test'
    };

    Twig.expression.set = {
        // What can follow an expression (in general)
        operations: [
            Twig.expression.type.filter,
            Twig.expression.type.operator.unary,
            Twig.expression.type.operator.binary,
            Twig.expression.type.array.end,
            Twig.expression.type.object.end,
            Twig.expression.type.parameter.end,
            Twig.expression.type.subexpression.end,
            Twig.expression.type.comma,
            Twig.expression.type.test
        ],
        expressions: [
            Twig.expression.type._function,
            Twig.expression.type.bool,
            Twig.expression.type.string,
            Twig.expression.type.variable,
            Twig.expression.type.number,
            Twig.expression.type._null,
            Twig.expression.type.context,
            Twig.expression.type.parameter.start,
            Twig.expression.type.array.start,
            Twig.expression.type.object.start,
            Twig.expression.type.subexpression.start,
            Twig.expression.type.operator.unary
        ]
    };

    // Most expressions allow a '.' or '[' after them, so we provide a convenience set
    Twig.expression.set.operationsExtended = Twig.expression.set.operations.concat([
        Twig.expression.type.key.period,
        Twig.expression.type.key.brackets,
        Twig.expression.type.slice
    ]);

    // Some commonly used compile and parse functions.
    Twig.expression.fn = {
        compile: {
            push(token, stack, output) {
                output.push(token);
            },
            pushBoth(token, stack, output) {
                output.push(token);
                stack.push(token);
            }
        },
        parse: {
            push(token, stack) {
                stack.push(token);
            },
            pushValue(token, stack) {
                stack.push(token.value);
            }
        }
    };

    // The regular expressions and compile/parse logic used to match tokens in expressions.
    //
    // Properties:
    //
    //      type:  The type of expression this matches
    //
    //      regex: One or more regular expressions that matche the format of the token.
    //
    //      next:  Valid tokens that can occur next in the expression.
    //
    // Functions:
    //
    //      compile: A function that compiles the raw regular expression match into a token.
    //
    //      parse:   A function that parses the compiled token into output.
    //
    Twig.expression.definitions = [
        {
            type: Twig.expression.type.test,
            regex: /^is\s+(not)?\s*([a-zA-Z_]\w*(\s?as)?)/,
            next: Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),
            compile(token, stack, output) {
                token.filter = token.match[2];
                token.modifier = token.match[1];
                delete token.match;
                delete token.value;
                output.push(token);
            },
            parse(token, stack, context) {
                const value = stack.pop();
                const state = this;

                return parseParams(state, token.params, context)
                    .then(params => {
                        const result = Twig.test(token.filter, value, params);

                        if (token.modifier === 'not') {
                            stack.push(!result);
                        } else {
                            stack.push(result);
                        }
                    });
            }
        },
        {
            type: Twig.expression.type.comma,
            // Match a comma
            regex: /^,/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end, Twig.expression.type.object.end]),
            compile(token, stack, output) {
                let i = stack.length - 1;
                let stackToken;

                delete token.match;
                delete token.value;

                // Pop tokens off the stack until the start of the object
                for (;i >= 0; i--) {
                    stackToken = stack.pop();
                    if (stackToken.type === Twig.expression.type.object.start ||
                            stackToken.type === Twig.expression.type.parameter.start ||
                            stackToken.type === Twig.expression.type.array.start) {
                        stack.push(stackToken);
                        break;
                    }

                    output.push(stackToken);
                }

                output.push(token);
            }
        },
        {
            /**
             * Match a number (integer or decimal)
             */
            type: Twig.expression.type.number,
            // Match a number
            regex: /^-?\d+(\.\d+)?/,
            next: Twig.expression.set.operations,
            compile(token, stack, output) {
                token.value = Number(token.value);
                output.push(token);
            },
            parse: Twig.expression.fn.parse.pushValue
        },
        {
            type: Twig.expression.type.operator.binary,
            // Match any of ??, ?:, +, *, /, -, %, ~, <, <=, >, >=, !=, ==, **, ?, :, and, b-and, or, b-or, b-xor, in, not in
            // and, or, in, not in, matches, starts with, ends with can be followed by a space or parenthesis
            regex: /(^\?\?|^\?:|^(b-and)|^(b-or)|^(b-xor)|^[+\-~%?]|^[:](?!\d\])|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^(and)[(|\s+]|^(or)[(|\s+]|^(in)[(|\s+]|^(not in)[(|\s+]|^(matches)|^(starts with)|^(ends with)|^\.\.)/,
            next: Twig.expression.set.expressions,
            transform(match, tokens) {
                switch (match[0]) {
                    case 'and(':
                    case 'or(':
                    case 'in(':
                    case 'not in(':
                        // Strip off the ( if it exists
                        tokens[tokens.length - 1].value = match[2];
                        return match[0];
                    default:
                        return '';
                }
            },
            compile(token, stack, output) {
                delete token.match;

                token.value = token.value.trim();
                const {value} = token;
                const operator = Twig.expression.operator.lookup(value, token);

                Twig.log.trace('Twig.expression.compile: ', 'Operator: ', operator, ' from ', value);

                while (stack.length > 0 &&
                       (stack[stack.length - 1].type === Twig.expression.type.operator.unary || stack[stack.length - 1].type === Twig.expression.type.operator.binary) &&
                            (
                                (operator.associativity === Twig.expression.operator.leftToRight &&
                                 operator.precidence >= stack[stack.length - 1].precidence) ||

                                (operator.associativity === Twig.expression.operator.rightToLeft &&
                                 operator.precidence > stack[stack.length - 1].precidence)
                            )
                ) {
                    const temp = stack.pop();
                    output.push(temp);
                }

                if (value === ':') {
                    // Check if this is a ternary or object key being set
                    if (stack[stack.length - 1] && stack[stack.length - 1].value === '?') {
                        // Continue as normal for a ternary
                    } else {
                        // This is not a ternary so we push the token to the output where it can be handled
                        //   when the assocated object is closed.
                        const keyToken = output.pop();

                        if (keyToken.type === Twig.expression.type.string ||
                                keyToken.type === Twig.expression.type.variable) {
                            token.key = keyToken.value;
                        } else if (keyToken.type === Twig.expression.type.number) {
                            // Convert integer keys into string keys
                            token.key = keyToken.value.toString();
                        } else if (keyToken.expression &&
                            (keyToken.type === Twig.expression.type.parameter.end ||
                            keyToken.type === Twig.expression.type.subexpression.end)) {
                            token.params = keyToken.params;
                        } else {
                            throw new Twig.Error('Unexpected value before \':\' of ' + keyToken.type + ' = ' + keyToken.value);
                        }

                        output.push(token);
                    }
                } else {
                    stack.push(operator);
                }
            },
            parse(token, stack, context) {
                const state = this;

                if (token.key) {
                    // Handle ternary ':' operator
                    stack.push(token);
                } else if (token.params) {
                    // Handle "{(expression):value}"
                    return Twig.expression.parseAsync.call(state, token.params, context)
                        .then(key => {
                            token.key = key;
                            stack.push(token);

                            // If we're in a loop, we might need token.params later, especially in this form of "(expression):value"
                            if (!context.loop) {
                                delete (token.params);
                            }
                        });
                } else {
                    Twig.expression.operator.parse(token.value, stack);
                }
            }
        },
        {
            type: Twig.expression.type.operator.unary,
            // Match any of not
            regex: /(^not\s+)/,
            next: Twig.expression.set.expressions,
            compile(token, stack, output) {
                delete token.match;

                token.value = token.value.trim();
                const {value} = token;
                const operator = Twig.expression.operator.lookup(value, token);

                Twig.log.trace('Twig.expression.compile: ', 'Operator: ', operator, ' from ', value);

                while (stack.length > 0 &&
                       (stack[stack.length - 1].type === Twig.expression.type.operator.unary || stack[stack.length - 1].type === Twig.expression.type.operator.binary) &&
                            (
                                (operator.associativity === Twig.expression.operator.leftToRight &&
                                 operator.precidence >= stack[stack.length - 1].precidence) ||

                                (operator.associativity === Twig.expression.operator.rightToLeft &&
                                 operator.precidence > stack[stack.length - 1].precidence)
                            )
                ) {
                    const temp = stack.pop();
                    output.push(temp);
                }

                stack.push(operator);
            },
            parse(token, stack) {
                Twig.expression.operator.parse(token.value, stack);
            }
        },
        {
            /**
             * Match a string. This is anything between a pair of single or double quotes.
             */
            type: Twig.expression.type.string,
            // See: http://blog.stevenlevithan.com/archives/match-quoted-string
            regex: /^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                let {value} = token;
                delete token.match;

                // Remove the quotes from the string
                if (value.substring(0, 1) === '"') {
                    value = value.replace('\\"', '"');
                } else {
                    value = value.replace('\\\'', '\'');
                }

                token.value = value.substring(1, value.length - 1).replace(/\\n/g, '\n').replace(/\\r/g, '\r');
                Twig.log.trace('Twig.expression.compile: ', 'String value: ', token.value);
                output.push(token);
            },
            parse: Twig.expression.fn.parse.pushValue
        },
        {
            /**
             * Match a subexpression set start.
             */
            type: Twig.expression.type.subexpression.start,
            regex: /^\(/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.subexpression.end]),
            compile(token, stack, output) {
                token.value = '(';
                output.push(token);
                stack.push(token);
            },
            parse: Twig.expression.fn.parse.push
        },
        {
            /**
             * Match a subexpression set end.
             */
            type: Twig.expression.type.subexpression.end,
            regex: /^\)/,
            next: Twig.expression.set.operationsExtended,
            validate(match, tokens) {
                // Iterate back through previous tokens to ensure we follow a subexpression start
                let i = tokens.length - 1;
                let foundSubexpressionStart = false;
                let nextSubexpressionStartInvalid = false;
                let unclosedParameterCount = 0;

                while (!foundSubexpressionStart && i >= 0) {
                    const token = tokens[i];

                    foundSubexpressionStart = token.type === Twig.expression.type.subexpression.start;

                    // If we have previously found a subexpression end, then this subexpression start is the start of
                    // that subexpression, not the subexpression we are searching for
                    if (foundSubexpressionStart && nextSubexpressionStartInvalid) {
                        nextSubexpressionStartInvalid = false;
                        foundSubexpressionStart = false;
                    }

                    // Count parameter tokens to ensure we dont return truthy for a parameter opener
                    if (token.type === Twig.expression.type.parameter.start) {
                        unclosedParameterCount++;
                    } else if (token.type === Twig.expression.type.parameter.end) {
                        unclosedParameterCount--;
                    } else if (token.type === Twig.expression.type.subexpression.end) {
                        nextSubexpressionStartInvalid = true;
                    }

                    i--;
                }

                // If we found unclosed parameters, return false
                // If we didnt find subexpression start, return false
                // Otherwise return true

                return (foundSubexpressionStart && (unclosedParameterCount === 0));
            },
            compile(token, stack, output) {
                // This is basically a copy of parameter end compilation
                let stackToken;
                const endToken = token;

                stackToken = stack.pop();
                while (stack.length > 0 && stackToken.type !== Twig.expression.type.subexpression.start) {
                    output.push(stackToken);
                    stackToken = stack.pop();
                }

                // Move contents of parens into preceding filter
                const paramStack = [];
                while (token.type !== Twig.expression.type.subexpression.start) {
                    // Add token to arguments stack
                    paramStack.unshift(token);
                    token = output.pop();
                }

                paramStack.unshift(token);

                // If the token at the top of the *stack* is a function token, pop it onto the output queue.
                // Get the token preceding the parameters
                stackToken = stack[stack.length - 1];

                if (stackToken === undefined ||
                    (stackToken.type !== Twig.expression.type._function &&
                    stackToken.type !== Twig.expression.type.filter &&
                    stackToken.type !== Twig.expression.type.test &&
                    stackToken.type !== Twig.expression.type.key.brackets)) {
                    endToken.expression = true;

                    // Remove start and end token from stack
                    paramStack.pop();
                    paramStack.shift();

                    endToken.params = paramStack;

                    output.push(endToken);
                } else {
                    // This should never be hit
                    endToken.expression = false;
                    stackToken.params = paramStack;
                }
            },
            parse(token, stack, context) {
                const state = this;

                if (token.expression) {
                    return Twig.expression.parseAsync.call(state, token.params, context)
                        .then(value => {
                            stack.push(value);
                        });
                }

                throw new Twig.Error('Unexpected subexpression end when token is not marked as an expression');
            }
        },
        {
            /**
             * Match a parameter set start.
             */
            type: Twig.expression.type.parameter.start,
            regex: /^\(/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),
            validate(match, tokens) {
                const lastToken = tokens[tokens.length - 1];
                // We can't use the regex to test if we follow a space because expression is trimmed
                return lastToken && (Twig.expression.reservedWords.indexOf(lastToken.value.trim()) < 0);
            },
            compile: Twig.expression.fn.compile.pushBoth,
            parse: Twig.expression.fn.parse.push
        },
        {
            /**
             * Match a parameter set end.
             */
            type: Twig.expression.type.parameter.end,
            regex: /^\)/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                let stackToken;
                const endToken = token;

                stackToken = stack.pop();
                while (stack.length > 0 && stackToken.type !== Twig.expression.type.parameter.start) {
                    output.push(stackToken);
                    stackToken = stack.pop();
                }

                // Move contents of parens into preceding filter
                const paramStack = [];
                while (token.type !== Twig.expression.type.parameter.start) {
                    // Add token to arguments stack
                    paramStack.unshift(token);
                    token = output.pop();
                }

                paramStack.unshift(token);

                // Get the token preceding the parameters
                token = output[output.length - 1];

                if (token === undefined ||
                    (token.type !== Twig.expression.type._function &&
                    token.type !== Twig.expression.type.filter &&
                    token.type !== Twig.expression.type.test &&
                    token.type !== Twig.expression.type.key.brackets)) {
                    endToken.expression = true;

                    // Remove start and end token from stack
                    paramStack.pop();
                    paramStack.shift();

                    endToken.params = paramStack;

                    output.push(endToken);
                } else {
                    endToken.expression = false;
                    token.params = paramStack;
                }
            },
            parse(token, stack, context) {
                const newArray = [];
                let arrayEnded = false;
                let value = null;
                const state = this;

                if (token.expression) {
                    return Twig.expression.parseAsync.call(state, token.params, context)
                        .then(value => {
                            stack.push(value);
                        });
                }

                while (stack.length > 0) {
                    value = stack.pop();
                    // Push values into the array until the start of the array
                    if (value && value.type && value.type === Twig.expression.type.parameter.start) {
                        arrayEnded = true;
                        break;
                    }

                    newArray.unshift(value);
                }

                if (!arrayEnded) {
                    throw new Twig.Error('Expected end of parameter set.');
                }

                stack.push(newArray);
            }
        },
        {
            type: Twig.expression.type.slice,
            regex: /^\[(\d*:\d*)\]/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                const sliceRange = token.match[1].split(':');

                // SliceStart can be undefined when we pass parameters to the slice filter later
                const sliceStart = (sliceRange[0]) ? parseInt(sliceRange[0], 10) : undefined;
                const sliceEnd = (sliceRange[1]) ? parseInt(sliceRange[1], 10) : undefined;

                token.value = 'slice';
                token.params = [sliceStart, sliceEnd];

                // SliceEnd can't be undefined as the slice filter doesn't check for this, but it does check the length
                // of the params array, so just shorten it.
                if (!sliceEnd) {
                    token.params = [sliceStart];
                }

                output.push(token);
            },
            parse(token, stack) {
                const input = stack.pop();
                const {params} = token;
                const state = this;

                stack.push(Twig.filter.call(state, token.value, input, params));
            }
        },
        {
            /**
             * Match an array start.
             */
            type: Twig.expression.type.array.start,
            regex: /^\[/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),
            compile: Twig.expression.fn.compile.pushBoth,
            parse: Twig.expression.fn.parse.push
        },
        {
            /**
             * Match an array end.
             */
            type: Twig.expression.type.array.end,
            regex: /^\]/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                let i = stack.length - 1;
                let stackToken;
                // Pop tokens off the stack until the start of the object
                for (;i >= 0; i--) {
                    stackToken = stack.pop();
                    if (stackToken.type === Twig.expression.type.array.start) {
                        break;
                    }

                    output.push(stackToken);
                }

                output.push(token);
            },
            parse(token, stack) {
                const newArray = [];
                let arrayEnded = false;
                let value = null;

                while (stack.length > 0) {
                    value = stack.pop();
                    // Push values into the array until the start of the array
                    if (value.type && value.type === Twig.expression.type.array.start) {
                        arrayEnded = true;
                        break;
                    }

                    newArray.unshift(value);
                }

                if (!arrayEnded) {
                    throw new Twig.Error('Expected end of array.');
                }

                stack.push(newArray);
            }
        },
        // Token that represents the start of a hash map '}'
        //
        // Hash maps take the form:
        //    { "key": 'value', "another_key": item }
        //
        // Keys must be quoted (either single or double) and values can be any expression.
        {
            type: Twig.expression.type.object.start,
            regex: /^\{/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),
            compile: Twig.expression.fn.compile.pushBoth,
            parse: Twig.expression.fn.parse.push
        },

        // Token that represents the end of a Hash Map '}'
        //
        // This is where the logic for building the internal
        // representation of a hash map is defined.
        {
            type: Twig.expression.type.object.end,
            regex: /^\}/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                let i = stack.length - 1;
                let stackToken;

                // Pop tokens off the stack until the start of the object
                for (;i >= 0; i--) {
                    stackToken = stack.pop();
                    if (stackToken && stackToken.type === Twig.expression.type.object.start) {
                        break;
                    }

                    output.push(stackToken);
                }

                output.push(token);
            },
            parse(endToken, stack) {
                const newObject = {};
                let objectEnded = false;
                let token = null;
                let hasValue = false;
                let value = null;

                while (stack.length > 0) {
                    token = stack.pop();
                    // Push values into the array until the start of the object
                    if (token && token.type && token.type === Twig.expression.type.object.start) {
                        objectEnded = true;
                        break;
                    }

                    if (token && token.type && (token.type === Twig.expression.type.operator.binary || token.type === Twig.expression.type.operator.unary) && token.key) {
                        if (!hasValue) {
                            throw new Twig.Error('Missing value for key \'' + token.key + '\' in object definition.');
                        }

                        newObject[token.key] = value;

                        // Preserve the order that elements are added to the map
                        // This is necessary since JavaScript objects don't
                        // guarantee the order of keys
                        if (newObject._keys === undefined) {
                            newObject._keys = [];
                        }

                        newObject._keys.unshift(token.key);

                        // Reset value check
                        value = null;
                        hasValue = false;
                    } else {
                        hasValue = true;
                        value = token;
                    }
                }

                if (!objectEnded) {
                    throw new Twig.Error('Unexpected end of object.');
                }

                stack.push(newObject);
            }
        },

        // Token representing a filter
        //
        // Filters can follow any expression and take the form:
        //    expression|filter(optional, args)
        //
        // Filter parsing is done in the Twig.filters namespace.
        {
            type: Twig.expression.type.filter,
            // Match a | then a letter or _, then any number of letters, numbers, _ or -
            regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_-]*)/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile(token, stack, output) {
                token.value = token.match[1];
                output.push(token);
            },
            parse(token, stack, context) {
                const input = stack.pop();
                const state = this;

                return parseParams(state, token.params, context)
                    .then(params => {
                        return Twig.filter.call(state, token.value, input, params);
                    })
                    .then(value => {
                        stack.push(value);
                    });
            }
        },
        {
            type: Twig.expression.type._function,
            // Match any letter or _, then any number of letters, numbers, _ or - followed by (
            regex: /^([a-zA-Z_]\w*)\s*\(/,
            next: Twig.expression.type.parameter.start,
            validate(match) {
                // Make sure this function is not a reserved word
                return match[1] && (Twig.expression.reservedWords.indexOf(match[1]) < 0);
            },
            transform() {
                return '(';
            },
            compile(token, stack, output) {
                const fn = token.match[1];
                token.fn = fn;
                // Cleanup token
                delete token.match;
                delete token.value;

                output.push(token);
            },
            parse(token, stack, context) {
                const state = this;
                const {fn} = token;
                let value;

                return parseParams(state, token.params, context)
                    .then(params => {
                        if (Twig.functions[fn]) {
                        // Get the function from the built-in functions
                            value = Twig.functions[fn].apply(state, params);
                        } else if (typeof context[fn] === 'function') {
                        // Get the function from the user/context defined functions
                            value = context[fn](...params);
                        } else {
                            throw new Twig.Error(fn + ' function does not exist and is not defined in the context');
                        }

                        return value;
                    })
                    .then(result => {
                        stack.push(result);
                    });
            }
        },

        // Token representing a variable.
        //
        // Variables can contain letters, numbers, underscores and
        // dashes, but must start with a letter or underscore.
        //
        // Variables are retrieved from the render context and take
        // the value of 'undefined' if the given variable doesn't
        // exist in the context.
        {
            type: Twig.expression.type.variable,
            // Match any letter or _, then any number of letters, numbers, _ or -
            regex: /^[a-zA-Z_]\w*/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile: Twig.expression.fn.compile.push,
            validate(match) {
                return (Twig.expression.reservedWords.indexOf(match[0]) < 0);
            },
            parse(token, stack, context) {
                const state = this;

                // Get the variable from the context
                return Twig.expression.resolveAsync.call(state, context[token.value], context)
                    .then(value => {
                        if (state.template.options.strictVariables && value === undefined) {
                            throw new Twig.Error('Variable "' + token.value + '" does not exist.');
                        }

                        stack.push(value);
                    });
            }
        },
        {
            type: Twig.expression.type.key.period,
            regex: /^\.(\w+)/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile(token, stack, output) {
                token.key = token.match[1];
                delete token.match;
                delete token.value;

                output.push(token);
            },
            parse(token, stack, context, nextToken) {
                const state = this;
                const {key} = token;
                const object = stack.pop();
                let value;

                if (object && !Object.prototype.hasOwnProperty.call(object, key) && state.template.options.strictVariables) {
                    const keys = Object.keys(object);
                    if (keys.length > 0) {
                        throw new Twig.Error('Key "' + key + '" for object with keys "' + Object.keys(object).join(', ') + '" does not exist.');
                    } else {
                        throw new Twig.Error('Key "' + key + '" does not exist as the object is empty.');
                    }
                }

                return parseParams(state, token.params, context)
                    .then(params => {
                        if (object === null || object === undefined) {
                            value = undefined;
                        } else {
                            const capitalize = function (value) {
                                return value.substr(0, 1).toUpperCase() + value.substr(1);
                            };

                            // Get the variable from the context
                            if (typeof object === 'object' && key in object) {
                                value = object[key];
                            } else if (object['get' + capitalize(key)]) {
                                value = object['get' + capitalize(key)];
                            } else if (object['is' + capitalize(key)]) {
                                value = object['is' + capitalize(key)];
                            } else {
                                value = undefined;
                            }
                        }

                        // When resolving an expression we need to pass nextToken in case the expression is a function
                        return Twig.expression.resolveAsync.call(state, value, context, params, nextToken, object);
                    })
                    .then(result => {
                        stack.push(result);
                    });
            }
        },
        {
            type: Twig.expression.type.key.brackets,
            regex: /^\[([^\]:]*)\]/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile(token, stack, output) {
                const match = token.match[1];
                delete token.value;
                delete token.match;

                // The expression stack for the key
                token.stack = Twig.expression.compile({
                    value: match
                }).stack;

                output.push(token);
            },
            parse(token, stack, context, nextToken) {
                // Evaluate key
                const state = this;
                let params = null;
                let object;
                let value;

                return parseParams(state, token.params, context)
                    .then(parameters => {
                        params = parameters;
                        return Twig.expression.parseAsync.call(state, token.stack, context);
                    })
                    .then(key => {
                        object = stack.pop();

                        if (object && !Object.prototype.hasOwnProperty.call(object, key) && state.template.options.strictVariables) {
                            const keys = Object.keys(object);
                            if (keys.length > 0) {
                                throw new Twig.Error('Key "' + key + '" for array with keys "' + keys.join(', ') + '" does not exist.');
                            } else {
                                throw new Twig.Error('Key "' + key + '" does not exist as the array is empty.');
                            }
                        } else if (object === null || object === undefined) {
                            return null;
                        }

                        // Get the variable from the context
                        if (typeof object === 'object' && key in object) {
                            value = object[key];
                        } else {
                            value = null;
                        }

                        // When resolving an expression we need to pass nextToken in case the expression is a function
                        return Twig.expression.resolveAsync.call(state, value, object, params, nextToken);
                    })
                    .then(result => {
                        stack.push(result);
                    });
            }
        },
        {
            /**
             * Match a null value.
             */
            type: Twig.expression.type._null,
            // Match a number
            regex: /^(null|NULL|none|NONE)/,
            next: Twig.expression.set.operations,
            compile(token, stack, output) {
                delete token.match;
                token.value = null;
                output.push(token);
            },
            parse: Twig.expression.fn.parse.pushValue
        },
        {
            /**
             * Match the context
             */
            type: Twig.expression.type.context,
            regex: /^_context/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile: Twig.expression.fn.compile.push,
            parse(token, stack, context) {
                stack.push(context);
            }
        },
        {
            /**
             * Match a boolean
             */
            type: Twig.expression.type.bool,
            regex: /^(true|TRUE|false|FALSE)/,
            next: Twig.expression.set.operations,
            compile(token, stack, output) {
                token.value = (token.match[0].toLowerCase() === 'true');
                delete token.match;
                output.push(token);
            },
            parse: Twig.expression.fn.parse.pushValue
        }
    ];

    /**
     * Resolve a context value.
     *
     * If the value is a function, it is executed with a context parameter.
     *
     * @param {string} key The context object key.
     * @param {Object} context The render context.
     */
    Twig.expression.resolveAsync = function (value, context, params, nextToken, object) {
        const state = this;

        if (typeof value !== 'function') {
            return Twig.Promise.resolve(value);
        }

        let promise = Twig.Promise.resolve(params);

        /*
        If value is a function, it will have been impossible during the compile stage to determine that a following
        set of parentheses were parameters for this function.

        Those parentheses will have therefore been marked as an expression, with their own parameters, which really
        belong to this function.

        Those parameters will also need parsing in case they are actually an expression to pass as parameters.
            */
        if (nextToken && nextToken.type === Twig.expression.type.parameter.end) {
            // When parsing these parameters, we need to get them all back, not just the last item on the stack.
            const tokensAreParameters = true;

            promise = promise.then(() => {
                return nextToken.params && Twig.expression.parseAsync.call(state, nextToken.params, context, tokensAreParameters);
            })
                .then(p => {
                // Clean up the parentheses tokens on the next loop
                    nextToken.cleanup = true;

                    return p;
                });
        }

        return promise.then(params => {
            return value.apply(object || context, params || []);
        });
    };

    Twig.expression.resolve = function (value, context, params, nextToken, object) {
        return Twig.async.potentiallyAsync(this, false, function () {
            return Twig.expression.resolveAsync.call(this, value, context, params, nextToken, object);
        });
    };

    /**
     * Registry for logic handlers.
     */
    Twig.expression.handler = {};

    /**
     * Define a new expression type, available at Twig.logic.type.{type}
     *
     * @param {string} type The name of the new type.
     */
    Twig.expression.extendType = function (type) {
        Twig.expression.type[type] = 'Twig.expression.type.' + type;
    };

    /**
     * Extend the expression parsing functionality with a new definition.
     *
     * Token definitions follow this format:
     *  {
     *      type:     One of Twig.expression.type.[type], either pre-defined or added using
     *                    Twig.expression.extendType
     *
     *      next:     Array of types from Twig.expression.type that can follow this token,
     *
     *      regex:    A regex or array of regex's that should match the token.
     *
     *      compile: function(token, stack, output) called when this token is being compiled.
     *                   Should return an object with stack and output set.
     *
     *      parse:   function(token, stack, context) called when this token is being parsed.
     *                   Should return an object with stack and context set.
     *  }
     *
     * @param {Object} definition A token definition.
     */
    Twig.expression.extend = function (definition) {
        if (!definition.type) {
            throw new Twig.Error('Unable to extend logic definition. No type provided for ' + definition);
        }

        Twig.expression.handler[definition.type] = definition;
    };

    // Extend with built-in expressions
    while (Twig.expression.definitions.length > 0) {
        Twig.expression.extend(Twig.expression.definitions.shift());
    }

    /**
     * Break an expression into tokens defined in Twig.expression.definitions.
     *
     * @param {string} expression The string to tokenize.
     *
     * @return {Array} An array of tokens.
     */
    Twig.expression.tokenize = function (expression) {
        const tokens = [];
        // Keep an offset of the location in the expression for error messages.
        let expOffset = 0;
        // The valid next tokens of the previous token
        let next = null;
        // Match information
        let type;
        let regex;
        let regexI;
        // The possible next token for the match
        let tokenNext;
        // Has a match been found from the definitions
        let matchFound;
        let invalidMatches = [];

        const matchFunction = function (...args) {
            // Don't pass arguments to `Array.slice`, that is a performance killer
            let matchI = arguments.length - 2;
            const match = new Array(matchI);

            while (matchI-- > 0) {
                match[matchI] = args[matchI];
            }

            Twig.log.trace('Twig.expression.tokenize',
                'Matched a ', type, ' regular expression of ', match);

            if (next && next.indexOf(type) < 0) {
                invalidMatches.push(
                    type + ' cannot follow a ' + tokens[tokens.length - 1].type +
                           ' at template:' + expOffset + ' near \'' + match[0].substring(0, 20) +
                           '...\''
                );

                // Not a match, don't change the expression
                return match[0];
            }

            const handler = Twig.expression.handler[type];

            // Validate the token if a validation function is provided
            if (handler.validate && !handler.validate(match, tokens)) {
                return match[0];
            }

            invalidMatches = [];

            tokens.push({
                type,
                value: match[0],
                match
            });

            matchFound = true;
            next = tokenNext;
            expOffset += match[0].length;

            // Does the token need to return output back to the expression string
            // e.g. a function match of cycle( might return the '(' back to the expression
            // This allows look-ahead to differentiate between token types (e.g. functions and variable names)
            if (handler.transform) {
                return handler.transform(match, tokens);
            }

            return '';
        };

        Twig.log.debug('Twig.expression.tokenize', 'Tokenizing expression ', expression);

        while (expression.length > 0) {
            expression = expression.trim();
            for (type in Twig.expression.handler) {
                if (Object.hasOwnProperty.call(Twig.expression.handler, type)) {
                    tokenNext = Twig.expression.handler[type].next;
                    regex = Twig.expression.handler[type].regex;
                    Twig.log.trace('Checking type ', type, ' on ', expression);

                    matchFound = false;

                    if (Array.isArray(regex)) {
                        regexI = regex.length;
                        while (regexI-- > 0) {
                            expression = expression.replace(regex[regexI], matchFunction);
                        }
                    } else {
                        expression = expression.replace(regex, matchFunction);
                    }

                    // An expression token has been matched. Break the for loop and start trying to
                    //  match the next template (if expression isn't empty.)
                    if (matchFound) {
                        break;
                    }
                }
            }

            if (!matchFound) {
                if (invalidMatches.length > 0) {
                    throw new Twig.Error(invalidMatches.join(' OR '));
                } else {
                    throw new Twig.Error('Unable to parse \'' + expression + '\' at template position' + expOffset);
                }
            }
        }

        Twig.log.trace('Twig.expression.tokenize', 'Tokenized to ', tokens);
        return tokens;
    };

    /**
     * Compile an expression token.
     *
     * @param {Object} rawToken The uncompiled token.
     *
     * @return {Object} The compiled token.
     */
    Twig.expression.compile = function (rawToken) {
        const expression = rawToken.value;
        // Tokenize expression
        const tokens = Twig.expression.tokenize(expression);
        let token = null;
        const output = [];
        const stack = [];
        let tokenTemplate = null;

        Twig.log.trace('Twig.expression.compile: ', 'Compiling ', expression);

        // Push tokens into RPN stack using the Shunting-yard algorithm
        // See http://en.wikipedia.org/wiki/Shunting_yard_algorithm

        while (tokens.length > 0) {
            token = tokens.shift();
            tokenTemplate = Twig.expression.handler[token.type];

            Twig.log.trace('Twig.expression.compile: ', 'Compiling ', token);

            // Compile the template
            tokenTemplate.compile(token, stack, output);

            Twig.log.trace('Twig.expression.compile: ', 'Stack is', stack);
            Twig.log.trace('Twig.expression.compile: ', 'Output is', output);
        }

        while (stack.length > 0) {
            output.push(stack.pop());
        }

        Twig.log.trace('Twig.expression.compile: ', 'Final output is', output);

        rawToken.stack = output;
        delete rawToken.value;

        return rawToken;
    };

    /**
     * Parse an RPN expression stack within a context.
     *
     * @param {Array} tokens An array of compiled expression tokens.
     * @param {Object} context The render context to parse the tokens with.
     *
     * @return {Object} The result of parsing all the tokens. The result
     *                  can be anything, String, Array, Object, etc... based on
     *                  the given expression.
     */
    Twig.expression.parse = function (tokens, context, tokensAreParameters, allowAsync) {
        const state = this;

        // If the token isn't an array, make it one.
        if (!Array.isArray(tokens)) {
            tokens = [tokens];
        }

        // The output stack
        const stack = [];
        const loopTokenFixups = [];
        const binaryOperator = Twig.expression.type.operator.binary;

        return Twig.async.potentiallyAsync(state, allowAsync, () => {
            return Twig.async.forEach(tokens, (token, index) => {
                let tokenTemplate = null;
                let nextToken = null;
                let result;

                // If the token is marked for cleanup, we don't need to parse it
                if (token.cleanup) {
                    return;
                }

                // Determine the token that follows this one so that we can pass it to the parser
                if (tokens.length > index + 1) {
                    nextToken = tokens[index + 1];
                }

                tokenTemplate = Twig.expression.handler[token.type];

                if (tokenTemplate.parse) {
                    result = tokenTemplate.parse.call(state, token, stack, context, nextToken);
                }

                // Store any binary tokens for later if we are in a loop.
                if (token.type === binaryOperator && context.loop) {
                    loopTokenFixups.push(token);
                }

                return result;
            })
                .then(() => {
                // Check every fixup and remove "key" as long as they still have "params". This covers the use case where
                // a ":" operator is used in a loop with a "(expression):" statement. We need to be able to evaluate the expression
                    let len = loopTokenFixups.length;
                    let loopTokenFixup = null;

                    while (len-- > 0) {
                        loopTokenFixup = loopTokenFixups[len];
                        if (loopTokenFixup.params && loopTokenFixup.key) {
                            delete loopTokenFixup.key;
                        }
                    }

                    // If parse has been called with a set of tokens that are parameters, we need to return the whole stack,
                    // wrapped in an Array.
                    if (tokensAreParameters) {
                        const params = stack.splice(0);

                        stack.push(params);
                    }

                    // Pop the final value off the stack
                    return stack.pop();
                });
        });
    };

    return Twig;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// ## twig.expression.operator.js
//
// This file handles operator lookups and parsing.
module.exports = function (Twig) {
    'use strict';

    /**
     * Operator associativity constants.
     */
    Twig.expression.operator = {
        leftToRight: 'leftToRight',
        rightToLeft: 'rightToLeft'
    };

    const containment = function (a, b) {
        if (b === undefined || b === null) {
            return null;
        }

        if (b.indexOf !== undefined) {
            // String
            return (a === b || a !== '') && b.indexOf(a) > -1;
        }

        let el;
        for (el in b) {
            if (Object.hasOwnProperty.call(b, el) && b[el] === a) {
                return true;
            }
        }

        return false;
    };

    /**
     * Get the precidence and associativity of an operator. These follow the order that C/C++ use.
     * See http://en.wikipedia.org/wiki/Operators_in_C_and_C++ for the table of values.
     */
    Twig.expression.operator.lookup = function (operator, token) {
        switch (operator) {
            case '..':
                token.precidence = 20;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case ',':
                token.precidence = 18;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            // Ternary
            case '?:':
            case '?':
            case ':':
                token.precidence = 16;
                token.associativity = Twig.expression.operator.rightToLeft;
                break;

            // Null-coalescing operator
            case '??':
                token.precidence = 15;
                token.associativity = Twig.expression.operator.rightToLeft;
                break;

            case 'or':
                token.precidence = 14;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'and':
                token.precidence = 13;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'b-or':
                token.precidence = 12;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'b-xor':
                token.precidence = 11;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'b-and':
                token.precidence = 10;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case '==':
            case '!=':
                token.precidence = 9;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case '<':
            case '<=':
            case '>':
            case '>=':
            case 'not in':
            case 'in':
                token.precidence = 8;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case '~': // String concatination
            case '+':
            case '-':
                token.precidence = 6;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case '//':
            case '**':
            case '*':
            case '/':
            case '%':
                token.precidence = 5;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'not':
                token.precidence = 3;
                token.associativity = Twig.expression.operator.rightToLeft;
                break;

            case 'matches':
                token.precidence = 8;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'starts with':
                token.precidence = 8;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'ends with':
                token.precidence = 8;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            default:
                throw new Twig.Error('Failed to lookup operator: ' + operator + ' is an unknown operator.');
        }

        token.operator = operator;
        return token;
    };

    /**
     * Handle operations on the RPN stack.
     *
     * Returns the updated stack.
     */
    Twig.expression.operator.parse = function (operator, stack) {
        Twig.log.trace('Twig.expression.operator.parse: ', 'Handling ', operator);
        let a;
        let b;
        let c;

        if (operator === '?') {
            c = stack.pop();
        }

        b = stack.pop();
        if (operator !== 'not') {
            a = stack.pop();
        }

        if (operator !== 'in' && operator !== 'not in' && operator !== '??') {
            if (a && Array.isArray(a)) {
                a = a.length;
            }

            if (b && Array.isArray(b)) {
                b = b.length;
            }
        }

        if (operator === 'matches') {
            if (b && typeof b === 'string') {
                const reParts = b.match(/^\/(.*)\/([gims]?)$/);
                const reBody = reParts[1];
                const reFlags = reParts[2];
                b = new RegExp(reBody, reFlags);
            }
        }

        switch (operator) {
            case ':':
                // Ignore
                break;

            case '??':
                if (a === undefined) {
                    a = b;
                    b = c;
                    c = undefined;
                }

                if (a !== undefined && a !== null) {
                    stack.push(a);
                } else {
                    stack.push(b);
                }

                break;
            case '?:':
                if (Twig.lib.boolval(a)) {
                    stack.push(a);
                } else {
                    stack.push(b);
                }

                break;
            case '?':
                if (a === undefined) {
                    // An extended ternary.
                    a = b;
                    b = c;
                    c = undefined;
                }

                if (Twig.lib.boolval(a)) {
                    stack.push(b);
                } else {
                    stack.push(c);
                }

                break;

            case '+':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a + b);
                break;

            case '-':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a - b);
                break;

            case '*':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a * b);
                break;

            case '/':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a / b);
                break;

            case '//':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(Math.floor(a / b));
                break;

            case '%':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a % b);
                break;

            case '~':
                stack.push((typeof a !== 'undefined' && a !== null ? a.toString() : '') +
                          (typeof b !== 'undefined' && b !== null ? b.toString() : ''));
                break;

            case 'not':
            case '!':
                stack.push(!Twig.lib.boolval(b));
                break;

            case '<':
                stack.push(a < b);
                break;

            case '<=':
                stack.push(a <= b);
                break;

            case '>':
                stack.push(a > b);
                break;

            case '>=':
                stack.push(a >= b);
                break;

            case '===':
                stack.push(a === b);
                break;

            case '==':
                /* eslint-disable-next-line eqeqeq */
                stack.push(a == b);
                break;

            case '!==':
                stack.push(a !== b);
                break;

            case '!=':
                /* eslint-disable-next-line eqeqeq */
                stack.push(a != b);
                break;

            case 'or':
                stack.push(Twig.lib.boolval(a) || Twig.lib.boolval(b));
                break;

            case 'b-or':
                stack.push(a | b);
                break;

            case 'b-xor':
                stack.push(a ^ b);
                break;

            case 'and':
                stack.push(Twig.lib.boolval(a) && Twig.lib.boolval(b));
                break;

            case 'b-and':
                stack.push(a & b);
                break;

            case '**':
                stack.push(a ** b);
                break;

            case 'not in':
                stack.push(!containment(a, b));
                break;

            case 'in':
                stack.push(containment(a, b));
                break;

            case 'matches':
                stack.push(b.test(a));
                break;

            case 'starts with':
                stack.push(typeof a === 'string' && a.indexOf(b) === 0);
                break;

            case 'ends with':
                stack.push(typeof a === 'string' && a.indexOf(b, a.length - b.length) !== -1);
                break;

            case '..':
                stack.push(Twig.functions.range(a, b));
                break;

            default:
                throw new Twig.Error('Failed to parse operator: ' + operator + ' is an unknown operator.');
        }
    };

    return Twig;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// ## twig.filters.js
//
// This file handles parsing filters.
module.exports = function (Twig) {
    // Determine object type
    function is(type, obj) {
        const clas = Object.prototype.toString.call(obj).slice(8, -1);
        return obj !== undefined && obj !== null && clas === type;
    }

    Twig.filters = {
        // String Filters
        upper(value) {
            if (typeof value !== 'string') {
                return value;
            }

            return value.toUpperCase();
        },
        lower(value) {
            if (typeof value !== 'string') {
                return value;
            }

            return value.toLowerCase();
        },
        capitalize(value) {
            if (typeof value !== 'string') {
                return value;
            }

            return value.substr(0, 1).toUpperCase() + value.toLowerCase().substr(1);
        },
        title(value) {
            if (typeof value !== 'string') {
                return value;
            }

            return value.toLowerCase().replace(/(^|\s)([a-z])/g, (m, p1, p2) => {
                return p1 + p2.toUpperCase();
            });
        },
        length(value) {
            if (Twig.lib.is('Array', value) || typeof value === 'string') {
                return value.length;
            }

            if (Twig.lib.is('Object', value)) {
                if (value._keys === undefined) {
                    return Object.keys(value).length;
                }

                return value._keys.length;
            }

            return 0;
        },

        // Array/Object Filters
        reverse(value) {
            if (is('Array', value)) {
                return value.reverse();
            }

            if (is('String', value)) {
                return value.split('').reverse().join('');
            }

            if (is('Object', value)) {
                const keys = value._keys || Object.keys(value).reverse();
                value._keys = keys;
                return value;
            }
        },
        sort(value) {
            if (is('Array', value)) {
                return value.sort();
            }

            if (is('Object', value)) {
                // Sorting objects isn't obvious since the order of
                // returned keys isn't guaranteed in JavaScript.
                // Because of this we use a "hidden" key called _keys to
                // store the keys in the order we want to return them.

                delete value._keys;
                const keys = Object.keys(value);
                const sortedKeys = keys.sort((a, b) => {
                    let a1;
                    let b1;

                    // If a and b are comparable, we're fine :-)
                    if ((value[a] > value[b]) === !(value[a] <= value[b])) {
                        return value[a] > value[b] ? 1 :
                            (value[a] < value[b] ? -1 : 0);
                    }

                    // If a and b can be parsed as numbers, we can compare
                    // their numeric value
                    if (!isNaN(a1 = parseFloat(value[a])) &&
                                !isNaN(b1 = parseFloat(value[b]))) {
                        return a1 > b1 ? 1 : (a1 < b1 ? -1 : 0);
                    }

                    // If one of the values is a string, we convert the
                    // other value to string as well
                    if (typeof value[a] === 'string') {
                        return value[a] > value[b].toString() ? 1 :
                            (value[a] < value[b].toString() ? -1 : 0);
                    }

                    if (typeof value[b] === 'string') {
                        return value[a].toString() > value[b] ? 1 :
                            (value[a].toString() < value[b] ? -1 : 0);
                    }
                    // Everything failed - return 'null' as sign, that
                    // the values are not comparable

                    return null;
                });
                value._keys = sortedKeys;
                return value;
            }
        },
        keys(value) {
            if (value === undefined || value === null) {
                return;
            }

            const keyset = value._keys || Object.keys(value);
            const output = [];

            keyset.forEach(key => {
                if (key === '_keys') {
                    return;
                } // Ignore the _keys property

                if (Object.hasOwnProperty.call(value, key)) {
                    output.push(key);
                }
            });
            return output;
        },
        /* eslint-disable-next-line camelcase */
        url_encode(value) {
            if (value === undefined || value === null) {
                return;
            }

            if (Twig.lib.is('Object', value)) {
                const serialize = function (obj, prefix) {
                    const result = [];
                    const keyset = obj._keys || Object.keys(obj);

                    keyset.forEach(key => {
                        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
                            return;
                        }

                        const resultKey = prefix ? prefix + '[' + key + ']' : key;
                        const resultValue = obj[key];

                        result.push(
                            (Twig.lib.is('Object', resultValue) || Array.isArray(resultValue)) ?
                                serialize(resultValue, resultKey) :
                                encodeURIComponent(resultKey) + '=' + encodeURIComponent(resultValue)
                        );
                    });

                    return result.join('&amp;');
                };

                return serialize(value);
            }

            let result = encodeURIComponent(value);
            result = result.replace('\'', '%27');
            return result;
        },
        join(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            let joinStr = '';
            let output = [];
            let keyset = null;

            if (params && params[0]) {
                joinStr = params[0];
            }

            if (is('Array', value)) {
                output = value;
            } else {
                keyset = value._keys || Object.keys(value);
                keyset.forEach(key => {
                    if (key === '_keys') {
                        return;
                    } // Ignore the _keys property

                    if (Object.hasOwnProperty.call(value, key)) {
                        output.push(value[key]);
                    }
                });
            }

            return output.join(joinStr);
        },
        default(value, params) {
            if (params !== undefined && params.length > 1) {
                throw new Twig.Error('default filter expects one argument');
            }

            if (value === undefined || value === null || value === '') {
                if (params === undefined) {
                    return '';
                }

                return params[0];
            }

            return value;
        },
        /* eslint-disable-next-line camelcase */
        json_encode(value) {
            if (value === undefined || value === null) {
                return 'null';
            }

            if ((typeof value === 'object') && (is('Array', value))) {
                const output = [];

                value.forEach(v => {
                    output.push(Twig.filters.json_encode(v));
                });

                return '[' + output.join(',') + ']';
            }

            if ((typeof value === 'object') && (is('Date', value))) {
                return '"' + value.toISOString() + '"';
            }

            if (typeof value === 'object') {
                const keyset = value._keys || Object.keys(value);
                const output = [];

                keyset.forEach(key => {
                    output.push(JSON.stringify(key) + ':' + Twig.filters.json_encode(value[key]));
                });

                return '{' + output.join(',') + '}';
            }

            return JSON.stringify(value);
        },
        merge(value, params) {
            let obj = [];
            let arrIndex = 0;
            let keyset = [];

            // Check to see if all the objects being merged are arrays
            if (is('Array', value)) {
                params.forEach(param => {
                    if (!is('Array', param)) {
                        obj = { };
                    }
                });
            } else {
                // Create obj as an Object
                obj = { };
            }

            if (!is('Array', obj)) {
                obj._keys = [];
            }

            if (is('Array', value)) {
                value.forEach(val => {
                    if (obj._keys) {
                        obj._keys.push(arrIndex);
                    }

                    obj[arrIndex] = val;
                    arrIndex++;
                });
            } else {
                keyset = value._keys || Object.keys(value);
                keyset.forEach(key => {
                    obj[key] = value[key];
                    obj._keys.push(key);

                    // Handle edge case where a number index in an object is greater than
                    //   the array counter. In such a case, the array counter is increased
                    //   one past the index.
                    //
                    // Example {{ ["a", "b"]|merge({"4":"value"}, ["c", "d"])
                    // Without this, d would have an index of "4" and overwrite the value
                    //   of "value"
                    const intKey = parseInt(key, 10);
                    if (!isNaN(intKey) && intKey >= arrIndex) {
                        arrIndex = intKey + 1;
                    }
                });
            }

            // Mixin the merge arrays
            params.forEach(param => {
                if (is('Array', param)) {
                    param.forEach(val => {
                        if (obj._keys) {
                            obj._keys.push(arrIndex);
                        }

                        obj[arrIndex] = val;
                        arrIndex++;
                    });
                } else {
                    keyset = param._keys || Object.keys(param);
                    keyset.forEach(key => {
                        if (!obj[key]) {
                            obj._keys.push(key);
                        }

                        obj[key] = param[key];

                        const intKey = parseInt(key, 10);
                        if (!isNaN(intKey) && intKey >= arrIndex) {
                            arrIndex = intKey + 1;
                        }
                    });
                }
            });
            if (params.length === 0) {
                throw new Twig.Error('Filter merge expects at least one parameter');
            }

            return obj;
        },

        date(value, params) {
            const date = Twig.functions.date(value);
            const format = params && Boolean(params.length) ? params[0] : 'F j, Y H:i';
            return Twig.lib.date(format.replace(/\\\\/g, '\\'), date);
        },
        /* eslint-disable-next-line camelcase */
        date_modify(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            if (params === undefined || params.length !== 1) {
                throw new Twig.Error('date_modify filter expects 1 argument');
            }

            const modifyText = params[0];
            let time;

            if (Twig.lib.is('Date', value)) {
                time = Twig.lib.strtotime(modifyText, value.getTime() / 1000);
            }

            if (Twig.lib.is('String', value)) {
                time = Twig.lib.strtotime(modifyText, Twig.lib.strtotime(value));
            }

            if (Twig.lib.is('Number', value)) {
                time = Twig.lib.strtotime(modifyText, value);
            }

            return new Date(time * 1000);
        },

        replace(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            const pairs = params[0];
            let tag;
            for (tag in pairs) {
                if (Object.hasOwnProperty.call(pairs, tag) && tag !== '_keys') {
                    value = Twig.lib.replaceAll(value, tag, pairs[tag]);
                }
            }

            return value;
        },

        format(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            return Twig.lib.vsprintf(value, params);
        },

        striptags(value, allowed) {
            if (value === undefined || value === null) {
                return;
            }

            return Twig.lib.stripTags(value, allowed);
        },

        escape(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            let strategy = 'html';
            if (params && Boolean(params.length) && params[0] !== true) {
                strategy = params[0];
            }

            if (strategy === 'html') {
                const rawValue = value.toString().replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;');
                return new Twig.Markup(rawValue, 'html');
            }

            if (strategy === 'js') {
                const rawValue = value.toString();
                let result = '';

                for (let i = 0; i < rawValue.length; i++) {
                    if (rawValue[i].match(/^[a-zA-Z0-9,._]$/)) {
                        result += rawValue[i];
                    } else {
                        const charCode = rawValue.charCodeAt(i);

                        if (charCode < 0x80) {
                            result += '\\x' + charCode.toString(16).toUpperCase();
                        } else {
                            result += Twig.lib.sprintf('\\u%04s', charCode.toString(16).toUpperCase());
                        }
                    }
                }

                return new Twig.Markup(result, 'js');
            }

            if (strategy === 'css') {
                const rawValue = value.toString();
                let result = '';

                for (let i = 0; i < rawValue.length; i++) {
                    if (rawValue[i].match(/^[a-zA-Z0-9]$/)) {
                        result += rawValue[i];
                    } else {
                        const charCode = rawValue.charCodeAt(i);
                        result += '\\' + charCode.toString(16).toUpperCase() + ' ';
                    }
                }

                return new Twig.Markup(result, 'css');
            }

            if (strategy === 'url') {
                const result = Twig.filters.url_encode(value);
                return new Twig.Markup(result, 'url');
            }

            if (strategy === 'html_attr') {
                const rawValue = value.toString();
                let result = '';

                for (let i = 0; i < rawValue.length; i++) {
                    if (rawValue[i].match(/^[a-zA-Z0-9,.\-_]$/)) {
                        result += rawValue[i];
                    } else if (rawValue[i].match(/^[&<>"]$/)) {
                        result += rawValue[i].replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/"/g, '&quot;');
                    } else {
                        const charCode = rawValue.charCodeAt(i);

                        // The following replaces characters undefined in HTML with
                        // the hex entity for the Unicode replacement character.
                        if (charCode <= 0x1F && charCode !== 0x09 && charCode !== 0x0A && charCode !== 0x0D) {
                            result += '&#xFFFD;';
                        } else if (charCode < 0x80) {
                            result += Twig.lib.sprintf('&#x%02s;', charCode.toString(16).toUpperCase());
                        } else {
                            result += Twig.lib.sprintf('&#x%04s;', charCode.toString(16).toUpperCase());
                        }
                    }
                }

                return new Twig.Markup(result, 'html_attr');
            }

            throw new Twig.Error('escape strategy unsupported');
        },

        /* Alias of escape */
        e(value, params) {
            return Twig.filters.escape(value, params);
        },

        nl2br(value) {
            if (value === undefined || value === null) {
                return;
            }

            const linebreakTag = 'BACKSLASH_n_replace';
            const br = '<br />' + linebreakTag;

            value = Twig.filters.escape(value)
                .replace(/\r\n/g, br)
                .replace(/\r/g, br)
                .replace(/\n/g, br);

            value = Twig.lib.replaceAll(value, linebreakTag, '\n');

            return new Twig.Markup(value);
        },

        /**
         * Adapted from: http://phpjs.org/functions/number_format:481
         */
        /* eslint-disable-next-line camelcase */
        number_format(value, params) {
            let number = value;
            const decimals = (params && params[0]) ? params[0] : undefined;
            const dec = (params && params[1] !== undefined) ? params[1] : '.';
            const sep = (params && params[2] !== undefined) ? params[2] : ',';

            number = (String(number)).replace(/[^0-9+\-Ee.]/g, '');
            const n = isFinite(Number(number)) ? Number(number) : 0;
            const prec = isFinite(Number(decimals)) ? Math.abs(decimals) : 0;
            let s = '';
            const toFixedFix = function (n, prec) {
                const k = 10 ** prec;
                return String(Math.round(n * k) / k);
            };

            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            s = (prec ? toFixedFix(n, prec) : String(Math.round(n))).split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }

            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }

            return s.join(dec);
        },

        trim(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            let str = String(value);
            let whitespace;
            if (params && params[0]) {
                whitespace = String(params[0]);
            } else {
                whitespace = ' \n\r\t\f\u000B\u00A0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
            }

            for (let i = 0; i < str.length; i++) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(i);
                    break;
                }
            }

            for (let i = str.length - 1; i >= 0; i--) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(0, i + 1);
                    break;
                }
            }

            return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
        },

        truncate(value, params) {
            let length = 30;
            let preserve = false;
            let separator = '...';

            value = String(value);
            if (params) {
                if (params[0]) {
                    length = params[0];
                }

                if (params[1]) {
                    preserve = params[1];
                }

                if (params[2]) {
                    separator = params[2];
                }
            }

            if (value.length > length) {
                if (preserve) {
                    length = value.indexOf(' ', length);
                    if (length === -1) {
                        return value;
                    }
                }

                value = value.substr(0, length) + separator;
            }

            return value;
        },

        slice(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            if (params === undefined || params.length === 0) {
                throw new Twig.Error('slice filter expects at least 1 argument');
            }

            // Default to start of string
            const start = params[0] || 0;
            // Default to length of string
            const length = params.length > 1 ? params[1] : value.length;
            // Handle negative start values
            const startIndex = start >= 0 ? start : Math.max(value.length + start, 0);

            if (Twig.lib.is('Array', value)) {
                const output = [];
                for (let i = startIndex; i < startIndex + length && i < value.length; i++) {
                    output.push(value[i]);
                }

                return output;
            }

            if (Twig.lib.is('String', value)) {
                return value.substr(startIndex, length);
            }

            throw new Twig.Error('slice filter expects value to be an array or string');
        },

        abs(value) {
            if (value === undefined || value === null) {
                return;
            }

            return Math.abs(value);
        },

        first(value) {
            if (is('Array', value)) {
                return value[0];
            }

            if (is('Object', value)) {
                if ('_keys' in value) {
                    return value[value._keys[0]];
                }
            } else if (typeof value === 'string') {
                return value.substr(0, 1);
            }
        },

        split(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            if (params === undefined || params.length === 0 || params.length > 2) {
                throw new Twig.Error('split filter expects 1 or 2 argument');
            }

            if (Twig.lib.is('String', value)) {
                const delimiter = params[0];
                const limit = params[1];
                const split = value.split(delimiter);

                if (limit === undefined) {
                    return split;
                }

                if (limit < 0) {
                    return value.split(delimiter, split.length + limit);
                }

                const limitedSplit = [];

                if (delimiter === '') {
                    // Empty delimiter
                    // "aabbcc"|split('', 2)
                    //     -> ['aa', 'bb', 'cc']

                    while (split.length > 0) {
                        let temp = '';
                        for (let i = 0; i < limit && split.length > 0; i++) {
                            temp += split.shift();
                        }

                        limitedSplit.push(temp);
                    }
                } else {
                    // Non-empty delimiter
                    // "one,two,three,four,five"|split(',', 3)
                    //     -> ['one', 'two', 'three,four,five']

                    for (let i = 0; i < limit - 1 && split.length > 0; i++) {
                        limitedSplit.push(split.shift());
                    }

                    if (split.length > 0) {
                        limitedSplit.push(split.join(delimiter));
                    }
                }

                return limitedSplit;
            }

            throw new Twig.Error('split filter expects value to be a string');
        },
        last(value) {
            if (Twig.lib.is('Object', value)) {
                let keys;

                if (value._keys === undefined) {
                    keys = Object.keys(value);
                } else {
                    keys = value._keys;
                }

                return value[keys[keys.length - 1]];
            }

            // String|array
            return value[value.length - 1];
        },
        raw(value) {
            return new Twig.Markup(value);
        },
        batch(items, params) {
            let size = params.shift();
            const fill = params.shift();
            let last;
            let missing;

            if (!Twig.lib.is('Array', items)) {
                throw new Twig.Error('batch filter expects items to be an array');
            }

            if (!Twig.lib.is('Number', size)) {
                throw new Twig.Error('batch filter expects size to be a number');
            }

            size = Math.ceil(size);

            const result = Twig.lib.chunkArray(items, size);

            if (fill && items.length % size !== 0) {
                last = result.pop();
                missing = size - last.length;

                while (missing--) {
                    last.push(fill);
                }

                result.push(last);
            }

            return result;
        },
        round(value, params) {
            params = params || [];

            const precision = params.length > 0 ? params[0] : 0;
            const method = params.length > 1 ? params[1] : 'common';

            value = parseFloat(value);

            if (precision && !Twig.lib.is('Number', precision)) {
                throw new Twig.Error('round filter expects precision to be a number');
            }

            if (method === 'common') {
                return Twig.lib.round(value, precision);
            }

            if (!Twig.lib.is('Function', Math[method])) {
                throw new Twig.Error('round filter expects method to be \'floor\', \'ceil\', or \'common\'');
            }

            return Math[method](value * (10 ** precision)) / (10 ** precision);
        },
        spaceless(value) {
            return value.replace(/>\s+</g, '><').trim();
        }
    };

    Twig.filter = function (filter, value, params) {
        const state = this;

        if (!Twig.filters[filter]) {
            throw new Twig.Error('Unable to find filter ' + filter);
        }

        return Twig.filters[filter].call(state, value, params);
    };

    Twig.filter.extend = function (filter, definition) {
        Twig.filters[filter] = definition;
    };

    return Twig;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// ## twig.functions.js
//
// This file handles parsing filters.
module.exports = function (Twig) {
    /**
     * @constant
     * @type {string}
     */
    const TEMPLATE_NOT_FOUND_MESSAGE = 'Template "{name}" is not defined.';

    Twig.functions = {
        //  Attribute, block, constant, date, dump, parent, random,.

        // Range function from http://phpjs.org/functions/range:499
        // Used under an MIT License
        range(low, high, step) {
            // http://kevin.vanzonneveld.net
            // +   original by: Waldo Malqui Silva
            // *     example 1: range ( 0, 12 );
            // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            // *     example 2: range( 0, 100, 10 );
            // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
            // *     example 3: range( 'a', 'i' );
            // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            // *     example 4: range( 'c', 'a' );
            // *     returns 4: ['c', 'b', 'a']
            const matrix = [];
            let inival;
            let endval;
            const walker = step || 1;
            let chars = false;

            if (!isNaN(low) && !isNaN(high)) {
                inival = parseInt(low, 10);
                endval = parseInt(high, 10);
            } else if (isNaN(low) && isNaN(high)) {
                chars = true;
                inival = low.charCodeAt(0);
                endval = high.charCodeAt(0);
            } else {
                inival = (isNaN(low) ? 0 : low);
                endval = (isNaN(high) ? 0 : high);
            }

            const plus = (!((inival > endval)));
            if (plus) {
                while (inival <= endval) {
                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
                    inival += walker;
                }
            } else {
                while (inival >= endval) {
                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
                    inival -= walker;
                }
            }

            return matrix;
        },
        cycle(arr, i) {
            const pos = i % arr.length;
            return arr[pos];
        },
        dump(...args) {
            // Don't pass arguments to `Array.slice`, that is a performance killer

            const argsCopy = [...args];
            const state = this;

            const EOL = '\n';
            const indentChar = '  ';
            let indentTimes = 0;
            let out = '';
            const indent = function (times) {
                let ind = '';
                while (times > 0) {
                    times--;
                    ind += indentChar;
                }

                return ind;
            };

            const displayVar = function (variable) {
                out += indent(indentTimes);
                if (typeof (variable) === 'object') {
                    dumpVar(variable);
                } else if (typeof (variable) === 'function') {
                    out += 'function()' + EOL;
                } else if (typeof (variable) === 'string') {
                    out += 'string(' + variable.length + ') "' + variable + '"' + EOL;
                } else if (typeof (variable) === 'number') {
                    out += 'number(' + variable + ')' + EOL;
                } else if (typeof (variable) === 'boolean') {
                    out += 'bool(' + variable + ')' + EOL;
                }
            };

            const dumpVar = function (variable) {
                let i;
                if (variable === null) {
                    out += 'NULL' + EOL;
                } else if (variable === undefined) {
                    out += 'undefined' + EOL;
                } else if (typeof variable === 'object') {
                    out += indent(indentTimes) + typeof (variable);
                    indentTimes++;
                    out += '(' + (function (obj) {
                        let size = 0;
                        let key;
                        for (key in obj) {
                            if (Object.hasOwnProperty.call(obj, key)) {
                                size++;
                            }
                        }

                        return size;
                    })(variable) + ') {' + EOL;
                    for (i in variable) {
                        if (Object.hasOwnProperty.call(variable, i)) {
                            out += indent(indentTimes) + '[' + i + ']=> ' + EOL;
                            displayVar(variable[i]);
                        }
                    }

                    indentTimes--;
                    out += indent(indentTimes) + '}' + EOL;
                } else {
                    displayVar(variable);
                }
            };

            // Handle no argument case by dumping the entire render context
            if (argsCopy.length === 0) {
                argsCopy.push(state.context);
            }

            argsCopy.forEach(variable => {
                dumpVar(variable);
            });

            return out;
        },
        date(date) {
            let dateObj;
            if (date === undefined || date === null || date === '') {
                dateObj = new Date();
            } else if (Twig.lib.is('Date', date)) {
                dateObj = date;
            } else if (Twig.lib.is('String', date)) {
                if (date.match(/^\d+$/)) {
                    dateObj = new Date(date * 1000);
                } else {
                    dateObj = new Date(Twig.lib.strtotime(date) * 1000);
                }
            } else if (Twig.lib.is('Number', date)) {
                // Timestamp
                dateObj = new Date(date * 1000);
            } else {
                throw new Twig.Error('Unable to parse date ' + date);
            }

            return dateObj;
        },
        block(blockName) {
            const state = this;

            const block = state.getBlock(blockName);

            if (block !== undefined) {
                return block.render(state, state.context);
            }
        },
        parent() {
            const state = this;

            return state.getBlock(state.getNestingStackToken(Twig.logic.type.block).blockName, true).render(state, state.context);
        },
        attribute(object, method, params) {
            if (Twig.lib.is('Object', object)) {
                if (Object.hasOwnProperty.call(object, method)) {
                    if (typeof object[method] === 'function') {
                        return object[method].apply(undefined, params);
                    }

                    return object[method];
                }
            }

            // Array will return element 0-index
            return object[method] || undefined;
        },
        max(values, ...args) {
            if (Twig.lib.is('Object', values)) {
                delete values._keys;
                return Twig.lib.max(values);
            }

            return Twig.lib.max.apply(null, [values, ...args]);
        },
        min(values, ...args) {
            if (Twig.lib.is('Object', values)) {
                delete values._keys;
                return Twig.lib.min(values);
            }

            return Twig.lib.min.apply(null, [values, ...args]);
        },
        /* eslint-disable-next-line camelcase */
        template_from_string(template) {
            const state = this;

            if (template === undefined) {
                template = '';
            }

            return Twig.Templates.parsers.twig({
                options: state.template.options,
                data: template
            });
        },
        random(value) {
            const LIMIT_INT31 = 0x80000000;

            function getRandomNumber(n) {
                const random = Math.floor(Math.random() * LIMIT_INT31);
                const min = Math.min.call(null, 0, n);
                const max = Math.max.call(null, 0, n);
                return min + Math.floor((max - min + 1) * random / LIMIT_INT31);
            }

            if (Twig.lib.is('Number', value)) {
                return getRandomNumber(value);
            }

            if (Twig.lib.is('String', value)) {
                return value.charAt(getRandomNumber(value.length - 1));
            }

            if (Twig.lib.is('Array', value)) {
                return value[getRandomNumber(value.length - 1)];
            }

            if (Twig.lib.is('Object', value)) {
                const keys = Object.keys(value);
                return value[keys[getRandomNumber(keys.length - 1)]];
            }

            return getRandomNumber(LIMIT_INT31 - 1);
        },

        /**
         * Returns the content of a template without rendering it
         * @param {string} name
         * @param {boolean} [ignoreMissing=false]
         * @returns {string}
         */
        source(name, ignoreMissing) {
            let templateSource;
            let templateFound = false;
            const isNodeEnvironment =   true && typeof module.exports !== 'undefined' && typeof window === 'undefined';
            let loader;
            const path = name;

            // If we are running in a node.js environment, set the loader to 'fs'.
            if (isNodeEnvironment) {
                loader = 'fs';
            } else {
                loader = 'ajax';
            }

            // Build the params object
            const params = {
                id: name,
                path,
                method: loader,
                parser: 'source',
                async: false,
                fetchTemplateSource: true
            };

            // Default ignoreMissing to false
            if (typeof ignoreMissing === 'undefined') {
                ignoreMissing = false;
            }

            // Try to load the remote template
            //
            // on exception, log it
            try {
                templateSource = Twig.Templates.loadRemote(name, params);

                // If the template is undefined or null, set the template to an empty string and do NOT flip the
                // boolean indicating we found the template
                //
                // else, all is good! flip the boolean indicating we found the template
                if (typeof templateSource === 'undefined' || templateSource === null) {
                    templateSource = '';
                } else {
                    templateFound = true;
                }
            } catch (error) {
                Twig.log.debug('Twig.functions.source: ', 'Problem loading template  ', error);
            }

            // If the template was NOT found AND we are not ignoring missing templates, return the same message
            // that is returned by the PHP implementation of the twig source() function
            //
            // else, return the template source
            if (!templateFound && !ignoreMissing) {
                return TEMPLATE_NOT_FOUND_MESSAGE.replace('{name}', name);
            }

            return templateSource;
        }
    };

    Twig._function = function (_function, value, params) {
        if (!Twig.functions[_function]) {
            throw new Twig.Error('Unable to find function ' + _function);
        }

        return Twig.functions[_function](value, params);
    };

    Twig._function.extend = function (_function, definition) {
        Twig.functions[_function] = definition;
    };

    return Twig;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// ## twig.lib.js
//
// This file contains 3rd party libraries used within twig.
//
// Copies of the licenses for the code included here can be found in the
// LICENSES.md file.
//

module.exports = function (Twig) {
    // Namespace for libraries
    Twig.lib = { };

    Twig.lib.sprintf = __webpack_require__(0);
    Twig.lib.vsprintf = __webpack_require__(11);
    Twig.lib.round = __webpack_require__(12);
    Twig.lib.max = __webpack_require__(13);
    Twig.lib.min = __webpack_require__(14);
    Twig.lib.stripTags = __webpack_require__(15);
    Twig.lib.strtotime = __webpack_require__(16);
    Twig.lib.date = __webpack_require__(17);
    Twig.lib.boolval = __webpack_require__(18);

    Twig.lib.is = function (type, obj) {
        if (typeof obj === 'undefined' || obj === null) {
            return false;
        }

        switch (type) {
            case 'Array':
                return Array.isArray(obj);
            case 'Date':
                return obj instanceof Date;
            case 'String':
                return (typeof obj === 'string' || obj instanceof String);
            case 'Number':
                return (typeof obj === 'number' || obj instanceof Number);
            case 'Function':
                return (typeof obj === 'function');
            case 'Object':
                return obj instanceof Object;
            default:
                return false;
        }
    };

    Twig.lib.replaceAll = function (string, search, replace) {
        // Escape possible regular expression syntax
        const searchEscaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        return string.replace(new RegExp(searchEscaped, 'g'), replace);
    };

    // Chunk an array (arr) into arrays of (size) items, returns an array of arrays, or an empty array on invalid input
    Twig.lib.chunkArray = function (arr, size) {
        const returnVal = [];
        let x = 0;
        const len = arr.length;

        if (size < 1 || !Array.isArray(arr)) {
            return [];
        }

        while (x < len) {
            returnVal.push(arr.slice(x, x += size));
        }

        return returnVal;
    };

    return Twig;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function vsprintf(format, args) {
  //  discuss at: http://locutus.io/php/vsprintf/
  // original by: ejsanders
  //   example 1: vsprintf('%04d-%02d-%02d', [1988, 8, 1])
  //   returns 1: '1988-08-01'

  var sprintf = __webpack_require__(0);

  return sprintf.apply(this, [format].concat(args));
};
//# sourceMappingURL=vsprintf.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function round(value, precision, mode) {
  //  discuss at: http://locutus.io/php/round/
  // original by: Philip Peterson
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: T.Wild
  //  revised by: Rafał Kukawski (http://blog.kukawski.pl)
  //    input by: Greenseed
  //    input by: meo
  //    input by: William
  //    input by: Josep Sanz (http://www.ws3.es/)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      note 1: Great work. Ideas for improvement:
  //      note 1: - code more compliant with developer guidelines
  //      note 1: - for implementing PHP constant arguments look at
  //      note 1: the pathinfo() function, it offers the greatest
  //      note 1: flexibility & compatibility possible
  //   example 1: round(1241757, -3)
  //   returns 1: 1242000
  //   example 2: round(3.6)
  //   returns 2: 4
  //   example 3: round(2.835, 2)
  //   returns 3: 2.84
  //   example 4: round(1.1749999999999, 2)
  //   returns 4: 1.17
  //   example 5: round(58551.799999999996, 2)
  //   returns 5: 58551.8

  var m, f, isHalf, sgn; // helper variables
  // making sure precision is integer
  precision |= 0;
  m = Math.pow(10, precision);
  value *= m;
  // sign of the number
  sgn = value > 0 | -(value < 0);
  isHalf = value % 1 === 0.5 * sgn;
  f = Math.floor(value);

  if (isHalf) {
    switch (mode) {
      case 'PHP_ROUND_HALF_DOWN':
        // rounds .5 toward zero
        value = f + (sgn < 0);
        break;
      case 'PHP_ROUND_HALF_EVEN':
        // rouds .5 towards the next even integer
        value = f + f % 2 * sgn;
        break;
      case 'PHP_ROUND_HALF_ODD':
        // rounds .5 towards the next odd integer
        value = f + !(f % 2);
        break;
      default:
        // rounds .5 away from zero
        value = f + (sgn > 0);
    }
  }

  return (isHalf ? value : Math.round(value)) / m;
};
//# sourceMappingURL=round.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

module.exports = function max() {
  //  discuss at: http://locutus.io/php/max/
  // original by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Jack
  //      note 1: Long code cause we're aiming for maximum PHP compatibility
  //   example 1: max(1, 3, 5, 6, 7)
  //   returns 1: 7
  //   example 2: max([2, 4, 5])
  //   returns 2: 5
  //   example 3: max(0, 'hello')
  //   returns 3: 0
  //   example 4: max('hello', 0)
  //   returns 4: 'hello'
  //   example 5: max(-1, 'hello')
  //   returns 5: 'hello'
  //   example 6: max([2, 4, 8], [2, 5, 7])
  //   returns 6: [2, 5, 7]

  var ar;
  var retVal;
  var i = 0;
  var n = 0;
  var argv = arguments;
  var argc = argv.length;
  var _obj2Array = function _obj2Array(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj;
    } else {
      var ar = [];
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          ar.push(obj[i]);
        }
      }
      return ar;
    }
  };
  var _compare = function _compare(current, next) {
    var i = 0;
    var n = 0;
    var tmp = 0;
    var nl = 0;
    var cl = 0;

    if (current === next) {
      return 0;
    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
        current = _obj2Array(current);
        next = _obj2Array(next);
        cl = current.length;
        nl = next.length;
        if (nl > cl) {
          return 1;
        } else if (nl < cl) {
          return -1;
        }
        for (i = 0, n = cl; i < n; ++i) {
          tmp = _compare(current[i], next[i]);
          if (tmp === 1) {
            return 1;
          } else if (tmp === -1) {
            return -1;
          }
        }
        return 0;
      }
      return -1;
    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
      return 1;
    } else if (isNaN(next) && !isNaN(current)) {
      if (current === 0) {
        return 0;
      }
      return current < 0 ? 1 : -1;
    } else if (isNaN(current) && !isNaN(next)) {
      if (next === 0) {
        return 0;
      }
      return next > 0 ? 1 : -1;
    }

    if (next === current) {
      return 0;
    }

    return next > current ? 1 : -1;
  };

  if (argc === 0) {
    throw new Error('At least one value should be passed to max()');
  } else if (argc === 1) {
    if (_typeof(argv[0]) === 'object') {
      ar = _obj2Array(argv[0]);
    } else {
      throw new Error('Wrong parameter count for max()');
    }
    if (ar.length === 0) {
      throw new Error('Array must contain at least one element for max()');
    }
  } else {
    ar = argv;
  }

  retVal = ar[0];
  for (i = 1, n = ar.length; i < n; ++i) {
    if (_compare(retVal, ar[i]) === 1) {
      retVal = ar[i];
    }
  }

  return retVal;
};
//# sourceMappingURL=max.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

module.exports = function min() {
  //  discuss at: http://locutus.io/php/min/
  // original by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Jack
  //      note 1: Long code cause we're aiming for maximum PHP compatibility
  //   example 1: min(1, 3, 5, 6, 7)
  //   returns 1: 1
  //   example 2: min([2, 4, 5])
  //   returns 2: 2
  //   example 3: min(0, 'hello')
  //   returns 3: 0
  //   example 4: min('hello', 0)
  //   returns 4: 'hello'
  //   example 5: min(-1, 'hello')
  //   returns 5: -1
  //   example 6: min([2, 4, 8], [2, 5, 7])
  //   returns 6: [2, 4, 8]

  var ar;
  var retVal;
  var i = 0;
  var n = 0;
  var argv = arguments;
  var argc = argv.length;
  var _obj2Array = function _obj2Array(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj;
    }
    var ar = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ar.push(obj[i]);
      }
    }
    return ar;
  };

  var _compare = function _compare(current, next) {
    var i = 0;
    var n = 0;
    var tmp = 0;
    var nl = 0;
    var cl = 0;

    if (current === next) {
      return 0;
    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
        current = _obj2Array(current);
        next = _obj2Array(next);
        cl = current.length;
        nl = next.length;
        if (nl > cl) {
          return 1;
        } else if (nl < cl) {
          return -1;
        }
        for (i = 0, n = cl; i < n; ++i) {
          tmp = _compare(current[i], next[i]);
          if (tmp === 1) {
            return 1;
          } else if (tmp === -1) {
            return -1;
          }
        }
        return 0;
      }
      return -1;
    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
      return 1;
    } else if (isNaN(next) && !isNaN(current)) {
      if (current === 0) {
        return 0;
      }
      return current < 0 ? 1 : -1;
    } else if (isNaN(current) && !isNaN(next)) {
      if (next === 0) {
        return 0;
      }
      return next > 0 ? 1 : -1;
    }

    if (next === current) {
      return 0;
    }

    return next > current ? 1 : -1;
  };

  if (argc === 0) {
    throw new Error('At least one value should be passed to min()');
  } else if (argc === 1) {
    if (_typeof(argv[0]) === 'object') {
      ar = _obj2Array(argv[0]);
    } else {
      throw new Error('Wrong parameter count for min()');
    }

    if (ar.length === 0) {
      throw new Error('Array must contain at least one element for min()');
    }
  } else {
    ar = argv;
  }

  retVal = ar[0];

  for (i = 1, n = ar.length; i < n; ++i) {
    if (_compare(retVal, ar[i]) === -1) {
      retVal = ar[i];
    }
  }

  return retVal;
};
//# sourceMappingURL=min.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function strip_tags(input, allowed) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/strip_tags/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Luke Godfrey
  // improved by: Kevin van Zonneveld (http://kvz.io)
  //    input by: Pul
  //    input by: Alex
  //    input by: Marc Palau
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Bobby Drake
  //    input by: Evertjan Garretsen
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Eric Nagel
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Tomasz Wesolowski
  //  revised by: Rafał Kukawski (http://blog.kukawski.pl)
  //   example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>')
  //   returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
  //   example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>')
  //   returns 2: '<p>Kevin van Zonneveld</p>'
  //   example 3: strip_tags("<a href='http://kvz.io'>Kevin van Zonneveld</a>", "<a>")
  //   returns 3: "<a href='http://kvz.io'>Kevin van Zonneveld</a>"
  //   example 4: strip_tags('1 < 5 5 > 1')
  //   returns 4: '1 < 5 5 > 1'
  //   example 5: strip_tags('1 <br/> 1')
  //   returns 5: '1  1'
  //   example 6: strip_tags('1 <br/> 1', '<br>')
  //   returns 6: '1 <br/> 1'
  //   example 7: strip_tags('1 <br/> 1', '<br><br/>')
  //   returns 7: '1 <br/> 1'

  // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
};
//# sourceMappingURL=strip_tags.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function strtotime(text, now) {
  //  discuss at: http://locutus.io/php/strtotime/
  // original by: Caio Ariede (http://caioariede.com)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Caio Ariede (http://caioariede.com)
  // improved by: A. Matías Quezada (http://amatiasq.com)
  // improved by: preuter
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Mirko Faber
  //    input by: David
  // bugfixed by: Wagner B. Soares
  // bugfixed by: Artur Tchernychev
  // bugfixed by: Stephan Bösch-Plepelits (http://github.com/plepe)
  //      note 1: Examples all have a fixed timestamp to prevent
  //      note 1: tests to fail because of variable time(zones)
  //   example 1: strtotime('+1 day', 1129633200)
  //   returns 1: 1129719600
  //   example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200)
  //   returns 2: 1130425202
  //   example 3: strtotime('last month', 1129633200)
  //   returns 3: 1127041200
  //   example 4: strtotime('2009-05-04 08:30:00 GMT')
  //   returns 4: 1241425800
  //   example 5: strtotime('2009-05-04 08:30:00+00')
  //   returns 5: 1241425800
  //   example 6: strtotime('2009-05-04 08:30:00+02:00')
  //   returns 6: 1241418600
  //   example 7: strtotime('2009-05-04T08:30:00Z')
  //   returns 7: 1241425800

  var parsed;
  var match;
  var today;
  var year;
  var date;
  var days;
  var ranges;
  var len;
  var times;
  var regex;
  var i;
  var fail = false;

  if (!text) {
    return fail;
  }

  // Unecessary spaces
  text = text.replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ').replace(/[\t\r\n]/g, '').toLowerCase();

  // in contrast to php, js Date.parse function interprets:
  // dates given as yyyy-mm-dd as in timezone: UTC,
  // dates with "." or "-" as MDY instead of DMY
  // dates with two-digit years differently
  // etc...etc...
  // ...therefore we manually parse lots of common date formats
  var pattern = new RegExp(['^(\\d{1,4})', '([\\-\\.\\/:])', '(\\d{1,2})', '([\\-\\.\\/:])', '(\\d{1,4})', '(?:\\s(\\d{1,2}):(\\d{2})?:?(\\d{2})?)?', '(?:\\s([A-Z]+)?)?$'].join(''));
  match = text.match(pattern);

  if (match && match[2] === match[4]) {
    if (match[1] > 1901) {
      switch (match[2]) {
        case '-':
          // YYYY-M-D
          if (match[3] > 12 || match[5] > 31) {
            return fail;
          }

          return new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        case '.':
          // YYYY.M.D is not parsed by strtotime()
          return fail;
        case '/':
          // YYYY/M/D
          if (match[3] > 12 || match[5] > 31) {
            return fail;
          }

          return new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
      }
    } else if (match[5] > 1901) {
      switch (match[2]) {
        case '-':
          // D-M-YYYY
          if (match[3] > 12 || match[1] > 31) {
            return fail;
          }

          return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        case '.':
          // D.M.YYYY
          if (match[3] > 12 || match[1] > 31) {
            return fail;
          }

          return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        case '/':
          // M/D/YYYY
          if (match[1] > 12 || match[3] > 31) {
            return fail;
          }

          return new Date(match[5], parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
      }
    } else {
      switch (match[2]) {
        case '-':
          // YY-M-D
          if (match[3] > 12 || match[5] > 31 || match[1] < 70 && match[1] > 38) {
            return fail;
          }

          year = match[1] >= 0 && match[1] <= 38 ? +match[1] + 2000 : match[1];
          return new Date(year, parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        case '.':
          // D.M.YY or H.MM.SS
          if (match[5] >= 70) {
            // D.M.YY
            if (match[3] > 12 || match[1] > 31) {
              return fail;
            }

            return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
          }
          if (match[5] < 60 && !match[6]) {
            // H.MM.SS
            if (match[1] > 23 || match[3] > 59) {
              return fail;
            }

            today = new Date();
            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0, match[9] || 0) / 1000;
          }

          // invalid format, cannot be parsed
          return fail;
        case '/':
          // M/D/YY
          if (match[1] > 12 || match[3] > 31 || match[5] < 70 && match[5] > 38) {
            return fail;
          }

          year = match[5] >= 0 && match[5] <= 38 ? +match[5] + 2000 : match[5];
          return new Date(year, parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
        case ':':
          // HH:MM:SS
          if (match[1] > 23 || match[3] > 59 || match[5] > 59) {
            return fail;
          }

          today = new Date();
          return new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0) / 1000;
      }
    }
  }

  // other formats and "now" should be parsed by Date.parse()
  if (text === 'now') {
    return now === null || isNaN(now) ? new Date().getTime() / 1000 | 0 : now | 0;
  }
  if (!isNaN(parsed = Date.parse(text))) {
    return parsed / 1000 | 0;
  }
  // Browsers !== Chrome have problems parsing ISO 8601 date strings, as they do
  // not accept lower case characters, space, or shortened time zones.
  // Therefore, fix these problems and try again.
  // Examples:
  //   2015-04-15 20:33:59+02
  //   2015-04-15 20:33:59z
  //   2015-04-15t20:33:59+02:00
  pattern = new RegExp(['^([0-9]{4}-[0-9]{2}-[0-9]{2})', '[ t]', '([0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?)', '([\\+-][0-9]{2}(:[0-9]{2})?|z)'].join(''));
  match = text.match(pattern);
  if (match) {
    // @todo: time zone information
    if (match[4] === 'z') {
      match[4] = 'Z';
    } else if (match[4].match(/^([\+-][0-9]{2})$/)) {
      match[4] = match[4] + ':00';
    }

    if (!isNaN(parsed = Date.parse(match[1] + 'T' + match[2] + match[4]))) {
      return parsed / 1000 | 0;
    }
  }

  date = now ? new Date(now * 1000) : new Date();
  days = {
    'sun': 0,
    'mon': 1,
    'tue': 2,
    'wed': 3,
    'thu': 4,
    'fri': 5,
    'sat': 6
  };
  ranges = {
    'yea': 'FullYear',
    'mon': 'Month',
    'day': 'Date',
    'hou': 'Hours',
    'min': 'Minutes',
    'sec': 'Seconds'
  };

  function lastNext(type, range, modifier) {
    var diff;
    var day = days[range];

    if (typeof day !== 'undefined') {
      diff = day - date.getDay();

      if (diff === 0) {
        diff = 7 * modifier;
      } else if (diff > 0 && type === 'last') {
        diff -= 7;
      } else if (diff < 0 && type === 'next') {
        diff += 7;
      }

      date.setDate(date.getDate() + diff);
    }
  }

  function process(val) {
    // @todo: Reconcile this with regex using \s, taking into account
    // browser issues with split and regexes
    var splt = val.split(' ');
    var type = splt[0];
    var range = splt[1].substring(0, 3);
    var typeIsNumber = /\d+/.test(type);
    var ago = splt[2] === 'ago';
    var num = (type === 'last' ? -1 : 1) * (ago ? -1 : 1);

    if (typeIsNumber) {
      num *= parseInt(type, 10);
    }

    if (ranges.hasOwnProperty(range) && !splt[1].match(/^mon(day|\.)?$/i)) {
      return date['set' + ranges[range]](date['get' + ranges[range]]() + num);
    }

    if (range === 'wee') {
      return date.setDate(date.getDate() + num * 7);
    }

    if (type === 'next' || type === 'last') {
      lastNext(type, range, num);
    } else if (!typeIsNumber) {
      return false;
    }

    return true;
  }

  times = '(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec' + '|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?' + '|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)';
  regex = '([+-]?\\d+\\s' + times + '|' + '(last|next)\\s' + times + ')(\\sago)?';

  match = text.match(new RegExp(regex, 'gi'));
  if (!match) {
    return fail;
  }

  for (i = 0, len = match.length; i < len; i++) {
    if (!process(match[i])) {
      return fail;
    }
  }

  return date.getTime() / 1000;
};
//# sourceMappingURL=strtotime.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function date(format, timestamp) {
  //  discuss at: http://locutus.io/php/date/
  // original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
  // original by: gettimeofday
  //    parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: MeEtc (http://yass.meetcweb.com)
  // improved by: Brad Touesnard
  // improved by: Tim Wiel
  // improved by: Bryan Elliott
  // improved by: David Randall
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Thomas Beaucourt (http://www.webapp.fr)
  // improved by: JT
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  // improved by: Theriault (https://github.com/Theriault)
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: majak
  //    input by: Alex
  //    input by: Martin
  //    input by: Alex Wilson
  //    input by: Haravikk
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: majak
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: omid (http://locutus.io/php/380:380#comment_137122)
  // bugfixed by: Chris (http://www.devotis.nl/)
  //      note 1: Uses global: locutus to store the default timezone
  //      note 1: Although the function potentially allows timezone info
  //      note 1: (see notes), it currently does not set
  //      note 1: per a timezone specified by date_default_timezone_set(). Implementers might use
  //      note 1: $locutus.currentTimezoneOffset and
  //      note 1: $locutus.currentTimezoneDST set by that function
  //      note 1: in order to adjust the dates in this function
  //      note 1: (or our other date functions!) accordingly
  //   example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400)
  //   returns 1: '07:09:40 m is month'
  //   example 2: date('F j, Y, g:i a', 1062462400)
  //   returns 2: 'September 2, 2003, 12:26 am'
  //   example 3: date('Y W o', 1062462400)
  //   returns 3: '2003 36 2003'
  //   example 4: var $x = date('Y m d', (new Date()).getTime() / 1000)
  //   example 4: $x = $x + ''
  //   example 4: var $result = $x.length // 2009 01 09
  //   returns 4: 10
  //   example 5: date('W', 1104534000)
  //   returns 5: '52'
  //   example 6: date('B t', 1104534000)
  //   returns 6: '999 31'
  //   example 7: date('W U', 1293750000.82); // 2010-12-31
  //   returns 7: '52 1293750000'
  //   example 8: date('W', 1293836400); // 2011-01-01
  //   returns 8: '52'
  //   example 9: date('W Y-m-d', 1293974054); // 2011-01-02
  //   returns 9: '52 2011-01-02'
  //        test: skip-1 skip-2 skip-5

  var jsdate, f;
  // Keep this here (works, but for code commented-out below for file size reasons)
  // var tal= [];
  var txtWords = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // trailing backslash -> (dropped)
  // a backslash followed by any character (including backslash) -> the character
  // empty string -> empty string
  var formatChr = /\\?(.?)/gi;
  var formatChrCb = function formatChrCb(t, s) {
    return f[t] ? f[t]() : s;
  };
  var _pad = function _pad(n, c) {
    n = String(n);
    while (n.length < c) {
      n = '0' + n;
    }
    return n;
  };
  f = {
    // Day
    d: function d() {
      // Day of month w/leading 0; 01..31
      return _pad(f.j(), 2);
    },
    D: function D() {
      // Shorthand day name; Mon...Sun
      return f.l().slice(0, 3);
    },
    j: function j() {
      // Day of month; 1..31
      return jsdate.getDate();
    },
    l: function l() {
      // Full day name; Monday...Sunday
      return txtWords[f.w()] + 'day';
    },
    N: function N() {
      // ISO-8601 day of week; 1[Mon]..7[Sun]
      return f.w() || 7;
    },
    S: function S() {
      // Ordinal suffix for day of month; st, nd, rd, th
      var j = f.j();
      var i = j % 10;
      if (i <= 3 && parseInt(j % 100 / 10, 10) === 1) {
        i = 0;
      }
      return ['st', 'nd', 'rd'][i - 1] || 'th';
    },
    w: function w() {
      // Day of week; 0[Sun]..6[Sat]
      return jsdate.getDay();
    },
    z: function z() {
      // Day of year; 0..365
      var a = new Date(f.Y(), f.n() - 1, f.j());
      var b = new Date(f.Y(), 0, 1);
      return Math.round((a - b) / 864e5);
    },

    // Week
    W: function W() {
      // ISO-8601 week number
      var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
      var b = new Date(a.getFullYear(), 0, 4);
      return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
    },

    // Month
    F: function F() {
      // Full month name; January...December
      return txtWords[6 + f.n()];
    },
    m: function m() {
      // Month w/leading 0; 01...12
      return _pad(f.n(), 2);
    },
    M: function M() {
      // Shorthand month name; Jan...Dec
      return f.F().slice(0, 3);
    },
    n: function n() {
      // Month; 1...12
      return jsdate.getMonth() + 1;
    },
    t: function t() {
      // Days in month; 28...31
      return new Date(f.Y(), f.n(), 0).getDate();
    },

    // Year
    L: function L() {
      // Is leap year?; 0 or 1
      var j = f.Y();
      return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
    },
    o: function o() {
      // ISO-8601 year
      var n = f.n();
      var W = f.W();
      var Y = f.Y();
      return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
    },
    Y: function Y() {
      // Full year; e.g. 1980...2010
      return jsdate.getFullYear();
    },
    y: function y() {
      // Last two digits of year; 00...99
      return f.Y().toString().slice(-2);
    },

    // Time
    a: function a() {
      // am or pm
      return jsdate.getHours() > 11 ? 'pm' : 'am';
    },
    A: function A() {
      // AM or PM
      return f.a().toUpperCase();
    },
    B: function B() {
      // Swatch Internet time; 000..999
      var H = jsdate.getUTCHours() * 36e2;
      // Hours
      var i = jsdate.getUTCMinutes() * 60;
      // Minutes
      // Seconds
      var s = jsdate.getUTCSeconds();
      return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
    },
    g: function g() {
      // 12-Hours; 1..12
      return f.G() % 12 || 12;
    },
    G: function G() {
      // 24-Hours; 0..23
      return jsdate.getHours();
    },
    h: function h() {
      // 12-Hours w/leading 0; 01..12
      return _pad(f.g(), 2);
    },
    H: function H() {
      // 24-Hours w/leading 0; 00..23
      return _pad(f.G(), 2);
    },
    i: function i() {
      // Minutes w/leading 0; 00..59
      return _pad(jsdate.getMinutes(), 2);
    },
    s: function s() {
      // Seconds w/leading 0; 00..59
      return _pad(jsdate.getSeconds(), 2);
    },
    u: function u() {
      // Microseconds; 000000-999000
      return _pad(jsdate.getMilliseconds() * 1000, 6);
    },

    // Timezone
    e: function e() {
      // Timezone identifier; e.g. Atlantic/Azores, ...
      // The following works, but requires inclusion of the very large
      // timezone_abbreviations_list() function.
      /*              return that.date_default_timezone_get();
       */
      var msg = 'Not supported (see source code of date() for timezone on how to add support)';
      throw new Error(msg);
    },
    I: function I() {
      // DST observed?; 0 or 1
      // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
      // If they are not equal, then DST is observed.
      var a = new Date(f.Y(), 0);
      // Jan 1
      var c = Date.UTC(f.Y(), 0);
      // Jan 1 UTC
      var b = new Date(f.Y(), 6);
      // Jul 1
      // Jul 1 UTC
      var d = Date.UTC(f.Y(), 6);
      return a - c !== b - d ? 1 : 0;
    },
    O: function O() {
      // Difference to GMT in hour format; e.g. +0200
      var tzo = jsdate.getTimezoneOffset();
      var a = Math.abs(tzo);
      return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
    },
    P: function P() {
      // Difference to GMT w/colon; e.g. +02:00
      var O = f.O();
      return O.substr(0, 3) + ':' + O.substr(3, 2);
    },
    T: function T() {
      // The following works, but requires inclusion of the very
      // large timezone_abbreviations_list() function.
      /*              var abbr, i, os, _default;
      if (!tal.length) {
        tal = that.timezone_abbreviations_list();
      }
      if ($locutus && $locutus.default_timezone) {
        _default = $locutus.default_timezone;
        for (abbr in tal) {
          for (i = 0; i < tal[abbr].length; i++) {
            if (tal[abbr][i].timezone_id === _default) {
              return abbr.toUpperCase();
            }
          }
        }
      }
      for (abbr in tal) {
        for (i = 0; i < tal[abbr].length; i++) {
          os = -jsdate.getTimezoneOffset() * 60;
          if (tal[abbr][i].offset === os) {
            return abbr.toUpperCase();
          }
        }
      }
      */
      return 'UTC';
    },
    Z: function Z() {
      // Timezone offset in seconds (-43200...50400)
      return -jsdate.getTimezoneOffset() * 60;
    },

    // Full Date/Time
    c: function c() {
      // ISO-8601 date.
      return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
    },
    r: function r() {
      // RFC 2822
      return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
    },
    U: function U() {
      // Seconds since UNIX epoch
      return jsdate / 1000 | 0;
    }
  };

  var _date = function _date(format, timestamp) {
    jsdate = timestamp === undefined ? new Date() // Not provided
    : timestamp instanceof Date ? new Date(timestamp) // JS Date()
    : new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
    ;
    return format.replace(formatChr, formatChrCb);
  };

  return _date(format, timestamp);
};
//# sourceMappingURL=date.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function boolval(mixedVar) {
  // original by: Will Rowe
  //   example 1: boolval(true)
  //   returns 1: true
  //   example 2: boolval(false)
  //   returns 2: false
  //   example 3: boolval(0)
  //   returns 3: false
  //   example 4: boolval(0.0)
  //   returns 4: false
  //   example 5: boolval('')
  //   returns 5: false
  //   example 6: boolval('0')
  //   returns 6: false
  //   example 7: boolval([])
  //   returns 7: false
  //   example 8: boolval('')
  //   returns 8: false
  //   example 9: boolval(null)
  //   returns 9: false
  //   example 10: boolval(undefined)
  //   returns 10: false
  //   example 11: boolval('true')
  //   returns 11: true

  if (mixedVar === false) {
    return false;
  }

  if (mixedVar === 0 || mixedVar === 0.0) {
    return false;
  }

  if (mixedVar === '' || mixedVar === '0') {
    return false;
  }

  if (Array.isArray(mixedVar) && mixedVar.length === 0) {
    return false;
  }

  if (mixedVar === null || mixedVar === undefined) {
    return false;
  }

  return true;
};
//# sourceMappingURL=boolval.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (Twig) {
    'use strict';

    Twig.Templates.registerLoader('ajax', function (location, params, callback, errorCallback) {
        let template;
        const {precompiled} = params;
        const parser = this.parsers[params.parser] || this.parser.twig;

        if (typeof XMLHttpRequest === 'undefined') {
            throw new Twig.Error('Unsupported platform: Unable to do ajax requests ' +
                                 'because there is no "XMLHTTPRequest" implementation');
        }

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            let data = null;

            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200 || (window.cordova && xmlhttp.status === 0)) {
                    Twig.log.debug('Got template ', xmlhttp.responseText);

                    if (precompiled === true) {
                        data = JSON.parse(xmlhttp.responseText);
                    } else {
                        data = xmlhttp.responseText;
                    }

                    params.url = location;
                    params.data = data;

                    template = parser.call(this, params);

                    if (typeof callback === 'function') {
                        callback(template);
                    }
                } else if (typeof errorCallback === 'function') {
                    errorCallback(xmlhttp);
                }
            }
        };

        xmlhttp.open('GET', location, Boolean(params.async));
        xmlhttp.send();

        if (params.async) {
            // TODO: return deferred promise
            return true;
        }

        return template;
    });
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (Twig) {
    'use strict';

    let fs;
    let path;

    try {
        // Require lib dependencies at runtime
        fs = __webpack_require__(21);
        path = __webpack_require__(1);
    } catch (error) {
        // NOTE: this is in a try/catch to avoid errors cross platform
    }

    Twig.Templates.registerLoader('fs', function (location, params, callback, errorCallback) {
        let template;
        let data = null;
        const {precompiled} = params;
        const parser = this.parsers[params.parser] || this.parser.twig;

        if (!fs || !path) {
            throw new Twig.Error('Unsupported platform: Unable to load from file ' +
                                 'because there is no "fs" or "path" implementation');
        }

        const loadTemplateFn = function (err, data) {
            if (err) {
                if (typeof errorCallback === 'function') {
                    errorCallback(err);
                }

                return;
            }

            if (precompiled === true) {
                data = JSON.parse(data);
            }

            params.data = data;
            params.path = params.path || location;

            // Template is in data
            template = parser.call(this, params);

            if (typeof callback === 'function') {
                callback(template);
            }
        };

        params.path = params.path || location;

        if (params.async) {
            fs.stat(params.path, (err, stats) => {
                if (err || !stats.isFile()) {
                    if (typeof errorCallback === 'function') {
                        errorCallback(new Twig.Error('Unable to find template file ' + params.path));
                    }

                    return;
                }

                fs.readFile(params.path, 'utf8', loadTemplateFn);
            });
            // TODO: return deferred promise
            return true;
        }

        try {
            if (!fs.statSync(params.path).isFile()) {
                throw new Twig.Error('Unable to find template file ' + params.path);
            }
        } catch (error) {
            throw new Twig.Error('Unable to find template file ' + params.path);
        }

        data = fs.readFileSync(params.path, 'utf8');
        loadTemplateFn(undefined, data);
        return template;
    });
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! fs */ 1);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// ## twig.logic.js
//
// This file handles tokenizing, compiling and parsing logic tokens. {% ... %}
module.exports = function (Twig) {
    'use strict';

    /**
     * Namespace for logic handling.
     */
    Twig.logic = {};

    /**
     * Logic token types.
     */
    Twig.logic.type = {
        if_: 'Twig.logic.type.if',
        endif: 'Twig.logic.type.endif',
        for_: 'Twig.logic.type.for',
        endfor: 'Twig.logic.type.endfor',
        else_: 'Twig.logic.type.else',
        elseif: 'Twig.logic.type.elseif',
        set: 'Twig.logic.type.set',
        setcapture: 'Twig.logic.type.setcapture',
        endset: 'Twig.logic.type.endset',
        filter: 'Twig.logic.type.filter',
        endfilter: 'Twig.logic.type.endfilter',
        apply: 'Twig.logic.type.apply',
        endapply: 'Twig.logic.type.endapply',
        shortblock: 'Twig.logic.type.shortblock',
        block: 'Twig.logic.type.block',
        endblock: 'Twig.logic.type.endblock',
        extends_: 'Twig.logic.type.extends',
        use: 'Twig.logic.type.use',
        include: 'Twig.logic.type.include',
        spaceless: 'Twig.logic.type.spaceless',
        endspaceless: 'Twig.logic.type.endspaceless',
        macro: 'Twig.logic.type.macro',
        endmacro: 'Twig.logic.type.endmacro',
        import_: 'Twig.logic.type.import',
        from: 'Twig.logic.type.from',
        embed: 'Twig.logic.type.embed',
        endembed: 'Twig.logic.type.endembed',
        with: 'Twig.logic.type.with',
        endwith: 'Twig.logic.type.endwith',
        deprecated: 'Twig.logic.type.deprecated'
    };

    // Regular expressions for handling logic tokens.
    //
    // Properties:
    //
    //      type:  The type of expression this matches
    //
    //      regex: A regular expression that matches the format of the token
    //
    //      next:  What logic tokens (if any) pop this token off the logic stack. If empty, the
    //             logic token is assumed to not require an end tag and isn't push onto the stack.
    //
    //      open:  Does this tag open a logic expression or is it standalone. For example,
    //             {% endif %} cannot exist without an opening {% if ... %} tag, so open = false.
    //
    //  Functions:
    //
    //      compile: A function that handles compiling the token into an output token ready for
    //               parsing with the parse function.
    //
    //      parse:   A function that parses the compiled token into output (HTML / whatever the
    //               template represents).
    Twig.logic.definitions = [
        {
            /**
             * If type logic tokens.
             *
             *  Format: {% if expression %}
             */
            type: Twig.logic.type.if_,
            regex: /^if\s?([\s\S]+)$/,
            next: [
                Twig.logic.type.else_,
                Twig.logic.type.elseif,
                Twig.logic.type.endif
            ],
            open: true,
            compile(token) {
                const expression = token.match[1];
                // Compile the expression.
                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;
                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(result => {
                        chain = true;

                        if (Twig.lib.boolval(result)) {
                            chain = false;

                            return state.parseAsync(token.output, context);
                        }

                        return '';
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            /**
             * Else if type logic tokens.
             *
             *  Format: {% elseif expression %}
             */
            type: Twig.logic.type.elseif,
            regex: /^elseif\s?([^\s].*)$/,
            next: [
                Twig.logic.type.else_,
                Twig.logic.type.elseif,
                Twig.logic.type.endif
            ],
            open: false,
            compile(token) {
                const expression = token.match[1];
                // Compile the expression.
                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;
                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(result => {
                        if (chain && Twig.lib.boolval(result)) {
                            chain = false;

                            return state.parseAsync(token.output, context);
                        }

                        return '';
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            /**
             * Else type logic tokens.
             *
             *  Format: {% else %}
             */
            type: Twig.logic.type.else_,
            regex: /^else$/,
            next: [
                Twig.logic.type.endif,
                Twig.logic.type.endfor
            ],
            open: false,
            parse(token, context, chain) {
                let promise = Twig.Promise.resolve('');
                const state = this;

                if (chain) {
                    promise = state.parseAsync(token.output, context);
                }

                return promise.then(output => {
                    return {
                        chain,
                        output
                    };
                });
            }
        },
        {
            /**
             * End if type logic tokens.
             *
             *  Format: {% endif %}
             */
            type: Twig.logic.type.endif,
            regex: /^endif$/,
            next: [],
            open: false
        },
        {
            /**
             * For type logic tokens.
             *
             *  Format: {% for expression %}
             */
            type: Twig.logic.type.for_,
            regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([\S\s]+?)(?:\s+if\s+([^\s].*))?$/,
            next: [
                Twig.logic.type.else_,
                Twig.logic.type.endfor
            ],
            open: true,
            compile(token) {
                const keyValue = token.match[1];
                const expression = token.match[2];
                const conditional = token.match[3];
                let kvSplit = null;

                token.keyVar = null;
                token.valueVar = null;

                if (keyValue.indexOf(',') >= 0) {
                    kvSplit = keyValue.split(',');
                    if (kvSplit.length === 2) {
                        token.keyVar = kvSplit[0].trim();
                        token.valueVar = kvSplit[1].trim();
                    } else {
                        throw new Twig.Error('Invalid expression in for loop: ' + keyValue);
                    }
                } else {
                    token.valueVar = keyValue.trim();
                }

                // Valid expressions for a for loop
                //   for item     in expression
                //   for key,item in expression

                // Compile the expression.
                token.expression = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                // Compile the conditional (if available)
                if (conditional) {
                    token.conditional = Twig.expression.compile.call(this, {
                        type: Twig.expression.type.expression,
                        value: conditional
                    }).stack;
                }

                delete token.match;
                return token;
            },
            parse(token, context, continueChain) {
                // Parse expression
                const output = [];
                let len;
                let index = 0;
                let keyset;
                const state = this;
                const {conditional} = token;
                const buildLoop = function (index, len) {
                    const isConditional = conditional !== undefined;
                    return {
                        index: index + 1,
                        index0: index,
                        revindex: isConditional ? undefined : len - index,
                        revindex0: isConditional ? undefined : len - index - 1,
                        first: (index === 0),
                        last: isConditional ? undefined : (index === len - 1),
                        length: isConditional ? undefined : len,
                        parent: context
                    };
                };

                // Run once for each iteration of the loop
                const loop = function (key, value) {
                    const innerContext = {...context};

                    innerContext[token.valueVar] = value;

                    if (token.keyVar) {
                        innerContext[token.keyVar] = key;
                    }

                    // Loop object
                    innerContext.loop = buildLoop(index, len);

                    const promise = conditional === undefined ?
                        Twig.Promise.resolve(true) :
                        Twig.expression.parseAsync.call(state, conditional, innerContext);

                    return promise.then(condition => {
                        if (!condition) {
                            return;
                        }

                        return state.parseAsync(token.output, innerContext)
                            .then(tokenOutput => {
                                output.push(tokenOutput);
                                index += 1;
                            });
                    })
                        .then(() => {
                            // Delete loop-related variables from the context
                            delete innerContext.loop;
                            delete innerContext[token.valueVar];
                            delete innerContext[token.keyVar];

                            // Merge in values that exist in context but have changed
                            // in inner_context.
                            Twig.merge(context, innerContext, true);
                        });
                };

                return Twig.expression.parseAsync.call(state, token.expression, context)
                    .then(result => {
                        if (Array.isArray(result)) {
                            len = result.length;
                            return Twig.async.forEach(result, value => {
                                const key = index;

                                return loop(key, value);
                            });
                        }

                        if (Twig.lib.is('Object', result)) {
                            if (result._keys === undefined) {
                                keyset = Object.keys(result);
                            } else {
                                keyset = result._keys;
                            }

                            len = keyset.length;
                            return Twig.async.forEach(keyset, key => {
                            // Ignore the _keys property, it's internal to twig.js
                                if (key === '_keys') {
                                    return;
                                }

                                return loop(key, result[key]);
                            });
                        }
                    })
                    .then(() => {
                    // Only allow else statements if no output was generated
                        continueChain = (output.length === 0);

                        return {
                            chain: continueChain,
                            context,
                            output: Twig.output.call(state.template, output)
                        };
                    });
            }
        },
        {
            /**
             * End for type logic tokens.
             *
             *  Format: {% endfor %}
             */
            type: Twig.logic.type.endfor,
            regex: /^endfor$/,
            next: [],
            open: false
        },
        {
            /**
             * Set type logic tokens.
             *
             *  Format: {% set key = expression %}
             */
            type: Twig.logic.type.set,
            regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,
            next: [],
            open: true,
            compile(token) { //
                const key = token.match[1].trim();
                const expression = token.match[2];
                // Compile the expression.
                const expressionStack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                token.key = key;
                token.expression = expressionStack;

                delete token.match;
                return token;
            },
            parse(token, context, continueChain) {
                const {key} = token;
                const state = this;

                return Twig.expression.parseAsync.call(state, token.expression, context)
                    .then(value => {
                        if (value === context) {
                        /*  If storing the context in a variable, it needs to be a clone of the current state of context.
                            Otherwise we have a context with infinite recursion.
                            Fixes #341
                        */
                            value = {...value};
                        }

                        context[key] = value;

                        return {
                            chain: continueChain,
                            context
                        };
                    });
            }
        },
        {
            /**
             * Set capture type logic tokens.
             *
             *  Format: {% set key %}
             */
            type: Twig.logic.type.setcapture,
            regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
            next: [
                Twig.logic.type.endset
            ],
            open: true,
            compile(token) {
                const key = token.match[1].trim();

                token.key = key;

                delete token.match;
                return token;
            },
            parse(token, context, continueChain) {
                const state = this;
                const {key} = token;

                return state.parseAsync(token.output, context)
                    .then(output => {
                    // Set on both the global and local context
                        state.context[key] = output;
                        context[key] = output;

                        return {
                            chain: continueChain,
                            context
                        };
                    });
            }
        },
        {
            /**
             * End set type block logic tokens.
             *
             *  Format: {% endset %}
             */
            type: Twig.logic.type.endset,
            regex: /^endset$/,
            next: [],
            open: false
        },
        {
            /**
             * Filter logic tokens.
             *
             *  Format: {% filter upper %} or {% filter lower|escape %}
             */
            type: Twig.logic.type.filter,
            regex: /^filter\s+(.+)$/,
            next: [
                Twig.logic.type.endfilter
            ],
            open: true,
            compile(token) {
                const expression = '|' + token.match[1].trim();
                // Compile the expression.
                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;
                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return state.parseAsync(token.output, context)
                    .then(output => {
                        const stack = [{
                            type: Twig.expression.type.string,
                            value: output
                        }].concat(token.stack);

                        return Twig.expression.parseAsync.call(state, stack, context);
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            /**
             * End filter logic tokens.
             *
             *  Format: {% endfilter %}
             */
            type: Twig.logic.type.endfilter,
            regex: /^endfilter$/,
            next: [],
            open: false
        },
        {
            /**
             * Apply logic tokens.
             *
             *  Format: {% apply upper %} or {% apply lower|escape %}
             */
            type: Twig.logic.type.apply,
            regex: /^apply\s+(.+)$/,
            next: [
                Twig.logic.type.endapply
            ],
            open: true,
            compile(token) {
                const expression = '|' + token.match[1].trim();
                // Compile the expression.
                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;
                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return state.parseAsync(token.output, context)
                    .then(output => {
                        const stack = [{
                            type: Twig.expression.type.string,
                            value: output
                        }].concat(token.stack);

                        return Twig.expression.parseAsync.call(state, stack, context);
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            /**
             * End apply logic tokens.
             *
             *  Format: {% endapply %}
             */
            type: Twig.logic.type.endapply,
            regex: /^endapply$/,
            next: [],
            open: false
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% block title %}
             */
            type: Twig.logic.type.block,
            regex: /^block\s+(\w+)$/,
            next: [
                Twig.logic.type.endblock
            ],
            open: true,
            compile(token) {
                token.blockName = token.match[1].trim();
                delete token.match;

                return token;
            },
            parse(token, context, chain) {
                const state = this;
                let promise = Twig.Promise.resolve();

                state.template.blocks.defined[token.blockName] = new Twig.Block(state.template, token);

                if (
                    state.template.parentTemplate === null ||
                    state.template.parentTemplate instanceof Twig.Template
                ) {
                    promise = state.getBlock(token.blockName).render(state, context);
                }

                return promise.then(output => {
                    return {
                        chain,
                        output
                    };
                });
            }
        },
        {
            /**
             * Block shorthand logic tokens.
             *
             *  Format: {% block title expression %}
             */
            type: Twig.logic.type.shortblock,
            regex: /^block\s+(\w+)\s+(.+)$/,
            next: [],
            open: true,
            compile(token) {
                const template = this;

                token.expression = token.match[2].trim();
                token.output = Twig.expression.compile({
                    type: Twig.expression.type.expression,
                    value: token.expression
                }).stack;

                return Twig.logic.handler[Twig.logic.type.block].compile.apply(template, [token]);
            },
            parse(...args) {
                const state = this;

                return Twig.logic.handler[Twig.logic.type.block].parse.apply(state, args);
            }
        },
        {
            /**
             * End block logic tokens.
             *
             *  Format: {% endblock %}
             */
            type: Twig.logic.type.endblock,
            regex: /^endblock(?:\s+(\w+))?$/,
            next: [],
            open: false
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% extends "template.twig" %}
             */
            type: Twig.logic.type.extends_,
            regex: /^extends\s+(.+)$/,
            next: [],
            open: true,
            compile(token) {
                const expression = token.match[1].trim();
                delete token.match;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(fileName => {
                        state.template.parentTemplate = fileName;

                        return {
                            chain,
                            output: ''
                        };
                    });
            }
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% use "template.twig" %}
             */
            type: Twig.logic.type.use,
            regex: /^use\s+(.+)$/,
            next: [],
            open: true,
            compile(token) {
                const expression = token.match[1].trim();
                delete token.match;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(filePath => {
                        // Create a new state instead of using the current state
                        // any defined blocks will be created in isolation

                        const useTemplate = state.template.importFile(filePath);

                        const useState = new Twig.ParseState(useTemplate);
                        return useState.parseAsync(useTemplate.tokens)
                            .then(() => {
                                state.template.blocks.imported = {
                                    ...state.template.blocks.imported,
                                    ...useState.getBlocks()
                                };
                            });
                    })
                    .then(() => {
                        return {
                            chain,
                            output: ''
                        };
                    });
            }
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% includes "template.twig" [with {some: 'values'} only] %}
             */
            type: Twig.logic.type.include,
            regex: /^include\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,
            next: [],
            open: true,
            compile(token) {
                const {match} = token;
                const expression = match[1].trim();
                const ignoreMissing = match[2] !== undefined;
                const withContext = match[3];
                const only = ((match[4] !== undefined) && match[4].length);

                delete token.match;

                token.only = only;
                token.ignoreMissing = ignoreMissing;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                if (withContext !== undefined) {
                    token.withStack = Twig.expression.compile.call(this, {
                        type: Twig.expression.type.expression,
                        value: withContext.trim()
                    }).stack;
                }

                return token;
            },
            parse(token, context, chain) {
                // Resolve filename
                let innerContext = token.only ? {} : {...context};
                const {ignoreMissing} = token;
                const state = this;
                let promise = null;
                const result = {chain, output: ''};

                if (typeof token.withStack === 'undefined') {
                    promise = Twig.Promise.resolve();
                } else {
                    promise = Twig.expression.parseAsync.call(state, token.withStack, context)
                        .then(withContext => {
                            innerContext = {
                                ...innerContext,
                                ...withContext
                            };
                        });
                }

                return promise
                    .then(() => {
                        return Twig.expression.parseAsync.call(state, token.stack, context);
                    })
                    .then(file => {
                        if (file instanceof Twig.Template) {
                            return file.renderAsync(
                                innerContext,
                                {
                                    isInclude: true
                                }
                            );
                        }

                        try {
                            return state.template.importFile(file).renderAsync(
                                innerContext,
                                {
                                    isInclude: true
                                }
                            );
                        } catch (error) {
                            if (ignoreMissing) {
                                return '';
                            }

                            throw error;
                        }
                    })
                    .then(output => {
                        if (output !== '') {
                            result.output = output;
                        }

                        return result;
                    });
            }
        },
        {
            type: Twig.logic.type.spaceless,
            regex: /^spaceless$/,
            next: [
                Twig.logic.type.endspaceless
            ],
            open: true,

            // Parse the html and return it without any spaces between tags
            parse(token, context, chain) {
                const state = this;

                // Parse the output without any filter
                return state.parseAsync(token.output, context)
                    .then(tokenOutput => {
                        const // A regular expression to find closing and opening tags with spaces between them
                            rBetweenTagSpaces = />\s+</g;
                        // Replace all space between closing and opening html tags
                        let output = tokenOutput.replace(rBetweenTagSpaces, '><').trim();
                        // Rewrap output as a Twig.Markup
                        output = new Twig.Markup(output);
                        return {
                            chain,
                            output
                        };
                    });
            }
        },

        // Add the {% endspaceless %} token
        {
            type: Twig.logic.type.endspaceless,
            regex: /^endspaceless$/,
            next: [],
            open: false
        },
        {
            /**
             * Macro logic tokens.
             *
             * Format: {% macro input(name = default, value, type, size) %}
             *
             */
            type: Twig.logic.type.macro,
            regex: /^macro\s+(\w+)\s*\(\s*((?:\w+(?:\s*=\s*([\s\S]+))?(?:,\s*)?)*)\s*\)$/,
            next: [
                Twig.logic.type.endmacro
            ],
            open: true,
            compile(token) {
                const macroName = token.match[1];
                const rawParameters = token.match[2].split(/\s*,\s*/);
                const parameters = rawParameters.map(rawParameter => {
                    return rawParameter.split(/\s*=\s*/)[0];
                });
                const parametersCount = parameters.length;

                // Duplicate check
                if (parametersCount > 1) {
                    const uniq = {};
                    for (let i = 0; i < parametersCount; i++) {
                        const parameter = parameters[i];
                        if (uniq[parameter]) {
                            throw new Twig.Error('Duplicate arguments for parameter: ' + parameter);
                        } else {
                            uniq[parameter] = 1;
                        }
                    }
                }

                token.macroName = macroName;
                token.parameters = parameters;
                token.defaults = rawParameters.reduce(function (defaults, rawParameter) {
                    const pair = rawParameter.split(/\s*=\s*/);
                    const key = pair[0];
                    const expression = pair[1];

                    if (expression) {
                        defaults[key] = Twig.expression.compile.call(this, {
                            type: Twig.expression.type.expression,
                            value: expression
                        }).stack;
                    } else {
                        defaults[key] = undefined;
                    }

                    return defaults;
                }, {});

                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                state.macros[token.macroName] = function (...args) {
                    // Pass global context and other macros
                    const macroContext = {
                        _self: state.macros
                    };
                    // Save arguments

                    return Twig.async.forEach(token.parameters, function (prop, i) {
                        // Add parameters from context to macroContext
                        if (typeof args[i] !== 'undefined') {
                            macroContext[prop] = args[i];
                            return true;
                        }

                        if (typeof token.defaults[prop] !== 'undefined') {
                            return Twig.expression.parseAsync.call(this, token.defaults[prop], context)
                                .then(value => {
                                    macroContext[prop] = value;
                                    return Twig.Promise.resolve();
                                });
                        }

                        macroContext[prop] = undefined;
                        return true;
                    }).then(() => {
                        // Render
                        return state.parseAsync(token.output, macroContext);
                    });
                };

                return {
                    chain,
                    output: ''
                };
            }
        },
        {
            /**
             * End macro logic tokens.
             *
             * Format: {% endmacro %}
             */
            type: Twig.logic.type.endmacro,
            regex: /^endmacro$/,
            next: [],
            open: false
        },
        {
            /*
            * Import logic tokens.
            *
            * Format: {% import "template.twig" as form %}
            */
            type: Twig.logic.type.import_,
            regex: /^import\s+(.+)\s+as\s+(\w+)$/,
            next: [],
            open: true,
            compile(token) {
                const expression = token.match[1].trim();
                const contextName = token.match[2].trim();
                delete token.match;

                token.expression = expression;
                token.contextName = contextName;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                return token;
            },
            parse(token, context, chain) {
                const state = this;
                const output = {
                    chain,
                    output: ''
                };

                if (token.expression === '_self') {
                    context[token.contextName] = state.macros;
                    return output;
                }

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(filePath => {
                        return state.template.importFile(filePath || token.expression);
                    })
                    .then(importTemplate => {
                        const importState = new Twig.ParseState(importTemplate);

                        return importState.parseAsync(importTemplate.tokens).then(() => {
                            context[token.contextName] = importState.macros;

                            return output;
                        });
                    });
            }
        },
        {
            /*
            * From logic tokens.
            *
            * Format: {% from "template.twig" import func as form %}
            */
            type: Twig.logic.type.from,
            regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
            next: [],
            open: true,
            compile(token) {
                const expression = token.match[1].trim();
                const macroExpressions = token.match[2].trim().split(/\s*,\s*/);
                const macroNames = {};

                for (let i = 0; i < macroExpressions.length; i++) {
                    const res = macroExpressions[i];

                    // Match function as variable
                    const macroMatch = res.match(/^(\w+)\s+as\s+(\w+)$/);
                    if (macroMatch) {
                        macroNames[macroMatch[1].trim()] = macroMatch[2].trim();
                    } else if (res.match(/^(\w+)$/)) {
                        macroNames[res] = res;
                    } else {
                        // ignore import
                    }
                }

                delete token.match;

                token.expression = expression;
                token.macroNames = macroNames;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                return token;
            },
            parse(token, context, chain) {
                const state = this;
                let promise;

                if (token.expression === '_self') {
                    promise = Twig.Promise.resolve(state.macros);
                } else {
                    promise = Twig.expression.parseAsync.call(state, token.stack, context)
                        .then(filePath => {
                            return state.template.importFile(filePath || token.expression);
                        })
                        .then(importTemplate => {
                            const importState = new Twig.ParseState(importTemplate);

                            return importState.parseAsync(importTemplate.tokens).then(() => {
                                return importState.macros;
                            });
                        });
                }

                return promise
                    .then(macros => {
                        for (const macroName in token.macroNames) {
                            if (macros[macroName] !== undefined) {
                                context[token.macroNames[macroName]] = macros[macroName];
                            }
                        }

                        return {
                            chain,
                            output: ''
                        };
                    });
            }
        },
        {
            /**
             * The embed tag combines the behaviour of include and extends.
             * It allows you to include another template's contents, just like include does.
             *
             *  Format: {% embed "template.twig" [with {some: 'values'} only] %}
             */
            type: Twig.logic.type.embed,
            regex: /^embed\s+(.+?)(?:\s+(ignore missing))?(?:\s+with\s+([\S\s]+?))?(?:\s+(only))?$/,
            next: [
                Twig.logic.type.endembed
            ],
            open: true,
            compile(token) {
                const {match} = token;
                const expression = match[1].trim();
                const ignoreMissing = match[2] !== undefined;
                const withContext = match[3];
                const only = ((match[4] !== undefined) && match[4].length);

                delete token.match;

                token.only = only;
                token.ignoreMissing = ignoreMissing;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                if (withContext !== undefined) {
                    token.withStack = Twig.expression.compile.call(this, {
                        type: Twig.expression.type.expression,
                        value: withContext.trim()
                    }).stack;
                }

                return token;
            },
            parse(token, context, chain) {
                let embedContext = {};
                let promise = Twig.Promise.resolve();
                let state = this;

                if (!token.only) {
                    embedContext = {...context};
                }

                if (token.withStack !== undefined) {
                    promise = Twig.expression.parseAsync.call(state, token.withStack, context).then(withContext => {
                        embedContext = {...embedContext, ...withContext};
                    });
                }

                return promise
                    .then(() => {
                        return Twig.expression.parseAsync.call(state, token.stack, embedContext);
                    })
                    .then(fileName => {
                        const embedOverrideTemplate = new Twig.Template({
                            data: token.output,
                            id: state.template.id,
                            base: state.template.base,
                            path: state.template.path,
                            url: state.template.url,
                            name: state.template.name,
                            method: state.template.method,
                            options: state.template.options
                        });

                        try {
                            embedOverrideTemplate.importFile(fileName);
                        } catch (error) {
                            if (token.ignoreMissing) {
                                return '';
                            }

                            // Errors preserve references to variables in scope,
                            // this removes `this` from the scope.
                            state = null;

                            throw error;
                        }

                        embedOverrideTemplate.parentTemplate = fileName;

                        return embedOverrideTemplate.renderAsync(
                            embedContext,
                            {
                                isInclude: true
                            }
                        );
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        /* Add the {% endembed %} token
         *
         */
        {
            type: Twig.logic.type.endembed,
            regex: /^endembed$/,
            next: [],
            open: false
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% with {some: 'values'} [only] %}
             */
            type: Twig.logic.type.with,
            regex: /^(?:with\s+([\S\s]+?))(?:\s|$)(only)?$/,
            next: [
                Twig.logic.type.endwith
            ],
            open: true,
            compile(token) {
                const {match} = token;
                const withContext = match[1];
                const only = ((match[2] !== undefined) && match[2].length);

                delete token.match;

                token.only = only;

                if (withContext !== undefined) {
                    token.withStack = Twig.expression.compile.call(this, {
                        type: Twig.expression.type.expression,
                        value: withContext.trim()
                    }).stack;
                }

                return token;
            },
            parse(token, context, chain) {
                // Resolve filename
                let innerContext = {};
                let i;
                const state = this;
                let promise = Twig.Promise.resolve();

                if (!token.only) {
                    innerContext = {...context};
                }

                if (token.withStack !== undefined) {
                    promise = Twig.expression.parseAsync.call(state, token.withStack, context)
                        .then(withContext => {
                            for (i in withContext) {
                                if (Object.hasOwnProperty.call(withContext, i)) {
                                    innerContext[i] = withContext[i];
                                }
                            }
                        });
                }

                return promise
                    .then(() => {
                        return state.parseAsync(token.output, innerContext);
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            type: Twig.logic.type.endwith,
            regex: /^endwith$/,
            next: [],
            open: false
        },
        {
            /**
             * Deprecated type logic tokens.
             *
             *  Format: {% deprecated 'Description' %}
             */
            type: Twig.logic.type.deprecated,
            regex: /^deprecated\s+(.+)$/,
            next: [],
            open: true,
            compile(token) {
                console.warn('Deprecation notice: ' + token.match[1]);

                return token;
            },
            parse() {
                return {};
            }
        }

    ];

    /**
     * Registry for logic handlers.
     */
    Twig.logic.handler = {};

    /**
     * Define a new token type, available at Twig.logic.type.{type}
     */
    Twig.logic.extendType = function (type, value) {
        value = value || ('Twig.logic.type' + type);
        Twig.logic.type[type] = value;
    };

    /**
     * Extend the logic parsing functionality with a new token definition.
     *
     * // Define a new tag
     * Twig.logic.extend({
     *     type: Twig.logic.type.{type},
     *     // The pattern to match for this token
     *     regex: ...,
     *     // What token types can follow this token, leave blank if any.
     *     next: [ ... ]
     *     // Create and return compiled version of the token
     *     compile: function(token) { ... }
     *     // Parse the compiled token with the context provided by the render call
     *     //   and whether this token chain is complete.
     *     parse: function(token, context, chain) { ... }
     * });
     *
     * @param {Object} definition The new logic expression.
     */
    Twig.logic.extend = function (definition) {
        if (definition.type) {
            Twig.logic.extendType(definition.type);
        } else {
            throw new Twig.Error('Unable to extend logic definition. No type provided for ' + definition);
        }

        Twig.logic.handler[definition.type] = definition;
    };

    // Extend with built-in expressions
    while (Twig.logic.definitions.length > 0) {
        Twig.logic.extend(Twig.logic.definitions.shift());
    }

    /**
     * Compile a logic token into an object ready for parsing.
     *
     * @param {Object} rawToken An uncompiled logic token.
     *
     * @return {Object} A compiled logic token, ready for parsing.
     */
    Twig.logic.compile = function (rawToken) {
        const expression = rawToken.value.trim();
        let token = Twig.logic.tokenize.call(this, expression);
        const tokenTemplate = Twig.logic.handler[token.type];

        // Check if the token needs compiling
        if (tokenTemplate.compile) {
            token = tokenTemplate.compile.call(this, token);
            Twig.log.trace('Twig.logic.compile: ', 'Compiled logic token to ', token);
        }

        return token;
    };

    /**
     * Tokenize logic expressions. This function matches token expressions against regular
     * expressions provided in token definitions provided with Twig.logic.extend.
     *
     * @param {string} expression the logic token expression to tokenize
     *                (i.e. what's between {% and %})
     *
     * @return {Object} The matched token with type set to the token type and match to the regex match.
     */
    Twig.logic.tokenize = function (expression) {
        let tokenTemplateType = null;
        let tokenType = null;
        let tokenRegex = null;
        let regexArray = null;
        let regexLen = null;
        let regexI = null;
        let match = null;

        // Ignore whitespace around expressions.
        expression = expression.trim();

        for (tokenTemplateType in Twig.logic.handler) {
            if (Object.hasOwnProperty.call(Twig.logic.handler, tokenTemplateType)) {
                // Get the type and regex for this template type
                tokenType = Twig.logic.handler[tokenTemplateType].type;
                tokenRegex = Twig.logic.handler[tokenTemplateType].regex;

                // Handle multiple regular expressions per type.
                regexArray = tokenRegex;
                if (!Array.isArray(tokenRegex)) {
                    regexArray = [tokenRegex];
                }

                regexLen = regexArray.length;
                // Check regular expressions in the order they were specified in the definition.
                for (regexI = 0; regexI < regexLen; regexI++) {
                    match = regexArray[regexI].exec(expression);
                    if (match !== null) {
                        Twig.log.trace('Twig.logic.tokenize: ', 'Matched a ', tokenType, ' regular expression of ', match);
                        return {
                            type: tokenType,
                            match
                        };
                    }
                }
            }
        }

        // No regex matches
        throw new Twig.Error('Unable to parse \'' + expression.trim() + '\'');
    };

    /**
     * Parse a logic token within a given context.
     *
     * What are logic chains?
     *      Logic chains represent a series of tokens that are connected,
     *          for example:
     *          {% if ... %} {% else %} {% endif %}
     *
     *      The chain parameter is used to signify if a chain is open of closed.
     *      open:
     *          More tokens in this chain should be parsed.
     *      closed:
     *          This token chain has completed parsing and any additional
     *          tokens (else, elseif, etc...) should be ignored.
     *
     * @param {Object} token The compiled token.
     * @param {Object} context The render context.
     * @param {boolean} chain Is this an open logic chain. If false, that means a
     *                        chain is closed and no further cases should be parsed.
     */
    Twig.logic.parse = function (token, context, chain, allowAsync) {
        return Twig.async.potentiallyAsync(this, allowAsync, function () {
            Twig.log.debug('Twig.logic.parse: ', 'Parsing logic token ', token);

            const tokenTemplate = Twig.logic.handler[token.type];
            let result;
            const state = this;

            if (!tokenTemplate.parse) {
                return '';
            }

            state.nestingStack.unshift(token);
            result = tokenTemplate.parse.call(state, token, context || {}, chain);

            if (Twig.isPromise(result)) {
                result = result.then(result => {
                    state.nestingStack.shift();

                    return result;
                });
            } else {
                state.nestingStack.shift();
            }

            return result;
        });
    };

    return Twig;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (Twig) {
    'use strict';

    Twig.Templates.registerParser('source', params => {
        return params.data || '';
    });
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (Twig) {
    'use strict';

    Twig.Templates.registerParser('twig', params => {
        return new Twig.Template(params);
    });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// ## twig.path.js
//
// This file handles path parsing
module.exports = function (Twig) {
    'use strict';

    /**
     * Namespace for path handling.
     */
    Twig.path = {};

    /**
     * Generate the canonical version of a url based on the given base path and file path and in
     * the previously registered namespaces.
     *
     * @param  {string} template The Twig Template
     * @param  {string} _file    The file path, may be relative and may contain namespaces.
     *
     * @return {string}          The canonical version of the path
     */
    Twig.path.parsePath = function (template, _file) {
        let k = null;
        const {namespaces} = template.options;
        let file = _file || '';
        const hasNamespaces = namespaces && typeof namespaces === 'object';

        if (hasNamespaces) {
            for (k in namespaces) {
                if (file.indexOf(k) === -1) {
                    continue;
                }

                // Check if keyed namespace exists at path's start
                const colon = new RegExp('^' + k + '::');
                const atSign = new RegExp('^@' + k + '/');
                // Add slash to the end of path
                const namespacePath = namespaces[k].replace(/([^/])$/, '$1/');

                if (colon.test(file)) {
                    file = file.replace(colon, namespacePath);
                    return file;
                }

                if (atSign.test(file)) {
                    file = file.replace(atSign, namespacePath);
                    return file;
                }
            }
        }

        return Twig.path.relativePath(template, file);
    };

    /**
     * Generate the relative canonical version of a url based on the given base path and file path.
     *
     * @param {Twig.Template} template The Twig.Template.
     * @param {string} _file The file path, relative to the base path.
     *
     * @return {string} The canonical version of the path.
     */
    Twig.path.relativePath = function (template, _file) {
        let base;
        let basePath;
        let sepChr = '/';
        const newPath = [];
        let file = _file || '';
        let val;

        if (template.url) {
            if (typeof template.base === 'undefined') {
                base = template.url;
            } else {
                // Add slash to the end of path
                base = template.base.replace(/([^/])$/, '$1/');
            }
        } else if (template.path) {
            // Get the system-specific path separator
            const path = __webpack_require__(1);
            const sep = path.sep || sepChr;
            const relative = new RegExp('^\\.{1,2}' + sep.replace('\\', '\\\\'));
            file = file.replace(/\//g, sep);

            if (template.base !== undefined && file.match(relative) === null) {
                file = file.replace(template.base, '');
                base = template.base + sep;
            } else {
                base = path.normalize(template.path);
            }

            base = base.replace(sep + sep, sep);
            sepChr = sep;
        } else if ((template.name || template.id) && template.method && template.method !== 'fs' && template.method !== 'ajax') {
            // Custom registered loader
            base = template.base || template.name || template.id;
        } else {
            throw new Twig.Error('Cannot extend an inline template.');
        }

        basePath = base.split(sepChr);

        // Remove file from url
        basePath.pop();
        basePath = basePath.concat(file.split(sepChr));

        while (basePath.length > 0) {
            val = basePath.shift();
            if (val === '.') {
                // Ignore
            } else if (val === '..' && newPath.length > 0 && newPath[newPath.length - 1] !== '..') {
                newPath.pop();
            } else {
                newPath.push(val);
            }
        }

        return newPath.join(sepChr);
    };

    return Twig;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// ## twig.tests.js
//
// This file handles expression tests. (is empty, is not defined, etc...)
module.exports = function (Twig) {
    'use strict';
    Twig.tests = {
        empty(value) {
            if (value === null || value === undefined) {
                return true;
            }

            // Handler numbers
            if (typeof value === 'number') {
                return false;
            } // Numbers are never "empty"

            // Handle strings and arrays
            if (value.length > 0) {
                return false;
            }

            // Handle objects
            for (const key in value) {
                if (Object.hasOwnProperty.call(value, key)) {
                    return false;
                }
            }

            return true;
        },
        odd(value) {
            return value % 2 === 1;
        },
        even(value) {
            return value % 2 === 0;
        },
        divisibleby(value, params) {
            return value % params[0] === 0;
        },
        defined(value) {
            return value !== undefined;
        },
        none(value) {
            return value === null;
        },
        null(value) {
            return this.none(value); // Alias of none
        },
        'same as'(value, params) {
            return value === params[0];
        },
        sameas(value, params) {
            console.warn('`sameas` is deprecated use `same as`');
            return Twig.tests['same as'](value, params);
        },
        iterable(value) {
            return value && (Twig.lib.is('Array', value) || Twig.lib.is('Object', value));
        }
        /*
        Constant ?
         */
    };

    Twig.test = function (test, value, params) {
        if (!Twig.tests[test]) {
            throw Twig.Error('Test ' + test + ' is not defined.');
        }

        return Twig.tests[test](value, params);
    };

    Twig.test.extend = function (test, definition) {
        Twig.tests[test] = definition;
    };

    return Twig;
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// ## twig.async.js
//
// This file handles asynchronous tasks within twig.
module.exports = function (Twig) {
    'use strict';

    const STATE_UNKNOWN = 0;
    const STATE_RESOLVED = 1;
    const STATE_REJECTED = 2;

    Twig.ParseState.prototype.parseAsync = function (tokens, context) {
        return this.parse(tokens, context, true);
    };

    Twig.expression.parseAsync = function (tokens, context, tokensAreParameters) {
        const state = this;

        return Twig.expression.parse.call(state, tokens, context, tokensAreParameters, true);
    };

    Twig.logic.parseAsync = function (token, context, chain) {
        const state = this;

        return Twig.logic.parse.call(state, token, context, chain, true);
    };

    Twig.Template.prototype.renderAsync = function (context, params) {
        return this.render(context, params, true);
    };

    Twig.async = {};

    /**
     * Checks for `thenable` objects
     */
    Twig.isPromise = function (obj) {
        return obj && obj.then && (typeof obj.then === 'function');
    };

    /**
     * Handling of code paths that might either return a promise
     * or a value depending on whether async code is used.
     *
     * @see https://github.com/twigjs/twig.js/blob/master/ASYNC.md#detecting-asynchronous-behaviour
     */
    function potentiallyAsyncSlow(that, allowAsync, action) {
        let result = action.call(that);
        let err = null;
        let isAsync = true;

        if (!Twig.isPromise(result)) {
            return result;
        }

        result.then(res => {
            result = res;
            isAsync = false;
        }).catch(error => {
            err = error;
        });

        if (err !== null) {
            throw err;
        }

        if (isAsync) {
            throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');
        }

        return result;
    }

    Twig.async.potentiallyAsync = function (that, allowAsync, action) {
        if (allowAsync) {
            return Twig.Promise.resolve(action.call(that));
        }

        return potentiallyAsyncSlow(that, allowAsync, action);
    };

    function run(fn, resolve, reject) {
        try {
            fn(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    function pending(handlers, onResolved, onRejected) {
        const h = [onResolved, onRejected, -2];

        // The promise has yet to be rejected or resolved.
        if (!handlers) {
            handlers = h;
        } else if (handlers[2] === -2) {
            // Only allocate an array when there are multiple handlers
            handlers = [handlers, h];
        } else {
            handlers.push(h);
        }

        return handlers;
    }

    /**
     * Really small thenable to represent promises that resolve immediately.
     *
     */
    Twig.Thenable = function (then, value, state) {
        this.then = then;
        this._value = state ? value : null;
        this._state = state || STATE_UNKNOWN;
    };

    Twig.Thenable.prototype.catch = function (onRejected) {
        // THe promise will not throw, it has already resolved.
        if (this._state === STATE_RESOLVED) {
            return this;
        }

        return this.then(null, onRejected);
    };

    /**
     * The `then` method attached to a Thenable when it has resolved.
     *
     */
    Twig.Thenable.resolvedThen = function (onResolved) {
        try {
            return Twig.Promise.resolve(onResolved(this._value));
        } catch (error) {
            return Twig.Promise.reject(error);
        }
    };

    /**
     * The `then` method attached to a Thenable when it has rejected.
     *
     */
    Twig.Thenable.rejectedThen = function (onResolved, onRejected) {
        // Shortcut for rejected twig promises
        if (!onRejected || typeof onRejected !== 'function') {
            return this;
        }

        const value = this._value;

        let result;
        try {
            result = onRejected(value);
        } catch (error) {
            result = Twig.Promise.reject(error);
        }

        return Twig.Promise.resolve(result);
    };

    /**
     * An alternate implementation of a Promise that does not fully follow
     * the spec, but instead works fully synchronous while still being
     * thenable.
     *
     * These promises can be mixed with regular promises at which point
     * the synchronous behaviour is lost.
     */
    Twig.Promise = function (executor) {
        let state = STATE_UNKNOWN;
        let value = null;

        let changeState = function (nextState, nextValue) {
            state = nextState;
            value = nextValue;
        };

        function onReady(v) {
            changeState(STATE_RESOLVED, v);
        }

        function onReject(e) {
            changeState(STATE_REJECTED, e);
        }

        run(executor, onReady, onReject);

        // If the promise settles right after running the executor we can
        // return a Promise with it's state already set.
        //
        // Twig.Promise.resolve and Twig.Promise.reject both use the more
        // efficient `Twig.Thenable` for this purpose.
        if (state === STATE_RESOLVED) {
            return Twig.Promise.resolve(value);
        }

        if (state === STATE_REJECTED) {
            return Twig.Promise.reject(value);
        }
        // If we managed to get here our promise is going to resolve asynchronous.

        changeState = new Twig.FullPromise();

        return changeState.promise;
    };

    /**
     * Promise implementation that can handle being resolved at any later time.
     *
     */
    Twig.FullPromise = function () {
        let handlers = null;

        // The state has been changed to either resolve, or reject
        // which means we should call the handler.
        function resolved(onResolved) {
            onResolved(p._value);
        }

        function rejected(onResolved, onRejected) {
            onRejected(p._value);
        }

        let append = function (onResolved, onRejected) {
            handlers = pending(handlers, onResolved, onRejected);
        };

        function changeState(newState, v) {
            if (p._state) {
                return;
            }

            p._value = v;
            p._state = newState;

            append = newState === STATE_RESOLVED ? resolved : rejected;

            if (!handlers) {
                return;
            }

            if (handlers[2] === -2) {
                append(handlers[0], handlers[1]);
                handlers = null;
            }

            handlers.forEach(h => {
                append(h[0], h[1]);
            });
            handlers = null;
        }

        const p = new Twig.Thenable((onResolved, onRejected) => {
            const hasResolved = typeof onResolved === 'function';

            // Shortcut for resolved twig promises
            if (p._state === STATE_RESOLVED && !hasResolved) {
                return Twig.Promise.resolve(p._value);
            }

            if (p._state === STATE_RESOLVED) {
                try {
                    return Twig.Promise.resolve(onResolved(p._value));
                } catch (error) {
                    return Twig.Promise.reject(error);
                }
            }

            const hasRejected = typeof onRejected === 'function';

            return new Twig.Promise((resolve, reject) => {
                append(
                    hasResolved ? result => {
                        try {
                            resolve(onResolved(result));
                        } catch (error) {
                            reject(error);
                        }
                    } : resolve,
                    hasRejected ? err => {
                        try {
                            resolve(onRejected(err));
                        } catch (error) {
                            reject(error);
                        }
                    } : reject
                );
            });
        });

        changeState.promise = p;

        return changeState;
    };

    Twig.Promise.defaultResolved = new Twig.Thenable(Twig.Thenable.resolvedThen, undefined, STATE_RESOLVED);
    Twig.Promise.emptyStringResolved = new Twig.Thenable(Twig.Thenable.resolvedThen, '', STATE_RESOLVED);

    Twig.Promise.resolve = function (value) {
        if (arguments.length === 0 || typeof value === 'undefined') {
            return Twig.Promise.defaultResolved;
        }

        if (Twig.isPromise(value)) {
            return value;
        }

        // Twig often resolves with an empty string, we optimize for this
        // scenario by returning a fixed promise. This reduces the load on
        // garbage collection.
        if (value === '') {
            return Twig.Promise.emptyStringResolved;
        }

        return new Twig.Thenable(Twig.Thenable.resolvedThen, value, STATE_RESOLVED);
    };

    Twig.Promise.reject = function (e) {
        // `e` should never be a promise.
        return new Twig.Thenable(Twig.Thenable.rejectedThen, e, STATE_REJECTED);
    };

    Twig.Promise.all = function (promises) {
        const results = new Array(promises.length);

        return Twig.async.forEach(promises, (p, index) => {
            if (!Twig.isPromise(p)) {
                results[index] = p;
                return;
            }

            if (p._state === STATE_RESOLVED) {
                results[index] = p._value;
                return;
            }

            return p.then(v => {
                results[index] = v;
            });
        }).then(() => {
            return results;
        });
    };

    /**
    * Go over each item in a fashion compatible with Twig.forEach,
    * allow the function to return a promise or call the third argument
    * to signal it is finished.
    *
    * Each item in the array will be called sequentially.
    */
    Twig.async.forEach = function (arr, callback) {
        const len = arr.length;
        let index = 0;

        function next() {
            let resp = null;

            do {
                if (index === len) {
                    return Twig.Promise.resolve();
                }

                resp = callback(arr[index], index);
                index++;

            // While the result of the callback is not a promise or it is
            // a promise that has settled we can use a regular loop which
            // is much faster.
            } while (!resp || !Twig.isPromise(resp) || resp._state === STATE_RESOLVED);

            return resp.then(next);
        }

        return next();
    };

    return Twig;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// ## twig.exports.js
//
// This file provides extension points and other hooks into the twig functionality.

module.exports = function (Twig) {
    'use strict';
    Twig.exports = {
        VERSION: Twig.VERSION
    };

    /**
     * Create and compile a twig.js template.
     *
     * @param {Object} param Paramteres for creating a Twig template.
     *
     * @return {Twig.Template} A Twig template ready for rendering.
     */
    Twig.exports.twig = function (params) {
        'use strict';
        const {id} = params;
        const options = {
            strictVariables: params.strict_variables || false,
            // TODO: turn autoscape on in the next major version
            autoescape: (params.autoescape !== null && params.autoescape) || false,
            allowInlineIncludes: params.allowInlineIncludes || false,
            rethrow: params.rethrow || false,
            namespaces: params.namespaces
        };

        if (Twig.cache && id) {
            Twig.validateId(id);
        }

        if (params.debug !== undefined) {
            Twig.debug = params.debug;
        }

        if (params.trace !== undefined) {
            Twig.trace = params.trace;
        }

        if (params.data !== undefined) {
            return Twig.Templates.parsers.twig({
                data: params.data,
                path: Object.hasOwnProperty.call(params, 'path') ? params.path : undefined,
                module: params.module,
                id,
                options
            });
        }

        if (params.ref !== undefined) {
            if (params.id !== undefined) {
                throw new Twig.Error('Both ref and id cannot be set on a twig.js template.');
            }

            return Twig.Templates.load(params.ref);
        }

        if (params.method !== undefined) {
            if (!Twig.Templates.isRegisteredLoader(params.method)) {
                throw new Twig.Error('Loader for "' + params.method + '" is not defined.');
            }

            return Twig.Templates.loadRemote(params.name || params.href || params.path || id || undefined, {
                id,
                method: params.method,
                parser: params.parser || 'twig',
                base: params.base,
                module: params.module,
                precompiled: params.precompiled,
                async: params.async,
                options

            }, params.load, params.error);
        }

        if (params.href !== undefined) {
            return Twig.Templates.loadRemote(params.href, {
                id,
                method: 'ajax',
                parser: params.parser || 'twig',
                base: params.base,
                module: params.module,
                precompiled: params.precompiled,
                async: params.async,
                options

            }, params.load, params.error);
        }

        if (params.path !== undefined) {
            return Twig.Templates.loadRemote(params.path, {
                id,
                method: 'fs',
                parser: params.parser || 'twig',
                base: params.base,
                module: params.module,
                precompiled: params.precompiled,
                async: params.async,
                options
            }, params.load, params.error);
        }
    };

    // Extend Twig with a new filter.
    Twig.exports.extendFilter = function (filter, definition) {
        Twig.filter.extend(filter, definition);
    };

    // Extend Twig with a new function.
    Twig.exports.extendFunction = function (fn, definition) {
        Twig._function.extend(fn, definition);
    };

    // Extend Twig with a new test.
    Twig.exports.extendTest = function (test, definition) {
        Twig.test.extend(test, definition);
    };

    // Extend Twig with a new definition.
    Twig.exports.extendTag = function (definition) {
        Twig.logic.extend(definition);
    };

    // Provide an environment for extending Twig core.
    // Calls fn with the internal Twig object.
    Twig.exports.extend = function (fn) {
        fn(Twig);
    };

    /**
     * Provide an extension for use with express 2.
     *
     * @param {string} markup The template markup.
     * @param {array} options The express options.
     *
     * @return {string} The rendered template.
     */
    Twig.exports.compile = function (markup, options) {
        const id = options.filename;
        const path = options.filename;

        // Try to load the template from the cache
        const template = new Twig.Template({
            data: markup,
            path,
            id,
            options: options.settings['twig options']
        }); // Twig.Templates.load(id) ||

        return function (context) {
            return template.render(context);
        };
    };

    /**
     * Provide an extension for use with express 3.
     *
     * @param {string} path The location of the template file on disk.
     * @param {Object|Function} The options or callback.
     * @param {Function} fn callback.
     *
     * @throws Twig.Error
     */
    Twig.exports.renderFile = function (path, options, fn) {
        // Handle callback in options
        if (typeof options === 'function') {
            fn = options;
            options = {};
        }

        options = options || {};

        const settings = options.settings || {};

        // Mixin any options provided to the express app.
        const viewOptions = settings['twig options'];

        const params = {
            path,
            base: settings.views,
            load(template) {
                // Render and return template as a simple string, see https://github.com/twigjs/twig.js/pull/348 for more information
                if (!viewOptions || !viewOptions.allowAsync) {
                    fn(null, String(template.render(options)));
                    return;
                }

                template.renderAsync(options)
                    .then(out => fn(null, out), fn);
            }
        };

        if (viewOptions) {
            for (const option in viewOptions) {
                if (Object.hasOwnProperty.call(viewOptions, option)) {
                    params[option] = viewOptions[option];
                }
            }
        }

        Twig.exports.twig(params);
    };

    // Express 3 handler
    Twig.exports.__express = Twig.exports.renderFile;

    /**
     * Shoud Twig.js cache templates.
     * Disable during development to see changes to templates without
     * reloading, and disable in production to improve performance.
     *
     * @param {boolean} cache
     */
    Twig.exports.cache = function (cache) {
        Twig.cache = cache;
    };

    // We need to export the path module so we can effectively test it
    Twig.exports.path = Twig.path;

    // Export our filters.
    // Resolves #307
    Twig.exports.filters = Twig.filters;

    // Export our tests.
    Twig.exports.tests = Twig.tests;

    Twig.exports.Promise = Twig.Promise;

    return Twig;
};


/***/ })
/******/ ]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/hyperlink.ts":
/*!*****************************!*\
  !*** ./src/js/hyperlink.ts ***!
  \*****************************/
/*! exports provided: hyperlink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyperlink", function() { return hyperlink; });
function hyperlink(topics) {
    for (const topic of topics.topics) {
        const children = topic.heading.children;
        const anchor = document.createElement("a");
        anchor.href = `#${topic.identifier}`;
        for (let index = 0, length = children.length; index < length; ++index) {
            anchor.append(children.item(index));
        }
        topic.heading.append(anchor);
    }
}


/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics */ "./src/js/topics.ts");
/* harmony import */ var _hyperlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hyperlink */ "./src/js/hyperlink.ts");
/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary */ "./src/js/summary.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import './summary'



function loadContent() {
    return __awaiter(this, void 0, void 0, function* () {
        document.body.innerHTML = __webpack_require__(/*! ../twig/content.twig */ "./src/twig/content.twig")();
    });
}
loadContent().then(function () {
    _topics__WEBPACK_IMPORTED_MODULE_0__["topics"].capture(document.body);
    Object(_hyperlink__WEBPACK_IMPORTED_MODULE_1__["hyperlink"])(_topics__WEBPACK_IMPORTED_MODULE_0__["topics"]);
    for (const element of document.querySelectorAll('.summary.summary-main')) {
        Object(_summary__WEBPACK_IMPORTED_MODULE_2__["summary"])(element, [..._topics__WEBPACK_IMPORTED_MODULE_0__["topics"].roots]);
    }
});


/***/ }),

/***/ "./src/js/summary.ts":
/*!***************************!*\
  !*** ./src/js/summary.ts ***!
  \***************************/
/*! exports provided: summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summary", function() { return summary; });
function list(topics) {
    const result = [];
    for (const topic of topics) {
        result.push(topic);
        const items = [topic];
        const cursors = [0];
        while (items.length > 0) {
            const item = items[items.length - 1];
            const cursor = cursors[cursors.length - 1];
            if (item.children.length > cursor) {
                const child = item.children[cursor];
                cursors[cursors.length - 1] += 1;
                cursors.push(0);
                items.push(child);
                result.push(child);
            }
            else {
                items.pop();
                cursors.pop();
            }
        }
    }
    return result;
}
function generate(topics) {
    const anchors = [];
    for (const topic of topics) {
        const anchor = document.createElement('a');
        anchor.classList.add('summary-element');
        anchor.classList.add('summary-depth-' + topic.depth);
        anchor.href = `#${topic.identifier}`;
        anchor.text = topic.heading.innerText;
        anchors.push(anchor);
    }
    return anchors;
}
function summary(root, topics) {
    const items = list(topics);
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('justify-content-center');
    const left = document.createElement('div');
    left.classList.add('col-xs-12');
    left.classList.add('col-md-5');
    const right = document.createElement('div');
    right.classList.add('col-xs-12');
    right.classList.add('col-md-5');
    generate(items.slice(0, Math.ceil(items.length / 2))).forEach(x => left.append(x));
    generate(items.slice(Math.ceil(items.length / 2))).forEach(x => right.append(x));
    row.append(left);
    row.append(right);
    root.append(row);
}


/***/ }),

/***/ "./src/js/topics.ts":
/*!**************************!*\
  !*** ./src/js/topics.ts ***!
  \**************************/
/*! exports provided: topics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topics", function() { return topics; });
/* harmony import */ var _topics_Topics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics/Topics */ "./src/js/topics/Topics.ts");

const topics = new _topics_Topics__WEBPACK_IMPORTED_MODULE_0__["Topics"]();


/***/ }),

/***/ "./src/js/topics/Topic.ts":
/*!********************************!*\
  !*** ./src/js/topics/Topic.ts ***!
  \********************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
/**
* Assert that the given HTML element is marked as a topic.
*
* @param element - An HTML element to assert.
*/
function assertThatIsOfTopicClass(element) {
    if (!element.classList.contains('topic')) {
        throw new Error('The element ' + element + ' to extract as a topic is not of the ' +
            'topic class.');
    }
}
/**
* Assert that the given HTML element has an identifier.
*
* @param element - An HTML element to assert.
*/
function assertThatDeclareAnIdentifier(element) {
    if (element.id == null) {
        throw new Error('The element ' + element + ' to extract as a topic doest not have ' +
            'an identifier specified.');
    }
}
/**
* Assert that the given HTML element has a valid topic structure.
*
* @param element - An HTML element to assert.
*/
function assertThatHasValidStructure(element) {
    const children = element.children;
    let hasAnHeading = false;
    let hasAContent = false;
    for (let index = 0, length = children.length; index < length; ++index) {
        const child = children.item(index);
        if (child.classList.contains('topic-heading')) {
            if (hasAnHeading) {
                throw new Error('The element ' + element + ' to extract as a topic has an invalid ' +
                    'structure, a topic must declare only one topic-heading as a child.');
            }
            else {
                hasAnHeading = true;
            }
        }
        else if (child.classList.contains('topic-content')) {
            if (hasAContent) {
                throw new Error('The element ' + element + ' to extract as a topic has an invalid ' +
                    'structure, a topic must declare only one topic-content as a child.');
            }
            else {
                hasAContent = true;
            }
        }
    }
    if (!hasAnHeading) {
        throw new Error('The element ' + element + ' to extract as a topic has an invalid ' +
            'structure, a topic must declare a topic-heading as a child element.');
    }
    if (!hasAContent) {
        throw new Error('The element ' + element + ' to extract as a topic has an invalid ' +
            'structure, a topic must declare a topic-content as a child element.');
    }
}
/**
* A map of existing topics.
*/
const TOPICS = new WeakMap();
class Topic {
    /**
    * Instantiate a topic from the given element.
    *
    * @param element - An element from wich extracting a topic.
    */
    constructor(element) {
        this.identifier = element.id.trim().toLowerCase();
        this.element = element;
        this.heading = null;
        this.content = null;
        this.summary = null;
        const children = element.children;
        for (let index = 0, length = children.length; index < length; ++index) {
            const child = children.item(index);
            if (child.classList.contains('topic-heading')) {
                this.heading = child;
            }
            else if (child.classList.contains('topic-content')) {
                this.content = child;
            }
            else if (child.classList.contains('topic-abstract')) {
                this.summary = child;
            }
        }
        this.keywords = new Set();
        TOPICS.set(element, this);
        this.parent = Topic.findParentTopic(this);
        this.children = Topic.findChildrenTopic(this);
        if (element.dataset.keywords) {
            element.dataset.keywords.split(',').forEach((keyword) => {
                this.keywords.add(keyword.trim().toLowerCase());
            });
        }
    }
    /**
    * @return The depth of this topic.
    */
    get depth() {
        let result = 0;
        let current = this.parent;
        while (current) {
            current = current.parent;
            result += 1;
        }
        return result;
    }
    /**
    * Destroy this topic.
    */
    destroy() {
        for (let child of this.children) {
            child.destroy();
        }
        if (this.parent) {
            this.parent.children.splice(this.parent.children.indexOf(this), 1);
        }
        TOPICS.delete(this.element);
    }
}
(function (Topic) {
    /**
    * Extract a topic from the given HTML element.
    *
    * @param element - An element from wich extracting a topic.
    *
    * @return The topic that was extracted.
    *
    * @throw Error if the given element is not a valid topic element.
    */
    function get(element) {
        if (TOPICS.has(element))
            return TOPICS.get(element);
        assertThatIsOfTopicClass(element);
        assertThatDeclareAnIdentifier(element);
        assertThatHasValidStructure(element);
        return new Topic(element);
    }
    Topic.get = get;
    /**
    * Return the parent topic of a topic.
    *
    * @param topic - A topic from wich getting the parent topic.
    *
    * @return The parent topic of the given topic.
    */
    function findParentTopic(topic) {
        let current = topic.element.parentElement;
        while (current !== document.body) {
            if (current.classList.contains('topic')) {
                return Topic.get(current);
            }
            current = current.parentElement;
        }
        return null;
    }
    Topic.findParentTopic = findParentTopic;
    /**
    * Return an array of children topic of an existing topic.
    *
    * @param topic - A parent topic from wich getting the children topic.
    *
    * @return An array of children topic.
    */
    function findChildrenTopic(topic) {
        const result = [];
        const childrenStack = [topic.content.children];
        const cursorStack = [0];
        while (childrenStack.length > 0) {
            const children = childrenStack[childrenStack.length - 1];
            const cursor = cursorStack[cursorStack.length - 1];
            if (cursor < children.length) {
                const child = children.item(cursor);
                if (child.classList.contains('topic')) {
                    result.push(Topic.get(child));
                    cursorStack[cursorStack.length - 1] += 1;
                }
                else {
                    childrenStack.push(child.children);
                    cursorStack.push(0);
                }
            }
            else {
                childrenStack.length -= 1;
                cursorStack.length -= 1;
                if (cursorStack.length > 0) {
                    cursorStack[cursorStack.length - 1] += 1;
                }
            }
        }
        return result;
    }
    Topic.findChildrenTopic = findChildrenTopic;
})(Topic || (Topic = {}));


/***/ }),

/***/ "./src/js/topics/Topics.ts":
/*!*********************************!*\
  !*** ./src/js/topics/Topics.ts ***!
  \*********************************/
/*! exports provided: Topics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topics", function() { return Topics; });
/* harmony import */ var _Topic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topic */ "./src/js/topics/Topic.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Topics {
    constructor() {
        this.topics = new Set();
        this.roots = new Set();
    }
    capture(root) {
        return __awaiter(this, void 0, void 0, function* () {
            const topics = root.querySelectorAll('.topic');
            for (let index = 0, length = topics.length; index < length; ++index) {
                const topic = _Topic__WEBPACK_IMPORTED_MODULE_0__["Topic"].get(topics.item(index));
                this.topics.add(topic);
                if (topic.parent === null) {
                    this.roots.add(topic);
                }
            }
        });
    }
    clear() {
        this.topics.clear();
        this.roots.clear();
    }
}


/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/twig/characteristics.twig":
/*!***************************************!*\
  !*** ./src/twig/characteristics.twig ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./characteristics/power.twig */ "./src/twig/characteristics/power.twig");

__webpack_require__(/*! ./characteristics/strength.twig */ "./src/twig/characteristics/strength.twig");

__webpack_require__(/*! ./characteristics/dexterity.twig */ "./src/twig/characteristics/dexterity.twig");

__webpack_require__(/*! ./characteristics/control.twig */ "./src/twig/characteristics/control.twig");

__webpack_require__(/*! ./characteristics/constitution.twig */ "./src/twig/characteristics/constitution.twig");

__webpack_require__(/*! ./characteristics/luck.twig */ "./src/twig/characteristics/luck.twig");

__webpack_require__(/*! ./characteristics/introduction.twig */ "./src/twig/characteristics/introduction.twig");

__webpack_require__(/*! ./characteristics/abstract.twig */ "./src/twig/characteristics/abstract.twig");

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"characteristics\" data-keywords=\"caractéristique,caractéristiques\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h2>Caractéristiques</h2>\r\n  </div>\r\n  <div class=\"topic-abstract\">\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:324102e34cf5708f72b2446d433a18d9571aafa404b7c967000e9dfcda28bac15a4a2e9209d6bb53963051d0e5c6523db06b425435844e381ee4a28e235ca085:abstract.twig"}]}},{"type":"raw","value":"\r\n  </div>\r\n  <div class=\"topic-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:10589b2871c89e205a5ceb50705f78ddbde67677c9fb5d9d515c89f95f25b72c57517271341c2af5e96c40c9b740e6b3d1756eed7e2c0fa35e92fb5f21dcc6ba:introduction.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:0697013a218037f39fb4afa4875e80864d4551506d4681bfb4ba518bdc5be85bdef77b6b3ab595a33f6f6301f2ca46a8117af62844333ae830bb86b047dd0fb8:luck.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:4871be6021c58fb0756f6b9ce626411cc9ef07087ef2edd14c094beabeb52cb906b6722607502b37cf8f6d8c2749a7d4da3ce3bfe65d9ca02bdbca21fa716425:constitution.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:abd937affb7c764329b3df0972c8e85caae8e476d61691b4c0f548b7b19c85ab6ec124796a66af85dd5917bcf221b61e98f87fa01170330ad3f8db6303a7ab4d:control.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:6aa0ad98ad812cc7f84c9c019605c55a2e72793eba73ed9c47034a87ab8f922c5641b082a32f8f1cfe0910d1afd333a66fd2069076ae8fa344bfe597a5804685:dexterity.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:53a37a3dd0e2c77f59345a0e4c03dd9cbc9a7467f03dcc6304c0c01c4adf27e33dbd9288d8d1a9e53131fe7aee4a8df103fafe1fd8b3a71baa6d1c32beda604f:strength.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:2323dee50ebfb0a531b1b4978d1180047604096fed7bfae51896b02bf614ea03acc177636c55b88dcebac3ffae30d9472ab37894474286c486c8fc8e6502516c:power.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:ffbe009890969dd77911a189ff9a86718137014342d8dcda9bc2ad7447988764392c62ea57df776f8748415defef656bafc0192df81394c31f19522460851907:characteristics.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"characteristics\" data-keywords=\"caractéristique,caractéristiques\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h2>Caractéristiques</h2>\r\n  </div>\r\n  <div class=\"topic-abstract\">\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:324102e34cf5708f72b2446d433a18d9571aafa404b7c967000e9dfcda28bac15a4a2e9209d6bb53963051d0e5c6523db06b425435844e381ee4a28e235ca085:abstract.twig"}]}},{"type":"raw","value":"\r\n  </div>\r\n  <div class=\"topic-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:10589b2871c89e205a5ceb50705f78ddbde67677c9fb5d9d515c89f95f25b72c57517271341c2af5e96c40c9b740e6b3d1756eed7e2c0fa35e92fb5f21dcc6ba:introduction.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:0697013a218037f39fb4afa4875e80864d4551506d4681bfb4ba518bdc5be85bdef77b6b3ab595a33f6f6301f2ca46a8117af62844333ae830bb86b047dd0fb8:luck.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:4871be6021c58fb0756f6b9ce626411cc9ef07087ef2edd14c094beabeb52cb906b6722607502b37cf8f6d8c2749a7d4da3ce3bfe65d9ca02bdbca21fa716425:constitution.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:abd937affb7c764329b3df0972c8e85caae8e476d61691b4c0f548b7b19c85ab6ec124796a66af85dd5917bcf221b61e98f87fa01170330ad3f8db6303a7ab4d:control.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:6aa0ad98ad812cc7f84c9c019605c55a2e72793eba73ed9c47034a87ab8f922c5641b082a32f8f1cfe0910d1afd333a66fd2069076ae8fa344bfe597a5804685:dexterity.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:53a37a3dd0e2c77f59345a0e4c03dd9cbc9a7467f03dcc6304c0c01c4adf27e33dbd9288d8d1a9e53131fe7aee4a8df103fafe1fd8b3a71baa6d1c32beda604f:strength.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:2323dee50ebfb0a531b1b4978d1180047604096fed7bfae51896b02bf614ea03acc177636c55b88dcebac3ffae30d9472ab37894474286c486c8fc8e6502516c:power.twig"}]}},{"type":"raw","value":"\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/characteristics/abstract.twig":
/*!************************************************!*\
  !*** ./src/twig/characteristics/abstract.twig ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<p>\r\n  Les caractéristiques dépeignent les capacités innées d'un personnage, elles\r\n  sont appréciées sur une échelle allant de 0 à 20 et chacune est associée à un\r\n  modificateur d'instinct appliqué aux maîtrises du personnage.\r\n</p>\r\n"}],
    template = twig({"id":"$resolved:324102e34cf5708f72b2446d433a18d9571aafa404b7c967000e9dfcda28bac15a4a2e9209d6bb53963051d0e5c6523db06b425435844e381ee4a28e235ca085:abstract.twig","data":[{"type":"raw","value":"<p>\r\n  Les caractéristiques dépeignent les capacités innées d'un personnage, elles\r\n  sont appréciées sur une échelle allant de 0 à 20 et chacune est associée à un\r\n  modificateur d'instinct appliqué aux maîtrises du personnage.\r\n</p>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/characteristics/constitution.twig":
/*!****************************************************!*\
  !*** ./src/twig/characteristics/constitution.twig ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"constitution\" data-keywords=\"constitution\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Constitution</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/constitution.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      La constitution représente la résistance physique du corps, elle mesure\r\n      aussi le nombre de point de vie. Un bon niveau de constitution permet\r\n      d'encaisser plus de coups, de supporter des climats difficiles,\r\n      de résister aux maladies et de fournir des efforts sur de plus longues\r\n      périodes.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:4871be6021c58fb0756f6b9ce626411cc9ef07087ef2edd14c094beabeb52cb906b6722607502b37cf8f6d8c2749a7d4da3ce3bfe65d9ca02bdbca21fa716425:constitution.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"constitution\" data-keywords=\"constitution\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Constitution</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/constitution.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      La constitution représente la résistance physique du corps, elle mesure\r\n      aussi le nombre de point de vie. Un bon niveau de constitution permet\r\n      d'encaisser plus de coups, de supporter des climats difficiles,\r\n      de résister aux maladies et de fournir des efforts sur de plus longues\r\n      périodes.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/characteristics/control.twig":
/*!***********************************************!*\
  !*** ./src/twig/characteristics/control.twig ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"control\" data-keywords=\"contrôle\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Contrôle</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/control.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      Le contrôle représente la maîtrise consciente de soi et le recul vis-à-vis\r\n      des sentiments, elle mesure aussi la volonté d'un personnage. Un bon\r\n      niveau de contrôle permet de résister aux manipulations mentales et de\r\n      garder son sang froid dans les situations difficiles.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:abd937affb7c764329b3df0972c8e85caae8e476d61691b4c0f548b7b19c85ab6ec124796a66af85dd5917bcf221b61e98f87fa01170330ad3f8db6303a7ab4d:control.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"control\" data-keywords=\"contrôle\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Contrôle</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/control.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      Le contrôle représente la maîtrise consciente de soi et le recul vis-à-vis\r\n      des sentiments, elle mesure aussi la volonté d'un personnage. Un bon\r\n      niveau de contrôle permet de résister aux manipulations mentales et de\r\n      garder son sang froid dans les situations difficiles.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/characteristics/dexterity.twig":
/*!*************************************************!*\
  !*** ./src/twig/characteristics/dexterity.twig ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"dexterity\" data-keywords=\"dextérité\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Dextérité</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/dexterity.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      La dextérité représente la précision des sens, elle mesure aussi\r\n      l'initiative d'un personnage en combat. Un bon niveau de dextérité permet\r\n      d'agir le premier, de se mouvoir sans faire de bruit, d'esquiver\r\n      et de maîtriser les armes de jet et les armes légères.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:6aa0ad98ad812cc7f84c9c019605c55a2e72793eba73ed9c47034a87ab8f922c5641b082a32f8f1cfe0910d1afd333a66fd2069076ae8fa344bfe597a5804685:dexterity.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"dexterity\" data-keywords=\"dextérité\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Dextérité</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/dexterity.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      La dextérité représente la précision des sens, elle mesure aussi\r\n      l'initiative d'un personnage en combat. Un bon niveau de dextérité permet\r\n      d'agir le premier, de se mouvoir sans faire de bruit, d'esquiver\r\n      et de maîtriser les armes de jet et les armes légères.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/characteristics/introduction.twig":
/*!****************************************************!*\
  !*** ./src/twig/characteristics/introduction.twig ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<p>\r\n  Les caractéristiques dépeignent les capacités innées d'une entitée, elles sont\r\n  appréciées sur une échelle allant de 0 à 20. Un nouveau personnage joueur doit\r\n  répartir 68 points sur l'ensemble des caractéristiques. Une caractéristique\r\n  ne peut être nulle par défaut et un personnage joueur avec une caractéristique\r\n  inférieure ou égale à 4 points doit passer par l'approbation du maître du jeu.\r\n</p>\r\n"}],
    template = twig({"id":"$resolved:10589b2871c89e205a5ceb50705f78ddbde67677c9fb5d9d515c89f95f25b72c57517271341c2af5e96c40c9b740e6b3d1756eed7e2c0fa35e92fb5f21dcc6ba:introduction.twig","data":[{"type":"raw","value":"<p>\r\n  Les caractéristiques dépeignent les capacités innées d'une entitée, elles sont\r\n  appréciées sur une échelle allant de 0 à 20. Un nouveau personnage joueur doit\r\n  répartir 68 points sur l'ensemble des caractéristiques. Une caractéristique\r\n  ne peut être nulle par défaut et un personnage joueur avec une caractéristique\r\n  inférieure ou égale à 4 points doit passer par l'approbation du maître du jeu.\r\n</p>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/characteristics/luck.twig":
/*!********************************************!*\
  !*** ./src/twig/characteristics/luck.twig ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"luck\" data-keywords=\"chance\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Chance</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/luck.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      La chance représente la capacité à se créer des opportunitées, elle mesure\r\n      aussi le nombre de point de destin du personnage. Un bon niveau de chance\r\n      permet de trouver plus facilement des biens précieux et de savoir comment\r\n      créer des situations bénéfiques aux allures de deus-ex-machina.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:0697013a218037f39fb4afa4875e80864d4551506d4681bfb4ba518bdc5be85bdef77b6b3ab595a33f6f6301f2ca46a8117af62844333ae830bb86b047dd0fb8:luck.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"luck\" data-keywords=\"chance\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Chance</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/luck.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      La chance représente la capacité à se créer des opportunitées, elle mesure\r\n      aussi le nombre de point de destin du personnage. Un bon niveau de chance\r\n      permet de trouver plus facilement des biens précieux et de savoir comment\r\n      créer des situations bénéfiques aux allures de deus-ex-machina.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/characteristics/power.twig":
/*!*********************************************!*\
  !*** ./src/twig/characteristics/power.twig ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"power\" data-keywords=\"pouvoir\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Pouvoir</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/power.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      Le pouvoir représente la capacité à plier la réalité à sa volontée en\r\n      usant de prouesses mentales, il mesure aussi l'affinité à la magie. Un bon\r\n      niveau de pouvoir permet de résister aux effets magiques et de lancer des\r\n      sorts plus puissant.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:2323dee50ebfb0a531b1b4978d1180047604096fed7bfae51896b02bf614ea03acc177636c55b88dcebac3ffae30d9472ab37894474286c486c8fc8e6502516c:power.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"power\" data-keywords=\"pouvoir\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Pouvoir</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/power.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      Le pouvoir représente la capacité à plier la réalité à sa volontée en\r\n      usant de prouesses mentales, il mesure aussi l'affinité à la magie. Un bon\r\n      niveau de pouvoir permet de résister aux effets magiques et de lancer des\r\n      sorts plus puissant.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/characteristics/strength.twig":
/*!************************************************!*\
  !*** ./src/twig/characteristics/strength.twig ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"strength\" data-keywords=\"force\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Force</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/strength.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      La force représente la capacité à plier le réel à sa volonté par l'usage\r\n      de moyens physiques, elle mesure aussi la capacité de charge. Un bon\r\n      niveau de force permet d'équiper plus de matériel, de maîtriser les\r\n      armures et armes lourdes et de faire plus de dégât physique.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:53a37a3dd0e2c77f59345a0e4c03dd9cbc9a7467f03dcc6304c0c01c4adf27e33dbd9288d8d1a9e53131fe7aee4a8df103fafe1fd8b3a71baa6d1c32beda604f:strength.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"strength\" data-keywords=\"force\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Force</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p class=\"text-center\">\r\n      <img src=\"./images/characteristics/strength.svg\" width=\"200\" />\r\n    </p>\r\n\r\n    <p>\r\n      La force représente la capacité à plier le réel à sa volonté par l'usage\r\n      de moyens physiques, elle mesure aussi la capacité de charge. Un bon\r\n      niveau de force permet d'équiper plus de matériel, de maîtriser les\r\n      armures et armes lourdes et de faire plus de dégât physique.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/content.twig":
/*!*******************************!*\
  !*** ./src/twig/content.twig ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./fight-rules.twig */ "./src/twig/fight-rules.twig");

__webpack_require__(/*! ./core-rules.twig */ "./src/twig/core-rules.twig");

__webpack_require__(/*! ./feats.twig */ "./src/twig/feats.twig");

__webpack_require__(/*! ./knowledges.twig */ "./src/twig/knowledges.twig");

__webpack_require__(/*! ./masteries.twig */ "./src/twig/masteries.twig");

__webpack_require__(/*! ./characteristics.twig */ "./src/twig/characteristics.twig");

__webpack_require__(/*! ./summary.twig */ "./src/twig/summary.twig");

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <h1>Table des lois</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:795c1bd1214c6593a8de3d54786af3d1d7079e2dafb5e253a66bd856918bb439c9727a5b3228d6a44dee3754526dcb92f8e8ce05c8329ab7a4a28af75134bbf7:summary.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:ffbe009890969dd77911a189ff9a86718137014342d8dcda9bc2ad7447988764392c62ea57df776f8748415defef656bafc0192df81394c31f19522460851907:characteristics.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:290496b7e8a3c38cb77d3d5126c1f0df8d7fbdc0bfe13ae23c4169e7915a6801e173a4f28dd8c7fc734e1cde0896f60749fb883d2c02f8933f25286952b105d7:masteries.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:5b0a7cfb480ce304e428406afbe548e210e061d9fb22f97137fa5c29da2b6a9a72d1dd610a86774e1584b641731d16a0b3cd128d8ee287aaa440ffb4ff0016f0:knowledges.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:81927bdb4476f62efa4b25bf86c99265d5caf22c21c5306644fbcd3b38e479e178cbeedef92ec966312921d087f630521340fc512f356e47e4e2d07c9a223a97:feats.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:0e3edc2056a83f83aef2c6a71a9e8efe6f437f4b70e9666e448be5c2649e8e79f5d499ad468bef8fac0391e9a921edadf4ba5dc81eb75c26503f80f923951bbe:core-rules.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:8139c8deb0ad1f05ff8724e389d523c61d9e2369352f100e6d413f46f0631d153081fcf0c76051e551672ce0894bcc30d0e2b1982ec3f8af5cc50c4bd57d8bf4:fight-rules.twig"}]}},{"type":"raw","value":"\r\n    </div>\r\n  </div>\r\n</div><!-- /.container -->\r\n"}],
    template = twig({"id":"$resolved:fd7a252c39c9ecb9f46a90a95f31eb3c337d8524e63c609eb63fef2b9aeda8deb6864fd005475397c21a5e09684b3add60532820c297b2b5038e053dbdb4e24b:content.twig","data":[{"type":"raw","value":"<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <h1>Table des lois</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:795c1bd1214c6593a8de3d54786af3d1d7079e2dafb5e253a66bd856918bb439c9727a5b3228d6a44dee3754526dcb92f8e8ce05c8329ab7a4a28af75134bbf7:summary.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:ffbe009890969dd77911a189ff9a86718137014342d8dcda9bc2ad7447988764392c62ea57df776f8748415defef656bafc0192df81394c31f19522460851907:characteristics.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:290496b7e8a3c38cb77d3d5126c1f0df8d7fbdc0bfe13ae23c4169e7915a6801e173a4f28dd8c7fc734e1cde0896f60749fb883d2c02f8933f25286952b105d7:masteries.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:5b0a7cfb480ce304e428406afbe548e210e061d9fb22f97137fa5c29da2b6a9a72d1dd610a86774e1584b641731d16a0b3cd128d8ee287aaa440ffb4ff0016f0:knowledges.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:81927bdb4476f62efa4b25bf86c99265d5caf22c21c5306644fbcd3b38e479e178cbeedef92ec966312921d087f630521340fc512f356e47e4e2d07c9a223a97:feats.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:0e3edc2056a83f83aef2c6a71a9e8efe6f437f4b70e9666e448be5c2649e8e79f5d499ad468bef8fac0391e9a921edadf4ba5dc81eb75c26503f80f923951bbe:core-rules.twig"}]}},{"type":"raw","value":"\r\n      "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:8139c8deb0ad1f05ff8724e389d523c61d9e2369352f100e6d413f46f0631d153081fcf0c76051e551672ce0894bcc30d0e2b1982ec3f8af5cc50c4bd57d8bf4:fight-rules.twig"}]}},{"type":"raw","value":"\r\n    </div>\r\n  </div>\r\n</div><!-- /.container -->\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/core-rules.twig":
/*!**********************************!*\
  !*** ./src/twig/core-rules.twig ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./core-rules/reroll.twig */ "./src/twig/core-rules/reroll.twig");

__webpack_require__(/*! ./core-rules/situational-dice.twig */ "./src/twig/core-rules/situational-dice.twig");

__webpack_require__(/*! ./core-rules/critical-hit.twig */ "./src/twig/core-rules/critical-hit.twig");

__webpack_require__(/*! ./core-rules/self-resolution.twig */ "./src/twig/core-rules/self-resolution.twig");

__webpack_require__(/*! ./core-rules/adversial-test.twig */ "./src/twig/core-rules/adversial-test.twig");

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"core-rules\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h2>Règles principales</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:eb3cf6d6584ccb580f7bf03bbf7c5aa3649d1f889f70e9680dd3c8bd50305769bc625c98d19919389500b6fc5133c28d67ba1e86dae1a6707a36e630353b6e0d:adversial-test.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div><!-- /.adversial-test -->\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d78bb9600889261ed38c8acdb8386cf6f0c15c6e9934669cba2da0c91a6cb6b6b5550ad419cdbbd336d5dd79b081a1d7d923722dd97d38fc0cf338ffe9dfa0a3:self-resolution.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:688870029bd97a8a6312ad7b072755b99e93969cd8c328f61616143ee134bf52d097f96bcb549a3012f4e8773b0194b8d86e3db1e73a951378e3c164ea0f3fd4:critical-hit.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d9e20bea94ff20510906ecd423395bc1cf1693cb3d0bf8bf004c375c653805cfd35db958f7e204fb77b1c73d6c30ce3c98e48889841e71d4d173276844077a91:situational-dice.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:fb224ebcb70ef72f8cf29adab6cb6a38a38164ac05d7f0cc31e98c4416ab644dc286db3875d5a1e529a2e6204e78380fa3e8cc11539b395e468b4bb53b4d582c:reroll.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:0e3edc2056a83f83aef2c6a71a9e8efe6f437f4b70e9666e448be5c2649e8e79f5d499ad468bef8fac0391e9a921edadf4ba5dc81eb75c26503f80f923951bbe:core-rules.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"core-rules\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h2>Règles principales</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:eb3cf6d6584ccb580f7bf03bbf7c5aa3649d1f889f70e9680dd3c8bd50305769bc625c98d19919389500b6fc5133c28d67ba1e86dae1a6707a36e630353b6e0d:adversial-test.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div><!-- /.adversial-test -->\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d78bb9600889261ed38c8acdb8386cf6f0c15c6e9934669cba2da0c91a6cb6b6b5550ad419cdbbd336d5dd79b081a1d7d923722dd97d38fc0cf338ffe9dfa0a3:self-resolution.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:688870029bd97a8a6312ad7b072755b99e93969cd8c328f61616143ee134bf52d097f96bcb549a3012f4e8773b0194b8d86e3db1e73a951378e3c164ea0f3fd4:critical-hit.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d9e20bea94ff20510906ecd423395bc1cf1693cb3d0bf8bf004c375c653805cfd35db958f7e204fb77b1c73d6c30ce3c98e48889841e71d4d173276844077a91:situational-dice.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:fb224ebcb70ef72f8cf29adab6cb6a38a38164ac05d7f0cc31e98c4416ab644dc286db3875d5a1e529a2e6204e78380fa3e8cc11539b395e468b4bb53b4d582c:reroll.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/core-rules/adversial-test.twig":
/*!*************************************************!*\
  !*** ./src/twig/core-rules/adversial-test.twig ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"adversial-test\" data-keywords=\"résolution par opposition\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h3>Résolution par opposition</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      La résolution par opposition décide de l'issue d'une confrontation entre\r\n      deux éléments du récit. C'est le test type pour résoudre le succès des\r\n      attaques d'un épéiste ou la résistence d'une serrure à une tentative de\r\n      crochetage.\r\n    </p>\r\n\r\n    <p>\r\n      Le joueur qui lance les dés est dit acteur de la résolution et c'est de\r\n      son point de vue que les chances de succès sont calculées. L'opposant est\r\n      alors le joueur qui subit le test et il ne peut que mitiger les chances de\r\n      succès de l'acteur. Un joueur est toujours acteur de la résolution\r\n      lorsqu'il se confronte à un élément du récit. Dans le cas où deux joueurs\r\n      se confrontent, l'acteur est décidé d'un commun accord ou à pile ou face.\r\n      Finalement, si deux éléments du récit intéragissent entre-eux, c'est au\r\n      maître du jeu de répartir les rôles.\r\n    </p>\r\n\r\n    <p>\r\n      Une résolution par opposition compare une compétence de l'acteur appelée\r\n      compétence offensive à une compétence de l'opposant dite compétence\r\n      défensive. Pour que l'issue du test soit favorable pour l'acteur celui-ci\r\n      doit obtenir un score inférieur ou égal à son seuil de succès sur un dé\r\n      100. Le seuil de succès est la différence entre la compétence offensive et\r\n      la compétence défensive multipliée par 5 et ajoutée à une constante de 50.\r\n      Par exemple un personnage avec une compétence de 10 en discrétion tentant\r\n      de se faire discret en escaladant une muraille surveillée par un garde\r\n      ayant une compétence de 12 en perception aura un seuil de succès de 40%.\r\n      Et ce sera toujours au joueur de résoudre le test.\r\n    </p>\r\n\r\n    <table class=\"table-1d\">\r\n      <tbody>\r\n        <tr>\r\n          <td style=\"width:35px\">  5<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\">  5<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 10<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 15<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 20<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 25<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 30<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 35<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 40<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 45<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 50<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 55<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 60<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 65<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 70<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 75<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 80<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 85<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 90<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 95<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 95<span class=\"percent\">%</span> </td>\r\n        </tr>\r\n        <tr>\r\n          <th> -∞ </th>\r\n          <th> -9 </th>\r\n          <th> -8 </th>\r\n          <th> -7 </th>\r\n          <th> -6 </th>\r\n          <th> -5 </th>\r\n          <th> -4 </th>\r\n          <th> -3 </th>\r\n          <th> -2 </th>\r\n          <th> -1 </th>\r\n          <th>  0 </th>\r\n          <th> +1 </th>\r\n          <th> +2 </th>\r\n          <th> +3 </th>\r\n          <th> +4 </th>\r\n          <th> +5 </th>\r\n          <th> +6 </th>\r\n          <th> +7 </th>\r\n          <th> +8 </th>\r\n          <th> +9 </th>\r\n          <th> +∞ </th>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:eb3cf6d6584ccb580f7bf03bbf7c5aa3649d1f889f70e9680dd3c8bd50305769bc625c98d19919389500b6fc5133c28d67ba1e86dae1a6707a36e630353b6e0d:adversial-test.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"adversial-test\" data-keywords=\"résolution par opposition\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h3>Résolution par opposition</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      La résolution par opposition décide de l'issue d'une confrontation entre\r\n      deux éléments du récit. C'est le test type pour résoudre le succès des\r\n      attaques d'un épéiste ou la résistence d'une serrure à une tentative de\r\n      crochetage.\r\n    </p>\r\n\r\n    <p>\r\n      Le joueur qui lance les dés est dit acteur de la résolution et c'est de\r\n      son point de vue que les chances de succès sont calculées. L'opposant est\r\n      alors le joueur qui subit le test et il ne peut que mitiger les chances de\r\n      succès de l'acteur. Un joueur est toujours acteur de la résolution\r\n      lorsqu'il se confronte à un élément du récit. Dans le cas où deux joueurs\r\n      se confrontent, l'acteur est décidé d'un commun accord ou à pile ou face.\r\n      Finalement, si deux éléments du récit intéragissent entre-eux, c'est au\r\n      maître du jeu de répartir les rôles.\r\n    </p>\r\n\r\n    <p>\r\n      Une résolution par opposition compare une compétence de l'acteur appelée\r\n      compétence offensive à une compétence de l'opposant dite compétence\r\n      défensive. Pour que l'issue du test soit favorable pour l'acteur celui-ci\r\n      doit obtenir un score inférieur ou égal à son seuil de succès sur un dé\r\n      100. Le seuil de succès est la différence entre la compétence offensive et\r\n      la compétence défensive multipliée par 5 et ajoutée à une constante de 50.\r\n      Par exemple un personnage avec une compétence de 10 en discrétion tentant\r\n      de se faire discret en escaladant une muraille surveillée par un garde\r\n      ayant une compétence de 12 en perception aura un seuil de succès de 40%.\r\n      Et ce sera toujours au joueur de résoudre le test.\r\n    </p>\r\n\r\n    <table class=\"table-1d\">\r\n      <tbody>\r\n        <tr>\r\n          <td style=\"width:35px\">  5<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\">  5<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 10<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 15<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 20<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 25<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 30<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 35<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 40<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 45<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 50<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 55<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 60<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 65<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 70<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 75<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 80<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 85<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 90<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 95<span class=\"percent\">%</span> </td>\r\n          <td style=\"width:35px\"> 95<span class=\"percent\">%</span> </td>\r\n        </tr>\r\n        <tr>\r\n          <th> -∞ </th>\r\n          <th> -9 </th>\r\n          <th> -8 </th>\r\n          <th> -7 </th>\r\n          <th> -6 </th>\r\n          <th> -5 </th>\r\n          <th> -4 </th>\r\n          <th> -3 </th>\r\n          <th> -2 </th>\r\n          <th> -1 </th>\r\n          <th>  0 </th>\r\n          <th> +1 </th>\r\n          <th> +2 </th>\r\n          <th> +3 </th>\r\n          <th> +4 </th>\r\n          <th> +5 </th>\r\n          <th> +6 </th>\r\n          <th> +7 </th>\r\n          <th> +8 </th>\r\n          <th> +9 </th>\r\n          <th> +∞ </th>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/core-rules/critical-hit.twig":
/*!***********************************************!*\
  !*** ./src/twig/core-rules/critical-hit.twig ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"critical-hit\" data-keywords=\"échec critique,succès critique,résultat critique\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Critiques</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Lors d'un test, un score supérieur à 95% est un échec critique aux\r\n      répercussions désastreuses. À l'inverse, un score inférieur ou égal à 5%\r\n      est un succès critique aux conséquences bénéfiques. Les résultats\r\n      critiques priment sur les chances de succès réelles d'un personnage.\r\n    </p>\r\n\r\n    <p>\r\n      Les conséquences d'un résultat critique sont déterminées par le maître du\r\n      jeu et peuvent avoir lieu immédiatement comme dans un avenir proche.\r\n      Certaines règles supplémentaires peuvent s'appliquer. Les conséquences\r\n      d'un critique lors d'un test d'auto-résolution sont laissés à la\r\n      discrétion du maître du jeu.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:688870029bd97a8a6312ad7b072755b99e93969cd8c328f61616143ee134bf52d097f96bcb549a3012f4e8773b0194b8d86e3db1e73a951378e3c164ea0f3fd4:critical-hit.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"critical-hit\" data-keywords=\"échec critique,succès critique,résultat critique\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Critiques</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Lors d'un test, un score supérieur à 95% est un échec critique aux\r\n      répercussions désastreuses. À l'inverse, un score inférieur ou égal à 5%\r\n      est un succès critique aux conséquences bénéfiques. Les résultats\r\n      critiques priment sur les chances de succès réelles d'un personnage.\r\n    </p>\r\n\r\n    <p>\r\n      Les conséquences d'un résultat critique sont déterminées par le maître du\r\n      jeu et peuvent avoir lieu immédiatement comme dans un avenir proche.\r\n      Certaines règles supplémentaires peuvent s'appliquer. Les conséquences\r\n      d'un critique lors d'un test d'auto-résolution sont laissés à la\r\n      discrétion du maître du jeu.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/core-rules/reroll.twig":
/*!*****************************************!*\
  !*** ./src/twig/core-rules/reroll.twig ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"reroll\" data-keywords=\"pousser le test\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h3>Pousser le test</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Lors d'un échec, qui n'est pas un échec critique et moyennant une\r\n      justification acceptée par le maître du jeu, un personnage peut tenter de\r\n      repasser un test qu'il vient juste d'échouer. Si celui-ci réussi la\r\n      seconde tentative alors le test est passé, s'il échoue une seconde fois\r\n      alors le test est échoué avec des conséquences néfastes supplémentaires.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:fb224ebcb70ef72f8cf29adab6cb6a38a38164ac05d7f0cc31e98c4416ab644dc286db3875d5a1e529a2e6204e78380fa3e8cc11539b395e468b4bb53b4d582c:reroll.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"reroll\" data-keywords=\"pousser le test\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h3>Pousser le test</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Lors d'un échec, qui n'est pas un échec critique et moyennant une\r\n      justification acceptée par le maître du jeu, un personnage peut tenter de\r\n      repasser un test qu'il vient juste d'échouer. Si celui-ci réussi la\r\n      seconde tentative alors le test est passé, s'il échoue une seconde fois\r\n      alors le test est échoué avec des conséquences néfastes supplémentaires.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/core-rules/self-resolution.twig":
/*!**************************************************!*\
  !*** ./src/twig/core-rules/self-resolution.twig ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"self-resolution\" data-keywords=\"auto-résolution\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h3>Auto-résolution</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      L'auto-résolution permet de mesurer la qualité de la réussite d'une action\r\n      en fonction des capacités seules d'un personnage. C'est le test pour\r\n      mesurer la dangerosité d'un piège installé, la fiabilité d'une serrure ou\r\n      la qualité d'une production d'alchimie. L'auto résolution produit donc un\r\n      degré de difficulté, ou une qualité dépendamment que la production soit\r\n      une épreuve ou un consomable.\r\n    </p>\r\n\r\n    <table class=\"text-center table-2d\">\r\n      <tbody>\r\n        <tr>\r\n          <th>18</th>\r\n        \t<td>20</td>\r\n        \t<td>19</td>\r\n        \t<td>19</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>9</td>\r\n        \t<td>6</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        </tr>\r\n        <tr>\r\n          <th>17</th>\r\n        \t<td>20</td>\r\n        \t<td>19</td>\r\n        \t<td>19</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>8</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        </tr>\r\n        <tr>\r\n          <th>16</th>\r\n        \t<td>19</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>8</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        </tr>\r\n        <tr>\r\n          <th>15</th>\r\n        \t<td>18</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>7</td>\r\n        \t<td>5</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        </tr>\r\n        <tr>\r\n          <th>14</th>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>7</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>13</th>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>6</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>12</th>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>6</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>11</th>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>5</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>10</th>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>9</th>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>8</th>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>7</th>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>6</th>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>5</th>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>4</th>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>0</td>\r\n        \t<td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>0</td>\r\n        \t<td>0</td>\r\n        \t<td>0</td>\r\n        \t<td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>1</th>\r\n          <td>4</td>\r\n          <td>3</td>\r\n          <td>3</td>\r\n          <td>2</td>\r\n          <td>2</td>\r\n          <td>2</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th style=\"width:35px\">0</th>\r\n          <td style=\"width:35px\">3</td>\r\n          <td style=\"width:35px\">2</td>\r\n          <td style=\"width:35px\">2</td>\r\n          <td style=\"width:35px\">1</td>\r\n          <td style=\"width:35px\">1</td>\r\n          <td style=\"width:35px\">1</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n        </tr>\r\n        <tr>\r\n          <th></th>\r\n          <th>5<span class=\"percent\">%</span></th>\r\n          <th>10<span class=\"percent\">%</span></th>\r\n          <th>15<span class=\"percent\">%</span></th>\r\n          <th>20<span class=\"percent\">%</span></th>\r\n          <th>25<span class=\"percent\">%</span></th>\r\n          <th>30<span class=\"percent\">%</span></th>\r\n          <th>35<span class=\"percent\">%</span></th>\r\n          <th>40<span class=\"percent\">%</span></th>\r\n          <th>45<span class=\"percent\">%</span></th>\r\n          <th>50<span class=\"percent\">%</span></th>\r\n          <th>55<span class=\"percent\">%</span></th>\r\n          <th>60<span class=\"percent\">%</span></th>\r\n          <th>65<span class=\"percent\">%</span></th>\r\n          <th>70<span class=\"percent\">%</span></th>\r\n          <th>75<span class=\"percent\">%</span></th>\r\n          <th>80<span class=\"percent\">%</span></th>\r\n          <th>85<span class=\"percent\">%</span></th>\r\n          <th>90<span class=\"percent\">%</span></th>\r\n          <th>95<span class=\"percent\">%</span></th>\r\n          <th>100<span class=\"percent\">%</span></th>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:d78bb9600889261ed38c8acdb8386cf6f0c15c6e9934669cba2da0c91a6cb6b6b5550ad419cdbbd336d5dd79b081a1d7d923722dd97d38fc0cf338ffe9dfa0a3:self-resolution.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"self-resolution\" data-keywords=\"auto-résolution\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h3>Auto-résolution</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      L'auto-résolution permet de mesurer la qualité de la réussite d'une action\r\n      en fonction des capacités seules d'un personnage. C'est le test pour\r\n      mesurer la dangerosité d'un piège installé, la fiabilité d'une serrure ou\r\n      la qualité d'une production d'alchimie. L'auto résolution produit donc un\r\n      degré de difficulté, ou une qualité dépendamment que la production soit\r\n      une épreuve ou un consomable.\r\n    </p>\r\n\r\n    <table class=\"text-center table-2d\">\r\n      <tbody>\r\n        <tr>\r\n          <th>18</th>\r\n        \t<td>20</td>\r\n        \t<td>19</td>\r\n        \t<td>19</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>9</td>\r\n        \t<td>6</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        </tr>\r\n        <tr>\r\n          <th>17</th>\r\n        \t<td>20</td>\r\n        \t<td>19</td>\r\n        \t<td>19</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>8</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        </tr>\r\n        <tr>\r\n          <th>16</th>\r\n        \t<td>19</td>\r\n        \t<td>18</td>\r\n        \t<td>18</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>8</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        </tr>\r\n        <tr>\r\n          <th>15</th>\r\n        \t<td>18</td>\r\n        \t<td>17</td>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>7</td>\r\n        \t<td>5</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        </tr>\r\n        <tr>\r\n          <th>14</th>\r\n        \t<td>17</td>\r\n        \t<td>16</td>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>7</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>13</th>\r\n        \t<td>16</td>\r\n        \t<td>15</td>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>6</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>12</th>\r\n        \t<td>15</td>\r\n        \t<td>14</td>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>6</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>11</th>\r\n        \t<td>14</td>\r\n        \t<td>13</td>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>5</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>10</th>\r\n        \t<td>13</td>\r\n        \t<td>12</td>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        </tr>\r\n        <tr>\r\n          <th>9</th>\r\n        \t<td>12</td>\r\n        \t<td>11</td>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>8</th>\r\n        \t<td>11</td>\r\n        \t<td>10</td>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>7</th>\r\n        \t<td>10</td>\r\n        \t<td>9</td>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>6</th>\r\n        \t<td>9</td>\r\n        \t<td>8</td>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>5</th>\r\n        \t<td>8</td>\r\n        \t<td>7</td>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        </tr>\r\n        <tr>\r\n          <th>4</th>\r\n        \t<td>7</td>\r\n        \t<td>6</td>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>3</th>\r\n        \t<td>6</td>\r\n        \t<td>5</td>\r\n        \t<td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>0</td>\r\n        \t<td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>2</th>\r\n          <td>5</td>\r\n        \t<td>4</td>\r\n        \t<td>4</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>3</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>2</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>1</td>\r\n        \t<td>0</td>\r\n        \t<td>0</td>\r\n        \t<td>0</td>\r\n        \t<td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th>1</th>\r\n          <td>4</td>\r\n          <td>3</td>\r\n          <td>3</td>\r\n          <td>2</td>\r\n          <td>2</td>\r\n          <td>2</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>1</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n          <td>0</td>\r\n        </tr>\r\n        <tr>\r\n          <th style=\"width:35px\">0</th>\r\n          <td style=\"width:35px\">3</td>\r\n          <td style=\"width:35px\">2</td>\r\n          <td style=\"width:35px\">2</td>\r\n          <td style=\"width:35px\">1</td>\r\n          <td style=\"width:35px\">1</td>\r\n          <td style=\"width:35px\">1</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n          <td style=\"width:35px\">0</td>\r\n        </tr>\r\n        <tr>\r\n          <th></th>\r\n          <th>5<span class=\"percent\">%</span></th>\r\n          <th>10<span class=\"percent\">%</span></th>\r\n          <th>15<span class=\"percent\">%</span></th>\r\n          <th>20<span class=\"percent\">%</span></th>\r\n          <th>25<span class=\"percent\">%</span></th>\r\n          <th>30<span class=\"percent\">%</span></th>\r\n          <th>35<span class=\"percent\">%</span></th>\r\n          <th>40<span class=\"percent\">%</span></th>\r\n          <th>45<span class=\"percent\">%</span></th>\r\n          <th>50<span class=\"percent\">%</span></th>\r\n          <th>55<span class=\"percent\">%</span></th>\r\n          <th>60<span class=\"percent\">%</span></th>\r\n          <th>65<span class=\"percent\">%</span></th>\r\n          <th>70<span class=\"percent\">%</span></th>\r\n          <th>75<span class=\"percent\">%</span></th>\r\n          <th>80<span class=\"percent\">%</span></th>\r\n          <th>85<span class=\"percent\">%</span></th>\r\n          <th>90<span class=\"percent\">%</span></th>\r\n          <th>95<span class=\"percent\">%</span></th>\r\n          <th>100<span class=\"percent\">%</span></th>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/core-rules/situational-dice.twig":
/*!***************************************************!*\
  !*** ./src/twig/core-rules/situational-dice.twig ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"situationnal-dice\" data-keywords=\"bonus situationnel,malus situationnel\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Bonus et malus situationnel</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Quand une action intentée est bien argumentée, l'acteur peut se voir\r\n      attribuer un ou plusieurs dés de bonus situationnel. L'acteur lance alors\r\n      des dés de dizaines supplémentaires et garde la dizaine la plus basse\r\n      quand il calcule son score.\r\n    </p>\r\n\r\n    <p>\r\n      Quand une action intentée est douteuse ou mal argumentée, l'acteur peut se\r\n      voir attribuer un ou plusieurs dés de malus situationnel. L'acteur lance\r\n      alors des dés de dizaines supplémentaires et garde la dizaine la plus\r\n      haute quand il calcule son score.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:d9e20bea94ff20510906ecd423395bc1cf1693cb3d0bf8bf004c375c653805cfd35db958f7e204fb77b1c73d6c30ce3c98e48889841e71d4d173276844077a91:situational-dice.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"situationnal-dice\" data-keywords=\"bonus situationnel,malus situationnel\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Bonus et malus situationnel</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Quand une action intentée est bien argumentée, l'acteur peut se voir\r\n      attribuer un ou plusieurs dés de bonus situationnel. L'acteur lance alors\r\n      des dés de dizaines supplémentaires et garde la dizaine la plus basse\r\n      quand il calcule son score.\r\n    </p>\r\n\r\n    <p>\r\n      Quand une action intentée est douteuse ou mal argumentée, l'acteur peut se\r\n      voir attribuer un ou plusieurs dés de malus situationnel. L'acteur lance\r\n      alors des dés de dizaines supplémentaires et garde la dizaine la plus\r\n      haute quand il calcule son score.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/feats.twig":
/*!*****************************!*\
  !*** ./src/twig/feats.twig ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./feats/diehard.twig */ "./src/twig/feats/diehard.twig");

__webpack_require__(/*! ./feats/bull-charge.twig */ "./src/twig/feats/bull-charge.twig");

__webpack_require__(/*! ./feats/atlas-burden.twig */ "./src/twig/feats/atlas-burden.twig");

__webpack_require__(/*! ./feats/acrobatic-dodging.twig */ "./src/twig/feats/acrobatic-dodging.twig");

__webpack_require__(/*! ./feats/acrobatic-parry.twig */ "./src/twig/feats/acrobatic-parry.twig");

__webpack_require__(/*! ./feats/cat-grace.twig */ "./src/twig/feats/cat-grace.twig");

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"feats\" data-keywords=\"atouts\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h2>Atouts</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:34353cfb9fc747d917824e2fdf50991f8462b186c69de97bc5f5376dfc45d7ee5ff66455cf1884868fa170b5cb69f81a69d721289c1b5eb8bc5a13a88feb8aa5:cat-grace.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:9f7081d71a1b05335b02bcafd1b5cf9ec2d657be8408b3f9fa0c45905655ec2cb5ecbe096b6224df4d86e0ab2ee617c6cf71d4cfb08448d88b6ee6e2fc1c7807:acrobatic-parry.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:1dca15ccc64dd4cb3cfa20934fc38fcfa96db340fc6469da247273459d18aa674213e54a0d22e06394158fb66fe5bb9070cb4a4dcac3137edd5d85941d0a708e:acrobatic-dodging.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:08fa9fa34685c183ab582dc6097be6c055f34c9ac133f07417845be3202f1bf5414d4b1d5a98554c08f0ed89e730fc4b87bdd31324bcb3c07a88f8058a8a5790:atlas-burden.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:ac15d9e2c5fabbe4dbf6a179eb85a5228ee40a4d86825b011cf9e186525a1b11d924f26f3882a167bb2c57f8aefd2893504c3e19d33706dfaa4d57ec6b82ba36:bull-charge.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:6501456ba1ddbb93e4af4ded53de925fe691ae6b569c24a4f09342a6475d9a39bcf7f43f13993df88d62de918bcd73b22e62046c3fe7b570bb2ff87acfb17a95:diehard.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:81927bdb4476f62efa4b25bf86c99265d5caf22c21c5306644fbcd3b38e479e178cbeedef92ec966312921d087f630521340fc512f356e47e4e2d07c9a223a97:feats.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"feats\" data-keywords=\"atouts\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h2>Atouts</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:34353cfb9fc747d917824e2fdf50991f8462b186c69de97bc5f5376dfc45d7ee5ff66455cf1884868fa170b5cb69f81a69d721289c1b5eb8bc5a13a88feb8aa5:cat-grace.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:9f7081d71a1b05335b02bcafd1b5cf9ec2d657be8408b3f9fa0c45905655ec2cb5ecbe096b6224df4d86e0ab2ee617c6cf71d4cfb08448d88b6ee6e2fc1c7807:acrobatic-parry.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:1dca15ccc64dd4cb3cfa20934fc38fcfa96db340fc6469da247273459d18aa674213e54a0d22e06394158fb66fe5bb9070cb4a4dcac3137edd5d85941d0a708e:acrobatic-dodging.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:08fa9fa34685c183ab582dc6097be6c055f34c9ac133f07417845be3202f1bf5414d4b1d5a98554c08f0ed89e730fc4b87bdd31324bcb3c07a88f8058a8a5790:atlas-burden.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:ac15d9e2c5fabbe4dbf6a179eb85a5228ee40a4d86825b011cf9e186525a1b11d924f26f3882a167bb2c57f8aefd2893504c3e19d33706dfaa4d57ec6b82ba36:bull-charge.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:6501456ba1ddbb93e4af4ded53de925fe691ae6b569c24a4f09342a6475d9a39bcf7f43f13993df88d62de918bcd73b22e62046c3fe7b570bb2ff87acfb17a95:diehard.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/feats/acrobatic-dodging.twig":
/*!***********************************************!*\
  !*** ./src/twig/feats/acrobatic-dodging.twig ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-acrobatic-dodging\" data-keywords=\"esquive acrobatique,esquive,acrobatie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Esquive acrobatique</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Acrobatie</td>\r\n          <td>5+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Le personnage gagne une esquive acrobatique supplémentaire par round, une\r\n      esquive acrobatique est résolue comme une acrobatie dont le succès aboutit\r\n      aux effets d'une esquive standard. Lors d'une esquive acrobatique le\r\n      personnage subit un malus de 20% sur sa tentative d'esquive.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        II\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Acrobatie</td>\r\n          <td>10+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Esquive</td>\r\n          <td>5+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Le personnage gagne une esquive acrobatique supplémentaire par round, une\r\n      esquive acrobatique est résolue comme une acrobatie dont le succès aboutit\r\n      aux effets d'une esquive standard. Lors d'une esquive acrobatique le\r\n      personnage subit un malus de 20% sur sa tentative d'esquive.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:1dca15ccc64dd4cb3cfa20934fc38fcfa96db340fc6469da247273459d18aa674213e54a0d22e06394158fb66fe5bb9070cb4a4dcac3137edd5d85941d0a708e:acrobatic-dodging.twig","data":[{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-acrobatic-dodging\" data-keywords=\"esquive acrobatique,esquive,acrobatie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Esquive acrobatique</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Acrobatie</td>\r\n          <td>5+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Le personnage gagne une esquive acrobatique supplémentaire par round, une\r\n      esquive acrobatique est résolue comme une acrobatie dont le succès aboutit\r\n      aux effets d'une esquive standard. Lors d'une esquive acrobatique le\r\n      personnage subit un malus de 20% sur sa tentative d'esquive.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        II\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Acrobatie</td>\r\n          <td>10+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Esquive</td>\r\n          <td>5+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Le personnage gagne une esquive acrobatique supplémentaire par round, une\r\n      esquive acrobatique est résolue comme une acrobatie dont le succès aboutit\r\n      aux effets d'une esquive standard. Lors d'une esquive acrobatique le\r\n      personnage subit un malus de 20% sur sa tentative d'esquive.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/feats/acrobatic-parry.twig":
/*!*********************************************!*\
  !*** ./src/twig/feats/acrobatic-parry.twig ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-acrobatic-parry\" data-keywords=\"parade acrobatique,parade,acrobatie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Parade acrobatique</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n    \r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Acrobatie</td>\r\n          <td>15+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Le personnage gagne une parade supplémentaire par round, cette parade est\r\n      résolue comme une acrobatie dont le succès aboutit aux effets d'une parade\r\n      standard avec l'arme choisie. Lors d'une parade acrobatique le personnage\r\n      subit un malus de 20% sur sa tentative.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:9f7081d71a1b05335b02bcafd1b5cf9ec2d657be8408b3f9fa0c45905655ec2cb5ecbe096b6224df4d86e0ab2ee617c6cf71d4cfb08448d88b6ee6e2fc1c7807:acrobatic-parry.twig","data":[{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-acrobatic-parry\" data-keywords=\"parade acrobatique,parade,acrobatie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Parade acrobatique</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n    \r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Acrobatie</td>\r\n          <td>15+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Le personnage gagne une parade supplémentaire par round, cette parade est\r\n      résolue comme une acrobatie dont le succès aboutit aux effets d'une parade\r\n      standard avec l'arme choisie. Lors d'une parade acrobatique le personnage\r\n      subit un malus de 20% sur sa tentative.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/feats/atlas-burden.twig":
/*!******************************************!*\
  !*** ./src/twig/feats/atlas-burden.twig ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-atlas-burden\" data-keywords=\"charge,force,constitution\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Fardeau d'Atlas</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Constitution</td>\r\n          <td>16+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Gagnez 1 point de charge supplémentaire tous les 4 point de charge\r\n      effectif.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        II\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Constitution</td>\r\n          <td>18+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Force</td>\r\n          <td>14+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Fardeau d'Atlas</td>\r\n          <td>I</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Gagnez 1 point de charge supplémentaire tous les 2 point de charge\r\n      effectif.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:08fa9fa34685c183ab582dc6097be6c055f34c9ac133f07417845be3202f1bf5414d4b1d5a98554c08f0ed89e730fc4b87bdd31324bcb3c07a88f8058a8a5790:atlas-burden.twig","data":[{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-atlas-burden\" data-keywords=\"charge,force,constitution\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Fardeau d'Atlas</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Constitution</td>\r\n          <td>16+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Gagnez 1 point de charge supplémentaire tous les 4 point de charge\r\n      effectif.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        II\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Constitution</td>\r\n          <td>18+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Force</td>\r\n          <td>14+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Fardeau d'Atlas</td>\r\n          <td>I</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Gagnez 1 point de charge supplémentaire tous les 2 point de charge\r\n      effectif.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/feats/bull-charge.twig":
/*!*****************************************!*\
  !*** ./src/twig/feats/bull-charge.twig ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-bull-charge\" data-keywords=\"charge,force\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Charge du taureau</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Force</td>\r\n          <td>12+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Armures lourdes</td>\r\n          <td>5+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Lors d'une charge, ajouter autant de dégât physique que la totalité des\r\n      points de charge utilisé divisé par 4.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        II\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Force</td>\r\n          <td>14+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Armures lourdes</td>\r\n          <td>10+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Charge du taureau</td>\r\n          <td>I</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Lors d'une charge, ajouter autant de dégât physique que la totalité des\r\n      points de charge utilisé divisé par 2.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        III\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Force</td>\r\n          <td>18+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Armures lourdes</td>\r\n          <td>18+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Charge du taureau</td>\r\n          <td>II</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Lors d'une charge, ajouter autant de dégât physique que la totalité des\r\n      points de charge utilisé.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:ac15d9e2c5fabbe4dbf6a179eb85a5228ee40a4d86825b011cf9e186525a1b11d924f26f3882a167bb2c57f8aefd2893504c3e19d33706dfaa4d57ec6b82ba36:bull-charge.twig","data":[{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-bull-charge\" data-keywords=\"charge,force\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Charge du taureau</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Force</td>\r\n          <td>12+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Armures lourdes</td>\r\n          <td>5+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Lors d'une charge, ajouter autant de dégât physique que la totalité des\r\n      points de charge utilisé divisé par 4.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        II\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Force</td>\r\n          <td>14+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Armures lourdes</td>\r\n          <td>10+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Charge du taureau</td>\r\n          <td>I</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Lors d'une charge, ajouter autant de dégât physique que la totalité des\r\n      points de charge utilisé divisé par 2.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        III\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Force</td>\r\n          <td>18+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Armures lourdes</td>\r\n          <td>18+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Charge du taureau</td>\r\n          <td>II</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Lors d'une charge, ajouter autant de dégât physique que la totalité des\r\n      points de charge utilisé.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/feats/cat-grace.twig":
/*!***************************************!*\
  !*** ./src/twig/feats/cat-grace.twig ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-cat-grace\" data-keywords=\"acrobatie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Vol contrôlé</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Dextérité</td>\r\n          <td>14+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Acrobatie</td>\r\n          <td>15+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Si une acrobatie visant un autre personnage échoue alors l'acteur de\r\n      l'acrobatie peut tenter de se rattraper in-extremis en passant un test\r\n      d'acrobatie de difficulté 18 afin d'annuler tous les effets de la parade\r\n      ou de l'esquive de sa victime. Si l'acteur réussi son jet, la parade ou\r\n      l'esquive de sa victime est annulée et décomptée de la quantité de parade\r\n      ou d'esquive de son tour.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:34353cfb9fc747d917824e2fdf50991f8462b186c69de97bc5f5376dfc45d7ee5ff66455cf1884868fa170b5cb69f81a69d721289c1b5eb8bc5a13a88feb8aa5:cat-grace.twig","data":[{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-cat-grace\" data-keywords=\"acrobatie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Vol contrôlé</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Dextérité</td>\r\n          <td>14+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Acrobatie</td>\r\n          <td>15+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Si une acrobatie visant un autre personnage échoue alors l'acteur de\r\n      l'acrobatie peut tenter de se rattraper in-extremis en passant un test\r\n      d'acrobatie de difficulté 18 afin d'annuler tous les effets de la parade\r\n      ou de l'esquive de sa victime. Si l'acteur réussi son jet, la parade ou\r\n      l'esquive de sa victime est annulée et décomptée de la quantité de parade\r\n      ou d'esquive de son tour.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/feats/diehard.twig":
/*!*************************************!*\
  !*** ./src/twig/feats/diehard.twig ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-diehard\" data-keywords=\"charge,force,constitution\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Dur à cuir</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Constitution</td>\r\n          <td>14+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Gagnez 1 point de vie supplémentaire tous les 4 points de vie effectif.\r\n      Vous mourrez toujours si vous accumulez plus de 150% de votre\r\n      <strong>constitution</strong> en dégât.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        II\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Constitution</td>\r\n          <td>18+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Dur à cuir</td>\r\n          <td>I</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Gagnez 1 point de vie supplémentaire tous les 2 points de vie effectif.\r\n      Vous mourrez toujours si vous accumulez plus de 150% de votre\r\n      <strong>constitution</strong> en dégât.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:6501456ba1ddbb93e4af4ded53de925fe691ae6b569c24a4f09342a6475d9a39bcf7f43f13993df88d62de918bcd73b22e62046c3fe7b570bb2ff87acfb17a95:diehard.twig","data":[{"type":"raw","value":"<div class=\"topic feat\" id=\"feat-diehard\" data-keywords=\"charge,force,constitution\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Dur à cuir</h3>\r\n  </div>\r\n\r\n  <div class=\"topic-content\">\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        I\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Constitution</td>\r\n          <td>14+</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Gagnez 1 point de vie supplémentaire tous les 4 points de vie effectif.\r\n      Vous mourrez toujours si vous accumulez plus de 150% de votre\r\n      <strong>constitution</strong> en dégât.\r\n    </p>\r\n\r\n    <div class=\"feat-iteration\">\r\n      <div class=\"feat-iteration-value\">\r\n        II\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"feat-conditions\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">\r\n            Prérequis:\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Constitution</td>\r\n          <td>18+</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Dur à cuir</td>\r\n          <td>I</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Gagnez 1 point de vie supplémentaire tous les 2 points de vie effectif.\r\n      Vous mourrez toujours si vous accumulez plus de 150% de votre\r\n      <strong>constitution</strong> en dégât.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules.twig":
/*!***********************************!*\
  !*** ./src/twig/fight-rules.twig ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./fight-rules/death.twig */ "./src/twig/fight-rules/death.twig");

__webpack_require__(/*! ./fight-rules/armor.twig */ "./src/twig/fight-rules/armor.twig");

__webpack_require__(/*! ./fight-rules/damage.twig */ "./src/twig/fight-rules/damage.twig");

__webpack_require__(/*! ./fight-rules/attack.twig */ "./src/twig/fight-rules/attack.twig");

__webpack_require__(/*! ./fight-rules/weigth-point.twig */ "./src/twig/fight-rules/weigth-point.twig");

__webpack_require__(/*! ./fight-rules/wounds.twig */ "./src/twig/fight-rules/wounds.twig");

__webpack_require__(/*! ./fight-rules/life-point.twig */ "./src/twig/fight-rules/life-point.twig");

__webpack_require__(/*! ./fight-rules/initiative.twig */ "./src/twig/fight-rules/initiative.twig");

__webpack_require__(/*! ./fight-rules/structure.twig */ "./src/twig/fight-rules/structure.twig");

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-rules\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h2>Règles de combat</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d8ac3ab03b570e538878bdffe1a2f940b8e57e51db274fedc8301be3b6a30cc2a1a32e5315a6aa3114fcfa451ba5a1694f4f570da7d79dfc64db082aa6a9a729:structure.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:c5c729de3d25bc7b345a92c95ef7d180d00f9c7a3c9d111f16928b2ca89f1135c27b14276ae3bbe251aef42573022070f3b9b7c1e4c01b674503b9d085d5b241:initiative.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:e1ebf5098ccf6ef268630caa22e0603de9803801012e3c9d63a950a012ed5cd268c971d85d9fc760adc7ffa46357ac50e91cd5278cb6d2287d1b871870255c00:life-point.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:5cbdc4a33998ac4b6d29b388d9f0121acf46d80d1d1c401f31bdf90692affde207f54cd7ee98a04000ce29723d1f1c1968a8317b976480f09e31d16002424c0b:wounds.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:94118c84495c0c99aafa2df1a3a91bccf3c4f3c28fc080ff612ff0bbaed5d2fb488802022de41d5451adadb9adbe8721ecb3f4270aab7d49cc717e315ebebe67:weigth-point.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:aadab0a6ed47ca30565f3db5d91a29e1ed990360c09021747b45483d8dae4127e8cf0dc78e50b960ff717f961694be2bf1212048db4d27282d6d9888d0aa3d94:attack.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:41f6058be4e9fa395d493873c07c670718c53453ae7be185d541bc07fe9c781afe22826dac9fd63c680e6f7a324b225c19d266f218677813fb09ae628695e2df:damage.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:cc155090f164608d44cc14d0e429b82f8a96937345aeb00916e4cf2562f0f226ad2335fcf282e3afaac58dfb26aa0c9067a10e99f6aed0fa1c7609dad8150c32:armor.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:f15d7eb6ad67c0f5f8ce859688ef2c1d9f19a0bd3e0b96a05c7215353dd1c0cfd38fa6a08f6dc1dd0327a4f5eccfbe3885df534ca189a7a91e6c7f2c9e01aae1:death.twig"}]}},{"type":"raw","value":"\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:8139c8deb0ad1f05ff8724e389d523c61d9e2369352f100e6d413f46f0631d153081fcf0c76051e551672ce0894bcc30d0e2b1982ec3f8af5cc50c4bd57d8bf4:fight-rules.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-rules\">\r\n  <div class=\"topic-heading  text-center\">\r\n    <h2>Règles de combat</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d8ac3ab03b570e538878bdffe1a2f940b8e57e51db274fedc8301be3b6a30cc2a1a32e5315a6aa3114fcfa451ba5a1694f4f570da7d79dfc64db082aa6a9a729:structure.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:c5c729de3d25bc7b345a92c95ef7d180d00f9c7a3c9d111f16928b2ca89f1135c27b14276ae3bbe251aef42573022070f3b9b7c1e4c01b674503b9d085d5b241:initiative.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:e1ebf5098ccf6ef268630caa22e0603de9803801012e3c9d63a950a012ed5cd268c971d85d9fc760adc7ffa46357ac50e91cd5278cb6d2287d1b871870255c00:life-point.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:5cbdc4a33998ac4b6d29b388d9f0121acf46d80d1d1c401f31bdf90692affde207f54cd7ee98a04000ce29723d1f1c1968a8317b976480f09e31d16002424c0b:wounds.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:94118c84495c0c99aafa2df1a3a91bccf3c4f3c28fc080ff612ff0bbaed5d2fb488802022de41d5451adadb9adbe8721ecb3f4270aab7d49cc717e315ebebe67:weigth-point.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:aadab0a6ed47ca30565f3db5d91a29e1ed990360c09021747b45483d8dae4127e8cf0dc78e50b960ff717f961694be2bf1212048db4d27282d6d9888d0aa3d94:attack.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:41f6058be4e9fa395d493873c07c670718c53453ae7be185d541bc07fe9c781afe22826dac9fd63c680e6f7a324b225c19d266f218677813fb09ae628695e2df:damage.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:cc155090f164608d44cc14d0e429b82f8a96937345aeb00916e4cf2562f0f226ad2335fcf282e3afaac58dfb26aa0c9067a10e99f6aed0fa1c7609dad8150c32:armor.twig"}]}},{"type":"raw","value":"\r\n    "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:f15d7eb6ad67c0f5f8ce859688ef2c1d9f19a0bd3e0b96a05c7215353dd1c0cfd38fa6a08f6dc1dd0327a4f5eccfbe3885df534ca189a7a91e6c7f2c9e01aae1:death.twig"}]}},{"type":"raw","value":"\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules/armor.twig":
/*!*****************************************!*\
  !*** ./src/twig/fight-rules/armor.twig ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-armor\" data-keywords=\"armure\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Armure</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Une entitée peut s'équiper d'une armure légère, intermédiaire et lourde.\r\n      Si elle équipe plusieurs couche d'armure elle somme alors l'ensemble des\r\n      effets de celles-ci, y compris négatifs. Certaines armures peuvent\r\n      interdire l'utilisation d'autres pièces d'armure, comme l'utilisation\r\n      d'une plaque seule, interdisant l'armure de plaque complète. Les points\r\n      d'armure conférés par l'équipement et les effets tiers sont\r\n      systématiquement retranché de tous les dégâts pris par l'entité. Si\r\n      l'armure est plus forte que l'ensemble des dégâts pris, l'entité ne prends\r\n      aucun dégâts.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:cc155090f164608d44cc14d0e429b82f8a96937345aeb00916e4cf2562f0f226ad2335fcf282e3afaac58dfb26aa0c9067a10e99f6aed0fa1c7609dad8150c32:armor.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-armor\" data-keywords=\"armure\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Armure</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Une entitée peut s'équiper d'une armure légère, intermédiaire et lourde.\r\n      Si elle équipe plusieurs couche d'armure elle somme alors l'ensemble des\r\n      effets de celles-ci, y compris négatifs. Certaines armures peuvent\r\n      interdire l'utilisation d'autres pièces d'armure, comme l'utilisation\r\n      d'une plaque seule, interdisant l'armure de plaque complète. Les points\r\n      d'armure conférés par l'équipement et les effets tiers sont\r\n      systématiquement retranché de tous les dégâts pris par l'entité. Si\r\n      l'armure est plus forte que l'ensemble des dégâts pris, l'entité ne prends\r\n      aucun dégâts.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules/attack.twig":
/*!******************************************!*\
  !*** ./src/twig/fight-rules/attack.twig ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-attack\" data-keywords=\"attaque\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Attaque</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Une attaque est une action simple qui nécéssite d'être au contact de sa\r\n      cible. Une attaque se déroule toujours en deux temps : la touche et la\r\n      résolution des dégâts.\r\n    </p>\r\n\r\n    <p>\r\n      Lors de la phase de touche, le défenseur peut s'il en a la capacité\r\n      choisir d'esquiver, de parer ou de ne rien faire. La touche est un test\r\n      d'opposition standard entre la maîtrise de l'arme de l'attaquant et la\r\n      maîtrise choisie par le défenseur. Si le défenseur ne fait rien ou ne peut\r\n      ni esquiver le coup ni le parer, l'attaquant touche automatiquement.\r\n    </p>\r\n\r\n    <p>\r\n      Une entitée à le droit à une esquive par tour. Lors d'une esquive, le\r\n      défenseur oppose sa maîtrise de l'esquive à la maîtrise de l'arme de\r\n      l'attaquant et choisi une direction dans laquelle esquiver. Si l'esquive\r\n      est réussie, le défenseur peut alors réaliser un pas de placement dans la\r\n      direction qu'il a choisie et l'attaquant échoue son action. Le nombre\r\n      d'esquive par tour peut varier en fonction des atouts et autres effets. Le\r\n      défenseur doit toujours equiver dans une direction qui est libre d'accès.\r\n    </p>\r\n\r\n    <p>\r\n      Une entitée à le droit à une parade par tour. Lors d'une parade, le\r\n      défenseur oppose la maîtrise de sa propre arme, ou de son bouclier à la\r\n      maîtrise de l'attaquant. Si la parade réussie, l'attaquant échoue son\r\n      action et le défenseur peut choisir de contre attaquer sur le champ\r\n      en inversant les rôles. Le nombre de parade par tour peut varier en\r\n      fonction des atouts et des effets.\r\n    </p>\r\n\r\n    <p>\r\n      Certaines situations sont à l'avantage de l'attaquant. Si le défenseur\r\n      esquive pour sortir de la zone de contrôle de son adversaire il se voit\r\n      alors attribuer un malus de 2 points sur sa maîtrise de l'esquive. Pour\r\n      chaque entitée hostile autour de lui dont le défenseur est l'objet de\r\n      l'attention, le défenseur se voit en plus attribuer un malus de 2 points\r\n      supplémentaire sur la maîtrise qu'il utilise pour se défendre.\r\n    </p>\r\n\r\n    <p>\r\n      Certaines situations sont à l'avantage du défenseur. Pour chaque entitée\r\n      hostile autour de lui dont l'attaquant est l'objet de l'attention, le\r\n      défenseur se voit en plus attribuer un bonus de 2 points supplémtaire sur\r\n      la maîtrise qu'il utilise pour se défendre. Si l'attaquant doit réaliser\r\n      un pas de placement pour attaquer le défenseur, celui-ci gagne 2 points\r\n      supplémentaire sur la maîtrise qu'il utilise pour se défendre.\r\n    </p>\r\n\r\n    <p>\r\n      Certaines règles supplémentaire peuvent encore modifier le niveau de\r\n      maîtrise de l'attaquant ou du défenseur en fonction du type d'action\r\n      entrepris ou des effets actifs.\r\n    </p>\r\n\r\n    <p>\r\n      Si l'attaquant réussi sa touche, il peut alors calculer les dégâts qu'il\r\n      va infliger au défenseur. Il doit pour cela lancer autant de dé six qu'il\r\n      peut faire de dégâts, tous les dés pairs sont alors considéré comme un\r\n      point de dégât infligé. Le défenseur peut alors déduire ceux-ci de ses\r\n      points de vie et de son armure en fonction du type de dégât. Les dégâts\r\n      sur les points de vie sont toujours retranchés du nombre de point d'armure\r\n      de la cible. Les dégâts à l'armure sont toujours appliqués après les\r\n      dégâts aux points de vie.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:aadab0a6ed47ca30565f3db5d91a29e1ed990360c09021747b45483d8dae4127e8cf0dc78e50b960ff717f961694be2bf1212048db4d27282d6d9888d0aa3d94:attack.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-attack\" data-keywords=\"attaque\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Attaque</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Une attaque est une action simple qui nécéssite d'être au contact de sa\r\n      cible. Une attaque se déroule toujours en deux temps : la touche et la\r\n      résolution des dégâts.\r\n    </p>\r\n\r\n    <p>\r\n      Lors de la phase de touche, le défenseur peut s'il en a la capacité\r\n      choisir d'esquiver, de parer ou de ne rien faire. La touche est un test\r\n      d'opposition standard entre la maîtrise de l'arme de l'attaquant et la\r\n      maîtrise choisie par le défenseur. Si le défenseur ne fait rien ou ne peut\r\n      ni esquiver le coup ni le parer, l'attaquant touche automatiquement.\r\n    </p>\r\n\r\n    <p>\r\n      Une entitée à le droit à une esquive par tour. Lors d'une esquive, le\r\n      défenseur oppose sa maîtrise de l'esquive à la maîtrise de l'arme de\r\n      l'attaquant et choisi une direction dans laquelle esquiver. Si l'esquive\r\n      est réussie, le défenseur peut alors réaliser un pas de placement dans la\r\n      direction qu'il a choisie et l'attaquant échoue son action. Le nombre\r\n      d'esquive par tour peut varier en fonction des atouts et autres effets. Le\r\n      défenseur doit toujours equiver dans une direction qui est libre d'accès.\r\n    </p>\r\n\r\n    <p>\r\n      Une entitée à le droit à une parade par tour. Lors d'une parade, le\r\n      défenseur oppose la maîtrise de sa propre arme, ou de son bouclier à la\r\n      maîtrise de l'attaquant. Si la parade réussie, l'attaquant échoue son\r\n      action et le défenseur peut choisir de contre attaquer sur le champ\r\n      en inversant les rôles. Le nombre de parade par tour peut varier en\r\n      fonction des atouts et des effets.\r\n    </p>\r\n\r\n    <p>\r\n      Certaines situations sont à l'avantage de l'attaquant. Si le défenseur\r\n      esquive pour sortir de la zone de contrôle de son adversaire il se voit\r\n      alors attribuer un malus de 2 points sur sa maîtrise de l'esquive. Pour\r\n      chaque entitée hostile autour de lui dont le défenseur est l'objet de\r\n      l'attention, le défenseur se voit en plus attribuer un malus de 2 points\r\n      supplémentaire sur la maîtrise qu'il utilise pour se défendre.\r\n    </p>\r\n\r\n    <p>\r\n      Certaines situations sont à l'avantage du défenseur. Pour chaque entitée\r\n      hostile autour de lui dont l'attaquant est l'objet de l'attention, le\r\n      défenseur se voit en plus attribuer un bonus de 2 points supplémtaire sur\r\n      la maîtrise qu'il utilise pour se défendre. Si l'attaquant doit réaliser\r\n      un pas de placement pour attaquer le défenseur, celui-ci gagne 2 points\r\n      supplémentaire sur la maîtrise qu'il utilise pour se défendre.\r\n    </p>\r\n\r\n    <p>\r\n      Certaines règles supplémentaire peuvent encore modifier le niveau de\r\n      maîtrise de l'attaquant ou du défenseur en fonction du type d'action\r\n      entrepris ou des effets actifs.\r\n    </p>\r\n\r\n    <p>\r\n      Si l'attaquant réussi sa touche, il peut alors calculer les dégâts qu'il\r\n      va infliger au défenseur. Il doit pour cela lancer autant de dé six qu'il\r\n      peut faire de dégâts, tous les dés pairs sont alors considéré comme un\r\n      point de dégât infligé. Le défenseur peut alors déduire ceux-ci de ses\r\n      points de vie et de son armure en fonction du type de dégât. Les dégâts\r\n      sur les points de vie sont toujours retranchés du nombre de point d'armure\r\n      de la cible. Les dégâts à l'armure sont toujours appliqués après les\r\n      dégâts aux points de vie.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules/damage.twig":
/*!******************************************!*\
  !*** ./src/twig/fight-rules/damage.twig ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-damage\" data-keywords=\"Dégâts\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Dégâts</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:41f6058be4e9fa395d493873c07c670718c53453ae7be185d541bc07fe9c781afe22826dac9fd63c680e6f7a324b225c19d266f218677813fb09ae628695e2df:damage.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-damage\" data-keywords=\"Dégâts\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Dégâts</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules/death.twig":
/*!*****************************************!*\
  !*** ./src/twig/fight-rules/death.twig ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-death\" data-keywords=\"Mort\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Mort</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:f15d7eb6ad67c0f5f8ce859688ef2c1d9f19a0bd3e0b96a05c7215353dd1c0cfd38fa6a08f6dc1dd0327a4f5eccfbe3885df534ca189a7a91e6c7f2c9e01aae1:death.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-death\" data-keywords=\"Mort\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Mort</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules/initiative.twig":
/*!**********************************************!*\
  !*** ./src/twig/fight-rules/initiative.twig ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-initiative\" data-keywords=\"initiative\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Initiative</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      L'initiative d'une entitée définie la priorité qu'elle peut avoir sur\r\n      les autres lors d'un tour de jeu. L'initiative d'une entitée est égale au\r\n      nombre de point de dextérité de celle-ci, et, en conséquence, si le nombre\r\n      de points de dextérité d'une entitée change au cours d'un combat son score\r\n      d'initiative change aussi.\r\n    </p>\r\n\r\n    <p>\r\n      Certains éléments extérieurs peuvent modifier l'initiative d'une entitée\r\n      tant qu'ils restent actifs. Tous les 20 points d'initiative une entitée\r\n      peut toujours choisir de scinder son initiative en deux pour jouer deux\r\n      fois durant le tour. Une fois pour chaque bloc d'initiative ainsi créé.\r\n      Avec un score d'initiative négatif, une entité ne joue plus qu'un tour\r\n      sur deux et ce phénomène s'aggrave tout les 20 points d'initiative perdus\r\n      en deça de zéro.\r\n    </p>\r\n\r\n    <p>\r\n      Une entité avec une dextérité nulle est considéré hors-combat et ne peut\r\n      plus prendre de décision tant que son score n'est pas remonté d'au moins\r\n      un point. Même avec une initiative positive, une entitée avec une\r\n      dextérité nulle ne peut agir. Une initiative négative permet de continuer\r\n      à jouer tant que la dextérité n'est pas nulle.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:c5c729de3d25bc7b345a92c95ef7d180d00f9c7a3c9d111f16928b2ca89f1135c27b14276ae3bbe251aef42573022070f3b9b7c1e4c01b674503b9d085d5b241:initiative.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-initiative\" data-keywords=\"initiative\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Initiative</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      L'initiative d'une entitée définie la priorité qu'elle peut avoir sur\r\n      les autres lors d'un tour de jeu. L'initiative d'une entitée est égale au\r\n      nombre de point de dextérité de celle-ci, et, en conséquence, si le nombre\r\n      de points de dextérité d'une entitée change au cours d'un combat son score\r\n      d'initiative change aussi.\r\n    </p>\r\n\r\n    <p>\r\n      Certains éléments extérieurs peuvent modifier l'initiative d'une entitée\r\n      tant qu'ils restent actifs. Tous les 20 points d'initiative une entitée\r\n      peut toujours choisir de scinder son initiative en deux pour jouer deux\r\n      fois durant le tour. Une fois pour chaque bloc d'initiative ainsi créé.\r\n      Avec un score d'initiative négatif, une entité ne joue plus qu'un tour\r\n      sur deux et ce phénomène s'aggrave tout les 20 points d'initiative perdus\r\n      en deça de zéro.\r\n    </p>\r\n\r\n    <p>\r\n      Une entité avec une dextérité nulle est considéré hors-combat et ne peut\r\n      plus prendre de décision tant que son score n'est pas remonté d'au moins\r\n      un point. Même avec une initiative positive, une entitée avec une\r\n      dextérité nulle ne peut agir. Une initiative négative permet de continuer\r\n      à jouer tant que la dextérité n'est pas nulle.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules/life-point.twig":
/*!**********************************************!*\
  !*** ./src/twig/fight-rules/life-point.twig ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-life-point\" data-keywords=\"points de vie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Points de vie</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Les points de vie d'un personnage sont égaux à son nombre de point de\r\n      constitution. Si un personnage accumule autant de dégât qu'il a de points\r\n      de vie il tombe dans le coma, et si ceux-ci dépassent 150% de sa\r\n      constitution il meurt.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:e1ebf5098ccf6ef268630caa22e0603de9803801012e3c9d63a950a012ed5cd268c971d85d9fc760adc7ffa46357ac50e91cd5278cb6d2287d1b871870255c00:life-point.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-life-point\" data-keywords=\"points de vie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Points de vie</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Les points de vie d'un personnage sont égaux à son nombre de point de\r\n      constitution. Si un personnage accumule autant de dégât qu'il a de points\r\n      de vie il tombe dans le coma, et si ceux-ci dépassent 150% de sa\r\n      constitution il meurt.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules/structure.twig":
/*!*********************************************!*\
  !*** ./src/twig/fight-rules/structure.twig ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-structure\" data-keywords=\"structure\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Structure</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Les scènes à forte intéraction sont résolues au tour par tour, chaque tour\r\n      équivalent à une durée d'environ 6 secondes. Durant un tour les décisions\r\n      de chaque entitée présente sont priorisées en fonction de leur initiative\r\n      respective : l'entitée avec la plus forte initiative agit en premier et\r\n      l'entitée ayant la plus faible initiative agit en dernier.\r\n    </p>\r\n\r\n    <p>\r\n      Quand l'initiative d'une entitée change durant un tour et que celle-ci n'a\r\n      pas encore jouée elle doit alors appliquer son nouveau score d'initiative\r\n      pour déterminer son ordre de passage. Si deux entitées jouent avec la\r\n      même initiative, l'ordre de décision est décidé au dé ou d'un commun\r\n      accord entre les joueurs.\r\n    </p>\r\n\r\n    <p>\r\n      Quand une entité doit agir elle peut réaliser soit deux actions simples\r\n      soit une action complexe. Certaines actions, plus complexes encore peuvent\r\n      nécéssiter plusieurs tours pour être éxécutées. Une entité peut toujours\r\n      choisir de jouer en dernier, ou de poser une condition à l'activation de\r\n      son tour de jeu. Si une entité perds de l'initiative alors qu'elle attends\r\n      elle doit alors prendre en compte sa nouvelle initiative pour décider de\r\n      sa priorité sur les autres.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:d8ac3ab03b570e538878bdffe1a2f940b8e57e51db274fedc8301be3b6a30cc2a1a32e5315a6aa3114fcfa451ba5a1694f4f570da7d79dfc64db082aa6a9a729:structure.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-structure\" data-keywords=\"structure\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Structure</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Les scènes à forte intéraction sont résolues au tour par tour, chaque tour\r\n      équivalent à une durée d'environ 6 secondes. Durant un tour les décisions\r\n      de chaque entitée présente sont priorisées en fonction de leur initiative\r\n      respective : l'entitée avec la plus forte initiative agit en premier et\r\n      l'entitée ayant la plus faible initiative agit en dernier.\r\n    </p>\r\n\r\n    <p>\r\n      Quand l'initiative d'une entitée change durant un tour et que celle-ci n'a\r\n      pas encore jouée elle doit alors appliquer son nouveau score d'initiative\r\n      pour déterminer son ordre de passage. Si deux entitées jouent avec la\r\n      même initiative, l'ordre de décision est décidé au dé ou d'un commun\r\n      accord entre les joueurs.\r\n    </p>\r\n\r\n    <p>\r\n      Quand une entité doit agir elle peut réaliser soit deux actions simples\r\n      soit une action complexe. Certaines actions, plus complexes encore peuvent\r\n      nécéssiter plusieurs tours pour être éxécutées. Une entité peut toujours\r\n      choisir de jouer en dernier, ou de poser une condition à l'activation de\r\n      son tour de jeu. Si une entité perds de l'initiative alors qu'elle attends\r\n      elle doit alors prendre en compte sa nouvelle initiative pour décider de\r\n      sa priorité sur les autres.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules/weigth-point.twig":
/*!************************************************!*\
  !*** ./src/twig/fight-rules/weigth-point.twig ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-weigth-point\" data-keywords=\"points de charge\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Points de charge</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Une entitée possède autant de points de charge qu'elle à de points de\r\n      force. Les points de charge représente la quantité d'objets que peut\r\n      équiper et transporter l'entité avant de se voir attribuer des malus.\r\n    </p>\r\n\r\n    <p>\r\n      Tous les deux points de charge non utilisé, l'entité peut rajouter un\r\n      point de dégât supplémentaire à toute ses attaques au corps à corps et à\r\n      son initiative. Tous les points de charge au dessus de la limite de\r\n      l'entité implique la perte d'un point de dégât à toutes les attaques au\r\n      corps à corps et la perte d'un point à son initiative.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:94118c84495c0c99aafa2df1a3a91bccf3c4f3c28fc080ff612ff0bbaed5d2fb488802022de41d5451adadb9adbe8721ecb3f4270aab7d49cc717e315ebebe67:weigth-point.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-weigth-point\" data-keywords=\"points de charge\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Points de charge</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Une entitée possède autant de points de charge qu'elle à de points de\r\n      force. Les points de charge représente la quantité d'objets que peut\r\n      équiper et transporter l'entité avant de se voir attribuer des malus.\r\n    </p>\r\n\r\n    <p>\r\n      Tous les deux points de charge non utilisé, l'entité peut rajouter un\r\n      point de dégât supplémentaire à toute ses attaques au corps à corps et à\r\n      son initiative. Tous les points de charge au dessus de la limite de\r\n      l'entité implique la perte d'un point de dégât à toutes les attaques au\r\n      corps à corps et la perte d'un point à son initiative.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/fight-rules/wounds.twig":
/*!******************************************!*\
  !*** ./src/twig/fight-rules/wounds.twig ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"fight-wounds\" data-keywords=\"blessures\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Blessures</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Un personnage perdant un important nombre de point de vie d'un coup ou\r\n      subissant les conséquences de certaines techniques peut se voir infliger\r\n      des blessures. Les blessures sont des effets permanents qui ne peuvent\r\n      être soignés qu'avec le temps et des soins minutieux, elles sont classés\r\n      en quatres catégories : les blessures bénignes, les blessures sévères et\r\n      les blessures graves.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:5cbdc4a33998ac4b6d29b388d9f0121acf46d80d1d1c401f31bdf90692affde207f54cd7ee98a04000ce29723d1f1c1968a8317b976480f09e31d16002424c0b:wounds.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"fight-wounds\" data-keywords=\"blessures\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Blessures</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <p>\r\n      Un personnage perdant un important nombre de point de vie d'un coup ou\r\n      subissant les conséquences de certaines techniques peut se voir infliger\r\n      des blessures. Les blessures sont des effets permanents qui ne peuvent\r\n      être soignés qu'avec le temps et des soins minutieux, elles sont classés\r\n      en quatres catégories : les blessures bénignes, les blessures sévères et\r\n      les blessures graves.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/knowledges.twig":
/*!**********************************!*\
  !*** ./src/twig/knowledges.twig ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"knowledges\" data-keywords=\"savoirs\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h2>Savoirs</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:5b0a7cfb480ce304e428406afbe548e210e061d9fb22f97137fa5c29da2b6a9a72d1dd610a86774e1584b641731d16a0b3cd128d8ee287aaa440ffb4ff0016f0:knowledges.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"knowledges\" data-keywords=\"savoirs\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h2>Savoirs</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries.twig":
/*!*********************************!*\
  !*** ./src/twig/masteries.twig ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./masteries/two-weapon-fighting.twig */ "./src/twig/masteries/two-weapon-fighting.twig");

__webpack_require__(/*! ./masteries/heavy-armor.twig */ "./src/twig/masteries/heavy-armor.twig");

__webpack_require__(/*! ./masteries/medium-armor.twig */ "./src/twig/masteries/medium-armor.twig");

__webpack_require__(/*! ./masteries/light-armor.twig */ "./src/twig/masteries/light-armor.twig");

__webpack_require__(/*! ./masteries/heavy-crossbow.twig */ "./src/twig/masteries/heavy-crossbow.twig");

__webpack_require__(/*! ./masteries/light-crossbow.twig */ "./src/twig/masteries/light-crossbow.twig");

__webpack_require__(/*! ./masteries/mace.twig */ "./src/twig/masteries/mace.twig");

__webpack_require__(/*! ./masteries/war-hammer.twig */ "./src/twig/masteries/war-hammer.twig");

__webpack_require__(/*! ./masteries/unarmed-combat.twig */ "./src/twig/masteries/unarmed-combat.twig");

__webpack_require__(/*! ./masteries/spear.twig */ "./src/twig/masteries/spear.twig");

__webpack_require__(/*! ./masteries/shield.twig */ "./src/twig/masteries/shield.twig");

__webpack_require__(/*! ./masteries/rod.twig */ "./src/twig/masteries/rod.twig");

__webpack_require__(/*! ./masteries/short-bow.twig */ "./src/twig/masteries/short-bow.twig");

__webpack_require__(/*! ./masteries/long-bow.twig */ "./src/twig/masteries/long-bow.twig");

__webpack_require__(/*! ./masteries/dagger.twig */ "./src/twig/masteries/dagger.twig");

__webpack_require__(/*! ./masteries/long-sword.twig */ "./src/twig/masteries/long-sword.twig");

__webpack_require__(/*! ./masteries/bastard-sword.twig */ "./src/twig/masteries/bastard-sword.twig");

__webpack_require__(/*! ./masteries/short-sword.twig */ "./src/twig/masteries/short-sword.twig");

__webpack_require__(/*! ./masteries/sleight-of-hand.twig */ "./src/twig/masteries/sleight-of-hand.twig");

__webpack_require__(/*! ./masteries/perception.twig */ "./src/twig/masteries/perception.twig");

__webpack_require__(/*! ./masteries/swiming.twig */ "./src/twig/masteries/swiming.twig");

__webpack_require__(/*! ./masteries/search.twig */ "./src/twig/masteries/search.twig");

__webpack_require__(/*! ./masteries/dodge.twig */ "./src/twig/masteries/dodge.twig");

__webpack_require__(/*! ./masteries/climbing.twig */ "./src/twig/masteries/climbing.twig");

__webpack_require__(/*! ./masteries/horse-riding.twig */ "./src/twig/masteries/horse-riding.twig");

__webpack_require__(/*! ./masteries/discretion.twig */ "./src/twig/masteries/discretion.twig");

__webpack_require__(/*! ./masteries/lock-picking.twig */ "./src/twig/masteries/lock-picking.twig");

__webpack_require__(/*! ./masteries/acrobatics.twig */ "./src/twig/masteries/acrobatics.twig");

__webpack_require__(/*! ./masteries/introduction.twig */ "./src/twig/masteries/introduction.twig");

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"masteries\" data-keywords=\"maîtrises\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h2>Maîtrises</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:ff8612456a2bbe0a1369c5dbb61d264142d1becd235fb38901658e463842753481ac10ae99a8c96d36c730b7b94c6d8d97c1703d5fcd64b516a98123ba75557c:introduction.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div><!-- /.skills -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:4ef7777257e56ef92f38078b1c73bc54c5ecf02a67c4c9623451a2bc067b67b765e953b52793479585fdf21282a3c0324b3d986cebf4f869f5cb0c8e4219b244:acrobatics.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:415fb855de13f0307a441e6c8752ad13ac99f0a91dc50b8cdceabe4c1156c6ad3c4c668a2be1d334be58821f1f9b87aca6131adec10139e1fb04a2385cb72e83:lock-picking.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:5b7b62f6bc474ce9c40237551873c129434cc5ff2ad93f7ee2db86fa8190da1b00c0006f49d0828916f966107c59270b967b984fe10aec9eb5dfe4d865f1be2c:discretion.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:99394bf5f4170b10c13bbdcad51d49f2d1d40d43546ea71eba2541528451cd5a952012e6e0f1596889178341d1ec3bae5305f47ae938af574bf6e7bcb41b7bff:horse-riding.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:daac987daf4878b614104040771baed2b33e874fdc73f190302ed46c5108fea907a622aecf00483f921cb304a27bf346c8ed382ae840ba282dfd14e9244249cc:climbing.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:29eb38a61e3c410507d2a8725a2502d9e8ee3b70e904cd7ee14fba578e7955fc756f27a76a1626c7ed123442904ba18a97b2a1feab0345cbee6cf1a7c6e34aee:dodge.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:06dfd8e39be04e67a711abcf17786433986029ffe2b7256db37047bc29c65c674a37812727d4a935cbeb080c79ecf107ad63be64e2ff7737a8856bcf2b97a628:search.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:79b2ec1da337717cdcb9fe5fb066f1e7a51ea61e0405f639bc98ff3c8e3070d28f5416cdf8d2a2c45bd2fece87b445548c6d5956ca87a6e29d17150d1de03231:swiming.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:460da7cf0e6d3538b29ee03c96e57f68d0cf87d3faa8e8af7078ebbff4c308ac45a8121a26e2ce624a6dd995badf2daafd4e8f410b231a15f30f872becf2b5e4:perception.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:7d09c78987cafeecb0e0314fcb52e153b249f5fc2d05f6aa9c312e9a97f3d070fe46d33c33907dec54fa97e0e438754b9ef3ddb009de69e08e6b0ec5d1e4564c:sleight-of-hand.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:46b3743193625d3a56536668aaf618f55c618fe3085ccda96010800f60013c492001100eda89591695eee03741dd3a52c02a952e63ce269cf90fbd3d6089eded:short-sword.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:01ecb0f4bbe30b563d200de01c478c4da3a79e43650503ba4a81c26796a47fd6cc755238d412de06d820ce6c3abcee8a22f2825a4816a52d7066ab36f282abc4:bastard-sword.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:978e5f27e59197f7b9a395ee3ed622c494c5b8510524f6f710639ab87c9ff9c58222fb2a98c62a9b5a70f4ab4c9e7b4d4d38ceb9474d5c05cba10c32ad3c23bb:long-sword.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d108213ad6f2a6200b39158774e4d9b742a7fe53690f8a4a12c056e1b0d2a6d0d2b78ab767705b37d65c96a86dab6ab5c583629c663c12b28b2bc551b55f58f2:dagger.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:472f4dd50707735e9e5ed33db678865e8e4fab4418d689b59249be50e1e245fd1066b151b1f6bc2ce5a05e4cc5fc93b7ab4ec69c4b23d54cb7799718c7371af1:long-bow.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:bf39118240b2dd298c3a71c19ff651c7c3f7fbc9cdb5c4f333fdafeb74604389049a9acd649cbe59463d4d2fb9ee02278f4d4a4965575d651f698be0d262cdba:short-bow.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:b93deed30c755e448f4a644f62d035ea7c46666e8185a3dae42151718302655e4aeceddf1dcf783ae8106b44451652c3d44b1509b3359ff344f0ad7681a4bea9:rod.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:07f561ab942ee2426971d9d0ffc794abd782289bb97fe9c5f64775bf22936fc117b49008754cb4300105c08b05e5914cbb56180c9ef8682ac0e65065184be313:shield.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:28781720f28f25bf612ca11aae1316bc2371fe1c21b0d6bafc86658145c4134f764edb615c67efc7d3c10e70c6641735635b6935cb365a878865b2571e51fdca:spear.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:e81cb5699424beab5c2dc44d8c76ef1185176b103432f06339f5028c1015d42f4727d206b5c8c5641281154eb73813ce3cef3d518e1c44770dfe8edf7b851e2f:unarmed-combat.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:436db9120b950444868bb6112c1279df629ac3052b064d02633e412c9ea4b81d02576741c95c49ef4badcf1a4d9d511d0bba8dd936a7d079be541b22580fe180:war-hammer.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:43c3f4c4eff925f93e72ad677a88e697d992d84f5d185b6bfc4b40d550f834e483d52213b5078b68a2f6bcfdeb185e9e649031d52f759716d66535f5326d7645:mace.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:c1498d798b992cc180d7db0ec1b842c1c6a97663e5a23e386927bf267e1cd90ea782aa041359fc66b72f9cb0cc8f676743a4aee9a0b74aa99a46581d6a8f5027:light-crossbow.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:b482647d0321e882c4a7fc012231847b542a611ce6a7f0df84cff8430c3ca50102998002dfabe4f068c01ffc938fe778f521171cf6054674516000eaafe492ff:heavy-crossbow.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:c40a0b0d8b09ff45ff1aa0958f3b1fd97f070d78ca69d0be4089cacc969c3f0d9a617efaa08ec3c395d81af01ac0bf202e0bfba062ec1740caac944906f68934:light-armor.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d64092e635646ef3736a63cd80b7f7f36bbe72300bc12c83a1956332a6faf8c7e49b2a6ea1d2ef44036f857516c0d8fa792835cf592de2be12f45cef28ef433c:medium-armor.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d35f880cbc4372e24323e7cb64f14239f12e6e8f112c42036cb37c6a51958a36520b3db3a97daa23bef3b17aff0c5ad4274531d12b9e147e735bdae9c3e54094:heavy-armor.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:a00240838df956c5492adca6fbe90e85ef3b25aebb39f182b80ed011edc6be765219be6fa3c7d5283d071905d0cc5701c47e7d286c190974a84a5ba953ac6c1d:two-weapon-fighting.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:290496b7e8a3c38cb77d3d5126c1f0df8d7fbdc0bfe13ae23c4169e7915a6801e173a4f28dd8c7fc734e1cde0896f60749fb883d2c02f8933f25286952b105d7:masteries.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"masteries\" data-keywords=\"maîtrises\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h2>Maîtrises</h2>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:ff8612456a2bbe0a1369c5dbb61d264142d1becd235fb38901658e463842753481ac10ae99a8c96d36c730b7b94c6d8d97c1703d5fcd64b516a98123ba75557c:introduction.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div><!-- /.skills -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:4ef7777257e56ef92f38078b1c73bc54c5ecf02a67c4c9623451a2bc067b67b765e953b52793479585fdf21282a3c0324b3d986cebf4f869f5cb0c8e4219b244:acrobatics.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:415fb855de13f0307a441e6c8752ad13ac99f0a91dc50b8cdceabe4c1156c6ad3c4c668a2be1d334be58821f1f9b87aca6131adec10139e1fb04a2385cb72e83:lock-picking.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:5b7b62f6bc474ce9c40237551873c129434cc5ff2ad93f7ee2db86fa8190da1b00c0006f49d0828916f966107c59270b967b984fe10aec9eb5dfe4d865f1be2c:discretion.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:99394bf5f4170b10c13bbdcad51d49f2d1d40d43546ea71eba2541528451cd5a952012e6e0f1596889178341d1ec3bae5305f47ae938af574bf6e7bcb41b7bff:horse-riding.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:daac987daf4878b614104040771baed2b33e874fdc73f190302ed46c5108fea907a622aecf00483f921cb304a27bf346c8ed382ae840ba282dfd14e9244249cc:climbing.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:29eb38a61e3c410507d2a8725a2502d9e8ee3b70e904cd7ee14fba578e7955fc756f27a76a1626c7ed123442904ba18a97b2a1feab0345cbee6cf1a7c6e34aee:dodge.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:06dfd8e39be04e67a711abcf17786433986029ffe2b7256db37047bc29c65c674a37812727d4a935cbeb080c79ecf107ad63be64e2ff7737a8856bcf2b97a628:search.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:79b2ec1da337717cdcb9fe5fb066f1e7a51ea61e0405f639bc98ff3c8e3070d28f5416cdf8d2a2c45bd2fece87b445548c6d5956ca87a6e29d17150d1de03231:swiming.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:460da7cf0e6d3538b29ee03c96e57f68d0cf87d3faa8e8af7078ebbff4c308ac45a8121a26e2ce624a6dd995badf2daafd4e8f410b231a15f30f872becf2b5e4:perception.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:7d09c78987cafeecb0e0314fcb52e153b249f5fc2d05f6aa9c312e9a97f3d070fe46d33c33907dec54fa97e0e438754b9ef3ddb009de69e08e6b0ec5d1e4564c:sleight-of-hand.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:46b3743193625d3a56536668aaf618f55c618fe3085ccda96010800f60013c492001100eda89591695eee03741dd3a52c02a952e63ce269cf90fbd3d6089eded:short-sword.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:01ecb0f4bbe30b563d200de01c478c4da3a79e43650503ba4a81c26796a47fd6cc755238d412de06d820ce6c3abcee8a22f2825a4816a52d7066ab36f282abc4:bastard-sword.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:978e5f27e59197f7b9a395ee3ed622c494c5b8510524f6f710639ab87c9ff9c58222fb2a98c62a9b5a70f4ab4c9e7b4d4d38ceb9474d5c05cba10c32ad3c23bb:long-sword.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d108213ad6f2a6200b39158774e4d9b742a7fe53690f8a4a12c056e1b0d2a6d0d2b78ab767705b37d65c96a86dab6ab5c583629c663c12b28b2bc551b55f58f2:dagger.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:472f4dd50707735e9e5ed33db678865e8e4fab4418d689b59249be50e1e245fd1066b151b1f6bc2ce5a05e4cc5fc93b7ab4ec69c4b23d54cb7799718c7371af1:long-bow.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:bf39118240b2dd298c3a71c19ff651c7c3f7fbc9cdb5c4f333fdafeb74604389049a9acd649cbe59463d4d2fb9ee02278f4d4a4965575d651f698be0d262cdba:short-bow.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:b93deed30c755e448f4a644f62d035ea7c46666e8185a3dae42151718302655e4aeceddf1dcf783ae8106b44451652c3d44b1509b3359ff344f0ad7681a4bea9:rod.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:07f561ab942ee2426971d9d0ffc794abd782289bb97fe9c5f64775bf22936fc117b49008754cb4300105c08b05e5914cbb56180c9ef8682ac0e65065184be313:shield.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:28781720f28f25bf612ca11aae1316bc2371fe1c21b0d6bafc86658145c4134f764edb615c67efc7d3c10e70c6641735635b6935cb365a878865b2571e51fdca:spear.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:e81cb5699424beab5c2dc44d8c76ef1185176b103432f06339f5028c1015d42f4727d206b5c8c5641281154eb73813ce3cef3d518e1c44770dfe8edf7b851e2f:unarmed-combat.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:436db9120b950444868bb6112c1279df629ac3052b064d02633e412c9ea4b81d02576741c95c49ef4badcf1a4d9d511d0bba8dd936a7d079be541b22580fe180:war-hammer.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:43c3f4c4eff925f93e72ad677a88e697d992d84f5d185b6bfc4b40d550f834e483d52213b5078b68a2f6bcfdeb185e9e649031d52f759716d66535f5326d7645:mace.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:c1498d798b992cc180d7db0ec1b842c1c6a97663e5a23e386927bf267e1cd90ea782aa041359fc66b72f9cb0cc8f676743a4aee9a0b74aa99a46581d6a8f5027:light-crossbow.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:b482647d0321e882c4a7fc012231847b542a611ce6a7f0df84cff8430c3ca50102998002dfabe4f068c01ffc938fe778f521171cf6054674516000eaafe492ff:heavy-crossbow.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:c40a0b0d8b09ff45ff1aa0958f3b1fd97f070d78ca69d0be4089cacc969c3f0d9a617efaa08ec3c395d81af01ac0bf202e0bfba062ec1740caac944906f68934:light-armor.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d64092e635646ef3736a63cd80b7f7f36bbe72300bc12c83a1956332a6faf8c7e49b2a6ea1d2ef44036f857516c0d8fa792835cf592de2be12f45cef28ef433c:medium-armor.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:d35f880cbc4372e24323e7cb64f14239f12e6e8f112c42036cb37c6a51958a36520b3db3a97daa23bef3b17aff0c5ad4274531d12b9e147e735bdae9c3e54094:heavy-armor.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        "},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:a00240838df956c5492adca6fbe90e85ef3b25aebb39f182b80ed011edc6be765219be6fa3c7d5283d071905d0cc5701c47e7d286c190974a84a5ba953ac6c1d:two-weapon-fighting.twig"}]}},{"type":"raw","value":"\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/acrobatics.twig":
/*!********************************************!*\
  !*** ./src/twig/masteries/acrobatics.twig ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"acrobatic-mastery\" data-keywords=\"acrobatie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Acrobatie</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La maîtrise de l'acrobatie apprécie la capacité à utiliser son corps de\r\n      manière ingénieuse pour s'extirper de situations délicates. Sauter en\r\n      travers d'un ravin, passer sous les jambes d'un adversaire ou courrir en\r\n      terrain difficile sont des exemples de situation où un test d'acrobatie\r\n      est nécéssaire.\r\n    </p>\r\n\r\n    <p>\r\n      La maîtrise de l'acrobatie est complémentaire à la maîtrise de l'esquive\r\n      et permet d'augmenter le nombre d'esquive disponible par round grâce aux\r\n      atouts qui lui sont associés.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:4ef7777257e56ef92f38078b1c73bc54c5ecf02a67c4c9623451a2bc067b67b765e953b52793479585fdf21282a3c0324b3d986cebf4f869f5cb0c8e4219b244:acrobatics.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"acrobatic-mastery\" data-keywords=\"acrobatie\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Acrobatie</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La maîtrise de l'acrobatie apprécie la capacité à utiliser son corps de\r\n      manière ingénieuse pour s'extirper de situations délicates. Sauter en\r\n      travers d'un ravin, passer sous les jambes d'un adversaire ou courrir en\r\n      terrain difficile sont des exemples de situation où un test d'acrobatie\r\n      est nécéssaire.\r\n    </p>\r\n\r\n    <p>\r\n      La maîtrise de l'acrobatie est complémentaire à la maîtrise de l'esquive\r\n      et permet d'augmenter le nombre d'esquive disponible par round grâce aux\r\n      atouts qui lui sont associés.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/bastard-sword.twig":
/*!***********************************************!*\
  !*** ./src/twig/masteries/bastard-sword.twig ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"bastard-sword-mastery\" data-keywords=\"épées bâtardes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Épées bâtardes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:01ecb0f4bbe30b563d200de01c478c4da3a79e43650503ba4a81c26796a47fd6cc755238d412de06d820ce6c3abcee8a22f2825a4816a52d7066ab36f282abc4:bastard-sword.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"bastard-sword-mastery\" data-keywords=\"épées bâtardes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Épées bâtardes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/climbing.twig":
/*!******************************************!*\
  !*** ./src/twig/masteries/climbing.twig ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"climbing-mastery\" data-keywords=\"escalade\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Escalade</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:daac987daf4878b614104040771baed2b33e874fdc73f190302ed46c5108fea907a622aecf00483f921cb304a27bf346c8ed382ae840ba282dfd14e9244249cc:climbing.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"climbing-mastery\" data-keywords=\"escalade\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Escalade</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/dagger.twig":
/*!****************************************!*\
  !*** ./src/twig/masteries/dagger.twig ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"dagger\" data-keywords=\"dagues\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Dagues</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:d108213ad6f2a6200b39158774e4d9b742a7fe53690f8a4a12c056e1b0d2a6d0d2b78ab767705b37d65c96a86dab6ab5c583629c663c12b28b2bc551b55f58f2:dagger.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"dagger\" data-keywords=\"dagues\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Dagues</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/discretion.twig":
/*!********************************************!*\
  !*** ./src/twig/masteries/discretion.twig ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"discretion-mastery\" data-keywords=\"discrétion\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Discrétion</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Le score de discrétion représente la capacité d'un personnage à ne\r\n      pas se faire voir ni entendre. Un jet de discrétion se fait toujours\r\n      en opposition avec la compétence de perception.\r\n    </p>\r\n    <p>\r\n      Les tests opposés de perception ne peuvent être joués que si le\r\n      personnage cherchant à se faire discret est observable d'une\r\n      quelconque manière, aussi, si la vision de l'observateur est\r\n      obstruée ou que son audition est extrêmement mauvaise aucun jet de\r\n      perception ne peut être réalisé.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:5b7b62f6bc474ce9c40237551873c129434cc5ff2ad93f7ee2db86fa8190da1b00c0006f49d0828916f966107c59270b967b984fe10aec9eb5dfe4d865f1be2c:discretion.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"discretion-mastery\" data-keywords=\"discrétion\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Discrétion</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      Le score de discrétion représente la capacité d'un personnage à ne\r\n      pas se faire voir ni entendre. Un jet de discrétion se fait toujours\r\n      en opposition avec la compétence de perception.\r\n    </p>\r\n    <p>\r\n      Les tests opposés de perception ne peuvent être joués que si le\r\n      personnage cherchant à se faire discret est observable d'une\r\n      quelconque manière, aussi, si la vision de l'observateur est\r\n      obstruée ou que son audition est extrêmement mauvaise aucun jet de\r\n      perception ne peut être réalisé.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/dodge.twig":
/*!***************************************!*\
  !*** ./src/twig/masteries/dodge.twig ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"\r\n<div class=\"topic\" id=\"dodge\" data-keywords=\"esquive\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Esquive</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La maîtrise de l'esquive apprécie la capacité d'un personnage à se mouvoir\r\n      dans l'objectif d'échapper à une menace. L'esquive est une maîtrise\r\n      importante pour les combats car elle permet d'éviter un coup par tour tout\r\n      en se repositionnant. Elle est aussi la seule compétence permettant\r\n      d'échapper à certains pièges ou sortilèges.\r\n    </p>\r\n\r\n    <p>\r\n      L'esquive se joue toujours en opposition avec le degré de difficulté de la\r\n      menace. Esquiver une attaque influera les chances de succès de l'attaquant\r\n      vis-à-vis de sa propre maîtrise de son arme. Esquiver un sort ou un piège\r\n      influera ses chances de succès vis-à-vis de son propre degré de\r\n      difficulté. Le succès d'une esquive peut être mitigé dans certaines\r\n      situations.\r\n    </p>\r\n\r\n    <!--\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">Atouts</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><strong>Esquive totale</strong></td>\r\n          <td>Esquive: 4+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage peut toujours choisir de jouer en dernier et de gagner une\r\n            esquive supplémentaire lors du round en cours en échange d'une action\r\n            de mouvement.\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><strong>Esquive en chaîne I</strong></td>\r\n          <td>Esquive: 8+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage gagne une esquive supplémentaire par round, chaque esquive\r\n            supplémentaire jouée durant un round se voit attribuée un malus de 10%\r\n            cumulatif.\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><strong>Esquive en chaîne II</strong></td>\r\n          <td>Esquive: 12+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage gagne une esquive supplémentaire par round, chaque esquive\r\n            supplémentaire jouée durant un round se voit attribuée un malus de 10%\r\n            cumulatif.\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><strong>Esquive instinctive</strong></td>\r\n          <td>Esquive: 14+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage peut tenter d'esquiver les flèches avec un malus de 25%\r\n            sur son jet d'esquive.\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><strong>Danse des vents</strong></td>\r\n          <td>Esquive: 16+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage gagne une esquive supplémentaire par round. Avec cet atout\r\n            le malus attribué à un enchaînement d'esquive durant un round est réduit\r\n            à 5% cumulatif.\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    -->\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:29eb38a61e3c410507d2a8725a2502d9e8ee3b70e904cd7ee14fba578e7955fc756f27a76a1626c7ed123442904ba18a97b2a1feab0345cbee6cf1a7c6e34aee:dodge.twig","data":[{"type":"raw","value":"\r\n<div class=\"topic\" id=\"dodge\" data-keywords=\"esquive\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Esquive</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La maîtrise de l'esquive apprécie la capacité d'un personnage à se mouvoir\r\n      dans l'objectif d'échapper à une menace. L'esquive est une maîtrise\r\n      importante pour les combats car elle permet d'éviter un coup par tour tout\r\n      en se repositionnant. Elle est aussi la seule compétence permettant\r\n      d'échapper à certains pièges ou sortilèges.\r\n    </p>\r\n\r\n    <p>\r\n      L'esquive se joue toujours en opposition avec le degré de difficulté de la\r\n      menace. Esquiver une attaque influera les chances de succès de l'attaquant\r\n      vis-à-vis de sa propre maîtrise de son arme. Esquiver un sort ou un piège\r\n      influera ses chances de succès vis-à-vis de son propre degré de\r\n      difficulté. Le succès d'une esquive peut être mitigé dans certaines\r\n      situations.\r\n    </p>\r\n\r\n    <!--\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"2\">Atouts</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><strong>Esquive totale</strong></td>\r\n          <td>Esquive: 4+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage peut toujours choisir de jouer en dernier et de gagner une\r\n            esquive supplémentaire lors du round en cours en échange d'une action\r\n            de mouvement.\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><strong>Esquive en chaîne I</strong></td>\r\n          <td>Esquive: 8+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage gagne une esquive supplémentaire par round, chaque esquive\r\n            supplémentaire jouée durant un round se voit attribuée un malus de 10%\r\n            cumulatif.\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><strong>Esquive en chaîne II</strong></td>\r\n          <td>Esquive: 12+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage gagne une esquive supplémentaire par round, chaque esquive\r\n            supplémentaire jouée durant un round se voit attribuée un malus de 10%\r\n            cumulatif.\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><strong>Esquive instinctive</strong></td>\r\n          <td>Esquive: 14+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage peut tenter d'esquiver les flèches avec un malus de 25%\r\n            sur son jet d'esquive.\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><strong>Danse des vents</strong></td>\r\n          <td>Esquive: 16+</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Le personnage gagne une esquive supplémentaire par round. Avec cet atout\r\n            le malus attribué à un enchaînement d'esquive durant un round est réduit\r\n            à 5% cumulatif.\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    -->\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/heavy-armor.twig":
/*!*********************************************!*\
  !*** ./src/twig/masteries/heavy-armor.twig ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"heavy-armor\" data-keywords=\"armures lourdes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Armures lourdes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:d35f880cbc4372e24323e7cb64f14239f12e6e8f112c42036cb37c6a51958a36520b3db3a97daa23bef3b17aff0c5ad4274531d12b9e147e735bdae9c3e54094:heavy-armor.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"heavy-armor\" data-keywords=\"armures lourdes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Armures lourdes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/heavy-crossbow.twig":
/*!************************************************!*\
  !*** ./src/twig/masteries/heavy-crossbow.twig ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"heavy-crossbow\" data-keywords=\"arbalètes lourdes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Arbalètes lourdes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:b482647d0321e882c4a7fc012231847b542a611ce6a7f0df84cff8430c3ca50102998002dfabe4f068c01ffc938fe778f521171cf6054674516000eaafe492ff:heavy-crossbow.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"heavy-crossbow\" data-keywords=\"arbalètes lourdes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Arbalètes lourdes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/horse-riding.twig":
/*!**********************************************!*\
  !*** ./src/twig/masteries/horse-riding.twig ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"horse-riding\" data-keywords=\"équitation\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Équitation</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:99394bf5f4170b10c13bbdcad51d49f2d1d40d43546ea71eba2541528451cd5a952012e6e0f1596889178341d1ec3bae5305f47ae938af574bf6e7bcb41b7bff:horse-riding.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"horse-riding\" data-keywords=\"équitation\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Équitation</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/introduction.twig":
/*!**********************************************!*\
  !*** ./src/twig/masteries/introduction.twig ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<p>\r\n  Les maîtrises sont des champs disciplinaires appréciés sur une échelle de 20\r\n  points et divisés en deux modificateurs : un modificateur inné et un\r\n  modificateur acquis. Contrairement aux caractéristiques, une maîtrise peut\r\n  être nulle.\r\n</p>\r\n\r\n<p>\r\n  Le <strong>modificateur d'acquis</strong> dépend du nombre de point\r\n  d'expérience investit dans la maîtrise et il ne peut jamais dépasser 20 points\r\n  au total. Le coût d'un point d'acquis dépend du nombre de point déjà\r\n  effectif : les 5 premiers coûtent un 1 point d'expérience, les 5 suivants 2\r\n  points d'expérience, les 5 encore suivant 3 points d'expérience et les 5\r\n  derniers 4 points d'expérience.\r\n</p>\r\n\r\n</p>\r\n  Le <strong>modificateur d'instinct</strong> ne peut pas être augmenté et\r\n  dépend des caractéristiques, il ne peut dépasser 5 points mais peut être\r\n  négatif. Il est calculé en utilisant jusqu'à deux modificateur de\r\n  caractéristique. Un modificateur de caractéristique est égal à la valeur de la\r\n  caractéristique qui lui est associée, divisée par 2, réduite à l'entier\r\n  inférieur, le tout retranché de 5 points. Si une maîtrise est affiliée à une\r\n  unique caractéristique le personnage profite d'un bonus ou subit un malus\r\n  instinctif de 5 points maximum. Dans le cas où la maîtrise est affiliée à deux\r\n  caractéristiques la caractéristique dite majeure peut impacter le personnage\r\n  jusqu'à 3 points maximum et la caractéristique secondaire peut impacter le\r\n  personnage jusqu'à 2 points maximum.\r\n</p>\r\n\r\n<p>\r\n  Si la somme des modificateurs inné et acquis est supérieure à 20 le niveau\r\n  de maitrise est tout de même considéré comme égale à 20. Une maîtrise de\r\n  niveau 20 prends tout de même en compte les autres modificateurs qui peuvent\r\n  lui être appliqués.\r\n</p>\r\n"}],
    template = twig({"id":"$resolved:ff8612456a2bbe0a1369c5dbb61d264142d1becd235fb38901658e463842753481ac10ae99a8c96d36c730b7b94c6d8d97c1703d5fcd64b516a98123ba75557c:introduction.twig","data":[{"type":"raw","value":"<p>\r\n  Les maîtrises sont des champs disciplinaires appréciés sur une échelle de 20\r\n  points et divisés en deux modificateurs : un modificateur inné et un\r\n  modificateur acquis. Contrairement aux caractéristiques, une maîtrise peut\r\n  être nulle.\r\n</p>\r\n\r\n<p>\r\n  Le <strong>modificateur d'acquis</strong> dépend du nombre de point\r\n  d'expérience investit dans la maîtrise et il ne peut jamais dépasser 20 points\r\n  au total. Le coût d'un point d'acquis dépend du nombre de point déjà\r\n  effectif : les 5 premiers coûtent un 1 point d'expérience, les 5 suivants 2\r\n  points d'expérience, les 5 encore suivant 3 points d'expérience et les 5\r\n  derniers 4 points d'expérience.\r\n</p>\r\n\r\n</p>\r\n  Le <strong>modificateur d'instinct</strong> ne peut pas être augmenté et\r\n  dépend des caractéristiques, il ne peut dépasser 5 points mais peut être\r\n  négatif. Il est calculé en utilisant jusqu'à deux modificateur de\r\n  caractéristique. Un modificateur de caractéristique est égal à la valeur de la\r\n  caractéristique qui lui est associée, divisée par 2, réduite à l'entier\r\n  inférieur, le tout retranché de 5 points. Si une maîtrise est affiliée à une\r\n  unique caractéristique le personnage profite d'un bonus ou subit un malus\r\n  instinctif de 5 points maximum. Dans le cas où la maîtrise est affiliée à deux\r\n  caractéristiques la caractéristique dite majeure peut impacter le personnage\r\n  jusqu'à 3 points maximum et la caractéristique secondaire peut impacter le\r\n  personnage jusqu'à 2 points maximum.\r\n</p>\r\n\r\n<p>\r\n  Si la somme des modificateurs inné et acquis est supérieure à 20 le niveau\r\n  de maitrise est tout de même considéré comme égale à 20. Une maîtrise de\r\n  niveau 20 prends tout de même en compte les autres modificateurs qui peuvent\r\n  lui être appliqués.\r\n</p>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/light-armor.twig":
/*!*********************************************!*\
  !*** ./src/twig/masteries/light-armor.twig ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"light-armor-mastery\" data-keywords=\"armures légères\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Armures légères</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:c40a0b0d8b09ff45ff1aa0958f3b1fd97f070d78ca69d0be4089cacc969c3f0d9a617efaa08ec3c395d81af01ac0bf202e0bfba062ec1740caac944906f68934:light-armor.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"light-armor-mastery\" data-keywords=\"armures légères\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Armures légères</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/light-crossbow.twig":
/*!************************************************!*\
  !*** ./src/twig/masteries/light-crossbow.twig ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"light-crossbow-mastery\" data-keywords=\"arbalètes de poing\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Arbalètes de poing</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:c1498d798b992cc180d7db0ec1b842c1c6a97663e5a23e386927bf267e1cd90ea782aa041359fc66b72f9cb0cc8f676743a4aee9a0b74aa99a46581d6a8f5027:light-crossbow.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"light-crossbow-mastery\" data-keywords=\"arbalètes de poing\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Arbalètes de poing</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/lock-picking.twig":
/*!**********************************************!*\
  !*** ./src/twig/masteries/lock-picking.twig ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"lock-picking-mastery\" data-keywords=\"crochetage\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Crochetage</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/luck.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La compétence crochetage évalue la capacité d'un personnage à\r\n      se jouer de toutes sortes de serrures et de mécanismes. Tenter\r\n      d'ouvrir une porte ou un coffre sans sa clef, de désactiver une\r\n      éventuelle alarme ou désamorcer un piège sont des exemples de\r\n      situations ou un test de crochetage est nécéssaire.\r\n    </p>\r\n    <p>\r\n      Une tentative de crochetage se joue toujours en opposition avec le\r\n      niveau de difficulté du mécanisme à forcer.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:415fb855de13f0307a441e6c8752ad13ac99f0a91dc50b8cdceabe4c1156c6ad3c4c668a2be1d334be58821f1f9b87aca6131adec10139e1fb04a2385cb72e83:lock-picking.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"lock-picking-mastery\" data-keywords=\"crochetage\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Crochetage</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/luck.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La compétence crochetage évalue la capacité d'un personnage à\r\n      se jouer de toutes sortes de serrures et de mécanismes. Tenter\r\n      d'ouvrir une porte ou un coffre sans sa clef, de désactiver une\r\n      éventuelle alarme ou désamorcer un piège sont des exemples de\r\n      situations ou un test de crochetage est nécéssaire.\r\n    </p>\r\n    <p>\r\n      Une tentative de crochetage se joue toujours en opposition avec le\r\n      niveau de difficulté du mécanisme à forcer.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/long-bow.twig":
/*!******************************************!*\
  !*** ./src/twig/masteries/long-bow.twig ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"long-bow-mastery\" data-keywords=\"arcs longs\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Arcs longs</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:472f4dd50707735e9e5ed33db678865e8e4fab4418d689b59249be50e1e245fd1066b151b1f6bc2ce5a05e4cc5fc93b7ab4ec69c4b23d54cb7799718c7371af1:long-bow.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"long-bow-mastery\" data-keywords=\"arcs longs\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Arcs longs</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/long-sword.twig":
/*!********************************************!*\
  !*** ./src/twig/masteries/long-sword.twig ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"long-sword-mastery\" data-keywords=\"épées longues\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Épées longues</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:978e5f27e59197f7b9a395ee3ed622c494c5b8510524f6f710639ab87c9ff9c58222fb2a98c62a9b5a70f4ab4c9e7b4d4d38ceb9474d5c05cba10c32ad3c23bb:long-sword.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"long-sword-mastery\" data-keywords=\"épées longues\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Épées longues</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/mace.twig":
/*!**************************************!*\
  !*** ./src/twig/masteries/mace.twig ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"mace-mastery\" data-keywords=\"masses d'arme\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Masses d'arme</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:43c3f4c4eff925f93e72ad677a88e697d992d84f5d185b6bfc4b40d550f834e483d52213b5078b68a2f6bcfdeb185e9e649031d52f759716d66535f5326d7645:mace.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"mace-mastery\" data-keywords=\"masses d'arme\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Masses d'arme</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/medium-armor.twig":
/*!**********************************************!*\
  !*** ./src/twig/masteries/medium-armor.twig ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"medium-armor-mastery\" data-keywords=\"armures intermédiaires\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Armures intermédiaires</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:d64092e635646ef3736a63cd80b7f7f36bbe72300bc12c83a1956332a6faf8c7e49b2a6ea1d2ef44036f857516c0d8fa792835cf592de2be12f45cef28ef433c:medium-armor.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"medium-armor-mastery\" data-keywords=\"armures intermédiaires\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Armures intermédiaires</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/perception.twig":
/*!********************************************!*\
  !*** ./src/twig/masteries/perception.twig ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"perception\" data-keywords=\"perception\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Perception</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La perception représente la capacité d'un personnage à utiliser ses\r\n      sens pour analyser son environnement. Tenter d'écouter des\r\n      conversations lointaines, de trouver un autre personnage cherchant\r\n      à se faire discret ou chercher des mécanismes cachés dans le sol et\r\n      les murs sont des actions nécéssitant un jet de perception.\r\n    </p>\r\n    \r\n    <p>\r\n      Si la perception se fait à l'encontre d'un autre personnage elle se\r\n      joue contre la compétence qu'il utilise au moment où la perception\r\n      est joué. Un test de perception contre discrétion est un cas\r\n      d'école. Dans le cas où la perception se joue contre l'environnement\r\n      elle se fera contre son degré de difficulté.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:460da7cf0e6d3538b29ee03c96e57f68d0cf87d3faa8e8af7078ebbff4c308ac45a8121a26e2ce624a6dd995badf2daafd4e8f410b231a15f30f872becf2b5e4:perception.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"perception\" data-keywords=\"perception\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Perception</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La perception représente la capacité d'un personnage à utiliser ses\r\n      sens pour analyser son environnement. Tenter d'écouter des\r\n      conversations lointaines, de trouver un autre personnage cherchant\r\n      à se faire discret ou chercher des mécanismes cachés dans le sol et\r\n      les murs sont des actions nécéssitant un jet de perception.\r\n    </p>\r\n    \r\n    <p>\r\n      Si la perception se fait à l'encontre d'un autre personnage elle se\r\n      joue contre la compétence qu'il utilise au moment où la perception\r\n      est joué. Un test de perception contre discrétion est un cas\r\n      d'école. Dans le cas où la perception se joue contre l'environnement\r\n      elle se fera contre son degré de difficulté.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/rod.twig":
/*!*************************************!*\
  !*** ./src/twig/masteries/rod.twig ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"rod-mastery\" data-keywords=\"bâton\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Bâton</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:b93deed30c755e448f4a644f62d035ea7c46666e8185a3dae42151718302655e4aeceddf1dcf783ae8106b44451652c3d44b1509b3359ff344f0ad7681a4bea9:rod.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"rod-mastery\" data-keywords=\"bâton\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Bâton</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/search.twig":
/*!****************************************!*\
  !*** ./src/twig/masteries/search.twig ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"search\" data-keywords=\"fouille\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Fouille</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/luck.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La compétence fouille évalue la capacité d'un personnage à trouver\r\n      ce qu'il cherche dans un environnement étranger. Un personnage avec\r\n      une bonne compétence fouille est donc capable d'estimer précisément\r\n      si un document est présent dans une pièce qu'il vient de forcer, de\r\n      délester un cadavre de ses biens de valeur en un temps record ou de\r\n      rechercher d'éventuels passages secrets et pièges.\r\n    </p>\r\n\r\n    <p>\r\n      La compétence fouille se joue toujours en opposition du degré de\r\n      difficulté de l'objet ou du sujet recherché. Si le sujet de la\r\n      fouille à été intentionellement dissimulé la fouille se joue contre\r\n      le degré de succès de la tentative de dissimulation. Quand aux\r\n      éléments en évidence ils doivnet toujours être portées à la\r\n      connaissance du joueur.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:06dfd8e39be04e67a711abcf17786433986029ffe2b7256db37047bc29c65c674a37812727d4a935cbeb080c79ecf107ad63be64e2ff7737a8856bcf2b97a628:search.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"search\" data-keywords=\"fouille\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Fouille</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/luck.svg\" width=\"100\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La compétence fouille évalue la capacité d'un personnage à trouver\r\n      ce qu'il cherche dans un environnement étranger. Un personnage avec\r\n      une bonne compétence fouille est donc capable d'estimer précisément\r\n      si un document est présent dans une pièce qu'il vient de forcer, de\r\n      délester un cadavre de ses biens de valeur en un temps record ou de\r\n      rechercher d'éventuels passages secrets et pièges.\r\n    </p>\r\n\r\n    <p>\r\n      La compétence fouille se joue toujours en opposition du degré de\r\n      difficulté de l'objet ou du sujet recherché. Si le sujet de la\r\n      fouille à été intentionellement dissimulé la fouille se joue contre\r\n      le degré de succès de la tentative de dissimulation. Quand aux\r\n      éléments en évidence ils doivnet toujours être portées à la\r\n      connaissance du joueur.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/shield.twig":
/*!****************************************!*\
  !*** ./src/twig/masteries/shield.twig ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"shield-mastery\" data-keywords=\"boucliers\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Boucliers</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:07f561ab942ee2426971d9d0ffc794abd782289bb97fe9c5f64775bf22936fc117b49008754cb4300105c08b05e5914cbb56180c9ef8682ac0e65065184be313:shield.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"shield-mastery\" data-keywords=\"boucliers\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Boucliers</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/short-bow.twig":
/*!*******************************************!*\
  !*** ./src/twig/masteries/short-bow.twig ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"short-bow-mastery\" data-keywords=\"arcs courts\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Arcs courts</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:bf39118240b2dd298c3a71c19ff651c7c3f7fbc9cdb5c4f333fdafeb74604389049a9acd649cbe59463d4d2fb9ee02278f4d4a4965575d651f698be0d262cdba:short-bow.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"short-bow-mastery\" data-keywords=\"arcs courts\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Arcs courts</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/short-sword.twig":
/*!*********************************************!*\
  !*** ./src/twig/masteries/short-sword.twig ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"short-sword-mastery\" data-keywords=\"épées courtes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Épées courtes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:46b3743193625d3a56536668aaf618f55c618fe3085ccda96010800f60013c492001100eda89591695eee03741dd3a52c02a952e63ce269cf90fbd3d6089eded:short-sword.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"short-sword-mastery\" data-keywords=\"épées courtes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Épées courtes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/sleight-of-hand.twig":
/*!*************************************************!*\
  !*** ./src/twig/masteries/sleight-of-hand.twig ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"sleight-of-hand\" data-keywords=\"vol à la tire\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Vol à la tire</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/luck.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La compétence vol à la tire évalue la capacité d'un personnage\r\n      à subtiliser les biens d'un portées par un autre sans éveiller son\r\n      attention. Une tentative de vol à la tire s'effectue toujours en\r\n      opposition avec la compétence de perception de la victime. Tout\r\n      comme la compétence discrétion, un test de vol à la tire n'a lieu\r\n      que si la victime est capable de percevoir le voleur d'une\r\n      quelconque manière.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:7d09c78987cafeecb0e0314fcb52e153b249f5fc2d05f6aa9c312e9a97f3d070fe46d33c33907dec54fa97e0e438754b9ef3ddb009de69e08e6b0ec5d1e4564c:sleight-of-hand.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"sleight-of-hand\" data-keywords=\"vol à la tire\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Vol à la tire</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/luck.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <p>\r\n      La compétence vol à la tire évalue la capacité d'un personnage\r\n      à subtiliser les biens d'un portées par un autre sans éveiller son\r\n      attention. Une tentative de vol à la tire s'effectue toujours en\r\n      opposition avec la compétence de perception de la victime. Tout\r\n      comme la compétence discrétion, un test de vol à la tire n'a lieu\r\n      que si la victime est capable de percevoir le voleur d'une\r\n      quelconque manière.\r\n    </p>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/spear.twig":
/*!***************************************!*\
  !*** ./src/twig/masteries/spear.twig ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"spear-mastery\" data-keywords=\"lances\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Lances</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:28781720f28f25bf612ca11aae1316bc2371fe1c21b0d6bafc86658145c4134f764edb615c67efc7d3c10e70c6641735635b6935cb365a878865b2571e51fdca:spear.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"spear-mastery\" data-keywords=\"lances\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Lances</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/swiming.twig":
/*!*****************************************!*\
  !*** ./src/twig/masteries/swiming.twig ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"swiming\" data-keywords=\"natation\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Natation</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/constitution.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:79b2ec1da337717cdcb9fe5fb066f1e7a51ea61e0405f639bc98ff3c8e3070d28f5416cdf8d2a2c45bd2fece87b445548c6d5956ca87a6e29d17150d1de03231:swiming.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"swiming\" data-keywords=\"natation\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Natation</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\" /></td>\r\n          <td><img src=\"./images/characteristics/constitution.svg\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/two-weapon-fighting.twig":
/*!*****************************************************!*\
  !*** ./src/twig/masteries/two-weapon-fighting.twig ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"two-weapon-fighting-mastery\" data-keywords=\"combat à deux armes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Combat à deux armes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:a00240838df956c5492adca6fbe90e85ef3b25aebb39f182b80ed011edc6be765219be6fa3c7d5283d071905d0cc5701c47e7d286c190974a84a5ba953ac6c1d:two-weapon-fighting.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"two-weapon-fighting-mastery\" data-keywords=\"combat à deux armes\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Combat à deux armes</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/unarmed-combat.twig":
/*!************************************************!*\
  !*** ./src/twig/masteries/unarmed-combat.twig ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"unarmed-combat-mastery\" data-keywords=\"combat à main nues\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Combat à main nues</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:e81cb5699424beab5c2dc44d8c76ef1185176b103432f06339f5028c1015d42f4727d206b5c8c5641281154eb73813ce3cef3d518e1c44770dfe8edf7b851e2f:unarmed-combat.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"unarmed-combat-mastery\" data-keywords=\"combat à main nues\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Combat à main nues</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n          <th>Mineure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/dexterity.svg\"/></td>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/masteries/war-hammer.twig":
/*!********************************************!*\
  !*** ./src/twig/masteries/war-hammer.twig ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"war-hammer-mastery\" data-keywords=\"marteaux de guerre\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Marteaux de guerre</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:436db9120b950444868bb6112c1279df629ac3052b064d02633e412c9ea4b81d02576741c95c49ef4badcf1a4d9d511d0bba8dd936a7d079be541b22580fe180:war-hammer.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"war-hammer-mastery\" data-keywords=\"marteaux de guerre\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h3>Marteaux de guerre</h3>\r\n  </div>\r\n  <div class=\"topic-content\">\r\n    <table class=\"instinct-modifier\">\r\n      <thead>\r\n        <tr>\r\n          <th>Majeure</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><img src=\"./images/characteristics/strength.svg\"/></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/twig/summary.twig":
/*!*******************************!*\
  !*** ./src/twig/summary.twig ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<div class=\"topic\" id=\"summary\" data-keywords=\"sommaire\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h2>Sommaire</h2>\r\n  </div>\r\n  <div class=\"topic-content summary summary-main summary-two-columns\">\r\n\r\n  </div>\r\n</div>\r\n"}],
    template = twig({"id":"$resolved:795c1bd1214c6593a8de3d54786af3d1d7079e2dafb5e253a66bd856918bb439c9727a5b3228d6a44dee3754526dcb92f8e8ce05c8329ab7a4a28af75134bbf7:summary.twig","data":[{"type":"raw","value":"<div class=\"topic\" id=\"summary\" data-keywords=\"sommaire\">\r\n  <div class=\"topic-heading text-center\">\r\n    <h2>Sommaire</h2>\r\n  </div>\r\n  <div class=\"topic-content summary summary-main summary-two-columns\">\r\n\r\n  </div>\r\n</div>\r\n"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/index.ts ./src/scss/app.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\development\rpg\ruleset\src\js\index.ts */"./src/js/index.ts");
module.exports = __webpack_require__(/*! D:\development\rpg\ruleset\src\scss\app.scss */"./src/scss/app.scss");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });