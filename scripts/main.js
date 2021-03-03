let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let para = document.getElementById('para');
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
    enableButtons();
}

// rock button
rock.onclick = () => {
  playerChoose('rock');
  compGuess = guess();
    if (compGuess === 1) {
    compChoose('paper');
    versusText('paper', 'rock');
    compScore++;
    backChange('red');
    printScore();
  } else if (compGuess === 2) {
    compChoose('scissors');
    versusText('scissors', 'rock');
    playerScore++;
    printScore();
    backChange('green');
  } else {
    compChoose('rock');
    versusText('rock', 'rock');
    backChange('grey');
    printScore();
  } checkWinner();
}

// paper button
paper.onclick = () => {
  playerChoose('paper');
  compGuess = guess();
    if (compGuess === 1) {
    compChoose('scissors');
    versusText('scissors', 'paper');
    backChange('red');
    compScore++;
    printScore();
  } else if (compGuess === 2) {
    compChoose('rock');
    versusText('rock', 'paper');
    backChange('green');
    playerScore++;
    printScore();
  } else {
    compChoose('paper');
    versusText('paper', 'paper');
    backChange('grey');
    printScore();
  } checkWinner();
}

// scissors button
scissors.onclick = () => {
  playerChoose('scissors');
  compGuess = guess();
    if (compGuess === 1) {
    compChoose('rock');
    versusText('rock', 'scissors');
    compScore++;
    printScore();
    backChange('red');
  } else if (compGuess === 2) {
    compChoose('paper');
    versusText('paper', 'scissors');
    backChange('green');
    playerScore++; 
    printScore();
  } else {
    compChoose('scissors');
    versusText('scissors', 'scissors');
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
    disableButtons();
  } else if (compScore === 5) {
    document.getElementById('para').textContent = "oops..";
    document.getElementById('comp').textContent = "YOU LOST..";
    document.getElementById('res').textContent = "Try Again?";
    playerScore = 0;
    compScore = 0;
    disableButtons();
  } else if (playerScore === 5 && compScore === 5) {
    document.getElementById('para').textContent = "ITS";
    document.getElementById('comp').textContent = "A";
    document.getElementById('res').textContent = "DRAW?!";
    playerScore = 0;
    compScore = 0;
    disableButtons();
  }
}

function disableButtons () {
    rock.disabled=true;
    paper.disabled=true;
    scissors.disabled=true;
}

function enableButtons () {
    rock.disabled=false;
    paper.disabled=false;
    scissors.disabled=false;
}

function backChange (color) {
   return document.body.style.backgroundColor = color;
}

function printScore () {
   return document.getElementById('top-para').textContent = `YOU (${playerScore} : ${compScore}) A.I.`;
}

function compChoose(choice) {
  if (choice === 'scissors') {
  return comp.textContent = "A.I. chooses... SCISSORS";
  } else if (choice === 'rock') {
    return comp.textContent = "A.I. chooses... ROCK";
  } else {
    comp.textContent = "A.I. chooses... PAPER";
  }
  }

function playerChoose(choice) {
  if (choice === 'scissors') {
    return para.textContent = "you choose... SCISSORS";
    } else if (choice === 'rock') {
      return para.textContent = "you choose... ROCK";
    } else {
      para.textContent = "you choose... PAPER";
    }
    }

function versusText(x, y) {
  if (x === 'paper' && y === 'rock') {
    return res.textContent = "Paper beats Rock! YOU LOSE!";
    } else if (x === 'scissors' && y === 'rock') {
      return res.textContent = "Rock beats Scissors! YOU WIN!";
    } else if (x === 'rock' && y === 'rock') {
      return res.textContent = "Rock vs. Rock! IT'S A TIE!";
    } else if (x === 'scissors' && y === 'paper') {
      return res.textContent = "Scissors beats Paper! YOU LOSE!";
    } else if (x === 'rock' && y === 'paper') {
      return res.textContent = "Paper beats Rock! YOU WIN!";
    } else if (x === 'paper' && y === 'paper') {
      return res.textContent = "Paper vs. Paper! IT'S A TIE!";
    } else if (x === 'rock' && y === 'scissors') {
      return res.textContent = "Rock beats Scissors! YOU LOSE!";
    } else if (x === 'paper' && y === 'scissors') {
      return res.textContent = "Scissors beats Paper! YOU WIN!";
    } else if (x === 'scissors' && y === 'scissors') {
      return res.textContent = "Scissors vs. Scissors! IT'S A TIE!";
    }
  }
