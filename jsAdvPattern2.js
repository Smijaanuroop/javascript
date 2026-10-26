// Print numbers from 1 to 10.
 
// [...Array(10)].forEach((_, i) => console.log(i + 1));

// Array.from({ length: 10 }, (_, i) => console.log(i + 1));

// const numbers = [...Array(10)].map((_, i) => i + 1); // Spread operator
// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const numbers1 = Array.from({ length: 10 }, (_, i) => i + 1);
// console.log(numbers1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }





// Print numbers from 10 to 1.



// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// [...Array(10)].forEach((_, i) => console.log(10 - i));



// const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

// numbers.reverse().forEach(num => console.log(num));



// Print all even numbers between 1 and 50. 

// for (let i = 2; i <= 50; i += 2) {
//   console.log(i);
// }



//  Print all odd numbers between 1 and 50.

// for (let i = 1; i <= 50; i += 2) {
//   console.log(i);
// }


// Find the sum of numbers from 1 to 100. 

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of numbers from 1 to 100 is: ${sum}`); // Output: 5050






// Find the sum of even numbers from 1 to 100.

let Esum = 0;
for (let i = 2; i <= 100; i += 2) {
  Esum += i;
}
console.log(`The sum of even numbers from 1 to 100 is : ${Esum}`); // Output: 2550



//  Find the sum of odd numbers from 1 to 100

let Osum = 0;
for (let i = 1; i <= 100; i += 2) {
  Osum += i;
}
console.log(`The sum of odd numbers from 1 to 100 is: ${Osum}`); // Output: 2500




//  Print the multiplication table of 7. 
console.log("Multiplication Table of 7 :")
for (let i = 1; i <= 10; i++) {
  
  console.log(`7 x ${i} = ${7 * i}`);
}


// Find the factorial of 6. 

let factorial = 1;
for (let i = 1; i <= 6; i++) {
  factorial *= i;
}
console.log(`Factorial of 6 is:${factorial}`); // Output: 720


// Count how many numbers between 1 and 100 are divisible by 3. 

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    count++;
  }
}

console.log(`Total count of  numbers between 1 and 100 are divisible by 3 is:${count}`); // Output: 33

// Print the square of numbers from 1 to 20. 

for (let i = 1; i <= 20; i++) {
  console.log(`The square of ${i} is: ${i * i}`);
}




// Print the cube of numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(`The cube of ${i} is ${i * i * i}`);
}


let cubesN = [];

for (let i = 1; i <= 10; i++) {
  // i ** 3 multiplies i by itself 3 times
  cubesN.push(i ** 3); 
}

console.log(cubesN); 
// Output: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

const cubes = Array.from({ length: 10 }, (_, i) => (i + 1) ** 3);

console.log(cubes); 
// Output: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

// Print the first 10 multiples of 4.
console.log("Multiples of 4:");
for (let i = 1; i <= 10; i++) {
  console.log(4 * i);
}




// Find the sum of squares from 1 to 10. 
let sumS = 0;
for (let i = 1; i <= 10; i++) {
  sumS += i * i;
}
console.log("Sum of squares from 1 to 10 is:");
console.log(sumS); // Output: 385



// Find the sum of cubes from 1 to 5. 
let sumCubes = 0;
for (let i = 1; i <= 5; i++) {
  sumCubes += i ** 3;
}
console.log("Sum of cubes from 1 to 5 is:");
console.log(sumCubes); // Output: 225

//  Print the numbers from 1 to 100 that are divisible by both 3 and 5.

console.log("numbers from 1 to 100 that are divisible by both 3 and 5 are:");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}


console.log("numbers from 1 to 100 that are divisible by both 3 and 5 are:");
for (let i = 15; i <= 100; i += 15) {
  console.log(i);
}
// Prints: 15, 30, 45, 60, 75, 90



//  Check if a number is a prime (using loops).
function isPrime(number) {
  // Numbers less than or equal to 1 are not prime
  if (number <= 1) {
    return false;
  }

  // Check for divisors up to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Found a divisor, so it's not prime
    }
  }

  return true; // No divisors found, it is prime
}

// Test cases
console.log(isPrime(11)); // Output: true
console.log(isPrime(4));  // Output: false
console.log(isPrime(1));  // Output: false


// Print all prime numbers between 1 and 50. 

function isPrime(number) {
  if (number <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false; 
  }
  return true;
}

console.log("Prime numbers between 1 and 50:");

for (let currentNum = 1; currentNum <= 50; currentNum++) {
  if (isPrime(currentNum)) {
    console.log(currentNum);
  }
}


// Print the Fibonacci series up to n terms (numbers only). 

function printFibonacci(n) {
  if (n <= 0) return;
  
  let a = 0;
  let b = 1;
  
  for (let i = 1; i <= n; i++) {
    console.log(a);
    let nextTerm = a + b;
    a = b;
    b = nextTerm;
  }
}

   console.log(`Fibonacci series up to ${10}`);
// Example: Print the first 10 terms
printFibonacci(10);