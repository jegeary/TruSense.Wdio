import Selector from "../../helpers/selectors";
import Page from "../page";

class EmployerAppMenu extends Page {
    Dashboard(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='manage-menu-Dashboard']");
    }
    Account(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='manage-menu-Account']");
    }
    Members(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='manage-menu-Members']");
    }
    Goals(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='manage-menu-Goals']");
    }
    Logout(): WebdriverIO.Element<void> {
        return $(Selector.linkText('Logout'));
    }    
    open() {
        super.open('/home')
    }
}
export default new EmployerAppMenu();

