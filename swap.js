function swapNumbers() {
  
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    
    
    let a = input1.value;
    let b = input2.value;
    
  
    let text = "";

    if (a.trim() === "") {
        text = "Please enter a value in the first text box.";
    } else if (b.trim() === "") {
        text = "Please enter a value in the second text box.";
    } else if (a === b) {
        text = "Both values are already identical: a = " + a + " and b = " + b;
    } else {
       
        let temp = a;
        a = b;
        b = temp;
        
      
        input1.value = a;
        input2.value = b;
        
       
        text = "Successfully completed! Swapped values are now: a = " + a + ", b = " + b;
    }

   
    document.getElementById("result").innerHTML = text;
}