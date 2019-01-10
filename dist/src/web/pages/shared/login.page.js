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
var helpers_1 = require("../../helpers/helpers");
var page_1 = require("./../page");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.Username = function () {
        return $(selectors_1.default.name('username'));
    };
    LoginPage.prototype.Password = function () {
        return $(selectors_1.default.name('password'));
    };
    LoginPage.prototype.ForgotPassword = function () {
        return $(selectors_1.default.linkText('Forgot your password?'));
    };
    LoginPage.prototype.LoginButton = function () {
        return $(selectors_1.default.elementWithCertainTextTag('button', 'Login'));
    };
    LoginPage.prototype.open = function () {
        _super.prototype.open.call(this, '/login');
    };
    LoginPage.prototype.logout = function () {
        _super.prototype.open.call(this, '/logout');
    };
    LoginPage.prototype.EmployerLogin = function () {
        this.Username().click();
        this.Username().addValue('adam.schaible+employer@gmail.com');
        this.Password().click();
        this.Password().addValue('TruSense#1234');
        this.LoginButton().click();
        helpers_1.default.WaitForPageLoad();
    };
    LoginPage.prototype.ExistingPassiveMonitoringUserLogin = function () {
        this.Username().click();
        this.Username().addValue('jgeary@openmotion.com');
        this.Password().click();
        this.Password().addValue('Trusense#1234');
        this.LoginButton().click();
        helpers_1.default.WaitForPageLoad();
    };
    LoginPage.prototype.ExistingHealthUserLogin = function () {
        this.Username().click();
        this.Username().addValue('jarrodgeary@gmail.com');
        this.Password().click();
        this.Password().addValue('Trusense#1234');
        this.LoginButton().click();
        helpers_1.default.WaitForPageLoad();
    };
    LoginPage.prototype.ManageAppLogin = function () {
        this.Username().click();
        this.Username().addValue('jgeary@racoindustries.com');
        this.Password().click();
        this.Password().addValue('Trusense#1234');
        this.LoginButton().click();
        helpers_1.default.WaitForPageLoad();
    };
    return LoginPage;
}(page_1.default));
exports.default = new LoginPage();
//# sourceMappingURL=login.page.js.map