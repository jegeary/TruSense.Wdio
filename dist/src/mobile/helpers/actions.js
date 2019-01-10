"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var android_keys_1 = require("./android-keys");
var helpers_1 = require("./helpers");
var Actions = /** @class */ (function () {
    function Actions() {
    }
    Actions.prototype.getElementLocation = function (element) {
        var x = element.getLocation('x');
        var y = element.getLocation('y');
        return { x: x, y: y };
    };
    Actions.prototype.swipeLeft = function () {
        browser.touchPerform([
            { action: 'press', options: { x: 917, y: 1247 } },
            { action: 'moveTo', options: { x: 202, y: 1247 } },
            { action: 'release' }
        ]);
        console.log('Swiped Left');
    };
    Actions.prototype.swipeRight = function () {
        browser.touchPerform([
            { action: 'press', options: { x: 202, y: 1247 } },
            { action: 'moveTo', options: { x: 917, y: 1247 } },
            { action: 'release' }
        ]);
        console.log('Swiped Right');
    };
    Actions.prototype.ScrollDown = function (element, yOffSet) {
        var location = this.getElementLocation(element);
        browser.touchPerform([
            { action: 'press', options: { x: location.x, y: location.y } },
            { action: 'moveTo', options: { x: location.x, y: location.y - yOffSet } },
            { action: 'release' }
        ]);
        console.log('Scrolled Down');
    };
    Actions.prototype.ScrollDownThenTap = function (element, yOffSet) {
        var location = this.getElementLocation(element);
        this.ScrollDown(element, yOffSet);
        this.tapLocation(location.x, location.y);
    };
    Actions.prototype.sendKeys = function (keysToSend) {
        console.log('Keys to Send: ' + keysToSend);
        var stringLength = keysToSend.length;
        var metaState = '0';
        for (var i = 0; i < stringLength; i++) {
            var keyChar = keysToSend.charAt(i);
            var keyCodeToSend = android_keys_1.default.getKey(keyChar);
            if (keyChar === keyChar.toUpperCase() && (keyCodeToSend > android_keys_1.default.Pound && keyCodeToSend < android_keys_1.default.Period)) {
                metaState = helpers_1.MetaState.shift.toString();
            }
            else {
                metaState = helpers_1.MetaState.noShift.toString();
            }
            console.log('Key To Send: ' + keyChar + ', Key Code: ' + keyCodeToSend.toString() + ', Meta State: ' + metaState);
            browser.pressKeyCode(keyCodeToSend.toString(), metaState);
        }
        browser.hideKeyboard('tapOutside', '', '', '');
        browser.pause(1000);
    };
    Actions.prototype.tap = function (element) {
        // let location = this.getElementLocation(selector);
        // this.tapLocation(location.x, location.y);
        element.touchAction('tap');
        console.log('Tapped');
        browser.pause(1000);
    };
    Actions.prototype.tapLocation = function (x, y) {
        browser.touchPerform([
            { action: 'tap', options: { x: x, y: y } }
        ]);
    };
    Actions.prototype.press = function (element) {
        element.touchAction('press');
        console.log('Pressed');
    };
    return Actions;
}());
var Action = new Actions();
exports.default = Action;
//# sourceMappingURL=actions.js.map