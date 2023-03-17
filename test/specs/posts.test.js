import LandingPage from '../pages/landing.page.js'
import { data } from '../../data/environment.js'
import { assert } from 'chai';

describe('posts page test', () => {

    it('can navigate to posts page', async () => {
        await LandingPage.open();
        await LandingPage.btnPosts.click();
    });

});
