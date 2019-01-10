"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../../../helpers/constants");
var helpers_1 = require("../../../../helpers/helpers");
var user_app_menu_1 = require("../../../../pages/customer-app/user-app.menu");
var settings_menu_1 = require("../../../../pages/customer-app/settings/settings.menu");
var mocha_1 = require("mocha");
describe('People Settings Page', function () {
    mocha_1.before(function () {
        helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
        helpers_1.default.LoginPassiveMonitoring();
    });
    context('when I click into the settings page', function () {
        mocha_1.before(function () {
            user_app_menu_1.default.MenuSettingElementXPath().click();
        });
        context('and click into the People settings page', function () {
            mocha_1.before(function () {
                settings_menu_1.default.PeopleSetting().click();
            });
            it('should allow me to invite a new user');
            it('should allow me to edit primary person');
            it('should allow me to edit Administrators');
        });
    });
});
//# sourceMappingURL=people-settings.spec.js.map