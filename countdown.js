let number = 0;
while (number <= 60) {
  if (number === 60) {
    console.log("One Minute to Liftoff.");
  } else if (number> 10) {
    console.log("All Systems Green.");
  } else if (number >= 6 && number <= 10) {
    console.log("Starting Ignition Sequence.");
  } else if (number >= 3 && number <= 5) {
    console.log("Ignition Complete.");
  } else if (number >= 1 && number <= 2) {
    console.log("Full Power.");
  } else if (number === 0) {
    console.log("Liftoff!");
  } number--;
}
