const app = getApp()
Page({
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  data:{
    showText: '显示',
    location: {
      longitude: '',
      latitude: ''
    }
  },
  onReady: function() {
    this.my_map = this.selectComponent("#my_map");
    const self = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.log(res, '坐标位置');
        self.setData({
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        })
      },
    })
  },
  bindTaps(){
    this.showMap();
    this._toggleMap();
  },
  showMap() {
    this.my_map.toggleMaps();
  },
  //取消事件
  _toggleMap(flag){
    this.setData({
      showText: this.data.showText === '显示'? '隐藏': '显示'
    })
  }
})