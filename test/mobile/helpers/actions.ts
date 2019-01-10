import key from './android-keys';
import {MetaState} from './helpers';
class Actions {
    getElementLocation(element: WebdriverIO.Element<void>) {
        const x = element.getLocation('x');
        const y = element.getLocation('y');

        return {x: x, y: y};
    }

    swipeLeft() {
        browser.touchPerform([
            { action: 'press', options: {x: 917, y: 1247} },
            { action: 'moveTo', options: {x: 202, y: 1247} },
            { action: 'release' }
        ]);
        console.log('Swiped Left');
    }

    swipeRight() {
        browser.touchPerform([
            { action: 'press', options: {x: 202, y: 1247 } },
            { action: 'moveTo', options: { x: 917, y: 1247 } },
            { action: 'release' }
        ]);
        console.log('Swiped Right');
    }

    ScrollDown(element: WebdriverIO.Element<void>, yOffSet: number) {
        const location = this.getElementLocation(element);
        browser.touchPerform([
            { action: 'press', options: {x: location.x, y: location.y}},
            { action: 'moveTo', options: { x: location.x, y: location.y - yOffSet}},
            { action: 'release'}
        ]);
        console.log('Scrolled Down');

    }

    ScrollDownThenTap(element: WebdriverIO.Element<void>, yOffSet: number) {
        const location = this.getElementLocation(element);
        this.ScrollDown(element, yOffSet);
        this.tapLocation(location.x, location.y);
    }

    sendKeys(keysToSend: string): void {
        console.log('Keys to Send: ' + keysToSend);
        const stringLength = keysToSend.length;
        let metaState = '0';
        for (let i = 0; i < stringLength; i++) {
            const keyChar = keysToSend.charAt(i);
            const keyCodeToSend = key.getKey(keyChar);
            if (keyChar === keyChar.toUpperCase() && (keyCodeToSend > key.Pound && keyCodeToSend < key.Period)) {
                metaState = MetaState.shift.toString();
            } else {
                metaState = MetaState.noShift.toString();
            }
            console.log('Key To Send: ' + keyChar + ', Key Code: ' + keyCodeToSend.toString() + ', Meta State: ' + metaState);
            browser.pressKeyCode(keyCodeToSend.toString(), metaState);
        }
        browser.hideKeyboard('tapOutside', '', '', '');
        browser.pause(1000);
    }

    tap(element: WebdriverIO.Element<void>): void {
        // let location = this.getElementLocation(selector);
        // this.tapLocation(location.x, location.y);
        element.touchAction('tap');
        console.log('Tapped');
        browser.pause(1000);
    }

    tapLocation(x: number, y: number) {
        browser.touchPerform([
            { action: 'tap', options: {x: x, y: y} }
        ]);
    }

    press(element: WebdriverIO.Element<void>): void {
        element.touchAction('press');
        console.log('Pressed');
    }


}
const Action = new Actions();
export default Action;
