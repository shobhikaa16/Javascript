// Axios are better easy way to send the http request 
// now we have ass the src of axios in the html

// let url = "https://catfact.ninja/fact";
// // similarly we ca use the api of dog for imge of the dog
// // do not use the for loop for api and do not make unnecessary calls  
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("error-",e);
//         return "No Fact Found";
//     }
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     console.log("button was clicked")
//     let fact = await getFacts();  // getFacts() asynchronous fun ahi toh await lgadia
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText=fact;
// });

// pass headers with the axios
// const url = "https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config = { headers :{Accept:"application/json"}}
//         let res = await axios.get(url,config);
//         console.log(res);
//     }catch(err){
//         console.log(err);
//     }
// }

//changing query string with the axios

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getCollege(country);
    console.log(colArr);
    show(colArr)
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("list");
        li.innerText = col.name;
        list.appendChild(li);
    }
}



async function getCollege(country){
    try{
        let res = await axios.get(url+country);
        console.log(res.data);
        return res.data;
    }catch(e){
        console.log("error",e);
        return [] // if any error then return the empty array
    }
}


