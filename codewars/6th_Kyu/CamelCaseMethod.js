/*
CamelCase Method

Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):

"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

const camelCase = (string) => {
  return string
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join("");
};

const string1 = "hello my friend!";
const string2 = "hello case";

console.log(camelCase(string1)); // HelloMyFriend!
console.log(camelCase(string2)); // HelloCase
