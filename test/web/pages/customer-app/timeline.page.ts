import Selector from "../../helpers/selectors";
import Page from "../page";

class TimelinePage extends Page {

    TimelineDate(): WebdriverIO.Element<void> {
        return $(Selector.class('timeline-date'));
    }
    FilterGps(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='timeline-filter-gps']");
    }
    BackToTop(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='timeline-backToTop']");
    }
    EventCards(): WebdriverIO.Element<void>[] {
        return $$(Selector.tag('ts-event-card'));
    }    
    open() {
        super.open('/home')
    }
        
}
const Timeline = new TimelinePage;
export default Timeline;

