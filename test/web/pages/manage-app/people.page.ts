import Selector from "../../helpers/selectors";
import Page from "../page";

class PeoplePage extends Page {

    Search(): WebdriverIO.Element<void> {
        return $(Selector.tag('input'));
    }
   // PageButton
   // GoToNextPage
   // GotToLastPage
   // GoToFirstPage
   // GoToPreviousPage
    TableRows(): WebdriverIO.Element<void>[] {
        return $$(Selector.class('datatable-row-wrapper'));
    }    
    open() {
        super.open('/home')
    }
}
const People = new PeoplePage;
export default People;

