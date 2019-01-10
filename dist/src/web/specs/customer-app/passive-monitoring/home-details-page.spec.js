"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("webdriverio");
require("webdriver");
var chai_1 = require("chai");
var constants_1 = require("../../../helpers/constants");
var helpers_1 = require("../../../helpers/helpers");
var user_app_menu_1 = require("../../../pages/customer-app/user-app.menu");
var error_messages_1 = require("../../../pages/shared/error.messages");
var home_details_page_1 = require("../../../pages/customer-app/home-details/home-details.page");
describe('Home Details Page', function () {
    before(function () {
        console.log("Before I click on the edit details icon");
        console.log('****************************************' + '\n');
        helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
        helpers_1.default.LoginPassiveMonitoring();
        user_app_menu_1.default.MenuHomeElementXPath().click();
    });
    context('when I click on the edit details icon', function () {
        context('and clear the inputs', function () {
            it('should not allow the form to submit', function () {
                home_details_page_1.default.EditDetails().click();
                home_details_page_1.default.EditPhone().clearValue();
                home_details_page_1.default.EditAddress().clearValue();
                home_details_page_1.default.SaveButton().click();
                chai_1.expect(error_messages_1.default.ErrorDanger().isDisplayed()).to.eql(true);
            });
        });
    });
    context('when I click on a room card', function () {
        context('and I click on the edit details icon', function () {
            context('and clear the inputs', function () {
                it('should not allow the form to submit');
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
//# sourceMappingURL=home-details-page.spec.js.map