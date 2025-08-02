// 1. Rotate String Comparison
// Problem: Write a function that checks whether one string is a rotation of another. Rotation means you can shift characters from the start to the end.
// Input:
// str1 = "waterbottle"
// str2 = "erbottlewat"
// Output:
// True

function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let combined = str1 + str1;

    return combined.includes(str2);
}
console.log(isRotation("waterbottle", "erbottlewat"));



// 2. Longest Consecutive Subsequence (Unsorted Array)
// Problem: Given an unsorted array of integers, find the length of the longest sequence of consecutive numbers.
// Note: The consecutive numbers can be in any order in the array. Your solution must run in O(n) time.


// Example 1:
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive sequence is [1, 2, 3, 4].

// Example 2:
// Input: [0, 3, 7, 2, 5, 8, 4, 6, 1]
// Output: 9

function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {

        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 1]));



// 3. Longest Substring Without Repeating Characters
// Problem: Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with length 3.

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b".

// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with length 3.

function lengthOfLongestSubstring(s) {
    let longest = 0;
    let current = "";

    for (let char of s) {
        if (current.includes(char)) {

            current = current.slice(current.indexOf(char) + 1);
        }
        current += char;
        longest = Math.max(longest, current.length);
    }

    return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

console.log(lengthOfLongestSubstring("bbbbb"));

console.log(lengthOfLongestSubstring("pwwkew"));



