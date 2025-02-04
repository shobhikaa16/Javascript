// // for each fucntions 
// let arr = [1,2,3,4,5];

// arr.forEach(function(el){
//     console.log(el)
// });

// arr.forEach((el)=>{
//     console.log(el);
// });

// let stude = [{
//     name:"shihno",
//     marks:34
// },
// {
//     name:"oin",
//     marks:98
// },
// {
//     name:"dghgf",
//     marks:56
// }]

// stude.forEach((stu) => {
//     console.log(stu.marks);
// })


// // Map function

// let nums = [1,2,3,4];
// let double = nums.map((el) => {  // hum is map fun ke andar kuch nhi krte toh double print hoga but undefined hoga sume
//     return el*2;
// })

// let gpa = stude.map( (el) => {
//     return el.marks/10;
// });

// //Filter function
// let ans = nums.filter((el) =>{
//     return el %2 == 0;  // it willadd the num to the ans array if it returns true
// });

// //Every Method- returns true if every elelment of array gives true for some fucntion.Else return false , gar ek bhi false toh ans false
 
// nums.every((el) =>{
//     return el%2 == 0;
// });  // it returns false as nums do not have all even nums

// //Some Fucntion - returns true or false - like logical or

// //Reduce 
// let finalVal = [1,2,3,4,5].reduce ((res,el) => (res+el)); // for every next step the el is returned to accumulator(res)

// //find amx elemnet by reduce

// let arrr= [1,2,3,4,5,6,7,8,9];
// let max = arrr.reduce((max, el) => {
//     if(max <el){
//         return el;
//     }else{
//         return max;
//     }
// })

// //Default parameters

// function sum(a,b=5){   //(a=3,b) this is wrong as values are assinged as order
//     return a+b;
// }
// console.log(sum(2));
// console.log(sum(2,8));

// //Spreads - expand iterables to multiple values
// let a = [1,2,3,4,5,6,7,8,5,4,3];
// Math.min(...a);// we dont have to pass individual a[0]
// Math.max(...a);
// console.log(...a);
// console.log(..."Shobhika");

// //Spread with array Literals
// let ab = [1,2,3,5,5];
// let newab = [...ab];

// let news = [...arr,...ab]; //two arrays can be added-order matters

// const data ={
//    email:"jdijb@gamil",
//    password:"ngkdjs12",
// };

// const dataCopy = {...data, id:123}; //can add new data also
// let obj = {..."hello"};

// Rest is the ooposite of spread - can take indefinite num of arguments ans bundle them into array

function su(msg,...args){  // can take extra parameter also but in the starting also
  for(let i=0; i<args.length; i++){
    console.log("you gave us args of",args[i]);
  }
}

// methods can be applied onthis args directly

function min(a,b,c,d){
    console.log(arguments);
    // individual arguements[0]
}

//Destructuring
let names = ["tony","hdf","njid","acas"];
// let winnner = names[0];
// let runneruP = names[1];

let[winner,second,runnerup] = names;
let[one, two,...args] =names;

//destructuring of objects

const student = {
    name:"sjd",
    age: 21,
    class:8,
    subjects:["hindi","english"],
    username:"jdgjd@123",
    password:"ny87"
}

let {username,password:secret,city="mumbai"}= student; // but if already  city exist then older

