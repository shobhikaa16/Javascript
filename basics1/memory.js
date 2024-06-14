// Stack (Primitive) and Heap(Non- primitive)

let myBook = "MyLife"

let Book2 = myBook
Book2 = "Life"
console.log(myBook)
console.log(Book2)

let user = {
    email: "user@g.com",
    upi: "user@123",

}

let userTwo= user // agar mai isey as a object pass kru toh result alag hoga

userTwo.email ="as@gmail.com"

console.log(user.email);
console.log(userTwo.email);
