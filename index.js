const headsBtn = document.getElementById("headsBtn");
const tailsBtn = document.getElementById("tailsBtn");
const resultText = document.getElementById("result"); 
const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

headsBtn.addEventListener("click", flipCoin);
tailsBtn.addEventListener("click", flipCoin); 

function flipCoin() {
  const coin = Math.random() < 0.5 ? "heads" : "tails"; 
  const userChoice = this.id === "headsBtn" ? "heads" : "tails"; 

  if (coin === userChoice) {
    resultText.textContent = "You guessed correctly! It's " + coin + "!";
    score.wins++;
  } else {
    resultText.textContent = "Oops! It's " + coin + ". Try again!";
    score.losses++;
  }

  updateScore();
}

function updateScore() {
  const scoreText = "Wins: " + score.wins + " Losses: " + score.losses + " Ties: " + score.ties;
  document.getElementById("score").textContent = scoreText;
}


