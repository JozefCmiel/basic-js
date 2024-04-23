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
function createDreamTeam(tlapkovaPatrola) {
  if(tlapkovaPatrola.length === 0){
    return false;
  }
  let ziymiok = [];
  const tlapkovaPatrolaOnly = tlapkovaPatrola.filter(item => typeof item === 'string');
  for(let i = 0; i < tlapkovaPatrolaOnly.length; i++){
    for(let j = 0; j < 1; j++){
      ziymiok = ziymiok + tlapkovaPatrolaOnly[i][0];
    }
  }
  return ziymiok.split("").sort().join("");
}

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));

module.exports = {
  createDreamTeam
};
