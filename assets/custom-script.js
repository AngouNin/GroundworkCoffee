(function() {
var __webpack_modules__ = {
"./src/ts/main.ts": (function (__unused_webpack_module, exports, __webpack_require__) {
console.log('Hello Shopify!');
}),

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
})()

//# sourceMappingURL=custom-script.js.map