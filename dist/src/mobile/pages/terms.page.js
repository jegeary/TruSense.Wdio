"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var android_selectors_1 = require("../helpers/android-selectors");
var class_types_1 = require("../helpers/class-types");
var TermsScreens = /** @class */ (function () {
    function TermsScreens() {
    }
    TermsScreens.prototype.checkbox = function () {
        return $(android_selectors_1.default.byClassName(class_types_1.default.CheckBox));
    };
    TermsScreens.prototype.viewButton = function () {
        return $(android_selectors_1.default.byText('ViewButton'));
    };
    TermsScreens.prototype.acceptTermsButton = function () {
        return $(android_selectors_1.default.byText('Accept Terms'));
    };
    TermsScreens.prototype.acceptTerms = function () {
        this.checkbox().click();
        if (this.acceptTermsButton().isEnabled()) {
            this.acceptTermsButton().click();
        }
    };
    return TermsScreens;
}());
var Terms = new TermsScreens;
exports.default = Terms;
//# sourceMappingURL=terms.page.js.map