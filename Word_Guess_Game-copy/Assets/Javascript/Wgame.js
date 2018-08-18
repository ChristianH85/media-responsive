let remainingGuesses= 7;
let hiddenWord= [];

let underscore= [];
//function begin(){
    let underscore= [];
    let austin= [ "Tacos", "Weird", "Sixth", "Barton"];
    let hiddenWord= austin[Math.floor(Math.random()*austin.length)].split("");
    for(i=0; i<hiddenWord.length; i++){
      underscore.push("_");
    console.log(underscore);  
}
document.getElementsByClassName("guesses").textContent = remainingGuesses;
document.que(".word").textContent = underscore.join(" ");
//console.log(underscore);
//}