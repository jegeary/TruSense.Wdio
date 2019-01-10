import Intro from '../pages/intro.page';
import action from '../helpers/actions';
import selector from './android-selectors';
import classTypes from './class-types';
class Helpers {


    // tslint:disable-next-line:max-line-length
    FabSelector(): WebdriverIO.Element<void> {
        return $(selector.customLocator(selector.className(classTypes.WebView) + selector.child(selector.className(classTypes.View) + selector.child(selector.className(classTypes.View) + selector.child(selector.className(classTypes.View) + selector.clickable)))));
    }
    // tslint:disable-next-line:max-line-length
    LoaderLogo(): WebdriverIO.Element<void> {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.Image');
    }
    emailNumber = this.randomNumber(1, 999);
    splashScreen(): WebdriverIO.Element<void> {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView')
    }

    randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    getThroughIntroScreens(): void {
        this.waitForSplashScreen();
        Intro.MainTextFirstScreen().waitForExist(30000);
        action.swipeLeft();
        Intro.MainTextSecondScreen().waitForExist(30000);
        action.swipeLeft();
        Intro.MainTextThirdScreen().waitForExist(30000);
        Intro.TakeTheFirstStepButton().click();
    }

    waitForSplashScreen(): void {
        // tslint:disable-next-line:max-line-length
        browser.waitUntil(() => this.splashScreen().isExisting() === false);
    }
    verifyUsersEmail(username: string): void {

    }
}
export enum MetaState {
    noShift,
    shift
}
const help = new Helpers();
export default help;
