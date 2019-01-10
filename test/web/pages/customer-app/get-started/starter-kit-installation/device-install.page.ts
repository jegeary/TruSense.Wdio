import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class DeviceInstallPage extends Page{

    MotionSensorDeviceCard(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='device-card-Motion Sensor']");
    }
    ContactSensorDeviceCard(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='device-card-Contact Sensor']");
    }
    ExistingRoomSelect(): WebdriverIO.Element<void> {
        return $(Selector.name('roomId'));
    }
    DevicePurposeSelect(): WebdriverIO.Element<void> {
        return $(Selector.name('devicePurposeId'));
    }
    AddNewRoomLink(): WebdriverIO.Element<void> {
        return $(Selector.linkText('Add New Room'));
    }
    AddNewFloorLink(): WebdriverIO.Element<void> {
        return $(Selector.linkText('Add New Floor'));
    }
    ExistingFloorSelect(): WebdriverIO.Element<void> {
        return $(Selector.name('floorName'));
    }
    RoomNameInput(): WebdriverIO.Element<void> {
        return $(Selector.name('roomName'));
    }
    RoomTypeSelect(): WebdriverIO.Element<void> {
        return $(Selector.name('roomTypeId'));
    }
    FloorNameInput(): WebdriverIO.Element<void> {
        return $(Selector.name('floorName'));
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
export default new DeviceInstallPage();

