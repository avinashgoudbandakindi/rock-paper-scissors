let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const options = document.querySelectorAll(".options button");


options.forEach((option) => {

    option.addEventListener("click", () => {
        //Add Animation Classes
        computer.classList.add("shakeComputer");
        player.classList.add("shakePlayer");

        setTimeout(() => {
                // Remove animation classes after the animation ends
                computer.classList.remove("shakeComputer");
                player.classList.remove("shakePlayer");

                //set player's choice image
                const userChoice = option.innerHTML.toUpperCase();
                player.src = "images/" + userChoice.toLowerCase() + "Player.png";

                //Generate Computer's choice
                const genCompChoice = () => {
                    const choices = ["ROCK", "PAPER", "SCISSORS"];
                    let randIdx = Math.floor(Math.random() * 3);
                    let compChoice = choices[randIdx];
                    computer.src = "images/" + compChoice.toLowerCase() + "Computer.png"
                    return compChoice;
                };

                //Function to handle a draw
                const drawGame = () => {
                    msg.innerText = "Game Was Draw. Play Again.";
                    msg.style.backgroundColor = "#081b31";
                };
                // Function to update the Winner
                const showWinner = (userWin, userChoice, compChoice) => {
                    if (userWin) {
                        userScore++;
                        userScorePara.innerText = userScore;
                        msg.innerText = "You Win! Your's " + userChoice + " Beats " + compChoice;

                        msg.style.backgroundColor = "green";
                    } else {
                        compScore++;
                        compScorePara.innerText = compScore;
                        msg.innerText = "You Lost. " + compChoice + " Beats Your " + userChoice;
                        msg.style.backgroundColor = "red";
                    }

                };
                //Function to determine the outcome of the game
                const playGame = (userChoice) => {
                    //Generate computer choice
                    const compChoice = genCompChoice();

                    if (userChoice === compChoice) {
                        //Draw Game
                        drawGame();
                    } else {
                        let userWin;
                        if (userChoice === "ROCK") {
                            //Scissors, Paper
                            userWin = compChoice === "SCISSORS";
                        } else if (userChoice === "PAPER") {
                            //Rock, Paper
                            userWin = compChoice === "ROCK";
                        } else if (userChoice === "SCISSORS") {
                            //Rock, Paper
                            userWin = compChoice === "PAPER";
                        }
                        showWinner(userWin, userChoice, compChoice);
                    }
                };

                playGame(userChoice);
            },
            900);
    });
});
