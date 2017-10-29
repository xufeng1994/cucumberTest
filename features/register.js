let { defineSupportCode } = require("cucumber")

let assert = require("assert")

defineSupportCode(function ({ Given, Then, When }) {

  Given('导航到注册页面', function (callback) {
    this.web.findElement({ css: 'a[href:"/signup"]' }).click()
  });

  When('在注册用户信息中填入注册信息', function () {
    this.web.findElement({ id: "loginname" }).sendKeys("xiaoming");
    this.web.findElement({ id: "pass" }).sendKeys("1234567");
    this.web.findElement({ id: "re_pass" }).sendKeys("654321")
    return this.web.findElement({ id: "email" }).sendKeys("xiamin@163.com");
  });

  Then('点击注册按钮，注册失败,得到错误提示信息。',async function () {
    this.web.findElement({ css: ".span-primary" }).click();
    let errtip = await this.web.findElement({ css: "#content > div > div.inner > div > strong" }).getText();

    return assert.deepEqual("两次密码输入不一致。", errtip);
  });

  Then('错误提示信息为{string}', async function (string) {
    this.web.findElement({ css: ".span-primary" }).click();
    let errtip = await this.web.findElement({ css: "#content > div > div.inner > div > strong" }).getText();

    return assert.deepEqual(string, errtip);
  });

  When('注册信息中 email 输入{string}', function (string) {
    this.web.findElement({ id: "loginname" }).sendKeys("xiaoming");
    this.web.findElement({ id: "pass" }).sendKeys("1234567");
    this.web.findElement({ id: "re_pass" }).sendKeys("654321")
    return this.web.findElement({ id: "email" }).sendKeys(string);
  });

  Then('错误提示信息为{string}', async function (string) {
    this.web.findElement({ css: ".span-primary" }).click();
    let errtip = await this.web.findElement({ css: "#content > div > div.inner > div > strong" }).getText();

    return assert.deepEqual(string, errtip);
  });

  When('用户名输入{string},密码输入{string},重复密码输入{string},邮箱输入{string}', function (string, string2, string3, string4, callback) {
    console.log("username,", string, "password", string2, "repass", string3, "email", string4)

    this.web.findElement({ id: "loginname" }).sendKeys(string);
    this.web.findElement({ id: "pass" }).sendKeys(string2);
    this.web.findElement({ id: "re_pass" }).sendKeys(string3)
    return this.web.findElement({ id: "email" }).sendKeys(string4);
  });

  Then('点击提交，应该收到{string}',async function (string, callback) {
    await this.web.findElement({ css: ".span-primary" }).click();
    let errtip = await this.web.findElement({ css: "#content > div > div.inner > div > strong" }).getText();
    return assert.deepEqual(string, errtip);
  });
})