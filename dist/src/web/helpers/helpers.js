"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var selectors_1 = require("./selectors");
var login_page_1 = require("../pages/shared/login.page");
var pulse_page_1 = require("../pages/customer-app/pulse.page");
var Helpers = /** @class */ (function () {
    function Helpers() {
        this.emailNumber = this.randomNumber(1, 999);
    }
    Helpers.prototype.preloader = function () {
        return $(selectors_1.default.id('preloader'));
    };
    Helpers.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Helpers.prototype.SetupEnvironment = function (url) {
        browser.maximizeWindow();
        browser.url(url);
        this.WaitForPageLoad();
    };
    Helpers.prototype.LoginPassiveMonitoring = function () {
        login_page_1.default.open();
        login_page_1.default.ExistingPassiveMonitoringUserLogin();
        pulse_page_1.default.open();
        pulse_page_1.default.LocalWeather().waitForExist();
    };
    Helpers.prototype.WaitForPageLoad = function () {
        if ($(selectors_1.default.id('preloader')).isDisplayed()) {
            $(selectors_1.default.id('preloader')).waitForDisplayed(500, true);
        }
    };
    Helpers.prototype.VerifyUser = function () {
        // browser.newWindow(constants.LoginUrl);
    };
    return Helpers;
}());
var help = new Helpers();
exports.default = help;
//# sourceMappingURL=helpers.js.map