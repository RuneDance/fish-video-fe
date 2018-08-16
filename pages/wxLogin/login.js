const app = getApp()

Page({
  data: {},

  // 登录  
  doLogin: function(e) {

    wx.login({
      success: function(res) {
        // 获取登录的临时凭证
        var code = res.code;
        // 调用后端，获取微信的session_key, secret
        wx.request({
          url: "http://172.18.97.159:8080/wxLogin?code=" + code,
          method: "POST",
          success: function(result) {
            // 保存用户信息到本地缓存，可以用作小程序端的拦截器
            app.setGlobalUserInfo(e.detail.userInfo);
            wx.redirectTo({
              url: '../index/index',
            });
          }
        });

      }
    })
  }
})