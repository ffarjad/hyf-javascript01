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


//
