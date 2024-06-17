//arrays

const myArr = [0,1,2,3,4,5,6,7] // can have more than one datatype at the same time
const arr = [1,2,3,4,5,6,7] // arrays in js are resizeable
// indexing from zero

const newArr = new Array(1,2,3,4,5,6) // can also declare like this
console.log(newArr[0]);

newArr.push(9)
console.log(newArr);

newArr.pop()// lst element is removes
console.log(newArr)

newArr.unshift(9); // add at the starting 
console.log(newArr);

newArr.shift() // reove the first element
console.log(newArr)

console.log(newArr.includes(9));
console.log(newArr.indexOf(3))

const arr2 = newArr.join() // join makes the array  into the string type
console.log(newArr)
console.log(arr2) 
console.log(typeof arr2);  // see this

// slice and splice

console.log("A",myArr);

const myArr1 = myArr.slice(1,3) // returns a section of array  ,, 3 not included
console.log("B", myArr1); // splice start se jha  tak diya hai wha -1 tak returnkrta hai array ko

const myArr2 = myArr.splice(1,3) 
console.log("C", myArr); // splice given range ke elements ko nahar nikar deta hai
console.log(myArr2);


