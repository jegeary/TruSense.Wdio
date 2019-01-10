"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var chai_1 = require("chai");
var helpers_1 = require("../helpers/helpers");
describe('Login Screen', function () {
    context('when using invalid credentials', function () {
        it('should not allow me to log in', function () {
            helpers_1.default.getThroughIntroScreens();
            login_page_1.default.FillOutLoginForm('jarrod@geary.gov', 'Trusense#1234');
            var username = login_page_1.default.UserName().getText();
            var password = login_page_1.default.Password().getText();
            if (username !== 'jarrod@geary.gov' || password !== 'Trusense#1234') {
                browser.saveScreenshot('./../../errorShots/login-error');
            }
            login_page_1.default.TapLoginButton();
            // browser.pause(5000);
            // browser.waitUntil(() => browser.isExisting(help.LoaderLogo) === false);
            // tslint:disable-next-line:no-unused-expression
            chai_1.expect(login_page_1.default.InvalidCredentials().isExisting()).to.be.true;
        });
    });
    context('when using valid credentials', function () {
        it('should log me in', function () {
            login_page_1.default.UpdateCredentials('jarrodgeary@gmail.com', 'Trusense#1234');
            var username = login_page_1.default.UserName().getText();
            var password = login_page_1.default.Password().getText();
            if (username !== 'jarrodgeary@gmail.com' || password !== 'Trusense#1234') {
                browser.saveScreenshot('./../../errorShots/login-error');
            }
            login_page_1.default.TapLoginButton();
            browser.waitUntil(function () { return helpers_1.default.LoaderLogo().isExisting() === false; });
            // tslint:disable-next-line:no-unused-expression
            chai_1.expect(helpers_1.default.FabSelector().isEnabled()).to.be.true;
        });
    });
});
//# sourceMappingURL=login.spec.js.map