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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".toaster-error-message {\n    display: block;\n    background-color:rgb(200, 71, 71);\n    color: black;\n}\n\n.toaster-error-message .error-close-btn{\n    float: right;\n    margin-right: 2vw;\n    margin-top: .5vh;\n    background-color: transparent;\n    font-weight: bold;\n}\n\n.toaster-error-message .error-msg-text {\n    background-color: transparent;\n    width: 80vw;\n    color: black;\n}\n.invisible {\n    display: none\n}\n\n.main-container{\n    width: 44vw;\n    height: 95vh;\n    margin: auto;\n    border: 1.5px solid black;\n}\n\n.main-container .search-container{\n    border-bottom: 1px solid;\n    height: 10%;\n    margin-top: 4%;\n    padding-left: 2vw;\n}\n\n.main-container .search-container .search-input-box,.search-message-box{\n    border: 2px outset #acc8d5;\n    padding-left: 1vw;\n}\n\n.main-container .search-container .search-input-box{\n    width : 15vw; \n    height: 4vh;\n    padding-left: 1vw;\n}\n\n.main-container .search-container .search-input-box::-webkit-input-placeholder{\n   font-style: italic;\n}\n\n.main-container .search-container .search-message-box{\n    width : 25vw;\n    height: 2.5vh;\n    padding-left: 1vw;\n    margin-top: 3px;\n    background-color: rgb(236, 30, 30); \n    padding-top:2px;\n    border-radius: 3vw;\n}\n\n.main-container .search-container .search-button {\n    text-align: center;\n    height: 4vh;\n    width : 8vw;\n    margin-left: 1vw;\n    border: none;\n    background-image: linear-gradient(to right, rgb(104, 155, 162) , rgb(53, 205, 225));\n    outline: none;\n    box-shadow: 0 6px rgb(153, 178, 182);\n    border-radius: 3vw;\n\n}\n\n.main-container .search-container .search-button:hover {\n    background-image: linear-gradient(to right, rgb(84, 196, 211) , rgb(33, 222, 247));\n    cursor: pointer;\n}\n\n.main-container .search-container .search-button:active {\n  background-image: linear-gradient(to right, rgb(104, 155, 162) , rgb(53, 205, 225));\n  box-shadow: 0 2px rgb(153, 178, 182);\n  transform: translateY(4px);\n}\n\n.main-container .search-result {\n\n}\n.main-container .search-result .search-summary {\n    height : 4vh;\n    font-family: sans-serif;\n    font-size: 13px;\n    padding-left: 10px;\n}\n\n.main-container .search-result .search-summary .summary-total-div {\n    float: left;\n    margin-left: .2vh;\n    margin-top: 14px;\n}\n.main-container .search-result .search-summary .summary-total-div .total-summary-box {\n    color : black;\n    border: none;\n    text-align: center;\n    vertical-align: bottom;\n    height: 5vh;\n}\n\n.main-container .search-result .search-summary .summary-pagination-div{\n    float: right;\n    margin-right:20px;\n    display: grid;\n    grid-template-columns: auto auto auto;\n    margin-top:14px;\n}\n\n.main-container .search-result .search-summary .summary-pagination-div .pagination-left-btn,.pagination-right-btn {\n    border: none;\n    outline: none;\n}\n\n.main-container .search-result .search-summary .summary-pagination-div .pagination-left-btn:active,.pagination-right-btn:active {\n    transform: translateY(4px);\n    border: none;\n}\n\n.main-container .search-result .search-summary .summary-pagination-div .pagination-text {\n    border: none;\n    text-align: center;\n    min-width: 4vw;\n}\n\n.summary-item-details{\n    clear:both;\n   display : grid;\n   grid-template-rows: auto auto auto auto auto;\n   margin-top : 10px;\n   grid-row-gap : 10px;\n   padding-bottom : 10px;\n}\n\n.item-class {\n    height : 14vh;\n    font : 1vw;\n    display: grid;\n    grid-template-columns: 2fr 4fr;\n}\n\n.image-div {\n}\n\n.image-div .image{\n    margin: 5px;\n    border: 1px solid;\n    width: 12vw;\n    height: 13vh;\n}\n\n.item-metadata-div{\n}\n\n.item-metadata-div .metadata-display-name {\n    font-size: 1.6em;\n}\n\n.item-metadata-div .metadata-game-name {\n    display: block;\n    margin-top : 3px;\n    font-size: 1em;\n}\n\n.item-metadata-div .metadata-description-textarea {\n    display:block;\n    margin-top : 3px;\n    width : 27vw;\n    border: none;\n\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Controllers/main-controller.js":
/*!********************************************!*\
  !*** ./src/Controllers/main-controller.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Constants */ "./src/Services/Constants.js");
