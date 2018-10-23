//JavaScrip Exercise Week3
//https://github.com/HackYourFuture/JavaScript1/blob/master/Week3/MAKEME.md

//1.Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log("Original String is: " + myString);
console.log("The length of myString is: " + myString.length);
myString = myString.replace(/,/g , " ");
console.log("The new myString is: " + myString);

//2.Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log("favoriteAnimals : " + favoriteAnimals);
favoriteAnimals.push("turtle");
console.log("favoriteAnimals after adding turtle to the end : " + favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log("favoriteAnimals after adding meerkat at index 1 : " + favoriteAnimals);
console.log("The array has a length of : " + favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log("favoriteAnimals after deleting giraffe at index 3 is : " + favoriteAnimals);
var meerkat_index = favoriteAnimals.indexOf("meerkat");
console.log("The item 'meerkat' that you are looking for is at the index: " + meerkat_index);
favoriteAnimals.splice(meerkat_index,1)
console.log("favoriteAnimals after deleting meerkat is : " + favoriteAnimals);


//Functions
//1.Sum
function Sum(val1, val2, val3) {
    return val1+val2+val3;
  }
console.log("Sum(1,2,3) =  " + Sum(1,2,3))
console.log(Sum('ab','b','c'));

//2.function with arguments
function colorCar(color) {
    return "a " + color+ " car";
  }
  console.log("colorCar('red'): " + colorCar("red"));

//3.Object in Function

var person = {firstName:"Farshid", lastName:"Farjad", age:38, eyeColor:"black"};
console.log(person);
function printObject(object){
  for (var property in object) {
    console.log("key => " + property + ",  value => " + object[property]);
  }
}
printObject(person);

//4.vehicleType function
function vehicleType(color, code) {
  if (code == 1) {
    return "a " + color + " " + "car"; 
  } else if (code == 2){
    return "a " + color + " " + "motorbike"; 
  }
}
console.log("vehicleType('blue', 1) ===> " + vehicleType("blue", 1));
console.log("vehicleType('red', 2) ===> " + vehicleType("red", 2));

//5

// (3 === 3) ? console.log("yes") : console.log("no");
console.log(3===3 ? "yes" : "no" )
//console.log("yes")

//6. Adding age attribute to vehicleType function
function vehicleType(color, code, age) {
    if (code == 1 && age <= 1) {
      return "a " + color + " new " + "car"; 
    }else if(code == 1 && age > 1) {
      return "a " + color + " old " + "car";
    }
    else if (code == 2 && age <= 1){
      return "a " + color + " new " + "motorbike"; 
    }
    else if (code == 2 && age > 1){
      return "a " + color + " old " + "motorbike"; 
    }
}
console.log("vehicleType('blue', 1, 5)  ===>  " + vehicleType("blue", 1, 5));
console.log("vehicleType('red', 1, 1)   ===>  " + vehicleType("red", 1, 1));
console.log("vehicleType('blue', 2, 3)  ===>  " + vehicleType("blue", 2, 3));
console.log("vehicleType('black', 2, 1) ===>  " + vehicleType("black", 2, 1));
  
//7. Creating Vechile List
let list = ["motorbike", "caravan", "car", "bike", "bus"];
console.log("list = " + list);

//8.Write third element of the list
console.log("Third item of the list is: " + list[2]);

//9
function vehicle(color,code,age){
  if ((code >= 0) && (code < list.length)){
    if(age > 1) {
      console.log('a ' + color + ' used ' + list[code]);
    } else if (age <= 1) {
      console.log('a ' + color + ' new ' + list[code]);
    } else {
        console.log("Out of Range age!!")
      }list = ["motorbike", "caravan", "car", "bike", "bus"];
      console.log("list = " + list);
      
      //8.Write third element of the list
      console.log("Third item of the list is: " + list[2]);
      
      //9
      function vehicle(color,code,age){
        
        if ((code >= 0) && (code < list.length)){
          let str = 'a ' + color;
          if(age > 1) {
            str += ' used ' + list[code];
          } else if (age <= 1) {
            str += ' new ' + list[code];
          }
          console.log(str);

        }
        else {
          console.log("We do not have such code!!!");
        }
      }
      console.log("vehicle('green', 3, 1) ===>  " + vehicle("green", 3, 1));
      vehicle("green", 3, 1);
      vehicle("green", 30, 1);
  }
  else {
    console.log("We do not have such code!!!");
  }
}
console.log("vehicle('green', 3, 1) ===>  " + vehicle("green", 3, 1));
vehicle("green", 3, 1);
vehicle("green", 30, 1);


//10. Advertisment using vehicle list
//"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
var vechileList = ["car", "motorbike", "caravan", "bike"];
let message = "Amazing Joe's Garage, we service";
function Advertise(list, msg) {
  for( i = 0; i < list.length; i++){
    if(i == 0) {
      msg += " " + list[i]+"s";
    }else if (i == list.length-1) {
      msg += " and " + list[i]+"s.";
    }else {
      msg += ", " + list[i]+"s";
    }
  }
  return msg;
}

console.log("The list is: " + vechileList);
console.log(Advertise(vechileList, message));

//11.Test advertisment with more elements
vechileList.push("truck");
console.log("The new list is: " + vechileList);
console.log(Advertise(vechileList, message));

//12. Create an empty object
var obj = {};
console.log(obj);

//13. Teachers object
let teacherObj = {
    teachers : ["tommy" ,"rasmus", "mike", "viktor"],
}
console.log(teacherObj);

//14.Add languages property to Teachers object
teacherObj.languages = ["HTML", "CSS", "Javascript"];
console.log(teacherObj);

//15. Compare Array with  == and ===
let x = [1,2,3];
let y = [1,2,3];
let z = y; // reference assigning
x == y ? console.log("they are equal") : console.log("they are not equal!"); //they are not equal
x === y ? console.log("they are equal") : console.log("they are not equal!");//they are not equal
z == x ? console.log("they are equal") : console.log("they are not equal!");//they are not equal
z === x ? console.log("they are equal") : console.log("they are not equal!");//they are not equal
z == y ? console.log("they are equal") : console.log("they are not equal!");//they are equal. 
z === y ? console.log("they are equal") : console.log("they are not equal!");//they are equal.

//16. Objects changing
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;


console.log(o1);
console.log(o2);
console.log(o3);

o1.foo = "black"
console.log(o1);
console.log(o2); //changing o1 will not change o2
console.log(o3); //changing o1 will not change o3
console.log("changing o1 will not change o3");
console.log("changing o1 will not change o2");

o2.foo = "white"
console.log(o1); //changing o2 will not change o1
console.log(o2); 
console.log(o3); //changing o2 will change o3 
console.log("changing o2 will change o3");

o3.foo = "pink";
console.log(o1); //changing o3 will not change o1
console.log(o2); //changing o3 will change o2
console.log(o3);
console.log("changing o3 will change 02");

//17. typeof typeof number
let bar = 42;
type = typeof typeof bar;
console.log(type);
