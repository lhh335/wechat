export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const REG_PHONE = /^1[0123456789]\d{9}$/; // 手机号正则校验
export const REG_PASS = /^[a-zA-Z0-9_!$.]{6,18}$/; // 密码正则校验
export const REG_USER = /[\u4e00-\u9fa5]+/; // 包含中文