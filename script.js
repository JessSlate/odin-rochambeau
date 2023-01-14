/*

// Function to assign the computer's choice
function getComputerChoice(){
    let result = Math.floor(Math.random() * 3) +1;
    switch(result){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

// prompt for the player's choice:
function getPlayerChoice(error = ""){

    let choice = prompt(error + "Will you choose rock, paper, or scissors?");
    
    // handle cancel or exit selection on prompt:
    if (!choice){
        choice = "";
    }

    return choice.toLowerCase();
}

// Function to play one round of the game
function playGame(player, computer){

    // treating ties as losses
    if (player == computer){
        alert("Tie!");
        return "tie";
    }

    if(player == "rock"){
        if(computer == "paper"){
            alert("You lose! paper covers rock.");
            return "com";
        }
        if(computer == "scissors"){
            alert("You win! rock smashes scissors.");
            return "pc";
        }
    }

    if(player == "paper"){
        if(computer == "rock"){
            alert("You win! paper covers rock.");
            return "pc";
        }
        if(computer == "scissors"){
            alert("You lose! scissors cut paper.");
            return "com";
        }
    }

    if(player == "scissors"){
        if(computer == "rock"){
            alert("You lose! rock smashes scissors.");
            return "com";
        }
        if(computer == "paper"){
            alert("You win! scissors cut paper.");
            return "pc";
        }
    }

}

// game loop
function game(){
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    while (!(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")){
        playerChoice = getPlayerChoice("Please input rock, paper, or scissors.\n");
    }
    return playGame(playerChoice, computerChoice);
}

const maxGames = 5;
let playerScore = 0,
    ties = 0,
    computerScore = 0;

for(let i = 0; i < maxGames; i++){
    //record result and add to score
    let result = game();

    if (result == "tie"){
        i--; //ties no longer count against max games
        ties += 1;
    } else if (result == "pc"){
        playerScore += 1;
    } else computerScore += 1;
}

//calculate score
let score = "";
if(playerScore > computerScore){
    score = "\nYou win!";
} else if (computerScore > playerScore){
    score = "\nYou lose!";
} else score = "\nDraw!";
alert("Game over\nGames: " + (maxGames + ties) + "\nTies: " + ties + "\nWon: " + playerScore + "\nLost: " + computerScore + score);

*/
const WIN = 1
    , TIE = 0
    , LOSE = -1
    , MAX_ROUNDS = 5
    , RED_BG = "#FF6C95"
    , GREEN_BG = "#A7FF6C";

let roundCounter = 0;

function getComputerChoice(){
    //generate a random number between 1 and 3 inclusive.
    let result = Math.floor(Math.random() * 3) +1;

    switch(result){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    };
};

function getWinner(player, computer){

    if (player == computer){
        return TIE;
    };

    if(player == "Rock"){
        if(computer == "Paper"){
            return LOSE;
        };
        if(computer == "Scissors"){
            return WIN;
        };
    };

    if(player == "Paper"){
        if(computer == "Rock"){
            return WIN;
        };
        if(computer == "Scissors"){
            return LOSE;
        };
    };

    if(player == "Scissors"){
        if(computer == "Rock"){
            return LOSE;
        };
        if(computer == "Paper"){
            return WIN;
        };
    };
};

function updateScoreboard(result){

    const playerScore = document.getElementById("player-score"),
        ties = document.getElementById("ties"),
        computerScore = document.getElementById("computer-score");

    //update specific cell based on round result
    switch(result){
        case WIN:
            playerScore.textContent = (
                parseInt(playerScore.textContent) + 1);
            break;
        case LOSE:
            computerScore.textContent = (
                parseInt(computerScore.textContent) + 1);
            break;
        case TIE:
            ties.textContent = (
                parseInt(ties.textContent) + 1);
            break;
        default: break;
    };

    return;
};

function updateMessage(player, computer, result){
    const headsUp = document.querySelector(".message p");
    let message = "";

    //determine which message to display
    switch(result){
        case WIN:
            message = `${player} beats ${computer.toLowerCase()}.`;
            break;
        case LOSE:
            message = `${computer} beats ${player.toLowerCase()}.`;
            break;
        case TIE:
            message = `Draw!`;
            break;
        default: break;
    };

    //update message on the page
    headsUp.textContent = message;
};

function showResetButton(){
    //unhide button
    let resetBtn = document.getElementById("reset-button");
    resetBtn.classList.remove("hidden");
    //get the final score
    const playerScore = parseInt(document.getElementById("player-score").textContent),
        computerScore = parseInt(document.getElementById("computer-score").textContent);
    
    //update text content
    if(playerScore > computerScore){
        resetBtn.textContent = "You win, play again?";
        resetBtn.style.backgroundColor = GREEN_BG;
    } else {
        resetBtn.textContent = "You lose, play again?";
        resetBtn.style.backgroundColor = RED_BG;
    };
    
};

function playGame(e){
    //play to five rounds
    if(roundCounter < MAX_ROUNDS){
        const computerSelection = getComputerChoice();
        const playerSelection = e.target.id;
        //determine winner
        const winner = getWinner(playerSelection, computerSelection);
        //update UI
        updateScoreboard(winner);
        updateMessage(playerSelection, computerSelection, winner);
        //update round counter
        if(winner != TIE) roundCounter++;
    } else showResetButton(); //allow player to reset
};

function resetGame(){
    roundCounter = 0;

    let resetBtn = document.getElementById("reset-button");
    resetBtn.classList.add("hidden");

    const scores = document.getElementsByTagName("td");
    for(val of scores){
        val.textContent = "0";
    };
    const headsUp = document.querySelector(".message p");
    headsUp.textContent = "Welcome to Rochambeau - make a selection to begin";
};

const gameBtns = document.getElementsByClassName("selection");
for(const btn of gameBtns){
    btn.addEventListener("click", playGame);
};
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", resetGame);
