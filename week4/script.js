'use strict';

const numbers = [1, 2, 3, 4];
function doubleOddNumbers(arr) {
    const odd = arr.filter(obj => (obj % 2 !== 0));
    newNumbers = odd.map(function(obj) {return obj*2})
    return newNumbers;
}
console.log('The doubled numbers are', doubleOddNumbers(numbers));

// const odd = numbers.filter(obj => obj % 2 !== 0);
// const odd2 = numbers.filter(function(obj){return (obj % 2 !== 0)})
// const numbers2 = odd2.map(function(obj) {return obj*2})