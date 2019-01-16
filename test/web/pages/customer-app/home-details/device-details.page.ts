import Selector from "../../../helpers/selectors";
import constants from "../../../helpers/constants";
import Page from "../../page";

class DeviceDetailsPage extends Page {
    EditDetails = constants.EditClick;
    EditDeviceName(): WebdriverIO.Element<void> {
        return $(Selector.name('deviceName'));
    }
    SaveButton = constants.ButtonSuccess;    
    open(path: string = '/home/device/', deviceId: number) {
        super.open(path + deviceId)
    }
}
const DeviceDetails = new DeviceDetailsPage;
export default DeviceDetails;

