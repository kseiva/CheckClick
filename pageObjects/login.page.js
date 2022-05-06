const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

     constructor() {
        super();

        this.btnLogin = '[class*=container] > [class*=content] [class*=button]';
        this.inputUsername = '[class*=has-feedback] [type=text]';
        this.inputPassword = '[class*=has-feedback] [type=password]';
        this.btnSubmit = 'button[type="submit"]';
    }

}

module.exports = new LoginPage();
