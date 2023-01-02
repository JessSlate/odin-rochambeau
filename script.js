

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
    score = "\nYou win!"
} else if (computerScore > playerScore){
    score = "\nYou lose!"
} else score = "\nDraw!"
alert("Game over\nGames: " + (maxGames + ties) + "\nTies: " + ties + "\nWon: " + playerScore + "\nLost: " + computerScore + score);
