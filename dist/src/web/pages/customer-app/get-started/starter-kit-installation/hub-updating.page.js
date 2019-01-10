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
var HubUpdatingPage = /** @class */ (function (_super) {
    __extends(HubUpdatingPage, _super);
    function HubUpdatingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HubUpdatingPage.prototype.HubUpdatingText = function () {
        return $(selectors_1.default.class('intro'));
    };
    HubUpdatingPage.prototype.HubUpdatedText = function () {
        return $(selectors_1.default.class('step-title'));
    };
    HubUpdatingPage.prototype.ContinueButton = function () {
        return $(selectors_1.default.tag('button'));
    };
    HubUpdatingPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return HubUpdatingPage;
}(page_1.default));
exports.default = new HubUpdatingPage();
//# sourceMappingURL=hub-updating.page.js.map