import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class HubTroubleshootingPage  extends Page{
    HubUnlockCodeInput(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='hub-unlock-code']");
    }
    CurrentHubCode(): WebdriverIO.Element<void> {
        return $(Selector.class('unlock-code'));
    }
    RetryActivationButton(): WebdriverIO.Element<void> {
        return $(Selector.class('next'));
    }
    open() {
        super.open('/home')
    }
}
export default new HubTroubleshootingPage();

