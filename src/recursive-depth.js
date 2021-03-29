const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 1;
    };

    let maxDepth = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        const depth = this.calculateDepth(element) + 1;
        if (maxDepth < depth) {
          maxDepth = depth;
        };
      }
      });
    return maxDepth;
  }
};
