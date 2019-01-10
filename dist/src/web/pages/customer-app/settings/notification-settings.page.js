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
var NotificationSettingsPage = /** @class */ (function (_super) {
    __extends(NotificationSettingsPage, _super);
    function NotificationSettingsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationSettingsPage.prototype.Toggles = function () {
        return $(selectors_1.default.class('toggle-table'));
    };
    NotificationSettingsPage.prototype.EmergencyCenterToggle = function () {
        return $("//*[@data-selenium='settings-notifications-toggle']");
    };
    NotificationSettingsPage.prototype.showThresholds = function () {
        return $("//*[@data-selenium='settings-notifications-showThresholds']");
    };
    NotificationSettingsPage.prototype.hideThresholds = function () {
        return $("//*[@data-selenium='settings-notifications-hideThresholds']");
    };
    NotificationSettingsPage.prototype.callCenterDetails = function () {
        return $("//*[@data-selenium='notifications-callCenterDescription']");
    };
    NotificationSettingsPage.prototype.callCenterDetailsQuestionMark = function () {
        return $("//*[@data-selenium='notifications-callCenterDescriptionQuestionMark']");
    };
    NotificationSettingsPage.prototype.profileContactCard = function () {
        return $("//*[@data-selenium='settings-notifications-profile-contactCard']");
    };
    NotificationSettingsPage.prototype.clearAllContacts = function () {
        return $("//*[@data-selenium='settings-notifications-profile-clear']");
    };
    NotificationSettingsPage.prototype.clearAllContactsConfirm = function () {
        return $("//*[@data-selenium='settings-notifications-profile-clearYes']");
    };
    NotificationSettingsPage.prototype.clearAllContactsDeny = function () {
        return $("//*[@data-selenium='settings-notifications-profile-clearNo']");
    };
    NotificationSettingsPage.prototype.addNewContact = function () {
        return $("//*[@data-selenium='add-new-contact']");
    };
    NotificationSettingsPage.prototype.noUiSlider = function () {
        return $("//*[@data-selenium='noUiSlider']");
    };
    NotificationSettingsPage.prototype.ShowAllContacts = function () {
        return $(selectors_1.default.linkText('Show All'));
    };
    NotificationSettingsPage.prototype.FirstName = function () {
        return $(selectors_1.default.name('firstName'));
    };
    NotificationSettingsPage.prototype.LastName = function () {
        return $(selectors_1.default.name('lastName'));
    };
    NotificationSettingsPage.prototype.MobileNumber = function () {
        return $(selectors_1.default.name('mobileNumber'));
    };
    // Text Notifications
    NotificationSettingsPage.prototype.TextWaterDetected = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Water Leak Detected']");
    };
    NotificationSettingsPage.prototype.TextWaterFixed = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Water Leak Fixed']");
    };
    NotificationSettingsPage.prototype.TextLowBatteryDetected = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Low Battery Detected']");
    };
    NotificationSettingsPage.prototype.TextLowBatteryReplaced = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Low Battery Replaced']");
    };
    NotificationSettingsPage.prototype.TextTemp = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Temperature Out Of Range']");
    };
    NotificationSettingsPage.prototype.TextVisitorArrival = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Visitor Arrival']");
    };
    NotificationSettingsPage.prototype.TextVisitorDeparture = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Visitor Departure']");
    };
    NotificationSettingsPage.prototype.TextDoor = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Exterior Door Left Open']");
    };
    NotificationSettingsPage.prototype.TextTooLongInRoom = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Too Long In Room']");
    };
    NotificationSettingsPage.prototype.TextOutOfHome = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Out Of Home Detected']");
    };
    NotificationSettingsPage.prototype.TextReturnHome = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Return Home Detected']");
    };
    NotificationSettingsPage.prototype.TextDayStarted = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Day Started']");
    };
    NotificationSettingsPage.prototype.TextDayNotStarted = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Day Not Started']");
    };
    NotificationSettingsPage.prototype.TextBedtimeStarted = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Bedtime Started']");
    };
    NotificationSettingsPage.prototype.TextBedtimeNotStarted = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Bedtime Not Started']");
    };
    NotificationSettingsPage.prototype.TextAssistance = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Assistance Request']");
    };
    NotificationSettingsPage.prototype.TextOffline = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-System Offline']");
    };
    NotificationSettingsPage.prototype.TextBackOnline = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-System Back Online']");
    };
    NotificationSettingsPage.prototype.TextTrackerRemoved = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Vehicle Tracker Removed']");
    };
    NotificationSettingsPage.prototype.TextIgnitionOn = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Vehicle Ignition On']");
    };
    NotificationSettingsPage.prototype.TextIgnitionOff = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Vehicle Ignition Off']");
    };
    NotificationSettingsPage.prototype.TextCollision = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Potential Vehicle Collision']");
    };
    NotificationSettingsPage.prototype.TextGeofence = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Geofence']");
    };
    // Phone Notifications
    NotificationSettingsPage.prototype.CallWaterDetected = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Water Leak Detected']");
    };
    NotificationSettingsPage.prototype.CallWaterFixed = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Water Leak Fixed']");
    };
    NotificationSettingsPage.prototype.CallLowBatteryDetected = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Low Battery Detected']");
    };
    NotificationSettingsPage.prototype.CallLowBatteryReplaced = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Low Battery Replaced']");
    };
    NotificationSettingsPage.prototype.CallTemp = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Temperature Out Of Range']");
    };
    NotificationSettingsPage.prototype.CallVisitorArrival = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Visitor Arrival']");
    };
    NotificationSettingsPage.prototype.CallVisitorDeparture = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Visitor Departure']");
    };
    NotificationSettingsPage.prototype.CallDoor = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Exterior Door Left Open']");
    };
    NotificationSettingsPage.prototype.CallTooLongInRoom = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Too Long In Room']");
    };
    NotificationSettingsPage.prototype.CallOutOfHome = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Out Of Home Detected']");
    };
    NotificationSettingsPage.prototype.CallReturnHome = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Return Home Detected']");
    };
    NotificationSettingsPage.prototype.CallDayStarted = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Day Started']");
    };
    NotificationSettingsPage.prototype.CallDayNotStarted = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Day Not Started']");
    };
    NotificationSettingsPage.prototype.CallBedtimeStarted = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Bedtime Started']");
    };
    NotificationSettingsPage.prototype.CallBedtimeNotStarted = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Bedtime Not Started']");
    };
    NotificationSettingsPage.prototype.CallAssistance = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Assistance Request']");
    };
    NotificationSettingsPage.prototype.CallOffline = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-System Offline']");
    };
    NotificationSettingsPage.prototype.CallBackOnline = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-System Back Online']");
    };
    NotificationSettingsPage.prototype.CallTrackerRemoved = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Vehicle Tracker Removed']");
    };
    NotificationSettingsPage.prototype.CallIgnitionOn = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Vehicle Ignition On']");
    };
    NotificationSettingsPage.prototype.CallIgnitionOff = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Vehicle Ignition Off']");
    };
    NotificationSettingsPage.prototype.CallCollision = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Potential Vehicle Collision']");
    };
    NotificationSettingsPage.prototype.CallGeofence = function () {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Geofence']");
    };
    NotificationSettingsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return NotificationSettingsPage;
}(page_1.default));
var NotificationSettings = new NotificationSettingsPage;
exports.default = NotificationSettings;
//# sourceMappingURL=notification-settings.page.js.map