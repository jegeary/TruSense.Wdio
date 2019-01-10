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
var GoalsPage = /** @class */ (function (_super) {
    __extends(GoalsPage, _super);
    function GoalsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoalsPage.prototype.BloodPresureGoalSelect = function () {
        return $(selectors_1.default.id('goalPerWeek[1]'));
    };
    GoalsPage.prototype.WeightGoalSelect = function () {
        return $(selectors_1.default.id('goalPerWeek[2]'));
    };
    GoalsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return GoalsPage;
}(page_1.default));
var Goals = new GoalsPage();
exports.default = Goals;
//# sourceMappingURL=goals.page.js.map