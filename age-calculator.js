//create a function to determine someone's age ageCalculator
//takes 3 parameters in name, yearOfBirth, currentYear
//returns a statement: "Name is x years old."


let name = "";
let yearOfBirth = 0;
let currentYear = 0;


const ageCalculator = function (name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
};

console.log(ageCalculator("Suzie", 1983, 2015));



// function ageCalculator(name, yearOfBirth, currentYear) {
//   const age = currentYear - yearOfBirth;
//   return name + " is " + age + " years old.";
// };

// console.log(ageCalculator("Jack", 2004, 2016));