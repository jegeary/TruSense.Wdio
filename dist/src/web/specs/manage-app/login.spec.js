"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../../pages/shared/login.page");
var chai_1 = require("chai");
var constants_1 = require("../../helpers/constants");
var helpers_1 = require("../../helpers/helpers");
describe('Login Screen', function () {
    context('when using valid internal user credentials', function () {
        it('should allow me to log in', function () {
            helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
            login_page_1.default.ManageAppLogin();
            chai_1.expect(constants_1.default.PageTitle().getText()).to.eq('Dashboard');
        });
    });
});
//# sourceMappingURL=login.spec.js.map