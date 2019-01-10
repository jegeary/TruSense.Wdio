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
var TripDetailsPage = /** @class */ (function (_super) {
    __extends(TripDetailsPage, _super);
    function TripDetailsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TripDetailsPage.prototype.TripCoordinates = function () {
        return $(selectors_1.default.class('trip-tr'));
    };
    TripDetailsPage.prototype.MapMarkers = function () {
        return $(selectors_1.default.tag('agm-marker'));
    };
    TripDetailsPage.prototype.LocationRowBorder = function () {
        return $(selectors_1.default.class('location-row-border'));
    };
    TripDetailsPage.prototype.ClearMarkersButton = function () {
        return $(selectors_1.default.class('fa-map-marker'));
    };
    TripDetailsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return TripDetailsPage;
}(page_1.default));
var TripDetails = new TripDetailsPage;
exports.default = TripDetails;
//# sourceMappingURL=trip-details.page.js.map