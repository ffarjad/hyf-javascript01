//3.1
function foo(func) {
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

//3.2
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  createArray(startIndex, stopIndex, values);
  console.log(values);
  for(let j = 0; j <= values.length; j++){
    if(values[j] % 3 == 0){ threeCallback(); }
    if(values[j] % 5 == 0){ fiveCallback(); }
  }
}

function createArray(startElement, stopElement, arr) {
  for(let i = startElement; i <= stopElement; i++){
    arr.push(i);
  }
}

function sayThree(){
  console.log('call sayThree');
}

function sayFive(){
  console.log('call sayFive');
}

threeFive(10, 15, sayThree, sayFive);


//3.3
function repeatStringNumTimes_byForLoop(str, num) {
  console.log('calling function repeatStringNumTimes_byForLoop(' + str+', '+ num+')');
  let string = '';
  if(num > 0){
    for(let i = 0; i < num; i++){
      string = string.concat(str);
    }
  }
  return string;
}

console.log(repeatStringNumTimes_byForLoop("abc", 3));

function repeatStringNumTimes_byWhile(str, num) {
  console.log('calling function repeatStringNumTimes_byWhile(' + str+', '+ num+')');
  let string = '';
  let i = 0;
  if (num > 0){
    while(i < num){
      string = string.concat(str);
      i++;
    }
  }
  return string;
}

console.log(repeatStringNumTimes_byWhile('abc', 3));

function repeatStringNumTimes_byDoWhile(str, num) {
  console.log('calling function repeatStringNumTimes_byDoWhile(' + str+', '+ num+')');
  let string = '';
  let i = 0;
  if (num > 0){
    do {
      string = string.concat(str);
      i++;
    }while(i < num)
  }
  return string;
}

console.log(repeatStringNumTimes_byDoWhile('abc', 3));


//3.4
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
    }
let hound = new Dog();
console.log(hound);

//3.5

function multiplyAll(arr) {
    let product = 1;
    for (let i=0; i < arr.length; i++) {
      for (let j=0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    return product;
}
  
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));


//3.6

//working with multi dimentional array

//k(3,4) dimArray
const arr4d =[
    [ [[1,2],[3]], [[4,5],[6]], [[7,8],[9]] ],
    [ [[10,11],[12]], [[13,14],[15]], [[16,17],[18]] ],
  ];
const arr3d =[
    [ [1,2,3], [4,5,6], [7,8,9] ],
    [ [10,11,12], [13,14,15], [16,17,18] ],
  ];

// function printValuesOf3dArray(arr){
//     arr.forEach(level2 => {
//         level2.forEach(level3 => {
//             level3.forEach(element => {console.log(element)});
//         });
//     });
// }

function printValuesOfArray(arr){
    if ( Array.isArray(arr) ){
        arr.forEach( level => printValuesOfArray(level));
    }
    else {
        console.log(arr);
    }
}
// printValuesOfArray(arr3d);
printValuesOfArray(arr4d);
// console.log(arr3d);
//I made a recursive call which test if the arr variable is a array or not firs.
//If it was array call the function again
//If it was not array print the variable

//3.7

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

//the f1 function receive a variable as an input parameter and it is passed by variable content
//the f2 function reeive an object as an input parameter and it is passed by reference address


//4
function createBase(base) {
    const innerFunction = function (number) {
        return base + number;
    };
  
    return innerFunction;
  }
  
let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

//4.bonus
//remove the repeated element in an Array
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
const numbers = [1, 2, 3, 4, 1, 5, 6, 3];

function getUnique_set(arr){
  return [... new Set(arr)];
}

function getUnique_forEach(arr){
  let uniqeArray = [];
  arr.forEach(element => {
    if(!uniqeArray.includes(element)){
      uniqeArray.push(element);
    }
  });
  return uniqeArray;
}
//To test the time it takes with getUnique_set way
console.time('timer');
console.log(getUnique_set(numbers));
console.timeEnd('timer');

//To test the time it takes with ForEach way
console.time('timer');
console.log(getUnique_forEach(numbers));
console.timeEnd('timer');

const uniqueNumbers = getUnique_forEach(numbers);
console.log(uniqueNumbers);
const uniqueLetters = getUnique_forEach(letters);
console.log(uniqueLetters);