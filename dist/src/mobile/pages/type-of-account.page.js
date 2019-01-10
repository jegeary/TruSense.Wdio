"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var android_selectors_1 = require("../helpers/android-selectors");
var TypeOfAccount = /** @class */ (function () {
    function TypeOfAccount() {
    }
    // tslint:disable-next-line:max-line-length
    TypeOfAccount.prototype.HealthAccount = function () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]');
    };
    TypeOfAccount.prototype.ContinueButton = function () {
        return $(android_selectors_1.default.byText('CONTINUE'));
    };
    return TypeOfAccount;
}());
exports.default = new TypeOfAccount();
//# sourceMappingURL=type-of-account.page.js.map