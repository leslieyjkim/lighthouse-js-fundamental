//Math.floor () 
//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

//Question : //we want to see how many full 100s are in a number, so 588 would output 5 .

const howManyHundreds = function(num) {
  return Math.floor(num / 100);
};

console.log(howManyHundreds(120));