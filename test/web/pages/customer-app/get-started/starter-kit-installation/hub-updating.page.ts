import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class HubUpdatingPage extends Page{
    HubUpdatingText(): WebdriverIO.Element<void> {
        return $(Selector.class('intro'));
    }
    HubUpdatedText(): WebdriverIO.Element<void> {
        return $(Selector.class('step-title'));
    }
    ContinueButton(): WebdriverIO.Element<void> {
        return $(Selector.tag('button'));
    }
    
    open() {
        super.open('/home')
    }
}
export default new HubUpdatingPage();

