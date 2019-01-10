import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
import action from '../helpers/actions';
import classType from '../helpers/class-types';

class TellUsAboutYourselfScreen {

    EditTextSelector = selector.byClassName(classType.Textbox);
    FirstName(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(0));
    }
    LastName(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(1));
    }
    Email(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(2));
    }
    Birthdate(): WebdriverIO.Element<void> {
        return $(selector.byClassName(classType.Spinner));
    }
    MobileNumber(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(3));
    }
    Password(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(4));
    }
    ConfirmPassword(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(5));
    }
    Address(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(6));
    }
    Address2(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(7));
    }
    DatePicker(): WebdriverIO.Element<void> {
        return $(selector.byClassName(classType.Dialog));
    }
    DatePickerCancel(): WebdriverIO.Element<void> {
        return $(selector.nestedSelector(selector.className(classType.Dialog), selector.text('Cancel')));
    }
    DatePickerDone(): WebdriverIO.Element<void> {
        return $(selector.nestedSelector(selector.className(classType.Dialog), selector.text('Done')));
    }
    DatePickerMonths(): WebdriverIO.Element<void> {
        return $(selector.nestedSelector(selector.className(classType.Dialog), selector.text('Jan')));
    }
    DatePickerDate(): WebdriverIO.Element<void> {
        return $(selector.nestedSelector(selector.className(classType.Dialog), selector.text('1')));
    }
    DatePickerYears(): WebdriverIO.Element<void> {
        return $(selector.nestedSelector(selector.className(classType.Dialog), selector.text('2018')));
    }
    ContinueButton(): WebdriverIO.Element<void> {
        return $(selector.byText('CONTINUE'));
    }
    BackToLogin(): WebdriverIO.Element<void> {
        return $(selector.byText('Back to Login'));
    }
    // tslint:disable-next-line:max-line-length
    GoogleAddress(): WebdriverIO.Element<void> {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[1]');
    }



    fillOutRegistrationForm(): void {
      //  action.tap(this.FirstName);
      //  action.sendKeys('Testing');
      //  action.tap(this.LastName);
      //  action.sendKeys('TruSense');
      //  action.tap(this.Email);
      //  action.sendKeys('Testing' + help.emailNumber + '@trusense.com');
      //  this.Birthdate.click();
      //  action.ScrollDownThenTap(this.DatePickerMonths, 290);
      //  action.ScrollDownThenTap(this.DatePickerDate, 550);
      //  action.ScrollDownThenTap(this.DatePickerYears, 500);
      //  this.DatePickerDone.click();
      //  action.ScrollDown(this.MobileNumber, 800);
      //  action.tap(this.MobileNumber);
      //  action.sendKeys('5005550006');
      //  action.tap(this.Password);
      //  action.sendKeys('Trusense#1234');
      //  action.tap(this.ConfirmPassword);
      //  action.sendKeys('Trusense#1234');
      //  action.tap(this.Address);
      //  // browser.pause(2000);
      //  action.sendKeys('5481 Creek');
      //  action.tap(this.GoogleAddress);
    }//
}
const TellUsAboutYourself = new TellUsAboutYourselfScreen;
export default TellUsAboutYourself;

