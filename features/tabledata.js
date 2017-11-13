let { defineSupportCode } = require('cucumber');

let assert = require('assert');


defineSupportCode(function ({ Given, When, Then }) {

    Given('导航到用户登录界面', function () {

    });

    When('输入用户登录信息', function (dataTable) {
        // dataTable = {
        //     DataTable: {
        //         rawTable: [['username', 'password'], ['imzack', '123456']]
        //     }
        // }
        // DataTable = { rawTable: [ [ 'imzack', '123456' ] ] }
        // console.log("databable:", dataTable);
        
        // let userinfo = dataTable.rawTable;
        // let user, username, userpass;
        // for (let val of userinfo){
        //     user = val;
        // }
        // username = user[0];
        // userpass = user[1];
        // console.log("username",username,"userpass",userpass)
        console.log("datatable:",dataTable);
        let userinfo= dataTable.rawTable
        console.log("userinfo",userinfo);
        let username = userinfo[1][0];
        let userpass = userinfo[1][1];

        console.log("username",username,"userpass",userpass)
        

    });

    Then('点击登录', function () {

    });

});
