//  Declare an empty array;
var emptyArray = [];
var empty_Array = Array();
console.log(emptyArray + " - " + empty_Array);

// Declare an array with more than 5 number of elements

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

// Find the length of your array

console.log(array.length);

// Get the first item, the middle item and the last item of the array

console.log(
  array[0] +
    " " +
    array[Math.round((array.length - 1) / 2)] +
    " " +
    array[array.length - 1]
);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
var array_with_mixed_data_types = [
  1.0,
  "Name",
  120,
  {
    val: ["value 1", "value 2"],
  },
  true,
];
console.log(array_with_mixed_data_types);
console.log(array_with_mixed_data_types[3].val[1]);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

var companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Print the array using console.log()

console.log(companies);

// Print the number of companies in the array

console.log(companies.length);

// Print the first company, middle and last company

console.log(
  companies[0] +
    " " +
    companies[Math.round(companies.length / 2)] +
    " " +
    companies[companies.length - 1]
);

// Print out each company

companies.forEach((s) => console.log(s));

// Change each company name to uppercase one by one and print them out

console.log("After changing all the companies first letter into uppercase");
companies
  .map((s) => s.charAt(0).toUpperCase() + s.substring(1, s.length))
  .forEach((s) => console.log(s));

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(companies.join(","));

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

var company_Facebook = "Facebook";
var company_IBM = "ibm"; // the value is wrong
var flag = true;
for (var index = 0; index < companies.length; index++) {
  if (companies[index] === company_IBM) {
    console.log(companies[index]);
    flag = false;
  }
}
if (flag) {
  console.log("company is not found");
}

// Filter out companies which have more than one 'o' without the filter method

console.log("The companies having more than one O");
function checkTheCompanyHavingMoreThanOneO(company) {
  var count = 0;
  for (var index = 1; index < company.length; index++) {
    if (company.charAt(index) === "o" || company.charAt(index) === "O") {
      count++;
    }
  }
  return count > 1 ? true : false;
}

for (var index = 1; index < companies.length; index++) {
  if (checkTheCompanyHavingMoreThanOneO(companies[index])) {
    console.log(companies[index]);
  }
}

// Sort the array using sort() method

console.log("After sorting " + companies.sort());

// Reverse the array using reverse() method

console.log("After reversing " + companies.reverse());

// Slice out the first 3 companies from the array

console.log("Slicing the First 3 companies : " + companies.slice(0,3));

// Slice out the last 3 companies from the array

console.log(
  "Slicing the last 3 companies :" +
    companies.slice(companies.length - 3, companies.length)
);

// Slice out the middle IT company or companies from the array
function findStartAndEnd(companies){

var start,end,flag;
if(companies.length%2===0){
start = (companies.length/2)-1;
end = (companies.length/2)+1;
flag=true;
}else{
start = Math.floor((companies.length/2)-1);
end = start+1;
flag=false;
}
return [start,end,flag];
}

var slice_array = findStartAndEnd(companies);
console.log("Slicing the middle IT companies "+companies.slice(slice_array[0],slice_array[1]));

// Remove the first IT company from the array -> splice method is used to remove the elements in the array it takes 3 arguments(start index,how many elements to be removed (number),replace values)

console.log("Removing First IT company "+ companies.splice(0,1));
console.log(companies);

// Remove the middle IT company or companies from the array

var splice_array = findStartAndEnd(companies);
console.log("Removing the middle IT company "+companies.splice(splice_array[0],(splice_array[2])?2:1));
console.log(companies);

// Remove the last IT company from the array

console.log("Removing last IT company "+companies.splice(companies.length-1,companies.length));
console.log(companies);

// Remove all IT companies

console.log("Removing all IT companies "+companies.splice(0,companies.length));
console.log(companies);
