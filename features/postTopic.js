let { defineSupportCode } = require("cucumber")

let assert = require('assert');

defineSupportCode(function ({ Given, Then, When }) {
    Given('用户登录,用户名输入{string},密码输入{string},成功登录', function (string, string2) {
        this.web.get('http://118.31.19.120:3000/');
        this.web.findElement({ css: 'ul > li:nth-child(6) > a' }).click();
        this.web.findElement({ id: 'name' }).sendKeys(string);
        this.web.findElement({ id: 'pass' }).sendKeys(string2);
        return this.web.findElement({ css: ".span-primary" }).click();
    });

    Then('导航到用户发帖界面', async function () {
        return this.web.findElement({ css: ".span-success" }).click()
    });

    Then('发布帖子，板块：{string}，标题：{string},内容:{string}', async function (string, string2, string3) {
        let tab = string;

        switch (tab) {
            case "请选择":
                this.web.findElement({ css: "#tab-value > option:nth-child(1)" }).click();
                break;
            case "分享":
                this.web.findElement({ css: "#tab-value > option:nth-child(2)" }).click();
                break;
            case "问答":
                this.web.findElement({ css: "#tab-value > option:nth-child(3)" }).click();
                break;
            case "招聘":
                this.web.findElement({ css: "#tab-value > option:nth-child(4)" }).click();
                break;

            default:
                break;
        }
        this.web.findElement({ id: "title" }).sendKeys(string2);
        let textarea = await this.web.findElement({ css: ".CodeMirror-scroll" });
        textarea.click();
        return this.web.actions().mouseMove(textarea).sendKeys(string3).perform();

    });
    Then('点击发布话题', function () {
        return this.web.findElement({ css: ".submit_btn" }).click();
    });


    Then('导航到发帖界面', function () {
        return this.web.findElement({ id: "create_topic_btn" }).click();
    });

    Then('导航到用户回复帖子界面', async function () {
        return this.web.get("http://118.31.19.120:3000/topic/59f098cde9bc0ed00c3bbe55")
    });

    Then('回复帖子内容:{string}', async function (string) {
        await this.web.executeScript(function () {
            document.querySelector("#reply_form .CodeMirror-scroll").scrollIntoView();
        })
        let posttext = await this.web.findElement({ css: "#reply_form .CodeMirror-scroll" })
        posttext.click();
        return this.web.actions().mouseMove(posttext).sendKeys(string).perform();
    });

    Then('点击回复 回复成功', function () {
        return this.web.findElement({ css: "#reply_form .submit_btn" }).click();
    });

})
