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
var TimelinePage = /** @class */ (function (_super) {
    __extends(TimelinePage, _super);
    function TimelinePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelinePage.prototype.TimelineDate = function () {
        return $(selectors_1.default.class('timeline-date'));
    };
    TimelinePage.prototype.FilterGps = function () {
        return $("//*[@data-selenium='timeline-filter-gps']");
    };
    TimelinePage.prototype.BackToTop = function () {
        return $("//*[@data-selenium='timeline-backToTop']");
    };
    TimelinePage.prototype.EventCards = function () {
        return $$(selectors_1.default.tag('ts-event-card'));
    };
    TimelinePage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return TimelinePage;
}(page_1.default));
var Timeline = new TimelinePage;
exports.default = Timeline;
//# sourceMappingURL=timeline.page.js.map