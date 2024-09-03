// for of
["","",""] // array ke andar string
[{},{},{}]// array ke andar objects
const arr = [1,2,3,4,5]
for (const element of arr) {
    console.log(element);
}
const greetings = "Hello world!"
for (const i of greetings){
    console.log(`Each char is ${i}`)
} 

// Maps in javascript - holds key value pairs , unique identities and order maintained
const map1 = new Map()
map1.set('IN',"India")
map1.set('USA',"united states of America")
map1.set('LN',"London")
console.log(map1)

for( const [i,m] of map1){
    console.log(i, 'related to',m);
}

const myObject = {
    'game1':'NFS',
    'game2':'PFS',
}
// for( const [i,m] of myObject){
//     console.log(i, 'related to',m);
// } // we geth this this myObject is not iterable here but we can iterate this through another techniques
 // maps are non iteratable se forin loop will not work  and give no error
