// basic 
// class Student{
// constructor(name,age){
//     this.name=name;
//     this.age=age;
// }
// displayDetails(){
//     console.log(this.name)
//     console.log(this.age)
// }

// }

// const S1 = new Student("A",10);
// const S2 = new Student("B",20);

// S1.displayDetails();
// S2.displayDetails();




//Encapsulation
 

// class BankAccount {
//     #balance
//     constructor(initialBalance) {
//         this.#balance=initialBalance
//     }
//     deposit(amount){
//         if (amount>0) {
//             this.#balance+=amount;
//         }else{
//             console.log("Invalid deposit amount!")
//         }
//     }
//     getBalance(){
//         return this.#balance;
//     }
// }
// const account = new BankAccount(1000);
// account.deposit(500);
// console.log(account.getBalance())





// Inheritance

// class Person  {
//     constructor(name) {
//         this.name= name;
//             }
//             learn(){
//                 console.log(this.name+"learning")
//             }
// }

// class Parent extends Person {
//         dance(){
//         console.log(this.name+"dancing")
//         this.age=this.age;
//      }
        
    // }
// const p1 = new Parent("A")
// p1.learn();
// p1.dance();





// class Person  {
//     constructor(name) {
//         this.name= name;
//             }
//             learn(){
//                 console.log(this.name+"learning")
//             }
// }



// class Child extends Person {
// constructor(name, age){

//     super(name);
//     this.age= age;
//     }
//     display(){

//         console.log(this.name + this.age)
//     }

// }
// const p2 = new Child("A" , 12)
// p2.learn();
// p2.display();






                            // Polymorphism


class Animal {
    makeSound() { console.log("Animal makes a sound")
        
    }
}

class Dog extends Animal {
makeSound() { console.log("Dog barks")
        
    }
}

class Cat extends Animal {
makeSound() { console.log("Cat meows")
        
    }
}

const animals=[new Dog(), new Cat(), new Animal()];
for(const animal of animals){
    animal.makeSound()
}