"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var android_selectors_1 = require("../helpers/android-selectors");
var class_types_1 = require("../helpers/class-types");
var VerifyEmailScreens = /** @class */ (function () {
    function VerifyEmailScreens() {
    }
    VerifyEmailScreens.prototype.email = function () {
        return $(android_selectors_1.default.byText('.com'));
    };
    VerifyEmailScreens.prototype.noEmailButton = function () {
        return $(android_selectors_1.default.byText('I Didn\'t Get The Email'));
    };
    VerifyEmailScreens.prototype.verified = function () {
        return $(android_selectors_1.default.byText('Verified'));
    };
    VerifyEmailScreens.prototype.continue = function () {
        return $(android_selectors_1.default.byText('CONTINUE'));
    };
    VerifyEmailScreens.prototype.doubleCheckYourEmail = function () {
        return $(android_selectors_1.default.byText('Double Check Your Email'));
    };
    VerifyEmailScreens.prototype.correctedEmail = function () {
        return $(android_selectors_1.default.byClassName(class_types_1.default.Textbox));
    };
    VerifyEmailScreens.prototype.resendEmail = function () {
        return $(android_selectors_1.default.byText('Resend Email'));
    };
    VerifyEmailScreens.prototype.verifyAndContinue = function () {
        if (this.verified().isExisting()) {
            this.continue().click();
        }
    };
    return VerifyEmailScreens;
}());
var VerifyEmail = new VerifyEmailScreens;
exports.default = VerifyEmail;
//# sourceMappingURL=verify-email.page.js.map