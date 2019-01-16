import Selector from "../../helpers/selectors";
import Page from "../page";

class ManageAppMenu extends Page {
    Orders(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='manage-menu-Orders']");
    }
    Homes(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='manage-menu-Homes']");
    }
    Dashboard(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='manage-menu-Dashboard']");
    }
    Subscriptions(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='manage-menu-Subscription Codes']");
    }
    Organizations(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='manage-menu-Organizations']");
    }
    People(): WebdriverIO.Element<void> {
        return $(Selector.linkText('People'));
    }
    Logout(): WebdriverIO.Element<void> {
        return $(Selector.linkText('Logout'));
    }    
}
export default ManageAppMenu;

