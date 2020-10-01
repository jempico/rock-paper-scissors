let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.getElementById("result-message");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function convertResult(letter) {
if (letter == 'r') {
    return "Rock"; 
} else if (letter == 's') {
    return "Scissors"; 
} else {
    return "Paper"; 
    }
}

function win(user, computer) {
const user_div = document.getElementById(user);
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `Hurray! ${convertResult(user)} beats ${convertResult(computer)}`;
user_div.classList.add('green-glow');
setTimeout(() => user_div.classList.remove('green-glow'), 500);
}

function lose(user, computer) {
const user_div = document.getElementById(user);
computerScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;   
result_p.innerHTML = `Sorry! ${convertResult(user)} loses to ${convertResult(computer)}`;
user_div.classList.add('red-glow');
setTimeout(() => user_div.classList.remove('red-glow'), 500);
}

function draw(user, computer) {
const user_div = document.getElementById(user);
result_p.innerHTML = `It's a draw! ${convertResult(user)} equals ${convertResult(computer)}`;
user_div.classList.add('grey-glow');
setTimeout(() => user_div.classList.remove('grey-glow'), 500);
}

function getResult(userPick, computerPick){
    switch(userPick+computerPick) {
        case "rs":
        case "pr":
        case "sp":
            win(userPick, computerPick);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userPick, computerPick);
            break;
        default:
            draw(userPick, computerPick);
            break;
    }
} 

function playGame(userChoice) {
    let computerChoice = getComputerChoice();
    getResult(userChoice, computerChoice);
    }

    
function makeMove () {
rock_div.addEventListener('click', () => playGame("r"));
scissors_div.addEventListener('click', () => playGame("s"));
paper_div.addEventListener('click', () => playGame("p"));
}

makeMove();



