import Login from '../../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../../pages/customer-app/pulse.page';
import constants from '../../../helpers/constants';
import help from '../../../helpers/helpers';
import RoomDetails from '../../../pages/customer-app/home-details/room-details.page';
import UserAppMenu from '../../../pages/customer-app/user-app.menu';
import DeviceDetails from '../../../pages/customer-app/home-details/device-details.page';
import Timeline from '../../../pages/customer-app/timeline.page';
import Trends from '../../../pages/customer-app/trends.page';

describe('Trends Page', () => {
    it('should have the correct number of pie charts', () => {
        help.SetupEnvironment(constants.LoginUrl);
        help.LoginPassiveMonitoring();
        UserAppMenu.MenuTrendsElementXPath().click();
        Trends.PieCharts()[1].waitForDisplayed();
        expect(Trends.PieCharts().length).to.equal(7);
    });
    context('when I click on the Back arrow', () => {
        it('should display the Forward arrow and 7 more pie charts', () => {
            Trends.BackArrow().click();
            expect(Trends.ForwardArrow().isDisplayed()).to.be.true;
            expect(Trends.PieCharts().length).to.equal(7);
        });
        context('when I click the back arrow 2 more times', () => {
            it('should only display 3 pie charts', () => {
                Trends.BackArrow().click();
                Trends.BackArrow().click();
                expect(Trends.PieCharts().length).to.equal(3);
            })
        })
    });  
});
