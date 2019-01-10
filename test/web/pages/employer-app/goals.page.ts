import Selector from "../../helpers/selectors";
import Page from "../page";

class GoalsPage extends Page {
    BloodPresureGoalSelect(): WebdriverIO.Element<void> {
        return $(Selector.id('goalPerWeek[1]'));
    }
    WeightGoalSelect(): WebdriverIO.Element<void> {
        return $(Selector.id('goalPerWeek[2]'));
    }    
    open() {
        super.open('/home')
    }
}
const Goals = new GoalsPage();
export default Goals;

