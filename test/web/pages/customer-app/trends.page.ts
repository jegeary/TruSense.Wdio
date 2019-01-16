import Selector from "../../helpers/selectors";
import Page from "../page";

class TrendsPage extends Page {

    BackArrow(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='Trends-chart-back-Active Minutes']");
    }
    ForwardArrow(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='Trends-chart-forward-Active Minutes']");
    }
    SummaryAverage(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='Trends-summary-average']");
    }
    SummaryMost(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='Trends-summary-most']");
    }
    SummaryLeast(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='Trends-summary-least']");
    }
    PieCharts(): WebdriverIO.Element<void>[] {
        return $$("//*[@data-selenium='trend-pie-chart-Active Minutes']");
    }    
    open() {
        super.open('/trends')
    }
          
}
const Trends = new TrendsPage;
export default Trends;

