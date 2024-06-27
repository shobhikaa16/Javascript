// control flow

//if
// if(true){
//     this code will execute
// }

/* if(false){
   this code will not run
}*/ 


}

// <, >, <=, >=, ==, !=, === , !==

// if( 3!= 2){

// }

// if( 2 == "2"){
//     console.log("executed"); // this will execute true , we know here it is not checking datatype
// }

// if( 2 === "2"){
//     console.log("this will not execute")// this will not execute as this === check the datatype also
// }

const temperature = 45;
if( temperature < 50){
    console.log(" less than 50")
}else{
    console.log(" not less 50")
}
console.log("yeh hoga hi execute")

const score = 200

if (score > 100){
     //const power = "fly"
     var power = "fly"
     //let power = "fly" // try these all three


     console.log(`User power:${power}`); // this will not execute as score declared outside
}
console.log(`User power: ${power}`);

const balance = 1000
//if( balance > 500) console.log("test") // here scope thing will not come
 if( balance < 500){
    console.log(" less than 500")
} else if (balance < 900){
    console.log(" less than")
}else {
    console.log("greater than 900")
}

const isUserLoggedIn  = true 
const debitCard = true
if(isUserLoggedIn && debitCard) {
    console.log("Allowed to do shopping")
}else {
    console.log("not allowed")
}
