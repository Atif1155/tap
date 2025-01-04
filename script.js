let score = 0;

// Reference to elements
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");
const taskBtn = document.getElementById("task-btn");
const referBtn = document.getElementById("refer-btn");
const output = document.getElementById("output");

// Update score when target is clicked
target.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  moveTarget();
});

// Move the target to a random position
function moveTarget() {
  const areaWidth = gameArea.offsetWidth;
  const areaHeight = gameArea.offsetHeight;
  const targetWidth = target.offsetWidth;
  const targetHeight = target.offsetHeight;

  const x = Math.random() * (areaWidth - targetWidth);
  const y = Math.random() * (areaHeight - targetHeight);

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

// Show tasks when "Task" button is clicked
taskBtn.addEventListener("click", () => {
  output.textContent = "Tasks: 1. Tap the target. 2. Increase your score. 3. Share your referral link!";
});

// Show referral link when "Refer" button is clicked
referBtn.addEventListener("click", () => {
  output.textContent = "Your referral link: https://example.com/referral";
});
