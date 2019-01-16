import selector from '../../helpers/selectors';
import help from '../../helpers/helpers';

import Page from './../page';
import pulse from '../customer-app/pulse.page';
class LoginPage extends Page {

    Username(): WebdriverIO.Element<any> {
        return $(selector.name('username'));
    }
    Password(): WebdriverIO.Element<void> {
        return $(selector.name('password'));
    }
    ForgotPassword(): WebdriverIO.Element<void> {
        return $(selector.linkText('Forgot your password?'));
    }
    LoginButton(): WebdriverIO.Element<void> {
        return $(selector.elementWithCertainTextTag('button', 'Login'))
    }
    open() {
        super.open('/login');
    }

    logout() {
        super.open('/logout');
    }

    waitForPulsePage() {
        pulse.open();
        pulse.LocalWeather().waitForExist();
    }

    EmployerLogin(): void {
        this.open();
        this.Username().click();
        this.Username().addValue('adam.schaible+employer@gmail.com')
        this.Password().click();
        this.Password().addValue('TruSense#1234');
        this.LoginButton().click();
        help.WaitForPageLoad();
        this.waitForPulsePage();    
    }

    ExistingPassiveMonitoringUserLogin(): void {
        this.open();
        this.Username().click();
        this.Username().addValue('jgeary@openmotion.com')
        this.Password().click();
        this.Password().addValue('Trusense#1234')
        this.LoginButton().click();
        help.WaitForPageLoad();
        this.waitForPulsePage();
    }

    ExistingPassiveMonitoringUserUpdatedPasswordLogin(): void {
        this.open();
        this.Username().click();
        this.Username().addValue('jgeary@openmotion.com')
        this.Password().click();
        this.Password().addValue('TruSense#1234')
        this.LoginButton().click();
        help.WaitForPageLoad();
        this.waitForPulsePage();
    }

    ExistingHealthUserLogin(): void {
        this.open();
        this.Username().click();
        this.Username().addValue('jarrodgeary@gmail.com')
        this.Password().click();
        this.Password().addValue('Trusense#1234')
        this.LoginButton().click();  
        help.WaitForPageLoad();
        this.waitForPulsePage();
    }

    ManageAppLogin(): void {
        this.open();
        this.Username().click();
        this.Username().addValue('jgeary@racoindustries.com')
        this.Password().click();
        this.Password().addValue('Trusense#1234')
        this.LoginButton().click();  
        help.WaitForPageLoad();
        this.waitForPulsePage();
    }
        
 
}
export default new LoginPage();

