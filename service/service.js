import { encrypt } from './util.js';
import { serviceConfig } from '../config/config.js';
export const fetchData = ({
  url,
  method = 'GET',
  data = {},
  success = () => { },
  fail = () => { }
}) => {
  try {
    if (method === 'GET') {
      wx.request({
        url: serviceConfig.api_path + url,
        method,
        header: authHeader(),
        success: (res) => {
          success(res.data || {});
        },
        fail: (err) => {
          fail({
            code: 9999,
            errMsg: 'api错误'
          });
        }
      })
    } else {
      // POST 方法
      if (data.password) {
        data.password = encrypt(data.password);
        // data.passwordStrong = pwdStrength('AAaa1234');
      }
      if (data.oldPassword) {
        data.oldPassword = encrypt(data.oldPassword);
      }
      wx.request({
        url: serviceConfig.api_path + url,
        method,
        header: authHeader(),
        data,
        success: (res) => {
          success(res.data || {});
        },
        fail: (err) => {
          fail({
            code: 9999,
            errMsg: 'api错误'
          });
        }
      })
    }
  } catch (e) {
    fail({
      code: 9999,
      errMsg: 'api错误'
    });
  }
}

// try {
//   wx.setStorageSync('token','');
// } catch (e) { }

const authHeader = (header) => {
  let headers = {
    "Content-Type": "application/json",
    "token": wx.getStorageSync('token') || ''
  }
  if (header) {
    headers = Object.assign(headers, header);
  }
  return headers;
}
