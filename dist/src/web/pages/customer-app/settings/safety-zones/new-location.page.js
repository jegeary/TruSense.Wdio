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
var NewLocationPage = /** @class */ (function (_super) {
    __extends(NewLocationPage, _super);
    function NewLocationPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewLocationPage.prototype.SaveGeofence = function () {
        return $("//*[@data-selenium='settings-locationDetail-saveGeofence']");
    };
    NewLocationPage.prototype.MapAlert = function () {
        return $("//*[@data-selenium='settings-locationDetailMap-alert']");
    };
    NewLocationPage.prototype.MapAlertCloseLink = function () {
        return $(selectors_1.default.class('fa-times'));
    };
    NewLocationPage.prototype.SearchAddressInput = function () {
        return $(selectors_1.default.name('search'));
    };
    NewLocationPage.prototype.MapToolBoxCircle = function () {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-circle']");
    };
    NewLocationPage.prototype.MapToolBoxPolygon = function () {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-polygon']");
    };
    NewLocationPage.prototype.MapToolBoxCenter = function () {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-centerMap']");
    };
    NewLocationPage.prototype.MapToolBoxClear = function () {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-clearMap']");
    };
    NewLocationPage.prototype.MapToolBoxReset = function () {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-reset']");
    };
    NewLocationPage.prototype.Pendant = function () {
        return $("//*[@data-selenium='settings-locationDetailMapDevicePicker-GPS Pendant']");
    };
    NewLocationPage.prototype.Vehicle = function () {
        return $("//*[@data-selenium='settings-locationDetailMapDevicePicker-Vehicle Tracker']");
    };
    NewLocationPage.prototype.BackToLocations = function () {
        return $("//*[@data-selenium='settings-locationDetail-backToLocations']");
    };
    NewLocationPage.prototype.GoogleMapContent = function () {
        return $(selectors_1.default.class('agm-map-content'));
    };
    NewLocationPage.prototype.GoogleMapCircle = function () {
        return $(selectors_1.default.tag('agm-circle'));
    };
    NewLocationPage.prototype.GoogleMapPolygon = function () {
        return $(selectors_1.default.tag('ts-map-polygon'));
    };
    NewLocationPage.prototype.LocationNameInput = function () {
        return $(selectors_1.default.name('title'));
    };
    NewLocationPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return NewLocationPage;
}(page_1.default));
var NewLocation = new NewLocationPage;
exports.default = NewLocation;
//# sourceMappingURL=new-location.page.js.map