/* harmony import */ var _search_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-controller */ "./src/Controllers/search-controller.js");
/* harmony import */ var _Services_Stream_API_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Stream-API-Service */ "./src/Services/Stream-API-Service.js");
/* harmony import */ var _summary_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary-controller */ "./src/Controllers/summary-controller.js");
/* harmony import */ var _Utils_ValidationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/ValidationUtils */ "./src/Utils/ValidationUtils.js");
/* harmony import */ var _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/HtmlUtils */ "./src/Utils/HtmlUtils.js");
/**
 * File/Module which acts  as controller for the whole of the App.
 * 
 * This module is responsible for initializing whole of the app,
 * Especially does the following
 * registering the eventHandlers to DOM elements.
 * delegates actions to other element controllers
 * number of elements that can fit depending on screen-size
 */






const MAIN_ELEMENT_ID = "#ParentDiv";
const ERR_MSG_BTN = "#close-error-msg-button";
const ERR_MSG_TEXT_AREA = "#error-msg-id";
const ERR_MSG_TOASTER = "#error-toaster";
/**
 * The main init function, which calls init of all subcomponent controllers.
 */

function init() {
  console.log(`searching  for ${_Services_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].MAIN_ELEMENT_ID}`);
  let parentElement = document.querySelector(MAIN_ELEMENT_ID);
  let errorMsgButton = document.querySelector(ERR_MSG_BTN);
  _search_controller__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  _search_controller__WEBPACK_IMPORTED_MODULE_1__["default"].registerSearchCallBack(searchTriggerHandler);
  _summary_controller__WEBPACK_IMPORTED_MODULE_3__["default"].init();
  _Services_Stream_API_Service__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  errorMsgButton.addEventListener('click', () => {
    _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].hideElement(ERR_MSG_TOASTER);
  });
}
/**
 * Handler passed on to searchController, will be called whenever searchButton is pressed.
 * @param {*} queryString 
 */


function searchTriggerHandler(queryString) {
  _Services_Stream_API_Service__WEBPACK_IMPORTED_MODULE_2__["default"].fetchStreamDetails(queryString).then(response => {
    _summary_controller__WEBPACK_IMPORTED_MODULE_3__["default"].update(queryString, response);
    console.log();
  }, function errorFunction(error) {
    console.log("Error : " + error);
    setErrorMessage(error.msg);
  });
}
/**
 * setErrorMessage used by this module as well as call back
 * whenever error message needs to be updates.
 * @param {error message to be displayed} errMsg 
 */


function setErrorMessage(errMsg) {
  let errMsgToaster = document.querySelector(ERR_MSG_TEXT_AREA);
  errMsgToaster.value = errMsg;
  _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].showElement(ERR_MSG_TOASTER);
}
/**
 * PENDING , resize is not implemented in this version 
 */


function resize() {
  const SEARCH_INPUTBOX_ID = "#SearchInputBox";
  let searchInputBox = document.querySelector(SEARCH_INPUTBOX_ID);

  if (_Utils_ValidationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].validateQueryString(searchInputBox.value)) {//searchTriggerHandler(searchInputBox.value);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init,
  resize
});

/***/ }),

/***/ "./src/Controllers/search-controller.js":
/*!**********************************************!*\
  !*** ./src/Controllers/search-controller.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_ValidationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/ValidationUtils */ "./src/Utils/ValidationUtils.js");
/* harmony import */ var _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/HtmlUtils */ "./src/Utils/HtmlUtils.js");
/* harmony import */ var _Utils_CommonUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/CommonUtils */ "./src/Utils/CommonUtils.js");
/**
 * Module for handling search related behavior
 * For example :
 * Parsing the search string, 
 * Validation of search String etc.
 */



const SEARCH_INPUTBOX_ID = "#SearchInputBox";
const SEARCH_BUTTON_ID = "#SearchButton";
const SEARCH_ERR_MSG_INPUT = "#SearchValidBox";
let searchActionListeners = [];
/**
 * input change handler on search box, this validates the input 
 * when key pressed on the 
 * 
 * @param {*} event 
 */

