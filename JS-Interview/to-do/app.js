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
        for(items of todo){
            console.log(items);
        }
        console.log("-----------")
    }else if(req == "add"){
        let task =prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        
    }
}