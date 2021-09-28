var readlineSync = require("readline-sync");
var username = readlineSync.question("What is your name? ");
console.log(`Welcome ${username}`);
var count = 0;
function correctAns(){
  count++;
  console.log(`Correct Answer!`);
  console.log(`Your current score is ${count}`);
  console.log(`------------------------------`);
}
function wrongAns(){
  console.log(`Wrong Answer!`);
  console.log(`Your current score is ${count}`);
  console.log(`------------------------------`);
}
var location = readlineSync.question("Where do I live? ");
if(location === "bokaro"){
  correctAns();
}
else{
  wrongAns();
}
var food = readlineSync.question("What's my favourite food? ");
if(location === "briyani"){
  correctAns();
}
else{
  wrongAns();
}
var location = readlineSync.question("Where do I work? ");
if(location === "zs"){
  correctAns();
}
else{
  wrongAns();
}
console.log(`Your final score is ${count}`);