import 'webdriverio';
import 'webdriver';
import {expect} from 'chai';
import constants from '../../../helpers/constants';
import help from '../../../helpers/helpers';
import UserAppMenu from '../../../pages/customer-app/user-app.menu';
import HomeDetails from '../../../pages/customer-app/home-details/home-details.page';
import ErrorMessages from '../../../pages/shared/error.messages';
import homeDetailsPage from '../../../pages/customer-app/home-details/home-details.page';
import Login from '../../../pages/shared/login.page';

describe('Home Details Page', () => {
    context('when I click on the edit details icon', () => {
        context('and clear the inputs', () => {
            it('should not allow the form to submit', () => {
                Login.ExistingPassiveMonitoringUserLogin();
                UserAppMenu.MenuHomeElementXPath().click();
                homeDetailsPage.EditDetails().click();
                homeDetailsPage.EditPhone().clearValue();
                homeDetailsPage.EditAddress().clearValue();
                homeDetailsPage.SaveButton().click();
                expect(ErrorMessages.ErrorDanger().isDisplayed()).to.eql(true);
            });
        });
        
    });
    context('when I click on a room card', () => {
        
        context('and I click on the edit details icon', () => {

            context('and clear the inputs', () => {
                it('should not allow the form to submit')
                // , () => {
                //     browser.click(HomeDetails.RoomCards);
                //     browser.click(RoomDetails.EditDetails);
                //     browser.clearValue(RoomDetails.EditRoomName);
                //     browser.click(RoomDetails.SaveButton);
                //     expect(browser.isDisplayed(ErrorMessages.ErrorDanger)).to.be.true;
                // });
            });
            
        });
    });  
});
