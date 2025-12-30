/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    font-family: sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#chat-container {
    width: 400px;
    height: 600px;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background-color: white;
}

.chat-box {
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
}

#input-area {
    display: flex;
    padding: 10px;
}

#message-input {
    flex-grow: 1;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    resize: none;
    overflow-y: auto;
    min-height: 80px; /* Approximately 4 lines */
    max-height: 80px; /* Fixed at 4 lines, scroll after that */
    line-height: 1.5;
    font-family: inherit;
}

#send-button {
    margin-left: 10px;
    padding: 8px 12px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;
    height: fit-content;
}

.message {
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 18px;
    max-width: 70%;
    word-wrap: break-word;
}

.user-message {
    background-color: #007bff;
    color: white;
    align-self: flex-end;
    margin-left: auto;
}

.bot-message {
    background-color: #e9e9eb;
    color: black;
    align-self: flex-start;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,gBAAgB,EAAE,0BAA0B;IAC5C,gBAAgB,EAAE,wCAAwC;IAC1D,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,sBAAsB;AAC1B","sourcesContent":["body {\n    font-family: sans-serif;\n    background-color: #f0f2f5;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n}\n\n#chat-container {\n    width: 400px;\n    height: 600px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n}\n\n.chat-box {\n    flex-grow: 1;\n    padding: 10px;\n    overflow-y: auto;\n    border-bottom: 1px solid #ccc;\n    display: flex;\n    flex-direction: column;\n}\n\n#input-area {\n    display: flex;\n    padding: 10px;\n}\n\n#message-input {\n    flex-grow: 1;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 8px;\n    resize: none;\n    overflow-y: auto;\n    min-height: 80px; /* Approximately 4 lines */\n    max-height: 80px; /* Fixed at 4 lines, scroll after that */\n    line-height: 1.5;\n    font-family: inherit;\n}\n\n#send-button {\n    margin-left: 10px;\n    padding: 8px 12px;\n    border: none;\n    background-color: #007bff;\n    color: white;\n    border-radius: 4px;\n    cursor: pointer;\n    align-self: flex-end;\n    height: fit-content;\n}\n\n.message {\n    margin-bottom: 10px;\n    padding: 8px 12px;\n    border-radius: 18px;\n    max-width: 70%;\n    word-wrap: break-word;\n}\n\n.user-message {\n    background-color: #007bff;\n    color: white;\n    align-self: flex-end;\n    margin-left: auto;\n}\n\n.bot-message {\n    background-color: #e9e9eb;\n    color: black;\n    align-self: flex-start;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/interpreter/ast.ts"
/*!********************************!*\
  !*** ./src/interpreter/ast.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Assign: () => (/* binding */ Assign),
/* harmony export */   Binary: () => (/* binding */ Binary),
/* harmony export */   Block: () => (/* binding */ Block),
/* harmony export */   Call: () => (/* binding */ Call),
/* harmony export */   Expr: () => (/* binding */ Expr),
/* harmony export */   Expression: () => (/* binding */ Expression),
/* harmony export */   Grouping: () => (/* binding */ Grouping),
/* harmony export */   If: () => (/* binding */ If),
/* harmony export */   IndexAccess: () => (/* binding */ IndexAccess),
/* harmony export */   Literal: () => (/* binding */ Literal),
/* harmony export */   Logical: () => (/* binding */ Logical),
/* harmony export */   Print: () => (/* binding */ Print),
/* harmony export */   Stmt: () => (/* binding */ Stmt),
/* harmony export */   Unary: () => (/* binding */ Unary),
/* harmony export */   Var: () => (/* binding */ Var),
/* harmony export */   Variable: () => (/* binding */ Variable),
/* harmony export */   VectorLiteral: () => (/* binding */ VectorLiteral)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * This is the base class for all expression nodes in our Abstract Syntax Tree (AST).
 * An expression is a piece of code that evaluates to a value, like `1 + 2` or `x * 3`.
 * The `accept` method is part of the Visitor pattern. It allows a visitor (like our
 * interpreter) to process the expression node.
 */
var Expr = /** @class */ (function () {
    function Expr() {
    }
    return Expr;
}());

/**
 * This is the base class for all statement nodes in our AST.
 */
var Stmt = /** @class */ (function () {
    function Stmt() {
    }
    return Stmt;
}());

/**
 * Represents an assignment expression, like `x = 10`.
 */
var Assign = /** @class */ (function (_super) {
    __extends(Assign, _super);
    /**
     * @param name The token for the variable being assigned to.
     * @param value The expression on the right-hand side of the `=`.
     */
    function Assign(name, value) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    Assign.prototype.accept = function (visitor) {
        return visitor.visitAssignExpr(this);
    };
    return Assign;
}(Expr));

/**
 * Represents a binary operation, like `1 + 2` or `x > 5`.
 */
var Binary = /** @class */ (function (_super) {
    __extends(Binary, _super);
    /**
     * @param left The expression on the left side of the operator.
     * @param operator The token for the operator (`+`, `-`, `*`, `/`, etc.).
     * @param right The expression on the right side of the operator.
     */
    function Binary(left, operator, right) {
        var _this = _super.call(this) || this;
        _this.left = left;
        _this.operator = operator;
        _this.right = right;
        return _this;
    }
    Binary.prototype.accept = function (visitor) {
        return visitor.visitBinaryExpr(this);
    };
    return Binary;
}(Expr));

/**
 * Represents a function call. Although we don't have user-defined functions yet,
 * this is used for built-in functions like `print`.
 */
var Call = /** @class */ (function (_super) {
    __extends(Call, _super);
    /**
     * @param callee The expression that evaluates to the function being called.
     * @param paren The closing parenthesis token, used for error reporting.
     * @param args A list of expressions for the arguments to the function.
     */
    function Call(callee, paren, args) {
        var _this = _super.call(this) || this;
        _this.callee = callee;
        _this.paren = paren;
        _this.args = args;
        return _this;
    }
    Call.prototype.accept = function (visitor) {
        return visitor.visitCallExpr(this);
    };
    return Call;
}(Expr));

/**
 * Represents a grouping of expressions, like `(1 + 2)`. This is used to
 * override the default order of operations.
 */
var Grouping = /** @class */ (function (_super) {
    __extends(Grouping, _super);
    /**
     * @param expression The expression inside the parentheses.
     */
    function Grouping(expression) {
        var _this = _super.call(this) || this;
        _this.expression = expression;
        return _this;
    }
    Grouping.prototype.accept = function (visitor) {
        return visitor.visitGroupingExpr(this);
    };
    return Grouping;
}(Expr));

/**
 * Represents a literal value, like a number, string, boolean, or nil.
 */
var Literal = /** @class */ (function (_super) {
    __extends(Literal, _super);
    /**
     * @param value The actual value of the literal.
     */
    function Literal(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    Literal.prototype.accept = function (visitor) {
        return visitor.visitLiteralExpr(this);
    };
    return Literal;
}(Expr));

/**
 * Represents a logical operation, like `a && b` or `x || y`.
 */
var Logical = /** @class */ (function (_super) {
    __extends(Logical, _super);
    /**
     * @param left The expression on the left side of the operator.
     * @param operator The token for the logical operator (`&&` or `||`).
     * @param right The expression on the right side of the operator.
     */
    function Logical(left, operator, right) {
        var _this = _super.call(this) || this;
        _this.left = left;
        _this.operator = operator;
        _this.right = right;
        return _this;
    }
    Logical.prototype.accept = function (visitor) {
        return visitor.visitLogicalExpr(this);
    };
    return Logical;
}(Expr));

/**
 * Represents a unary operation, like `-5` or `!true`.
 */
var Unary = /** @class */ (function (_super) {
    __extends(Unary, _super);
    /**
     * @param operator The token for the unary operator (`-` or `!`).
     * @param right The expression to the right of the operator.
     */
    function Unary(operator, right) {
        var _this = _super.call(this) || this;
        _this.operator = operator;
        _this.right = right;
        return _this;
    }
    Unary.prototype.accept = function (visitor) {
        return visitor.visitUnaryExpr(this);
    };
    return Unary;
}(Expr));

/**
 * Represents a variable expression, like `x`.
 */
var Variable = /** @class */ (function (_super) {
    __extends(Variable, _super);
    /**
     * @param name The token for the variable's name.
     */
    function Variable(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Variable.prototype.accept = function (visitor) {
        return visitor.visitVariableExpr(this);
    };
    return Variable;
}(Expr));

/**
 * Represents a vector (array) literal, like `[1, 2, 3]`.
 */
var VectorLiteral = /** @class */ (function (_super) {
    __extends(VectorLiteral, _super);
    /**
     * @param values A list of expressions for the elements of the vector.
     */
    function VectorLiteral(values) {
        var _this = _super.call(this) || this;
        _this.values = values;
        return _this;
    }
    VectorLiteral.prototype.accept = function (visitor) {
        return visitor.visitVectorLiteralExpr(this);
    };
    return VectorLiteral;
}(Expr));

/**
 * Represents an index access expression, like `my_vector[0]`.
 */
var IndexAccess = /** @class */ (function (_super) {
    __extends(IndexAccess, _super);
    /**
     * @param callee The expression that evaluates to the vector being indexed.
     * @param bracket The closing bracket token, used for error reporting.
     * @param index The expression that evaluates to the index.
     */
    function IndexAccess(callee, bracket, index) {
        var _this = _super.call(this) || this;
        _this.callee = callee;
        _this.bracket = bracket;
        _this.index = index;
        return _this;
    }
    IndexAccess.prototype.accept = function (visitor) {
        return visitor.visitIndexAccessExpr(this);
    };
    return IndexAccess;
}(Expr));

/**
 * Represents a block of statements, enclosed in curly braces `{ ... }`.
 */
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    /**
     * @param statements A list of statements inside the block.
     */
    function Block(statements) {
        var _this = _super.call(this) || this;
        _this.statements = statements;
        return _this;
    }
    Block.prototype.accept = function (visitor) {
        return visitor.visitBlockStmt(this);
    };
    return Block;
}(Stmt));

/**
 * Represents an expression statement. This is an expression that is used as a
 * statement, like a function call `my_function();`.
 */
var Expression = /** @class */ (function (_super) {
    __extends(Expression, _super);
    /**
     * @param expression The expression to be executed.
     */
    function Expression(expression) {
        var _this = _super.call(this) || this;
        _this.expression = expression;
        return _this;
    }
    Expression.prototype.accept = function (visitor) {
        return visitor.visitExpressionStmt(this);
    };
    return Expression;
}(Stmt));

/**
 * Represents an if statement.
 */
var If = /** @class */ (function (_super) {
    __extends(If, _super);
    /**
     * @param condition The condition to be evaluated.
     * @param thenBranch The statement to be executed if the condition is true.
     * @param elseBranch The statement to be executed if the condition is false (optional).
     */
    function If(condition, thenBranch, elseBranch) {
        var _this = _super.call(this) || this;
        _this.condition = condition;
        _this.thenBranch = thenBranch;
        _this.elseBranch = elseBranch;
        return _this;
    }
    If.prototype.accept = function (visitor) {
        return visitor.visitIfStmt(this);
    };
    return If;
}(Stmt));

/**
 * Represents a print statement.
 */
var Print = /** @class */ (function (_super) {
    __extends(Print, _super);
    /**
     * @param expression The expression whose value is to be printed.
     */
    function Print(expression) {
        var _this = _super.call(this) || this;
        _this.expression = expression;
        return _this;
    }
    Print.prototype.accept = function (visitor) {
        return visitor.visitPrintStmt(this);
    };
    return Print;
}(Stmt));

/**
 * Represents a variable declaration statement, like `var x = 10;`.
 */
var Var = /** @class */ (function (_super) {
    __extends(Var, _super);
    /**
     * @param name The token for the variable's name.
     * @param initializer The expression to initialize the variable with (optional).
     */
    function Var(name, initializer) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.initializer = initializer;
        return _this;
    }
    Var.prototype.accept = function (visitor) {
        return visitor.visitVarStmt(this);
    };
    return Var;
}(Stmt));



/***/ },

/***/ "./src/interpreter/interpreter.ts"
/*!****************************************!*\
  !*** ./src/interpreter/interpreter.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Interpreter: () => (/* binding */ Interpreter)
/* harmony export */ });
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lexer */ "./src/interpreter/lexer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A custom error class for runtime errors. This helps us distinguish between
 * errors that happen during interpretation and other types of errors.
 */
var RuntimeError = /** @class */ (function (_super) {
    __extends(RuntimeError, _super);
    function RuntimeError(token, message) {
        var _this = _super.call(this, message) || this;
        _this.token = token;
        return _this;
    }
    return RuntimeError;
}(Error));
/**
 * The Environment class is responsible for managing the state of variables in
 * the program. It's a symbol table that maps variable names to their values.
 * It supports nested scopes, which is crucial for features like blocks and
 * functions.
 */
var Environment = /** @class */ (function () {
    /**
     * @param enclosing The enclosing environment, for nested scopes.
     */
    function Environment(enclosing) {
        if (enclosing === void 0) { enclosing = null; }
        this.values = new Map();
        this.enclosing = enclosing;
    }
    /**
     * Defines a new variable in the current scope.
     * @param name The name of the variable.
     * @param value The initial value of the variable.
     */
    Environment.prototype.define = function (name, value) {
        this.values.set(name, value);
    };
    /**
     * Retrieves the value of a variable. It first looks in the current scope,
     * and if it's not found, it recursively searches in the enclosing scopes.
     * @param name The token for the variable's name.
     * @returns The value of the variable.
     */
    Environment.prototype.get = function (name) {
        if (this.values.has(name.lexeme)) {
            return this.values.get(name.lexeme);
        }
        if (this.enclosing !== null) {
            return this.enclosing.get(name);
        }
        throw new RuntimeError(name, "Undefined variable '".concat(name.lexeme, "'."));
    };
    /**
     * Assigns a new value to an existing variable. It follows the same scope
     * chain as `get`.
     * @param name The token for the variable's name.
     * @param value The new value.
     */
    Environment.prototype.assign = function (name, value) {
        if (this.values.has(name.lexeme)) {
            this.values.set(name.lexeme, value);
            return;
        }
        if (this.enclosing !== null) {
            this.enclosing.assign(name, value);
            return;
        }
        throw new RuntimeError(name, "Undefined variable '".concat(name.lexeme, "'."));
    };
    return Environment;
}());
/**
 * The Interpreter is the heart of our language. It walks the Abstract Syntax
 * Tree (AST) produced by the parser and executes the code. It implements the
 * Visitor patterns for both expressions and statements.
 */
