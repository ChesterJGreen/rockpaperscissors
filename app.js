
let rock = 0
let paper = 1
let scissors = 2
let a = 'YOU WIN'
let b = 'YOU LOSE'
let c = 'TIE GAME'
// const item= {
//   rock: {
//     name: "Rock",
//     icon: "fas fa-gem",
//     beats: ""
//   }
// }


let compChoice = 0
function play(playerChoice) {
  console.log(playerChoice)
  compChoice = Math.floor(Math.random() * (3));
  console.log(compChoice);
  if (playerChoice === compChoice) {
    window.alert(c)
    document.getElementById('c').src = "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-right-orange-tie-vector-or-color-illustration-png-image_2012829.jpg"
  }
  else if (playerChoice === 0 && compChoice === 2) {
    window.alert(a)
    console.log(a)
  }
  else if (playerChoice === 2 && compChoice === 0) {
    window.alert(b)
    console.log(b)
  }
  else if (playerChoice > compChoice) {
    window.alert(a)
    console.log(a)
  }
  else {
    window.alert(b)
    console.log(b)
  }
  winner()
}


// function rock() {
//   console.log('rock')
//   document.getElementById("rock").innerText = "You chose ROCK"
//   document.getElementById('animal-pic').innerHTML = '<img class="w-33" src="//placeholder" alt="">
// }