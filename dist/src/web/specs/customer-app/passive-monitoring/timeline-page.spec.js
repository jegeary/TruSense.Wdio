"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var constants_1 = require("../../../helpers/constants");
var helpers_1 = require("../../../helpers/helpers");
var user_app_menu_1 = require("../../../pages/customer-app/user-app.menu");
var timeline_page_1 = require("../../../pages/customer-app/timeline.page");
describe('Timeline Page', function () {
    it('should allow me to Scroll timeline', function () {
        helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
        helpers_1.default.LoginPassiveMonitoring();
        user_app_menu_1.default.MenuTimelineElementXPath().click();
        var eventCard = timeline_page_1.default.EventCards;
        eventCard()[3].click();
        eventCard()[10].scrollIntoView();
        chai_1.expect(timeline_page_1.default.BackToTop().isDisplayed()).to.be.true;
    });
    context('when I click on the Back to Top link', function () {
        it('should scroll the timeline back to the top', function () {
            timeline_page_1.default.BackToTop().click();
            chai_1.expect(timeline_page_1.default.BackToTop().isDisplayed()).to.be.false;
        });
    });
    context('when I click the GPS filter', function () {
        it('should only display GPS timeline entries', function () {
            timeline_page_1.default.FilterGps().click();
            chai_1.expect(timeline_page_1.default.EventCards()[1].getText()).to.contain('Gps');
        });
    });
});
//# sourceMappingURL=timeline-page.spec.js.map