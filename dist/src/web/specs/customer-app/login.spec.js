"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../../pages/shared/login.page");
var chai_1 = require("chai");
var pulse_page_1 = require("../../pages/customer-app/pulse.page");
var constants_1 = require("../../helpers/constants");
var helpers_1 = require("../../helpers/helpers");
describe('Login Screen', function () {
    context('when using valid passive monitoring credentials', function () {
        it('should allow me to log in', function () {
            helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
            helpers_1.default.LoginPassiveMonitoring();
            chai_1.expect(pulse_page_1.default.LocalWeather().isExisting()).to.eq(true);
        });
    });
    context('when using valid health credentials', function () {
        it('should allow me to log in', function () {
            helpers_1.default.SetupEnvironment(constants_1.default.LogoutUrl);
            login_page_1.default.ExistingHealthUserLogin();
            chai_1.expect(pulse_page_1.default.LocalWeather().isExisting()).to.eq(true);
        });
    });
});
//# sourceMappingURL=login.spec.js.map