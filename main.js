
var errorMessage1 = document.querySelector("#error-1")// This is an error that will pop out in red text when the user types in text instead of numbers
var errorMessage2 = document.querySelector("#error-4")// This error will pop up when the player 1 attempts to enter text instead of a valid number guess
var errorMessage3 = document.querySelector("#error-5")// This error will pop up when the player 2 attempts to enter text instead of a valid number guess
var rightSection = document.querySelector(".section-right"); // This is where cards of the winner's name will be displayed
var trackGuesses = document.querySelector(".number-of-guesses"); // This keeps track of the number of guesses
var clearTheGame = document.querySelector(".clear-button")// This is the variable for the clear button
var numbGuess = 0 // This represents the number of guesses it takes to guess the correct number
var updateButton = document.querySelector(".update-button"); // This will create a newly generated number
var minInputDisplay = document.querySelector(".min-range"); // This shows the smallest number the user chooses in the number range
var maxInputDisplay = document.querySelector(".max-range"); // This shows the largest number the user chooses in the number range
var minInput = document.querySelector(".min-range-input");
var maxInput = document.querySelector(".max-range-input");
var player1Guess = document.querySelector(".challenger-one-guess");
var player2Guess = document.querySelector(".challenger-two-guess");
var player1CurrentGuess = document.querySelector(".current-guess-one");
var player2CurrentGuess = document.querySelector(".current-guess-two");
var tooHighOrLow1 = document.querySelector(".high-or-low-1");
var tooHighOrLow2 = document.querySelector(".high-or-low-2");
var resetInputs = document.querySelector(".container-challenger");
var declaredWinner = document.querySelector(".winner");
var errorMessage = document.querySelector("#error")
var challengerNameDisplay1 = document.querySelector(".small-title-challenger-one-instance-one") // Player 1
var challengerName1 = document.querySelector(".challenger-one-name") // Player one name
var challengerNameDisplay2 = document.querySelector(".small-title-challenger-two-instance-two"); // Player 2
var challengerName2 = document.querySelector(".challenger-two-name") // Player 2 name
var submitButton = document.querySelector(".submit-button");



rightSection.addEventListener('click', function(e) { // This will remove a card when the X button is selected on the
  if (e.target.className === 'clear-card') {
    e.target.closest('.card').remove();
  }
});


// ---------validation-&-errors----------------//
  updateButton.addEventListener("click", disabler)
  submitButton.addEventListener("click", disabler)
  minInput.addEventListener("keyup", inputError1);
  maxInput.addEventListener("keyup", inputError2);
  challengerName1.addEventListener("keyup", nameError1);
  challengerName2.addEventListener("keyup", nameError2);
  player1Guess.addEventListener("keyup", guessError1);
  player2Guess.addEventListener("keyup", guessError2);


  function inputError1() {
    if (minInput.value === "" || parseInt(maxInput.value) < parseInt(minInput.value)) {

      minInput.classList.add("red-box");
      errorMessage.classList.remove("hidden");
      updateButton.setAttribute("disabled", "disabled");
    }
    else {
      minInput.classList.remove("red-box");
      errorMessage.classList.add("hidden");
      updateButton.removeAttribute("disabled");
    }
  }

  function inputError2() {
    if (maxInput.value === "" || parseInt(maxInput.value) < parseInt(minInput.value)) {
      maxInput.classList.add("red-box");
      errorMessage1.classList.remove("hidden")
      updateButton.setAttribute("disabled", "disabled");
    }
    else {
      maxInput.classList.remove("red-box");
      errorMessage1.classList.add("hidden");
      updateButton.removeAttribute("disabled");

    }
  }

function nameError1() {
  if (challengerName1.value === ""){
    challengerName1.classList.add("red-box");

  }
  else{
    challengerName1.classList.remove("red-box");
  }
}

function nameError2() {
  if (challengerName2.value === ""){
    challengerName2.classList.add("red-box");
  }
  else{
    challengerName2.classList.remove("red-box");
  }
}

function guessError1() {
  if (player1Guess.value === ""){
    player1Guess.classList.add("red-box");
    errorMessage2.classList.remove("hidden")
  }
  else{
    player1Guess.classList.remove("red-box");
    errorMessage2.classList.add("hidden");
  }
}

function guessError2() {
  if (player2Guess.value === ""){
    player2Guess.classList.add("red-box");
    errorMessage3.classList.remove("hidden")
  }
  else{
    player2Guess.classList.remove("red-box");
    errorMessage3.classList.add("hidden");
  }
}

function disabler() {
  if (player1Guess.value === "" || player2Guess.value === "" || challengerName1.value === "" || challengerName2.value=== "") {
    clearTheGame.setAttribute("disabled", "disabled");
  }
  else{
    clearTheGame.removeAttribute("disabled")
  }
}

updateButton.addEventListener("click", updateRange); //Come back to
function updateRange(e) {
    e.preventDefault(e)
    minInputDisplay.textContent = minInput.value || 1;
    maxInputDisplay.textContent = maxInput.value || 100;
    newNumberGenerated = Math.floor(Math.random() * (parseInt(maxInput.value) - parseInt(minInput.value) + 1)) + parseInt(minInput.value)
     console.log(newNumberGenerated)
}

