import Page from "../page";

class UserAppMenu extends Page {

    MenuSettingElementXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='menu-Settings']");
    }
    MenuPulseElementXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='menu-Pulse']");
    }
    MenuTimelineElementXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='menu-Activity']");
    }
    MenuTrendsElementXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='menu-Trends']");
    }
    MenuHomeElementXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='menu-Home']");
    }
    MenuGpsElementXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='menu-GPS']");
    }
    MenuHealthElementXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='menu-Health']");
    }    
    open() {
        super.open('/home')
    }

}
export default new UserAppMenu();

