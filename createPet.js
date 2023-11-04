//Requirements
// Create a pet object and store it in a variable called pet.
// Add the following properties to the object:
// hunger, default value: 0
// energy, default value: 0
// playfulness, default value: 0
// Add a method called feed; it should increase hunger by 1.
// Add a method called sleep; it should increase energy by 1.
// Add a method called play; it should increase playfulness by 1.
// Add a method called status; it should console.log the current values of each of hunger, energy, and playfulness
// Format the output exactly like so:
// Pet Status - Hunger:0 Energy:0 Playfulness:


const pet = {
  hunger: 0,
  energy: 0,
  playfulness: 0,
  feed: function () {
    this.hunger += 1;
  },
  sleep: function () {
    this.energy += 1;
  },
  play: function () {
    this.playfulness += 1;
  },
  status: function () {
    console.log(`Pet Status - Hunger:${this.hunger} Energy:${this.energy} Playfulness:${this.playfulness}`);
  }
};

// Example usage:
pet.status(); // Output: Pet Status - Hunger:0 Energy:0 Playfulness:0
pet.feed();
pet.sleep();
pet.play();
pet.status(); // Output: Pet Status - Hunger:1 Energy:1 Playfulness:1