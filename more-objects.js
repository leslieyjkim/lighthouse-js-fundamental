// Question #1
// Create an empty object called someone, add properties for name and age after the object is created, then show the resulting object.
 
//let someone = {
//   name: "Yoonjoo",
//   age: 40,
// };

// console.log(someone);

//same result with above coding
let someone = {};

someone.name = "Yoonjoo";
someone.age = 40;

console.log(someone);



// Question #2
// Create an object called gamer with properties for name, age, and highscore. Update the highscore property after to 9001, then show the resulting object.

let gamer = {
  name: "Sanho",
  age: 8,
  highscore: 7700,
};

gamer.highscore = 9001; //oh! when you place new value, not using :, but using = 
console.log(gamer);



// Question #3
// Create an object called car with properties for make, model, and year. Remove the key year from the object, then show the resulting object.

let car = {
  make: "Toyota", //you need to wrap your string with "" mark. 
  model: "Sienna",
  year: 2021,
};

delete car.year; //oh.syntax error: you don't need a dot after 'delete', just spacing. 
console.log(car);

// Question #4
// Print the value of the size property of the following object using square bracket notation and the variable called key at your disposal.

const key = "size";
const coffee = {
  type:"Latte",
  size: 400,
  cupType: "paper",
};

console.log(coffee["size"]); //don't forget "" mark. 
console.log(coffee[key]); //same result, but in this case doesn't need "".

// const film = {
//   name: "Raiders of the Lost Ark",
//   director: "Steven Spillberg",
//   series: "Indiana Jones",
// };

// console.log(film["name"]);    // reading properties using square bracket[], don't forget "" as string. 

// const someKey = "director";
// console.log(film[someKey]);   // difference : in this case, you don't need "".




// Question #5
// Print the values of the mug object using a loop and the array called keys.
//for ... of Loop

const keys = ["color", "material"];

const mug = {
  size: 500,
  color: "red",
  material: "porcelain",
};

for (const key of keys) {
  console.log(mug[key]);       //it returns red porcelain line by line separately. 
}


