document.getElementById("submitGuess").addEventListener("click", function() {
  this.style.border = "2px solid transparent"; 

  
  setTimeout(() => {
      this.style.border = "2px solid black";
  }, 100);
});


let randomNumber;
let maxGuesses = 10;
let attemptsLeft;

function checkGuess() {
  const playerGuess = parseInt(document.getElementById("guess").value);
  if (isNaN(playerGuess)) {
      document.getElementById("hint").textContent = "Please enter a valid number.";
      return;
  }

  attemptsLeft--;
  document.getElementById("attempts").textContent = `Attempts left: ${attemptsLeft}`;

  if (playerGuess === randomNumber) {
      document.getElementById("hint").textContent = "You Win, Congratulations!";
      endGame(true);
  } else if (attemptsLeft === 0) {
      document.getElementById("hint").textContent = `Game Over, The Correct Number was ${randomNumber}`;
      endGame(false);
  } else if (playerGuess > randomNumber) {
      document.getElementById("hint").textContent = "Too High, Try a lower number";
  } else {
      document.getElementById("hint").textContent = "Too Low, Try a higher number";
  }
}

function endGame(won) {
  document.getElementById("guess").disabled = true;
  document.getElementById("submitGuess").disabled = true;
  document.getElementById("guess").value = "";

  const restart = document.createElement("button");
  restart.textContent = "Play Again";
  restart.onclick = () => {
      document.getElementById("guess").disabled = false;
      document.getElementById("submitGuess").disabled = false;
      restart.remove();
      gameStart();
  };

  document.getElementById("game").appendChild(restart);
}

function gameStart(range = 100) {
  randomNumber = Math.floor(Math.random() * range) + 1;
  attemptsLeft = maxGuesses;
  document.getElementById("hint").textContent = "";
  document.getElementById("attempts").textContent = `Attempts left: ${attemptsLeft}`;
  document.getElementById("instructions").textContent = `Guess a number between 1 and ${range}.`;

  
  document.getElementById("submitGuess").style.border = "2px solid black";
}

window.onload = () => gameStart(100);
