import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class AddDevicePage extends Page{

    BeginPairingButton(): WebdriverIO.Element<void> {
        return $(Selector.class('filled'));
    }
    GoBackButton(): WebdriverIO.Element<void> {
        return $(Selector.class('back'));
    }
    MotionSensorTroubleShooting(): WebdriverIO.Element<void> {
        return $(Selector.tag('ts-motion-sensor-troubleshooting'));
    }
    ContactSensorTroubleShooting(): WebdriverIO.Element<void> {
        return $(Selector.tag('ts-contact-sensor-troubleshooting'));
    }
    LeakDetectorTroubleShooting(): WebdriverIO.Element<void> {
        return $(Selector.tag('ts-leak-detector-troubleshooting'));
    }
    SmartOutletTroubleShooting(): WebdriverIO.Element<void> {
        return $(Selector.tag('ts-smart-outlet-troubleshooting'));
    }
    ProgressBar(): WebdriverIO.Element<void> {
        return $(Selector.class('progress'));
    }
    open() {
        super.open('')
    }
}
export default new AddDevicePage();

