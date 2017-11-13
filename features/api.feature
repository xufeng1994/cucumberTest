@apiTest
Feature: ApiTest
    Url:http://118.31.19.120:3000/api
    Date:2017-11-03
    author: imzack
    npm: https://www.npmjs.com/package/axios

    Scenario: post /topics 新建主题
    接收 post 参数 
    返回值{success: true, topic_id: '5433d5e4e737cbe96dcef312'}

        Given 发送post请求请求参数为
        """
        {
            "accesstoken":"931e9e9b-51c2-4230-8eeb-365b7db3b0a0",
            "title":"1234563223237",
            "tab":"ask",
            "content":"123132132243433"
        }
        """
        When 返回结果中应该有
        """
        {"success": true}
        """
      
    
    

    