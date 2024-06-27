// Immediately Invoked Function Expression (IIFE)
// global scope ke pollution se problem hoti hai so remove that pollution we use iffi 

function chai (){
    console.log(` DB CONNECTED`);
}
//chai()

// To invoke the function immediately
// only cover the function with the parantheses

(function chaii (){
    console.log(`DB CONNECT`);

})();


// first is for functionki definition , sec is execution call 


( () => {
    console.log(`DB Connect ${name}`);

})('shobit')