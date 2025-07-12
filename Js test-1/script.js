// 1. Count Even and Odd Numbers
//  Write a function that takes an array of numbers and returns how many are even and how many are odd.
//  Input 1: [2, 3, 4, 5]
//  Output 1: { even: 2, odd: 2 }
//  Input 2: [11, 14, 16, 17, 19]
//  Output 2: { even: 2, odd: 3 }

function countEvenOdd(numbers) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return { even: even, odd: odd };
}
console.log(countEvenOdd([2, 3, 4, 5]));
console.log(countEvenOdd([11, 14, 16, 17, 19]));

console.log("----------------------------------------");



// 2. Grade Distribution
//  Given an array of marks, return how many students scored in grade ranges: A (90+), B (80-89), C (70-79),
// D (60-69), F (<60).
//  Input 1: [95, 82, 67, 50]
//  Output 1: { A: 1, B: 1, C: 0, D: 1, F: 1 }
//  Input 2: [91, 59, 76, 88]
//  Output 2: { A: 1, B: 1, C: 1, D: 0, F: 1 }  

function gradeDistribution(marks) {
  let grades = { A: 0, B: 0, C: 0, D: 0, F: 0 };

  for (let i = 0; i < marks.length; i++) {
    let score = marks[i];

    if (score >= 90) {
      grades.A++;
    } else if (score >= 80) {
      grades.B++;
    } else if (score >= 70) {
      grades.C++;
    } else if (score >= 60) {
      grades.D++;
    } else {
      grades.F++;
    }
  }

  return grades;
}
console.log(gradeDistribution([95, 82, 67, 50]));
console.log(gradeDistribution([91, 59, 76, 88]));

console.log("----------------------------------------");



// 3. All Positive Numbers?
//  Check if all elements in the array are greater than 0 using `every()`.
//  Input 1: [1, 2, 3, 4]
//  Output 1: true
//  Input 2: [-1, 0, 5]
//  Output 2: false

function allPositive(numbers) {
  return numbers.every(num => num > 0);
}
console.log(allPositive([1, 2, 3, 4]));
console.log(allPositive( [-1, 0, 5]));

console.log("----------------------------------------");



// 4. Find First Number Greater Than 50
//  Return the first number in the array greater than 50 using find or loop.
//  Input 1: [10, 25, 60, 40]
//  Output 1: 60
//  Input 2: [45, 52, 19]
//  Output 2: 52

function firstGreaterThan50(arr){
  return arr.find(num => num > 50);
}
console.log( firstGreaterThan50([10, 25, 60, 40]));
console.log( firstGreaterThan50( [45, 52, 19]));

console.log("----------------------------------------");



// 5. Leap Year Checker
//  Check if a year is a leap year (divisible by 4 but not 100, unless divisible by 400).
//  Input 1: 2024
//  Output 1: true
//  Input 2: 2023
//  Output 2: false

function isLeapYear(year){
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));

console.log("----------------------------------------");



// 6. Double the Elements
//  Using `map()`, return a new array where every number is multiplied by 2.
//  Input 1: [1, 2, 3]
//  Output 1: [2, 4, 6]
//  Input 2: [5, 10]
//  Output 2: [10, 20]

function  DoubleElements(arr){
  return arr.map(num => num * 2);
}
console.log( DoubleElements([1, 2, 3]));
console.log( DoubleElements([5, 10]));

console.log("----------------------------------------");



// 7. Filter Out Even Numbers
//  Return a new array with only the odd numbers using `filter()`.
//  Input 1: [1, 2, 3, 4, 5]
//  Output 1: [1, 3, 5]
//  Input 2: [10, 15, 20, 25]
//  Output 2: [15, 25]

function  filterOddNumbers(arr){
  return arr.filter( num => num % 2 !== 0);
}
console.log(filterOddNumbers( [1, 2, 3, 4, 5]));
console.log(filterOddNumbers([10, 15, 20, 25]));

console.log("----------------------------------------");



// 8. Total Character Count in Strings
//  Return the total number of characters in an array of strings using `reduce()`.
//  Input 1: ['hi', 'world']
//  Output 1: 7
//  Input 2: ['a', 'ab', 'abc']
//  Output 2: 6

function  TotalCharacterCount(arr){
  return arr.reduce((total, word) => total + word.length, 0);
}
console.log(TotalCharacterCount(['hi', 'world']));
console.log(TotalCharacterCount(['a', 'ab', 'abc']));

console.log("----------------------------------------");



// 9. Get Last 3 Items
//  Return the last 3 items in the array using `slice()`.
//  Input 1: [1, 2, 3, 4, 5]
//  Output 1: [3, 4, 5]
//  Input 2: [10, 20, 30, 40]
//  Output 2: [20, 30, 40]

