import Page from "../page";

class SafetyZonesPage extends Page {

    GpsTripCardXPath(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='gps-tripCard']");
    }    
    open() {
        super.open('/home')
    }
        
}
const SafetyZones = new SafetyZonesPage;
export default SafetyZones;

