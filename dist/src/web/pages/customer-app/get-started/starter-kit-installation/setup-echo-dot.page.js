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
var selectors_1 = require("../../../../helpers/selectors");
var page_1 = require("../../../page");
var SetupEchoDotPage = /** @class */ (function (_super) {
    __extends(SetupEchoDotPage, _super);
    function SetupEchoDotPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SetupEchoDotPage.prototype.ContinueButton = function () {
        return $(selectors_1.default.class('next'));
    };
    SetupEchoDotPage.prototype.BackButton = function () {
        return $(selectors_1.default.class('back'));
    };
    SetupEchoDotPage.prototype.TextDownloadLinkButton = function () {
        return $(selectors_1.default.class('ok'));
    };
    SetupEchoDotPage.prototype.AlexaStepContentText = function () {
        return $(selectors_1.default.tag('h3'));
    };
    SetupEchoDotPage.prototype.AlexaSkillCards = function () {
        return $(selectors_1.default.class('alexa-skill'));
    };
    SetupEchoDotPage.prototype.open = function () {
        _super.prototype.open.call(this, '/home');
    };
    return SetupEchoDotPage;
}(page_1.default));
exports.default = new SetupEchoDotPage();
//# sourceMappingURL=setup-echo-dot.page.js.map