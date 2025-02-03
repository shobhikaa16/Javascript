let todo =[];

let req = prompt("please enter your request");
console.log(req);

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("-----------")
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-----------")
    }else if(req == "add"){
        let task =prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("Please enter task index you wnat to delete.");
        todo.splice(idx,1); // splice array par jeaga aur  given index ke ek aage wale elelment ko delete kradega
        console.log("task deleted");
    }else{
        console.log("Wrong Request!!");
    }
    req = prompt("please enter your request");
}