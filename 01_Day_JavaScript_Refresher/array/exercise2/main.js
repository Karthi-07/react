// 1. Create a separate countries.js file and store the countries array into this file, create a separate
//  file web_techs.js and store the webTechs array into this file. Access both file in main.js file

//for using another file array first we have to import the another file array into main file

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
console.log(countries);
console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
var regex = /[.,]/g; //the pattern describes all the fullstops and comma
var temp = text.replace(regex, ""); //replace(pattern,replacestring) used to replace the string with the matched pattern
var array = temp.split(/\s+/); // split the text into array with the help of one or more whitespace character
console.log(array);
console.log(array.length);

// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
let check = shoppingCart.indexOf("Meat");
console.log(check);
if (check === -1) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

let checkSugar = shoppingCart.indexOf("Sugar");
if (checkSugar === -1) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
let index = shoppingCart.indexOf("Honey");
console.log(index);
console.log(shoppingCart.splice(index, 1));
console.log(shoppingCart);

// modify Tea to 'Green Tea'
let mod = shoppingCart.findIndex((id) => id === "Tea");
shoppingCart[mod] = "Green Tea";
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countryIndex  = countries.indexOf("Ethiopia");
if(countryIndex==-1){
    countries.push("Ethiopia");
}else{
    console.log(countries[countryIndex]);
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let webtechsIndex = webTechs.indexOf("Sass");
if(webtechsIndex==-1){
    countries.push("Sass");
}else{
    console.log(countries[webtechsIndex]);
}

// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
