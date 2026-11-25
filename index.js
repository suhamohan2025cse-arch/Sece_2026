
let a = 5;
let b = 10;
let c;
let d = "suha";

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

// Normal function
function greetUser(name) {
    console.log("Hello " + name);
}

// Function expression
let greetuser2 = function(name, age) {
    console.log("Hello " + name + ", you are " + age + " years old.");
};

greetuser2("Charlie", 25);

console.log(2 + 2);

// Return function
function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(5, 10);
console.log(result);

// Subtraction
function subNumbers(num1, num2) {
    return num1 - num2;
}

let subResult = subNumbers(10, 5);
console.log(subResult);

// Arrow function
let greet3 = (name, age) => {
    console.log(`My name is ${name} and I am ${age} years old`);
};

// Callback function
function greetWithCallback(name, age, callback) {
    callback(name, age);
    console.log(`Good morning ${name}, you are ${age} years old`);
}

greetWithCallback("Suha", 20, greet3);

// A function to print Hello
function print() {
    console.log("Hello");
}

// setInterval with clearInterval (runs once after 2 seconds)
//const id = setInterval(() => {
  //  print();
    //clearInterval(id);
//}, 2000);

// setTimeout (runs after 3 seconds)
//setTimeout(() => {
  //  console.log("Hello after 3 seconds");
//}, 3000);
let userdetails = {
    name: "Suha",
    age: 20,
    city: "New York",
    isActive: true,
};

 const displayUserDetails = () => {
    userdetails.name = "Suha";
    console.log(userdetails.name);
    userdetails.age = 20;
    console.log(userdetails.age);      }
    displayUserDetails();

    let array=[1,2,3,4,5];
    const doubleArray = array.map((num) => num * 2);
    const filteredArray = array.filter((num) => num % 2 === 0);
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(doubleArray);
    console.log(filteredArray);
    console.log(sum);

    let array2 = [...array,20,30];
    console.log(array2);

    let newarray=[10,20,30,40,50,60,70,80,90,100];
    const doubleNewArray = newarray.map((num) => num + 2);
    const filteredNewArray = newarray.filter((num)=>num % 5 ===0);
    const sumNewArray = newarray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    console.log(doubleNewArray);
    console.log(filteredNewArray);
    console.log(sumNewArray);