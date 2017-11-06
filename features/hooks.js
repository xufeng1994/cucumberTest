let { defineSupportCode } = require("cucumber")
const report = require('multiple-cucumber-html-reporter');
let path = require("path")

defineSupportCode(function ({ Before, After }) {
    Before(async function () {
        await this.web.manage().window().maximize();
    })
    After(async function () {
        await this.web.quit()
    })
    Before({ tag: "@collect" }, function () {
        // TODO
    })
})