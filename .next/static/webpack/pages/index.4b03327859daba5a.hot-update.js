"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomeScreen; }\n/* harmony export */ });\n/* harmony import */ var C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-infinite-scroll-component */ \"./node_modules/react-infinite-scroll-component/dist/index.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction HomeScreen(param1) {\n    var posts1 = param1.posts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        posts1\n    ]), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), hasMore = ref1[0], setHasMore = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1), page = ref2[0], setPage = ref2[1];\n    console.log(items);\n    var infos = {\n        nome: 'Alex',\n        githubUser: 'alexdgoncalves'\n    };\n    var fetchPosts = function() {\n        var _ref = _asyncToGenerator(C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(pageNumber) {\n            var posts;\n            return C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://localhost:3000/api/posts?page=\".concat(pageNumber)).then(function(res) {\n                            return res.json();\n                        });\n                    case 2:\n                        posts = _ctx.sent;\n                        setItems(function(prevItems) {\n                            return _toConsumableArray(prevItems).concat(_toConsumableArray(posts));\n                        });\n                        if (posts.length < 10) {\n                            setHasMore(false);\n                        }\n                        setPage(pageNumber + 1);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPosts(pageNumber) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        styleSheet: {\n            flexDirection: 'column',\n            margin: '32px auto',\n            maxWidth: '800px',\n            paddingHorizontal: '16px'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                src: \"https://github.com/\".concat(infos.githubUser, \".png\"),\n                styleSheet: {\n                    width: '150px',\n                    height: '150px',\n                    borderRadius: '50%',\n                    margin: '0 auto',\n                    border: '2px solid #F9703E'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                variant: \"heading1\",\n                tag: \"h1\",\n                styleSheet: {\n                    color: '#F9703E',\n                    justifyContent: 'center'\n                },\n                children: infos.nome\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                styleSheet: {\n                    display: 'grid',\n                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',\n                    marginTop: '16px',\n                    gridGap: '16px'\n                },\n                children: items.map(function(param) {\n                    var title = param.title, content = param.content, id = param.id;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Post, {\n                        title: title,\n                        content: content,\n                        id: id\n                    }, id, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this));\n};\n_s(HomeScreen, \"LJhmfPvOy6xanD9V0fIfMDziP7U=\");\n_c = HomeScreen;\nfunction Post(param) {\n    var title = param.title, content = param.content, id = param.id;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        styleSheet: {\n            flexDirection: 'column',\n            border: '1px solid #F9703E',\n            padding: '16px',\n            boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',\n            transition: '.3s',\n            borderRadius: '4px',\n            hover: {\n                boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)'\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"posts/\".concat(id),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    tag: \"a\",\n                    variant: \"heading4\",\n                    styleSheet: {\n                        display: ' block',\n                        color: '#F9703E',\n                        marginBottom: '8px'\n                    },\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {}, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this));\n}\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeScreen\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDWjtBQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTdDLFFBQVEsQ0FBQ08sVUFBVSxDQUFDLE1BQVMsRUFBRSxDQUFDO1FBQVZDLE1BQUssR0FBUCxNQUFTLENBQVBBLEtBQUs7OztJQUN4QyxHQUFLLENBQXFCSixHQUFpQixHQUFqQkEsK0NBQVEsQ0FBQyxDQUFDSTtRQUFBQSxNQUFLO0lBQUEsQ0FBQyxHQUFuQ0MsS0FBSyxHQUFjTCxHQUFpQixLQUE3Qk0sUUFBUSxHQUFJTixHQUFpQjtJQUMzQyxHQUFLLENBQXlCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFwQ08sT0FBTyxHQUFnQlAsSUFBYyxLQUE1QlEsVUFBVSxHQUFJUixJQUFjO0lBQzVDLEdBQUssQ0FBbUJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTNCUyxJQUFJLEdBQWFULElBQVcsS0FBdEJVLE9BQU8sR0FBSVYsSUFBVztJQUVuQ1csT0FBTyxDQUFDQyxHQUFHLENBQUNQLEtBQUs7SUFHakIsR0FBSyxDQUFDUSxLQUFLLEdBQUcsQ0FBQztRQUNiQyxJQUFJLEVBQUUsQ0FBTTtRQUNaQyxVQUFVLEVBQUUsQ0FBZ0I7SUFDOUIsQ0FBQztJQUVELEdBQUssQ0FBQ0MsVUFBVTtrS0FBRyxRQUFRLFNBQURDLFVBQVUsRUFBSyxDQUFDO2dCQUNsQ2IsS0FBSzs7Ozs7K0JBQVNjLEtBQUssQ0FBRSxDQUFxQyx1Q0FBYSxPQUFYRCxVQUFVLEdBQ3pFRSxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHOzRCQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTs7O3dCQURuQmpCLEtBQUs7d0JBR1hFLFFBQVEsQ0FBQyxRQUFRLENBQVBnQixTQUFTOzRCQUFLLE1BQU0sb0JBQUZBLFNBQVMsNEJBQUtsQixLQUFLOzt3QkFFL0MsRUFBRSxFQUFFQSxLQUFLLENBQUNtQixNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUM7NEJBQ3RCZixVQUFVLENBQUMsS0FBSzt3QkFDbEIsQ0FBQzt3QkFDREUsT0FBTyxDQUFDTyxVQUFVLEdBQUcsQ0FBQzs7Ozs7O1FBQ3hCLENBQUM7d0JBVktELFVBQVUsQ0FBVUMsVUFBVTs7OztJQVdwQyxNQUFNLDZFQUNIcEIscURBQUc7UUFDRjJCLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLGFBQWEsRUFBRSxDQUFRO1lBQ3ZCQyxNQUFNLEVBQUUsQ0FBVztZQUNuQkMsUUFBUSxFQUFFLENBQU87WUFDakJDLGlCQUFpQixFQUFFLENBQU07UUFDM0IsQ0FBQzs7d0ZBRUE3Qix1REFBSztnQkFDSjhCLEdBQUcsRUFBRyxDQUFtQixxQkFBbUIsTUFBSSxDQUFyQmhCLEtBQUssQ0FBQ0UsVUFBVSxFQUFDLENBQUk7Z0JBQ2hEUyxVQUFVLEVBQUUsQ0FBQztvQkFDWE0sS0FBSyxFQUFFLENBQU87b0JBQ2RDLE1BQU0sRUFBRSxDQUFPO29CQUNmQyxZQUFZLEVBQUUsQ0FBSztvQkFDbkJOLE1BQU0sRUFBRSxDQUFRO29CQUNoQk8sTUFBTSxFQUFFLENBQW1CO2dCQUM3QixDQUFDOzs7Ozs7d0ZBRUZuQyxzREFBSTtnQkFDSG9DLE9BQU8sRUFBQyxDQUFVO2dCQUNsQkMsR0FBRyxFQUFDLENBQUk7Z0JBQ1JYLFVBQVUsRUFBRSxDQUFDO29CQUFDWSxLQUFLLEVBQUUsQ0FBUztvQkFBRUMsY0FBYyxFQUFFLENBQVE7Z0JBQUMsQ0FBQzswQkFFekR4QixLQUFLLENBQUNDLElBQUk7Ozs7Ozt3RkFHWmpCLHFEQUFHO2dCQUFDMkIsVUFBVSxFQUFFLENBQUM7b0JBQ2hCYyxPQUFPLEVBQUUsQ0FBTTtvQkFDZkMsbUJBQW1CLEVBQUUsQ0FBc0M7b0JBQzNEQyxTQUFTLEVBQUUsQ0FBTTtvQkFDakJDLE9BQU8sRUFBRSxDQUFNO2dCQUNqQixDQUFDOzBCQUNFcEMsS0FBSyxDQUFDcUMsR0FBRyxDQUFDLFFBQVE7d0JBQUxDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsRUFBRSxTQUFGQSxFQUFFO2tDQUM5QixNQUFNQyxDQUFBQSw2REFBQUEsQ0FBTEMsSUFBSTt3QkFBVUosS0FBSyxFQUFFQSxLQUFLO3dCQUFFQyxPQUFPLEVBQUVBLE9BQU87d0JBQUVDLEVBQUUsRUFBRUEsRUFBRTt1QkFBMUNBLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZCLENBQUM7R0EvRHVCMUMsVUFBVTtLQUFWQSxVQUFVO1NBaUV6QjRDLElBQUksQ0FBQyxLQUFzQixFQUFFLENBQUM7UUFBdkJKLEtBQUssR0FBUCxLQUFzQixDQUFwQkEsS0FBSyxFQUFFQyxPQUFPLEdBQWhCLEtBQXNCLENBQWJBLE9BQU8sRUFBRUMsRUFBRSxHQUFwQixLQUFzQixDQUFKQSxFQUFFO0lBQ2hDLE1BQU0sNkVBQ0hoRCxxREFBRztRQUNGMkIsVUFBVSxFQUFFLENBQUM7WUFDWEMsYUFBYSxFQUFFLENBQVE7WUFDdkJRLE1BQU0sRUFBRSxDQUFtQjtZQUMzQmUsT0FBTyxFQUFFLENBQU07WUFDZkMsU0FBUyxFQUFFLENBQWtDO1lBQzdDQyxVQUFVLEVBQUUsQ0FBSztZQUNqQmxCLFlBQVksRUFBRSxDQUFLO1lBQ25CbUIsS0FBSyxFQUFFLENBQUM7Z0JBQ05GLFNBQVMsRUFBRSxDQUFvQztZQUNqRCxDQUFDO1FBQ0gsQ0FBQzs7d0ZBRUFyRCxrREFBUTtnQkFBQ3dELElBQUksRUFBRyxDQUFNLFFBQUssT0FBSFAsRUFBRTtnQkFBSVEsUUFBUTtzR0FDcEN2RCxzREFBSTtvQkFDSHFDLEdBQUcsRUFBQyxDQUFHO29CQUNQRCxPQUFPLEVBQUMsQ0FBVTtvQkFDbEJWLFVBQVUsRUFBRSxDQUFDO3dCQUFDYyxPQUFPLEVBQUUsQ0FBUTt3QkFBRUYsS0FBSyxFQUFFLENBQVM7d0JBQUVrQixZQUFZLEVBQUUsQ0FBSztvQkFBQyxDQUFDOzhCQUV2RVgsS0FBSzs7Ozs7Ozs7Ozs7d0ZBR1Q3QyxzREFBSTs7Ozs7Ozs7Ozs7QUFLWCxDQUFDO01BN0JRaUQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZmlzdFBhZ2UgPSAxO1xuXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHM/cGFnZT0ke2Zpc3RQYWdlfWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVTY3JlZW4oeyBwb3N0cyB9KSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW3Bvc3RzXSk7XG4gIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zb2xlLmxvZyhpdGVtcyk7XG5cblxuICBjb25zdCBpbmZvcyA9IHtcbiAgICBub21lOiAnQWxleCcsXG4gICAgZ2l0aHViVXNlcjogJ2FsZXhkZ29uY2FsdmVzJyxcbiAgfVxuXG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAocGFnZU51bWJlcikgPT4ge1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHM/cGFnZT0ke3BhZ2VOdW1iZXJ9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gICAgc2V0SXRlbXMoKHByZXZJdGVtcykgPT4gWy4uLnByZXZJdGVtcywgLi4ucG9zdHNdKTtcblxuICAgIGlmIChwb3N0cy5sZW5ndGggPCAxMCkge1xuICAgICAgc2V0SGFzTW9yZShmYWxzZSk7XG4gICAgfVxuICAgIHNldFBhZ2UocGFnZU51bWJlciArIDEpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgbWFyZ2luOiAnMzJweCBhdXRvJyxcbiAgICAgICAgbWF4V2lkdGg6ICc4MDBweCcsXG4gICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAnMTZweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtpbmZvcy5naXRodWJVc2VyfS5wbmdgfVxuICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnMTUwcHgnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgI0Y5NzAzRScsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFRleHRcbiAgICAgICAgdmFyaWFudD1cImhlYWRpbmcxXCJcbiAgICAgICAgdGFnPVwiaDFcIlxuICAgICAgICBzdHlsZVNoZWV0PXt7IGNvbG9yOiAnI0Y5NzAzRScsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuICAgICAgPlxuICAgICAgICB7aW5mb3Mubm9tZX1cbiAgICAgIDwvVGV4dD5cblxuICAgICAgPEJveCBzdHlsZVNoZWV0PXt7XG4gICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKScsXG4gICAgICAgIG1hcmdpblRvcDogJzE2cHgnLFxuICAgICAgICBncmlkR2FwOiAnMTZweCcsXG4gICAgICB9fT5cbiAgICAgICAge2l0ZW1zLm1hcCgoeyB0aXRsZSwgY29udGVudCwgaWQgfSkgPT4gKFxuICAgICAgICAgIDxQb3N0IGtleT17aWR9IHRpdGxlPXt0aXRsZX0gY29udGVudD17Y29udGVudH0gaWQ9e2lkfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIFBvc3QoeyB0aXRsZSwgY29udGVudCwgaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRjk3MDNFJyxcbiAgICAgICAgcGFkZGluZzogJzE2cHgnLFxuICAgICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDVweCAwIHJnYmEoMjU1LDY5LDAsMC4yKScsXG4gICAgICAgIHRyYW5zaXRpb246ICcuM3MnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGJveFNoYWRvdzogJzFweCAxcHggNXB4IDVweCByZ2JhKDI1NSw2OSwwLDAuMiknLFxuICAgICAgICB9XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxOZXh0TGluayBocmVmPXtgcG9zdHMvJHtpZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICB0YWc9XCJhXCJcbiAgICAgICAgICB2YXJpYW50PVwiaGVhZGluZzRcIlxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3sgZGlzcGxheTogJyBibG9jaycsIGNvbG9yOiAnI0Y5NzAzRScsIG1hcmdpbkJvdHRvbTogJzhweCcgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9OZXh0TGluaz5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7Lyoge2NvbnRlbnQuc3Vic3RyaW5nKDAsIDE0MCl9Li4uICovfVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5leHRMaW5rIiwiQm94IiwiVGV4dCIsIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbmZpbml0ZVNjcm9sbCIsIkhvbWVTY3JlZW4iLCJwb3N0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJoYXNNb3JlIiwic2V0SGFzTW9yZSIsInBhZ2UiLCJzZXRQYWdlIiwiY29uc29sZSIsImxvZyIsImluZm9zIiwibm9tZSIsImdpdGh1YlVzZXIiLCJmZXRjaFBvc3RzIiwicGFnZU51bWJlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwcmV2SXRlbXMiLCJsZW5ndGgiLCJzdHlsZVNoZWV0IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsIm1heFdpZHRoIiwicGFkZGluZ0hvcml6b250YWwiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInZhcmlhbnQiLCJ0YWciLCJjb2xvciIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW5Ub3AiLCJncmlkR2FwIiwibWFwIiwidGl0bGUiLCJjb250ZW50IiwiaWQiLCJrZXkiLCJQb3N0IiwicGFkZGluZyIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJob3ZlciIsImhyZWYiLCJwYXNzSHJlZiIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});