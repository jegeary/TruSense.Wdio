import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
import ClassType from '../helpers/class-types';
class VerifyEmailScreens {

    email(): WebdriverIO.Element<void> {
        return $(selector.byText('.com'));
    }
    noEmailButton(): WebdriverIO.Element<void> {
        return $(selector.byText('I Didn\'t Get The Email'));
    }
    verified(): WebdriverIO.Element<void> {
        return $(selector.byText('Verified'));
    }
    continue(): WebdriverIO.Element<void> {
        return $(selector.byText('CONTINUE'));
    }

    doubleCheckYourEmail(): WebdriverIO.Element<void> {
        return $(selector.byText('Double Check Your Email'));
    }
    correctedEmail(): WebdriverIO.Element<void> {
        return $(selector.byClassName(ClassType.Textbox));
    }
    resendEmail(): WebdriverIO.Element<void> {
        return $(selector.byText('Resend Email'));
    }



    verifyAndContinue(): void {
        if (this.verified().isExisting()) {
            this.continue().click();
        }
    }
}
const VerifyEmail = new VerifyEmailScreens;
export default VerifyEmail;

