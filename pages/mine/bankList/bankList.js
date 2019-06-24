// pages/mine/bankList/bankList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bankList: [
      {
        bankName: '中国银行',
        bankNO: '9379 **** **** 2739',
        bankColor: '#ff6666',
        bankIcon: "/images/banklist/002.png"
      },
      {
        bankName: '中国工商银行',
        bankNO: '3471 **** **** 7631',
        bankColor: '#3399ff',
        bankIcon: '/images/banklist/005.png'
      },
      {
        bankName: '中国农业银行',
        bankNO: '0992 **** **** 7911',
        bankColor: '#33cc99',
        bankIcon: '/images/banklist/002.png'
      },
      {
        bankName: '招商银行',
        bankNO: '9379 **** **** 2392',
        bankColor: '#ff6666',
        bankIcon: '/images/banklist/007.png'
      },
    ],
    page_minHeight: wx.getSystemInfoSync().windowHeight,
    isShowDialog: false,
    deviceWidth: wx.getSystemInfoSync().windowWidth
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  _cancelEvent () {
    this._changeDialogVisible();
  },

  _confirmEvent () {
    this._changeDialogVisible();
    
  },

  _onTap () {
    this._changeDialogVisible();
  },

  _changeDialogVisible() {
    this.setData({
      isShowDialog: !this.data.isShowDialog
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})