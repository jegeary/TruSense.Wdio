import Selector from "../../../helpers/selectors";
import Page from "../../page";

class PeopleSettingsPage extends Page {
    InviteSomeoneElement(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-invite']");
    }
    EditPrimaryPerson(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-edit-Primary Resident']");
    }
    EditAdmin(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-edit-Administrators']");
    }
    EditUser(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-edit-Users']");
    }
    EditNoAccess(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-edit-People Without Access']");
    }
    EmContactLink(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-emContactLink']");
    }
    PeopleLink(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-peopleLink']");
    }
    PeopleCard(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-peopleCards']");
    }
    EditPersonUpdate(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-editPersonUpdate']");
    }
    SendInvite(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-people-sendInvite']");
    }
    SearchBar(): WebdriverIO.Element<void> {
        return $(Selector.name('search'));
    }
    PeopleGroups(): WebdriverIO.Element<void> {
        return $(Selector.class('people-group'));
    }
    FirstName(): WebdriverIO.Element<void> {
        return $(Selector.name('firstName0'));
    }
    LastName(): WebdriverIO.Element<void> {
        return $(Selector.name('lastName0'));
    }
    MobileNumber(): WebdriverIO.Element<void> {
        return $(Selector.name('mobileNumber'));
    }
    AllowSiteAccess(): WebdriverIO.Element<void> {
        return $(Selector.name('allowSiteAccess0'));
    }
    SelectRole(): WebdriverIO.Element<void> {
        return $(Selector.name('roles0'));
    }
    EmailAddress(): WebdriverIO.Element<void> {
        return $(Selector.name('emailAddress0'));
    }
    InviteNewUserFirstName(): WebdriverIO.Element<void> {
        return $(Selector.name('firstName-1'));
    }
    InviteNewUserLastName(): WebdriverIO.Element<void> {
        return $(Selector.name('lastName-1'));
    }
    InviteNewUserMobileNumber(): WebdriverIO.Element<void> {
        return $(Selector.name('mobileNumber'));
    }
    InviteNewUserAllowSiteAccess(): WebdriverIO.Element<void> {
        return $(Selector.name('allowSiteAccess-1'));
    }
    InviteNewUserSelectRole(): WebdriverIO.Element<void> {
        return $(Selector.name('roles-1'));
    }
    InviteNewUserEmailAddress(): WebdriverIO.Element<void> {
        return $(Selector.name('emailAddress-1'));
    }    
    open() {
        super.open('/home')
    }
}
const PeopleSettings = new PeopleSettingsPage;
export default PeopleSettings;

