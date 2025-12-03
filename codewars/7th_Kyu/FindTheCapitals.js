/*
Find the capitals

Instructions

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]
*/

const capitals = function (word) {
  let orderedList = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      orderedList.push(i);
    }
  }
  return orderedList;
};

const word1 = "CodEWaRs";
const word2 = "iDioSinCRASY";

console.log(capitals(word1)); // [0,3,4,6]
console.log(capitals(word2)); // [1,4,7,8,9,10,11]
