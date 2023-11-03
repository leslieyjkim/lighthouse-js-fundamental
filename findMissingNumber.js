// Assume an array passed in is a sequence of numbers otherwise going up by one, except for one missing value.

const findMissingNumber = function(arr) {

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] !== arr[i] + 1) {
    return arr[i] + 1;
  }
}

};

console.log(
  findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]),
  findMissingNumber([100, 101, 102, 103, 105, 106, 107]),
  findMissingNumber([-3, -2, -1, 1, 2, 3]),
);


// expected output is 5, 104, 0 


//We use a for loop to iterate through the array from the first element to the second-to-last element (arr.length - 1).

// Inside the loop, we check if the next element in the array is not equal to the current element plus 1. 
//If this condition is met, it means we've found the gap in the sequence, and we return the missing number.


