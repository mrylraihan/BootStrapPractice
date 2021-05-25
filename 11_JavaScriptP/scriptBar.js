var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = Number(prompt("What is your age?"));
var userName = firstName + " " + lastName;
alert("Nice to meet you, "+ userName);
if(age < 18){
	alert("Sorry " + userName + ", you are not old enough to enter the venue");
	console.log("Sorry " + userName + ", you are not old enough to enter the venue");
}
else if (age == 21){
	alert("Congrats " + userName + ", heres a free shot!!!");
	console.log("Congrats " + userName + ", heres a free shot!!!");
}
else if (age < 21){
	alert("You can enter " + userName+  " but you can not drink");
	console.log("You can enter " + userName + " but you can not drink");
}
else{
	alert("Come in. You can drink " + userName);
	console.log("Come in. You can drink " + userName);
}

// var age = Number(prompt("What is your age?"));

// if(age < 0){
// 	console.log("Come back once you're out of teh womb");
// }

// if(age === 21){
// 	console.log("Happy 21st Birthday!");
// }

// if(age % 2 !== 0){
// 	console.log("Your age is odd!");
// }

// if(age % Math.sqrt(age)===0){
// 	console.log("Your age is a perfect square!");
// }