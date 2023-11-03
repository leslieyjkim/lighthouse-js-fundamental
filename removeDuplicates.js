// For this challenge, you will implement a function called removeDuplicates() that will accept an array as an argument and return a new array with all duplicate values removed.

const removeDuplicates = function(arr) {    //We define a removeDuplicates function that takes an array arr as input.

let uniqueArray = [];  //We create an empty array uniqueArray to store the unique elements.

for (let i = 0; i < arr.length; i++) {         //We iterate through the input array using a for loop.
  if (uniqueArray.indexOf(arr[i]) === -1) {    
    uniqueArray.push(arr[i]);
  }
}
  return uniqueArray;

};

console.log(
  removeDuplicates([1, 2, 2, 2, 3, 4, 5]),
  removeDuplicates(['a', 'b', 'b', 'c', 'd', 'e', 'e', 'a', 'f']),
);


//For each element in the input array, we use the 'indexOf' method to check if it already exists in the uniqueArray. 
//If it doesn't exist (i.e., indexOf returns -1), we add it to the uniqueArray.


// The indexOf() method returns the position of the first occurrence of a value in a string.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method is case sensitive.

//output will be
// [ 1, 2, 3, 4, 5 ] [ 'a', 'b', 'c', 'd', 'e', 'f' ]