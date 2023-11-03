

const games = [
['Tetris', 30, 'puzzle'],
['Skyrim', 60, 'rpg'],
['Super Mario Galaxy', 80, 'action']
];

const findGames = function (games) {
 const goodGames = [];

  for (const game of games) {
    if (game[1] < 90 && (game[2] === "rpg" || game[2] === "action")) {
      goodGames.push(game[0]); 
    }
  }
  return goodGames;
};

const goodGames = findGames(games);
console.log(goodGames); 


//expected output is below;
//[ 'Skyrim', 'Super Mario Galaxy' ]