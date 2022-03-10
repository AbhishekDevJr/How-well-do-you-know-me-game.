//Get User name and welcome them

let readLineSync = require("readline-sync");
console.log("Hii there!! Welcome to HWDYKA!!");
let placeHolder = readLineSync.question("");
console.log("I know you must be wondering what the F..k does HWDYKA means.");
let placeHolder2 = readLineSync.question("");
console.log("Don't worry, you will know what it means in sometime. Meanwhile do as I say.");
let placeHolder3 = readLineSync.question("");
console.log("Or dont, who am I to ask you to do something, afterall I am just a pathetic computer asking you to do things:( ");
let placeHolder4 = readLineSync.question("");
let currPlayer = readLineSync.question("Anyway, tell me your name Human!");

console.log("Hii! " + currPlayer + " See now I know your name but you still don't know mine! how smart of you going around advertising your personal info on the internet! Your parents must be so proud!");

// game function
let answerArr = ["24", "suits", "blue", "2", "02/10/1997", "mamta"];
let questionArr = ["What is my Age? ", "What is my favourite series? ", "What is my favourite colour? ", "How many roommates did I have in hostel? ", "What is my DOB in dd/mm/yyyy? ", "What is my mummy's name? "];
console.log("Press enter to start the game!");
let placeHolder6 = readLineSync.question("");
let score= 0;
function gameFunction(questionMe, answer){
let usrAns = readLineSync.question(questionMe);
  if(answer === usrAns){
    console.log("Thats right!!");
    score = score + 1;
    console.log("Your score is: " + score);
  } else{
    console.log("Thats wrong!");
    console.log("The correct answer is: " + answer)
    console.log("Your score is: " + score);
  }
}
console.log(questionArr.lenght);
for(let i = 0; i < questionArr.length; i++){
  gameFunction(questionArr[i], answerArr[i]);
}
console.log("End of game! Your final score is: " + score);
let placeHolder5 = readLineSync.question("");
if(score == 6){
  console.log("Wow you know Abhishek way too well! *Wink..Wink* GoodBye!! " + currPlayer );
}else{
  console.log("Thanks for playing! " + "GoodBye!" + currPlayer);
}
