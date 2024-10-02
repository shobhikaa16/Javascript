const promiseOne = new Promise(function (resolve, reject) {
    // Do and async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task complete');
        resolve()
    },1000)
})
// promise is created now we have to consume it
promiseOne.then(function(){
    console.log("Promise Consume");
})

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolves");
})

const PromiseThree = new Promise(function(resolve,reject){
    // manlo network se ki data aya ho vo paas krna ho
    setTimeout(function(){
        resolve({username:"Chai",email:"shu@hmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true // true fasle change karke result mai changes krke dekho
        if(!error){
            resolve({username:"shubhi", password:"675"})
        }else{
            reject("ERROR: something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{   // agr hume yha se data nikalna hai toh hum itna toh nhi krskte ki const mai kuch abnakr ohir usme value lekar cll krle
    console.log(user);       // else we can do chaining of the then again
    return user.username
})
.then((myusername)=>{
      console.log(myusername);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("the promise is either resolved or rejected"))
// at last finally use karke btado ki finally hu akya resilve ya reject or any message

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true // yha false hota toh koi error nhi hai aur sara kaam hogya bina kisi dikkat ke
        if(!error){
            resolve({username:"javascript", password:"675"})
        }else{
            reject("ERROR: proise5 went wrong")
        }
    },1000)
});
 
// rather then handling with the .then() we use here async to handle the promises 
async function consumePromiseFive (){
    try{
    const  response = await promiseFive 
    console.log(response)
}catch(error){
    console.log(error);
}
    
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // fatch ko chahiye hot ahi bas ek url

// const data = await response.json()  // this takes time to convert toh isko bhi await karan padega
// console.log(data);
//     }catch(error){
//         console.log("E:", error);
//     }
// }
// getAllUsers()

// doing the same above with withour try catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

// we see int this code hume yeh info phele mil rhi ahia aur ooperwali baad mai