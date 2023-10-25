// #1. Object.keys()

const someObject = { name: "Cow", sound: "Moo"};
const keysOfSomeObject = Object.keys(someObject);

// console.log(keysOfSomeObject); 
//returns [ 'name', 'sound' ]
//now you have an array, then you can use for..of Loop to iterate over it.
//you get the 'keys' of the object. 
//you need to do a little bit of work to access the 'value'

for (const key of keysOfSomeObject) {
  const value = someObject[key]; //call the value. 
  console.log(key, value);
} //will output name Cow sound Moo 



//#2. Object.values()

const someObject2 = {name: "Duck", sound: "Quack Quack"};
const valuesOfSomeObject2 = Object.values(someObject2);

// console.log(valuesOfSomeObject2);
//returns [ 'Duck', 'Quack Quack' ]
//now you have an array, then you can use for..of Loop to iterate over it. 
//You only get the 'values', you don't need the 'keys' through this. 

for (const value of valuesOfSomeObject2) {
  console.log(value, value);
} //will output Duck Duck Quack Quack Quack Quack



//#3. For.. in
//doesn't need the element to be iterable

const someObject3 = {name: "Pig", sound: "Oink" };

for (const key in someObject3) {
  const value = someObject3[key];

  console.log(key, value);
} // will output name Pig sound Oink