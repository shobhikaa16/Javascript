let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" ,function(){
    let item = document.createElement("li");
    item.innerText =inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item)
    //console.log(inp.value)
   inp.value = " ";
});

ul.addEventListener("click",function(event){
    console.log(event.target.nodeName); // kon tha iska target , kiski wajah se yeh trigger hua hai
    //console.log("button clicked");
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});

// let delBtns = document.querySelectorAll(".delete")
// for(delBtn of delBtns){  // this eventListener of dletetion will not work on the new elments that we add in out list
//     delBtn.addEventListener("click",function(){
//         console.log("delete item");
//         let par = this.parentElement;
//         console.log(par)
//         par.remove();
//     })
// }

// to delete the new added things we use event bubbling concept- hum child ellement ki jagah eventlistner parent ke liye kardenge jisse child par vo khudh hojaega

