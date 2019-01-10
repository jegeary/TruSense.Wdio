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
var selectors_1 = require("../../../../helpers/selectors");
var page_1 = require("../../../page");
var NewDeviceFoundPage = /** @class */ (function (_super) {
    __extends(NewDeviceFoundPage, _super);
    function NewDeviceFoundPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewDeviceFoundPage.prototype.MotionSensorDeviceCard = function () {
        return $("//*[@data-selenium='device-card-Motion Sensor']");
    };
    NewDeviceFoundPage.prototype.ContactSensorDeviceCard = function () {
        return $("//*[@data-selenium='device-card-Contact Sensor']");
    };
    NewDeviceFoundPage.prototype.ContinueButton = function () {
        return $(selectors_1.default.class('next'));
    };
    NewDeviceFoundPage.prototype.BackButton = function () {
        return $(selectors_1.default.class('back'));
    };
    NewDeviceFoundPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return NewDeviceFoundPage;
}(page_1.default));
exports.default = new NewDeviceFoundPage;
//# sourceMappingURL=new-device-found.page.js.map