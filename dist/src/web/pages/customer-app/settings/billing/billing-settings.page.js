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
var BillingSettingsPage = /** @class */ (function (_super) {
    __extends(BillingSettingsPage, _super);
    function BillingSettingsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BillingSettingsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return BillingSettingsPage;
}(page_1.default));
var BillingSettings = new BillingSettingsPage;
exports.default = BillingSettings;
//# sourceMappingURL=billing-settings.page.js.map