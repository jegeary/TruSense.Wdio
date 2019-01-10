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
var page_1 = require("../../page");
var AssociateSubscriptionCodePage = /** @class */ (function (_super) {
    __extends(AssociateSubscriptionCodePage, _super);
    function AssociateSubscriptionCodePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssociateSubscriptionCodePage.prototype.EnterCodesInput = function () {
        return $("//*[@data-selenium='subscription-code-text']");
    };
    AssociateSubscriptionCodePage.prototype.SubscriptionProductSelect = function () {
        return $("//*[@data-selenium='subscription-code-product']");
    };
    AssociateSubscriptionCodePage.prototype.SubscriptionCodePhoneNumber = function () {
        return $("//*[@data-selenium='subscription-code-phoneNumber']");
    };
    AssociateSubscriptionCodePage.prototype.SubscriptionCodeSim = function () {
        return $("//*[@data-selenium='subscription-code-sim']");
    };
    AssociateSubscriptionCodePage.prototype.SubscriptionCodeImei = function () {
        return $("//*[@data-selenium='subscription-code-imei']");
    };
    AssociateSubscriptionCodePage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return AssociateSubscriptionCodePage;
}(page_1.default));
var AssociateSubscriptionCode = new AssociateSubscriptionCodePage;
exports.default = AssociateSubscriptionCode;
//# sourceMappingURL=associate-subscription-codes.page.js.map