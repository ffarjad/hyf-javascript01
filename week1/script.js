//JavaScrip Exercise Week2
//https://github.com/HackYourFuture/JavaScript1/blob/master/Week2/MAKEME.md
//1.Write hello world
console.log('Hello world!');

//2.SyntaxError
console.log('I\'m awesome');
console.log("I'm awesome");

//3.Declare a variable
var x;
console.log('the value of my variable x will be: 5');
console.log(x);
x = 5;
console.log('I think the value of x is 5 ');
console.log('the real value is: ' + x);

//4.assign different values to String variable
var y = 'Farshid';
console.log('I think the value of y is: Farshid')
console.log(y);
y = 'Farjad';
console.log('I think the value of y now is: Farjad');
console.log(y);

//5.maximum number
var z = 7.25;
console.log(z);
var a = parseInt(7.25);
console.log(a);
var highest_value = Math.max(a, z); 
console.log("the highest value between " + z + " and " + parseInt(z) + " is " + highest_value);

//6.Arrays
var elements = [];
console.log('I think the array value is empty');
console.log(elements);
var my_favorite_animals = ['Hourse', 'Dog', 'Tiger'];
console.log(my_favorite_animals);
my_favorite_animals.push('Baby Pig');
console.log(my_favorite_animals);

//7.More strings
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//8.check variables type
let var_1 = 'hello';
let var_2 = 12.65;
let var_3 = true;
let var_4 = null;
let var_5 = undefined;

console.log('The value of my variable var_1 is: ' + var_1);
console.log('The value of my variable var_2 is: ' + var_2);
console.log('The value of my variable var_3 is: ' + var_3);
console.log('The value of my variable var_4 is: ' + var_4);
console.log('The value of my variable var_5 is: ' + var_5);

console.log('I think the type of var_1 is: String ');
console.log('I think the type of var_2 is: Number ');
console.log('I think the type of var_3 is: Boolean ');
console.log('I think the type of var_4 is: Object ');
console.log('I think the type of var_5 is: Undefined ');

console.log(typeof(var_1));
console.log(typeof(var_2));
console.log(typeof(var_3));
console.log(typeof(var_4));
console.log(typeof(var_5));

if(typeof(var_1) == typeof(var_2)){
  console.log(var_1 + " and " + var_2 + " are the SAME TYPE")
}
else {
  console.log(var_1 + " and " + var_2 + " are NOT the SAME TYPE")
}

if(typeof(var_2) == typeof(var_3)){
    console.log(var_2 + " and " + var_3 + " are the SAME TYPE")
  }
else {
    console.log(var_2 + " and " + var_3 + " are NOT the SAME TYPE")
}

if(typeof(var_4) == typeof(var_5)){
    console.log(var_4 + " and " + var_5 + " are the SAME TYPE")
  }
else {
    console.log(var_4 + " and " + var_5 + " are NOT the SAME TYPE")
}

//9.Number Division and Mod (Remainder of Division)
var x = 7;
console.log('The value of ' + x + ' % ' + 3 + ' is: ' + (x % 3));
console.log('The value of (10 % 2) is: ' + 10 % 2);
console.log('The value of (16 % 6 ) is: ' + 16 % 6);
console.log('The value of (29 % 10) is: ' + 29 % 10);

//10.More javascript
var array = ['HackYourFuture', 80 , "FooCafe", 199.95]
console.log(array);
console.log(typeof(7/0));
console.log((7/0) === (6/0));