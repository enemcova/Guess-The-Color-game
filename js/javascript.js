var numOfSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayedColor = document.getElementById("displayedColor");
var result = document.querySelector("#result");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
  for(var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function() {
      modeBtns[0].classList.remove("selected-mode");
      modeBtns[1].classList.remove("selected-mode");
      this.classList.add("selected-mode");
      this.textContent === "Easy mode" ? numOfSquares = 3: numOfSquares = 6;
      reset();
    });
  }

  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (pickedColor === clickedColor) {
        result.textContent = "Correct!";
        newColors.textContent = "Let's play again!"
        changeSquareColor(clickedColor);
        h1.style.background = clickedColor;
      } else {
        result.textContent = "Try again!";
        this.style.backgroundColor = "#2C2F37";
      }
    });
  };

  reset();
}


function reset() {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  displayedColor.textContent = pickedColor;
  newColors.textContent = "Pick different colors";
  result.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "#FF575C";
}

newColors.addEventListener("click", function() {
  reset();
})

displayedColor.textContent = pickedColor;

function changeSquareColor(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = pickedColor;
  };
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(randomColors());
  }
  return arr;
};

function randomColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};
