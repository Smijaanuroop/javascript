// Print numbers from 1 to 10.
 
// [...Array(10)].forEach((_, i) => console.log(i + 1));

// Array.from({ length: 10 }, (_, i) => console.log(i + 1));

// const numbers = [...Array(10)].map((_, i) => i + 1); // Spread operator
// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const numbers1 = Array.from({ length: 10 }, (_, i) => i + 1);
// console.log(numbers1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]







// Print numbers from 10 to 1.

[...Array(10)].forEach((_, i) => console.log(10 - i));

const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

numbers.reverse().forEach(num => console.log(num));