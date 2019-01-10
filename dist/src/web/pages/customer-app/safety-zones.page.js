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
var SafetyZonesPage = /** @class */ (function (_super) {
    __extends(SafetyZonesPage, _super);
    function SafetyZonesPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafetyZonesPage.prototype.GpsTripCardXPath = function () {
        return $("//*[@data-selenium='gps-tripCard']");
    };
    SafetyZonesPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return SafetyZonesPage;
}(page_1.default));
var SafetyZones = new SafetyZonesPage;
exports.default = SafetyZones;
//# sourceMappingURL=safety-zones.page.js.map