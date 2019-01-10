"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var android_selectors_1 = require("../helpers/android-selectors");
var NewAccountView = /** @class */ (function () {
    function NewAccountView() {
        this.welcomeText = android_selectors_1.default.byText('Welcome to TruSense');
        this.addNewMedication = android_selectors_1.default.byText('Add New Medication');
        this.addNewDevice = android_selectors_1.default.byText('Add New Device');
    }
    NewAccountView.prototype.verifyWelcomeText = function () {
    };
    return NewAccountView;
}());
exports.default = NewAccountView;
//# sourceMappingURL=new-account-view.page.js.map