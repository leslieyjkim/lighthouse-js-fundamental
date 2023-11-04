// that will accept a string as an argument and return true if the string is a palindrome, or false if the string is not. 

// A palindrome is a word or text that can be read the same both forwards and backwards.

// Check if a string is a palindrome.

const isPalindrome = function(str) {

const reversed = str.split('').reverse().join('');

if (str === reversed) {
  return true;
} else {
  return false;
}
};

console.log(
  isPalindrome('racecar'),
  isPalindrome('abba'),
  isPalindrome('abc'),
  isPalindrome('abracadabra'),
  isPalindrome('kayak'),
);


// Expected Output
// true
// true
// false
// false
// true