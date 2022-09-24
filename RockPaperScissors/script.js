const computerChoiceDisplay = document.getElementById('comp-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const scoreDisplay = document.getElementById('score')
let userChoice
let compChoice
let result
let score = 0

document.getElementById("reset").onclick = function() {
  computerChoiceDisplay.innerHTML = "";
  userChoiceDisplay.innerHTML = "";
  resultDisplay.innerHTML = "";
  score = 0;
  scoreDisplay.innerHTML = score;
};
possibleChoices.forEach(
  possibleChoice => possibleChoice.addEventListener(
    'click', (e) => {

      userChoice = e.target.id
      userChoiceDisplay.innerHTML = userChoice
      getComputerChoice()
      getResult()
    }))
function getComputerChoice(){
  const randomNumber = Math.floor(Math.random() * possibleChoices.length)
  switch(randomNumber) {
    case 1:
      compChoice = "Paper"
      break;
    case 2:
      compChoice = "Scissor"
      break;
    default:
      compChoice = "Rock"
  }
  computerChoiceDisplay.innerHTML = compChoice
}
function getResult(){
  if(userChoice == compChoice){
   result = "Draw"
  }

  if(userChoice=="Scissor"){
      if(compChoice == "Rock") result="You Lose!"
      else {
        result="You Win!"
        score ++;
      }
  }
   
  if(userChoice=="Paper"){
      if(compChoice == "Scissor") result="You Lose!"
      else {
        result="You Win!"
        score ++;
      }
  }
  if(userChoice=="Rock"){
      if(compChoice == "Paper") result="You Lose!"
      else {
        result="You Win!"
        score ++;
      }
  }
  resultDisplay.innerHTML = result
  scoreDisplay.innerHTML = score
}
