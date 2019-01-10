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
var BillingPage = /** @class */ (function (_super) {
    __extends(BillingPage, _super);
    function BillingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BillingPage.prototype.Address = function () {
        return $(selectors_1.default.name('address1'));
    };
    BillingPage.prototype.City = function () {
        return $(selectors_1.default.name('city'));
    };
    BillingPage.prototype.State = function () {
        return $(selectors_1.default.name('state'));
    };
    BillingPage.prototype.PostalCode = function () {
        return $(selectors_1.default.name('postalCode'));
    };
    BillingPage.prototype.CardName = function () {
        return $(selectors_1.default.name('cardName'));
    };
    BillingPage.prototype.CardNumber = function () {
        return $(selectors_1.default.name('cardNumber'));
    };
    BillingPage.prototype.CardCvc = function () {
        return $(selectors_1.default.name('cvc'));
    };
    BillingPage.prototype.ExpirationMonth = function () {
        return $(selectors_1.default.name('expirationMonth'));
    };
    BillingPage.prototype.ExpirationYear = function () {
        return $(selectors_1.default.name('expirationYear'));
    };
    BillingPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return BillingPage;
}(page_1.default));
exports.default = new BillingPage();
//# sourceMappingURL=billing.page.js.map