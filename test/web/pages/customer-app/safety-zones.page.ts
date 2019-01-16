import Page from "../page";

class SafetyZonesPage extends Page {

    GpsTripCardXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='gps-tripCard']");
    }    
    open() {
        super.open('/gps')
    }
        
}
const SafetyZones = new SafetyZonesPage;
export default SafetyZones;

