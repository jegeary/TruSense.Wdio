import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class BillingSettingsPage extends Page {
    
    open() {
        super.open('/home')
    }
}
const BillingSettings = new BillingSettingsPage;
export default BillingSettings;

