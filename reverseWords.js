//That will accept a string of space-separated words and return a copy of the string featuring the same words in reverse order.

const reverseWords = function(str) {

let wordsArray = str.split(' ');
  
let reversedArray = wordsArray.reverse();

let reversedString = reversedArray.join(' ');

return reversedString;
};

console.log(
  reverseWords('hello and welcome to Lighthouse Labs'),
  reverseWords('am I Yoda')
);

//We use the split method to split the input string into an array of words. The space character (' ') is used as the separator.

// We use the reverse method to reverse the order of words in the array.

// Finally, we use the join method to join the reversed array of words back into a single string with spaces as separators.

// When you run this code with the input string "am I Yoda," it will produce the expected output: "Yoda I am."