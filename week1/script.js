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