function areaofarectangle() {
    // 1. Fetch values from both input boxes
    const length = parseFloat(document.getElementById("lengthInput").value);
    const width = parseFloat(document.getElementById("widthInput").value);
    
    let text = "";

    // 2. Validate the inputs
    if (isNaN(length) || isNaN(width)) {
        text = "Please enter valid numeric values for both fields.";
    } else if (length <= 0 || width <= 0) {
        text = "Length and width must be greater than zero.";
    } else {
        // 3. Compute the area
        const area = length * width;
        text = "Area of Rectangle: " + area;
    }

    // 4. Display the result text on the webpage
    document.getElementById("result").innerHTML = text;
}