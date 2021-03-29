const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
   }
  let dreamTeam = [];
  let word = members[i];
  for (let i = 0; i < members.length; i++) {
    if (typeof word === "string") {
      dreamTeam.push(word.trim().charAt().toUpperCase());
    }
    return dreamTeam.sort().join('');
  }
};
