@tabledata
Feature: use TableData
    
    Scenario: 用户登录
        Given 导航到用户登录界面
        When 输入用户信息
        |username|password|
        |xufeng|xf13451082032|
        Then 点击登录