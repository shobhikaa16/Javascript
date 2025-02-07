// call stack 
// see how all these calls are being called , konsa p=func pehle call hua konsa baad mai

// function hello(){
//     console.log("inside hello function")
//     console.log("hello");
// }
// function demo(){
//     console.log("calling hello function")

//     hello();
// }

// console.log("calling demo function");
// demo();
// console.log("done by!")

// function  
// to run this we start calling three wala func
// function one(){
//     return 1;
// }
// function two(){
//     return one()+ one();
// }
// function three(){
//     let ans = two() +one();
//     console.log(ans);
// }
// three();

// breakpoints - call stacks can be seen through the browser at the time of debugging
// console -> source -> js file

// js is single threaded language  - agar likha hua hai toh ek time par code ki ek cheez hi execute ho paegi
// video -30 theoritical 

// let a= 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);
// this above nature of code is called synchronous


// and this is asynchronous nature
// setTimeout( ()=>{
//    console.log("shobhika");
// }, 2000)
// console.log("hello !")

// browser is able to do the the multiple work as they are made with the c++ and other multithreading languages


// due to asynchronous nature there comes call back hell problem
 let h2 = document.querySelector("h2");
  
function changeColor(color,delay,nextColorChange){
    setTimeout(()=> {
        h2.style.color = color;
        if(nextColorChange)nextColorChange();
    },delay)
   
}

// this is the nesting of the calls is called call back hell
changeColor("pink",1000,()=>{
    changeColor("orange",2000, ()=>{
        changeColor("purple",3000)
    })
})

// to avoid call back hell we use async , await , promises






