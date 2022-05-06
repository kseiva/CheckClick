const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdminPage extends Page {
    /**
     * define selectors using getter methods
     */

     constructor() {
        super();

        this.link = '[class*=url-container]';
        this.totalCount = '[class=ReactVirtualized__Grid] [class*=any-cell]:nth-child(18)';
    }

}

module.exports = new AdminPage();
