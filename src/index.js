module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.join('').split(',').join('');
  let arrStr = str.split('');
  for (let item = 0; item < arrStr.length; item++) {
    if (arrStr[item + 1] === config[config.indexOf(arrStr[item]) + 1]) {
      arrStr.splice(item, 2)
      item = -1;
      if (arrStr.length === 0) return true
      continue
    }
    continue
  }
  return false
}