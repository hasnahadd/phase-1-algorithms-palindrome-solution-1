function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}
function reverseString(word) {
  return word.split("").reverse().join("");
}

/* 
reverse the input string
if the reversed string is the same as the input 
return true 
else 
return false
*/

/*
The reverseString function reverses a word by splitting, reversing, and rejoining its characters. 
The isPalindrome function uses the reverseString function to compare a word with its reverse, determining if it's a palindrome.
If the word and its reverse match, isPalindrome returns 'true'; otherwise, it returns 'false'.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;