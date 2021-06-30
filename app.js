let rock = 0;
let paper = 1;
let scissors = 2;

function play(choice) {
  let playerChoice = 'button';
  let compChoice = 'rock'
  if (playerChoice === compChoice) {
    console.log('Tie Game')
  }
  else if (playerChoice === 0 && compChoice === 2) {
    window.alert('YOU WIN')
  }
  else if (playerChoice === 2 && compChoice === 0) {
    window.alert('YOU LOSE')
  }
  else if (playerChoice > compChoice) {
    window.alert('YOU WIN')
  }
  else (playerChoice < compChoice) {
    window.alert('YOU LOSE')
  }

}

function rock() {
  console.log('rock')
  document.getElementById("rock").innerText = "You chose ROCK"
  document.getElementById('animal-pic').innerHTML = '<img class="w-33" src="assets/duck.jpg" alt="duck">
