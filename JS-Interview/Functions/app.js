function hello(){
    console.log("hello");
}
hello();

function name(){
    console.log("Shobhika is my name");
}
name();

function isAdult(){
    let age = 14;
    if(age >= 18){
        console.log("yes");
    }else{
        console.log("no");
    }
}
isAdult();

//function to roll a die
function dieRoll(){
    let random = Math.floor(Math.random()*6)+1;
    console.log(random);
}
dieRoll();

//fucntions with arguments

function printName(name,age){
    console.log(`${name} and age is ${age}`);
}
printName("shhobhika",21);
printName("shobhit");
// order of the arguments is very important first input argument will take in first argument

function sum(a,b){
    console.log(a+b);
}

function avgNum(a,b,c){
    console.log((a+b+c)/3);
}
avgNum(2,4,6);

function table(num){
    for(let i=1; i<=10; i++){
        console.log(i*num);
    }
}
table(2);

//return keyword
function sumNum(a,b){
    return a+b;
    // return statement ke baad kuch bhi execute nhi hota hai
}
console.log(sumNum(1,2));

sum(sum(1,2),3);  //b ut giving NAN

function getSum(n){
    let sum =0;
    for(let i=1; i<=n; i++){
        sum =sum+i;
    }
    return sum;
}

//string concatenate
let str = ["hii","hello","hey","bye"];
function concat(str){
    let result="";
    for(let i=0; i<str.length; i++){
        result+=str[i];
    }
    return result;
}

//Scope - accessibility of the variables, objects and functions from different part
// 1.Function scope - variable defined inside the function cant be used outside-more specific, function ke paad khudhka nhihai toh global ko use kr leta hai
//2.Global scope - outside the function which can be acessible anywhere, 
//3.Block Scope - {  Block  }

{
    let a = 25;
}
// console.log(a); - cannot be accesed outside , const
// var can be accessed ouside block

//Lexical scope = nested functions concept
// andar wala fun bahr wale ke varibles ko access kr skta hai lekin bahr wala andar wale ko nhi
function outerfun(){
    let x = 5;
    let y = 6;
    function innerfun(){ // bahr wale fun ke varibles ko ander wale function use kar skte hai - ooposite is not true
        console.log(x);
    }
    innerfun()
}

// in js functions ke andar jo variables use huye hai unko declare krne se pehele unhe use kr skte hai 
// this is called hoisting


//*************/
//Function Expression- fun ko variable ke andar store kar rahe hai

const summ = function(a,b){
    return a+b;
}
summ(2,3);

let helllo = function(){
    console.log("hello");
}

helllo = function(){
    console.log("namaste");
}


//Higher order functions- that does one or both 1. take one or multiple as arguments 2. returns a function
function multipleGreet(func,n){
    for(let i=1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}
multipleGreet(greet,3);



function oddOrevenFactory (req){
    if(req == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }else if(req == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
        return even;
    }else{
        console.log("wromg req");
    }
}
let req = "even";


//Methods - of objects have functins then those funcs are called methods
const calci = {
    num: 55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
    return a-b;
    },
    mul: function(a,b){
          return a*b;
    }
}
