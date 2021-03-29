const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    let keys = key.toUpperCase();
    keys = keys.repeat(Math.ceil(message.length / key.length)).split('');

    let code = "";
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 &&  message.charCodeAt(i) < 91) {
        code = code + String.fromCharCode(((message.charCodeAt(i) + keys[0].charCodeAt(0)) % 26) + 65);
        keys.shift();
      } else {
        code = code + message.charAt(i);
      }
    };

    if (this.type === false) {
      return code.split('').reverse().join('');
    }
    return code;
  };    
  decrypt(message, key) {
    message = message.toUpperCase();
    let keys = key.toUpperCase();

    keys = key.repeat(Math.ceil(message.length / key.length)).split('');

    let code = "";
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 &&  message.charCodeAt(i) < 91) {
        code = code + String.fromCharCode(((message.charCodeAt(i) + 26 - keys[0].charCodeAt(0)) % 26) + 65);
        keys.shift();
      } else {
        code = code + message.charAt(i);
      }
    };

    if (this.type === false) {
      return code.split('').reverse().join('');
    };
    return code;
  }
};

module.exports = VigenereCipheringMachine;
