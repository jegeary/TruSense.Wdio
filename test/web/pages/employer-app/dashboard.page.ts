import Selector from "../../helpers/selectors";
import Page from "../page";

class DashboardPage extends Page {
    RegistrationCard(): WebdriverIO.Element<void> {
        return $(Selector.partialClassName('registration-stats'));
    }
    ParticipationCard(): WebdriverIO.Element<void> {
        return $(Selector.partialClassName('participation-stats'));
    }
    OverallAdherenceCard(): WebdriverIO.Element<void> {
        return $(Selector.partialClassName('registration-stats'));
    }
    BloodPressure(): WebdriverIO.Element<void> {
        return $(Selector.partialClassName('blood-pressure-stats'));
    }
    Weight(): WebdriverIO.Element<void> {
        return $(Selector.partialClassName('blood-pressure-stats'));
    }    
    open() {
        super.open('/home')
    }
}
const Dashboard = new DashboardPage();
export default Dashboard;

