var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function () {
  if (!started) {
    nextSequence();
    $("#level-title").text("Level " + level);
    started = true;
  }
});

$(".btn").click(function () {
  if (started === true) {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    // console.log("This is my user clicked pattern: " + userClickedPattern);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    // console.log("This is my game pattern: " + gamePattern);
    checkAnswer(userClickedPattern.length - 1);
  }
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  // console.log("randomNumber", randomNumber);
  var randomChosenColor = buttonColors[randomNumber];
  // console.log("This is my game pattern colour: " + randomChosenColor);
  gamePattern.push(randomChosenColor);
  // console.log(gamePattern);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  // animatePress(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  // console.log(currentColor);
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
}
