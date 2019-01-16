import Login from '../../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../../pages/customer-app/pulse.page';
import constants from '../../../helpers/constants';
import help from '../../../helpers/helpers';
import RoomDetails from '../../../pages/customer-app/home-details/room-details.page';
import UserAppMenu from '../../../pages/customer-app/user-app.menu';
import DeviceDetails from '../../../pages/customer-app/home-details/device-details.page';

describe('Pulse Page', () => {
    it('should allow me to Scroll timeline', () => {
        Login.ExistingPassiveMonitoringUserLogin();
        const eventCard = Pulse.EventCards();
        eventCard[3].click();
        eventCard[10].scrollIntoView();
        expect(Pulse.TimelinePulseBackToTop().isDisplayed()).to.be.true;
    });
    context('when I click on the Back to Top link', () => {
        it('should scroll the timeline back to the top', () => {
            Pulse.TimelinePulseBackToTop().click();
            expect(Pulse.TimelinePulseBackToTop().isDisplayed()).to.be.false;
        });
    });
    context('when I click into the current room card', () => {
        it('should take me to the current room', () => {
            if(Pulse.CurrentRoom().getText().includes('Outside')){
                console.log('Primary Person is outside of the home')
            }
            else {
                Pulse.CurrentRoom().click();
                expect(RoomDetails.EditDetails().isExisting()).to.be.true;
                UserAppMenu.MenuPulseElementXPath().click();
            }
        });
    });
    context('when I click into the current room device card', () => {
        it('should take me to the current room', () => {
            Pulse.CurrentRoomDevices().click();
            expect(DeviceDetails.EditDetails().isExisting()).to.be.true;
            UserAppMenu.MenuPulseElementXPath().click();
        });
    });
    
});
