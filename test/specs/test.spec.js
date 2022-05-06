const expect = require('chai').expect;
const Login = require('../../pageObjects/login.page');
const Admin = require('../../pageObjects/admin.page');
const timeouts = require('../../timeouts');
const urls = require('../../urls');

let link;
let total;
let totalAfter;

describe('Login on site', () => {
    it('should login with valid credentials', async () => {
        await browser.url(urls.loginUrl);
        await browser.pause(timeouts.pause);

        // Перед прогоном тестов нужно установить корректные значения логина и пароля для авторизации вместо указанных login и password
        await $(Login.inputUsername).setValue(login);
        await $(Login.inputPassword).setValue(password);
        await $(Login.btnSubmit).click();

        await browser.pause(timeouts.small);
        const url = await browser.getUrl();
        await expect(url).to.equal(urls.dashboardUrl);
    });

    it('Get default link', async () => {
        link = await ($(Admin.link)).getText();
        await expect(link).to.contains('go.xlviiirdr.com');
        await browser.url(link);
    });

    it('Run report and check clicks', async () => {
        await browser.url(urls.statisticsUrl);
        await $(Login.btnSubmit).click();
        await browser.pause(timeouts.pause);
        total = await ($(Admin.totalCount)).getText();
    });

    it('Check increase clicks', async () => {
        await browser.url(link);
        await browser.url(urls.statisticsUrl);
        await $(Login.btnSubmit).click();
        await browser.pause(timeouts.report);
        await browser.refresh();
        totalAfter = await ($(Admin.totalCount)).getText();
        await expect(Number(totalAfter)).to.eql(Number(total) + 1);
    });
});

