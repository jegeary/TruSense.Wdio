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
import PeopleSettings from '../../../../pages/customer-app/settings/people-settings.page';
import errorMessages from '../../../../pages/shared/error.messages';

describe('People Settings Page', () => {
    context('when I click into the settings page', () => {
        context('and click into the People settings page', () => {
            it('should allow me to invite a new user', () => {
                Login.ExistingPassiveMonitoringUserLogin();
                PeopleSettings.InviteNewUser('Bobby', 'Jindal', '5005550006', true, 'bobby.jindal@gov.net')
                expect(errorMessages.CheckForGlobalMessageAlert()).to.be.true;
            });
            it('should allow me to edit primary person');
            it('should allow me to edit Administrators');
        });
    });
    
});
