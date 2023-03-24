import Page from './page.js';

class LandingPage extends Page {

    constructor() {
        super('#hp-hdr');
    }
    
    get btnLogin () {
        return $("//a[text()='Login']");
    }

    get btnPosts () {
        return $("//a[text()='Posts']");
    }

    get welcomeBanner () {
        return $("#hp-hdr");
    }

    open () {
        return super.open('');
    }
}

export default new LandingPage();
