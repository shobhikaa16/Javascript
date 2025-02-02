// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// loops in javascript to iteratie the piese of code
// syntax for( initialisation; conditon; updation){ do somwthing here}

/*
for( let i=1; i<=5; i++){
    console.log(i);
}

for(let i=5; i>=1; i=i-2){
    console.log(i);
}

// print all odd nums - or use i=i+2
for(let i=1; i<=50; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// print all even nums - or use  let i=2 and i = i+2
for(let i=1; i<=50; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
// table of 5
for(let i=1; i<=10; i++){
    console.log(i*5);
}

let n= prompt("write your number"); // anything we take in prompt is string so to convert it useparseInt
n = parseInt(n);

for(let i=1; i<=10; i++){
    console.log(i*n);
}

*/

//Nested loops
// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

//while loops
/*let i=1;
while(i <= 5){
    console.log(i);
    i++;
}

let j = 5;
while( j >= 1){
    console.log(j);
    j--;
}
    */


//favourite Movie

// const favMovie = "Harry Potter"

// let guess = prompt("Guess the movie - Most famous movie among children");
// while((guess != favMovie) && (guess != "quit")){
//     guess = prompt("Wrong Guess. Guess the movie again");
// }
// if( guess == favMovie){
//     console.log("Congrats you guess the right");
// }else{
//     console.log("You quit");
// }

//break keyword break the loop and comes out the loop at the same time

//lopps with arrays
let fruits = ["mangoes","apple","banana"];
for(let i=0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}


// for of loop - we use it if we want to access the items of the array
// syntax for(element of collection){ do something here}

let basket = ["m","p","b","o"];
for( fruits of basket){
    console.log(fruits);
}

for(char of "Shobhika"){
    console.log(char);
}

// we can also use nested for off loop

let list =[[1,2,2,3],[6,6,6,6]];

// we can do this 
for(nums of list){
    console.log(nums);
}

// ans we can also try this
for(nums of list){
    for(n of nums){
        console.log(n);
    }  
}