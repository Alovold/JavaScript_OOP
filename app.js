
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    addHobby(hobby) {
        this.hobbies = this.hobbies + hobby;
    }
    removeHobby(hobby) {
        this.hobbies = this.hobbies - hobby;
    }
    greeting() {
        console.log(`Hello fellow person!`);
    }
}
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greeting() {
        console.log("Dost thou even code, brogrammer?")
    }
}

console.log("EXERCISE 3:\n==========\n");

let myself = new Person("Austin", 1, "yes", ["gaming", "biking"]);
console.log(myself);
myself.greeting();

let codebro = new Coder ("Code Bro", 2, "basement", ["coding", "eating"]);
console.log(codebro);
codebro.greeting();

console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor(result = 0) {
        this.result = result;
    }
    add(a, b){
        this.result = a + b;
    }
    subtract(a, b){
        this.result = a - b;
    }
    multiply(a, b){
        this.result = a * b;
    }
    divide(a, b){
        this.result = a / b;
    }
    displayResult(){
        console.log(this.result);
    }
}

let calculation = new Calculator();
calculation.divide(8, 2);
calculation.displayResult();