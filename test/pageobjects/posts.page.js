import Page from './page.js';

class PostsPage extends Page {
    
    get btnLogin () {
        return null;

        // use multi element getter:
        //return $$("//path/to/container");
    }

    open () {
        return super.open('posts');
    }
}

export default new PostsPage();
