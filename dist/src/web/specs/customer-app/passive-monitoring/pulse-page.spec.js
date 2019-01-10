"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var pulse_page_1 = require("../../../pages/customer-app/pulse.page");
var constants_1 = require("../../../helpers/constants");
var helpers_1 = require("../../../helpers/helpers");
var room_details_page_1 = require("../../../pages/customer-app/home-details/room-details.page");
var user_app_menu_1 = require("../../../pages/customer-app/user-app.menu");
var device_details_page_1 = require("../../../pages/customer-app/home-details/device-details.page");
describe('Pulse Page', function () {
    it('should allow me to Scroll timeline', function () {
        helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
        helpers_1.default.LoginPassiveMonitoring();
        var eventCard = pulse_page_1.default.EventCards();
        eventCard[3].click();
        eventCard[10].scrollIntoView();
        chai_1.expect(pulse_page_1.default.TimelinePulseBackToTop().isDisplayed()).to.be.true;
    });
    context('when I click on the Back to Top link', function () {
        it('should scroll the timeline back to the top', function () {
            pulse_page_1.default.TimelinePulseBackToTop().click();
            chai_1.expect(pulse_page_1.default.TimelinePulseBackToTop().isDisplayed()).to.be.false;
        });
    });
    context('when I click into the current room card', function () {
        it('should take me to the current room', function () {
            if (pulse_page_1.default.CurrentRoom().getText().includes('Outside')) {
                console.log('Primary Person is outside of the home');
            }
            else {
                pulse_page_1.default.CurrentRoom().click();
                chai_1.expect(room_details_page_1.default.EditDetails().isExisting()).to.be.true;
                user_app_menu_1.default.MenuPulseElementXPath().click();
            }
        });
    });
    context('when I click into the current room device card', function () {
        it('should take me to the current room', function () {
            pulse_page_1.default.CurrentRoomDevices().click();
            chai_1.expect(device_details_page_1.default.EditDetails().isExisting()).to.be.true;
            user_app_menu_1.default.MenuPulseElementXPath().click();
        });
    });
});
//# sourceMappingURL=pulse-page.spec.js.map