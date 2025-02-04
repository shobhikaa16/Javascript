// DOM = document object model, tree structure of the code 
// Windows object 
console.log(document);
console.log(windows);

// accessing the components is two step process
//1. select 2.changes/manipulations

console.dir(document); // gives all the things as objects 
console.dir(document.all); // only gives the object in the all
console.dir(document.all[8]); // selecting any specific
// changing using innerText
document.all[8].innerText = "changetext";

//select elelment by id
let obj = document.getElementById("id");
obj.tagName;
obj.id;
obj.scr;
// if we acces wrong id then we get null