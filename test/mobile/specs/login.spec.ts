import Login from '../pages/login.page';
import {expect} from 'chai';
import help from '../helpers/helpers';

describe('Login Screen', () => {
    context('when using invalid credentials', () => {
        it('should not allow me to log in', () => {
            help.getThroughIntroScreens();
            Login.FillOutLoginForm('jarrod@geary.gov', 'Trusense#1234');
            const username = Login.UserName().getText();
            const password = Login.Password().getText();
            if (username !== 'jarrod@geary.gov' || password !== 'Trusense#1234') {
                browser.saveScreenshot('./../../errorShots/login-error');
            }
            Login.TapLoginButton();
            // browser.pause(5000);
            // browser.waitUntil(() => browser.isExisting(help.LoaderLogo) === false);
            // tslint:disable-next-line:no-unused-expression
            expect(Login.InvalidCredentials().isExisting()).to.be.true;
        });
    });
    context('when using valid credentials', () => {
        it('should log me in', () => {
            Login.UpdateCredentials('jarrodgeary@gmail.com', 'Trusense#1234');
            const username = Login.UserName().getText();
            const password = Login.Password().getText();
            if (username !== 'jarrodgeary@gmail.com' || password !== 'Trusense#1234') {
                browser.saveScreenshot('./../../errorShots/login-error');
            }
            Login.TapLoginButton();
            browser.waitUntil(() => help.LoaderLogo().isExisting() === false);
            // tslint:disable-next-line:no-unused-expression
            expect(help.FabSelector().isEnabled()).to.be.true;
        });
    });
});
