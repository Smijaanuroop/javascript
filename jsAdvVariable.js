// let age = 25;

// const age = 25;
// // age = 26;


// console.log(age)


// Template literals

// age= `25`;

// age1= 26;
// console.log(`${age1}`)


// const user = {name:"sneha",age:24,role:"developer"}
// const {name,age,role} = user
//  console.log(name)
//  console.log(age)
//  console.log(role)

//  const numbers = [10,20,30]
//  const [first,second,third] = numbers
//  console.log(first)
//  console.log(second)
//  console.log(third)


// Object Destructuring
const user = {name: "Sneha", age:24, role:"Developer"}
const {name, age, role} = user
console.log(name)
console.log(age)
console.log(role)

// Array Destructuring
 const numbers = [10,20,30]
 const [first, second, third] = numbers
 console.log(first)
 console.log(second)
 console.log(third)



//  arrow function
// const add= (a,b) =>a+b;
// const result = add(2,4);
// console.log(result)

// function add(a,b) {
//     return a+b;
    
// }
// let result = add(3,6);
// console.log(result);




//  call back function
//  const isEven =(a)=>a%2===0;
//  const result = isEven(9)
//  console.log(result)

//   if( result === true){console.log("Even")} 
//  else {console.log("odd");}


  const isEven = (a)=>{return a%2===0}
  console.log(isEven(6))



// const isEven = (number )=> {return number%2===0}
// console.log(isEven(16))


