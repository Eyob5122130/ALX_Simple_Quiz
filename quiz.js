function checkAnswer() {
  const correctAnswer = "4";
  const selected = document.querySelector('input[name="quiz"]:checked');

  if (!selected) {
    document.getElementById("feedback").textContent =
      "Please select an answer.";
    return;
  }

  const userAnswer = selected.value;
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
