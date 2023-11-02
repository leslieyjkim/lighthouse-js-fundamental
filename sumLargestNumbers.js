const sumLargestNumbers = function(array) {
  let highest = 0;
  let secondHighest = 0;

//It uses a forEach loop to iterate through the elements of the input array. In each iteration, it compares the current element (denoted as i) with the current value of highest and updates second and highest accordingly.

//It uses a forEach loop to iterate through the elements of the input array. In each iteration, it compares the current element (denoted as i) with the current value of highest and updates second and highest accordingly.

//If the current element i is greater than the current highest, it updates second to the value of the old highest and updates highest to the current element i. This ensures that highest always stores the highest value and second stores the second-highest value encountered so far.

array.forEach(function (i, j) {
  if (array[j] > highest) {
    secondHighest = highest;
    highest = array[j];
  }
});

let sumLargest  = highest + secondHighest;

return sumLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));