const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  if(!Array.isArray(members)) {
    return false;
   };
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      let word = members[i];
      if (typeof word == "string") {
        let name = word.trim().charAt().toUpperCase()
        dreamTeam.push(name)
      }
    }
  }
  return dreamTeam.sort().join('');
};
