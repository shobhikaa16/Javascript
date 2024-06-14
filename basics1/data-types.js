// two types primitive and non primitive(reference type)
// primitive - call by value
// String , number ,volume , boolean ,null , undefined, symbol, BigInt
//Non primittive or reference type - array, objects, functions  => insab ka return type is function and functionka object function hai
// it is dynamically typed lang which means assign variables at run time

const sccore= 100
const scoreval = 100.56

const isLoggesIn= false
const outsidetemp = null

let userEmail;// undefined

const id = Symbol('123')
const anotherId  = Symbol('123')// symbol is used to give uniqueness

consol.log(id === anotherId);

const bigNum = 854746756575687n

const heros = ["shiv","Krsihna"]

// objects 
 let myObj ={
    name:"shobhika",
    age:20
}

//functions

const myFunction = function(){
    console.log(" hiiiiiii");
}

console.log(typeof bigNum);

// typeof vall undefined => "undefined"
// null => "object"