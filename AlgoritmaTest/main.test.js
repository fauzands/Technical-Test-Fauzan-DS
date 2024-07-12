const { reverseAlphabet, longestWord, queryOccurrences,
    diagonalDifference } = require( "./main.js");

test('reverseAlphabet membalik huruf dalam string', () => {
    expect(reverseAlphabet('NEGIE1')).toBe('EIGEN1');
});

test('longestWord menemukan kata terpanjang dalam kalimat', () => {
    expect(longestWord('Saya sangat senang mengerjakan soal algoritma')).toBe('mengerjakan: 11 characters');
});

test('queryOccurrences menghitung kejadian query dalam input list', () => {
    expect(queryOccurrences(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz'])).toEqual([1, 0, 2]);
});

test('diagonalDifference menghitung selisih absolut antara diagonal', () => {
    expect(diagonalDifference([[1, 2, 0], [4, 5, 6], [7, 8, 9]])).toBe(3);
});