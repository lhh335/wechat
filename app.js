//app.js
import { APP_INIT } from "./service/apiName.js";
import { fetchData } from "./service/service.js";


App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // 初始化项目
    fetchData({
      url: APP_INIT,
      success: (res) => {
        console.log('app初始化成功', res);
        if (res.status.code === 10000) {
          if (res.data.token) {
            this.globalData.login = true;
            wx.setStorageSync('token', res.data.token)
          } else {
            this.globalData.login = false;
            wx.removeStorageSync('token');
          }
          let timer = setTimeout(() => {
            console.log('进入到这');
            wx.showTabBar({})
            wx.switchTab({
              url: '/pages/wealth/wealth',
            })
            timer = null;
          }, 100)
        } else {
          if (res.status.coe === 401) {
            wx.redirectTo({
              url: '/pages/login/login',
            })
          }
          this.globalData.login = false;
        }
      },
      fail: (err) => {
        this.globalData.login = false;
      }
    })
    // 登录
    wx.login({
      success: res => {
        console.log('微信登录成功', res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('获取用户信息成功', wx);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('授权用户信息成功', res);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onError: function (err) {
    console.log('小程序出错', err);
  },
  onPageNotFound: function (e) {
    console.log(e, '页面不存在');
    wx.redirectTo({
      url: '/pages/noPage/noPage',
    })
  },
  onShow: function (e) {
    console.log('onShow', e);
  },
  globalData: {
    userInfo: null, // 用户信息
    login: false, // 是否登录
  }
})