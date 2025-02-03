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

sum(sum(1,2),3); 

