// Events are the signals that something happens.
// 1.onclick event - 

// let btn = document.querySelector("button");
// console.dir(btn);

// //this is one way touse onclick
// // btn.onclick = function () {
// //     console.log("button was clicked1") // or we can add an alert
// // };

// //another way
// function sayHello(){
//     console.log("Say hello");
// }
// btn.onclick= sayHello;  // yha hume func mai parantheses nhi lagane hai, kyuki () mtlb hai yehi function ko execute krna

// // to work on the buttons
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     // btn.onclick = doEvent;
//     // btn.onclick = sayName;  // we do thwo events here bu tonly second one is performed
//     // btn.onmouseenter = function (){
//     //     console.log("you entered into the button range");
//     // }

//     // working with eventListener
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",doEvent);

// }
// function doEvent(){
//     alert("Perform the event");
// }

// //EventListeners - when we want multiple things on single click 
// // syntax elelment.addEventListener(event,callback)

// function sayName() {
//    console.log("say name")
// }

// // like earlier were not performing the multiple events fo the same button but we can makemultiple event lsitneres for the same element
// btn.addEventListener("click",function (){
//     console.log()
// })



//Activity of random color
let butn = document.querySelector("button");

butn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
})

function getRandomColor(){
    // making rgb value rach between 0-255
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`
    return color;
}




