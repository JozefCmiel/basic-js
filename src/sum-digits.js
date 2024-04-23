const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(kulki) {
  const duze = kulki.toString();
  let male = 0;
  
  for(let i = 0; i < duze.length; i++){
    male = male + parseInt(duze[i]);
  }
  
  while(male>=10){
  male = getSumOfDigits(male);
  }
  return male;
}
console.log(getSumOfDigits(100));


module.exports = {
  getSumOfDigits
};
