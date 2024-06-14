const name ="shobhika"
const repoCount = 13

console.log(name + repoCount + " Good"); // not good method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shobhika")
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName.__proto__); // this is  how to use property
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));

const newStr = gameName.substring(0,4); // substring will ignore if we will give negative value and start with 0 
console.log(newStr);

const newS = gameName.slice(-8,3);
console.log(newS);

const naam = "   shobhika   "
console.log(naam);
console.log(naam.trim());  //trimStart() , trimEnd()

gameName.replace('s','t')
console.log(gameName)

console.log(naam.includes('s'));

console.log(gameName.split('-'))