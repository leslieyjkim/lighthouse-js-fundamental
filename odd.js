const isOdd = function(number) {
 return number % 2 !== 0;
};

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

//output 3 is odd: true
//output 8 is odd: false

const isOddAgain = function(num) {
 return num % 2 === 0 ? false : true;  
};

console.log(isOddAgain(9)); //output is 'true'
console.log(isOddAgain(6)); //output is 'false'

