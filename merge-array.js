// The function should, when given two sorted arrays containing numbers, return a sorted array of the numbers from both lists.(ordered number)

//In order to sort a list in numerical order, the Array. prototype. sort() method needs to be passed a comparison function. The comparison function should return a negative value if the first argument is less than the second, a positive value if the first argument is greater than the second, and zero if they are equal.

//var numArray = [140000, 104, 99];
// numArray.sort(function(a, b) {
//   return a - b;
// });

// console.log(numArray);

function merge(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    newArray.push(array2[i]);
  }
  newArray.sort((a, b) => a - b);
  return newArray;
  
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);

//output
// [1, 2, 3, 4, 4, 5, 6] =? [1, 2, 3, 4, 4, 5, 6]
// [ 2, 4, 5, 8 ] =? [ 2, 4, 5, 8 ]
// [ 1, 2, 6 ] =? [ 1, 2, 6 ]