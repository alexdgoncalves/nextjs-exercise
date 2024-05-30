"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _dados_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);

function handler(req, rest) {
    const { page  } = req.query;
    const itemsPerPage = 10;
    const start = itemsPerPage * (page - 1);
    const end = itemsPerPage * page;
    const data = _dados_json__WEBPACK_IMPORTED_MODULE_0__/* .posts.slice */ .x.slice(start, end);
    rest.status(200).json(data);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [241], () => (__webpack_exec__(267)));
module.exports = __webpack_exports__;

})();