import LoginPage from '../../../../pages/shared/login.page';
import {expect} from 'chai';
import pulse from '../../../../pages/customer-app/pulse.page';
import constants from '../../../../helpers/constants';
import help from '../../../../helpers/helpers';
import RoomDetails from '../../../../pages/customer-app/home-details/room-details.page';
import UserAppMenu from '../../../../pages/customer-app/user-app.menu';
import DeviceDetails from '../../../../pages/customer-app/home-details/device-details.page';
import SettingsMenu from '../../../../pages/customer-app/settings/settings.menu';
import AccountSettings from '../../../../pages/customer-app/settings/account-settings.page';
import { before } from 'mocha';
import errorMessages from '../../../../pages/shared/error.messages';

describe('Account Settings Page', () => {
    //before(() => {
    //    LoginPage.open();
    //    
    //    LoginPage.Username().click();
    //    LoginPage.Username().addValue('jgeary@openmotion.com')
    //    LoginPage.Password().click();
    //    LoginPage.Password().addValue('Trusense#1234')
    //    LoginPage.LoginButton().click();
    //    pulse.open();
    //    pulse.LocalWeather().waitForExist();
    //});
    context('when I click into the settings page', () => {
      // before(() => {
      //     UserAppMenu.MenuSettingElementXPath().click();
      // });
        context('and click into the Account settings page', () => {
        //   before(() => {
        //       SettingsMenu.AccountSetting().click();
        //   });
            it('should allow me to edit my name', () => {
                LoginPage.ExistingPassiveMonitoringUserLogin(); 
                
                UserAppMenu.MenuSettingElementXPath().click();
                SettingsMenu.AccountSetting().click();
                AccountSettings.NameEdit().click();
                AccountSettings.FirstName().clearValue();
                AccountSettings.FirstName().setValue('Roberta');
                AccountSettings.LastName().clearValue();
                AccountSettings.LastName().setValue('Chimsman');
                AccountSettings.NameSave().click();
                browser.pause(3000);
                expect(SettingsMenu.SettingsName().getText()).to.equal('Roberta Chimsman');
            });
            it('should allow me to edit my username', () => {
                AccountSettings.UsernameEdit().click();
                AccountSettings.Username().clearValue();
                AccountSettings.Username().setValue('RobertaChimsman@gmail.com');
                AccountSettings.Password().clearValue();
                AccountSettings.Password().setValue('Trusense#1234');
                AccountSettings.UsernameSave().click();
                browser.pause(3000);
                expect(SettingsMenu.SettingsUsername().getText()).to.equal('RobertaChimsman@gmail.com');
            });
            it('should allow me to edit my password', () => {
                AccountSettings.EditPassword('Trusense#1234', 'TruSense#1234')
                browser.pause(3000);
                LoginPage.logout();
                browser.pause(3000);
                LoginPage.ExistingPassiveMonitoringUserLogin();
                expect(errorMessages.ErrorDanger().getText()).to.equal('Invalid username or password.');
                LoginPage.ExistingPassiveMonitoringUserUpdatedPasswordLogin();
                AccountSettings.open();
                AccountSettings.EditPassword('TruSense#1234', 'Trusense#1234')
            });
            it('should warn me when changing my mobile number to a landline', () => {
                AccountSettings.MobileEdit().click();
                AccountSettings.MobileNumber().clearValue();
                AccountSettings.MobileNumber().setValue('5137796922');
                expect(errorMessages.ShouldBeMobileValidation().getText()).to.eql('Is this a landline? Please enter a mobile number if you wish to receive text messages.')
                AccountSettings.MobileCancel().click();
            });
            it('should allow me to edit my gender', () => {
                AccountSettings.ChooseGender()
                expect(errorMessages.GlobalMessageAlert().getText()).to.equal('Successfully updated gender.');
            });
            it('should allow me to edit my home phone number', () => {
                AccountSettings.PhoneEdit().click();
                AccountSettings.Landline().clearValue();
                AccountSettings.Landline().setValue('5137796922');
                expect(errorMessages.ShouldBeLandlineValidation().getText()).to.eql('Is this a mobile number? Please enter a landline if one is available.')
                AccountSettings.PhoneCancel().click();
            });
            it('should allow me to edit my address', () => {
                AccountSettings.EditAddress('5481 Creek Road');
                expect(AccountSettings.Address('5481 Creek Road').length).to.not.equal(0);
            });
        });
    });
    
});
