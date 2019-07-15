/**
 * 密码强度计算.
 *
 * @param  {string} [password]
 * @return {string}
 */
export function pwdStrength(password) {
  let passwordStrong = '';
  const strongRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$', 'g');
  const mediumRegex = new RegExp(
    '^(?=.{7,})(((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[a-z])(?=.*\\W))|((?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*\\W))).*$',
    'g'
  );
  const enoughRegex = new RegExp('(?=.{6,}).*', 'g');
  if (enoughRegex.test(password) === false || password === undefined) {
    // 密码小于六位的时候，密码强度都为灰色
    passwordStrong = 1;
  } else if (strongRegex.test(password)) {
    // 密码为八位及以上并且字母数字特殊字符三项都包括,强度最强
    passwordStrong = 3;
  } else if (mediumRegex.test(password)) {
    // 密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
    passwordStrong = 2;
  } else {
    // 如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的
    passwordStrong = 1;
  }
  return passwordStrong;
}
