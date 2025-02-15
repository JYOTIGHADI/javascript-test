//1. Swap Two Variables Without Using a Third Variable
 let a = 5, b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); 

//2. Find the Largest of Three Numbers
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

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4])); 

//5. Sum of Even Numbers in an Array
function sumEvenNumbers(arr) {
  return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); 

//6. Count the Number of Vowels in a String
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU"; 

  for (let char of str) {
      if (vowels.includes(char)) {
          count++;
      }
  }
  
  return count;
}

console.log(countVowels("hello world")); 
console.log(countVowels("JavaScript")); 
console.log(countVowels("AEIOU")); 

//7. Find the Second Largest Number in an Array
function secondLargest(arr) {
  if (arr.length < 2) {
      return "Array must have at least two elements";
  }

  let first = -Infinity, second = -Infinity;

  for (let num of arr) {
      if (num > first) {
          second = first;
          first = num;
      } else if (num > second && num !== first) {
          second = num;
      }
  }

  return second === -Infinity ? "No second largest number" : second;
}

console.log(secondLargest([10, 20, 4, 45, 99])); 
console.log(secondLargest([5, 5, 5])); 
console.log(secondLargest([100])); 

//8. Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
console.log(removeDuplicates([10, 20, 20, 30, 40, 50, -(removeDuplicates([1, 1, 1, 1, 1]))

//9. Find Factorial of a Number (Using Loop)

function factorial(n) {
  if (n < 0) return "Invalid input"; 
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

console.log(factorial(5));

//10. Check if an Array is Sorted (Ascending Order)
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
          return false;
      }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); 
console.log(isSorted([1, 3, 2, 4, 5])); 
console.log(isSorted([10, 20, 30, 40]));
console.log(isSorted([5, 4, 3, 2, 1])); 
console.log(isSorted([1])); 
console.log(isSorted([])); 
