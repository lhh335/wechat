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
  onClickItem () {
    wx.navigateTo({
      url: './productdetail/productdetail',
    })
    return;
  },
  /**
   * 只有定义了onShareAppMessage这个API，转发按钮和功能才有效
   */
  onShareAppMessage (res){
    if (res.from === 'button') {
      console.log('这是要转发了');
    }
    return {
      title: '分享转发小程序',
      path: '/pages/mark/mark'
    };
  },
  onShow () {
    //  Page.route ====== 当前页面的路由 
    console.time();
    console.log(this.route);
    console.log(wx.env, '微信的环境变量');
    console.timeEnd();
  },
  getCurrentPages (e) {
    console.log('获取当前路由栈', e);
  },
  onTabItemTap (e) {
    console.log(e, '点击tab');
  }
})
