"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomeScreen),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "@skynexui/components"
var components_ = __webpack_require__(704);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-infinite-scroll-component"
const external_react_infinite_scroll_component_namespaceObject = require("react-infinite-scroll-component");
var external_react_infinite_scroll_component_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroll_component_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.js





async function getServerSideProps() {
    const firstPage = 1;
    const res = await fetch(`http://localhost:3000/api/posts?page=${firstPage}`);
    const posts = await res.json();
    return {
        props: {
            posts: posts
        }
    };
}
function HomeScreen({ posts  }) {
    const { 0: items , 1: setItems  } = (0,external_react_.useState)(posts);
    const { 0: hasMore , 1: setHasMore  } = (0,external_react_.useState)(true);
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(2);
    const infos = {
        nome: 'Alex',
        githubUser: 'alexdgoncalves'
    };
    const fetchPosts = async (pageNumber)=>{
        const res = await fetch(`http://localhost:3000/api/posts?page=${pageNumber}`);
        const newPosts = await res.json();
        setItems((prevItems)=>[
                ...prevItems,
                ...newPosts
            ]
        );
        if (newPosts.length < 10) {
            setHasMore(false);
        }
        setPage(pageNumber + 1);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_.Box, {
        styleSheet: {
            flexDirection: 'column',
            margin: '32px auto',
            maxWidth: '800px',
            paddingHorizontal: '16px'
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_infinite_scroll_component_default()), {
            dataLength: items.length,
            next: ()=>fetchPosts(page)
            ,
            hasMore: hasMore,
            loader: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: "Loading..."
            }),
            endMessage: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "End of list"
            }),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_.Image, {
                    src: `https://github.com/${infos.githubUser}.png`,
                    styleSheet: {
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        margin: '0 auto',
                        border: '2px solid #F9703E'
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                    variant: "heading1",
                    tag: "h1",
                    styleSheet: {
                        color: '#F9703E',
                        justifyContent: 'center'
                    },
                    children: infos.nome
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_.Box, {
                    styleSheet: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        marginTop: '16px',
                        gridGap: '16px'
                    },
                    children: items.map(({ title , content , id  })=>/*#__PURE__*/ jsx_runtime_.jsx(Post, {
                            title: title,
                            content: content,
                            id: id
                        }, id)
                    )
                })
            ]
        })
    }));
};
function Post({ title , content , id  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
        styleSheet: {
            flexDirection: 'column',
            border: '1px solid #F9703E',
            padding: '16px',
            boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
            transition: '.3s',
            borderRadius: '4px',
            hover: {
                boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)'
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/posts/${id}`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                    tag: "a",
                    variant: "heading4",
                    styleSheet: {
                        display: 'block',
                        color: '#F9703E',
                        marginBottom: '8px',
                        hover: {
                            textDecoration: 'underline'
                        },
                        cursor: 'pointer'
                    },
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                children: [
                    content.substring(0, 140),
                    "..."
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 704:
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 990:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(136)));
module.exports = __webpack_exports__;

})();