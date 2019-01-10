import Selector from "./selectors";
import LoginPage from "../pages/shared/login.page";
import pulse from "../pages/customer-app/pulse.page";
import constants from "./constants";

class Helpers {
    emailNumber = this.randomNumber(1, 999);
    preloader(): WebdriverIO.Element<void> {
        return $(Selector.id('preloader'));
    }
    randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    SetupEnvironment(url: string): void {
        browser.maximizeWindow();
        browser.url(url);
        this.WaitForPageLoad();
    }
    LoginPassiveMonitoring(): void {
        LoginPage.open();
        LoginPage.ExistingPassiveMonitoringUserLogin();
        pulse.open();
        pulse.LocalWeather().waitForExist();
    }

    WaitForPageLoad(): void {
        if($(Selector.id('preloader')).isDisplayed()){
            $(Selector.id('preloader')).waitForDisplayed(500, true);
        }
    }

    VerifyUser(): void {
       // browser.newWindow(constants.LoginUrl);
    }

}
const help = new Helpers();
export default help;