let searchInputHandler = function searchInputHandler(event) {
  if (event.type == 'keyup') {
    let inputBox = event.target;
    let {
      valid,
      errMsg
    } = _Utils_ValidationUtils__WEBPACK_IMPORTED_MODULE_0__["default"].validateQueryString(inputBox.value);

    if (valid) {
      _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_1__["default"].hideElement(SEARCH_ERR_MSG_INPUT);
      _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_1__["default"].enableButton(SEARCH_BUTTON_ID);
    } else {
      showErrorMsg(errMsg);
    }
  } else {}
};

let showErrorMsg = function (errMsg) {
  let searchValidBox = document.querySelector(SEARCH_ERR_MSG_INPUT);
  _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_1__["default"].showElement(SEARCH_ERR_MSG_INPUT);
  _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_1__["default"].disableButton(SEARCH_BUTTON_ID);
  searchValidBox.value = errMsg;
};

let searchButtonHandler = function searchButtonHandler(event) {
  let searchInputBox = document.querySelector(SEARCH_INPUTBOX_ID);
  searchActionListeners.forEach(callBack => {
    callBack(searchInputBox.value);
  });
};
/**
 * Function to find the search element and then initialize the event handler
 * on the 
 * inputBox - register it with debounced version of action handler.
 * Search button.
 * 
 */


function init() {
  let searchInputBox = document.querySelector(SEARCH_INPUTBOX_ID);
  searchInputBox.addEventListener('keyup', _Utils_CommonUtils__WEBPACK_IMPORTED_MODULE_2__["default"].debounce(function (event) {
    searchInputHandler(event);
  }, 100));
  let searchButton = document.querySelector(SEARCH_BUTTON_ID);
  searchButton.addEventListener('click', event => searchButtonHandler(event));
}
/**
 * Registration function for call-backs to be called 
 * @param {call-back function called when searchButton is pressed} searchActionListener 
 */


function registerSearchCallBack(searchActionListener) {
  if (!searchActionListener || typeof searchActionListener != 'function') {
    throw new TypeError("Invalid searchActionListener passed to registerSearchCallBack");
  }

  searchActionListeners.push(searchActionListener);
}
/**
 * Deregistering registered call-back
 */


function deRegisterSearchCallBack(searchActionListener) {
  let index = searchActionListeners.indexOf(searchActionListener);

  if (index != -1) {
    searchActionListeners.splice(index, 1);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init,
  registerSearchCallBack,
  deRegisterSearchCallBack
});

/***/ }),

/***/ "./src/Controllers/summary-controller.js":
/*!***********************************************!*\
  !*** ./src/Controllers/summary-controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Constants */ "./src/Services/Constants.js");
/* harmony import */ var _Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/ErrorConstants */ "./src/Services/ErrorConstants.js");
/* harmony import */ var _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/HtmlUtils */ "./src/Utils/HtmlUtils.js");
/* harmony import */ var _Utils_CommonUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/CommonUtils */ "./src/Utils/CommonUtils.js");
/* harmony import */ var _Services_Stream_API_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Stream-API-Service */ "./src/Services/Stream-API-Service.js");
/**
 * Module - controller handling all the Stream dummary view.
 * 
 * Handling Dynamic updation of streams when paginations right and left 
 * button triggered
 */






const TOTAL_SUMMARY_ID = "#TotalSummmaryText";
const PAGINATION_SUMMARY_ID = "#pagination-text-id";
const STREAM_LIST_DIV = "#summary-item-details";
const LEFT_BTN_ID = "#PaginationLeftBtn";
const RT_BTN_ID = "#PaginationRightBtn";
const DECREMENT = "decrement";
const INCREMENT = "increment";
let errorMessageHandler = null;
let currentStream = null;
let queryString = '';

function updateTotalSummary(value) {
  let searchInputBox = document.querySelector(TOTAL_SUMMARY_ID);
  searchInputBox.innerText = _Services_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].TOTAL_STR + value;
}

function updatePaginationSummary(currentPage, totalPages) {
  let paginationLabel = document.querySelector(PAGINATION_SUMMARY_ID);
  paginationLabel.innerText = currentPage + "/" + totalPages;
}
/**
 * TODO: 
 * PENDING TODO:
 * we neede to recalculate on resize , and reduce depending on media size
 * 
 */


function getMaxVisibleStreams() {
  //Lets recalculate
  return 5;
}
/**
 * Function that acts on the stream update and then reflects 
 * the same on
 * Total
 * pagination
 * streams
 * @param {querystring to be stored} queryStr 
 * @param {response} modelResponse 
 */


