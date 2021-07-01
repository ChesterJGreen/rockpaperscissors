
let rock = 0
let paper = 1
let scissors = 2
let a = 'YOU WIN'
let b = 'YOU LOSE'
let c = 'TIE GAME'
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
  if (playerChoice === compChoice) {
    document.getElementById('c').style.display = 'block'
    document.getElementById('c').src = "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-right-orange-tie-vector-or-color-illustration-png-image_2012829.jpg?w=300&h=300"
    window.alert(c)
  }
  else if (playerChoice === 0 && compChoice === 2) {
    document.getElementById('a').style.display = 'block'
    document.getElementById('a').src = "https://beardeertshirt.files.wordpress.com/2011/09/rock-paper-scissors-shirt.jpg?w=300&h=300"
    window.alert(a)
  }
  else if (playerChoice === 2 && compChoice === 0) {
    document.getElementById('b').style.display = 'block'
    document.getElementById('b').src = "https://beardeertshirt.files.wordpress.com/2011/09/rock-paper-scissors-shirt.jpg?w=300&h=300"
    window.alert(b)

  }
  else if (playerChoice === 1 && compChoice === 0 || playerChoice === 0 && compChoice === 1) {
    document.getElementById('b').style.display = 'block'
    document.getElementById('b').src = "https://www.researchgate.net/publication/341163556/figure/fig1/AS:887880457142275@1588698605304/A-tree-growing-through-a-rock.png?w=300&h=300"
    window.alert(b)
  }
  else if (playerChoice === 1 && compChoice === 2 || playerChoice === 2 || compChoice === 1) {
    document.getElementById('d').style.display = 'block'
    document.getElementById('d').src = "https://www.nicepng.com/png/detail/307-3077975_hand-with-scissors-cutting-royalty-free-vector-scissors.png?w=300&h=300"
    window.alert(b)
  }
}


// function rock() {
//   console.log('rock')
//   document.getElementById("rock").innerText = "You chose ROCK"
//   document.getElementById('animal-pic').innerHTML = '<img class="w-33" src="//placeholder" alt="">
// }