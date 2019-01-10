import Selector from "../../../helpers/selectors";
import Page from "../../page";

class GetStartedPage extends Page {
    CreateAccountButton(): WebdriverIO.Element<void> {
        return $(Selector.partialClassName('btn-success'));
    }
    LoginLink(): WebdriverIO.Element<void> {
        return $(Selector.linkText('Login'));
    }    
    open() {
        super.open('/home')
    }
}
const GetStarted = new GetStartedPage;
export default GetStarted;

