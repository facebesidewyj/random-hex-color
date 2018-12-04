'use strict'

/**
 * 获得随机的颜色值
 * @return {String} 返回随机的颜色字符串
 */
function getRandomColor() {
  return (
    '#' +
    Math.random()
      .toString(16)
      .substring(2)
      .substr(0, 6)
  )
}

module.exports = getRandomColor
