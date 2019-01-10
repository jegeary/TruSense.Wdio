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
var SubscriptionPage = /** @class */ (function (_super) {
    __extends(SubscriptionPage, _super);
    function SubscriptionPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionPage.prototype.SubscriptionCodeInput = function () {
        return $(selectors_1.default.name('subscriptionCode'));
    };
    SubscriptionPage.prototype.ContinueButton = function () {
        return $(selectors_1.default.class('btn-success'));
    };
    SubscriptionPage.prototype.DeviceImage = function () {
        return $(selectors_1.default.tag('img'));
    };
    SubscriptionPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return SubscriptionPage;
}(page_1.default));
var Subscription = new SubscriptionPage;
exports.default = Subscription;
//# sourceMappingURL=subscription.page.js.map