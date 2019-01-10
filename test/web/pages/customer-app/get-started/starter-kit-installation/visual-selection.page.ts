import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class VisualSelectionPage extends Page {
    AddDeviceTab(): WebdriverIO.Element<void> {
        return $(Selector.linkText('Add Device'));
    }
    MyDevicesTab(): WebdriverIO.Element<void> {
        return $(Selector.linkText('My Devices'));
    }
    MyHomeTab(): WebdriverIO.Element<void> {
        return $(Selector.linkText('My Home'));
    }
    MotionSensorCardXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='device-selection-Motion Sensor']");
    }
    ContactSensorCardXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='device-selection-Contact Sensor']");
    }
    SmartOutletCardXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='device-selection-Smart Outlet']");
    }
    EchoDotCardXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='device-selection-Echo Dot']");
    }
    LeakDetectorCardXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='device-selection-Leak Detector']");
    }    
    open() {
        super.open('/home')
    }
    
}
export default new VisualSelectionPage();

