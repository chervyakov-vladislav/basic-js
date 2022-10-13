const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  members = members.filter((item) => { return (typeof(item) === 'string') ? true : false })
  if (members.length == 0) return false

  members = members.map(item => Array.from(item.trim())[0].toUpperCase())

  members = members.join('').split('').sort().join('');
  return members
}

module.exports = {
  createDreamTeam
};


console.log(createDreamTeam(['    Matt Damon', 'Ann    ', 'Dmitry', 'Max']),
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));
console.log(createDreamTeam([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
]))//, 'ADGJKMNPRSTW');)

console.log(createDreamTeam([
  'amelia',
  'ruby',
  'lily',
  'grace',
  'millie',
  'daisy',
  'freya',
  'erin',
  'megan',
  'jasmine',
  'brooke',
]))//, 'ABDEFGJLMMR');)