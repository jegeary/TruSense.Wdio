import Selector from "../../helpers/selectors";
import Page from "../page";

class AccountPage extends Page {
    Map(): WebdriverIO.Element<void> {
        return $(Selector.class('map-holder'));
    }
    OrganizationName(): WebdriverIO.Element<void> {
        return $(Selector.name('name'));
    }
    Address(): WebdriverIO.Element<void> {
        return $(Selector.name('address'));
    }
    SaveChanges(): WebdriverIO.Element<void> {
        return $(Selector.elementWithCertainTextTag('button', 'Save Changes'));
    }    
    open() {
        super.open('/employer/account');
    }
}
const Account = new AccountPage();
export default Account;

