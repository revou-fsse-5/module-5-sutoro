/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fsutoro%2FProject%2Fmodule-5-sutoro%2Fsrc%2Fpages%2Findex.tsx&page=%2F!":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fsutoro%2FProject%2Fmodule-5-sutoro%2Fsrc%2Fpages%2Findex.tsx&page=%2F! ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/index.tsx */ \"./src/pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnN1dG9ybyUyRlByb2plY3QlMkZtb2R1bGUtNS1zdXRvcm8lMkZzcmMlMkZwYWdlcyUyRmluZGV4LnRzeCZwYWdlPSUyRiEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxvREFBdUI7QUFDOUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2E0MTUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fsutoro%2FProject%2Fmodule-5-sutoro%2Fsrc%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst HomePage = (param)=>{\n    let { products, categories } = param;\n    _s();\n    const [selectedCategory, setSelectedCategory] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [filteredProducts, setFilteredProducts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(products);\n    // Filter products based on selected category\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (selectedCategory) {\n            setFilteredProducts(products.filter((product)=>product.category.id === Number(selectedCategory)));\n        } else {\n            setFilteredProducts(products);\n        }\n    }, [\n        selectedCategory,\n        products\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-gray-800 p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white text-2xl\",\n                        children: \"My Store\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: selectedCategory,\n                            onChange: (e)=>setSelectedCategory(e.target.value),\n                            className: \"p-2 border rounded\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"All Categories\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: category.id,\n                                        children: category.name\n                                    }, category.id, false, {\n                                        fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6\",\n                        children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border p-4 rounded shadow\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: product.images[0],\n                                        alt: product.title,\n                                        className: \"w-full h-48 object-cover mb-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-bold\",\n                                        children: product.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500\",\n                                        children: [\n                                            \"$\",\n                                            product.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, product.id, true, {\n                                fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sutoro/Project/module-5-sutoro/src/pages/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"ncwJLFJ/UyyISmNZNsno+yYMiFk=\");\n_c = HomePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUF5QjFCLE1BQU1DLFdBQW9DO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUU7O0lBQ2pFLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0wscURBQWMsQ0FBUztJQUN2RSxNQUFNLENBQUNPLGtCQUFrQkMsb0JBQW9CLEdBQUdSLHFEQUFjLENBQVlFO0lBRTFFLDZDQUE2QztJQUM3Q0Ysc0RBQWUsQ0FBQztRQUNkLElBQUlJLGtCQUFrQjtZQUNwQkksb0JBQW9CTixTQUFTUSxNQUFNLENBQUNDLENBQUFBLFVBQVdBLFFBQVFDLFFBQVEsQ0FBQ0MsRUFBRSxLQUFLQyxPQUFPVjtRQUNoRixPQUFPO1lBQ0xJLG9CQUFvQk47UUFDdEI7SUFDRixHQUFHO1FBQUNFO1FBQWtCRjtLQUFTO0lBRS9CLHFCQUNFLDhEQUFDYTs7MEJBRUMsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUdELFdBQVU7a0NBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUl4Qyw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUViLDhEQUFDRjt3QkFBSUUsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQ0NDLE9BQU9oQjs0QkFDUGlCLFVBQVUsQ0FBQ0MsSUFBTWpCLG9CQUFvQmlCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDbkRILFdBQVU7OzhDQUVWLDhEQUFDTztvQ0FBT0osT0FBTTs4Q0FBRzs7Ozs7O2dDQUNoQmpCLFdBQVdzQixHQUFHLENBQUMsQ0FBQ2IseUJBQ2YsOERBQUNZO3dDQUF5QkosT0FBT1IsU0FBU0MsRUFBRTtrREFDekNELFNBQVNjLElBQUk7dUNBREhkLFNBQVNDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUTlCLDhEQUFDRTt3QkFBSUUsV0FBVTtrQ0FDWlYsaUJBQWlCa0IsR0FBRyxDQUFDLENBQUNkLHdCQUNyQiw4REFBQ0k7Z0NBQXFCRSxXQUFVOztrREFDOUIsOERBQUNVO3dDQUNDQyxLQUFLakIsUUFBUWtCLE1BQU0sQ0FBQyxFQUFFO3dDQUN0QkMsS0FBS25CLFFBQVFvQixLQUFLO3dDQUNsQmQsV0FBVTs7Ozs7O2tEQUVaLDhEQUFDZTt3Q0FBR2YsV0FBVTtrREFBcUJOLFFBQVFvQixLQUFLOzs7Ozs7a0RBQ2hELDhEQUFDRTt3Q0FBRWhCLFdBQVU7OzRDQUFnQjs0Q0FBRU4sUUFBUXVCLEtBQUs7Ozs7Ozs7OytCQVBwQ3ZCLFFBQVFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjaEM7R0F4RE1aO0tBQUFBOztBQWlGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIERlZmluZSB0aGUgUHJvZHVjdCBpbnRlcmZhY2VcbmludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgaW1hZ2VzOiBzdHJpbmdbXTtcbiAgY2F0ZWdvcnk6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgfTtcbn1cblxuaW50ZXJmYWNlIENhdGVnb3J5IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSG9tZVBhZ2VQcm9wcyB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W107XG59XG5cbmNvbnN0IEhvbWVQYWdlOiBSZWFjdC5GQzxIb21lUGFnZVByb3BzPiA9ICh7IHByb2R1Y3RzLCBjYXRlZ29yaWVzIH0pID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IFJlYWN0LnVzZVN0YXRlPFByb2R1Y3RbXT4ocHJvZHVjdHMpO1xuXG4gIC8vIEZpbHRlciBwcm9kdWN0cyBiYXNlZCBvbiBzZWxlY3RlZCBjYXRlZ29yeVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuY2F0ZWdvcnkuaWQgPT09IE51bWJlcihzZWxlY3RlZENhdGVnb3J5KSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZENhdGVnb3J5LCBwcm9kdWN0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiBOYXZiYXIgcGxhY2Vob2xkZXIgKi99XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5NeSBTdG9yZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktOFwiPlxuICAgICAgICB7LyogQ2F0ZWdvcnkgRHJvcGRvd24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBDYXRlZ29yaWVzPC9vcHRpb24+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYXRlZ29yeS5pZH0gdmFsdWU9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFByb2R1Y3RzIExpc3QgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtNlwiPlxuICAgICAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImJvcmRlciBwLTQgcm91bmRlZCBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZXNbMF19XG4gICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IG9iamVjdC1jb3ZlciBtYi00XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e3Byb2R1Y3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPiR7cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIEZldGNoaW5nIGRhdGEgd2l0aCBTU1JcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvZHVjdHNSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldDxQcm9kdWN0W10+KCdodHRwczovL2FwaS5lc2N1ZWxhanMuY28vYXBpL3YxL3Byb2R1Y3RzJyk7XG4gICAgY29uc3QgY2F0ZWdvcmllc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PENhdGVnb3J5W10+KCdodHRwczovL2FwaS5lc2N1ZWxhanMuY28vYXBpL3YxL2NhdGVnb3JpZXMnKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNSZXNwb25zZS5kYXRhLFxuICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzUmVzcG9uc2UuZGF0YSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdHMgb3IgY2F0ZWdvcmllczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb2R1Y3RzOiBbXSxcbiAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSG9tZVBhZ2UiLCJwcm9kdWN0cyIsImNhdGVnb3JpZXMiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInVzZVN0YXRlIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJpZCIsIk51bWJlciIsImRpdiIsIm5hdiIsImNsYXNzTmFtZSIsImgxIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJtYXAiLCJuYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VzIiwiYWx0IiwidGl0bGUiLCJoMiIsInAiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fsutoro%2FProject%2Fmodule-5-sutoro%2Fsrc%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);