const steel = {
  name: "1084",
  type: "Carbon Steel",
  composition: {
    iron: 98.45,
    carbon: 0.8,
    manganese: 0.6,
    phosphorus: 0.08,
    sulfur: 0.06,
  },
  forging_min_temp: 900,
  forging_max_temp: 1200,
};

//[1. Extracting Elements]

//Question#1. Using for..in, extract all the elements that are part of the composition object. 
//Your code should return an array that looks like this:
//["iron", "carbon", "manganese", "phosphorus", "sulfur"];
const compositionArray = []; //Setting Array form
for (const key in steel.composition) {
  compositionArray.push(key);
}
console.log(compositionArray);


//Question#2. Using Object.keys()
const keysOfSteel = Object.keys(steel.composition);
console.log(keysOfSteel);

//[2. Calculating Sum]

//Question#1. Using Object.values()
//Calculate the sum of all the percentages to make sure that you reach a value that is near 100%.
//The result should be 99.99.

const valuesOfSteel = Object.values(steel.composition);
//Setting Array form
//Below: approach#1.of sum of array
let sumOfPercentages = 0;
for (const value of valuesOfSteel) {
  sumOfPercentages += value;
}
console.log(sumOfPercentages);

//Below: approach#2.of sum of array
let sum = 0;
for(let i = 0; i < valuesOfSteel.length; i++) {
  sum += valuesOfSteel[i];
}
console.log(sum);


//#Question#2. Using For..in
const composition = steel.composition;
let sumOfPercentages2 = 0;
for (const value in composition) {
  sumOfPercentages2 += composition[value];
}

console.log(sumOfPercentages2);



//[3. Counting Value Types]
//Count how many values are either strings or numbers in the steel object. For this one, you do not care about nested objects, you only want the keys that are at the top level. The expected result for this is 4. 
//'composition' is the nested objects, so not included to count.



//#Question#1. Using For.. in
let stringOrNumberCount = 0;
for(const k in steel){
  console.log(k); // output 5 keys, then you should sort out the nested objects (composition)
  if(typeof steel[k] == "number" ||  typeof steel[k] =="string"){
      stringOrNumberCount += 1;
  }
}
console.log(stringOrNumberCount)


//#Question#2. Using Object.values()
let stringOrNumberCount2 = 0;
const steelValues = Object.values(steel);
console.log(steelValues); //from these values, we gotta sort out the nested objects. And we need to count only string or number. 
for(let i = 0; i < steelValues.length; i++){
  if(typeof steelValues[i] == "number" || typeof steelValues[i] == "string"){
    stringOrNumberCount2 += 1;
  }
}
console.log(stringOrNumberCount2);

//#Question#3. Using Object.keys()
let stringOrNumberCount3 = 0;
const steelKeys = Object.keys(steel);
console.log(steelKeys); //from these keys, we gotta sort out the nested objects. And we need to count only string or number. 
for (const key3 of steelKeys) {
  let value3 = steel[key3];
  if(typeof value3 == "number" || typeof value3 == "string") {
      stringOrNumberCount3 += 1;
  }
}
console.log(stringOrNumberCount3);
// console.log("stringOrNumberCount3"+stringOrNumberCount3);