submitButton.addEventListener("click", updateChallengerNamesAndGuess); // This gets the user names and guesses
function updateChallengerNamesAndGuess(e) {
    e.preventDefault(e);
    challengerName2.textContent = challengerName2.value;
    challengerNameDisplay2.textContent = challengerName2.textContent;
    challengerName1.textContent = challengerName1.value
    challengerNameDisplay1.textContent = challengerName1.textContent;
    player1CurrentGuess.textContent = player1Guess.value;
    player2CurrentGuess.textContent = player2Guess.value;
}


submitButton.addEventListener("click", tooHighOrLow) // This will tell player 1 if there guess is too high or low
function tooHighOrLow(e) {
    e.preventDefault(e);

    if (player1Guess.value < newNumberGenerated) {
        tooHighOrLow1.textContent = "That's too low"
    } else if (player1Guess.value > newNumberGenerated) {
        tooHighOrLow1.textContent = "That's too high"
    } else {
        tooHighOrLow1.textContent = "That's Right!"
    }
}
submitButton.addEventListener("click", tooHighOrLow3) // This will tell player 2 if their guess is too high or low
function tooHighOrLow3(e) {
    e.preventDefault(e);

    numbGuess++
    if (player2Guess.value < newNumberGenerated) {
        tooHighOrLow2.textContent = "That's too low"
    } else if (player2Guess.value > newNumberGenerated) {
        tooHighOrLow2.textContent = "That's too high"
    } else {
        tooHighOrLow2.textContent = "That's Right!"
    }
}


//This will rest all input forms for the game

    function resetGameInputs() {
    document.querySelector(".challenger-one-name").value = "";
    document.querySelector(".challenger-two-name").value = "";
    document.querySelector(".challenger-one-guess").value = "";
    document.querySelector(".challenger-two-guess").value = "";
    document.querySelector(".min-range-input").value = "";
    document.querySelector(".max-range-input").value = "";
    document.querySelector(".small-title-challenger-one").textContent = "Challenger 1 Name";
    document.querySelector(".small-title-challenger-two").textContent = "Challenger 2 Name";
    document.querySelector(".current-guess-one").textContent = "#";
    document.querySelector(".current-guess-two").textContent = "#";
    document.querySelector(".high-or-low-1").textContent = "Pending Guess...";
    document.querySelector(".high-or-low-2").textContent = "Pending Guess...";
    }


clearTheGame.addEventListener("click", clearGameInputs)

  function clearGameInputs() {
    resetGameInputs();
    minInputDisplay.textContent = minInput.value
    maxInputDisplay.textContent = maxInput.value
  }

function createCard2() {
  rightSection.innerHTML = `
<article class="card card-one">
    <div class="challenger-names">
      <h5 class="small-title-challenger-one-instance-two">${challengerName1.value}</h5>
      <p class= "versus">VS</p>
      <h5 class="small-title-challenger-two small-title-challenger-two-instance-two">${challengerName2.value}</h5>
    </div>
    <div class="challenger-status">
      <h3 class="winner">${challengerName2.value}</h3>
      <h3 class = "card-winner">WINNER</h3>
    </div>
    <div class="guesses-timer-clear">
      <p> Number of Guesses: <span class="number-of-guesses">${numbGuess}</span></p>
      <button class="clear-card" type="button" name="button">X</button>
    </div>
</article>

  ` + rightSection.innerHTML;
  	numbGuess = 0;
}

function createCard1() {
  rightSection.innerHTML =`
<article class="card card-one">
    <div class="challenger-names">
      <h5 class="small-title-challenger-one-instance-two">${challengerName1.value}</h5>
      <p class= "versus">VS</p>
      <h5 class="small-title-challenger-two small-title-challenger-two-instance-two">${challengerName2.value}</h5>
    </div>
    <div class="challenger-status">
      <h3 class="winner">${challengerName1.value}</h3>
      <h3 class = "card-winner">WINNER</h3>
    </div>
    <div class="guesses-timer-clear">
      <p> Number of Guesses: <span class="number-of-guesses">${numbGuess}</span>  </p>
      <button class="clear-card" type="button" name="button">X</button>
    </div>
</article>

  ` + rightSection.innerHTML;
  	numbGuess = 0;

}
function createCard3() {
  rightSection.innerHTML =`
<article class="card card-one">
    <div class="challenger-names">
      <h5 class="small-title-challenger-one-instance-two">${challengerName1.value}</h5>
      <p class= "versus">VS</p>
      <h5 class="small-title-challenger-two small-title-challenger-two-instance-two">${challengerName2.value}</h5>
    </div>
    <div class="challenger-status">
      <h3 class = "card-winner">WINNER</h3>
            <h3 class="winner">You Both Win!</h3>
    </div>
    <div class="guesses-timer-clear">
      <p> Number of Guesses: <span class="number-of-guesses">${numbGuess}</span>  </p>
      <button class="clear-card" type="button" name="button">X</button>
    </div>
</article>

  ` + rightSection.innerHTML;
    numbGuess = 0;

}

submitButton.addEventListener("click", determineWinner); //This will run the determineWinner function when the submit button is clicked


function determineWinner () {
  if(player1Guess.value == newNumberGenerated && player2Guess.value == newNumberGenerated) {
    createCard3()
  } else if (player2Guess.value == newNumberGenerated) {
    createCard2();
  } else if (player1Guess.value == newNumberGenerated) {
    createCard1();
  }

}
