import Selector from "../../../helpers/selectors";
import Page from "../../page";

class WhoPage extends Page {
    FirstName(): WebdriverIO.Element<void> {
        return $(Selector.name('firstName'));
    }
    LastName(): WebdriverIO.Element<void> {
        return $(Selector.name('lastName'));
    }
    Gender(): WebdriverIO.Element<void> {
        return $(Selector.name('genderId'));
    }
    PhoneNumber(): WebdriverIO.Element<void> {
        return $(Selector.name('phoneNumber'));
    }    
    open() {
        super.open('/home')
    }
}
const Who = new WhoPage;
export default Who;

