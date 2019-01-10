"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var selectors_1 = require("../../helpers/selectors");
var page_1 = require("../page");
var TermsPage = /** @class */ (function (_super) {
    __extends(TermsPage, _super);
    function TermsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TermsPage.prototype.TermsContainer = function () {
        return $(selectors_1.default.id('license-scrollable'));
    };
    TermsPage.prototype.AcceptTermsCheckbox = function () {
        return $(selectors_1.default.id('acceptCheckbox'));
    };
    TermsPage.prototype.SubmitButton = function () {
        return $(selectors_1.default.elementWithPartialTextClass('btn-success', 'Submit'));
    };
    TermsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return TermsPage;
}(page_1.default));
var Terms = new TermsPage;
exports.default = Terms;
//# sourceMappingURL=terms.page.js.map