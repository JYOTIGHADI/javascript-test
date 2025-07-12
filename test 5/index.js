//1. Convert a Roman Numeral to an Integer
function romanToInt(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }
    
    return total;
}
//Example Test Cases
console.log(romanToInt("XII")); 
console.log(romanToInt("IX")); 
console.log(romanToInt("MCMXCIV")); 

// 2. Move All Zeros to the End of an Array

function moveZerosToEnd(arr) {
    let nonZeroElements = arr.filter(num => num !== 0);
    let zeroCount = arr.length - nonZeroElements.length;
    return [...nonZeroElements, ...Array(zeroCount).fill(0)];
}
console.log(moveZerosToEnd([0, 1, 0, 3, 12])); 
console.log(moveZerosToEnd([0, 0, 1, 0, 5])); 
console.log(moveZerosToEnd([4, 2, 0, 0, 1])); 

// 3. Generate All Substrings of a Given String

function generateSubstrings(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let substring = "";
        for (let j = i; j < str.length; j++) {
            substring += str[j];
            result.push(substring);
        }
    }

    return result;
}


console.log(generateSubstrings("abc")); 
console.log(generateSubstrings("dog")); 
console.log(generateSubstrings("xy")); 

