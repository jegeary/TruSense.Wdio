"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AndroidSelectors = /** @class */ (function () {
    function AndroidSelectors() {
        this.newUiSelector = 'android=new UiSelector()';
        this.checkable = '.checkable(true)';
        this.checked = '.checked(true)';
        this.clickable = '.clickable(true)';
        this.enabled = '.enabled(true)';
        this.focusable = '.focusable(true)';
        this.focused = '.focused(true)';
        this.scrollable = '.scrollable(true)';
        this.selected = '.selected(true)';
    }
    AndroidSelectors.prototype.child = function (child) { return '.childSelector(' + child + ')'; };
    AndroidSelectors.prototype.className = function (className) { return '.className("' + className + '")'; };
    AndroidSelectors.prototype.instance = function (instance) { return '.instance(' + instance + ')'; };
    AndroidSelectors.prototype.index = function (index) { return '.index(' + index + ')'; };
    AndroidSelectors.prototype.resourceId = function (resourceId) { return '.resourceId("' + resourceId + '")'; };
    AndroidSelectors.prototype.text = function (text) { return '.textContains("' + text + '")'; };
    AndroidSelectors.prototype.resourceIdRegex = function (regex) { return '.resourceId("' + regex + '")'; };
    AndroidSelectors.prototype.textMatches = function (regex) { return '.textMatches("' + regex + '")'; };
    AndroidSelectors.prototype.isCheckable = function () { return this.newUiSelector + this.checkable; };
    AndroidSelectors.prototype.isChecked = function () { return this.newUiSelector + this.checked; };
    AndroidSelectors.prototype.byClassName = function (className) { return this.newUiSelector + this.className(className); };
    AndroidSelectors.prototype.isClickable = function () { return this.newUiSelector + this.clickable; };
    AndroidSelectors.prototype.isEnabled = function () { return this.newUiSelector + this.enabled; };
    AndroidSelectors.prototype.isFocusable = function () { return this.newUiSelector + this.focusable; };
    AndroidSelectors.prototype.isFocused = function () { return this.newUiSelector + this.focused; };
    AndroidSelectors.prototype.byResourceId = function (resourceId) { return this.newUiSelector + this.resourceId(resourceId); };
    AndroidSelectors.prototype.isScrollable = function () { return this.newUiSelector + this.scrollable; };
    AndroidSelectors.prototype.isSelected = function () { return this.newUiSelector + this.selected; };
    AndroidSelectors.prototype.byText = function (text) { return this.newUiSelector + this.text(text); };
    AndroidSelectors.prototype.nestedSelector = function (parent, child) { return this.newUiSelector + parent + this.child(child); };
    AndroidSelectors.prototype.byResourceIdRegex = function (resourceIdRegex) { return this.newUiSelector + this.resourceIdRegex(resourceIdRegex); };
    AndroidSelectors.prototype.customLocator = function (locator) { return this.newUiSelector + locator; };
    AndroidSelectors.prototype.instanceNumber = function (instance) { return this.instance(instance); };
    AndroidSelectors.prototype.childSelector = function (child) { return this.child(child); };
    return AndroidSelectors;
}());
var AndroidSelector = new AndroidSelectors();
exports.default = AndroidSelector;
//# sourceMappingURL=android-selectors.js.map