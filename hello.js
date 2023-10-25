const sayHello = function (name) {
  console.log("Hello, " + name);
};

sayHello("Sanho");


//**Difference between "return" and "console.log"

//#1. console.log:
const sayHiToConsole = function(name) {
  console.log("Hi, " + name);
};
sayHiToConsole("Sanho");

//output immediately 'Hi, Sanho'to the console.



//#2. return:
const returnSayHi = function (name) {
  return "Hi, " + name;
};
const greeting = returnSayHi("Sanho");
//at this moment, the return value of the function is assigned to the variable greeting.
//nothing will get output to the console.
console.log(greeting);
//output: Hi, Sanho


