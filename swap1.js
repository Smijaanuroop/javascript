function swapNumbers() {
    // 1. Grab the two input elements from your HTML page
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    
    // 2. Fetch the text typed inside them
    let a = input1.value;
    let b = input2.value;
    
    // Create an empty text variable for your final message
    let text = "";

    // 3. Validation: Use if/else if to check for blank input fields
    if (a.trim() === "") {
        text = "Please enter a value in the first text box.";
    } else if (b.trim() === "") {
        text = "Please enter a value in the second text box.";
    } else if (a === b) {
        text = "Both values are already identical: a = " + a + " and b = " + b;
    } else {
        // 4. Swap values using a third variable (temp)
        let temp = a;
        a = b;
        b = temp;
        
        // 5. Update the text boxes visually on your web screen
        input1.value = a;
        input2.value = b;
        
        // Beginner-friendly string connection using the + sign
        text = "Successfully completed! Swapped values are now: a = " + a + ", b = " + b;
    }

    // 6. Print the message back into your <p id="result"> element
    document.getElementById("result").innerHTML = text;
}