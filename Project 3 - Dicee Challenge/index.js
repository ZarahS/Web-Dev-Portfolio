function randomDice1() {
  var randomNumber1 = Math.floor(Math.random() * 6);
  var picArray = new Array(
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  );
  document.getElementById("img1").src = picArray[randomNumber1];
  return randomNumber1;
}

function randomDice2() {
  var randomNumber2 = Math.floor(Math.random() * 6);
  var picArray = new Array(
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  );
  document.getElementById("img2").src = picArray[randomNumber2];
  return randomNumber2;
}

function textChange() {
  console.log("randomDice1", randomDice1);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Warrior 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Warrior 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

var randomNumber1 = randomDice1();
var randomNumber2 = randomDice2();

textChange(randomNumber1, randomNumber2);
