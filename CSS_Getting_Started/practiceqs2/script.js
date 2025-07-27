let leftDiv = document.querySelector(".left_div"); // Select the div to color
let input = document.querySelector('input'); // Select the input box
let button = document.querySelector('button'); // Select the button

button.addEventListener("click", () => {
    let hexColor = input.value.trim(); // Get and trim the entered color value

    // Check if it's a valid 6-digit hex
    if (/^#?[0-9A-Fa-f]{6}$/.test(hexColor)) {
        // Add '#' if not present
        if (!hexColor.startsWith("#")) {
            hexColor = "#" + hexColor;
        }

        // Compare with the correct color
        if (hexColor.toUpperCase() === "#4ECD1C") {
            leftDiv.style.backgroundColor = hexColor;
            leftDiv.textContent = "Correct"; // Reset original text
        } else {
            leftDiv.textContent = "Wrong"; // Show wrong message
            leftDiv.style.backgroundColor = ""; // Clear background
        }
    } else {
        alert("Please enter a valid 6-digit hex color code.");
    }
});
