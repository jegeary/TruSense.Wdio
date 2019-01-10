import Selector from "../../../helpers/selectors";
import Page from "../../page";

class WherePage extends Page {
    Address(): WebdriverIO.Element<void> {
        return $(Selector.name('autocomplete'));
    }
    GoogleAddress(): WebdriverIO.Element<void> {
        return $(Selector.class('pac-item'));
    }    
    open() {
        super.open('/home')
    }
}
const Where = new WherePage;
export default Where;

