function swapNumbers() {
    
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
   
    let a = parseFloat(input1.value);
    let b = parseFloat(input2.value);
    
   
    let text = "";

   
    if (isNaN(a)) {
        text = "Please enter a valid number in the first text box.";
    } else if (isNaN(b)) {
        text = "Please enter a valid number in the second text box.";
    } else if (a === b) {
        text = "Both numbers are identical: a = " + a + " and b = " + b;
    } else {
       
        a = a + b;  
        b = a - b; 
        a = a - b;  
        
        input1.value = a;
        input2.value = b;
        
        // Beginner-friendly string connection using the + sign
        text = "Successfully completed! Swapped values are now: a = " + a + ", b = " + b;
    }

   
    document.getElementById("result").innerHTML = text;
}