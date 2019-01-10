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
var selectors_1 = require("../../../../helpers/selectors");
var page_1 = require("../../../page");
var HubTroubleshootingPage = /** @class */ (function (_super) {
    __extends(HubTroubleshootingPage, _super);
    function HubTroubleshootingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HubTroubleshootingPage.prototype.HubUnlockCodeInput = function () {
        return $("//*[@data-selenium='hub-unlock-code']");
    };
    HubTroubleshootingPage.prototype.CurrentHubCode = function () {
        return $(selectors_1.default.class('unlock-code'));
    };
    HubTroubleshootingPage.prototype.RetryActivationButton = function () {
        return $(selectors_1.default.class('next'));
    };
    HubTroubleshootingPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return HubTroubleshootingPage;
}(page_1.default));
exports.default = new HubTroubleshootingPage();
//# sourceMappingURL=hub-troubleshooting.page.js.map