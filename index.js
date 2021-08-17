var readlineSync = require('readline-sync');
var chalk = require('chalk')
console.log("Hey Stranger. Let's Play" + chalk.red.bold("How Well Do You Know Chaitanya Quiz") + ". It has a total of 5 questions.")
var userName = readlineSync.question("Please state your name: ");
console.log("Hello " + chalk.yellow.bold(userName) + "! Let the Game Begin.")
var score = 0;
var highScores = ["Chaitanya: 5", "Dushyant: 4"];

function play(ques, ans){
	userAns = readlineSync.question(ques);
	if(userAns.toUpperCase() === ans.toUpperCase()){
		score = score+1;
		console.log("You were " + chalk.green.bold("right") + " and you gained 1 point.");
		console.log("Your current score is:", score);
		console.log("-------------------------------------------");
	} else{
		score = score-1;
		console.log("You were "+ chalk.red.bold("wrong") + " and you lost 1 point.");
		console.log("Your current score is:", score);
		console.log("-------------------------------------------");
	}
}

var questions = [{
	quest: "What's my last name? ",
	answ: "Chhikara",
}, {
	quest: "Which city do I live in? ",
	answ: "Sonipat",
}, {
	quest: "What's my favourite dish? ",
	answ: "Pasta",
}, {
	quest: "Which year I was born in? ",
	answ: "2000",
}, {
	quest: "What's the name of my college? ",
	answ: "NIFTEM",
}]

for (i=0; i<questions.length; i++){
	play(questions[i].quest,questions[i].answ);
}

console.log("Thank you so much for playing.");
console.log("Your Final Score is:", chalk.green.bold(score));
console.log("-------------------------------------------");
console.log("Below are the high scores. DM me if you think your name should be there. Let's connect over at Twitter!");
for (j=0; j<highScores.length; j++){
	console.log("At " + (j+1) + " Position we have:");
	console.log(chalk.green.bgYellow.bold(highScores[j]));
}