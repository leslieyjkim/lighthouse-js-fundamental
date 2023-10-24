const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Problem #1: write a while loop that prints out each item of ingredients.
let i = 0;
while(i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}


// Problem #2: write a for loop that does the same thing.
for(let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


// Problem #3: write any loop, while or for, that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").

for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}

