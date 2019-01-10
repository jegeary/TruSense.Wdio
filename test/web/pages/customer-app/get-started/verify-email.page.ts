import Selector from "../../../helpers/selectors";
import Page from "../../page";

class VerifyEmailPage extends Page {
    ResendEmailButton(): WebdriverIO.Element<void> {
        return $(Selector.class('btn-success'));
    }    
    open() {
        super.open('/home')
    }
}
const VerifyEmail = new VerifyEmailPage;
export default VerifyEmail;

