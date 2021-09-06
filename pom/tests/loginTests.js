import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import headerPage from '../pages/headerPage'

import { CREDENTIALS, ERROR_MESSAGE , BASE_URL, HOME_PAGE_LABELS } from '../data/Constants'

fixture `Login`
    .page(BASE_URL)

test('Success Login', async t => {
    await loginPage.login(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(homePage.titleLabel.innerText).eql(HOME_PAGE_LABELS.TITLE)
});

test('Invalid Login', async t => {
    await loginPage.login(CREDENTIALS.INVALID_USER.USERNAME,CREDENTIALS.INVALID_USER.PASSWORD)

    await t.expect(loginPage.errorMessage.innerText).eql(ERROR_MESSAGE.INVALID_PASSWORD_ERROR_MSG)
});

test('Logout', async t => {
    await loginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await headerPage.logout()

    await t.expect(loginPage.userNameTexField.visible).ok()
});