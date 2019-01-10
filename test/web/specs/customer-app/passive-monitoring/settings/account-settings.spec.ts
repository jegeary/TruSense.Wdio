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

describe('Account Settings Page', () => {
    before(() => {
        LoginPage.open();
        
        LoginPage.Username().click();
        LoginPage.Username().addValue('jgeary@openmotion.com')
        LoginPage.Password().click();
        LoginPage.Password().addValue('Trusense#1234')
        LoginPage.LoginButton().click();
        pulse.open();
        pulse.LocalWeather().waitForExist();
    });
    context('when I click into the settings page', () => {
        before(() => {
            UserAppMenu.MenuSettingElementXPath().click();
        });
        context('and click into the Account settings page', () => {
            before(() => {
                SettingsMenu.AccountSetting().click();
            });
            it('should allow me to edit my name', () => {
                AccountSettings.NameEdit().click();
                AccountSettings.FirstName().clearValue();
                AccountSettings.FirstName().setValue('Roberta');
                AccountSettings.LastName().clearValue();
                AccountSettings.LastName().setValue('Chimsman');
                AccountSettings.NameSave().click();
                browser.pause(3000);
                expect(SettingsMenu.SettingsName().getText()).to.equal('Roberta Chimsman');
            });
            it('should allow me to edit my username');
            it('should allow me to edit my password');
            it('should allow me to edit my mobile number');
            it('should allow me to edit my gender');
            it('should allow me to edit my home phone number');
            it('should allow me to edit my address');
        });
    });
    
});
