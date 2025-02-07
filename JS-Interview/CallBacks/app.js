// call stack 
// see how all these calls are being called , konsa p=func pehle call hua konsa baad mai

function hello(){
    console.log("inside hello function")
    console.log("hello");
}
function demo(){
    console.log("calling hello function")

    hello();
}

console.log("calling demo function");
demo();
console.log("done by!")

// function  
// to run this we start calling three wala func
function one(){
    return 1;
}
function two(){
    return one()+ one();
}
function three(){
    let ans = two() +one();
    console.log(ans);
}
three();

// breakpoints - call stacks can be seen through the browser at the time of debugging
// console -> source -> js file

// js is single threaded language  - agar likha hua hai toh ek time par code ki ek cheez hi execute ho paegi
// video -30 theoritical 
let a= 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);
