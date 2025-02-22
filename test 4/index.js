//1.find the Third Largest number in an arrey.
// function thirdLargest(arr) {

// }
// console.log(thirdLargest([4,1,6,2,8,10]));//output 6
// console.log(thirdLargest([10,20,30,5,7]));//output 10
//concepts loops,conditional satetment


function thirdLargest(arr) {
    if (arr.length < 3) {
        return null; 
    }

    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }

    return third;
}

console.log(thirdLargest([4, 1, 6, 2, 8, 10])); 
console.log(thirdLargest([10,20,30,5,7]));



// //2. Reverse a number
// function reverseNumbers (num){

// }
// console.log(reverseNumbers(1234));  //output:4321
// console.log(reverseNumbers(-567));  //output:-765
// //concepts loops, arithmetical operations


function reverseNumber(num) {
    const isNegative = num < 0;
    num = Math.abs(num);
    let reversed = 0;
    while (num > 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    
    return isNegative ? -reversed : reversed;
}

console.log(reverseNumber(1234)); 
console.log(reverseNumber(-567)); 


// 3. Check if Two Strings are Anagrams
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    let freq = {};
    
    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    for (let char of str2) {
        if (!freq[char]) return false;
        freq[char]--;
    }
    
    return true;
}
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));

// 4. Find the First Non-Repeating Character
function firstNonRepeatingChar(str) {
    let freq = {};
    
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    for (let char of str) {
        if (freq[char] === 1) return char;
    }
    
    return null;
}
console.log(firstNonRepeatingChar("aabbccddeffg")); 
console.log(firstNonRepeatingChar("hello")); 

// 5. Find the Longest Word in a Sentence
function longestWord(sentence) {
    let longest = "", currentWord = "";
    
    for (let i = 0; i <= sentence.length; i++) {
        let char = sentence[i] || " ";
        
        if (char !== " ") {
            currentWord += char;
        } else if (currentWord.length > 0) {
            if (currentWord.length > longest.length) {
                longest = currentWord;
            }
            currentWord = "";
        }
    }
    
    return longest;
}
console.log(longestWord("JavaScript is an amazing language")); 
console.log(longestWord("I love coding")); 






























