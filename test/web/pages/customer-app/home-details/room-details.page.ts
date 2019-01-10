import Selector from "../../../helpers/selectors";
import constants from "../../../helpers/constants";
import Page from "../../page";

class RoomDetailsPage extends Page {
    EditDetails = constants.EditClick;
    EditRoomName(): WebdriverIO.Element<void> {
        return $(Selector.name('roomName'));
    }
    SaveButton = constants.ButtonSuccess;
    RoomType(): WebdriverIO.Element<void> {
        return $(Selector.name('roomTypeId'));
    }
    AddNewFloorLink(): WebdriverIO.Element<void> {
        return $(Selector.linkText('Add New Floor'));
    }    
    open() {
        super.open('/home')
    }
}
const RoomDetails = new RoomDetailsPage;
export default RoomDetails;

