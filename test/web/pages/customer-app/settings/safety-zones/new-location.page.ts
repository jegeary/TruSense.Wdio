import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class NewLocationPage extends Page {
    SaveGeofence(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetail-saveGeofence']");
    }
    MapAlert(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetailMap-alert']");
    }
    MapAlertCloseLink(): WebdriverIO.Element<void> {
        return $(Selector.class('fa-times'));
    }
    SearchAddressInput(): WebdriverIO.Element<void> {
        return $(Selector.name('search'));
    }
    MapToolBoxCircle(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-circle']");
    }
    MapToolBoxPolygon(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-polygon']");
    }
    MapToolBoxCenter(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-centerMap']");
    }
    MapToolBoxClear(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-clearMap']");
    }
    MapToolBoxReset(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetailMapToolBox-reset']");
    }
    Pendant(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetailMapDevicePicker-GPS Pendant']");
    }
    Vehicle(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetailMapDevicePicker-Vehicle Tracker']");
    }
    BackToLocations(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locationDetail-backToLocations']");
    }
    GoogleMapContent(): WebdriverIO.Element<void> {
        return $(Selector.class('agm-map-content'));
    }
    GoogleMapCircle(): WebdriverIO.Element<void> {
        return $(Selector.tag('agm-circle'));
    }
    GoogleMapPolygon(): WebdriverIO.Element<void> {
        return $(Selector.tag('ts-map-polygon'));
    }
    LocationNameInput(): WebdriverIO.Element<void> {
        return $(Selector.name('title'));
    }    
    open() {
        super.open('/home')
    }
    
}
const NewLocation = new NewLocationPage;
export default NewLocation;

