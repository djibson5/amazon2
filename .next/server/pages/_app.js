/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\n//THE GLOBAL STORE SETUP\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUVsRCx3QkFBd0I7QUFFakIsTUFBTUUsUUFBUUYsZ0VBQWNBLENBQUM7SUFDbENHLFNBQVM7UUFDUEMsUUFBUUgsMkRBQWFBO0lBQ3ZCO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uL3NyYy9hcHAvc3RvcmUuanM/NThjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYmFza2V0UmVkdWNlciBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XG5cbi8vVEhFIEdMT0JBTCBTVE9SRSBTRVRVUFxuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBiYXNrZXQ6IGJhc2tldFJlZHVjZXIsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImJhc2tldFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJiYXNrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst MyApp = ({ Component , pageProps: { session , ...pageProps }  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/son5/Projets React Native/amazon/src/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/son5/Projets React Native/amazon/src/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/son5/Projets React Native/amazon/src/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNGO0FBQ047QUFDbUM7QUFFakUsTUFBTUksUUFBUSxDQUFDLEVBQ2JDLFVBQVMsRUFDVEMsV0FBVSxFQUFDQyxRQUFPLEVBQUUsR0FBR0QsV0FBVSxHQUFHLEdBQUs7SUFDekMscUJBQ0UsOERBQUNILDREQUFZQTtRQUFDSSxTQUFTQTtrQkFFdkIsNEVBQUNQLGlEQUFRQTtZQUFDQyxPQUFPQSw2Q0FBS0E7c0JBQ3RCLDRFQUFDSTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2FwcC9zdG9yZSdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIGFzIEF1dGhQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuY29uc3QgTXlBcHAgPSAoeyBcbiAgQ29tcG9uZW50LCBcbiAgcGFnZVByb3BzOntzZXNzaW9uLCAuLi5wYWdlUHJvcHN9LCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cblxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcblxuXG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIlNlc3Npb25Qcm92aWRlciIsIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToBasket\": () => (/* binding */ addToBasket),\n/* harmony export */   \"basketSlice\": () => (/* binding */ basketSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeFromBasket\": () => (/* binding */ removeFromBasket),\n/* harmony export */   \"selectItems\": () => (/* binding */ selectItems),\n/* harmony export */   \"selectTotal\": () => (/* binding */ selectTotal)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: []\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState,\n    reducers: {\n        //ACTIONS\n        addToBasket: (state, action)=>{\n            state.items = [\n                ...state.items,\n                action.payload\n            ];\n        },\n        removeFromBasket: (state, action)=>{\n            const index = state.items.findIndex((basketItem)=>basketItem.id === action.payload.id);\n            let newBasket = [\n                ...state.items\n            ];\n            if (index >= 0) {\n                //THE ITEM EXIST IN THE BASKET... REMOVE IT.... \n                newBasket.splice(index, 1);\n            } else {\n                console.warn(`Impossible de supprimer le produit  (id: ${action.payload.id}) car il n'est pas dans le panier `);\n            }\n            state.items = newBasket;\n        }\n    }\n});\nconst { addToBasket , removeFromBasket  } = basketSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\nconst selectItems = (state)=>state.basket.items;\nconst selectTotal = (state)=>state.basket.items.reduce((total, item)=>total + item.price, 0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLGVBQWU7SUFDbkJDLE9BQU8sRUFBRTtBQUNYO0FBRU8sTUFBTUMsY0FBY0gsNkRBQVdBLENBQUM7SUFDckNJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSLFNBQVM7UUFDVEMsYUFBYSxDQUFDQyxPQUFPQyxTQUFXO1lBQzlCRCxNQUFNTCxLQUFLLEdBQUc7bUJBQUlLLE1BQU1MLEtBQUs7Z0JBQUVNLE9BQU9DLE9BQU87YUFBQztRQUNoRDtRQUNBQyxrQkFBa0IsQ0FBQ0gsT0FBT0MsU0FBVztZQUNuQyxNQUFNRyxRQUFRSixNQUFNTCxLQUFLLENBQUNVLFNBQVMsQ0FBQ0MsQ0FBQUEsYUFBWUEsV0FBV0MsRUFBRSxLQUFLTixPQUFPQyxPQUFPLENBQUNLLEVBQUU7WUFFakYsSUFBSUMsWUFBWTttQkFBSVIsTUFBTUwsS0FBSzthQUFDO1lBRWhDLElBQUlTLFNBQVMsR0FBRTtnQkFDYixnREFBZ0Q7Z0JBQ2hESSxVQUFVQyxNQUFNLENBQUNMLE9BQU87WUFDMUIsT0FBSztnQkFDSE0sUUFBUUMsSUFBSSxDQUNWLENBQUMseUNBQXlDLEVBQUVWLE9BQU9DLE9BQU8sQ0FBQ0ssRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1lBRXJHLENBQUM7WUFDRFAsTUFBTUwsS0FBSyxHQUFHYTtRQUNsQjtJQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRVQsWUFBVyxFQUFFSSxpQkFBZ0IsRUFBRSxHQUFHUCxZQUFZZ0IsT0FBTyxDQUFDO0FBRXJFLDBFQUEwRTtBQUNuRSxNQUFNQyxjQUFjLENBQUNiLFFBQVVBLE1BQU1jLE1BQU0sQ0FBQ25CLEtBQUssQ0FBQztBQUVsRCxNQUFNb0IsY0FBYSxDQUFDZixRQUFVQSxNQUFNYyxNQUFNLENBQUNuQixLQUFLLENBQUNxQixNQUFNLENBQUMsQ0FBQ0MsT0FBT0MsT0FBT0QsUUFBUUMsS0FBS0MsS0FBSyxFQUFFLEdBQUk7QUFFdEcsaUVBQWV2QixZQUFZd0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcz84OTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpdGVtczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYmFza2V0XCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICAvL0FDVElPTlNcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zID0gWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZF1cbiAgICB9LFxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChiYXNrZXRJdGVtPT5iYXNrZXRJdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICApO1xuICAgICAgICBsZXQgbmV3QmFza2V0ID0gWy4uLnN0YXRlLml0ZW1zXTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gMCl7XG4gICAgICAgICAgLy9USEUgSVRFTSBFWElTVCBJTiBUSEUgQkFTS0VULi4uIFJFTU9WRSBJVC4uLi4gXG4gICAgICAgICAgbmV3QmFza2V0LnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEltcG9zc2libGUgZGUgc3VwcHJpbWVyIGxlIHByb2R1aXQgIChpZDogJHthY3Rpb24ucGF5bG9hZC5pZH0pIGNhciBpbCBuJ2VzdCBwYXMgZGFucyBsZSBwYW5pZXIgYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuaXRlbXMgPSBuZXdCYXNrZXQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VG90YWw9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zLnJlZHVjZSgodG90YWwsIGl0ZW0pPT50b3RhbCArIGl0ZW0ucHJpY2UgLDApIDtcblxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwiYmFza2V0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImJhc2tldEl0ZW0iLCJpZCIsIm5ld0Jhc2tldCIsInNwbGljZSIsImNvbnNvbGUiLCJ3YXJuIiwiYWN0aW9ucyIsInNlbGVjdEl0ZW1zIiwiYmFza2V0Iiwic2VsZWN0VG90YWwiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJwcmljZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();