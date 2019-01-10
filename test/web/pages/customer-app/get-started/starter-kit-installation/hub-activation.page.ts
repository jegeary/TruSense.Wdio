import Page from "../../../page";

class HubActivationPage  extends Page {
    HubUnlockCodeInput(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='hub-unlock-code']");
    }
    InstallationContinueButton(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='installation-continue']");
    }
    open() {
        super.open('/home')
    }
}
export default new HubActivationPage();

