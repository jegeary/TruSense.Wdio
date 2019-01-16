import Selector from "../../../helpers/selectors";
import Page from "../../page";

class AccountSettingsPage extends Page {
    // Name
    NameEdit(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-name-edit']");
    }
    NameClose(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-name-close']");
    }
    NameSave(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-name-save']");
    }
    NameCancel(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-name-cancel']");
    }
    FirstName(): WebdriverIO.Element<void> {
        return $(Selector.id('firstName'));
    }
    LastName(): WebdriverIO.Element<void> {
        return $(Selector.id('lastName'));
    }

    // Username
    UsernameEdit(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-username-edit']");
    }
    UsernameClose(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-username-close']");
    }
    UsernameSave(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-username-save']");
    }
    UsernameCancel(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-username-cancel']");
    }
    Username(): WebdriverIO.Element<void> {
        return $(Selector.id('username'));
    }
    Password(): WebdriverIO.Element<void> {
        return $(Selector.id('password'));
    }

    // Password
    PasswordEdit(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-password-edit']");
    }
    PasswordClose(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-password-close']");
    }
    PasswordSave(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-password-save']");
    }
    PasswordCancel(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-password-cancel']");
    }
    NewPassword(): WebdriverIO.Element<void> {
        return $(Selector.id('newPassword'));
    }
    ConfirmNewPassword(): WebdriverIO.Element<void> {
        return $(Selector.id('confirmNewPassword'));
    }
    ConfirmPassword(): WebdriverIO.Element<void> {
        return $(Selector.id('confirmPassword'));
    }

    // Mobile
    MobileEdit(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-mobile-edit']");
    }
    MobileClose(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-mobile-close']");
    }
    MobileSave(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-mobile-save']");
    }
    MobileCancel(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-mobile-cancel']");
    }
    MobileNumber(): WebdriverIO.Element<void> {
        return $(Selector.name('mobileNumber'));
    }

    // Gender
    GenderEdit(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-gender-edit']");
    }
    GenderClose(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-gender-close']");
    }
    GenderSave(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-gender-save']");
    }
    GenderCancel(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-gender-cancel']");
    }
    GenderDropdown(): WebdriverIO.Element<void> {
        return $(Selector.name('genderId'));
    }
    ChooseGender() {
        this.GenderEdit().click();
        this.GenderDropdown().click();
        this.GenderDropdown().selectByVisibleText('Male');
        this.GenderSave().click();
    }

    // Landline
    PhoneEdit(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-phone-edit']");
    }
    PhoneClose(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-phone-close']");
    }
    PhoneSave(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-phone-save']");
    }
    PhoneCancel(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-phone-cancel']");
    }
    Landline(): WebdriverIO.Element<void> {
        return $(Selector.name('phoneNumber'));
    }

    // Address
    AddressEdit(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-address-edit']");
    }
    AddressClose(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-address-close']");
    }
    AddressSave(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-address-save']");
    }
    AddressCancel(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='account-address-cancel']");
    }
    HomeAddress(): WebdriverIO.Element<void> {
        return $(Selector.name('address'));
    }
    GoogleAddress(): WebdriverIO.Element<void> {
        return $(Selector.class('pac-item'));
    }
    Address(partialAddress: string): WebdriverIO.Element<void>[] {
        return $$(Selector.elementWithPartialTextTag('p', partialAddress));
    }
    
    open() {
        super.open('/settings/account')
    }

    EditPassword(currentPassword: string, newPassword: string): void {
        this.PasswordEdit().click();
        this.NewPassword().clearValue();
        this.NewPassword().setValue(newPassword);
        this.ConfirmNewPassword().clearValue();
        this.ConfirmNewPassword().setValue(newPassword);
        this.ConfirmPassword().clearValue();
        this.ConfirmPassword().setValue(currentPassword);
        this.PasswordSave().click();
    }

    EditAddress(address: string): void {
        this.AddressEdit().click();
        this.HomeAddress().clearValue();
        this.HomeAddress().setValue(address);
        browser.pause(500);
        this.GoogleAddress().click();
        this.AddressSave().click();
    }
}
const AccountSettings = new AccountSettingsPage;
export default AccountSettings;

