/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/crysis.jpg */ \"./src/img/crysis.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-family: 'Play', sans-serif;\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  height: 100vh;\\n  color: #00ffdd;\\n}\\n\\n.title {\\n  font-size: 6rem;\\n  padding-left: 4rem;\\n  padding-top: 4rem;\\n  padding-bottom: 10rem;\\n}\\n\\n.main {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n\\n.scores {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 4rem;\\n  width: 70rem;\\n}\\n\\n.top {\\n  display: flex;\\n  gap: 4rem;\\n}\\n\\n.scores-title {\\n  font-size: 4rem;\\n  font-weight: 500;\\n}\\n\\n.btn {\\n  font-size: 2rem;\\n  margin-top: 1rem;\\n  margin-left: auto;\\n  padding: 0.2rem;\\n  border: solid 0.2rem;\\n  border-radius: 3px;\\n  padding: 1rem 2rem;\\n  cursor: pointer;\\n  color: inherit;\\n  background-color: #06473f8c;\\n  border: #00ffdda4 solid 0.2rem;\\n}\\n\\n.scores-box {\\n  height: 40rem;\\n  font-size: 2.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  border: #00ffdda4 solid 0.2rem;\\n  border-radius: 6px;\\n  overflow: hidden;\\n  overflow-y: scroll;\\n  background-color: rgb(0 255 219 / 15%);\\n  text-transform: uppercase;\\n}\\n\\n.add-form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n  padding-top: 5rem;\\n}\\n\\n.el {\\n  padding: 0.3rem;\\n  font-size: 2rem;\\n  border: #00ffdda4 solid 0.2rem;\\n  border-radius: 6px;\\n  padding: 1rem;\\n  background-color: #06473f8c;\\n}\\n\\n.el:focus {\\n  outline: none;\\n}\\n\\n.name[type='text'],\\nselect {\\n  color: #d4f3f5;\\n}\\n\\n.score[type='number'],\\nselect {\\n  color: #d4f3f5;\\n}\\n\\n.score::-webkit-outer-spin-button,\\n.score::-webkit-inner-spin-button {\\n  -webkit-appearance: none;\\n  margin: 0;\\n}\\n\\n::placeholder {\\n  color: #d4f3f5;\\n  opacity: 1;\\n}\\n\\n.add-btn {\\n  margin-left: auto;\\n}\\n\\n.candidate {\\n  padding: 1rem;\\n  list-style: none;\\n  display: flex;\\n  gap: 1rem;\\n  justify-content: space-between;\\n}\\n\\n.candidate:nth-child(odd) {\\n  background-color: #04242277;\\n}\\n\\n.warning {\\n  display: none;\\n  text-align: center;\\n  color: red;\\n  font-size: 2rem;\\n  font-weight: 400;\\n}\\n\\n.text-update {\\n  bottom: 0.1rem;\\n  width: 100%;\\n  height: 4rem;\\n  background-color: #00ffdd0e;\\n  overflow: hidden;\\n  position: fixed;\\n  color: red;\\n  text-transform: uppercase;\\n  letter-spacing: 1px;\\n  font-size: 2.5rem;\\n  font-weight: 500;\\n  display: flex;\\n  align-items: center;\\n  color: #fff;\\n}\\n\\n.text-update p {\\n  position: absolute;\\n  width: 150%;\\n  font-size: 2rem;\\n  text-align: left;\\n  transform: translateX(50%);\\n  animation: moving 15s linear infinite;\\n  color: #fff;\\n}\\n\\n@keyframes moving {\\n  0% {\\n    transform: translateX(50%);\\n  }\\n  100% {\\n    transform: translateX(-50%);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayList.js":
/*!****************************!*\
  !*** ./src/displayList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addCandidates = (data) => {\n  data.result.forEach((player) => {\n    const scores = document.querySelector('.scores-box');\n    const li = document.createElement('li');\n    li.className = 'candidate';\n    const name = document.createElement('p');\n    const score = document.createElement('p');\n    li.appendChild(name);\n    li.appendChild(score);\n    scores.appendChild(li);\n    name.innerText = player.user;\n    score.innerText = player.score;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCandidates);\n\n\n//# sourceURL=webpack://webpack-demo/./src/displayList.js?");

/***/ }),

