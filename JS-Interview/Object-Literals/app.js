// Object and Object literals are different in the js.
// they are used to store keyed collections and complex entities
//property =>(key,value) pair , object are a collection of properties

let delhi ={
    latitide: "23:35:N",
    longitude: "23:76: E"
}

// generally we make them const
const student = {  // isey const bana dia mtlb iska jo refernce ya iska jo address hai vo chnge nhi horha
    name: "Shobhika",
    rollno: 23,
    marks: 95 ,
    age: 22
};

// like arrays have specific order how they store values bit object literals do not have any order

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red","pink","yellow"] // like here we can store multiple datastructures in the objects
};

//Create a Twitter post which has properties
const post ={
    username: "@shobhika",
    content: "THis is my forst post",
    likes: 100,
    reposts: 5,
    tags: ["@sapna","@amit","@shobhit"]
};

// how to access the data or get our values that we store above
post["tags"]; // both the forms are good to access the data
post.username;

//Conversion in get vlaues - js automatically converts object keys to strings

const obj ={  // here we make the keywords of the js as the keys
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};  // so js make these keys into the strings
// ****** So this means when we are accesing values like obj[1] then it not taking it is taken as string  ******
// when we take as obj[null] then it directly converts the null first into the string then compare with the original keys 
// but when we use . operator then we have to pass the string as it donot directly converts numbers into the string 

obj.null // is correct
obj.true; // is correct
//obj.1 // is incorrect

//Add and Update values for object literals-
const students ={
    name:"Shobhika",
    age: 21,
    marks: 94,
    city: "ghz"
};

students.city = "Mumbai"; // we update the value
students.gender = "female";// we add the new key value pair
students.marks = "A";

// delete the value
delete students.gender;

//Nesting of Objects or Objects of Objects
