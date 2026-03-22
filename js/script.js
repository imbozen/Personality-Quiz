console.log("script.js connected!");

// handle button selection
let questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach(block => {
  let buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
});

// calculate result
function displayResult() {
  let selected = document.querySelectorAll(".answer-btn.selected");
  let total = 0;

  selected.forEach(btn => {
    total += parseInt(btn.dataset.points);
  });

  let result = "";

  if (total <= 7) {
    result = "You are calm and relaxed 😌";
  } else if (total <= 12) {
    result = "You are balanced and social 😎";
  } else if (total <= 16) {
    result = "You are energetic and outgoing 🎉";
  } else {
    result = "You are bold and adventurous 🔥";
  }

  document.getElementById("result-text").textContent = result;
  document.getElementById("result-container").style.display = "block";
}

// button event
document.getElementById("show-result").addEventListener("click", displayResult);