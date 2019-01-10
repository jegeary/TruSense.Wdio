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
var VisualSelectionPage = /** @class */ (function (_super) {
    __extends(VisualSelectionPage, _super);
    function VisualSelectionPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualSelectionPage.prototype.AddDeviceTab = function () {
        return $(selectors_1.default.linkText('Add Device'));
    };
    VisualSelectionPage.prototype.MyDevicesTab = function () {
        return $(selectors_1.default.linkText('My Devices'));
    };
    VisualSelectionPage.prototype.MyHomeTab = function () {
        return $(selectors_1.default.linkText('My Home'));
    };
    VisualSelectionPage.prototype.MotionSensorCardXPath = function () {
        return $("//*[@data-selenium='device-selection-Motion Sensor']");
    };
    VisualSelectionPage.prototype.ContactSensorCardXPath = function () {
        return $("//*[@data-selenium='device-selection-Contact Sensor']");
    };
    VisualSelectionPage.prototype.SmartOutletCardXPath = function () {
        return $("//*[@data-selenium='device-selection-Smart Outlet']");
    };
    VisualSelectionPage.prototype.EchoDotCardXPath = function () {
        return $("//*[@data-selenium='device-selection-Echo Dot']");
    };
    VisualSelectionPage.prototype.LeakDetectorCardXPath = function () {
        return $("//*[@data-selenium='device-selection-Leak Detector']");
    };
    VisualSelectionPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return VisualSelectionPage;
}(page_1.default));
exports.default = new VisualSelectionPage();
//# sourceMappingURL=visual-selection.page.js.map