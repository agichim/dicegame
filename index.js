// Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.
function random() {
  var dice1 = Math.floor(Math.random() * 6 + 1);

  if (dice1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  } else if (dice1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  } else if (dice1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  } else if (dice1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  } else if (dice1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  } else if (dice1 === 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  }

  var dice2 = Math.floor(Math.random() * 6 + 1);

  if (dice2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  } else if (dice2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  } else if (dice2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  } else if (dice2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  } else if (dice2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  } else if (dice2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }

  if (dice1 < dice2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else if (dice1 > dice2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (dice1 === dice2) {
    document.querySelector("h1").textContent = "It's a DRAW!";
  }
}

random();
/*
// Angela

var dice1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage = "dice" + dice1 + ".png"; // this will pick a random dice image between 1 and 6

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var dice2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "images/dice" + dice2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (dice1 < dice2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a DRAW!";
}

*/
