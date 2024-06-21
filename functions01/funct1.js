// to package the code - so that we fcna reuse it

function sayMyName(){
    console.log("s")
    console.log("h")
    console.log("u")
    console.log("b")
    console.log("h")
    console.log("i")
}

//sayMyName // if we write only this then is called reference - means we are telling  htat vo func wha reheta hai
sayMyName() // as soon as we put the parantheses thenit is called execution

function addTwoNums( num1, num2){ // in js we dont have to give the type of hte nums
    // when we define a function then we pass  parameters they can be string , numbers etc datatype
    console.log(num1 + num2);

}
// and when we call a functin then we pass arguments
const result = addTwoNums(3,77) // pass the arguments
console.log("Result:", result); // this will show undefined
addTwoNums(3,"77") 
addTwoNums(3,"a")
addTwoNums("3",77)
addTwoNums("45","45") 
addTwoNums("3",null) 
addTwoNums(3,null)

//dono given arguemnts mese  agr ek bhi string hai toh vo usey as astring pass krdega
// no and null mai bas ek no. lolega ,a nalyze all results

// better way to make function

function numsAdd(n1, n2){
    return n1+n2
// one more way to make function
          // or below //

    // let ans = n1+n2
    // return ans // but now if we print result then it actually hava a value
    // return ke baad agar hum kuch likhte hai toh vo kaam nhi kreag
}
//console.log(ans);

function loginUser(username) // ="sam") , if we give argument then it will override
    {
    if(username === undefined){ // or we can write if(!username){}
        console.log("Please enter a user name");
    }
    return `${username} just loggen in!`  // isne bas value ko return krdai but wedint say anywhere ki printkaro

}

//loginUser("Shobhika")
// so to print we will do
console.log((loginUser("Shobhika")))
console.log((loginUser())) // if we dont pass anu value => it gives undefined


// shoppung cart where we have to add as much as user is adding so for that how we have to manage the parameters and arguments

function addshopList(val1, val2 ,...numm1){
    return numm1
}
console.log(addshopList(2,400,500,7,899,65,986)) // only first item will return
// so here we will use rest operator , this is also called spread operator but depends upon used case when to say what

const user = {
    userName:"sapna",
    price:" 499"
}

function handleObject(anyOBject){
    console.log(`userName is ${anyOBject.userName} and price is ${anyOBject.price} `);
}
handleObject(user);

handleObject({  // handle object functio ban rakha hai toh usme humne sidhe hi value pass kedi ya uske andar object bandia
    userName:"shubhi",
    price:"399"
})

const myNewArrar = [200,300,4000,500]
function returnSecValue(getArray){
    return getArray[2]  // yha hme voi argument pass krna hai jo dia hai humeuss given array se mtlb nhi hai
}
console.log(returnSecValue(myNewArrar));
console.log(returnSecValue([1,2,3,4,5,6]));
