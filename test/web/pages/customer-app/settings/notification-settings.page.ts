import Selector from "../../../helpers/selectors";
import Page from "../../page";

class NotificationSettingsPage extends Page {
    Toggles(): WebdriverIO.Element<void> {
        return $(Selector.class('toggle-table'));
    }
    EmergencyCenterToggle(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-toggle']");
    }
    showThresholds(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-showThresholds']");
    }
    hideThresholds(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-hideThresholds']");
    }
    callCenterDetails(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='notifications-callCenterDescription']");
    }
    callCenterDetailsQuestionMark(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='notifications-callCenterDescriptionQuestionMark']");
    }
    profileContactCard(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-profile-contactCard']");
    }
    clearAllContacts(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-profile-clear']");
    }
    clearAllContactsConfirm(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-profile-clearYes']");
    }
    clearAllContactsDeny(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-profile-clearNo']");
    }
    addNewContact(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='add-new-contact']");
    }
    noUiSlider(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='noUiSlider']");
    }
    ShowAllContacts(): WebdriverIO.Element<void> {
        return $(Selector.linkText('Show All'));
    }
    FirstName(): WebdriverIO.Element<void> {
        return $(Selector.name('firstName'));
    }
    LastName(): WebdriverIO.Element<void> {
        return $(Selector.name('lastName'));
    }
    MobileNumber(): WebdriverIO.Element<void> {
        return $(Selector.name('mobileNumber'));
    }

    // Text Notifications
    TextWaterDetected(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Water Leak Detected']");
    }
    TextWaterFixed(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Water Leak Fixed']");
    }
    TextLowBatteryDetected(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Low Battery Detected']");
    }
    TextLowBatteryReplaced(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Low Battery Replaced']");
    }
    TextTemp(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Temperature Out Of Range']");
    }
    TextVisitorArrival(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Visitor Arrival']");
    }
    TextVisitorDeparture(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Visitor Departure']");
    }
    TextDoor(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Exterior Door Left Open']");
    }
    TextTooLongInRoom(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Too Long In Room']");
    }
    TextOutOfHome(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Out Of Home Detected']");
    }
    TextReturnHome(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Return Home Detected']");
    }
    TextDayStarted(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Day Started']");
    }
    TextDayNotStarted(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Day Not Started']");
    }
    TextBedtimeStarted(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Bedtime Started']");
    }
    TextBedtimeNotStarted(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Bedtime Not Started']");
    }
    TextAssistance(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Assistance Request']");
    }
    TextOffline(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-System Offline']");
    }
    TextBackOnline(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-System Back Online']");
    }
    TextTrackerRemoved(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Vehicle Tracker Removed']");
    }
    TextIgnitionOn(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Vehicle Ignition On']");
    }
    TextIgnitionOff(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Vehicle Ignition Off']");
    }
    TextCollision(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Potential Vehicle Collision']");
    }
    TextGeofence(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-text-Geofence']");
    }

    // Phone Notifications
    CallWaterDetected(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Water Leak Detected']");
    }
    CallWaterFixed(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Water Leak Fixed']");
    }
    CallLowBatteryDetected(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Low Battery Detected']");
    }
    CallLowBatteryReplaced(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Low Battery Replaced']");
    }
    CallTemp(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Temperature Out Of Range']");
    }
    CallVisitorArrival(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Visitor Arrival']");
    }
    CallVisitorDeparture(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Visitor Departure']");
    }
    CallDoor(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Exterior Door Left Open']");
    }
    CallTooLongInRoom(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Too Long In Room']");
    }
    CallOutOfHome(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Out Of Home Detected']");
    }
    CallReturnHome(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Return Home Detected']");
    }
    CallDayStarted(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Day Started']");
    }
    CallDayNotStarted(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Day Not Started']");
    }
    CallBedtimeStarted(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Bedtime Started']");
    }
    CallBedtimeNotStarted(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Bedtime Not Started']");
    }
    CallAssistance(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Assistance Request']");
    }
    CallOffline(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-System Offline']");
    }
    CallBackOnline(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-System Back Online']");
    }
    CallTrackerRemoved(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Vehicle Tracker Removed']");
    }
    CallIgnitionOn(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Vehicle Ignition On']");
    }
    CallIgnitionOff(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Vehicle Ignition Off']");
    }
    CallCollision(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Potential Vehicle Collision']");
    }
    CallGeofence(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-notifications-contacts-call-Geofence']");
    }

    
    open() {
        super.open('/home')
    }
}
const NotificationSettings = new NotificationSettingsPage;
export default NotificationSettings;

