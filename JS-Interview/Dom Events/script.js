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

// Mouse events
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });  all for our 