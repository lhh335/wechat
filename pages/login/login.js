// pages/login/login.js
import {
  REG_PASS,
  REG_USER
} from "../../utils/util.js";
import {
  fetchData
} from "../../service/service.js";
import {
  LOGIN
} from '../../service/apiName.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPwd: true,
    showPwdIcon: '',
    unShowPwdIcon: '',
    login_btn_disabled: true,
    username: '',
    password: '',
    loading: false
  },

  authBtn(username, password) {
    if (REG_PASS.test(password) && !REG_USER.test(username)) {
      this.setData({
        login_btn_disabled: false
      })
    } else {
      this.setData({
        login_btn_disabled: true
      })
    }
  },

  _numberChange(e) {
    const {
      password
    } = this.data;
    const value = e.detail.value;
    this.setData({
      username: value
    })
    this.authBtn(value, password);
  },

  _pwdChange(e) {
    const {
      username
    } = this.data;
    const value = e.detail.value;
    this.setData({
      password: value
    })
    this.authBtn(username, value);
  },

  _login() {
    const params = {
      username: this.data.username,
      password: this.data.password
    }
    this.setData({
      loading: true
    })
    // 登录接口
    fetchData({
      url: LOGIN,
      method: 'POST',
      data: params,
      success: ({
        data,
        status
      }) => {
        this.setData({
          loading: false
        })
        if (status.code === 10000) {
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000
          })
          let timer = setTimeout(() => {
            wx.showTabBar({})
            wx.switchTab({
              url: '/pages/wealth/wealth',
            })
            wx.setStorageSync('token', data.token);
            timer = null;
          }, 2000)
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 1000
          })
        }
      },
      fail: (err) => {
        this.setData({
          loading: false
        })
        wx.showToast({
          title: '登录失败',
          icon: 'fail',
          duration: 1000
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})