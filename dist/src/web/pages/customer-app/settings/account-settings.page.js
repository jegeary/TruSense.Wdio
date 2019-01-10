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
var AccountSettingsPage = /** @class */ (function (_super) {
    __extends(AccountSettingsPage, _super);
    function AccountSettingsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Name
    AccountSettingsPage.prototype.NameEdit = function () {
        return $("//*[@data-selenium='account-name-edit']");
    };
    AccountSettingsPage.prototype.NameClose = function () {
        return $("//*[@data-selenium='account-name-close']");
    };
    AccountSettingsPage.prototype.NameSave = function () {
        return $("//*[@data-selenium='account-name-save']");
    };
    AccountSettingsPage.prototype.NameCancel = function () {
        return $("//*[@data-selenium='account-name-cancel']");
    };
    AccountSettingsPage.prototype.FirstName = function () {
        return $(selectors_1.default.id('firstName'));
    };
    AccountSettingsPage.prototype.LastName = function () {
        return $(selectors_1.default.id('lastName'));
    };
    // Username
    AccountSettingsPage.prototype.UsernameEdit = function () {
        return $("//*[@data-selenium='account-username-edit']");
    };
    AccountSettingsPage.prototype.UsernameClose = function () {
        return $("//*[@data-selenium='account-username-close']");
    };
    AccountSettingsPage.prototype.UsernameSave = function () {
        return $("//*[@data-selenium='account-username-save']");
    };
    AccountSettingsPage.prototype.UsernameCancel = function () {
        return $("//*[@data-selenium='account-username-cancel']");
    };
    AccountSettingsPage.prototype.Username = function () {
        return $(selectors_1.default.id('username'));
    };
    AccountSettingsPage.prototype.Password = function () {
        return $(selectors_1.default.id('password'));
    };
    // Password
    AccountSettingsPage.prototype.PasswordEdit = function () {
        return $("//*[@data-selenium='account-password-edit']");
    };
    AccountSettingsPage.prototype.PasswordClose = function () {
        return $("//*[@data-selenium='account-password-close']");
    };
    AccountSettingsPage.prototype.PasswordSave = function () {
        return $("//*[@data-selenium='account-password-save']");
    };
    AccountSettingsPage.prototype.PasswordCancel = function () {
        return $("//*[@data-selenium='account-password-cancel']");
    };
    AccountSettingsPage.prototype.NewPassword = function () {
        return $(selectors_1.default.id('newPassword'));
    };
    AccountSettingsPage.prototype.ConfirmNewPassword = function () {
        return $(selectors_1.default.id('confirmNewPassword'));
    };
    AccountSettingsPage.prototype.ConfirmPassword = function () {
        return $(selectors_1.default.id('confirmPassword'));
    };
    // Mobile
    AccountSettingsPage.prototype.MobileEdit = function () {
        return $("//*[@data-selenium='account-mobile-edit']");
    };
    AccountSettingsPage.prototype.MobileClose = function () {
        return $("//*[@data-selenium='account-mobile-close']");
    };
    AccountSettingsPage.prototype.MobileSave = function () {
        return $("//*[@data-selenium='account-mobile-save']");
    };
    AccountSettingsPage.prototype.MobileCancel = function () {
        return $("//*[@data-selenium='account-mobile-cancel']");
    };
    AccountSettingsPage.prototype.MobileNumber = function () {
        return $(selectors_1.default.name('mobileNumber'));
    };
    // Landline
    AccountSettingsPage.prototype.PhoneEdit = function () {
        return $("//*[@data-selenium='account-phone-edit']");
    };
    AccountSettingsPage.prototype.PhoneClose = function () {
        return $("//*[@data-selenium='account-phone-close']");
    };
    AccountSettingsPage.prototype.PhoneSave = function () {
        return $("//*[@data-selenium='account-phone-save']");
    };
    AccountSettingsPage.prototype.PhoneCancel = function () {
        return $("//*[@data-selenium='account-phone-cancel']");
    };
    AccountSettingsPage.prototype.Landline = function () {
        return $(selectors_1.default.name('phoneNumber'));
    };
    // Address
    AccountSettingsPage.prototype.AddressEdit = function () {
        return $("//*[@data-selenium='account-address-edit']");
    };
    AccountSettingsPage.prototype.AddressClose = function () {
        return $("//*[@data-selenium='account-address-close']");
    };
    AccountSettingsPage.prototype.AddressSave = function () {
        return $("//*[@data-selenium='account-address-save']");
    };
    AccountSettingsPage.prototype.AddressCancel = function () {
        return $("//*[@data-selenium='account-address-cancel']");
    };
    AccountSettingsPage.prototype.HomeAddress = function () {
        return $(selectors_1.default.name('address'));
    };
    AccountSettingsPage.prototype.GoogleAddress = function () {
        return $(selectors_1.default.class('pac-item'));
    };
    AccountSettingsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return AccountSettingsPage;
}(page_1.default));
var AccountSettings = new AccountSettingsPage;
exports.default = AccountSettings;
//# sourceMappingURL=account-settings.page.js.map