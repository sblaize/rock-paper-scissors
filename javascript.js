 //Computer randomly picks Rock, Paper or Scissors
 function computerPlay() {
    let rock = "Rock";
    let r = rock.toLowerCase();
    let paper = "Paper";
    let p = paper.toLowerCase();
    let scissors = "Scissors";
    let s = scissors.toLowerCase();
    let move = [r,p,s];
return move[Math.floor(Math.random()*move.length)];
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
    playerSelection = playerPlay();
    computerSelection = computerPlay() 
    player = `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Player Wins`
    computer = `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Computer Wins`
    tie = `Player selects: ${playerSelection}. Computer selects ${computerSelection}. It's a tie!`
if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
return tie
} else if (playerSelection.toLowerCase() === r && computerSelection.toLowerCase() === s){
++playerScore
return player
}
else if (playerSelection.toLowerCase() === s && computerSelection.toLowerCase() === p){
++playerScore
return player
} else if (playerSelection.toLowerCase() === p && computerSelection.toLowerCase() === r){
++playerScore
return player
} 
else if (playerSelection.toLowerCase() === r && computerSelection.toLowerCase() === p){
++compScore
return computer;
}
else if (playerSelection.toLowerCase() === s && computerSelection.toLowerCase() === r){
++compScore
return computer;
} else if (playerSelection.toLowerCase() === p && computerSelection.toLowerCase() === s){
++compScore
return computer;
}
}


let playerScore = 0;
let compScore = 0;



