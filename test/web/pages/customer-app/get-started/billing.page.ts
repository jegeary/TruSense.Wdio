import Selector from "../../../helpers/selectors";
import Page from "../../page";

class BillingPage extends Page {
  Address(): WebdriverIO.Element<void> {
        return $(Selector.name('address1'));
  }
  City(): WebdriverIO.Element<void> {
        return $(Selector.name('city'));
  }
  State(): WebdriverIO.Element<void> {
        return $(Selector.name('state'));
  }
  PostalCode(): WebdriverIO.Element<void> {
        return $(Selector.name('postalCode'));
  }
  CardName(): WebdriverIO.Element<void> {
        return $(Selector.name('cardName'));
  }
  CardNumber(): WebdriverIO.Element<void> {
        return $(Selector.name('cardNumber'));
  }
  CardCvc(): WebdriverIO.Element<void> {
        return $(Selector.name('cvc'));
  }
  ExpirationMonth(): WebdriverIO.Element<void> {
        return $(Selector.name('expirationMonth'));
  }
  ExpirationYear(): WebdriverIO.Element<void> {
        return $(Selector.name('expirationYear'));
  }
    
  open() {
      super.open('/home')
  }
}
export default new BillingPage();

