//const tinderUser = new Object() // or we can write ,, this is a singleton object

const tinderUser ={} // this is a non singleton object

tinderUser.id = "345rt";
tinderUser.name = "Shiva";
tinderUser.isLoggedin ="false";
console.log(tinderUser);

const regularUser = {
    email: "gsfn@gmail.com",
    fullname: {             // we can do as much nesting as we want accordint to the requirement
        userfullname:{
            firstname: "Shobhika",
            lastname:"Saini"

        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);  // as much dots as much inside you can go 
// if some valus is not present then we use fullname? like to ask from api calls whether this thing exist or not 

// like arrays we can also combine objects

const obj1 ={ 1: "a", 2:"b"}  // se more properties for this in console
const obj2 ={ 3: "a", 4:"b"}

const obj3 = {obj1, obj2}; // this will give same error as in the array , object ke andar objedct
console.log(obj3);

//const obj4 = Object.assign({},obj1, obj2);  // this {} is optional parameter to give but this is a good practice to give this as it ensure t cobine all
//console.log(obj4);

// or we can do => 90% we use this

const obj4 ={...obj1, ...obj2}
console.log(obj4);

const user = [
    {
    id:1,
    email:"gsds@gmail.com"
    },
    {
        id:1,
        email:"gsds@gmail.com"
    },
    {
            id:1,
            email:"gsds@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // this is very imortant
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // keys a nd unki values kaa rray return krta hai

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedin'));






