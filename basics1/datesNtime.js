let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); //many other are also there
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

//interview ques
console.log(typeof myDate);

// to create my new date

let myCreateDate = new Date(2024,0,23)  // in js months start with 0
console.log(myCreateDate.toDateString());
let myCreatedDate = new Date(2024,0,23,6,7);
console.log(myCreatedDate.toLocaleString());  // hte extra givven no.s will convert inti the hours and minuted then into secs

//vcan also use format mmddyyyy
let myCreatedDate1 = new Date("2024-01-14");
console.log(myCreatedDate1.toLocaleString()); 

// To design poles and quizes so that who know who give ans first and when we use TimeStamp

let myTimeStamp = Date.now()
console.log(myTimeStamp); // this will give a milisecond value ,,,,In JavaScript, timestamps are typically represented as the number of milliseconds that have elapsed since the Unix epoch (January 1, 1970, 00:00:00 UTC). 
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // month starts with zero so add 1
// get day or other thing
//use `` to print the date and to do your work

console.log
newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''  // to make someting in hte date more specific
})





