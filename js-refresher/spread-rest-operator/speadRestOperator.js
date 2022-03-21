//Spread
//Used to split up array elements or Objects properties
const oldArray = [0, 1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray[4]);

const oldObject = { type: "Fiat", model: "500", color: "white" };
const newObject = { ...oldObject, brand: "Honda" };
console.log(newObject);

//Rest
//Used to merge a list of functions arguments into an array
function sortArgs(...args) {
  return args.sort;
}

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1,2,3));
