// scopes starts fromlet , var and const
// let a =10
// const b = 20
// var c = 30
//{} // this is called scope , this comes with fun ,or if-else
// { iske andar block scope} iske bahar global scope
var c =300;

let a =67;  // this a is totally independent from andar wala given
if(true){   
    // scopes starts fromlet , var and const
let a =10
const b = 20
var c = 30
c =3;  // ab yeh teeno { inke andar hai toh yhi tak define rahe but aesa nhi hota hai}
}

console.log(a) // yeh dono nhi hai apne scope ke bahr but var aagya
//console.log(b)
console.log(c)

// windows ke andar scope alg and browser ke andar alg 
function one (){
    const userName ="Shobhit"

    function two(){  //function two is inside the one so we can access the things of one kyuki one bda hai aur twoc chota hai lekin 
        const website ="youtube"
        console.log(userName)
    }
    //console.log(website); // yeh execute nhi hoga kyuki vo us scope ke andar tha aur wahi khtm

    two()
}
one()

if(true){
    const username ="Sapna"
    if(username === "Sapna"){
        const website ="youtube"
        console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);

//++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++


addone(5)  // *important*if we decalre functions in this way then can be called before  but if we dclare them as given below then they cant be called before

function addone(value){
    return value+1;

}


const addTwo = function(num){  // this is also function but also called expression some times
    return num+2
}
console.log(addTwo(5))