// all the async return the promises - they have two keyqords async and await


async function greet(){
    //throw"some random error";
    //annkjf.dngj()
    return "Hello world";
}

greet()
.then((result)=>{
    console.log("promise was resolves");
    console.log("result was :",result)
})
.catch((err)=>{
    console.log("promise was rejected with error:",err)
})

// hum arrow funciton sko bhi async bnaskte hai 
// let demo =async()=>{
//     return 5;
// }

//await keyword
// pauses the execution of its surrounding async funciton until the promise is settled (resolved or rejected)
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000)
        
    });
}

async function demo(){
    await getNum(); // humne cal kia getNum ko toh abhi yeh teeno num ek saath ajaenge ek second baad, but we want that har ek second 
    // baad msg aaye isiliye we use async await.
    await getNum();
    getNum(); //we have use wait so they will come one by one after each second
}