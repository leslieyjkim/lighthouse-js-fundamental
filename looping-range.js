//Question : Creating a long array of repeating numbers can be a time-consuming task. 
//Imagine creating an array of every even number from 0 to 100. 
//In this challenge, you will build a function that creates an array like this for a given start, end, and step parameter.
//The function takes three integer parameters: start, end, and step.
//The function should return an array of numbers from start to end, counting by step.
//The function should return an empty array [] if given incorrect parameters, such as:
// #1. start, end, or step being undefined
// #2. start being greater than end
// #3. step being zero, or negative



function range(start, end, step) {
  let arrayRange = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      arrayRange.push(i);
    } 
    return arrayRange;
  }
}
  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));


