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
var page_1 = require("../../../page");
var HubActivationPage = /** @class */ (function (_super) {
    __extends(HubActivationPage, _super);
    function HubActivationPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HubActivationPage.prototype.HubUnlockCodeInput = function () {
        return $("//*[@data-selenium='hub-unlock-code']");
    };
    HubActivationPage.prototype.InstallationContinueButton = function () {
        return $("//*[@data-selenium='installation-continue']");
    };
    HubActivationPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return HubActivationPage;
}(page_1.default));
exports.default = new HubActivationPage();
//# sourceMappingURL=hub-activation.page.js.map