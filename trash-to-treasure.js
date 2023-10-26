
//Your function will receive two arguments:
// 1. trash is a string that will tell your function what type of item is being submitted.
// 2. bins is an object containing three properties (waste, recycling, and compost), which hold some numerical value. 
//Your function must increase the correct value in the bins object, and then return the newly updated object.

//You will need to access the proper value in the bins object using the `trash` as the key. 
//If you're having trouble with this, take a look online to see how to use square bracket notation to access values in a JavaScript object.

//Note: when you’re referencing a variable in the bracket notation, you should skip the quotes.

let smartGarbage = function (trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  }

  return bins;
}

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));

//output
//{ waste: 4, recycling: 3, compost: 5 }



//another approach

// switch(bins.trash){
//   case 'waste':
//     bins.trash += 1 || 1;
//     break;
//   case 'recycling':
//     bins.recycling = bins.recycling + 1 || 1;
//     console.log(REC);
//     break;
//   case 'compost':
//     bins.trash += 1 || 1;
//     break;
// }
