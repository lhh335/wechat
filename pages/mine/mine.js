//mine.js
//获取应用实例
import {
  formatTime
} from '../../utils/util.js';
import {
  fetchData
} from '../../service/service.js';
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    visible: false
  },

  // 点击个人信息条目
  _bindTapRisk(){
    wx.navigateTo({
      url: './userInfo/userInfo',
    })
  },

  // 点击投资者声明
  _bindTapInvest() {

  },

  // 点击我的银行卡
  _bindTapBank() {
    wx.navigateTo({
      url: './bankList/bankList',
    })
  },

  //事件处理函数
  bindViewTap() {
    wx.switchTab({
      url: '/pages/wealth/wealth',
    })
  },
  toggleDialog() {
    this.setData({
      visible: !this.data.visible
    })
  },

  _confirmEvent() {
    this.toggleDialog();
    wx.navigateTo({
      url: './userInfo/userInfo',
    })
  },

  _cancelEvent () {
    this.toggleDialog();
  },
  handleTapHearder() {
    this.toggleDialog();
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      fetchData({
        url: 'https://app.harvestwm.cn/api/v1/app/productdetail?fundCode=003678',
        success: function(res) {
          console.log('请求数据成功', res);
        },
        fail: function(err) {
          console.log('返回错误信息', err);
        }
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})