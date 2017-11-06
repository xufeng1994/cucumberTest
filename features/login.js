let { defineSupportCode } = require("cucumber")

let assert = require("assert")

defineSupportCode(function ({ Given, Then, When }) {

  Given('使用Chrome浏览器打开URL,并进入登录界面', async function () {
    await this.web.get("http://118.31.19.120:3000/")
    return this.web.findElement({ css: 'a[href="/signin"]' }).click()
  });

  Then('直接点击登录按钮', function () {
    return this.web.findElement({ css: ".span-primary" }).click()
  });

  Then('提示{string}', async function (string) {
    let errortips = await this.web.findElement({ css: ' div.inner > div > strong' }).getText()
    return assert.deepEqual(string, errortips)
  });

  Then('输入错误的用户名，点击登录', function () {
    this.web.findElement({ id: "name" }).sendKeys("11111111")
    this.web.findElement({ id: "pass" }).sendKeys("3413413");
    return this.web.findElement({ css: ".span-primary" }).click()
  });

  

  Then('输入正确的用户名，错误的密码', function () {
    this.web.findElement({ id: "" }).sendKeys("xufeng")
    this.web.findElement({ id: "" }).sendKeys("x13451082032");
    return this.web.findElement({ css: ".span-primary" }).click()

  });

  Then('也提示{string}', async function (string) {
    let errortips = await this.web.findElement({ css: ' div.inner > div > strong' }).getText()
    return assert.deepEqual(string, errortips)
  });

  Then('输入正确的用户名和密码,点击登录按钮', function () {
    this.web.findElement({ id: "name" }).sendKeys("xufeng")
    this.web.findElement({ id: "pass" }).sendKeys("xf13451082032");
    return this.web.findElement({ css: ".span-primary" }).click()
  });

  Then('登录成功，进入主页面', async function () {
    let assertUserName = await this.web.findElement({ css: '.user_card .user_name' }).getText();
    return assert.equal(assertUserName, "xufeng")
  });

  When('用户名输入：{string},密码输入：{string}', function (string, string2) {
    this.web.findElement({ id: "name" }).sendKeys("xufeng")
    this.web.findElement({ id: "pass" }).sendKeys("xf13451082032");
    return this.web.findElement({ css: ".span-primary" }).click()
  });

  Then('点击登录按钮 应该收到{string}',async function (string) {
    let errortips = await this.web.findElement({ css: ' div.inner > div > strong' }).getText()
    return assert.deepEqual(string, errortips)
  });
})