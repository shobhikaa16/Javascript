let randomNum = parseInt(Math.random()*100+1);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot= document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultPras')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault() // stopping the values so that they do not go to the server
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // check whether num is valid
    if(isNaN(guess)){
        alert('Please Enter a Valid number')
    }else if(guess < 1){
        alert('Please Enter a Valid number')
    }else if(guess > 100){
        alert('Enter a num less than 100')
    }else{
        prevGuess.push(guess) // arr ke andar num daldia 
        // maybe it can be the last num
        if(numGuess > 10){
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
            numGuess++;  // num guess ko bda dia

        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNum){
        displayGuess(`Number is too low`)
    }else if(guess > randomNum){
        displayGuess(`Number is too high`)
    }


}

function displayGuess(guess){
    userInput.value = '';// user ka input ko khali kia
    guessSlot.innerHTML+=`${guess}, ` // guess slot mai guess num ko add kia
    remaining.innerHTML=`${10-numGuess}` // bache huye wale dikhadiye
}

function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')// userinput ke aur value add na kar ppaye
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
const newGameOption = document.querySelector('#newGame')
newGameOption.addEventListener('click',function(){
    randomNum = parseInt(Math.random()*100+1);
    prevGuess = [] // isey bhi khali kardia
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${10-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;

});
}





