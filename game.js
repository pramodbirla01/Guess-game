const toggle=document.getElementById('toggleDark');
const body=document.querySelector('body');

toggle.addEventListener('click',function () {
    this.classList.toggle('bi-moon')
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background='white';
        body.style.color='black';
        body.style.transition='.2s';
    }
    else{
        body.style.background='black';
        body.style.color='white';
        
    }
})


let randomNumber=parseInt(Math.random()*100+1);

const submit = document.querySelector('#sbt');
const input = document.querySelector('#int');
const userGuess = document.querySelector('.preGe');
const remaining =document.querySelector('.rem');
const LowHigh =document.querySelector('.lohi');
const startOver =document.querySelector('.attempt');

const p=document.createElement('p');

let preGuess=[];
let numGuess=1;

let playGame=true;

if (playGame) {
    submit.addEventListener('click',function(e) {
    e.preventDefault();
    const guess = parseInt(input.value)
    validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number')
    }
    else if(guess<1){
        alert('Please Enter Number Greater than 1')
    }
    else if(guess>100){
        alert('Please Enter Number Less than 100')
    }
    else{
        preGuess.push(guess)
        if (numGuess===10) {
            displayGuess(guess)
            displayMessage(`Game Over: Right number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess===randomNumber) {
        displayMessage('You guessed it right!')
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage('Your Guess is low')
    }
    else if(guess>randomNumber){
        displayMessage('Your Guess is High')
    }
}

function displayGuess(guess) {
    input.value=''
    userGuess.innerHTML+=`${guess}, `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
    LowHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame() {
    input.innerHTML=''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML= `<h2 id="newGame" style="border:2px solid black"><i class="bi bi-joystick">New Game</i></h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame() {
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber=parseInt(Math.random()*100+1);
        preGuess=[];
        numGuess=1;
        userGuess.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        input.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true;
    });
}




