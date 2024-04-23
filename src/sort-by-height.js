const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]  
 * 
 * 
 */
function sortByHeight(strach_na_wroble) {
    const vysky = strach_na_wroble.filter(vyska => vyska !== -1);
    
    vysky.sort((a, b) => a - b);
    
    let temp = 0;
    const sprpole = strach_na_wroble.map(item => {
      if (item === -1) {
        return item;
      } else {
        return vysky[temp++];
      }
    });
    console.log(sprpole);
    return sprpole;
    
  
}
sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])

module.exports = {
  sortByHeight
};
