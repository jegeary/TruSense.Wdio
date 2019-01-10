import Selector from "../../../helpers/selectors";
import constants from "../../../helpers/constants";
import Page from "../../page";

class HomeDetailsPage extends Page {
    EditDetails = constants.EditClick;
    EditPhone(): WebdriverIO.Element<void> {
        return $(Selector.name('phoneNumber'));
    }
    EditAddress(): WebdriverIO.Element<void> {
        return $(Selector.name('address'));
    }
    SaveButton = constants.ButtonSuccess;
    RoomCards(): WebdriverIO.Element<void> {
        return $(Selector.tag('ts-room-card'));
    }
    DeviceCards(): WebdriverIO.Element<void> {
        return $(Selector.tag('ts-new-device-card'));
    }

    open() {
        super.open('/home')
    }
}
export default new HomeDetailsPage();

