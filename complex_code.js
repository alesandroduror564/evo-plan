/*
* Filename: complex_code.js
* Description: A sophisticated and elaborate JavaScript code demonstrating various advanced concepts and techniques.
*/

// Constants
const PI = 3.14159;
const MAX_ATTEMPTS = 10;

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Class representing a Shape
class Shape {
  constructor() {
    this.name = "Shape";
  }

  displayName() {
    console.log("Shape: " + this.name);
  }
}

// Class representing a Rectangle extending Shape
class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.name = "Rectangle";
    this.length = length;
    this.width = width;
  }

  displayName() {
    console.log("Rectangle: " + this.name);
  }

  calculateArea() {
    return this.length * this.width;
  }
}

// Class representing a Circle extending Shape
class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = "Circle";
    this.radius = radius;
  }

  displayName() {
    console.log("Circle: " + this.name);
  }

  calculateArea() {
    return PI * this.radius * this.radius;
  }

  calculateCircumference() {
    return 2 * PI * this.radius;
  }
}

// Function to generate a random number within a range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  return str === reverseString(str);
}

// Recursive function to calculate Fibonacci series
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Utility function to format a number as currency
function formatCurrency(value, sign = "$") {
  return sign + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Example usage of the code

const rectangle = new Rectangle(5, 10);
rectangle.displayName();
console.log("Area: " + rectangle.calculateArea());

const circle = new Circle(7);
circle.displayName();
console.log("Area: " + circle.calculateArea());
console.log("Circumference: " + circle.calculateCircumference());

const randomNumber = generateRandomNumber(1, 100);
console.log("Random Number: " + randomNumber);

const reversedString = reverseString("Hello");
console.log("Reversed String: " + reversedString);

console.log("Is Palindrome: " + isPalindrome("madam"));

console.log("Fibonacci Sequence:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}

console.log("Formatted Currency: " + formatCurrency(123456));