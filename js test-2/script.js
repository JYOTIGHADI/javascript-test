// 1.Reverse an array
// Reverse the elements of an array manually (without using .reverse()).
// Input 1: [1, 2, 3]
// Output 1: [3, 2, 1]
// Input 2: [10, 20, 30]
// Output 2: [30, 20, 10]

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3]));     
console.log(reverseArray([10, 20, 30]));   

console.log("----------------------------------------");


// 2. Find second largest number in an array
// Return the second largest unique number from an array.
// Input 1: [10, 5, 20, 8]
// Output 1: 10
// Input 2: [1, 2, 2, 3]
// Output 2: 2

function secondLargest(arr) {

  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([10, 5, 20, 8])); 
console.log(secondLargest([1, 2, 2, 3])); 


console.log("----------------------------------------");


// 3. Remove duplicates from array
// Return a new array with all duplicates removed (no Set).
// Input 1: [1, 2, 2, 3]
// Output 1: [1, 2, 3]
// Input 2: [5, 5, 5, 1]
// Output 2: [5, 1]

function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3]));   
console.log(removeDuplicates([5, 5, 5, 1]));  

console.log("----------------------------------------");



// 4. Check if two arrays are equal
// Compare if two arrays have same elements in same order.
// Input 1: [1, 2, 3], [1, 2, 3]
// Output 1: true
// Input 2: [1, 2], [2, 1]
// Output 2: false

function arraysequal (arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
          return false;  
        }

    return true;
    }
}
console.log( arraysequal([1, 2, 3], [1, 2, 3]));
console.log( arraysequal([1, 2], [2, 1]));

console.log("----------------------------------------");

// 5. Rotate array k times to the right
// Rotate array elements k times to the right.
// Input 1: [1, 2, 3, 4], k = 2
// Output 1: [3, 4, 1, 2]
// Input 2: [10, 20, 30], k = 1
// Output 2: [30, 10, 20]


function rotateRight(arr, k) {
  for (let i = 0; i < k; i++) {
    let last = arr.pop();      
    arr.unshift(last);         
  }
  return arr;
}

console.log(rotateRight([1, 2, 3, 4], 2));   
console.log(rotateRight([10, 20, 30], 1));  

console.log("----------------------------------------");

// 6. Count vowels in a string
// Count number of vowels (a, e, i, o, u) in a given string.
// Input 1: "hello"
// Output 1: 2
// Input 2: "JAVASCRIPT"
// Output 2: 3

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("hello"));       
console.log(countVowels("JAVASCRIPT"));  

console.log("----------------------------------------");


// 7. Print triangle pattern using loops
// Write a loop to print * pattern based on number of rows.
// Input 1: 3
// Output 1: *\n* *\n* * *
// Input 2: 2
// Output 2: *\n* *

function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i).trim());
  }
}
printTriangle(3);
printTriangle(2);

console.log("----------------------------------------");


// 8. Factorial using recursion
// Calculate factorial of a number using recursion.
// Input 1: 5
// Output 1: 120
// Input 2: 3
// Output 2: 6


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(3));

console.log("----------------------------------------");

// 9. Check if number is prime
// Return true if number is prime (only divisible by 1 and itself).
// Input 1: 7
// Output 1: true
// Input 2: 9
// Output 2: false

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));  
console.log(isPrime(9));  

console.log("----------------------------------------");

// 10. Find Fibonacci number at Nth position
// Return the Nth Fibonacci number (0-indexed).
// Input 1: 5
// Output 1: 5
// Input 2: 6
// Output 2: 8

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));  
console.log(fibonacci(6)); 

console.log("----------------------------------------");



// 11. Count frequency of array elements
// Return an object with count of each element in array.
// Input 1: [1, 2, 2, 3]
// Output 1: {1:1, 2:2, 3:1}
// Input 2: [4, 4, 4]
// Output 2: {4:3}


function countFrequency(arr) {
  let result = {};

  for (let num of arr) {
    if (result[num]) {
      result[num] = result[num] + 1;
    } else {
      result[num] = 1;
    }
  }

  return result;
}

console.log(countFrequency([1, 2, 2, 3]));   
console.log(countFrequency([4, 4, 4]));    

console.log("----------------------------------------");




// 13. Merge two objects
// Combine two objects into one.
// Input 1: {a:1}, {b:2}
// Output 1: {a:1, b:2}
// Input 2: {x:10}, {x:20, y:30}
// Output 2: {x:20, y:30}

function mergeObjects(obj1, obj2) {
  let merged = {};
  for (let key in obj1) {
    merged[key] = obj1[key];
  }
  for (let key in obj2) {
    merged[key] = obj2[key];
  }

  return merged;
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));            
console.log(mergeObjects({ x: 10 }, { x: 20, y: 30 })); 

console.log("----------------------------------------");


// 14. Find key with highest value in object
// Return the key which has the highest numeric value.
// Input 1: {a: 1, b: 5, c: 3}
// Output 1: "b"
// Input 2: {x: 100, y: 99}
// Output 2: "x"


function highestKey(obj) {
  let keys = Object.keys(obj);       
  let maxKey = keys[0];              
  for (let i = 1; i < keys.length; i++) {
    let key = keys[i];
    if (obj[key] > obj[maxKey]) {
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(highestKey({ a: 1, b: 5, c: 3 }));   
console.log(highestKey({ x: 100, y: 99 }));     

console.log("----------------------------------------");




// 16. Check if string is palindrome
// Return true if string reads same forward and backward.
// Input 1: "madam"
// Output 1: true
// Input 2: "hello"
// Output 2: false


function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str === reversed;
}
console.log(isPalindrome("madam"));  
console.log(isPalindrome("hello"));  

console.log("----------------------------------------");



// 17. First non-repeating character
// Return the first character that does not repeat.
// Input 1: "aabbcdd"
// Output 1: "c"
// Input 2: "xxyz"
// Output 2: "y"

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[j] === char) {
        count++;
      }
    }

    if (count === 1) {
      return char;
    }
  }

  return null; 
}

console.log(firstNonRepeatingChar("aabbcdd"));  
console.log(firstNonRepeatingChar("xxyz"));

console.log("----------------------------------------");




// 18. Reverse a string manually
// Reverse a string without using .reverse().
// Input 1: "hello"
// Output 1: "olleh"
// Input 2: "JS"
// Output 2: "SJ"

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello"));  
console.log(reverseString("JS"));     


console.log("----------------------------------------");
