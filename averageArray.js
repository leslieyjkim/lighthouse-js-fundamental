//you will implement a function called average() that will accept an array of numbers as an argument and return the average of the numbers as a result.

const average = function(arr) {

let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

let everageArray = sum / arr.length;
  
return everageArray;
};


console.log(
  average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  average([1000, -1000, 50, -999]),
  average([1, 2, 3])
);