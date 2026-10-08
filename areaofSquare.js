function areaofSquare() {
    // 1. Get the value from your text box
    const inputValue = document.getElementById("demo1").value;
    
    // 2. Convert the text input into a decimal number
    const side = parseFloat(inputValue);
    
    // Create a variable to hold the output message string
    let text = "";

    // 3. Validate the input
    if (inputValue.trim() === "" || isNaN(side)) {
        text = "Please enter a valid number.";
    } else if (side <= 0) {
        text = "Side length must be greater than zero.";
    } else {
        // 4. Compute the area of the square (side * side)
        const area = side * side;
        text = "Area of Square: " + area;
    }

    // 5. Display the text string inside the HTML paragraph element
    document.getElementById("result").innerHTML = text;
}