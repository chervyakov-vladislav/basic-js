const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isReverse = isDirect ? false : true;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    key.toUpperCase();
    message.toUpperCase().trim();

    let result;

    if (this.isReverse) return result.split('').reverse().join('');
    
    return result
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    key.toUpperCase();
    message.toUpperCase().trim();

    let result;

    if (this.isReverse) return result.split('').reverse().join('');
    
    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};



// const directMachine = new VigenereCipheringMachine();

// const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))// => 'AEIHQX SX DLLU!');

// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))// => 'ATTACK AT DAWN!');

// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'))// => '!ULLD XS XQHIEA');

// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))// => '!NWAD TA KCATTA');


// attack at dawn!
// alphon ea phon
// AEIHQX SX DLLU!

// AEIHQX SX DLLU!
// alphon ea phon
// ATTACK AT DAWN!
