import Selector from "../../helpers/selectors";
import Page from "../page";

class TripDetailsPage extends Page {

    TripCoordinates(): WebdriverIO.Element<void> {
        return $(Selector.class('trip-tr'));
    }
    MapMarkers(): WebdriverIO.Element<void> {
        return $(Selector.tag('agm-marker'));
    }
    LocationRowBorder(): WebdriverIO.Element<void> {
        return $(Selector.class('location-row-border'));
    }
    ClearMarkersButton(): WebdriverIO.Element<void> {
        return $(Selector.class('fa-map-marker'));
    }    
    open() {
        super.open('/home')
    }
}
const TripDetails = new TripDetailsPage;
export default TripDetails;

