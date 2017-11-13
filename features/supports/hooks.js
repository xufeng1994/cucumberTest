let { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ Before, After }) {
    Before(async function () {
        await this.web.manage().window().maximize();
    })
    After(async function () {
        await this.web.quit();
    })
})