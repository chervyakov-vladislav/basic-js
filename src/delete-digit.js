const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // не решено
  console.log(n);
  let array = n.toString().split('');
  let result = [];
  

    for (let i = 0; i < array.length; i++) {
      let variables = Array.from(array);
      console.log(variables)
      variables.splice(array[i], 1)
      console.log(variables)
      result.push(Number(variables.join('')))
    }

    return result
}

module.exports = {
  deleteDigit
};

let n = 152;

console.log(deleteDigit(n));

console.log(deleteDigit(1001))//, 101);
console.log(deleteDigit(342))//, 101);