function update(queryStr, modelResponse) {
  let {
    "_total": totalElements,
    streams
  } = JSON.parse(modelResponse);

  if (totalElements == null || totalElements == undefined) {
    errorMessageHandler(_Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_1__["default"].STREAM_RESPONSE_INVALID_TOTAL_VAL);
  }

  if (!streams) {
    errorMessageHandler(_Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_1__["default"].STREAM_RESPONSE_INVALID_STREAMARR);
  }

  queryString = queryStr;
  currentStream = streams;
  updateTotalSummary(totalElements);
  updatePaginationSummary(1, Math.ceil(totalElements / getMaxVisibleStreams()));
  updateStreamsOnScreen(streams);
}

function updateStreamsOnScreen(streams) {
  let parentElem = document.querySelector(STREAM_LIST_DIV);
  _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_2__["default"].clearAllChildren(parentElem);

  if (!streams || !streams.length) {
    _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_2__["default"].createTextNodeOn(parentElem, _Services_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].NO_ITEMS_TO_DISPLAY, "2em");
  } else {
    let maxVisibleStreams = getMaxVisibleStreams();

    for (let i = 0; i < maxVisibleStreams; i++) {
      _Utils_HtmlUtils__WEBPACK_IMPORTED_MODULE_2__["default"].createNewStreamComponent(parentElem, streams[i]);
    }
  }
}

function getPaginationDetails() {
  let paginationLabel = document.querySelector(PAGINATION_SUMMARY_ID);
  return paginationLabel.innerText.split("/");
}
/**
 *  Handling Dynamic updation of streams when paginations right and left 
 * button triggered
 * Taking boundary as 100 , so 5 streams per page 20 pages is the boundary
 * @param {*} operation 
 */


function handlePaginationAction(operation) {
  let [currentPage, totalPages] = getPaginationDetails();
  let currentPageVal = Number.parseInt(currentPage);

  if (operation == DECREMENT && currentPageVal == 1 || operation == INCREMENT && currentPageVal == totalPages) {
    //Nothing to be done
    return;
  }

  let newPageCnt = operation == INCREMENT ? currentPageVal + 1 : currentPageVal - 1;
  updatePaginationSummary(newPageCnt, totalPages);

  if (isBoundaryCrossed(operation, newPageCnt)) {
    console.log("Boundary crossed with pageCount : " + newPageCnt);
    let newQueryStr = formQueryStrWithOffset(operation, newPageCnt);
    _Services_Stream_API_Service__WEBPACK_IMPORTED_MODULE_4__["default"].fetchStreamDetails(newQueryStr).then(response => {
      let {
        streams
      } = JSON.parse(response);
      currentStream = streams;
      updateStreamsOnScreen(streams);
    }, error => {
      console.log("Error : " + error);
      errorMessageHandler(error);
    });
  } else {
    let nearestStartIndex = (newPageCnt - 1) % 20 * getMaxVisibleStreams();
    updateStreamsOnScreen(currentStream.slice(nearestStartIndex, nearestStartIndex + getMaxVisibleStreams()));
  }
}

function formQueryStrWithOffset(operation, newPageCnt) {
  let offSetVal = operation == DECREMENT ? newPageCnt * 5 - 100 : (newPageCnt - 1) * 5;
  let newQueryStr = queryString;

  if (offSetVal) {
    // if offset != 0;
    let offSetStr = "offset=" + offSetVal;
    newQueryStr = newQueryStr ? newQueryStr + "&" + offSetStr : offSetStr;
  }

  return newQueryStr;
}

function isBoundaryCrossed(operation, newPageCnt) {
  return operation == DECREMENT && newPageCnt % 20 == 0 || operation == INCREMENT && (newPageCnt - 1) % 20 == 0;
}

function init(errorMsgHandler) {
  let paginationLeftBtn = document.querySelector(LEFT_BTN_ID);
  paginationLeftBtn.addEventListener('click', event => handlePaginationAction(DECREMENT));
  let paginationRtBtn = document.querySelector(RT_BTN_ID);
  paginationRtBtn.addEventListener('click', event => handlePaginationAction(INCREMENT));
  updateTotalSummary(0);
  updatePaginationSummary(0, 0);
  errorMessageHandler = errorMsgHandler;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init,
  update
});

/***/ }),

/***/ "./src/Services/CacheStore-Service.js":
/*!********************************************!*\
  !*** ./src/Services/CacheStore-Service.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Cache store for handling both lists and images.
 * 
 */
