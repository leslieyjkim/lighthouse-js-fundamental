//Find the common elements in two arrays.
// For this challenge, you will implement a function called arrayIntersections() 
// that will accept two arrays as arguments and return an array of the elements they have in common.



const arrayIntersections = function(arr1, arr2) {

let commonElements = [];

for (const element of arr1) {
  if (arr2.includes(element)) {
    commonElements.push(element);
  }
}
return commonElements;
};

console.log(
  arrayIntersections([-2, -1, 1, 2, 3], [1, 2, 3, 4, 5, 6]),
  arrayIntersections(['dog', 'cat', 'fish'], ['centipede', 'fish', 'bird']),
  arrayIntersections([1, 'hello', true], [2, 'goodbye', true])
);

//expected output is
// [1, 2, 3]
// ['fish']
// [true]