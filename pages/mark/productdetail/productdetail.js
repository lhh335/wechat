import { fetchData } from '../../../service/service.js';
const app = getApp();
Page({
  data: {
    productDetail: {
      
    }
  },
  onLoad: () => {
    fetchData({
      url: '/bannerlist?position=accessOrderGroup',
      success: (res) => {
        console.log(res, '调用接口234');
      },
      fail: () => {

      }
    })
  }
})