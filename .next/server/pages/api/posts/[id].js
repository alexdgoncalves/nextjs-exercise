"use strict";
(() => {
var exports = {};
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _dados_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);

function handler(req, res) {
    const { id  } = req.query;
    const post1 = _dados_json__WEBPACK_IMPORTED_MODULE_0__/* .posts.find */ .x.find((post)=>post.id === parseInt(id)
    );
    if (post1) {
        res.status(200).json(post1);
    } else {
        res.status(404).json({
            message: 'Post not found'
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [241], () => (__webpack_exec__(365)));
module.exports = __webpack_exports__;

})();