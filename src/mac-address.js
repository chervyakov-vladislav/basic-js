const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-');
  if (arr.length != 6) return false
  let correctValues = ['0','1','2','3','4','5','6','7','8','9', 'A','B','C','D','E','F'];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let tmpArr = arr[i].split('');
    
      for(let i = 0; i < tmpArr.length; i++) {
        for (let j = 0; j < correctValues.length; j++) {
          if (tmpArr[i] == correctValues[j]) {
            counter++
          }
        }
      }
  }

  return counter == 12 ? true : false
}
module.exports = {
  isMAC48Address
};

console.log(isMAC48Address('00-1B-63-84-45-E6'));
