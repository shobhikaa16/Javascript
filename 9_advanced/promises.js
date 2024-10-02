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