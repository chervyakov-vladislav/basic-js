const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str == null) str = 'null'
  // if (typeof str == 'object') str = `${str}`;
  if (typeof str !== 'string') str.toString();
  
  if (options.addition == null) options.addition = 'null'
  if (options.addition && typeof options.addition !== 'string') options.addition.toString();

  let result = []
  let addition = [];

  let strSeparator = (options.hasOwnProperty('separator')) ? `${options.separator}` : '+';
  let additionSeparator = (options.hasOwnProperty('additionSeparator')) ? `${options.additionSeparator}` : '|';

  
  // if (typeof options.addition == 'object') addition.push(`${options.addition}`)

  
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(options.addition)
  }

  addition = addition.join(additionSeparator);

  if (options.hasOwnProperty('addition') && !options.hasOwnProperty('additionRepeatTimes')) {
    addition = options.addition;
  }

  if (!options.hasOwnProperty('repeatTimes')){
    result = str + addition;
    return result
  }

  for (let i=0; i < options.repeatTimes; i++) {
    if (options.hasOwnProperty('additionRepeatTimes')) {
      result.push(str+addition);
    }
    else {
      result.push(str);
    } 
  }

  

  return result.join(strSeparator);
}

module.exports = {
  repeater
};

console.log(repeater('STRING', { repeatTimes: 3, separator: '**', 
addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));

// 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));// nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null
console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })); //TESTstrADD!
const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};


console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }));