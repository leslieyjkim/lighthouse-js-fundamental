//a function called loopyLighthouse(range, multiples, words)
// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
// loopyLighthouse function should log to the console all the numbers from 15 to 90, 
// except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".


let range = [];
let multiples = [];
let words = [];


const loopyLighthouse = function(range, multiples, words) {
  let x = range[0];
  let y = range[1];
  let a = multiples[0];
  let b = multiples[1];
  let wordOne = words[0];
  let wordTwo = words[1];

  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0]+words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  } 
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


//output as below:
//Beacon
// Batty
// 17
// Batty
// 19
// BattyBeacon
// 21
// Batty
// 23
// Batty
// Beacon
// Batty
// 27
// Batty
// 29
// BattyBeacon
// 31
// Batty
// 33
// Batty
// Beacon
// Batty
// 37
// Batty
// 39
// BattyBeacon
// 41
// Batty
// 43
// Batty
// Beacon
// Batty
// 47
// Batty
// 49
// BattyBeacon
// 51
// Batty
// 53
// Batty
// Beacon
// Batty
// 57
// Batty
// 59
// BattyBeacon
// 61
// Batty
// 63
// Batty
// Beacon
// Batty
// 67
// Batty
// 69
// BattyBeacon
// 71
// Batty
// 73
// Batty
// Beacon
// Batty
// 77
// Batty
// 79
// BattyBeacon
// 81
// Batty
// 83
// Batty
// Beacon
// Batty
// 87
// Batty
// 89
// BattyBeacon