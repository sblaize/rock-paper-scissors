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
    return move1
}

    function playerPlay() { // This function takes a valid input from the user
    let rock = "Rock";
    let r = rock.toLowerCase();
    let paper = "Paper";
    let p = paper.toLowerCase();
    let scissors = "Scissors";
    let s = scissors.toLowerCase();
    const ask = prompt("Rock, Paper, or Scissors?").toLowerCase();
    switch(ask) {
    case r:
    return(ask)
    break;
    case p:
    return(ask)
    break;
    case s:
    return(ask)
    break;
    default:
    return("Incorrect Response")
} 
    }



//Player plays computer in Rock, Paper, or Scissors in a single round
function playRound(playerSelection, computerSelection) {
    let rock = "Rock";
    let r = rock.toLowerCase();
    let paper = "Paper";
    let p = paper.toLowerCase();
    let scissors = "Scissors";
    let s = scissors.toLowerCase();
    const player = `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Player Wins`
    const computer = `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Computer Wins`
    const tie = `Player selects: ${playerSelection}. Computer selects ${computerSelection}. It's a tie!`
if (playerSelection === computerSelection) {
return tie
} else if (playerSelection === r && computerSelection === s){
++playerScore
return player
}
else if (playerSelection === s && computerSelection === p){
++playerScore
return player
} else if (playerSelection === p && computerSelection === r){
++playerScore
return player
} 
else if (playerSelection === r && computerSelection === p){
++compScore
return computer;
}
else if (playerSelection === s && computerSelection === r){
++compScore
return computer;
} else if (playerSelection === p && computerSelection === s){
++compScore
return computer;
}
}


const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

rockButton.addEventListener('click', () => {
    const rock = "rock";
    const r = rock.toLowerCase();
    const playerSelection = r 
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection))});

paperButton.addEventListener('click', () => {
        const paper = "paper";
        const p = paper.toLowerCase();
        const playerSelection = p
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))});
        
scissorsButton.addEventListener('click', () => {
        const scissors = "scissors";
        const s = scissors.toLowerCase();
        const playerSelection = s
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))});




let playerScore = 0;
let compScore = 0;



