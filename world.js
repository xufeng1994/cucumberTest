require("chromedriver");
let {Builber} = require("selenium-webdriver")
let {defineSupportCode} = require("cucumber")

let customWorld = function(){
    this.web = new Builber().forBrowser("chrome").build();
}
defineSupportCode(function(setWorldConstructor){
    setWorldConstructor(customWorld)
})
