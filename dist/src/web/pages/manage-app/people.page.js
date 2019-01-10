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
var PeoplePage = /** @class */ (function (_super) {
    __extends(PeoplePage, _super);
    function PeoplePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PeoplePage.prototype.Search = function () {
        return $(selectors_1.default.tag('input'));
    };
    // PageButton
    // GoToNextPage
    // GotToLastPage
    // GoToFirstPage
    // GoToPreviousPage
    PeoplePage.prototype.TableRows = function () {
        return $$(selectors_1.default.class('datatable-row-wrapper'));
    };
    PeoplePage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return PeoplePage;
}(page_1.default));
var People = new PeoplePage;
exports.default = People;
//# sourceMappingURL=people.page.js.map