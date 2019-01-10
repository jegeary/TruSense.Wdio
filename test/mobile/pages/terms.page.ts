import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
import ClassType from '../helpers/class-types';
class TermsScreens {

    checkbox(): WebdriverIO.Element<void> {
        return $(selector.byClassName(ClassType.CheckBox));
    }
    viewButton(): WebdriverIO.Element<void> {
        return $(selector.byText('ViewButton'));
    }
    acceptTermsButton(): WebdriverIO.Element<void> {
        return $(selector.byText('Accept Terms'));
    }

    acceptTerms(): void {
        this.checkbox().click();
        if (this.acceptTermsButton().isEnabled()) {
            this.acceptTermsButton().click();
        }
    }
}
const Terms = new TermsScreens;
export default Terms;

