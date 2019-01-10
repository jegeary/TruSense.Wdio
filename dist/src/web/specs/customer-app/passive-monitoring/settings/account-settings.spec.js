"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../../../../pages/shared/login.page");
var chai_1 = require("chai");
var pulse_page_1 = require("../../../../pages/customer-app/pulse.page");
var user_app_menu_1 = require("../../../../pages/customer-app/user-app.menu");
var settings_menu_1 = require("../../../../pages/customer-app/settings/settings.menu");
var account_settings_page_1 = require("../../../../pages/customer-app/settings/account-settings.page");
var mocha_1 = require("mocha");
describe('Account Settings Page', function () {
    mocha_1.before(function () {
        login_page_1.default.open();
        login_page_1.default.Username().click();
        login_page_1.default.Username().addValue('jgeary@openmotion.com');
        login_page_1.default.Password().click();
        login_page_1.default.Password().addValue('Trusense#1234');
        login_page_1.default.LoginButton().click();
        pulse_page_1.default.open();
        pulse_page_1.default.LocalWeather().waitForExist();
    });
    context('when I click into the settings page', function () {
        mocha_1.before(function () {
            user_app_menu_1.default.MenuSettingElementXPath().click();
        });
        context('and click into the Account settings page', function () {
            mocha_1.before(function () {
                settings_menu_1.default.AccountSetting().click();
            });
            it('should allow me to edit my name', function () {
                account_settings_page_1.default.NameEdit().click();
                account_settings_page_1.default.FirstName().clearValue();
                account_settings_page_1.default.FirstName().setValue('Roberta');
                account_settings_page_1.default.LastName().clearValue();
                account_settings_page_1.default.LastName().setValue('Chimsman');
                account_settings_page_1.default.NameSave().click();
                browser.pause(3000);
                chai_1.expect(settings_menu_1.default.SettingsName().getText()).to.equal('Roberta Chimsman');
            });
            it('should allow me to edit my username');
            it('should allow me to edit my password');
            it('should allow me to edit my mobile number');
            it('should allow me to edit my gender');
            it('should allow me to edit my home phone number');
            it('should allow me to edit my address');
        });
    });
});
//# sourceMappingURL=account-settings.spec.js.map