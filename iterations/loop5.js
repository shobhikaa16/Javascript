const coding = ["js","ruby","python","java","cpp"]
// simply foreach loop 
coding.forEach( function (item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})
 // yha phelese koi function hai , ab 
function printMe(items){
    console.log(items);
}
coding.forEach(printMe)

// yha hum aur bhi values print kara skte hai
coding.forEach((item,index, arr)=>{
    console.log(item,index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"java"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    }
]
// projects mai values arrays ke pbjects ke form mai hi aati hai toh hum  asani ab yha foreach loop use karskte hai
myCoding.forEach ( (item) =>{
    console.log(item.languageName);

})