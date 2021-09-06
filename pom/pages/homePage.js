import { Selector, t } from 'testcafe';

class HomePage {
    constructor () {
        this.titleLabel = Selector('.title')
    }

    async login (username, password) {
        await t
            .typeText(this.userNameTexField, username)
            .typeText(this.passwordTexField, password)
            .click(this.loginButton)
    }
}

export default new HomePage();