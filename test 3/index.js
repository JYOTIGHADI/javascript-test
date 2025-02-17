// 1.
let num = [1,2,3,4,5,6];
let traget = 4;
function binary(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; 
}

 let nums = [1, 2, 3, 4, 5, 6];
 let target = 4;
 let result = binary(num, target);

console.log(result); 




// 2. Find the Second Smallest Number in an Array
// Question: Given an array of numbers, find the second smallest number without sorting the
// array.
// function secondSmallest(arr) {
// // Your code here
// }
// console.log(secondSmallest([4, 1, 6, 2, 8])); // Output: 2
// console.log(secondSmallest([10, 20, 30, 5, 7])); // Output: 7
// Concepts: Loops, conditional statements.
function secondSmallest(arr){
let smallest = Infinity, secondSmallest = Infinity;
for(let num of arr){
    if(num < smallest){
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
    }
}
return secondSmallest;
}

console.log(secondSmallest([4, 1, 6, 2, 8]));
console.log(secondSmallest([10, 20, 30, 5, 7]));



// 3. Reverse Words in a Sentence Without Using Built-in Methods
// Question: Reverse the words in a sentence while keeping their original order. Do not use
// built-in methods like split() or reverse().
// function reverseWords(sentence) {
// // Your code here
// }
// console.log(reverseWords("hello world")); // Output: "olleh dlrow"
// console.log(reverseWords("JavaScript is fun")); // Output:
// "tpircSavaJ si nuf"
// Concepts: Loops, strings, arrays.

function reverseWords(sentence) {
    let result = "";
    let word = "";

    for (let i = 0; i <= sentence.length; i++) {
        if (i === sentence.length || sentence[i] === ' ') {
            
            let reversedWord = "";
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j];
            }

            result += reversedWord;

            
            if (i !== sentence.length) {
                result += " ";
            }

            // Reset word for the next one
            word = "";
        } else {
            word += sentence[i];
        }
    }

    return result;
}

console.log(reverseWords("hello world")); 
console.log(reverseWords("JavaScript is fun")); 

// 4. Find the Missing Number in an Array
// Question: You have an array of numbers from 1 to n with one missing number. Find the missing
// number efficiently.
// function findMissingNumber(arr, n) {
// // Your code here
// }
// console.log(findMissingNumber([1, 2, 4, 5], 5)); // Output: 3
// console.log(findMissingNumber([1, 3, 4, 5, 6], 6)); // Output: 2
// Concepts: Arithmetic operations, loops.

    function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5], 5)); 
console.log(findMissingNumber([1, 3, 4, 5, 6], 6)); 



// 5. Implement a String Compression Algorithm
// Question: Given a string, compress it by replacing consecutive duplicate characters with the
// character followed by the count.
// function compressString(str) {
// // Your code here
// }
// console.log(compressString("aaabbcddd")); // Output: "a3b2c1d3"
// console.log(compressString("abc")); // Output: "a1b1c1"
// console.log(compressString("aabbccddeee")); // Output: "a2b2c2d2e3"
// Concepts: Loops, string manipulation.

function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    return compressed;
}

console.log(compressString("aaabbcddd")); 
console.log(compressString("abc")); 
console.log(compressString("aabbccddeee")); 






















