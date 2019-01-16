import Selector from "./selectors";
import LoginPage from "../pages/shared/login.page";
import pulse from "../pages/customer-app/pulse.page";
import constants from "./constants";

class Helpers {
    emailNumber = this.randomNumber(1, 999);
    preloader(): boolean {
        return $(Selector.id('preloader')).isDisplayed();
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
        LoginPage.ExistingPassiveMonitoringUserLogin();
        pulse.open();
        pulse.LocalWeather().waitForExist();
    }

    
    WaitForPageLoad() {
        if(!this.preloader()){
            $(Selector.id('preloader')).waitForDisplayed(500, true);
        }
    }

    VerifyUser(): void {
       // browser.newWindow(constants.LoginUrl);
    }

}
const help = new Helpers();
export default help;
