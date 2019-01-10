import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
class IntroScreens {
    // tslint:disable-next-line:max-line-length
    MainTextFirstScreen(): WebdriverIO.Element<void> {
        return $(selector.byText('More Information'));
    }
    // MainTextFirstScreen = 'new UiSelector().textContains("More Information")'; 'new UiSelector().textContains("More Information")'
    MainTextSecondScreen(): WebdriverIO.Element<void> {
        return $(selector.byText('Connect Once'));
    }
    MainTextThirdScreen(): WebdriverIO.Element<void> {
        return $(selector.byText('View Charts'));
    }
    TakeTheFirstStepButton(): WebdriverIO.Element<void> {
        return $(selector.byClassName('android.widget.Button'));
    }
    FirstScreenText = this.MainTextFirstScreen().getText();
    SecondScreenText = this.MainTextSecondScreen().getText();
    ThirdScreenText = this.MainTextThirdScreen().getText();
}
const Intro = new IntroScreens;
export default Intro;

