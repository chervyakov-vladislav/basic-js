const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.arrCounter = 0;
    this.tmpDepth = 1;
    this.arr = [];
    this.tmp = [];
  }

  calculateDepth(arr) {

    this.depth = 1;
    // console.log(this.nestedArray(arr))
    if (this.nestedArray(arr)) {
      this.tmp = arr.flat();
      return this.depth + this.calculateDepth(this.tmp);
    } 
      
    
    return this.depth
  }

  nestedArray(arr) {
    return arr.some(item => Array.isArray(item)) ? true : false
  }
}

module.exports = {
  DepthCalculator
};


const depthCalc = new DepthCalculator();
 console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]));// => 1
 console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));// => 2
 console.log(depthCalc.calculateDepth([[[]]])); // => 3
 console.log(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));//, 8);
 console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));//, 31);