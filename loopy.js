//create loop that prints out 100-200 inclusive
//pick 3 conditions
//printing out 'Loopy' instead of multiples of 3 (if statement)
//printing out 'Lighthouse' instead of multiples of 4
//printing out 'LoopyLighthouse' instead of multiple of both 3 and 4


for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i)
  }
}