module.exports = function countCats(matrix) {
    let count = 0;
    let number = matrix.length;
      for (let i = 0; i < number; i++) {
        matrix[i].forEach(element => {
          if (element === "^^") {
            count++;
          }
        });
      }
    return count;
  };
