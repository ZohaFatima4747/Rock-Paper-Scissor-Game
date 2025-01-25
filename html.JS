alert('Welcome to Rock, Paper, Scissors Game! Click on an icon to play.');

let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara= document.querySelector("#Comp-score");



const drawGame = () => {
 msg.innerText = "Game was draw , play again.";
 msg.style.backgroundColor = "darkgray";

};


const showWinner = (userWin ,userChoice,compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
          msg.style.backgroundColor = "red";
    }
};


const genCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};


const playGame = (userChoice) => {
     console.log(userChoice,"is user's choice");
     //generate computor choice
     const compChoice = genCompChoice();
     console.log(compChoice,"is computer,s choice")


     if (userChoice === compChoice){
        drawGame();
     } else {
        let userWin = true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice==="paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //rock,papper
            userWin= compChoice === "rock" ? false : true;
        }

      showWinner(userWin ,userChoice,compChoice);
     }
};



options.forEach((choice) => {
 choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});
