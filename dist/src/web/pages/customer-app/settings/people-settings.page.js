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
var page_1 = require("../../page");
var PeopleSettingsPage = /** @class */ (function (_super) {
    __extends(PeopleSettingsPage, _super);
    function PeopleSettingsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PeopleSettingsPage.prototype.InviteSomeoneElement = function () {
        return $("//*[@data-selenium='settings-people-invite']");
    };
    PeopleSettingsPage.prototype.EditPrimaryPerson = function () {
        return $("//*[@data-selenium='settings-people-edit-Primary Resident']");
    };
    PeopleSettingsPage.prototype.EditAdmin = function () {
        return $("//*[@data-selenium='settings-people-edit-Administrators']");
    };
    PeopleSettingsPage.prototype.EditUser = function () {
        return $("//*[@data-selenium='settings-people-edit-Users']");
    };
    PeopleSettingsPage.prototype.EditNoAccess = function () {
        return $("//*[@data-selenium='settings-people-edit-People Without Access']");
    };
    PeopleSettingsPage.prototype.EmContactLink = function () {
        return $("//*[@data-selenium='settings-people-emContactLink']");
    };
    PeopleSettingsPage.prototype.PeopleLink = function () {
        return $("//*[@data-selenium='settings-people-peopleLink']");
    };
    PeopleSettingsPage.prototype.PeopleCard = function () {
        return $("//*[@data-selenium='settings-people-peopleCards']");
    };
    PeopleSettingsPage.prototype.EditPersonUpdate = function () {
        return $("//*[@data-selenium='settings-people-editPersonUpdate']");
    };
    PeopleSettingsPage.prototype.SendInvite = function () {
        return $("//*[@data-selenium='settings-people-sendInvite']");
    };
    PeopleSettingsPage.prototype.SearchBar = function () {
        return $(selectors_1.default.name('search'));
    };
    PeopleSettingsPage.prototype.PeopleGroups = function () {
        return $(selectors_1.default.class('people-group'));
    };
    PeopleSettingsPage.prototype.FirstName = function () {
        return $(selectors_1.default.name('firstName0'));
    };
    PeopleSettingsPage.prototype.LastName = function () {
        return $(selectors_1.default.name('lastName0'));
    };
    PeopleSettingsPage.prototype.MobileNumber = function () {
        return $(selectors_1.default.name('mobileNumber'));
    };
    PeopleSettingsPage.prototype.AllowSiteAccess = function () {
        return $(selectors_1.default.name('allowSiteAccess0'));
    };
    PeopleSettingsPage.prototype.SelectRole = function () {
        return $(selectors_1.default.name('roles0'));
    };
    PeopleSettingsPage.prototype.EmailAddress = function () {
        return $(selectors_1.default.name('emailAddress0'));
    };
    PeopleSettingsPage.prototype.InviteNewUserFirstName = function () {
        return $(selectors_1.default.name('firstName-1'));
    };
    PeopleSettingsPage.prototype.InviteNewUserLastName = function () {
        return $(selectors_1.default.name('lastName-1'));
    };
    PeopleSettingsPage.prototype.InviteNewUserMobileNumber = function () {
        return $(selectors_1.default.name('mobileNumber'));
    };
    PeopleSettingsPage.prototype.InviteNewUserAllowSiteAccess = function () {
        return $(selectors_1.default.name('allowSiteAccess-1'));
    };
    PeopleSettingsPage.prototype.InviteNewUserSelectRole = function () {
        return $(selectors_1.default.name('roles-1'));
    };
    PeopleSettingsPage.prototype.InviteNewUserEmailAddress = function () {
        return $(selectors_1.default.name('emailAddress-1'));
    };
    PeopleSettingsPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return PeopleSettingsPage;
}(page_1.default));
var PeopleSettings = new PeopleSettingsPage;
exports.default = PeopleSettings;
//# sourceMappingURL=people-settings.page.js.map