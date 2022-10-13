const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let result = []
  for (let i =0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      switch (arr[i]) {
        case '--discard-next':
          if (arr[i+1]) {
            i += 2;
            if (arr[i] == '--discard-prev' && arr[i] == '--double-prev') {
              i++;
            }
          }
          continue;
        case '--discard-prev':
          if (arr[i-1]) result.pop();
          continue;
        case '--double-next':
          if (arr[i+1]) result.push(arr[i+1]);
          continue;
        case '--double-prev':
          if (arr[i-1]) result.push(arr[i-1]);
          continue;
        default:
          result.push(arr[i])
          continue;
      }
      
    } else {
      result.push(arr[i]);
    }
    
  }
    


  return result
}

module.exports = {
  transform
};

let sampleArr = [];

for (let i=0; i < 50; i++) {
  sampleArr[i] = i;
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))