const IMAGE_STORE_KEY = "image-store";
const STREAM_STORE_KEY = "stream-store";
let localStore = null;
/**
 *  getLocalStore
 * 
 *  Normally wanted to use windows.localStorage, but because we need to stringify object to 
 * store in local storage I am using a map for now.
 */

function getLocalStore() {
  if (!localStore) {
    localStore = new Map();
  }

  return localStore; // incase want to use localStorage we can return localStorage.
}
/**
 * LRU Cache for storing image URLS
 * 
 */


class LRUCache {
  constructor(cacheSize = 100) {
    this.cacheSize = cacheSize;
    this.cacheStore = new Map();
  }

  get(key) {
    let item = this.cacheStore.get(key);

    if (item) {
      //delete from the store
      this.cacheStore.delete(key);
      this.cacheStore.set(key, item);
    }

    return item;
  }

  set(key, val) {
    if (this.cacheStore.has(key)) {
      //Delete the key to make it newest
      this.cacheStore.delete(key);
    } else if (this.cacheStore.size == this.cacheSize) {
      //delete the oldest
      this.cacheStore.delete(this.oldestKey());
    }

    this.cacheStore.set(key, val);
  }

  oldestKey() {
    //As maps maintains the order its just the first of the keys
    return this.cacheStore.keys().next().value;
  }

}

function storeStreamObjects(url, streamObjects) {
  let lruCache = getLocalStore().get(STREAM_STORE_KEY);
  lruCache.set(url, streamObjects);
}

function getStreamObjects(url) {
  let lruCache = getLocalStore().get(STREAM_STORE_KEY);
  return lruCache.get(url);
}

function getImage(url) {
  let lruCache = getLocalStore().get(IMAGE_STORE_KEY);
  return lruCache.get(url);
}

function setImage(url, image) {
  let lruCache = getLocalStore().get(IMAGE_STORE_KEY);

  if (!lruCache.get(url)) {
    lruCache.set(url, image);
  }
}
/**
 * 
 * @param {initialConfiguration for image cache} imageCacheSize 
 * @param {initialConfigureation for stream objects cache} streamLRUCacheSize
 */


function init(imageCacheSize = 200, streamCacheSize = imageCacheSize) {
  let imageLRUCache = new LRUCache(imageCacheSize);
  let streamLRUCache = new LRUCache(streamCacheSize);
  getLocalStore().set(IMAGE_STORE_KEY, imageLRUCache);
  getLocalStore().set(STREAM_STORE_KEY, streamLRUCache);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init,
  getStreamObjects,
  storeStreamObjects,
  getImage,
  setImage
});

/***/ }),

/***/ "./src/Services/Constants.js":
/*!***********************************!*\
  !*** ./src/Services/Constants.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Module for Global level error constants
// Use-full for internatinalization.
/* harmony default export */ __webpack_exports__["default"] = ({
  TWITCH_CLIENT_ID: "421m3knuxm4kvefe5fbv4z0g86pwgr",
  CHANNEL_STR: "channel",
  GAME_STR: "game",
  LANGUAGE_STR: "language",
  STREAM_TYPE: "stream_type",
  LIMIT_TO: "limit",
  TOTAL_STR: "Total results : ",
  NO_ITEMS_TO_DISPLAY: "No items to display"
});

/***/ }),

/***/ "./src/Services/ErrorConstants.js":
/*!****************************************!*\
  !*** ./src/Services/ErrorConstants.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Module for Global level error constants
// Use-full for internatinalization.
/* harmony default export */ __webpack_exports__["default"] = ({
  //Argument Erros :
  ERR_INVALID_NUMBER_OF_ARGS: "Invalid arguments passed",
  ERR_INVALID_OUTPUT_ARGS: "Invalid output argument passed",
  QUERY_STRING_WITHOUT_EQUAL: "Query string passed without =",
  QUERY_STRING_WITHOUT_VAL: "Query string passed without value",
  QUERY_INVALID_CHANNEL_NUMBER: "invalid channel number : ",
  QUERY_INVALID_NUMBEROF_EQUALS: "invalid number of =",
  QUERY_INVALID_QUERY_PARAM: "Invalid query parameter",
  QUERY_INVALID_STREAM_TYPE: "Inavlid stream type",
  QUERY_INVALID_QUERY_PARAM: "Invalid query param",
  QUERY_INVALID_LIMIT_TO_PASSED: "Invalid number passed as limitto",
  STREAM_RESPONSE_INVALID_TOTAL_VAL: "Invalid total in response",
  STREAM_RESPONSE_INVALID_STREAMARR: "Invalid total stream array"
});