var Interpreter = /** @class */ (function () {
    /**
     * @param output A callback function to handle the output of the `print` statement.
     */
    function Interpreter(output) {
        this.environment = new Environment();
        this.output = output;
    }
    /**
     * The main entry point for the interpreter. It takes a list of statements
     * and executes them.
     * @param statements The list of statements to interpret.
     */
    Interpreter.prototype.interpret = function (statements) {
        try {
            for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
                var statement = statements_1[_i];
                this.execute(statement);
            }
        }
        catch (error) {
            if (error instanceof RuntimeError) {
                this.output(error.message);
            }
            else if (error instanceof Error) {
                this.output(error.message);
            }
        }
    };
    /**
     * A helper method to execute a single statement.
     */
    Interpreter.prototype.execute = function (stmt) {
        stmt.accept(this);
    };
    /**
     * Executes a block of statements in a new, nested scope.
     */
    Interpreter.prototype.visitBlockStmt = function (stmt) {
        this.executeBlock(stmt.statements, new Environment(this.environment));
    };
    /**
     * A helper method to execute a block of statements in a given environment.
     */
    Interpreter.prototype.executeBlock = function (statements, environment) {
        var previous = this.environment;
        try {
            this.environment = environment;
            for (var _i = 0, statements_2 = statements; _i < statements_2.length; _i++) {
                var statement = statements_2[_i];
                this.execute(statement);
            }
        }
        finally {
            // Restore the previous environment after the block is executed.
            this.environment = previous;
        }
    };
    /**
     * Executes an expression statement. This simply evaluates the expression.
     */
    Interpreter.prototype.visitExpressionStmt = function (stmt) {
        this.evaluate(stmt.expression);
    };
    /**
     * Executes an if statement.
     */
    Interpreter.prototype.visitIfStmt = function (stmt) {
        if (this.isTruthy(this.evaluate(stmt.condition))) {
            this.execute(stmt.thenBranch);
        }
        else if (stmt.elseBranch !== null) {
            this.execute(stmt.elseBranch);
        }
    };
    /**
     * Executes a print statement.
     */
    Interpreter.prototype.visitPrintStmt = function (stmt) {
        var value = this.evaluate(stmt.expression);
        this.output(this.stringify(value));
    };
    /**
     * Executes a variable declaration statement.
     */
    Interpreter.prototype.visitVarStmt = function (stmt) {
        var value = null;
        if (stmt.initializer !== null) {
            value = this.evaluate(stmt.initializer);
        }
        this.environment.define(stmt.name.lexeme, value);
    };
    /**
     * Evaluates an assignment expression.
     */
    Interpreter.prototype.visitAssignExpr = function (expr) {
        var value = this.evaluate(expr.value);
        this.environment.assign(expr.name, value);
        return value;
    };
    /**
     * Evaluates a binary expression.
     */
    Interpreter.prototype.visitBinaryExpr = function (expr) {
        var left = this.evaluate(expr.left);
        var right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Greater:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) > Number(right);
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.GreaterEqual:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) >= Number(right);
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Less:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) < Number(right);
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LessEqual:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) <= Number(right);
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.BangEqual: return !this.isEqual(left, right);
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.EqualEqual: return this.isEqual(left, right);
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Minus:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) - Number(right);
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Plus:
                if (typeof left === "number" && typeof right === "number") {
                    return left + right;
                }
                if (typeof left === "string" && typeof right === "string") {
                    return left + right;
                }
                throw new RuntimeError(expr.operator, "Operands must be two numbers or two strings.");
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Slash:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) / Number(right);
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Asterisk:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) * Number(right);
        }
        // Unreachable.
        return null;
    };
    /**
     * Evaluates a call expression. For now, this is a placeholder as we don't
     * have user-defined functions.
     */
    Interpreter.prototype.visitCallExpr = function (expr) {
        return null;
    };
    /**
     * Evaluates a grouping expression.
     */
    Interpreter.prototype.visitGroupingExpr = function (expr) {
        return this.evaluate(expr.expression);
    };
    /**
     * Evaluates a literal expression.
     */
    Interpreter.prototype.visitLiteralExpr = function (expr) {
        return expr.value;
    };
    /**
     * Evaluates a logical expression.
     */
    Interpreter.prototype.visitLogicalExpr = function (expr) {
        var left = this.evaluate(expr.left);
        if (expr.operator.type === _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Or) {
            if (this.isTruthy(left))
                return left;
        }
        else { // AND
            if (!this.isTruthy(left))
                return left;
        }
        return this.evaluate(expr.right);
    };
    /**
     * Evaluates a unary expression.
     */
    Interpreter.prototype.visitUnaryExpr = function (expr) {
        var right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Bang:
                return !this.isTruthy(right);
            case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Minus:
                this.checkNumberOperand(expr.operator, right);
                return -Number(right);
        }
        // Unreachable.
        return null;
    };
    /**
     * Evaluates a variable expression.
     */
    Interpreter.prototype.visitVariableExpr = function (expr) {
        return this.environment.get(expr.name);
    };
    /**
     * Evaluates a vector literal expression.
     */
    Interpreter.prototype.visitVectorLiteralExpr = function (expr) {
        var _this = this;
        return expr.values.map(function (v) { return _this.evaluate(v); });
    };
    /**
     * Evaluates an index access expression.
     */
    Interpreter.prototype.visitIndexAccessExpr = function (expr) {
        var callee = this.evaluate(expr.callee);
        var index = this.evaluate(expr.index);
        if (Array.isArray(callee) && typeof index === 'number') {
            return callee[index];
        }
        throw new RuntimeError(expr.bracket, "Can only index into vectors with numbers.");
    };
    /**
     * A helper method to evaluate a single expression.
     */
    Interpreter.prototype.evaluate = function (expr) {
        return expr.accept(this);
    };
    /**
     * Determines if a value is "truthy" in our language's sense. `false` and
     * `nil` are falsey, and everything else is truthy.
     */
    Interpreter.prototype.isTruthy = function (object) {
        if (object === null)
            return false;
        if (typeof object === "boolean")
            return object;
        return true;
    };
    /**
     * Checks if two values are equal.
     */
    Interpreter.prototype.isEqual = function (a, b) {
        if (a === null && b === null)
            return true;
        if (a === null)
            return false;
        return a === b;
    };
    /**
     * Converts a value to a string for printing.
     */
    Interpreter.prototype.stringify = function (object) {
        var _this = this;
        if (object === null)
            return "nil";
        if (Array.isArray(object)) {
            return "[".concat(object.map(function (o) { return _this.stringify(o); }).join(', '), "]");
        }
        return object.toString();
    };
    /**
     * A helper method to check if an operand is a number.
     */
    Interpreter.prototype.checkNumberOperand = function (operator, operand) {
        if (typeof operand === 'number')
            return;
        throw new RuntimeError(operator, "Operand must be a number.");
    };
    /**
     * A helper method to check if both operands are numbers.
     */
    Interpreter.prototype.checkNumberOperands = function (operator, left, right) {
        if (typeof left === 'number' && typeof right === 'number')
            return;
        throw new RuntimeError(operator, "Operands must be numbers.");
    };
    return Interpreter;
}());



/***/ },

/***/ "./src/interpreter/lexer.ts"
/*!**********************************!*\
  !*** ./src/interpreter/lexer.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lexer: () => (/* binding */ Lexer),
/* harmony export */   TokenType: () => (/* binding */ TokenType)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * This enum defines all the different types of tokens that our language recognizes.
 * A token is the smallest unit of code that has meaning, like a number, an operator,
 * or a keyword.
 */
var TokenType;
(function (TokenType) {
    // Literals: represent raw data values in the code.
    TokenType[TokenType["Number"] = 0] = "Number";
    TokenType[TokenType["String"] = 1] = "String";
    TokenType[TokenType["Identifier"] = 2] = "Identifier";
    TokenType[TokenType["Boolean"] = 3] = "Boolean";
    // Keywords: words with special meaning in the language.
    TokenType[TokenType["If"] = 4] = "If";
    TokenType[TokenType["ElseIf"] = 5] = "ElseIf";
    TokenType[TokenType["Else"] = 6] = "Else";
    TokenType[TokenType["True"] = 7] = "True";
    TokenType[TokenType["False"] = 8] = "False";
    TokenType[TokenType["Var"] = 9] = "Var";
    // Operators: symbols that perform operations on data.
    TokenType[TokenType["Plus"] = 10] = "Plus";
    TokenType[TokenType["Minus"] = 11] = "Minus";
    TokenType[TokenType["Asterisk"] = 12] = "Asterisk";
    TokenType[TokenType["Slash"] = 13] = "Slash";
    TokenType[TokenType["Percent"] = 14] = "Percent";
    TokenType[TokenType["Equal"] = 15] = "Equal";
    TokenType[TokenType["EqualEqual"] = 16] = "EqualEqual";
    TokenType[TokenType["Bang"] = 17] = "Bang";
    TokenType[TokenType["BangEqual"] = 18] = "BangEqual";
    TokenType[TokenType["Less"] = 19] = "Less";
    TokenType[TokenType["LessEqual"] = 20] = "LessEqual";
    TokenType[TokenType["Greater"] = 21] = "Greater";
    TokenType[TokenType["GreaterEqual"] = 22] = "GreaterEqual";
    TokenType[TokenType["And"] = 23] = "And";
    TokenType[TokenType["Or"] = 24] = "Or";
    // Punctuation: characters that structure the code.
    TokenType[TokenType["LeftParen"] = 25] = "LeftParen";
    TokenType[TokenType["RightParen"] = 26] = "RightParen";
    TokenType[TokenType["LeftBrace"] = 27] = "LeftBrace";
    TokenType[TokenType["RightBrace"] = 28] = "RightBrace";
    TokenType[TokenType["LeftBracket"] = 29] = "LeftBracket";
    TokenType[TokenType["RightBracket"] = 30] = "RightBracket";
    TokenType[TokenType["Comma"] = 31] = "Comma";
    TokenType[TokenType["Semicolon"] = 32] = "Semicolon";
    TokenType[TokenType["Print"] = 33] = "Print";
    TokenType[TokenType["Greet"] = 34] = "Greet";
    // End of File: a special token to mark the end of the source code.
    TokenType[TokenType["EOF"] = 35] = "EOF";
})(TokenType || (TokenType = {}));
/**
 * The Lexer (or scanner) is responsible for taking the raw source code as a string
 * and breaking it down into a series of tokens.
 */
var Lexer = /** @class */ (function () {
    function Lexer(source) {
        this.tokens = [];
        this.start = 0;
        this.current = 0;
        this.line = 1;
        this.source = source;
    }
    /**
     * This is the main method of the lexer. It scans the source code character
     * by character and generates a list of tokens.
     * @returns An array of tokens.
     */
    Lexer.prototype.scanTokens = function () {
        while (!this.isAtEnd()) {
            // We are at the beginning of the next lexeme.
            this.start = this.current;
            this.scanToken();
        }
        // Add a final "end of file" token to mark the end of the code.
        this.tokens.push({ type: TokenType.EOF, lexeme: "", line: this.line });
        return this.tokens;
    };
    /**
     * Checks if we have consumed all the characters in the source code.
     */
    Lexer.prototype.isAtEnd = function () {
        return this.current >= this.source.length;
    };
    /**
     * Scans a single token from the source code.
     */
    Lexer.prototype.scanToken = function () {
        this.skipWhitespace();
        this.start = this.current;
        if (this.isAtEnd())
            return;
        var remaining = this.source.substring(this.current);
        // Priority 1: Greetings (e.g., ❤...❤)
        for (var _i = 0, _a = Lexer.greetingParens; _i < _a.length; _i++) {
            var paren = _a[_i];
            if (remaining.startsWith(paren)) {
                this.greeting(paren);
                return;
            }
        }
        // Priority 2: Strings (e.g., 🤗...🤗)
        if (remaining.startsWith('🤗')) {
            this.string();
            return;
        }
        // Priority 3: Other special emoji tokens (e.g., 👉, 💦, 🥰)
        for (var lexeme in Lexer.emojiTokens) {
            if (remaining.startsWith(lexeme)) {
                this.current += lexeme.length;
                this.addToken(Lexer.emojiTokens[lexeme]);
                return;
            }
        }
        var c = this.peek();
        // Priority 4: Numbers
        if (this.isDigit(c)) {
            this.number();
            return;
        }
        // Priority 5: Identifiers and keywords
        if (this.isAlpha(c)) {
            this.identifier();
            return;
        }
        // If we've gotten this far, we don't know what this character is.
        // In a real compiler, we'd report an error. Here, we'll just consume
        // it to prevent an infinite loop.
        this.advance();
    };
    Lexer.prototype.skipWhitespace = function () {
        while (true) {
            var c = this.peek();
            switch (c) {
                case ' ':
                case '\r':
                case '\t':
                    this.advance();
                    break;
                case '\n':
                    this.line++;
                    this.advance();
                    break;
                default:
                    return;
            }
        }
    };
    /**
     * Consumes the current character in the source and returns it.
     */
    Lexer.prototype.advance = function () {
        return this.source.charAt(this.current++);
    };
    /**
     * Creates a new token for the current lexeme.
     * @param type The type of the token.
     * @param literal The literal value of the token (optional).
     */
    Lexer.prototype.addToken = function (type, literal) {
        var text = this.source.substring(this.start, this.current);
        this.tokens.push({ type: type, lexeme: text, literal: literal, line: this.line });
    };
    /**
     * Checks if the current character matches the expected character. If it does,
     * it consumes the character and returns true. Otherwise, it returns false.
     * @param expected The character to match.
     */
    Lexer.prototype.match = function (expected) {
        if (this.isAtEnd())
            return false;
        if (this.source.charAt(this.current) !== expected)
            return false;
        this.current++;
        return true;
    };
    /**
     * Looks at the current character without consuming it.
     */
    Lexer.prototype.peek = function () {
        if (this.isAtEnd())
            return '\0';
        return this.source.charAt(this.current);
    };
    Lexer.prototype.greeting = function (paren) {
        // Consume the opening paren
        this.current += paren.length;
        // Look for any greeting paren as the closing delimiter
        while (!this.isAtEnd()) {
            var remaining = this.source.substring(this.current);
            var foundClosing = false;
            for (var _i = 0, _a = Lexer.greetingParens; _i < _a.length; _i++) {
                var closingParen = _a[_i];
                if (remaining.startsWith(closingParen)) {
                    foundClosing = true;
                    // The value between the parens
                    var value = this.source.substring(this.start + paren.length, this.current);
                    // Consume the closing paren
                    this.current += closingParen.length;
                    this.addToken(TokenType.Greet, value);
                    return;
                }
            }
            if (!foundClosing) {
                if (this.peek() === '\n')
                    this.line++;
                this.advance();
            }
        }
        // Unterminated greeting - reached end of file
    };
    /**
     * Scans a string literal.
     */
    Lexer.prototype.string = function () {
        // Consume the opening '🤗'
        this.current += '🤗'.length;
        while (!this.isAtEnd() && !this.source.substring(this.current).startsWith('🤗')) {
            if (this.peek() === '\n')
                this.line++;
            this.advance();
        }
        if (this.isAtEnd()) {
            // Unterminated string.
            return;
        }
        // The closing '🤗'.
        var value = this.source.substring(this.start + '🤗'.length, this.current);
        // Consume the closing '🤗'
        this.current += '🤗'.length;
        this.addToken(TokenType.String, value);
    };
    /**
     * Checks if a character is a digit.
     */
    Lexer.prototype.isDigit = function (c) {
        return c >= '0' && c <= '9';
    };
    /**
     * Scans a number literal.
     */
    Lexer.prototype.number = function () {
        while (this.isDigit(this.peek()))
            this.advance();
        // Look for a fractional part.
        if (this.peek() === '.' && this.isDigit(this.peekNext())) {
            // Consume the "."
            this.advance();
            while (this.isDigit(this.peek()))
                this.advance();
        }
        this.addToken(TokenType.Number, parseFloat(this.source.substring(this.start, this.current)));
    };
    /**
     * Looks at the character after the current one without consuming it.
     */
    Lexer.prototype.peekNext = function () {
        if (this.current + 1 >= this.source.length)
            return '\0';
        return this.source.charAt(this.current + 1);
    };
    /**
     * Scans an identifier or a keyword.
     */
    Lexer.prototype.identifier = function () {
        while (this.isAlphaNumeric(this.peek()))
            this.advance();
        var text = this.source.substring(this.start, this.current);
        var type = Lexer.keywords[text];
        if (type === undefined)
            type = TokenType.Identifier;
        this.addToken(type);
    };
    /**
     * Checks if a character is a valid start for an identifier.
     * In "Uncle Lang", this is any character that is not a digit and not
     * a special symbol used for other tokens.
     */
    Lexer.prototype.isAlpha = function (c) {
        var specialChars = "👉👈👆👇🤜🤛🌟🥰❌🤗❤😘🥺😈😥💏💦 \r\t\n";
        return c !== '\0' && !this.isDigit(c) && !specialChars.includes(c);
    };
    /**
     * Checks if a character can be part of an identifier.
     */
    Lexer.prototype.isAlphaNumeric = function (c) {
        return this.isAlpha(c) || this.isDigit(c);
    };
    /**
     * A map of all the keywords in the language and their corresponding token types.
     */
    Lexer.keywords = {
        "如果": TokenType.If,
        "也可能": TokenType.ElseIf,
        "不然就": TokenType.Else,
        "真的": TokenType.True,
        "假的": TokenType.False,
        "是": TokenType.Equal,
        "等於": TokenType.EqualEqual,
        "❌等於": TokenType.BangEqual,
        "小於": TokenType.Less,
        "大於": TokenType.Greater,
        "小於等於": TokenType.LessEqual,
        "大於等於": TokenType.GreaterEqual,
        "而且": TokenType.And,
        "或是": TokenType.Or,
        "加上": TokenType.Plus,
        "減掉": TokenType.Minus,
        "乘": TokenType.Asterisk,
        "除": TokenType.Slash,
        "取餘數": TokenType.Percent,
        "跟你說": TokenType.Var,
    };
    /**
     * A map of all the single-character/emoji tokens in the language.
     * This makes it easy to add new emoji tokens in the future.
     */
    Lexer.emojiTokens = {
        '👉': TokenType.LeftParen,
        '👈': TokenType.RightParen,
        '👆': TokenType.LeftBrace,
        '👇': TokenType.RightBrace,
        '🤜': TokenType.LeftBracket,
        '🤛': TokenType.RightBracket,
        '🌟': TokenType.Comma,
        '💦': TokenType.Semicolon,
        '🥰': TokenType.Print,
        '❌': TokenType.Bang,
    };
    Lexer.greetingParens = ['❤', '😘', '🥺', '😈', '😥', '💏'];
    // A combined list of all multi-character symbols to prevent them from being parsed as identifiers.
    Lexer.specialSymbols = __spreadArray(__spreadArray(__spreadArray([], Object.keys(Lexer.emojiTokens), true), Lexer.greetingParens, true), [
        '🤗',
        ' ', '\r', '\t', '\n', '\0'
    ], false);
    return Lexer;
}());



/***/ },

