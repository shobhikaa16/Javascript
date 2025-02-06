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

let images = document.getElementsByClassName("oldImg");
// and we acces non valid className then we get empty collection
// as class has many objects so we can apply loop to access the images
for(let i=0; i<images.length; i++){
    images[i].src = "mention the chnged src";
    console.log(`value of ${i} id changed`);
}

// selecting by tagname
let some = document.getElementsByTagName("p");  // it will return all the pragrapghs 
// we can acees them individually
document.getElementsByTagName("p")[1].innerText= "dhjbjds";

//QuerySelectors

document.querySelector('p');
document.querySelector('#myId');
document.querySelector('.myclassname');  // it will give us the first object only
let para = document.querySelectorAll("p");
document.querySelector("div a"); // give only first anchor tag
document.querySelectorAll("div a"); // give all 

//setting content in the objects
//1. innerText => shows the visible that we are seing on the web page
//2.innerHTML => this shows all the  hidden and undidden content along with html markups
//3.textContent =>this shows all the  hidden and undidden content

para.innerText = "abc";
para.innerHTML = "heyy <b> hello </b>";
para.textContent = ;



