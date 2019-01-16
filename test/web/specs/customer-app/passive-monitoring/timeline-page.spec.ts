import Login from '../../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../../pages/customer-app/pulse.page';
import constants from '../../../helpers/constants';
import help from '../../../helpers/helpers';
import RoomDetails from '../../../pages/customer-app/home-details/room-details.page';
import UserAppMenu from '../../../pages/customer-app/user-app.menu';
import DeviceDetails from '../../../pages/customer-app/home-details/device-details.page';
import Timeline from '../../../pages/customer-app/timeline.page';

describe('Timeline Page', () => {
    it('should allow me to Scroll timeline', () => {
        Login.ExistingPassiveMonitoringUserLogin();
        UserAppMenu.MenuTimelineElementXPath().click();
        const eventCard = Timeline.EventCards;
        eventCard()[3].click()
        eventCard()[10].scrollIntoView();
        expect(Timeline.BackToTop().isDisplayed()).to.be.true;
    });
    context('when I click on the Back to Top link', () => {
        it('should scroll the timeline back to the top', () => {
            Timeline.BackToTop().click();
            expect(Timeline.BackToTop().isDisplayed()).to.be.false;
        });
    });
    context('when I click the GPS filter', () => {
        it('should only display GPS timeline entries', () => {
            Timeline.FilterGps().click();
            expect(Timeline.EventCards()[1].getText()).to.contain('Gps');
        });
    });
        
});
