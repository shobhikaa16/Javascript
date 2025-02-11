// all the async return the promises - they have two keyqords async and await


async function greet(){
    //throw"some random error";
    //annkjf.dngj()
    return "Hello world";
}

greet()
.then((result)=>{
    console.log("primise was resolves");
    console.log("promise was rejected with err:")
})
.catch(err)=>{
    console.log("promise was re")
}