/***/ }),

/***/ "./src/Services/LogService.js":
/*!************************************!*\
  !*** ./src/Services/LogService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Log service module could actually be diverted to any file instead of console
 */

/**
 * 
 * @param {string to be logged} str 
 */
function log(str) {
  console.log(`DEBUG_LOG : ${str}`);
}
/**
* 
* @param {string to be logged} str 
*/


function error(str) {
  console.error(`DEBUG_ERR : ${str}`);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  log,
  error
});

/***/ }),

/***/ "./src/Services/Stream-API-Service.js":
/*!********************************************!*\
  !*** ./src/Services/Stream-API-Service.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorConstants */ "./src/Services/ErrorConstants.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./src/Services/Constants.js");
/* harmony import */ var _CacheStore_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CacheStore-Service */ "./src/Services/CacheStore-Service.js");
/**
 * Service file to fetch the back-end data 
 * Using XMLHttpRequest.
 * Uses cache store internally,
 * 
 */



const CLIENT_ID = "421m3knuxm4kvefe5fbv4z0g86pwgr";
/**
 * Givem query string, this function fetches all the StreamDetails
 *  
 */

function fetchStreamDetails(queryString) {
  console.log(`QueryString ${queryString}`);

  if (!queryString || queryString.indexOf('limit=') == -1) {
    queryString = queryString ? queryString + '&limit=100' : 'limit=100';
  }

  return new Promise((resolve, reject) => {
    const url = `https://api.twitch.tv/kraken/streams/?${queryString}`;
    let cached_content = _CacheStore_Service__WEBPACK_IMPORTED_MODULE_2__["default"].getStreamObjects(url);

    if (cached_content) {
      resolve(cached_content);
    } else {
      getFromBackEnd(resolve, reject, url);
    }
  });
}

function getFromBackEnd(resolve, reject, url) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        console.log(this.responseText);
        _CacheStore_Service__WEBPACK_IMPORTED_MODULE_2__["default"].storeStreamObjects(url, this.responseText);
        resolve(this.responseText);
      } else {
        console.log("XMLHttp Req Error ", this.response);
        reject({
          msg: JSON.stringify(this.response)
        });
      }
    }
  };

  request.open('GET', url, true);
  request.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
  request.setRequestHeader("Client-ID", "421m3knuxm4kvefe5fbv4z0g86pwgr");
  request.send(null);
}
/**
 * init function : right now initializes the cache store
 */


function init() {
  _CacheStore_Service__WEBPACK_IMPORTED_MODULE_2__["default"].init(100, 1000);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init,
  fetchStreamDetails
});

/***/ }),

/***/ "./src/Utils/CommonUtils.js":
/*!**********************************!*\
  !*** ./src/Utils/CommonUtils.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * Common utility module, can be shared across.
 */

/**
 * 
 * @param {function to be ised } func 
 * @param {delay in number of milli seconds tobe passed to setTimeout} delay 
 */
const debounce = (func, delay) => {
  if (!func || typeof func != 'function') {
    throw new TypeError("Debounce called with  invalid functin argument");
  }

  let inDebounce = null;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  debounce
});

/***/ }),

/***/ "./src/Utils/HtmlUtils.js":
/*!********************************!*\
  !*** ./src/Utils/HtmlUtils.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Module exposing HTML Dom related utility functions
 *  
 */

/**
 * Function to remove the specified element from the dom - tree
 * @param {element to be removed} selection 
 */
function remove(selection) {
  selection.parentNode.removeChild(selection);
}

function showElement(elementSelector) {
  let element = document.querySelector(elementSelector);
  element.classList.remove("invisible");
}

function hideElement(elementSelector) {
  let element = document.querySelector(elementSelector);
  element.classList.add("invisible");
}

function enableButton(buttonSelector) {
  let button = document.querySelector(buttonSelector);
  button.disabled = false;
}

function disableButton(buttonSelector) {
  let button = document.querySelector(buttonSelector);
  button.disabled = true;
}

function createTextLabel(parentElm, message, className) {
  var newContentLabel = document.createElement("label");
  newContentLabel.innerText = message;
  newContentLabel.classList.add(className);
  parentElm.appendChild(newContentLabel);
}

