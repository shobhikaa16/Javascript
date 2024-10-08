//this is all about the object literal
const user ={
    username :"shobhika",
    logincount :6,
    signedIn: true,

    getUserDeatils: function(){
        console.log("get user details from database");
        console.log(`Username:${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDeatils());
console.log(this); // here we got the global object which is the window object 