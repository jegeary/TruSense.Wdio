import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
import action from '../helpers/actions';
class TypeOfAccount {

    // tslint:disable-next-line:max-line-length
    HealthAccount(): WebdriverIO.Element<void> {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]');
    }
    ContinueButton(): WebdriverIO.Element<void> {
        return $(selector.byText('CONTINUE'));
    }

}
export default new TypeOfAccount();

