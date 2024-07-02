const userEmail = "shobh@gmail.com"

if(userEmail){  // directly userEmail daal dia agar value hai toh true nahi toh false
    console.log("got the userEmail");
}else{
    cconsole.log("Dont have user email");
}

//falsy value
// false , 0 , -0, bigInt 0n , "", null , undefined, NAN 

//truthy values -> jo bhi sab bache b=vo truthy values
//"0" , 'false' , ' ', [] empty array , {}, function(){}

// to check if array is empty
if(userEmail.length === 0){
    console.log("Array is empty");
}

// to check if object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0)/* this returns an aray*/{
    console.log("Object is empty");

}

//NUllish coalesing Operaor (??): null defined

let val1;
//val1 = 5 ?? 10
val1 = null ?? 10; // 10 will print
console.log(val1);

val2 = undefined ?? 15;
console.log(val2);

val3 = null ?? 10 ?? 20
console.log(val3);

// Ternary operaror

//conditon ? true : false
const iceTeaPrice = 100;
iceTeaPrice >=80 ? console.log("more then 80"):console.log("less then 80")





