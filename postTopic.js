

Given('使用用户名:{string},密码:{string}  成功登录系统', function (string, string2, callback) {
    // Write code here that turns the phrase above into concrete actions
    this.web.get("http://www.baidu.com")
    callback(null, 'pending');
  });

  Then('导航到用户发帖界面', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('发布帖子，板块：{string}，标题：{string},内容:{string}', function (string, string2, string3, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('点击发布话题', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('导航到用户回复帖子界面', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('回复帖子内容:{string}', function (string, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('点击回复 回复成功', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });