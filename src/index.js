module.exports = function check(str, bracketsConfig) {
  let arr = [];
  if (bracketsConfig.length % 2 !== 0 || str.length % 2 !== 0) {
    return false;
  }

  if (Array.isArray(bracketsConfig)) {

  }

  if (arr.length !== 0) {
    return true;
  } else {
    return false;
  }
}