function getLastThreeItems(arr){
  return arr.slice(-3);
}
console.log(getLastThreeItems( [1, 2, 3, 4, 5]));
console.log(getLastThreeItems(  [10, 20, 30, 40]));

console.log("----------------------------------------");



// 10. Remove Element at Index 2
//  Use `splice()` to remove the element at index 2.
//  Input 1: [1, 2, 3, 4]
//  Output 1: [1, 2, 4]
//  Input 2: [10, 11, 12, 13]
//  Output 2: [10, 11, 13]

function  removeAtIndex2(arr){
     arr.splice(2, 1);
     return arr;
}
console.log( removeAtIndex2([1, 2, 3, 4]));
console.log( removeAtIndex2([10, 11, 12, 13]));

console.log("----------------------------------------");



// 11. Capitalize First Letter
//  Return a new array where each word starts with an uppercase letter.
//  Input 1: ['hello', 'world']
//  Output 1: ['Hello', 'World']
//  Input 2: ['code', 'test']
//  Output 2: ['Code', 'Test']

function CapitalizeFirstLetters(arr){
  return arr.map(word => word[0].toUpperCase() + word.slice(1));
}
console.log(CapitalizeFirstLetters( ['hello', 'world']));
console.log(CapitalizeFirstLetters( ['code', 'test']));

console.log("----------------------------------------");



// 12. Check Divisibility by 5
//  Use `some()` to check if at least one number in the array is divisible by 5.
//  Input 1: [3, 6, 10, 14]
//  Output 1: true
//  Input 2: [2, 4, 6]
//  Output 2: false

function Divisibilityby5(arr){
  return arr.some( num => num % 5 === 0);
}
console.log( Divisibilityby5([3, 6, 10, 14]));
console.log( Divisibilityby5([2, 4, 6]));

console.log("----------------------------------------");



// 13. Find Index of First Negative
//  Return the index of the first negative number, or -1 if none found.
//  Input 1: [1, 2, -3, 4]
//  Output 1: 2
//  Input 2: [5, 7, 8]
//  Output 2: -1

function firstnegativeIndex(arr){
  return arr.findIndex(num => num < 0);
}
console.log(firstnegativeIndex([1, 2, -3, 4]));
console.log(firstnegativeIndex([5, 7, 8]));

console.log("----------------------------------------");



// 14. Count Word Frequencies
//  Return an object where the keys are words and values are how many times each appears.
//  Input 1: ['apple', 'banana', 'apple']
//  Output 1: { apple: 2, banana: 1 }
//  Input 2: ['x', 'x', 'y']
//  Output 2: { x: 2, y: 1 }

function CountWordFrequencies(arr){
  let result ={};
   

for(let i = 0; i < arr.length; i++){
  let word = arr[i];{
    if (result[word]){
      result[word]++;
    }
    else{
      result[word] = 1;
    }
  }
}
 return result;
}
console.log(CountWordFrequencies(['apple', 'banana', 'apple']));
console.log(CountWordFrequencies( ['x', 'x', 'y']));


console.log("----------------------------------------");



// 16. Convert Array to Object by ID
//  Convert an array of objects to a single object where keys are IDs and values are names.
//  Input 1: [{id:1, name:'A'}, {id:2, name:'B'}]
//  Output 1: { 1: 'A', 2: 'B' }
//  Input 2: [{id:3, name:'X'}, {id:4, name:'Y'}]
//  Output 2: { 3: 'X', 4: 'Y' }

function convertToIdObject(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    result[item.id] = item.name;
  }

  return result;
}

 console.log(convertToIdObject([{id:1, name:'A'}, {id:2, name:'B'}]));
 console.log(convertToIdObject([{id:3, name:'X'}, {id:4, name:'Y'}]));
  
console.log("----------------------------------------");




// 19. Remove Duplicate Numbers
//  Return a new array without duplicate numbers.
//  Input 1: [1, 2, 2, 3]
//  Output 1: [1, 2, 3]
//  Input 2: [4, 4, 4, 5]
//  Output 2: [4, 5]

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log( removeDuplicates( [1, 2, 2, 3]));
console.log( removeDuplicates( [4, 4, 4, 5]));

console.log("----------------------------------------");



// 20. Find Longest Word
//  Return the longest word from an array of strings.
//  Input 1: ['hi', 'hello', 'goodbye']
//  Output 1: 'goodbye'
//  Input 2: ['short', 'longer', 'lengthiest']
//  Output 2

function findLongestWord(arr) {
  let longest = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}
console.log( findLongestWord(['hi', 'hello', 'goodbye']));
console.log( findLongestWord(['short', 'longer', 'lengthiest']));
