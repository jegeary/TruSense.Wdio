import Selector from "../../../helpers/selectors";
import Page from "../../page";

class AssociateSubscriptionCodePage extends Page {

    EnterCodesInput(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='subscription-code-text']");
    }
    SubscriptionProductSelect(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='subscription-code-product']");
    }
    SubscriptionCodePhoneNumber(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='subscription-code-phoneNumber']");
    }
    SubscriptionCodeSim(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='subscription-code-sim']");
    }
    SubscriptionCodeImei(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='subscription-code-imei']");
    }    
    open() {
        super.open('/manage/subscription-codes/associate');
    }
    //SubscriptionLengthSelect
}
const AssociateSubscriptionCode = new AssociateSubscriptionCodePage;
export default AssociateSubscriptionCode;

