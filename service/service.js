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
        url,
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
      wx.request({
        url,
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

const authHeader = (header) => {
  let headers = {
    "Content-Type": "application/json"
  }
  if (header) {
    headers = Object.assign(headers, header);
  }
  return headers;
}
