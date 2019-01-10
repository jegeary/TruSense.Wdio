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
var selectors_1 = require("../../../helpers/selectors");
var page_1 = require("../../page");
var WhoPage = /** @class */ (function (_super) {
    __extends(WhoPage, _super);
    function WhoPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhoPage.prototype.FirstName = function () {
        return $(selectors_1.default.name('firstName'));
    };
    WhoPage.prototype.LastName = function () {
        return $(selectors_1.default.name('lastName'));
    };
    WhoPage.prototype.Gender = function () {
        return $(selectors_1.default.name('genderId'));
    };
    WhoPage.prototype.PhoneNumber = function () {
        return $(selectors_1.default.name('phoneNumber'));
    };
    WhoPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return WhoPage;
}(page_1.default));
var Who = new WhoPage;
exports.default = Who;
//# sourceMappingURL=who.page.js.map