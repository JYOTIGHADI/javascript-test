//1. Multiply Two Numbers Without Using * Operator
//Question: Multiply two numbers a and b without using the * operator.
//javascript
//CopyEdit
//function multiply(a, b) {
// Your code here
//}
//console.log(multiply(3, 4)); // Output: 12
//console.log(multiply(-2, 6)); // Output: -12
//Concepts: Loops, operators, recursion.

console.log("1.multiply two numbers using oprator:");
function multiply(a, b) {
    if (b === 0) return 0;
    if (b > 0) return a + multiply(a, b - 1);
    if (b < 0) return -multiply(a, -b);
}

console.log(multiply(3, 4));  
console.log(multiply(-2, 6)); 


//2. Find the Smallest of Three Numbers
//Question: Write a function to find the smallest of three numbers using conditional statements.
//javascript
//CopyEdit
//function findSmallest(a, b, c) {
// Your code here
//}
//console.log(findSmallest(3, 7, 5)); // Output: 3
//console.log(findSmallest(10, -1, 0)); // Output: -1
//Concepts: Conditional statements (if-else).

console.log("2.find the smallest of three numbers using conditional statements ");
function findSmallest(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findSmallest(3, 7, 5)); 
console.log(findSmallest(10, -1, 0)); 


//3. Reverse a String Without Using Built-in Methods
//Question: Reverse a given string using a loop instead of built-in methods.
//javascript
//CopyEdit
//function reverseString(str) {
// Your code here
//}
//console.log(reverseString("hello")); // Output: "olleh"
//console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

console.log("3.Reverse a given string using a loop instead of built-in methods");
function reverseString(str) {
    let reversed = "";  

    for (let i = str.length - 1; i >= 0; i--) {  
        reversed += str[i];  
    }

    return reversed;  
}

console.log(reverseString("hello")); 
console.log(reverseString("JavaScript"));  


//4. Count the Occurrences of Each Character in a String
//Question: Write a function that takes a string and returns an object with the count of each character.
//javascript
//CopyEdit
//function charCount(str) {
// Your code here
//}
//console.log(charCount("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
//console.log(charCount("banana")); // Output: { b: 1, a: 3, n: 2 }
//Concepts: Loops, objects, strings.

console.log("4.takes a string and returns an object with the count of each character");
    function charCount(str) {
        let count = {}; 
    
        for (let char of str) {
            count[char] = (count[char] || 0) + 1;
        }
    
        return count;
    }
    
    console.log(charCount("hello")); 
    console.log(charCount("banana")); 
    
    //5. Find the Intersection of Two Arrays
    //Question: Write a function to find the common elements between two arrays.
    //javascript
    //CopyEdit
    //function arrayIntersection(arr1, arr2) {
    // Your code here
    //}
    //console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
    //console.log(arrayIntersection([10, 20, 30], [15, 25, 30])); // Output: [30]
    //Concepts: Arrays, loops, sets.

 console.log("5.find the common elements between two arrays");
function arrayIntersection(arr1, arr2) {
    return [...new Set(arr1)].filter(item => arr2.includes(item));
}

// Test cases
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
console.log(arrayIntersection([10, 20, 30], [15, 25, 30])); 




    
