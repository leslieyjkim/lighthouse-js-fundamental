//In this exercise, you will be given a list of instructors and you will have to determine which instructor has the longest name.

//Will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

//Inside the loop, it checks if the length of the name of the current instructor (arr[i].name.length) is greater than the current value of longest. If it is, it updates the longest variable to the length of the current name and assigns the current instructor object to longestInstructor.

const instructorWithLongestName = function (instructors) {
 let longest = 0;
 let arr = instructors;
 let longestInstructor = {}; //initialized empty object

 for(let i = 0; i < arr.length; i++) {
   if(arr[i].name.length > longest) {
     longest = arr[i].name.length;
     longestInstructor = arr[i]
   }
 }
  return longestInstructor;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);


//will output as below;
// { name: 'Jeremiah', course: 'Web' }
// { name: 'Domascus', course: 'Web' }