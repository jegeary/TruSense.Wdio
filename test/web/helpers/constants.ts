import Selector from "./selectors";

class Constants {
    EditClick(): WebdriverIO.Element<void> {
        return $(Selector.partialClassName('edit-click'));  
    }
    ButtonSuccess(): WebdriverIO.Element<void> {
        return $(Selector.partialClassName('btn-success'));
    }
    BaseUrl = 'http://app-staging.mytrusense.com';
    LoginUrl = this.BaseUrl + '/login';
    LogoutUrl = this.BaseUrl + '/logout';
    GetStartedUrl = this.BaseUrl + '/get-started';
    PageTitle(): WebdriverIO.Element<void> {
        return $(Selector.class('page-title'));
    }
}
export default new Constants();
