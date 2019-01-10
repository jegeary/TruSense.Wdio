import Selector from "../../helpers/selectors";
import Page from "../page";

class MembersPage extends Page {
    PageTitle(): WebdriverIO.Element<void> {
        return $(Selector.class('page-title'));
    }
    InviteMemebersLink(): WebdriverIO.Element<void> {
        return $(Selector.partialLinkText('Invite Members'));
    }    
    open() {
        super.open('/home')
    }
    
}
const Members = new MembersPage();
export default Members;

