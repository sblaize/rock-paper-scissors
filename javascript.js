//Computer randomly picks Rock, Paper or Scissors
function computerPlay() {
    let rock = "Rock";
    let r = rock.toLowerCase();
    let paper = "Paper";
    let p = paper.toLowerCase();
    let scissors = "Scissors";
    let s = scissors.toLowerCase();
    let move = [r,p,s];
    const move1 = move[Math.floor(Math.random()*move.length)];
    return move1;
}

let playerScore = 0;
let compScore = 0;
const computerSelection = computerPlay();
const container = document.querySelector('#container');

function changeToZero() {
    playerScore = 0;
    compScore = 0;
    }

function increment(n) {
return n + 1
}

//Player plays computer in Rock, Paper, or Scissors in a single round

function playRound(playerSelection, computerSelection) {
    let rock = "Rock";
    let r = rock.toLowerCase();
    let paper = "Paper";
    let p = paper.toLowerCase();
    let scissors = "Scissors";
    let s = scissors.toLowerCase();
    const player = `Player selects: ${playerSelection}. Computer selects ${computerSelection}.`
    const computer = `Player selects: ${playerSelection}. Computer selects ${computerSelection}.`
    const tie = `Player selects: ${playerSelection}. Computer selects ${computerSelection}.`

if (playerSelection === computerSelection) {
return tie
} else if (playerSelection === r && computerSelection === s){
    if (playerScore ==5) {
        const div = document.createElement('div');
        div.textContent = "Player Wins. Game Over";
        container.appendChild(div);
        changeToZero();
    }  else {
        playerScore = playerScore;
        compScore = compScore;
    }
n = increment(playerScore)
playerScore = n
return player;
} else if (playerSelection === s && computerSelection === p){
    if (playerScore ==5) {
        const div = document.createElement('div');
        div.textContent = "Player Wins. Game Over";
        container.appendChild(div);
        changeToZero();
    }  else {
        playerScore = playerScore;
        compScore = compScore;
    }
n = increment(playerScore)
playerScore = n
return player;
} else if (playerSelection === p && computerSelection === r){
    if (playerScore ==5) {
        const div = document.createElement('div');
        div.textContent = "Player Wins. Game Over";
        container.appendChild(div);
        changeToZero();
    }  else {
        playerScore = playerScore;
        compScore = compScore;
    }
n = increment(playerScore)
playerScore = n
return player;
} 
else if (playerSelection === r && computerSelection === p){
     if (compScore ==5) {
        const div = document.createElement('div');
        div.textContent = "Computer Wins. Game Over";
        container.appendChild(div);
        changeToZero();
    }  else {
        playerScore = playerScore;
        compScore = compScore;
    }
    n = increment(compScore)
    compScore = n
return computer;
}
else if (playerSelection === s && computerSelection === r){
    if (compScore ==5) {
        const div = document.createElement('div');
        div.textContent = "Computer Wins. Game Over";
        container.appendChild(div);
        changeToZero();
    }  else {
        playerScore = playerScore;
        compScore = compScore;
    }
    n = increment(compScore)
    compScore = n
return computer;
} else if (playerSelection === p && computerSelection === s){
    if (compScore ==5) {
        const div = document.createElement('div');
        div.textContent = "Computer Wins. Game Over";
        container.appendChild(div);
        changeToZero();
    }  else {
        playerScore = playerScore;
        compScore = compScore;
    }
    n = increment(compScore)
    compScore = n
return computer;
}


}


const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
rockButton.addEventListener('click', () => {
    const rock = "rock";
    const r = rock.toLowerCase();
    const playerSelection = r;
    const computerSelection = computerPlay();
    const div = document.createElement('div');
    const para = document.createElement('p');
    const pR = playRound(playerSelection, computerSelection);
    div.textContent = pR;
    if (playerScore == 5) {
        para.textContent = `Player Score: Match Point. Computer Score: ${compScore}.`
    } else if (compScore == 5) {
        para.textContent = `Player Score: ${playerScore}. Computer Score: Match Point`
    } else if (playerScore == 5 && compScore == 5){
        para.textContent = `Player Score: Match Point. Computer Score: Match Point.`;
    } else {
        para.textContent = `Player Score: ${playerScore}. Computer Score: ${compScore}.`;
    }
    para.style.color = 'blue'
    container.appendChild(div);
    container.appendChild(para);
});

paperButton.addEventListener('click', () => {
        const paper = "paper";
        const p = paper.toLowerCase();
        const playerSelection = p;
        const computerSelection = computerPlay();
        const div = document.createElement('div');
        const para = document.createElement('p');
        const pR = playRound(playerSelection, computerSelection);
        div.textContent = pR;
        if (playerScore == 5) {
            para.textContent = `Player Score: Match Point. Computer Score: ${compScore}.`
        } else if (compScore == 5) {
            para.textContent = `Player Score: ${playerScore}. Computer Score: Match Point`
        } else if (playerScore == 5 && compScore == 5){
            para.textContent = `Player Score: Match Point. Computer Score: Match Point.`;
        } else {
            para.textContent = `Player Score: ${playerScore}. Computer Score: ${compScore}.`;
        }
        para.style.color = 'blue'
        container.appendChild(div);
        container.appendChild(para);
});
        
scissorsButton.addEventListener('click', () => {
        const scissors = "scissors";
        const s = scissors.toLowerCase();
        const playerSelection = s;
        const computerSelection = computerPlay();
        const div = document.createElement('div');
        const para = document.createElement('p');
        const pR = playRound(playerSelection, computerSelection);
        div.textContent = pR;
        if (playerScore == 5) {
            para.textContent = `Player Score: Match Point. Computer Score: ${compScore}.`
        } else if (compScore == 5) {
            para.textContent = `Player Score: ${playerScore}. Computer Score: Match Point`
        } else if (playerScore == 5 && compScore == 5){
            para.textContent = `Player Score: Match Point. Computer Score: Match Point.`;
        } else {
            para.textContent = `Player Score: ${playerScore}. Computer Score: ${compScore}.`;
        }
        para.style.color = 'blue'
        container.appendChild(div);
        container.appendChild(para);
});

