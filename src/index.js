"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = exports.helloWorld = void 0;
function helloWorld() {
    console.log('Hello World!');
}
exports.helloWorld = helloWorld;
/**
 * Sample namespace exported that leverages aliasing.
 */
var admin;
(function (admin) {
    var subnamespace;
    (function (subnamespace) {
    })(subnamespace = admin.subnamespace || (admin.subnamespace = {}));
})(admin = exports.admin || (exports.admin = {}));
//# sourceMappingURL=index.js.map