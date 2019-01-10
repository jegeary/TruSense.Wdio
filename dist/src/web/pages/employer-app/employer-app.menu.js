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
var EmployerAppMenu = /** @class */ (function (_super) {
    __extends(EmployerAppMenu, _super);
    function EmployerAppMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmployerAppMenu.prototype.Dashboard = function () {
        return $("//*[@data-selenium='manage-menu-Dashboard']");
    };
    EmployerAppMenu.prototype.Account = function () {
        return $("//*[@data-selenium='manage-menu-Account']");
    };
    EmployerAppMenu.prototype.Members = function () {
        return $("//*[@data-selenium='manage-menu-Members']");
    };
    EmployerAppMenu.prototype.Goals = function () {
        return $("//*[@data-selenium='manage-menu-Goals']");
    };
    EmployerAppMenu.prototype.Logout = function () {
        return $(selectors_1.default.linkText('Logout'));
    };
    EmployerAppMenu.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return EmployerAppMenu;
}(page_1.default));
exports.default = new EmployerAppMenu();
//# sourceMappingURL=employer-app.menu.js.map