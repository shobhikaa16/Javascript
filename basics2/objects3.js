const tinderUser = new Object() // this is singleton object
console.log(tinderUser); // this will print an empty object

// destructing  of arrays and objects both are important
// destructing of objects

const course = {
    courseName: "Javascript learning",
    price:"345",
    courseTeacher:"youtube"
}
// to extract or access values course.sourseInstructor
const {courseTeacher: teacher} = course  // or we can rename it 
//console.log(courseTeacher);
console.log(teacher);



const navbar = ({company}) =>{  // this navbar is a prop ,, this {} means destructing ki ja rahi hai
// instead of using props.company we make a {company}
}

navbar(company = "spscom")

// API = apna laam kisi aur ke sar par dalna ho toh ,, how values come from backend and we use them
// pehele values aati thi XML mai which was complex but now it comes in JSON
// this is the structure of JSON
// {
//     "name":"Shobhika",
//     "coursename": "JScourse",
//     "price":"free"
// }
// not always we got API in the form of objects but sometime we get it  in the form of arrays also

[
    {},
    {},
    {}
]  // array whis is having much objects - randomuserme api  yha se data oothao and paste it in jSon formatter to se  how to read the data
// from htere we get to knoe easily the type of the dat athenwe can deal with it esily



