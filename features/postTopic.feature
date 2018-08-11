@postTopic
Feature: 话题相关操作
    主要操作为发帖、回帖、收藏、取消以及删帖
    负责人： 徐枫
    日期：2017-10-24

  Background: 用户登录操作
    Given 用户登录,用户名输入"testuser1",密码输入"123456",成功登录

  Scenario Outline: 不同场景下发布话题
  用户登陆成功才能发帖
    Then 导航到用户发帖界面
    Then 发布帖子，板块："<tab>"，标题："<title>",内容:"<content>"
    Then 点击发布话题
    Then 发布成功，返回标题内容"title"

  Scenario: 回帖
  用户登陆成功  才能回帖
    Then 导航到用户回复帖子界面
    Then 回复帖子内容:"hkkjkmncvkh"
    Then 点击回复 回复成功