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

