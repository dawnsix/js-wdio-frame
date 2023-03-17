import LandingPage from '../pageobjects/landing.page.js'
import LoginPage from '../pageobjects/login.page.js'
import { data } from '../../data/environment.js'
import { assert } from 'chai';

describe('basic test flows', () => {
    it('should have a welcome banner on landing page', async () => {
        await LandingPage.open();
        
        var banner = await LandingPage.welcomeBanner.getText()
        assert.equal(banner, 'Welcome to PaidRaid')
    })

    it('can navigate to posts page', async () => {
        await LandingPage.open();
        await LandingPage.btnPosts.click();
    })

    it('should allow existing users to login', async () => {
        await LandingPage.open();
        await LandingPage.btnLogin.click();
        await LoginPage.fldEmail.addValue(data.email);
        await LoginPage.fldPassword.addValue(data.password);
        await LoginPage.btnLogin.click();

        let banner = await LandingPage.welcomeBanner.getText()
        assert.include(banner, data.username);
    })
});
