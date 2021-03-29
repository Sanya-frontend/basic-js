const CustomError = require("../extensions/custom-error");

const chainMaker = {
  "link": [],

  getLength() {
   let chainLength = chainMaker.link.filter(function(i) {
      return i !== undefined;
    });
    return chainLength.length;
  },
  addLink(value) {
    chainMaker.link.push(value);
    return chainMaker;
  },
  removeLink(position) {
    let clearChain = chainMaker.link.filter(function(i) {
      return i !== undefined;
    });
    chainMaker.link = clearChain;

    if ( position <= 0 || !Number.isInteger(position) || position > chainMaker.link.length) {
        chainMaker.link = [];
        throw new Error();
    }
    chainMaker.link[position - 1] = undefined;
    return chainMaker;
  }
  reverseChain() {
    chainMaker.link = chainMaker.link.reverse();
    return chainMaker;
  },
  finishChain() {
    let clearChain = chainMaker.link.filter(function(i) {
      return i !== undefined;
    });

    let result = "";
    clearChain.forEach(function (element) {
      result = result + "( " + element + " )~~";
    });
    chainMaker.link = [];
    return result.slice(0,-2);
  }
};

module.exports = chainMaker;
