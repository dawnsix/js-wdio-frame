import LandingPage from '../pages/landing.page.js'
import LoginPage from '../pages/login.page.js'
import { data } from '../../data/environment.js'
import { assert } from 'chai';

describe('login test', () => {
    
    it.skip('should allow existing users to login', async () => {
        await LandingPage.open();
        await LandingPage.btnLogin.click();
        await LoginPage.fldEmail.addValue(data.email);
        await LoginPage.fldPassword.addValue(data.password);
        await LoginPage.btnLogin.click();

        let banner = await LandingPage.welcomeBanner.getText()
        assert.include(banner, data.username);
    })
    
});
