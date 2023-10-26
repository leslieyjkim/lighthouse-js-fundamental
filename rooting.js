//At this year's town festival, the Agriculture Association will be handing out several awards for the best vegetables in a given category. They'll be testing out a new judging system on the best tomatoes to start, which can be judged based on their redness or their plumpness.

//For this challenge, you'll need to implement a function called judgeVegetable() that will decide which vegetable is best based on a given judging characteristic. Your function will receive two parameters: a list of veggies (as an array of objects) and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

//Your function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.
const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

judgeVegetable(vegetables, metric);

// this is the code below;
const judgeVegetable = function (vegetable, metric) {
  let highest = 0;
  let submitter = "";

  for (let i = 0; i < vegetable.length; i++) {
    if (vegetable[i][metric] > highest) {
      highest = vegetable[i][metric];
      submitter = vegetable[i].submitter
      console.log(submitter);
    }
  } 
  return submitter
}
//output
//Old Man Franklin


