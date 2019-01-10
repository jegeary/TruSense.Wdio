import selector from '../helpers/android-selectors';
import classType from '../helpers/class-types';
import action from '../helpers/actions';
class LoginPage {

    EditTextSelector = selector.byClassName(classType.Textbox);
    ShowPassword = selector.byClassName(classType.Image) + selector.instanceNumber(1);
    Inputs(): WebdriverIO.Element<void>[] {
        return $$(this.EditTextSelector);
    }
    UserName(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(0));
    }
    Password(): WebdriverIO.Element<void> {
        return $(this.EditTextSelector + selector.instanceNumber(1));
    }
    LoginButton(): WebdriverIO.Element<void> {
        return $(selector.byText('LOGIN'));
    }
    ForgotPasswordLink(): WebdriverIO.Element<void> {
        return $(selector.byResourceId('forgotPasswordLink'));
    }
    CreateNewAccountButton(): WebdriverIO.Element<void> {
        return $(selector.byText('CREATE A NEW ACCOUNT') + selector.instanceNumber(0));
    }
    InvalidCredentials(): WebdriverIO.Element<void> {
        return $(selector.byText('Invalid username or password'));
    }
    // ForgotPasswordPage
    Email(): WebdriverIO.Element<void> {
        return $(selector.byClassName(classType.Textbox));
    }
    ResetPasswordButton(): WebdriverIO.Element<void> {
        return $(selector.byText('RESET PASSWORD'));
    }

    ForgotPassword(email: string): void {
        this.ForgotPasswordLink().click();
        // TODO: "Fix Actions"
        // this.Email.tap();
        //action.sendKeys(email);
        this.ResetPasswordButton().click();
    }

    TapCreateNewAccountButton(): void {
        this.CreateNewAccountButton().click();
    }

    FillOutLoginForm(username: string, password: string): void {
       // action.tap(this.UserName);
       // action.sendKeys(username);
       // action.tap(this.Password);
       // action.sendKeys(password);
       // action.tap(this.ShowPassword);
    }

    UpdateCredentials(username: string, password: string): void {
      //  action.tap(this.ShowPassword);
      //  browser.clearValue(this.UserName);
      //  browser.clearValue(this.Password);
      //  this.FillOutLoginForm(username, password);
    }

    TapLoginButton(): void {
      //  action.tap(this.LoginButton);
    }

}
const Login = new LoginPage;
export default Login;

