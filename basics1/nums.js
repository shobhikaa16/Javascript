const score = 400;
console.log(score);


// to dedicatedly define no.
const balance = new Number(267);
console.log(balance); // will say specially no.

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2)); // 3 point digit tak no. dega decimal mai

const num = 45.674
console.log(num.toPrecision(2)); // round off karo but ek no. but kitne no. of digits tak ke liye

const  hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // simple put toh bahr country ke hisaab se aaega commas but yeh IN ke liye


//*******************Maths in javascript**********************/

console.log(Math);
// if want to know the properties of the any function then go to the consoel and console that function then try to 
// use those properties by the . operator
console.log(Math.abs(-4));
console.log(Math.round(4.5)); //regular round off
console.log(Math.ceil(4.2));  // kitna bhi chota decimal lo vo ceiling value lega 
console.log(Math.floor(4.9)); // kitni bhi badi value lo vo floor value hi lega
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));

// most  important is random

console.log(Math.random()); // output is always in between 0 and 1
console.log(Math.floor(Math.random()*10)+1);// to make value greater than one

// to get no.s between the given ranges that are given

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min) // very important line





