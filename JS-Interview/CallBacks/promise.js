// promise krta hai promise aur phir batata ki vo cheez aage jake hogi yaa nhi hogi 
// the code we made last we will execute that with the help of promises now
// the promises object represents the eventual completetion or failure of an asynchronous operation and its resulting value
//Promise  object has two things (resolve and reject)

// like in last internetspeed function instead of success and failure we will return the promise object 

function saveToDb(data){

    let internetSpeed = Math.floor(Math.random() *10)+1;
    return new Promise((resolve,reject)=>{
        if(internetSpeed > 4){
            return resolve("success:data was saved");
        }else{
            return reject("failed:speed was weak");
        }
    });
}

// in the console

saveToDb("Shobhika is here")

// as promise is an object so it has its methods then() and catch()
// if the promise has state that it has fulfilled then after that we want that any work could execute then we use then()
// and when it reject then the error is thrown anwe use catch() to catch the error

let request = saveToDb("SHobhika is here");
console.log(request);
request.then(() =>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected")  // toh ab agar reject hoga toh error print nhi hoga
})
// we can change syntax by removing the variablae request and directly call on our function

//Promise chaining when we use multiple then()
// multiple then and single catch()
saveToDb("SHobhika is here")
.then(() =>{
    console.log("promise was resolved");
    saveToDb("helloworld")
    .then(()=>{
        console.log("data 2 saved");
    })
})
.catch(()=>{
    console.log("promise was rejected")  // toh ab agar reject hoga toh error print nhi hoga
})

// making the above code more better - yeh wala eroor nhi show kreaga agat work reeject hua toh
saveToDb("Shobhika is here")
.then(() =>{
    console.log("promise was resolved");
    return saveToDb("helloWOrld");
})
.then(()=>{
    console.log("data2 saved")
    return saveToDb("making more nesting");
})
.then(()=>{
    console.log("data 3 saved");
})
.catch(()=>{
    console.log("promise was rejected");  // toh ab agar reject hoga toh error print nhi hoga
});
