function computerPlay() {
    const random = Math.floor(Math.random()*3);
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const computerChoice = choices[random];
    return computerChoice;
}

function playerPlay() {
    const playerChoice = prompt("Rock, Paper or Scissors.").toUpperCase();
    return playerChoice;
}
function game() {
    
    let wins = 0;
    let losses = 0;
    let ties = 0;
    for (let i=0; i<5; i++) {
        const random = Math.floor(Math.random()*3);
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const computerChoice = choices[random];
        const playerChoice = prompt("choose!").toUpperCase();
        
        if (playerChoice == computerChoice) ties++;
          
            else {
                    if(playerChoice =="ROCK" && computerChoice =="SCISSORS") wins++;
                    else if(playerChoice =="SCISSORS" && computerChoice =="PAPER") wins++;
                    else if(playerChoice =="PAPER" && computerChoice =="ROCK") wins++;
                    else if(playerChoice =="SCISSORS" && computerChoice =="ROCK") losses++;
                    else if(playerChoice =="ROCK" && computerChoice =="PAPER") losses++;
                    else if(playerChoice =="PAPER" && computerChoice =="SCISSORS") losses++;
                    
            }
        alert("Ties: " + ties +'\n'+ "Player pts: " + wins +'\n'+ "Computer pts: " + losses);
        }
        
}
    
    
game();