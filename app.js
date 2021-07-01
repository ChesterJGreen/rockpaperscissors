
let rock = 0
let paper = 1
let scissors = 2
let a = 'YOU WIN'
let b = 'YOU LOSE'
let c = "IT'S A TIE"
let winCounter = 0
let wins = 0
document.getElementById('a').style.display = 'none'
document.getElementById('b').style.display = 'none'
document.getElementById('c').style.display = 'none'
document.getElementById('d').style.display = 'none'
// const item= {
//   rock: {
//     name: "Rock",
//     icon: "fas fa-gem",
//     beats: ""
//   }
// }


let compChoice = 0
function play(playerChoice) {
  document.getElementById('a').style.display = 'none'
  document.getElementById('b').style.display = 'none'
  document.getElementById('c').style.display = 'none'
  document.getElementById('d').style.display = 'none'

  console.log(playerChoice)
  compChoice = Math.floor(Math.random() * (3));
  console.log(compChoice);
  // you tie
  if (playerChoice === compChoice) {
    document.getElementById('c').style.display = 'block'
    document.getElementById('c').src = "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-right-orange-tie-vector-or-color-illustration-png-image_2012829.jpg?w=300&h=300"
    document.getElementById('compfinal').innerText = 'SAME'
    window.alert(c)
  }
  // rock beats scissors
  else if (playerChoice === 0 && compChoice === 2) {
    document.getElementById('a').style.display = 'block'
    document.getElementById('a').src = "https://beardeertshirt.files.wordpress.com/2011/09/rock-paper-scissors-shirt.jpg?w=300&h=300"
    document.getElementById('compfinal').innerText = 'Scissors'
    window.alert(a)
  }
  // scissors loses to rock
  else if (playerChoice === 2 && compChoice === 0) {
    document.getElementById('b').style.display = 'block'
    document.getElementById('b').src = "https://beardeertshirt.files.wordpress.com/2011/09/rock-paper-scissors-shirt.jpg?w=300&h=300"
    document.getElementById('compfinal').innerText = 'Rock'
    window.alert(b)

  }
  // paper beats rock
  else if (playerChoice === 1 && compChoice === 0) {
    document.getElementById('b').style.display = 'block'
    document.getElementById('b').src = "https://www.researchgate.net/publication/341163556/figure/fig1/AS:887880457142275@1588698605304/A-tree-growing-through-a-rock.png?w=300&h=300"
    document.getElementById('compfinal').innerText = 'Rock'
    window.alert(a)
    // rock loses to paper
  } else if (playerChoice === 0 && compChoice === 1) {
    document.getElementById('b').style.display = 'block'
    document.getElementById('b').src = "https://www.researchgate.net/publication/341163556/figure/fig1/AS:887880457142275@1588698605304/A-tree-growing-through-a-rock.png?w=300&h=300"
    document.getElementById('compfinal').innerText = 'Paper'
    window.alert(b)
  }
  // paper loses to scissors
  else if (playerChoice === 1 && compChoice === 2) {
    document.getElementById('d').style.display = 'block'
    document.getElementById('d').src = "https://www.nicepng.com/png/detail/307-3077975_hand-with-scissors-cutting-royalty-free-vector-scissors.png?w=300&h=300"
    document.getElementById('compfinal').innerText = 'Scissors'
    window.alert(b)
  }
  //scissors beat paper
  else if (playerChoice === 2 || compChoice === 1) {
    document.getElementById('d').style.display = 'block'
    document.getElementById('d').src = "https://www.nicepng.com/png/detail/307-3077975_hand-with-scissors-cutting-royalty-free-vector-scissors.png?w=300&h=300"
    document.getElementById('compfinal').innerText = 'Paper'
    window.alert(a)
  }
  if (a) { winCounter += 0 }
}
console.log(wins)
document.getElementById('winDisplay').innerText = "Wins : " + wins;
// function rock() {
//   console.log('rock')
//   document.getElementById("rock").innerText = "You chose ROCK"
//   document.getElementById('animal-pic').innerHTML = '<img class="w-33" src="//placeholder" alt="">
// }