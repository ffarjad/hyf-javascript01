'use strict';
// 2.1

const numbers = [1, 2, 3, 4];
function doubleOddNumbers(arr) {
    const odd = arr.filter(obj => (obj % 2 !== 0));
    newNumbers = odd.map(function(obj) {return obj*2})
    return newNumbers;
}
console.log('The doubled numbers are', doubleOddNumbers(numbers));

// const odd = numbers.filter(obj => obj % 2 !== 0);
// const odd2 = numbers.filter(function(obj){return (obj % 2 !== 0)})
// const numbers5 = odd.map(obj => {obj*2})
// const numbers2 = odd2.map(function(obj) {return obj*2})

//2.2
'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// change MIN to HOUR

let changedDuration = tasks.map( tasks  => tasks.duration /= 60);
console.log(changedDuration);

// Filter out everything that took less than two hours

let filterDuration = changedDuration.filter( changedDuration => changedDuration >= 2);
console.log (filterDuration);

// Multiply the each duration by a per-hour rate for billing and sum it all up.
// Salary per hour is 30

let financial = changedDuration.map(changedDuration => changedDuration *= 30)
let total = financial.reduce((total, amount) => total += amount);
console.log(" Maartje should earn " + total + "€");

