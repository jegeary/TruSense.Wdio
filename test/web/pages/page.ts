import help from "../helpers/helpers";

export default class Page {
    constructor() {
        
     }

    open(path: string, id?: number): void {
        browser.maximizeWindow();
        browser.url('https://app-staging.mytrusense.com' + path);
        help.WaitForPageLoad();
    }
}