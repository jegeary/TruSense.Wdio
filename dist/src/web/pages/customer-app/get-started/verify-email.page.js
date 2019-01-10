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
var selectors_1 = require("../../../helpers/selectors");
var page_1 = require("../../page");
var VerifyEmailPage = /** @class */ (function (_super) {
    __extends(VerifyEmailPage, _super);
    function VerifyEmailPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerifyEmailPage.prototype.ResendEmailButton = function () {
        return $(selectors_1.default.class('btn-success'));
    };
    VerifyEmailPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return VerifyEmailPage;
}(page_1.default));
var VerifyEmail = new VerifyEmailPage;
exports.default = VerifyEmail;
//# sourceMappingURL=verify-email.page.js.map