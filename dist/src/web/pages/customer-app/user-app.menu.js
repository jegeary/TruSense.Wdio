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
var page_1 = require("../page");
var UserAppMenu = /** @class */ (function (_super) {
    __extends(UserAppMenu, _super);
    function UserAppMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserAppMenu.prototype.MenuSettingElementXPath = function () {
        return $("//*[@data-selenium='menu-Settings']");
    };
    UserAppMenu.prototype.MenuPulseElementXPath = function () {
        return $("//*[@data-selenium='menu-Pulse']");
    };
    UserAppMenu.prototype.MenuTimelineElementXPath = function () {
        return $("//*[@data-selenium='menu-Activity']");
    };
    UserAppMenu.prototype.MenuTrendsElementXPath = function () {
        return $("//*[@data-selenium='menu-Trends']");
    };
    UserAppMenu.prototype.MenuHomeElementXPath = function () {
        return $("//*[@data-selenium='menu-Home']");
    };
    UserAppMenu.prototype.MenuGpsElementXPath = function () {
        return $("//*[@data-selenium='menu-GPS']");
    };
    UserAppMenu.prototype.MenuHealthElementXPath = function () {
        return $("//*[@data-selenium='menu-Health']");
    };
    UserAppMenu.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return UserAppMenu;
}(page_1.default));
exports.default = new UserAppMenu();
//# sourceMappingURL=user-app.menu.js.map