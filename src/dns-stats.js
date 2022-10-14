const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  domains = domains.map((elem) => elem.split('.'))
  let result = domains.reduce((value, elem) => {
    let key = '';
    let keys = elem.reverse().map(item => {
      key += `.${item}`
      return key
    })
    keys.forEach(elem => {
      value[elem] = (value[elem] || 0) + 1
    })
    return value;
  }, {})
  return result
}

module.exports = {
  getDNSStats
};


domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
  ]

  console.log(getDNSStats(domains));

  // let glovesObj = gloves.reduce((value, color)=> {
  //   value[color] = (value[color] || 0) + 1;
  //   return value;
  // }, {})