/***/ "./src/getResult.js":
/*!**************************!*\
  !*** ./src/getResult.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayList */ \"./src/displayList.js\");\n\n\nconst getFromAPI = () => {\n  const getFetch = async () => {\n    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9I998jQkwVXa66yLA2rE/scores');\n    if (!response) {\n      throw new Error(`404! error: ${response.status}`);\n    }\n    const data = await response.json();\n    function sortCandidates(a, b) {\n      if (a.score > b.score) {\n        return -1;\n      }\n      if (a.score < b.score) {\n        return 1;\n      }\n      return 0;\n    }\n\n    data.result.sort(sortCandidates);\n    return data;\n  };\n  getFetch().then((data) => {\n    (0,_displayList__WEBPACK_IMPORTED_MODULE_0__.default)(data);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFromAPI);\n\n\n//# sourceURL=webpack://webpack-demo/./src/getResult.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _sendResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendResult */ \"./src/sendResult.js\");\n/* harmony import */ var _getResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getResult */ \"./src/getResult.js\");\n/* harmony import */ var _vanilla_tilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vanilla-tilt */ \"./src/vanilla-tilt.js\");\n\n\n\n\n\nconst scores = document.querySelector('.scores-box');\nconst add = document.querySelector('.add');\nconst refresh = document.querySelector('.refresh');\n\nadd.addEventListener('click', () => {\n  const name = document.querySelector('.name').value;\n  const scores = document.querySelector('.score').value;\n  const x = document.querySelector('.warning');\n  if (name === '') {\n    x.style.display = 'block';\n  } else {\n    (0,_sendResult__WEBPACK_IMPORTED_MODULE_1__.default)(name, scores);\n    document.querySelector('.name').value = '';\n    document.querySelector('.score').value = '';\n    if (x.style.display !== 'none') {\n      x.style.display = 'none';\n    } else {\n      x.style.display = 'block';\n    }\n  }\n});\n\nrefresh.addEventListener('click', () => {\n  scores.innerHTML = '';\n  (0,_getResult__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\n\n_vanilla_tilt__WEBPACK_IMPORTED_MODULE_3__.default.init(document.querySelector('body'), {\n  max: 1.5,\n  speed: 10000,\n});\n\n_vanilla_tilt__WEBPACK_IMPORTED_MODULE_3__.default.init(document.querySelector('.title'), {\n  max: 1.5,\n  speed: 10000,\n});\n\nwindow.onload = (0,_getResult__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/sendResult.js":
/*!***************************!*\
  !*** ./src/sendResult.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst saveToAPI = async (nameInput, scoreInput) => {\n  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9I998jQkwVXa66yLA2rE/scores', {\n    method: 'POST',\n    body: JSON.stringify({\n      user: nameInput,\n      score: scoreInput,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  if (!response) {\n    throw new Error(`404! error: ${response.status}`);\n  }\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveToAPI);\n\n\n//# sourceURL=webpack://webpack-demo/./src/sendResult.js?");

/***/ }),

