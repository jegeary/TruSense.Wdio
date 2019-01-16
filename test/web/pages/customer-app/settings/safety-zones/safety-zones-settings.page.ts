import Selector from "../../../../helpers/selectors";
import Page from "../../../page";

class SafetZonesSettingsPage extends Page {
    ShowHideAllMaps(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locations-showHideAllMaps']");
    }
    ShowHideMap(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locations-showHideMap']");
    }
    NewLocation(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='settings-locations-newLocation']");
    }
    LocationsSearch(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='locations-search']");
    }
    MapCards(): WebdriverIO.Element<void> {
        return $(Selector.class('locations-card'));
    }    
    open() {
        super.open('/settings/safety-zones');
    }
}
const SafetZonesSettings = new SafetZonesSettingsPage;
export default SafetZonesSettings;

