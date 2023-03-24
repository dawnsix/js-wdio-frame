import Page from './page.js';

class LoginPage extends Page {

    constructor() {
        super('#email');
    }

    get fldEmail () {
        return $('#email');
    }

    get fldPassword () {
        return $('#psw');
    }

    get btnLogin () {
        return $("//button[text()='Login']");
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
