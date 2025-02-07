let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clicked")
})

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li was clicked")
    });
}

// like in this if in console we cliced on div then div id clicked but when we click the list then ul is clicked and div is clicked
//both occured this is called when the event bubbling when due to child elelmet parent is also triggered
// to stop this we use stop propagation inside out child elelment