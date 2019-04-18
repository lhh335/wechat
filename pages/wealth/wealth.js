const app = getApp()
Page({
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },
  showDialog() {
    console.log('点击dialog1');
    this.dialog.toggleDialog();
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.toggleDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.toggleDialog();
  }
})