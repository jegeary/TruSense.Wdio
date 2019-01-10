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
var PulsePage = /** @class */ (function (_super) {
    __extends(PulsePage, _super);
    function PulsePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PulsePage.prototype.UserImageUpload = function () {
        return $("//*[@data-selenium='pulse-user-imageUpload']");
    };
    PulsePage.prototype.UserSleepWake = function () {
        return $("//*[@data-selenium='pulse-user-sleep-wake']");
    };
    PulsePage.prototype.CurrentRoom = function () {
        return $("//*[@data-selenium='pulse-currentRoom']");
    };
    PulsePage.prototype.EventCards = function () {
        return $$(selectors_1.default.tag('ts-event-card'));
    };
    PulsePage.prototype.TimelinePulseBackToTop = function () {
        return $("//*[@data-selenium='pulse-timeline-backToTop']");
    };
    PulsePage.prototype.OfflineDevices = function () {
        return $("//*[@data-selenium='pulse-offlineDevices']");
    };
    PulsePage.prototype.OfflineDevicesViewHome = function () {
        return $("//*[@data-selenium='pulse-offlineDevices-viewHome']");
    };
    PulsePage.prototype.LocalWeather = function () {
        return $("//*[@data-selenium='local-weather']");
    };
    PulsePage.prototype.TimelineDate = function () {
        return $(selectors_1.default.class('timeline-date'));
    };
    PulsePage.prototype.CurrentRoomDevices = function () {
        return $(selectors_1.default.tag('ts-new-device-card'));
    };
    PulsePage.prototype.open = function () {
        _super.prototype.open.call(this, '/pulse');
    };
    return PulsePage;
}(page_1.default));
exports.default = new PulsePage;
//# sourceMappingURL=pulse.page.js.map