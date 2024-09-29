// generate a random colour

const randomColor = function(){
    const hex = "0123456ABCDEF"
    let color = '#'
    for(let i =0; i<6; i++){
           color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
console.log(randomColor());

let interID;
const strtchangeColor = function(){
    if(!interID){
    interID = setInterval(changeBgColor,1000)
        
    }
}
     
function changeBgColor() {
    document.body.style.backgroundColor = randomColor();

}
const stopChangeColor = function(){
    clearInterval(interID)
    interID=null; // value ko deference override se bachana

};
document.querySelector("#start").addEventListener('click',strtchangeColor);

document.querySelector("#stop").addEventListener('click',stopChangeColor);
