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
var CreateAccountPage = /** @class */ (function (_super) {
    __extends(CreateAccountPage, _super);
    function CreateAccountPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateAccountPage.prototype.ImageUploadButton = function () {
        return $("//*[@data-selenium='pulse-user-imageUpload']");
    };
    CreateAccountPage.prototype.FirstName = function () {
        return $(selectors_1.default.name('firstName'));
    };
    CreateAccountPage.prototype.LastName = function () {
        return $(selectors_1.default.name('lastName'));
    };
    CreateAccountPage.prototype.MobileNumber = function () {
        return $(selectors_1.default.name('mobileNumber'));
    };
    CreateAccountPage.prototype.EmailAddress = function () {
        return $(selectors_1.default.name('emailAddress'));
    };
    CreateAccountPage.prototype.Password = function () {
        return $(selectors_1.default.name('password'));
    };
    CreateAccountPage.prototype.ConfirmPassword = function () {
        return $(selectors_1.default.name('confirmPassword'));
    };
    CreateAccountPage.prototype.FillOutForm = function () {
        // browser.click(this.FirstName).setValue('Testing');
        // browser.click(this.LastName).setValue('TruSense');
        // browser.click(this.MobileNumber).setValue('5005550006');
        // browser.click(this.EmailAddress).setValue('Testing' + help.emailNumber + '@trusense.com');
        // browser.click(this.Password).setValue('Trusense#1234')
        // browser.click(this.ConfirmPassword).setValue('Trusense#1234');
    };
    CreateAccountPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return CreateAccountPage;
}(page_1.default));
var CreateAccount = new CreateAccountPage;
exports.default = CreateAccount;
//# sourceMappingURL=create-account.page.js.map