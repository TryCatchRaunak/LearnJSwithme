let userScore = 0;
let compScore = 0;
const msg = document.getElementById('message');

const choices = document.querySelectorAll('.choice');

const genComputerChoice = () => {
    //generate choice between 'rock', 'paper' and 'scissors'
    const options = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerHTML = "It's a draw!";
}

const playGame = (userChoice) => {
    console.log("User's Choice = ", userChoice);
    //generating computer's choice
    const computerChoice  = genComputerChoice();
    console.log("Computer's Choice = ", computerChoice);

    //draw condition
    if(userChoice === computerChoice){
        drawGame();
        console.log(msg.innerHTML);
    }

    //user win condition
    else if(userChoice === 'rock' && computerChoice === 'scissors'){
        userScore++;
        document.getElementById('userScore').innerHTML = userScore;
        msg.innerHTML = "You Win!";
        console.log(msg.innerHTML);
    }
    else if(userChoice === 'paper' && computerChoice === 'rock'){
        userScore++;
        document.getElementById('userScore').innerHTML = userScore;
        msg.innerHTML = "You Win!";
        console.log(msg.innerHTML);
    }
    else if(userChoice === 'Scissors' && computerChoice === 'paper'){
        userScore++;
        document.getElementById('userScore').innerHTML = userScore;
        msg.innerHTML = "You Win!";
        console.log(msg.innerHTML);
    }

    //computer win condition
    else if(computerChoice === 'rock' && userChoice === 'scissors'){
        compScore++;
        document.getElementById('compScore').innerHTML = compScore;
        msg.innerHTML = "Computer Wins!";
        console.log(msg.innerHTML);
    }
    else if(computerChoice === 'paper' && userChoice === 'rock'){
        compScore++;
        document.getElementById('compScore').innerHTML = compScore;
        msg.innerHTML = "Computer Wins!";
        console.log(msg.innerHTML);
    }
    else if(computerChoice === 'scissors' && userChoice === 'paper'){
        compScore++;
        document.getElementById('compScore').innerHTML = compScore;
        msg.innerHTML = "Computer Wins!";
        console.log(msg.innerHTML);
    }
} 

choices.forEach((choice) => {
    choice.addEventListener('click' , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});