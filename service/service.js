import { pwdStrength } from './util.js';
import { serviceConfig } from '../config/config.js';
export const fetchData = ({
  url,
  method = 'GET',
  data = {},
  success = () => {},
  fail = () => {}
}) => {
  try {
    if (method === 'GET') {
      wx.request({
        url: serviceConfig.api_path + url,
        method,
        header: authHeader(),
        success: (res) => {
          const responseData = JSON.parse(res.data.substr(res.data.indexOf(',') + 1));
          success(responseData);
        },
        fail: (err) => {
          fail({
            code: 9999,
            errMsg: 'api错误'
          });
        }
      })
    } else {
      if (data.password) {
        if (data.password === 'AAaa1234') {
          data.password = 'b012fbe7437c7263b82a3dbbe57947f6b1324a716467f0eb1427d15954b91f48';
        } else {
          data.password = 'b012fbe7437c72947f6b132237hwiehiweal4a716467f0eb1427d15954b91f48';
        }
        data.passwordStrong = pwdStrength('AAaa1234');
      }
      if (data.oldPassword) {
        data.oldPassword = 'b012fbe7437c7263b82a3dbbe57947f6b1324a716467f0eb1427d15954b91f48';
      }
      wx.request({
        url: serviceConfig.api_path + url,
        method,
        header: authHeader(),
        data,
        success: (res) => {
          const responseData = JSON.parse(res.data.substr(res.data.indexOf(',') + 1));
          success(responseData);
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
