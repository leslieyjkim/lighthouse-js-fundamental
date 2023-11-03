//In this exercise, you will be given a normal string of words and will turn it into a percent-encoded string by replacing all whitespace with %20.

//Take a look at the following URL, specifically the last part:

// This URL will perform a Google search for the term "lighthouse labs". Notice that when the string "lighthouse labs" is part of a URL, the space is replaced with %20.

// If you want to add a parameter to a URL, there are certain characters that must be encoded in order to make the URL valid. There are many characters that must be encoded, including: , !, ", and #. For this exercise, you will only be focusing on replacing the space with %20.



const urlEncode = function(text) {
 let trimText = text.trim();
  let urlString = trimText.split(" ").join("%20");
  return urlString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


//output will be 
//Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure