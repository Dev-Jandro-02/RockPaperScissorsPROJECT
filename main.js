let btn = document.querySelectorAll('button');
let para = document.getElementById('para');
let winenrPara = document.querySelector('#winnerPara');
let playAgain = document.querySelector('#playAgain');

let playerPoints = 0;
let computerPoints = 0;



btn.forEach(button => {
    button.addEventListener('click', function () {
        battleRound(button.id);
    })
})

function disable() {
    btn.forEach(button => {
        button.disabled = true;   
    }) 
}

function computerPlay() {
    let selectionArr = ['rock', 'paper', 'scissor'];
    let selectionMixed = selectionArr[Math.floor(Math.random() * selectionArr.length)];
    return selectionMixed;
}



function battleRound(playerSelection, computerSelection = computerPlay()) {

    if (playerSelection === 'rock' && computerSelection === 'scissor' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissor' && computerSelection === 'paper') {

        playerPoints += 1;
        para.textContent = (`You win! ${playerSelection} beats ${computerSelection}`);
        const player = document.querySelector('#playerScore');
        const computer = document.querySelector('#computerScore');
        
        player.textContent = `Player Score: ${playerPoints}`;

        if (playerPoints === 5) {
            winnerPara.innerHTML = (`ALERT: Congratulations player,<br> you won the battle against computer!`);
            
            setInterval(() => {
                playAgain.textContent = (`Play Again`);
            }, 4000);

            playerPoints = 0;
            computerPoints = 0;

            player.textContent = (`Player Score: ${playerPoints}`);
            computer.textContent = (`Computer Score: ${computerPoints}`);

            disable();


        }
    }

    else if (playerSelection === computerSelection) {
        para.textContent = (`It's a tie! ${playerSelection} = ${computerSelection}`);
    } else {
        computerPoints += 1;
        para.textContent = (`Computer wins! ${computerSelection} beats ${playerSelection}`);
        const computer = document.querySelector('#computerScore');
        const player = document.querySelector('#playerScore');

        computer.textContent = `Computer Score: ${computerPoints}`;

        if (computerPoints === 5) {
            winnerPara.textContent = (`ALERT: You lost the battle.`);

            setInterval(() => {
                playAgain.innerHTML = (`Fight Again`);
            }, 4000);

            playerPoints = 0;
            computerPoints = 0;

            player.textContent = (`Player Score: ${playerPoints}`);
            computer.textContent = (`Computer Score: ${computerPoints}`);

            disable();

        }
    }
}