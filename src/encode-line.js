const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let result = [];
  let valueArray = Array.from(str);

  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] == valueArray[i+1]) {
      counter++
    }  else {

      if (counter == 1) {
        result.push(`${valueArray[i]}`)
      } else {
        result.push(`${counter+valueArray[i]}`)
      }
      counter = 1
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};

console.log(encodeLine('aabbbc')); // 2a3bc