function isResolution(condition) {
  let media = window.matchMedia(condition);
  return media.matches;
}

function getCurrentResolution() {
  if (isResolution("(max-width: 640px)")) {
    return "XS";
  } else if (isResolution("(max-width: 800px)")) {
    return "MD";
  } else if (isResolution("(max-width: 1024px)")) {
    return "L";
  } else if (isResolution("(max-width: 1280px)")) {
    return "XL";
  }

  return "MD";
}

function getImageBasedOnResolution(previewList) {
  let imageSrc = null;

  switch (getCurrentResolution()) {
    case 'XS':
      imageSrc = previewList.small;
      break;

    case 'MD':
      imageSrc = previewList.medium;
      break;

    case "L":
    case "XL":
      imageSrc = previewList.large;
      break;
  }

  let previewDef = previewList && previewList.length ? previewList[0] : '';
  return imageSrc ? imageSrc : previewDef;
}

function createNewImageDiv(parentElm, model) {
  let newImageDiv = document.createElement("div");
  newImageDiv.classList.add("image-div");
  let newImage = document.createElement('img');
  newImage.src = getImageBasedOnResolution(model.preview);
  newImage.alt = "No image";
  newImage.classList.add("image");
  newImageDiv.appendChild(newImage);
  parentElm.appendChild(newImageDiv);
}

function crateMetaDataDiv(newItemDiv, model) {
  let newMetadataDiv = document.createElement("div");
  newMetadataDiv.classList.add("item-metadata-div");
  createTextLabel(newMetadataDiv, model.channel.display_name, "metadata-display-name");
  createTextLabel(newMetadataDiv, "Game name - " + model.game, "metadata-game-name");
  let newDescriptionTextArea = document.createElement('textarea');
  newDescriptionTextArea.classList.add("metadata-description-textarea");
  newDescriptionTextArea.readOnly = true;
  newDescriptionTextArea.rows = 2;
  newDescriptionTextArea.cols = 40;
  newDescriptionTextArea.value = model.channel.description;
  newMetadataDiv.appendChild(newDescriptionTextArea);
  newItemDiv.appendChild(newMetadataDiv);
}

function createNewStreamComponent(parentElm, model) {
  let newItemDiv = document.createElement("div");
  newItemDiv.classList.add("item-class");
  createNewImageDiv(newItemDiv, model);
  crateMetaDataDiv(newItemDiv, model);
  parentElm.appendChild(newItemDiv);
}

function clearAllChildren(parentElm) {
  while (parentElm.firstChild) {
    parentElm.removeChild(parentElm.firstChild);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  remove,
  showElement,
  hideElement,
  enableButton,
  disableButton,
  createNewStreamComponent,
  createTextNodeOn: createTextLabel,
  clearAllChildren
});

/***/ }),

/***/ "./src/Utils/ValidationUtils.js":
/*!**************************************!*\
  !*** ./src/Utils/ValidationUtils.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/ErrorConstants */ "./src/Services/ErrorConstants.js");
/* harmony import */ var _Services_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Constants */ "./src/Services/Constants.js");
/**
 * Common utility module to parse and validate incoming and outgoing arguments of a service.
 * 
 * Making modular so as enable writing UnitTests easily.
 */


/**
 * Function to validate the query string. 
 * The query strings can be a cobination of two query strings,
 * queryString should be in the format of 
 *  {queryParam1}={queryValue1}&{queryParam2}!={queryValue2}.
 * So split on the basis of '&' and then validate each queryParam
 * 
 * Please refer to the documentation of https://dev.twitch.tv/docs/v5/reference/streams/
 * of possible values for queryParam and valid values of queryValue
 * 
 * @argument queryString s: can be null or empty, 
 * but if present should adhere to above requirement
 * 
 * @returns object: {
 *                      valid : boolean,
 *                      errMsg : string
 *                  }
 */

