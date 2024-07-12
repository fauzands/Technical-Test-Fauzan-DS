function reverseAlphabet(inputStr) {
  const letters = inputStr.split('').filter(char => /[a-zA-Z]/.test(char));
  const reversedLetters = letters.reverse();
  let letterIndex = 0;
  return inputStr.split('').map(char => {
      if (/[a-zA-Z]/.test(char)) {
          return reversedLetters[letterIndex++];
      } else {
          return char;
      }
  }).join('');
}

function longestWord(sentence) {
  const words = sentence.split(' ');
  const longest = words.reduce((a, b) => a.length >= b.length ? a : b);
  return `${longest}: ${longest.length} characters`;
}

function queryOccurrences(inputList, queryList) {
  return queryList.map(query => inputList.filter(item => item === query).length);
}

function diagonalDifference(matrix) {
  const primaryDiagonal = matrix.reduce((sum, row, i) => sum + row[i], 0);
  const secondaryDiagonal = matrix.reduce((sum, row, i) => sum + row[row.length - 1 - i], 0);
  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

module.exports = {
  reverseAlphabet,
  longestWord,
  queryOccurrences,
  diagonalDifference
};
