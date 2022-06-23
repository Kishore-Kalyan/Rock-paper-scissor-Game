const user_choice = document.getElementById("user-choice");
const computer_choice = document.getElementById("computer-choice");
const resultDispaly = document.getElementById("result");
const choices = ["rock", "paper", "scissor"];

let userChoice;
let computerChoice;
let result;

const buttons = document.querySelectorAll("button");

buttons.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    computerChoice = getRandomComputerChoice();
    computer_choice.innerHTML = computerChoice;
    user_choice.innerHTML = userChoice;
    console.log(computerChoice, userChoice);
    getResult();
  })
);

function getRandomComputerChoice() {
  const random_number = Math.floor(Math.random() * 3);
  return choices[random_number];
}

function getResult() {
  if (computerChoice === userChoice) result = "It's a draw";
  if (computerChoice === "rock" && userChoice === "scissor")
    result = "You lose";
  if (computerChoice === "paper" && userChoice === "rock") result = "You lose";
  if (computerChoice === "scissor" && userChoice === "paper")
    result = "You lose";
  if (userChoice === "rock" && computerChoice === "scissor") result = "You win";
  if (userChoice === "paper" && computerChoice === "rock") result = "You win";
  if (userChoice === "scissor" && computerChoice === "paper")
    result = "You win";
  resultDispaly.innerHTML = result;
}
