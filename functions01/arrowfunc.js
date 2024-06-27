const user = {
    username:"shobhika",
    price: 99,

    welcomeMessage: function (){
        console.log(`${this.username} welcome to your poetry world`);
        console.log(this);
    }// if you want to use username then do this.username called current context
    // context means kiske baare mai baat ho rhi hai

}
user.welcomeMessage()
user.username = "sam";
user.welcomeMessage()

console.log(this); // this will refer to an empty object because we are in node environment
// ***** Inside the browser the global is window object *****//


function poetries() {
    poet :"Shobhika"
    console.log(this);
    console.log(this.poet); // we cannot use this keyword inside the function it gives undefined

}
poetries();


//*********     Arrow Functions*****************/

const storySession = () => {
    let storyTeller = "Roohi"
    console.log(this)
}
storySession()

const addTwo = (num1, num2) =>{  // this is called basic arrow function 
    return num1+num2
}
console.log(addTwo(6,5))

// arrow funtion with implict return 
const addOnw = (num3,num4) => (num3 +num4)  // we dont write the retutn satement for hte simple ones
// this is mostly used in React 
const addOne = (num3,num4) => ({Username : "shobhi"})
console.log(addOne(3,4))
