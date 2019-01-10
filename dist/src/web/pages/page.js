"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers/helpers");
var Page = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.open = function (path) {
        browser.maximizeWindow();
        browser.url('https://app-staging.mytrusense.com' + path);
        helpers_1.default.WaitForPageLoad();
    };
    return Page;
}());
exports.default = Page;
//# sourceMappingURL=page.js.map