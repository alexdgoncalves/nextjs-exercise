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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomeScreen; }\n/* harmony export */ });\n/* harmony import */ var C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-infinite-scroll-component */ \"./node_modules/react-infinite-scroll-component/dist/index.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction HomeScreen(param1) {\n    var posts1 = param1.posts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(posts1), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), hasMore = ref1[0], setHasMore = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1), page1 = ref2[0], setPage = ref2[1];\n    var infos = {\n        nome: 'Alex',\n        githubUser: 'alexdgoncalves'\n    };\n    var fetchPosts = function() {\n        var _ref = _asyncToGenerator(C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(pageNumber) {\n            var posts;\n            return C_NEXT_nextjs_2_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://localhost:3000/api/posts?page=\".concat(pageNumber)).then(function(res) {\n                            return res.json();\n                        });\n                    case 2:\n                        posts = _ctx.sent;\n                        setItems(function(prevItems) {\n                            return _toConsumableArray(prevItems).concat(_toConsumableArray(posts));\n                        });\n                        if (posts.length < 10) {\n                            setHasMore(false);\n                        }\n                        setPage(function(page) {\n                            console.log(page);\n                            return page + 1;\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPosts(pageNumber) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        dataLength: items.length,\n        next: function() {\n            return fetchPosts(page1);\n        },\n        hasMore: hasMore,\n        loader: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n            children: \"Loading...\"\n        }, void 0, false, void 0, void 0),\n        endMessage: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"End of list\"\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            styleSheet: {\n                flexDirection: 'column',\n                margin: '32px auto',\n                maxWidth: '800px',\n                paddingHorizontal: '16px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                    src: \"https://github.com/\".concat(infos.githubUser, \".png\"),\n                    styleSheet: {\n                        width: '150px',\n                        height: '150px',\n                        borderRadius: '50%',\n                        margin: '0 auto',\n                        border: '2px solid #F9703E'\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    variant: \"heading1\",\n                    tag: \"h1\",\n                    styleSheet: {\n                        color: '#F9703E',\n                        justifyContent: 'center'\n                    },\n                    children: infos.nome\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    styleSheet: {\n                        display: 'grid',\n                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',\n                        marginTop: '16px',\n                        gridGap: '16px'\n                    },\n                    children: items.map(function(param) {\n                        var title = param.title, content = param.content, id = param.id;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Post, {\n                            title: title,\n                            content: content,\n                            id: id\n                        }, id, false, {\n                            fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this));\n};\n_s(HomeScreen, \"uwinNiy9PEsfRrnoCkVZbpt3+sY=\");\n_c = HomeScreen;\nfunction Post(param) {\n    var title = param.title, content = param.content, id = param.id;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        styleSheet: {\n            flexDirection: 'column',\n            border: '1px solid #F9703E',\n            padding: '16px',\n            boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',\n            transition: '.3s',\n            borderRadius: '4px',\n            hover: {\n                boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)'\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"posts/\".concat(id),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    tag: \"a\",\n                    variant: \"heading4\",\n                    styleSheet: {\n                        display: ' block',\n                        color: '#F9703E',\n                        marginBottom: '8px'\n                    },\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: [\n                    content.substring(0, 140),\n                    \"...\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NEXT\\\\nextjs-2.4\\\\pages\\\\index.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this));\n}\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeScreen\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQU0sUUFBSyxPQUFIUCxFQUFFO2dCQUFJUSxRQUFRO3NHQUNwQzdELHNEQUFJO29CQUNIMkMsR0FBRyxFQUFDLENBQUc7b0JBQ1BELE9BQU8sRUFBQyxDQUFVO29CQUNsQlYsVUFBVSxFQUFFLENBQUM7d0JBQUNjLE9BQU8sRUFBRSxDQUFRO3dCQUFFRixLQUFLLEVBQUUsQ0FBUzt3QkFBRWtCLFlBQVksRUFBRSxDQUFLO29CQUFDLENBQUM7OEJBRXZFWCxLQUFLOzs7Ozs7Ozs7Ozt3RkFHVG5ELHNEQUFJOztvQkFDRm9ELE9BQU8sQ0FBQ1csU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHO29CQUFFLENBQzdCOzs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQztNQTdCUVIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZmlzdFBhZ2UgPSAxO1xuXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHM/cGFnZT0ke2Zpc3RQYWdlfWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVTY3JlZW4oeyBwb3N0cyB9KSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUocG9zdHMpO1xuICBjb25zdCBbaGFzTW9yZSwgc2V0SGFzTW9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgaW5mb3MgPSB7XG4gICAgbm9tZTogJ0FsZXgnLFxuICAgIGdpdGh1YlVzZXI6ICdhbGV4ZGdvbmNhbHZlcycsXG4gIH1cblxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKHBhZ2VOdW1iZXIpID0+IHtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzP3BhZ2U9JHtwYWdlTnVtYmVyfWApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAgIHNldEl0ZW1zKChwcmV2SXRlbXMpID0+IFsuLi5wcmV2SXRlbXMsIC4uLnBvc3RzXSk7XG5cbiAgICBpZiAocG9zdHMubGVuZ3RoIDwgMTApIHtcbiAgICAgIHNldEhhc01vcmUoZmFsc2UpO1xuICAgIH1cbiAgICBzZXRQYWdlKChwYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwYWdlKTtcbiAgICAgIHJldHVybiBwYWdlICsgMTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEluZmluaXRlU2Nyb2xsXG4gICAgICBkYXRhTGVuZ3RoPXtpdGVtcy5sZW5ndGh9XG4gICAgICBuZXh0PXsoKSA9PiBmZXRjaFBvc3RzKHBhZ2UpfVxuICAgICAgaGFzTW9yZT17aGFzTW9yZX1cbiAgICAgIGxvYWRlcj17PGg0PkxvYWRpbmcuLi48L2g0Pn1cbiAgICAgIGVuZE1lc3NhZ2U9ezxwPkVuZCBvZiBsaXN0PC9wPn1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICBtYXJnaW46ICczMnB4IGF1dG8nLFxuICAgICAgICAgIG1heFdpZHRoOiAnODAwcHgnLFxuICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAnMTZweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2luZm9zLmdpdGh1YlVzZXJ9LnBuZ2B9XG4gICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxNTBweCcsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjRjk3MDNFJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHZhcmlhbnQ9XCJoZWFkaW5nMVwiXG4gICAgICAgICAgdGFnPVwiaDFcIlxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3sgY29sb3I6ICcjRjk3MDNFJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aW5mb3Mubm9tZX1cbiAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgIDxCb3ggc3R5bGVTaGVldD17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxNnB4JyxcbiAgICAgICAgICBncmlkR2FwOiAnMTZweCcsXG4gICAgICAgIH19PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKHsgdGl0bGUsIGNvbnRlbnQsIGlkIH0pID0+IChcbiAgICAgICAgICAgIDxQb3N0IGtleT17aWR9IHRpdGxlPXt0aXRsZX0gY29udGVudD17Y29udGVudH0gaWQ9e2lkfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gIClcbn1cblxuZnVuY3Rpb24gUG9zdCh7IHRpdGxlLCBjb250ZW50LCBpZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNGOTcwM0UnLFxuICAgICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICAgIGJveFNoYWRvdzogJzFweCAxcHggNXB4IDAgcmdiYSgyNTUsNjksMCwwLjIpJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJy4zcycsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnMXB4IDFweCA1cHggNXB4IHJnYmEoMjU1LDY5LDAsMC4yKScsXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAgPE5leHRMaW5rIGhyZWY9e2Bwb3N0cy8ke2lkfWB9IHBhc3NIcmVmPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHRhZz1cImFcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJoZWFkaW5nNFwiXG4gICAgICAgICAgc3R5bGVTaGVldD17eyBkaXNwbGF5OiAnIGJsb2NrJywgY29sb3I6ICcjRjk3MDNFJywgbWFyZ2luQm90dG9tOiAnOHB4JyB9fVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L05leHRMaW5rPlxuICAgICAgPFRleHQ+XG4gICAgICAgIHtjb250ZW50LnN1YnN0cmluZygwLCAxNDApfS4uLlxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5leHRMaW5rIiwiQm94IiwiVGV4dCIsIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbmZpbml0ZVNjcm9sbCIsIkhvbWVTY3JlZW4iLCJwb3N0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJoYXNNb3JlIiwic2V0SGFzTW9yZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5mb3MiLCJub21lIiwiZ2l0aHViVXNlciIsImZldGNoUG9zdHMiLCJwYWdlTnVtYmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInByZXZJdGVtcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhTGVuZ3RoIiwibmV4dCIsImxvYWRlciIsImg0IiwiZW5kTWVzc2FnZSIsInAiLCJzdHlsZVNoZWV0IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsIm1heFdpZHRoIiwicGFkZGluZ0hvcml6b250YWwiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInZhcmlhbnQiLCJ0YWciLCJjb2xvciIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW5Ub3AiLCJncmlkR2FwIiwibWFwIiwidGl0bGUiLCJjb250ZW50IiwiaWQiLCJrZXkiLCJQb3N0IiwicGFkZGluZyIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJob3ZlciIsImhyZWYiLCJwYXNzSHJlZiIsIm1hcmdpbkJvdHRvbSIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});