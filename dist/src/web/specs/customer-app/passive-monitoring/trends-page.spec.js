"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var constants_1 = require("../../../helpers/constants");
var helpers_1 = require("../../../helpers/helpers");
var user_app_menu_1 = require("../../../pages/customer-app/user-app.menu");
var trends_page_1 = require("../../../pages/customer-app/trends.page");
describe('Trends Page', function () {
    it('should have the correct number of pie charts', function () {
        helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
        helpers_1.default.LoginPassiveMonitoring();
        user_app_menu_1.default.MenuTrendsElementXPath().click();
        trends_page_1.default.PieCharts()[1].waitForDisplayed();
        chai_1.expect(trends_page_1.default.PieCharts().length).to.equal(7);
    });
    context('when I click on the Back arrow', function () {
        it('should display the Forward arrow and 7 more pie charts', function () {
            trends_page_1.default.BackArrow().click();
            chai_1.expect(trends_page_1.default.ForwardArrow().isDisplayed()).to.be.true;
            chai_1.expect(trends_page_1.default.PieCharts().length).to.equal(7);
        });
        context('when I click the back arrow 2 more times', function () {
            it('should only display 3 pie charts', function () {
                trends_page_1.default.BackArrow().click();
                trends_page_1.default.BackArrow().click();
                chai_1.expect(trends_page_1.default.PieCharts().length).to.equal(3);
            });
        });
    });
});
//# sourceMappingURL=trends-page.spec.js.map