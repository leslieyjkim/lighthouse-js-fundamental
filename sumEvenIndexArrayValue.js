//For this challenge, you will implement a function called sumEvenIndices that will accept an array of numbers as an argument and return a sum of its values, but only those values found in even-numbered indices (e.g., 0, 2, 4, 6, etc.).

//index[0] would be considered valueds at even indices. 

const sumEvenIndices = function (arr) {
let sum = 0;

for (let i = 0; i < arr.length; i+=2) {
    sum += arr[i];
    }
  return sum;
};

console.log(sumEvenIndices([1, 2, 3, 4, 5, 6, 7]), sumEvenIndices([3, 6, 9, 100, 1]));

//output will be 16, 13. 


// In this code:

// We initialize a sum variable to keep track of the sum of values at even-numbered indices.

// We use a for loop to iterate through the array. The loop increments the index i by 2 in each iteration, which ensures that we only consider even indices (0, 2, 4, etc.).

// In each iteration, we add the value at the even index (arr[i]) to the sum.

// Finally, we return the sum after looping through the entire array.

// The sumEvenIndices function correctly calculates and returns the sum of values at even indices in the input array.