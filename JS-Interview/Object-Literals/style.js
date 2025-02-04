// this keyword in js

const student = {
    name:"shobhika",
    age: 21,
    marks:95,
    maths:90,
    eng:95,
    package:25,
    getAvg(){
        console.log(this);  // this ka mtlbhai humara student object
        let avg = (this.marks+this.maths+this.eng)/3
        console.log(`${this.name} gets the avg marks ${avg} `);
    }
};
// this = this keyword refers to an object which is executoing the current piece of code

function getAvg(){   // this gives window object 
    console.log(this);
}
// highest order object is windows

//try and catch 
console.log("hii");
console.log("hii");
let b = 3;
// let a;
try{
    console.log(a);  //using try and catch humara code bich mai ruka nhi 
    // console.log(b);
}
catch(err){
    console.log("a is not defined");
    console.log(err);
}
console.log("hii");
console.log("hii");
console.log("hii");

// Arrows functions - these are not stand alone functions, they are used as the values or thy are used
// as the arguments in the higher order functions - arrow functions are nameless fucnitons
// Syntax = const func = (arg1 , arg2, ...) =>{ definition}

const sum = (a,b)=>{
    console.log(a+b);
}

const cube = n => {   // in  case of single argument these pratheses can be removed == n
    return n*n*n;
}
const hello = () =>{
    console.log("hello everyone!");
}

//Implicit return in arrow function - like if it is only returning a single vlaue
const mul = (a,b) =>(
    a*b   // like we are here not telling to return as it is returning a single value
);


// Set TImeout functions - functions which takes tiem to execute so set timer for it - it inbuilt funciton of window object 
// Synstax   setTimeout(function, timeout) , the fucntion inside is callback function
// timeout takes times in 1 milisecs , so 1sec = 1000 ms

console.log("hello there")
setTimeout( () =>{
    console.log("Shobhika's Poetry");
}, 100)
console.log("Welcome to !")
console.log("Welcome to !")
console.log("Welcome to !")
console.log("Welcome to !")


//setInterval function - set interval will execute the function after every set internal, multiple times it runs
// so to stop the function - every setINterval function has its own id -to stop write clear interval and pass id in it.
let id = setInterval( () => {
    console.log("Congratulations!! Shobhika You have been selected in the Microsoft.")
},(3000) )
console.log(id);

clearInterval(2);

//*************************** ******************************/
// this of Arrow functions  - have lexical scope - hmare parent ko kisne call kiahai yeh yeh dekhte hai, jo parent ka scope voi arrow fucntion ka this hai
// function = here this has normal scope
//*************************** ******************************/

const studentt = {  //this object has global scope
    name:"aman",
    marks: 95,
    prop: this,  // this this here if from window object
    getName: function(){
        return this.name
    }
}
// studentt object ke liye this tha window object uska global scope lekin getName() fun ke liye this hai studentt object

// but if we use the arrow fucntion
const studentts = {  //this object has global scope
    name:"aman",
    marks: 95,
    prop: this,  
    getMArks: () =>{  
        console.log(this); // this this here has the parents's scope, is func ka parent hai studentts(parent) and studentts ka scope hai window object.
        return this.marks;
    },
    getInfo:function(){
        setTimeout( () => {
            console.log(this) // studentts
        },2000);
    },
    getInfo2: function (){
        setTimeout(function (){
            console.log(this); // window
        },2000)
    }
};









