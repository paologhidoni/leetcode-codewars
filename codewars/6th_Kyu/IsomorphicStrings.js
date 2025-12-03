// Check if two words are isomorphic to each other

// Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b.
// And all occurrences of every character in a map to same character in b.

// Task
// In this kata you will create a function that return True if two given strings are isomorphic to each other, and False otherwise.
// Remember that order is important.

// Your solution must be able to handle words with more than 10 characters.

// Example
// True:

// CBAABC DEFFED
// XXX YYY
// RAMBUNCTIOUSLY THERMODYNAMICS
// False:

// AB CC
// XXY XYY
// ABAB CD

function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map1 = {}; // Maps str1 -> str2
  const map2 = {}; // Maps str2 -> str1

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    if (
      (map1[char1] && map1[char1] !== char2) ||
      (map2[char2] && map2[char2] !== char1)
    ) {
      return false;
    }

    map1[char1] = char2;
    map2[char2] = char1;
  }

  return true;
}

// ✅ Test Cases
// console.log(isIsomorphic("egg", "add")); // true
// console.log(isIsomorphic("foo", "bar"));    // false
// console.log(isIsomorphic("paper", "title")); // true
// console.log(isIsomorphic("ab", "aa"));      // false ❌ (Incorrect mapping 'b' → 'a')
// console.log(isIsomorphic("bbbaaaba", "aaabbbba")); // false
console.log("RAMBUNCTIOUSLY", "THERMODYNAMICS"); // true
