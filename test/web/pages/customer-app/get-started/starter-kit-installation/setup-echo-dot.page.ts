import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class SetupEchoDotPage extends Page {
    ContinueButton(): WebdriverIO.Element<void> {
        return $(Selector.class('next'));
    }
    BackButton(): WebdriverIO.Element<void> {
        return $(Selector.class('back'));
    }
    TextDownloadLinkButton(): WebdriverIO.Element<void> {
        return $(Selector.class('ok'));
    }
    AlexaStepContentText(): WebdriverIO.Element<void> {
        return $(Selector.tag('h3'));
    }
    AlexaSkillCards(): WebdriverIO.Element<void> {
        return $(Selector.class('alexa-skill'));
    }    
    open() {
        super.open('/home')
    }
}
export default new SetupEchoDotPage();

