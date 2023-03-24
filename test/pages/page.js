import { data } from '../../data/environment.js'

export default class Page {

    selector = '';

    constructor(selector) {
        this.selector = selector;
    }

    waitForIsShown = async (isShown = true) => {
        try{
            const result = await $(this.selector).waitForDisplayed({
                timeout: DEFAULT_TIMEOUT,
                reverse: !isShown
            });

            return !!result;
        } catch (e) {
            return !isShown;
        }
    }

    isDisplayed = async () => {
        return $(this.selector).isDisplayed();
    }

    open (path) {
        return browser.url(`${data.target}${path}`)
    }
    
}
