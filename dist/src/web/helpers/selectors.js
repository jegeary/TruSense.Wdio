"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Selectors = /** @class */ (function () {
    function Selectors() {
    }
    Selectors.prototype.linkText = function (text) { return '=' + text; };
    Selectors.prototype.partialLinkText = function (text) { return '*=' + text; };
    Selectors.prototype.elementWithCertainTextTag = function (tag, text) { return tag + '=' + text; };
    Selectors.prototype.elementWithCertainTextId = function (id, text) { return '#' + id + '=' + text; };
    Selectors.prototype.elementWithCertainTextClass = function (className, text) { return '.' + className + '=' + text; };
    Selectors.prototype.elementWithPartialTextTag = function (tag, text) { return tag + '*=' + text; };
    Selectors.prototype.elementWithPartialTextId = function (id, text) { return '#' + id + '*=' + text; };
    Selectors.prototype.elementWithPartialTextClass = function (className, text) { return '.' + className + '*=' + text; };
    Selectors.prototype.name = function (name) { return '[id="' + name + '"]'; };
    Selectors.prototype.id = function (id) { return '[id="' + id + '"]'; };
    Selectors.prototype.class = function (className) { return '[class="' + className + '"]'; };
    Selectors.prototype.tag = function (tag) { return '<' + tag + '>'; };
    Selectors.prototype.partialClassName = function (className) { return '[class*="' + className + '"]'; };
    return Selectors;
}());
var Selector = new Selectors();
exports.default = Selector;
//# sourceMappingURL=selectors.js.map