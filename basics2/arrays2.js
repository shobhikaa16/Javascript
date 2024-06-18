const heroes = ["shiv","krish","vishu","shiva"]
const names = ["shohika", "shobhit","sapna","amit"]

//heroes.push(names);
//console.log(heroes); // by this  we get arrays inside arrays
//console.log(heroes[4][1])  // 4 par new arr  bngya jisma ab hum values access kar rahe hai

const allNames = heroes.concat(names);  // here we get the result but we dont store it in a new arr then it will give same as above result
console.log(allNames); 

// way to concatenate - by spread operator
const allnew = [...allNames, ...heroes] ; // this is spread operator 
console.log(allnew);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const useArr = arr1.flat(Infinity) // we have to give depth inside the flat ki kha ak vo flat kare type so we can count or we can write Infinity
console.log(useArr);

console.log(Array.isArray("Shobhika"))
console.log(Array.from("Shobhika"));

console.log(Array.from({name:"shobhit"})) // cant convert this into arr directly soreturn empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // from set of elements give array



