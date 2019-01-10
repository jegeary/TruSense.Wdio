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
var ErrorMessages = /** @class */ (function (_super) {
    __extends(ErrorMessages, _super);
    function ErrorMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorMessages.prototype.ErrorDanger = function () {
        return $(selectors_1.default.partialClassName('error-danger'));
    };
    ErrorMessages.prototype.ShouldBeMobileValidation = function () {
        return $("//*[@data-selenium='phone-not-mobile']");
    };
    ErrorMessages.prototype.ShouldBeLandlineValidation = function () {
        return $("//*[@data-selenium='phone-not-landline']");
    };
    ErrorMessages.prototype.GlobalMessageAlert = function () {
        return $(selectors_1.default.class('alert-content'));
    };
    ErrorMessages.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return ErrorMessages;
}(page_1.default));
exports.default = new ErrorMessages();
//# sourceMappingURL=error.messages.js.map