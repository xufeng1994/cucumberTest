let { defineSupportCode } = require("cucumber");

let assert = require("assert");

defineSupportCode(function ({ Given, Then, When }) {
    Given('使用用户名{string}, 密码 {string} 登陆cnodejs论坛打开任意话题', function (string, string2) {
        this.web.get("http://192.168.20.111:7001/");
        this.web.findElement({ css: 'a[href="/signin"]' }).click()
        this.web.findElement({ id: "name" }).sendKeys(string)
        this.web.findElement({ id: "pass" }).sendKeys(string2)
        this.web.findElement({ css: ".span-primary" }).click()
        return this.web.findElement({ css: "a[href ='/topic/59f098cde9bc0ed00c3bbe55']" }).click()
    });

    Then('点击收藏按钮 提示收藏成功', function () {
        return this.web.findElement({ css: ".span-common.span-success.pull-right.collect_btn" }).click()
    });

    Then('返回首页，进入个人中心', function () {
        this.web.findElement({ css: "body > div.navbar > div > div > ul > li:nth-child(1) > a" }).click()
        return this.web.findElement({ css: "#sidebar > div:nth-child(1) > div.inner > div > div > a > img" }).click()
    });

    Then('在个人中心显示话题收藏，可点击查看收藏话题', async function () {
        this.web.findElement({ css: 'a[href="/user/xufeng/collections"]' }).click()
        // return this.web.findElement({css:'a[href = "/topic/59f5650ce9bc0ed00c3bbe67"]'}).click()
        let allwins = await this.web.getAllWindowHandles()
        await this.web.switchTo().window(allwins[1]);
        //切换到新窗口操作
        this.web.sleep(3000);
        return this.web.findElement({ css: 'a[href = "/topic/59f5650ce9bc0ed00c3bbe67"]' }).click()
    });

    Then('点击取消收藏，成功取消收藏', function () {
        return this.web.findElement({ xpath: '//*[@id="content"]/div[1]/div[1]/div[1]/input' }).click()
    });

    Then('返回首页 进入个人中心 没有看到收藏的话题', function () {
        this.web.findElement({ css: "body > div.navbar > div > div > ul > li:nth-child(1) > a" }).click()
        return this.web.findElement({ css: "#sidebar > div:nth-child(1) > div.inner > div > div > a > img" }).click()
    });

    Then('没有看到收藏的话题', async function () {
        let text = await this.web.findElement({ css: 'a[href="/user/xufeng/collections' }).getText()
        // console.log(text)
        //return assert.ok(text.equal(""))
        assert.deepEqual("4个话题收藏", text)
    });
})