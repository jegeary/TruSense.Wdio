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
var GetStartedPage = /** @class */ (function (_super) {
    __extends(GetStartedPage, _super);
    function GetStartedPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetStartedPage.prototype.CreateAccountButton = function () {
        return $(selectors_1.default.partialClassName('btn-success'));
    };
    GetStartedPage.prototype.LoginLink = function () {
        return $(selectors_1.default.linkText('Login'));
    };
    GetStartedPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return GetStartedPage;
}(page_1.default));
var GetStarted = new GetStartedPage;
exports.default = GetStarted;
//# sourceMappingURL=get-started.page.js.map