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
var MembersPage = /** @class */ (function (_super) {
    __extends(MembersPage, _super);
    function MembersPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MembersPage.prototype.PageTitle = function () {
        return $(selectors_1.default.class('page-title'));
    };
    MembersPage.prototype.InviteMemebersLink = function () {
        return $(selectors_1.default.partialLinkText('Invite Members'));
    };
    MembersPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return MembersPage;
}(page_1.default));
var Members = new MembersPage();
exports.default = Members;
//# sourceMappingURL=members.page.js.map