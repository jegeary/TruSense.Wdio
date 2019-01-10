import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class NewDeviceFoundPage extends Page {
    MotionSensorDeviceCard(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='device-card-Motion Sensor']");
    }
    ContactSensorDeviceCard(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='device-card-Contact Sensor']");
    }
    ContinueButton(): WebdriverIO.Element<void> {
        return $(Selector.class('next'));
    }
    BackButton(): WebdriverIO.Element<void> {
        return $(Selector.class('back'));
    }    
    open() {
        super.open('/home')
    }
}
export default new NewDeviceFoundPage;

