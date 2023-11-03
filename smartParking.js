//Your function receives an array of arrays representing parking spots, and a string with the type of vehicle that is looking for a parking spot.

//You need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot.

//Regular cars can only park in R spots.
// Small cars can park in R or S spots.
// Motorcycles can park in R, S, or M spots.

//In the array of parking spots, spots are written in both lowercase and uppercase. An uppercase letter means that the particular spot is AVAILABLE, while lowercase letters mean that the spot is UNAVAILABLE.


//Your function must return an array with the coordinates of the spot as an [X, Y] pair.Columns are X, rows are Y. 

//Note: there may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.



const whereCanIPark = function (spots, vehicle) {
  let coordinates = false;
  for(i = 0; i < spots.length; i++) {
    for(j = 0; j < spots[i].length; j++) {
      if(vehicle === 'regular') {
        if(spots[i][j] === 'R') {
          coordinates = [j,i];
          break;
        }
      } else if (vehicle === 'small') {
        if(spots[i][j] === 'S' || spots[i][j] === 'R') {
          coordinates = [j,i];
          break;
        }
      } else {
        if(spots[i][j] === 'S' || spots[i][j] === 'MS' || spots[i][j] === 'R') {
          coordinates = [j,i];
          break;
        }
      }
    }
  }
  return coordinates;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))


//expected output
// [4, 0]
// false
// [3, 1] or [ 0, 5] ..etc. 