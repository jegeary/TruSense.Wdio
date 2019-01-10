"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var android_selectors_1 = require("../helpers/android-selectors");
var IntroScreens = /** @class */ (function () {
    function IntroScreens() {
        this.FirstScreenText = this.MainTextFirstScreen().getText();
        this.SecondScreenText = this.MainTextSecondScreen().getText();
        this.ThirdScreenText = this.MainTextThirdScreen().getText();
    }
    // tslint:disable-next-line:max-line-length
    IntroScreens.prototype.MainTextFirstScreen = function () {
        return $(android_selectors_1.default.byText('More Information'));
    };
    // MainTextFirstScreen = 'new UiSelector().textContains("More Information")'; 'new UiSelector().textContains("More Information")'
    IntroScreens.prototype.MainTextSecondScreen = function () {
        return $(android_selectors_1.default.byText('Connect Once'));
    };
    IntroScreens.prototype.MainTextThirdScreen = function () {
        return $(android_selectors_1.default.byText('View Charts'));
    };
    IntroScreens.prototype.TakeTheFirstStepButton = function () {
        return $(android_selectors_1.default.byClassName('android.widget.Button'));
    };
    return IntroScreens;
}());
var Intro = new IntroScreens;
exports.default = Intro;
//# sourceMappingURL=intro.page.js.map