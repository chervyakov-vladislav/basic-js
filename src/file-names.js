const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length==0) return [];

  let newNames = [];

  let resultObj = names.reduce((value, name) => {
    value[name] = (value[name] || 0) + 1;
    if (newNames.includes(name)) {
      newNames.push(name + `${value[name] == 1 ? `(${value[name]})` : `(${value[name]-1})`}`);
    } else newNames.push(name)
    return value;
  }, {} )

  return newNames;
}

module.exports = {
  renameFiles
};


console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))