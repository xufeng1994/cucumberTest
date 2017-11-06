@login

Feature: 登录功能用例
    不场景的登录功能实现
    负责人： 徐枫
    日期： 2017-11-05

    Background: 打开nodejs论坛
        Given 使用Chrome浏览器打开URL,并进入登录界面
    
    Scenario: 不输入任何元素直接点击登录
        Then 直接点击登录按钮
        Then 提示"信息不完整。"

    Scenario: 用户名或密码错误
        Then 输入错误的用户名，点击登录
        Then 提示"用户名或密码错误"
        Then 输入正确的用户名，错误的密码
        Then 也提示"用户名或密码错误"
    
    Scenario: 输入正确的用户名和密码
        Then 输入正确的用户名和密码,点击登录按钮
        Then 登录成功，进入主页面
    @differScen
    Scenario Outline: 不同登录场景
        When 用户名输入："<username>",密码输入："<password>"
        Then 点击登录按钮 应该收到"<tipmessage>"
        Examples:
        |username|password|tipmessage|
        |        |        |信息不完整。|
        |12313223|        |信息不完整。|
        |        |12313223|信息不完整。|
        |xufeng|1233534|用户名或者密码错误|
        # |xufeng|xf13451082032|      |


    
        