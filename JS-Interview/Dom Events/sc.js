let user = document.querySelector("#user")

let form = document.querySelector("form")
form.addEventListener("submit",function(){
    event.preventDefault(); 
});

user.addEventListener("change", function(){
    
    console.log("input chnaged") // initial se final state mai jate hue koi chnage hua toh 
    console.log("final vlaue=" , this.value);
})

user.addEventListener("input",function(){
    console.log("input event");
    console.log("final vlaue=", this.value)
})

let inpput = document.querySelector("#text");
let p = document.querySelector("p");
inpput.addEventListener("input",function(){
    console.log(inpput.value);
    p.innerText = inpput.value;
})

