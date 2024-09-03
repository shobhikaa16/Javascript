const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'Ruby'
}
// to iterate objects we are using forin loop
for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
    console.log(`${key} is for ${myObject[key]}`);
}

const prog = ["c","c++","py","java","cpp"]
for (const key in prog) {
   console.log(key);// this will give index values
   console.log(prog[key]); //this will print the values
}