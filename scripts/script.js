// Get all the candle flame elements
const flames = document.querySelectorAll(".flame");

// Function to detect a "blow" event
function blowOutCandle(event) {
  flames.forEach((flame) => {
    const flameRect = flame.getBoundingClientRect();
    const distance = Math.sqrt(
      Math.pow(event.clientX - flameRect.left, 2) +
        Math.pow(event.clientY - flameRect.top, 2)
    );

    // If the mouse is close enough to the flame, extinguish it
    if (distance < 50) {
      flame.classList.add("extinguished");
    } else {
      flame.classList.remove("extinguished");
    }
  });
}

// Event listener for mouse move to simulate blowing
document.addEventListener("mousemove", blowOutCandle);
