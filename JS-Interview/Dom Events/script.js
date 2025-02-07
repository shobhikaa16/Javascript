let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.backgroundColor = "blue";
})
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

//this in event listener
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    console.log(this);  //this.innertext can try
})

h1.addEventListener("click", function(){
    h1.style.backgroundColor = "blue"; //this.innertext can try
});

h3.addEventListener("click", changeColor)
     //this.innertext can try


//insteado gmakeing all again and again make a single function and pass that functionin the call back 

function changeColor(){
    this.style.backgroundColor = "pink";
}

// Mouse events - having event argument, this is default argument -this comes by default- this event is pointer event that te mouse pointer we have on screen
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });  

// let input = document.querySelector("input")
// // input.addEventListener("keydown", function(event){  // when we press key without event then it shows the simple console key was pressed
// //     // ut when with event hten there comes the event object each time
// //     console.log(event);
// //     console.log("key was pressed");
// // })

// //event - 1. code- jo key press ki hai us key ka code ,,,,,,2.key-"a","b",";" particular key aaegi jo humne press ki

// // for the game character
// input.addEventListener("keydown", function(event){
//     console.log("code =", event.code);
//     if(event.code == "ArrowUP"){
//         console.log("character moves forward")
//     }else if(event.code == "ArrowLeft"){
//         console.log("character moves left")
//     }
// })

// let form = document.querySelector("form")
// form.addEventListener("submit",function(){
//     event.preventDefault(); // after applying this we are not going to other page after submitting
//     alert("form submitted");
// });
// to prevent the default action any action it can be

//extracting data from the data
let form = document.querySelector("form")
form.addEventListener("submit",function(){
    event.preventDefault(); 
    let inp = document.querySelector("input")
    console.log(inp); // here np.innertext will not work
    console.log(inp.value); // input keandar jo current value hai , vopritnkra skte hai isse yha
    
});

// accessing the values by form objects
let forms= document.querySelector("form")
form.addEventListener("submit",function(){
    console.die(forms); // form object -> inside it elements there wecan get all the values
    form.elements[0];
    // or let user = this.elements[0]
});
