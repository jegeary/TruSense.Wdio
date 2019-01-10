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
var DeviceInstallPage = /** @class */ (function (_super) {
    __extends(DeviceInstallPage, _super);
    function DeviceInstallPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceInstallPage.prototype.MotionSensorDeviceCard = function () {
        return $("//*[@data-selenium='device-card-Motion Sensor']");
    };
    DeviceInstallPage.prototype.ContactSensorDeviceCard = function () {
        return $("//*[@data-selenium='device-card-Contact Sensor']");
    };
    DeviceInstallPage.prototype.ExistingRoomSelect = function () {
        return $(selectors_1.default.name('roomId'));
    };
    DeviceInstallPage.prototype.DevicePurposeSelect = function () {
        return $(selectors_1.default.name('devicePurposeId'));
    };
    DeviceInstallPage.prototype.AddNewRoomLink = function () {
        return $(selectors_1.default.linkText('Add New Room'));
    };
    DeviceInstallPage.prototype.AddNewFloorLink = function () {
        return $(selectors_1.default.linkText('Add New Floor'));
    };
    DeviceInstallPage.prototype.ExistingFloorSelect = function () {
        return $(selectors_1.default.name('floorName'));
    };
    DeviceInstallPage.prototype.RoomNameInput = function () {
        return $(selectors_1.default.name('roomName'));
    };
    DeviceInstallPage.prototype.RoomTypeSelect = function () {
        return $(selectors_1.default.name('roomTypeId'));
    };
    DeviceInstallPage.prototype.FloorNameInput = function () {
        return $(selectors_1.default.name('floorName'));
    };
    DeviceInstallPage.prototype.ContinueButton = function () {
        return $(selectors_1.default.class('next'));
    };
    DeviceInstallPage.prototype.BackButton = function () {
        return $(selectors_1.default.class('back'));
    };
    DeviceInstallPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return DeviceInstallPage;
}(page_1.default));
exports.default = new DeviceInstallPage();
//# sourceMappingURL=device-install.page.js.map