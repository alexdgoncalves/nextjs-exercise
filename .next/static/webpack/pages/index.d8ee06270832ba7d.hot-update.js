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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomeScreen; }\n/* harmony export */ });\n/* harmony import */ var C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-infinite-scroll-component */ \"./node_modules/react-infinite-scroll-component/dist/index.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction HomeScreen(param1) {\n    var posts1 = param1.posts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        posts1\n    ]), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), hasMore = ref1[0], setHasMore = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1), page = ref2[0], setPage = ref2[1];\n    var infos = {\n        nome: 'Alex',\n        githubUser: 'alexdgoncalves'\n    };\n    var fetchPosts = function() {\n        var _ref = _asyncToGenerator(C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(pageNumber) {\n            var posts;\n            return C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://localhost:3000/api/posts?page=\".concat(pageNumber)).then(function(res) {\n                            return res.json();\n                        });\n                    case 2:\n                        posts = _ctx.sent;\n                        setItems(function(prevItems) {\n                            return _toConsumableArray(prevItems).concat(_toConsumableArray(posts));\n                        });\n                        if (posts.length < 10) {\n                            setHasMore(false);\n                        }\n                        setPage(pageNumber + 1);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPosts(pageNumber) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        styleSheet: {\n            flexDirection: 'column',\n            margin: '32px auto',\n            maxWidth: '800px',\n            paddingHorizontal: '16px'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                src: \"https://github.com/\".concat(infos.githubUser, \".png\"),\n                styleSheet: {\n                    width: '150px',\n                    height: '150px',\n                    borderRadius: '50%',\n                    margin: '0 auto',\n                    border: '2px solid #F9703E'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                variant: \"heading1\",\n                tag: \"h1\",\n                styleSheet: {\n                    color: '#F9703E',\n                    justifyContent: 'center'\n                },\n                children: infos.nome\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                styleSheet: {\n                    display: 'grid',\n                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',\n                    marginTop: '16px',\n                    gridGap: '16px'\n                },\n                children: items.map(function(param) {\n                    var title = param.title, content = param.content, id = param.id;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Post, {\n                        title: title,\n                        content: content,\n                        id: id\n                    }, id, false, {\n                        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this));\n};\n_s(HomeScreen, \"LJhmfPvOy6xanD9V0fIfMDziP7U=\");\n_c = HomeScreen;\nfunction Post(param) {\n    var title = param.title, content = param.content, id = param.id;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        styleSheet: {\n            flexDirection: 'column',\n            border: '1px solid #F9703E',\n            padding: '16px',\n            boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',\n            transition: '.3s',\n            borderRadius: '4px',\n            hover: {\n                boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)'\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"posts/\".concat(id),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    tag: \"a\",\n                    variant: \"heading4\",\n                    styleSheet: {\n                        display: ' block',\n                        color: '#F9703E',\n                        marginBottom: '8px'\n                    },\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {}, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this));\n}\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeScreen\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBCb3gsIFRleHQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBmaXN0UGFnZSA9IDE7XG5cbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cz9wYWdlPSR7ZmlzdFBhZ2V9YClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0czogcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVNjcmVlbih7IHBvc3RzIH0pIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbcG9zdHNdKTtcbiAgY29uc3QgW2hhc01vcmUsIHNldEhhc01vcmVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IGluZm9zID0ge1xuICAgIG5vbWU6ICdBbGV4JyxcbiAgICBnaXRodWJVc2VyOiAnYWxleGRnb25jYWx2ZXMnLFxuICB9XG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jIChwYWdlTnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cz9wYWdlPSR7cGFnZU51bWJlcn1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgICBzZXRJdGVtcygocHJldkl0ZW1zKSA9PiBbLi4ucHJldkl0ZW1zLCAuLi5wb3N0c10pO1xuXG4gICAgaWYgKHBvc3RzLmxlbmd0aCA8IDEwKSB7XG4gICAgICBzZXRIYXNNb3JlKGZhbHNlKTtcbiAgICB9XG4gICAgc2V0UGFnZShwYWdlTnVtYmVyICsgMSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIG1hcmdpbjogJzMycHggYXV0bycsXG4gICAgICAgIG1heFdpZHRoOiAnODAwcHgnLFxuICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogJzE2cHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aW5mb3MuZ2l0aHViVXNlcn0ucG5nYH1cbiAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgIHdpZHRoOiAnMTUwcHgnLFxuICAgICAgICAgIGhlaWdodDogJzE1MHB4JyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICNGOTcwM0UnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxUZXh0XG4gICAgICAgIHZhcmlhbnQ9XCJoZWFkaW5nMVwiXG4gICAgICAgIHRhZz1cImgxXCJcbiAgICAgICAgc3R5bGVTaGVldD17eyBjb2xvcjogJyNGOTcwM0UnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cbiAgICAgID5cbiAgICAgICAge2luZm9zLm5vbWV9XG4gICAgICA8L1RleHQ+XG5cbiAgICAgIDxCb3ggc3R5bGVTaGVldD17e1xuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSknLFxuICAgICAgICBtYXJnaW5Ub3A6ICcxNnB4JyxcbiAgICAgICAgZ3JpZEdhcDogJzE2cHgnLFxuICAgICAgfX0+XG4gICAgICAgIHtpdGVtcy5tYXAoKHsgdGl0bGUsIGNvbnRlbnQsIGlkIH0pID0+IChcbiAgICAgICAgICA8UG9zdCBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGNvbnRlbnQ9e2NvbnRlbnR9IGlkPXtpZH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiBQb3N0KHsgdGl0bGUsIGNvbnRlbnQsIGlkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0Y5NzAzRScsXG4gICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgYm94U2hhZG93OiAnMXB4IDFweCA1cHggMCByZ2JhKDI1NSw2OSwwLDAuMiknLFxuICAgICAgICB0cmFuc2l0aW9uOiAnLjNzJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBib3hTaGFkb3c6ICcxcHggMXB4IDVweCA1cHggcmdiYSgyNTUsNjksMCwwLjIpJyxcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TmV4dExpbmsgaHJlZj17YHBvc3RzLyR7aWR9YH0gcGFzc0hyZWY+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgdGFnPVwiYVwiXG4gICAgICAgICAgdmFyaWFudD1cImhlYWRpbmc0XCJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7IGRpc3BsYXk6ICcgYmxvY2snLCBjb2xvcjogJyNGOTcwM0UnLCBtYXJnaW5Cb3R0b206ICc4cHgnIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvTmV4dExpbms+XG4gICAgICA8VGV4dD5cbiAgICAgICAgey8qIHtjb250ZW50LnNwbGljZSgwLCAxNDApfS4uLiAqL31cbiAgICAgICAgey8qIHtjb250ZW50LnN1YnN0cmluZygwLCAxNDApfS4uLiAqL31cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0TGluayIsIkJveCIsIlRleHQiLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5maW5pdGVTY3JvbGwiLCJIb21lU2NyZWVuIiwicG9zdHMiLCJpdGVtcyIsInNldEl0ZW1zIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlIiwic2V0UGFnZSIsImluZm9zIiwibm9tZSIsImdpdGh1YlVzZXIiLCJmZXRjaFBvc3RzIiwicGFnZU51bWJlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwcmV2SXRlbXMiLCJsZW5ndGgiLCJzdHlsZVNoZWV0IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsIm1heFdpZHRoIiwicGFkZGluZ0hvcml6b250YWwiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInZhcmlhbnQiLCJ0YWciLCJjb2xvciIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW5Ub3AiLCJncmlkR2FwIiwibWFwIiwidGl0bGUiLCJjb250ZW50IiwiaWQiLCJrZXkiLCJQb3N0IiwicGFkZGluZyIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJob3ZlciIsImhyZWYiLCJwYXNzSHJlZiIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});