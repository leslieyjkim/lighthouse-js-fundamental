//You're going to have to concatenate the arrays from both researchers into a single array.
//The function should, when given two arrays, concatenate the arrays together.

function concat (array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    let elementA = array1[i];
    newArray.push(elementA);
  }

  for (let i = 0; i <array2.length; i++) {
    let elementB = array2[i];
    newArray.push(elementB);
  }

  return newArray;
}


console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);


//output
//[ 1, 2, 3, 4, 5, 6 ] =? [ 1, 2, 3, 4, 5, 6 ]
// [ 0, 3, 1, 9, 7, 2 ] =? [ 0, 3, 1, 9, 7, 2 ]
// [ 9, 7, 2 ] =? [ 9, 7, 2 ]
// [ 5, 10 ] =? [ 5, 10 ]