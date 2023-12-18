var randomImageSource =
  "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
var image1 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 =
  "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
var image2 = document
  .querySelectorAll("img")[2]
  .setAttribute("src", randomImageSource2);

if (randomImageSource > randomImageSource2) {
  document.querySelector("h1").innerHTML = "Warrior 1 Wins!";
} else if (randomImageSource2 > randomImageSource) {
  document.querySelector("h1").innerHTML = "Warrior 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
