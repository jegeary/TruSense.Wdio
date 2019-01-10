"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var selectors_1 = require("../../helpers/selectors");
var page_1 = require("../page");
var DashboardPage = /** @class */ (function (_super) {
    __extends(DashboardPage, _super);
    function DashboardPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardPage.prototype.RegistrationCard = function () {
        return $(selectors_1.default.partialClassName('registration-stats'));
    };
    DashboardPage.prototype.ParticipationCard = function () {
        return $(selectors_1.default.partialClassName('participation-stats'));
    };
    DashboardPage.prototype.OverallAdherenceCard = function () {
        return $(selectors_1.default.partialClassName('registration-stats'));
    };
    DashboardPage.prototype.BloodPressure = function () {
        return $(selectors_1.default.partialClassName('blood-pressure-stats'));
    };
    DashboardPage.prototype.Weight = function () {
        return $(selectors_1.default.partialClassName('blood-pressure-stats'));
    };
    DashboardPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return DashboardPage;
}(page_1.default));
var Dashboard = new DashboardPage();
exports.default = Dashboard;
//# sourceMappingURL=dashboard.page.js.map