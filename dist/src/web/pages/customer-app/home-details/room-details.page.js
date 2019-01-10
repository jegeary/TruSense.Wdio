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
var selectors_1 = require("../../../helpers/selectors");
var constants_1 = require("../../../helpers/constants");
var page_1 = require("../../page");
var RoomDetailsPage = /** @class */ (function (_super) {
    __extends(RoomDetailsPage, _super);
    function RoomDetailsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EditDetails = constants_1.default.EditClick;
        _this.SaveButton = constants_1.default.ButtonSuccess;
        return _this;
    }
    RoomDetailsPage.prototype.EditRoomName = function () {
        return $(selectors_1.default.name('roomName'));
    };
    RoomDetailsPage.prototype.RoomType = function () {
        return $(selectors_1.default.name('roomTypeId'));
    };
    RoomDetailsPage.prototype.AddNewFloorLink = function () {
        return $(selectors_1.default.linkText('Add New Floor'));
    };
    RoomDetailsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return RoomDetailsPage;
}(page_1.default));
var RoomDetails = new RoomDetailsPage;
exports.default = RoomDetails;
//# sourceMappingURL=room-details.page.js.map