import Selector from "../../../helpers/selectors";
import help from "../../../helpers/helpers";
import Page from "../../page";

class CreateAccountPage extends Page {
    ImageUploadButton(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='pulse-user-imageUpload']");
    }
    FirstName(): WebdriverIO.Element<void> {
        return $(Selector.name('firstName'));
    }
    LastName(): WebdriverIO.Element<void> {
        return $(Selector.name('lastName'));
    }
    MobileNumber(): WebdriverIO.Element<void> {
        return $(Selector.name('mobileNumber'));
    }
    EmailAddress(): WebdriverIO.Element<void> {
        return $(Selector.name('emailAddress'));
    }
    Password(): WebdriverIO.Element<void> {
        return $(Selector.name('password'));
    }
    ConfirmPassword(): WebdriverIO.Element<void> {
        return $(Selector.name('confirmPassword'));
    }
    
    FillOutForm(): void {
       // browser.click(this.FirstName).setValue('Testing');
       // browser.click(this.LastName).setValue('TruSense');
       // browser.click(this.MobileNumber).setValue('5005550006');
       // browser.click(this.EmailAddress).setValue('Testing' + help.emailNumber + '@trusense.com');
       // browser.click(this.Password).setValue('Trusense#1234')
       // browser.click(this.ConfirmPassword).setValue('Trusense#1234');
    }    
    open() {
        super.open('/home')
    }
}
const CreateAccount = new CreateAccountPage;
export default CreateAccount;

