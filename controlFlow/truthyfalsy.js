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
