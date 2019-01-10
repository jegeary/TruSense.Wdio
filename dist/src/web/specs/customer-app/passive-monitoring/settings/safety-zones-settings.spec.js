"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../../../helpers/constants");
var helpers_1 = require("../../../../helpers/helpers");
var user_app_menu_1 = require("../../../../pages/customer-app/user-app.menu");
var settings_menu_1 = require("../../../../pages/customer-app/settings/settings.menu");
var mocha_1 = require("mocha");
describe('Safty Zones Settings Page', function () {
    mocha_1.before(function () {
        helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
        helpers_1.default.LoginPassiveMonitoring();
    });
    context('when I click into the settings page', function () {
        mocha_1.before(function () {
            user_app_menu_1.default.MenuSettingElementXPath().click();
        });
        context('and click into the Safety zones settings page', function () {
            mocha_1.before(function () {
                settings_menu_1.default.SafetyZonesSetting().click();
            });
            it('should allow me to show and hide maps');
            it('should allow me to toggle notifications');
            it('should allow me to add a new safety zone');
            it('should allow me to search the maps');
        });
    });
});
//# sourceMappingURL=safety-zones-settings.spec.js.map