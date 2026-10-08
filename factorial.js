function factorialWileLoop() {
    const inputElement = document.getElementById("demo1");
    const n = parseInt(inputElement.value);
    
    // Create a variable to hold the output text string
    let text = "";

    // Input validation
    if (isNaN(n)) {
        text = "Please enter a valid number.";
    } else if (n < 0) {
        text = "Factorial for negative numbers is not defined.";
    } else {
        // Calculate factorial using a while loop
        let result = 1;
        let i = n;
        
        while (i > 1) {
            result *= i;
            i--;
        }
        
        text = "Factorial: " + result;
    }

    // Display the string inside the HTML element using your variable
    document.getElementById("result").innerHTML = text;
}