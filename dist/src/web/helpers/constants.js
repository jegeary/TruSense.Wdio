"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var selectors_1 = require("./selectors");
var Constants = /** @class */ (function () {
    function Constants() {
        this.BaseUrl = 'http://app-staging.mytrusense.com';
        this.LoginUrl = this.BaseUrl + '/login';
        this.LogoutUrl = this.BaseUrl + '/logout';
        this.GetStartedUrl = this.BaseUrl + '/get-started';
    }
    Constants.prototype.EditClick = function () {
        return $(selectors_1.default.partialClassName('edit-click'));
    };
    Constants.prototype.ButtonSuccess = function () {
        return $(selectors_1.default.partialClassName('btn-success'));
    };
    Constants.prototype.PageTitle = function () {
        return $(selectors_1.default.class('page-title'));
    };
    return Constants;
}());
exports.default = new Constants();
//# sourceMappingURL=constants.js.map