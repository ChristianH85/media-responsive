let letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let wins = 0;
let lost = 0;
let guessesLeft = 10;
let lettersGuessed = [];
let mysteryLetter = [];
let compChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];

let newCompChoice = function(){
    compChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
}
//restart game with  leters and guesses reset
let restart = function(){
    guessesLeft=10;
    lettersGuessed=[];
    mysteryLetter = [];
    newCompChoice();

    
}

//start game on key press
document.onkeydown = function(event){
    
    console.log(compChoice);
    let playerGuess= event.key;
    console.log(playerGuess);
    lettersGuessed.push(playerGuess);
    console.log(lettersGuessed[0]);
    mysteryLetter.push(compChoice);
    console.log(mysteryLetter[0]);


//game function

//document.querySelector(".guessed").innerHtml = lettersGuessed;
if(guessesLeft > 0 && playerGuess !== compChoice){
    guessesLeft--;
    document.querySelector(".guesses").innerHTML = guessesLeft;
    document.querySelector(".guessed").innerHTML = lettersGuessed;
}
else if(guessesLeft===0){
    lost++;
    document.querySelector(".loss").innerHTML = lost;    
    alert("You Lose")
    restart();
}   

else if(playerGuess === mysteryLetter[0]){
    wins++;
    guessesLeft=0
    document.querySelector(".wins").innerHTML = wins;
    alert("You Win")
    restart();

}

}


