//mark.js
//获取应用实例
import { fetchData } from '../../service/service.js';
const app = getApp()

Page({
  data: {
    showList: [
      {
        label: '稳健收益',
        id: 1
      },
      {
        label: '公募排行',
        id: 2
      },
      {
        label: '定投专区',
        id: 3
      },
      {
        label: '销量排行',
        id: 4
      },
      {
        label: '二级市场',
        id: 5
      },
      {
        label: '股权投资',
        id: 6
      },
      {
        label: '类固收',
        id: 7
      },
      {
        label: '海外投资',
        id: 8
      }
    ]
  },
  onClickItem: function(){
    wx.navigateTo({
      url: './productdetail/productdetail',
    })
    return;
    // fetchData({
    //   url: '',
    //   success: (res) => {

    //   },
    //   fail: () => {
        
    //   }
    // })
  },
  onLoad: function () {
    
  }
})
