//Application programming interface
// api - do softwares ke bich mai baat krnek ka tarika , i=on the basisi of internet called web api's
// api's return some data i the form of JSON format, api has their api's and links 
// some url are normal and not paid and do not have any key ,key are given to those who are authenticate user
// https://catfact.ninja/fact
// www.boredapi.com/api/activity
//googlemap.api
// each api has documnetation which tells their workings , we make key for those api's

//What is JSON - javascript object notation-
// older formats are XML format
 // www.json.org
 // there are many json validators - where we ca copy and paste the the data from the api call and it eill tell whether data is valid or not

let object = {
    a:undefined  // undefined is not valid in json
};

// Accessing the data from JSON
// JSON.parse(data) - to parse a string data into a JS object

let jsonResponse =' {"fact":"A cat\u2019s jaw can\u2019t move sideways, so a cat can\u2019t chew large chunks of food.","length":74}'

let validResp = JSON.parse(jsonResponse);
console.log(validResp.fact);

// Another method to convert
//JSON.stringify(json) - to parse a JS object data into JSON - this we generally when we make our own api

let student={
    name:"Shobhika",
    age:22
}
JSON.stringify(student);

//Testing of the API's
//1.Hppscoth
//2.Postman

//AJAX - Asynchrpnous javvascript and XML , req and response process is asynchronous these req and response are called ajax
// Http Verbs  - Get , POst , Put , Delete
//Status code - 404 page not found, 200 -ok, 400-bad req, 500 - internal server error and many more
// Additional information in our url - query String in the url where we can add our query in hte form of key value pair eg. harry+potter



