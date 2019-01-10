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
var AddDevicePage = /** @class */ (function (_super) {
    __extends(AddDevicePage, _super);
    function AddDevicePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddDevicePage.prototype.BeginPairingButton = function () {
        return $(selectors_1.default.class('filled'));
    };
    AddDevicePage.prototype.GoBackButton = function () {
        return $(selectors_1.default.class('back'));
    };
    AddDevicePage.prototype.MotionSensorTroubleShooting = function () {
        return $(selectors_1.default.tag('ts-motion-sensor-troubleshooting'));
    };
    AddDevicePage.prototype.ContactSensorTroubleShooting = function () {
        return $(selectors_1.default.tag('ts-contact-sensor-troubleshooting'));
    };
    AddDevicePage.prototype.LeakDetectorTroubleShooting = function () {
        return $(selectors_1.default.tag('ts-leak-detector-troubleshooting'));
    };
    AddDevicePage.prototype.SmartOutletTroubleShooting = function () {
        return $(selectors_1.default.tag('ts-smart-outlet-troubleshooting'));
    };
    AddDevicePage.prototype.ProgressBar = function () {
        return $(selectors_1.default.class('progress'));
    };
    AddDevicePage.prototype.open = function () {
        _super.prototype.open.call(this, '');
    };
    return AddDevicePage;
}(page_1.default));
exports.default = new AddDevicePage();
//# sourceMappingURL=add-device.page.js.map