/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.

Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

function validBraces(braces) {
  // keep track of how many sets of braces are open using a variable as counter
  let round = 0;
  let square = 0;
  let curly = 0;

  let typesOfBracket = 0;

  for (let i = 0; i < braces.length; i++) {
    switch (braces[i]) {
      case "(":
        round += 1;
        break;
      case ")":
        round -= 1;
        break;
      case "[":
        square += 1;
        break;
      case "]":
        square -= 1;
        break;
      case "{":
        curly += 1;
        break;
      case "}":
        curly -= 1;
        break;
    }

    // console.log(`round: ${round}\nsquare: ${square}\ncurly: ${curly}`);

    const isInvalid = [round, square, curly].some((el) => {
      return el < 0;
    });

    const notAllClosed = [round, square, curly].some((el) => el > 0);

    if (isInvalid && notAllClosed) return false;
  }

  return true;
}
// console.log(validBraces("(){}[]")); // true
// console.log(validBraces("([{}])")); // true
// console.log(validBraces("(}")); // false
console.log(validBraces("[(])")); // false
// console.log(validBraces("[({})](]")); // false
