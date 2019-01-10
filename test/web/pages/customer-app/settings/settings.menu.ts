import Selector from "../../../helpers/selectors";
import Page from "../../page";

class SettingsMenu extends Page {
    AccountSetting(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-menu-Account']");
    }
    BillingSetting(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-menu-Billing']");
    }
    PeopleSetting(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-menu-People']");
    }
    NotificationsSetting(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-menu-Notifications']");
    }
    SafetyZonesSetting(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-menu-Safety Zones']");
    }
    Logout(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-menu-Logout']");
    }
    SettingsName(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-name']");
    }
    SettingsUsername(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-username']");
    }    
    open() {
        super.open('/home')
    }
}
export default new SettingsMenu();

