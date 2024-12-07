
// // Darkmode Enable / Disable on button
// Get the element with the ID 'colourSwitch'
var colourSwitch = document.getElementById("colourSwitch");

// Function to toggle dark mode
function toggleDarkMode() {
    var element = document.documentElement;
    element.classList.toggle("dark-mode"); // Toggle the "dark-mode" class on the body element
}

// Add an event listener to the "colourSwitch" element to trigger toggleDarkMode
colourSwitch.addEventListener("click", toggleDarkMode);

// Typing animation script
var i = 0;
var speed = 50;

// Function to start the typewriter effect
function typeWriter() {
  // Get the text content from the HTML element with id "textToType"
  var txt = document.getElementById("textToType").textContent;

  // Ensure the element with id "typeAnimation" is available before we type
  var typeAnimation = document.getElementById("typeAnimation");
  
  // Check if txt has content and demoElement exists
  if (txt && typeAnimation) {
    // Type the text out one character at a time
    if (i < txt.length) {
        typeAnimation.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed); // Recursively call typeWriter for the next character
    }
}
}
