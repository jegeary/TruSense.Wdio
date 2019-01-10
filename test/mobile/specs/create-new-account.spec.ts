import Login from '../pages/login.page';
import action from '../helpers/actions';
import AccountType from '../pages/type-of-account.page';
import {expect} from 'chai';
import help from '../helpers/helpers';
import TellUsAboutYourself from '../pages/tell-us-about-yourself.page';
import VerifyEmail from '../pages/verify-email.page';

describe('Create New Account Flow', () => {
    context('When creating a new account', () => {
        it('should let me fill out registration form and get to point to verify my email', () => {
            help.getThroughIntroScreens();
            Login.TapCreateNewAccountButton();
            //action.tap(AccountType.HealthAccount);
            //action.tap(AccountType.ContinueButton);
            TellUsAboutYourself.fillOutRegistrationForm();
            browser.pause(3000);
            // tslint:disable-next-line:no-unused-expression
            expect(TellUsAboutYourself.ContinueButton().isEnabled()).to.be.true;
            //action.tap(TellUsAboutYourself.ContinueButton);
            // browser.pause(3000);
            browser.waitUntil(() => help.LoaderLogo().isExisting() === false);
            // browser.pause(3000);
            expect(VerifyEmail.noEmailButton().isEnabled()).to.eql([true, true]);

        });
    });
    context('When user accidently enters wrong email at first', () => {
        it('should let user update email', () => {
           // action.ScrollDown(VerifyEmail.email, 500);
            VerifyEmail.noEmailButton().waitForDisplayed();
           // action.tap(VerifyEmail.noEmailButton);
            browser.waitUntil(() => help.LoaderLogo().isExisting() === false);
           // action.ScrollDown(VerifyEmail.doubleCheckYourEmail, 1000);
            VerifyEmail.correctedEmail().clearValue();
          //  action.tap(VerifyEmail.correctedEmail);
            action.sendKeys('EmailIsUpdated' + help.emailNumber + '@mytrusense.com');
            VerifyEmail.resendEmail().waitForEnabled();
            VerifyEmail.resendEmail().click();
            browser.waitUntil(() => VerifyEmail.resendEmail().isExisting() === false);
            expect(VerifyEmail.email().getText()).to.contain('EmailIsUpdated');
        });
    });

});
