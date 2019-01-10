import Selector from "../../../helpers/selectors";
import Page from "../../page";

class SubscriptionPage extends Page {
    SubscriptionCodeInput(): WebdriverIO.Element<void> {
        return $(Selector.name('subscriptionCode'));
    }
    ContinueButton(): WebdriverIO.Element<void> {
        return $(Selector.class('btn-success'));
    }
    DeviceImage(): WebdriverIO.Element<void> {
        return $(Selector.tag('img'));
    }    
    open() {
        super.open('/home')
    }
}
const Subscription = new SubscriptionPage;
export default Subscription;

