let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let para = document.getElementById('para');
let playerChoice = "";
let playerScore = 0;
let compScore = 0;

// reset button
document.getElementById('reset').onclick = () => {
    playerScore = 0;
    compScore = 0;
    printScore();
    para.textContent = "CHOOSE YOUR FIGHTER"
    comp.textContent = "";
    res.textContent = "";
    backChange('grey');
    rock = enableButtons();
    paper = enableButtons();
    scissors = enableButtons();
}

// rock button
rock.onclick = () => {
  playerChoice = "rock"; 
  para.textContent = "you choose... ROCK";
  compGuess = guess();
    if (compGuess === 1) {
    comp.textContent = "A.I. chooses... PAPER";
    res.textContent = "Paper beats Rock! YOU LOSE!";
    compScore++;
    backChange('red');
    printScore();
  } else if (compGuess === 2) {
    comp.textContent = "A.I. chooses... SCISSORS";
    res.textContent = "Rock beats Scissors! YOU WIN!";
    playerScore++;
    printScore();
    backChange('green');
  } else {
    comp.textContent = "A.I. chooses... ROCK";
    res.textContent = "Rock vs. Rock! IT'S A TIE!";
    backChange('grey');
    printScore();
  } checkWinner();
}

// paper button
paper.onclick = () => {
  playerChoice = "paper";
  para.textContent = "you choose... PAPER";
  compGuess = guess();
    if (compGuess === 1) {
    comp.textContent = "A.I. chooses... SCISSORS";
    res.textContent = "Scissors beats Paper! YOU LOSE!";
    backChange('red');
    compScore++;
    printScore();
  } else if (compGuess === 2) {
    comp.textContent = "A.I. chooses... ROCK";
    res.textContent = "Paper beats Rock! YOU WIN!";
    backChange('green');
    playerScore++;
    printScore();
  } else {
    comp.textContent = "A.I. chooses... PAPER";
    res.textContent = "Paper vs. Paper! IT'S A TIE!";
    backChange('grey');
    printScore();
  } checkWinner();
}

// scissors button
scissors.onclick = () => {
  playerChoice = "scissors";
  para.textContent = "you choose... SCISSORS";
  compGuess = guess();
    if (compGuess === 1) {
    comp.textContent = "A.I. chooses... ROCK";
    res.textContent = "Rock beats Scissors! YOU LOSE!";
    compScore++;
    printScore();
    backChange('red');
  } else if (compGuess === 2) {
    comp.textContent = "A.I. chooses... PAPER";
    res.textContent = "Scissors beats Paper! YOU WIN!";
    backChange('green');
    playerScore++; 
    printScore();
  } else {
    comp.textContent = "A.I. chooses... SCISSORS";
    res.textContent = "Scissors vs. Scissors! IT'S A TIE!";
    backChange('grey');
    printScore();
  } checkWinner();
}

// functions
function guess () {
  return Math.floor((Math.random() * 3) + 1);
}

let compGuess = () => {
    console.log(guess());
}
  
function checkWinner () {
  if (playerScore === 5) {
    document.getElementById('para').textContent = "YOU";
    document.getElementById('comp').textContent = "WON";
    document.getElementById('res').textContent = "THE GAME!";
    playerScore = 0;
    compScore = 0;
    rock = disableButtons();
    paper = disableButtons();
    scissors = disableButtons();
  } else if (compScore === 5) {
    document.getElementById('para').textContent = "oops..";
    document.getElementById('comp').textContent = "YOU LOST..";
    document.getElementById('res').textContent = "Try Again?";
    playerScore = 0;
    compScore = 0;
    rock = disableButtons();
    paper = disableButtons();
    scissors = disableButtons();
  } else if (playerScore === 5 && compScore === 5) {
    document.getElementById('para').textContent = "ITS";
    document.getElementById('comp').textContent = "A";
    document.getElementById('res').textContent = "DRAW?!";
    playerScore = 0;
    compScore = 0;
    rock = disableButtons();
    paper = disableButtons();
    scissors = disableButtons();
  }
}

function disableButtons () {
    document.getElementById('rock').disabled=true;
    document.getElementById('paper').disabled=true;
    document.getElementById('scissors').disabled=true;
}

function enableButtons () {
    document.getElementById('rock').disabled=false;
    document.getElementById('paper').disabled=false;
    document.getElementById('scissors').disabled=false;
}

function backChange (color) {
   return document.body.style.backgroundColor = color;
}

function printScore () {
   return document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
}
