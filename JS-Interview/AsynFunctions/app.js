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


// async function for the chnge color

let h3 = document.querySelector("h3");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        let num = Math.floor(Math.random()*10)+1;
        if(num > 3){
            reject("promise rejected");
        }
        setTimeout(() => {
            h3.style.color=color;
            console.log("color chnges");
            resolve("color changed!");
        },delay);
});
}

async function demo(){
    try{
 await changeColor("red",1000);
 await changeColor("orange",1000);
 await changeColor("blue",1000);
 await changeColor("pink",1000);
 await changeColor("purple",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
}

// how we handle the rejections with await suing try and catch

let a = 5;
console.log("now after await new work");
console.log("fdsg");
