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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomeScreen; }\n/* harmony export */ });\n/* harmony import */ var C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-infinite-scroll-component */ \"./node_modules/react-infinite-scroll-component/dist/index.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction HomeScreen(param1) {\n    var posts1 = param1.posts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(posts1), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), hasMore = ref1[0], setHasMore = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(2), page = ref2[0], setPage = ref2[1];\n    var infos = {\n        nome: 'Alex',\n        info: 'This is a simple example of how to use infinite scroll and static paths in Next.js',\n        githubUser: 'alexdgoncalves'\n    };\n    var fetchPosts = function() {\n        var _ref = _asyncToGenerator(C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(pageNumber) {\n            var posts;\n            return C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://localhost:3000/api/posts?page=\".concat(pageNumber)).then(function(res) {\n                            return res.json();\n                        });\n                    case 2:\n                        posts = _ctx.sent;\n                        setItems(function(prevItems) {\n                            return _toConsumableArray(prevItems).concat(_toConsumableArray(posts));\n                        });\n                        if (posts.length < 10) {\n                            setHasMore(false);\n                        }\n                        setPage(pageNumber + 1);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPosts(pageNumber) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        styleSheet: {\n            flexDirection: 'column',\n            margin: '32px auto',\n            maxWidth: '800px',\n            paddingHorizontal: '16px'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            dataLength: items.length,\n            next: function() {\n                return fetchPosts(page);\n            },\n            hasMore: hasMore,\n            loader: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                children: \"Loading...\"\n            }, void 0, false, void 0, void 0),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                    src: \"https://github.com/\".concat(infos.githubUser, \".png\"),\n                    styleSheet: {\n                        width: '150px',\n                        height: '150px',\n                        borderRadius: '50%',\n                        margin: '0 auto',\n                        border: '2px solid #F9703E'\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    variant: \"heading1\",\n                    tag: \"h1\",\n                    styleSheet: {\n                        color: '#F9703E',\n                        justifyContent: 'center'\n                    },\n                    children: infos.nome\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    variant: \"heading3\",\n                    tag: \"h3\",\n                    styleSheet: {\n                        color: '#F9703E'\n                    },\n                    children: infos.info\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    styleSheet: {\n                        display: 'grid',\n                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',\n                        marginTop: '16px',\n                        gridGap: '16px'\n                    },\n                    children: items.map(function(param) {\n                        var title = param.title, content = param.content, id = param.id;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Post, {\n                            title: title,\n                            content: content,\n                            id: id\n                        }, id, false, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this));\n};\n_s(HomeScreen, \"greEOhn4pt2wQkyG/OpljI6tJ2U=\");\n_c = HomeScreen;\nfunction Post(param) {\n    var title = param.title, content = param.content, id = param.id;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        styleSheet: {\n            flexDirection: 'column',\n            border: '1px solid #F9703E',\n            padding: '16px',\n            boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',\n            transition: '.3s',\n            borderRadius: '4px',\n            hover: {\n                boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)'\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/posts/\".concat(id),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    tag: \"a\",\n                    variant: \"heading4\",\n                    styleSheet: {\n                        display: ' block',\n                        color: '#F9703E',\n                        marginBottom: '8px'\n                    },\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: [\n                    content.substring(0, 140),\n                    \"...\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this));\n}\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeScreen\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztRQUNILENBQUM7O3dGQUVBeEQsa0RBQVE7Z0JBQUMyRCxJQUFJLEVBQUcsQ0FBTyxTQUFLLE9BQUhQLEVBQUU7Z0JBQUlRLFFBQVE7c0dBQ3JDMUQsc0RBQUk7b0JBQ0h3QyxHQUFHLEVBQUMsQ0FBRztvQkFDUEQsT0FBTyxFQUFDLENBQVU7b0JBQ2xCZCxVQUFVLEVBQUUsQ0FBQzt3QkFBQ2tCLE9BQU8sRUFBRSxDQUFRO3dCQUFFRixLQUFLLEVBQUUsQ0FBUzt3QkFBRWtCLFlBQVksRUFBRSxDQUFLO29CQUFDLENBQUM7OEJBRXZFWCxLQUFLOzs7Ozs7Ozs7Ozt3RkFHVGhELHNEQUFJOztvQkFDRmlELE9BQU8sQ0FBQ1csU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHO29CQUFFLENBQzdCOzs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQztNQTdCUVIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZmlzdFBhZ2UgPSAxO1xuXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHM/cGFnZT0ke2Zpc3RQYWdlfWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVTY3JlZW4oeyBwb3N0cyB9KSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUocG9zdHMpO1xuICBjb25zdCBbaGFzTW9yZSwgc2V0SGFzTW9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMik7XG5cbiAgY29uc3QgaW5mb3MgPSB7XG4gICAgbm9tZTogJ0FsZXgnLFxuICAgIGluZm86ICdUaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgaG93IHRvIHVzZSBpbmZpbml0ZSBzY3JvbGwgYW5kIHN0YXRpYyBwYXRocyBpbiBOZXh0LmpzJyxcbiAgICBnaXRodWJVc2VyOiAnYWxleGRnb25jYWx2ZXMnLFxuICB9XG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jIChwYWdlTnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cz9wYWdlPSR7cGFnZU51bWJlcn1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgICBzZXRJdGVtcygocHJldkl0ZW1zKSA9PiBbLi4ucHJldkl0ZW1zLCAuLi5wb3N0c10pO1xuXG4gICAgaWYgKHBvc3RzLmxlbmd0aCA8IDEwKSB7XG4gICAgICBzZXRIYXNNb3JlKGZhbHNlKTtcbiAgICB9XG4gICAgc2V0UGFnZShwYWdlTnVtYmVyICsgMSk7XG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPEJveFxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgbWFyZ2luOiAnMzJweCBhdXRvJyxcbiAgICAgICAgbWF4V2lkdGg6ICc4MDBweCcsXG4gICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAnMTZweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICBkYXRhTGVuZ3RoPXtpdGVtcy5sZW5ndGh9XG4gICAgICAgIG5leHQ9eygpID0+IGZldGNoUG9zdHMocGFnZSl9XG4gICAgICAgIGhhc01vcmU9e2hhc01vcmV9XG4gICAgICAgIGxvYWRlcj17PGg0PkxvYWRpbmcuLi48L2g0Pn1cbiAgICAgID5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aW5mb3MuZ2l0aHViVXNlcn0ucG5nYH1cbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJzE1MHB4JyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICNGOTcwM0UnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgdmFyaWFudD1cImhlYWRpbmcxXCJcbiAgICAgICAgICB0YWc9XCJoMVwiXG4gICAgICAgICAgc3R5bGVTaGVldD17eyBjb2xvcjogJyNGOTcwM0UnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbmZvcy5ub21lfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgdmFyaWFudD1cImhlYWRpbmczXCJcbiAgICAgICAgICB0YWc9XCJoM1wiXG4gICAgICAgICAgc3R5bGVTaGVldD17eyBjb2xvcjogJyNGOTcwM0UnLCB9fVxuICAgICAgICA+XG4gICAgICAgICAge2luZm9zLmluZm99XG4gICAgICAgIDwvVGV4dD5cblxuICAgICAgICA8Qm94IHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMTZweCcsXG4gICAgICAgICAgZ3JpZEdhcDogJzE2cHgnLFxuICAgICAgICB9fT5cbiAgICAgICAgICB7aXRlbXMubWFwKCh7IHRpdGxlLCBjb250ZW50LCBpZCB9KSA9PiAoXG4gICAgICAgICAgICA8UG9zdCBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGNvbnRlbnQ9e2NvbnRlbnR9IGlkPXtpZH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0luZmluaXRlU2Nyb2xsPlxuXG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gUG9zdCh7IHRpdGxlLCBjb250ZW50LCBpZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNGOTcwM0UnLFxuICAgICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICAgIGJveFNoYWRvdzogJzFweCAxcHggNXB4IDAgcmdiYSgyNTUsNjksMCwwLjIpJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJy4zcycsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnMXB4IDFweCA1cHggNXB4IHJnYmEoMjU1LDY5LDAsMC4yKScsXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAgPE5leHRMaW5rIGhyZWY9e2AvcG9zdHMvJHtpZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICB0YWc9XCJhXCJcbiAgICAgICAgICB2YXJpYW50PVwiaGVhZGluZzRcIlxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3sgZGlzcGxheTogJyBibG9jaycsIGNvbG9yOiAnI0Y5NzAzRScsIG1hcmdpbkJvdHRvbTogJzhweCcgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9OZXh0TGluaz5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7Y29udGVudC5zdWJzdHJpbmcoMCwgMTQwKX0uLi5cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0TGluayIsIkJveCIsIlRleHQiLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5maW5pdGVTY3JvbGwiLCJIb21lU2NyZWVuIiwicG9zdHMiLCJpdGVtcyIsInNldEl0ZW1zIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlIiwic2V0UGFnZSIsImluZm9zIiwibm9tZSIsImluZm8iLCJnaXRodWJVc2VyIiwiZmV0Y2hQb3N0cyIsInBhZ2VOdW1iZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicHJldkl0ZW1zIiwibGVuZ3RoIiwic3R5bGVTaGVldCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJtYXhXaWR0aCIsInBhZGRpbmdIb3Jpem9udGFsIiwiZGF0YUxlbmd0aCIsIm5leHQiLCJsb2FkZXIiLCJoNCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidmFyaWFudCIsInRhZyIsImNvbG9yIiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpblRvcCIsImdyaWRHYXAiLCJtYXAiLCJ0aXRsZSIsImNvbnRlbnQiLCJpZCIsImtleSIsIlBvc3QiLCJwYWRkaW5nIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsImhvdmVyIiwiaHJlZiIsInBhc3NIcmVmIiwibWFyZ2luQm90dG9tIiwic3Vic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});