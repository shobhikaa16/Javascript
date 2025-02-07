let user = document.querySelector("#user")

let form = document.querySelector("form")
form.addEventListener("submit",function(){
    event.preventDefault(); 
});

user.addEventListener("change", function(){
    
    console.log("input chnaged") // initial se final state mai jate hue koi chnage hua toh 
    console.log("final vlaue=" , this.value);
})