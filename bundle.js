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
        // Priority 3: Multi-character keywords (sorted by length, longest first)
        // This ensures "大於等於" is matched before "大於", "❌等於" before "等於", etc.
        var sortedKeywords = Object.keys(Lexer.keywords).sort(function (a, b) { return b.length - a.length; });
        for (var _b = 0, sortedKeywords_1 = sortedKeywords; _b < sortedKeywords_1.length; _b++) {
            var keyword = sortedKeywords_1[_b];
            if (remaining.startsWith(keyword)) {
                this.current += keyword.length;
                this.addToken(Lexer.keywords[keyword]);
                return;
            }
        }
        // Priority 4: Single emoji tokens (e.g., 👉, 💦, 🥰, ❌)
        for (var lexeme in Lexer.emojiTokens) {
            if (remaining.startsWith(lexeme)) {
                this.current += lexeme.length;
                this.addToken(Lexer.emojiTokens[lexeme]);
                return;
            }
        }
        var c = this.peek();
        // Priority 5: Numbers
        if (this.isDigit(c)) {
            this.number();
            return;
        }
        // Priority 6: Identifiers and keywords
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUMsSUFBSSxFQUFFLDZDQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNoRyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksR0FBRyxJQUFJLHdDQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLHFCQUFJLEdBQVo7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLDZDQUFTLENBQUMsS0FBSyxFQUFFLDZDQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLElBQUksR0FBRyxJQUFJLHdDQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLHVCQUFNLEdBQWQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLDZDQUFTLENBQUMsS0FBSyxFQUFFLDZDQUFTLENBQUMsUUFBUSxFQUFFLDZDQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUN4RSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLElBQUksR0FBRyxJQUFJLHdDQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEs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TSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQUssSUFBSSxvQkFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQzVELE9BQU87SUFDWCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDaEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNqQyxJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ25DLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2IsWUFBWSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLENBQUM7SUFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQywrQkFBK0I7UUFDbkQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuY2xlX2xhbmcvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vc3JjL2ludGVycHJldGVyL2FzdC50cyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vc3JjL2ludGVycHJldGVyL2ludGVycHJldGVyLnRzIiwid2VicGFjazovL3VuY2xlX2xhbmcvLi9zcmMvaW50ZXJwcmV0ZXIvbGV4ZXIudHMiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy8uL3NyYy9pbnRlcnByZXRlci9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vc3JjL2ludGVycHJldGVyL3BhcnNlci50cyIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly91bmNsZV9sYW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VuY2xlX2xhbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW5jbGVfbGFuZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VuY2xlX2xhbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bmNsZV9sYW5nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly91bmNsZV9sYW5nLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2NoYXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jaGF0LWJveCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNpbnB1dC1hcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNtZXNzYWdlLWlucHV0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7IC8qIEFwcHJveGltYXRlbHkgNCBsaW5lcyAqL1xuICAgIG1heC1oZWlnaHQ6IDgwcHg7IC8qIEZpeGVkIGF0IDQgbGluZXMsIHNjcm9sbCBhZnRlciB0aGF0ICovXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuI3NlbmQtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4ubWVzc2FnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnVzZXItbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5ib3QtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllYjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUUsMEJBQTBCO0lBQzVDLGdCQUFnQixFQUFFLHdDQUF3QztJQUMxRCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY2hhdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jaGF0LWJveCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNpbnB1dC1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21lc3NhZ2UtaW5wdXQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7IC8qIEFwcHJveGltYXRlbHkgNCBsaW5lcyAqL1xcbiAgICBtYXgtaGVpZ2h0OiA4MHB4OyAvKiBGaXhlZCBhdCA0IGxpbmVzLCBzY3JvbGwgYWZ0ZXIgdGhhdCAqL1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuI3NlbmQtYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4udXNlci1tZXNzYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5ib3QtbWVzc2FnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZWI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi9sZXhlclwiO1xuXG4vKipcbiAqIFRoZSBWaXNpdG9yIHBhdHRlcm4gaXMgYSBkZXNpZ24gcGF0dGVybiB0aGF0IGFsbG93cyB5b3UgdG8gYWRkIG5ldyBvcGVyYXRpb25zXG4gKiB0byBhIHNldCBvZiBjbGFzc2VzIHdpdGhvdXQgY2hhbmdpbmcgdGhlIGNsYXNzZXMgdGhlbXNlbHZlcy4gSW4gb3VyIGNhc2UsIHRoZVxuICogYEV4cHJgIGNsYXNzZXMgcmVwcmVzZW50IHRoZSBzdHJ1Y3R1cmUgb2Ygb3VyIGNvZGUgKHRoZSBBU1QpLCBhbmQgd2Ugd2FudCB0b1xuICogcGVyZm9ybSBvcGVyYXRpb25zIG9uIHRoaXMgc3RydWN0dXJlLCBsaWtlIGludGVycHJldGluZyBpdC4gVGhlIGBWaXNpdG9yYFxuICogaW50ZXJmYWNlIGRlZmluZXMgYSBgdmlzaXRgIG1ldGhvZCBmb3IgZWFjaCB0eXBlIG9mIGV4cHJlc3Npb24uXG4gKiBAdGVtcGxhdGUgUiBUaGUgcmV0dXJuIHR5cGUgb2YgdGhlIHZpc2l0IG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmlzaXRvcjxSPiB7XG4gICAgdmlzaXRBc3NpZ25FeHByKGV4cHI6IEFzc2lnbik6IFI7XG4gICAgdmlzaXRCaW5hcnlFeHByKGV4cHI6IEJpbmFyeSk6IFI7XG4gICAgdmlzaXRDYWxsRXhwcihleHByOiBDYWxsKTogUjtcbiAgICB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBHcm91cGluZyk6IFI7XG4gICAgdmlzaXRMaXRlcmFsRXhwcihleHByOiBMaXRlcmFsKTogUjtcbiAgICB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IExvZ2ljYWwpOiBSO1xuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IFVuYXJ5KTogUjtcbiAgICB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBWYXJpYWJsZSk6IFI7XG4gICAgdmlzaXRWZWN0b3JMaXRlcmFsRXhwcihleHByOiBWZWN0b3JMaXRlcmFsKTogUjtcbiAgICB2aXNpdEluZGV4QWNjZXNzRXhwcihleHByOiBJbmRleEFjY2Vzcyk6IFI7XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIGV4cHJlc3Npb24gbm9kZXMgaW4gb3VyIEFic3RyYWN0IFN5bnRheCBUcmVlIChBU1QpLlxuICogQW4gZXhwcmVzc2lvbiBpcyBhIHBpZWNlIG9mIGNvZGUgdGhhdCBldmFsdWF0ZXMgdG8gYSB2YWx1ZSwgbGlrZSBgMSArIDJgIG9yIGB4ICogM2AuXG4gKiBUaGUgYGFjY2VwdGAgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFZpc2l0b3IgcGF0dGVybi4gSXQgYWxsb3dzIGEgdmlzaXRvciAobGlrZSBvdXJcbiAqIGludGVycHJldGVyKSB0byBwcm9jZXNzIHRoZSBleHByZXNzaW9uIG5vZGUuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHByIHtcbiAgICBhYnN0cmFjdCBhY2NlcHQ8Uj4odmlzaXRvcjogVmlzaXRvcjxSPik6IFI7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byB0aGUgYFZpc2l0b3JgIGZvciBleHByZXNzaW9ucywgdGhpcyBpcyBhIHZpc2l0b3IgZm9yIHN0YXRlbWVudHMuXG4gKiBBIHN0YXRlbWVudCBpcyBhIHBpZWNlIG9mIGNvZGUgdGhhdCBwZXJmb3JtcyBhbiBhY3Rpb24sIGxpa2UgZGVjbGFyaW5nIGEgdmFyaWFibGVcbiAqIG9yIHByaW50aW5nIGEgdmFsdWUuXG4gKiBAdGVtcGxhdGUgUiBUaGUgcmV0dXJuIHR5cGUgb2YgdGhlIHZpc2l0IG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RtdFZpc2l0b3I8Uj4ge1xuICAgIHZpc2l0QmxvY2tTdG10KHN0bXQ6IEJsb2NrKTogUjtcbiAgICB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IEV4cHJlc3Npb24pOiBSO1xuICAgIHZpc2l0SWZTdG10KHN0bXQ6IElmKTogUjtcbiAgICB2aXNpdFByaW50U3RtdChzdG10OiBQcmludCk6IFI7XG4gICAgdmlzaXRWYXJTdG10KHN0bXQ6IFZhcik6IFI7XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIHN0YXRlbWVudCBub2RlcyBpbiBvdXIgQVNULlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RtdCB7XG4gICAgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUjtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFzc2lnbm1lbnQgZXhwcmVzc2lvbiwgbGlrZSBgeCA9IDEwYC5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzc2lnbiBleHRlbmRzIEV4cHIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSB0b2tlbiBmb3IgdGhlIHZhcmlhYmxlIGJlaW5nIGFzc2lnbmVkIHRvLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZXhwcmVzc2lvbiBvbiB0aGUgcmlnaHQtaGFuZCBzaWRlIG9mIHRoZSBgPWAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IFRva2VuLCBwdWJsaWMgdmFsdWU6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBc3NpZ25FeHByKHRoaXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgYmluYXJ5IG9wZXJhdGlvbiwgbGlrZSBgMSArIDJgIG9yIGB4ID4gNWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbGVmdCBUaGUgZXhwcmVzc2lvbiBvbiB0aGUgbGVmdCBzaWRlIG9mIHRoZSBvcGVyYXRvci5cbiAgICAgKiBAcGFyYW0gb3BlcmF0b3IgVGhlIHRva2VuIGZvciB0aGUgb3BlcmF0b3IgKGArYCwgYC1gLCBgKmAsIGAvYCwgZXRjLikuXG4gICAgICogQHBhcmFtIHJpZ2h0IFRoZSBleHByZXNzaW9uIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBvcGVyYXRvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGVmdDogRXhwciwgcHVibGljIG9wZXJhdG9yOiBUb2tlbiwgcHVibGljIHJpZ2h0OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5RXhwcih0aGlzKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGZ1bmN0aW9uIGNhbGwuIEFsdGhvdWdoIHdlIGRvbid0IGhhdmUgdXNlci1kZWZpbmVkIGZ1bmN0aW9ucyB5ZXQsXG4gKiB0aGlzIGlzIHVzZWQgZm9yIGJ1aWx0LWluIGZ1bmN0aW9ucyBsaWtlIGBwcmludGAuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWxsIGV4dGVuZHMgRXhwciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNhbGxlZSBUaGUgZXhwcmVzc2lvbiB0aGF0IGV2YWx1YXRlcyB0byB0aGUgZnVuY3Rpb24gYmVpbmcgY2FsbGVkLlxuICAgICAqIEBwYXJhbSBwYXJlbiBUaGUgY2xvc2luZyBwYXJlbnRoZXNpcyB0b2tlbiwgdXNlZCBmb3IgZXJyb3IgcmVwb3J0aW5nLlxuICAgICAqIEBwYXJhbSBhcmdzIEEgbGlzdCBvZiBleHByZXNzaW9ucyBmb3IgdGhlIGFyZ3VtZW50cyB0byB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIGNhbGxlZTogRXhwciwgcHVibGljIHBhcmVuOiBUb2tlbiwgcHVibGljIGFyZ3M6IEV4cHJbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENhbGxFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZ3JvdXBpbmcgb2YgZXhwcmVzc2lvbnMsIGxpa2UgYCgxICsgMilgLiBUaGlzIGlzIHVzZWQgdG9cbiAqIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9yZGVyIG9mIG9wZXJhdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91cGluZyBleHRlbmRzIEV4cHIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uIFRoZSBleHByZXNzaW9uIGluc2lkZSB0aGUgcGFyZW50aGVzZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIGV4cHJlc3Npb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHcm91cGluZ0V4cHIodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBsaXRlcmFsIHZhbHVlLCBsaWtlIGEgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIG9yIG5pbC5cbiAqL1xuZXhwb3J0IGNsYXNzIExpdGVyYWwgZXh0ZW5kcyBFeHByIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGFjdHVhbCB2YWx1ZSBvZiB0aGUgbGl0ZXJhbC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgbG9naWNhbCBvcGVyYXRpb24sIGxpa2UgYGEgJiYgYmAgb3IgYHggfHwgeWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpY2FsIGV4dGVuZHMgRXhwciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxlZnQgVGhlIGV4cHJlc3Npb24gb24gdGhlIGxlZnQgc2lkZSBvZiB0aGUgb3BlcmF0b3IuXG4gICAgICogQHBhcmFtIG9wZXJhdG9yIFRoZSB0b2tlbiBmb3IgdGhlIGxvZ2ljYWwgb3BlcmF0b3IgKGAmJmAgb3IgYHx8YCkuXG4gICAgICogQHBhcmFtIHJpZ2h0IFRoZSBleHByZXNzaW9uIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBvcGVyYXRvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGVmdDogRXhwciwgcHVibGljIG9wZXJhdG9yOiBUb2tlbiwgcHVibGljIHJpZ2h0OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TG9naWNhbEV4cHIodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSB1bmFyeSBvcGVyYXRpb24sIGxpa2UgYC01YCBvciBgIXRydWVgLlxuICovXG5leHBvcnQgY2xhc3MgVW5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gb3BlcmF0b3IgVGhlIHRva2VuIGZvciB0aGUgdW5hcnkgb3BlcmF0b3IgKGAtYCBvciBgIWApLlxuICAgICAqIEBwYXJhbSByaWdodCBUaGUgZXhwcmVzc2lvbiB0byB0aGUgcmlnaHQgb2YgdGhlIG9wZXJhdG9yLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvcGVyYXRvcjogVG9rZW4sIHB1YmxpYyByaWdodDogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFVuYXJ5RXhwcih0aGlzKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHZhcmlhYmxlIGV4cHJlc3Npb24sIGxpa2UgYHhgLlxuICovXG5leHBvcnQgY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBFeHByIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgdG9rZW4gZm9yIHRoZSB2YXJpYWJsZSdzIG5hbWUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IFRva2VuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyaWFibGVFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgdmVjdG9yIChhcnJheSkgbGl0ZXJhbCwgbGlrZSBgWzEsIDIsIDNdYC5cbiAqL1xuZXhwb3J0IGNsYXNzIFZlY3RvckxpdGVyYWwgZXh0ZW5kcyBFeHByIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdmFsdWVzIEEgbGlzdCBvZiBleHByZXNzaW9ucyBmb3IgdGhlIGVsZW1lbnRzIG9mIHRoZSB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIHZhbHVlczogRXhwcltdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmVjdG9yTGl0ZXJhbEV4cHIodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gaW5kZXggYWNjZXNzIGV4cHJlc3Npb24sIGxpa2UgYG15X3ZlY3RvclswXWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbmRleEFjY2VzcyBleHRlbmRzIEV4cHIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjYWxsZWUgVGhlIGV4cHJlc3Npb24gdGhhdCBldmFsdWF0ZXMgdG8gdGhlIHZlY3RvciBiZWluZyBpbmRleGVkLlxuICAgICAqIEBwYXJhbSBicmFja2V0IFRoZSBjbG9zaW5nIGJyYWNrZXQgdG9rZW4sIHVzZWQgZm9yIGVycm9yIHJlcG9ydGluZy5cbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGV4cHJlc3Npb24gdGhhdCBldmFsdWF0ZXMgdG8gdGhlIGluZGV4LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjYWxsZWU6IEV4cHIsIHB1YmxpYyBicmFja2V0OiBUb2tlbiwgcHVibGljIGluZGV4OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxSPih2aXNpdG9yOiBWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SW5kZXhBY2Nlc3NFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBibG9jayBvZiBzdGF0ZW1lbnRzLCBlbmNsb3NlZCBpbiBjdXJseSBicmFjZXMgYHsgLi4uIH1gLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBTdG10IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc3RhdGVtZW50cyBBIGxpc3Qgb2Ygc3RhdGVtZW50cyBpbnNpZGUgdGhlIGJsb2NrLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZW1lbnRzOiBTdG10W10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmxvY2tTdG10KHRoaXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGV4cHJlc3Npb24gc3RhdGVtZW50LiBUaGlzIGlzIGFuIGV4cHJlc3Npb24gdGhhdCBpcyB1c2VkIGFzIGFcbiAqIHN0YXRlbWVudCwgbGlrZSBhIGZ1bmN0aW9uIGNhbGwgYG15X2Z1bmN0aW9uKCk7YC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBTdG10IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2lvbiBUaGUgZXhwcmVzc2lvbiB0byBiZSBleGVjdXRlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXhwcmVzc2lvbjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHByZXNzaW9uU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBpZiBzdGF0ZW1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBJZiBleHRlbmRzIFN0bXQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25kaXRpb24gVGhlIGNvbmRpdGlvbiB0byBiZSBldmFsdWF0ZWQuXG4gICAgICogQHBhcmFtIHRoZW5CcmFuY2ggVGhlIHN0YXRlbWVudCB0byBiZSBleGVjdXRlZCBpZiB0aGUgY29uZGl0aW9uIGlzIHRydWUuXG4gICAgICogQHBhcmFtIGVsc2VCcmFuY2ggVGhlIHN0YXRlbWVudCB0byBiZSBleGVjdXRlZCBpZiB0aGUgY29uZGl0aW9uIGlzIGZhbHNlIChvcHRpb25hbCkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbmRpdGlvbjogRXhwciwgcHVibGljIHRoZW5CcmFuY2g6IFN0bXQsIHB1YmxpYyBlbHNlQnJhbmNoOiBTdG10IHwgbnVsbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJZlN0bXQodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBwcmludCBzdGF0ZW1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmludCBleHRlbmRzIFN0bXQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uIFRoZSBleHByZXNzaW9uIHdob3NlIHZhbHVlIGlzIHRvIGJlIHByaW50ZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIGV4cHJlc3Npb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJpbnRTdG10KHRoaXMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZGVjbGFyYXRpb24gc3RhdGVtZW50LCBsaWtlIGB2YXIgeCA9IDEwO2AuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYXIgZXh0ZW5kcyBTdG10IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgdG9rZW4gZm9yIHRoZSB2YXJpYWJsZSdzIG5hbWUuXG4gICAgICogQHBhcmFtIGluaXRpYWxpemVyIFRoZSBleHByZXNzaW9uIHRvIGluaXRpYWxpemUgdGhlIHZhcmlhYmxlIHdpdGggKG9wdGlvbmFsKS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogVG9rZW4sIHB1YmxpYyBpbml0aWFsaXplcjogRXhwciB8IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyU3RtdCh0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIEFzc2lnbixcbiAgICBCaW5hcnksXG4gICAgQmxvY2ssXG4gICAgQ2FsbCxcbiAgICBFeHByLFxuICAgIEV4cHJlc3Npb24sXG4gICAgR3JvdXBpbmcsXG4gICAgSWYsXG4gICAgSW5kZXhBY2Nlc3MsXG4gICAgTGl0ZXJhbCxcbiAgICBMb2dpY2FsLFxuICAgIFByaW50LFxuICAgIFN0bXQsXG4gICAgVW5hcnksXG4gICAgVmFyLFxuICAgIFZhcmlhYmxlLFxuICAgIFZlY3RvckxpdGVyYWwsXG4gICAgVmlzaXRvcixcbiAgICBTdG10VmlzaXRvclxufSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tIFwiLi9sZXhlclwiO1xuXG4vKipcbiAqIEEgY3VzdG9tIGVycm9yIGNsYXNzIGZvciBydW50aW1lIGVycm9ycy4gVGhpcyBoZWxwcyB1cyBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gKiBlcnJvcnMgdGhhdCBoYXBwZW4gZHVyaW5nIGludGVycHJldGF0aW9uIGFuZCBvdGhlciB0eXBlcyBvZiBlcnJvcnMuXG4gKi9cbmNsYXNzIFJ1bnRpbWVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW46IGFueSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgRW52aXJvbm1lbnQgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIG1hbmFnaW5nIHRoZSBzdGF0ZSBvZiB2YXJpYWJsZXMgaW5cbiAqIHRoZSBwcm9ncmFtLiBJdCdzIGEgc3ltYm9sIHRhYmxlIHRoYXQgbWFwcyB2YXJpYWJsZSBuYW1lcyB0byB0aGVpciB2YWx1ZXMuXG4gKiBJdCBzdXBwb3J0cyBuZXN0ZWQgc2NvcGVzLCB3aGljaCBpcyBjcnVjaWFsIGZvciBmZWF0dXJlcyBsaWtlIGJsb2NrcyBhbmRcbiAqIGZ1bmN0aW9ucy5cbiAqL1xuY2xhc3MgRW52aXJvbm1lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xuICAgIHJlYWRvbmx5IGVuY2xvc2luZzogRW52aXJvbm1lbnQgfCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVuY2xvc2luZyBUaGUgZW5jbG9zaW5nIGVudmlyb25tZW50LCBmb3IgbmVzdGVkIHNjb3Blcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbmNsb3Npbmc6IEVudmlyb25tZW50IHwgbnVsbCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5lbmNsb3NpbmcgPSBlbmNsb3Npbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhIG5ldyB2YXJpYWJsZSBpbiB0aGUgY3VycmVudCBzY29wZS5cbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGUuXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiBhIHZhcmlhYmxlLiBJdCBmaXJzdCBsb29rcyBpbiB0aGUgY3VycmVudCBzY29wZSxcbiAgICAgKiBhbmQgaWYgaXQncyBub3QgZm91bmQsIGl0IHJlY3Vyc2l2ZWx5IHNlYXJjaGVzIGluIHRoZSBlbmNsb3Npbmcgc2NvcGVzLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSB0b2tlbiBmb3IgdGhlIHZhcmlhYmxlJ3MgbmFtZS5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmFsdWUgb2YgdGhlIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIGdldChuYW1lOiBUb2tlbik6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZS5sZXhlbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KG5hbWUubGV4ZW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuY2xvc2luZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jbG9zaW5nLmdldChuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IobmFtZSwgYFVuZGVmaW5lZCB2YXJpYWJsZSAnJHtuYW1lLmxleGVtZX0nLmApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc2lnbnMgYSBuZXcgdmFsdWUgdG8gYW4gZXhpc3RpbmcgdmFyaWFibGUuIEl0IGZvbGxvd3MgdGhlIHNhbWUgc2NvcGVcbiAgICAgKiBjaGFpbiBhcyBgZ2V0YC5cbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgdG9rZW4gZm9yIHRoZSB2YXJpYWJsZSdzIG5hbWUuXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBuZXcgdmFsdWUuXG4gICAgICovXG4gICAgYXNzaWduKG5hbWU6IFRva2VuLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZS5sZXhlbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcy5zZXQobmFtZS5sZXhlbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuY2xvc2luZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbmNsb3NpbmcuYXNzaWduKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IobmFtZSwgYFVuZGVmaW5lZCB2YXJpYWJsZSAnJHtuYW1lLmxleGVtZX0nLmApO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIFRoZSBJbnRlcnByZXRlciBpcyB0aGUgaGVhcnQgb2Ygb3VyIGxhbmd1YWdlLiBJdCB3YWxrcyB0aGUgQWJzdHJhY3QgU3ludGF4XG4gKiBUcmVlIChBU1QpIHByb2R1Y2VkIGJ5IHRoZSBwYXJzZXIgYW5kIGV4ZWN1dGVzIHRoZSBjb2RlLiBJdCBpbXBsZW1lbnRzIHRoZVxuICogVmlzaXRvciBwYXR0ZXJucyBmb3IgYm90aCBleHByZXNzaW9ucyBhbmQgc3RhdGVtZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIGltcGxlbWVudHMgVmlzaXRvcjxhbnk+LCBTdG10VmlzaXRvcjx2b2lkPiB7XG4gICAgcHJpdmF0ZSBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgb3V0cHV0OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG91dHB1dCBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgb3V0cHV0IG9mIHRoZSBgcHJpbnRgIHN0YXRlbWVudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvdXRwdXQ6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBvdXRwdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSBpbnRlcnByZXRlci4gSXQgdGFrZXMgYSBsaXN0IG9mIHN0YXRlbWVudHNcbiAgICAgKiBhbmQgZXhlY3V0ZXMgdGhlbS5cbiAgICAgKiBAcGFyYW0gc3RhdGVtZW50cyBUaGUgbGlzdCBvZiBzdGF0ZW1lbnRzIHRvIGludGVycHJldC5cbiAgICAgKi9cbiAgICBpbnRlcnByZXQoc3RhdGVtZW50czogU3RtdFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0YXRlbWVudCBvZiBzdGF0ZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSdW50aW1lRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBoZWxwZXIgbWV0aG9kIHRvIGV4ZWN1dGUgYSBzaW5nbGUgc3RhdGVtZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgZXhlY3V0ZShzdG10OiBTdG10KSB7XG4gICAgICAgIHN0bXQuYWNjZXB0KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIGEgYmxvY2sgb2Ygc3RhdGVtZW50cyBpbiBhIG5ldywgbmVzdGVkIHNjb3BlLlxuICAgICAqL1xuICAgIHZpc2l0QmxvY2tTdG10KHN0bXQ6IEJsb2NrKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXhlY3V0ZUJsb2NrKHN0bXQuc3RhdGVtZW50cywgbmV3IEVudmlyb25tZW50KHRoaXMuZW52aXJvbm1lbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGhlbHBlciBtZXRob2QgdG8gZXhlY3V0ZSBhIGJsb2NrIG9mIHN0YXRlbWVudHMgaW4gYSBnaXZlbiBlbnZpcm9ubWVudC5cbiAgICAgKi9cbiAgICBleGVjdXRlQmxvY2soc3RhdGVtZW50czogU3RtdFtdLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmVudmlyb25tZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgcHJldmlvdXMgZW52aXJvbm1lbnQgYWZ0ZXIgdGhlIGJsb2NrIGlzIGV4ZWN1dGVkLlxuICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHByZXZpb3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgYW4gZXhwcmVzc2lvbiBzdGF0ZW1lbnQuIFRoaXMgc2ltcGx5IGV2YWx1YXRlcyB0aGUgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIGFuIGlmIHN0YXRlbWVudC5cbiAgICAgKi9cbiAgICB2aXNpdElmU3RtdChzdG10OiBJZik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1RydXRoeSh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKSkpIHtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10LnRoZW5CcmFuY2gpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0bXQuZWxzZUJyYW5jaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQuZWxzZUJyYW5jaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyBhIHByaW50IHN0YXRlbWVudC5cbiAgICAgKi9cbiAgICB2aXNpdFByaW50U3RtdChzdG10OiBQcmludCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC5leHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vdXRwdXQodGhpcy5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyBhIHZhcmlhYmxlIGRlY2xhcmF0aW9uIHN0YXRlbWVudC5cbiAgICAgKi9cbiAgICB2aXNpdFZhclN0bXQoc3RtdDogVmFyKTogdm9pZCB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmIChzdG10LmluaXRpYWxpemVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC5pbml0aWFsaXplcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVudmlyb25tZW50LmRlZmluZShzdG10Lm5hbWUubGV4ZW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIGFuIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICB2aXNpdEFzc2lnbkV4cHIoZXhwcjogQXNzaWduKTogYW55IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xuICAgICAgICB0aGlzLmVudmlyb25tZW50LmFzc2lnbihleHByLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlcyBhIGJpbmFyeSBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBCaW5hcnkpOiBhbnkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XG5cbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkdyZWF0ZXI6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja051bWJlck9wZXJhbmRzKGV4cHIub3BlcmF0b3IsIGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGxlZnQpID4gTnVtYmVyKHJpZ2h0KTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkdyZWF0ZXJFcXVhbDpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIobGVmdCkgPj0gTnVtYmVyKHJpZ2h0KTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkxlc3M6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja051bWJlck9wZXJhbmRzKGV4cHIub3BlcmF0b3IsIGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGxlZnQpIDwgTnVtYmVyKHJpZ2h0KTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkxlc3NFcXVhbDpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIobGVmdCkgPD0gTnVtYmVyKHJpZ2h0KTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkJhbmdFcXVhbDogcmV0dXJuICF0aGlzLmlzRXF1YWwobGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRXF1YWxFcXVhbDogcmV0dXJuIHRoaXMuaXNFcXVhbChsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51czpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIobGVmdCkgLSBOdW1iZXIocmlnaHQpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGx1czpcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlZnQgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHJpZ2h0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICsgcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGVmdCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmlnaHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgKyByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihleHByLm9wZXJhdG9yLCBcIk9wZXJhbmRzIG11c3QgYmUgdHdvIG51bWJlcnMgb3IgdHdvIHN0cmluZ3MuXCIpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU2xhc2g6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja051bWJlck9wZXJhbmRzKGV4cHIub3BlcmF0b3IsIGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGxlZnQpIC8gTnVtYmVyKHJpZ2h0KTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkFzdGVyaXNrOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXJPcGVyYW5kcyhleHByLm9wZXJhdG9yLCBsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihsZWZ0KSAqIE51bWJlcihyaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbnJlYWNoYWJsZS5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIGEgY2FsbCBleHByZXNzaW9uLiBGb3Igbm93LCB0aGlzIGlzIGEgcGxhY2Vob2xkZXIgYXMgd2UgZG9uJ3RcbiAgICAgKiBoYXZlIHVzZXItZGVmaW5lZCBmdW5jdGlvbnMuXG4gICAgICovXG4gICAgdmlzaXRDYWxsRXhwcihleHByOiBDYWxsKTogYW55IHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIGEgZ3JvdXBpbmcgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBHcm91cGluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuZXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIGEgbGl0ZXJhbCBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogTGl0ZXJhbCk6IGFueSB7XG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlcyBhIGxvZ2ljYWwgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IExvZ2ljYWwpOiBhbnkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xuXG4gICAgICAgIGlmIChleHByLm9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5Pcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcnV0aHkobGVmdCkpIHJldHVybiBsZWZ0O1xuICAgICAgICB9IGVsc2UgeyAvLyBBTkRcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RydXRoeShsZWZ0KSkgcmV0dXJuIGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgYSB1bmFyeSBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IFVuYXJ5KTogYW55IHtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5CYW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc1RydXRoeShyaWdodCk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51czpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZChleHByLm9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC1OdW1iZXIocmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5yZWFjaGFibGUuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlcyBhIHZhcmlhYmxlIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogVmFyaWFibGUpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgYSB2ZWN0b3IgbGl0ZXJhbCBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHZpc2l0VmVjdG9yTGl0ZXJhbEV4cHIoZXhwcjogVmVjdG9yTGl0ZXJhbCk6IGFueSB7XG4gICAgICAgIHJldHVybiBleHByLnZhbHVlcy5tYXAodiA9PiB0aGlzLmV2YWx1YXRlKHYpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgYW4gaW5kZXggYWNjZXNzIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgdmlzaXRJbmRleEFjY2Vzc0V4cHIoZXhwcjogSW5kZXhBY2Nlc3MpOiBhbnkge1xuICAgICAgICBjb25zdCBjYWxsZWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2YWx1YXRlKGV4cHIuaW5kZXgpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNhbGxlZSkgJiYgdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxlZVtpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKGV4cHIuYnJhY2tldCwgXCJDYW4gb25seSBpbmRleCBpbnRvIHZlY3RvcnMgd2l0aCBudW1iZXJzLlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGhlbHBlciBtZXRob2QgdG8gZXZhbHVhdGUgYSBzaW5nbGUgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZXZhbHVhdGUoZXhwcjogRXhwcik6IGFueSB7XG4gICAgICAgIHJldHVybiBleHByLmFjY2VwdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgXCJ0cnV0aHlcIiBpbiBvdXIgbGFuZ3VhZ2UncyBzZW5zZS4gYGZhbHNlYCBhbmRcbiAgICAgKiBgbmlsYCBhcmUgZmFsc2V5LCBhbmQgZXZlcnl0aGluZyBlbHNlIGlzIHRydXRoeS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzVHJ1dGh5KG9iamVjdDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwiYm9vbGVhblwiKSByZXR1cm4gb2JqZWN0O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdHdvIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0VxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChhID09PSBudWxsICYmIGIgPT09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoYSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHZhbHVlIHRvIGEgc3RyaW5nIGZvciBwcmludGluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RyaW5naWZ5KG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgcmV0dXJuIFwibmlsXCI7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBgWyR7b2JqZWN0Lm1hcChvID0+IHRoaXMuc3RyaW5naWZ5KG8pKS5qb2luKCcsICcpfV1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGhlbHBlciBtZXRob2QgdG8gY2hlY2sgaWYgYW4gb3BlcmFuZCBpcyBhIG51bWJlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNoZWNrTnVtYmVyT3BlcmFuZChvcGVyYXRvcjogVG9rZW4sIG9wZXJhbmQ6IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIG9wZXJhbmQgPT09ICdudW1iZXInKSByZXR1cm47XG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3Iob3BlcmF0b3IsIFwiT3BlcmFuZCBtdXN0IGJlIGEgbnVtYmVyLlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGhlbHBlciBtZXRob2QgdG8gY2hlY2sgaWYgYm90aCBvcGVyYW5kcyBhcmUgbnVtYmVycy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNoZWNrTnVtYmVyT3BlcmFuZHMob3BlcmF0b3I6IFRva2VuLCBsZWZ0OiBhbnksIHJpZ2h0OiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcmlnaHQgPT09ICdudW1iZXInKSByZXR1cm47XG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3Iob3BlcmF0b3IsIFwiT3BlcmFuZHMgbXVzdCBiZSBudW1iZXJzLlwiKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIFRoaXMgZW51bSBkZWZpbmVzIGFsbCB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIHRva2VucyB0aGF0IG91ciBsYW5ndWFnZSByZWNvZ25pemVzLlxuICogQSB0b2tlbiBpcyB0aGUgc21hbGxlc3QgdW5pdCBvZiBjb2RlIHRoYXQgaGFzIG1lYW5pbmcsIGxpa2UgYSBudW1iZXIsIGFuIG9wZXJhdG9yLFxuICogb3IgYSBrZXl3b3JkLlxuICovXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICAgIC8vIExpdGVyYWxzOiByZXByZXNlbnQgcmF3IGRhdGEgdmFsdWVzIGluIHRoZSBjb2RlLlxuICAgIE51bWJlciwgICAgICAvLyBlLmcuLCAxMjMsIDQ1LjY3XG4gICAgU3RyaW5nLCAgICAgIC8vIGUuZy4sIFwiaGVsbG9cIlxuICAgIElkZW50aWZpZXIsICAvLyBlLmcuLCBteV92YXJpYWJsZVxuICAgIEJvb2xlYW4sICAgICAvLyB0cnVlIG9yIGZhbHNlXG5cbiAgICAvLyBLZXl3b3Jkczogd29yZHMgd2l0aCBzcGVjaWFsIG1lYW5pbmcgaW4gdGhlIGxhbmd1YWdlLlxuICAgIElmLCAgICAgICAgICAvLyDlpoLmnpxcbiAgICBFbHNlSWYsICAgICAgLy8g5Lmf5Y+v6IO9XG4gICAgRWxzZSwgICAgICAgIC8vIOS4jeeEtuWwsVxuICAgIFRydWUsICAgICAgICAvLyDnnJ/nmoRcbiAgICBGYWxzZSwgICAgICAgLy8g5YGH55qEXG4gICAgVmFyLCAgICAgICAgIC8vIOi3n+S9oOiqqlxuXG4gICAgLy8gT3BlcmF0b3JzOiBzeW1ib2xzIHRoYXQgcGVyZm9ybSBvcGVyYXRpb25zIG9uIGRhdGEuXG4gICAgUGx1cywgICAgICAgICAgLy8g5Yqg5LiKXG4gICAgTWludXMsICAgICAgICAgLy8g5rib5o6JXG4gICAgQXN0ZXJpc2ssICAgICAgLy8g5LmYXG4gICAgU2xhc2gsICAgICAgICAgLy8g6ZmkXG4gICAgUGVyY2VudCwgICAgICAgLy8g5Y+W6aSY5pW4XG4gICAgRXF1YWwsICAgICAgICAgLy8g5pivXG4gICAgRXF1YWxFcXVhbCwgICAgLy8g562J5pa8XG4gICAgQmFuZywgICAgICAgICAgLy8g4p2MXG4gICAgQmFuZ0VxdWFsLCAgICAgLy8g4p2M562J5pa8XG4gICAgTGVzcywgICAgICAgICAgLy8g5bCP5pa8XG4gICAgTGVzc0VxdWFsLCAgICAgLy8g5bCP5pa8562J5pa8XG4gICAgR3JlYXRlciwgICAgICAgLy8g5aSn5pa8XG4gICAgR3JlYXRlckVxdWFsLCAgLy8g5aSn5pa8562J5pa8XG4gICAgQW5kLCAgICAgICAgICAgLy8g6ICM5LiUXG4gICAgT3IsICAgICAgICAgICAgLy8g5oiW5pivXG5cbiAgICAvLyBQdW5jdHVhdGlvbjogY2hhcmFjdGVycyB0aGF0IHN0cnVjdHVyZSB0aGUgY29kZS5cbiAgICBMZWZ0UGFyZW4sICAgICAvLyDwn5GJXG4gICAgUmlnaHRQYXJlbiwgICAgLy8g8J+RiFxuICAgIExlZnRCcmFjZSwgICAgIC8vIPCfkYZcbiAgICBSaWdodEJyYWNlLCAgICAvLyDwn5GHXG4gICAgTGVmdEJyYWNrZXQsICAgLy8g8J+knFxuICAgIFJpZ2h0QnJhY2tldCwgIC8vIPCfpJtcbiAgICBDb21tYSwgICAgICAgICAvLyDwn4yfXG4gICAgU2VtaWNvbG9uLCAgICAgLy8g8J+SplxuICAgIFByaW50LCAgICAgICAgIC8vIPCfpbBcbiAgICBHcmVldCwgICAgICAgICAvLyDinaQuLi7inaRcblxuICAgIC8vIEVuZCBvZiBGaWxlOiBhIHNwZWNpYWwgdG9rZW4gdG8gbWFyayB0aGUgZW5kIG9mIHRoZSBzb3VyY2UgY29kZS5cbiAgICBFT0YsXG59XG5cbi8qKlxuICogVGhpcyBpbnRlcmZhY2UgZGVmaW5lcyB0aGUgc3RydWN0dXJlIG9mIGEgVG9rZW4uIEVhY2ggdG9rZW4gaGFzIGEgdHlwZSxcbiAqIHRoZSBvcmlnaW5hbCB0ZXh0IGZyb20gdGhlIHNvdXJjZSBjb2RlIChsZXhlbWUpLCBhbiBvcHRpb25hbCBsaXRlcmFsIHZhbHVlXG4gKiAoZm9yIG51bWJlcnMsIHN0cmluZ3MsIGV0Yy4pLCBhbmQgdGhlIGxpbmUgbnVtYmVyIHdoZXJlIGl0IGFwcGVhcmVkLCB3aGljaFxuICogaXMgdXNlZnVsIGZvciBlcnJvciByZXBvcnRpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW4ge1xuICAgIHR5cGU6IFRva2VuVHlwZTtcbiAgICBsZXhlbWU6IHN0cmluZztcbiAgICBsaXRlcmFsPzogYW55O1xuICAgIGxpbmU6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBUaGUgTGV4ZXIgKG9yIHNjYW5uZXIpIGlzIHJlc3BvbnNpYmxlIGZvciB0YWtpbmcgdGhlIHJhdyBzb3VyY2UgY29kZSBhcyBhIHN0cmluZ1xuICogYW5kIGJyZWFraW5nIGl0IGRvd24gaW50byBhIHNlcmllcyBvZiB0b2tlbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBMZXhlciB7XG4gICAgcHJpdmF0ZSBzb3VyY2U6IHN0cmluZztcbiAgICBwcml2YXRlIHRva2VuczogVG9rZW5bXSA9IFtdO1xuICAgIHByaXZhdGUgc3RhcnQgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudCA9IDA7XG4gICAgcHJpdmF0ZSBsaW5lID0gMTtcblxuICAgIC8qKlxuICAgICAqIEEgbWFwIG9mIGFsbCB0aGUga2V5d29yZHMgaW4gdGhlIGxhbmd1YWdlIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIHRva2VuIHR5cGVzLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGtleXdvcmRzOiB7IFtrZXk6IHN0cmluZ106IFRva2VuVHlwZSB9ID0ge1xuICAgICAgICBcIuWmguaenFwiOiBUb2tlblR5cGUuSWYsXG4gICAgICAgIFwi5Lmf5Y+v6IO9XCI6IFRva2VuVHlwZS5FbHNlSWYsXG4gICAgICAgIFwi5LiN54S25bCxXCI6IFRva2VuVHlwZS5FbHNlLFxuICAgICAgICBcIuecn+eahFwiOiBUb2tlblR5cGUuVHJ1ZSxcbiAgICAgICAgXCLlgYfnmoRcIjogVG9rZW5UeXBlLkZhbHNlLFxuICAgICAgICBcIuaYr1wiOiBUb2tlblR5cGUuRXF1YWwsXG4gICAgICAgIFwi562J5pa8XCI6IFRva2VuVHlwZS5FcXVhbEVxdWFsLFxuICAgICAgICBcIuKdjOetieaWvFwiOiBUb2tlblR5cGUuQmFuZ0VxdWFsLFxuICAgICAgICBcIuWwj+aWvFwiOiBUb2tlblR5cGUuTGVzcyxcbiAgICAgICAgXCLlpKfmlrxcIjogVG9rZW5UeXBlLkdyZWF0ZXIsXG4gICAgICAgIFwi5bCP5pa8562J5pa8XCI6IFRva2VuVHlwZS5MZXNzRXF1YWwsXG4gICAgICAgIFwi5aSn5pa8562J5pa8XCI6IFRva2VuVHlwZS5HcmVhdGVyRXF1YWwsXG4gICAgICAgIFwi6ICM5LiUXCI6IFRva2VuVHlwZS5BbmQsXG4gICAgICAgIFwi5oiW5pivXCI6IFRva2VuVHlwZS5PcixcbiAgICAgICAgXCLliqDkuIpcIjogVG9rZW5UeXBlLlBsdXMsXG4gICAgICAgIFwi5rib5o6JXCI6IFRva2VuVHlwZS5NaW51cyxcbiAgICAgICAgXCLkuZhcIjogVG9rZW5UeXBlLkFzdGVyaXNrLFxuICAgICAgICBcIumZpFwiOiBUb2tlblR5cGUuU2xhc2gsXG4gICAgICAgIFwi5Y+W6aSY5pW4XCI6IFRva2VuVHlwZS5QZXJjZW50LFxuICAgICAgICBcIui3n+S9oOiqqlwiOiBUb2tlblR5cGUuVmFyLFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCBvZiBhbGwgdGhlIHNpbmdsZS1jaGFyYWN0ZXIvZW1vamkgdG9rZW5zIGluIHRoZSBsYW5ndWFnZS5cbiAgICAgKiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gYWRkIG5ldyBlbW9qaSB0b2tlbnMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBlbW9qaVRva2VuczogeyBba2V5OiBzdHJpbmddOiBUb2tlblR5cGUgfSA9IHtcbiAgICAgICAgJ/CfkYknOiBUb2tlblR5cGUuTGVmdFBhcmVuLFxuICAgICAgICAn8J+RiCc6IFRva2VuVHlwZS5SaWdodFBhcmVuLFxuICAgICAgICAn8J+Rhic6IFRva2VuVHlwZS5MZWZ0QnJhY2UsXG4gICAgICAgICfwn5GHJzogVG9rZW5UeXBlLlJpZ2h0QnJhY2UsXG4gICAgICAgICfwn6ScJzogVG9rZW5UeXBlLkxlZnRCcmFja2V0LFxuICAgICAgICAn8J+kmyc6IFRva2VuVHlwZS5SaWdodEJyYWNrZXQsXG4gICAgICAgICfwn4yfJzogVG9rZW5UeXBlLkNvbW1hLFxuICAgICAgICAn8J+Spic6IFRva2VuVHlwZS5TZW1pY29sb24sXG4gICAgICAgICfwn6WwJzogVG9rZW5UeXBlLlByaW50LFxuICAgICAgICAn4p2MJzogVG9rZW5UeXBlLkJhbmcsXG4gICAgfTtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGdyZWV0aW5nUGFyZW5zID0gWyfinaQnLCAn8J+YmCcsICfwn6W6JywgJ/CfmIgnLCAn8J+YpScsICfwn5KPJ107XG5cbiAgICAvLyBBIGNvbWJpbmVkIGxpc3Qgb2YgYWxsIG11bHRpLWNoYXJhY3RlciBzeW1ib2xzIHRvIHByZXZlbnQgdGhlbSBmcm9tIGJlaW5nIHBhcnNlZCBhcyBpZGVudGlmaWVycy5cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBzcGVjaWFsU3ltYm9scyA9IFtcbiAgICAgICAgLi4uT2JqZWN0LmtleXMoTGV4ZXIuZW1vamlUb2tlbnMpLFxuICAgICAgICAuLi5MZXhlci5ncmVldGluZ1BhcmVucyxcbiAgICAgICAgJ/CfpJcnLFxuICAgICAgICAnICcsICdcXHInLCAnXFx0JywgJ1xcbicsICdcXDAnXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIG1haW4gbWV0aG9kIG9mIHRoZSBsZXhlci4gSXQgc2NhbnMgdGhlIHNvdXJjZSBjb2RlIGNoYXJhY3RlclxuICAgICAqIGJ5IGNoYXJhY3RlciBhbmQgZ2VuZXJhdGVzIGEgbGlzdCBvZiB0b2tlbnMuXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdG9rZW5zLlxuICAgICAqL1xuICAgIHNjYW5Ub2tlbnMoKTogVG9rZW5bXSB7XG4gICAgICAgIHdoaWxlICghdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBuZXh0IGxleGVtZS5cbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgICB0aGlzLnNjYW5Ub2tlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGEgZmluYWwgXCJlbmQgb2YgZmlsZVwiIHRva2VuIHRvIG1hcmsgdGhlIGVuZCBvZiB0aGUgY29kZS5cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IHR5cGU6IFRva2VuVHlwZS5FT0YsIGxleGVtZTogXCJcIiwgbGluZTogdGhpcy5saW5lIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHdlIGhhdmUgY29uc3VtZWQgYWxsIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBzb3VyY2UgY29kZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzQXRFbmQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPj0gdGhpcy5zb3VyY2UubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjYW5zIGEgc2luZ2xlIHRva2VuIGZyb20gdGhlIHNvdXJjZSBjb2RlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc2NhblRva2VuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNBdEVuZCgpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuY3VycmVudCk7XG5cbiAgICAgICAgLy8gUHJpb3JpdHkgMTogR3JlZXRpbmdzIChlLmcuLCDinaQuLi7inaQpXG4gICAgICAgIGZvciAoY29uc3QgcGFyZW4gb2YgTGV4ZXIuZ3JlZXRpbmdQYXJlbnMpIHtcbiAgICAgICAgICAgIGlmIChyZW1haW5pbmcuc3RhcnRzV2l0aChwYXJlbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyZWV0aW5nKHBhcmVuKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmlvcml0eSAyOiBTdHJpbmdzIChlLmcuLCDwn6SXLi4u8J+klylcbiAgICAgICAgaWYgKHJlbWFpbmluZy5zdGFydHNXaXRoKCfwn6SXJykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmlvcml0eSAzOiBNdWx0aS1jaGFyYWN0ZXIga2V5d29yZHMgKHNvcnRlZCBieSBsZW5ndGgsIGxvbmdlc3QgZmlyc3QpXG4gICAgICAgIC8vIFRoaXMgZW5zdXJlcyBcIuWkp+aWvOetieaWvFwiIGlzIG1hdGNoZWQgYmVmb3JlIFwi5aSn5pa8XCIsIFwi4p2M562J5pa8XCIgYmVmb3JlIFwi562J5pa8XCIsIGV0Yy5cbiAgICAgICAgY29uc3Qgc29ydGVkS2V5d29yZHMgPSBPYmplY3Qua2V5cyhMZXhlci5rZXl3b3Jkcykuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5d29yZCBvZiBzb3J0ZWRLZXl3b3Jkcykge1xuICAgICAgICAgICAgaWYgKHJlbWFpbmluZy5zdGFydHNXaXRoKGtleXdvcmQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ICs9IGtleXdvcmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oTGV4ZXIua2V5d29yZHNba2V5d29yZF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByaW9yaXR5IDQ6IFNpbmdsZSBlbW9qaSB0b2tlbnMgKGUuZy4sIPCfkYksIPCfkqYsIPCfpbAsIOKdjClcbiAgICAgICAgZm9yIChjb25zdCBsZXhlbWUgaW4gTGV4ZXIuZW1vamlUb2tlbnMpIHtcbiAgICAgICAgICAgIGlmIChyZW1haW5pbmcuc3RhcnRzV2l0aChsZXhlbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ICs9IGxleGVtZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihMZXhlci5lbW9qaVRva2Vuc1tsZXhlbWVdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIC8vIFByaW9yaXR5IDU6IE51bWJlcnNcbiAgICAgICAgaWYgKHRoaXMuaXNEaWdpdChjKSkge1xuICAgICAgICAgICAgdGhpcy5udW1iZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByaW9yaXR5IDY6IElkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICBpZiAodGhpcy5pc0FscGhhKGMpKSB7XG4gICAgICAgICAgICB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlJ3ZlIGdvdHRlbiB0aGlzIGZhciwgd2UgZG9uJ3Qga25vdyB3aGF0IHRoaXMgY2hhcmFjdGVyIGlzLlxuICAgICAgICAvLyBJbiBhIHJlYWwgY29tcGlsZXIsIHdlJ2QgcmVwb3J0IGFuIGVycm9yLiBIZXJlLCB3ZSdsbCBqdXN0IGNvbnN1bWVcbiAgICAgICAgLy8gaXQgdG8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wLlxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNraXBXaGl0ZXNwYWNlKCk6IHZvaWQge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdW1lcyB0aGUgY3VycmVudCBjaGFyYWN0ZXIgaW4gdGhlIHNvdXJjZSBhbmQgcmV0dXJucyBpdC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFkdmFuY2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQrKyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgbGV4ZW1lLlxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSB0b2tlbi5cbiAgICAgKiBAcGFyYW0gbGl0ZXJhbCBUaGUgbGl0ZXJhbCB2YWx1ZSBvZiB0aGUgdG9rZW4gKG9wdGlvbmFsKS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFRva2VuKHR5cGU6IFRva2VuVHlwZSwgbGl0ZXJhbD86IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuY3VycmVudCk7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyB0eXBlLCBsZXhlbWU6IHRleHQsIGxpdGVyYWwsIGxpbmU6IHRoaXMubGluZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIG1hdGNoZXMgdGhlIGV4cGVjdGVkIGNoYXJhY3Rlci4gSWYgaXQgZG9lcyxcbiAgICAgKiBpdCBjb25zdW1lcyB0aGUgY2hhcmFjdGVyIGFuZCByZXR1cm5zIHRydWUuIE90aGVyd2lzZSwgaXQgcmV0dXJucyBmYWxzZS5cbiAgICAgKiBAcGFyYW0gZXhwZWN0ZWQgVGhlIGNoYXJhY3RlciB0byBtYXRjaC5cbiAgICAgKi9cbiAgICBwcml2YXRlIG1hdGNoKGV4cGVjdGVkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdEVuZCgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KSAhPT0gZXhwZWN0ZWQpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9va3MgYXQgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIHdpdGhvdXQgY29uc3VtaW5nIGl0LlxuICAgICAqL1xuICAgIHByaXZhdGUgcGVlaygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5pc0F0RW5kKCkpIHJldHVybiAnXFwwJztcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ3JlZXRpbmcocGFyZW46IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvLyBDb25zdW1lIHRoZSBvcGVuaW5nIHBhcmVuXG4gICAgICAgIHRoaXMuY3VycmVudCArPSBwYXJlbi5sZW5ndGg7XG5cbiAgICAgICAgLy8gTG9vayBmb3IgYW55IGdyZWV0aW5nIHBhcmVuIGFzIHRoZSBjbG9zaW5nIGRlbGltaXRlclxuICAgICAgICB3aGlsZSAoIXRoaXMuaXNBdEVuZCgpKSB7XG4gICAgICAgICAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgIGxldCBmb3VuZENsb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChjb25zdCBjbG9zaW5nUGFyZW4gb2YgTGV4ZXIuZ3JlZXRpbmdQYXJlbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nLnN0YXJ0c1dpdGgoY2xvc2luZ1BhcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZENsb3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdmFsdWUgYmV0d2VlbiB0aGUgcGFyZW5zXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgKyBwYXJlbi5sZW5ndGgsIHRoaXMuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBDb25zdW1lIHRoZSBjbG9zaW5nIHBhcmVuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCArPSBjbG9zaW5nUGFyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuR3JlZXQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFmb3VuZENsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB0aGlzLmxpbmUrKztcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVudGVybWluYXRlZCBncmVldGluZyAtIHJlYWNoZWQgZW5kIG9mIGZpbGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2FucyBhIHN0cmluZyBsaXRlcmFsLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RyaW5nKCk6IHZvaWQge1xuICAgICAgICAvLyBDb25zdW1lIHRoZSBvcGVuaW5nICfwn6SXJ1xuICAgICAgICB0aGlzLmN1cnJlbnQgKz0gJ/CfpJcnLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuaXNBdEVuZCgpICYmICF0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5jdXJyZW50KS5zdGFydHNXaXRoKCfwn6SXJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJ1xcbicpIHRoaXMubGluZSsrO1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIC8vIFVudGVybWluYXRlZCBzdHJpbmcuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgY2xvc2luZyAn8J+klycuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgKyAn8J+klycubGVuZ3RoLCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ29uc3VtZSB0aGUgY2xvc2luZyAn8J+klydcbiAgICAgICAgdGhpcy5jdXJyZW50ICs9ICfwn6SXJy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5TdHJpbmcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYSBjaGFyYWN0ZXIgaXMgYSBkaWdpdC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzRGlnaXQoYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjID49ICcwJyAmJiBjIDw9ICc5JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2FucyBhIG51bWJlciBsaXRlcmFsLlxuICAgICAqL1xuICAgIHByaXZhdGUgbnVtYmVyKCk6IHZvaWQge1xuICAgICAgICB3aGlsZSAodGhpcy5pc0RpZ2l0KHRoaXMucGVlaygpKSkgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICAgICAgLy8gTG9vayBmb3IgYSBmcmFjdGlvbmFsIHBhcnQuXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJy4nICYmIHRoaXMuaXNEaWdpdCh0aGlzLnBlZWtOZXh0KCkpKSB7XG4gICAgICAgICAgICAvLyBDb25zdW1lIHRoZSBcIi5cIlxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLk51bWJlciwgcGFyc2VGbG9hdCh0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb2tzIGF0IHRoZSBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIGN1cnJlbnQgb25lIHdpdGhvdXQgY29uc3VtaW5nIGl0LlxuICAgICAqL1xuICAgIHByaXZhdGUgcGVla05leHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCArIDEgPj0gdGhpcy5zb3VyY2UubGVuZ3RoKSByZXR1cm4gJ1xcMCc7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50ICsgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2NhbnMgYW4gaWRlbnRpZmllciBvciBhIGtleXdvcmQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyKCk6IHZvaWQge1xuICAgICAgICB3aGlsZSAodGhpcy5pc0FscGhhTnVtZXJpYyh0aGlzLnBlZWsoKSkpIHRoaXMuYWR2YW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgbGV0IHR5cGUgPSBMZXhlci5rZXl3b3Jkc1t0ZXh0XTtcbiAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkgdHlwZSA9IFRva2VuVHlwZS5JZGVudGlmaWVyO1xuICAgICAgICB0aGlzLmFkZFRva2VuKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIGNoYXJhY3RlciBpcyBhIHZhbGlkIHN0YXJ0IGZvciBhbiBpZGVudGlmaWVyLlxuICAgICAqIEluIFwiVW5jbGUgTGFuZ1wiLCB0aGlzIGlzIGFueSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgYSBkaWdpdCBhbmQgbm90XG4gICAgICogYSBzcGVjaWFsIHN5bWJvbCB1c2VkIGZvciBvdGhlciB0b2tlbnMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0FscGhhKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSBcIvCfkYnwn5GI8J+RhvCfkYfwn6Sc8J+km/CfjJ/wn6Ww4p2M8J+kl+KdpPCfmJjwn6W68J+YiPCfmKXwn5KP8J+SpiBcXHJcXHRcXG5cIjtcbiAgICAgICAgcmV0dXJuIGMgIT09ICdcXDAnICYmICF0aGlzLmlzRGlnaXQoYykgJiYgIXNwZWNpYWxDaGFycy5pbmNsdWRlcyhjKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYSBjaGFyYWN0ZXIgY2FuIGJlIHBhcnQgb2YgYW4gaWRlbnRpZmllci5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzQWxwaGFOdW1lcmljKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FscGhhKGMpIHx8IHRoaXMuaXNEaWdpdChjKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgRXJyb3JNZXNzYWdlcyA9IHtcbiAgICBFWFBFQ1RfR1JFRVRJTkdfQVRfU1RBUlQ6IFwiRXhwZWN0IGdyZWV0aW5nICfwn5iYLi4u8J+YmCcgYXQgdGhlIHN0YXJ0IG9mIHRoZSBzdGF0ZW1lbnQuXCIsXG4gICAgR1JFRVRJTkdfTVVTVF9DT05UQUlOX1VOQ0xFOiBcIkdyZWV0aW5nIG11c3QgY29udGFpbiAn5aSn5Y+UJyB0byBiZSB2YWxpZC5cIixcbiAgICBFWFBFQ1RfVkFSSUFCTEVfTkFNRTogXCJFeHBlY3QgdmFyaWFibGUgbmFtZS5cIixcbiAgICBFWFBFQ1RfU0VNSUNPTE9OX0FGVEVSX1ZBUjogXCJFeHBlY3QgJ/CfkqYnIGFmdGVyIHZhcmlhYmxlIGRlY2xhcmF0aW9uLlwiLFxuICAgIE1JU1NJTkdfR1JFRVRJTkc6IFwiVGhpcyBzdGF0ZW1lbnQgcmVxdWlyZXMgYSBncmVldGluZyAn8J+YmC4uLvCfmJgnIGF0IHRoZSBiZWdpbm5pbmcuXCIsXG4gICAgRVhQRUNUX0xFRlRfUEFSRU5fQUZURVJfSUY6IFwiRXhwZWN0ICfwn5GJJyBhZnRlciAn5aaC5p6cJy5cIixcbiAgICBFWFBFQ1RfUklHSFRfUEFSRU5fQUZURVJfQ09ORElUSU9OOiBcIkV4cGVjdCAnKScgYWZ0ZXIgaWYgY29uZGl0aW9uLlwiLFxuICAgIEVYUEVDVF9HUkVFVElOR19CRUZPUkVfRUxTRV9JRjogXCJFeHBlY3QgZ3JlZXRpbmcgYmVmb3JlICfkuZ/lj6/og70nLlwiLFxuICAgIEVYUEVDVF9JRl9BRlRFUl9FTFNFX0lGOiBcIkV4cGVjdCAn5aaC5p6cJyBhZnRlciAn5Lmf5Y+v6IO9Jy5cIixcbiAgICBFWFBFQ1RfR1JFRVRJTkdfQkVGT1JFX0VMU0U6IFwiRXhwZWN0IGdyZWV0aW5nIGJlZm9yZSAn5LiN54S25bCxJy5cIixcbiAgICBFWFBFQ1RfU0VNSUNPTE9OX0FGVEVSX1ZBTFVFOiBcIkV4cGVjdCAn8J+SpicgYWZ0ZXIgdmFsdWUuXCIsXG4gICAgRVhQRUNUX1NFTUlDT0xPTl9BRlRFUl9BU1NJR05NRU5UOiBcIkV4cGVjdCAn8J+SpicgYWZ0ZXIgYXNzaWdubWVudC5cIixcbiAgICBJTlZBTElEX0FTU0lHTk1FTlRfU1RBVEVNRU5UOiBcIkludmFsaWQgYXNzaWdubWVudCBzdGF0ZW1lbnQuXCIsXG4gICAgRVhQRUNUX1JJR0hUX0JSQUNFX0FGVEVSX0JMT0NLOiBcIkV4cGVjdCAn8J+RhycgYWZ0ZXIgYmxvY2suXCIsXG4gICAgRVhQRUNUX1NFTUlDT0xPTl9BRlRFUl9FWFBSRVNTSU9OOiBcIkV4cGVjdCAn8J+SpicgYWZ0ZXIgZXhwcmVzc2lvbi5cIixcbiAgICBJTlZBTElEX0FTU0lHTk1FTlRfVEFSR0VUOiBcIkludmFsaWQgYXNzaWdubWVudCB0YXJnZXQuXCIsXG4gICAgTUFYX0FSR1VNRU5UU19FWENFRURFRDogXCJDYW4ndCBoYXZlIG1vcmUgdGhhbiAyNTUgYXJndW1lbnRzLlwiLFxuICAgIEVYUEVDVF9SSUdIVF9QQVJFTl9BRlRFUl9BUkdVTUVOVFM6IFwiRXhwZWN0ICfwn5GIJyBhZnRlciBhcmd1bWVudHMuXCIsXG4gICAgRVhQRUNUX1JJR0hUX0JSQUNLRVRfQUZURVJfSU5ERVg6IFwiRXhwZWN0ICfwn6SbJyBhZnRlciBpbmRleC5cIixcbiAgICBFWFBFQ1RfRVhQUkVTU0lPTjogXCJFeHBlY3QgZXhwcmVzc2lvbi5cIixcbiAgICBFWFBFQ1RfUklHSFRfUEFSRU5fQUZURVJfRVhQUkVTU0lPTjogXCJFeHBlY3QgJyknIGFmdGVyIGV4cHJlc3Npb24uXCIsXG4gICAgRVhQRUNUX1JJR0hUX0JSQUNLRVRfQUZURVJfVkVDVE9SOiBcIkV4cGVjdCAn8J+kmycgYWZ0ZXIgdmVjdG9yIHZhbHVlcy5cIixcbn07XG4iLCJpbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSBcIi4vbGV4ZXJcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZXMgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHtcbiAgICBFeHByLFxuICAgIFN0bXQsXG4gICAgQmluYXJ5LFxuICAgIEdyb3VwaW5nLFxuICAgIExpdGVyYWwsXG4gICAgVW5hcnksXG4gICAgVmFyaWFibGUsXG4gICAgQXNzaWduLFxuICAgIExvZ2ljYWwsXG4gICAgQ2FsbCxcbiAgICBWZWN0b3JMaXRlcmFsLFxuICAgIEluZGV4QWNjZXNzLFxuICAgIEV4cHJlc3Npb24sXG4gICAgUHJpbnQsXG4gICAgQmxvY2ssXG4gICAgSWYsXG4gICAgVmFyXG59IGZyb20gXCIuL2FzdFwiO1xuXG4vKipcbiAqIEEgc2ltcGxlIGVycm9yIGNsYXNzIGZvciBwYXJzaW5nIGVycm9ycy5cbiAqL1xuY2xhc3MgUGFyc2VFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbi8qKlxuICogVGhlIFBhcnNlciBpcyByZXNwb25zaWJsZSBmb3IgdGFraW5nIGEgc2VxdWVuY2Ugb2YgdG9rZW5zIGZyb20gdGhlIGxleGVyIGFuZFxuICogYnVpbGRpbmcgYW4gQWJzdHJhY3QgU3ludGF4IFRyZWUgKEFTVCkuIFRoZSBBU1QgaXMgYSB0cmVlIHN0cnVjdHVyZSB0aGF0XG4gKiByZXByZXNlbnRzIHRoZSBncmFtbWF0aWNhbCBzdHJ1Y3R1cmUgb2YgdGhlIGNvZGUuIFRoaXMgcGFyc2VyIHVzZXMgYVxuICogcmVjdXJzaXZlIGRlc2NlbnQgc3RyYXRlZ3ksIHdoZXJlIGVhY2ggbWV0aG9kIGNvcnJlc3BvbmRzIHRvIGEgcnVsZSBpbiB0aGVcbiAqIGxhbmd1YWdlJ3MgZ3JhbW1hci5cbiAqL1xuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gICAgcHJpdmF0ZSB0b2tlbnM6IFRva2VuW107XG4gICAgcHJpdmF0ZSBjdXJyZW50ID0gMDtcbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgcGFyc2VyLiBJdCBwYXJzZXMgYSBzZXF1ZW5jZSBvZiBzdGF0ZW1lbnRzXG4gICAgICogdW50aWwgaXQgcmVhY2hlcyB0aGUgZW5kIG9mIHRoZSB0b2tlbiBzdHJlYW0uXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2Ygc3RhdGVtZW50cy5cbiAgICAgKi9cbiAgICBwYXJzZSgpOiBTdG10W10ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRzOiBTdG10W10gPSBbXTtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoc3RtdCkge1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaChzdG10KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBkZWNsYXJhdGlvbiBvciBhIHN0YXRlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRlbWVudCgpOiBTdG10IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKFRva2VuVHlwZS5HcmVldCkpIHtcbiAgICAgICAgICAgICAgICAvLyBTdGF0ZW1lbnRzIHRoYXQgTVVTVCBzdGFydCB3aXRoIGEgZ3JlZXRpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBncmVldFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5HcmVldCwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfR1JFRVRJTkdfQVRfU1RBUlQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIHRoYXQgdGhlIGdyZWV0aW5nIGNvbnRhaW5zICflpKflj5QnXG4gICAgICAgICAgICAgICAgaWYgKCFncmVldFRva2VuLmxpdGVyYWwgfHwgIWdyZWV0VG9rZW4ubGl0ZXJhbC5pbmNsdWRlcygn5aSn5Y+UJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5lcnJvcihncmVldFRva2VuLCBFcnJvck1lc3NhZ2VzLkdSRUVUSU5HX01VU1RfQ09OVEFJTl9VTkNMRSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlZhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyRGVjbGFyYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLklmKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZlN0YXRlbWVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUHJpbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW50U3RhdGVtZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGl0J3Mgbm90IGFueSBvZiB0aGUgYWJvdmUsIGl0IG11c3QgYmUgYW4gYXNzaWdubWVudCBzdGF0ZW1lbnQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFN0YXRlbWVudHMgdGhhdCBETyBOT1Qgc3RhcnQgd2l0aCBhIGdyZWV0aW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5ncmVldGVkU3RhdGVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNocm9uaXplKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIHZhcmlhYmxlIGRlY2xhcmF0aW9uLiBBc3N1bWVzICdHcmVldCcgYW5kICdWYXInIHRva2VucyBoYXZlIGJlZW4gY29uc3VtZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZSB2YXJEZWNsYXJhdGlvbigpOiBTdG10IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfVkFSSUFCTEVfTkFNRSk7XG5cbiAgICAgICAgbGV0IGluaXRpYWxpemVyOiBFeHByIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FcXVhbCkpIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfU0VNSUNPTE9OX0FGVEVSX1ZBUik7XG4gICAgICAgIHJldHVybiBuZXcgVmFyKG5hbWUsIGluaXRpYWxpemVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgc3RhdGVtZW50cyB0aGF0IGRvIG5vdCByZXF1aXJlIGEgZ3JlZXRpbmcuXG4gICAgICovXG4gICAgcHJpdmF0ZSB1bmdyZWV0ZWRTdGF0ZW1lbnQoKTogU3RtdCB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrKFRva2VuVHlwZS5WYXIpIHx8IHRoaXMuY2hlY2soVG9rZW5UeXBlLklmKSB8fCB0aGlzLmNoZWNrKFRva2VuVHlwZS5QcmludCkpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZXJyb3IodGhpcy5wZWVrKCksIEVycm9yTWVzc2FnZXMuTUlTU0lOR19HUkVFVElORyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGxvb2tzIGxpa2UgYW4gYXNzaWdubWVudCAoaWRlbnRpZmllciBmb2xsb3dlZCBieSDmmK8pXG4gICAgICAgIGlmICh0aGlzLmNoZWNrKFRva2VuVHlwZS5JZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgLy8gTG9vayBhaGVhZCB0byBzZWUgaWYgdGhpcyBpcyBhbiBhc3NpZ25tZW50XG4gICAgICAgICAgICBjb25zdCBzYXZlZEN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTsgLy8gY29uc3VtZSBpZGVudGlmaWVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbmRleCBhY2Nlc3MgcGF0dGVybnM6IGlkZW50aWZpZXLwn6ScLi4u8J+km1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFja2V0KSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGluZGV4IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICBsZXQgYnJhY2tldERlcHRoID0gMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYnJhY2tldERlcHRoID4gMCAmJiAhdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLkxlZnRCcmFja2V0KSkgYnJhY2tldERlcHRoKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNrZXQpKSBicmFja2V0RGVwdGgtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBpc0Fzc2lnbm1lbnQgPSB0aGlzLmNoZWNrKFRva2VuVHlwZS5FcXVhbCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBzYXZlZEN1cnJlbnQ7IC8vIHJlc3RvcmUgcG9zaXRpb25cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGlzQXNzaWdubWVudCkge1xuICAgICAgICAgICAgICAgIHRocm93IHRoaXMuZXJyb3IodGhpcy5wZWVrKCksIEVycm9yTWVzc2FnZXMuTUlTU0lOR19HUkVFVElORyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCbG9jayh0aGlzLmJsb2NrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhbiBpZiBzdGF0ZW1lbnQuIEFzc3VtZXMgJ0dyZWV0JyBhbmQgJ0lmJyB0b2tlbnMgaGF2ZSBiZWVuIGNvbnN1bWVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgaWZTdGF0ZW1lbnQoKTogU3RtdCB7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9MRUZUX1BBUkVOX0FGVEVSX0lGKTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfUklHSFRfUEFSRU5fQUZURVJfQ09ORElUSU9OKTtcblxuICAgICAgICBjb25zdCB0aGVuQnJhbmNoID0gdGhpcy5zdGF0ZW1lbnQoKTsgLy8gQSBibG9jayBjYW4gY29udGFpbiBhbnkgZGVjbGFyYXRpb25cbiAgICAgICAgXG4gICAgICAgIGxldCBlbHNlQnJhbmNoOiBTdG10IHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FbHNlSWYpKSB7XG4gICAgICAgICAgICBlbHNlQnJhbmNoID0gdGhpcy5pZlN0YXRlbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVsc2UpKSB7XG4gICAgICAgICAgICBlbHNlQnJhbmNoID0gdGhpcy5zdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgSWYoY29uZGl0aW9uLCB0aGVuQnJhbmNoLCBlbHNlQnJhbmNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBwcmludCBzdGF0ZW1lbnQuIEFzc3VtZXMgJ0dyZWV0JyBhbmQgJ1ByaW50JyB0b2tlbnMgaGF2ZSBiZWVuIGNvbnN1bWVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgcHJpbnRTdGF0ZW1lbnQoKTogU3RtdCB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9TRU1JQ09MT05fQUZURVJfVkFMVUUpO1xuICAgICAgICByZXR1cm4gbmV3IFByaW50KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYW4gYXNzaWdubWVudCBzdGF0ZW1lbnQuIEFzc3VtZXMgJ0dyZWV0JyB0b2tlbiBoYXMgYmVlbiBjb25zdW1lZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzc2lnbm1lbnRTdGF0ZW1lbnQoKTogU3RtdCB7XG4gICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgLy8gQWZ0ZXIgYW4gZXhwcmVzc2lvbiwgd2UgZXhwZWN0IGEgc2VtaWNvbG9uIGZvciBhbiBleHByZXNzaW9uIHN0YXRlbWVudCxcbiAgICAgICAgLy8gYnV0IGFuIGFzc2lnbm1lbnQgaXMgbm90IGFuIGV4cHJlc3Npb24gc3RhdGVtZW50IGluIHRoaXMgY29udGV4dC5cbiAgICAgICAgLy8gVGhlICdhc3NpZ25tZW50JyBleHByZXNzaW9uIHBhcnNpbmcgaGFuZGxlcyB0aGUgJz0nLlxuICAgICAgICBpZiAoZXhwciBpbnN0YW5jZW9mIEFzc2lnbikge1xuICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9TRU1JQ09MT05fQUZURVJfQVNTSUdOTUVOVCk7XG4gICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByZXNzaW9uKGV4cHIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVycm9yKHRoaXMucGVlaygpLCBFcnJvck1lc3NhZ2VzLklOVkFMSURfQVNTSUdOTUVOVF9TVEFURU1FTlQpO1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gU2hvdWxkIGJlIHVucmVhY2hhYmxlIGR1ZSB0byBlcnJvclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGJsb2NrIG9mIHN0YXRlbWVudHMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBibG9jaygpOiBTdG10W10ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRzOiBTdG10W10gPSBbXTtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0QnJhY2UpICYmICF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgc3RhdGVtZW50cy5wdXNoKHRoaXMuc3RhdGVtZW50KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNlLCBFcnJvck1lc3NhZ2VzLkVYUEVDVF9SSUdIVF9CUkFDRV9BRlRFUl9CTE9DSyk7XG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhbiBleHByZXNzaW9uIHN0YXRlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGV4cHJlc3Npb25TdGF0ZW1lbnQoKTogU3RtdCB7XG4gICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIEVycm9yTWVzc2FnZXMuRVhQRUNUX1NFTUlDT0xPTl9BRlRFUl9FWFBSRVNTSU9OKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByZXNzaW9uKGV4cHIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgbWV0aG9kcyBwYXJzZSBleHByZXNzaW9ucywgZm9sbG93aW5nIHRoZSBvcmRlciBvZiBwcmVjZWRlbmNlLlxuICAgICAqL1xuXG4gICAgcHVibGljIGV4cHJlc3Npb24oKTogRXhwciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzc2lnbm1lbnQoKTogRXhwciB7XG4gICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLm9yKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVxdWFsKSkge1xuICAgICAgICAgICAgY29uc3QgZXF1YWxzID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTsgLy8gQ2hhbmdlZCBmcm9tIHRoaXMuYXNzaWdubWVudCgpXG5cbiAgICAgICAgICAgIGlmIChleHByIGluc3RhbmNlb2YgVmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZXhwci5uYW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXNzaWduKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwciBpbnN0YW5jZW9mIEluZGV4QWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBtb3JlIGNvbXBsZXgsIGZvciBub3cgd2Uga2VlcCBpdCBzaW1wbGVcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVxdWFscywgRXJyb3JNZXNzYWdlcy5JTlZBTElEX0FTU0lHTk1FTlRfVEFSR0VUKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5lcnJvcihlcXVhbHMsIEVycm9yTWVzc2FnZXMuSU5WQUxJRF9BU1NJR05NRU5UX1RBUkdFVCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9yKCk6IEV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuYW5kKCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk9yKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuYW5kKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IExvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgYW5kKCk6IEV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQW5kKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgTG9naWNhbChleHByLCBvcGVyYXRvciwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcXVhbGl0eSgpOiBFeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmNvbXBhcmlzb24oKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQmFuZ0VxdWFsLCBUb2tlblR5cGUuRXF1YWxFcXVhbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmNvbXBhcmlzb24oKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXBhcmlzb24oKTogRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy50ZXJtKCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkdyZWF0ZXIsIFRva2VuVHlwZS5HcmVhdGVyRXF1YWwsIFRva2VuVHlwZS5MZXNzLCBUb2tlblR5cGUuTGVzc0VxdWFsKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMudGVybSgpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBCaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgdGVybSgpOiBFeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmZhY3RvcigpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51cywgVG9rZW5UeXBlLlBsdXMpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5mYWN0b3IoKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZhY3RvcigpOiBFeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLnVuYXJ5KCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNsYXNoLCBUb2tlblR5cGUuQXN0ZXJpc2ssIFRva2VuVHlwZS5QZXJjZW50KSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMudW5hcnkoKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVuYXJ5KCk6IEV4cHIge1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQmFuZywgVG9rZW5UeXBlLk1pbnVzKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMudW5hcnkoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnkob3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGwoKTogRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy5wcmltYXJ5KCk7XG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0UGFyZW4pKSB7XG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMuZmluaXNoQ2FsbChleHByKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNrZXQpKSB7XG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMuZmluaXNoSW5kZXhBY2Nlc3MoZXhwcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluaXNoQ2FsbChjYWxsZWU6IEV4cHIpOiBFeHByIHtcbiAgICAgICAgY29uc3QgYXJnczogRXhwcltdID0gW107XG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRQYXJlbikpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPj0gMjU1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IodGhpcy5wZWVrKCksIEVycm9yTWVzc2FnZXMuTUFYX0FSR1VNRU5UU19FWENFRURFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIEVycm9yTWVzc2FnZXMuRVhQRUNUX1JJR0hUX1BBUkVOX0FGVEVSX0FSR1VNRU5UUyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYWxsKGNhbGxlZSwgcGFyZW4sIGFyZ3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluaXNoSW5kZXhBY2Nlc3MoY2FsbGVlOiBFeHByKTogRXhwciB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIGNvbnN0IGJyYWNrZXQgPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfUklHSFRfQlJBQ0tFVF9BRlRFUl9JTkRFWCk7XG4gICAgICAgIHJldHVybiBuZXcgSW5kZXhBY2Nlc3MoY2FsbGVlLCBicmFja2V0LCBpbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBoaWdoZXN0LXByZWNlZGVuY2UgZXhwcmVzc2lvbnMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwcmltYXJ5KCk6IEV4cHIge1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRmFsc2UpKSByZXR1cm4gbmV3IExpdGVyYWwoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVHJ1ZSkpIHJldHVybiBuZXcgTGl0ZXJhbCh0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk51bWJlciwgVG9rZW5UeXBlLlN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGl0ZXJhbCh0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmFyaWFibGUodGhpcy5wcmV2aW91cygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0UGFyZW4pKSB7XG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIEVycm9yTWVzc2FnZXMuRVhQRUNUX1JJR0hUX1BBUkVOX0FGVEVSX0VYUFJFU1NJT04pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91cGluZyhleHByKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZlY3RvckxpdGVyYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IHRoaXMuZXJyb3IodGhpcy5wZWVrKCksIEVycm9yTWVzc2FnZXMuRVhQRUNUX0VYUFJFU1NJT04pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmVjdG9yTGl0ZXJhbCgpOiBFeHByIHtcbiAgICAgICAgY29uc3QgdmFsdWVzOiBFeHByW10gPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNrZXQpKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCwgRXJyb3JNZXNzYWdlcy5FWFBFQ1RfUklHSFRfQlJBQ0tFVF9BRlRFUl9WRUNUT1IpO1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvckxpdGVyYWwodmFsdWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9rZW4gaXMgb25lIG9mIHRoZSBnaXZlbiB0eXBlcy4gSWYgc28sIGl0IGNvbnN1bWVzXG4gICAgICogdGhlIHRva2VuIGFuZCByZXR1cm5zIHRydWUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBtYXRjaCguLi50eXBlczogVG9rZW5UeXBlW10pOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9rZW4gaXMgb2YgdGhlIGdpdmVuIHR5cGUuIElmIG5vdCwgaXQgdGhyb3dzIGFuIGVycm9yLlxuICAgICAqL1xuICAgIHByaXZhdGUgY29uc3VtZSh0eXBlOiBUb2tlblR5cGUsIG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHJldHVybiB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgdGhyb3cgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHRva2VuIGlzIG9mIHRoZSBnaXZlbiB0eXBlIHdpdGhvdXQgY29uc3VtaW5nIGl0LlxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2sodHlwZTogVG9rZW5UeXBlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmlzQXRFbmQoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5wZWVrKCkudHlwZSA9PT0gdHlwZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdW1lcyB0aGUgY3VycmVudCB0b2tlbiBhbmQgcmV0dXJucyBpdC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFkdmFuY2UoKTogVG9rZW4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNBdEVuZCgpKSB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIGF0IHRoZSBlbmQgb2YgdGhlIHRva2VuIHN0cmVhbS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzQXRFbmQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuRU9GO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdG9rZW4gd2l0aG91dCBjb25zdW1pbmcgaXQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwZWVrKCk6IFRva2VuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuY3VycmVudF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJldmlvdXMgdG9rZW4uXG4gICAgICovXG4gICAgcHJpdmF0ZSBwcmV2aW91cygpOiBUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnQgLSAxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBvcnRzIGEgcGFyc2luZyBlcnJvci5cbiAgICAgKi9cbiAgICBwcml2YXRlIGVycm9yKHRva2VuOiBUb2tlbiwgbWVzc2FnZTogc3RyaW5nKTogUGFyc2VFcnJvciB7XG4gICAgICAgIC8vIEluIGEgcmVhbCBjb21waWxlciwgeW91IHdvdWxkIGhhdmUgYSBtb3JlIHNvcGhpc3RpY2F0ZWQgZXJyb3IgcmVwb3J0aW5nIHN5c3RlbS5cbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYEVycm9yIGF0IGxpbmUgJHt0b2tlbi5saW5lfTogJHttZXNzYWdlfWA7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gbmV3IFBhcnNlRXJyb3IoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHJlY292ZXIgZnJvbSBhIHBhcnNlIGVycm9yLiBJdCBkaXNjYXJkcyB0b2tlbnMgdW50aWxcbiAgICAgKiBpdCBmaW5kcyBhIHN0YXRlbWVudCBib3VuZGFyeSwgd2hpY2ggYWxsb3dzIHRoZSBwYXJzZXIgdG8gY29udGludWUgcGFyc2luZ1xuICAgICAqIHRoZSByZXN0IG9mIHRoZSBmaWxlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3luY2hyb25pemUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzKCkudHlwZSA9PT0gVG9rZW5UeXBlLlNlbWljb2xvbikgcmV0dXJuO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGVlaygpLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5WYXI6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuSWY6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUHJpbnQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgTGV4ZXIgfSBmcm9tIFwiLi9pbnRlcnByZXRlci9sZXhlclwiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvcGFyc2VyXCI7XG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyXCI7XG5cbmNvbnN0IG1lc3NhZ2VEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlLWRpc3BsYXlcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IHNlbmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbmQtYnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG5mdW5jdGlvbiBhcHBlbmRNZXNzYWdlKHRleHQ6IHN0cmluZywgc2VuZGVyOiAndXNlcicgfCAnYm90Jykge1xuICAgIGNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZXNzYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiLCBgJHtzZW5kZXJ9LW1lc3NhZ2VgKTtcbiAgICBtZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQpO1xuICAgIG1lc3NhZ2VEaXNwbGF5LnNjcm9sbFRvcCA9IG1lc3NhZ2VEaXNwbGF5LnNjcm9sbEhlaWdodDtcbn1cblxuZnVuY3Rpb24gcnVuKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgY29uc3QgaW50ZXJwcmV0ZXIgPSBuZXcgSW50ZXJwcmV0ZXIoKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICBhcHBlbmRNZXNzYWdlKG1lc3NhZ2UsICdib3QnKTtcbiAgICB9KTtcbiAgICBjb25zdCBsZXhlciA9IG5ldyBMZXhlcihzb3VyY2UpO1xuICAgIGNvbnN0IHRva2VucyA9IGxleGVyLnNjYW5Ub2tlbnMoKTtcbiAgICBjb25zb2xlLmxvZyh0b2tlbnMpO1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIodG9rZW5zKTtcbiAgICBjb25zdCBzdGF0ZW1lbnRzID0gcGFyc2VyLnBhcnNlKCk7XG5cbiAgICAvLyBTdG9wIGlmIHRoZXJlIHdhcyBhIHN5bnRheCBlcnJvci5cbiAgICBpZiAocGFyc2VyLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBhcnNlci5lcnJvcnMuZm9yRWFjaChlcnJvciA9PiBhcHBlbmRNZXNzYWdlKGVycm9yLCAnYm90JykpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJBU1Q6XCIsIHN0YXRlbWVudHMpO1xuICAgIGludGVycHJldGVyLmludGVycHJldChzdGF0ZW1lbnRzKTtcbn1cblxuc2VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlSW5wdXQudmFsdWU7XG4gICAgaWYgKG1lc3NhZ2UudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgIGFwcGVuZE1lc3NhZ2UobWVzc2FnZSwgJ3VzZXInKTtcbiAgICAgICAgcnVuKG1lc3NhZ2UpO1xuICAgICAgICBtZXNzYWdlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbn0pO1xuXG5tZXNzYWdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgbmV3IGxpbmUgaW4gdGV4dGFyZWFcbiAgICAgICAgc2VuZEJ1dHRvbi5jbGljaygpO1xuICAgIH1cbn0pO1xuXG5cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=