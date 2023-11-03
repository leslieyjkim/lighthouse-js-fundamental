//you gotta make this below;
// [ [1, 2, 3], [4, 5, 6], [7, 8, 9],];


const multiDimensionalArr = [];

const arr1 = [];
const arr2 = [];
const arr3 = [];

// We now have some arrays.
// Let's console.log "multiDimensionalArr" as we go to check our progress.
console.log("1. multiDimensionalArr:", multiDimensionalArr);
// Outputs:
("1. multiDimensionalArr: []");

// Let's start pushing (adding) the appropriate values to each of our 3 "sub" arrays.
arr1.push(1);
arr1.push(2);
arr1.push(3);

// We can confirm that our first array looks good so far.
console.log("2. arr1:", arr1);
// Outputs:
("2. arr1: [1, 2, 3]");

// Everything is present; awesome!
// Let's do the same with our other 2 arrays:
arr2.push(4);
arr2.push(5);
arr2.push(6);

arr3.push(7);
arr3.push(8);
arr3.push(9);

// Let's again confirm that everything looks good.
console.log("3. arr2:", arr2);
// Outputs:
("3. arr2: [4, 5, 6]");

console.log("4. arr3:", arr3);
// Outputs:
("4. arr3: [7, 8, 9]");

// It is clear we have 3 arrays now! But they are separate one-dimensional arrays.
// Let's see if we can place these into our main array. Let's confirm what's in there so far:
console.log("5. multiDimensionalArr:", multiDimensionalArr);
// Outputs:
("5. multiDimensionalArr: []");

// Time to push in our 3 arrays.
multiDimensionalArr.push(arr1);

// Here we have it, an array in an array!
console.log("6. multiDimensionalArr:", multiDimensionalArr);
// Outputs:
("6. multiDimensionalArr: [[1, 2, 3]]");

// Let's keep it up.
multiDimensionalArr.push(arr2);
multiDimensionalArr.push(arr3);

// Let's check on it again.
console.log("7. multiDimensionalArr:", multiDimensionalArr);
// Outputs:
("7. multiDimensionalArr: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]");

//EXTRA Question;
//Can you write a function that can accept this array as an argument and return the sum of all numbers inside?

//Approach #1. 
const re_multiDimensionalArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sumMultiDimensionalArr = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

console.log("sumMultiDimensionalArr():", sumMultiDimensionalArr(re_multiDimensionalArr));



//Approach #2. 
// const re_multiDimensionalArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const sumMultiDimensionalArr = function (arr) {
//   let sum = 0;

//   for (const subArr of arr) {
//     for (const num of subArr) {
//       sum += Number(num);
//     }
//   }

//   return sum;
// };

// console.log("sumMultiDimensionalArr():", sumMultiDimensionalArr(re_multiDimensionalArr));