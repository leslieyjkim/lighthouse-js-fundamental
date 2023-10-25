const fruits = {
  apple: 42,
  banana: 20,
  cranberry: 13,
};


//Question : You have a list of fruits and you would like to know how many fruits in total you have.
let countsOfFruits = 0;
const valuesOfFruits = Object.values(fruits);
console.log(valuesOfFruits);

for (let i = 0; i < valuesOfFruits.length; i++) {
  countsOfFruits += valuesOfFruits[i];
}

console.log(countsOfFruits); 