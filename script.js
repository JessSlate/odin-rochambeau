

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
    // handle a tie
    if (player == computer){
        alert("Tie!");
        return;
    }

    if(player == "rock"){
        if(computer == "paper"){
            alert("You lose! paper covers rock.");
            return;
        }
        if(computer == "scissors"){
            alert("You win! rock smashes scissors.");
            return;
        }
    }

    if(player == "paper"){
        if(computer == "rock"){
            alert("You win! paper covers rock.");
            return;
        }
        if(computer == "scissors"){
            alert("You lose! scissors cut paper.");
            return;
        }
    }

    if(player == "scissors"){
        if(computer == "rock"){
            alert("You lose! rock smashes scissors.");
            return;
        }
        if(computer == "paper"){
            alert("You win! scissors cut paper.");
            return;
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
    playGame(playerChoice, computerChoice);
}

