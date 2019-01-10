"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var android_selectors_1 = require("../helpers/android-selectors");
var class_types_1 = require("../helpers/class-types");
var TellUsAboutYourselfScreen = /** @class */ (function () {
    function TellUsAboutYourselfScreen() {
        this.EditTextSelector = android_selectors_1.default.byClassName(class_types_1.default.Textbox);
    }
    TellUsAboutYourselfScreen.prototype.FirstName = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(0));
    };
    TellUsAboutYourselfScreen.prototype.LastName = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(1));
    };
    TellUsAboutYourselfScreen.prototype.Email = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(2));
    };
    TellUsAboutYourselfScreen.prototype.Birthdate = function () {
        return $(android_selectors_1.default.byClassName(class_types_1.default.Spinner));
    };
    TellUsAboutYourselfScreen.prototype.MobileNumber = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(3));
    };
    TellUsAboutYourselfScreen.prototype.Password = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(4));
    };
    TellUsAboutYourselfScreen.prototype.ConfirmPassword = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(5));
    };
    TellUsAboutYourselfScreen.prototype.Address = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(6));
    };
    TellUsAboutYourselfScreen.prototype.Address2 = function () {
        return $(this.EditTextSelector + android_selectors_1.default.instanceNumber(7));
    };
    TellUsAboutYourselfScreen.prototype.DatePicker = function () {
        return $(android_selectors_1.default.byClassName(class_types_1.default.Dialog));
    };
    TellUsAboutYourselfScreen.prototype.DatePickerCancel = function () {
        return $(android_selectors_1.default.nestedSelector(android_selectors_1.default.className(class_types_1.default.Dialog), android_selectors_1.default.text('Cancel')));
    };
    TellUsAboutYourselfScreen.prototype.DatePickerDone = function () {
        return $(android_selectors_1.default.nestedSelector(android_selectors_1.default.className(class_types_1.default.Dialog), android_selectors_1.default.text('Done')));
    };
    TellUsAboutYourselfScreen.prototype.DatePickerMonths = function () {
        return $(android_selectors_1.default.nestedSelector(android_selectors_1.default.className(class_types_1.default.Dialog), android_selectors_1.default.text('Jan')));
    };
    TellUsAboutYourselfScreen.prototype.DatePickerDate = function () {
        return $(android_selectors_1.default.nestedSelector(android_selectors_1.default.className(class_types_1.default.Dialog), android_selectors_1.default.text('1')));
    };
    TellUsAboutYourselfScreen.prototype.DatePickerYears = function () {
        return $(android_selectors_1.default.nestedSelector(android_selectors_1.default.className(class_types_1.default.Dialog), android_selectors_1.default.text('2018')));
    };
    TellUsAboutYourselfScreen.prototype.ContinueButton = function () {
        return $(android_selectors_1.default.byText('CONTINUE'));
    };
    TellUsAboutYourselfScreen.prototype.BackToLogin = function () {
        return $(android_selectors_1.default.byText('Back to Login'));
    };
    // tslint:disable-next-line:max-line-length
    TellUsAboutYourselfScreen.prototype.GoogleAddress = function () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[1]');
    };
    TellUsAboutYourselfScreen.prototype.fillOutRegistrationForm = function () {
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
    }; //
    return TellUsAboutYourselfScreen;
}());
var TellUsAboutYourself = new TellUsAboutYourselfScreen;
exports.default = TellUsAboutYourself;
//# sourceMappingURL=tell-us-about-yourself.page.js.map