// ----------------------------
// Part 2: Function Example
// ----------------------------

// Function to calculate square of a number
function squareNumber(num) {
    return num * num; // Return value
}

// Event listener for button
document.getElementById("calculateBtn").addEventListener("click", function() {
    const input = document.getElementById("numberInput").value;
    const result = squareNumber(input);
    document.getElementById("result").textContent = `Square: ${result}`;
});

// ----------------------------
// Part 3: JS-Triggered Box Animation
// ----------------------------

// Function to toggle animation class
function toggleBoxAnimation() {
    const box = document.getElementById("box");
    box.classList.toggle("animate");
}

// Attach event listener
document.getElementById("animateBtn").addEventListener("click", toggleBoxAnimation);
