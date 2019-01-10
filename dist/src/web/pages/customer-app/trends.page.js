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
var page_1 = require("../page");
var TrendsPage = /** @class */ (function (_super) {
    __extends(TrendsPage, _super);
    function TrendsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrendsPage.prototype.BackArrow = function () {
        return $("//*[@data-selenium='Trends-chart-back-Active Minutes']");
    };
    TrendsPage.prototype.ForwardArrow = function () {
        return $("//*[@data-selenium='Trends-chart-forward-Active Minutes']");
    };
    TrendsPage.prototype.SummaryAverage = function () {
        return $("//*[@data-selenium='Trends-summary-average']");
    };
    TrendsPage.prototype.SummaryMost = function () {
        return $("//*[@data-selenium='Trends-summary-most']");
    };
    TrendsPage.prototype.SummaryLeast = function () {
        return $("//*[@data-selenium='Trends-summary-least']");
    };
    TrendsPage.prototype.PieCharts = function () {
        return $$("//*[@data-selenium='trend-pie-chart-Active Minutes']");
    };
    TrendsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return TrendsPage;
}(page_1.default));
var Trends = new TrendsPage;
exports.default = Trends;
//# sourceMappingURL=trends.page.js.map