
// // // // objects and attibutes and properites and functions 


// // // const person1 = {
// // //     firstName : "Spongebob",
// // //     lastName : "Squarepants",
// // //     age: 30,
// // //     isEmployed :true,
// // //     say: function()
// // //         {console.log("hi, i am spongebob! ")}
// // // }

// // // console.log(person1.firstName)
// // // console.log(person1.say())


// // // const person2 = {
// // //     firstName : "Patrick",
// // //     lastName : "Star",
// // //     age: 28,
// // //     isEmployed :false

// // // } 

// // // console.log(person2.firstName)


// // // We are going to practice the concept of encapsulation 



// // // class is the blueprint while the objects is the actual thing 


// // let animal = class Pet{
// //     #hunger
// //     #energy

// //     constructor(name){
// //         // we need to come up with a method that accepts and validates the name 
// //         if (typeof name !="string" || name.trim() === ""){
// //             throw new Error("Name must be a non-empty string")
// //         }

        
// //         this.name = name 
// //         this.#hunger = 50
// //         this.#energy = 50

// //     }


// //     get hunger(){
// //         // you cant forget the this bro its like referring to the property of the object 
// //         return this.#hunger
// //     }

// //     get energy(){
// //         // we are retruning the value and not assigning it 
// //         return this.#energy 
// //     }
// //     get status(){
// //         if (this.#hunger >=80)
// //             {
// //             return "starving"
// //             }
        
// //         if (this.#energy <= 20){
// //             return "tired"
// //         }
// //         return "happy"
// //     }

// //     // so we include the # cuz we only want private methods inside the class to be accessed inside the class and not outside of the class
// //     #clamp(value){
// //         return Math.min(100,Math.max(0,value))

// //     }

// //     feed(amount){
// //         if (!Number.isFinite(amount) || amount <= 0) {
// //             throw new Error("Invalid amount");
// //         }
// //         this.#hunger = this.#clamp(this.#hunger - amount);
// //         return this.status;
// //     }




// // }
// // // dont forget to add your const cuz the get method calls the method for u 
// // const pet = new Pet("Dog")


// // console.log(pet.feed(100))


// // // in simple terms encapsulation means that it is deciding who can touch what in the class and who can change one (get and set)


// // console.log("Hello world")

// // the way of seeing the ouput on my terminal is using node so u just say node and then the file name 


// // creating class and objects 
// // when we are creating a class we should always have a constructor function at first 


// class User {
//     //we have to indiate this variables using the constructor 
//     // to access the variables inside the class we have to use the this keyword 

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
        
//     };
//     getName(){
//         return this.name
//     };


// };


// // Now we create an object 
// // when we create an object we need to use the new keyword 
// let person1 = new User("Aishwarya","21")
// // when we are calling a function we use the ()
// console.log(person1.getName())

// // methods should be outside the constructor 
// // constructors should only be used to initialise the variables

// // objects are being created using the class blueprint 
// // functions are methods inside the class 


// // the 4 pillars of OOP 
// // the first one is abstracion 


// // now we are going to practice abstraction

// // 1. create a coffee machiene class

// class coffeeMachine{
    
//     makeCoffee(){
//         boilWater()
//         addCoffee()
//         pour()
//     }
// }


// let machine1 = coffeeMachine
// console.log(machine1.makeCoffee())


// practice of abstraction 








