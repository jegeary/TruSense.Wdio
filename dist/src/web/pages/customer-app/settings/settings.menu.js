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
var SettingsMenu = /** @class */ (function (_super) {
    __extends(SettingsMenu, _super);
    function SettingsMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsMenu.prototype.AccountSetting = function () {
        return $("//*[@data-selenium='settings-menu-Account']");
    };
    SettingsMenu.prototype.BillingSetting = function () {
        return $("//*[@data-selenium='settings-menu-Billing']");
    };
    SettingsMenu.prototype.PeopleSetting = function () {
        return $("//*[@data-selenium='settings-menu-People']");
    };
    SettingsMenu.prototype.NotificationsSetting = function () {
        return $("//*[@data-selenium='settings-menu-Notifications']");
    };
    SettingsMenu.prototype.SafetyZonesSetting = function () {
        return $("//*[@data-selenium='settings-menu-Safety Zones']");
    };
    SettingsMenu.prototype.Logout = function () {
        return $("//*[@data-selenium='settings-menu-Logout']");
    };
    SettingsMenu.prototype.SettingsName = function () {
        return $("//*[@data-selenium='settings-name']");
    };
    SettingsMenu.prototype.SettingsUsername = function () {
        return $("//*[@data-selenium='settings-username']");
    };
    SettingsMenu.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return SettingsMenu;
}(page_1.default));
exports.default = new SettingsMenu();
//# sourceMappingURL=settings.menu.js.map