function validateQueryString(queryStrings) {
  if (queryStrings) {
    if (queryStrings.indexOf("=") == -1) {
      return INVALID(_Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_0__["default"].QUERY_STRING_WITHOUT_EQUAL);
    }

    let queryStringsArr = queryStrings.split('&'); //Itterate through each queryString

    for (let queryString of queryStringsArr) {
      //IF queryString contains more than one ='s
      if (queryString.indexOf("=") != queryString.lastIndexOf("=")) {
        return INVALID(_Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_0__["default"].QUERY_INVALID_NUMBEROF_EQUALS);
      } //Validate if value is present


      let [queryParam, queryValue] = queryString.split("=");

      if (!queryValue || !queryValue.length) {
        return INVALID(_Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_0__["default"].QUERY_STRING_WITHOUT_VAL);
      }

      ;

      switch (queryParam) {
        case _Services_Constants__WEBPACK_IMPORTED_MODULE_1__["default"].CHANNEL_STR:
          //Check if all channels are inegers or not
          let failureChnl = queryValue.split(",").find(item => Number.parseInt(item) + '' != item);

          if (failureChnl) {
            return INVALID(_Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_0__["default"].QUERY_INVALID_CHANNEL_NUMBER + failureChnl);
          }

          break;

        case _Services_Constants__WEBPACK_IMPORTED_MODULE_1__["default"].GAME_STR:
        case _Services_Constants__WEBPACK_IMPORTED_MODULE_1__["default"].LANGUAGE_STR:
          //Nothing to validate for queryValue
          break;

        case _Services_Constants__WEBPACK_IMPORTED_MODULE_1__["default"].LIMIT_TO:
          if (Number.parseInt(queryValue) + '' != queryValue + '') {
            return INVALID(_Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_0__["default"].QUERY_INVALID_LIMIT_TO_PASSED);
          }

          break;

        case _Services_Constants__WEBPACK_IMPORTED_MODULE_1__["default"].STREAM_TYPE:
          let valuesArr = ["live", "playlist", "all"];

          if (!valuesArr.find(item => item === queryValue)) {
            return INVALID(_Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_0__["default"].QUERY_INVALID_STREAM_TYPE);
          }

          break;

        default:
          //Note not allowing offset and other values, as offset is only used
          //for pagination
          console.log("Unmatched queryParam");
          return INVALID(_Services_ErrorConstants__WEBPACK_IMPORTED_MODULE_0__["default"].QUERY_INVALID_QUERY_PARAM);
          break;
      }
    }
  }

  return {
    valid: true
  };
}

function INVALID(errMsg) {
  return {
    valid: false,
    errMsg
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  validateQueryString
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/main-controller */ "./src/Controllers/main-controller.js");
/* harmony import */ var _Services_LogService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/LogService */ "./src/Services/LogService.js");
/**
 * Welcome to Sony PlayStation assigment.
 * This module/file is Initial input file configured as input in web-pack.
 * 
 * ****************************************************************************************
 * Please note that before ES6 it was a common practise to use a IIFE around in each file
 * ex : 
 * (function(){
 * 
 * })();
 * This was done from polluting global namespace & scope or to prevent
 * third party api's/namespace confluting. 
 * , but after ES6 with modules and module.exoprt I have used modules to organize code.
 * You might be seeing 
 * let variable, in files but they are only for that file/module only
 * ******************************************************************************************
 * 
 * The over all design is based on mixture of both MVC and MVVM architecture style.
 * 
 * Apart from the MVC style there are services for API fetching, image caching.
 * Constants and ErrorConstants usefull for internatinalization.
 * 
 * Utilty functions for HTMLDom manipulation, 
 * ValidationUtils for parsing and validating queryString.
 * CommonUtils for debounce logic etc.
 * 
 * At the top level I have used MVC to modularize code in to Model, View, Controller.
 *
 * Though View here is a single HTML for having the static content, the dynamic content
 * such as stream item component is based on view height available.
 * 
 * The controllers are subdivided on per component or per HTML section basis.
 * Each controller has its own event handlers.
 * Main controller interacts with all other controllers using 
 * pub/sub pattern or observer/observable pattern. This could have been done using
 * Event mechanism but inorder to avoid global broadcasting of events registration
 * mechanism is used.
 * 
 * Used debounce logic for search query-param validation, to reduce throtling.
 * 
 * Models 
 * API service is used for retreving data from back-end
 * LRU cache used for images
 * 
 * 
 */



/**
 * Add event listener for DOMContentLoaded, so that our main controller 
 * gets called only after all of the Dom content is loaded.
 */

let load = function load() {
  window.removeEventListener("load", load, false);
  _Services_LogService__WEBPACK_IMPORTED_MODULE_2__["default"].log("Dom Content Loaded ... ");
  _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_1__["default"].init();
};

window.addEventListener('load', function (event) {
  load();
});
window.addEventListener('resize', function (event) {
  _Services_LogService__WEBPACK_IMPORTED_MODULE_2__["default"].log("Browser resized ... ");
  _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_1__["default"].resize();
});

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=*.js.map