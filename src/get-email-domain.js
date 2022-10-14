const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('');
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '@') {
      result = arr.slice(i+1, arr.length)
    }
  }
  return result.join('')
}

module.exports = {
  getEmailDomain
};


console.log(getEmailDomain(`prettyandsimple@example.com`))