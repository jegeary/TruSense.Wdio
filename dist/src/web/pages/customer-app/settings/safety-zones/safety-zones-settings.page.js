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
var SafetZonesSettingsPage = /** @class */ (function (_super) {
    __extends(SafetZonesSettingsPage, _super);
    function SafetZonesSettingsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafetZonesSettingsPage.prototype.ShowHideAllMaps = function () {
        return $("//*[@data-selenium='settings-locations-showHideAllMaps']");
    };
    SafetZonesSettingsPage.prototype.ShowHideMap = function () {
        return $("//*[@data-selenium='settings-locations-showHideMap']");
    };
    SafetZonesSettingsPage.prototype.NewLocation = function () {
        return $("//*[@data-selenium='settings-locations-newLocation']");
    };
    SafetZonesSettingsPage.prototype.LocationsSearch = function () {
        return $("//*[@data-selenium='locations-search']");
    };
    SafetZonesSettingsPage.prototype.MapCards = function () {
        return $(selectors_1.default.class('locations-card'));
    };
    SafetZonesSettingsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return SafetZonesSettingsPage;
}(page_1.default));
var SafetZonesSettings = new SafetZonesSettingsPage;
exports.default = SafetZonesSettings;
//# sourceMappingURL=safety-zones-settings.page.js.map