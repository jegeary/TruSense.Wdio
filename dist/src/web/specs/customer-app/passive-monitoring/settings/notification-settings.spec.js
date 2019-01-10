"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../../../helpers/constants");
var helpers_1 = require("../../../../helpers/helpers");
var user_app_menu_1 = require("../../../../pages/customer-app/user-app.menu");
var settings_menu_1 = require("../../../../pages/customer-app/settings/settings.menu");
var mocha_1 = require("mocha");
describe('Notification Settings Page', function () {
    mocha_1.before(function () {
        helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
        helpers_1.default.LoginPassiveMonitoring();
    });
    context('when I click into the settings page', function () {
        mocha_1.before(function () {
            user_app_menu_1.default.MenuSettingElementXPath().click();
        });
        context('and click into the Notification settings page', function () {
            mocha_1.before(function () {
                settings_menu_1.default.NotificationsSetting().click();
            });
            it('should allow me to switch toggles');
            context('when adding users to', function () {
                context('text notifications', function () {
                    it('should allow me to add existing users');
                    it('should allow me to add a new user');
                });
                context('email notifications', function () {
                    it('should allow me to add existing users');
                    it('should allow me to add a new user');
                });
                context('call notifications', function () {
                    it('should allow me to add existing users');
                    it('should allow me to add a new user');
                });
                context('push notifications', function () {
                    it('should allow me to add existing users');
                    it('should allow me to add a new user');
                });
            });
        });
    });
});
//# sourceMappingURL=notification-settings.spec.js.map