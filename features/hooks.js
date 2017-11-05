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
    // Before({ tag: "@collect" }, function () {
    //     // TODO
    // })
})

defineSupportCode(function ({BeforeAll, AfterAll}) {
    BeforeAll(function () {
        //TODO
    })
    // AfterAll(async function () {
    //     let reporterDirPath = path.join(__dirname,"../report");
    //     return report.generate({
    //         jsonDir: reporterDirPath,
    //         reportPath: reporterDirPath,
    //         metadata: {
    //             browser: {
    //                 name: 'chrome',
    //                 version: '62'
    //             },
    //             device: 'fengzi',
    //             platform: {
    //                 name: 'Windows',
    //                 version: '10.12.6'
    //             }
    //         }
    //     });
    // })
})