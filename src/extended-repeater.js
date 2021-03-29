const { usingPromise } = require("sinon");
const CustomError = require("../extensions/custom-error");
module.exports = function repeater(str, options) {
  let result = [];
  str = String(str);
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  if (options.additionRepeatTimes === undefined && options.addition !== undefined) {
    str += options.addition;
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    str = str + options.addition;
    if (i !== options.additionRepeatTimes - 1) {
      if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
      }
      str = str + options.additionSeparator;
    }
  }
  result = str;

  for (let i = 1; i < options.repeatTimes; i++) {
    if (options.separator === undefined) {
      options.separator = '+';
    }
    result += options.separator + str;
  }
  return result;
};
