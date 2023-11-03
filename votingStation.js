//Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.


//In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
//One way you could solve this is by initializing a new array within your function (let goodStations = []) and push the stations that meet the requirements to it as you loop through them.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
  let goodStations = [];
  for (const station of stations) {
    const capacity = station[1];

    if(capacity >= 20) {
      const kind = station[2];

      if (kind === 'school' || kind === 'community centre') {
        console.log(station[0]);
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));



//expected output is below;
// Bright Lights Elementary
// Moose Mountain Community Centre
// [ 'Bright Lights Elementary', 'Moose Mountain Community Centre' ]
