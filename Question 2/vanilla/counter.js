// Select the DOM elements
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");

// Initialize state
let count = 0;

// Event listener to update state and UI
incrementButton.addEventListener("click", () => {
  count++; // Update state
  counterElement.textContent = count; // Manually update the UI
});
