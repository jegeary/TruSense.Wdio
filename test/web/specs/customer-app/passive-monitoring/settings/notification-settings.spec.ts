import Login from '../../../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../../../pages/customer-app/pulse.page';
import constants from '../../../../helpers/constants';
import help from '../../../../helpers/helpers';
import RoomDetails from '../../../../pages/customer-app/home-details/room-details.page';
import UserAppMenu from '../../../../pages/customer-app/user-app.menu';
import DeviceDetails from '../../../../pages/customer-app/home-details/device-details.page';
import SettingsMenu from '../../../../pages/customer-app/settings/settings.menu';
import AccountSettings from '../../../../pages/customer-app/settings/account-settings.page';
import { before } from 'mocha';
import NotificationSettings from 'test/web/pages/customer-app/settings/notification-settings.page';
import errorMessages from 'test/web/pages/shared/error.messages';

describe('Notification Settings Page', () => {
    context('when I click into the settings page', () => {
        context('and click into the Notification settings page', () => {
            it('should allow me to switch toggles', () => {
                Login.ExistingPassiveMonitoringUserLogin();
                NotificationSettings.open();
                NotificationSettings.EmergencyCenterToggle()[0];
                expect(errorMessages.CheckForGlobalMessageAlert()).to.be.true;

            });
            context('when adding users to', () => {
                context('text notifications', () => {
                    it('should allow me to add and remove existing users', () => {
                        NotificationSettings.TextLowBatteryDetected().click();
                        NotificationSettings.SelectExistingPerson();
                        expect(NotificationSettings.profileContactCard().isDisplayed()).to.be.true;
                        NotificationSettings.clearAllContacts().click();
                        NotificationSettings.clearAllContactsConfirm().click();
                        expect(NotificationSettings.profileContactCard().isDisplayed()).to.be.false;
                    });
                    it('should allow me to add and remove a new user', () => {
                        NotificationSettings.FirstName().setValue('Roberta');
                        NotificationSettings.LastName().setValue('Chimsman');
                        NotificationSettings.MobileNumber().setValue('5005550006');
                        NotificationSettings.addNewContact().click();
                        expect(NotificationSettings.profileContactCard().isDisplayed()).to.be.true;
                        NotificationSettings.clearAllContacts().click();
                        NotificationSettings.clearAllContactsConfirm().click();
                        expect(NotificationSettings.profileContactCard().isDisplayed()).to.be.false;

                    });
                });
                context('email notifications', () => {
                    it('should allow me to add and remove existing users');
                    it('should allow me to add and remove a new user');
                });
                context('call notifications', () => {
                    it('should allow me to add and remove existing users', () => {
                        NotificationSettings.CallTrackerRemoved().click();
                        NotificationSettings.SelectExistingPerson();
                        expect(NotificationSettings.profileContactCard().isDisplayed()).to.be.true;
                        NotificationSettings.clearAllContacts().click();
                        NotificationSettings.clearAllContactsConfirm().click();
                        expect(NotificationSettings.profileContactCard().isDisplayed()).to.be.false;
                    });
                    it('should allow me to add and remove a new user', () => {
                        NotificationSettings.FirstName().setValue('Chimsman');
                        NotificationSettings.LastName().setValue('Roberta');
                        NotificationSettings.MobileNumber().setValue('5005550006');
                        NotificationSettings.addNewContact().click();
                        expect(NotificationSettings.profileContactCard().isDisplayed()).to.be.true;
                        NotificationSettings.clearAllContacts().click();
                        NotificationSettings.clearAllContactsConfirm().click();
                        expect(NotificationSettings.profileContactCard().isDisplayed()).to.be.false;

                    });
                });
                context('push notifications', () => {
                    it('should allow me to add and remove existing users');
                });
            })
        });
    });
    
});
