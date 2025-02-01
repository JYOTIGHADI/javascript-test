//1. Swap Two Variables Without Using a Third Variable
//Question: Swap two numbers a and b without using a third variable.
//let a = 5, b = 10;
// Your code here
//console.log(a, b); // Output: 10, 5
//Concepts: Variables, operators.
 

let a = 5, b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); 


//2. Find the Largest of Three Numbers
//Question: Write a function to find the largest of three numbers using conditional statements.
//javascript
//CopyEdit
//function findLargest(a, b, c) {
// Your code here
//}
//console.log(findLargest(3, 7, 5)); // Output: 7
//Concepts: Conditional statements (if-else).
 
let num1 = 3;
let num2 = 7;
let num3 = 5;

if (num1 >= num2 && num1 >= mum3) {
  console.log(`largest no is ${num1}`);
} else if (num2 >= num3 && num2 >= num1) {
  console.log(`largest no is ${num2}`);
} else {
  console.log(`largest no is ${num3}`);
}


//3. Check If a Number is Prime
//Question: Write a function to check whether a given number is prime.
//javascript
//CopyEdit
//function isPrime(num) {
// Your code here
//}
//console.log(isPrime(7)); // Output: true
//console.log(isPrime(10)); // Output: false
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  
console.log(isPrime(10)); 


 
//4. Reverse an Array Without Using Built-in Methods
//: Reverse an array using a loop instead of built-in methods.
//javascript
//CopyEdit
//function reverseArray(arr) {
// Your code here
//}
//console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
//Concepts: Loops, arrays.

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4])); 

//5. Sum of Even Numbers in an Array
//Question: Write a function to find the sum of all even numbers in an array.
//javascript
//CopyEdit
//function sumEvenNumbers(arr) {
// Your code here
//}
//console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12
//Concepts: Arrays, loops, operators.

function sumEvenNumbers(arr) {
  return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

//9. Find Factorial of a Number (Using Loop)
//Question: Write a function to find the factorial of a given number using a loop.
//javascript
//CopyEdit
//function factorial(n) {
// Your code here
//}
//console.log(factorial(5)); // Output: 120
//Concepts: Loops, operators.

function factorial(n) {
  if (n < 0) return "Invalid input"; 
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

console.log(factorial(5)); 

