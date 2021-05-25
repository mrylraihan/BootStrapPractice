//create secretNumber
var secretNumber =  6;

//ask user for a guess
var stringGuess = prompt("Guess a number between 1-12");
var guess = Number(stringGuess);

//check guess
if(guess === secretNumber){
	alert("YOU GOT IT RIGHT");
} 
else if (guess < secretNumber){
	alert("Still too low!");
}

else{
	alert("Too high aim lower!!!");
}

