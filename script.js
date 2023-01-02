

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
function playGame(player1, player2){

}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
while (!(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")){
    playerChoice = getPlayerChoice("Please input rock, paper, or scissors.\n");
}