/***/ "./src/interpreter/messages.ts"
/*!*************************************!*\
  !*** ./src/interpreter/messages.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessages: () => (/* binding */ ErrorMessages)
/* harmony export */ });
var ErrorMessages = {
    EXPECT_GREETING_AT_START: "Expect greeting '😘...😘' at the start of the statement.",
    GREETING_MUST_CONTAIN_UNCLE: "Greeting must contain '大叔' to be valid.",
    EXPECT_VARIABLE_NAME: "Expect variable name.",
    EXPECT_SEMICOLON_AFTER_VAR: "Expect '💦' after variable declaration.",
    MISSING_GREETING: "This statement requires a greeting '😘...😘' at the beginning.",
    EXPECT_LEFT_PAREN_AFTER_IF: "Expect '👉' after '如果'.",
    EXPECT_RIGHT_PAREN_AFTER_CONDITION: "Expect ')' after if condition.",
    EXPECT_GREETING_BEFORE_ELSE_IF: "Expect greeting before '也可能'.",
    EXPECT_IF_AFTER_ELSE_IF: "Expect '如果' after '也可能'.",
    EXPECT_GREETING_BEFORE_ELSE: "Expect greeting before '不然就'.",
    EXPECT_SEMICOLON_AFTER_VALUE: "Expect '💦' after value.",
    EXPECT_SEMICOLON_AFTER_ASSIGNMENT: "Expect '💦' after assignment.",
    INVALID_ASSIGNMENT_STATEMENT: "Invalid assignment statement.",
    EXPECT_RIGHT_BRACE_AFTER_BLOCK: "Expect '👇' after block.",
    EXPECT_SEMICOLON_AFTER_EXPRESSION: "Expect '💦' after expression.",
    INVALID_ASSIGNMENT_TARGET: "Invalid assignment target.",
    MAX_ARGUMENTS_EXCEEDED: "Can't have more than 255 arguments.",
    EXPECT_RIGHT_PAREN_AFTER_ARGUMENTS: "Expect '👈' after arguments.",
    EXPECT_RIGHT_BRACKET_AFTER_INDEX: "Expect '🤛' after index.",
    EXPECT_EXPRESSION: "Expect expression.",
    EXPECT_RIGHT_PAREN_AFTER_EXPRESSION: "Expect ')' after expression.",
    EXPECT_RIGHT_BRACKET_AFTER_VECTOR: "Expect '🤛' after vector values.",
};


/***/ },

/***/ "./src/interpreter/parser.ts"
/*!***********************************!*\
  !*** ./src/interpreter/parser.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lexer */ "./src/interpreter/lexer.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./src/interpreter/messages.ts");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ast */ "./src/interpreter/ast.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * A simple error class for parsing errors.
 */
var ParseError = /** @class */ (function (_super) {
    __extends(ParseError, _super);
    function ParseError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParseError;
}(Error));
/**
 * The Parser is responsible for taking a sequence of tokens from the lexer and
 * building an Abstract Syntax Tree (AST). The AST is a tree structure that
 * represents the grammatical structure of the code. This parser uses a
 * recursive descent strategy, where each method corresponds to a rule in the
 * language's grammar.
 */
var Parser = /** @class */ (function () {
    function Parser(tokens) {
        this.current = 0;
        this.errors = [];
        this.tokens = tokens;
    }
    /**
     * The main entry point for the parser. It parses a sequence of statements
     * until it reaches the end of the token stream.
     * @returns An array of statements.
     */
    Parser.prototype.parse = function () {
        var statements = [];
        while (!this.isAtEnd()) {
            var stmt = this.statement();
            if (stmt) {
                statements.push(stmt);
            }
        }
        return statements;
    };
    /**
     * Parses a declaration or a statement.
     */
    Parser.prototype.statement = function () {
        try {
            if (this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Greet)) {
                // Statements that MUST start with a greeting
                var greetToken = this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Greet, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_GREETING_AT_START);
                // Validate that the greeting contains '大叔'
                if (!greetToken.literal || !greetToken.literal.includes('大叔')) {
                    throw this.error(greetToken, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.GREETING_MUST_CONTAIN_UNCLE);
                }
                if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Var)) {
                    return this.varDeclaration();
                }
                if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.If)) {
                    return this.ifStatement();
                }
                if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Print)) {
                    return this.printStatement();
                }
                // If it's not any of the above, it must be an assignment statement.
                return this.assignmentStatement();
            }
            else {
                // Statements that DO NOT start with a greeting
                return this.ungreetedStatement();
            }
        }
        catch (error) {
            this.synchronize();
            return null;
        }
    };
    /**
     * Parses a variable declaration. Assumes 'Greet' and 'Var' tokens have been consumed.
     */
    Parser.prototype.varDeclaration = function () {
        var name = this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Identifier, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_VARIABLE_NAME);
        var initializer = null;
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Equal)) {
            initializer = this.expression();
        }
        this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Semicolon, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_SEMICOLON_AFTER_VAR);
        return new _ast__WEBPACK_IMPORTED_MODULE_2__.Var(name, initializer);
    };
    /**
     * Parses statements that do not require a greeting.
     */
    Parser.prototype.ungreetedStatement = function () {
        if (this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Var) || this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.If) || this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Print)) {
            throw this.error(this.peek(), _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.MISSING_GREETING);
        }
        // Check if this looks like an assignment (identifier followed by 是)
        if (this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Identifier)) {
            // Look ahead to see if this is an assignment
            var savedCurrent = this.current;
            this.advance(); // consume identifier
            // Check for index access patterns: identifier🤜...🤛
            while (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftBracket)) {
                // Skip the index expression
                var bracketDepth = 1;
                while (bracketDepth > 0 && !this.isAtEnd()) {
                    if (this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftBracket))
                        bracketDepth++;
                    if (this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightBracket))
                        bracketDepth--;
                    this.advance();
                }
            }
            var isAssignment = this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Equal);
            this.current = savedCurrent; // restore position
            if (isAssignment) {
                throw this.error(this.peek(), _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.MISSING_GREETING);
            }
        }
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftBrace)) {
            return new _ast__WEBPACK_IMPORTED_MODULE_2__.Block(this.block());
        }
        return this.expressionStatement();
    };
    /**
     * Parses an if statement. Assumes 'Greet' and 'If' tokens have been consumed.
     */
    Parser.prototype.ifStatement = function () {
        this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftParen, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_LEFT_PAREN_AFTER_IF);
        var condition = this.expression();
        this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightParen, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_RIGHT_PAREN_AFTER_CONDITION);
        var thenBranch = this.statement(); // A block can contain any declaration
        var elseBranch = null;
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.ElseIf)) {
            elseBranch = this.ifStatement();
        }
        else if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Else)) {
            elseBranch = this.statement();
        }
        return new _ast__WEBPACK_IMPORTED_MODULE_2__.If(condition, thenBranch, elseBranch);
    };
    /**
     * Parses a print statement. Assumes 'Greet' and 'Print' tokens have been consumed.
     */
    Parser.prototype.printStatement = function () {
        var value = this.expression();
        this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Semicolon, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_SEMICOLON_AFTER_VALUE);
        return new _ast__WEBPACK_IMPORTED_MODULE_2__.Print(value);
    };
    /**
     * Parses an assignment statement. Assumes 'Greet' token has been consumed.
     */
    Parser.prototype.assignmentStatement = function () {
        var expr = this.expression();
        // After an expression, we expect a semicolon for an expression statement,
        // but an assignment is not an expression statement in this context.
        // The 'assignment' expression parsing handles the '='.
        if (expr instanceof _ast__WEBPACK_IMPORTED_MODULE_2__.Assign) {
            this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Semicolon, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_SEMICOLON_AFTER_ASSIGNMENT);
            return new _ast__WEBPACK_IMPORTED_MODULE_2__.Expression(expr);
        }
        this.error(this.peek(), _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.INVALID_ASSIGNMENT_STATEMENT);
        return null; // Should be unreachable due to error
    };
    /**
     * Parses a block of statements.
     */
    Parser.prototype.block = function () {
        var statements = [];
        while (!this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightBrace) && !this.isAtEnd()) {
            statements.push(this.statement());
        }
        this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightBrace, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_RIGHT_BRACE_AFTER_BLOCK);
        return statements;
    };
    /**
     * Parses an expression statement.
     */
    Parser.prototype.expressionStatement = function () {
        var expr = this.expression();
        this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Semicolon, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_SEMICOLON_AFTER_EXPRESSION);
        return new _ast__WEBPACK_IMPORTED_MODULE_2__.Expression(expr);
    };
    /**
     * The following methods parse expressions, following the order of precedence.
     */
    Parser.prototype.expression = function () {
        return this.assignment();
    };
    Parser.prototype.assignment = function () {
        var expr = this.or();
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Equal)) {
            var equals = this.previous();
            var value = this.expression(); // Changed from this.assignment()
            if (expr instanceof _ast__WEBPACK_IMPORTED_MODULE_2__.Variable) {
                var name_1 = expr.name;
                return new _ast__WEBPACK_IMPORTED_MODULE_2__.Assign(name_1, value);
            }
            else if (expr instanceof _ast__WEBPACK_IMPORTED_MODULE_2__.IndexAccess) {
                // This is more complex, for now we keep it simple
                this.error(equals, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.INVALID_ASSIGNMENT_TARGET);
            }
            this.error(equals, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.INVALID_ASSIGNMENT_TARGET);
        }
        return expr;
    };
    Parser.prototype.or = function () {
        var expr = this.and();
        while (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Or)) {
            var operator = this.previous();
            var right = this.and();
            expr = new _ast__WEBPACK_IMPORTED_MODULE_2__.Logical(expr, operator, right);
        }
        return expr;
    };
    Parser.prototype.and = function () {
        var expr = this.equality();
        while (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.And)) {
            var operator = this.previous();
            var right = this.equality();
            expr = new _ast__WEBPACK_IMPORTED_MODULE_2__.Logical(expr, operator, right);
        }
        return expr;
    };
    Parser.prototype.equality = function () {
        var expr = this.comparison();
        while (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.BangEqual, _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.EqualEqual)) {
            var operator = this.previous();
            var right = this.comparison();
            expr = new _ast__WEBPACK_IMPORTED_MODULE_2__.Binary(expr, operator, right);
        }
        return expr;
    };
    Parser.prototype.comparison = function () {
        var expr = this.term();
        while (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Greater, _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.GreaterEqual, _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Less, _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LessEqual)) {
            var operator = this.previous();
            var right = this.term();
            expr = new _ast__WEBPACK_IMPORTED_MODULE_2__.Binary(expr, operator, right);
        }
        return expr;
    };
    Parser.prototype.term = function () {
        var expr = this.factor();
        while (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Minus, _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Plus)) {
            var operator = this.previous();
            var right = this.factor();
            expr = new _ast__WEBPACK_IMPORTED_MODULE_2__.Binary(expr, operator, right);
        }
        return expr;
    };
    Parser.prototype.factor = function () {
        var expr = this.unary();
        while (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Slash, _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Asterisk, _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Percent)) {
            var operator = this.previous();
            var right = this.unary();
            expr = new _ast__WEBPACK_IMPORTED_MODULE_2__.Binary(expr, operator, right);
        }
        return expr;
    };
    Parser.prototype.unary = function () {
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Bang, _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Minus)) {
            var operator = this.previous();
            var right = this.unary();
            return new _ast__WEBPACK_IMPORTED_MODULE_2__.Unary(operator, right);
        }
        return this.call();
    };
    Parser.prototype.call = function () {
        var expr = this.primary();
        while (true) {
            if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftParen)) {
                expr = this.finishCall(expr);
            }
            else if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftBracket)) {
                expr = this.finishIndexAccess(expr);
            }
            else {
                break;
            }
        }
        return expr;
    };
    Parser.prototype.finishCall = function (callee) {
        var args = [];
        if (!this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightParen)) {
            do {
                if (args.length >= 255) {
                    this.error(this.peek(), _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.MAX_ARGUMENTS_EXCEEDED);
                }
                args.push(this.expression());
            } while (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Comma));
        }
        var paren = this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightParen, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_RIGHT_PAREN_AFTER_ARGUMENTS);
        return new _ast__WEBPACK_IMPORTED_MODULE_2__.Call(callee, paren, args);
    };
    Parser.prototype.finishIndexAccess = function (callee) {
        var index = this.expression();
        var bracket = this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightBracket, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_RIGHT_BRACKET_AFTER_INDEX);
        return new _ast__WEBPACK_IMPORTED_MODULE_2__.IndexAccess(callee, bracket, index);
    };
    /**
     * Parses the highest-precedence expressions.
     */
    Parser.prototype.primary = function () {
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.False))
            return new _ast__WEBPACK_IMPORTED_MODULE_2__.Literal(false);
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.True))
            return new _ast__WEBPACK_IMPORTED_MODULE_2__.Literal(true);
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Number, _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.String)) {
            return new _ast__WEBPACK_IMPORTED_MODULE_2__.Literal(this.previous().literal);
        }
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Identifier)) {
            return new _ast__WEBPACK_IMPORTED_MODULE_2__.Variable(this.previous());
        }
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftParen)) {
            var expr = this.expression();
            this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightParen, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_RIGHT_PAREN_AFTER_EXPRESSION);
            return new _ast__WEBPACK_IMPORTED_MODULE_2__.Grouping(expr);
        }
        if (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftBracket)) {
            return this.vectorLiteral();
        }
        throw this.error(this.peek(), _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_EXPRESSION);
    };
    Parser.prototype.vectorLiteral = function () {
        var values = [];
        if (!this.check(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightBracket)) {
            do {
                values.push(this.expression());
            } while (this.match(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Comma));
        }
        this.consume(_lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightBracket, _messages__WEBPACK_IMPORTED_MODULE_1__.ErrorMessages.EXPECT_RIGHT_BRACKET_AFTER_VECTOR);
        return new _ast__WEBPACK_IMPORTED_MODULE_2__.VectorLiteral(values);
    };
    /**
     * Checks if the current token is one of the given types. If so, it consumes
     * the token and returns true.
     */
    Parser.prototype.match = function () {
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i] = arguments[_i];
        }
        for (var _a = 0, types_1 = types; _a < types_1.length; _a++) {
            var type = types_1[_a];
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    };
    /**
     * Checks if the current token is of the given type. If not, it throws an error.
     */
    Parser.prototype.consume = function (type, message) {
        if (this.check(type))
            return this.advance();
        throw this.error(this.peek(), message);
    };
    /**
     * Checks if the current token is of the given type without consuming it.
     */
    Parser.prototype.check = function (type) {
        if (this.isAtEnd())
            return false;
        return this.peek().type === type;
    };
    /**
     * Consumes the current token and returns it.
     */
    Parser.prototype.advance = function () {
        if (!this.isAtEnd())
            this.current++;
        return this.previous();
    };
    /**
     * Checks if we are at the end of the token stream.
     */
    Parser.prototype.isAtEnd = function () {
        return this.peek().type === _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.EOF;
    };
    /**
     * Returns the current token without consuming it.
     */
    Parser.prototype.peek = function () {
        return this.tokens[this.current];
    };
    /**
     * Returns the previous token.
     */
    Parser.prototype.previous = function () {
        return this.tokens[this.current - 1];
    };
    /**
     * Reports a parsing error.
     */
    Parser.prototype.error = function (token, message) {
        // In a real compiler, you would have a more sophisticated error reporting system.
        var errorMessage = "Error at line ".concat(token.line, ": ").concat(message);
        this.errors.push(errorMessage);
        console.error(errorMessage);
        return new ParseError();
    };
    /**
     * This method is used to recover from a parse error. It discards tokens until
     * it finds a statement boundary, which allows the parser to continue parsing
     * the rest of the file.
     */
    Parser.prototype.synchronize = function () {
        this.advance();
        while (!this.isAtEnd()) {
            if (this.previous().type === _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Semicolon)
                return;
            switch (this.peek().type) {
                case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Var:
                case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.If:
                case _lexer__WEBPACK_IMPORTED_MODULE_0__.TokenType.Print:
                    return;
            }
            this.advance();
        }
    };
    return Parser;
}());



/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _interpreter_lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpreter/lexer */ "./src/interpreter/lexer.ts");
/* harmony import */ var _interpreter_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpreter/parser */ "./src/interpreter/parser.ts");
/* harmony import */ var _interpreter_interpreter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpreter/interpreter */ "./src/interpreter/interpreter.ts");




