"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var selectors_1 = require("../../helpers/selectors");
var page_1 = require("../page");
var AccountPage = /** @class */ (function (_super) {
    __extends(AccountPage, _super);
    function AccountPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountPage.prototype.Map = function () {
        return $(selectors_1.default.class('map-holder'));
    };
    AccountPage.prototype.OrganizationName = function () {
        return $(selectors_1.default.name('name'));
    };
    AccountPage.prototype.Address = function () {
        return $(selectors_1.default.name('address'));
    };
    AccountPage.prototype.SaveChanges = function () {
        return $(selectors_1.default.elementWithCertainTextTag('button', 'Save Changes'));
    };
    AccountPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return AccountPage;
}(page_1.default));
var Account = new AccountPage();
exports.default = Account;
//# sourceMappingURL=account.page.js.map