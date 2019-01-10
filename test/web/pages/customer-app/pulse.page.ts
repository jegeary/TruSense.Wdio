import Selector from "../../helpers/selectors";
import Page from "../page";

class PulsePage extends Page {

    UserImageUpload(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='pulse-user-imageUpload']");
    }
    UserSleepWake(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='pulse-user-sleep-wake']");
    }
    CurrentRoom(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='pulse-currentRoom']");
    }
    EventCards(): WebdriverIO.Element<void>[] {
        return $$(Selector.tag('ts-event-card'));
    }
    TimelinePulseBackToTop(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='pulse-timeline-backToTop']");
    }
    OfflineDevices(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='pulse-offlineDevices']");
    }
    OfflineDevicesViewHome(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='pulse-offlineDevices-viewHome']");
    }
    LocalWeather(): WebdriverIO.Element<void> {
        return $("//*[@data-selenium='local-weather']");
    }
    TimelineDate(): WebdriverIO.Element<void> {
        return $(Selector.class('timeline-date'));
    }
    CurrentRoomDevices(): WebdriverIO.Element<void> {
        return $(Selector.tag('ts-new-device-card'));
    }    
    open() {
        super.open('/pulse')
    }
}
export default new PulsePage;

