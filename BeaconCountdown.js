let second = 60;

while (second >= 0) {
  if(second === 60) {
    console.log(second + ": One Minute to Liftoff.");
  } else if (second > 10) {
    console.log(second + ": All Systems Green.");
  } else if (second >= 6) {
    console.log(second + ": Starting Ignition Sequence.");
  } else if (second >= 3) {
    console.log(second + ": Ignition Complete.");
  } else if (second >= 1) {
    console.log(second + ": Full Power.");
  } else {
    console.log(second + ": Liftoff!");
  } 
  second--;
}




// If the number is equal to 60, print the number followed by ": One Minute to Liftoff.".
// If the number is greater than 10, print the number followed by ": All Systems Green.".
// If the number is between 6 and 10, print the number followed by ": Starting Ignition Sequence.".
// If the number is between 3 and 5, print the number followed by ": Ignition Complete.".
// If the number is between 1 and 2, print the number followed by ": Full Power.".
// If the number is equal to 0, print the number followed by ": Liftoff!" and then exit the program.