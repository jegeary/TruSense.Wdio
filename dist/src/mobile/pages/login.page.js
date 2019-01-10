"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var android_selectors_1 = require("../helpers/android-selectors");
var class_types_1 = require("../helpers/class-types");
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.EditTextSelector = android_selectors_1.default.byClassName(class_types_1.default.Textbox);
        this.ShowPassword = android_selectors_1.default.byClassName(class_types_1.default.Image) + android_selectors_1.default.instanceNumber(1);
    }
    LoginPage.prototype.Inputs = function () {
        return $$(this.EditTextSelector);
    };
    LoginPage.prototype.UserName = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(0));
    };
    LoginPage.prototype.Password = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(1));
    };
    LoginPage.prototype.LoginButton = function () {
        return $(android_selectors_1.default.byText('LOGIN'));
    };
    LoginPage.prototype.ForgotPasswordLink = function () {
        return $(android_selectors_1.default.byResourceId('forgotPasswordLink'));
    };
    LoginPage.prototype.CreateNewAccountButton = function () {
        return $(android_selectors_1.default.byText('CREATE A NEW ACCOUNT') + android_selectors_1.default.instanceNumber(0));
    };
    LoginPage.prototype.InvalidCredentials = function () {
        return $(android_selectors_1.default.byText('Invalid username or password'));
    };
    // ForgotPasswordPage
    LoginPage.prototype.Email = function () {
        return $(android_selectors_1.default.byClassName(class_types_1.default.Textbox));
    };
    LoginPage.prototype.ResetPasswordButton = function () {
        return $(android_selectors_1.default.byText('RESET PASSWORD'));
    };
    LoginPage.prototype.ForgotPassword = function (email) {
        this.ForgotPasswordLink().click();
        // TODO: "Fix Actions"
        // this.Email.tap();
        //action.sendKeys(email);
        this.ResetPasswordButton().click();
    };
    LoginPage.prototype.TapCreateNewAccountButton = function () {
        this.CreateNewAccountButton().click();
    };
    LoginPage.prototype.FillOutLoginForm = function (username, password) {
        // action.tap(this.UserName);
        // action.sendKeys(username);
        // action.tap(this.Password);
        // action.sendKeys(password);
        // action.tap(this.ShowPassword);
    };
    LoginPage.prototype.UpdateCredentials = function (username, password) {
        //  action.tap(this.ShowPassword);
        //  browser.clearValue(this.UserName);
        //  browser.clearValue(this.Password);
        //  this.FillOutLoginForm(username, password);
    };
    LoginPage.prototype.TapLoginButton = function () {
        //  action.tap(this.LoginButton);
    };
    return LoginPage;
}());
var Login = new LoginPage;
exports.default = Login;
//# sourceMappingURL=login.page.js.map