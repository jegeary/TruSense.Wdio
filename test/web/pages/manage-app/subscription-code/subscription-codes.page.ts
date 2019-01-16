import Selector from "../../../helpers/selectors";
import Page from "../../page";

class SubscriptionCodePage extends Page {

    AssociateSubscriptionCodesLink(): WebdriverIO.Element<void> {
        return $(Selector.linkText('Associate Subscription Codes'));
    }    
    open() {
        super.open('/manage/subscription-codes');
    }
}
const SubscriptionCode = new SubscriptionCodePage;
export default SubscriptionCode;

