import Selector from '../../helpers/selectors';
import Page from '../page';
class ErrorMessages extends Page{
    ErrorDanger(): WebdriverIO.Element<void> {
        return $(Selector.partialClassName('error-danger'));
    }
    ShouldBeMobileValidation(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='phone-not-mobile']");
    }
    ShouldBeLandlineValidation(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='phone-not-landline']");
    }
    GlobalMessageAlert(): WebdriverIO.Element<void> {
        return $(Selector.class('alert-content'));
    }    
    open() {
        super.open('/home')
    }
}
export default new ErrorMessages();

