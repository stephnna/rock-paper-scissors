let playerEntry = ` `;
let playerSelection  = ` `;
let computerSelection = ` `;
let playerScore    = 0;
let computerScore  = 0;
let gameResult = ` `;
let numberOfRound = 0;

// function that returns scissors, rock and paper randomly
function computerPlay () {
  const myArray = ["Rock", "Scissors", "Paper"]; 
  for (let i = 0; i < myArray.length; i++) {        
    myArray[i] = myArray[(Math.floor(Math.random() * myArray.length))];     
    }
  return myArray[0];
}

  
//Requests the user to input the number of play
alert("Welcome to Rock-Paper-Scissors Game, Click OK to Play");
let numberOfPlay = Number(window.prompt("Select the number of times you would like to play the game", "Number"));
  while(isNaN(numberOfPlay) === true){
    alert (`Invalid Selection, Kindly select a number`)
    numberOfPlay = Number(window.prompt("Select the number of times you would like to play the game", "Number"));
}
console.log(`Total number of play selected is ${numberOfPlay}`)

//  capitalize the first letter the user entered and turns other letter to lower case
function capitalizeFirstLetter(firstLetterUpperCase){
  return firstLetterUpperCase.charAt(0).toUpperCase() + firstLetterUpperCase.slice(1).toLowerCase();
  }

  // determines the winner, loser or tie game 
function playRound(playerSelection, computerSelection){  

    let playResult = " "  
  if(playerSelection === "Rock" && computerSelection === "Scissors" || 
     playerSelection === "Scissors" && computerSelection === "Paper" ||
     playerSelection === "Paper" && computerSelection === "Rock"){

    playResult = `You win!, ${playerSelection} beats ${computerSelection}`     
  }
  
  else if(playerSelection === "Scissors" && computerSelection === "Rock" ||
    playerSelection === "Paper" && computerSelection === "Scissors" ||
    playerSelection === "Rock" && computerSelection === "Paper"){

    playResult = `You lose!, ${computerSelection} beats ${playerSelection}`     
  }  

  else if(playerSelection === computerSelection) {

    playResult = `Tie game!, ${playerSelection} : ${computerSelection}`  
 }

 else alert("Invalid Selection, select Rock, Paper or Scissors")
   
  return playResult;
}
// Reports the play score
function game (){ 
  firstLetterUpperCase  =  window.prompt("Select either Rock, Paper or Scissors", "Player Selection");
  playerSelection =   capitalizeFirstLetter(firstLetterUpperCase);     
  computerSelection = computerPlay();

  let game1 = playRound(playerSelection, computerSelection);  
  let score = ` `;
  if(game1 === `You win!, ${playerSelection} beats ${computerSelection}`){
    playerScore += 1;
    computerScore = computerScore;
    score = `Player : Computer  = ${playerScore} : ${computerScore} ${game1}`
 }
 
  else if(game1 === `You lose!, ${computerSelection} beats ${playerSelection}`){
    playerScore = playerScore;
    computerScore += 1;
    score = `Player : Computer = ${playerScore} : ${computerScore}, ${game1}`
 }
else if(game1 === `Tie game!, ${playerSelection} : ${computerSelection}`) {
    playerScore = playerScore;
    computerScore = computerScore;
    score = `Player : Computer = ${playerScore} : ${computerScore}, ${game1}`
 }
else score = `Invalid Selection, select Rock, Paper or Scissors`

return score;
}
// Loops round the number of play selected
for (let playTimes = 0; playTimes < numberOfPlay; playTimes++){  
  let gameResult =  game()
   numberOfRound++;
   console.log(`Round : ${numberOfRound}`)
   console.log(`Player Selection: ${playerSelection}`);
   console.log(`Computer Selection: ${computerSelection}`);
   alert(gameResult);
   console.log(gameResult);      
   console.log(" ")
}
   
// Declares the final result  
if(playerScore > computerScore){
  console.log(`Final Result: ${playerScore} : ${computerScore}, Congratulations!, You Win!`);
  alert (`Final Result: ${playerScore} : ${computerScore}, Congratulations! You Win!`);
  alert("check the console for log of results ie > right click on the screen > click Inspect and click console");
 }

else if (playerScore < computerScore){
  console.log(`Final Result =  ${playerScore} : ${computerScore}, You Lose!`);
  alert(`Final Result =  ${playerScore} : ${computerScore}, You Lose!`);
  alert(`check the console for log of results i.e > right click on the screen > click Inspect > click console`);
}

else if (playerScore === computerScore) {
  console.log(`Final Result =  ${playerScore} : ${computerScore}, Tie Game, Play Again!`);
  alert(`Final Result =  ${playerScore} : ${computerScore}, Tie Game, Play Again!`);
  alert(`check the console for log of results i.e > right click on the screen > click Inspect > click console`);
}  