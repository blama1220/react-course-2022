//Map
//creates a new array populated with the results of calling a provided function on every element in the calling array
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]




//Find
//returns the first element in the provided array that satisfies the provided testing function
const array2 = [5, 120, 8, 130, 44];

const found = array2.find((element) => element > 10);

console.log(found);
// expected output: 120




//FindIndex
//returns the index of the first element in the array that satisfies the provided testing function
const array3 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array3.findIndex(isLargeNumber));
// expected output: 3




//Filter
//method creates a new array with all elements that pass the test implemented by the provided function.
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]




//Reduce
//the final result of running the reducer across all elements of the array is a single value.
const array4 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array4.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10




//Concat
//Used to merge two or more arrays
const array5 = ["a", "b", "c"];
const array6 = ["d", "e", "f"];
const array7 = array1.concat(array2);

console.log(array7);
// expected output: Array ["a", "b", "c", "d", "e", "f"]




//Splice
// add/remove elements from the specified location of the array
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]




//Slice
// returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
//where start and end represent the index of items in that array
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
