// alla bout the constructor
 function User(username, loginCount, isLoggesIn){
    this.username = username // changing the place of the this also gives the samw result
    this.loginCount = loginCount
    this.isLoggesIn = isLoggesIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this  // return is by default if we do not do then also it will return
 }
 const userone  = new User("hitesh",12, true)
 //const usertwo  = new User("shobhi",11, false)
// if we define the usertwo without new then it will override the values even if we print the userone only
// to remove this problem we use the new keyword which makes the new instance each time
 console.log(userone.constructor);