var messageDisplay = document.getElementById("message-display");
var messageInput = document.getElementById("message-input");
var sendButton = document.getElementById("send-button");
function appendMessage(text, sender) {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", "".concat(sender, "-message"));
    messageElement.textContent = text;
    messageDisplay.appendChild(messageElement);
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
}
function run(source) {
    var interpreter = new _interpreter_interpreter__WEBPACK_IMPORTED_MODULE_3__.Interpreter(function (message) {
        appendMessage(message, 'bot');
    });
    var lexer = new _interpreter_lexer__WEBPACK_IMPORTED_MODULE_1__.Lexer(source);
    var tokens = lexer.scanTokens();
    console.log(tokens);
    var parser = new _interpreter_parser__WEBPACK_IMPORTED_MODULE_2__.Parser(tokens);
    var statements = parser.parse();
    // Stop if there was a syntax error.
    if (parser.errors.length > 0) {
        parser.errors.forEach(function (error) { return appendMessage(error, 'bot'); });
        return;
    }
    console.log("AST:", statements);
    interpreter.interpret(statements);
}
sendButton.addEventListener("click", function () {
    var message = messageInput.value;
    if (message.trim() !== "") {
        appendMessage(message, 'user');
        run(message);
        messageInput.value = "";
    }
});
messageInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // Prevent new line in textarea
        sendButton.click();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLCtCQUErQjtRQUNuRCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9zcmMvaW50ZXJwcmV0ZXIvYXN0LnRzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9zcmMvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXIudHMiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy8uL3NyYy9pbnRlcnByZXRlci9sZXhlci50cyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vc3JjL2ludGVycHJldGVyL21lc3NhZ2VzLnRzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9zcmMvaW50ZXJwcmV0ZXIvcGFyc2VyLnRzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3VuY2xlX2xhbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91bmNsZV9sYW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VuY2xlX2xhbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jY2hhdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoYXQtYm94IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2lucHV0LWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI21lc3NhZ2UtaW5wdXQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgcmVzaXplOiBub25lO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWluLWhlaWdodDogODBweDsgLyogQXBwcm94aW1hdGVseSA0IGxpbmVzICovXG4gICAgbWF4LWhlaWdodDogODBweDsgLyogRml4ZWQgYXQgNCBsaW5lcywgc2Nyb2xsIGFmdGVyIHRoYXQgKi9cbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4jc2VuZC1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5tZXNzYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4udXNlci1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmJvdC1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWViO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBRSwwQkFBMEI7SUFDNUMsZ0JBQWdCLEVBQUUsd0NBQXdDO0lBQzFELGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjaGF0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNoYXQtYm94IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2lucHV0LWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbWVzc2FnZS1pbnB1dCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWluLWhlaWdodDogODBweDsgLyogQXBwcm94aW1hdGVseSA0IGxpbmVzICovXFxuICAgIG1heC1oZWlnaHQ6IDgwcHg7IC8qIEZpeGVkIGF0IDQgbGluZXMsIHNjcm9sbCBhZnRlciB0aGF0ICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jc2VuZC1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi51c2VyLW1lc3NhZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmJvdC1tZXNzYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllYjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL2xleGVyXCI7XG5cbi8qKlxuICogVGhlIFZpc2l0b3IgcGF0dGVybiBpcyBhIGRlc2lnbiBwYXR0ZXJuIHRoYXQgYWxsb3dzIHlvdSB0byBhZGQgbmV3IG9wZXJhdGlvbnNcbiAqIHRvIGEgc2V0IG9mIGNsYXNzZXMgd2l0aG91dCBjaGFuZ2luZyB0aGUgY2xhc3NlcyB0aGVtc2VsdmVzLiBJbiBvdXIgY2FzZSwgdGhlXG4gKiBgRXhwcmAgY2xhc3NlcyByZXByZXNlbnQgdGhlIHN0cnVjdHVyZSBvZiBvdXIgY29kZSAodGhlIEFTVCksIGFuZCB3ZSB3YW50IHRvXG4gKiBwZXJmb3JtIG9wZXJhdGlvbnMgb24gdGhpcyBzdHJ1Y3R1cmUsIGxpa2UgaW50ZXJwcmV0aW5nIGl0LiBUaGUgYFZpc2l0b3JgXG4gKiBpbnRlcmZhY2UgZGVmaW5lcyBhIGB2aXNpdGAgbWV0aG9kIGZvciBlYWNoIHR5cGUgb2YgZXhwcmVzc2lvbi5cbiAqIEB0ZW1wbGF0ZSBSIFRoZSByZXR1cm4gdHlwZSBvZiB0aGUgdmlzaXQgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaXNpdG9yPFI+IHtcbiAgICB2aXNpdEFzc2lnbkV4cHIoZXhwcjogQXNzaWduKTogUjtcbiAgICB2aXNpdEJpbmFyeUV4cHIoZXhwcjogQmluYXJ5KTogUjtcbiAgICB2aXNpdENhbGxFeHByKGV4cHI6IENhbGwpOiBSO1xuICAgIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEdyb3VwaW5nKTogUjtcbiAgICB2aXNpdExpdGVyYWxFeHByKGV4cHI6IExpdGVyYWwpOiBSO1xuICAgIHZpc2l0TG9naWNhbEV4cHIoZXhwcjogTG9naWNhbCk6IFI7XG4gICAgdmlzaXRVbmFyeUV4cHIoZXhwcjogVW5hcnkpOiBSO1xuICAgIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IFZhcmlhYmxlKTogUjtcbiAgICB2aXNpdFZlY3RvckxpdGVyYWxFeHByKGV4cHI6IFZlY3RvckxpdGVyYWwpOiBSO1xuICAgIHZpc2l0SW5kZXhBY2Nlc3NFeHByKGV4cHI6IEluZGV4QWNjZXNzKTogUjtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvciBhbGwgZXhwcmVzc2lvbiBub2RlcyBpbiBvdXIgQWJzdHJhY3QgU3ludGF4IFRyZWUgKEFTVCkuXG4gKiBBbiBleHByZXNzaW9uIGlzIGEgcGllY2Ugb2YgY29kZSB0aGF0IGV2YWx1YXRlcyB0byBhIHZhbHVlLCBsaWtlIGAxICsgMmAgb3IgYHggKiAzYC5cbiAqIFRoZSBgYWNjZXB0YCBtZXRob2QgaXMgcGFydCBvZiB0aGUgVmlzaXRvciBwYXR0ZXJuLiBJdCBhbGxvd3MgYSB2aXNpdG9yIChsaWtlIG91clxuICogaW50ZXJwcmV0ZXIpIHRvIHByb2Nlc3MgdGhlIGV4cHJlc3Npb24gbm9kZS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV4cHIge1xuICAgIGFic3RyYWN0IGFjY2VwdDxSPih2aXNpdG9yOiBWaXNpdG9yPFI+KTogUjtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIHRoZSBgVmlzaXRvcmAgZm9yIGV4cHJlc3Npb25zLCB0aGlzIGlzIGEgdmlzaXRvciBmb3Igc3RhdGVtZW50cy5cbiAqIEEgc3RhdGVtZW50IGlzIGEgcGllY2Ugb2YgY29kZSB0aGF0IHBlcmZvcm1zIGFuIGFjdGlvbiwgbGlrZSBkZWNsYXJpbmcgYSB2YXJpYWJsZVxuICogb3IgcHJpbnRpbmcgYSB2YWx1ZS5cbiAqIEB0ZW1wbGF0ZSBSIFRoZSByZXR1cm4gdHlwZSBvZiB0aGUgdmlzaXQgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdG10VmlzaXRvcjxSPiB7XG4gICAgdmlzaXRCbG9ja1N0bXQoc3RtdDogQmxvY2spOiBSO1xuICAgIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogRXhwcmVzc2lvbik6IFI7XG4gICAgdmlzaXRJZlN0bXQoc3RtdDogSWYpOiBSO1xuICAgIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFByaW50KTogUjtcbiAgICB2aXNpdFZhclN0bXQoc3RtdDogVmFyKTogUjtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvciBhbGwgc3RhdGVtZW50IG5vZGVzIGluIG91ciBBU1QuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdG10IHtcbiAgICBhYnN0cmFjdCBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXNzaWdubWVudCBleHByZXNzaW9uLCBsaWtlIGB4ID0gMTBgLlxuICovXG5leHBvcnQgY2xhc3MgQXNzaWduIGV4dGVuZHMgRXhwciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIHRva2VuIGZvciB0aGUgdmFyaWFibGUgYmVpbmcgYXNzaWduZWQgdG8uXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBleHByZXNzaW9uIG9uIHRoZSByaWdodC1oYW5kIHNpZGUgb2YgdGhlIGA9YC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogVG9rZW4sIHB1YmxpYyB2YWx1ZTogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEFzc2lnbkV4cHIodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBiaW5hcnkgb3BlcmF0aW9uLCBsaWtlIGAxICsgMmAgb3IgYHggPiA1YC5cbiAqL1xuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBsZWZ0IFRoZSBleHByZXNzaW9uIG9uIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIG9wZXJhdG9yLlxuICAgICAqIEBwYXJhbSBvcGVyYXRvciBUaGUgdG9rZW4gZm9yIHRoZSBvcGVyYXRvciAoYCtgLCBgLWAsIGAqYCwgYC9gLCBldGMuKS5cbiAgICAgKiBAcGFyYW0gcmlnaHQgVGhlIGV4cHJlc3Npb24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIG9wZXJhdG9yLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsZWZ0OiBFeHByLCBwdWJsaWMgb3BlcmF0b3I6IFRva2VuLCBwdWJsaWMgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCaW5hcnlFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZnVuY3Rpb24gY2FsbC4gQWx0aG91Z2ggd2UgZG9uJ3QgaGF2ZSB1c2VyLWRlZmluZWQgZnVuY3Rpb25zIHlldCxcbiAqIHRoaXMgaXMgdXNlZCBmb3IgYnVpbHQtaW4gZnVuY3Rpb25zIGxpa2UgYHByaW50YC5cbiAqL1xuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY2FsbGVlIFRoZSBleHByZXNzaW9uIHRoYXQgZXZhbHVhdGVzIHRvIHRoZSBmdW5jdGlvbiBiZWluZyBjYWxsZWQuXG4gICAgICogQHBhcmFtIHBhcmVuIFRoZSBjbG9zaW5nIHBhcmVudGhlc2lzIHRva2VuLCB1c2VkIGZvciBlcnJvciByZXBvcnRpbmcuXG4gICAgICogQHBhcmFtIGFyZ3MgQSBsaXN0IG9mIGV4cHJlc3Npb25zIGZvciB0aGUgYXJndW1lbnRzIHRvIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2FsbGVlOiBFeHByLCBwdWJsaWMgcGFyZW46IFRva2VuLCBwdWJsaWMgYXJnczogRXhwcltdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2FsbEV4cHIodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBncm91cGluZyBvZiBleHByZXNzaW9ucywgbGlrZSBgKDEgKyAyKWAuIFRoaXMgaXMgdXNlZCB0b1xuICogb3ZlcnJpZGUgdGhlIGRlZmF1bHQgb3JkZXIgb2Ygb3BlcmF0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VwaW5nIGV4dGVuZHMgRXhwciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb24gVGhlIGV4cHJlc3Npb24gaW5zaWRlIHRoZSBwYXJlbnRoZXNlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXhwcmVzc2lvbjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEdyb3VwaW5nRXhwcih0aGlzKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGxpdGVyYWwgdmFsdWUsIGxpa2UgYSBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgb3IgbmlsLlxuICovXG5leHBvcnQgY2xhc3MgTGl0ZXJhbCBleHRlbmRzIEV4cHIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYWN0dWFsIHZhbHVlIG9mIHRoZSBsaXRlcmFsLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbEV4cHIodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBsb2dpY2FsIG9wZXJhdGlvbiwgbGlrZSBgYSAmJiBiYCBvciBgeCB8fCB5YC5cbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2ljYWwgZXh0ZW5kcyBFeHByIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbGVmdCBUaGUgZXhwcmVzc2lvbiBvbiB0aGUgbGVmdCBzaWRlIG9mIHRoZSBvcGVyYXRvci5cbiAgICAgKiBAcGFyYW0gb3BlcmF0b3IgVGhlIHRva2VuIGZvciB0aGUgbG9naWNhbCBvcGVyYXRvciAoYCYmYCBvciBgfHxgKS5cbiAgICAgKiBAcGFyYW0gcmlnaHQgVGhlIGV4cHJlc3Npb24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIG9wZXJhdG9yLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsZWZ0OiBFeHByLCBwdWJsaWMgb3BlcmF0b3I6IFRva2VuLCBwdWJsaWMgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMb2dpY2FsRXhwcih0aGlzKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHVuYXJ5IG9wZXJhdGlvbiwgbGlrZSBgLTVgIG9yIGAhdHJ1ZWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBVbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBvcGVyYXRvciBUaGUgdG9rZW4gZm9yIHRoZSB1bmFyeSBvcGVyYXRvciAoYC1gIG9yIGAhYCkuXG4gICAgICogQHBhcmFtIHJpZ2h0IFRoZSBleHByZXNzaW9uIHRvIHRoZSByaWdodCBvZiB0aGUgb3BlcmF0b3IuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIG9wZXJhdG9yOiBUb2tlbiwgcHVibGljIHJpZ2h0OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VW5hcnlFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZXhwcmVzc2lvbiwgbGlrZSBgeGAuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEV4cHIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSB0b2tlbiBmb3IgdGhlIHZhcmlhYmxlJ3MgbmFtZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogVG9rZW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJpYWJsZUV4cHIodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSB2ZWN0b3IgKGFycmF5KSBsaXRlcmFsLCBsaWtlIGBbMSwgMiwgM11gLlxuICovXG5leHBvcnQgY2xhc3MgVmVjdG9yTGl0ZXJhbCBleHRlbmRzIEV4cHIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB2YWx1ZXMgQSBsaXN0IG9mIGV4cHJlc3Npb25zIGZvciB0aGUgZWxlbWVudHMgb2YgdGhlIHZlY3Rvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWVzOiBFeHByW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWZWN0b3JMaXRlcmFsRXhwcih0aGlzKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBpbmRleCBhY2Nlc3MgZXhwcmVzc2lvbiwgbGlrZSBgbXlfdmVjdG9yWzBdYC5cbiAqL1xuZXhwb3J0IGNsYXNzIEluZGV4QWNjZXNzIGV4dGVuZHMgRXhwciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNhbGxlZSBUaGUgZXhwcmVzc2lvbiB0aGF0IGV2YWx1YXRlcyB0byB0aGUgdmVjdG9yIGJlaW5nIGluZGV4ZWQuXG4gICAgICogQHBhcmFtIGJyYWNrZXQgVGhlIGNsb3NpbmcgYnJhY2tldCB0b2tlbiwgdXNlZCBmb3IgZXJyb3IgcmVwb3J0aW5nLlxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgZXhwcmVzc2lvbiB0aGF0IGV2YWx1YXRlcyB0byB0aGUgaW5kZXguXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIGNhbGxlZTogRXhwciwgcHVibGljIGJyYWNrZXQ6IFRva2VuLCBwdWJsaWMgaW5kZXg6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJbmRleEFjY2Vzc0V4cHIodGhpcyk7XG4gICAgfVxufVxuXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGJsb2NrIG9mIHN0YXRlbWVudHMsIGVuY2xvc2VkIGluIGN1cmx5IGJyYWNlcyBgeyAuLi4gfWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9jayBleHRlbmRzIFN0bXQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzdGF0ZW1lbnRzIEEgbGlzdCBvZiBzdGF0ZW1lbnRzIGluc2lkZSB0aGUgYmxvY2suXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIHN0YXRlbWVudHM6IFN0bXRbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCbG9ja1N0bXQodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gZXhwcmVzc2lvbiBzdGF0ZW1lbnQuIFRoaXMgaXMgYW4gZXhwcmVzc2lvbiB0aGF0IGlzIHVzZWQgYXMgYVxuICogc3RhdGVtZW50LCBsaWtlIGEgZnVuY3Rpb24gY2FsbCBgbXlfZnVuY3Rpb24oKTtgLlxuICovXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFN0bXQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uIFRoZSBleHByZXNzaW9uIHRvIGJlIGV4ZWN1dGVkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBleHByZXNzaW9uOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cHJlc3Npb25TdG10KHRoaXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGlmIHN0YXRlbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIElmIGV4dGVuZHMgU3RtdCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmRpdGlvbiBUaGUgY29uZGl0aW9uIHRvIGJlIGV2YWx1YXRlZC5cbiAgICAgKiBAcGFyYW0gdGhlbkJyYW5jaCBUaGUgc3RhdGVtZW50IHRvIGJlIGV4ZWN1dGVkIGlmIHRoZSBjb25kaXRpb24gaXMgdHJ1ZS5cbiAgICAgKiBAcGFyYW0gZWxzZUJyYW5jaCBUaGUgc3RhdGVtZW50IHRvIGJlIGV4ZWN1dGVkIGlmIHRoZSBjb25kaXRpb24gaXMgZmFsc2UgKG9wdGlvbmFsKS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZGl0aW9uOiBFeHByLCBwdWJsaWMgdGhlbkJyYW5jaDogU3RtdCwgcHVibGljIGVsc2VCcmFuY2g6IFN0bXQgfCBudWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdElmU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHByaW50IHN0YXRlbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByaW50IGV4dGVuZHMgU3RtdCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb24gVGhlIGV4cHJlc3Npb24gd2hvc2UgdmFsdWUgaXMgdG8gYmUgcHJpbnRlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXhwcmVzc2lvbjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQcmludFN0bXQodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBzdGF0ZW1lbnQsIGxpa2UgYHZhciB4ID0gMTA7YC5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhciBleHRlbmRzIFN0bXQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSB0b2tlbiBmb3IgdGhlIHZhcmlhYmxlJ3MgbmFtZS5cbiAgICAgKiBAcGFyYW0gaW5pdGlhbGl6ZXIgVGhlIGV4cHJlc3Npb24gdG8gaW5pdGlhbGl6ZSB0aGUgdmFyaWFibGUgd2l0aCAob3B0aW9uYWwpLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBUb2tlbiwgcHVibGljIGluaXRpYWxpemVyOiBFeHByIHwgbnVsbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJTdG10KHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQXNzaWduLFxuICAgIEJpbmFyeSxcbiAgICBCbG9jayxcbiAgICBDYWxsLFxuICAgIEV4cHIsXG4gICAgRXhwcmVzc2lvbixcbiAgICBHcm91cGluZyxcbiAgICBJZixcbiAgICBJbmRleEFjY2VzcyxcbiAgICBMaXRlcmFsLFxuICAgIExvZ2ljYWwsXG4gICAgUHJpbnQsXG4gICAgU3RtdCxcbiAgICBVbmFyeSxcbiAgICBWYXIsXG4gICAgVmFyaWFibGUsXG4gICAgVmVjdG9yTGl0ZXJhbCxcbiAgICBWaXNpdG9yLFxuICAgIFN0bXRWaXNpdG9yXG59IGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gXCIuL2xleGVyXCI7XG5cbi8qKlxuICogQSBjdXN0b20gZXJyb3IgY2xhc3MgZm9yIHJ1bnRpbWUgZXJyb3JzLiBUaGlzIGhlbHBzIHVzIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAqIGVycm9ycyB0aGF0IGhhcHBlbiBkdXJpbmcgaW50ZXJwcmV0YXRpb24gYW5kIG90aGVyIHR5cGVzIG9mIGVycm9ycy5cbiAqL1xuY2xhc3MgUnVudGltZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbjogYW55LCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBFbnZpcm9ubWVudCBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmcgdGhlIHN0YXRlIG9mIHZhcmlhYmxlcyBpblxuICogdGhlIHByb2dyYW0uIEl0J3MgYSBzeW1ib2wgdGFibGUgdGhhdCBtYXBzIHZhcmlhYmxlIG5hbWVzIHRvIHRoZWlyIHZhbHVlcy5cbiAqIEl0IHN1cHBvcnRzIG5lc3RlZCBzY29wZXMsIHdoaWNoIGlzIGNydWNpYWwgZm9yIGZlYXR1cmVzIGxpa2UgYmxvY2tzIGFuZFxuICogZnVuY3Rpb25zLlxuICovXG5jbGFzcyBFbnZpcm9ubWVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZXM6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XG4gICAgcmVhZG9ubHkgZW5jbG9zaW5nOiBFbnZpcm9ubWVudCB8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZW5jbG9zaW5nIFRoZSBlbmNsb3NpbmcgZW52aXJvbm1lbnQsIGZvciBuZXN0ZWQgc2NvcGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVuY2xvc2luZzogRW52aXJvbm1lbnQgfCBudWxsID0gbnVsbCkge1xuICAgICAgICB0aGlzLmVuY2xvc2luZyA9IGVuY2xvc2luZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgbmV3IHZhcmlhYmxlIGluIHRoZSBjdXJyZW50IHNjb3BlLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIGEgdmFyaWFibGUuIEl0IGZpcnN0IGxvb2tzIGluIHRoZSBjdXJyZW50IHNjb3BlLFxuICAgICAqIGFuZCBpZiBpdCdzIG5vdCBmb3VuZCwgaXQgcmVjdXJzaXZlbHkgc2VhcmNoZXMgaW4gdGhlIGVuY2xvc2luZyBzY29wZXMuXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIHRva2VuIGZvciB0aGUgdmFyaWFibGUncyBuYW1lLlxuICAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGUuXG4gICAgICovXG4gICAgZ2V0KG5hbWU6IFRva2VuKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhuYW1lLmxleGVtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQobmFtZS5sZXhlbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5jbG9zaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNsb3NpbmcuZ2V0KG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihuYW1lLCBgVW5kZWZpbmVkIHZhcmlhYmxlICcke25hbWUubGV4ZW1lfScuYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNzaWducyBhIG5ldyB2YWx1ZSB0byBhbiBleGlzdGluZyB2YXJpYWJsZS4gSXQgZm9sbG93cyB0aGUgc2FtZSBzY29wZVxuICAgICAqIGNoYWluIGFzIGBnZXRgLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSB0b2tlbiBmb3IgdGhlIHZhcmlhYmxlJ3MgbmFtZS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZS5cbiAgICAgKi9cbiAgICBhc3NpZ24obmFtZTogVG9rZW4sIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhuYW1lLmxleGVtZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnNldChuYW1lLmxleGVtZSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5jbG9zaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVuY2xvc2luZy5hc3NpZ24obmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihuYW1lLCBgVW5kZWZpbmVkIHZhcmlhYmxlICcke25hbWUubGV4ZW1lfScuYCk7XG4gICAgfVxufVxuXG5cbi8qKlxuICogVGhlIEludGVycHJldGVyIGlzIHRoZSBoZWFydCBvZiBvdXIgbGFuZ3VhZ2UuIEl0IHdhbGtzIHRoZSBBYnN0cmFjdCBTeW50YXhcbiAqIFRyZWUgKEFTVCkgcHJvZHVjZWQgYnkgdGhlIHBhcnNlciBhbmQgZXhlY3V0ZXMgdGhlIGNvZGUuIEl0IGltcGxlbWVudHMgdGhlXG4gKiBWaXNpdG9yIHBhdHRlcm5zIGZvciBib3RoIGV4cHJlc3Npb25zIGFuZCBzdGF0ZW1lbnRzLlxuICovXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIgaW1wbGVtZW50cyBWaXNpdG9yPGFueT4sIFN0bXRWaXNpdG9yPHZvaWQ+IHtcbiAgICBwcml2YXRlIGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvdXRwdXQ6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gb3V0cHV0IEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBvdXRwdXQgb2YgdGhlIGBwcmludGAgc3RhdGVtZW50LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG91dHB1dDogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLm91dHB1dCA9IG91dHB1dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIGludGVycHJldGVyLiBJdCB0YWtlcyBhIGxpc3Qgb2Ygc3RhdGVtZW50c1xuICAgICAqIGFuZCBleGVjdXRlcyB0aGVtLlxuICAgICAqIEBwYXJhbSBzdGF0ZW1lbnRzIFRoZSBsaXN0IG9mIHN0YXRlbWVudHMgdG8gaW50ZXJwcmV0LlxuICAgICAqL1xuICAgIGludGVycHJldChzdGF0ZW1lbnRzOiBTdG10W10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJ1bnRpbWVFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGhlbHBlciBtZXRob2QgdG8gZXhlY3V0ZSBhIHNpbmdsZSBzdGF0ZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBleGVjdXRlKHN0bXQ6IFN0bXQpIHtcbiAgICAgICAgc3RtdC5hY2NlcHQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgYSBibG9jayBvZiBzdGF0ZW1lbnRzIGluIGEgbmV3LCBuZXN0ZWQgc2NvcGUuXG4gICAgICovXG4gICAgdmlzaXRCbG9ja1N0bXQoc3RtdDogQmxvY2spOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leGVjdXRlQmxvY2soc3RtdC5zdGF0ZW1lbnRzLCBuZXcgRW52aXJvbm1lbnQodGhpcy5lbnZpcm9ubWVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgaGVscGVyIG1ldGhvZCB0byBleGVjdXRlIGEgYmxvY2sgb2Ygc3RhdGVtZW50cyBpbiBhIGdpdmVuIGVudmlyb25tZW50LlxuICAgICAqL1xuICAgIGV4ZWN1dGVCbG9jayhzdGF0ZW1lbnRzOiBTdG10W10sIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMuZW52aXJvbm1lbnQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0YXRlbWVudCBvZiBzdGF0ZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBwcmV2aW91cyBlbnZpcm9ubWVudCBhZnRlciB0aGUgYmxvY2sgaXMgZXhlY3V0ZWQuXG4gICAgICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gcHJldmlvdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyBhbiBleHByZXNzaW9uIHN0YXRlbWVudC4gVGhpcyBzaW1wbHkgZXZhbHVhdGVzIHRoZSBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogRXhwcmVzc2lvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmV2YWx1YXRlKHN0bXQuZXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgYW4gaWYgc3RhdGVtZW50LlxuICAgICAqL1xuICAgIHZpc2l0SWZTdG10KHN0bXQ6IElmKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzVHJ1dGh5KHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pKSkge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQudGhlbkJyYW5jaCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RtdC5lbHNlQnJhbmNoICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC5lbHNlQnJhbmNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIGEgcHJpbnQgc3RhdGVtZW50LlxuICAgICAqL1xuICAgIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFByaW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm91dHB1dCh0aGlzLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIGEgdmFyaWFibGUgZGVjbGFyYXRpb24gc3RhdGVtZW50LlxuICAgICAqL1xuICAgIHZpc2l0VmFyU3RtdChzdG10OiBWYXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHN0bXQuaW5pdGlhbGl6ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LmluaXRpYWxpemVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgYW4gYXNzaWdubWVudCBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHZpc2l0QXNzaWduRXhwcihleHByOiBBc3NpZ24pOiBhbnkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQuYXNzaWduKGV4cHIubmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIGEgYmluYXJ5IGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgdmlzaXRCaW5hcnlFeHByKGV4cHI6IEJpbmFyeSk6IGFueSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcblxuICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuR3JlYXRlcjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIobGVmdCkgPiBOdW1iZXIocmlnaHQpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuR3JlYXRlckVxdWFsOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXJPcGVyYW5kcyhleHByLm9wZXJhdG9yLCBsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihsZWZ0KSA+PSBOdW1iZXIocmlnaHQpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzczpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIobGVmdCkgPCBOdW1iZXIocmlnaHQpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzc0VxdWFsOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXJPcGVyYW5kcyhleHByLm9wZXJhdG9yLCBsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihsZWZ0KSA8PSBOdW1iZXIocmlnaHQpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQmFuZ0VxdWFsOiByZXR1cm4gIXRoaXMuaXNFcXVhbChsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5FcXVhbEVxdWFsOiByZXR1cm4gdGhpcy5pc0VxdWFsKGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXJPcGVyYW5kcyhleHByLm9wZXJhdG9yLCBsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihsZWZ0KSAtIE51bWJlcihyaWdodCk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QbHVzOlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGVmdCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgcmlnaHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgKyByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiByaWdodCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCArIHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKGV4cHIub3BlcmF0b3IsIFwiT3BlcmFuZHMgbXVzdCBiZSB0d28gbnVtYmVycyBvciB0d28gc3RyaW5ncy5cIik7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TbGFzaDpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIobGVmdCkgLyBOdW1iZXIocmlnaHQpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQXN0ZXJpc2s6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja051bWJlck9wZXJhbmRzKGV4cHIub3BlcmF0b3IsIGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGxlZnQpICogTnVtYmVyKHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVucmVhY2hhYmxlLlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgYSBjYWxsIGV4cHJlc3Npb24uIEZvciBub3csIHRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB3ZSBkb24ndFxuICAgICAqIGhhdmUgdXNlci1kZWZpbmVkIGZ1bmN0aW9ucy5cbiAgICAgKi9cbiAgICB2aXNpdENhbGxFeHByKGV4cHI6IENhbGwpOiBhbnkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgYSBncm91cGluZyBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEdyb3VwaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5leHByZXNzaW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgYSBsaXRlcmFsIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgdmlzaXRMaXRlcmFsRXhwcihleHByOiBMaXRlcmFsKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGV4cHIudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIGEgbG9naWNhbCBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHZpc2l0TG9naWNhbEV4cHIoZXhwcjogTG9naWNhbCk6IGFueSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XG5cbiAgICAgICAgaWYgKGV4cHIub3BlcmF0b3IudHlwZSA9PT0gVG9rZW5UeXBlLk9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RydXRoeShsZWZ0KSkgcmV0dXJuIGxlZnQ7XG4gICAgICAgIH0gZWxzZSB7IC8vIEFORFxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVHJ1dGh5KGxlZnQpKSByZXR1cm4gbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlcyBhIHVuYXJ5IGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgdmlzaXRVbmFyeUV4cHIoZXhwcjogVW5hcnkpOiBhbnkge1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XG5cbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkJhbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzVHJ1dGh5KHJpZ2h0KTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXJPcGVyYW5kKGV4cHIub3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLU51bWJlcihyaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbnJlYWNoYWJsZS5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIGEgdmFyaWFibGUgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBWYXJpYWJsZSk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudmlyb25tZW50LmdldChleHByLm5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlcyBhIHZlY3RvciBsaXRlcmFsIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgdmlzaXRWZWN0b3JMaXRlcmFsRXhwcihleHByOiBWZWN0b3JMaXRlcmFsKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGV4cHIudmFsdWVzLm1hcCh2ID0+IHRoaXMuZXZhbHVhdGUodikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlcyBhbiBpbmRleCBhY2Nlc3MgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICB2aXNpdEluZGV4QWNjZXNzRXhwcihleHByOiBJbmRleEFjY2Vzcyk6IGFueSB7XG4gICAgICAgIGNvbnN0IGNhbGxlZSA9IHRoaXMuZXZhbHVhdGUoZXhwci5jYWxsZWUpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZhbHVhdGUoZXhwci5pbmRleCk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2FsbGVlKSAmJiB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGVlW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoZXhwci5icmFja2V0LCBcIkNhbiBvbmx5IGluZGV4IGludG8gdmVjdG9ycyB3aXRoIG51bWJlcnMuXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgaGVscGVyIG1ldGhvZCB0byBldmFsdWF0ZSBhIHNpbmdsZSBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBldmFsdWF0ZShleHByOiBFeHByKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGV4cHIuYWNjZXB0KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBcInRydXRoeVwiIGluIG91ciBsYW5ndWFnZSdzIHNlbnNlLiBgZmFsc2VgIGFuZFxuICAgICAqIGBuaWxgIGFyZSBmYWxzZXksIGFuZCBldmVyeXRoaW5nIGVsc2UgaXMgdHJ1dGh5LlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNUcnV0aHkob2JqZWN0OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gXCJib29sZWFuXCIpIHJldHVybiBvYmplY3Q7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0d28gdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzRXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGEgPT09IG51bGwgJiYgYiA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgdmFsdWUgdG8gYSBzdHJpbmcgZm9yIHByaW50aW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdHJpbmdpZnkob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAob2JqZWN0ID09PSBudWxsKSByZXR1cm4gXCJuaWxcIjtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGBbJHtvYmplY3QubWFwKG8gPT4gdGhpcy5zdHJpbmdpZnkobykpLmpvaW4oJywgJyl9XWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgaGVscGVyIG1ldGhvZCB0byBjaGVjayBpZiBhbiBvcGVyYW5kIGlzIGEgbnVtYmVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2tOdW1iZXJPcGVyYW5kKG9wZXJhdG9yOiBUb2tlbiwgb3BlcmFuZDogYW55KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3BlcmFuZCA9PT0gJ251bWJlcicpIHJldHVybjtcbiAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihvcGVyYXRvciwgXCJPcGVyYW5kIG11c3QgYmUgYSBudW1iZXIuXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgaGVscGVyIG1ldGhvZCB0byBjaGVjayBpZiBib3RoIG9wZXJhbmRzIGFyZSBudW1iZXJzLlxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2tOdW1iZXJPcGVyYW5kcyhvcGVyYXRvcjogVG9rZW4sIGxlZnQ6IGFueSwgcmlnaHQ6IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIGxlZnQgPT09ICdudW1iZXInICYmIHR5cGVvZiByaWdodCA9PT0gJ251bWJlcicpIHJldHVybjtcbiAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihvcGVyYXRvciwgXCJPcGVyYW5kcyBtdXN0IGJlIG51bWJlcnMuXCIpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogVGhpcyBlbnVtIGRlZmluZXMgYWxsIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgdG9rZW5zIHRoYXQgb3VyIGxhbmd1YWdlIHJlY29nbml6ZXMuXG4gKiBBIHRva2VuIGlzIHRoZSBzbWFsbGVzdCB1bml0IG9mIGNvZGUgdGhhdCBoYXMgbWVhbmluZywgbGlrZSBhIG51bWJlciwgYW4gb3BlcmF0b3IsXG4gKiBvciBhIGtleXdvcmQuXG4gKi9cbmV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XG4gICAgLy8gTGl0ZXJhbHM6IHJlcHJlc2VudCByYXcgZGF0YSB2YWx1ZXMgaW4gdGhlIGNvZGUuXG4gICAgTnVtYmVyLCAgICAgIC8vIGUuZy4sIDEyMywgNDUuNjdcbiAgICBTdHJpbmcsICAgICAgLy8gZS5nLiwgXCJoZWxsb1wiXG4gICAgSWRlbnRpZmllciwgIC8vIGUuZy4sIG15X3ZhcmlhYmxlXG4gICAgQm9vbGVhbiwgICAgIC8vIHRydWUgb3IgZmFsc2VcblxuICAgIC8vIEtleXdvcmRzOiB3b3JkcyB3aXRoIHNwZWNpYWwgbWVhbmluZyBpbiB0aGUgbGFuZ3VhZ2UuXG4gICAgSWYsICAgICAgICAgIC8vIOWmguaenFxuICAgIEVsc2VJZiwgICAgICAvLyDkuZ/lj6/og71cbiAgICBFbHNlLCAgICAgICAgLy8g5LiN54S25bCxXG4gICAgVHJ1ZSwgICAgICAgIC8vIOecn+eahFxuICAgIEZhbHNlLCAgICAgICAvLyDlgYfnmoRcbiAgICBWYXIsICAgICAgICAgLy8g6Lef5L2g6KqqXG5cbiAgICAvLyBPcGVyYXRvcnM6IHN5bWJvbHMgdGhhdCBwZXJmb3JtIG9wZXJhdGlvbnMgb24gZGF0YS5cbiAgICBQbHVzLCAgICAgICAgICAvLyDliqDkuIpcbiAgICBNaW51cywgICAgICAgICAvLyDmuJvmjolcbiAgICBBc3RlcmlzaywgICAgICAvLyDkuZhcbiAgICBTbGFzaCwgICAgICAgICAvLyDpmaRcbiAgICBQZXJjZW50LCAgICAgICAvLyDlj5bppJjmlbhcbiAgICBFcXVhbCwgICAgICAgICAvLyDmmK9cbiAgICBFcXVhbEVxdWFsLCAgICAvLyDnrYnmlrxcbiAgICBCYW5nLCAgICAgICAgICAvLyDinYxcbiAgICBCYW5nRXF1YWwsICAgICAvLyDinYznrYnmlrxcbiAgICBMZXNzLCAgICAgICAgICAvLyDlsI/mlrxcbiAgICBMZXNzRXF1YWwsICAgICAvLyDlsI/mlrznrYnmlrxcbiAgICBHcmVhdGVyLCAgICAgICAvLyDlpKfmlrxcbiAgICBHcmVhdGVyRXF1YWwsICAvLyDlpKfmlrznrYnmlrxcbiAgICBBbmQsICAgICAgICAgICAvLyDogIzkuJRcbiAgICBPciwgICAgICAgICAgICAvLyDmiJbmmK9cblxuICAgIC8vIFB1bmN0dWF0aW9uOiBjaGFyYWN0ZXJzIHRoYXQgc3RydWN0dXJlIHRoZSBjb2RlLlxuICAgIExlZnRQYXJlbiwgICAgIC8vIPCfkYlcbiAgICBSaWdodFBhcmVuLCAgICAvLyDwn5GIXG4gICAgTGVmdEJyYWNlLCAgICAgLy8g8J+RhlxuICAgIFJpZ2h0QnJhY2UsICAgIC8vIPCfkYdcbiAgICBMZWZ0QnJhY2tldCwgICAvLyDwn6ScXG4gICAgUmlnaHRCcmFja2V0LCAgLy8g8J+km1xuICAgIENvbW1hLCAgICAgICAgIC8vIPCfjJ9cbiAgICBTZW1pY29sb24sICAgICAvLyDwn5KmXG4gICAgUHJpbnQsICAgICAgICAgLy8g8J+lsFxuICAgIEdyZWV0LCAgICAgICAgIC8vIOKdpC4uLuKdpFxuXG4gICAgLy8gRW5kIG9mIEZpbGU6IGEgc3BlY2lhbCB0b2tlbiB0byBtYXJrIHRoZSBlbmQgb2YgdGhlIHNvdXJjZSBjb2RlLlxuICAgIEVPRixcbn1cblxuLyoqXG4gKiBUaGlzIGludGVyZmFjZSBkZWZpbmVzIHRoZSBzdHJ1Y3R1cmUgb2YgYSBUb2tlbi4gRWFjaCB0b2tlbiBoYXMgYSB0eXBlLFxuICogdGhlIG9yaWdpbmFsIHRleHQgZnJvbSB0aGUgc291cmNlIGNvZGUgKGxleGVtZSksIGFuIG9wdGlvbmFsIGxpdGVyYWwgdmFsdWVcbiAqIChmb3IgbnVtYmVycywgc3RyaW5ncywgZXRjLiksIGFuZCB0aGUgbGluZSBudW1iZXIgd2hlcmUgaXQgYXBwZWFyZWQsIHdoaWNoXG4gKiBpcyB1c2VmdWwgZm9yIGVycm9yIHJlcG9ydGluZy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUb2tlbiB7XG4gICAgdHlwZTogVG9rZW5UeXBlO1xuICAgIGxleGVtZTogc3RyaW5nO1xuICAgIGxpdGVyYWw/OiBhbnk7XG4gICAgbGluZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIFRoZSBMZXhlciAob3Igc2Nhbm5lcikgaXMgcmVzcG9uc2libGUgZm9yIHRha2luZyB0aGUgcmF3IHNvdXJjZSBjb2RlIGFzIGEgc3RyaW5nXG4gKiBhbmQgYnJlYWtpbmcgaXQgZG93biBpbnRvIGEgc2VyaWVzIG9mIHRva2Vucy5cbiAqL1xuZXhwb3J0IGNsYXNzIExleGVyIHtcbiAgICBwcml2YXRlIHNvdXJjZTogc3RyaW5nO1xuICAgIHByaXZhdGUgdG9rZW5zOiBUb2tlbltdID0gW107XG4gICAgcHJpdmF0ZSBzdGFydCA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50ID0gMDtcbiAgICBwcml2YXRlIGxpbmUgPSAxO1xuXG4gICAgLyoqXG4gICAgICogQSBtYXAgb2YgYWxsIHRoZSBrZXl3b3JkcyBpbiB0aGUgbGFuZ3VhZ2UgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgdG9rZW4gdHlwZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkga2V5d29yZHM6IHsgW2tleTogc3RyaW5nXTogVG9rZW5UeXBlIH0gPSB7XG4gICAgICAgIFwi5aaC5p6cXCI6IFRva2VuVHlwZS5JZixcbiAgICAgICAgXCLkuZ/lj6/og71cIjogVG9rZW5UeXBlLkVsc2VJZixcbiAgICAgICAgXCLkuI3nhLblsLFcIjogVG9rZW5UeXBlLkVsc2UsXG4gICAgICAgIFwi55yf55qEXCI6IFRva2VuVHlwZS5UcnVlLFxuICAgICAgICBcIuWBh+eahFwiOiBUb2tlblR5cGUuRmFsc2UsXG4gICAgICAgIFwi5pivXCI6IFRva2VuVHlwZS5FcXVhbCxcbiAgICAgICAgXCLnrYnmlrxcIjogVG9rZW5UeXBlLkVxdWFsRXF1YWwsXG4gICAgICAgIFwi4p2M562J5pa8XCI6IFRva2VuVHlwZS5CYW5nRXF1YWwsXG4gICAgICAgIFwi5bCP5pa8XCI6IFRva2VuVHlwZS5MZXNzLFxuICAgICAgICBcIuWkp+aWvFwiOiBUb2tlblR5cGUuR3JlYXRlcixcbiAgICAgICAgXCLlsI/mlrznrYnmlrxcIjogVG9rZW5UeXBlLkxlc3NFcXVhbCxcbiAgICAgICAgXCLlpKfmlrznrYnmlrxcIjogVG9rZW5UeXBlLkdyZWF0ZXJFcXVhbCxcbiAgICAgICAgXCLogIzkuJRcIjogVG9rZW5UeXBlLkFuZCxcbiAgICAgICAgXCLmiJbmmK9cIjogVG9rZW5UeXBlLk9yLFxuICAgICAgICBcIuWKoOS4ilwiOiBUb2tlblR5cGUuUGx1cyxcbiAgICAgICAgXCLmuJvmjolcIjogVG9rZW5UeXBlLk1pbnVzLFxuICAgICAgICBcIuS5mFwiOiBUb2tlblR5cGUuQXN0ZXJpc2ssXG4gICAgICAgIFwi6ZmkXCI6IFRva2VuVHlwZS5TbGFzaCxcbiAgICAgICAgXCLlj5bppJjmlbhcIjogVG9rZW5UeXBlLlBlcmNlbnQsXG4gICAgICAgIFwi6Lef5L2g6KqqXCI6IFRva2VuVHlwZS5WYXIsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEEgbWFwIG9mIGFsbCB0aGUgc2luZ2xlLWNoYXJhY3Rlci9lbW9qaSB0b2tlbnMgaW4gdGhlIGxhbmd1YWdlLlxuICAgICAqIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBhZGQgbmV3IGVtb2ppIHRva2VucyBpbiB0aGUgZnV0dXJlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGVtb2ppVG9rZW5zOiB7IFtrZXk6IHN0cmluZ106IFRva2VuVHlwZSB9ID0ge1xuICAgICAgICAn8J+RiSc6IFRva2VuVHlwZS5MZWZ0UGFyZW4sXG4gICAgICAgICfwn5GIJzogVG9rZW5UeXBlLlJpZ2h0UGFyZW4sXG4gICAgICAgICfwn5GGJzogVG9rZW5UeXBlLkxlZnRCcmFjZSxcbiAgICAgICAgJ/CfkYcnOiBUb2tlblR5cGUuUmlnaHRCcmFjZSxcbiAgICAgICAgJ/CfpJwnOiBUb2tlblR5cGUuTGVmdEJyYWNrZXQsXG4gICAgICAgICfwn6SbJzogVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCxcbiAgICAgICAgJ/CfjJ8nOiBUb2tlblR5cGUuQ29tbWEsXG4gICAgICAgICfwn5KmJzogVG9rZW5UeXBlLlNlbWljb2xvbixcbiAgICAgICAgJ/CfpbAnOiBUb2tlblR5cGUuUHJpbnQsXG4gICAgICAgICfinYwnOiBUb2tlblR5cGUuQmFuZyxcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZ3JlZXRpbmdQYXJlbnMgPSBbJ+KdpCcsICfwn5iYJywgJ/CfpbonLCAn8J+YiCcsICfwn5ilJywgJ/Cfko8nXTtcblxuICAgIC8vIEEgY29tYmluZWQgbGlzdCBvZiBhbGwgbXVsdGktY2hhcmFjdGVyIHN5bWJvbHMgdG8gcHJldmVudCB0aGVtIGZyb20gYmVpbmcgcGFyc2VkIGFzIGlkZW50aWZpZXJzLlxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHNwZWNpYWxTeW1ib2xzID0gW1xuICAgICAgICAuLi5PYmplY3Qua2V5cyhMZXhlci5lbW9qaVRva2VucyksXG4gICAgICAgIC4uLkxleGVyLmdyZWV0aW5nUGFyZW5zLFxuICAgICAgICAn8J+klycsXG4gICAgICAgICcgJywgJ1xccicsICdcXHQnLCAnXFxuJywgJ1xcMCdcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0aGUgbWFpbiBtZXRob2Qgb2YgdGhlIGxleGVyLiBJdCBzY2FucyB0aGUgc291cmNlIGNvZGUgY2hhcmFjdGVyXG4gICAgICogYnkgY2hhcmFjdGVyIGFuZCBnZW5lcmF0ZXMgYSBsaXN0IG9mIHRva2Vucy5cbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB0b2tlbnMuXG4gICAgICovXG4gICAgc2NhblRva2VucygpOiBUb2tlbltdIHtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgLy8gV2UgYXJlIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG5leHQgbGV4ZW1lLlxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgICAgIHRoaXMuc2NhblRva2VuKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgYSBmaW5hbCBcImVuZCBvZiBmaWxlXCIgdG9rZW4gdG8gbWFyayB0aGUgZW5kIG9mIHRoZSBjb2RlLlxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgdHlwZTogVG9rZW5UeXBlLkVPRiwgbGV4ZW1lOiBcIlwiLCBsaW5lOiB0aGlzLmxpbmUgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgaGF2ZSBjb25zdW1lZCBhbGwgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHNvdXJjZSBjb2RlLlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNBdEVuZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudCA+PSB0aGlzLnNvdXJjZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2NhbnMgYSBzaW5nbGUgdG9rZW4gZnJvbSB0aGUgc291cmNlIGNvZGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzY2FuVG9rZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuY3VycmVudDtcblxuICAgICAgICBpZiAodGhpcy5pc0F0RW5kKCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5jdXJyZW50KTtcblxuICAgICAgICAvLyBQcmlvcml0eSAxOiBHcmVldGluZ3MgKGUuZy4sIOKdpC4uLuKdpClcbiAgICAgICAgZm9yIChjb25zdCBwYXJlbiBvZiBMZXhlci5ncmVldGluZ1BhcmVucykge1xuICAgICAgICAgICAgaWYgKHJlbWFpbmluZy5zdGFydHNXaXRoKHBhcmVuKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JlZXRpbmcocGFyZW4pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByaW9yaXR5IDI6IFN0cmluZ3MgKGUuZy4sIPCfpJcuLi7wn6SXKVxuICAgICAgICBpZiAocmVtYWluaW5nLnN0YXJ0c1dpdGgoJ/CfpJcnKSkge1xuICAgICAgICAgICAgdGhpcy5zdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByaW9yaXR5IDM6IE90aGVyIHNwZWNpYWwgZW1vamkgdG9rZW5zIChlLmcuLCDwn5GJLCDwn5KmLCDwn6WwKVxuICAgICAgICBmb3IgKGNvbnN0IGxleGVtZSBpbiBMZXhlci5lbW9qaVRva2Vucykge1xuICAgICAgICAgICAgaWYgKHJlbWFpbmluZy5zdGFydHNXaXRoKGxleGVtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgKz0gbGV4ZW1lLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKExleGVyLmVtb2ppVG9rZW5zW2xleGVtZV0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgLy8gUHJpb3JpdHkgNDogTnVtYmVyc1xuICAgICAgICBpZiAodGhpcy5pc0RpZ2l0KGMpKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJpb3JpdHkgNTogSWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgIGlmICh0aGlzLmlzQWxwaGEoYykpIHtcbiAgICAgICAgICAgIHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UndmUgZ290dGVuIHRoaXMgZmFyLCB3ZSBkb24ndCBrbm93IHdoYXQgdGhpcyBjaGFyYWN0ZXIgaXMuXG4gICAgICAgIC8vIEluIGEgcmVhbCBjb21waWxlciwgd2UnZCByZXBvcnQgYW4gZXJyb3IuIEhlcmUsIHdlJ2xsIGp1c3QgY29uc3VtZVxuICAgICAgICAvLyBpdCB0byBwcmV2ZW50IGFuIGluZmluaXRlIGxvb3AuXG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2tpcFdoaXRlc3BhY2UoKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBjYXNlICdcXHInOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmUrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIHRoZSBjdXJyZW50IGNoYXJhY3RlciBpbiB0aGUgc291cmNlIGFuZCByZXR1cm5zIGl0LlxuICAgICAqL1xuICAgIHByaXZhdGUgYWR2YW5jZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCsrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHRva2VuIGZvciB0aGUgY3VycmVudCBsZXhlbWUuXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHRva2VuLlxuICAgICAqIEBwYXJhbSBsaXRlcmFsIFRoZSBsaXRlcmFsIHZhbHVlIG9mIHRoZSB0b2tlbiAob3B0aW9uYWwpLlxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkVG9rZW4odHlwZTogVG9rZW5UeXBlLCBsaXRlcmFsPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IHR5cGUsIGxleGVtZTogdGV4dCwgbGl0ZXJhbCwgbGluZTogdGhpcy5saW5lIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBjaGFyYWN0ZXIgbWF0Y2hlcyB0aGUgZXhwZWN0ZWQgY2hhcmFjdGVyLiBJZiBpdCBkb2VzLFxuICAgICAqIGl0IGNvbnN1bWVzIHRoZSBjaGFyYWN0ZXIgYW5kIHJldHVybnMgdHJ1ZS4gT3RoZXJ3aXNlLCBpdCByZXR1cm5zIGZhbHNlLlxuICAgICAqIEBwYXJhbSBleHBlY3RlZCBUaGUgY2hhcmFjdGVyIHRvIG1hdGNoLlxuICAgICAqL1xuICAgIHByaXZhdGUgbWF0Y2goZXhwZWN0ZWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pc0F0RW5kKCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpICE9PSBleHBlY3RlZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29rcyBhdCB0aGUgY3VycmVudCBjaGFyYWN0ZXIgd2l0aG91dCBjb25zdW1pbmcgaXQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwZWVrKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmlzQXRFbmQoKSkgcmV0dXJuICdcXDAnO1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBncmVldGluZyhwYXJlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIENvbnN1bWUgdGhlIG9wZW5pbmcgcGFyZW5cbiAgICAgICAgdGhpcy5jdXJyZW50ICs9IHBhcmVuLmxlbmd0aDtcblxuICAgICAgICAvLyBMb29rIGZvciBhbnkgZ3JlZXRpbmcgcGFyZW4gYXMgdGhlIGNsb3NpbmcgZGVsaW1pdGVyXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLmN1cnJlbnQpO1xuICAgICAgICAgICAgbGV0IGZvdW5kQ2xvc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNsb3NpbmdQYXJlbiBvZiBMZXhlci5ncmVldGluZ1BhcmVucykge1xuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmcuc3RhcnRzV2l0aChjbG9zaW5nUGFyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kQ2xvc2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSB2YWx1ZSBiZXR3ZWVuIHRoZSBwYXJlbnNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCArIHBhcmVuLmxlbmd0aCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnN1bWUgdGhlIGNsb3NpbmcgcGFyZW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ICs9IGNsb3NpbmdQYXJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5HcmVldCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWZvdW5kQ2xvc2luZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJ1xcbicpIHRoaXMubGluZSsrO1xuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW50ZXJtaW5hdGVkIGdyZWV0aW5nIC0gcmVhY2hlZCBlbmQgb2YgZmlsZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjYW5zIGEgc3RyaW5nIGxpdGVyYWwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdHJpbmcoKTogdm9pZCB7XG4gICAgICAgIC8vIENvbnN1bWUgdGhlIG9wZW5pbmcgJ/CfpJcnXG4gICAgICAgIHRoaXMuY3VycmVudCArPSAn8J+klycubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0F0RW5kKCkgJiYgIXRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLmN1cnJlbnQpLnN0YXJ0c1dpdGgoJ/CfpJcnKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykgdGhpcy5saW5lKys7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgLy8gVW50ZXJtaW5hdGVkIHN0cmluZy5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBjbG9zaW5nICfwn6SXJy5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCArICfwn6SXJy5sZW5ndGgsIHRoaXMuY3VycmVudCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDb25zdW1lIHRoZSBjbG9zaW5nICfwn6SXJ1xuICAgICAgICB0aGlzLmN1cnJlbnQgKz0gJ/CfpJcnLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlN0cmluZywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIGNoYXJhY3RlciBpcyBhIGRpZ2l0LlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNEaWdpdChjOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGMgPj0gJzAnICYmIGMgPD0gJzknO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjYW5zIGEgbnVtYmVyIGxpdGVyYWwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBudW1iZXIoKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB0aGlzLmFkdmFuY2UoKTtcblxuICAgICAgICAvLyBMb29rIGZvciBhIGZyYWN0aW9uYWwgcGFydC5cbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnLicgJiYgdGhpcy5pc0RpZ2l0KHRoaXMucGVla05leHQoKSkpIHtcbiAgICAgICAgICAgIC8vIENvbnN1bWUgdGhlIFwiLlwiXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcblxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTnVtYmVyLCBwYXJzZUZsb2F0KHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9va3MgYXQgdGhlIGNoYXJhY3RlciBhZnRlciB0aGUgY3VycmVudCBvbmUgd2l0aG91dCBjb25zdW1pbmcgaXQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwZWVrTmV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50ICsgMSA+PSB0aGlzLnNvdXJjZS5sZW5ndGgpIHJldHVybiAnXFwwJztcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgKyAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2FucyBhbiBpZGVudGlmaWVyIG9yIGEga2V5d29yZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlkZW50aWZpZXIoKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLmlzQWxwaGFOdW1lcmljKHRoaXMucGVlaygpKSkgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICBsZXQgdHlwZSA9IExleGVyLmtleXdvcmRzW3RleHRdO1xuICAgICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB0eXBlID0gVG9rZW5UeXBlLklkZW50aWZpZXI7XG4gICAgICAgIHRoaXMuYWRkVG9rZW4odHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGEgY2hhcmFjdGVyIGlzIGEgdmFsaWQgc3RhcnQgZm9yIGFuIGlkZW50aWZpZXIuXG4gICAgICogSW4gXCJVbmNsZSBMYW5nXCIsIHRoaXMgaXMgYW55IGNoYXJhY3RlciB0aGF0IGlzIG5vdCBhIGRpZ2l0IGFuZCBub3RcbiAgICAgKiBhIHNwZWNpYWwgc3ltYm9sIHVzZWQgZm9yIG90aGVyIHRva2Vucy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzQWxwaGEoYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHNwZWNpYWxDaGFycyA9IFwi8J+RifCfkYjwn5GG8J+Rh/CfpJzwn6Sb8J+Mn/CfpbDinYzwn6SX4p2k8J+YmPCfpbrwn5iI8J+YpfCfko/wn5KmIFxcclxcdFxcblwiO1xuICAgICAgICByZXR1cm4gYyAhPT0gJ1xcMCcgJiYgIXRoaXMuaXNEaWdpdChjKSAmJiAhc3BlY2lhbENoYXJzLmluY2x1ZGVzKGMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIGNoYXJhY3RlciBjYW4gYmUgcGFydCBvZiBhbiBpZGVudGlmaWVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNBbHBoYU51bWVyaWMoYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQWxwaGEoYykgfHwgdGhpcy5pc0RpZ2l0KGMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBFcnJvck1lc3NhZ2VzID0ge1xuICAgIEVYUEVDVF9HUkVFVElOR19BVF9TVEFSVDogXCJFeHBlY3QgZ3JlZXRpbmcgJ/CfmJguLi7wn5iYJyBhdCB0aGUgc3RhcnQgb2YgdGhlIHN0YXRlbWVudC5cIixcbiAgICBHUkVFVElOR19NVVNUX0NPTlRBSU5fVU5DTEU6IFwiR3JlZXRpbmcgbXVzdCBjb250YWluICflpKflj5QnIHRvIGJlIHZhbGlkLlwiLFxuICAgIEVYUEVDVF9WQVJJQUJMRV9OQU1FOiBcIkV4cGVjdCB2YXJpYWJsZSBuYW1lLlwiLFxuICAgIEVYUEVDVF9TRU1JQ09MT05fQUZURVJfVkFSOiBcIkV4cGVjdCAn8J+SpicgYWZ0ZXIgdmFyaWFibGUgZGVjbGFyYXRpb24uXCIsXG4gICAgTUlTU0lOR19HUkVFVElORzogXCJUaGlzIHN0YXRlbWVudCByZXF1aXJlcyBhIGdyZWV0aW5nICfwn5iYLi4u8J+YmCcgYXQgdGhlIGJlZ2lubmluZy5cIixcbiAgICBFWFBFQ1RfTEVGVF9QQVJFTl9BRlRFUl9JRjogXCJFeHBlY3QgJ/CfkYknIGFmdGVyICflpoLmnpwnLlwiLFxuICAgIEVYUEVDVF9SSUdIVF9QQVJFTl9BRlRFUl9DT05ESVRJT046IFwiRXhwZWN0ICcpJyBhZnRlciBpZiBjb25kaXRpb24uXCIsXG4gICAgRVhQRUNUX0dSRUVUSU5HX0JFRk9SRV9FTFNFX0lGOiBcIkV4cGVjdCBncmVldGluZyBiZWZvcmUgJ+S5n+WPr+iDvScuXCIsXG4gICAgRVhQRUNUX0lGX0FGVEVSX0VMU0VfSUY6IFwiRXhwZWN0ICflpoLmnpwnIGFmdGVyICfkuZ/lj6/og70nLlwiLFxuICAgIEVYUEVDVF9HUkVFVElOR19CRUZPUkVfRUxTRTogXCJFeHBlY3QgZ3JlZXRpbmcgYmVmb3JlICfkuI3nhLblsLEnLlwiLFxuICAgIEVYUEVDVF9TRU1JQ09MT05fQUZURVJfVkFMVUU6IFwiRXhwZWN0ICfwn5KmJyBhZnRlciB2YWx1ZS5cIixcbiAgICBFWFBFQ1RfU0VNSUNPTE9OX0FGVEVSX0FTU0lHTk1FTlQ6IFwiRXhwZWN0ICfwn5KmJyBhZnRlciBhc3NpZ25tZW50LlwiLFxuICAgIElOVkFMSURfQVNTSUdOTUVOVF9TVEFURU1FTlQ6IFwiSW52YWxpZCBhc3NpZ25tZW50IHN0YXRlbWVudC5cIixcbiAgICBFWFBFQ1RfUklHSFRfQlJBQ0VfQUZURVJfQkxPQ0s6IFwiRXhwZWN0ICfwn5GHJyBhZnRlciBibG9jay5cIixcbiAgICBFWFBFQ1RfU0VNSUNPTE9OX0FGVEVSX0VYUFJFU1NJT046IFwiRXhwZWN0ICfwn5KmJyBhZnRlciBleHByZXNzaW9uLlwiLFxuICAgIElOVkFMSURfQVNTSUdOTUVOVF9UQVJHRVQ6IFwiSW52YWxpZCBhc3NpZ25tZW50IHRhcmdldC5cIixcbiAgICBNQVhfQVJHVU1FTlRTX0VYQ0VFREVEOiBcIkNhbid0IGhhdmUgbW9yZSB0aGFuIDI1NSBhcmd1bWVudHMuXCIsXG4gICAgRVhQRUNUX1JJR0hUX1BBUkVOX0FGVEVSX0FSR1VNRU5UUzogXCJFeHBlY3QgJ/CfkYgnIGFmdGVyIGFyZ3VtZW50cy5cIixcbiAgICBFWFBFQ1RfUklHSFRfQlJBQ0tFVF9BRlRFUl9JTkRFWDogXCJFeHBlY3QgJ/CfpJsnIGFmdGVyIGluZGV4LlwiLFxuICAgIEVYUEVDVF9FWFBSRVNTSU9OOiBcIkV4cGVjdCBleHByZXNzaW9uLlwiLFxuICAgIEVYUEVDVF9SSUdIVF9QQVJFTl9BRlRFUl9FWFBSRVNTSU9OOiBcIkV4cGVjdCAnKScgYWZ0ZXIgZXhwcmVzc2lvbi5cIixcbiAgICBFWFBFQ1RfUklHSFRfQlJBQ0tFVF9BRlRFUl9WRUNUT1I6IFwiRXhwZWN0ICfwn6SbJyBhZnRlciB2ZWN0b3IgdmFsdWVzLlwiLFxufTtcbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tIFwiLi9sZXhlclwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlcyB9IGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQge1xuICAgIEV4cHIsXG4gICAgU3RtdCxcbiAgICBCaW5hcnksXG4gICAgR3JvdXBpbmcsXG4gICAgTGl0ZXJhbCxcbiAgICBVbmFyeSxcbiAgICBWYXJpYWJsZSxcbiAgICBBc3NpZ24sXG4gICAgTG9naWNhbCxcbiAgICBDYWxsLFxuICAgIFZlY3RvckxpdGVyYWwsXG4gICAgSW5kZXhBY2Nlc3MsXG4gICAgRXhwcmVzc2lvbixcbiAgICBQcmludCxcbiAgICBCbG9jayxcbiAgICBJZixcbiAgICBWYXJcbn0gZnJvbSBcIi4vYXN0XCI7XG5cbi8qKlxuICogQSBzaW1wbGUgZXJyb3IgY2xhc3MgZm9yIHBhcnNpbmcgZXJyb3JzLlxuICovXG5jbGFzcyBQYXJzZUVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuLyoqXG4gKiBUaGUgUGFyc2VyIGlzIHJlc3BvbnNpYmxlIGZvciB0YWtpbmcgYSBzZXF1ZW5jZSBvZiB0b2tlbnMgZnJvbSB0aGUgbGV4ZXIgYW5kXG4gKiBidWlsZGluZyBhbiBBYnN0cmFjdCBTeW50YXggVHJlZSAoQVNUKS4gVGhlIEFTVCBpcyBhIHRyZWUgc3RydWN0dXJlIHRoYXRcbiAqIHJlcHJlc2VudHMgdGhlIGdyYW1tYXRpY2FsIHN0cnVjdHVyZSBvZiB0aGUgY29kZS4gVGhpcyBwYXJzZXIgdXNlcyBhXG4gKiByZWN1cnNpdmUgZGVzY2VudCBzdHJhdGVneSwgd2hlcmUgZWFjaCBtZXRob2QgY29ycmVzcG9uZHMgdG8gYSBydWxlIGluIHRoZVxuICogbGFuZ3VhZ2UncyBncmFtbWFyLlxuICovXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcbiAgICBwcml2YXRlIHRva2VuczogVG9rZW5bXTtcbiAgICBwcml2YXRlIGN1cnJlbnQgPSAwO1xuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih0b2tlbnM6IFRva2VuW10pIHtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSBwYXJzZXIuIEl0IHBhcnNlcyBhIHNlcXVlbmNlIG9mIHN0YXRlbWVudHNcbiAgICAgKiB1bnRpbCBpdCByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIHRva2VuIHN0cmVhbS5cbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBzdGF0ZW1lbnRzLlxuICAgICAqL1xuICAgIHBhcnNlKCk6IFN0bXRbXSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXRbXSA9IFtdO1xuICAgICAgICB3aGlsZSAoIXRoaXMuaXNBdEVuZCgpKSB7XG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChzdG10KSB7XG4gICAgICAgICAgICAgICAgc3RhdGVtZW50cy5wdXNoKHN0bXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGRlY2xhcmF0aW9uIG9yIGEgc3RhdGVtZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGVtZW50KCk6IFN0bXQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLkdyZWV0KSkge1xuICAgICAgICAgICAgICAgIC8vIFN0YXRlbWVudHMgdGhhdCBNVVNUIHN0YXJ0IHdpdGggYSBncmVldGluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyZWV0VG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkdyZWV0LCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9HUkVFVElOR19BVF9TVEFSVCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgZ3JlZXRpbmcgY29udGFpbnMgJ+Wkp+WPlCdcbiAgICAgICAgICAgICAgICBpZiAoIWdyZWV0VG9rZW4ubGl0ZXJhbCB8fCAhZ3JlZXRUb2tlbi5saXRlcmFsLmluY2x1ZGVzKCflpKflj5QnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmVycm9yKGdyZWV0VG9rZW4sIEVycm9yTWVzc2FnZXMuR1JFRVRJTkdfTVVTVF9DT05UQUlOX1VOQ0xFKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVmFyKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YXJEZWNsYXJhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlmU3RhdGVtZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5QcmludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRTdGF0ZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgaXQncyBub3QgYW55IG9mIHRoZSBhYm92ZSwgaXQgbXVzdCBiZSBhbiBhc3NpZ25tZW50IHN0YXRlbWVudC5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU3RhdGVtZW50cyB0aGF0IERPIE5PVCBzdGFydCB3aXRoIGEgZ3JlZXRpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51bmdyZWV0ZWRTdGF0ZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemUoKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgdmFyaWFibGUgZGVjbGFyYXRpb24uIEFzc3VtZXMgJ0dyZWV0JyBhbmQgJ1ZhcicgdG9rZW5zIGhhdmUgYmVlbiBjb25zdW1lZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHZhckRlY2xhcmF0aW9uKCk6IFN0bXQge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9WQVJJQUJMRV9OQU1FKTtcblxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI6IEV4cHIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVxdWFsKSkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9TRU1JQ09MT05fQUZURVJfVkFSKTtcbiAgICAgICAgcmV0dXJuIG5ldyBWYXIobmFtZSwgaW5pdGlhbGl6ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBzdGF0ZW1lbnRzIHRoYXQgZG8gbm90IHJlcXVpcmUgYSBncmVldGluZy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHVuZ3JlZXRlZFN0YXRlbWVudCgpOiBTdG10IHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlZhcikgfHwgdGhpcy5jaGVjayhUb2tlblR5cGUuSWYpIHx8IHRoaXMuY2hlY2soVG9rZW5UeXBlLlByaW50KSkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgRXJyb3JNZXNzYWdlcy5NSVNTSU5HX0dSRUVUSU5HKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgbG9va3MgbGlrZSBhbiBhc3NpZ25tZW50IChpZGVudGlmaWVyIGZvbGxvd2VkIGJ5IOaYrylcbiAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLklkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICAvLyBMb29rIGFoZWFkIHRvIHNlZSBpZiB0aGlzIGlzIGFuIGFzc2lnbm1lbnRcbiAgICAgICAgICAgIGNvbnN0IHNhdmVkQ3VycmVudCA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBjb25zdW1lIGlkZW50aWZpZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGluZGV4IGFjY2VzcyBwYXR0ZXJuczogaWRlbnRpZmllcvCfpJwuLi7wn6SbXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNrZXQpKSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5kZXggZXhwcmVzc2lvblxuICAgICAgICAgICAgICAgIGxldCBicmFja2V0RGVwdGggPSAxO1xuICAgICAgICAgICAgICAgIHdoaWxlIChicmFja2V0RGVwdGggPiAwICYmICF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVjayhUb2tlblR5cGUuTGVmdEJyYWNrZXQpKSBicmFja2V0RGVwdGgrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCkpIGJyYWNrZXREZXB0aC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGlzQXNzaWdubWVudCA9IHRoaXMuY2hlY2soVG9rZW5UeXBlLkVxdWFsKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHNhdmVkQ3VycmVudDsgLy8gcmVzdG9yZSBwb3NpdGlvblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaXNBc3NpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgRXJyb3JNZXNzYWdlcy5NSVNTSU5HX0dSRUVUSU5HKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJsb2NrKHRoaXMuYmxvY2soKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGFuIGlmIHN0YXRlbWVudC4gQXNzdW1lcyAnR3JlZXQnIGFuZCAnSWYnIHRva2VucyBoYXZlIGJlZW4gY29uc3VtZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpZlN0YXRlbWVudCgpOiBTdG10IHtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0UGFyZW4sIEVycm9yTWVzc2FnZXMuRVhQRUNUX0xFRlRfUEFSRU5fQUZURVJfSUYpO1xuICAgICAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9SSUdIVF9QQVJFTl9BRlRFUl9DT05ESVRJT04pO1xuXG4gICAgICAgIGNvbnN0IHRoZW5CcmFuY2ggPSB0aGlzLnN0YXRlbWVudCgpOyAvLyBBIGJsb2NrIGNhbiBjb250YWluIGFueSBkZWNsYXJhdGlvblxuICAgICAgICBcbiAgICAgICAgbGV0IGVsc2VCcmFuY2g6IFN0bXQgfCBudWxsID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVsc2VJZikpIHtcbiAgICAgICAgICAgIGVsc2VCcmFuY2ggPSB0aGlzLmlmU3RhdGVtZW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRWxzZSkpIHtcbiAgICAgICAgICAgIGVsc2VCcmFuY2ggPSB0aGlzLnN0YXRlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBJZihjb25kaXRpb24sIHRoZW5CcmFuY2gsIGVsc2VCcmFuY2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIHByaW50IHN0YXRlbWVudC4gQXNzdW1lcyAnR3JlZXQnIGFuZCAnUHJpbnQnIHRva2VucyBoYXZlIGJlZW4gY29uc3VtZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwcmludFN0YXRlbWVudCgpOiBTdG10IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIEVycm9yTWVzc2FnZXMuRVhQRUNUX1NFTUlDT0xPTl9BRlRFUl9WQUxVRSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJpbnQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhbiBhc3NpZ25tZW50IHN0YXRlbWVudC4gQXNzdW1lcyAnR3JlZXQnIHRva2VuIGhhcyBiZWVuIGNvbnN1bWVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgYXNzaWdubWVudFN0YXRlbWVudCgpOiBTdG10IHtcbiAgICAgICAgY29uc3QgZXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAvLyBBZnRlciBhbiBleHByZXNzaW9uLCB3ZSBleHBlY3QgYSBzZW1pY29sb24gZm9yIGFuIGV4cHJlc3Npb24gc3RhdGVtZW50LFxuICAgICAgICAvLyBidXQgYW4gYXNzaWdubWVudCBpcyBub3QgYW4gZXhwcmVzc2lvbiBzdGF0ZW1lbnQgaW4gdGhpcyBjb250ZXh0LlxuICAgICAgICAvLyBUaGUgJ2Fzc2lnbm1lbnQnIGV4cHJlc3Npb24gcGFyc2luZyBoYW5kbGVzIHRoZSAnPScuXG4gICAgICAgIGlmIChleHByIGluc3RhbmNlb2YgQXNzaWduKSB7XG4gICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIEVycm9yTWVzc2FnZXMuRVhQRUNUX1NFTUlDT0xPTl9BRlRFUl9BU1NJR05NRU5UKTtcbiAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHJlc3Npb24oZXhwcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXJyb3IodGhpcy5wZWVrKCksIEVycm9yTWVzc2FnZXMuSU5WQUxJRF9BU1NJR05NRU5UX1NUQVRFTUVOVCk7XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBTaG91bGQgYmUgdW5yZWFjaGFibGUgZHVlIHRvIGVycm9yXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgYmxvY2sgb2Ygc3RhdGVtZW50cy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGJsb2NrKCk6IFN0bXRbXSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXRbXSA9IFtdO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRCcmFjZSkgJiYgIXRoaXMuaXNBdEVuZCgpKSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5zdGF0ZW1lbnQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2UsIEVycm9yTWVzc2FnZXMuRVhQRUNUX1JJR0hUX0JSQUNFX0FGVEVSX0JMT0NLKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGFuIGV4cHJlc3Npb24gc3RhdGVtZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgZXhwcmVzc2lvblN0YXRlbWVudCgpOiBTdG10IHtcbiAgICAgICAgY29uc3QgZXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfU0VNSUNPTE9OX0FGVEVSX0VYUFJFU1NJT04pO1xuICAgICAgICByZXR1cm4gbmV3IEV4cHJlc3Npb24oZXhwcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGZvbGxvd2luZyBtZXRob2RzIHBhcnNlIGV4cHJlc3Npb25zLCBmb2xsb3dpbmcgdGhlIG9yZGVyIG9mIHByZWNlZGVuY2UuXG4gICAgICovXG5cbiAgICBwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNzaWdubWVudCgpOiBFeHByIHtcbiAgICAgICAgY29uc3QgZXhwciA9IHRoaXMub3IoKTtcblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRXF1YWwpKSB7XG4gICAgICAgICAgICBjb25zdCBlcXVhbHMgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpOyAvLyBDaGFuZ2VkIGZyb20gdGhpcy5hc3NpZ25tZW50KClcblxuICAgICAgICAgICAgaWYgKGV4cHIgaW5zdGFuY2VvZiBWYXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBleHByLm5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBc3NpZ24obmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChleHByIGluc3RhbmNlb2YgSW5kZXhBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG1vcmUgY29tcGxleCwgZm9yIG5vdyB3ZSBrZWVwIGl0IHNpbXBsZVxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZXF1YWxzLCBFcnJvck1lc3NhZ2VzLklOVkFMSURfQVNTSUdOTUVOVF9UQVJHRVQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVycm9yKGVxdWFscywgRXJyb3JNZXNzYWdlcy5JTlZBTElEX0FTU0lHTk1FTlRfVEFSR0VUKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3IoKTogRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy5hbmQoKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuT3IpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5hbmQoKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgTG9naWNhbChleHByLCBvcGVyYXRvciwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhbmQoKTogRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy5lcXVhbGl0eSgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5BbmQpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBMb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVxdWFsaXR5KCk6IEV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuY29tcGFyaXNvbigpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5CYW5nRXF1YWwsIFRva2VuVHlwZS5FcXVhbEVxdWFsKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuY29tcGFyaXNvbigpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBCaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29tcGFyaXNvbigpOiBFeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLnRlcm0oKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuR3JlYXRlciwgVG9rZW5UeXBlLkdyZWF0ZXJFcXVhbCwgVG9rZW5UeXBlLkxlc3MsIFRva2VuVHlwZS5MZXNzRXF1YWwpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy50ZXJtKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0ZXJtKCk6IEV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuZmFjdG9yKCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk1pbnVzLCBUb2tlblR5cGUuUGx1cykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmZhY3RvcigpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBCaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmFjdG9yKCk6IEV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMudW5hcnkoKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuU2xhc2gsIFRva2VuVHlwZS5Bc3RlcmlzaywgVG9rZW5UeXBlLlBlcmNlbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy51bmFyeSgpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBCaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgdW5hcnkoKTogRXhwciB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5CYW5nLCBUb2tlblR5cGUuTWludXMpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy51bmFyeSgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmFyeShvcGVyYXRvciwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsbCgpOiBFeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLnByaW1hcnkoKTtcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpIHtcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5maW5pc2hDYWxsKGV4cHIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5maW5pc2hJbmRleEFjY2VzcyhleHByKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5pc2hDYWxsKGNhbGxlZTogRXhwcik6IEV4cHIge1xuICAgICAgICBjb25zdCBhcmdzOiBFeHByW10gPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodFBhcmVuKSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSAyNTUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgRXJyb3JNZXNzYWdlcy5NQVhfQVJHVU1FTlRTX0VYQ0VFREVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbW1hKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfUklHSFRfUEFSRU5fQUZURVJfQVJHVU1FTlRTKTtcblxuICAgICAgICByZXR1cm4gbmV3IENhbGwoY2FsbGVlLCBwYXJlbiwgYXJncyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5pc2hJbmRleEFjY2VzcyhjYWxsZWU6IEV4cHIpOiBFeHByIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgY29uc3QgYnJhY2tldCA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFja2V0LCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9SSUdIVF9CUkFDS0VUX0FGVEVSX0lOREVYKTtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmRleEFjY2VzcyhjYWxsZWUsIGJyYWNrZXQsIGluZGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGhpZ2hlc3QtcHJlY2VkZW5jZSBleHByZXNzaW9ucy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHByaW1hcnkoKTogRXhwciB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5GYWxzZSkpIHJldHVybiBuZXcgTGl0ZXJhbChmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UcnVlKSkgcmV0dXJuIG5ldyBMaXRlcmFsKHRydWUpO1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVtYmVyLCBUb2tlblR5cGUuU3RyaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsKHRoaXMucHJldmlvdXMoKS5saXRlcmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYXJpYWJsZSh0aGlzLnByZXZpb3VzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfUklHSFRfUEFSRU5fQUZURVJfRVhQUkVTU0lPTik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VwaW5nKGV4cHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFja2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmVjdG9yTGl0ZXJhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfRVhQUkVTU0lPTik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2ZWN0b3JMaXRlcmFsKCk6IEV4cHIge1xuICAgICAgICBjb25zdCB2YWx1ZXM6IEV4cHJbXSA9IFtdO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCkpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFja2V0LCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9SSUdIVF9CUkFDS0VUX0FGVEVSX1ZFQ1RPUik7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yTGl0ZXJhbCh2YWx1ZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB0b2tlbiBpcyBvbmUgb2YgdGhlIGdpdmVuIHR5cGVzLiBJZiBzbywgaXQgY29uc3VtZXNcbiAgICAgKiB0aGUgdG9rZW4gYW5kIHJldHVybnMgdHJ1ZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIG1hdGNoKC4uLnR5cGVzOiBUb2tlblR5cGVbXSk6IGJvb2xlYW4ge1xuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2YgdHlwZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB0b2tlbiBpcyBvZiB0aGUgZ2l2ZW4gdHlwZS4gSWYgbm90LCBpdCB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb25zdW1lKHR5cGU6IFRva2VuVHlwZSwgbWVzc2FnZTogc3RyaW5nKTogVG9rZW4ge1xuICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkgcmV0dXJuIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB0aHJvdyB0aGlzLmVycm9yKHRoaXMucGVlaygpLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9rZW4gaXMgb2YgdGhlIGdpdmVuIHR5cGUgd2l0aG91dCBjb25zdW1pbmcgaXQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjaGVjayh0eXBlOiBUb2tlblR5cGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdEVuZCgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLnBlZWsoKS50eXBlID09PSB0eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIHRoZSBjdXJyZW50IHRva2VuIGFuZCByZXR1cm5zIGl0LlxuICAgICAqL1xuICAgIHByaXZhdGUgYWR2YW5jZSgpOiBUb2tlbiB7XG4gICAgICAgIGlmICghdGhpcy5pc0F0RW5kKCkpIHRoaXMuY3VycmVudCsrO1xuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB3ZSBhcmUgYXQgdGhlIGVuZCBvZiB0aGUgdG9rZW4gc3RyZWFtLlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNBdEVuZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5FT0Y7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCB0b2tlbiB3aXRob3V0IGNvbnN1bWluZyBpdC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHBlZWsoKTogVG9rZW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcmV2aW91cyB0b2tlbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIHByZXZpb3VzKCk6IFRva2VuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuY3VycmVudCAtIDFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcG9ydHMgYSBwYXJzaW5nIGVycm9yLlxuICAgICAqL1xuICAgIHByaXZhdGUgZXJyb3IodG9rZW46IFRva2VuLCBtZXNzYWdlOiBzdHJpbmcpOiBQYXJzZUVycm9yIHtcbiAgICAgICAgLy8gSW4gYSByZWFsIGNvbXBpbGVyLCB5b3Ugd291bGQgaGF2ZSBhIG1vcmUgc29waGlzdGljYXRlZCBlcnJvciByZXBvcnRpbmcgc3lzdGVtLlxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgRXJyb3IgYXQgbGluZSAke3Rva2VuLmxpbmV9OiAke21lc3NhZ2V9YDtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnJvck1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2VFcnJvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gcmVjb3ZlciBmcm9tIGEgcGFyc2UgZXJyb3IuIEl0IGRpc2NhcmRzIHRva2VucyB1bnRpbFxuICAgICAqIGl0IGZpbmRzIGEgc3RhdGVtZW50IGJvdW5kYXJ5LCB3aGljaCBhbGxvd3MgdGhlIHBhcnNlciB0byBjb250aW51ZSBwYXJzaW5nXG4gICAgICogdGhlIHJlc3Qgb2YgdGhlIGZpbGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzeW5jaHJvbml6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXMoKS50eXBlID09PSBUb2tlblR5cGUuU2VtaWNvbG9uKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wZWVrKCkudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlZhcjpcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5JZjpcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QcmludDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBMZXhlciB9IGZyb20gXCIuL2ludGVycHJldGVyL2xleGVyXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi9pbnRlcnByZXRlci9wYXJzZXJcIjtcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJcIjtcblxuY29uc3QgbWVzc2FnZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtZGlzcGxheVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1pbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3Qgc2VuZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VuZC1idXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGFwcGVuZE1lc3NhZ2UodGV4dDogc3RyaW5nLCBzZW5kZXI6ICd1c2VyJyB8ICdib3QnKSB7XG4gICAgY29uc3QgbWVzc2FnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlXCIsIGAke3NlbmRlcn0tbWVzc2FnZWApO1xuICAgIG1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudCk7XG4gICAgbWVzc2FnZURpc3BsYXkuc2Nyb2xsVG9wID0gbWVzc2FnZURpc3BsYXkuc2Nyb2xsSGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBydW4oc291cmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcigobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGFwcGVuZE1lc3NhZ2UobWVzc2FnZSwgJ2JvdCcpO1xuICAgIH0pO1xuICAgIGNvbnN0IGxleGVyID0gbmV3IExleGVyKHNvdXJjZSk7XG4gICAgY29uc3QgdG9rZW5zID0gbGV4ZXIuc2NhblRva2VucygpO1xuICAgIGNvbnNvbGUubG9nKHRva2Vucyk7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcih0b2tlbnMpO1xuICAgIGNvbnN0IHN0YXRlbWVudHMgPSBwYXJzZXIucGFyc2UoKTtcblxuICAgIC8vIFN0b3AgaWYgdGhlcmUgd2FzIGEgc3ludGF4IGVycm9yLlxuICAgIGlmIChwYXJzZXIuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGFyc2VyLmVycm9ycy5mb3JFYWNoKGVycm9yID0+IGFwcGVuZE1lc3NhZ2UoZXJyb3IsICdib3QnKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIkFTVDpcIiwgc3RhdGVtZW50cyk7XG4gICAgaW50ZXJwcmV0ZXIuaW50ZXJwcmV0KHN0YXRlbWVudHMpO1xufVxuXG5zZW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VJbnB1dC52YWx1ZTtcbiAgICBpZiAobWVzc2FnZS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgYXBwZW5kTWVzc2FnZShtZXNzYWdlLCAndXNlcicpO1xuICAgICAgICBydW4obWVzc2FnZSk7XG4gICAgICAgIG1lc3NhZ2VJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxufSk7XG5cbm1lc3NhZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBuZXcgbGluZSBpbiB0ZXh0YXJlYVxuICAgICAgICBzZW5kQnV0dG9uLmNsaWNrKCk7XG4gICAgfVxufSk7XG5cblxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==