import Selector from "../../helpers/selectors";
import Page from "../page";

class TermsPage extends Page {

    TermsContainer(): WebdriverIO.Element<void> {
        return $(Selector.id('license-scrollable'));
    }
    AcceptTermsCheckbox(): WebdriverIO.Element<void> {
        return $(Selector.id('acceptCheckbox'));
    }
    SubmitButton(): WebdriverIO.Element<void> {
        return $(Selector.elementWithPartialTextClass('btn-success', 'Submit'));
    }    
    open() {
        super.open('/home')
    }
        
}
const Terms = new TermsPage;
export default Terms;

