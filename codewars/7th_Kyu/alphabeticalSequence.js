/* In this kata you will be given a random string of letters and tasked with returning 
them as a string of comma-separated sequences sorted alphabetically, 
with each sequence starting with an uppercase character followed by n-1 lowercase characters, 
where n is the letter's alphabet position 1-26.

Example
"ZpglnRxqenU" -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"


Technical Details
The string will include only letters.
The first letter of each sequence is uppercase followed by n-1 lowercase.
Each sequence is separated with a comma.
Return value needs to be a string.

*/

// decleare constant to hold alphabet
// alphabetically sort letters
// decleare variable to hold final string
// loop over string, for each letter check what is its index in the alphabet
// use repeat to add it to a string as many times as its index
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function transform(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const orderedLetters = string.toLowerCase().split("").sort();
  let finalString = "";

  for (let i = 0; i < orderedLetters.length; i++) {
    const letterIndex = alphabet.indexOf(orderedLetters[i]);
    let stringToConcat =
      orderedLetters[i].toUpperCase() + orderedLetters[i].repeat(letterIndex);
    finalString = finalString.concat(",", stringToConcat);
  }

  return finalString.slice(1, finalString.length);
}

console.log(transform("ZpglnRxqenU"));
console.log(
  transform("ZpglnRxqenU") ===
    "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
);

console.log("b".charCodeAt() - 97, "INDEX USING CHARCODE AT");
console.log(alphabet.indexOf("b"), "INDEX USING INDEXOF");
