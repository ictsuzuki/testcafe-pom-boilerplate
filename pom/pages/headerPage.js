import { Selector, t } from 'testcafe';

class HeaderPage {
    constructor () {
        this.hamburguerMenu = Selector('.bm-icon')
        this.logoutOption = Selector('#logout_sidebar_link')
    }

    async logout () {
        await t
            .click(this.hamburguerMenu)
            .click(this.logoutOption)
    }
}

export default new HeaderPage();