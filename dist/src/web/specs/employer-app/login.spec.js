"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../../pages/shared/login.page");
var chai_1 = require("chai");
var constants_1 = require("../../helpers/constants");
var helpers_1 = require("../../helpers/helpers");
var selectors_1 = require("../../helpers/selectors");
describe('Login Screen', function () {
    context('when using valid employer credentials', function () {
        it('should allow me to log in', function () {
            helpers_1.default.SetupEnvironment(constants_1.default.LoginUrl);
            login_page_1.default.EmployerLogin();
            chai_1.expect($(selectors_1.default.tag('ts-employer-dashboard'))).to.exist;
        });
    });
});
//# sourceMappingURL=login.spec.js.map