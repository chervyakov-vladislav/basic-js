const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let n = arr.length;

  let digits = arr.reduce((value, item) => {
    if (item != -1) value.push(item) 
    return value
  }, []).sort((a,b) => a - b);

  let result = arr.map(item => {
    if (item != -1) {
      item = digits[0];
      digits.shift();
    }
    return item
  })
  
  return result
}

module.exports = {
  sortByHeight
};

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
