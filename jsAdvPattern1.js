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

// function checkOddEven(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(checkOddEven(10)); // Output: Even
// console.log(checkOddEven(7));  // Output: Odd



// // 2. Reverse a string without using any build-in methods.

// function reverseString(str) {
//     let reversed = "";
    
//     // Start from the last index and move backwards
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
    
//     return reversed;
// }

// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"


// // 3. Find the given string is palindrome or not, without using any built- in methods. 

// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false; // if there is a mismatch
//         }
//         left++;
//         right--;
//     }

//     return true; // All characters matched
// }


// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("malayalam"));   // true
// console.log(isPalindrome("hello"));   // false




// // 4.Find the given number is palindrome or not [Don’t convert number into string ]. 

function isPalindrome(num) {
    // Negative numbers and numbers ending in 0 (except 0 itself) are not palindromes
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
        return false;
    }

    let original = num;
    let reversed = 0;

    while (num > 0) {
        const lastDigit = num % 10;
        reversed = (reversed * 10) + lastDigit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

// Examples
console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false
console.log(isPalindrome(12321)); // true






// 5. Find the given number is armstrong or not, without converting it to string [You can convert it to string to find the count of digits]. 

function isArmstrong(num) {
    // Negative numbers cannot be Armstrong numbers
    if (num < 0) return false;

    // Use string conversion ONLY to find the total number of digits
    const power = num.toString().length;

    let original = num;
    let sum = 0;

    // Process the number mathematically without strings
    while (num > 0) {
        const lastDigit = num % 10;
        sum += Math.pow(lastDigit, power); // Or: lastDigit ** power
        num = Math.floor(num / 10);
    }

    return sum === original;
}

// Examples
console.log(isArmstrong(153));  // true  (1³ + 5³ + 3³ = 153)
console.log(isArmstrong(1634)); // true  (1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634)
console.log(isArmstrong(123));  // false (1³ + 2³ + 3³ = 36 != 123)
console.log(isArmstrong(0));    // true  (0¹ = 0)