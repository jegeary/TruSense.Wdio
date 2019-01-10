"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var actions_1 = require("../helpers/actions");
var chai_1 = require("chai");
var helpers_1 = require("../helpers/helpers");
var tell_us_about_yourself_page_1 = require("../pages/tell-us-about-yourself.page");
var verify_email_page_1 = require("../pages/verify-email.page");
describe('Create New Account Flow', function () {
    context('When creating a new account', function () {
        it('should let me fill out registration form and get to point to verify my email', function () {
            helpers_1.default.getThroughIntroScreens();
            login_page_1.default.TapCreateNewAccountButton();
            //action.tap(AccountType.HealthAccount);
            //action.tap(AccountType.ContinueButton);
            tell_us_about_yourself_page_1.default.fillOutRegistrationForm();
            browser.pause(3000);
            // tslint:disable-next-line:no-unused-expression
            chai_1.expect(tell_us_about_yourself_page_1.default.ContinueButton().isEnabled()).to.be.true;
            //action.tap(TellUsAboutYourself.ContinueButton);
            // browser.pause(3000);
            browser.waitUntil(function () { return helpers_1.default.LoaderLogo().isExisting() === false; });
            // browser.pause(3000);
            chai_1.expect(verify_email_page_1.default.noEmailButton().isEnabled()).to.eql([true, true]);
        });
    });
    context('When user accidently enters wrong email at first', function () {
        it('should let user update email', function () {
            // action.ScrollDown(VerifyEmail.email, 500);
            verify_email_page_1.default.noEmailButton().waitForDisplayed();
            // action.tap(VerifyEmail.noEmailButton);
            browser.waitUntil(function () { return helpers_1.default.LoaderLogo().isExisting() === false; });
            // action.ScrollDown(VerifyEmail.doubleCheckYourEmail, 1000);
            verify_email_page_1.default.correctedEmail().clearValue();
            //  action.tap(VerifyEmail.correctedEmail);
            actions_1.default.sendKeys('EmailIsUpdated' + helpers_1.default.emailNumber + '@mytrusense.com');
            verify_email_page_1.default.resendEmail().waitForEnabled();
            verify_email_page_1.default.resendEmail().click();
            browser.waitUntil(function () { return verify_email_page_1.default.resendEmail().isExisting() === false; });
            chai_1.expect(verify_email_page_1.default.email().getText()).to.contain('EmailIsUpdated');
        });
    });
});
//# sourceMappingURL=create-new-account.spec.js.map