let pattern1 = "";
for (let i = 0; i<5; i++){
for (let j = 0;j<5;j++)
{
pattern1 += "*";
  
}
pattern1 +="\n"
}

console.log(pattern1);


// for (let i = 1; i<=5; i++){
//   let pattern1 = "";
// for (let j = 1;j<=i;j++)
// {
// pattern1 += "*";
  
// }

// console.log(pattern1);
// }



// 1. Find the given number is odd or even.

function checkOddEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkOddEven(10)); // Output: Even
console.log(checkOddEven(7));  // Output: Odd



// 2. Reverse a string without using any build-in methods.

function reverseString(str) {
    let reversed = "";
    
    // Start from the last index and move backwards
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"