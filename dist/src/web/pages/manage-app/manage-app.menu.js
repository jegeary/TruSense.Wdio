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
var ManageAppMenu = /** @class */ (function (_super) {
    __extends(ManageAppMenu, _super);
    function ManageAppMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManageAppMenu.prototype.Orders = function () {
        return $("//*[@data-selenium='manage-menu-Orders']");
    };
    ManageAppMenu.prototype.Homes = function () {
        return $("//*[@data-selenium='manage-menu-Homes']");
    };
    ManageAppMenu.prototype.Dashboard = function () {
        return $("//*[@data-selenium='manage-menu-Dashboard']");
    };
    ManageAppMenu.prototype.Subscriptions = function () {
        return $("//*[@data-selenium='manage-menu-Subscription Codes']");
    };
    ManageAppMenu.prototype.Organizations = function () {
        return $("//*[@data-selenium='manage-menu-Organizations']");
    };
    ManageAppMenu.prototype.People = function () {
        return $(selectors_1.default.linkText('People'));
    };
    ManageAppMenu.prototype.Logout = function () {
        return $(selectors_1.default.linkText('Logout'));
    };
    ManageAppMenu.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return ManageAppMenu;
}(page_1.default));
exports.default = ManageAppMenu;
//# sourceMappingURL=manage-app.menu.js.map