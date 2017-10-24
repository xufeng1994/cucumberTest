@collect
Feature: Collect topic Test
    收藏话题功能实现
    负责人： 徐枫
    时间 2017-10-22

    Background: 用户登录
        Given 使用用户名"xufeng", 密码 "xf13451082032" 登陆cnodejs论坛打开任意话题
    
    Scenario: 收藏话题 
        分别收藏问答/招聘/分享的话题  可以收藏成功
        Then 点击收藏按钮 提示收藏成功
        Then  返回首页，进入个人中心
        Then  在个人中心显示话题收藏，可点击查看收藏话题

    Scenario: 取消收藏
        在已经收藏的话题中点击取消收藏   可以成功取消
        Then 点击取消收藏，成功取消收藏
        Then 返回首页 进入个人中心 
        Then 
    