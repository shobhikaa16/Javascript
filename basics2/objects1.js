// when we declare as literals then it do not form singleton,,this made by object,create
// if from constructor then it will be singleton

// obejcts literals

const mySyb = Symbol("Key1")


const JsUser = {
    name:"Shobhika",  // object has key values ,, this key name is taken as key in js
    "fullName":"Shobhika Saini", // now we cannot access it with the . operator
    age:20,
    location:"Bareilly",
    email:"sho@gmail.com",
    lastLoginDays:["mon","wed"],
    [mySyb]: "myKey1"
}
console.log(JsUser.email);
console.log(JsUser["email"]); // more better way 
console.log(JsUser["fullName"]);

// declare a symbol and print it as using a key 

console.log(JsUser[mySyb]);

JsUser.email = "@gmail.com"
//Object.freeze(JsUser) // object is freezed then no changes can be made now

JsUser.greeting = function(){
    console.log("hello how are you?");
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);  // this gives function return back , reference of function

JsUser.greeting2 = function(){
    console.log(`hello ${this.fullName}`);
}
console.log(JsUser.greeting2());





