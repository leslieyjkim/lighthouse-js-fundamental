// questions: you will be counting the number of vowels that appear in a given string. 

const numberOfVowels = function(data) {

  let count = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
    count++;
  }
}  
return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

//expected output is below;
// 3
// 5
// 5