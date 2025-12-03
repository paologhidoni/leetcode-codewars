/*
Alphabet Slices

Given a string of lowercase letters, find substrings that consist of consecutive letters of the lowercase English alphabet and return a similar string, but with these substrings in reversed alphabetical order.

examples:

("xabc")=> "xcba"

xa is not found in the alphabet, but abc is found, so it is reversed.

("pqrsxdef")=> "srqpxfed"

("jklxyz")=> "lkjzyx"

("vwxcdefg")=> "xwvgfedc"

("vvmnozzstubb")=> "vvonmzzutsbb"

Note: if there are no alphabet substrings in the input string, return the input string as is.

All inputs will consist of one or more lowercase letters. This kata uses only lowercase strings.
*/

function solution(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let consecutiveCharsStr = "";
  let finalString = "";

  for (let i = 0; i < str.length; i++) {
    let indexOfCharInAlphabet = alphabet.indexOf(str[i]);
    if (str[i + 1] !== alphabet[indexOfCharInAlphabet + 1] || str[i] === "z") {
      consecutiveCharsStr += str[i];
      consecutiveCharsStr = consecutiveCharsStr.split("").reverse().join("");
      finalString += consecutiveCharsStr;
      consecutiveCharsStr = "";
    } else {
      consecutiveCharsStr += str[i];
    }
  }
  return finalString;
}

const str1 = "pqrsxdef"; // srqpxfed
const str2 = "jklxyz"; // lkjzyx
const str3 = "vwxcdefg"; // xwvgfedc
const str4 = "vvmnozzstubb"; // vvonmzzutsbb
const str5 = "zaihmzmtsaz"; // zaihmzmtsaz

console.log(solution(str1));
console.log(solution(str2));
console.log(solution(str3));
console.log(solution(str4));
console.log(solution(str5));

// console.log(str[i], "CURRENT CHAR IN STRING");
// console.log(str[i + 1], "NEXT CHAR IN STRING");
// console.log(alphabet[indexOfCharInAlphabet + 1], "NEXT CHAR IN ALPHABET");

// console.log(
//   "NEXT CHAR IN STRING IS DIFFERENT THAN NEXT CHAR IN ALPHABET",
//   str[i + 1] !== alphabet[indexOfCharInAlphabet + 1]
// );
