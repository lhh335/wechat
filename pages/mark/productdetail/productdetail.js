import { fetchData } from '../../../service/service.js';
const app = getApp();
Page({
  data: {
    productDetail: {
      
    }
  },
  onLoad: () => {
    fetchData({
      url: 'https://app.harvestwm.cn/api/v1/app/bannerlist?position=accessOrderGroup',
      success: (res) => {
        console.log(res, '调用接口234');
      },
      fail: () => {

      }
    })
  }
})