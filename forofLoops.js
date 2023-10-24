//traditional 'for Loops'
const amounts = [61.0, 52.25, 112.99, 5.0];

let total = 0;
for(let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log("Order total is", total);


//Newer 'for of' Loops are simpler

let total2 = 0;
for(let amount of amounts) {
  total2 += amount;
}
console.log("Order total is", total2);


//Why, in your opinion, is this for..of loop the preferred way to loop over an entire array from start to end?
//Because with the for..of syntax, you don't have to start and manage an array index i and then use that index to access each item in the array (amounts[i]). You don't care about the index, you really just want to go through each item in the array.
//Skip 'forEach' for now. That is less preferred. 


//Another examples 
let name = 'yoonjoo';
for (let character of name) {
  console.log(character);
}

//returns, y o o n j o o, line by line separately. 



//when might the for...of loop not be the appropreate choice?
//The for..of loop is only really useful for going from the beginning to the end of an array. If instead you need to loop through an array in a different order (e.g., backwards, or skipping every other element), then you'll need to use a traditional for loop instead.