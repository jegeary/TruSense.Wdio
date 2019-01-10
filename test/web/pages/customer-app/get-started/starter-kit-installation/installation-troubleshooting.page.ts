import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class InstallationTroubleshoootingPage extends Page {

    QuickStartContent(): WebdriverIO.Element<void> {
        return $(Selector.tag('ts-quick-start'));
    }
    ContinueButton(): WebdriverIO.Element<void> {
        return $(Selector.class('next'));
    }
    BackButton(): WebdriverIO.Element<void> {
        return $(Selector.class('back'));
    }
    
    open() {
        super.open('/home')
    }
}
export default new InstallationTroubleshoootingPage();

