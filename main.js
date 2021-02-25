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
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
    para.textContent = "CHOOSE YOUR FIGHTER"
    comp.textContent = "";
    res.textContent = "";
    document.body.style.backgroundColor = "grey";
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
    document.body.style.backgroundColor = "red";
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
  } else if (compGuess === 2) {
    comp.textContent = "A.I. chooses... SCISSORS";
    res.textContent = "Rock beats Scissors! YOU WIN!";
    playerScore++;
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
    document.body.style.backgroundColor = "green";
  } else {
    comp.textContent = "A.I. chooses... ROCK";
    res.textContent = "Rock vs. Rock! IT'S A TIE!";
    document.body.style.backgroundColor = "grey";
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
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
    document.body.style.backgroundColor = "red";
    compScore++;
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
  } else if (compGuess === 2) {
    comp.textContent = "A.I. chooses... ROCK";
    res.textContent = "Paper beats Rock! YOU WIN!";
    document.body.style.backgroundColor = "green";
    playerScore++;
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
  } else {
    comp.textContent = "A.I. chooses... PAPER";
    res.textContent = "Paper vs. Paper! IT'S A TIE!";
    document.body.style.backgroundColor = "grey";
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
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
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
    document.body.style.backgroundColor = "red";
  } else if (compGuess === 2) {
    comp.textContent = "A.I. chooses... PAPER";
    res.textContent = "Scissors beats Paper! YOU WIN!";
    document.body.style.backgroundColor = "green";
    playerScore++; 
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
  } else {
    comp.textContent = "A.I. chooses... SCISSORS";
    res.textContent = "Scissors vs. Scissors! IT'S A TIE!";
    document.body.style.backgroundColor = "grey";
    document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
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
