"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intro_page_1 = require("../pages/intro.page");
var actions_1 = require("../helpers/actions");
var android_selectors_1 = require("./android-selectors");
var class_types_1 = require("./class-types");
var Helpers = /** @class */ (function () {
    function Helpers() {
        this.emailNumber = this.randomNumber(1, 999);
    }
    // tslint:disable-next-line:max-line-length
    Helpers.prototype.FabSelector = function () {
        return $(android_selectors_1.default.customLocator(android_selectors_1.default.className(class_types_1.default.WebView) + android_selectors_1.default.child(android_selectors_1.default.className(class_types_1.default.View) + android_selectors_1.default.child(android_selectors_1.default.className(class_types_1.default.View) + android_selectors_1.default.child(android_selectors_1.default.className(class_types_1.default.View) + android_selectors_1.default.clickable)))));
    };
    // tslint:disable-next-line:max-line-length
    Helpers.prototype.LoaderLogo = function () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.Image');
    };
    Helpers.prototype.splashScreen = function () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView');
    };
    Helpers.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Helpers.prototype.getThroughIntroScreens = function () {
        this.waitForSplashScreen();
        intro_page_1.default.MainTextFirstScreen().waitForExist(30000);
        actions_1.default.swipeLeft();
        intro_page_1.default.MainTextSecondScreen().waitForExist(30000);
        actions_1.default.swipeLeft();
        intro_page_1.default.MainTextThirdScreen().waitForExist(30000);
        intro_page_1.default.TakeTheFirstStepButton().click();
    };
    Helpers.prototype.waitForSplashScreen = function () {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        browser.waitUntil(function () { return _this.splashScreen().isExisting() === false; });
    };
    Helpers.prototype.verifyUsersEmail = function (username) {
    };
    return Helpers;
}());
var MetaState;
(function (MetaState) {
    MetaState[MetaState["noShift"] = 0] = "noShift";
    MetaState[MetaState["shift"] = 1] = "shift";
})(MetaState = exports.MetaState || (exports.MetaState = {}));
var help = new Helpers();
exports.default = help;
//# sourceMappingURL=helpers.js.map