/***/ "./src/vanilla-tilt.js":
/*!*****************************!*\
  !*** ./src/vanilla-tilt.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable max-len */\n/* eslint-disable no-throw-literal */\n/* eslint-disable func-names */\nconst VanillaTilt = (function () {\n  /**\n   * Created by Sergiu Șandor (micku7zu) on 1/27/2017.\n   * Original idea: https://github.com/gijsroge/tilt.js\n   * MIT License.\n   * Version 1.7.2\n   */\n\n  class VanillaTilt {\n    constructor(element, settings = {}) {\n      if (!(element instanceof Node)) {\n        throw `Can't initialize VanillaTilt because ${element} is not a Node.`;\n      }\n\n      this.width = null;\n      this.height = null;\n      this.clientWidth = null;\n      this.clientHeight = null;\n      this.left = null;\n      this.top = null;\n\n      // for Gyroscope sampling\n      this.gammazero = null;\n      this.betazero = null;\n      this.lastgammazero = null;\n      this.lastbetazero = null;\n\n      this.transitionTimeout = null;\n      this.updateCall = null;\n      this.event = null;\n\n      this.updateBind = this.update.bind(this);\n      this.resetBind = this.reset.bind(this);\n\n      this.element = element;\n      this.settings = this.extendSettings(settings);\n\n      this.reverse = this.settings.reverse ? -1 : 1;\n      this.glare = VanillaTilt.isSettingTrue(this.settings.glare);\n      this.glarePrerender = VanillaTilt.isSettingTrue(this.settings['glare-prerender']);\n      this.fullPageListening = VanillaTilt.isSettingTrue(this.settings['full-page-listening']);\n      this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);\n      this.gyroscopeSamples = this.settings.gyroscopeSamples;\n\n      this.elementListener = this.getElementListener();\n\n      if (this.glare) {\n        this.prepareGlare();\n      }\n\n      if (this.fullPageListening) {\n        this.updateClientSize();\n      }\n\n      this.addEventListeners();\n      this.reset();\n      this.updateInitialPosition();\n    }\n\n    static isSettingTrue(setting) {\n      return setting === '' || setting === true || setting === 1;\n    }\n\n    /**\n     * Method returns element what will be listen mouse events\n     * @return {Node}\n     */\n    getElementListener() {\n      if (this.fullPageListening) {\n        return window.document;\n      }\n\n      if (typeof this.settings['mouse-event-element'] === 'string') {\n        const mouseEventElement = document.querySelector(this.settings['mouse-event-element']);\n\n        if (mouseEventElement) {\n          return mouseEventElement;\n        }\n      }\n\n      if (this.settings['mouse-event-element'] instanceof Node) {\n        return this.settings['mouse-event-element'];\n      }\n\n      return this.element;\n    }\n\n    /**\n     * Method set listen methods for this.elementListener\n     * @return {Node}\n     */\n    addEventListeners() {\n      this.onMouseEnterBind = this.onMouseEnter.bind(this);\n      this.onMouseMoveBind = this.onMouseMove.bind(this);\n      this.onMouseLeaveBind = this.onMouseLeave.bind(this);\n      this.onWindowResizeBind = this.onWindowResize.bind(this);\n      this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);\n\n      this.elementListener.addEventListener('mouseenter', this.onMouseEnterBind);\n      this.elementListener.addEventListener('mouseleave', this.onMouseLeaveBind);\n      this.elementListener.addEventListener('mousemove', this.onMouseMoveBind);\n\n      if (this.glare || this.fullPageListening) {\n        window.addEventListener('resize', this.onWindowResizeBind);\n      }\n\n      if (this.gyroscope) {\n        window.addEventListener('deviceorientation', this.onDeviceOrientationBind);\n      }\n    }\n\n    /**\n     * Method remove event listeners from current this.elementListener\n     */\n    removeEventListeners() {\n      this.elementListener.removeEventListener('mouseenter', this.onMouseEnterBind);\n      this.elementListener.removeEventListener('mouseleave', this.onMouseLeaveBind);\n      this.elementListener.removeEventListener('mousemove', this.onMouseMoveBind);\n\n      if (this.gyroscope) {\n        window.removeEventListener('deviceorientation', this.onDeviceOrientationBind);\n      }\n\n      if (this.glare || this.fullPageListening) {\n        window.removeEventListener('resize', this.onWindowResizeBind);\n      }\n    }\n\n    destroy() {\n      clearTimeout(this.transitionTimeout);\n      if (this.updateCall !== null) {\n        cancelAnimationFrame(this.updateCall);\n      }\n\n      this.reset();\n\n      this.removeEventListeners();\n      this.element.vanillaTilt = null;\n      delete this.element.vanillaTilt;\n\n      this.element = null;\n    }\n\n    onDeviceOrientation(event) {\n      if (event.gamma === null || event.beta === null) {\n        return;\n      }\n\n      this.updateElementPosition();\n\n      if (this.gyroscopeSamples > 0) {\n        this.lastgammazero = this.gammazero;\n        this.lastbetazero = this.betazero;\n\n        if (this.gammazero === null) {\n          this.gammazero = event.gamma;\n          this.betazero = event.beta;\n        } else {\n          this.gammazero = (event.gamma + this.lastgammazero) / 2;\n          this.betazero = (event.beta + this.lastbetazero) / 2;\n        }\n\n        this.gyroscopeSamples -= 1;\n      }\n\n      const totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;\n      const totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;\n\n      const degreesPerPixelX = totalAngleX / this.width;\n      const degreesPerPixelY = totalAngleY / this.height;\n\n      const angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);\n      const angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);\n\n      const posX = angleX / degreesPerPixelX;\n      const posY = angleY / degreesPerPixelY;\n\n      if (this.updateCall !== null) {\n        cancelAnimationFrame(this.updateCall);\n      }\n\n      this.event = {\n        clientX: posX + this.left,\n        clientY: posY + this.top,\n      };\n\n      this.updateCall = requestAnimationFrame(this.updateBind);\n    }\n\n    onMouseEnter() {\n      this.updateElementPosition();\n      this.element.style.willChange = 'transform';\n      this.setTransition();\n    }\n\n    onMouseMove(event) {\n      if (this.updateCall !== null) {\n        cancelAnimationFrame(this.updateCall);\n      }\n\n      this.event = event;\n      this.updateCall = requestAnimationFrame(this.updateBind);\n    }\n\n    onMouseLeave() {\n      this.setTransition();\n\n      if (this.settings.reset) {\n        requestAnimationFrame(this.resetBind);\n      }\n    }\n\n    reset() {\n      this.event = {\n        clientX: this.left + this.width / 2,\n        clientY: this.top + this.height / 2,\n      };\n\n      if (this.element && this.element.style) {\n        this.element.style.transform = `perspective(${this.settings.perspective}px) ` + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'scale3d(1, 1, 1)';\n      }\n\n      this.resetGlare();\n    }\n\n    resetGlare() {\n      if (this.glare) {\n        this.glareElement.style.transform = 'rotate(180deg) translate(-50%, -50%)';\n        this.glareElement.style.opacity = '0';\n      }\n    }\n\n    updateInitialPosition() {\n      if (this.settings.startX === 0 && this.settings.startY === 0) {\n        return;\n      }\n\n      this.onMouseEnter();\n\n      if (this.fullPageListening) {\n        this.event = {\n          clientX: ((this.settings.startX + this.settings.max) / (2 * this.settings.max)) * this.clientWidth,\n          clientY: ((this.settings.startY + this.settings.max) / (2 * this.settings.max)) * this.clientHeight,\n        };\n      } else {\n        this.event = {\n          clientX: this.left + ((this.settings.startX + this.settings.max) / (2 * this.settings.max)) * this.width,\n          clientY: this.top + ((this.settings.startY + this.settings.max) / (2 * this.settings.max)) * this.height,\n        };\n      }\n\n      const backupScale = this.settings.scale;\n      this.settings.scale = 1;\n      this.update();\n      this.settings.scale = backupScale;\n      this.resetGlare();\n    }\n\n    getValues() {\n      let x; let\n        y;\n\n      if (this.fullPageListening) {\n        x = this.event.clientX / this.clientWidth;\n        y = this.event.clientY / this.clientHeight;\n      } else {\n        x = (this.event.clientX - this.left) / this.width;\n        y = (this.event.clientY - this.top) / this.height;\n      }\n\n      x = Math.min(Math.max(x, 0), 1);\n      y = Math.min(Math.max(y, 0), 1);\n\n      const tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);\n      const tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);\n      const angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);\n\n      return {\n        tiltX,\n        tiltY,\n        percentageX: x * 100,\n        percentageY: y * 100,\n        angle,\n      };\n    }\n\n    updateElementPosition() {\n      const rect = this.element.getBoundingClientRect();\n\n      this.width = this.element.offsetWidth;\n      this.height = this.element.offsetHeight;\n      this.left = rect.left;\n      this.top = rect.top;\n    }\n\n    update() {\n      const values = this.getValues();\n\n      this.element.style.transform = `perspective(${this.settings.perspective}px) ` + `rotateX(${this.settings.axis === 'x' ? 0 : values.tiltY}deg) ` + `rotateY(${this.settings.axis === 'y' ? 0 : values.tiltX}deg) ` + `scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`;\n\n      if (this.glare) {\n        this.glareElement.style.transform = `rotate(${values.angle}deg) translate(-50%, -50%)`;\n        this.glareElement.style.opacity = `${(values.percentageY * this.settings['max-glare']) / 100}`;\n      }\n\n      this.element.dispatchEvent(\n        new CustomEvent('tiltChange', {\n          detail: values,\n        }),\n      );\n\n      this.updateCall = null;\n    }\n\n    /**\n     * Appends the glare element (if glarePrerender equals false)\n     * and sets the default style\n     */\n    prepareGlare() {\n      // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.\n      if (!this.glarePrerender) {\n        // Create glare element\n        const jsTiltGlare = document.createElement('div');\n        jsTiltGlare.classList.add('js-tilt-glare');\n\n        const jsTiltGlareInner = document.createElement('div');\n        jsTiltGlareInner.classList.add('js-tilt-glare-inner');\n\n        jsTiltGlare.appendChild(jsTiltGlareInner);\n        this.element.appendChild(jsTiltGlare);\n      }\n\n      this.glareElementWrapper = this.element.querySelector('.js-tilt-glare');\n      this.glareElement = this.element.querySelector('.js-tilt-glare-inner');\n\n      if (this.glarePrerender) {\n        return;\n      }\n\n      Object.assign(this.glareElementWrapper.style, {\n        position: 'absolute',\n        top: '0',\n        left: '0',\n        width: '100%',\n        height: '100%',\n        overflow: 'hidden',\n        'pointer-events': 'none',\n      });\n\n      Object.assign(this.glareElement.style, {\n        position: 'absolute',\n        top: '50%',\n        left: '50%',\n        'pointer-events': 'none',\n        'background-image': 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',\n        transform: 'rotate(180deg) translate(-50%, -50%)',\n        'transform-origin': '0% 0%',\n        opacity: '0',\n      });\n\n      this.updateGlareSize();\n    }\n\n    updateGlareSize() {\n      if (this.glare) {\n        const glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;\n\n        Object.assign(this.glareElement.style, {\n          width: `${glareSize}px`,\n          height: `${glareSize}px`,\n        });\n      }\n    }\n\n    updateClientSize() {\n      this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n\n      this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\n    }\n\n    onWindowResize() {\n      this.updateGlareSize();\n      this.updateClientSize();\n    }\n\n    setTransition() {\n      clearTimeout(this.transitionTimeout);\n      this.element.style.transition = `${this.settings.speed}ms ${this.settings.easing}`;\n      if (this.glare) this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;\n\n      this.transitionTimeout = setTimeout(() => {\n        this.element.style.transition = '';\n        if (this.glare) {\n          this.glareElement.style.transition = '';\n        }\n      }, this.settings.speed);\n    }\n\n    /**\n     * Method return patched settings of instance\n     * @param {boolean} settings.reverse - reverse the tilt direction\n     * @param {number} settings.max - max tilt rotation (degrees)\n     * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0\n     * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0\n     * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets\n     * @param {string} settings.easing - Easing on enter/exit\n     * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..\n     * @param {number} settings.speed - Speed of the enter/exit transition\n     * @param {boolean} settings.transition - Set a transition on enter/exit\n     * @param {string|null} settings.axis - What axis should be disabled. Can be X or Y\n     * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y\n     * @param {number} settings.max-glare - the maximum \"glare\" opacity (1 = 100%, 0.5 = 50%)\n     * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise\n     * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element\n     * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events\n     * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit\n     * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events\n     * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..\n     * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.\n     */\n    extendSettings(settings) {\n      const defaultSettings = {\n        reverse: false,\n        max: 15,\n        startX: 0,\n        startY: 0,\n        perspective: 1000,\n        easing: 'cubic-bezier(.03,.98,.52,.99)',\n        scale: 1,\n        speed: 300,\n        transition: true,\n        axis: null,\n        glare: false,\n        'max-glare': 1,\n        'glare-prerender': false,\n        'full-page-listening': false,\n        'mouse-event-element': null,\n        reset: true,\n        gyroscope: true,\n        gyroscopeMinAngleX: -45,\n        gyroscopeMaxAngleX: 45,\n        gyroscopeMinAngleY: -45,\n        gyroscopeMaxAngleY: 45,\n        gyroscopeSamples: 10,\n      };\n\n      const newSettings = {};\n      for (const property in defaultSettings) {\n        if (property in settings) {\n          newSettings[property] = settings[property];\n        } else if (this.element.hasAttribute(`data-tilt-${property}`)) {\n          const attribute = this.element.getAttribute(`data-tilt-${property}`);\n          try {\n            newSettings[property] = JSON.parse(attribute);\n          } catch (e) {\n            newSettings[property] = attribute;\n          }\n        } else {\n          newSettings[property] = defaultSettings[property];\n        }\n      }\n\n      return newSettings;\n    }\n\n    static init(elements, settings) {\n      if (elements instanceof Node) {\n        elements = [elements];\n      }\n\n      if (elements instanceof NodeList) {\n        elements = [].slice.call(elements);\n      }\n\n      if (!(elements instanceof Array)) {\n        return;\n      }\n\n      elements.forEach((element) => {\n        if (!('vanillaTilt' in element)) {\n          element.vanillaTilt = new VanillaTilt(element, settings);\n        }\n      });\n    }\n  }\n\n  if (typeof document !== 'undefined') {\n    /* expose the class to window */\n    window.VanillaTilt = VanillaTilt;\n\n    /**\n     * Auto load\n     */\n    VanillaTilt.init(document.querySelectorAll('[data-tilt]'));\n  }\n\n  return VanillaTilt;\n}());\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VanillaTilt);\n\n\n//# sourceURL=webpack://webpack-demo/./src/vanilla-tilt.js?");

/***/ }),

/***/ "./src/img/crysis.jpg":
/*!****************************!*\
  !*** ./src/img/crysis.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"291b8cc14b2c975c16cd.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/img/crysis.jpg?");

/***/ })

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;