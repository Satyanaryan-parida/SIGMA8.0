let leftDiv = document.querySelector(".left_div"); // Select the div to color
let input = document.querySelector('input'); // Select the input box
let button = document.querySelector('button'); // Select the button

button.addEventListener("click", () => {
    let hexColor = input.value; // Get the entered color value
    if (/^#?[0-9A-Fa-f]{6}$/.test(hexColor)) {
        if (!hexColor.startsWith("#")) {
            hexColor = "#" + hexColor; // Ensure it starts with #
        }
        leftDiv.style.backgroundColor = hexColor; // Apply the color
    } else {
        alert("Please enter a valid 6-digit hex color code.");
    }
});
