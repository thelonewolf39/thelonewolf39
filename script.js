const moodBtn = document.getElementById("mood-btn");
const moodText = document.getElementById("mood-text");

const moods = [
  "Calm 🌙",
  "Focused 💻",
  "Creative ✨",
  "Adventurous 🐾",
  "Dreamy ☁️",
  "Inspired 🔥"
];

moodBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * moods.length);
  moodText.textContent = `Current mood: ${moods[random]}`;
});
