const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let character = '';
  let s1Characters = s1.split('');
  let s2Characters = s2.split('');

  // let isUnique = (item) => {
  //   if (count.length == 0) count.push(item);
  //   let flag = 0;
  //   for (let i = 0; i < count.length; i++) {
  //     if (count[i] == item) flag++
  //   }
  //   if (flag == 0) count.push(item);
  // }

  for (let i = 0; i < s1Characters.length; i++) {
    if (s2.includes(s1Characters[i])) {
      count++;
      s2 = s2.replace(s1Characters[i], '');
    }
  }
  
  return count;
}

module.exports = {
  getCommonCharacterCount
};


console.log(getCommonCharacterCount('aabcc', 'adcaa')) // 3