import { Selector, t } from 'testcafe';

class LoginPage {
    constructor () {
        this.userNameTexField = Selector('#user-name')
        this.passwordTexField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    async login (username, password) {
        await t
            .typeText(this.userNameTexField, username)
            .typeText(this.passwordTexField, password)
            .click(this.loginButton)
    }
}

export default new LoginPage();