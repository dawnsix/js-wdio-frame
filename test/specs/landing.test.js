import LandingPage from '../pages/landing.page.js'
import { data } from '../../data/environment.js'
import { assert } from 'chai';

describe('landing page test', () => {

    it('should have a welcome banner on landing page', async () => {
        await LandingPage.open();
        
        var banner = await LandingPage.welcomeBanner.getText()
        assert.equal(banner, 'Welcome to PaidRaid')
    });

});
