const cell = document.querySelectorAll('.cell')
const playerOneScoreSpan = document.querySelector('.playerOneScore')
const playerTwoScoreSpan = document.querySelector('.playerTwoScore')

const winCases = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8],
]
let playerOne = [];
let playerTwo = [];
let score = {
  playerOne: 0,
  playerTwo: 0,
}
let flag = true;
for(let i = 0; i < cell.length; i++){
  cell[i].addEventListener('click',() => {
    if(cell[i].innerHTML !== "O" && cell[i].innerHTML !== "X"){
      if(flag === true){
        addCellsPlayerOne(i);
      }
      else{
        addCellsPlayerTwo(i);
      }
    }
    checkGame();
  })
}
function addCellsPlayerOne(i){
  cell[i].innerHTML = "X";
  playerOne.push(i);
  flag = false;
}
function addCellsPlayerTwo(i){
  cell[i].innerHTML = "O";
  playerTwo.push(i);
  flag = true;
}
function checkGame(){
  winCases.find((item) => {
    if(item.filter((i) => playerOne.includes(i)).length === 3){
      score.playerOne++;
      drawScore();
      clear();
      alert("Player One Won");
    } 
    else if (item.filter((i) => playerTwo.includes(i)).length === 3){
      score.playerTwo++;
      drawScore();
      clear();
      alert("Player Two Won");
    }
    return 
  })
}
function drawScore(){
  playerOneScoreSpan.innerHTML = "Player One: " +score.playerOne;
  playerTwoScoreSpan.innerHTML = "Player Two: " +score.playerTwo;
}
drawScore();
function clear(){
  for(let i = 0; i<cell.length;i++){
    cell[i].innerHTML = "";
  }
  playerOne = [];
  playerTwo = [];
  flag = true;
}
document.getElementById("reset").addEventListener('click', () => {
  clear();
  score.playerOne = 0;
  score.playerTwo = 0;
  drawScore();
})