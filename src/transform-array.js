const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  if (arr.length == undefined) {
    return "Error";
  };
  let res = [];
  let a = arr.slice();
  for (let i = 0; i < a.length; i++){
    if (a[i] == '--discard-next') {
       i++;
       a[i] = undefined;
      continue;
      };
    if (a[i] == '--discard-prev') { 
      if(a[i - 1] !== undefined) res.pop();
      continue;
      };
    if (a[i] == '--double-next') {
       res.push(a[i + 1]);
      continue;
      };
    if (a[i] == '--double-prev') {
       res.push(a[i - 1]);
      continue;
      };
    res.push(a[i]);
  }
  return res.filter((item) => item !== undefined);
};
